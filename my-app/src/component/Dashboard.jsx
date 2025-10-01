import React, { useState } from "react";
import AllPlants from "./AllPlants";

const Dashboard = () => {
  const [selectedPlant, setSelectedPlant] = useState("All Plant");
  const [showChatBot, setShowChatBot] = useState(false);
  const [chartMode, setChartMode] = useState("Machining");
  const [showDetailsPage, setShowDetailsPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hello! I can help you analyze plant costs and production data. What would you like to know?",
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  // Add this with your other useState declarations at the top of Dashboard component
  const [selectedLocation, setSelectedLocation] = useState("Ranjangaon");

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

  // Complete plant configurations based on your reference data
  const plants = {
    "All Plant": {
      category: "Overview",
      unit: "per tonn",
      status: "active",
      efficiency: 87.3,
      growth: 3.5, // Add growth property
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
    "R'Gon": {
      category: "Forging",
      lines: 16,
      unit: "per tonn",
      status: "active",
      efficiency: 87.3,
      growth: 5.2,
      data: generatePlantData("forging"),
    },
    Mundhwa: {
      category: "Forging",
      lines: 6,
      unit: "per tonn",
      status: "active",
      efficiency: 91.2,
      growth: -2.1,
      data: generatePlantData("forging"),
    },
    "Ranjangaon-2": {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 82.5,
      growth: 0,
      data: generatePlantData("forging"),
    },
    Baramati: {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 89.7,
      growth: 3.8,
      data: generatePlantData("machining"),
    },
    Khed: {
      category: "Machining",
      lines: 6,
      unit: "per pc",
      status: "maintenance",
      efficiency: 75.3,
      growth: -5.5,
      data: generatePlantData("other"),
    },
    Chakan: {
      category: "Machining",
      lines: 12,
      unit: "per pc",
      status: "active",
      efficiency: 93.1,
      growth: 7.2,
      data: generatePlantData("forging"),
    },
    "Ambethan-1": {
      category: "Machining",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 88.4,
      growth: 1.5,
      data: generatePlantData("other"),
    },
    "Ambethan-2": {
      category: "Machining",
      lines: 12,
      unit: "per pc",
      status: "active",
      efficiency: 90.6,
      growth: 4.3,
      data: generatePlantData("other"),
    },
    Bhiwadi: {
      category: "Other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 85.9,
      growth: -1.2,
      data: generatePlantData("forging"),
    },
    Gujarat: {
      category: "other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 87.2,
      growth: 2.7,
      data: generatePlantData("machining"),
    },
    "Heat Treatment": {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 92.1,
      growth: 6.1,
      data: generatePlantData("heat_treatment"),
    },
    Jejuri: {
      category: "Other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 89.3,
      growth: -3.4,
      data: generatePlantData("other"),
    },
  };

  // Helper function to generate sample data for plants based on category
  function generatePlantData(category) {
    const months = ["Apr-25", "May-25", "Jun-25", "Jul-25"];
    const baseMultiplier =
      category === "forging" ? 1.2 : category === "machining" ? 1.1 : 0.9;

    return {
      tonnage: months.map(() =>
        Math.floor((Math.random() * 2000 + 1500) * baseMultiplier)
      ),
      months: months,
      costs: {
        consumables: months.map(() =>
          Math.floor((Math.random() * 1500 + 2000) * baseMultiplier)
        ),
        power: months.map(() =>
          Math.floor((Math.random() * 2000 + 5000) * baseMultiplier)
        ),
        fuel: months.map(() =>
          Math.floor((Math.random() * 1000 + 2000) * baseMultiplier)
        ),
        labour: months.map(() =>
          Math.floor((Math.random() * 1000 + 1500) * baseMultiplier)
        ),
        subContract: months.map(() =>
          Math.floor((Math.random() * 3000 + 7000) * baseMultiplier)
        ),
        machineHire: months.map(() =>
          Math.floor((Math.random() * 300 + 500) * baseMultiplier)
        ),
        repairMaint: months.map(() =>
          Math.floor((Math.random() * 1500 + 1500) * baseMultiplier)
        ),
        employeeCost: months.map(() =>
          Math.floor((Math.random() * 1500 + 4000) * baseMultiplier)
        ),
        establishment: months.map(() =>
          Math.floor((Math.random() * 300 + 1000) * baseMultiplier)
        ),
        total: months.map(() =>
          Math.floor((Math.random() * 8000 + 25000) * baseMultiplier)
        ),
      },
    };
  }

  // Chat functionality
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

  // Group plants by category
  const forgingPlants = Object.entries(plants).filter(
    ([_, p]) => p.category === "Forging"
  );
  const machiningPlants = Object.entries(plants).filter(
    ([_, p]) => p.category === "Machining"
  );
  const otherPlants = Object.entries(plants).filter(
    ([_, p]) => p.category === "Other" || p.category === "other"
  );

  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      {/* Compact Header Section */}
      <div className="bg-white border-b border-gray-300 shadow-sm">
        {/* Top Row - Company Info & Stats in one compact line */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 flex items-center justify-between">
          <div className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-lg font-bold">Kalyani Technoforge Ltd.</h1>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="bg-white/20 px-2 py-1 rounded">
                {Object.keys(plants).length} Units
              </span>
              <span className="bg-white/20 px-2 py-1 rounded">
                87.3% Avg Efficiency
              </span>
              <span className="bg-white/20 px-2 py-1 rounded">
                Active Status
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowDetailsPage(!showDetailsPage)}
                className="px-3 py-1 text-xs font-medium rounded-md bg-white text-gray-700 border border-gray-200 hover:bg-green-100 hover:text-green-700 transition"
              >
                {showDetailsPage ? "Show Comparison" : "Details"}
              </button>
            </div>
          </div>
        </div>
        {/* Bottom Row - Compact Plant Selection */}

      </div>

      {/* Main Content - AllPlants Component */}
      <div className="flex-1 overflow-auto">
        <AllPlants showDetailsPage={showDetailsPage} chartMode={chartMode} />
      </div>

      {/* Enhanced ChatBot Button */}
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

      {/* Enhanced ChatBot Modal */}
      {showChatBot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200">
            {/* Chat Header */}
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

            {/* Chat Messages */}
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

            {/* Chat Input */}
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
              {/* Enhanced Quick Actions */}
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

// import React, { useState } from "react";
// import AllPlants from "./AllPlants";

// const Dashboard = () => {
//   const [selectedPlant, setSelectedPlant] = useState("All Plant");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [showChatBot, setShowChatBot] = useState(false);
//   const [chatMessages, setChatMessages] = useState([
//     {
//       type: "bot",
//       message:
//         "Hello! I can help you analyze plant costs and production data. What would you like to know?",
//     },
//   ]);
//   const [currentMessage, setCurrentMessage] = useState("");

//   // Complete plant configurations based on your reference data
//   const plants = {
//     "All Plant": {
//       category: "Forging",
//       unit: "per tonn",
//       status: "active",
//       efficiency: 87.3,
//       data: {
//         tonnage: [4374, 4399, 4824, 5037],
//         months: ["Apr-25", "May-25", "Jun-25", "Jul-25"],
//         costs: {
//           consumables: [3633, 3875, 3230, 3470],
//           power: [7374, 7183, 7116, 7477],
//           fuel: [3136, 3345, 3025, 3237],
//           labour: [2271, 2619, 2013, 2150],
//           subContract: [8207, 7885, 7017, 7560],
//           machineHire: [632, 510, 858, 609],
//           repairMaint: [1436, 3871, 3337, 3151],
//           employeeCost: [5788, 5756, 5248, 5026],
//           establishment: [1177, 1287, 1281, 1188],
//           total: [33655, 36330, 33125, 33868],
//           packing: [500, 550, 600, 580],
//           freight: [800, 850, 900, 870],
//           rawMaterial: [10000, 10500, 9800, 10200],
//         },
//       },
//     },
//     "R'Gon": {
//       category: "Forging",
//       lines: 16,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 87.3,
//       data: generatePlantData("forging"),
//     },
//     Mundhwa: {
//       category: "Forging",
//       lines: 6,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 91.2,
//       data: generatePlantData("forging"),
//     },
//     "Ranjangaon-2": {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 82.5,
//       data: generatePlantData("forging"),
//     },
//     Baramati: {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 89.7,
//       data: generatePlantData("machining"),
//     },
//     Khed: {
//       category: "Machining",
//       lines: 6,
//       unit: "per pc",
//       status: "maintenance",
//       efficiency: 75.3,
//       data: generatePlantData("other"),
//     },
//     Chakan: {
//       category: "Machining",
//       lines: 12,
//       unit: "per pc",
//       status: "active",
//       efficiency: 93.1,
//       data: generatePlantData("forging"),
//     },
//     "Ambethan-1": {
//       category: "Machining",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 88.4,
//       data: generatePlantData("other"),
//     },
//     "Ambethan-2": {
//       category: "Machining",
//       lines: 12,
//       unit: "per pc",
//       status: "active",
//       efficiency: 90.6,
//       data: generatePlantData("other"),
//     },
//     Bhiwadi: {
//       category: "Other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 85.9,
//       data: generatePlantData("forging"),
//     },
//     Gujarat: {
//       category: "other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 87.2,
//       data: generatePlantData("machining"),
//     },
//     "Heat Treatment": {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 92.1,
//       data: generatePlantData("heat_treatment"),
//     },
//     Jejuri: {
//       category: "Other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 89.3,
//       data: generatePlantData("other"),
//     },
//   };

//   // Helper function to generate sample data for plants based on category
//   function generatePlantData(category) {
//     const months = ["Apr-25", "May-25", "Jun-25", "Jul-25"];
//     const baseMultiplier =
//       category === "forging" ? 1.2 : category === "machining" ? 1.1 : 0.9;

//     return {
//       tonnage: months.map(() =>
//         Math.floor((Math.random() * 2000 + 1500) * baseMultiplier)
//       ),
//       months: months,
//       costs: {
//         consumables: months.map(() =>
//           Math.floor((Math.random() * 1500 + 2000) * baseMultiplier)
//         ),
//         power: months.map(() =>
//           Math.floor((Math.random() * 2000 + 5000) * baseMultiplier)
//         ),
//         fuel: months.map(() =>
//           Math.floor((Math.random() * 1000 + 2000) * baseMultiplier)
//         ),
//         labour: months.map(() =>
//           Math.floor((Math.random() * 1000 + 1500) * baseMultiplier)
//         ),
//         subContract: months.map(() =>
//           Math.floor((Math.random() * 3000 + 7000) * baseMultiplier)
//         ),
//         machineHire: months.map(() =>
//           Math.floor((Math.random() * 300 + 500) * baseMultiplier)
//         ),
//         repairMaint: months.map(() =>
//           Math.floor((Math.random() * 1500 + 1500) * baseMultiplier)
//         ),
//         employeeCost: months.map(() =>
//           Math.floor((Math.random() * 1500 + 4000) * baseMultiplier)
//         ),
//         establishment: months.map(() =>
//           Math.floor((Math.random() * 300 + 1000) * baseMultiplier)
//         ),
//         total: months.map(() =>
//           Math.floor((Math.random() * 8000 + 25000) * baseMultiplier)
//         ),
//       },
//     };
//   }

//   // Chat functionality
//   const handleSendMessage = () => {
//     if (!currentMessage.trim()) return;

//     const newUserMessage = { type: "user", message: currentMessage };
//     const botResponse = generateBotResponse(currentMessage);

//     setChatMessages((prev) => [
//       ...prev,
//       newUserMessage,
//       { type: "bot", message: botResponse },
//     ]);
//     setCurrentMessage("");
//   };

//   const generateBotResponse = (message) => {
//     const lowerMessage = message.toLowerCase();
//     const allPlantData = plants["All Plant"];
//     const totalProduction = allPlantData.data.tonnage.reduce((a, b) => a + b, 0);
//     const totalCost = allPlantData.data.costs.total.reduce((a, b) => a + b, 0);
//     const avgCost = Math.round(totalCost / 4);
//     const avgProduction = Math.round(totalProduction / 4);

//     if (lowerMessage.includes("cost")) {
//       return `All plants have a combined average monthly cost of ₹${(avgCost / 1000).toFixed(1)}K. The total cost across all plants for the 4-month period is ₹${(totalCost / 100000).toFixed(1)}L.`;
//     } else if (lowerMessage.includes("efficiency")) {
//       const avgEfficiency = Object.values(plants)
//         .filter((p) => p.efficiency)
//         .reduce((sum, p) => sum + p.efficiency, 0) / Object.keys(plants).length;
//       return `The average efficiency across all plants is ${avgEfficiency.toFixed(1)}%. This includes ${Object.keys(plants).length} production units across Forging, Machining, and Other categories.`;
//     } else if (lowerMessage.includes("production")) {
//       return `All plants combined produced ${totalProduction} tonnes over the 4-month period. The monthly average is ${avgProduction} tonnes across all facilities.`;
//     } else if (lowerMessage.includes("plant") && lowerMessage.includes("count")) {
//       const forgingCount = Object.values(plants).filter(p => p.category === "Forging").length;
//       const machiningCount = Object.values(plants).filter(p => p.category === "Machining").length;
//       const otherCount = Object.values(plants).filter(p => p.category === "Other" || p.category === "other").length;
//       return `We have ${Object.keys(plants).length} plants total: ${forgingCount} in Forging, ${machiningCount} in Machining, and ${otherCount} in Other categories.`;
//     } else if (lowerMessage.includes("trend")) {
//       const trend = allPlantData.data.costs.total[3] > allPlantData.data.costs.total[0] ? "increasing" : "decreasing";
//       const change = ((allPlantData.data.costs.total[3] - allPlantData.data.costs.total[0]) / allPlantData.data.costs.total[0] * 100).toFixed(1);
//       return `Cost trends are ${trend} by ${Math.abs(change)}% over the 4-month period. Production shows ${allPlantData.data.tonnage[3] > allPlantData.data.tonnage[0] ? "growth" : "decline"} from ${allPlantData.data.tonnage[0]} to ${allPlantData.data.tonnage[3]} tonnes.`;
//     } else {
//       return `I can analyze costs, efficiency, production, and trends across all plants. Try asking about "total costs", "plant efficiency", "production trends", or "plant count by category".`;
//     }
//   };

//   return (
//     <div className="bg-gray-50 flex">
//       {/* Enhanced Sidebar */}
//       <div
//         className={`${
//           isSidebarCollapsed ? "w-16" : "w-64"
//         } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
//       >
//         {/* Sidebar Header */}
//         <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-between px-4">
//           {!isSidebarCollapsed && (
//             <div>
//               <h2 className="text font-bold">Kalyani Technoforge Ltd.</h2>
//               <p className="text-xs opacity-90">
//                 {Object.keys(plants).length} Production Units
//               </p>
//             </div>
//           )}
//           <button
//             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//             className="text-white/80 hover:text-white transition-colors"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isSidebarCollapsed ? "M13 5l7 7-7 7" : "M11 19l-7-7 7-7"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Plant List with Categories */}
//         <div className="flex-1 py-3 overflow-y-auto">
//           {/* All Plant Button - Always at top */}
//           <div className="mb-4">
//             <button
//               onClick={() => setSelectedPlant("All Plant")}
//               className={`w-full flex items-center px-4 py-3 transition-all relative
//                 border-l-4 group
//                 ${
//                   selectedPlant === "All Plant"
//                     ? "bg-blue-50 border-blue-500 text-blue-600 shadow-sm"
//                     : "border-transparent text-gray-700 hover:bg-gray-50"
//                 }`}
//               title="All Plants Overview"
//             >
//               {/* Status Dot */}
//               <div className="w-2.5 h-2.5 rounded-full mr-3 bg-green-400 animate-pulse"></div>

//               {/* Plant Info */}
//               {!isSidebarCollapsed && (
//                 <div className="flex-1 text-left">
//                   <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
//                     All Plant
//                   </div>
//                   <div className="text-xs text-gray-500 mt-0.5">
//                     Overview Dashboard
//                   </div>
//                 </div>
//               )}
//             </button>
//           </div>

//           {/* Category Sections */}
//           {["Forging", "Machining", "Other"].map((category) => {
//             const categoryPlants = Object.entries(plants).filter(
//               ([name, p]) => name !== "All Plant" && p.category === category
//             );
//             const plantCount = categoryPlants.length;

//             // Unit logic: Forging = Per Ton, others = Per Pic
//             const unit = category === "Forging" ? "Per Ton" : "Per Pic";

//             return (
//               <div key={category} className="mb-4">
//                 {/* Category Header */}
//                 {!isSidebarCollapsed && (
//                   <div
//                     className="px-4 py-2 text-xs font-semibold tracking-wider
//                        bg-gradient-to-r from-gray-50 to-gray-100
//                        border-b border-gray-200
//                        flex items-center justify-between
//                        rounded-md shadow-sm"
//                   >
//                     {/* Left Side → Category Name – Unit */}
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <span>{category}</span>
//                       <span className="text-gray-400">–</span>
//                       <span className="text-[11px] font-normal text-gray-500">
//                         {unit}
//                       </span>
//                     </div>

//                     {/* Right Side → Plant Count */}
//                     <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
//                       {plantCount}
//                     </span>
//                   </div>
//                 )}

//                 {/* Plants under category - Disabled/View Only */}
//                 {categoryPlants.map(([plantName, plantInfo]) => (
//                   <div
//                     key={plantName}
//                     className="w-full flex items-center px-4 py-3 opacity-50 cursor-not-allowed
//                       border-l-4 border-transparent text-gray-500"
//                     title={`${plantName} - ${plantInfo.category} - ${plantInfo.lines} Lines`}
//                   >
//                     {/* Status Dot */}
//                     <div
//                       className={`w-2.5 h-2.5 rounded-full mr-3
//                         ${
//                           plantInfo.status === "active"
//                             ? "bg-gray-400"
//                             : "bg-gray-300"
//                         }
//                       `}
//                     ></div>

//                     {/* Plant Info */}
//                     {!isSidebarCollapsed && (
//                       <div className="flex-1 text-left">
//                         <div className="text-sm font-medium">
//                           {plantName}
//                         </div>
//                         <div className="text-xs text-gray-400 mt-0.5">
//                           {plantInfo.lines} Lines
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Main Content - Only AllPlants Component */}
//       <div className="flex-1 flex flex-col">
//         <AllPlants />
//       </div>

//       {/* Enhanced ChatBot Button */}
//       <button
//         onClick={() => setShowChatBot(true)}
//         className="fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-110 z-40"
//         title="ProfitPulse — Plant Costing Assistant"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//           />
//         </svg>
//         <span className="font-medium">ProfitPulse</span>
//       </button>

//       {/* Enhanced ChatBot Modal */}
//       {showChatBot && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50">
//           <div className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200">
//             {/* Chat Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 rounded-t-xl flex justify-between items-center">
//               <div>
//                 <h3 className="font-bold">Plant Analytics Assistant</h3>
//                 <p className="text-xs opacity-90">
//                   AI-powered manufacturing insights
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowChatBot(false)}
//                 className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
//               {chatMessages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex ${
//                     msg.type === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-[85%] p-3 rounded-lg text-sm ${
//                       msg.type === "user"
//                         ? "bg-blue-600 text-white rounded-br-none shadow-md"
//                         : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none"
//                     }`}
//                   >
//                     {msg.message}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Chat Input */}
//             <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={currentMessage}
//                   onChange={(e) => setCurrentMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Ask about costs, efficiency, production..."
//                   className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               {/* Enhanced Quick Actions */}
//               <div className="mt-3 flex flex-wrap gap-2">
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("Show total cost analysis")
//                   }
//                   className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-200"
//                 >
//                   Cost Analysis
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("What's the average plant efficiency?")
//                   }
//                   className="text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-full transition-colors border border-green-200"
//                 >
//                   Efficiency Overview
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("Show production trends")
//                   }
//                   className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full transition-colors border border-orange-200"
//                 >
//                   Production Trends
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("How many plants per category?")
//                   }
//                   className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full transition-colors border border-purple-200"
//                 >
//                   Plant Count
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
