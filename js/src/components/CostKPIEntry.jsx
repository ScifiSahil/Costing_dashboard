import React, { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2, X, Save, ArrowLeft, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const CostKPIEntry = ({ onClose }) => {
  const [kpiList, setKpiList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [formData, setFormData] = useState({
    cost_date: "",
    kpi_name: "",
    plant_code: "",
    cost_value: "",
    cost_measurement: "cost per ton",
    prod_or_sale: "Production",
  });
  const [editingId, setEditingId] = useState(null);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const API_BASE =
    "https://ktflceprd.kalyanicorp.com/api/v1/collection/cost_kpi_entry";

  // Get Cookie Helper
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  // Auth Headers with CSRF
  const getAuthHeadersWithCSRF = async (method = "GET", contentType = true) => {
    const credentials = btoa("kalyaniadmin:kalyaniadmin@7001");

    await fetch(API_BASE, {
      method: "GET",
      headers: { Authorization: `Basic ${credentials}` },
      credentials: "include",
    });

    const csrfToken = getCookie("CSRFToken");
    console.log("🔑 CSRF Token:", csrfToken);

    if (!csrfToken) {
      throw new Error("CSRF token not found in cookies.");
    }

    const headers = {
      Authorization: `Basic ${credentials}`,
      "X-CSRF-Token": csrfToken,
    };

    if (contentType) {
      headers["Content-Type"] = "application/json";
    }

    return { headers, credentials: "include" };
  };

  // Show notification
  const showNotification = (message, type = "success") => {
    setNotification({ show: true, message, type });
    setTimeout(
      () => setNotification({ show: false, message: "", type: "" }),
      3000
    );
  };

  // Fetch all KPI entries
  const fetchKPIList = async () => {
    setLoading(true);
    try {
      const authOptions = await getAuthHeadersWithCSRF("GET");
      const response = await fetch(API_BASE, { method: "GET", ...authOptions });

      if (!response.ok) throw new Error("Failed to fetch KPI entries");

      const data = await response.json();
      setKpiList(data.objects || []);
      showNotification("KPI entries loaded successfully", "success");
    } catch (error) {
      console.error("Fetch failed:", error);
      showNotification("Failed to load KPI entries: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Create KPI entry (POST)
  const createKPI = async () => {
    setLoading(true);
    try {
      const payload = {
        cost_date: formData.cost_date,
        kpi_name: formData.kpi_name,
        plant_code: parseInt(formData.plant_code),
        cost_value: parseFloat(formData.cost_value),
        cost_measurement: formData.cost_measurement,
        prod_or_sale: formData.prod_or_sale,
      };

      console.log("📤 POST Payload:", payload);

      const authOptions = await getAuthHeadersWithCSRF("POST");
      const response = await fetch(API_BASE, {
        method: "POST",
        ...authOptions,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error("API Error: " + errorText);
      }

      showNotification("KPI entry created successfully", "success");
      setShowModal(false);
      fetchKPIList();
      resetForm();
      setCurrentPage(1);
    } catch (error) {
      console.error("Create failed:", error);
      showNotification("Failed to create: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Update KPI entry
  const updateKPI = async () => {
    setLoading(true);
    try {
      if (!editingId) {
        throw new Error("KPI ID is missing!");
      }

      const payload = {
        cost_date: formData.cost_date,
        kpi_name: formData.kpi_name,
        plant_code: parseInt(formData.plant_code),
        cost_value: parseFloat(formData.cost_value),
        cost_measurement: formData.cost_measurement,
        prod_or_sale: formData.prod_or_sale,
      };

      const updateUrl = `${API_BASE}/${editingId}`;

      console.log("========== UPDATE DEBUG ==========");
      console.log("📤 Method: PUT");
      console.log("📤 URL:", updateUrl);
      console.log("📤 Payload:", JSON.stringify(payload, null, 2));
      console.log("===================================");

      const authOptions = await getAuthHeadersWithCSRF("PUT");
      const response = await fetch(updateUrl, {
        method: "PUT",
        ...authOptions,
        body: JSON.stringify(payload),
      });

      console.log("📥 Response status:", response.status);

      const responseText = await response.text();
      console.log("📥 Response body:", responseText);

      if (!response.ok) {
        throw new Error("API Error: " + responseText);
      }

      let result;
      try {
        result = JSON.parse(responseText);
        console.log("✅ Update result:", result);
      } catch (e) {
        console.log("✅ Update completed (non-JSON response)");
      }

      showNotification("KPI entry updated successfully", "success");
      setShowModal(false);

      await fetchKPIList();
      resetForm();
    } catch (error) {
      console.error("Update failed:", error);
      showNotification("Failed to update: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Delete KPI entry
  const deleteKPI = async (kpiId, kpiName) => {
    if (!window.confirm(`Are you sure you want to delete ${kpiName}?`)) {
      return;
    }

    setLoading(true);
    try {
      const deleteUrl = `${API_BASE}/${kpiId}`;

      console.log("📤 DELETE URL:", deleteUrl);

      const authOptions = await getAuthHeadersWithCSRF("DELETE");
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        ...authOptions,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error("API Error: " + errorText);
      }

      showNotification("KPI entry deleted successfully", "success");
      fetchKPIList();
    } catch (error) {
      console.error("Delete failed:", error);
      showNotification("Failed to delete: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      cost_date: "",
      kpi_name: "",
      plant_code: "",
      cost_value: "",
      cost_measurement: "cost per ton",
      prod_or_sale: "Production",
    });
    setEditingId(null);
  };

  // Open add modal
  const openAddModal = () => {
    resetForm();
    setModalMode("add");
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (kpi) => {
    console.log("📝 Editing KPI:", kpi);
    setFormData({
      cost_date: kpi.cost_date || "",
      kpi_name: kpi.kpi_name || "",
      plant_code: kpi.plant_code || "",
      cost_value: kpi.cost_value || "",
      cost_measurement: kpi.cost_measurement || "cost per ton",
      prod_or_sale: kpi.prod_or_sale || "Production",
    });
    setEditingId(kpi.cdb_object_id);
    setModalMode("edit");
    setShowModal(true);
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    console.log(`📝 "${field}" => "${value}"`);
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "🚀 Submit - Mode:",
      modalMode,
      "Data:",
      formData,
      "ID:",
      editingId
    );

    if (modalMode === "add") {
      createKPI();
    } else {
      updateKPI();
    }
  };

  // Filter KPI entries
  const filteredKPIList = kpiList.filter(
    (kpi) =>
      kpi.kpi_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kpi.cost_date?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kpi.plant_code?.toString().includes(searchTerm) ||
      kpi.prod_or_sale?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredKPIList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredKPIList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    fetchKPIList();
  }, []);

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header - Blue */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          padding: "0 1.5rem",
          height: "56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          zIndex: 999,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              padding: "0.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <h1
            style={{
              margin: 0,
              fontSize: "1.375rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            Cost KPI Entry - Kalyani Technoforge Ltd.
          </h1>
        </div>
      </div>

      {/* Notification */}
      {notification.show && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            right: "1.5rem",
            zIndex: 1000,
            padding: "0.875rem 1.25rem",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            background: notification.type === "success" ? "#10b981" : "#ef4444",
            color: "white",
            fontWeight: "600",
            fontSize: "0.875rem",
          }}
        >
          {notification.message}
        </div>
      )}

      {/* Main Content */}
      <div style={{ marginTop: "56px", padding: "1rem" }}>
        {/* Search Bar */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            padding: "0.875rem",
            marginBottom: "1rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: 1,
                maxWidth: "400px",
                minWidth: "200px",
              }}
            >
              <Search
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#94a3b8",
                  width: "18px",
                  height: "18px",
                }}
              />
              <input
                type="text"
                placeholder="Search KPI entries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  paddingLeft: "40px",
                  paddingRight: "12px",
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  fontSize: "0.875rem",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              onClick={openAddModal}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "8px 18px",
                background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                border: "none",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              <Plus size={18} />
              Add KPI Entry
            </button>
          </div>
        </div>

        {/* Table with Scrollbar */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "4px solid #e2e8f0",
                  borderTop: "4px solid #3b82f6",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
          ) : filteredKPIList.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "3rem", color: "#94a3b8" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
              <p style={{ fontWeight: "600", fontSize: "1rem", margin: 0 }}>
                No KPI entries found
              </p>
            </div>
          ) : (
            <>
              {/* Scrollable Table Container */}
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  maxHeight: "calc(100vh - 240px)",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead
                    style={{
                      background: "#f8fafc",
                      borderBottom: "2px solid #e2e8f0",
                      position: "sticky",
                      top: 0,
                      zIndex: 10,
                    }}
                  >
                    <tr>
                      {[
                        "Date",
                        "KPI Name",
                        "Plant Code",
                        "Cost Value",
                        "Measurement",
                        "Prod/Sale",
                        "Actions",
                      ].map((header, i) => (
                        <th
                          key={i}
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: i === 6 ? "right" : i === 3 ? "right" : "left",
                            fontSize: "0.75rem",
                            fontWeight: "700",
                            color: "#64748b",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((kpi) => (
                      <tr
                        key={kpi.cdb_object_id}
                        style={{ borderBottom: "1px solid #f1f5f9" }}
                      >
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#334155",
                            fontWeight: "600",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {formatDate(kpi.cost_date)}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#334155",
                          }}
                        >
                          {kpi.kpi_name}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#334155",
                            fontWeight: "600",
                          }}
                        >
                          {kpi.plant_code}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#059669",
                            fontWeight: "700",
                            textAlign: "right",
                          }}
                        >
                          {formatCurrency(kpi.cost_value)}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.75rem",
                            color: "#64748b",
                          }}
                        >
                          {kpi.cost_measurement}
                        </td>
                        <td style={{ padding: "0.875rem 1rem" }}>
                          <span
                            style={{
                              background:
                                kpi.prod_or_sale === "Production"
                                  ? "#dbeafe"
                                  : "#fef3c7",
                              color:
                                kpi.prod_or_sale === "Production"
                                  ? "#1e40af"
                                  : "#d97706",
                              padding: "0.3rem 0.75rem",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {kpi.prod_or_sale}
                          </span>
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: "right",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <button
                            onClick={() => openEditModal(kpi)}
                            style={{
                              background: "#dbeafe",
                              border: "1px solid #93c5fd",
                              color: "#1e40af",
                              padding: "0.4rem 0.75rem",
                              borderRadius: "6px",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              marginRight: "0.5rem",
                            }}
                          >
                            <Edit2 size={13} /> Edit
                          </button>
                          <button
                            onClick={() =>
                              deleteKPI(kpi.cdb_object_id, kpi.kpi_name)
                            }
                            style={{
                              background: "#fee2e2",
                              border: "1px solid #fecaca",
                              color: "#dc2626",
                              padding: "0.4rem 0.75rem",
                              borderRadius: "6px",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.35rem",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                            }}
                          >
                            <Trash2 size={13} /> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.875rem 1rem",
                    borderTop: "1px solid #e2e8f0",
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, filteredKPIList.length)} of{" "}
                    {filteredKPIList.length} records
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      style={{
                        background: currentPage === 1 ? "#f1f5f9" : "#ffffff",
                        border: "1px solid #e2e8f0",
                        color: currentPage === 1 ? "#94a3b8" : "#334155",
                        padding: "0.4rem 0.75rem",
                        borderRadius: "6px",
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.8125rem",
                        fontWeight: "600",
                      }}
                    >
                      <ChevronLeft size={16} />
                      Previous
                    </button>

                    {/* Page Numbers */}
                    <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap" }}>
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        if (
                          pageNumber === 1 ||
                          pageNumber === totalPages ||
                          (pageNumber >= currentPage - 1 &&
                            pageNumber <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => paginate(pageNumber)}
                              style={{
                                background:
                                  currentPage === pageNumber
                                    ? "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)"
                                    : "#ffffff",
                                border: "1px solid #e2e8f0",
                                color:
                                  currentPage === pageNumber
                                    ? "#ffffff"
                                    : "#334155",
                                padding: "0.4rem 0.75rem",
                                borderRadius: "6px",
                                cursor: "pointer",
                                fontSize: "0.8125rem",
                                fontWeight: "600",
                                minWidth: "36px",
                              }}
                            >
                              {pageNumber}
                            </button>
                          );
                        } else if (
                          pageNumber === currentPage - 2 ||
                          pageNumber === currentPage + 2
                        ) {
                          return (
                            <span
                              key={pageNumber}
                              style={{
                                padding: "0.4rem 0.5rem",
                                color: "#94a3b8",
                                fontSize: "0.8125rem",
                              }}
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      style={{
                        background:
                          currentPage === totalPages ? "#f1f5f9" : "#ffffff",
                        border: "1px solid #e2e8f0",
                        color:
                          currentPage === totalPages ? "#94a3b8" : "#334155",
                        padding: "0.4rem 0.75rem",
                        borderRadius: "6px",
                        cursor:
                          currentPage === totalPages
                            ? "not-allowed"
                            : "pointer",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.8125rem",
                        fontWeight: "600",
                      }}
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal */}
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
              maxWidth: "550px",
              borderRadius: "12px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 1.75rem",
                borderBottom: "1px solid #e2e8f0",
                background: "#f8fafc",
                borderRadius: "12px 12px 0 0",
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  color: "#1e293b",
                }}
              >
                {modalMode === "add" ? "Add KPI Entry" : "Edit KPI Entry"}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "#fee2e2",
                  border: "1px solid #fecaca",
                  color: "#dc2626",
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ padding: "1.75rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1.25rem",
                }}
              >
                {/* Date */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Date <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.cost_date}
                    onChange={(e) =>
                      handleInputChange("cost_date", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Plant Code */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Plant Code <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.plant_code}
                    onChange={(e) =>
                      handleInputChange("plant_code", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* KPI Name */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    KPI Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.kpi_name}
                    onChange={(e) =>
                      handleInputChange("kpi_name", e.target.value)
                    }
                    placeholder="e.g., Raw Material Cost, consumable, power"
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Cost Value */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Cost Value <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formData.cost_value}
                    onChange={(e) =>
                      handleInputChange("cost_value", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Cost Measurement */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Measurement <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.cost_measurement}
                    onChange={(e) =>
                      handleInputChange("cost_measurement", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <option value="cost per ton">Cost per Ton</option>
                    <option value="cost per unit">Cost per Unit</option>
                    <option value="cost per kg">Cost per KG</option>
                    <option value="fixed cost">Fixed Cost</option>
                  </select>
                </div>

                {/* Production/Sale */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Type <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.prod_or_sale}
                    onChange={(e) =>
                      handleInputChange("prod_or_sale", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "0.625rem 0.875rem",
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      fontSize: "0.875rem",
                      outline: "none",
                      boxSizing: "border-box",
                      cursor: "pointer",
                    }}
                  >
                    <option value="Production">Production</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.875rem",
                  marginTop: "1.5rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    background: "#f1f5f9",
                    border: "1px solid #e2e8f0",
                    color: "#334155",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background:
                      "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                    border: "none",
                    color: "white",
                    padding: "0.625rem 1.5rem",
                    borderRadius: "8px",
                    cursor: loading ? "not-allowed" : "pointer",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  <Save size={16} />
                  {loading
                    ? "Saving..."
                    : modalMode === "add"
                    ? "Create"
                    : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        /* Custom Scrollbar */
        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
};

export default CostKPIEntry;
