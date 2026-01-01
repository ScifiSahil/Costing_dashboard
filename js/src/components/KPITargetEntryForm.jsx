import React, { useState, useEffect } from "react";
import {
  Plus,
  Save,
  X,
  AlertCircle,
  RefreshCw,
  Database,
  Inbox,
  Building2,
  Factory,
  List,
  Layers,
  Lock,
  Target,
  DollarSign,
} from "lucide-react";

// ⭐⭐⭐ STANDARD KPI NAMES - Exact match with frontend
const STANDARD_KPI_NAMES = [
  "Power",
  "Consumables",
  "Labour",
  "Fuel",
  "Sub Contract",
  "Repair & Maintenance",
  "Machine Hire Charges",
  "Employee Cost",
  "Establishment Expenses",
  "Packing",
  "Freight",
  "Raw Material",
].sort();

// ⭐⭐⭐ CSRF TOKEN HELPER FUNCTIONS
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const getAuthHeadersWithCSRF = async (method = "POST") => {
  const credentials = btoa("kalyaniadmin:kalyaniadmin@7001");

  try {
    await fetch("https://ktflceprd.kalyanicorp.com/internal/kpi_targets", {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      credentials: "include",
    });
  } catch (error) {
    console.log("⚠️ CSRF trigger request:", error);
  }

  const csrfToken = getCookie("CSRFToken");
  console.log("🔐 CSRF Token:", csrfToken ? "✅ Found" : "❌ Not found");

  const headers = {
    Authorization: `Basic ${credentials}`,
    "Content-Type": "application/json",
  };

  if (csrfToken) {
    headers["X-CSRF-Token"] = csrfToken;
  }

  return {
    headers,
    credentials: "include",
  };
};

