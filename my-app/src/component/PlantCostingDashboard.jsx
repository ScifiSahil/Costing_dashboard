import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Factory,
  DollarSign,
} from "lucide-react";

const BulletChart = ({
  title,
  actual,
  target,
  predictive,
  unit = "",
  max,
  color = "blue",
}) => {
  const normalizedActual = (actual / max) * 100;
  const normalizedTarget = (target / max) * 100;
  const normalizedPredictive = (predictive / max) * 100;

  const performance = ((actual / target) * 100).toFixed(1);
  const trend = actual > predictive ? "up" : "down";

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      actual: "bg-blue-600",
      predictive: "bg-orange-500",
      target: "bg-gray-800",
    },
    green: {
      bg: "bg-green-100",
      actual: "bg-green-600",
      predictive: "bg-orange-500",
      target: "bg-gray-800",
    },
    purple: {
      bg: "bg-purple-100",
      actual: "bg-purple-600",
      predictive: "bg-orange-500",
      target: "bg-gray-800",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-2xl font-bold text-gray-900">
            {actual.toLocaleString()}
            {unit}
          </span>
          {trend === "up" ? (
            <TrendingUp className="w-5 h-5 text-green-500" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${
              performance >= 100 ? "text-green-600" : "text-red-600"
            }`}
          >
            {performance}%
          </span>
        </div>
      </div>

      <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
        {/* Background zones */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 bg-red-50"></div>
          <div className="w-1/3 bg-yellow-50"></div>
          <div className="w-1/3 bg-green-50"></div>
        </div>

        {/* Predictive bar */}
        <d
          className={`absolute top-1 h-6 ${colors.predictive} opacity-40 rounded`}
          style={{ width: `${normalizedPredictive}%`, left: "0" }}
        />

        {/* Actual bar */}
        <div
          className={`absolute top-2 h-4 ${colors.actual} rounded shadow-sm`}
          style={{ width: `${normalizedActual}%`, left: "0" }}
        />

        {/* Target line */}
        <div
          className={`absolute top-0 w-1 h-8 ${colors.target} shadow-lg`}
          style={{ left: `${normalizedTarget}%` }}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-1 rounded">
            {target.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>0</span>
        <span>{(max / 2).toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>

      <div className="flex gap-4 mt-3 text-xs">
        <div className="flex items-center gap-1">
          <div className={`w-3 h-3 ${colors.actual} rounded`}></div>
          <span className="text-gray-600">Actual</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`w-3 h-3 ${colors.predictive} opacity-40 rounded`}
          ></div>
          <span className="text-gray-600">Predictive</span>
        </div>
        <div className="flex items-center gap-1">
          <div className={`w-3 h-3 ${colors.target} rounded`}></div>
          <span className="text-gray-600">Target</span>
        </div>
      </div>
    </div>
  );
};

const PlantCostingDashboard = () => {
  const [selectedPlant, setSelectedPlant] = useState("Ranjangaon");
  const [selectedMonth, setSelectedMonth] = useState("Jul-25");
  const [selectedCategory, setSelectedCategory] = useState("All");
  // ⬅️ PlantCostingDashboard component ke andar, existing state ke sath add karo
  const [viewMode, setViewMode] = useState("bullet"); // "bullet" ya "growth"

  // Sample data based on your provided data
  const plantData = {
    Ranjangaon: {
      tonnage: { actual: 5037, target: 4800, predictive: 4900 },
      consumables: { actual: 3470, target: 3400, predictive: 3542 },
      power: { actual: 7477, target: 7200, predictive: 7290 },
      fuel: { actual: 3237, target: 3100, predictive: 3184 },
      labour: { actual: 2150, target: 2000, predictive: 2254 },
      subContract: { actual: 7560, target: 7500, predictive: 7667 },
      machineHire: { actual: 609, target: 650, predictive: 656 },
      repair: { actual: 3151, target: 3000, predictive: 2967 },
      employeeCost: { actual: 5026, target: 5200, predictive: 5434 },
      establishment: { actual: 1188, target: 1250, predictive: 1233 },
      totalCost: { actual: 33868, target: 33000, predictive: 34226 },
    },
    Mundhwa: {
      tonnage: { actual: 1687, target: 1750, predictive: 1800 },
      consumables: { actual: 2439, target: 2500, predictive: 2576 },
      power: { actual: 7186, target: 7000, predictive: 6961 },
      fuel: { actual: 2857, target: 2700, predictive: 2403 },
      labour: { actual: 2870, target: 2800, predictive: 2371 },
      subContract: { actual: 13835, target: 13000, predictive: 11726 },
      machineHire: { actual: 666, target: 700, predictive: 730 },
      repair: { actual: 3257, target: 3300, predictive: 3666 },
      employeeCost: { actual: 5880, target: 5700, predictive: 5746 },
      establishment: { actual: 1390, target: 1400, predictive: 1403 },
      totalCost: { actual: 40380, target: 39000, predictive: 37583 },
    },
  };

  const categories = ["All", "Production", "Variable Costs", "Fixed Costs"];

  const plants = Object.keys(plantData);
  const months = ["Apr-25", "May-25", "Jun-25", "Jul-25"];

  const currentData = plantData[selectedPlant];

  const kpiCards = [
    {
      title: "Cost per Tonne",
      value: (
        currentData.totalCost.actual / currentData.tonnage.actual
      ).toFixed(2),
      unit: "₹",
      change: "+2.3%",
      trend: "up",
    },
    {
      title: "% wrt Production Value",
      value: "78.5",
      unit: "%",
      change: "-1.2%",
      trend: "down",
    },
    {
      title: "% wrt Sale Value",
      value: "65.3",
      unit: "%",
      change: "+0.8%",
      trend: "up",
    },
    {
      title: "Overall Efficiency",
      value: "92.4",
      unit: "%",
      change: "+3.1%",
      trend: "up",
    },
  ];

  const getFilteredCharts = () => {
    if (selectedCategory === "All") {
      return [
        {
          key: "tonnage",
          title: "Production Tonnage",
          unit: " MT",
          color: "green",
        },
        { key: "totalCost", title: "Total Cost", unit: "₹", color: "blue" },
        {
          key: "consumables",
          title: "Consumables",
          unit: "₹",
          color: "purple",
        },
        { key: "power", title: "Power Cost", unit: "₹", color: "blue" },
        { key: "fuel", title: "Fuel Cost", unit: "₹", color: "green" },
        { key: "labour", title: "Labour Charges", unit: "₹", color: "purple" },
        { key: "subContract", title: "Sub-Contract", unit: "₹", color: "blue" },
        {
          key: "repair",
          title: "Repair & Maintenance",
          unit: "₹",
          color: "green",
        },
      ];
    } else if (selectedCategory === "Production") {
      return [
        {
          key: "tonnage",
          title: "Production Tonnage",
          unit: " MT",
          color: "green",
        },
      ];
    } else if (selectedCategory === "Variable Costs") {
      return [
        {
          key: "consumables",
          title: "Consumables",
          unit: "₹",
          color: "purple",
        },
        { key: "power", title: "Power Cost", unit: "₹", color: "blue" },
        { key: "fuel", title: "Fuel Cost", unit: "₹", color: "green" },
        { key: "labour", title: "Labour Charges", unit: "₹", color: "purple" },
        { key: "subContract", title: "Sub-Contract", unit: "₹", color: "blue" },
        {
          key: "machineHire",
          title: "Machine Hire",
          unit: "₹",
          color: "green",
        },
        {
          key: "repair",
          title: "Repair & Maintenance",
          unit: "₹",
          color: "purple",
        },
      ];
    } else {
      return [
        {
          key: "employeeCost",
          title: "Employee Cost",
          unit: "₹",
          color: "blue",
        },
        {
          key: "establishment",
          title: "Establishment Exp",
          unit: "₹",
          color: "green",
        },
      ];
    }
  };

  const chartsToDisplay = getFilteredCharts();

  // Dummy Growth Chart (line chart style)
  const GrowthChart = ({ title, actual, predictive, target }) => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {title} (Growth)
        </h3>
        <div className="h-32 flex items-center justify-center text-gray-500 text-sm">
          {/* Yaha tum future me line/area chart library integrate kar sakte ho */}
          📈 Actual: {actual}, Predictive: {predictive}, Target: {target}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Factory className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Plant Cost KPI Dashboard
            </h1>
          </div>
          <p className="text-gray-600">
            Monitor production costs and efficiency metrics with predictive
            analytics
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plant
              </label>
              <div className="relative">
                <select
                  value={selectedPlant}
                  onChange={(e) => setSelectedPlant(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {plants.map((plant) => (
                    <option key={plant} value={plant}>
                      {plant}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Month
              </label>
              <div className="relative">
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Filters
              </button>
            </div>
          </div>
        </div>


        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{kpi.title}</span>
                <DollarSign className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {kpi.value}
                </span>
                <span className="text-sm text-gray-500">{kpi.unit}</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {kpi.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span
                  className={`text-sm font-medium ${
                    kpi.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {kpi.change}
                </span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bullet Charts Grid */}
        {/* Charts Section */}
        {viewMode === "bullet" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {chartsToDisplay.map((chart) => {
              const data = currentData[chart.key];
              const max =
                Math.max(data.actual, data.target, data.predictive) * 1.2;

              return (
                <BulletChart
                  key={chart.key}
                  title={chart.title}
                  actual={data.actual}
                  target={data.target}
                  predictive={data.predictive}
                  unit={chart.unit}
                  max={max}
                  color={chart.color}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {chartsToDisplay.map((chart) => {
              const data = currentData[chart.key];
              return (
                <GrowthChart
                  key={chart.key}
                  title={chart.title}
                  actual={data.actual}
                  target={data.target}
                  predictive={data.predictive}
                />
              );
            })}
          </div>
        )}

        {/* Summary Section */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Performance Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Best Performing Metrics
              </h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Power Cost: 103.8% of target</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Tonnage: 104.9% of target</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Areas Needing Attention
              </h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Machine Hire: 93.7% of target</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Employee Cost: 96.7% of target</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Predictive Insights
              </h4>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Total costs trending 1.1% above prediction</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Sub-contract costs may exceed budget</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCostingDashboard;
