from cdb.objects import Object


class LineMaster(Object):
    __classname__ = "cost_line_master"
    __maps_to__ = "cost_line_master"
    
class MachineEntry(Object):
    __classname__ = "cost_machine_entry"
    __maps_to__ = "cost_machine_entry"
    