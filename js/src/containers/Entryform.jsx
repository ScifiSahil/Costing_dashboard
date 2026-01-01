import React, { useState } from "react";
import MachinePowerForm from "../components/MachinePowerForm";
import KPITargetEntryForm from "../components/KPITargetEntryForm";
import { Zap, Target } from "lucide-react";

function Entryform() {
  const [activeTab, setActiveTab] = useState("power");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-3 mb-4 flex-wrap">
       
          <button
            onClick={() => setActiveTab("power")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeTab === "power"
                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:shadow-sm"
            }`}
          >
            <Zap className="w-4 h-4" />
            Power & Fuel Entry
          </button>

        
          <button
            onClick={() => setActiveTab("kpi")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
              activeTab === "kpi"
                ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-800 hover:border-gray-400 hover:shadow-sm"
            }`}
          >
            <Target className="w-4 h-4" />
            KPI Targets
          </button>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200">
          {activeTab === "power" && <MachinePowerForm />}
          {activeTab === "kpi" && <KPITargetEntryForm />}
        </div>
      </div>
    </div>
  );
}

export default Entryform;
