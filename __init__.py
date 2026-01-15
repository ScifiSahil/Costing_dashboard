from cdb.objects import Object


class LineMaster(Object):
    __classname__ = "cost_line_master"
    __maps_to__ = "cost_line_master"
    
class MachineEntry(Object):
    __classname__ = "cost_machine_entry"
    __maps_to__ = "cost_machine_entry"
    
    
class CostGlCenter(Object):
    __classname__ = "cost_gl_master"
    __maps_to__ = "cost_gl_master"
    
class CostCenter(Object):
    __classname__ = "cost_center_master"
    __maps_to__ = "cost_center_master"
    
#For all cost param entry and master rates

class MachineEntry(Object):
    __classname__ = "cost_machine_entry"
    __maps_to__ = "cost_machine_entry"

class CostParamRate(Object):
    __classname__ = "cost_param_rate"
    __maps_to__ = "cost_param_rate"

# class CostKpiEntry(Object):
#     __classname__ = "cost_kpi_entry"
#     __maps_to__ = "cost_kpi_entry"
#
# class CostKpiMaster(Object):
#     __classname__ = "cost_kpi_master"
#     __maps_to__ = "cost_kpi_master"
#
# class BudgetMaster(Object):
#     __classname__ = "kln_budget_master"
#     __maps_to__ = "kln_budget_master"