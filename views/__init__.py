from cdb.objects import ViewObject
from cdb.objects import Object


class CostFbl3n(ViewObject):
    __classname__ = "cost_fbl3n"
    __maps_to__ = "cost_fbl3n"

class CostMm60(ViewObject):
    __classname__ = "cost_zmm60"
    __maps_to__ = "cost_zmm60"

class CostZvr035(ViewObject):
    __classname__ = "cost_zvr035"
    __maps_to__ = "cost_zvr035"

class CostMb51(ViewObject):
    __classname__ = "cost_mb51"
    __maps_to__ = "cost_mb51"

class CostCenter(Object):
    __classname__ = "cost_center_master"
    __maps_to__ = "cost_center_master"

class CostGlCenter(Object):
    __classname__ = "cost_gl_master"
    __maps_to__ = "cost_gl_master"

class CostBaseFbl3n(Object):
    __classname__ = "cost_base_fbl3n"
    __maps_to__ = "cost_base_fbl3n"

class CostCoois(Object):
    __classname__ = "cost_coois"
    __maps_to__ = "cost_coois"

class CostProdDay(Object):
    __classname__ = "cost_prod_day"
    __maps_to__ = "cost_prod_day"

class CostTotalAmountYear(Object):
    __classname__ = "cost_totalc_year"
    __maps_to__ = "cost_totalc_year"

class CostTotalAmountDay(Object):
    __classname__ = "cost_totalc_day"
    __maps_to__ = "cost_totalc_day"

class CostTotalTonMonth(Object):
    __classname__ = "cost_totalp_month"
    __maps_to__ = "cost_totalp_month"

class CostTotalTonDay(Object):
    __classname__ = "cost_totalp_day"
    __maps_to__ = "cost_totalp_day"

class CostProdMonthly(Object):
    __classname__ = "cost_prod_month"
    __maps_to__ = "cost_prod_month"

class CostProdYearly(Object):
    __classname__ = "cost_prod_year"
    __maps_to__ = "cost_prod_year"
    
class CostTotalSaleTonMonth(ViewObject):
    __classname__ = "cost_total_ton_forsale_formonth"
    __maps_to__ = "cost_total_ton_forsale_formonth"
    
class CostTotalSaleTonYear(ViewObject):
    __classname__ = "cost_total_ton_forsale_foryear"
    __maps_to__ = "cost_total_ton_forsale_foryear"
    
class CostTotalSaleTonDay(ViewObject):
    __classname__ = "cost_total_ton_forsale_forday"
    __maps_to__ = "cost_total_ton_forsale_forday"
    

class CostPerTonSaleMonth(ViewObject):
    __classname__ = "cost_per_ton_forsale_formonth"
    __maps_to__ = "cost_per_ton_forsale_formonth"
 
 
class CostPerTonSaleDay(ViewObject):
    __classname__ = "cost_per_ton_forsale_forday"
    __maps_to__ = "cost_per_ton_forsale_forday"
    
class CostPerTonSaleYear(ViewObject):
    __classname__ = "cost_per_ton_forsale_foryear"
    __maps_to__ = "cost_per_ton_forsale_foryear"
    
