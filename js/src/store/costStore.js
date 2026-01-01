import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_ENDPOINTS, getMonthNameForApi } from "../utils/apiConfig";

// ============================================================================
// ⭐⭐⭐ KPI NAME MAPPING (Backend → Frontend) ⭐⭐⭐
// ============================================================================
const KPI_NAME_MAPPING = {
  // Power
  power: "Power",
  Power: "Power",

  // Consumables
  consumable: "Consumables",
  consumables: "Consumables",
  Consumables: "Consumables",

  // Labour
  labour: "Labour",
  Labor: "Labour",
  Labour: "Labour",

  // Fuel
  fuel: "Fuel",
  Fuel: "Fuel",

  // Sub Contract
  "sub con": "Sub Contract",
  subcon: "Sub Contract",
  "sub contract": "Sub Contract",
  "Sub Contract": "Sub Contract",

  // Repair & Maintenance
  "repair and Maintanance": "Repair & Maintenance",
  "repair and maintenance": "Repair & Maintenance",
  "repair & maintenance": "Repair & Maintenance",
  "Repair & Maintenance": "Repair & Maintenance",

  // Machine Hire Charges
  "machine hire charges": "Machine Hire Charges",
  "Machine Hire Charges": "Machine Hire Charges",

  "Establishment Exp": "Establishment Expenses", // Frontend → API
  "Establishment Expenses": "Establishment Expenses", // API → API (identity)
  "establishment expenses": "Establishment Expenses",
  "eastablishment expenses": "Establishment Expenses",

  // Packing
  packing: "Packing",
  Packing: "Packing",

  // Freight
  freight: "Freight",
  Freight: "Freight",

  "Raw Material": "Raw Material",
  "raw material": "Raw Material",
  "Raw Material Cost": "Raw Material",

  // ⭐ Employee Cost - Add this!
  "employee cost": "Employee Cost",
  "Employee Cost": "Employee Cost",
};

// Helper function to normalize KPI names
const normalizeKpiName = (name) => {
  if (!name) return name;

  const trimmed = name.trim();

  // Direct match (case-sensitive)
  if (KPI_NAME_MAPPING[trimmed]) {
    return KPI_NAME_MAPPING[trimmed];
  }

  // Case-insensitive match
  const lowerName = trimmed.toLowerCase();
  if (KPI_NAME_MAPPING[lowerName]) {
    return KPI_NAME_MAPPING[lowerName];
  }

  // Return original if no mapping found
  return trimmed;
};

// ============================================================================
// PLANT CODE MAPPING
// ============================================================================
const PLANT_CODE_MAPPING = {
  Mundhwa: "2001",
  "Ranjangaon E-84": "2002",
  "Ranjangaon-2": "2101",
  "Transmission Ranjangaon": "2101",
  "Transmission Baramati": "2102",
  Chakan: "2020",
  "Khed-1": "2021",
  "Khed-2": "2027",
  "Ambethan-1": "2022",
  "Ambethan-2": "2023",
  "Ambethan-3": "2028",
  "Baramati KTFL": "2024",
  Bhiwadi: "2025",
  Gujarat: "2026",
  "Heat Treatment": "2081",
  "Inmet Jejuri": "2201",
  "Yokoha Jejuri": "2301",
  Ranjangaon: "2002",
  Khed: "2021",
  Baramati: "2024",
  RGN: "2002",
  "RGN-2": "2101",
  MUN: "2001",
  CHK: "2020",
  KHD: "2021",
  BRM: "2024",
  BWD: "2025",
  GUT: "2026",
  "Ambhethan-1": "2022",
  "Ambhethan-2": "2023",
  "Ambhethan-3": "2028",
};

// ============================================================================
// SUB-PARAMETER CODE MAPPING
// ============================================================================
export const SUB_PARAM_CODE_MAP = {
  Fuel_Diesel: "FD",
  Fuel_LPG: "FL",
  Fuel_CNG: "FC",
  Fuel_Biodiesel: "FB",
  Fuel_CO2: "F2",
  Fuel_PNG: "FP",
  Fuel_Ht: "FH",
  Power_Solar: "PS",
  Power_OpenAccess: "PO",
  Power_RooftopSolar: "PR",
  Power_MCEDCL: "PM",
  Subcontract_MPI: "SM",
  Subcontract_POST_PROCESS: "SP",
  Subcontract_OUTSOURCE: "SO",
};

export const REVERSE_CODE_MAP = Object.fromEntries(
  Object.entries(SUB_PARAM_CODE_MAP).map(([k, v]) => [v, k])
);

export const generateSubParamType = (selectedSubParams) => {
  if (!selectedSubParams || selectedSubParams.length === 0) {
    return null;
  }

  const codes = selectedSubParams
    .map((param) => SUB_PARAM_CODE_MAP[param])
    .filter(Boolean)
    .join(",");

  if (codes.length > 20) {
    console.warn("⚠️ WARNING: sub_param_type exceeded 20 chars, truncating");
    return codes.substring(0, 20);
  }

  return codes || null;
};

export const parseSubParamCodes = (codeString) => {
  if (!codeString) return { fuel: [], power: [], subcontract: [] };

  const codes = codeString.split(",").map((c) => c.trim());

  const result = {
    fuel: [],
    power: [],
    subcontract: [],
  };

  codes.forEach((code) => {
    const fullName = REVERSE_CODE_MAP[code];
    if (!fullName) return;

    if (fullName.startsWith("Fuel_")) {
      result.fuel.push(fullName);
    } else if (fullName.startsWith("Power_")) {
      result.power.push(fullName);
    } else if (fullName.startsWith("Subcontract_")) {
      result.subcontract.push(fullName);
    }
  });

  return result;
};

// ============================================================================
// CACHE MANAGER
// ============================================================================
class CacheManager {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 5 * 60 * 1000;
  }

  generateKey(viewType, location, fromMonth, toMonth, year) {
    return `${viewType}-${location}-${fromMonth}-${toMonth}-${year}`;
  }

  get(key) {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const now = Date.now();
    if (now - cached.timestamp > this.cacheTimeout) {
      this.cache.delete(key);
      return null;
    }

    console.log("✅ Cache HIT:", key);
    return cached.data;
  }

  set(key, data) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
    console.log("💾 Cache SET:", key);
  }

  clear() {
    this.cache.clear();
    console.log("🗑️ Cache cleared");
  }
}

const cacheManager = new CacheManager();
let currentAbortController = null;

// ============================================================================
// ZUSTAND STORE
// ============================================================================
const useCostStore = create(
  persist(
    (set, get) => ({
      // ====================================================================
      // USER PLANT CODE
      // ====================================================================
      userPlantCode: null,
      userPlantCodeLoaded: false,
      userPlantCodeError: null,

      fetchUserPlantCode: async () => {
        const { userPlantCodeLoaded } = get();
        if (userPlantCodeLoaded) {
          const code = get().userPlantCode;
          console.log("✅ Plant code already loaded:", code);
          return code;
        }

        try {
          const apiUrl = API_ENDPOINTS.PLANT_CODE;
          console.log("🔄 Fetching user plant code from:", apiUrl);

          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          console.log("📥 Raw Response:", data);

          if (data.plant_code) {
            const plantCode = String(data.plant_code).trim();
            console.log("✅✅✅ User plant code fetched:", plantCode);

            set({
              userPlantCode: plantCode,
              userPlantCodeLoaded: true,
              userPlantCodeError: null,
            });
            return plantCode;
          } else {
            throw new Error("No plant_code in API response");
          }
        } catch (error) {
          console.error("❌ CRITICAL ERROR fetching plant code:", error);
          set({
            userPlantCodeError: error.message,
            userPlantCodeLoaded: true,
          });
          throw error;
        }
      },

      // ====================================================================
      // COST CENTERS
      // ====================================================================
      costCenters: [],
      costCenterLoaded: false,
      costCenterError: null,

      fetchCostCentersOnce: async () => {
        const { costCenterLoaded, userPlantCode } = get();
        if (costCenterLoaded) {
          console.log(
            "✅ Cost centers already loaded for plant:",
            userPlantCode
          );
          return;
        }

        try {
          let plantCode = userPlantCode;
          if (!plantCode) {
            console.log("⚠️ Plant code not loaded, fetching now...");
            plantCode = await get().fetchUserPlantCode();
          }

          if (!plantCode) {
            throw new Error("❌ FAILED: Unable to determine plant code");
          }

          console.log("🎯 Using Plant Code:", plantCode);

          const url = `${API_ENDPOINTS.COST_CENTER_MASTER}?$filter=plant_code%20eq%20%27${plantCode}%27`;

          console.log("🔄 Fetching cost centers from:", url);
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const data = await response.json();
          console.log("📥 Raw cost center response:", data);

          let centers = [];
          if (data && Array.isArray(data.objects)) {
            centers = data.objects;
          } else if (Array.isArray(data)) {
            centers = data;
          }

          console.log(`✅ Loaded ${centers.length} cost centers`);

          set({
            costCenters: centers,
            costCenterLoaded: true,
            costCenterError: null,
          });
        } catch (error) {
          console.error("❌ Error loading cost centers:", error);
          set({
            costCenterError: error.message,
            costCenterLoaded: true,
            costCenters: [],
          });
        }
      },

      // ====================================================================
      // VIEW TYPE & LOCATION
      // ====================================================================
      viewType: "production",
      selectedLocation: null,
      selectedPlantCode: null,
      selectedType: "ALL",

      setViewType: (type) => {
        console.log("🔄 Changing view type to:", type);
        set({ viewType: type });
      },

      setSelectedLocation: (location) => {
        console.log("📍 Setting location to:", location);

        if (!location || location === "All") {
          set({
            selectedLocation: null,
            selectedPlantCode: null,
          });
          return;
        }

        const plantCode = PLANT_CODE_MAPPING[location];
        if (!plantCode) {
          console.warn(`⚠️ No plant code mapping found for: ${location}`);
        }

        set({
          selectedLocation: location,
          selectedPlantCode: plantCode || null,
        });
      },

      setSelectedType: (type) => {
        console.log("🏭 Setting type to:", type);
        set({ selectedType: type });
      },

      // ====================================================================
      // DATE RANGE
      // ====================================================================
      // currentYear: new Date().getFullYear(),
      currentYear: 2025,

      monthRange: { from: 1, to: 6 },
      currentPeriodMonth: new Date().getMonth() + 1,
      loadingProgress: 0,

      setMonthRange: (from, to) => {
        console.log("📅 Setting month range:", from, "to", to);
        set({ monthRange: { from, to } });
      },

      setCurrentPeriodMonth: (month) => {
        console.log("📍 Setting current period month to:", month);
        set({ currentPeriodMonth: month });
      },

      // ====================================================================
      // THEME
      // ====================================================================
      selectedTheme: "ocean",
      setSelectedTheme: (theme) => {
        console.log("🎨 Changing theme to:", theme);
        set({ selectedTheme: theme });
      },

      // ====================================================================
      // API DATA & LOADING
      // ====================================================================
      apiData: [],
      apiLoading: false,
      apiError: null,

      // ⭐⭐⭐ TARGET SUPPORT ⭐⭐⭐
      kpiTargets: {},
      targetLoading: false,

      // ====================================================================
      // ⭐ FETCH KPI TARGETS WITH NAME NORMALIZATION
      // ====================================================================
      fetchKpiTargets: async () => {
        try {
          const { selectedPlantCode, selectedType, viewType } = get();

          set({ targetLoading: true });

          const prodOrSale = viewType === "production" ? "Production" : "Sale";

          if (!API_ENDPOINTS.KPI_TARGETS) {
            console.warn("⚠️ KPI_TARGETS endpoint not configured");
            set({ targetLoading: false });
            return null;
          }

          let apiUrl = API_ENDPOINTS.KPI_TARGETS + "?latest_only=true";

          if (selectedPlantCode) {
            apiUrl += `&plant_code=${selectedPlantCode}`;
          } else {
            apiUrl += `&plant_code=0`;
          }

          if (selectedType && selectedType !== "ALL") {
            apiUrl += `&type=${selectedType}`;
          } else {
            apiUrl += `&type=ALL`;
          }

          apiUrl += `&prod_or_sale=${prodOrSale}`;

          console.log("🎯 Fetching targets from dedicated API:", apiUrl);

          const response = await fetch(apiUrl);
          const result = await response.json();

          if (result.status === "success" && result.targets) {
            // ⭐⭐⭐ NORMALIZE KPI NAMES ⭐⭐⭐
            const normalizedTargets = {};

            Object.entries(result.targets).forEach(([key, value]) => {
              const normalizedKey = normalizeKpiName(key);
              normalizedTargets[normalizedKey] = value;
              console.log(
                `🔄 Mapped: "${key}" → "${normalizedKey}" = ${value}`
              );
            });

            console.log("✅ Final normalized targets:", normalizedTargets);

            set({
              kpiTargets: normalizedTargets,
              targetLoading: false,
            });

            return normalizedTargets;
          } else {
            console.warn("⚠️ No targets from API, using fallback");
            set({ targetLoading: false });
            return null;
          }
        } catch (error) {
          console.error("❌ Error fetching targets from API:", error);
          console.log("⚠️ Will use fallback targets from main API");
          set({ targetLoading: false });
          return null;
        }
      },

      // ====================================================================
      // FETCH COST DATA (WITH FALLBACK TARGET EXTRACTION)
      // ====================================================================
      fetchCostData: async (fromMonth, toMonth, year, viewType) => {
        if (currentAbortController) {
          console.log("⚠️ Aborting previous request...");
          currentAbortController.abort();
        }

        currentAbortController = new AbortController();

        try {
          const { selectedLocation, selectedPlantCode, selectedType } = get();

          const cacheKey = cacheManager.generateKey(
            viewType,
            selectedLocation || "All Plants",
            fromMonth,
            toMonth,
            year
          );

          const cachedData = cacheManager.get(cacheKey);
          if (cachedData) {
            console.log("✅ Using cached data");

            // ⭐ EXTRACT & NORMALIZE TARGETS FROM CACHE (FALLBACK)
            const targets = {};
            cachedData.forEach((item) => {
              const kpiName = (
                item.kpi_name ||
                item.cost_head ||
                "Other"
              ).trim();
              const normalizedName = normalizeKpiName(kpiName);
              const targetValue = parseFloat(item.target_value);

              if (targetValue && !isNaN(targetValue) && targetValue > 0) {
                targets[normalizedName] = targetValue;
              }
            });

            console.log(
              "✅ Extracted & normalized targets from cache:",
              targets
            );

            set({
              apiData: cachedData,
              apiLoading: false,
              kpiTargets: targets,
            });

            get().fetchKpiTargets();
            return;
          }

          set({ apiLoading: true, apiError: null, loadingProgress: 10 });

          const fromMonthName = getMonthNameForApi(fromMonth);
          const toMonthName = getMonthNameForApi(toMonth);

          let apiUrl;

          if (viewType === "production") {
            apiUrl = `${API_ENDPOINTS.PROD_COST}?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

            if (selectedPlantCode) {
              apiUrl += `&plant_code=${selectedPlantCode}`;
            } else if (selectedType && selectedType !== "ALL") {
              apiUrl += `&type=${selectedType}`;
            }
          } else {
            apiUrl = `${API_ENDPOINTS.SALE_COST}?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

            if (selectedPlantCode) {
              apiUrl += `&plant_code=${selectedPlantCode}`;
            }
          }

          console.log(`📡 [${viewType.toUpperCase()}] Fetching API:`, apiUrl);

          set({ loadingProgress: 30 });

          const timeoutId = setTimeout(() => {
            if (currentAbortController) {
              currentAbortController.abort();
              console.log("⏱️ Request timeout after 30 seconds");
            }
          }, 30000);

          const progressInterval = setInterval(() => {
            set((state) => ({
              loadingProgress: Math.min(state.loadingProgress + 5, 90),
            }));
          }, 500);

          const response = await fetch(apiUrl, {
            signal: currentAbortController.signal,
          });

          clearTimeout(timeoutId);
          clearInterval(progressInterval);
          set({ loadingProgress: 95 });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const result = await response.json();
          console.log("✅ API Response received:", result);

          if (result.status === "success") {
            const data = result.data;

            // ⭐ EXTRACT & NORMALIZE TARGETS (FALLBACK)
            const targets = {};
            data.forEach((item) => {
              const kpiName = (
                item.kpi_name ||
                item.cost_head ||
                "Other"
              ).trim();
              const normalizedName = normalizeKpiName(kpiName);
              const targetValue = parseFloat(item.target_value);

              if (targetValue && !isNaN(targetValue) && targetValue > 0) {
                targets[normalizedName] = targetValue;
              }
            });

            console.log(
              "✅ Extracted & normalized targets (fallback):",
              targets
            );

            cacheManager.set(cacheKey, data);

            console.log(
              `✅ [${viewType.toUpperCase()}] Loaded ${data.length} records`
            );

            set({
              apiData: data,
              apiLoading: false,
              loadingProgress: 100,
              monthRange: { from: fromMonth, to: toMonth },
              apiError: null,
              kpiTargets: targets,
            });

            get().fetchKpiTargets();
          } else if (Array.isArray(result)) {
            // ⭐ EXTRACT & NORMALIZE TARGETS (FALLBACK)
            const targets = {};
            result.forEach((item) => {
              const kpiName = (
                item.kpi_name ||
                item.cost_head ||
                "Other"
              ).trim();
              const normalizedName = normalizeKpiName(kpiName);
              const targetValue = parseFloat(item.target_value);

              if (targetValue && !isNaN(targetValue) && targetValue > 0) {
                targets[normalizedName] = targetValue;
              }
            });

            console.log(
              "✅ Extracted & normalized targets (fallback):",
              targets
            );

            cacheManager.set(cacheKey, result);

            console.log(
              `✅ [${viewType.toUpperCase()}] Loaded ${result.length} records`
            );

            set({
              apiData: result,
              apiLoading: false,
              loadingProgress: 100,
              monthRange: { from: fromMonth, to: toMonth },
              apiError: null,
              kpiTargets: targets,
            });

            get().fetchKpiTargets();
          } else {
            throw new Error(result.message || "Invalid API response format");
          }
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("⚠️ Request was cancelled");
            return;
          }

          console.error("❌ API Error:", err.message, err);
          set({
            apiError: err.message || "Network error occurred",
            apiLoading: false,
            loadingProgress: 0,
            kpiTargets: {},
          });
        } finally {
          currentAbortController = null;
        }
      },

      // ====================================================================
      // TARGET MANAGEMENT
      // ====================================================================

      updateKpiTarget: (kpiName, targetValue) => {
        console.log(`🎯 Manually updating target for ${kpiName}:`, targetValue);
        set((state) => ({
          kpiTargets: {
            ...state.kpiTargets,
            [kpiName]: targetValue,
          },
        }));
      },

      clearTargets: () => {
        console.log("🗑️ Clearing all targets");
        set({ kpiTargets: {} });
      },

      // ====================================================================
      // CACHE & UTILITY
      // ====================================================================
      clearCache: () => {
        cacheManager.clear();
      },

      setCurrentMonth: () => {
        const month = new Date().getMonth() + 1;
        set({
          monthRange: { from: month, to: month },
          currentPeriodMonth: month,
        });
        return month;
      },

      setLast12Months: () => {
        const currentMonth = new Date().getMonth() + 1;
        const from = Math.max(1, currentMonth - 11);
        set({
          monthRange: { from, to: currentMonth },
          currentPeriodMonth: currentMonth,
        });
        return { from, to: currentMonth };
      },

      setFullYear: () => {
        set({
          monthRange: { from: 1, to: 12 },
          currentPeriodMonth: 12,
        });
        return { from: 1, to: 12 };
      },

      // ====================================================================
      // MODALS & UI
      // ====================================================================
      showPowerUnitModal: false,
      setShowPowerUnitModal: (show) => set({ showPowerUnitModal: show }),
    }),
    {
      name: "cost-store-cache",
     partialize: (state) => ({
  selectedTheme: state.selectedTheme,
  viewType: state.viewType,
}),
    }
  )
);

export { useCostStore, cacheManager };

// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// // ✅ CORRECT IMPORT PATH for src/store/costStore.js with utils structure
// import { API_ENDPOINTS, getMonthNameForApi } from "../utils/apiConfig";

// // ✅ COMPLETE PLANT CODE MAPPING (Updated with missing entries)
// const PLANT_CODE_MAPPING = {
//   // Primary Names
//   Mundhwa: "2001",
//   "Ranjangaon E-84": "2002",
//   "Ranjangaon-2": "2101", // ✅ FIXED: Maps to Transmission Ranjangaon
//   "Transmission Ranjangaon": "2101",
//   "Transmission Baramati": "2102",
//   Chakan: "2020",
//   "Khed-1": "2021",
//   "Khed-2": "2027",
//   "Ambethan-1": "2022",
//   "Ambethan-2": "2023",
//   "Ambethan-3": "2028",
//   "Baramati KTFL": "2024",
//   Bhiwadi: "2025",
//   Gujarat: "2026",
//   "Heat Treatment": "2081",
//   "Inmet Jejuri": "2201",
//   "Yokoha Jejuri": "2301",

//   // ✅ ADDED: Alias mappings (Common names)
//   Ranjangaon: "2002", // Alias for Ranjangaon E-84
//   Khed: "2021", // Alias for Khed-1
//   Baramati: "2024", // Alias for Baramati KTFL

//   // ✅ ADDED: Code mappings (For location selection)
//   RGN: "2002", // Ranjangaon
//   "RGN-2": "2101", // Ranjangaon-2
//   MUN: "2001", // Mundhwa
//   CHK: "2020", // Chakan
//   KHD: "2021", // Khed-1
//   BRM: "2024", // Baramati
//   BWD: "2025", // Bhiwadi
//   GUT: "2026", // Gujarat

//   // ✅ ADDED: Alternate spellings
//   "Ambhethan-1": "2022",
//   "Ambhethan-2": "2023",
//   "Ambhethan-3": "2028",
// };

// // ============================================================================
// // SUB-PARAMETER CODE MAPPING (for backward compatibility)
// // ============================================================================
// export const SUB_PARAM_CODE_MAP = {
//   Fuel_Diesel: "FD",
//   Fuel_LPG: "FL",
//   Fuel_CNG: "FC",
//   Fuel_Biodiesel: "FB",
//   Fuel_CO2: "F2",
//   Fuel_PNG: "FP",
//   Fuel_Ht: "FH",
//   Power_Solar: "PS",
//   Power_OpenAccess: "PO",
//   Power_RooftopSolar: "PR",
//   Power_MCEDCL: "PM",
//   Subcontract_MPI: "SM",
//   Subcontract_POST_PROCESS: "SP",
//   Subcontract_OUTSOURCE: "SO",
// };

// export const REVERSE_CODE_MAP = Object.fromEntries(
//   Object.entries(SUB_PARAM_CODE_MAP).map(([k, v]) => [v, k])
// );

// // ============================================================================
// // HELPER FUNCTIONS - Sub-Parameter Mapping
// // ============================================================================

// export const generateSubParamType = (selectedSubParams) => {
//   if (!selectedSubParams || selectedSubParams.length === 0) {
//     return null;
//   }

//   const codes = selectedSubParams
//     .map((param) => SUB_PARAM_CODE_MAP[param])
//     .filter(Boolean)
//     .join(",");

//   if (codes.length > 20) {
//     console.warn("⚠️ WARNING: sub_param_type exceeded 20 chars, truncating");
//     return codes.substring(0, 20);
//   }

//   return codes || null;
// };

// export const parseSubParamCodes = (codeString) => {
//   if (!codeString) return { fuel: [], power: [], subcontract: [] };

//   const codes = codeString.split(",").map((c) => c.trim());

//   const result = {
//     fuel: [],
//     power: [],
//     subcontract: [],
//   };

//   codes.forEach((code) => {
//     const fullName = REVERSE_CODE_MAP[code];
//     if (!fullName) return;

//     if (fullName.startsWith("Fuel_")) {
//       result.fuel.push(fullName);
//     } else if (fullName.startsWith("Power_")) {
//       result.power.push(fullName);
//     } else if (fullName.startsWith("Subcontract_")) {
//       result.subcontract.push(fullName);
//     }
//   });

//   return result;
// };

// // ============================================================================
// // CACHE MANAGER
// // ============================================================================

// class CacheManager {
//   constructor() {
//     this.cache = new Map();
//     this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
//   }

//   generateKey(viewType, location, fromMonth, toMonth, year) {
//     return `${viewType}-${location}-${fromMonth}-${toMonth}-${year}`;
//   }

//   get(key) {
//     const cached = this.cache.get(key);
//     if (!cached) return null;

//     const now = Date.now();
//     if (now - cached.timestamp > this.cacheTimeout) {
//       this.cache.delete(key);
//       return null;
//     }

//     console.log("✅ Cache HIT:", key);
//     return cached.data;
//   }

//   set(key, data) {
//     this.cache.set(key, {
//       data,
//       timestamp: Date.now(),
//     });
//     console.log("💾 Cache SET:", key);
//   }

//   clear() {
//     this.cache.clear();
//     console.log("🗑️ Cache cleared");
//   }
// }

// const cacheManager = new CacheManager();

// let currentAbortController = null;

// // ============================================================================
// // ZUSTAND STORE - Production Ready
// // ============================================================================

// const useCostStore = create(
//   persist(
//     (set, get) => ({
//       // ====================================================================
//       // USER PLANT CODE
//       // ====================================================================
//       userPlantCode: null,
//       userPlantCodeLoaded: false,
//       userPlantCodeError: null,

//       fetchUserPlantCode: async () => {
//         const { userPlantCodeLoaded } = get();
//         if (userPlantCodeLoaded) {
//           const code = get().userPlantCode;
//           console.log("✅ Plant code already loaded:", code);
//           return code;
//         }

//         try {
//           // ✅ USE API_ENDPOINTS instead of hardcoded URL
//           const apiUrl = API_ENDPOINTS.PLANT_CODE;
//           console.log("🔄 Fetching user plant code from:", apiUrl);

//           const response = await fetch(apiUrl);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();
//           console.log("📥 Raw Response:", data);

//           if (data.plant_code) {
//             const plantCode = String(data.plant_code).trim();
//             console.log("✅✅✅ User plant code fetched:", plantCode);

//             set({
//               userPlantCode: plantCode,
//               userPlantCodeLoaded: true,
//               userPlantCodeError: null,
//             });
//             return plantCode;
//           } else {
//             throw new Error("No plant_code in API response");
//           }
//         } catch (error) {
//           console.error("❌ CRITICAL ERROR fetching plant code:", error);
//           set({
//             userPlantCodeError: error.message,
//             userPlantCodeLoaded: true,
//           });
//           throw error;
//         }
//       },

//       // ====================================================================
//       // COST CENTERS
//       // ====================================================================
//       costCenters: [],
//       costCenterLoaded: false,
//       costCenterError: null,

//       fetchCostCentersOnce: async () => {
//         const { costCenterLoaded, userPlantCode } = get();
//         if (costCenterLoaded) {
//           console.log(
//             "✅ Cost centers already loaded for plant:",
//             userPlantCode
//           );
//           return;
//         }

//         try {
//           let plantCode = userPlantCode;
//           if (!plantCode) {
//             console.log("⚠️ Plant code not loaded, fetching now...");
//             plantCode = await get().fetchUserPlantCode();
//           }

//           if (!plantCode) {
//             throw new Error("❌ FAILED: Unable to determine plant code");
//           }

//           console.log("🎯 Using Plant Code:", plantCode);

//           // ✅ USE API_ENDPOINTS
//           const url = `${API_ENDPOINTS.COST_CENTER_MASTER}?$filter=plant_code%20eq%20%27${plantCode}%27`;

//           console.log("📡 API CALL URL:", url);

//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();

//           if (!data.objects) {
//             throw new Error("API did not return objects array");
//           }

//           const costCenters = data.objects || [];

//           console.group("🏷️ COST CENTER MASTER LOADED");
//           console.table(
//             costCenters.map((cc) => ({
//               cost_center: cc.cost_center,
//               plant: cc.plant_code,
//               line: cc.line_name,
//               machine: cc.machine,
//               requires_die: cc.requires_die,
//               requires_vendor: cc.requires_vendor,
//               requires_line: cc.requires_line,
//             }))
//           );
//           console.groupEnd();

//           set({
//             costCenters,
//             costCenterLoaded: true,
//             costCenterError: null,
//           });
//         } catch (error) {
//           console.error("❌ Error fetching cost centers:", error);
//           set({
//             costCenterError: error.message,
//             costCenterLoaded: true,
//           });
//         }
//       },

//       // ====================================================================
//       // POWER ENTRIES
//       // ====================================================================
//       powerEntries: [],
//       powerEntryLoaded: false,
//       powerEntryError: null,

//       fetchPowerEntriesOnce: async () => {
//         const { powerEntryLoaded, userPlantCode } = get();
//         if (powerEntryLoaded) {
//           console.log(
//             "✅ Power entries already loaded for plant:",
//             userPlantCode
//           );
//           return;
//         }

//         try {
//           let plantCode = userPlantCode;
//           if (!plantCode) {
//             console.log("⚠️ Plant code not available, fetching...");
//             plantCode = await get().fetchUserPlantCode();
//           }

//           // ✅ USE API_ENDPOINTS function
//           const url = API_ENDPOINTS.MACHINE_ENTRY("POWER", plantCode);
//           console.log("📡 POWER API CALL:", url);

//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();
//           const entries = data.data || [];

//           console.log(
//             `✅ Loaded ${entries.length} POWER entries for plant ${plantCode}`
//           );

//           set({
//             powerEntries: entries,
//             powerEntryLoaded: true,
//             powerEntryError: null,
//           });
//         } catch (error) {
//           console.error("❌ Error fetching power entries:", error);
//           set({
//             powerEntryError: error.message,
//             powerEntryLoaded: true,
//           });
//         }
//       },

//       // ====================================================================
//       // HT FUEL ENTRIES
//       // ====================================================================
//       htFuelEntries: [],
//       htFuelEntryLoaded: false,
//       htFuelEntryError: null,

//       fetchHTFuelEntriesOnce: async () => {
//         const { htFuelEntryLoaded, userPlantCode } = get();
//         if (htFuelEntryLoaded) {
//           console.log(
//             "✅ HT Fuel entries already loaded for plant:",
//             userPlantCode
//           );
//           return;
//         }

//         try {
//           let plantCode = userPlantCode;
//           if (!plantCode) {
//             plantCode = await get().fetchUserPlantCode();
//           }

//           // ✅ USE API_ENDPOINTS
//           const url = API_ENDPOINTS.MACHINE_ENTRY("HT_FUEL", plantCode);
//           console.log("📡 HT_FUEL API CALL:", url);

//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();
//           const entries = data.data || [];

//           console.log(
//             `✅ Loaded ${entries.length} HT_FUEL entries for plant ${plantCode}`
//           );

//           set({
//             htFuelEntries: entries,
//             htFuelEntryLoaded: true,
//             htFuelEntryError: null,
//           });
//         } catch (error) {
//           console.error("❌ Error fetching HT Fuel entries:", error);
//           set({
//             htFuelEntryError: error.message,
//             htFuelEntryLoaded: true,
//           });
//         }
//       },

//       // ====================================================================
//       // PNG FUEL ENTRIES
//       // ====================================================================
//       pngFuelEntries: [],
//       pngFuelEntryLoaded: false,
//       pngFuelEntryError: null,

//       fetchPNGFuelEntriesOnce: async () => {
//         const { pngFuelEntryLoaded, userPlantCode } = get();
//         if (pngFuelEntryLoaded) {
//           console.log(
//             "✅ PNG Fuel entries already loaded for plant:",
//             userPlantCode
//           );
//           return;
//         }

//         try {
//           let plantCode = userPlantCode;
//           if (!plantCode) {
//             plantCode = await get().fetchUserPlantCode();
//           }

//           // ✅ USE API_ENDPOINTS
//           const url = API_ENDPOINTS.MACHINE_ENTRY("PNG_FUEL", plantCode);
//           console.log("📡 PNG_FUEL API CALL:", url);

//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();
//           const entries = data.data || [];

//           console.log(
//             `✅ Loaded ${entries.length} PNG_FUEL entries for plant ${plantCode}`
//           );

//           set({
//             pngFuelEntries: entries,
//             pngFuelEntryLoaded: true,
//             pngFuelEntryError: null,
//           });
//         } catch (error) {
//           console.error("❌ Error fetching PNG Fuel entries:", error);
//           set({
//             pngFuelEntryError: error.message,
//             pngFuelEntryLoaded: true,
//           });
//         }
//       },

//       // ====================================================================
//       // SUBCONTRACT ENTRIES
//       // ====================================================================
//       subcontractEntries: [],
//       subcontractEntryLoaded: false,
//       subcontractEntryError: null,

//       fetchSubcontractEntriesOnce: async () => {
//         const { subcontractEntryLoaded, userPlantCode } = get();
//         if (subcontractEntryLoaded) {
//           console.log(
//             "✅ Subcontract entries already loaded for plant:",
//             userPlantCode
//           );
//           return;
//         }

//         try {
//           let plantCode = userPlantCode;
//           if (!plantCode) {
//             plantCode = await get().fetchUserPlantCode();
//           }

//           // ✅ USE API_ENDPOINTS
//           const url = API_ENDPOINTS.MACHINE_ENTRY("SUBCONTRACT", plantCode);
//           console.log("📡 SUBCONTRACT API CALL:", url);

//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const data = await response.json();
//           const entries = data.data || [];

//           console.log(
//             `✅ Loaded ${entries.length} SUBCONTRACT entries for plant ${plantCode}`
//           );

//           set({
//             subcontractEntries: entries,
//             subcontractEntryLoaded: true,
//             subcontractEntryError: null,
//           });
//         } catch (error) {
//           console.error("❌ Error fetching Subcontract entries:", error);
//           set({
//             subcontractEntryError: error.message,
//             subcontractEntryLoaded: true,
//           });
//         }
//       },

//       // ====================================================================
//       // COSTING VIEW STATE
//       // ====================================================================
//       viewType: "production",
//       setViewType: (type) => {
//         console.log("🔄 Changing view type to:", type);
//         set({ viewType: type });
//       },

//       apiData: [],
//       apiLoading: false,
//       apiError: null,
//       loadingProgress: 0,

//       currentYear: 2025,
//       monthRange: { from: 8, to: 8 },
//       currentPeriodMonth: 8,

//       setMonthRange: (from, to) => {
//         console.log("📅 Setting month range:", from, "to", to);
//         set({ monthRange: { from, to } });
//       },

//       setCurrentPeriodMonth: (month) => {
//         console.log("📍 Setting current period month to:", month);
//         set({ currentPeriodMonth: month });
//       },

//       selectedTheme: "ocean",
//       setSelectedTheme: (theme) => {
//         console.log("🎨 Changing theme to:", theme);
//         set({ selectedTheme: theme });
//       },

//       selectedLocation: "All",
//       setSelectedLocation: (location) => {
//         console.log("📍 Setting location to:", location);
//         set({ selectedLocation: location });
//       },

//       // ====================================================================
//       // MAIN COST DATA FETCH
//       // ====================================================================
//       fetchCostData: async (fromMonth, toMonth, year, viewType) => {
//         try {
//           // Abort previous request if any
//           if (currentAbortController) {
//             currentAbortController.abort();
//           }
//           currentAbortController = new AbortController();

//           set({ apiLoading: true, apiError: null, loadingProgress: 0 });

//           // Get current state
//           const { selectedLocation, userPlantCode } = get();

//           console.log("📊 fetchCostData called with:", {
//             fromMonth,
//             toMonth,
//             year,
//             viewType,
//             selectedLocation,
//             userPlantCode,
//           });

//           let url;

//           // ====================================================================
//           // DECISION LOGIC: ALL PLANTS vs SPECIFIC PLANT
//           // ====================================================================

//           if (
//             !selectedLocation ||
//             selectedLocation === "All Plants" ||
//             selectedLocation === "All"
//           ) {
//             // ================================================================
//             // SCENARIO A: Fetching data for ALL PLANTS (Combined)
//             // ================================================================
//             console.log("📊 [ALL PLANTS MODE] Fetching combined data...");

//             // Check if this is a "default" request (last 6 months) or custom range
//             const currentDate = new Date();
//             const currentMonth = currentDate.getMonth() + 1;
//             const currentYear_actual = currentDate.getFullYear();

//             // Default range is last 6 months for current year
//             const lastSixMonthsFrom = Math.max(1, currentMonth - 5);
//             const isDefaultRange =
//               (fromMonth === lastSixMonthsFrom &&
//                 toMonth === currentMonth &&
//                 year === currentYear_actual) ||
//               (fromMonth === 1 &&
//                 toMonth === 12 &&
//                 year === currentYear_actual);

//             if (isDefaultRange) {
//               // Use DEFAULT API - returns last 6 months automatically
//               console.log(
//                 `🔄 Using DEFAULT API for ${viewType} (Last 6 months)`
//               );
//               url =
//                 viewType === "production"
//                   ? API_ENDPOINTS.PROD_COST_DEFAULT
//                   : API_ENDPOINTS.SALE_COST_DEFAULT;
//             } else {
//               // Use CUSTOM API - with specific year and month range
//               console.log(
//                 `🔄 Using CUSTOM API for ${viewType} (Year: ${year}, Months: ${fromMonth}-${toMonth})`
//               );
//               url =
//                 viewType === "production"
//                   ? API_ENDPOINTS.PROD_COST_CUSTOM(year, fromMonth, toMonth)
//                   : API_ENDPOINTS.SALE_COST_CUSTOM(year, fromMonth, toMonth);
//             }
//           } else {
//             // ================================================================
//             // SCENARIO B: Fetching data for SPECIFIC PLANT (Plant-wise)
//             // ================================================================
//             console.log(
//               `🏭 [SPECIFIC PLANT MODE] Fetching for: ${selectedLocation}`
//             );

//             // ✅ USE CENTRALIZED PLANT CODE MAPPING
//             let plantcode = PLANT_CODE_MAPPING[selectedLocation] || userPlantCode;

//             if (!plantcode) {
//               throw new Error(
//                 `❌ Plant code not found for location: ${selectedLocation}. ` +
//                 `Available plants: ${Object.keys(PLANT_CODE_MAPPING)
//                   .filter((key) => key.match(/^[A-Z]/)) // Only show primary names
//                   .join(", ")}`
//               );
//             }

//             console.log(
//               `🔑 Plant Code resolved: ${selectedLocation} → ${plantcode}`
//             );

//             // Check if this is a "default" request or custom range
//             const currentDate = new Date();
//             const currentMonth = currentDate.getMonth() + 1;
//             const currentYear_actual = currentDate.getFullYear();

//             const lastSixMonthsFrom = Math.max(1, currentMonth - 5);
//             const isDefaultRange =
//               (fromMonth === lastSixMonthsFrom &&
//                 toMonth === currentMonth &&
//                 year === currentYear_actual) ||
//               (fromMonth === 1 &&
//                 toMonth === 12 &&
//                 year === currentYear_actual);

//             if (isDefaultRange) {
//               // Use DEFAULT PLANT-WISE API - returns last 6 months for this plant
//               console.log(
//                 `🔄 Using DEFAULT API for ${viewType} (Plant: ${plantcode}, Last 6 months)`
//               );
//               url =
//                 viewType === "production"
//                   ? API_ENDPOINTS.PROD_PLANTWISE_DEFAULT(plantcode)
//                   : API_ENDPOINTS.SALE_PLANTWISE_DEFAULT(plantcode);
//             } else {
//               // Use CUSTOM PLANT-WISE API - with year and month range
//               console.log(
//                 `🔄 Using CUSTOM API for ${viewType} (` +
//                   `Plant: ${plantcode}, Year: ${year}, Months: ${fromMonth}-${toMonth})`
//               );
//               url =
//                 viewType === "production"
//                   ? API_ENDPOINTS.PROD_PLANTWISE_CUSTOM(
//                       plantcode,
//                       year,
//                       fromMonth,
//                       toMonth
//                     )
//                   : API_ENDPOINTS.SALE_PLANTWISE_CUSTOM(
//                       plantcode,
//                       year,
//                       fromMonth,
//                       toMonth
//                     );
//             }
//           }

//           // ====================================================================
//           // MAKE THE API CALL
//           // ====================================================================

//           console.log("📡 FINAL API URL:", url);

//           // Progress tracking
//           const progressInterval = setInterval(() => {
//             const current = get().loadingProgress;
//             if (current < 90) {
//               set({ loadingProgress: current + 10 });
//             }
//           }, 30000);

//           // Timeout handling (5 minutes)
//           const timeoutId = setTimeout(() => {
//             clearInterval(progressInterval);
//             currentAbortController.abort();
//             set({
//               apiError:
//                 "Request timeout after 5 minutes. Try selecting a smaller date range.",
//               apiLoading: false,
//               loadingProgress: 0,
//             });
//           }, 300000);

//           // Fetch data
//           const response = await fetch(url, {
//             signal: currentAbortController.signal,
//             headers: {
//               "Content-Type": "application/json",
//             },
//             keepalive: true,
//           });

//           clearTimeout(timeoutId);
//           clearInterval(progressInterval);
//           set({ loadingProgress: 95 });

//           if (!response.ok) {
//             throw new Error(`HTTP ${response.status}: ${response.statusText}`);
//           }

//           const result = await response.json();
//           console.log("✅ API Response received:", result);

//           // ====================================================================
//           // HANDLE RESPONSE
//           // ====================================================================

//           if (result.status === "success") {
//             // API returned { status: "success", data: [...] }
//             const data = result.data;

//             // Generate cache key
//             const cacheKey = cacheManager.generateKey(
//               viewType,
//               selectedLocation || "All Plants",
//               fromMonth,
//               toMonth,
//               year
//             );

//             // Cache the result
//             cacheManager.set(cacheKey, data);

//             console.log(
//               `✅ [${viewType.toUpperCase()}] Loaded ${data.length} records`
//             );

