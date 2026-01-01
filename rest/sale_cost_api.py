from cs.platform.web import JsonAPI
from cs.platform.web.root import Internal
from cdb import sqlapi
from datetime import date


class CostPerTonSale(JsonAPI):
    """Internal API to read cost per ton for sale (day / month / year)."""
    pass


@Internal.mount(app=CostPerTonSale, path="cost_per_ton_sale")
def _mount_app():
    return CostPerTonSale()


SALE_DAY_VIEW_TABLE = "cost_per_ton_forsale_forday"
SALE_MONTH_VIEW_TABLE = "cost_per_ton_forsale_formonth"
SALE_YEAR_VIEW_TABLE = "cost_per_ton_forsale_foryear"


class CostPerTonSaleHandler:
    """
    Handler logic:
    - ?view=day   -> SALE_DAY_VIEW_TABLE
    - ?view=month -> SALE_MONTH_VIEW_TABLE with unified filter:
                     * default (no params): current year, last 6 months
                     * ?year=YYYY&from_month=MMM&to_month=MMM
    - ?view=year  -> SALE_YEAR_VIEW_TABLE
    """

    def _parse_month(self, m):
        """Convert month strings like 'jan', '04', 'september' to int 1..12."""
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
        view = (request.params.get("view") or "").strip().lower()

        if view == "day":
            table = SALE_DAY_VIEW_TABLE
        elif view == "month":
            table = SALE_MONTH_VIEW_TABLE
        elif view == "year":
            table = SALE_YEAR_VIEW_TABLE
        else:
            return {
                "status": "error",
                "message": "Invalid or missing view parameter (day, month, year)",
            }

        sql = "SELECT * FROM %s" % table

        if view == "month":
            year_raw = (request.params.get("year") or "").strip()
            from_raw = (request.params.get("from_month") or "").strip()
            to_raw = (request.params.get("to_month") or "").strip()

            today = date.today()

            # resolve year (default = current year)
            try:
                year_val = int(year_raw) if year_raw else today.year
            except Exception:
                year_val = today.year

            # resolve months (may be None)
            from_val = self._parse_month(from_raw) if from_raw else None
            to_val = self._parse_month(to_raw) if to_raw else None

            # default: last 6 months
            if from_val is None or to_val is None:
                if year_val == today.year:
                    current_month = today.month
                else:
                    current_month = 12

                to_val = current_month
                from_val = current_month - 5
                if from_val < 1:
                    from_val = 1

            # clamp to 1..12
            if from_val < 1:
                from_val = 1
            if from_val > 12:
                from_val = 12
            if to_val < 1:
                to_val = 1
            if to_val > 12:
                to_val = 12

            # ensure from <= to
            if from_val > to_val:
                tmp = from_val
                from_val = to_val
                to_val = tmp

            # final SQL WITHOUT ORDER BY
            sql = (
                "SELECT * FROM %s "
                "WHERE YEAR_NO = %d "
                "AND MONTH_NO BETWEEN %d AND %d"
            ) % (table, year_val, from_val, to_val)

        try:
            rs = sqlapi.RecordSet2(sql=sql)
        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching data",
                "detail": str(e),
                "sql": sql,
            }

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
            "view": view,
            "table": table,
            "sql": sql,
            "count": len(data),
            "data": data,
        }


@CostPerTonSale.path(model=CostPerTonSaleHandler, path="")
def _path():
    return CostPerTonSaleHandler()


@CostPerTonSale.json(model=CostPerTonSaleHandler, request_method="GET")
def _json(model, request):
    return model.get_data(request)
