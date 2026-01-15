import React, { useState } from "react";
import AllPlants from "./AllPlants";
import CostCenterMaster from "./CostCenterMaster";
import { Suspense, lazy, useMemo, useCallback } from "react";

// 2. Add skeleton component
const LoadingSkeletons = React.memo(() => (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
          <div className="h-8 bg-gray-200 rounded w-full" />
        </div>
      ))}
    </div>
  </div>
));

const Dashboard = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [chartMode, setChartMode] = useState("Machining");
  const [showDetailsPage, setShowDetailsPage] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I can help you analyze plant costs and production data. What would you like to know?",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMasterData, setShowMasterData] = useState(false);

  const kpiData = [
    {
      name: "Raw Material Cost",
      actual: 15000,
      target: 15000,
      predictive: 15000,
    },
    { name: "Consumables", actual: 2950, target: 3000, predictive: 2500 },
    { name: "Power", actual: 4800, target: 4200, predictive: 4900 },
    { name: "Labour", actual: 3150, target: 3000, predictive: 3250 },
    { name: "Fuel", actual: 1850, target: 2000, predictive: 1800 },
    { name: "Sub Contract", actual: 2100, target: 2200, predictive: 2050 },
    {
      name: "Repair & Maintenance",
      actual: 1650,
      target: 1500,
      predictive: 1700,
    },
    {
      name: "Machine Hire Charges",
      actual: 950,
      target: 1000,
      predictive: 900,
    },
    {
      name: "Establishment Expenses",
      actual: 1250,
      target: 1300,
      predictive: 1200,
    },
    { name: "Packing", actual: 850, target: 900, predictive: 800 },
    { name: "Freight", actual: 2450, target: 2500, predictive: 2400 },
  ];

  const totalCost = kpiData.reduce((sum, kpi) => sum + kpi.actual, 0);
  const totalTarget = kpiData.reduce((sum, kpi) => sum + kpi.target, 0);
  const totalPredictive = kpiData.reduce((sum, kpi) => sum + kpi.predictive, 0);
  const overallEfficiency = ((totalTarget / totalCost) * 100).toFixed(1);
  const handleLogout = () => {
    window.location.href = "/server/__quit__";
  };
  const plants = {
    "All Plant": {
      category: "Overview",
      unit: "per tonn",
      status: "active",
      efficiency: 87.3,
      growth: 3.5,
      data: {
        tonnage: [4374, 4399, 4824, 5037],
        months: ["Apr-25", "May-25", "Jun-25", "Jul-25"],
        costs: {
          consumables: [3633, 3875, 3230, 3470],
          power: [7374, 7183, 7116, 7477],
          fuel: [3136, 3345, 3025, 3237],
          labour: [2271, 2619, 2013, 2150],
          subContract: [8207, 7885, 7017, 7560],
          machineHire: [632, 510, 858, 609],
          repairMaint: [1436, 3871, 3337, 3151],
          employeeCost: [5788, 5756, 5248, 5026],
          establishment: [1177, 1287, 1281, 1188],
          total: [33655, 36330, 33125, 33868],
          packing: [500, 550, 600, 580],
          freight: [800, 850, 900, 870],
          rawMaterial: [10000, 10500, 9800, 10200],
        },
      },
    },
    // ... rest of plants data
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    const newUserMessage = { type: "user", message: currentMessage };
    const botResponse = generateBotResponse(currentMessage);
    setChatMessages((prev) => [
      ...prev,
      newUserMessage,
      { type: "bot", message: botResponse },
    ]);
    setCurrentMessage("");
  };

  const generateBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    const allPlantData = plants["All Plant"];
    const totalProduction = allPlantData.data.tonnage.reduce(
      (a, b) => a + b,
      0
    );
    const totalCost = allPlantData.data.costs.total.reduce((a, b) => a + b, 0);
    const avgCost = Math.round(totalCost / 4);
    const avgProduction = Math.round(totalProduction / 4);

    if (lowerMessage.includes("cost")) {
      return `All plants have a combined average monthly cost of ₹${(
        avgCost / 1000
      ).toFixed(
        1
      )}K. The total cost across all plants for the 4-month period is ₹${(
        totalCost / 100000
      ).toFixed(1)}L.`;
    } else if (lowerMessage.includes("efficiency")) {
      const avgEfficiency =
        Object.values(plants)
          .filter((p) => p.efficiency)
          .reduce((sum, p) => sum + p.efficiency, 0) /
        Object.keys(plants).length;
      return `The average efficiency across all plants is ${avgEfficiency.toFixed(
        1
      )}%. This includes ${
        Object.keys(plants).length
      } production units across Forging, Machining, and Other categories.`;
    } else if (lowerMessage.includes("production")) {
      return `All plants combined produced ${totalProduction} tonnes over the 4-month period. The monthly average is ${avgProduction} tonnes across all facilities.`;
    } else if (
      lowerMessage.includes("plant") &&
      lowerMessage.includes("count")
    ) {
      const forgingCount = Object.values(plants).filter(
        (p) => p.category === "Forging"
      ).length;
      const machiningCount = Object.values(plants).filter(
        (p) => p.category === "Machining"
      ).length;
      const otherCount = Object.values(plants).filter(
        (p) => p.category === "Other" || p.category === "other"
      ).length;
      return `We have ${
        Object.keys(plants).length
      } plants total: ${forgingCount} in Forging, ${machiningCount} in Machining, and ${otherCount} in Other categories.`;
    } else if (lowerMessage.includes("trend")) {
      const trend =
        allPlantData.data.costs.total[3] > allPlantData.data.costs.total[0]
          ? "increasing"
          : "decreasing";
      const change = (
        ((allPlantData.data.costs.total[3] - allPlantData.data.costs.total[0]) /
          allPlantData.data.costs.total[0]) *
        100
      ).toFixed(1);
      return `Cost trends are ${trend} by ${Math.abs(
        change
      )}% over the 4-month period. Production shows ${
        allPlantData.data.tonnage[3] > allPlantData.data.tonnage[0]
          ? "growth"
          : "decline"
      } from ${allPlantData.data.tonnage[0]} to ${
        allPlantData.data.tonnage[3]
      } tonnes.`;
    } else {
      return `I can analyze costs, efficiency, production, and trends across all plants. Try asking about "total costs", "plant efficiency", "production trends", or "plant count by category".`;
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* HEADER SECTION */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e3a8a, #1d4ed8, #3b82f6)",
          padding: "14px 24px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 3px 10px rgba(0,0,0,0.25)",
          borderBottom: "2px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* LEFT SIDE – Company Name Only */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "20px", margin: 0, fontWeight: "700" }}>
            Kalyani Technoforge Ltd.
          </h1>
        </div>

        {/* CENTER BADGES */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "13px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "6px 12px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            {Object.keys(plants).length} Units
          </span>

          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "6px 12px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            87.3% Avg Efficiency
          </span>

          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "6px 12px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}
          >
            Active Status
          </span>
        </div> */}

        {/* RIGHT SIDE BUTTONS */}
        <div style={{ display: "flex", gap: "10px", marginLeft: "auto" }}>
          {/* DETAILS BUTTON */}
          <button
            onClick={() => setShowDetailsPage(!showDetailsPage)}
            style={{
              background: "white",
              color: "#0f172a",
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 600,
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0px)")}
          >
            {showDetailsPage ? "Show Comparison" : "Details"}
          </button>

          {/* MASTER DATA BUTTON */}
          <button
            onClick={() => setShowMasterData(true)}
            style={{
              background: "linear-gradient(135deg, #93c5fd, #3b82f6)",
              color: "white",
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 600,
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0px)")}
          >
            Master Data
          </button>
          <button
            onClick={handleLogout}
            title="Logout"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              padding: "6px 10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            {/* Logout Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AllPlants showDetailsPage={showDetailsPage} chartMode={chartMode} />
      </div>

      {/* ChatBot Button */}
      <button
        onClick={() => setShowChatBot(true)}
        className="fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-110 z-40"
        title="ProfitPulse — Plant Costing Assistant"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="font-medium">ProfitPulse</span>
      </button>

      {/* ✅ MASTER DATA MODAL - Near Full Screen Overlay */}
      {showMasterData && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="w-full h-full flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <div>
                  <h2 className="text-xl font-bold">Master Data Management</h2>
                  <p className="text-xs text-blue-100">
                    Configure Cost Center Master
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMasterData(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body - Cost Center Master Component */}
            <div className="flex-1 overflow-auto bg-gray-50">
              <CostCenterMaster />
            </div>
          </div>
        </div>
      )}

      {/* ChatBot Modal */}
      {showChatBot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 rounded-t-xl flex justify-between items-center">
              <div>
                <h3 className="font-bold">Plant Analytics Assistant</h3>
                <p className="text-xs opacity-90">
                  AI-powered manufacturing insights
                </p>
              </div>
              <button
                onClick={() => setShowChatBot(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-blue-600 text-white rounded-br-none shadow-md"
                        : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about costs, efficiency, production..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setCurrentMessage("Show total cost analysis")}
                  className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-200"
                >
                  Cost Analysis
                </button>
                <button
                  onClick={() =>
                    setCurrentMessage("What's the average plant efficiency?")
                  }
                  className="text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-full transition-colors border border-green-200"
                >
                  Efficiency Overview
                </button>
                <button
                  onClick={() => setCurrentMessage("Show production trends")}
                  className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full transition-colors border border-orange-200"
                >
                  Production Trends
                </button>
                <button
                  onClick={() =>
                    setCurrentMessage("How many plants per category?")
                  }
                  className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full transition-colors border border-purple-200"
                >
                  Plant Count
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
