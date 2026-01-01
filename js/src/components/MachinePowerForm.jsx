import React, { useState, useEffect, useMemo } from "react";
import {
  Save,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Trash2,
  X,
  ChevronDown,
  ChevronRight,
  Zap,
  Fuel,
  Users,
  ArrowLeft,
} from "lucide-react";
import { useCostStore, parseSubParamCodes } from "../store/costStore";
import { getAuthHeadersWithCSRF } from "../utils/authFetch";

// ============================================================================
// TAB-SPECIFIC CONFIGURATIONS
// ============================================================================

const TAB_CONFIG = {
  POWER: {
    id: "power",
    label: "Power",
    icon: Zap,
    color: "blue",
    gradient: "from-blue-600 to-blue-700",
    bgColor: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
    textColor: "text-blue-600",
    lightText: "text-blue-100",
    type: "POWER",
    unit: "kW",
    unitLabel: "Power (kW)",
    placeholder: "Enter power consumption",
    applicableField: "applicable_for_power",
    attributes: [],
    requiredAttributes: [],
    description: "Enter machine power consumption data",
    subParams: [
      "Power_Solar",
      "Power_OpenAccess",
      "Power_RooftopSolar",
      "Power_MCEDCL",
    ],
    helpText: "Track power consumption by machine and line",
  },

  FUEL: {
    id: "fuel",
    label: "Fuel",
    icon: Fuel,
    color: "orange",
    gradient: "from-orange-600 to-orange-700",
    bgColor: "bg-orange-50",
    hoverBg: "hover:bg-orange-100",
    textColor: "text-orange-600",
    lightText: "text-orange-100",
    type: "FUEL",
    unit: "units",
    unitLabel: "Fuel Units",
    placeholder: "Enter fuel consumption",
    applicableField: "applicable_for_fuel",
    attributes: [
      {
        key: "fuel_type",
        label: "Fuel Type",
        emoji: "⛽",
        color: "orange",
        options: ["Diesel", "LPG", "CNG", "Biodiesel", "CO₂", "PNG", "HT"],
      },
    ],
    requiredAttributes: ["fuel_type"],
    description: "Enter fuel consumption by type",
    subParams: [
      "Fuel_Diesel",
      "Fuel_LPG",
      "Fuel_CNG",
      "Fuel_Biodiesel",
      "Fuel_CO2",
      "Fuel_PNG",
      "Fuel_Ht",
    ],
    helpText: "Track fuel usage by machine and fuel type",
  },

  SUBCONTRACT: {
    id: "subcontract",
    label: "Subcontract",
    icon: Users,
    color: "green",
    gradient: "from-green-600 to-green-700",
    bgColor: "bg-green-50",
    hoverBg: "hover:bg-green-100",
    textColor: "text-green-600",
    lightText: "text-green-100",
    type: "SUBCONTRACT",
    unit: "cost",
    unitLabel: "Cost (₹)",
    placeholder: "Enter subcontract cost",
    applicableField: "applicable_for_subcontract",
    attributes: [
      {
        key: "vendor_code",
        label: "Vendor Code",
        emoji: "👥",
        color: "purple",
        placeholder: "Enter vendor code",
      },
      {
        key: "subcontract_type",
        label: "Subcontract Type",
        emoji: "📋",
        color: "cyan",
        options: ["POST_PROCESS", "MPI", "OUTSOURCE"],
      },
    ],
    requiredAttributes: ["vendor_code", "subcontract_type"],
    description: "Enter subcontract cost by vendor",
    subParams: [
      "Subcontract_MPI",
      "Subcontract_POST_PROCESS",
      "Subcontract_OUTSOURCE",
    ],
    helpText: "Track subcontract costs by machine and vendor",
  },
};

// ============================================================================
// COMMON ATTRIBUTES (Applicable to all tabs)
// ============================================================================

