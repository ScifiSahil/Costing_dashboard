# -*- coding: utf-8 -*-

from cs.platform.web import JsonAPI
from cs.platform.web.root import Internal
from cdb import sqlapi
from datetime import date
import re
import time


class CostKPIEntry(JsonAPI):
    """Internal API: KPI Targets (month-wise) with filters (default last 6 months)."""
    pass


@Internal.mount(app=CostKPIEntry, path="cost_kpi_entry")
def _mount_app():
    return CostKPIEntry()


# ===== CONFIG: your single table name =====
KPI_TABLE = "cost_kpi_entry"


class CostKPIEntryHandler:
    """
    Base:
      /internal/cost_kpi_entry

    Params:
      view=month | year
      year=YYYY (optional)
      from_month / to_month (optional)  -> month view only
      kpi_name (optional)              -> filter by KPI name
      plant_code (optional)            -> numeric plant code OR "NULL"
      type (optional)                  -> e.g. all_frg
      prod_or_sale (optional)          -> Production | Sale
      cost_measurement (optional)      -> e.g. cost per ton
      debug=1 (optional)

    Default month window:
      last 6 months from TODAY (year-boundary supported) using COST_DATE column.
    """

    _BAD_CHARS = re.compile(r"[\x00-\x08\x0B\x0C\x0E-\x1F]")

    def _err(self, message, detail=None, **extra):
        out = {"status": "error", "message": message}
        if detail is not None:
            out["detail"] = detail
        out.update(extra)
        return out

    def _parse_month(self, m):
        if not m:
            return None
        s = str(m).strip().lower()
        if not s:
            return None

        month_map = {
            "1": 1, "01": 1, "jan": 1, "january": 1,
            "2": 2, "02": 2, "feb": 2, "february": 2,
            "3": 3, "03": 3, "mar": 3, "march": 3,
            "4": 4, "04": 4, "apr": 4, "april": 4,
            "5": 5, "05": 5, "may": 5,
            "6": 6, "06": 6, "jun": 6, "june": 6,
            "7": 7, "07": 7, "jul": 7, "july": 7,
            "8": 8, "08": 8, "aug": 8, "august": 8,
            "9": 9, "09": 9, "sep": 9, "sept": 9, "september": 9,
            "10": 10, "oct": 10, "october": 10,
            "11": 11, "nov": 11, "november": 11,
            "12": 12, "dec": 12, "december": 12,
        }
        if s in month_map:
            return month_map[s]

        try:
            v = int(s)
            return v if 1 <= v <= 12 else None
        except Exception:
            return None

    def _json_safe(self, val):
        if val is None:
            return None

        if hasattr(val, "isoformat"):
            try:
                return val.isoformat()
            except Exception:
                val = str(val)

        if isinstance(val, (bytes, bytearray)):
            try:
                val = val.decode("utf-8", "replace")
            except Exception:
                val = str(val)

        if isinstance(val, str):
            val = self._BAD_CHARS.sub("", val)
            return val.encode("utf-8", "replace").decode("utf-8", "replace")

        return val

    def _safe_int(self, raw, field, default=None, min_v=None, max_v=None):
        if raw is None or str(raw).strip() == "":
            return default, None
        try:
            v = int(str(raw).strip())
        except Exception:
            return None, self._err("Invalid %s" % field, detail="%s must be an integer" % field)

        if min_v is not None and v < min_v:
            return None, self._err("Invalid %s" % field, detail="%s must be >= %d" % (field, min_v))
        if max_v is not None and v > max_v:
            return None, self._err("Invalid %s" % field, detail="%s must be <= %d" % (field, max_v))
        return v, None

    def _where_eq_str(self, col, val):
        # escape single quotes
        v = str(val).replace("'", "''")
        return "%s = '%s'" % (col, v)

    def _where_date_yyyymm(self, y, m):
        # Month start/end window using COST_DATE
        # (SQL Server) DATEFROMPARTS(y,m,1) works
        start_expr = "DATEFROMPARTS(%d,%d,1)" % (y, m)
        # end = next month start
        if m == 12:
            end_expr = "DATEFROMPARTS(%d,1,1)" % (y + 1)
        else:
            end_expr = "DATEFROMPARTS(%d,%d,1)" % (y, m + 1)
        return start_expr, end_expr

    def get_data(self, request):
        view = (request.params.get("view") or "").strip().lower()
        if view not in ("month", "year"):
            return self._err("Invalid or missing view parameter", detail="Allowed: month, year")

        debug = (request.params.get("debug") or "").strip().lower() in ("1", "true", "yes")
        today = date.today()
        table = KPI_TABLE

        # -------- optional filters (as per your columns) --------
        kpi_name = (request.params.get("kpi_name") or "").strip()
        plant_code_raw = (request.params.get("plant_code") or "").strip()
        type_val = (request.params.get("type") or "").strip()
        prod_or_sale = (request.params.get("prod_or_sale") or "").strip()
        cost_measurement = (request.params.get("cost_measurement") or "").strip()

        parts = ["1=1"]

        if kpi_name:
            parts.append(self._where_eq_str("kpi_name", kpi_name))

        if type_val:
            parts.append(self._where_eq_str("[type]", type_val))

        if prod_or_sale:
            parts.append(self._where_eq_str("prod_or_sale", prod_or_sale))

        if cost_measurement:
            parts.append(self._where_eq_str("cost_measurement", cost_measurement))

        # plant_code can be numeric, or "NULL"
        if plant_code_raw:
            if plant_code_raw.strip().lower() == "null":
                parts.append("plant_code IS NULL")
            else:
                if not plant_code_raw.isdigit():
                    return self._err("Invalid plant_code", detail="plant_code must be numeric or NULL")
                parts.append("plant_code = %s" % plant_code_raw)

        # -------- time filter --------
        if view == "month":
            year_val, err = self._safe_int(request.params.get("year"), "year", default=today.year, min_v=2000, max_v=2100)
            if err:
                return err

            from_val = self._parse_month(request.params.get("from_month"))
            to_val = self._parse_month(request.params.get("to_month"))

            # Default: last 6 months from today (year boundary supported)
            if from_val is None or to_val is None:
                y2 = today.year
                m2 = today.month
                m1 = m2 - 5
                y1 = y2
                if m1 < 1:
                    m1 = 12 + m1
                    y1 = y2 - 1

                if y1 == y2:
                    start_expr, _ = self._where_date_yyyymm(y2, m1)
                    _, end_expr = self._where_date_yyyymm(y2, m2)
                    # end_expr is start of next month; so we use next month start for m2
                    # rebuild end_expr properly:
                    if m2 == 12:
                        end_expr = "DATEFROMPARTS(%d,1,1)" % (y2 + 1)
                    else:
                        end_expr = "DATEFROMPARTS(%d,%d,1)" % (y2, m2 + 1)

                    parts.append("cost_date >= %s AND cost_date < %s" % (start_expr, end_expr))
                else:
                    # window spans 2 years
                    start_expr, _ = self._where_date_yyyymm(y1, m1)
                    # end = next month start of current month
                    if m2 == 12:
                        end_expr = "DATEFROMPARTS(%d,1,1)" % (y2 + 1)
                    else:
                        end_expr = "DATEFROMPARTS(%d,%d,1)" % (y2, m2 + 1)

                    parts.append("cost_date >= %s AND cost_date < %s" % (start_expr, end_expr))

            else:
                from_val = max(1, min(12, int(from_val)))
                to_val = max(1, min(12, int(to_val)))
                if from_val > to_val:
                    from_val, to_val = to_val, from_val

                # same-year explicit month range using COST_DATE
                start_expr = "DATEFROMPARTS(%d,%d,1)" % (year_val, from_val)
                if to_val == 12:
                    end_expr = "DATEFROMPARTS(%d,1,1)" % (year_val + 1)
                else:
                    end_expr = "DATEFROMPARTS(%d,%d,1)" % (year_val, to_val + 1)

                parts.append("cost_date >= %s AND cost_date < %s" % (start_expr, end_expr))

        else:
            # year view: full year based on COST_DATE
            year_val, err = self._safe_int(request.params.get("year"), "year", default=today.year, min_v=2000, max_v=2100)
            if err:
                return err
            start_expr = "DATEFROMPARTS(%d,1,1)" % year_val
            end_expr = "DATEFROMPARTS(%d,1,1)" % (year_val + 1)
            parts.append("cost_date >= %s AND cost_date < %s" % (start_expr, end_expr))

        condition = " AND ".join(parts)
        debug_sql = "SELECT * FROM %s WHERE %s" % (table, condition)

        # Fetch
        try:
            t0 = time.time()
            rs = sqlapi.RecordSet2(table, condition)
            t1 = time.time()
        except Exception as e:
            return self._err("Database query failed", detail=str(e), sql=debug_sql, table=table, view=view)

        rows = list(rs)

        # Debug mode
        if debug:
            if not rows:
                return {
                    "status": "debug",
                    "endpoint": "cost_kpi_entry",
                    "view": view,
                    "table": table,
                    "sql": debug_sql,
                    "count": 0,
                    "first_row_keys": [],
                    "meta": {"db_ms": int((t1 - t0) * 1000), "py_ms": 0, "total_ms": int((t1 - t0) * 1000)},
                }

            r0 = rows[0]
            keys = list(r0.keys())
            raw = {}
            for k in keys:
                try:
                    raw[str(k)] = self._json_safe(r0.get(k))
                except Exception:
                    raw[str(k)] = None

            return {
                "status": "debug",
                "endpoint": "cost_kpi_entry",
                "view": view,
                "table": table,
                "sql": debug_sql,
                "count": len(rows),
                "first_row_keys": keys,
                "first_row_raw": raw,
                "meta": {"db_ms": int((t1 - t0) * 1000), "py_ms": 0, "total_ms": int((t1 - t0) * 1000)},
            }

        # Convert
        t2 = time.time()
        data = []
        for row in rows:
            rec = {}
            for col in row.keys():
                rec[str(col)] = self._json_safe(row.get(col))
            data.append(rec)
        t3 = time.time()

        return {
            "status": "success",
            "endpoint": "cost_kpi_entry",
            "view": view,
            "table": table,
            "sql": debug_sql,
            "count": len(data),
            "data": data,
            "meta": {
                "db_ms": int((t1 - t0) * 1000),
                "py_ms": int((t3 - t2) * 1000),
                "total_ms": int((t3 - t0) * 1000),
            },
        }


@CostKPIEntry.path(model=CostKPIEntryHandler, path="")
def _path():
    return CostKPIEntryHandler()


@CostKPIEntry.json(model=CostKPIEntryHandler, request_method="GET")
def _json(model, request):
    return model.get_data(request)
