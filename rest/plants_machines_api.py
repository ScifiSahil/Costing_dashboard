"""
Plants and Machines API - FIXED VERSION
Provides data for KPI Target Entry Form
Paths fixed to match frontend expectations
"""

from cs.platform.web import JsonAPI
from cs.platform.web.root import Internal
from cdb import sqlapi


class PlantsAndMachinesAPI(JsonAPI):
    """API to fetch plants and machines for entry forms"""
    pass


# ============================================================================
# CRITICAL FIX: Mount point name changed to match frontend expectations
# ============================================================================
@Internal.mount(app=PlantsAndMachinesAPI, path="plants_for_entry")  # ← Changed from "plants_machines"
def _mount_app():
    return PlantsAndMachinesAPI()


# ============================================================================
# HANDLER
# ============================================================================

class PlantsAndMachinesHandler:
    """Handler for fetching plants and machines data"""

    def get_plants(self, request):
        """Get list of all plants"""
        try:
            # Try to fetch from plants table - adjust table name as per your schema
            sql = """
            SELECT DISTINCT plant_code, plant_name 
            FROM plants 
            WHERE status = 'ACTIVE' 
            ORDER BY plant_code
            """
            
            try:
                rs = sqlapi.RecordSet2(sql=sql)
                data = []
                for row in rs:
                    data.append({
                        "plant_code": row.get("plant_code"),
                        "plant_name": row.get("plant_name") or row.get("plant_code"),
                    })

                if data:
                    return {
                        "status": "success",
                        "data": data,
                    }
            except:
                pass

            # Fallback: Get plants from cost_prod_month table
            sql_fallback = """
            SELECT DISTINCT plant FROM cost_prod_month 
            ORDER BY plant
            """
            
            rs = sqlapi.RecordSet2(sql=sql_fallback)
            data = []
            for row in rs:
                plant_code = row.get("plant") or row.get("plant_code")
                if plant_code:
                    data.append({
                        "plant_code": plant_code,
                        "plant_name": plant_code,
                    })

            return {
                "status": "success",
                "data": data,
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching plants",
                "detail": str(e),
            }

    def get_machines_for_plant(self, request):
        """Get machines for a specific plant"""
        try:
            plant_code = (request.params.get("plant_code") or "").strip()

            if not plant_code:
                return {
                    "status": "error",
                    "message": "Plant code is required",
                }

            # Try machines table first
            sql = """
            SELECT machine_code, machine_name, line_name, plant_code 
            FROM machines 
            WHERE plant_code = ? AND status = 'ACTIVE'
            ORDER BY line_name, machine_name
            """
            
            try:
                rs = sqlapi.RecordSet2(sql=sql, params=[plant_code])
                data = []
                for row in rs:
                    data.append({
                        "machine_code": row.get("machine_code"),
                        "machine_name": row.get("machine_name"),
                        "line_name": row.get("line_name") or "Unassigned",
                        "plant_code": row.get("plant_code"),
                    })

                if data:
                    return {
                        "status": "success",
                        "data": data,
                    }
            except:
                pass

            # Fallback: Get from cost data tables
            sql_fallback = """
            SELECT DISTINCT machine, line FROM cost_prod_day 
            WHERE plant = ? 
            ORDER BY line, machine
            """
            
            rs = sqlapi.RecordSet2(sql=sql_fallback, params=[plant_code])
            data = []
            for row in rs:
                machine_name = row.get("machine")
                line_name = row.get("line") or "Unassigned"
                
                if machine_name:
                    data.append({
                        "machine_code": machine_name.lower().replace(" ", "_"),
                        "machine_name": machine_name,
                        "line_name": line_name,
                        "plant_code": plant_code,
                    })

            return {
                "status": "success",
                "data": data,
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching machines",
                "detail": str(e),
            }

    def get_all_machines(self, request):
        """Get all machines from all plants"""
        try:
            sql = """
            SELECT machine_code, machine_name, line_name, plant_code 
            FROM machines 
            WHERE status = 'ACTIVE'
            ORDER BY plant_code, line_name, machine_name
            """
            
            try:
                rs = sqlapi.RecordSet2(sql=sql)
                data = []
                for row in rs:
                    data.append({
                        "machine_code": row.get("machine_code"),
                        "machine_name": row.get("machine_name"),
                        "line_name": row.get("line_name") or "Unassigned",
                        "plant_code": row.get("plant_code"),
                    })

                if data:
                    return {
                        "status": "success",
                        "data": data,
                    }
            except:
                pass

            # Fallback
            sql_fallback = """
            SELECT DISTINCT plant, line, machine FROM cost_prod_day 
            ORDER BY plant, line, machine
            """
            
            rs = sqlapi.RecordSet2(sql=sql_fallback)
            data = []
            for row in rs:
                data.append({
                    "machine_code": (row.get("machine") or "").lower().replace(" ", "_"),
                    "machine_name": row.get("machine"),
                    "line_name": row.get("line") or "Unassigned",
                    "plant_code": row.get("plant"),
                })

            return {
                "status": "success",
                "data": data,
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching machines",
                "detail": str(e),
            }

    def get_lines(self, request):
        """Get all production lines"""
        try:
            sql = """
            SELECT DISTINCT line FROM cost_prod_day 
            ORDER BY line
            """
            
            rs = sqlapi.RecordSet2(sql=sql)
            data = []
            for row in rs:
                line_name = row.get("line")
                if line_name:
                    data.append({
                        "line_name": line_name,
                    })

            return {
                "status": "success",
                "data": data,
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching lines",
                "detail": str(e),
            }


# ============================================================================
# ROUTES
# ============================================================================

@PlantsAndMachinesAPI.path(model=PlantsAndMachinesHandler, path="")
def _path():
    return PlantsAndMachinesHandler()


@PlantsAndMachinesAPI.json(model=PlantsAndMachinesHandler, request_method="GET", name="list")
def _get_plants(model, request):
    """GET /internal/plants_for_entry - Get list of plants"""
    return model.get_plants(request)


@PlantsAndMachinesAPI.json(model=PlantsAndMachinesHandler, request_method="GET", name="machines")
def _get_machines_for_plant(model, request):
    """GET /internal/plants_for_entry/machines?plant_code=PLANT01"""
    return model.get_machines_for_plant(request)


@PlantsAndMachinesAPI.json(model=PlantsAndMachinesHandler, request_method="GET", name="all_machines")
def _get_all_machines(model, request):
    """GET /internal/plants_for_entry/all_machines"""
    return model.get_all_machines(request)


@PlantsAndMachinesAPI.json(model=PlantsAndMachinesHandler, request_method="GET", name="lines")
def _get_lines(model, request):
    """GET /internal/plants_for_entry/lines"""
    return model.get_lines(request)