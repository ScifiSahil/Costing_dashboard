/**

* ✅ COMPLETE API CONFIG - WITH KPI TARGETS

* Location: src/utils/apiConfig.js

*/
 
// Helper function to get the appropriate base URL

export const getApiBaseUrl = () => {

  if (typeof window === "undefined") {

    return "https://ktflceprd.kalyanicorp.com";

  }
 
  const { hostname, protocol } = window.location;
 
  if (hostname === "localhost" || hostname === "127.0.0.1") {

    return `${protocol}//localhost:8080`;

  }
 
  return "https://ktflceprd.kalyanicorp.com";

};
 
export const API_BASE_URL = getApiBaseUrl();
 
/**

* Helper function - Convert month number to API format

*/

export const getMonthNameForApi = (monthNum) => {

  const months = [

    "Jan",

    "Feb",

    "Mar",

    "Apr",

    "May",

    "Jun",

    "Jul",

    "Aug",

    "Sep",

    "Oct",

    "Nov",

    "Dec",

  ];

  return months[monthNum - 1] || "Jan";

};
 
/**

* ✅ ALL API ENDPOINTS

*/

export const API_ENDPOINTS = {

  // ============================================================================

  // ⭐ MAIN ENDPOINTS (Used by costStore.js)

  // ============================================================================

  PROD_COST: `${API_BASE_URL}/internal/frg_grp_prod_cpt`,

  SALE_COST: `${API_BASE_URL}/internal/frg_grp_sale_cpt`,
 
  // ============================================================================

  // ⭐⭐⭐ NEW: KPI TARGETS API ⭐⭐⭐

  // ============================================================================

  // Default KPI Targets endpoint (all targets)

  KPI_TARGETS: `${API_BASE_URL}/internal/cost_kpi_entry?view=month`,
 
  // KPI Targets with filters

  KPI_TARGETS_FILTERED: (filters = {}) => {

    let url = `${API_BASE_URL}/internal/cost_kpi_entry?view=month`;

    // Add year and month range if provided

    if (filters.year) {

      url += `&year=${filters.year}`;

    }

    if (filters.fromMonth) {

      url += `&from_month=${getMonthNameForApi(filters.fromMonth)}`;

    }

    if (filters.toMonth) {

      url += `&to_month=${getMonthNameForApi(filters.toMonth)}`;

    }

    // Add prod_or_sale filter (Production/Sale)

    if (filters.prodOrSale) {

      url += `&prod_or_sale=${filters.prodOrSale}`;

    }

    // Add specific KPI name filter

    if (filters.kpiName) {

      url += `&kpi_name=${encodeURIComponent(filters.kpiName)}`;

    }

    // Add plant code filter

    if (filters.plantCode) {

      url += `&plant_code=${filters.plantCode}`;

    }

    return url;

  },
 
  // ============================================================================

  // COST CENTER & PLANT CODE

  // ============================================================================

  COST_CENTER_MASTER: `${API_BASE_URL}/api/v1/collection/cost_center_master`,

  PLANT_CODE: `${API_BASE_URL}/internal/plant_code`,
 
  // ============================================================================

  // MACHINE ENTRIES

  // ============================================================================

  MACHINE_ENTRY: (type, plantCode) =>

    `${API_BASE_URL}/internal/machine_entry?type=${type}&plant_code=${plantCode}&view=month`,
 
  // ============================================================================

  // PRODUCTION COST - GROUP LEVEL

  // ============================================================================

  PROD_COST_DEFAULT: `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month`,
 
  PROD_COST_CUSTOM: (year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  // ============================================================================

  // PRODUCTION COST - PLANT WISE

  // ============================================================================

  PROD_PLANTWISE_DEFAULT: (plantcode) =>

    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}`,
 
  PROD_PLANTWISE_CUSTOM: (plantcode, year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  PROD_PLANTWISE: (plantcode, year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  // ============================================================================

  // SALE COST - GROUP LEVEL

  // ============================================================================

  SALE_COST_DEFAULT: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month`,

  COST_PER_TON_SALE: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month`,
 
  SALE_COST_CUSTOM: (year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  // ============================================================================

  // SALE COST - PLANT WISE

  // ============================================================================

  SALE_PLANTWISE_DEFAULT: (plantcode) =>

    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}`,
 
  SALE_PLANTWISE_CUSTOM: (plantcode, year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  SALE_PLANTWISE: (plantcode, year, fromMonth, toMonth) => {

    const fromMonthName = getMonthNameForApi(fromMonth);

    const toMonthName = getMonthNameForApi(toMonth);

    return `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

  },
 
  // ============================================================================

  // DETAILS & OTHER

  // ============================================================================

  DETAILS: `${API_BASE_URL}/kalyani.iot/costing`,

};
 
// Debug logs

if (typeof window !== "undefined") {

  console.log("🌐 API Base URL:", API_BASE_URL);

  console.log(

    "🖥️ Environment:",

    window.location.hostname === "localhost" ? "LOCAL DEV" : "PRODUCTION"

  );

  console.log("📋 KPI Targets API:", API_ENDPOINTS.KPI_TARGETS);

}
 