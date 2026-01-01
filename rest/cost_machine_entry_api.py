from cs.platform.web import JsonAPI
from cs.platform.web.root import Internal
from cdb import sqlapi
from datetime import date, datetime


class MachineEntryAPI(JsonAPI):
    """Internal API for cost_machine_entry CRUD operations."""
    pass


@Internal.mount(app=MachineEntryAPI, path="machine_entry")
def _mount_app():
    return MachineEntryAPI()


TABLE_NAME = "cost_machine_entry"


class MachineEntryHandler:
    """
    Handler for cost_machine_entry operations:
    - GET: Retrieve entries (all or filtered)
    - POST: Create new entry
    - PUT: Update existing entry
    - DELETE: Delete entry
    """

    def get_data(self, request):
        """Retrieve machine entry records."""
        try:
            # Optional filters
            plant_code = request.params.get("plant_code", "").strip()
            line_name = request.params.get("line_name", "").strip()
            machine_name = request.params.get("machine_name", "").strip()
            type_filter = request.params.get("type", "").strip()
            entry_id = request.params.get("id", "").strip()

            # Build SQL query
            sql = f"SELECT * FROM {TABLE_NAME}"
            conditions = []

            if entry_id:
                conditions.append(f"cdb_object_id = '{entry_id}'")
            if plant_code:
                conditions.append(f"plant_code = {plant_code}")
            if line_name:
                conditions.append(f"line_name LIKE '%{line_name}%'")
            if machine_name:
                conditions.append(f"machine_name LIKE '%{machine_name}%'")
            if type_filter:
                conditions.append(f"type = '{type_filter}'")

            if conditions:
                sql += " WHERE " + " AND ".join(conditions)

            sql += " ORDER BY entry_date DESC, cdb_object_id"

            rs = sqlapi.RecordSet2(sql=sql)

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
                "count": len(data),
                "data": data,
                "sql": sql
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error fetching data",
                "detail": str(e)
            }

    def create_data(self, request):
        """Create a new machine entry record."""
        try:
            # Get JSON body
            body = request.json_body

            # Required fields
            required = ["plant_code", "line_name", "machine_name", "type"]
            for field in required:
                if field not in body or not body[field]:
                    return {
                        "status": "error",
                        "message": f"Missing required field: {field}"
                    }

            plant_code = body.get("plant_code")
            line_name = body.get("line_name")
            machine_name = body.get("machine_name")
            entry_type = body.get("type")
            param_value = body.get("param_value", None)

            # Set entry_date to today if not provided
            entry_date = body.get("entry_date")
            if not entry_date:
                entry_date = date.today().isoformat()

            # Build INSERT query
            sql = f"""
                INSERT INTO {TABLE_NAME} 
                (plant_code, line_name, machine_name, type, entry_date, param_value, last_modifies)
                VALUES (
                    {plant_code},
                    '{line_name}',
                    '{machine_name}',
                    '{entry_type}',
                    '{entry_date}',
                    {param_value if param_value is not None else 'NULL'},
                    '{datetime.now().isoformat()}'
                )
            """

            # Execute insert
            sqlapi.execute(sql)

            return {
                "status": "success",
                "message": "Machine entry created successfully",
                "data": {
                    "plant_code": plant_code,
                    "line_name": line_name,
                    "machine_name": machine_name,
                    "type": entry_type,
                    "entry_date": entry_date
                }
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error creating entry",
                "detail": str(e)
            }

    def update_data(self, request):
        """Update an existing machine entry record."""
        try:
            body = request.json_body
            entry_id = body.get("cdb_object_id")

            if not entry_id:
                return {
                    "status": "error",
                    "message": "Missing cdb_object_id for update"
                }

            # Build update fields
            updates = []
            if "plant_code" in body:
                updates.append(f"plant_code = {body['plant_code']}")
            if "line_name" in body:
                updates.append(f"line_name = '{body['line_name']}'")
            if "machine_name" in body:
                updates.append(f"machine_name = '{body['machine_name']}'")
            if "type" in body:
                updates.append(f"type = '{body['type']}'")
            if "param_value" in body:
                val = body["param_value"]
                updates.append(f"param_value = {val if val is not None else 'NULL'}")
            if "entry_date" in body:
                updates.append(f"entry_date = '{body['entry_date']}'")

            # Always update last_modifies
            updates.append(f"last_modifies = '{datetime.now().isoformat()}'")

            if not updates:
                return {
                    "status": "error",
                    "message": "No fields to update"
                }

            sql = f"""
                UPDATE {TABLE_NAME}
                SET {', '.join(updates)}
                WHERE cdb_object_id = '{entry_id}'
            """

            sqlapi.execute(sql)

            return {
                "status": "success",
                "message": "Machine entry updated successfully",
                "cdb_object_id": entry_id
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error updating entry",
                "detail": str(e)
            }

    def delete_data(self, request):
        """Delete a machine entry record."""
        try:
            entry_id = request.params.get("id", "").strip()

            if not entry_id:
                return {
                    "status": "error",
                    "message": "Missing id parameter for delete"
                }

            sql = f"DELETE FROM {TABLE_NAME} WHERE cdb_object_id = '{entry_id}'"
            sqlapi.execute(sql)

            return {
                "status": "success",
                "message": "Machine entry deleted successfully",
                "cdb_object_id": entry_id
            }

        except Exception as e:
            return {
                "status": "error",
                "message": "Error deleting entry",
                "detail": str(e)
            }


@MachineEntryAPI.path(model=MachineEntryHandler, path="")
def _path():
    return MachineEntryHandler()


@MachineEntryAPI.json(model=MachineEntryHandler, request_method="GET")
def _json_get(model, request):
    return model.get_data(request)


@MachineEntryAPI.json(model=MachineEntryHandler, request_method="POST")
def _json_post(model, request):
    return model.create_data(request)


@MachineEntryAPI.json(model=MachineEntryHandler, request_method="PUT")
def _json_put(model, request):
    return model.update_data(request)


@MachineEntryAPI.json(model=MachineEntryHandler, request_method="DELETE")
def _json_delete(model, request):
    return model.delete_data(request)