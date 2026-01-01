import React, { useState, useEffect } from "react";
import {
  X,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const ActionInsightsModal = ({
  kpiName,
  month,
  position,
  cardRef,
  onClose,
}) => {
  const [modalPosition, setModalPosition] = useState(null);
  const [activeTab, setActiveTab] = useState("action");

  useEffect(() => {
    if (!modalPosition && position && cardRef?.current) {
      const modalHeight = 185;
      const modalWidth = 230;
      const cardRect = cardRef.current.getBoundingClientRect();

      let top = position.y - modalHeight - 10;
      let left = position.x - modalWidth / 2;

      if (top < 5) top = 5;
      if (left < 5) left = 5;
      if (left + modalWidth > cardRect.width - 5) {
        left = cardRect.width - modalWidth - 5;
      }

      setModalPosition({ top, left });
    }
  }, [position, cardRef, modalPosition]);

  if (!modalPosition) return null;

  const tabs = [
    { id: "action", label: "Action", icon: Zap, color: "#3b82f6", bg: "#eff6ff", text: "text-blue-600" },
    { id: "improve", label: "Improve", icon: Target, color: "#10b981", bg: "#ecfdf5", text: "text-emerald-600" },
    { id: "insights", label: "Insights", icon: Lightbulb, color: "#f97316", bg: "#fff7ed", text: "text-orange-600" },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab);

  const tabContent = {
    action: {
      title: "Action Required",
      icon: TrendingUp,
      items: ["Cost increased by 12%", "Peak usage: night shift", "Material waste: 8%"],
    },
    improve: {
      title: "Improvement Steps",
      icon: CheckCircle,
      items: ["Schedule maintenance", "Negotiate bulk discounts", "Optimize shift timings"],
    },
    insights: {
      title: "Root Cause",
      icon: AlertTriangle,
      items: ["High production volume", "Equipment downtime", "Supplier price hike"],
    },
  };

  const content = tabContent[activeTab];
  const ContentIcon = content.icon;

  return (
    <div
      className="absolute"
      style={{
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
        width: "230px",
        pointerEvents: "all",
        zIndex: 999999,
      }}
      onMouseDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
    >
      {/* Arrow */}
      <div
        className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45"
        style={{
          backgroundColor: "#f9fafb",
          borderRight: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
          zIndex: 999998,
        }}
      />

      {/* Modal */}
      <div
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Header - Compact */}
        <div
          className="px-2.5 py-1.5 flex items-center justify-between"
          style={{ backgroundColor: currentTab.color }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold text-white">{kpiName}</span>
            <span className="text-[10px] text-white/70 font-medium">• {month}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClose(); }}
            className="w-5 h-5 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center"
          >
            <X className="w-3 h-3 text-white" />
          </button>
        </div>

        {/* Tabs - Compact */}
        <div
          className="flex border-b border-gray-200"
          style={{ backgroundColor: "#f9fafb" }}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => { e.stopPropagation(); e.preventDefault(); setActiveTab(tab.id); }}
                className={`flex-1 py-1 flex items-center justify-center gap-1 text-[10px] font-bold transition-all ${
                  isActive ? `${tab.text} border-b-2` : "text-gray-500 hover:bg-gray-100"
                }`}
                style={{
                  backgroundColor: isActive ? tab.bg : "transparent",
                  borderBottomColor: isActive ? tab.color : "transparent",
                }}
              >
                <Icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content - Compact */}
        <div className="p-2.5" style={{ backgroundColor: currentTab.bg }}>
          <div className="flex items-start gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: currentTab.color }}
            >
              <ContentIcon className="w-3 h-3 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 text-[12px] mb-1">{content.title}</h4>
              <ul className="space-y-0.5">
                {content.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: currentTab.color }}
                    />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Buttons - Compact */}
        <div
          className="px-2.5 py-1.5 flex gap-2 border-t border-gray-200"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); onClose(); }}
            className="flex-1 py-1 rounded text-[11px] font-bold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
          >
            Close
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
            className="flex-1 py-1 rounded text-[11px] font-bold text-white hover:opacity-90 transition-all flex items-center justify-center gap-1"
            style={{ backgroundColor: currentTab.color }}
          >
            Details
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionInsightsModal;