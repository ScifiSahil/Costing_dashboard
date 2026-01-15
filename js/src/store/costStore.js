import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_ENDPOINTS, getMonthNameForApi } from "../utils/apiConfig";

// ============================================================================
// ⭐⭐⭐ ENHANCED KPI NAME MAPPING (Backend → Frontend) ⭐⭐⭐
// ============================================================================
const API_BASE_URL = "https://ktflceprd.kalyanicorp.com/";
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
  subcontract: "Sub Contract",

  // Repair & Maintenance
  "repair and Maintanance": "Repair & Maintenance",
  "repair and maintenance": "Repair & Maintenance",
  "repair & maintenance": "Repair & Maintenance",
  "Repair & Maintenance": "Repair & Maintenance",
  "repair and maintanance": "Repair & Maintenance",

  // Machine Hire Charges
  "machine hire charges": "Machine Hire Charges",
  "Machine Hire Charges": "Machine Hire Charges",

  // Establishment Expenses
  "Establishment Exp": "Establishment Exp",
  "Establishment Expenses": "Establishment Exp",
  "establishment expenses": "Establishment Exp",
  "eastablishment expenses": "Establishment Exp",
  "eastablishment Expenses": "Establishment Exp",

  // Packing
  packing: "Packing",
  Packing: "Packing",

  // Freight
  freight: "Freight",
  Freight: "Freight",

  // Raw Material
  "Raw Material": "Raw Material",
  "raw material": "Raw Material",
  "Raw Material Cost": "Raw Material",
  "raw material cost": "Raw Material",

  // Employee Cost
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
// TYPE MAPPING
// ============================================================================
const TYPE_MAPPING = {
  Forging: "ALL_FRG",
  Machining: "ALL_MCH",
  "Heat Treatment": "ALL_HT",
  ALL: null,
};