const KPITargetEntryForm = () => {
  const [kpiList, setKpiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddKPI, setShowAddKPI] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [entryMode, setEntryMode] = useState("plant");
  const [bulkMode, setBulkMode] = useState(false);
  const [csrfReady, setCsrfReady] = useState(false);
  const [useStandardNames, setUseStandardNames] = useState(true);
  const [valueType, setValueType] = useState("cost"); // 'cost' or 'target'

  const [formData, setFormData] = useState({
    kpi_name: "",
    plant_code: "",
    type: "",
    prod_or_sale: "Production",
    cost_date: new Date().toISOString().split("T")[0],
    value: "", // ⭐ Single field for both
    cost_measurement: "cost per ton",
  });

  const [bulkFormData, setBulkFormData] = useState({
    selectedKPIs: [],
    kpiData: {},
  });

  const [newKPI, setNewKPI] = useState({
    kpi_name: "",
    kpi_unit: "",
  });

  useEffect(() => {
    const initCSRF = async () => {
      try {
        await getAuthHeadersWithCSRF("GET");
        setCsrfReady(true);
        console.log("✅ CSRF token initialized");
      } catch (error) {
        console.error("❌ CSRF initialization failed:", error);
        setCsrfReady(true);
      }
    };

    initCSRF();
    fetchKPIList();
  }, []);

  const fetchKPIList = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://ktfrancesrv2.kalyanicorp.com/api/v1/collection/cost_kpi_master"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      let kpiArray = [];

      if (data && Array.isArray(data.objects)) {
        kpiArray = data.objects;
      } else if (Array.isArray(data)) {
        kpiArray = data;
      } else if (data && Array.isArray(data.data)) {
        kpiArray = data.data;
      }

      setKpiList(kpiArray);

      if (kpiArray.length === 0) {
        showMessage(
          "info",
          "No custom KPIs found. Use standard names or add your own."
        );
      } else {
        showMessage(
          "success",
          `Loaded ${kpiArray.length} custom KPI(s) successfully.`
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      showMessage("error", `Failed to load KPIs: ${error.message}`);
      setKpiList([]);
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: "", text: "" }), 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleKPISelection = (kpiName) => {
    setBulkFormData((prev) => {
      const isSelected = prev.selectedKPIs.includes(kpiName);
      const newSelectedKPIs = isSelected
        ? prev.selectedKPIs.filter((name) => name !== kpiName)
        : [...prev.selectedKPIs, kpiName];

      const newKpiData = { ...prev.kpiData };
      if (!isSelected) {
        newKpiData[kpiName] = {
          plant_code: "",
          type: "",
          prod_or_sale: "Production",
          cost_date: new Date().toISOString().split("T")[0],
          value: "",
          cost_measurement: "cost per ton",
          valueType: "cost", // ⭐ Track type per KPI
        };
      } else {
        delete newKpiData[kpiName];
      }

      return {
        ...prev,
        selectedKPIs: newSelectedKPIs,
        kpiData: newKpiData,
      };
    });
  };

  const handleKPIFieldChange = (kpiName, fieldName, value) => {
    setBulkFormData((prev) => ({
      ...prev,
      kpiData: {
        ...prev.kpiData,
        [kpiName]: {
          ...prev.kpiData[kpiName],
          [fieldName]: value,
        },
      },
    }));
  };

  const handleModeChange = (mode) => {
    setEntryMode(mode);
    if (mode === "plant") {
      setFormData((prev) => ({ ...prev, type: "" }));
    } else {
      setFormData((prev) => ({ ...prev, plant_code: "" }));
    }
  };

  const handleNewKPIChange = (e) => {
    const { name, value } = e.target;
    setNewKPI((prev) => ({ ...prev, [name]: value }));
  };

  const addNewKPI = async () => {
    if (!newKPI.kpi_name.trim()) {
      showMessage("error", "KPI name is required.");
      return;
    }

    try {
      const payload = {
        kpi_name: newKPI.kpi_name.trim(),
        kpi_unit: newKPI.kpi_unit.trim() || "",
      };

      const authOptions = await getAuthHeadersWithCSRF("POST");

      const response = await fetch(
        "https://ktfrancesrv2.kalyanicorp.com/api/v1/collection/cost_kpi_master",
        {
          method: "POST",
          ...authOptions,
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok || response.status === 201) {
        showMessage("success", "New KPI added successfully!");
        await fetchKPIList();
        setFormData((prev) => ({ ...prev, kpi_name: newKPI.kpi_name }));
        setNewKPI({ kpi_name: "", kpi_unit: "" });
        setShowAddKPI(false);
      } else {
        showMessage(
          "error",
          `Failed to add KPI: ${
            result.message || result.error || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error("Add KPI Error:", error);
      showMessage("error", `Network error: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    if (!formData.kpi_name) {
      showMessage("error", "Please select a KPI name.");
      return;
    }

    if (!formData.value) {
      showMessage(
        "error",
        `Please enter ${valueType === "cost" ? "cost" : "target"} value.`
      );
      return;
    }

    if (entryMode === "plant" && !formData.plant_code) {
      showMessage("error", "Plant Code is required for plant-wise entry.");
      return;
    }

    if (entryMode === "combined" && !formData.type) {
      showMessage("error", "Type is required for combined entry.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        kpi_name: formData.kpi_name,
        plant_code: entryMode === "plant" ? formData.plant_code : null,
        type: entryMode === "combined" ? formData.type : "all_frg",
        prod_or_sale: formData.prod_or_sale || "Production",
        cost_date: formData.cost_date || new Date().toISOString().split("T")[0],
        cost_measurement: formData.cost_measurement || "cost per ton",
      };

      // ⭐⭐⭐ Set cost_value or target_value based on valueType
      if (valueType === "cost") {
        payload.cost_value = parseFloat(formData.value);
        payload.target_value = null;
      } else {
        payload.cost_value = 0; // Required field
        payload.target_value = parseFloat(formData.value);
      }

      console.log("📤 Submitting with CSRF:", payload);

      const authOptions = await getAuthHeadersWithCSRF("POST");

      const response = await fetch(
        "https://ktfrancesrv2.kalyanicorp.com/api/v1/collection/cost_kpi_entry",
        {
          method: "POST",
          ...authOptions,
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (response.ok || response.status === 201) {
        showMessage(
          "success",
          `✅ KPI "${formData.kpi_name}" saved successfully! (${
            valueType === "cost" ? "Cost" : "🎯 Target"
          }: ₹${parseFloat(formData.value).toLocaleString()})`
        );
        clearForm();
      } else {
        showMessage(
          "error",
          `Failed to save entry: ${
            result.message || result.error || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error("Submit Error:", error);
      showMessage("error", `Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleBulkSubmit = async () => {
    if (bulkFormData.selectedKPIs.length === 0) {
      showMessage("error", "Please select at least one KPI.");
      return;
    }

    const validationErrors = [];
    for (const kpiName of bulkFormData.selectedKPIs) {
      const kpiData = bulkFormData.kpiData[kpiName];

      if (!kpiData.value) {
        validationErrors.push(`${kpiName}: Value is required`);
      }

      if (entryMode === "plant" && !kpiData.plant_code) {
        validationErrors.push(`${kpiName}: Plant code is required`);
      }

      if (entryMode === "combined" && !kpiData.type) {
        validationErrors.push(`${kpiName}: Type is required`);
      }
    }

    if (validationErrors.length > 0) {
      showMessage("error", validationErrors.join(", "));
      return;
    }

    try {
      setLoading(true);
      let successCount = 0;
      let failCount = 0;
      const failedKPIs = [];
      const savedResults = [];

      const authOptions = await getAuthHeadersWithCSRF("POST");

      for (const kpiName of bulkFormData.selectedKPIs) {
        const kpiData = bulkFormData.kpiData[kpiName];
        const isTargetEntry = kpiData.valueType === "target";

        const payload = {
          kpi_name: kpiName,
          plant_code: entryMode === "plant" ? kpiData.plant_code : null,
          type: entryMode === "combined" ? kpiData.type : "all_frg",
          prod_or_sale: kpiData.prod_or_sale || "Production",
          cost_date:
            kpiData.cost_date || new Date().toISOString().split("T")[0],
          cost_measurement: kpiData.cost_measurement || "cost per ton",
        };

        // ⭐⭐⭐ Set values based on type
        if (isTargetEntry) {
          payload.cost_value = 0;
          payload.target_value = parseFloat(kpiData.value);
        } else {
          payload.cost_value = parseFloat(kpiData.value);
          payload.target_value = null;
        }

        try {
          const response = await fetch(
            "https://ktflceprd.kalyanicorp.com/api/v1/collection/cost_kpi_entry",
            {
              method: "POST",
              ...authOptions,
              body: JSON.stringify(payload),
            }
          );

          const result = await response.json();

          if (response.ok || response.status === 201) {
            successCount++;
            savedResults.push(
              `${kpiName} (${
                isTargetEntry ? "🎯Target" : "💰Cost"
              }: ₹${parseFloat(kpiData.value).toLocaleString()})`
            );
          } else {
            failCount++;
            failedKPIs.push(kpiName);
            console.error(`Failed to save ${kpiName}:`, result);
          }
        } catch (error) {
          failCount++;
          failedKPIs.push(kpiName);
          console.error(`Error submitting ${kpiName}:`, error);
        }
      }

      if (successCount > 0 && failCount === 0) {
        let msg = `✅ All ${successCount} KPI entries saved successfully!`;
        if (savedResults.length > 0) {
          msg += `\n${savedResults.join(", ")}`;
        }
        showMessage("success", msg);
        clearBulkForm();
      } else if (successCount > 0 && failCount > 0) {
        showMessage(
          "info",
          `${successCount} entries saved, ${failCount} failed (${failedKPIs.join(
            ", "
          )})`
        );
      } else {
        showMessage("error", "Failed to save entries. Please try again.");
      }
    } catch (error) {
      console.error("Bulk Submit Error:", error);
      showMessage("error", `Network error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFormData({
      kpi_name: "",
      plant_code: "",
      type: "",
      prod_or_sale: "Production",
      cost_date: new Date().toISOString().split("T")[0],
      value: "",
      cost_measurement: "cost per ton",
    });
  };

  const clearBulkForm = () => {
    setBulkFormData({
      selectedKPIs: [],
      kpiData: {},
    });
  };

  const selectAllKPIs = () => {
    const sourceList = useStandardNames
      ? STANDARD_KPI_NAMES
      : kpiList.map((kpi) => kpi.kpi_name);
    const allData = {};
    sourceList.forEach((name) => {
      allData[name] = {
        plant_code: "",
        type: "",
        prod_or_sale: "Production",
        cost_date: new Date().toISOString().split("T")[0],
        value: "",
        cost_measurement: "cost per ton",
        valueType: "cost",
      };
    });
    setBulkFormData({
      selectedKPIs: sourceList,
      kpiData: allData,
    });
  };

  const deselectAllKPIs = () => {
    setBulkFormData({
      selectedKPIs: [],
      kpiData: {},
    });
  };

  const getDisplayKPIList = () => {
    return useStandardNames
      ? STANDARD_KPI_NAMES.map((name) => ({ kpi_name: name, kpi_id: name }))
      : kpiList;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3 md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-t-4 border-indigo-600">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                <Target className="text-indigo-600" size={24} />
                KPI Cost & Target Entry
                {csrfReady && (
                  <Lock
                    className="text-green-600"
                    size={16}
                    title="CSRF Protected"
                  />
                )}
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Set cost values or targets for KPIs {csrfReady && "🔐"}
              </p>
            </div>
            <button
              onClick={fetchKPIList}
              disabled={loading}
              className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 disabled:opacity-50 text-sm font-semibold"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>
          </div>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div
            className={`mb-4 p-2.5 rounded-lg flex items-center gap-2 shadow-sm text-sm font-semibold whitespace-pre-line ${
              message.type === "success"
                ? "bg-green-100 text-green-800 border-l-4 border-green-600"
                : message.type === "info"
                ? "bg-blue-100 text-blue-800 border-l-4 border-blue-600"
                : "bg-red-100 text-red-800 border-l-4 border-red-600"
            }`}
          >
            <AlertCircle size={16} />
            <span className="flex-1">{message.text}</span>
            <button
              onClick={() => setMessage({ type: "", text: "" })}
              className="hover:opacity-70"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Entry Mode Toggle */}
        <div className="bg-white rounded-lg shadow-md p-3 mb-4 border border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-700">
                Entry Mode:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setBulkMode(false)}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-sm font-semibold ${
                    !bulkMode
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <List size={14} />
                  Single Entry
                </button>
                <button
                  onClick={() => setBulkMode(true)}
                  className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 text-sm font-semibold ${
                    bulkMode
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <Layers size={14} />
                  Bulk Entry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          {/* Entry Type Selection */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Entry Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleModeChange("plant")}
                className={`p-3 rounded-lg border-2 transition-all ${
                  entryMode === "plant"
                    ? "border-indigo-600 bg-indigo-50 shadow-sm"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Building2
                    size={20}
                    className={
                      entryMode === "plant"
                        ? "text-indigo-600"
                        : "text-gray-500"
                    }
                  />
                  <div className="text-left">
                    <div
                      className={`font-semibold text-sm ${
                        entryMode === "plant"
                          ? "text-indigo-700"
                          : "text-gray-700"
                      }`}
                    >
                      Plant-wise Entry
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Specific to individual plant
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleModeChange("combined")}
                className={`p-3 rounded-lg border-2 transition-all ${
                  entryMode === "combined"
                    ? "border-indigo-600 bg-indigo-50 shadow-sm"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Factory
                    size={20}
                    className={
                      entryMode === "combined"
                        ? "text-indigo-600"
                        : "text-gray-500"
                    }
                  />
                  <div className="text-left">
                    <div
                      className={`font-semibold text-sm ${
                        entryMode === "combined"
                          ? "text-indigo-700"
                          : "text-gray-700"
                      }`}
                    >
                      Combined Entry
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      All plants by type
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {!bulkMode ? (
            /* ============================================
               SINGLE ENTRY MODE
               ============================================ */
            <>
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold text-gray-700">
                    KPI Name *
                    {useStandardNames && (
                      <span className="text-green-600 ml-2 text-xs font-normal">
                        ({STANDARD_KPI_NAMES.length} standard names)
                      </span>
                    )}
                  </label>

                  <button
                    onClick={() => setUseStandardNames(!useStandardNames)}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition font-semibold"
                  >
                    {useStandardNames
                      ? "Use Custom KPIs"
                      : "Use Standard Names"}
                  </button>
                </div>

                <div className="flex gap-2">
                  <select
                    name="kpi_name"
                    value={formData.kpi_name}
                    onChange={handleInputChange}
                    disabled={
                      loading || (!useStandardNames && kpiList.length === 0)
                    }
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed font-medium"
                  >
                    <option value="">
                      {loading
                        ? "Loading..."
                        : useStandardNames
                        ? "Select Standard KPI"
                        : kpiList.length === 0
                        ? "No Custom KPIs"
                        : "Select Custom KPI"}
                    </option>
                    {useStandardNames
                      ? STANDARD_KPI_NAMES.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))
                      : kpiList.map((kpi) => (
                          <option key={kpi.kpi_id} value={kpi.kpi_name}>
                            {kpi.kpi_name}
                          </option>
                        ))}
                  </select>
                  {!useStandardNames && (
                    <button
                      onClick={() => setShowAddKPI(!showAddKPI)}
                      className={`px-3 py-2 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold ${
                        showAddKPI
                          ? "bg-gray-500 hover:bg-gray-600 text-white"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                    >
                      {showAddKPI ? <X size={16} /> : <Plus size={16} />}
                      {showAddKPI ? "Cancel" : "Add New"}
                    </button>
                  )}
                </div>
                {useStandardNames && (
                  <p className="text-xs text-gray-500 mt-1">
                    ⭐ Standard names match frontend exactly!
                  </p>
                )}
              </div>

              {showAddKPI && (
                <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1.5">
                    <Plus className="text-green-600" size={18} />
                    Add New KPI
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        KPI Name *
                      </label>
                      <input
                        type="text"
                        name="kpi_name"
                        value={newKPI.kpi_name}
                        onChange={handleNewKPIChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., Production Efficiency"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        KPI Unit
                      </label>
                      <input
                        type="text"
                        name="kpi_unit"
                        value={newKPI.kpi_unit}
                        onChange={handleNewKPIChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., %, Units, INR"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={addNewKPI}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-1.5 shadow-sm text-sm font-semibold"
                    >
                      <Save size={14} />
                      Save KPI
                    </button>
                    <button
                      onClick={() => {
                        setShowAddKPI(false);
                        setNewKPI({ kpi_name: "", kpi_unit: "" });
                      }}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className={entryMode === "combined" ? "opacity-50" : ""}>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Plant Code {entryMode === "plant" && "*"}
                  </label>
                  <input
                    type="text"
                    name="plant_code"
                    value={formData.plant_code}
                    onChange={handleInputChange}
                    disabled={entryMode === "combined"}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 font-medium"
                    placeholder={
                      entryMode === "plant" ? "e.g., 2002" : "Not applicable"
                    }
                  />
                </div>

                <div className={entryMode === "plant" ? "opacity-50" : ""}>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Type {entryMode === "combined" && "*"}
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    disabled={entryMode === "plant"}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100 font-medium"
                  >
                    <option value="">
                      {entryMode === "combined"
                        ? "Select type"
                        : "Not applicable"}
                    </option>
                    <option value="all_frg">All Forging</option>
                    <option value="all_mch">All Machining</option>
                    <option value="all_frg_mch">All Forging + Machining</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Production or Sale *
                  </label>
                  <select
                    name="prod_or_sale"
                    value={formData.prod_or_sale}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="Production">Production</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    name="cost_date"
                    value={formData.cost_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                </div>

                {/* ⭐⭐⭐ SINGLE VALUE FIELD WITH TOGGLE ⭐⭐⭐ */}
                <div className="col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-gray-700">
                      {valueType === "cost"
                        ? "💰 Cost Value"
                        : "🎯 Target Value"}{" "}
                      *
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setValueType("cost")}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          valueType === "cost"
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        <DollarSign size={12} className="inline mr-1" />
                        Cost Entry
                      </button>
                      <button
                        onClick={() => setValueType("target")}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          valueType === "target"
                            ? "bg-green-600 text-white shadow-md"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        <Target size={12} className="inline mr-1" />
                        Target Entry
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    name="value"
                    value={formData.value}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 text-sm border-2 rounded-lg focus:ring-2 font-medium ${
                      valueType === "cost"
                        ? "border-blue-300 bg-blue-50 focus:ring-blue-500"
                        : "border-green-300 bg-green-50 focus:ring-green-500"
                    }`}
                    placeholder={`Enter ${
                      valueType === "cost" ? "actual cost" : "target"
                    } value (e.g., 25000)`}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {valueType === "cost"
                      ? "💡 Enter the actual cost value for this KPI"
                      : "💡 Target will show as red dashed line in charts"}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Measurement Unit
                  </label>
                  <select
                    name="cost_measurement"
                    value={formData.cost_measurement}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="cost per ton">cost per ton</option>
                    <option value="Per Ton">Per Ton</option>
                    <option value="Per Unit">Per Unit</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
                <button
                  onClick={clearForm}
                  disabled={loading}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-1.5 shadow-sm text-sm font-semibold disabled:opacity-50"
                >
                  <X size={16} />
                  Clear
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!formData.kpi_name || !formData.value || loading}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Submit {valueType === "cost" ? "Cost" : "Target"}
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            /* ============================================
               BULK ENTRY MODE  
               ============================================ */
            <>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <label className="block text-xs font-semibold text-gray-700">
                      Select KPIs to Fill *
                      {bulkFormData.selectedKPIs.length > 0 && (
                        <span className="text-indigo-600 ml-2 text-xs font-normal">
                          ({bulkFormData.selectedKPIs.length} selected)
                        </span>
                      )}
                    </label>
                    <button
                      onClick={() => setUseStandardNames(!useStandardNames)}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition font-semibold"
                    >
                      {useStandardNames ? "Use Custom" : "Use Standard"}
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={selectAllKPIs}
                      disabled={
                        loading || (!useStandardNames && kpiList.length === 0)
                      }
                      className="text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200 transition disabled:opacity-50 font-semibold"
                    >
                      Select All
                    </button>
                    <button
                      onClick={deselectAllKPIs}
                      disabled={bulkFormData.selectedKPIs.length === 0}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition disabled:opacity-50 font-semibold"
                    >
                      Deselect All
                    </button>
                  </div>
                </div>

                {loading ? (
                  <div className="p-4 text-center text-gray-500 bg-gray-50 border border-gray-300 rounded-lg">
                    <RefreshCw
                      className="animate-spin mx-auto mb-2"
                      size={20}
                    />
                    <span className="text-sm font-medium">Loading KPIs...</span>
                  </div>
                ) : !useStandardNames && kpiList.length === 0 ? (
                  <div className="p-3 bg-amber-50 border-2 border-dashed border-amber-300 rounded-lg">
                    <p className="text-xs text-gray-600">
                      No custom KPIs found. Switch to standard names.
                    </p>
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="max-h-40 overflow-y-auto bg-gray-50">
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-300">
                        {getDisplayKPIList().map((kpi) => (
                          <label
                            key={useStandardNames ? kpi.kpi_name : kpi.kpi_id}
                            className={`flex items-center p-2 cursor-pointer transition ${
                              bulkFormData.selectedKPIs.includes(kpi.kpi_name)
                                ? "bg-indigo-50 hover:bg-indigo-100"
                                : "bg-white hover:bg-gray-100"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={bulkFormData.selectedKPIs.includes(
                                kpi.kpi_name
                              )}
                              onChange={() => handleKPISelection(kpi.kpi_name)}
                              className="w-4 h-4 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 flex-shrink-0"
                            />
                            <span
                              className="ml-2 text-xs font-semibold text-gray-700 truncate"
                              title={kpi.kpi_name}
                            >
                              {kpi.kpi_name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {bulkFormData.selectedKPIs.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                      <AlertCircle size={14} className="text-indigo-600" />
                      Fill Details for Selected KPIs
                    </h3>
                  </div>

                  <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-sm">
                    <table className="w-full text-xs">
                      <thead className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white sticky top-0">
                        <tr>
                          <th className="px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[140px]">
                            KPI Name
                          </th>
                          <th
                            className={`px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[90px] ${
                              entryMode === "combined" ? "opacity-60" : ""
                            }`}
                          >
                            Plant {entryMode === "plant" && "*"}
                          </th>
                          <th
                            className={`px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[120px] ${
                              entryMode === "plant" ? "opacity-60" : ""
                            }`}
                          >
                            Type {entryMode === "combined" && "*"}
                          </th>
                          <th className="px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[100px]">
                            Prod/Sale
                          </th>
                          <th className="px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[110px]">
                            Date
                          </th>
                          <th className="px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[100px]">
                            Value * (Type)
                          </th>
                          <th className="px-2 py-2 text-left font-semibold border-r border-indigo-400 whitespace-nowrap min-w-[120px]">
                            Unit
                          </th>
                          <th className="px-2 py-2 text-center font-semibold whitespace-nowrap w-[40px]">
                            Act
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {bulkFormData.selectedKPIs.map((kpiName, index) => {
                          const kpiData = bulkFormData.kpiData[kpiName] || {};
                          const isTarget = kpiData.valueType === "target";
                          return (
                            <tr
                              key={kpiName}
                              className={`hover:bg-blue-50 transition ${
                                index % 2 === 0 ? "bg-gray-50" : "bg-white"
                              }`}
                            >
                              <td className="px-2 py-1.5 font-semibold text-gray-800 border-r border-gray-200">
                                <div className="flex items-center gap-1.5">
                                  <span className="bg-indigo-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                    {index + 1}
                                  </span>
                                  <span className="truncate" title={kpiName}>
                                    {kpiName}
                                  </span>
                                </div>
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <input
                                  type="text"
                                  value={kpiData.plant_code || ""}
                                  onChange={(e) =>
                                    handleKPIFieldChange(
                                      kpiName,
                                      "plant_code",
                                      e.target.value
                                    )
                                  }
                                  disabled={entryMode === "combined"}
                                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-100 font-medium"
                                  placeholder={
                                    entryMode === "plant" ? "Code" : "-"
                                  }
                                />
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <select
                                  value={kpiData.type || ""}
                                  onChange={(e) =>
                                    handleKPIFieldChange(
                                      kpiName,
                                      "type",
                                      e.target.value
                                    )
                                  }
                                  disabled={entryMode === "plant"}
                                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-100 font-medium"
                                >
                                  <option value="">
                                    {entryMode === "combined" ? "Select" : "-"}
                                  </option>
                                  <option value="all_frg">All Forging</option>
                                  <option value="all_mch">All Machining</option>
                                  <option value="all_frg_mch">
                                    All Frg+Mch
                                  </option>
                                </select>
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <select
                                  value={kpiData.prod_or_sale || "Production"}
                                  onChange={(e) =>
                                    handleKPIFieldChange(
                                      kpiName,
                                      "prod_or_sale",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 font-medium"
                                >
                                  <option value="Production">Production</option>
                                  <option value="Sale">Sale</option>
                                </select>
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <input
                                  type="date"
                                  value={kpiData.cost_date || ""}
                                  onChange={(e) =>
                                    handleKPIFieldChange(
                                      kpiName,
                                      "cost_date",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 font-medium"
                                />
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <div className="flex items-center gap-1">
                                  <input
                                    type="number"
                                    step="0.01"
                                    value={kpiData.value || ""}
                                    onChange={(e) =>
                                      handleKPIFieldChange(
                                        kpiName,
                                        "value",
                                        e.target.value
                                      )
                                    }
                                    className={`flex-1 px-2 py-1 text-xs border rounded focus:ring-1 font-medium ${
                                      isTarget
                                        ? "border-green-300 bg-green-50 focus:ring-green-500"
                                        : "border-blue-300 bg-blue-50 focus:ring-blue-500"
                                    }`}
                                    placeholder="Value"
                                  />
                                  <button
                                    onClick={() =>
                                      handleKPIFieldChange(
                                        kpiName,
                                        "valueType",
                                        isTarget ? "cost" : "target"
                                      )
                                    }
                                    className={`px-1.5 py-1 rounded text-xs font-bold ${
                                      isTarget
                                        ? "bg-green-600 text-white"
                                        : "bg-blue-600 text-white"
                                    }`}
                                    title={`Switch to ${
                                      isTarget ? "Cost" : "Target"
                                    }`}
                                  >
                                    {isTarget ? "🎯" : "💰"}
                                  </button>
                                </div>
                              </td>

                              <td className="px-2 py-1.5 border-r border-gray-200">
                                <select
                                  value={
                                    kpiData.cost_measurement || "cost per ton"
                                  }
                                  onChange={(e) =>
                                    handleKPIFieldChange(
                                      kpiName,
                                      "cost_measurement",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-indigo-500 font-medium"
                                >
                                  <option value="cost per ton">
                                    cost per ton
                                  </option>
                                  <option value="Per Ton">Per Ton</option>
                                  <option value="Per Unit">Per Unit</option>
                                  <option value="Monthly">Monthly</option>
                                </select>
                              </td>

                              <td className="px-2 py-1.5 text-center">
                                <button
                                  onClick={() => handleKPISelection(kpiName)}
                                  className="text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded transition"
                                  title="Remove"
                                >
                                  <X size={14} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-2 p-2 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-700 font-medium">
                        <span className="font-bold text-indigo-600">
                          {bulkFormData.selectedKPIs.length}
                        </span>{" "}
                        KPI(s) selected
                      </span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-600 font-medium">
                        💡 Click 🎯/💰 to toggle Cost/Target
                      </span>
                    </div>
                    <button
                      onClick={deselectAllKPIs}
                      className="text-xs px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition font-semibold"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {bulkFormData.selectedKPIs.length === 0 && !loading && (
                <div className="mb-4 p-6 text-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg">
                  <Inbox className="mx-auto text-gray-400 mb-2" size={32} />
                  <h3 className="text-base font-bold text-gray-700 mb-1">
                    No KPIs Selected
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Select KPIs from the list above
                  </p>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
                <button
                  onClick={clearBulkForm}
                  disabled={loading}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition flex items-center gap-1.5 shadow-sm text-sm font-semibold disabled:opacity-50"
                >
                  <X size={16} />
                  Clear All
                </button>
                <button
                  onClick={handleBulkSubmit}
                  disabled={bulkFormData.selectedKPIs.length === 0 || loading}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-1.5 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm font-semibold"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Submit All ({bulkFormData.selectedKPIs.length})
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPITargetEntryForm;
