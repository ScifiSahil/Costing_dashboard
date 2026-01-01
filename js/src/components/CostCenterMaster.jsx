import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Plus,
  Edit2,
  Search,
  Filter,
  X,
  Save,
  Loader2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { getAuthHeadersWithCSRF } from "../utils/authFetch";
import { API_ENDPOINTS, API_BASE_URL } from "../utils/apiConfig"; // ✅ IMPORT API CONFIG

// ✅ SUB-PARAMETER DEFINITIONS WITH PREFIXES
const SUB_PARAMS = {
  fuel: [
    { value: "Fuel_Diesel", label: "Diesel" },
    { value: "Fuel_LPG", label: "LPG" },
    { value: "Fuel_CNG", label: "CNG" },
    { value: "Fuel_Biodiesel", label: "Biodiesel" },
    { value: "Fuel_CO2", label: "CO₂" },
    { value: "Fuel_PNG", label: "PNG" },
    { value: "Fuel_Ht", label: "HT" },
  ],
  power: [
    { value: "Power_Solar", label: "Solar" },
    { value: "Power_OpenAccess", label: "Open Access Renewable" },
    { value: "Power_RooftopSolar", label: "Rooftop Solar" },
    { value: "Power_MCEDCL", label: "MCEDCL" },
  ],
  subcontract: [
    { value: "Subcontract_POST_PROCESS", label: "POST_PROCESS" },
    { value: "Subcontract_MPI", label: "MPI" },
    { value: "Subcontract_OUTSOURCE", label: "OUTSOURCE" },
  ],
};

