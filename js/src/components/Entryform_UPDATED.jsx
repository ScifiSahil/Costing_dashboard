import React, { useState } from 'react'
import MachinePowerForm from '../components/MachinePowerForm'
import KPITargetEntryForm from '../components/KPITargetEntryForm'
import { Zap, Target, ChevronDown } from 'lucide-react'

/**
 * Entryform - Main entry point for all data entry forms
 * Combines Machine Power Entry and KPI Target Entry
 */

function Entryform() {
  const [activeTab, setActiveTab] = useState('power_entry')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const tabs = [
    {
      id: 'power_entry',
      label: 'Machine Power & Fuel Entry',
      icon: Zap,
      color: 'blue',
      description: 'Enter power consumption and fuel data'
    },
    {
      id: 'kpi_targets',
      label: 'KPI Target Entry',
      icon: Target,
      color: 'indigo',
      description: 'Set and manage KPI targets'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h1 className="text-3xl font-black">Data Entry System</h1>
                <p className="text-blue-300 text-sm font-medium">Costing & KPI Management</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ChevronDown className={`w-6 h-6 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* TABS NAVIGATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group p-6 rounded-xl border-2 transition-all transform hover:scale-105 text-left ${
                  isActive
                    ? `bg-gradient-to-br from-${tab.color}-500 to-${tab.color}-700 text-white border-${tab.color}-600 shadow-xl`
                    : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                }`}
              >
                <div className={`flex items-start justify-between mb-3 ${isActive ? 'text-white' : 'text-gray-600'}`}>
                  <TabIcon className="w-8 h-8" />
                  {isActive && (
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs font-bold">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                  {tab.label}
                </h3>
                <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                  {tab.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* CONTENT AREA */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden">
          {/* ACTIVE FORM */}
          {activeTab === 'power_entry' && (
            <div className="animate-fadeIn">
              <MachinePowerForm />
            </div>
          )}

          {activeTab === 'kpi_targets' && (
            <div className="animate-fadeIn">
              <KPITargetEntryForm />
            </div>
          )}
        </div>

        {/* INFO SECTION */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="font-bold text-blue-900 mb-1">💡 Tips</p>
            <p className="text-sm text-blue-800">Fill all required fields marked with asterisks (*) before submitting.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <p className="font-bold text-green-900 mb-1">✅ Success</p>
            <p className="text-sm text-green-800">You'll see a confirmation message after successful submission.</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
            <p className="font-bold text-orange-900 mb-1">⚠️ Important</p>
            <p className="text-sm text-orange-800">Review all entries carefully before final submission.</p>
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Entryform
