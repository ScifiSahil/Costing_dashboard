import React from "react";
import { Calendar, BarChart3 } from "lucide-react";
import { useCostStore } from "../store/costStore";

const ViewModeToggle = ({ theme }) => {
  const viewMode = useCostStore((state) => state.viewMode);
  const setViewMode = useCostStore((state) => state.setViewMode);
  const apiLoading = useCostStore((state) => state.apiLoading);

  const handleToggle = (mode) => {
    if (apiLoading || viewMode === mode) return;
    setViewMode(mode);
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-semibold ${theme.secondaryText}`}>
        Chart View:
      </span>

      <div
        className={`relative flex items-center rounded-full p-1 border shadow-md ${theme.cardBg} ${theme.border}`}
      >
        {/* Sliding Indicator */}
        <div
          className={`absolute top-1 left-1 h-9 w-24 rounded-full bg-gradient-to-r
            ${theme.accentGradient} transition-all duration-300 ease-in-out ${
            viewMode === "month" ? "translate-x-0" : "translate-x-24"
          }`}
        />

        {/* Month Button */}
        <button
          onClick={() => handleToggle("month")}
          disabled={apiLoading}
          className={`relative z-10 w-24 h-9 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors
            ${viewMode === "month" ? "text-white" : "text-gray-600"}
            ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {apiLoading && viewMode === "month" ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <BarChart3 className="w-4 h-4" />
              <span>Month</span>
            </>
          )}
        </button>

        {/* Day Button */}
        <button
          onClick={() => handleToggle("day")}
          disabled={apiLoading}
          className={`relative z-10 w-24 h-9 rounded-full text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors
            ${viewMode === "day" ? "text-white" : "text-gray-600"}
            ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {apiLoading && viewMode === "day" ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Calendar className="w-4 h-4" />
              <span>Day</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ViewModeToggle;