//             set({
//               apiData: data,
//               apiLoading: false,
//               loadingProgress: 100,
//               monthRange: { from: fromMonth, to: toMonth },
//               apiError: null,
//             });
//           } else if (Array.isArray(result)) {
//             // API returned data directly as array
//             // Cache the result
//             const cacheKey = cacheManager.generateKey(
//               viewType,
//               selectedLocation || "All Plants",
//               fromMonth,
//               toMonth,
//               year
//             );
//             cacheManager.set(cacheKey, result);

//             console.log(
//               `✅ [${viewType.toUpperCase()}] Loaded ${result.length} records`
//             );

//             set({
//               apiData: result,
//               apiLoading: false,
//               loadingProgress: 100,
//               monthRange: { from: fromMonth, to: toMonth },
//               apiError: null,
//             });
//           } else {
//             throw new Error(result.message || "Invalid API response format");
//           }
//         } catch (err) {
//           if (err.name === "AbortError") {
//             console.log("⚠️ Request was cancelled");
//             return;
//           }

//           console.error("❌ API Error:", err.message, err);
//           set({
//             apiError: err.message || "Network error occurred",
//             apiLoading: false,
//             loadingProgress: 0,
//           });
//         } finally {
//           currentAbortController = null;
//         }
//       },

//       // ====================================================================
//       // CACHE & UTILITY METHODS
//       // ====================================================================
//       clearCache: () => {
//         cacheManager.clear();
//       },

//       setCurrentMonth: () => {
//         const month = new Date().getMonth() + 1;
//         set({
//           monthRange: { from: month, to: month },
//           currentPeriodMonth: month,
//         });
//         return month;
//       },

//       setLast12Months: () => {
//         const currentMonth = new Date().getMonth() + 1;
//         const from = Math.max(1, currentMonth - 11);
//         set({
//           monthRange: { from, to: currentMonth },
//           currentPeriodMonth: currentMonth,
//         });
//         return { from, to: currentMonth };
//       },

//       setFullYear: () => {
//         set({
//           monthRange: { from: 1, to: 12 },
//           currentPeriodMonth: 12,
//         });
//         return { from: 1, to: 12 };
//       },

//       // ====================================================================
//       // MODALS & UI STATE
//       // ====================================================================
//       showPowerUnitModal: false,
//       setShowPowerUnitModal: (show) => set({ showPowerUnitModal: show }),
//     }),
//     {
//       name: "cost-store-cache",
//       partialize: (state) => ({
//         selectedTheme: state.selectedTheme,
//         currentYear: state.currentYear,
//         viewType: state.viewType,
//       }),
//     }
//   )
// );

// export { useCostStore, cacheManager };

// import { create } from 'zustand';

// const useCostStore = create((set, get) => ({
//   // View Type
//   viewType: 'production',
//   setViewType: (type) => {
//     console.log('🔄 Changing view type to:', type);
//     set({ viewType: type });
//   },

//   // API Data
//   apiData: [],
//   apiLoading: false,
//   apiError: null,

//   // Date Range
//   currentYear: 2025,
//   monthRange: { from: 8, to: 8 }, // Default: Current month (August)
//   currentPeriodMonth: 8, // Current highlighted/selected month

//   // ✅ Month Range Setter
//   setMonthRange: (from, to) => {
//     console.log('📅 Setting month range:', from, 'to', to);
//     set({ monthRange: { from, to } });
//   },

//   // ✅ Current Period Month Setter
//   setCurrentPeriodMonth: (month) => {
//     console.log('📍 Setting current period month to:', month);
//     set({ currentPeriodMonth: month });
//   },

//   // Theme
//   selectedTheme: 'ocean',
//   setSelectedTheme: (theme) => {
//     console.log('🎨 Changing theme to:', theme);
//     set({ selectedTheme: theme });
//   },

//   // Location
//   selectedLocation: 'Ranjangaon',
//   setSelectedLocation: (location) => {
//     console.log('📍 Setting location to:', location);
//     set({ selectedLocation: location });
//   },

//   // ✅ Fetch Cost Data
//   fetchCostData: async (fromMonth, toMonth, year, viewType) => {
//     try {
//       set({ apiLoading: true, apiError: null });

//       const fromMonthName = getMonthNameForApi(fromMonth);
//       const toMonthName = getMonthNameForApi(toMonth);

//       const url = viewType === 'production'
//         ? `https://ktflceprd.kalyanicorp.com/internal/prod_cost?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`
//         : `https://ktflceprd.kalyanicorp.com/internal/cost_per_ton_sale?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}`;

//       console.log(`📡 [${viewType.toUpperCase()}] Fetching API:`, url);
//       console.log(`📅 Range: ${fromMonthName} (${fromMonth}) to ${toMonthName} (${toMonth})`);

//       const response = await fetch(url);
//       const result = await response.json();

//       if (result.status === 'success' && result.data) {
//         console.log(`✅ [${viewType.toUpperCase()}] Loaded ${result.data.length} records`);
//         set({
//           apiData: result.data,
//           apiLoading: false,
//           monthRange: { from: fromMonth, to: toMonth }
//         });
//       } else {
//         console.error(`❌ Failed to fetch ${viewType} data:`, result);
//         set({ apiError: `Failed to fetch ${viewType} data`, apiLoading: false });
//       }
//     } catch (error) {
//       console.error(`❌ [${viewType.toUpperCase()}] Error:`, error);
//       set({ apiError: error.message, apiLoading: false });
//     }
//   },

//   // ✅ Quick helpers for common date ranges
//   setCurrentMonth: () => {
//     const month = new Date().getMonth() + 1;
//     set({
//       monthRange: { from: month, to: month },
//       currentPeriodMonth: month
//     });
//     return month;
//   },

//   setLast12Months: () => {
//     const currentMonth = new Date().getMonth() + 1;
//     const from = Math.max(1, currentMonth - 11);
//     set({
//       monthRange: { from, to: currentMonth },
//       currentPeriodMonth: currentMonth
//     });
//     return { from, to: currentMonth };
//   },

//   setFullYear: () => {
//     set({
//       monthRange: { from: 1, to: 12 },
//       currentPeriodMonth: 12
//     });
//     return { from: 1, to: 12 };
//   },
// }));

// // Helper function to convert month number to API format
// function getMonthNameForApi(monthNum) {
//   const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun',
//                   'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//   return months[monthNum - 1] || 'jan';
// }

// export { useCostStore };