// ============================================================================
// PLANT CODE MAPPING
// ============================================================================
const PLANT_CODE_MAPPING = {
  // 🔥 Original mappings (kept for backward compatibility)
  Mundhwa: "2001",
  "Ranjangaon E-84": "2002",
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

  // 🔥 NEW: UI location name mappings (for costscreener.jsx locations)
  Ranjangaon: "2002", // Maps to Ranjangaon E-84
  "Ranjangaon-2": "2101", // Maps to Transmission Ranjangaon
  Baramati: "2102", // Maps to Transmission Baramati
  Gujrat: "2026", // Maps to Gujarat (note UI spelling: "Gujrat")
  Khed: "2021", // Maps to Khed-1
  "Ambhethan-1": "2022", // Same as Ambethan-1
  "Ambhethan-2": "2023", // Same as Ambethan-2

  // 🔥 Additional short codes (optional, if needed by UI)
  RGN: "2002",
  "RGN-2": "2101",
  MUN: "2001",
  BRM: "2102",
  BWD: "2025",
  GUT: "2026",
  CHK: "2020",
  KHD: "2021",
  AMB1: "2022",
  AMB2: "2023",
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
  if (typeof codeString !== "string") {
    return { fuel: [], power: [], subcontract: [] };
  }

  const codes = codeString
    .split(",")
    .map((c) => String(c).trim().toUpperCase())
    .filter(Boolean);

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

  generateKey(
    viewType,
    viewMode,
    location,
    fromMonth,
    fromYear,
    toMonth,
    toYear,
    useDefault = false
  ) {
    if (useDefault) {
      return `${viewType}-${viewMode}-${location}-DEFAULT`;
    }

    return `${viewType}-${viewMode}-${location}-${fromMonth}-${fromYear}-${toMonth}-${toYear}`;
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

// 🔥 Utility: format date to YYYY-MM-DD (for DAY custom API)
const formatDate = (year, month, day) => {
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
};

// ============================================================================
// ZUSTAND STORE
// ============================================================================
const useCostStore = create(
  persist(
    (set, get) => ({
      // ====================================================================
      // THEME & VIEW STATE
      // ====================================================================
      selectedTheme: "ocean",
      setSelectedTheme: (theme) => set({ selectedTheme: theme }),
      // 🔥 ADD BELOW
      isDefaultView: true,
      setIsDefaultView: (val) => set({ isDefaultView: val }),
      viewType: "production",
      setViewType: (view) => {
        console.log(`🔄 Switching view to: ${view}`);
        set({ viewType: view, apiData: [], apiLoading: true });
        const { monthRange, currentYear } = get();
        get().fetchCostData(
          monthRange.fromMonth,
          monthRange.fromYear,
          monthRange.toMonth,
          monthRange.toYear,
          view,
          true
        );
      },
      selectedDayFrom: 1,
      selectedDayTo: new Date().getDate(),

      setSelectedDayRange: (from, to) =>
        set({
          selectedDayFrom: from,
          selectedDayTo: to,
        }),
      // 🔥 NEW: VIEW MODE (month | day)
      viewMode: "month",
      setViewMode: (mode) => {
        const today = new Date();

        if (mode === "day") {
          set({
            viewMode: "day",
            selectedDayFrom: 1,
            selectedDayTo: today.getDate(),
            monthRange: {
              fromMonth: today.getMonth() + 1,
              toMonth: today.getMonth() + 1,
              fromYear: today.getFullYear(),
              toYear: today.getFullYear(),
            },
            isDefaultView: true,
            apiLoading: true,
          });

          // 🔥 DEFAULT DAY API (MTD)
          get().fetchCostData(
            today.getMonth() + 1,
            today.getFullYear(),
            today.getMonth() + 1,
            today.getFullYear(),
            get().viewType,
            true
          );
        } else {
          set({ viewMode: mode });
        }
      },

      selectedDay: null,

      setSelectedDay: (day) =>
        set(() => ({
          selectedDay: day,
        })),

      // ====================================================================
      // FILTER STATE
      // ====================================================================
      selectedLocation: "All",
      setSelectedLocation: (location) => {
        console.log(`📍 Location changed to: ${location}`);

        const plantCode = PLANT_CODE_MAPPING[location] || null;

        set({
          selectedLocation: location,
          selectedPlantCode: plantCode,
          apiData: [],
          apiLoading: true,
        });

        const { monthRange, viewType } = get();

        // 🔥 UPDATED: Pass useDefaultApi flag
        const useDefaultApi = location === "All" && !get().selectedType;

        get().fetchCostData(
          monthRange.fromMonth,
          monthRange.fromYear,
          monthRange.toMonth,
          monthRange.toYear,
          viewType,
          useDefaultApi
        );
      },

      selectedPlantCode: null,

      selectedType: null,
      setSelectedType: (type) => {
        console.log(`🏭 Type changed to: ${type}`);

        const mappedType = TYPE_MAPPING[type];

        set({
          selectedType: mappedType,
          selectedLocation: type === "ALL" ? "All" : get().selectedLocation,
          selectedPlantCode: type === "ALL" ? null : get().selectedPlantCode,
          apiData: [],
          apiLoading: true,
          isDefaultView: true, // 🔥 ADD THIS LINE
        });

        const { monthRange, viewType } = get();

        // 🔥 ALWAYS default API (NO FILTERS)
        const useDefaultApi = true;

        get().fetchCostData(
          monthRange.fromMonth,
          monthRange.fromYear,
          monthRange.toMonth,
          monthRange.toYear,
          viewType,
          true
        );
      },

      // ====================================================================
      // DATE RANGE STATE
      // ====================================================================
      currentYear: new Date().getFullYear(),
      setCurrentYear: (year) => set({ currentYear: year }),

      monthRange: {
        fromMonth: 1,
        fromYear: new Date().getFullYear(),
        toMonth: new Date().getMonth() + 1,
        toYear: new Date().getFullYear(),
      },

      setMonthRange: (fromMonth, fromYear, toMonth, toYear) => {
        const currentYear = get().currentYear || new Date().getFullYear();

        const safeFromYear =
          typeof fromYear === "number" ? fromYear : currentYear;
        const safeToYear = typeof toYear === "number" ? toYear : currentYear;

        console.log(
          `📅 Month range FIXED: ${fromMonth}/${safeFromYear} → ${toMonth}/${safeToYear}`
        );

        set({
          monthRange: {
            fromMonth,
            fromYear: safeFromYear,
            toMonth,
            toYear: safeToYear,
          },
        });
      },

      currentPeriodMonth: new Date().getMonth() + 1,

      // ====================================================================
      // API STATE
      // ====================================================================
      apiData: [],
      apiLoading: true,
      apiError: null,
      loadingProgress: 0,

      // ====================================================================
      // KPI TARGETS
      // ====================================================================
      kpiTargets: {},
      targetLoading: false,

      fetchKpiTargets: async () => {
        try {
          console.log("🎯 Fetching KPI targets (Plant-aware API)...");
          set({ targetLoading: true });

          const { viewType, selectedPlantCode } = get();

          const prodOrSale = viewType === "production" ? "Production" : "Sale";
          const plantCode = selectedPlantCode ? selectedPlantCode : "NULL";

          const apiUrl =
            `${API_BASE_URL}/internal/cost_kpi_entry` +
            `?view=month` +
            `&prod_or_sale=${prodOrSale}` +
            `&plant_code=${plantCode}`;

          console.log("📡 [KPI Targets] Fetching from:", apiUrl);

          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const result = await response.json();

          if (result.status === "success" && Array.isArray(result.data)) {
            const targetsMap = {};

            result.data.forEach((item) => {
              if (!item.kpi_name) return;

              const normalizedKpiName = normalizeKpiName(item.kpi_name);

              // 🔥 cost_value = TARGET
              if (item.cost_value != null && !isNaN(item.cost_value)) {
                targetsMap[normalizedKpiName] = Number(item.cost_value);
              }
            });

            console.log("✅ [KPI Targets] Loaded targets:", targetsMap);

            set({
              kpiTargets: targetsMap,
              targetLoading: false,
            });

            return targetsMap;
          }

          console.warn("⚠️ No KPI target data found");
          set({ kpiTargets: {}, targetLoading: false });
          return null;
        } catch (error) {
          console.error("❌ Error fetching KPI targets:", error);
          set({ targetLoading: false, kpiTargets: {} });
          return null;
        }
      },

      // ====================================================================
      // 🔥🔥🔥 UPDATED FETCH COST DATA WITH DEFAULT API SUPPORT 🔥🔥🔥
      // ====================================================================
      fetchCostData: async (
        fromMonth,
        fromYear,
        toMonth,
        toYear,
        viewType,
        useDefaultApi = false,
        dayRange = null
      ) => {
        if (currentAbortController) {
          console.log("⚠️ Aborting previous request...");
          currentAbortController.abort();
        }

        currentAbortController = new AbortController();

        try {
          const { selectedLocation, selectedPlantCode, selectedType } = get();

          // 🔥 Generate cache key with useDefaultApi flag
          const { viewMode } = get();

          const cacheKey = cacheManager.generateKey(
            viewType,
            viewMode,
            selectedLocation || "All Plants",
            fromMonth,
            fromYear,
            toMonth,
            toYear,
            useDefaultApi
          );

          // ⭐⭐⭐ CACHE HIT SECTION ⭐⭐⭐
          const cachedData = cacheManager.get(cacheKey);
          if (cachedData) {
            console.log("✅ Using cached data");

            set({
              apiData: cachedData,
              apiLoading: false,
            });

            // 🔥 Target sirf MONTH view ke liye
if (get().viewMode !== "day") {
  await get().fetchKpiTargets();
}

            console.log("✅ Cached data loaded, targets fetched separately");
            return;
          }

          set({ apiLoading: true, apiError: null, loadingProgress: 10 });

          let apiUrl;

          // 🔥🔥🔥 NEW LOGIC: Use default base API or custom API 🔥🔥🔥
       if (useDefaultApi) {
  // 🔥 DEFAULT APIs
  if (viewMode === "day") {
    // ✅ PLANT SELECTED
    if (selectedPlantCode) {
      apiUrl = `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=day&plantcode=${selectedPlantCode}&range=mtd`;
      console.log("📆 DAY DEFAULT PLANT API (MTD)");
    }
    // ✅ GROUP LEVEL
    else {
      apiUrl = `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=day&range=mtd`;
      console.log("📆 DAY DEFAULT GROUP API (MTD)");
    }
  } else {
    apiUrl = `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month`;
    console.log("📅 MONTH DEFAULT API");
  }
}

 else {
            // 🔥 CUSTOM RANGE
            const from = `${fromYear}-${String(fromMonth).padStart(2, "0")}`;
            const to = `${toYear}-${String(toMonth).padStart(2, "0")}`;

            if (
  viewMode === "day" &&
  !useDefaultApi &&
  dayRange?.fromDay &&
  dayRange?.toDay
) {
  const formatDate = (y, m, d) =>
    `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const fromDate = formatDate(fromYear, fromMonth, dayRange.fromDay);
  const toDate = formatDate(toYear, toMonth, dayRange.toDay);

  apiUrl = selectedPlantCode
    ? `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=day&plantcode=${selectedPlantCode}&from_date=${fromDate}&to_date=${toDate}`
    : `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=day&from_date=${fromDate}&to_date=${toDate}`;

  console.log("📆 DAY CUSTOM DATE API");
} else {
              apiUrl = selectedPlantCode
                ? `${API_BASE_URL}/internal/frg_plt_prod_cpt?view=month&plantcode=${selectedPlantCode}&from_month=${from}&to_month=${to}`
                : `${API_BASE_URL}/internal/frg_grp_prod_cpt?view=month&from_month=${from}&to_month=${to}`;

              console.log("📅 MONTH CUSTOM API");
            }
          }

          console.log(
            `📡 [${String(viewType || "").toUpperCase()}] Fetching API:`,
            apiUrl
          );

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

          // ⭐⭐⭐ SUCCESS SECTION ⭐⭐⭐
          if (result.status === "success") {
            const data = result.data;

            const finalData =
              viewMode === "day"
                ? data.map((item) => ({
                    ...item,
                    date: item.tran_date?.split(" ")[0], // YYYY-MM-DD
                    cost_head: normalizeKpiName(item.cost_head),
                    total_amount: Number(item.total_amount || 0),
                  }))
                : data;

            cacheManager.set(cacheKey, finalData);

            console.log(
              `✅ [${String(viewType || "").toUpperCase()}] Loaded ${
                data.length
              } records`
            );

            set({
              apiData: finalData,
              apiLoading: false,
              loadingProgress: 100,
              apiError: null,
            });

            // 🔥 Target sirf MONTH view ke liye
if (get().viewMode !== "day") {
  await get().fetchKpiTargets();
}

            console.log("✅ Fresh data loaded, targets fetched");
          }
          // ⭐⭐⭐ ARRAY RESPONSE SECTION ⭐⭐⭐
          else if (Array.isArray(result)) {
            cacheManager.set(cacheKey, result);

            console.log(
              `✅ [${String(viewType || "").toUpperCase()}] Loaded ${
                result.length
              } records`
            );

            set({
              apiData: result,
              apiLoading: false,
              loadingProgress: 100,
              apiError: null,
            });

            // 🔥 Target sirf MONTH view ke liye
if (get().viewMode !== "day") {
  await get().fetchKpiTargets();
}

            console.log("✅ Array data loaded, targets fetched");
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
        const year = new Date().getFullYear();

        set({
          monthRange: {
            fromMonth: month,
            fromYear: year,
            toMonth: month,
            toYear: year,
          },
          currentPeriodMonth: month,
        });

        return month;
      },

      setCurrentPeriodMonth: (month) => {
        set({ currentPeriodMonth: month });
      },

      setLast12Months: () => {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;
        const currentYear = now.getFullYear();

        const fromMonth = currentMonth === 12 ? 1 : currentMonth;
        const fromYear = currentMonth === 12 ? currentYear : currentYear - 1;

        set({
          monthRange: {
            fromMonth,
            fromYear,
            toMonth: currentMonth,
            toYear: currentYear,
          },
          currentPeriodMonth: currentMonth,
        });

        return {
          fromMonth,
          fromYear,
          toMonth: currentMonth,
          toYear: currentYear,
        };
      },

      setFullYear: () => {
        const year = new Date().getFullYear();

        set({
          monthRange: {
            fromMonth: 1,
            fromYear: year,
            toMonth: 12,
            toYear: year,
          },
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

export { useCostStore, cacheManager, normalizeKpiName };
