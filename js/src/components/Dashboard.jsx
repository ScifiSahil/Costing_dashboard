import { themes } from "../constants/themes";
import React, { useState, useRef, useEffect } from "react";
import AllPlants from "./AllPlants";
import CostCenterMaster from "./CostCenterMaster";
import { Suspense, lazy, useMemo, useCallback } from "react";
import CostKPIEntry from "./CostKPIEntry";

import {
  Zap,
  Palette,
  Check,
  Database,
  LogOut,
  Menu,
  FileText,
  Factory,
  TrendingUp,
} from "lucide-react";
import PlantM from "./PlantM";
import { useCostStore } from "../store/costStore"; // path tumhare project ke hisab se
import GLMaster from "./GLMaster";
import PlantMaster from "./PlantMaster";

// Skeleton Component
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

const Dashboard = ({ currentTheme = { bg: "from-blue-600 to-cyan-600" } }) => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [chartMode, setChartMode] = useState("Machining");
  const [showGLMaster, setShowGLMaster] = useState(false);
  const [showCostKPIEntry, setShowCostKPIEntry] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I can help you analyze plant costs and production data. What would you like to know?",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [showMasterData, setShowMasterData] = useState(false);
  const [showPlantMaster, setShowPlantMaster] = useState(false);
  const selectedTheme = useCostStore((state) => state.selectedTheme);
  const setSelectedTheme = useCostStore((state) => state.setSelectedTheme);

  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const themeSelectorRef = useRef(null);
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const headerMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (headerMenuRef.current && !headerMenuRef.current.contains(e.target)) {
        setShowHeaderMenu(false);
        setShowThemeSelector(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // ✅ FIXED: Open modal instead of redirecting to URL
  const handlePlantMaster = () => {
    setShowPlantMaster(true);
  };

  const openPowerForm = () => {
    window.location.href = `${window.location.origin}/kalyani.iot/costing_entry`;
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
      0,
    );
    const totalCost = allPlantData.data.costs.total.reduce((a, b) => a + b, 0);
    const avgCost = Math.round(totalCost / 4);
    const avgProduction = Math.round(totalProduction / 4);

    if (lowerMessage.includes("cost")) {
      return `All plants have a combined average monthly cost of ₹${(avgCost / 1000).toFixed(1)}K. The total cost across all plants for the 4-month period is ₹${(totalCost / 100000).toFixed(1)}L.`;
    } else if (lowerMessage.includes("efficiency")) {
      const avgEfficiency =
        Object.values(plants)
          .filter((p) => p.efficiency)
          .reduce((sum, p) => sum + p.efficiency, 0) /
        Object.keys(plants).length;
      return `The average efficiency across all plants is ${avgEfficiency.toFixed(1)}%. This includes ${Object.keys(plants).length} production units across Forging, Machining, and Other categories.`;
    } else if (lowerMessage.includes("production")) {
      return `All plants combined produced ${totalProduction} tonnes over the 4-month period. The monthly average is ${avgProduction} tonnes across all facilities.`;
    } else if (
      lowerMessage.includes("plant") &&
      lowerMessage.includes("count")
    ) {
      const forgingCount = Object.values(plants).filter(
        (p) => p.category === "Forging",
      ).length;
      const machiningCount = Object.values(plants).filter(
        (p) => p.category === "Machining",
      ).length;
      const otherCount = Object.values(plants).filter(
        (p) => p.category === "Other" || p.category === "other",
      ).length;
      return `We have ${Object.keys(plants).length} plants total: ${forgingCount} in Forging, ${machiningCount} in Machining, and ${otherCount} in Other categories.`;
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
      return `Cost trends are ${trend} by ${Math.abs(change)}% over the 4-month period. Production shows ${allPlantData.data.tonnage[3] > allPlantData.data.tonnage[0] ? "growth" : "decline"} from ${allPlantData.data.tonnage[0]} to ${allPlantData.data.tonnage[3]} tonnes.`;
    } else {
      return `I can analyze costs, efficiency, production, and trends across all plants. Try asking about "total costs", "plant efficiency", "production trends", or "plant count by category".`;
    }
  };

  return (
    <div
      className="bg-gray-50 flex flex-col h-screen"
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* ENHANCED PROFESSIONAL HEADER */}
      <header className="bg-blue-600 shadow-2xl">
        <div className="px-8 flex items-center justify-between">
          {/* Left: Company Name with Enhanced Typography */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1
                className="text-3xl font-extrabold text-white tracking-tight leading-none drop-shadow-md"
                style={{
                  letterSpacing: "-0.02em",
                  fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                }}
              >
                Kalyani Technoforge Ltd.
              </h1>
              <div className="h-0.5 w-16 bg-white/40 mt-1.5 rounded-full"></div>
            </div>
          </div>

          {/* Right: Enhanced Action Buttons */}
          {/* Right: Single Menu Button */}
          <div className="flex items-center gap-3" ref={headerMenuRef}>
            <div style={{ position: "relative" }}>
              {/* MENU BUTTON */}
              <button
                onClick={() => setShowHeaderMenu((p) => !p)}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-xl border border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                title="Actions"
              >
                <Menu className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white tracking-wide">
                  Actions
                </span>
              </button>

              {/* DROPDOWN */}
              {showHeaderMenu && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "12px",
                    width: "260px",
                    background: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                    zIndex: 9999,
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* ITEM: POWER ENTRY */}
                  <button
                    onClick={() => {
                      setShowHeaderMenu(false);
                      openPowerForm();
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      Power Entry
                    </span>
                  </button>

                  {/* ITEM: MASTER DATA */}
                  <button
                    onClick={() => {
                      setShowHeaderMenu(false);
                      setShowMasterData(true);
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      Master Data
                    </span>
                  </button>
                  {/* ITEM: GL MASTER */}
                  <button
                    onClick={() => {
                      setShowHeaderMenu(false);
                      setShowGLMaster(true);
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      GL Master
                    </span>
                  </button>

                  {/* ITEM: PLANT MASTER */}
                  <button
                    onClick={() => {
                      setShowHeaderMenu(false);
                      handlePlantMaster();
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <Factory className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      Plant Master
                    </span>
                  </button>

                  {/* ITEM: COST KPI ENTRY - NEW */}
                  <button
                    onClick={() => {
                      setShowHeaderMenu(false);
                      setShowCostKPIEntry(true);
                    }}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center gap-3"
                  >
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">
                      Cost KPI Entry
                    </span>
                  </button>

                  {/* DIVIDER */}
                  <div className="h-px bg-gray-200 my-1" />

                  {/* THEME SELECTOR INSIDE MENU */}
                  <button
                    onClick={() => setShowThemeSelector((p) => !p)}
                    className="w-full px-4 py-3 hover:bg-gray-50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Palette className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-800">
                        Theme
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {themes[selectedTheme]?.name || "Select"}
                    </span>
                  </button>

                  {/* THEME LIST */}
                  {showThemeSelector && (
                    <div className="border-t border-gray-200">
                      {Object.entries(themes).map(([key, theme]) => (
                        <button
                          key={key}
                          onClick={() => {
                            setSelectedTheme(key);
                            setShowThemeSelector(false);
                            setShowHeaderMenu(false);
                          }}
                          className={`w-full px-4 py-2 flex items-center justify-between hover:bg-gray-50 ${
                            selectedTheme === key ? "bg-blue-50" : ""
                          }`}
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {theme.name}
                          </span>
                          {selectedTheme === key && (
                            <Check className="w-4 h-4 text-blue-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* DIVIDER */}
                  <div className="h-px bg-gray-200 my-1" />

                  {/* ITEM: LOGOUT */}
                </div>
              )}
            </div>
            {/* LOGOUT BUTTON - OUTSIDE MENU */}
            <button
              onClick={handleLogout}
              className="
    group relative overflow-hidden
    flex items-center gap-2
    px-4 py-2.5
    rounded-xl
    bg-white text-red-600
    border border-white/60
    shadow-lg shadow-black/20
    hover:shadow-xl hover:shadow-black/30
    transition-all duration-300
    hover:scale-[1.05]
  "
              title="Logout"
            >
              {/* subtle red glow bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* content */}
              <LogOut className="w-4 h-4 relative z-10" />
              <span className="text-sm font-extrabold tracking-wide relative z-10">
                Logout
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="h-1 bg-white/30"></div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AllPlants chartMode={chartMode} />
      </div>

      {/* ChatBot Button */}
      <button
        onClick={() => setShowChatBot(true)}
        className="fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-110 z-40"
        title="ProfitPulse — Plant Costing Assistant"
        style={{ fontFamily: "system-ui, sans-serif" }}
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

      {/* Master Data Modal */}
      {showMasterData && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex-1 overflow-auto bg-gray-50">
            <CostCenterMaster onClose={() => setShowMasterData(false)} />
          </div>
        </div>
      )}

      {/* Plant Master Modal */}
      {showPlantMaster && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex-1 overflow-auto bg-gray-50">
            <PlantM onClose={() => setShowPlantMaster(false)} />
          </div>
        </div>
      )}

      {/* Cost KPI Entry Modal - NEW */}
      {showCostKPIEntry && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex-1 overflow-auto bg-gray-50">
            <CostKPIEntry onClose={() => setShowCostKPIEntry(false)} />
          </div>
        </div>
      )}

      {/* GL Master Modal */}
      {showGLMaster && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex-1 overflow-auto bg-gray-50">
            <GLMaster onClose={() => setShowGLMaster(false)} />
          </div>
        </div>
      )}

      {/* ChatBot Modal */}
      {showChatBot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50">
          <div
            className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <div
              className={`bg-gradient-to-r ${currentTheme.bg} text-white px-5 py-4 rounded-t-xl flex justify-between items-center`}
            >
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
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
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
