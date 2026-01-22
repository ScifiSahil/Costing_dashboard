import React, { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2, X, Save, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const PlantM = ({ onClose }) => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // 10 items per page

  const [formData, setFormData] = useState({
    plant_code: "",
    plant_name: "",
    plant_type: "Forging",
    short_name: "",
  });
  const [editingId, setEditingId] = useState(null);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  const API_BASE =
    "https://ktflceprd.kalyanicorp.com/api/v1/collection/cost_plant_master";

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

  // Fetch all plants
  const fetchPlants = async () => {
    setLoading(true);
    try {
      const authOptions = await getAuthHeadersWithCSRF("GET");
      const response = await fetch(API_BASE, { method: "GET", ...authOptions });

      if (!response.ok) throw new Error("Failed to fetch plants");

      const data = await response.json();
      setPlants(data.objects || []);
      showNotification("Plants loaded successfully", "success");
    } catch (error) {
      console.error("Fetch failed:", error);
      showNotification("Failed to load plants: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Create plant (POST)
  const createPlant = async () => {
    setLoading(true);
    try {
      const payload = {
        plant_code: formData.plant_code,
        plant_name: formData.plant_name,
        plant_type: formData.plant_type,
        short_name: formData.short_name,
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

      showNotification("Plant created successfully", "success");
      setShowModal(false);
      fetchPlants();
      resetForm();
      setCurrentPage(1); // Reset to first page
    } catch (error) {
      console.error("Create failed:", error);
      showNotification("Failed to create: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Update plant - Using PUT method with ID in URL
  const updatePlant = async () => {
    setLoading(true);
    try {
      if (!editingId) {
        throw new Error("Plant ID is missing!");
      }

      const payload = {
        plant_code: formData.plant_code,
        plant_name: formData.plant_name,
        plant_type: formData.plant_type,
        short_name: formData.short_name,
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

      showNotification("Plant updated successfully", "success");
      setShowModal(false);

      await fetchPlants();
      resetForm();
    } catch (error) {
      console.error("Update failed:", error);
      showNotification("Failed to update: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  // Delete plant
  const deletePlant = async (plantId, plantName) => {
    if (!window.confirm(`Are you sure you want to delete ${plantName}?`)) {
      return;
    }

    setLoading(true);
    try {
      const deleteUrl = `${API_BASE}/${plantId}`;

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

      showNotification("Plant deleted successfully", "success");
      fetchPlants();
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
      plant_code: "",
      plant_name: "",
      plant_type: "Forging",
      short_name: "",
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
  const openEditModal = (plant) => {
    console.log("📝 Editing plant:", plant);
    setFormData({
      plant_code: plant.plant_code || "",
      plant_name: plant.plant_name || "",
      plant_type: plant.plant_type || "Forging",
      short_name: plant.short_name || "",
    });
    setEditingId(plant.cdb_object_id);
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
      createPlant();
    } else {
      updatePlant();
    }
  };

  // Filter plants
  const filteredPlants = plants.filter(
    (plant) =>
      plant.plant_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.plant_code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.short_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.plant_type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlants.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to page 1 when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    fetchPlants();
  }, []);

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
            Plant Master - Kalyani Technoforge Ltd.
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
                placeholder="Search plants..."
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
              Add Plant
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
          ) : filteredPlants.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "3rem", color: "#94a3b8" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏭</div>
              <p style={{ fontWeight: "600", fontSize: "1rem", margin: 0 }}>
                No plants found
              </p>
            </div>
          ) : (
            <>
              {/* Scrollable Table Container */}
              <div
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  maxHeight: "calc(100vh - 240px)", // Fixed height with scroll
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
                        "Plant Code",
                        "Plant Name",
                        "Short Name",
                        "Plant Type",
                        "Actions",
                      ].map((header, i) => (
                        <th
                          key={i}
                          style={{
                            padding: "0.875rem 1rem",
                            textAlign: i === 4 ? "right" : "left",
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
                    {currentItems.map((plant) => (
                      <tr
                        key={plant.cdb_object_id}
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
                          {plant.plant_code}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#334155",
                          }}
                        >
                          {plant.plant_name}
                        </td>
                        <td
                          style={{
                            padding: "0.875rem 1rem",
                            fontSize: "0.875rem",
                            color: "#334155",
                          }}
                        >
                          {plant.short_name}
                        </td>
                        <td style={{ padding: "0.875rem 1rem" }}>
                          <span
                            style={{
                              background: "#dbeafe",
                              color: "#1e40af",
                              padding: "0.3rem 0.75rem",
                              borderRadius: "6px",
                              fontSize: "0.75rem",
                              fontWeight: "600",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {plant.plant_type}
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
                            onClick={() => openEditModal(plant)}
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
                              deletePlant(plant.cdb_object_id, plant.plant_name)
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
                    {Math.min(indexOfLastItem, filteredPlants.length)} of{" "}
                    {filteredPlants.length} records
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
                        // Show first, last, current, and adjacent pages
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
              maxWidth: "500px",
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
                {modalMode === "add" ? "Add Plant" : `Edit Plant`}
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
                    type="text"
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

                {/* Short Name */}
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
                    Short Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.short_name}
                    onChange={(e) =>
                      handleInputChange("short_name", e.target.value)
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

                {/* Plant Name */}
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
                    Plant Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.plant_name}
                    onChange={(e) =>
                      handleInputChange("plant_name", e.target.value)
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

                {/* Plant Type */}
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
                    Plant Type <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    required
                    value={formData.plant_type}
                    onChange={(e) =>
                      handleInputChange("plant_type", e.target.value)
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
                    <option value="Forging">Forging</option>
                    <option value="Machining">Machining</option>
                    <option value="Other">Other</option>
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

export default PlantM;