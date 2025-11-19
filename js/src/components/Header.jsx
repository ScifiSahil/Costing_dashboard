import React from "react";

const Header = ({ selectedPlant, currentPlant, kpis, getPeriodDisplay,  realForgingData }) => {
  const efficiency = realForgingData?.efficiency || {
    current: 0,
    target: 0,
    trend: "flat",
    change: 0,
  };

const category = realForgingData?.category || "N/A"; 

  return (
    <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
      {/* Left Section - Plant Info */}
      <div>
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-white">
            {selectedPlant} Plant
          </h1>
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
            {efficiency.current}% Efficiency
          </span>
        </div>
        <div className="flex items-center space-x-4 mt-1">
          <span className="text-sm text-blue-100">
             {category} Division
          </span>
          <span className="text-sm text-blue-100">•</span>
          <span className="text-sm text-blue-100">
            Cost {currentPlant.unit}
          </span>
        </div>
      </div>

      {/* Right Section - All Metrics in Organized Grid */}
      <div className="flex items-center space-x-8">
        {/* Production Metrics Column */}
        <div className="text-right">
          <div className="text-xs text-blue-100 uppercase font-semibold">
            Production (4M)
          </div>
          <div className="text-xl font-bold text-white">
            {(kpis.avgProduction * 4).toLocaleString()}
          </div>
          <div className="text-xs text-blue-200">Total Output</div>
        </div>

        {/* Cost Metrics Column */}
        <div className="text-right">
          <div className="text-xs text-blue-100 uppercase font-semibold">
            Total Cost
          </div>
          <div className="text-xl font-bold text-white">
            ₹{(kpis.totalCost / 100000).toFixed(1)}L
          </div>
          <div className="text-xs text-blue-200">
            ₹{kpis.costPerUnit} per unit
          </div>
        </div>

        {/* Revenue Column */}
        <div className="text-right">
          <div className="text-xs text-blue-100 uppercase font-semibold">
            Revenue
          </div>
          <div className="text-xl font-bold text-green-300">
            ₹{(kpis.productionValue / 100000).toFixed(1)}L
          </div>
          <div className="text-xs text-green-200">4-Month Total</div>
        </div>

        {/* Profit Margin Column */}
        <div className="text-right">
          <div className="text-xs text-blue-100 uppercase font-semibold">
            Profit Margin
          </div>
          <div className="text-xl font-bold text-yellow-300">
            {(
              ((kpis.productionValue - kpis.totalCost) /
                kpis.productionValue) *
              100
            ).toFixed(1)}
            %
          </div>
          <div className="text-xs text-yellow-200">EBITDA</div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;