import React from "react";

const Sidebar = ({ 
  plants, 
  selectedPlant, 
  setSelectedPlant, 
  isSidebarCollapsed, 
  setIsSidebarCollapsed 
}) => {
  // Add null/undefined check for plants
  if (!plants) {
    return (
      <div className={`${
        isSidebarCollapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-center px-4">
          <p className="text-sm">Loading plants...</p>
        </div>
      </div>
    );
  }

  // Convert plants to object if it's not already (safety check)
  const plantsData = typeof plants === 'object' && plants !== null ? plants : {};
  const plantKeys = Object.keys(plantsData);

  return (
    <div
      className={`${
        isSidebarCollapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
    >
      {/* Sidebar Header */}
      <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-between px-4">
        {!isSidebarCollapsed && (
          <div>
            <h2 className="text font-bold">Kalyani Technoforge Ltd.</h2>
            <p className="text-xs opacity-90">
              {plantKeys.length} Production Units
            </p>
          </div>
        )}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="text-white/80 hover:text-white transition-colors"
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
              d={isSidebarCollapsed ? "M13 5l7 7-7 7" : "M11 19l-7-7 7-7"}
            />
          </svg>
        </button>
      </div>

      {/* Plant List with Categories */}
      <div className="flex-1 py-3 overflow-y-auto">
        {["Forging", "Machining", "Other"].map((category) => {
          const categoryPlants = plantKeys
            .filter(key => plantsData[key] && plantsData[key].category === category)
            .map(key => [key, plantsData[key]]);
          
          const plantCount = categoryPlants.length;

          // Unit logic: Forging = Per Ton, others = Per Pic
          const unit = category === "Forging" ? "Per Ton" : "Per Pic";

          // Skip rendering if no plants in this category
          if (plantCount === 0) return null;

          return (
            <div key={category} className="mb-4">
              {/* Category Header */}
              {!isSidebarCollapsed && (
                <div
                  className="px-4 py-2 text-xs font-semibold tracking-wider 
                     bg-gradient-to-r from-gray-50 to-gray-100
                     border-b border-gray-200
                     flex items-center justify-between
                     rounded-md shadow-sm"
                >
                  {/* Left Side → Category Name – Unit */}
                  <div className="flex items-center gap-2 text-gray-700">
                    <span>{category}</span>
                    <span className="text-gray-400">–</span>
                    <span className="text-[11px] font-normal text-gray-500">
                      {unit}
                    </span>
                  </div>

                  {/* Right Side → Plant Count */}
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
                    {plantCount}
                  </span>
                </div>
              )}

              {/* Plants under category */}
              {categoryPlants.map(([plantName, plantInfo]) => {
                // Additional safety check for plantInfo
                if (!plantInfo) return null;
                
                return (
                  <button
                    key={plantName}
                    onClick={() => setSelectedPlant(plantName)}
                    className={`w-full flex items-center px-4 py-3 transition-all relative
                      border-l-4 group
                      ${
                        selectedPlant === plantName
                          ? "bg-blue-50 border-blue-500 text-blue-600 shadow-sm"
                          : "border-transparent text-gray-700 hover:bg-gray-50"
                      }`}
                    title={`${plantName} - ${plantInfo.category || 'N/A'} - ${plantInfo.lines || 0} Lines`}
                  >
                    {/* Status Dot */}
                    <div
                      className={`w-2.5 h-2.5 rounded-full mr-3 
                        ${
                          plantInfo.status === "active"
                            ? "bg-green-400 animate-pulse"
                            : "bg-yellow-400"
                        }
                      `}
                    ></div>

                    {/* Plant Info */}
                    {!isSidebarCollapsed && (
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
                          {plantName}
                        </div>

                        {/* Lines Only */}
                        <div className="text-xs text-gray-500 mt-0.5">
                          {plantInfo.lines || 0} Lines
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;