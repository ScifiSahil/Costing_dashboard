import React, { useState } from "react";
import RawMaterialCostChart from "./RawMaterialCostChart";
import CostScreener from "./costscreener";

const AllPlants = ({ showDetailsPage, chartMode }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="flex-1">
        {showDetailsPage ? (
          <CostScreener />
        ) : (
          <RawMaterialCostChart mode={chartMode} />
        )}
      </main>
    </div>
  );
};

export default AllPlants;