const CostCenterMaster = () => {
  const [activeTab, setActiveTab] = useState("master");
  const [costCenters, setCostCenters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    applicable_for_fuel: 0,
    applicable_for_power: 0,
    applicable_for_subcontract: 0,
    company_code: "",
    cost_center: "",
    cost_center_category: "",
    description: "",
    isactive: 1,
    line_name: "",
    machine: "",
    plant_code: "",
    plant_details: "",
    profit_center: "",
    cdb_object_id: "",
    sub_param_type: "",
    power_unit: "kVAh",
    requires_line: 0,
    requires_die: 0,
    requires_vendor: 0,
  });

  const [selectedSubParams, setSelectedSubParams] = useState({
    fuel: [],
    power: [],
    subcontract: [],
  });

  const [saving, setSaving] = useState(false);

  // ✅ PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  // ✅ DEBOUNCED SEARCH - 300ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    fetchCostCenters();
  }, []);

  const fetchCostCenters = async () => {
    setLoading(true);
    try {
      // ✅ USE API_ENDPOINTS instead of hardcoded URL
      const response = await fetch(API_ENDPOINTS.COST_CENTER_MASTER);
      const data = await response.json();
      setCostCenters(data.objects || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch cost centers");
    } finally {
      setLoading(false);
    }
  };

  // ✅ HELPER: MANAGE SUBCONTRACT REQUIREMENTS BASED ON SELECTION
  const updateSubcontractRequirements = (selectedSubs) => {
    let requires_line = 0;
    let requires_die = 0;
    let requires_vendor = 0;

    if (selectedSubs.includes("Subcontract_POST_PROCESS")) {
      requires_line = 1;
    }

    if (selectedSubs.includes("Subcontract_MPI")) {
      requires_die = 1;
      requires_line = 1;
    }

    if (selectedSubs.includes("Subcontract_OUTSOURCE")) {
      requires_die = 1;
      requires_vendor = 1;
    }

    return { requires_line, requires_die, requires_vendor };
  };

  // ✅ HELPER: PARSE sub_param_type STRING TO SELECTED PARAMS
  const parseSubParams = (subParamString) => {
    if (!subParamString) return { fuel: [], power: [], subcontract: [] };

    const params = subParamString.split(",").map((p) => p.trim());
    return {
      fuel: params.filter((p) => p.startsWith("Fuel_")),
      power: params.filter((p) => p.startsWith("Power_")),
      subcontract: params.filter((p) => p.startsWith("Subcontract_")),
    };
  };

  // ✅ HELPER: GENERATE sub_param_type STRING FROM SELECTED PARAMS
  const generateSubParamType = (selected) => {
    const all = [...selected.fuel, ...selected.power, ...selected.subcontract];
    return all.join(",");
  };

  // ✅ UPDATE SUB-PARAMETER SELECTION
  const handleSubParamChange = (type, value, checked) => {
    setSelectedSubParams((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[type] = [...updated[type], value];
      } else {
        updated[type] = updated[type].filter((v) => v !== value);
      }
      setFormData((prevForm) => {
        const newSubParamType = generateSubParamType(updated);

        if (type === "subcontract") {
          const requirements = updateSubcontractRequirements(
            updated.subcontract
          );
          return {
            ...prevForm,
            sub_param_type: newSubParamType,
            ...requirements,
          };
        }

        return {
          ...prevForm,
          sub_param_type: newSubParamType,
        };
      });
      return updated;
    });
  };

  // ✅ HANDLE MAIN CHECKBOX CHANGES
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? 1 : 0,
      }));

      if (!checked) {
        const categoryMap = {
          applicable_for_fuel: "fuel",
          applicable_for_power: "power",
          applicable_for_subcontract: "subcontract",
        };

        const subParamKey = categoryMap[name];
        if (subParamKey) {
          setSelectedSubParams((prev) => {
            const updated = { ...prev, [subParamKey]: [] };
            setFormData((prevForm) => ({
              ...prevForm,
              sub_param_type: generateSubParamType(updated),
            }));
            return updated;
          });
        }
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreate = async () => {
    setSaving(true);
    try {
      const authOptions = await getAuthHeadersWithCSRF("POST");
      // ✅ USE API_ENDPOINTS
      const response = await fetch(API_ENDPOINTS.COST_CENTER_MASTER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        ...authOptions,
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchCostCenters();
        setShowModal(false);
        resetForm();
        alert("Cost Center created successfully!");
      } else {
        alert("Failed to create cost center");
      }
    } catch (error) {
      console.error("Error creating:", error);
      alert("Error creating cost center");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      const authOptions = await getAuthHeadersWithCSRF("PUT");
      // ✅ USE API_ENDPOINTS with ID
      const response = await fetch(
        `${API_ENDPOINTS.COST_CENTER_MASTER}/${formData.cdb_object_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          ...authOptions,
        }
      );

      if (response.ok) {
        await fetchCostCenters();
        setShowModal(false);
        resetForm();
        alert("Cost Center updated successfully!");
      } else {
        alert("Failed to update cost center");
      }
    } catch (error) {
      console.error("Error updating:", error);
      alert("Error updating cost center");
    } finally {
      setSaving(false);
    }
  };

  const openCreateModal = () => {
    resetForm();
    setEditMode(false);
    setShowModal(true);
  };

  const openEditModal = (center) => {
    const parsed = parseSubParams(center.sub_param_type);

    setFormData({
      applicable_for_fuel: center.applicable_for_fuel || 0,
      applicable_for_power: center.applicable_for_power || 0,
      applicable_for_subcontract: center.applicable_for_subcontract || 0,
      company_code: center.company_code || "",
      cost_center: center.cost_center || "",
      cost_center_category: center.cost_center_category || "",
      description: center.description || "",
      isactive: center.isactive || 0,
      line_name: center.line_name || "",
      machine: center.machine || "",
      plant_code: center.plant_code || "",
      plant_details: center.plant_details || "",
      profit_center: center.profit_center || "",
      cdb_object_id: center.cdb_object_id,
      sub_param_type: center.sub_param_type || "",
      power_unit: center.power_unit || "kVAh",
      requires_line: center.requires_line || 0,
      requires_die: center.requires_die || 0,
      requires_vendor: center.requires_vendor || 0,
    });

    setSelectedSubParams(parsed);
    setEditMode(true);
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      applicable_for_fuel: 0,
      applicable_for_power: 0,
      applicable_for_subcontract: 0,
      company_code: "",
      cost_center: "",
      cost_center_category: "",
      description: "",
      isactive: 1,
      line_name: "",
      machine: "",
      plant_code: "",
      plant_details: "",
      profit_center: "",
      cdb_object_id: "",
      sub_param_type: "",
      power_unit: "kVAh",
      requires_line: 0,
      requires_die: 0,
      requires_vendor: 0,
    });

    setSelectedSubParams({
      fuel: [],
      power: [],
      subcontract: [],
    });
  };

  const filteredCenters = useMemo(() => {
    return costCenters.filter((center) => {
      const matchesSearch =
        debouncedSearch === "" ||
        center.line_name
          ?.toLowerCase()
          .includes(debouncedSearch.toLowerCase()) || // ⭐ line_name search करो
        center.machine?.toLowerCase().includes(debouncedSearch.toLowerCase()) || // ⭐ machine search करो
        center.description
          ?.toLowerCase()
          .includes(debouncedSearch.toLowerCase()) ||
        center.plant_details
          ?.toLowerCase()
          .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        center.cost_center_category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [costCenters, debouncedSearch, selectedCategory]);

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(filteredCenters.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredCenters.slice(startIndex, endIndex);

  // ✅ PAGINATION CONTROLS
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  // ✅ GET PAGE NUMBERS FOR PAGINATION
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const categories = useMemo(() => {
    return [...new Set(costCenters.map((c) => c.cost_center_category))].filter(
      Boolean
    );
  }, [costCenters]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* ✅ STICKY HEADER */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
          padding: "0 1.5rem",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 999,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#ffffff",
            letterSpacing: "0.3px",
          }}
        >
          Kalyani Technoforge Ltd.
        </h1>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => (window.location.href = API_ENDPOINTS.DETAILS)}
            style={{
              background: "#ffffff",
              border: "2px solid #ffffff",
              color: "#1e40af",
              padding: "0.5rem 1.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("master")}
            style={{
              background:
                activeTab === "master" ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
              border: "2px solid transparent",
              color: "#ffffff",
              padding: "0.5rem 1.5rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "master") {
                e.target.style.background = "rgba(255, 255, 255, 0.3)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "master") {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
              }
            }}
          >
            Master Data
          </button>
        </div>
      </div>

      {/* ✅ DEBUG: Show API Base URL */}
      <div
        style={{
          marginTop: "80px",
          padding: "0.75rem 1.5rem",
          background: "#dbeafe",
          border: "1px solid #0ea5e9",
          borderRadius: "8px",
          margin: "80px 1.5rem 1.5rem 1.5rem",
          fontSize: "0.875rem",
          color: "#0c4a6e",
        }}
      >
        <strong>🌐 API Base URL:</strong> {API_BASE_URL}
        <br />
        <strong>📍 Environment:</strong>{" "}
        {window.location.hostname === "localhost" ? "LOCAL DEV" : "PRODUCTION"}
      </div>

      {/* ✅ MAIN CONTENT - ADJUSTED FOR FIXED HEADER */}
      <div
        style={{
          marginTop: "0px",
          padding: "1.5rem",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  margin: 0,
                  color: "#1e293b",
                }}
              >
                Cost Center Master
              </h2>
              <p
                style={{
                  color: "#64748b",
                  margin: "0.5rem 0 0 0",
                  fontSize: "0.9375rem",
                }}
              >
                {loading
                  ? "Loading..."
                  : `Showing ${startIndex + 1}-${Math.min(
                      endIndex,
                      filteredCenters.length
                    )} of ${filteredCenters.length} records`}
              </p>
            </div>
            <button
              onClick={openCreateModal}
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                border: "none",
                color: "white",
                padding: "0.875rem 1.75rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.9375rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              <Plus size={18} />
              Add New
            </button>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", flex: "1" }}>
              <Search
                size={18}
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                }}
              />
              <input
                type="text"
                placeholder="Search cost centers... (auto-search after 300ms)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem 0.75rem 0.75rem 2.75rem",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  color: "#1e293b",
                  fontSize: "0.9375rem",
                  outline: "none",
                }}
              />
              {searchTerm && searchTerm !== debouncedSearch && (
                <span
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "0.8125rem",
                    color: "#94a3b8",
                  }}
                >
                  Searching...
                </span>
              )}
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                padding: "0.75rem 2rem 0.75rem 0.75rem",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                color: "#1e293b",
                fontSize: "0.9375rem",
                outline: "none",
                cursor: "pointer",
                minWidth: "150px",
              }}
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* ✅ PAGE SIZE SELECTOR */}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              style={{
                padding: "0.75rem 2rem 0.75rem 0.75rem",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                color: "#1e293b",
                fontSize: "0.9375rem",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
              <option value={100}>100 / page</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {loading ? (
            <div style={{ padding: "3rem" }}>
              <LoadingSkeleton />
            </div>
          ) : (
            <>
              <div style={{ overflowX: "auto", maxHeight: "500px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead
                    style={{
                      position: "sticky",
                      top: 0,
                      background: "#f8fafc",
                      borderBottom: "2px solid #e2e8f0",
                      zIndex: 1,
                    }}
                  >
                    <tr>
                      <th style={headerStyle}>Line Name</th>
                      <th style={headerStyle}>Machine</th>
                      <th style={headerStyle}>Description</th>
                      <th style={headerStyle}>Plant</th>
                      <th style={headerStyle}>Company</th>
                      <th style={headerStyle}>Status</th>
                      <th style={headerStyle}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.length === 0 ? (
                      <tr>
                        <td
                          colSpan="7"
                          style={{
                            padding: "3rem",
                            textAlign: "center",
                            color: "#94a3b8",
                          }}
                        >
                          <div
                            style={{ fontSize: "3rem", marginBottom: "1rem" }}
                          >
                            📊
                          </div>
                          <p
                            style={{
                              fontWeight: "600",
                              marginBottom: "0.5rem",
                              fontSize: "1rem",
                            }}
                          >
                            No records found
                          </p>
                          <p style={{ fontSize: "0.9375rem" }}>
                            Try adjusting your search or filters
                          </p>
                        </td>
                      </tr>
                    ) : (
                      paginatedData.map((center) => (
                        <tr
                          key={center.cdb_object_id}
                          style={{
                            borderBottom: "1px solid #f1f5f9",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#f8fafc")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          {/* Line Name - पहले Cost Center था */}
                          <td style={cellStyle}>
                            <span
                              style={{ fontWeight: "600", color: "#3b82f6" }}
                            >
                              {center.line_name || "-"}{" "}
                              {/* ⭐ line_name दिखाओ */}
                            </span>
                          </td>

                          {/* Machine - पहले Category था */}
                          <td style={cellStyle}>
                            <span
                              style={{
                                background: "#ede9fe",
                                color: "#7c3aed",
                                padding: "0.375rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.8125rem",
                                fontWeight: "600",
                              }}
                            >
                              {center.machine || "-"} {/* ⭐ machine दिखाओ */}
                            </span>
                          </td>

                          {/* Description */}
                          <td style={cellStyle}>{center.description || "-"}</td>

                          {/* Plant */}
                          <td style={cellStyle}>
                            {center.plant_details || "-"}
                          </td>

                          {/* Company */}
                          <td style={cellStyle}>
                            {center.company_code || "-"}
                          </td>

                          {/* Status */}
                          <td style={cellStyle}>
                            <span
                              style={{
                                background:
                                  center.isactive === 1 ? "#dcfce7" : "#fee2e2",
                                color:
                                  center.isactive === 1 ? "#16a34a" : "#dc2626",
                                padding: "0.375rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.8125rem",
                                fontWeight: "600",
                              }}
                            >
                              {center.isactive === 1 ? "Active" : "Inactive"}
                            </span>
                          </td>

                          {/* Actions */}
                          <td style={cellStyle}>
                            <button
                              onClick={() => openEditModal(center)}
                              style={{
                                background: "#e0f2fe",
                                border: "1px solid #bae6fd",
                                color: "#0284c7",
                                padding: "0.5rem 0.875rem",
                                borderRadius: "6px",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                fontSize: "0.8125rem",
                                fontWeight: "600",
                              }}
                            >
                              <Edit2 size={14} />
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* ✅ PAGINATION CONTROLS */}
              {filteredCenters.length > 0 && (
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f8fafc",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9375rem",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    Page {currentPage} of {totalPages} ({filteredCenters.length}{" "}
                    total)
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={goToFirstPage}
                      disabled={currentPage === 1}
                      style={paginationButtonStyle(currentPage === 1)}
                      title="First Page"
                    >
                      <ChevronsLeft size={16} />
                    </button>

                    <button
                      onClick={goToPrevPage}
                      disabled={currentPage === 1}
                      style={paginationButtonStyle(currentPage === 1)}
                      title="Previous Page"
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {getPageNumbers().map((page, idx) =>
                      page === "..." ? (
                        <span
                          key={`ellipsis-${idx}`}
                          style={{ padding: "0 0.5rem", color: "#94a3b8" }}
                        >
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          style={{
                            ...paginationButtonStyle(false),
                            background:
                              currentPage === page
                                ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                                : "#ffffff",
                            color: currentPage === page ? "white" : "#334155",
                            fontWeight: currentPage === page ? "700" : "500",
                            minWidth: "36px",
                          }}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      style={paginationButtonStyle(currentPage === totalPages)}
                      title="Next Page"
                    >
                      <ChevronRight size={16} />
                    </button>

                    <button
                      onClick={goToLastPage}
                      disabled={currentPage === totalPages}
                      style={paginationButtonStyle(currentPage === totalPages)}
                      title="Last Page"
                    >
                      <ChevronsRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Form Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "2rem",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              overflowY: "auto",
              boxShadow: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 2rem",
                borderBottom: "1px solid #e2e8f0",
                background: "#f8fafc",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {editMode ? "Edit Cost Center" : "Create New Cost Center"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "#fee2e2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.5rem",
                }}
              >
                <FormField
                  label="Cost Center"
                  name="cost_center"
                  value={formData.cost_center}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Category"
                  name="cost_center_category"
                  value={formData.cost_center_category}
                  onChange={handleInputChange}
                  required
                />
                <div style={{ gridColumn: "1 / -1" }}>
                  <FormField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <FormField
                  label="Company Code"
                  name="company_code"
                  value={formData.company_code}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  label="Plant Code"
                  name="plant_code"
                  value={formData.plant_code}
                  onChange={handleInputChange}
                  required
                />
                <div style={{ gridColumn: "1 / -1" }}>
                  <FormField
                    label="Plant Details"
                    name="plant_details"
                    value={formData.plant_details}
                    onChange={handleInputChange}
                  />
                </div>
                <FormField
                  label="Profit Center"
                  name="profit_center"
                  value={formData.profit_center}
                  onChange={handleInputChange}
                />
                <FormField
                  label="Line Name"
                  name="line_name"
                  value={formData.line_name}
                  onChange={handleInputChange}
                />
                <div style={{ gridColumn: "1 / -1" }}>
                  <FormField
                    label="Machine"
                    name="machine"
                    value={formData.machine}
                    onChange={handleInputChange}
                  />
                </div>

                {/* ✅ APPLICABLE FOR SECTION WITH SUB-PARAMETERS */}
                <div style={{ gridColumn: "1 / -1", marginTop: "1rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.9375rem",
                      fontWeight: "700",
                      color: "#1e293b",
                      marginBottom: "1rem",
                    }}
                  >
                    Applicable For
                  </label>

                  {/* ✅ FUEL SECTION */}
                  <div
                    style={{
                      background:
                        formData.applicable_for_fuel === 1
                          ? "#fef3c7"
                          : "#f8fafc",
                      border:
                        formData.applicable_for_fuel === 1
                          ? "2px solid #fbbf24"
                          : "2px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.5rem",
                      marginBottom: "1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CheckboxField
                      label="⛽ Fuel"
                      name="applicable_for_fuel"
                      checked={formData.applicable_for_fuel === 1}
                      onChange={handleInputChange}
                    />

                    {formData.applicable_for_fuel === 1 && (
                      <div
                        style={{
                          marginTop: "1rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid #fbbf24",
                        }}
                      >
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#92400e",
                            marginBottom: "0.75rem",
                          }}
                        >
                          Select Fuel Types:
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1rem",
                          }}
                        >
                          {SUB_PARAMS.fuel.map((param) => (
                            <SubParamCheckboxField
                              key={param.value}
                              label={param.label}
                              value={param.value}
                              checked={selectedSubParams.fuel.includes(
                                param.value
                              )}
                              onChange={(e) =>
                                handleSubParamChange(
                                  "fuel",
                                  param.value,
                                  e.target.checked
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ✅ POWER SECTION */}
                  <div
                    style={{
                      background:
                        formData.applicable_for_power === 1
                          ? "#dbeafe"
                          : "#f8fafc",
                      border:
                        formData.applicable_for_power === 1
                          ? "2px solid #0ea5e9"
                          : "2px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.5rem",
                      marginBottom: "1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <CheckboxField
                        label="⚡ Power"
                        name="applicable_for_power"
                        checked={formData.applicable_for_power === 1}
                        onChange={handleInputChange}
                      />
                      {formData.applicable_for_power === 1 && (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color: "#0c4a6e",
                            }}
                          >
                            Unit:
                          </span>
                          <span
                            style={{
                              background: "#ffffff",
                              border: "1px solid #0ea5e9",
                              padding: "0.375rem 0.875rem",
                              borderRadius: "6px",
                              fontSize: "0.875rem",
                              fontWeight: "700",
                              color: "#0284c7",
                            }}
                          >
                            {formData.power_unit}
                          </span>
                        </div>
                      )}
                    </div>

                    {formData.applicable_for_power === 1 && (
                      <div
                        style={{
                          marginTop: "1rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid #0ea5e9",
                        }}
                      >
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#0c4a6e",
                            marginBottom: "0.75rem",
                          }}
                        >
                          Select Power Types:
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1rem",
                          }}
                        >
                          {SUB_PARAMS.power.map((param) => (
                            <SubParamCheckboxField
                              key={param.value}
                              label={param.label}
                              value={param.value}
                              checked={selectedSubParams.power.includes(
                                param.value
                              )}
                              onChange={(e) =>
                                handleSubParamChange(
                                  "power",
                                  param.value,
                                  e.target.checked
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ✅ SUBCONTRACT SECTION */}
                  <div
                    style={{
                      background:
                        formData.applicable_for_subcontract === 1
                          ? "#fce7f3"
                          : "#f8fafc",
                      border:
                        formData.applicable_for_subcontract === 1
                          ? "2px solid #ec4899"
                          : "2px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "1.5rem",
                      marginBottom: "1rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CheckboxField
                      label="🔧 Subcontract"
                      name="applicable_for_subcontract"
                      checked={formData.applicable_for_subcontract === 1}
                      onChange={handleInputChange}
                    />

                    {formData.applicable_for_subcontract === 1 && (
                      <div
                        style={{
                          marginTop: "1rem",
                          paddingTop: "1rem",
                          borderTop: "1px solid #ec4899",
                        }}
                      >
                        <label
                          style={{
                            display: "block",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#831843",
                            marginBottom: "0.75rem",
                          }}
                        >
                          Select Subcontract Types:
                        </label>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1rem",
                            marginBottom: "1rem",
                          }}
                        >
                          {SUB_PARAMS.subcontract.map((param) => (
                            <SubParamCheckboxField
                              key={param.value}
                              label={param.label}
                              value={param.value}
                              checked={selectedSubParams.subcontract.includes(
                                param.value
                              )}
                              onChange={(e) =>
                                handleSubParamChange(
                                  "subcontract",
                                  param.value,
                                  e.target.checked
                                )
                              }
                            />
                          ))}
                        </div>

                        {/* ✅ SHOW REQUIRED FIELDS BASED ON SUBCONTRACT SELECTION */}
                        {selectedSubParams.subcontract.length > 0 && (
                          <div
                            style={{
                              background: "#f0f9ff",
                              border: "1px solid #7dd3fc",
                              borderRadius: "6px",
                              padding: "1rem",
                              marginTop: "1rem",
                            }}
                          >
                            <label
                              style={{
                                display: "block",
                                fontSize: "0.8125rem",
                                fontWeight: "700",
                                color: "#0c4a6e",
                                marginBottom: "0.75rem",
                              }}
                            >
                              📋 Automatically Required Fields:
                            </label>
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "0.75rem",
                              }}
                            >
                              <div
                                style={{
                                  padding: "0.75rem",
                                  background:
                                    formData.requires_line === 1
                                      ? "#dcfce7"
                                      : "#f1f5f9",
                                  border:
                                    formData.requires_line === 1
                                      ? "2px solid #16a34a"
                                      : "1px solid #cbd5e1",
                                  borderRadius: "6px",
                                  textAlign: "center",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "0.8125rem",
                                    fontWeight: "600",
                                    color: "#334155",
                                  }}
                                >
                                  requires_line
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color:
                                      formData.requires_line === 1
                                        ? "#16a34a"
                                        : "#cbd5e1",
                                  }}
                                >
                                  {formData.requires_line === 1 ? "✓" : "-"}
                                </div>
                              </div>

                              <div
                                style={{
                                  padding: "0.75rem",
                                  background:
                                    formData.requires_die === 1
                                      ? "#dcfce7"
                                      : "#f1f5f9",
                                  border:
                                    formData.requires_die === 1
                                      ? "2px solid #16a34a"
                                      : "1px solid #cbd5e1",
                                  borderRadius: "6px",
                                  textAlign: "center",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "0.8125rem",
                                    fontWeight: "600",
                                    color: "#334155",
                                  }}
                                >
                                  requires_die
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color:
                                      formData.requires_die === 1
                                        ? "#16a34a"
                                        : "#cbd5e1",
                                  }}
                                >
                                  {formData.requires_die === 1 ? "✓" : "-"}
                                </div>
                              </div>

                              <div
                                style={{
                                  padding: "0.75rem",
                                  background:
                                    formData.requires_vendor === 1
                                      ? "#dcfce7"
                                      : "#f1f5f9",
                                  border:
                                    formData.requires_vendor === 1
                                      ? "2px solid #16a34a"
                                      : "1px solid #cbd5e1",
                                  borderRadius: "6px",
                                  textAlign: "center",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "0.8125rem",
                                    fontWeight: "600",
                                    color: "#334155",
                                  }}
                                >
                                  requires_vendor
                                </div>
                                <div
                                  style={{
                                    fontSize: "1.25rem",
                                    fontWeight: "700",
                                    color:
                                      formData.requires_vendor === 1
                                        ? "#16a34a"
                                        : "#cbd5e1",
                                  }}
                                >
                                  {formData.requires_vendor === 1 ? "✓" : "-"}
                                </div>
                              </div>
                            </div>

                            {/* ✅ SHOW MAPPING */}
                            <div
                              style={{
                                marginTop: "0.75rem",
                                fontSize: "0.75rem",
                                color: "#0c4a6e",
                                fontStyle: "italic",
                              }}
                            >
                              <div>POST_PROCESS → requires_line = 1</div>
                              <div>
                                MPI → requires_die = 1 + requires_line = 1
                              </div>
                              <div>
                                OUTSOURCE → requires_die = 1 + requires_vendor =
                                1
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ✅ ACTIVE STATUS */}
                  <div
                    style={{
                      background: "#f1f5f9",
                      border: "2px solid #cbd5e1",
                      borderRadius: "8px",
                      padding: "1.5rem",
                    }}
                  >
                    <CheckboxField
                      label="✓ Active Status"
                      name="isactive"
                      checked={formData.isactive === 1}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* ✅ DEBUG: SHOW GENERATED sub_param_type */}
                  {formData.sub_param_type && (
                    <div
                      style={{
                        marginTop: "1rem",
                        padding: "1rem",
                        background: "#e0f2fe",
                        border: "1px solid #0ea5e9",
                        borderRadius: "8px",
                        fontSize: "0.875rem",
                      }}
                    >
                      <strong>sub_param_type will be:</strong>
                      <br />
                      <code>{formData.sub_param_type}</code>
                    </div>
                  )}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "2rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    color: "#334155",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9375rem",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={editMode ? handleUpdate : handleCreate}
                  disabled={saving}
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                    border: "none",
                    color: "white",
                    padding: "0.75rem 1.75rem",
                    borderRadius: "8px",
                    cursor: saving ? "not-allowed" : "pointer",
                    fontWeight: "600",
                    fontSize: "0.9375rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    opacity: saving ? 0.7 : 1,
                  }}
                >
                  {saving ? (
                    <>
                      <Loader2
                        size={18}
                        style={{ animation: "spin 1s linear infinite" }}
                      />{" "}
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={18} /> {editMode ? "Update" : "Create"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
      `}</style>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div>
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #f1f5f9",
        }}
      >
        {[...Array(7)].map((_, j) => (
          <div
            key={j}
            style={{
              flex: 1,
              height: "20px",
              background:
                "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%)",
              backgroundSize: "1000px 100%",
              animation: "shimmer 2s infinite",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    ))}
  </div>
);

const paginationButtonStyle = (disabled) => ({
  padding: "0.5rem 0.75rem",
  background: disabled ? "#f1f5f9" : "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "6px",
  cursor: disabled ? "not-allowed" : "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: disabled ? "#cbd5e1" : "#334155",
  opacity: disabled ? 0.5 : 1,
  transition: "all 0.2s",
  fontSize: "0.9375rem",
  fontWeight: "500",
});

const headerStyle = {
  padding: "1rem 1.25rem",
  textAlign: "left",
  fontSize: "0.8125rem",
  fontWeight: "700",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const cellStyle = {
  padding: "1rem 1.25rem",
  fontSize: "0.9375rem",
  color: "#334155",
};

const FormField = ({
  label,
  name,
  value,
  onChange,
  required,
  type = "text",
}) => (
  <div>
    <label
      style={{
        display: "block",
        fontSize: "0.9375rem",
        fontWeight: "600",
        color: "#475569",
        marginBottom: "0.5rem",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {label} {required && <span style={{ color: "#ef4444" }}>*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "0.75rem 1rem",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        color: "#1e293b",
        fontSize: "0.9375rem",
        outline: "none",
        boxSizing: "border-box",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    />
  </div>
);

const CheckboxField = ({ label, name, checked, onChange }) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      cursor: "pointer",
      padding: "0.875rem",
      background: "#ffffff",
      borderRadius: "8px",
      border: "2px solid #e2e8f0",
      transition: "all 0.2s",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#e0f2fe";
      e.currentTarget.style.borderColor = "#3b82f6";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#ffffff";
      e.currentTarget.style.borderColor = "#e2e8f0";
    }}
  >
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      style={{
        width: "20px",
        height: "20px",
        cursor: "pointer",
        accentColor: "#3b82f6",
      }}
    />
    <span
      style={{ fontSize: "0.9375rem", fontWeight: "600", color: "#334155" }}
    >
      {label}
    </span>
  </label>
);

const SubParamCheckboxField = ({ label, value, checked, onChange }) => (
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.625rem",
      cursor: "pointer",
      padding: "0.75rem",
      background: "#ffffff",
      borderRadius: "6px",
      border: "1px solid #cbd5e1",
      transition: "all 0.2s",
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "#f0fdf4";
      e.currentTarget.style.borderColor = "#22c55e";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "#ffffff";
      e.currentTarget.style.borderColor = "#cbd5e1";
    }}
  >
    <input
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      style={{
        width: "18px",
        height: "18px",
        cursor: "pointer",
        accentColor: "#22c55e",
      }}
    />
    <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#334155" }}>
      {label}
    </span>
  </label>
);

export default CostCenterMaster;
