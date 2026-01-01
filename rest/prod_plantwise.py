# -*- coding: utf-8 -*-

from cs.platform.web import JsonAPI
from cs.platform.web.root import Internal
from cdb import sqlapi
from datetime import date


class ProdPlantwise(JsonAPI):
    """Production Cost Per Ton - EACH PLANT (day / month / year)."""
    pass


@Internal.mount(app=ProdPlantwise, path="prod_plantwise")
def _mount_app():
    return ProdPlantwise()


DAY_VIEW_TABLE = "cost_prod_day"
MONTH_VIEW_TABLE = "cost_prod_month"
YEAR_VIEW_TABLE = "cost_prod_year"


class ProdPlantwiseHandler:
    """
    Production Cost Per Ton API
    Scope: SINGLE PLANT ONLY
    Mandatory param: plantcode
    """

    def _parse_month(self, m):
        if not m:
            return None

        s = m.strip().lower()
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
            if 1 <= v <= 12:
                return v
        except Exception:
            return None

        return None

    def get_data(self, request):
        try:
            # -------------------------------
            # Validate view
            # -------------------------------
            view = (request.params.get("view") or "").strip().lower()
            if not view:
                return {
                    "status": "error",
                    "message": "view parameter is required (day, month, year)"
                }

            # -------------------------------
            # Validate plantcode
            # -------------------------------
            plantcode = (request.params.get("plantcode") or "").strip()
            if not plantcode:
                return {
                    "status": "error",
                    "message": "plantcode parameter is required"
                }

            if not plantcode.isdigit():
                return {
                    "status": "error",
                    "message": "plantcode must be numeric"
                }

            # -------------------------------
            # Select table
            # -------------------------------
            if view == "day":
                table = DAY_VIEW_TABLE
            elif view == "month":
                table = MONTH_VIEW_TABLE
            elif view == "year":
                table = YEAR_VIEW_TABLE
            else:
                return {
                    "status": "error",
                    "message": "Invalid view value. Allowed: day, month, year"
                }

            # -------------------------------
            # Build SQL
            # -------------------------------
            sql = "SELECT * FROM %s WHERE PLANT = '%s'" % (table, plantcode)

            if view == "month":
                year_raw = (request.params.get("year") or "").strip()
                from_raw = (request.params.get("from_month") or "").strip()
                to_raw = (request.params.get("to_month") or "").strip()

                today = date.today()

                try:
                    year_val = int(year_raw) if year_raw else today.year
                except Exception:
                    return {
                        "status": "error",
                        "message": "Invalid year value"
                    }

                from_val = self._parse_month(from_raw) if from_raw else None
                to_val = self._parse_month(to_raw) if to_raw else None

                # Default last 6 months
                if from_val is None or to_val is None:
                    current_month = today.month if year_val == today.year else 12
                    to_val = current_month
                    from_val = current_month - 5
                    if from_val < 1:
                        from_val = 1

                if from_val < 1 or from_val > 12 or to_val < 1 or to_val > 12:
                    return {
                        "status": "error",
                        "message": "Month value must be between 1 and 12"
                    }

                if from_val > to_val:
                    from_val, to_val = to_val, from_val

                sql = (
                    "SELECT * FROM %s "
                    "WHERE PLANT = '%s' "
                    "AND YEAR_NO = %d "
                    "AND MONTH_NO BETWEEN %d AND %d "
                    "ORDER BY YEAR_NO, MONTH_NO, COST_HEAD"
                ) % (table, plantcode, year_val, from_val, to_val)

            elif view == "year":
                sql = (
                    "SELECT * FROM %s "
                    "WHERE PLANT = '%s' "
                    "ORDER BY YEAR_NO, COST_HEAD"
                ) % (table, plantcode)

            else:  # day
                sql = (
                    "SELECT * FROM %s "
                    "WHERE PLANT = '%s' "
                    "ORDER BY TRAN_DATE, COST_HEAD"
                ) % (table, plantcode)

            # -------------------------------
            # Execute SQL
            # -------------------------------
            try:
                rs = sqlapi.RecordSet2(sql=sql)
            except Exception as db_err:
                return {
                    "status": "error",
                    "message": "Database query failed",
                    "detail": str(db_err),
                    "sql": sql
                }

            # -------------------------------
            # Build response
            # -------------------------------
            data = []
            for row in rs:
                record = {}
                for col in row.keys():
                    val = row.get(col)
                    if hasattr(val, "isoformat"):
                        record[col] = val.isoformat()
                    else:
                        record[col] = val
                data.append(record)

            return {
                "status": "success",
                "endpoint": "prod_plantwise",
                "plantcode": plantcode,
                "view": view,
                "table": table,
                "count": len(data),
                "data": data
            }

        except Exception as e:
            # -------------------------------
            # Catch-all safety net
            # -------------------------------
            return {
                "status": "error",
                "message": "Unexpected server error",
                "detail": str(e)
            }


@ProdPlantwise.path(model=ProdPlantwiseHandler, path="")
def _path():
    return ProdPlantwiseHandler()


@ProdPlantwise.json(model=ProdPlantwiseHandler, request_method="GET")
def _json(model, request):
    return model.get_data(request)
