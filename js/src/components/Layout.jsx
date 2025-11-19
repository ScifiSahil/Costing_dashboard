import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ 
  children,
  plants,
  selectedPlant,
  setSelectedPlant,
  currentPlant,
  kpis,
  getPeriodDisplay,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  showHeader = true
}) => {
  return (
    <div className="bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        plants={plants}
        selectedPlant={selectedPlant}
        setSelectedPlant={setSelectedPlant}
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header - Only show if showHeader is true and not on All Plant view */}
        {showHeader && selectedPlant !== "All Plant" && (
          <Header
            selectedPlant={selectedPlant}
            currentPlant={currentPlant}
            kpis={kpis}
            getPeriodDisplay={getPeriodDisplay}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;