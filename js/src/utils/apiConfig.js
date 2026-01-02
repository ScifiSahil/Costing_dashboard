/**
 * ✅ COMPLETE API CONFIG - PRODUCTION READY
 * Location: src/utils/apiConfig.js
 * 
 * Includes:
 * - Group-wise APIs (Production & Sale)
 * - Plant-wise APIs (Production & Sale) 
 * - KPI Targets APIs
 * - All view types (month, day, year)
 */

// ============================================================================
// BASE URL CONFIGURATION
// ============================================================================
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

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Convert month number (1-12) to API format (Jan, Feb, etc.)
 */
export const getMonthNameForApi = (monthNum) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months[monthNum - 1] || "Jan";
};

// ============================================================================
// ⭐⭐⭐ COMPLETE API ENDPOINTS ⭐⭐⭐
// ============================================================================
export const API_ENDPOINTS = {

  // ==========================================================================
  // AUTHENTICATION & USER INFO
  // ==========================================================================
  PLANT_CODE: `${API_BASE_URL}/internal/plant_code`,
  COST_CENTER_MASTER: `${API_BASE_URL}/api/v1/collection/cost_center_master`,

  // ==========================================================================
  // MACHINE ENTRIES (Power, Fuel, Subcontract)
  // ==========================================================================
  MACHINE_ENTRY: (type, plantCode) =>
    `${API_BASE_URL}/internal/machine_entry?type=${type}&plant_code=${plantCode}&view=month`,

  // ==========================================================================
  // ⭐ KPI TARGETS API
  // ==========================================================================
  
  // Default KPI Targets (month view)
  KPI_TARGETS: `${API_BASE_URL}/internal/cost_kpi_entry?view=month`,

  // Filtered KPI Targets with parameters
  KPI_TARGETS_FILTERED: (filters = {}) => {
    let url = `${API_BASE_URL}/internal/cost_kpi_entry?view=month`;

    if (filters.year) {
      url += `&year=${filters.year}`;
    }
    if (filters.fromMonth) {
      url += `&from_month=${getMonthNameForApi(filters.fromMonth)}`;
    }
    if (filters.toMonth) {
      url += `&to_month=${getMonthNameForApi(filters.toMonth)}`;
    }
    if (filters.prodOrSale) {
      url += `&prod_or_sale=${filters.prodOrSale}`;
    }
    if (filters.kpiName) {
      url += `&kpi_name=${encodeURIComponent(filters.kpiName)}`;
    }
    if (filters.plantCode) {
      url += `&plant_code=${filters.plantCode}`;
    }
    if (filters.type) {
      url += `&type=${filters.type}`;
    }

    return url;
  },

  // ==========================================================================
  // ⭐⭐⭐ PRODUCTION COST - GROUP LEVEL (ALL PLANTS COMBINED) ⭐⭐⭐
  // ==========================================================================
  
  PROD_COST: `${API_BASE_URL}/internal/frg_grp_prod_cpt`, // Main endpoint
  
  // Month View - Default (Last 6 months)
  PROD_COST_DEFAULT: `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month`,

  // Month View - Custom Range
  PROD_COST_CUSTOM: (year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Default
  PROD_COST_DAY: `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=day`,

  // Day View - Custom Range
  PROD_COST_DAY_CUSTOM: (year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=day&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Year View - Default (Current year)
  PROD_COST_YEAR: `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=year`,

  // Year View - Specific Year
  PROD_COST_YEAR_CUSTOM: (year) =>
    `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=year&year=${year}`,

  // ==========================================================================
  // ⭐⭐⭐ PRODUCTION COST - PLANT WISE (SPECIFIC PLANT) ⭐⭐⭐
  // ==========================================================================
  
  // Month View - Default (Last 6 months)
  PROD_PLANTWISE_DEFAULT: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}`,

  // Month View - Custom Range
  PROD_PLANTWISE_CUSTOM: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Default
  PROD_PLANTWISE_DAY: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=day&plantcode=${plantcode}`,

  // Day View - Custom Range
  PROD_PLANTWISE_DAY_CUSTOM: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=day&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Detail Mode with Pagination
  PROD_PLANTWISE_DAY_DETAIL: (plantcode, page = 1, pageSize = 300) =>
    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=day&plantcode=${plantcode}&mode=detail&page=${page}&page_size=${pageSize}`,

  // Year View - Default (Current year)
  PROD_PLANTWISE_YEAR: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=year&plantcode=${plantcode}`,

  // Year View - Specific Year
  PROD_PLANTWISE_YEAR_CUSTOM: (plantcode, year) =>
    `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=year&plantcode=${plantcode}&year=${year}`,

  // Generic (for backward compatibility)
  PROD_PLANTWISE: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // ==========================================================================
  // ⭐⭐⭐ SALE COST - GROUP LEVEL (ALL PLANTS COMBINED) ⭐⭐⭐
  // ==========================================================================
  
  SALE_COST: `${API_BASE_URL}/internal/frg_grp_sale_cpt`, // Main endpoint
  COST_PER_TON_SALE: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month`, // Alias
  
  // Month View - Default (Last 6 months)
  SALE_COST_DEFAULT: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month`,

  // Month View - Custom Range
  SALE_COST_CUSTOM: (year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Default
  SALE_COST_DAY: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=day`,

  // Day View - Custom Range
  SALE_COST_DAY_CUSTOM: (year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=day&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Year View - Default (Current year)
  SALE_COST_YEAR: `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=year`,

  // Year View - Specific Year
  SALE_COST_YEAR_CUSTOM: (year) =>
    `${API_BASE_URL}/internal/frg_grp_sale_cpt?view=year&year=${year}`,

  // ==========================================================================
  // ⭐⭐⭐ SALE COST - PLANT WISE (SPECIFIC PLANT) ⭐⭐⭐
  // ==========================================================================
  
  // Month View - Default (Last 6 months)
  SALE_PLANTWISE_DEFAULT: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}`,

  // Month View - Custom Range
  SALE_PLANTWISE_CUSTOM: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Default
  SALE_PLANTWISE_DAY: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=day&plantcode=${plantcode}`,

  // Day View - Custom Range
  SALE_PLANTWISE_DAY_CUSTOM: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=day&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // Day View - Detail Mode with Pagination
  SALE_PLANTWISE_DAY_DETAIL: (plantcode, page = 1, pageSize = 300) =>
    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=day&plantcode=${plantcode}&mode=detail&page=${page}&page_size=${pageSize}`,

  // Year View - Default (Current year)
  SALE_PLANTWISE_YEAR: (plantcode) =>
    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=year&plantcode=${plantcode}`,

  // Year View - Specific Year
  SALE_PLANTWISE_YEAR_CUSTOM: (plantcode, year) =>
    `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=year&plantcode=${plantcode}&year=${year}`,

  // Generic (for backward compatibility)
  SALE_PLANTWISE: (plantcode, year, fromMonth, toMonth) => {
    const fromMonthName = getMonthNameForApi(fromMonth);
    const toMonthName = getMonthNameForApi(toMonth);
    return `${API_BASE_URL}/internal/frg_plt_sale_cpt?view=month&plantcode=${plantcode}&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;
  },

  // ==========================================================================
  // LEGACY / OTHER ENDPOINTS
  // ==========================================================================
  DETAILS: `${API_BASE_URL}/kalyani.iot/costing`,
};

// ============================================================================
// DEBUG LOGS (Development Only)
// ============================================================================
if (typeof window !== "undefined") {
  console.log("🌐 API Base URL:", API_BASE_URL);
  console.log(
    "🖥️ Environment:",
    window.location.hostname === "localhost" ? "LOCAL DEV" : "PRODUCTION"
  );
  console.log("✅ Production Group APIs: Configured");
  console.log("✅ Production Plant-wise APIs: Configured");
  console.log("✅ Sale Group APIs: Configured");
  console.log("✅ Sale Plant-wise APIs: Configured");
  console.log("✅ KPI Targets API: Configured");
}

// ============================================================================
// EXPORT ALL
// ============================================================================
export default API_ENDPOINTS;