const COMMON_ATTRIBUTES = {
  die_no: {
    label: "Die No",
    emoji: "🔧",
    color: "orange",
    borderColor: "border-orange-300",
    bgColor: "bg-orange-50",
    focusRing: "focus:ring-orange-400",
    focusBorder: "focus:border-orange-500",
    placeholder: "Enter die number",
  },
  vendor_code: {
    label: "Vendor",
    emoji: "👥",
    color: "purple",
    borderColor: "border-purple-300",
    bgColor: "bg-purple-50",
    focusRing: "focus:ring-purple-400",
    focusBorder: "focus:border-purple-500",
    placeholder: "Enter vendor code",
  },
  line_name: {
    label: "Line",
    emoji: "📦",
    color: "blue",
    borderColor: "border-blue-300",
    bgColor: "bg-blue-50",
    focusRing: "focus:ring-blue-400",
    focusBorder: "focus:border-blue-500",
    placeholder: "Enter line name",
  },
  machine_name: {
    label: "Machine",
    emoji: "⚙️",
    color: "cyan",
    borderColor: "border-cyan-300",
    bgColor: "bg-cyan-50",
    focusRing: "focus:ring-cyan-400",
    focusBorder: "focus:border-cyan-500",
    placeholder: "Enter machine name",
  },
  plant_code: {
    label: "Plant",
    emoji: "🏭",
    color: "gray",
    borderColor: "border-gray-300",
    bgColor: "bg-gray-50",
    focusRing: "focus:ring-gray-400",
    focusBorder: "focus:border-gray-500",
    placeholder: "Enter plant code",
  },
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function MachinePowerForm({ theme, onClose }) {
  const PLANT_NAMES = {
    2001: "Mundhwa",
    2002: "Ranjangaon E-84",
    2101: "Transmission Ranjangaon",
    2102: "Transmission Baramati",
    2020: "Chakan",
    2021: "Khed-1",
    2022: "Ambethan-1",
    2023: "Ambethan-2",
    2024: "Baramati KTFL",
    2025: "Bhiwadi",
    2026: "Gujarat",
    2027: "Khed-2",
    2028: "Ambethan-3",
    2081: "Heat Treatment",
    2201: "Inmet Jejuri",
    2301: "Yokoha Jejuri",
  };

  const getPlantName = (plantCode) => {
    return PLANT_NAMES[plantCode] || `Plant ${plantCode}`;
  };

  // ========================================================================
  // STATE MANAGEMENT
  // ========================================================================

  const [activeTab, setActiveTab] = useState("POWER");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [expandedLines, setExpandedLines] = useState({});
  const [formData, setFormData] = useState({});
  const [lineFormData, setLineFormData] = useState({});
  const [availableTabs, setAvailableTabs] = useState([]);
  const [requiredFields, setRequiredFields] = useState({});

  const {
    costCenters,
    powerEntries,
    htFuelEntries,
    pngFuelEntries,
    subcontractEntries,
    fetchUserPlantCode,
    fetchCostCentersOnce,
    fetchPowerEntriesOnce,
    fetchHTFuelEntriesOnce,
    fetchPNGFuelEntriesOnce,
    fetchSubcontractEntriesOnce,
    userPlantCode,
  } = useCostStore();

  const activeConfig = TAB_CONFIG[activeTab];
  const ActiveIcon = activeConfig.icon;

  // ========================================================================
  // INITIALIZATION & DATA LOADING
  // ========================================================================

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchUserPlantCode();
        await fetchCostCentersOnce();

        try {
          await Promise.all([
            fetchPowerEntriesOnce(),
            fetchHTFuelEntriesOnce(),
            fetchPNGFuelEntriesOnce(),
            fetchSubcontractEntriesOnce(),
          ]);
        } catch (error) {
          console.warn("Some entries not available:", error);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (costCenters.length > 0) {
      const tabs = [];

      if (costCenters.some((cc) => cc.applicable_for_power === 1)) {
        tabs.push("POWER");
      }
      if (costCenters.some((cc) => cc.applicable_for_fuel === 1)) {
        tabs.push("FUEL");
      }
      if (costCenters.some((cc) => cc.applicable_for_subcontract === 1)) {
        tabs.push("SUBCONTRACT");
      }

      setAvailableTabs(tabs);

      if (tabs.length > 0 && !tabs.includes(activeTab)) {
        setActiveTab(tabs[0]);
      }
    }
  }, [costCenters]);

  // ========================================================================
  // DATA HELPERS
  // ========================================================================

  const normalizeValue = (value) => {
    return String(value).trim().toUpperCase();
  };

  const getActiveEntries = () => {
    switch (activeTab) {
      case "POWER":
        return powerEntries || [];
      case "FUEL":
        return [...(htFuelEntries || []), ...(pngFuelEntries || [])];
      case "SUBCONTRACT":
        return subcontractEntries || [];
      default:
        return [];
    }
  };

  const getActiveFetchFunction = () => {
    switch (activeTab) {
      case "POWER":
        return fetchPowerEntriesOnce;
      case "FUEL":
        return async () => {
          await Promise.all([
            fetchHTFuelEntriesOnce(),
            fetchPNGFuelEntriesOnce(),
          ]);
        };
      case "SUBCONTRACT":
        return fetchSubcontractEntriesOnce;
      default:
        return fetchPowerEntriesOnce;
    }
  };

  const applicableCostCenters = useMemo(() => {
    const applicableField = TAB_CONFIG[activeTab]?.applicableField;
    return costCenters.filter((cc) => cc[applicableField] === 1);
  }, [costCenters, activeTab]);

  const getCostCenterForMachine = (plantCode, lineName, machineName) => {
    const normalized = {
      plant: normalizeValue(plantCode),
      line: normalizeValue(lineName),
      machine: normalizeValue(machineName),
    };

    return applicableCostCenters.find(
      (cc) =>
        normalizeValue(cc.plant_code) === normalized.plant &&
        normalizeValue(cc.line_name) === normalized.line &&
        normalizeValue(cc.machine) === normalized.machine
    );
  };

  const getCostCenterForLine = (plantCode, lineName) => {
    const normalized = {
      plant: normalizeValue(plantCode),
      line: normalizeValue(lineName),
    };

    return applicableCostCenters.find(
      (cc) =>
        normalizeValue(cc.plant_code) === normalized.plant &&
        normalizeValue(cc.line_name) === normalized.line
    );
  };

  const getRequiredFieldsForCostCenter = (plantCode, lineName, machineName) => {
    const costCenter = getCostCenterForMachine(
      plantCode,
      lineName,
      machineName
    );
    if (!costCenter) return [];

    const required = [];
    if (costCenter.requires_die === 1) required.push("die_no");
    if (costCenter.requires_vendor === 1) required.push("vendor_code");
    if (costCenter.requires_line === 1) required.push("line_name");

    return required;
  };

  const getRequiredFieldsForLine = (plantCode, lineName) => {
    const costCenter = getCostCenterForLine(plantCode, lineName);
    if (!costCenter) return [];

    const required = [];
    if (costCenter.requires_die === 1) required.push("die_no");
    if (costCenter.requires_vendor === 1) required.push("vendor_code");
    if (costCenter.requires_line === 1) required.push("line_name");

    return required;
  };

  const hierarchicalData = useMemo(() => {
    const grouped = {};
    const activeEntries = getActiveEntries();

    applicableCostCenters.forEach((cc) => {
      const plantKey = String(cc.plant_code || "").trim();
      const lineKey = String(cc.line_name || "").trim();
      const machineKey = `${plantKey}|${lineKey}|${cc.machine || ""}`;

      if (!plantKey) return;

      if (!grouped[plantKey]) {
        grouped[plantKey] = { plant_code: plantKey, lines: {} };
      }

      if (!grouped[plantKey].lines[lineKey]) {
        grouped[plantKey].lines[lineKey] = { line_name: lineKey, machines: [] };
      }

      const existingMachine = grouped[plantKey].lines[lineKey].machines.find(
        (m) => normalizeValue(m.machine) === normalizeValue(cc.machine || "")
      );

      if (!existingMachine) {
        const existing = activeEntries.find(
          (e) =>
            normalizeValue(e.line_name) === normalizeValue(lineKey) &&
            normalizeValue(e.machine_name) ===
              normalizeValue(cc.machine || "") &&
            e.plant_code === parseInt(plantKey)
        );

        const machineData = {
          key: machineKey,
          machine: cc.machine || "",
          plant_code: plantKey,
          line_name: lineKey,
          value: existing ? existing.param_value : "",
          cdb_object_id: existing ? existing.cdb_object_id : null,
        };

        activeConfig.attributes.forEach((attr) => {
          machineData[attr.key] = existing ? existing[attr.key] : "";
        });

        Object.keys(COMMON_ATTRIBUTES).forEach((field) => {
          machineData[field] = existing ? existing[field] : "";
        });

        grouped[plantKey].lines[lineKey].machines.push(machineData);
      }
    });

    return grouped;
  }, [
    applicableCostCenters,
    activeTab,
    powerEntries,
    htFuelEntries,
    pngFuelEntries,
    subcontractEntries,
  ]);

  useEffect(() => {
    const newFormData = {};
    const newLineFormData = {};
    const activeEntries = getActiveEntries();

    Object.entries(hierarchicalData).forEach(([plantCode, plantData]) => {
      Object.entries(plantData.lines || {}).forEach(([lineName, lineData]) => {
        const lineKey = `${plantCode}|${lineName}`;
        const existingLineEntry = activeEntries.find(
          (e) =>
            normalizeValue(e.line_name) === normalizeValue(lineName) &&
            !e.machine_name &&
            e.plant_code === parseInt(plantCode)
        );

        const lineData_obj = {
          plant_code: plantCode,
          line_name: lineName,
          value: existingLineEntry ? existingLineEntry.param_value : "",
          cdb_object_id: existingLineEntry
            ? existingLineEntry.cdb_object_id
            : null,
        };

        activeConfig.attributes.forEach((attr) => {
          lineData_obj[attr.key] = existingLineEntry
            ? existingLineEntry[attr.key]
            : "";
        });

        Object.keys(COMMON_ATTRIBUTES).forEach((field) => {
          lineData_obj[field] = existingLineEntry
            ? existingLineEntry[field]
            : "";
        });

        newLineFormData[lineKey] = lineData_obj;

        (lineData.machines || []).forEach((machine) => {
          newFormData[machine.key] = { ...machine };
        });
      });
    });

    setFormData(newFormData);
    setLineFormData(newLineFormData);

    const allExpanded = {};
    Object.entries(hierarchicalData).forEach(([plantCode, plantData]) => {
      Object.keys(plantData.lines || {}).forEach((lineName) => {
        allExpanded[`${plantCode}|${lineName}`] = true;
      });
    });
    setExpandedLines(allExpanded);
  }, [hierarchicalData, activeTab]);

  // ========================================================================
  // EVENT HANDLERS
  // ========================================================================

  const toggleLine = (plantCode, lineName) => {
    const key = `${plantCode}|${lineName}`;
    setExpandedLines((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleInputChange = (key, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const handleLineInputChange = (key, field, value) => {
    setLineFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: "", text: "" });

    let successCount = 0;
    let errorCount = 0;

    for (const [key, data] of Object.entries(lineFormData)) {
      if (data.value && data.value.toString().trim() !== "") {
        try {
          const payload = {
            plant_code: parseInt(data.plant_code),
            line_name: data.line_name,
            machine_name: null,
            type: activeConfig.type,
            param_value: parseFloat(data.value),
            entry_date: new Date().toISOString().split("T")[0],
          };

          activeConfig.attributes.forEach((attr) => {
            if (data[attr.key]) {
              payload[attr.key] = data[attr.key];
            }
          });

          Object.keys(COMMON_ATTRIBUTES).forEach((field) => {
            if (data[field]) {
              payload[field] = data[field];
            }
          });

          const method = data.cdb_object_id ? "PUT" : "POST";
          if (method === "PUT") {
            payload.cdb_object_id = data.cdb_object_id;
          }

          const authOptions = await getAuthHeadersWithCSRF(method);

          const response = await fetch(
            `${window.location.origin}/internal/machine_entry`,
            {
              method: method,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
              ...authOptions,
            }
          );

          const result = await response.json();

          if (result.status === "success") {
            successCount++;
          } else {
            console.error("Line entry error:", result);
            errorCount++;
          }
        } catch (error) {
          console.error("Error saving line entry:", error);
          errorCount++;
        }
      }
    }

    for (const [key, data] of Object.entries(formData)) {
      if (data.value && data.value.toString().trim() !== "") {
        try {
          const payload = {
            plant_code: parseInt(data.plant_code),
            line_name: data.line_name,
            machine_name: data.machine,
            type: activeConfig.type,
            param_value: parseFloat(data.value),
            entry_date: new Date().toISOString().split("T")[0],
          };

          activeConfig.attributes.forEach((attr) => {
            if (data[attr.key]) {
              payload[attr.key] = data[attr.key];
            }
          });

          Object.keys(COMMON_ATTRIBUTES).forEach((field) => {
            if (data[field]) {
              payload[field] = data[field];
            }
          });

          const method = data.cdb_object_id ? "PUT" : "POST";
          if (method === "PUT") {
            payload.cdb_object_id = data.cdb_object_id;
          }

          const authOptions = await getAuthHeadersWithCSRF(method);

          const response = await fetch(
            `${window.location.origin}/internal/machine_entry`,
            {
              method: method,
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
              ...authOptions,
            }
          );

          const result = await response.json();

          if (result.status === "success") {
            successCount++;
          } else {
            console.error("Machine entry error:", result);
            errorCount++;
          }
        } catch (error) {
          console.error("Error saving machine entry:", error);
          errorCount++;
        }
      }
    }

    setSubmitting(false);

    if (errorCount === 0 && successCount > 0) {
      setMessage({
        type: "success",
        text: `✅ ${successCount} entries saved successfully!`,
      });
      getActiveFetchFunction()();
    } else if (successCount > 0 && errorCount > 0) {
      setMessage({
        type: "warning",
        text: `⚠️ ${successCount} saved, ${errorCount} failed`,
      });
    } else if (errorCount > 0) {
      setMessage({
        type: "error",
        text: `❌ Failed to save entries`,
      });
    } else {
      setMessage({
        type: "warning",
        text: `⚠️ No entries to save`,
      });
    }

    setTimeout(() => setMessage({ type: "", text: "" }), 5000);
  };

  const handleDelete = async (key, isLine = false) => {
    const entry = isLine ? lineFormData[key] : formData[key];
    if (!entry.cdb_object_id) return;

    if (!confirm("Are you sure you want to delete this entry?")) return;

    try {
      const authOptions = await getAuthHeadersWithCSRF("DELETE", false);

      const response = await fetch(
        `${window.location.origin}/internal/machine_entry?id=${entry.cdb_object_id}`,
        { method: "DELETE", ...authOptions }
      );

      const result = await response.json();

      if (result.status === "success") {
        setMessage({ type: "success", text: "✅ Entry deleted successfully!" });
        getActiveFetchFunction()();
      } else {
        setMessage({ type: "error", text: "❌ Failed to delete entry" });
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      setMessage({ type: "error", text: "❌ Error deleting entry" });
    }

    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const handleBack = () => {
    window.location.href = `${window.location.origin}/kalyani.iot/costing`;
  };

  // ========================================================================
  // RENDER HELPERS
  // ========================================================================

  const TabSpecificInput = ({ field, value, onChange, isRequired = false }) => {
    const config = activeConfig.attributes.find((a) => a.key === field);
    if (!config) return null;

    if (config.options) {
      return (
        <div className="flex items-center gap-2 mb-2">
          <label className="text-xs font-semibold text-gray-700 whitespace-nowrap w-24">
            {config.emoji} {config.label}:
          </label>
          <select
            value={value || ""}
            onChange={onChange}
            className="flex-1 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-500 transition-all"
          >
            <option value="">Select</option>
            {config.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-2 mb-2">
          <label className="text-xs font-semibold text-gray-700 whitespace-nowrap w-24">
            {config.emoji} {config.label}:
          </label>
          <input
            type="text"
            value={value || ""}
            onChange={onChange}
            placeholder={config.placeholder}
            className="flex-1 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-500 transition-all"
          />
        </div>
      );
    }
  };

  const TabSpecificCell = ({ field, value, onChange }) => {
    const config = activeConfig.attributes.find((a) => a.key === field);
    if (!config) return null;

    if (config.options) {
      return (
        <td className="px-2 py-1.5">
          <select
            value={value || ""}
            onChange={onChange}
            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 transition-all"
          >
            <option value="">Select</option>
            {config.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </td>
      );
    } else {
      return (
        <td className="px-2 py-1.5">
          <input
            type="text"
            value={value || ""}
            onChange={onChange}
            placeholder={config.label}
            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 transition-all"
          />
        </td>
      );
    }
  };

  const CommonAttributeInput = ({
    field,
    value,
    onChange,
    isRequired = false,
  }) => {
    const config = COMMON_ATTRIBUTES[field];
    if (!config) return null;

    return (
      <div className="flex items-center gap-2 mb-2">
        <label className="text-xs font-semibold text-gray-700 whitespace-nowrap w-24">
          {config.emoji} {config.label}:
        </label>
        <input
          type="text"
          value={value || ""}
          onChange={onChange}
          placeholder={config.placeholder}
          className={`flex-1 px-2 py-1.5 text-xs border ${config.borderColor} rounded ${config.bgColor} ${config.focusRing} ${config.focusBorder} focus:border-transparent transition-all`}
        />
      </div>
    );
  };

  const CommonAttributeCell = ({ field, value, onChange }) => {
    const config = COMMON_ATTRIBUTES[field];
    if (!config) return null;

    return (
      <td className="px-2 py-1.5">
        <input
          type="text"
          value={value || ""}
          onChange={onChange}
          placeholder={config.label}
          className={`w-full px-2 py-1 text-xs border ${config.borderColor} rounded ${config.bgColor} ${config.focusRing} transition-all`}
        />
      </td>
    );
  };

  // ========================================================================
  // RENDER
  // ========================================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <Loader2 className="w-12 h-12 animate-spin mx-auto text-blue-600 mb-4" />
          <p className="text-lg font-bold text-gray-800 mb-2">
            Loading plant data...
          </p>
          {userPlantCode && (
            <p className="text-sm font-medium text-gray-600">
              🏭 {getPlantName(userPlantCode)}
            </p>
          )}
        </div>
      </div>
    );
  }

  const totalMachines = Object.keys(formData).length;
  const totalLines = Object.keys(lineFormData).length;
  const filledMachines = Object.values(formData).filter(
    (d) => d.value && d.value.toString().trim() !== ""
  ).length;
  const filledLines = Object.values(lineFormData).filter(
    (d) => d.value && d.value.toString().trim() !== ""
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <button
                onClick={handleBack}
                className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all"
                title="Back to Costing"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Machine Entry Hub
                </h1>
                <p className="text-xs text-gray-600 font-medium mt-0.5">
                  📍 {getPlantName(userPlantCode)}
                </p>
              </div>
            </div>
            <button
              onClick={handleBack}
              className="p-1.5 rounded-lg border border-red-300 hover:bg-red-50 transition-all"
              title="Close"
            >
              <X className="w-5 h-5 text-red-600" />
            </button>
          </div>

          {/* TABS */}
          <div className="flex gap-2 flex-wrap">
            {availableTabs.map((tabType) => {
              const tab = TAB_CONFIG[tabType];
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.type;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.type)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-md`
                      : `bg-white text-gray-700 ${tab.hoverBg} border border-gray-300`
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-4 px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          {/* TAB HEADER */}
          <div
            className={`bg-gradient-to-r ${activeConfig.gradient} text-white p-3`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">
                    {activeConfig.label} Entry
                  </h2>
                  <p className={`${activeConfig.lightText} text-xs mt-0.5`}>
                    {activeConfig.helpText}
                  </p>
                </div>
              </div>
              <div className="text-right bg-white/10 rounded-lg px-3 py-1.5">
                <p
                  className={`${activeConfig.lightText} text-xs font-semibold`}
                >
                  Lines: {filledLines}/{totalLines} | Machines: {filledMachines}
                  /{totalMachines}
                </p>
              </div>
            </div>
          </div>

          {/* MESSAGE */}
          {message.text && (
            <div
              className={`mx-4 mt-3 p-2.5 rounded-lg flex items-center gap-3 text-sm font-semibold ${
                message.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : message.type === "error"
                  ? "bg-red-100 text-red-800 border border-red-300"
                  : "bg-yellow-100 text-yellow-800 border border-yellow-300"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-4">
              {Object.entries(hierarchicalData).map(
                ([plantCode, plantData]) => (
                  <div
                    key={plantCode}
                    className="border border-gray-300 rounded-lg overflow-hidden bg-white"
                  >
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2">
                      <h3 className="font-bold text-sm">
                        🏭 {getPlantName(plantCode)}
                      </h3>
                    </div>

                    <div className="bg-white">
                      {Object.entries(plantData.lines || {}).map(
                        ([lineName, lineData]) => {
                          const lineKey = `${plantCode}|${lineName}`;
                          const isExpanded = expandedLines[lineKey] !== false;
                          const lineFilledCount = (
                            lineData.machines || []
                          ).filter(
                            (m) =>
                              formData[m.key]?.value &&
                              formData[m.key]?.value.toString().trim() !== ""
                          ).length;

                          const lineRequiredFields = getRequiredFieldsForLine(
                            plantCode,
                            lineName
                          );

                          return (
                            <div
                              key={lineKey}
                              className="border-b last:border-b-0"
                            >
                              {/* LINE HEADER */}
                              <div className={activeConfig.bgColor}>
                                <div
                                  onClick={() =>
                                    toggleLine(plantCode, lineName)
                                  }
                                  className={`flex items-center justify-between px-4 py-2 ${activeConfig.hoverBg} cursor-pointer transition-colors`}
                                >
                                  <div className="flex items-center gap-2">
                                    {isExpanded ? (
                                      <ChevronDown
                                        className={`w-4 h-4 ${activeConfig.textColor}`}
                                      />
                                    ) : (
                                      <ChevronRight
                                        className={`w-4 h-4 ${activeConfig.textColor}`}
                                      />
                                    )}
                                    <span className="font-semibold text-gray-800 text-sm">
                                      📦 {lineName}
                                    </span>
                                    <span className="text-xs text-gray-600 font-medium">
                                      ({(lineData.machines || []).length}m)
                                    </span>
                                  </div>
                                  <span
                                    className={`text-xs px-2 py-1 rounded font-semibold ${
                                      lineFilledCount ===
                                      (lineData.machines || []).length
                                        ? "bg-green-100 text-green-700"
                                        : lineFilledCount > 0
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                  >
                                    {lineFilledCount}/
                                    {(lineData.machines || []).length}
                                  </span>
                                </div>

                                {/* LINE EXPANDED SECTION */}
                                {isExpanded && (
                                  <div
                                    className="px-4 pb-3 space-y-2 border-t border-gray-200 bg-white"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {/* Line Value Input */}
                                    <div className="flex items-center gap-2">
                                      <label className="text-xs font-semibold text-gray-700 whitespace-nowrap w-24">
                                        📊 {activeConfig.unitLabel}:
                                      </label>
                                      <input
                                        type="number"
                                        step="0.01"
                                        value={
                                          lineFormData[lineKey]?.value || ""
                                        }
                                        onChange={(e) =>
                                          handleLineInputChange(
                                            lineKey,
                                            "value",
                                            e.target.value
                                          )
                                        }
                                        placeholder={activeConfig.placeholder}
                                        className="flex-1 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 focus:border-blue-500 transition-all"
                                      />
                                      {lineFormData[lineKey]?.cdb_object_id && (
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(lineKey, true);
                                          }}
                                          className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
                                          title="Delete entry"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      )}
                                      {lineFormData[lineKey]?.cdb_object_id && (
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">
                                          ✓
                                        </span>
                                      )}
                                    </div>

                                    {/* Tab-Specific Attributes */}
                                    {activeConfig.attributes.length > 0 && (
                                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                                        <p className="text-xs font-semibold text-blue-700 mb-2">
                                          📋 {activeConfig.label} Attributes:
                                        </p>
                                        {activeConfig.attributes.map((attr) => (
                                          <TabSpecificInput
                                            key={attr.key}
                                            field={attr.key}
                                            value={
                                              lineFormData[lineKey]?.[attr.key]
                                            }
                                            onChange={(e) =>
                                              handleLineInputChange(
                                                lineKey,
                                                attr.key,
                                                e.target.value
                                              )
                                            }
                                            isRequired={activeConfig.requiredAttributes.includes(
                                              attr.key
                                            )}
                                          />
                                        ))}
                                      </div>
                                    )}

                                    {/* Common Required Fields */}
                                    {lineRequiredFields.length > 0 && (
                                      <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                                        <p className="text-xs font-semibold text-red-700 mb-2">
                                          📋 Required Fields:
                                        </p>
                                        {lineRequiredFields.map((field) => (
                                          <CommonAttributeInput
                                            key={field}
                                            field={field}
                                            value={
                                              lineFormData[lineKey]?.[field]
                                            }
                                            onChange={(e) =>
                                              handleLineInputChange(
                                                lineKey,
                                                field,
                                                e.target.value
                                              )
                                            }
                                            isRequired={true}
                                          />
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>

                              {/* MACHINES TABLE */}
                              {isExpanded && (
                                <div className="bg-white overflow-x-auto">
                                  <table className="w-full text-xs">
                                    <thead>
                                      <tr className="bg-gray-100 border-b border-gray-300">
                                        <th className="px-2 py-1.5 text-left font-semibold text-gray-800 text-xs">
                                          ⚙️ Machine
                                        </th>
                                        <th className="px-2 py-1.5 text-left font-semibold text-gray-800 text-xs">
                                          📊 {activeConfig.unitLabel}
                                        </th>
                                        {activeConfig.attributes.map((attr) => (
                                          <th
                                            key={attr.key}
                                            className="px-2 py-1.5 text-left font-semibold text-gray-800 text-xs"
                                          >
                                            {attr.emoji} {attr.label}
                                          </th>
                                        ))}
                                        {lineRequiredFields.map((field) => (
                                          <th
                                            key={field}
                                            className="px-2 py-1.5 text-left font-semibold text-gray-800 text-xs"
                                          >
                                            {COMMON_ATTRIBUTES[field].emoji}{" "}
                                            {COMMON_ATTRIBUTES[field].label}
                                          </th>
                                        ))}
                                        <th className="px-2 py-1.5 text-center w-8 font-semibold text-gray-800 text-xs">
                                          Act
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {(lineData.machines || []).map(
                                        (machine) => (
                                          <tr
                                            key={machine.key}
                                            className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                                          >
                                            <td className="px-2 py-1.5">
                                              <div className="flex items-center gap-2">
                                                <span className="text-sm">
                                                  ⚙️
                                                </span>
                                                <span className="text-gray-700 font-semibold text-xs">
                                                  {machine.machine}
                                                </span>
                                                {formData[machine.key]
                                                  ?.cdb_object_id && (
                                                  <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold">
                                                    ✓
                                                  </span>
                                                )}
                                              </div>
                                            </td>

                                            <td className="px-2 py-1.5">
                                              <input
                                                type="number"
                                                step="0.01"
                                                value={
                                                  formData[machine.key]
                                                    ?.value || ""
                                                }
                                                onChange={(e) =>
                                                  handleInputChange(
                                                    machine.key,
                                                    "value",
                                                    e.target.value
                                                  )
                                                }
                                                placeholder="Qty"
                                                className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-400 transition-all"
                                              />
                                            </td>

                                            {activeConfig.attributes.map(
                                              (attr) => (
                                                <TabSpecificCell
                                                  key={attr.key}
                                                  field={attr.key}
                                                  value={
                                                    formData[machine.key]?.[
                                                      attr.key
                                                    ]
                                                  }
                                                  onChange={(e) =>
                                                    handleInputChange(
                                                      machine.key,
                                                      attr.key,
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              )
                                            )}

                                            {lineRequiredFields.map((field) => (
                                              <CommonAttributeCell
                                                key={field}
                                                field={field}
                                                value={
                                                  formData[machine.key]?.[field]
                                                }
                                                onChange={(e) =>
                                                  handleInputChange(
                                                    machine.key,
                                                    field,
                                                    e.target.value
                                                  )
                                                }
                                              />
                                            ))}

                                            <td className="px-2 py-1.5 text-center">
                                              {formData[machine.key]
                                                ?.cdb_object_id && (
                                                <button
                                                  type="button"
                                                  onClick={() =>
                                                    handleDelete(machine.key)
                                                  }
                                                  className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50 transition-colors"
                                                  title="Delete entry"
                                                >
                                                  <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                              )}
                                            </td>
                                          </tr>
                                        )
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )
              )}
            </div>

            {Object.keys(hierarchicalData).length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <ActiveIcon className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p className="text-base font-bold text-gray-700 mb-1">
                  No machines found
                </p>
                <p className="text-sm font-medium text-gray-600">
                  for {activeConfig.label.toLowerCase()}
                </p>
              </div>
            )}

            {/* SUBMIT BUTTONS */}
            <div className="mt-4 flex justify-end gap-3 sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent py-3 border-t border-gray-200">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-sm font-semibold border border-gray-400 rounded-lg hover:bg-gray-100 transition-all text-gray-800 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className={`flex items-center gap-2 bg-gradient-to-r ${activeConfig.gradient} text-white px-5 py-2 text-sm rounded-lg hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all font-semibold shadow-md`}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save All Entries</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
