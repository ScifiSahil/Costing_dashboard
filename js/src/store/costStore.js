import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_ENDPOINTS, getMonthNameForApi } from "../utils/apiConfig";

// ============================================================================
// ⭐⭐⭐ ENHANCED KPI NAME MAPPING (Backend → Frontend) ⭐⭐⭐
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
  "packing": "Packing",
  "Packing": "Packing",

  // Freight
  "freight": "Freight",
  "Freight": "Freight",

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
  "Mundhwa": "2001",
  "Ranjangaon E-84": "2002",
  "Transmission Ranjangaon": "2101",
  "Transmission Baramati": "2102",
  "Chakan": "2020",
  "Khed-1": "2021",
  "Khed-2": "2027",
  "Ambethan-1": "2022",
  "Ambethan-2": "2023",
  "Ambethan-3": "2028",
  "Baramati KTFL": "2024",
  "Bhiwadi": "2025",
  "Gujarat": "2026",
  "Heat Treatment": "2081",
  "Inmet Jejuri": "2201",
  "Yokoha Jejuri": "2301"
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
        const TYPE_MAPPING = {
          Forging: "ALL_FRG",
          Machining: "ALL_MCH",
          ALL: null,
        };

        set({
          selectedType: TYPE_MAPPING[type] ?? null,
        });
      },

      // ====================================================================
      // DATE RANGE
      // ====================================================================
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
      // ⭐⭐⭐ FIXED: FETCH KPI TARGETS WITH PROPER FIELD READING ⭐⭐⭐
      // ====================================================================
      fetchKpiTargets: async () => {
        try {
          const {
            selectedPlantCode,
            selectedType,
            viewType,
            currentYear,
            monthRange,
            apiData,
          } = get();

          set({ targetLoading: true });

          console.log("🎯 ========== FETCHING KPI TARGETS ==========");
          console.log("📊 Current Filters:", {
            viewType,
            selectedType,
            selectedPlantCode,
            year: currentYear,
            months: monthRange,
          });

          const prodOrSale = viewType === "production" ? "Production" : "Sale";

          // ⭐ TYPE MAPPING
          let apiType = null;
          if (selectedType && selectedType !== "ALL") {
            apiType = TYPE_MAPPING[selectedType] || selectedType;
            console.log(`🔄 Type Mapping: "${selectedType}" → "${apiType}"`);
          }

          // ⭐ TRY NEW ENDPOINT FIRST (WITH FILTERS)
          if (API_ENDPOINTS.KPI_TARGETS_FILTERED) {
            console.log("✅ Using NEW filtered endpoint");

            const filters = {
              year: currentYear,
              fromMonth: monthRange.from,
              toMonth: monthRange.to,
              prodOrSale: prodOrSale,
            };

            if (selectedPlantCode) {
              filters.plantCode = selectedPlantCode;
              console.log(`📍 Plant Filter: ${selectedPlantCode}`);
            }

            if (apiType) {
              filters.type = apiType;
              console.log(`🏭 Type Filter: ${apiType}`);
            }

            const apiUrl = API_ENDPOINTS.KPI_TARGETS_FILTERED(filters);
            console.log("🌐 Target API URL:", apiUrl);
            console.log("📊 Final Filters:", filters);

            try {
              const response = await fetch(apiUrl);

              if (!response.ok) {
                throw new Error(
                  `HTTP ${response.status}: ${response.statusText}`
                );
              }

              const result = await response.json();
              console.log("✅ KPI Targets API Response:", result);

              // Extract current KPI names from graph data
              const currentKpis = new Set();
              if (apiData && Array.isArray(apiData)) {
                apiData.forEach((item) => {
                  const kpiName = normalizeKpiName(
                    item.kpi_name || item.cost_head || ""
                  );
                  if (kpiName) {
                    currentKpis.add(kpiName);
                  }
                });
              }
              console.log("📊 KPIs in current graph:", Array.from(currentKpis));

              // Process response
              let targetsData = null;

              if (result.status === "success" && Array.isArray(result.data)) {
                targetsData = result.data;
                console.log(
                  `📦 Response Format: Array with ${targetsData.length} entries`
                );
              } else if (result.status === "success" && result.targets) {
                console.log("📦 Response Format: Object with targets");
                const normalizedTargets = {};
                Object.entries(result.targets).forEach(([key, value]) => {
                  const normalizedKey = normalizeKpiName(key);
                  normalizedTargets[normalizedKey] = parseFloat(value);
                  console.log(`  ✓ ${key} → ${normalizedKey} = ₹${value}`);
                });

                // Check matching
                console.log("🔍 Matching with graph data:");
                Object.keys(normalizedTargets).forEach((kpi) => {
                  const hasData = currentKpis.has(kpi);
                  console.log(
                    `  ${hasData ? "✅" : "⚠️"} ${kpi}: ₹${
                      normalizedTargets[kpi]
                    } ${hasData ? "(HAS DATA)" : "(NO DATA)"}`
                  );
                });

                set({
                  kpiTargets: normalizedTargets,
                  targetLoading: false,
                });

                console.log(
                  "✅ KPI Targets loaded (object format):",
                  normalizedTargets
                );
                return normalizedTargets;
              } else if (Array.isArray(result)) {
                targetsData = result;
                console.log(
                  `📦 Response Format: Direct array with ${targetsData.length} entries`
                );
              }

              // ⭐⭐⭐ CRITICAL FIX: Process array format with proper field reading ⭐⭐⭐
              if (targetsData && Array.isArray(targetsData)) {
                console.log(
                  `🔄 Processing ${targetsData.length} target entries...`
                );

                const targets = {};
                const latestTargets = {};
                const matchedTargets = {};
                const unmatchedTargets = {};

                targetsData.forEach((item, index) => {
                  const kpiName = item.kpi_name || item.cost_head || "Other";
                  const normalizedName = normalizeKpiName(kpiName.trim());

                  // ⭐⭐⭐ FIXED: Read cost_value FIRST, then fallback to other fields ⭐⭐⭐
                  const targetValue = parseFloat(
                    item.cost_value ||
                      item.target_per_ton ||
                      item.target_value ||
                      0
                  );

                  const entryDate = new Date(
                    item.cost_date || item.entry_date || item.date || 0
                  );

                  if (index < 5) {
                    console.log(
                      `  [${index}] ${kpiName} → ${normalizedName} = ₹${targetValue}`
                    );
                  }

                  if (targetValue > 0) {
                    if (
                      !latestTargets[normalizedName] ||
                      entryDate > latestTargets[normalizedName].date
                    ) {
                      latestTargets[normalizedName] = {
                        value: targetValue,
                        date: entryDate,
                      };
                    }
                  }
                });

                // Extract values and check matching
                Object.entries(latestTargets).forEach(([kpi, data]) => {
                  targets[kpi] = data.value;

                  if (currentKpis.has(kpi)) {
                    matchedTargets[kpi] = data.value;
                  } else {
                    unmatchedTargets[kpi] = data.value;
                  }
                });

                console.log("\n🔍 ========== MATCHING RESULTS ==========");
                Object.keys(matchedTargets).forEach((kpi) => {
                  console.log(
                    `✅ MATCHED: ${kpi} = ₹${matchedTargets[kpi]} (Will show on graph)`
                  );
                });
                Object.keys(unmatchedTargets).forEach((kpi) => {
                  console.log(
                    `⚠️ UNMATCHED: ${kpi} = ₹${unmatchedTargets[kpi]} (No graph data)`
                  );
                });

                console.log("\n📊 ========== SUMMARY ==========");
                console.log(`Total Targets: ${Object.keys(targets).length}`);
                console.log(
                  `Matched (will show): ${Object.keys(matchedTargets).length}`
                );
                console.log(
                  `Unmatched: ${Object.keys(unmatchedTargets).length}`
                );

                set({
                  kpiTargets: targets,
                  targetLoading: false,
                });

                console.log("✅ Final Processed Targets:", targets);
                return targets;
              }

              console.warn("⚠️ No valid target data in new API response");
            } catch (newApiError) {
              console.warn("⚠️ New API failed:", newApiError.message);
              console.log("⚠️ Falling back to old endpoint...");
            }
          }

          // ⭐ FALLBACK TO OLD ENDPOINT
          console.log("⚠️ Using OLD endpoint as fallback");

          if (!API_ENDPOINTS.KPI_TARGETS) {
            console.warn("❌ No KPI_TARGETS endpoint configured");
            set({ targetLoading: false, kpiTargets: {} });
            return null;
          }

          let apiUrl = API_ENDPOINTS.KPI_TARGETS + "?latest_only=true";

          if (selectedPlantCode) {
            apiUrl += `&plant_code=${selectedPlantCode}`;
          } else {
            apiUrl += `&plant_code=0`;
          }

          if (apiType) {
            apiUrl += `&type=${apiType}`;
          } else if (selectedType && selectedType !== "ALL") {
            apiUrl += `&type=${selectedType}`;
          } else {
            apiUrl += `&type=ALL`;
          }

          apiUrl += `&prod_or_sale=${prodOrSale}`;

          console.log("🎯 Old API URL:", apiUrl);

          const response = await fetch(apiUrl);
          const result = await response.json();

          if (result.status === "success" && result.targets) {
            const normalizedTargets = {};

            Object.entries(result.targets).forEach(([key, value]) => {
              const normalizedKey = normalizeKpiName(key);
              normalizedTargets[normalizedKey] = parseFloat(value);
              console.log(`  ✓ ${key} → ${normalizedKey} = ₹${value}`);
            });

            console.log("✅ Targets from old API:", normalizedTargets);

            set({
              kpiTargets: normalizedTargets,
              targetLoading: false,
            });

            return normalizedTargets;
          } else {
            console.warn("⚠️ No targets from old API");
            set({
              kpiTargets: {},
              targetLoading: false,
            });
            return null;
          }
        } catch (error) {
          console.error("❌ Error fetching KPI targets:", error);
          set({
            targetLoading: false,
            kpiTargets: {},
          });
          return null;
        }
      },

      // ====================================================================
      // FETCH COST DATA (UPDATED WITH NEW API LOGIC)
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

          // ⭐⭐⭐ CACHE HIT SECTION - FIXED ⭐⭐⭐
          const cachedData = cacheManager.get(cacheKey);
          if (cachedData) {
            console.log("✅ Using cached data");

            // ⭐ Don't try to extract targets from cost data cache
            set({
              apiData: cachedData,
              apiLoading: false,
            });

            // ⭐ Fetch targets separately with await
            await get().fetchKpiTargets();

            console.log("✅ Cached data loaded, targets fetched separately");
            return;
          }

          set({ apiLoading: true, apiError: null, loadingProgress: 10 });

          const fromMonthName = getMonthNameForApi(fromMonth);
          const toMonthName = getMonthNameForApi(toMonth);

          let apiUrl;

          // ⭐⭐⭐ NEW API LOGIC WITH 3 CASES ⭐⭐⭐
          if (viewType === "production") {
            // ✅ CASE 1: Plant selected → PLANT API
            if (selectedPlantCode) {
              apiUrl = API_ENDPOINTS.PROD_PLANTWISE_CUSTOM(
                selectedPlantCode,
                year,
                fromMonth,
                toMonth
              );
              console.log("🏭 Using PLANT API for:", selectedPlantCode);
            }
            // ✅ CASE 2: Type selected (Forging / Machining)
            else if (selectedType) {
              apiUrl = `${API_ENDPOINTS.PROD_COST}?view=month&year=${year}&from_month=${fromMonthName}&to_month=${toMonthName}&type=${selectedType}`;
              console.log("🏭 Using TYPE API for:", selectedType);
            }
            // ✅ CASE 3: ALL
            else {
              apiUrl = API_ENDPOINTS.PROD_COST_CUSTOM(
                year,
                fromMonth,
                toMonth
              );
              console.log("🏭 Using ALL API");
            }
          } else {
            // Sale view logic (unchanged)
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

          // ⭐⭐⭐ FRESH API SUCCESS SECTION - FIXED ⭐⭐⭐
          if (result.status === "success") {
            const data = result.data;

            cacheManager.set(cacheKey, data);

            console.log(
              `✅ [${viewType.toUpperCase()}] Loaded ${data.length} records`
            );

            // ⭐ Don't try to extract targets from cost data
            set({
              apiData: data,
              apiLoading: false,
              loadingProgress: 100,
              monthRange: { from: fromMonth, to: toMonth },
              apiError: null,
            });

            // ⭐ Fetch targets separately with await
            await get().fetchKpiTargets();

            console.log("✅ Fresh data loaded, targets fetched");
          }
          // ⭐⭐⭐ ARRAY RESPONSE SECTION - FIXED ⭐⭐⭐
          else if (Array.isArray(result)) {
            cacheManager.set(cacheKey, result);

            console.log(
              `✅ [${viewType.toUpperCase()}] Loaded ${result.length} records`
            );

            // ⭐ Don't try to extract targets from cost data
            set({
              apiData: result,
              apiLoading: false,
              loadingProgress: 100,
              monthRange: { from: fromMonth, to: toMonth },
              apiError: null,
            });

            // ⭐ Fetch targets separately with await
            await get().fetchKpiTargets();

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