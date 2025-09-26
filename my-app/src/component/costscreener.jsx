import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
} from "recharts";
import {
  Zap,
  Palette,
  Check,
  TrendingUp,
  Factory,
  Package,
  Users,
  Fuel,
  Handshake,
  Wrench,
  Settings,
  Building,
  Box,
  Truck,
  ArrowUp,
  ArrowDown,
  Bell,
  AlertTriangle,
  AlertCircle,
  X,
  TrendingDown,
} from "lucide-react";
// import Layout from "./Layout";

const themes = {
  ocean: {
    name: "Ocean Breeze",
    mainBg: "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-slate-800",
    secondaryText: "text-slate-600",
    mutedText: "text-slate-500",
    border: "border-cyan-200/60",
    shadow: "shadow-xl shadow-cyan-400/20",
    chartBg: "bg-gradient-to-br from-white via-cyan-50/50 to-blue-50/40",
    gridColor: "#e0f2fe",
    buttonBg: "bg-gradient-to-r from-cyan-100 to-blue-100",
    buttonHover: "hover:from-cyan-200 hover:to-blue-200",
    cardGradient: "from-cyan-50 via-blue-50 to-teal-100",
    dotPattern: "from-cyan-500/5 via-blue-500/10 to-teal-500/5",
    accentGradient: "from-cyan-500 via-blue-500 to-teal-600",
    glowEffect: "shadow-2xl shadow-cyan-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-blue-500/40",
    // Chart specific colors
    chartColors: {
      actualLine: "#06b6d4",
      predictedLine: "#3b82f6",
      targetLine: "#fbbf24",
      actualFill: "rgba(6, 182, 212, 0.3)",
      predictedFill: "rgba(59, 130, 246, 0.2)",
      goodColor: "#10b981",
      badColor: "#ef4444",
      ebitdaActual: "#059669",
      ebitdaBudget: "#fbbf24",
      percentActual: "#0891b2",
      percentPredicted: "#7c3aed",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  sunset: {
    name: "Sunset Glow",
    mainBg: "bg-gradient-to-br from-orange-50 via-pink-50 to-red-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-gray-800",
    secondaryText: "text-gray-600",
    mutedText: "text-gray-500",
    border: "border-orange-200/60",
    shadow: "shadow-xl shadow-orange-400/20",
    chartBg: "bg-gradient-to-br from-white via-orange-50/50 to-pink-50/40",
    gridColor: "#fed7aa",
    buttonBg: "bg-gradient-to-r from-orange-100 to-pink-100",
    buttonHover: "hover:from-orange-200 hover:to-pink-200",
    cardGradient: "from-orange-50 via-pink-50 to-red-100",
    dotPattern: "from-orange-500/5 via-pink-500/10 to-red-500/5",
    accentGradient: "from-orange-500 via-pink-500 to-red-600",
    glowEffect: "shadow-2xl shadow-orange-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-pink-500/40",
    chartColors: {
      actualLine: "#f97316",
      predictedLine: "#ec4899",
      targetLine: "#fbbf24",
      actualFill: "rgba(249, 115, 22, 0.3)",
      predictedFill: "rgba(236, 72, 153, 0.2)",
      goodColor: "#10b981",
      badColor: "#dc2626",
      ebitdaActual: "#ea580c",
      ebitdaBudget: "#f59e0b",
      percentActual: "#f97316",
      percentPredicted: "#db2777",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  forest: {
    name: "Forest Depths",
    mainBg: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-green-900",
    secondaryText: "text-green-700",
    mutedText: "text-green-600",
    border: "border-emerald-200/60",
    shadow: "shadow-xl shadow-emerald-400/20",
    chartBg: "bg-gradient-to-br from-white via-emerald-50/50 to-green-50/40",
    gridColor: "#d1fae5",
    buttonBg: "bg-gradient-to-r from-emerald-100 to-green-100",
    buttonHover: "hover:from-emerald-200 hover:to-green-200",
    cardGradient: "from-emerald-50 via-green-50 to-teal-100",
    dotPattern: "from-emerald-500/5 via-green-500/10 to-teal-500/5",
    accentGradient: "from-emerald-500 via-green-500 to-teal-600",
    glowEffect: "shadow-2xl shadow-emerald-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-green-500/40",
    chartColors: {
      actualLine: "#10b981",
      predictedLine: "#059669",
      targetLine: "#84cc16",
      actualFill: "rgba(16, 185, 129, 0.3)",
      predictedFill: "rgba(5, 150, 105, 0.2)",
      goodColor: "#059669",
      badColor: "#ef4444",
      ebitdaActual: "#047857",
      ebitdaBudget: "#65a30d",
      percentActual: "#10b981",
      percentPredicted: "#14b8a6",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  lavender: {
    name: "Lavender Dreams",
    mainBg: "bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-purple-900",
    secondaryText: "text-purple-700",
    mutedText: "text-purple-600",
    border: "border-purple-200/60",
    shadow: "shadow-xl shadow-purple-400/20",
    chartBg: "bg-gradient-to-br from-white via-purple-50/50 to-indigo-50/40",
    gridColor: "#e9d5ff",
    buttonBg: "bg-gradient-to-r from-purple-100 to-indigo-100",
    buttonHover: "hover:from-purple-200 hover:to-indigo-200",
    cardGradient: "from-purple-50 via-indigo-50 to-pink-100",
    dotPattern: "from-purple-500/5 via-indigo-500/10 to-pink-500/5",
    accentGradient: "from-purple-500 via-indigo-500 to-pink-600",
    glowEffect: "shadow-2xl shadow-purple-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-indigo-500/40",
    chartColors: {
      actualLine: "#9333ea",
      predictedLine: "#6366f1",
      targetLine: "#ec4899",
      actualFill: "rgba(147, 51, 234, 0.3)",
      predictedFill: "rgba(99, 102, 241, 0.2)",
      goodColor: "#10b981",
      badColor: "#ef4444",
      ebitdaActual: "#7c3aed",
      ebitdaBudget: "#db2777",
      percentActual: "#9333ea",
      percentPredicted: "#8b5cf6",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  midnight: {
    name: "Midnight Aurora",
    mainBg: "bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950",
    cardBg:
      "bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 backdrop-blur-xl",
    modalBg: "bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl",
    primaryText: "text-white",
    secondaryText: "text-slate-300",
    mutedText: "text-slate-400",
    border: "border-purple-400/30",
    shadow: "shadow-2xl shadow-purple-500/30",
    chartBg:
      "bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-purple-950/80",
    gridColor: "#4b5563",
    buttonBg: "bg-gradient-to-r from-indigo-800 to-purple-800",
    buttonHover: "hover:from-indigo-700 hover:to-purple-700",
    cardGradient: "from-indigo-900/80 via-purple-900/70 to-slate-900/80",
    dotPattern: "from-purple-500/10 via-indigo-500/15 to-blue-500/10",
    accentGradient: "from-purple-400 via-indigo-400 to-blue-500",
    glowEffect: "shadow-2xl shadow-purple-500/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-indigo-500/40",
    chartColors: {
      actualLine: "#a78bfa",
      predictedLine: "#818cf8",
      targetLine: "#fbbf24",
      actualFill: "rgba(167, 139, 250, 0.3)",
      predictedFill: "rgba(129, 140, 248, 0.2)",
      goodColor: "#34d399",
      badColor: "#f87171",
      ebitdaActual: "#8b5cf6",
      ebitdaBudget: "#facc15",
      percentActual: "#c084fc",
      percentPredicted: "#a78bfa",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  rose: {
    name: "Rose Garden",
    mainBg: "bg-gradient-to-br from-pink-50 via-rose-50 to-red-50",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-rose-900",
    secondaryText: "text-rose-700",
    mutedText: "text-rose-600",
    border: "border-rose-200/60",
    shadow: "shadow-xl shadow-rose-400/20",
    chartBg: "bg-gradient-to-br from-white via-rose-50/50 to-pink-50/40",
    gridColor: "#fecdd3",
    buttonBg: "bg-gradient-to-r from-rose-100 to-pink-100",
    buttonHover: "hover:from-rose-200 hover:to-pink-200",
    cardGradient: "from-rose-50 via-pink-50 to-red-50",
    dotPattern: "from-rose-500/5 via-pink-500/10 to-red-500/5",
    accentGradient: "from-rose-500 via-pink-500 to-red-600",
    glowEffect: "shadow-2xl shadow-rose-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-pink-500/40",
    chartColors: {
      actualLine: "#f43f5e",
      predictedLine: "#ec4899",
      targetLine: "#fbbf24",
      actualFill: "rgba(244, 63, 94, 0.3)",
      predictedFill: "rgba(236, 72, 153, 0.2)",
      goodColor: "#10b981",
      badColor: "#dc2626",
      ebitdaActual: "#e11d48",
      ebitdaBudget: "#f59e0b",
      percentActual: "#f43f5e",
      percentPredicted: "#fb7185",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  arctic: {
    name: "Arctic Frost",
    mainBg: "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-slate-800",
    secondaryText: "text-slate-600",
    mutedText: "text-slate-500",
    border: "border-blue-200/60",
    shadow: "shadow-xl shadow-blue-400/20",
    chartBg: "bg-gradient-to-br from-white via-blue-50/50 to-slate-50/40",
    gridColor: "#dbeafe",
    buttonBg: "bg-gradient-to-r from-blue-100 to-slate-100",
    buttonHover: "hover:from-blue-200 hover:to-slate-200",
    cardGradient: "from-blue-50 via-slate-50 to-gray-100",
    dotPattern: "from-blue-500/5 via-slate-500/10 to-gray-500/5",
    accentGradient: "from-blue-500 via-slate-500 to-gray-600",
    glowEffect: "shadow-2xl shadow-blue-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-slate-500/40",
    chartColors: {
      actualLine: "#3b82f6",
      predictedLine: "#64748b",
      targetLine: "#fbbf24",
      actualFill: "rgba(59, 130, 246, 0.3)",
      predictedFill: "rgba(100, 116, 139, 0.2)",
      goodColor: "#10b981",
      badColor: "#ef4444",
      ebitdaActual: "#2563eb",
      ebitdaBudget: "#f59e0b",
      percentActual: "#3b82f6",
      percentPredicted: "#6b7280",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  amber: {
    name: "Amber Gold",
    mainBg: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-amber-900",
    secondaryText: "text-amber-700",
    mutedText: "text-amber-600",
    border: "border-amber-200/60",
    shadow: "shadow-xl shadow-amber-400/20",
    chartBg: "bg-gradient-to-br from-white via-amber-50/50 to-yellow-50/40",
    gridColor: "#fde68a",
    buttonBg: "bg-gradient-to-r from-amber-100 to-yellow-100",
    buttonHover: "hover:from-amber-200 hover:to-yellow-200",
    cardGradient: "from-amber-50 via-yellow-50 to-orange-100",
    dotPattern: "from-amber-500/5 via-yellow-500/10 to-orange-500/5",
    accentGradient: "from-amber-500 via-yellow-500 to-orange-600",
    glowEffect: "shadow-2xl shadow-amber-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-yellow-500/40",
    chartColors: {
      actualLine: "#f59e0b",
      predictedLine: "#eab308",
      targetLine: "#ea580c",
      actualFill: "rgba(245, 158, 11, 0.3)",
      predictedFill: "rgba(234, 179, 8, 0.2)",
      goodColor: "#10b981",
      badColor: "#ef4444",
      ebitdaActual: "#d97706",
      ebitdaBudget: "#dc2626",
      percentActual: "#f59e0b",
      percentPredicted: "#facc15",
      highlightColor: "#6366f1", // Indigo/blue for current period
    },
  },

  neon: {
    name: "Neon Cyber",
    mainBg: "bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950",
    cardBg:
      "bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 backdrop-blur-xl",
    modalBg: "bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl",
    primaryText: "text-cyan-300",
    secondaryText: "text-cyan-400",
    mutedText: "text-cyan-500",
    border: "border-cyan-400/30",
    shadow: "shadow-2xl shadow-cyan-500/30",
    chartBg:
      "bg-gradient-to-br from-gray-900/95 via-purple-950/90 to-blue-950/80",
    gridColor: "#064e3b",
    buttonBg: "bg-gradient-to-r from-cyan-800 to-purple-800",
    buttonHover: "hover:from-cyan-700 hover:to-purple-700",
    cardGradient: "from-purple-900/80 via-blue-900/70 to-gray-900/80",
    dotPattern: "from-cyan-500/10 via-purple-500/15 to-pink-500/10",
    accentGradient: "from-cyan-400 via-purple-400 to-pink-500",
    glowEffect: "shadow-2xl shadow-cyan-500/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-purple-500/40",
    chartColors: {
      actualLine: "#06b6d4",
      predictedLine: "#e11d48",
      targetLine: "#facc15",
      actualFill: "rgba(6, 182, 212, 0.3)",
      predictedFill: "rgba(225, 29, 72, 0.2)",
      goodColor: "#10f981",
      badColor: "#ff0066",
      ebitdaActual: "#22d3ee",
      ebitdaBudget: "#facc15",
      percentActual: "#06b6d4",
      percentPredicted: "#f472b6",
    },
  },

  coral: {
    name: "Coral Reef",
    mainBg: "bg-gradient-to-br from-orange-50 via-coral-50 to-pink-100",
    cardBg: "bg-white/90 backdrop-blur-xl",
    modalBg: "bg-white/95 backdrop-blur-xl",
    primaryText: "text-orange-900",
    secondaryText: "text-orange-700",
    mutedText: "text-orange-600",
    border: "border-coral-200/60",
    shadow: "shadow-xl shadow-coral-400/20",
    chartBg: "bg-gradient-to-br from-white via-coral-50/50 to-orange-50/40",
    gridColor: "#fed7aa",
    buttonBg: "bg-gradient-to-r from-coral-100 to-orange-100",
    buttonHover: "hover:from-coral-200 hover:to-orange-200",
    cardGradient: "from-coral-50 via-orange-50 to-pink-100",
    dotPattern: "from-coral-500/5 via-orange-500/10 to-pink-500/5",
    accentGradient: "from-coral-500 via-orange-500 to-pink-600",
    glowEffect: "shadow-2xl shadow-coral-400/30",
    hoverGlow: "hover:shadow-2xl hover:shadow-orange-500/40",
    chartColors: {
      actualLine: "#ff7849",
      predictedLine: "#ff6347",
      targetLine: "#fbbf24",
      actualFill: "rgba(255, 120, 73, 0.3)",
      predictedFill: "rgba(255, 99, 71, 0.2)",
      goodColor: "#10b981",
      badColor: "#dc2626",
      ebitdaActual: "#ff5733",
      ebitdaBudget: "#f59e0b",
      percentActual: "#ff7849",
      percentPredicted: "#ff8c69",
    },
  },
};

const NotificationPanel = ({ data, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissedAlerts, setDismissedAlerts] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);

  // Analyze data for alerts
  const generateAlerts = () => {
    const alerts = [];

    if (!data || data.length === 0) return alerts;

    data.forEach((kpi) => {
      // Critical: Actual > Budget by more than 20%
      if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.2) {
        alerts.push({
          id: `${kpi.kpiName}-critical`,
          type: "critical",
          title: `${kpi.kpiName}`,
          message: `Cost overrun: ₹${kpi.actual_per_tonne}/t`,
          value: `+${(
            (kpi.actual_per_tonne / kpi.budget_per_tonne - 1) *
            100
          ).toFixed(1)}%`,
          icon: AlertTriangle,
        });
      }
      // Warning: Actual > Budget by 10-20%
      else if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.1) {
        alerts.push({
          id: `${kpi.kpiName}-warning`,
          type: "warning",
          title: `${kpi.kpiName}`,
          message: `Above budget`,
          value: `+${(
            (kpi.actual_per_tonne / kpi.budget_per_tonne - 1) *
            100
          ).toFixed(1)}%`,
          icon: AlertCircle,
        });
      }

      // Success alerts - Under budget
      if (kpi.actual_per_tonne < kpi.budget_per_tonne * 0.9) {
        alerts.push({
          id: `${kpi.kpiName}-success`,
          type: "success",
          title: `${kpi.kpiName}`,
          message: `Saving vs budget`,
          value: `-${(
            (1 - kpi.actual_per_tonne / kpi.budget_per_tonne) *
            100
          ).toFixed(1)}%`,
          icon: TrendingDown,
        });
      }
    });

    return alerts.sort((a, b) => {
      const priority = { critical: 0, warning: 1, success: 2 };
      return priority[a.type] - priority[b.type];
    });
  };

  const alerts = generateAlerts().filter(
    (alert) => !dismissedAlerts.includes(alert.id)
  );

  if (!data || alerts.length === 0) return null;

  const criticalCount = alerts.filter((a) => a.type === "critical").length;
  const warningCount = alerts.filter((a) => a.type === "warning").length;
  const successCount = alerts.filter((a) => a.type === "success").length;

  const getTypeColor = (type) => {
    switch (type) {
      case "critical":
        return "bg-red-500";
      case "warning":
        return "bg-amber-500";
      case "success":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed right-6 top-24 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative p-3 rounded-full ${theme.cardBg} ${
            theme.shadow
          } ${
            theme.border
          } border backdrop-blur-xl transition-all duration-300 hover:scale-110 ${
            criticalCount > 0 ? "animate-bounce" : ""
          }`}
        >
          {/* Notification Badge */}
          {alerts.length > 0 && (
            <div className="absolute -top-1 -right-1 flex items-center justify-center">
              <span
                className={`absolute inline-flex h-6 w-6 rounded-full ${
                  criticalCount > 0
                    ? "bg-red-400"
                    : warningCount > 0
                    ? "bg-amber-400"
                    : "bg-green-400"
                } opacity-75 animate-ping`}
              ></span>
              <span
                className={`relative inline-flex items-center justify-center h-6 w-6 rounded-full text-[10px] font-bold text-white ${
                  criticalCount > 0
                    ? "bg-red-500"
                    : warningCount > 0
                    ? "bg-amber-500"
                    : "bg-green-500"
                }`}
              >
                {alerts.length}
              </span>
            </div>
          )}

          <Bell
            className={`w-5 h-5 ${
              theme.primaryText
            } transition-transform duration-300 ${isOpen ? "rotate-12" : ""}`}
          />
        </button>

        {/* Floating Panel */}
        <div
          className={`absolute right-0 top-16 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div
            className={`w-80 ${theme.cardBg} rounded-2xl ${theme.shadow} ${theme.border} border backdrop-blur-xl overflow-hidden`}
          >
            {/* Header */}
            <div
              className={`p-4 bg-gradient-to-r ${theme.buttonBg} border-b ${theme.border}`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`text-sm font-bold ${theme.primaryText}`}>
                  Alert Center
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`${theme.mutedText} hover:${theme.primaryText} transition-colors`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mini Stats */}
              <div className="flex gap-3 mt-2">
                {criticalCount > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-red-600 font-semibold">
                      {criticalCount}
                    </span>
                  </div>
                )}
                {warningCount > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    <span className="text-xs text-amber-600 font-semibold">
                      {warningCount}
                    </span>
                  </div>
                )}
                {successCount > 0 && (
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-green-600 font-semibold">
                      {successCount}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Alert List */}
            <div className="max-h-96 overflow-y-auto p-2">
              {alerts.map((alert, index) => {
                const IconComponent = alert.icon;

                return (
                  <div
                    key={alert.id}
                    className={`relative mb-2 p-3 rounded-lg ${
                      selectedAlert === alert.id
                        ? `${theme.buttonBg} ${theme.border} border`
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    } cursor-pointer transition-all duration-200 group`}
                    onClick={() =>
                      setSelectedAlert(
                        selectedAlert === alert.id ? null : alert.id
                      )
                    }
                  >
                    {/* Delete button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDismissedAlerts([...dismissedAlerts, alert.id]);
                      }}
                      className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity`}
                    >
                      <X className={`w-3 h-3 ${theme.mutedText}`} />
                    </button>

                    <div className="flex items-start gap-3">
                      {/* Icon with colored background */}
                      <div
                        className={`p-1.5 rounded-lg ${getTypeColor(
                          alert.type
                        )} bg-opacity-10`}
                      >
                        <IconComponent
                          className={`w-4 h-4 ${
                            alert.type === "critical"
                              ? "text-red-500"
                              : alert.type === "warning"
                              ? "text-amber-500"
                              : "text-green-500"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4
                              className={`text-xs font-semibold ${theme.primaryText} truncate`}
                            >
                              {alert.title}
                            </h4>
                            <p
                              className={`text-xs ${theme.secondaryText} mt-0.5`}
                            >
                              {alert.message}
                            </p>
                          </div>

                          <span
                            className={`text-xs font-bold whitespace-nowrap ${
                              alert.type === "critical"
                                ? "text-red-500"
                                : alert.type === "warning"
                                ? "text-amber-500"
                                : "text-green-500"
                            }`}
                          >
                            {alert.value}
                          </span>
                        </div>

                        {/* Expanded details */}
                        {selectedAlert === alert.id && (
                          <div
                            className={`mt-2 pt-2 border-t ${theme.border} text-xs ${theme.mutedText}`}
                          >
                            <p>
                              Take action to{" "}
                              {alert.type === "critical"
                                ? "resolve immediately"
                                : alert.type === "warning"
                                ? "monitor closely"
                                : "maintain performance"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Progress bar for critical items */}
                    {alert.type === "critical" && (
                      <div className="mt-2 h-1 bg-red-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-red-500 rounded-full animate-pulse"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer with summary */}
            <div
              className={`p-3 border-t ${theme.border} bg-gradient-to-r ${theme.buttonBg}`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs ${theme.secondaryText}`}>
                  Total Impact
                </span>
                <span className={`text-xs font-bold ${theme.primaryText}`}>
                  ₹
                  {data
                    .reduce(
                      (sum, kpi) =>
                        sum +
                        Math.abs(kpi.actual_per_tonne - kpi.budget_per_tonne),
                      0
                    )
                    .toFixed(2)}
                  /t
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CustomTooltip = ({ active, payload, label, theme }) => {
  if (active && payload && payload.length) {
    // Filter out duplicate entries and null/undefined values
    const uniqueEntries = payload.filter((entry, index, self) => {
      if (entry.value === null || entry.value === undefined) return false;
      return (
        self.findIndex(
          (e) => e.dataKey === entry.dataKey && e.value === entry.value
        ) === index
      );
    });

    if (uniqueEntries.length === 0) return null;

    return (
      <div
        className={`${theme.cardBg} p-3 rounded-lg ${theme.shadow} ${theme.border} border`}
      >
        <p className={`text-xs font-semibold ${theme.primaryText} mb-2`}>
          {label}
        </p>
        {uniqueEntries.map((entry, index) => (
          <div key={`item-${entry.dataKey}-${index}`} className="text-xs">
            <span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            />
            <span className={`font-medium ${theme.secondaryText}`}>
              {entry.name}:{" "}
            </span>
            <span className="font-bold">
              {entry.dataKey.includes("Percent") ||
              entry.dataKey.includes("Target") ||
              entry.dataKey.includes("EBITDA")
                ? `${entry.value}%`
                : `₹${entry.value.toLocaleString()}`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CostScreener = () => {
  const [activeTab, setActiveTab] = useState("production");
  const [activeProcess, setActiveProcess] = useState("forging");
  const [selectedLocation, setSelectedLocation] = useState("Ranjangaon");
  const [showCombinedView, setShowCombinedView] = useState(true);
  const [showMiniModal, setShowMiniModal] = useState(false);
  const [activeGraphTab, setActiveGraphTab] = useState("tonnage");
  const [chartModalData, setChartModalData] = useState(null);
  const [chartModalPosition, setChartModalPosition] = useState({ x: 0, y: 0 });
  const [activeChartModalTab, setActiveChartModalTab] = useState("Insights");
  const [cardTabs, setCardTabs] = useState({});
  const [selectedTheme, setSelectedTheme] = useState("ocean");
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [realForgingData, setRealForgingData] = useState({
    meta: {
      title: "Loading...",
      location: "Ranjangaon",
      lines: "",
      currency: "INR",
      unit: "per tonne",
      data_source: "",
      last_updated: "",
      total_kpis: 0,
    },
    kpi_data: [],
    efficiency: {
      current: 85.2,
      target: 90.0,
      trend: "up",
      change: 2.3,
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const currentTheme = themes[selectedTheme];
  const themeSelectorRef = useRef(null);

  // Add this right after your state declarations
  useEffect(() => {
    // Ensure efficiency data is always available
    if (!realForgingData.efficiency) {
      setRealForgingData((prev) => ({
        ...prev,
        efficiency: {
          current: 85.2,
          target: 90.0,
          trend: "up",
          change: 2.3,
        },
      }));
    }
  }, [realForgingData.efficiency]);

  // April → March order
  const monthNames = [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
  ];

  // Add useEffect to fetch data (line 1020)
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/api/forging-data/Ranjangaon/forging")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.kpi_data) {
          const dataWithEfficiency = {
            ...data,
            efficiency: data.efficiency || {
              current: 85.2,
              target: 90.0,
              trend: "up",
              change: 2.3,
            },
          };

          setRealForgingData(dataWithEfficiency);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setRealForgingData({
          meta: {
            title: "Error Loading Data",
            location: "Ranjangaon",
            lines: "Line 1 to 16",
            currency: "INR",
            unit: "per tonne",
            data_source: "Local",
            last_updated: new Date().toISOString(),
            total_kpis: 0,
          },
          kpi_data: [],
          efficiency: {
            current: 85.2,
            target: 90.0,
            trend: "up",
            change: 2.3,
          },
        });
        setIsLoading(false);
      });
  }, [selectedLocation, activeProcess]);

  const modalRef = useRef(null);

  // Fixed renderCombinedChart function - No initialization errors
  const renderCombinedChart = () => {
    const kpis = getCurrentData();
    if (!kpis || kpis.length === 0) return null;

    // Only use April to September (first 6 months of fiscal year)
    const displayMonths = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
    const fiscalMonthOrder = [3, 4, 5, 6, 7, 8]; // April to September indices

    const manualPercentages = {
      3: 20.41,
      4: 21.46,
      5: 20.97,
      6: 20.17,
      7: 21.34,
      8: 21.5, // September prediction
    };

    const EBITDAActualData = {
      3: 16.82,
      4: 15.61,
      5: 13.1,
      6: 16.26,
      7: 16.54,
    };

    const EBITDABudgetData = {
      3: 18.78,
      4: 18.89,
      5: 18.93,
      6: 19.15,
      7: 19.2,
      8: 19.25, // September budget
    };

    // First, calculate all totals
    const monthlyTotals = displayMonths.map((m, idx) => {
      const mi = fiscalMonthOrder[idx];
      let total = 0;

      kpis.forEach((k) => {
        const arr =
          Array.isArray(k.monthly_costs) && k.monthly_costs.length >= 12
            ? k.monthly_costs
            : Array.isArray(k.trend) && k.trend.length >= 12
            ? k.trend
            : new Array(12).fill(0);
        total += arr[mi] ?? 0;
      });

      return total;
    });

    const PercentTargetData = {
      3: 20,
      4: 20,
      5: 20,
      6: 20,
      7: 20,
      8: 20,
    };

    // Now build the data with access to all totals
    let baseData = displayMonths.map((m, idx) => {
      const mi = fiscalMonthOrder[idx];
      const total = monthlyTotals[idx];
      let percent = manualPercentages[mi] || 20 + mi * 0.15;
      let EBITDAActual = EBITDAActualData[mi] || null;
      let EBITDABudget = EBITDABudgetData[mi] || null;
      let PercentTarget = PercentTargetData[mi] || null;

      // April to July: Only actual data
      if (idx <= 3) {
        return {
          month: m,
          TotalActual: parseFloat(total.toFixed(2)),
          TotalPredicted: null,
          EBITDAActual: EBITDAActual,
          EBITDABudget: EBITDABudget,
          PercentActual: parseFloat(percent.toFixed(2)),
          PercentPredicted: null,
          PercentTarget,
        };
      }
      // August: Both actual and predicted (to start the prediction line)
      else if (idx === 4) {
        return {
          month: m,
          TotalActual: parseFloat(total.toFixed(2)),
          TotalPredicted: parseFloat(total.toFixed(2)), // Same value to start prediction line
          EBITDAActual: EBITDAActual,
          EBITDABudget: EBITDABudget,
          PercentActual: parseFloat(percent.toFixed(2)),
          PercentPredicted: parseFloat(percent.toFixed(2)), // Same value to start prediction line
          PercentTarget, // 🔹 add target %
        };
      }
      // September: Only predicted with variation
      else {
        const augTotal = monthlyTotals[4]; // August total
        const julTotal = monthlyTotals[3]; // July total
        const trend = augTotal > julTotal ? 1.03 : 0.97; // 3% increase or decrease
        const predictedTotal = augTotal * trend;
        const predictedPercent = percent + 0.3; // Slight increase

        return {
          month: m,
          TotalActual: null,
          TotalPredicted: parseFloat(predictedTotal.toFixed(2)),
          EBITDAActual: null,
          EBITDABudget: EBITDABudget,
          PercentActual: null,
          PercentPredicted: parseFloat(predictedPercent.toFixed(2)),
          PercentTarget,
        };
      }
    });

    const combinedData = baseData;

    // Calculate average target percentage for ReferenceLine
    const percentTargets = combinedData
      .map((d) => d.PercentTarget ?? null) // ✅ use correct key
      .filter((v) => v !== null && v !== undefined);

    const avgPercentTarget =
      percentTargets.length > 0
        ? (
            percentTargets.reduce((a, b) => a + b, 0) / percentTargets.length
          ).toFixed(2)
        : null;

    return (
      <div
        className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 mb-6 ${currentTheme.border} border transition-all duration-300`}
      >
        {/* Theme Selector */}
        <div className="fixed top-4 right-4 z-50">
          <div className="relative" ref={themeSelectorRef}>
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className={`p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group relative overflow-hidden`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Icon with rainbow gradient */}
              <Palette className="w-6 h-6 relative z-10" />

              {/* Theme name tooltip */}
              <div
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium ${currentTheme.cardBg} ${currentTheme.border} border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none`}
              >
                {currentTheme.name}
              </div>

              {/* Rotating ring animation on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300" />
            </button>

            {showThemeSelector && (
              <div
                className={`absolute right-0 mt-2 w-64 ${currentTheme.cardBg} rounded-xl ${currentTheme.shadow} ${currentTheme.border} border overflow-hidden animate-in slide-in-from-top-2 duration-200`}
              >
                <div
                  className={`p-3 ${currentTheme.primaryText} font-semibold text-sm border-b ${currentTheme.border} bg-gradient-to-r ${currentTheme.buttonBg}`}
                >
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    Choose Theme
                  </div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedTheme(key);
                        setShowThemeSelector(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${
                        selectedTheme === key
                          ? `bg-gradient-to-r ${theme.buttonBg}`
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.accentGradient} shadow-sm`}
                        />
                        <span
                          className={`text-sm font-medium ${theme.primaryText}`}
                        >
                          {theme.name}
                        </span>
                      </div>
                      {selectedTheme === key && (
                        <Check
                          className={`w-4 h-4 ${theme.primaryText} animate-in zoom-in duration-200`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-3">
          {["tonnage", "EBITDA", "percentage"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveGraphTab(tab)}
              className={`px-4 py-1 rounded-lg text-sm font-medium transition-all ${
                activeGraphTab === tab
                  ? `${currentTheme.buttonBg} ${currentTheme.primaryText} font-bold`
                  : `bg-gray-100 ${currentTheme.secondaryText} hover:bg-gray-200`
              }`}
            >
              {tab === "tonnage"
                ? "Cost Per Ton"
                : tab === "EBITDA"
                ? "EBITDA"
                : "Percentage"}
            </button>
          ))}
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={combinedData}
              margin={{ top: 20, right: 50, left: 10, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={currentTheme.gridColor}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: currentTheme.primaryText }}
              />
              <YAxis
                domain={
                  activeGraphTab === "tonnage"
                    ? [10000, "auto"]
                    : activeGraphTab === "EBITDA"
                    ? [5000, "auto"]
                    : ["auto", "auto"]
                }
                tick={{ fontSize: 10, fill: currentTheme.primaryText }}
                label={{
                  value:
                    activeGraphTab === "tonnage"
                      ? "Manufacturing Cost"
                      : activeGraphTab === "EBITDA"
                      ? "EBITDA Value"
                      : "% of Production",
                  offset: -5,
                  style: {
                    fontSize: 11, // chhota aur readable
                    fontWeight: 500, // professional look
                    fill: currentTheme.text,
                  },
                  angle: -90,
                  position: "insideLeft",
                  fill: currentTheme.primaryText,
                }}
              />

              {/* Prediction reference line */}
              <ReferenceLine
                x="Aug"
                stroke={currentTheme.chartColors.predictedLine}
                strokeDasharray="3 3"
                label={{
                  value: "Predicted →",
                  position: "insideTopRight",
                  fontSize: 11,
                  fill: currentTheme.primaryText,
                }}
              />

              {activeGraphTab === "tonnage" && (
                <ReferenceLine
                  y={30000}
                  stroke={currentTheme.chartColors.goodColor}
                  strokeDasharray="5 5"
                  label={{
                    value: "Target",
                    position: "right",
                    fill: currentTheme.chartColors.goodColor,
                    fontSize: 12,
                  }}
                />
              )}

              {/* 
              <Tooltip
                content={<CustomTooltip theme={currentTheme} />}
                cursor={{ strokeDasharray: "3 3" }}
                position={{ y: 0 }}
                wrapperStyle={{ zIndex: 100 }}
              /> */}

              <Legend
                verticalAlign="top"
                height={30}
                wrapperStyle={{ fontSize: 13, fontWeight: 500 }}
                iconType="line"
                formatter={(value) => (
                  <span style={{ color: currentTheme.primaryText }}>
                    {value}
                  </span>
                )}
              />

              {activeGraphTab === "tonnage" && (
                <>
                  {/* Actual line — replace existing TotalActual Line */}
                  {/* Actual line — replace existing TotalActual Line */}
                  <Line
                    type="monotone"
                    dataKey="TotalActual"
                    stroke={currentTheme.chartColors.actualLine}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    name="Total Cost (Actual)"
                    dot={(props) => {
                      const { cx, cy, index, payload } = props;
                      if (payload.TotalActual === null) return null;

                      const dotColor =
                        payload.TotalActual <= 30000
                          ? currentTheme.chartColors.goodColor
                          : currentTheme.chartColors.badColor;

                      const isCurrentPeriod = index === 4; // August

                      if (isCurrentPeriod) {
                        return (
                          <g>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={4} /* smaller highlight */
                              fill={currentTheme.chartColors.highlightColor}
                              stroke="white"
                              strokeWidth={1}
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r={10}
                              fill={dotColor}
                              opacity={0.12}
                            />
                            <text
                              x={cx}
                              y={cy}
                              fill="white"
                              fontSize="12"
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              +
                            </text>
                          </g>
                        );
                      }

                      return (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={2} /* smaller regular dot */
                          fill={dotColor}
                          stroke="white"
                          strokeWidth={0.8}
                        />
                      );
                    }}
                  />

                  {/* Predicted line */}
                  <Line
                    type="monotone"
                    dataKey="TotalPredicted"
                    stroke={currentTheme.chartColors.predictedLine}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="5 5"
                    dot={(props) => {
                      const { cx, cy, payload, index } = props;
                      if (payload.TotalPredicted === null) return null;

                      // Skip dot for August (already has actual dot)
                      if (index === 4) return null;

                      const dotColor =
                        payload.TotalPredicted <= 30000
                          ? currentTheme.chartColors.goodColor
                          : currentTheme.chartColors.badColor;

                      return (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={2.5}
                          fill="white"
                          stroke={dotColor}
                          strokeWidth={1}
                        />
                      );
                    }}
                    connectNulls={false}
                    name="Total Cost (Predicted)"
                  />
                </>
              )}

              {activeGraphTab === "EBITDA" && (
                <>
                  <Line
                    type="monotone"
                    dataKey="EBITDABudget"
                    stroke={currentTheme.chartColors.ebitdaBudget}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    name="EBITDA Budget %"
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: currentTheme.chartColors.ebitdaBudget,
                    }}
                    connectNulls={false}
                  />

                  <Line
                    type="monotone"
                    dataKey="EBITDAActual"
                    stroke={currentTheme.chartColors.ebitdaActual}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    name="EBITDA Actual %"
                    dot={(props) => {
                      const { cx, cy, index, payload } = props;
                      if (payload.EBITDAActual === null) return null;

                      const dotColor =
                        payload.EBITDAActual >= (payload.EBITDABudget || 19)
                          ? currentTheme.chartColors.goodColor
                          : currentTheme.chartColors.badColor;
                      const isCurrentPeriod = index === 4;

                      if (isCurrentPeriod) {
                        return (
                          <g>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={5}
                              fill={dotColor}
                              stroke="white"
                              strokeWidth={2}
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r={12}
                              fill={dotColor}
                              opacity={0.2}
                            />
                            <text
                              x={cx}
                              y={cy}
                              fill="white"
                              fontSize="14"
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              +
                            </text>
                          </g>
                        );
                      }

                      return (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={3}
                          fill={dotColor}
                          stroke="white"
                          strokeWidth={1}
                        />
                      );
                    }}
                  />
                </>
              )}

              {activeGraphTab === "percentage" && (
                <>
                  {/* Target line for Percentage */}
                  {avgPercentTarget && (
                    <ReferenceLine
                      y={parseFloat(avgPercentTarget)}
                      stroke={currentTheme.chartColors.targetLine}
                      strokeDasharray="5 5"
                      label={{
                        value: `Target ${avgPercentTarget}%`,
                        position: "right",
                        fill: currentTheme.chartColors.targetLine,
                        fontSize: 12,
                      }}
                    />
                  )}

                  {/* Actual percentage line */}
                  <Line
                    type="monotone"
                    dataKey="PercentActual"
                    stroke={currentTheme.chartColors.percentActual}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dot={(props) => {
                      const { cx, cy, index, payload } = props;
                      if (payload.PercentActual === null) return null;

                      const isCurrentPeriod = index === 4;

                      if (isCurrentPeriod) {
                        return (
                          <g>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={5}
                              fill={currentTheme.chartColors.percentActual}
                              stroke="white"
                              strokeWidth={2}
                            />
                            <circle
                              cx={cx}
                              cy={cy}
                              r={12}
                              fill={currentTheme.chartColors.percentActual}
                              opacity={0.2}
                            />
                            <text
                              x={cx}
                              y={cy}
                              fill="white"
                              fontSize="14"
                              fontWeight="bold"
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              +
                            </text>
                          </g>
                        );
                      }

                      return (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={3}
                          fill={currentTheme.chartColors.percentActual}
                        />
                      );
                    }}
                    name="% of Production (Actual)"
                  />

                  {/* Predicted percentage line */}
                  <Line
                    type="monotone"
                    dataKey="PercentPredicted"
                    stroke={currentTheme.chartColors.percentPredicted}
                    strokeWidth={1}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    dot={(props) => {
                      const { cx, cy, payload, index } = props;
                      if (payload.PercentPredicted === null) return null;

                      // Skip dot for August (already has actual dot)
                      if (index === 4) return null;

                      return (
                        <circle
                          cx={cx}
                          cy={cy}
                          r={4}
                          fill="white"
                          stroke={currentTheme.chartColors.percentPredicted}
                          strokeWidth={2}
                        />
                      );
                    }}
                    strokeDasharray="6 4"
                    connectNulls={false}
                    name="% of Production (Predicted)"
                  />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const data = getCurrentData();
    if (data && data.length > 0) {
      const initialTabs = {};
      data.forEach((kpi) => {
        initialTabs[kpi.kpiName] = "production";
      });
      setCardTabs((prev) => ({ ...initialTabs, ...prev }));
    }
  }, [activeTab, activeProcess, selectedLocation]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        themeSelectorRef.current &&
        !themeSelectorRef.current.contains(event.target)
      ) {
        setShowThemeSelector(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowMiniModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showThemeSelector, showMiniModal]);

  const iconMap = {
    Consumables: Package,
    Power: Zap,
    Fuel: Fuel,
    Labour: Users,
    "Sub Contract": Handshake,
    "Machine Hire Charges": Settings,
    "Repair & Maintenance": Wrench,
    "Employee Cost": Users,
    "Establishment Expenses": Building,
    Packing: Box,
    Freight: Truck,
    "Raw Material": Factory,
  };

  const getCurrentData = () => {
    if (activeTab === "production" || activeTab === "sale") {
      if (activeProcess === "forging" && selectedLocation === "Ranjangaon") {
        return realForgingData?.kpi_data || [];
      }
    }
    return [];
  };

  const buildChartData = (kpi) => {
    if (!kpi || !kpi.trend) return [];

    const kpiTargetValues = {
      Consumables: [
        3500, 3400, 3300, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800,
      ],
      Power: [
        7200, 7100, 7000, 7100, 7150, 7200, 7250, 7300, 7350, 7400, 7450, 7500,
      ],
      Fuel: [
        3000, 2950, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350,
      ],
      Labour: [
        2200, 2150, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550,
      ],
      "Sub Contract": [
        7500, 7400, 7300, 7400, 7450, 7500, 7550, 7600, 7650, 7700, 7750, 7800,
      ],
      "Machine Hire Charges": [
        700, 680, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840,
      ],
      "Repair & Maintenance": [
        2500, 2400, 2300, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800,
      ],
      "Employee Cost": [
        5500, 5400, 5300, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750, 5800,
      ],
      "Establishment Expenses": [
        1300, 1280, 1260, 1280, 1300, 1320, 1340, 1360, 1380, 1400, 1420, 1440,
      ],
      Packing: [
        2000, 1950, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350,
      ],
      Freight: [
        3500, 3450, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850,
      ],
      "Raw Material": [
        95000, 94000, 93000, 94000, 94500, 95000, 95500, 96000, 96500, 97000,
        97500, 98000,
      ],
    };

    const targetValuesForKpi =
      kpiTargetValues[kpi.kpiName] ||
      new Array(12).fill(kpi.budget_per_tonne * 100 || 1000);

    const kpiTargetPercentages = {
      Consumables: { 0: 2.2, 1: 1.94, 2: 1.94, 3: 1.94, 4: 1.94 },
      Power: { 0: 4.24, 1: 4.24, 2: 4.24, 3: 4.24, 4: 4.24 },
      Fuel: { 0: 1.62, 1: 1.62, 2: 1.62, 3: 1.62, 4: 1.62 },
      Labour: { 0: 1.03, 1: 1.03, 2: 1.03, 3: 1.03, 4: 1.03 },
      "Sub Contract": { 0: 3.8, 1: 3.8, 2: 3.8, 3: 3.8, 4: 3.8 },
      "Machine Hire Charges": { 0: 0.4, 1: 0.4, 2: 0.4, 3: 0.4, 4: 0.4 },
      "Repair & Maintenance": { 0: 0.92, 1: 0.92, 2: 0.92, 3: 0.92, 4: 0.92 },
      "Employee Cost": { 0: 3.24, 1: 3.18, 2: 3.16, 3: 3.0, 4: 2.89 },
      "Establishment Expenses": { 0: 0.87, 1: 0.81, 2: 0.79, 3: 0.74, 4: 0.79 },
      Packing: { 0: 1.02, 1: 1.02, 2: 1.02, 3: 1.02, 4: 1.02 },
      Freight: { 0: 2.55, 1: 2.55, 2: 2.55, 3: 2.55, 4: 2.55 },
      "Raw Material": { 0: 59.6, 1: 59.6, 2: 59.6, 3: 59.6, 4: 59.6 },
    };

    const kpiPercentages = {
      Consumables: {
        0: 2.2,
        1: 2.29,
        2: 2.04,
        3: 2.07,
        4: 2.07,
      },
      Power: {
        0: 4.47,
        1: 4.24,
        2: 4.5,
        3: 4.45,
        4: 5.36,
      },
      Fuel: {
        0: 1.9,
        1: 1.98,
        2: 1.91,
        3: 1.93,
        4: 1.6,
      },
      Labour: {
        0: 1.38,
        1: 1.55,
        2: 1.27,
        3: 1.28,
        4: 1.44,
      },
      "Sub Contract": {
        0: 4.98,
        1: 4.66,
        2: 4.44,
        3: 4.5,
        4: 4.42,
      },
      "Machine Hire Charges": {
        0: 0.38,
        1: 0.3,
        2: 0.54,
        3: 0.36,
        4: 0.4,
      },
      "Repair & Maintenance": {
        0: 0.87,
        1: 2.29,
        2: 2.11,
        3: 1.88,
        4: 1.91,
      },
      "Employee Cost": {
        0: 3.51,
        1: 3.4,
        2: 3.32,
        3: 2.99,
        4: 3.33,
      },
      "Establishment Expenses": {
        0: 0.71,
        1: 0.76,
        2: 0.81,
        3: 0.71,
        4: 0.8,
      },
      Packing: {
        0: 0.92,
        1: 0.97,
        2: 1.7,
        3: 1.43,
        4: 1.29,
      },
      Freight: {
        0: 2.29,
        1: 2.56,
        2: 2.53,
        3: 1.89,
        4: 2.05,
      },
      "Raw Material": {
        0: 59.55,
        1: 59.4,
        2: 61.71,
        3: 60.25,
        4: 58.79,
      },
    };

    const historicalData = kpi.trend.map((value, index) => {
      let productionPercent = null;
      let targetValue = targetValuesForKpi[index] || targetValuesForKpi[0]; // Fallback to first value

      if (
        kpiPercentages[kpi.kpiName] &&
        kpiPercentages[kpi.kpiName].hasOwnProperty(index)
      ) {
        productionPercent = kpiPercentages[kpi.kpiName][index];
      }

      let productionTarget = null;
      if (
        kpiTargetPercentages[kpi.kpiName] &&
        kpiTargetPercentages[kpi.kpiName].hasOwnProperty(index)
      ) {
        productionTarget = kpiTargetPercentages[kpi.kpiName][index];
      }

      const isLastPoint = index === kpi.trend.length - 1;

      return {
        month: monthNames[index] || `M${index + 1}`,
        actual: parseFloat(value.toFixed(2)),
        prediction: isLastPoint ? parseFloat(value.toFixed(2)) : null,
        target: parseFloat(targetValue.toFixed(2)), // Ensure target is always a number
        productionPercent,
        productionPercentPredicted: isLastPoint ? productionPercent : null,
        productionTarget,
        isHistorical: true,
        isHighlighted: isLastPoint,
        variance: value - targetValue,
      };
    });

    // Calculate trend-based predictions for both cost and percentage
    const lastValue = kpi.trend[kpi.trend.length - 1];
    const prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
    const costDirection = lastValue >= prevValue ? 1 : -1;

    // For percentage, check the last two percentage values to determine trend
    const lastPercent =
      kpiPercentages[kpi.kpiName] && kpiPercentages[kpi.kpiName][4]
        ? kpiPercentages[kpi.kpiName][4]
        : null;
    const prevPercent =
      kpiPercentages[kpi.kpiName] && kpiPercentages[kpi.kpiName][3]
        ? kpiPercentages[kpi.kpiName][3]
        : null;

    let percentDirection = 1; // default direction
    if (lastPercent !== null && prevPercent !== null) {
      percentDirection = lastPercent >= prevPercent ? 1 : -1;
    }

    const predictionData = [];

    // 🔹 Bas ek hi prediction month add karna hai
    const monthIndex = kpi.trend.length % 12; // next month ka index

    const stepChange =
      Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;

    const predictedValue = lastValue + costDirection * stepChange * 1;

    // Calculate percentage prediction based on its own trend
    let productionPercentPredicted = null;
    if (lastPercent !== null) {
      // Use percentage trend to determine prediction
      const percentChange =
        prevPercent !== null
          ? Math.abs(lastPercent - prevPercent) * 0.3
          : lastPercent * 0.05;
      productionPercentPredicted =
        lastPercent + percentDirection * percentChange;
      productionPercentPredicted = Math.max(0, productionPercentPredicted); // Ensure positive
    } else if (kpiPercentages[kpi.kpiName] && kpiPercentages[kpi.kpiName][0]) {
      // Fallback to base calculation
      const basePercent = kpiPercentages[kpi.kpiName][0];
      productionPercentPredicted = basePercent + percentDirection * 0.1 * 1;
    }

    predictionData.push({
      month: monthNames[monthIndex] || `M${monthIndex + 1}`,
      actual: null,
      prediction: parseFloat(predictedValue.toFixed(2)),
      target: parseFloat(
        (targetValuesForKpi[monthIndex] ?? targetValuesForKpi[0]).toFixed(2)
      ), // Add target for prediction month
      targetForCheck: targetValuesForKpi[monthIndex] ?? targetValuesForKpi[0],
      productionPercent: null,
      productionPercentPredicted: productionPercentPredicted
        ? parseFloat(productionPercentPredicted.toFixed(2))
        : null,
      productionTarget: null,
      productionTargetForCheck:
        (kpiTargetPercentages[kpi.kpiName] &&
          (kpiTargetPercentages[kpi.kpiName][monthIndex] ??
            kpiTargetPercentages[kpi.kpiName][0])) ||
        null,
      isHistorical: false,
      isHighlighted: false,
      variance: null,
    });

    return [...historicalData, ...predictionData];
  };

  const renderCardsView = () => {
    const data = getCurrentData();

    if (!data || data.length === 0) {
      return (
        // <Layout efficiency={realForgingData.efficiency}>
        <div
          className={`${currentTheme.cardBg} rounded-2xl ${currentTheme.shadow} p-12 text-center`}
        >
          <Factory
            className={`w-16 h-16 ${currentTheme.mutedText} mx-auto mb-4`}
          />
          <h3
            className={`text-lg font-semibold ${currentTheme.secondaryText} mb-2`}
          >
            No Data Available
          </h3>
          <p className={`${currentTheme.mutedText} mb-4`}>
            Only Forging process data is available for Ranjangaon location.
          </p>
          <div
            className={`text-xs ${currentTheme.mutedText} bg-gray-50 rounded-lg p-3 inline-block`}
          >
            Source: {realForgingData.meta.data_source}
          </div>
        </div>
        // </Layout>
      );
    }

    return (
      <div className="relative min-h-96 rounded-2xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${currentTheme.cardGradient} transition-all duration-500`}
        ></div>
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${currentTheme.dotPattern} opacity-50 transition-all duration-500`}
        ></div>

        <div className="relative z-10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((kpi, idx) => {
              const IconComponent = iconMap[kpi.kpiName] || Package;
              // chartData already defined:
              const chartData = buildChartData(kpi);
              const targetNums = chartData
                .map((d) => d.target ?? d.targetForCheck ?? null)
                .filter((v) => v !== null && v !== undefined && v > 0);

              const avgTarget =
                targetNums.length > 0
                  ? Math.round(
                      targetNums.reduce((a, b) => a + b, 0) / targetNums.length
                    )
                  : null;
              const currentCardTab = cardTabs[kpi.kpiName] || "production";

              return (
                <div
                  key={`${kpi.kpiName}-${idx}`}
                  className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl ${currentTheme.shadow} ${currentTheme.hoverGlow} transition-all duration-300 p-4 ${currentTheme.border} border cursor-pointer group relative`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.accentGradient} flex items-center justify-center`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div
                          className={`text-xs font-bold ${currentTheme.primaryText} leading-tight`}
                        >
                          {kpi.kpiName}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={`flex items-center gap-1 text-sm font-extrabold px-3 py-1.5 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 ${
                          kpi.actual_per_tonne <= kpi.budget_per_tonne
                            ? "bg-red-100 text-red-700 border border-red-300 shadow-sm shadow-red-400/30 animate-pulse"
                            : "bg-green-100 text-green-700 border border-green-300 shadow-sm shadow-green-400/30"
                        }`}
                      >
                        {kpi.actual_per_tonne <= kpi.budget_per_tonne ? (
                          <>
                            <ArrowUp className="w-3 h-3" />
                            <span className="text-base font-black tracking-wide">
                              {Math.abs(kpi.ytdChange).toFixed(1)}%
                            </span>
                            <span className="text-xs">!</span>
                          </>
                        ) : (
                          <>
                            <ArrowDown className="w-3 h-3" />
                            <span className="text-base font-black tracking-wide">
                              {Math.abs(kpi.ytdChange).toFixed(1)}%
                            </span>

                            <Check className="w-3 h-3" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Tab Switcher */}
                  <div className="absolute top-4 right-1 z-10 mr-4">
                    <div
                      className={`${currentTheme.cardBg} backdrop-blur-sm rounded-full p-0.5 shadow-sm ${currentTheme.border} border`}
                    >
                      <div className="relative flex">
                        <div
                          className={`absolute h-6 bg-gradient-to-r ${
                            currentTheme.accentGradient
                          } rounded-full transition-all duration-300 ease-out ${
                            currentCardTab === "production"
                              ? "w-12 left-0"
                              : "w-10 left-12"
                          }`}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardTabs((prev) => ({
                              ...prev,
                              [kpi.kpiName]: "production",
                            }));
                          }}
                          className={`relative px-2 py-1 text-[9px] font-semibold transition-colors duration-300 rounded-full w-12 ${
                            currentCardTab === "production"
                              ? "text-white"
                              : currentTheme.mutedText
                          }`}
                        >
                          Prod
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCardTabs((prev) => ({
                              ...prev,
                              [kpi.kpiName]: "sale",
                            }));
                          }}
                          className={`relative px-2 py-1 text-[9px] font-semibold transition-colors duration-300 rounded-full w-10 ${
                            currentCardTab === "sale"
                              ? "text-white"
                              : currentTheme.mutedText
                          }`}
                        >
                          Sale
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="relative h-56 mb-3">
                    <ResponsiveContainer width="95%" height="100%">
                      <ComposedChart
                        data={chartData}
                        margin={{ top: 15, right: 15, left: 15, bottom: 15 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke={currentTheme.gridColor}
                          opacity={0.6}
                        />
                        <XAxis
                          dataKey="month"
                          tick={{
                            fontSize: 11,
                            fontWeight: 500,
                            fill: currentTheme.primaryText,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{
                            fontSize: 11,
                            fill: currentTheme.primaryText,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />

                        <Tooltip
                          content={<CustomTooltip theme={currentTheme} />}
                        />

                        {activeGraphTab === "tonnage" && (
                          <>
                            <Area
                              type="monotone"
                              dataKey="actual"
                              stroke="none"
                              fill={currentTheme.chartColors.actualFill}
                              dot={false}
                              activeDot={{
                                r: 6,
                                fill: currentTheme.chartColors.actualLine,
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="prediction"
                              stroke="none"
                              fill={currentTheme.chartColors.predictedFill}
                              dot={false}
                              activeDot={{
                                r: 6,
                                fill: currentTheme.chartColors.predictedLine,
                              }}
                            />

                            {avgTarget !== null &&
                              activeGraphTab === "tonnage" && (
                                <ReferenceLine
                                  y={avgTarget}
                                  stroke={currentTheme.chartColors.targetLine}
                                  strokeWidth={1}
                                  label={{
                                    value: `Target (avg): ₹${avgTarget.toLocaleString()}`,
                                    position: "right",
                                    fill: currentTheme.chartColors.targetLine,
                                    fontSize: 12,
                                  }}
                                />
                              )}

                            <Line
                              type="monotone"
                              dataKey="actual"
                              stroke={currentTheme.chartColors.actualLine}
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              dot={(props) => {
                                const { cx, cy, payload, index } = props;
                                if (payload?.actual == null) return null;

                                const dotColor =
                                  payload.actual <= payload.target
                                    ? currentTheme.chartColors.goodColor
                                    : currentTheme.chartColors.badColor;
                                const isLastActual =
                                  payload.isHistorical &&
                                  (!chartData[index + 1] ||
                                    chartData[index + 1].isHistorical ===
                                      false);

                                if (isLastActual) {
                                  return (
                                    <g>
                                      <circle
                                        cx={cx}
                                        cy={cy}
                                        r={4}
                                        fill={
                                          currentTheme.chartColors
                                            .highlightColor
                                        } // ✅ special color
                                        stroke="white"
                                        strokeWidth={1}
                                      />
                                      <circle
                                        cx={cx}
                                        cy={cy}
                                        r={12}
                                        fill={dotColor}
                                        opacity={0.2}
                                        style={{
                                          cursor: "pointer",
                                          pointerEvents: "auto",
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const rect = e.currentTarget
                                            .closest("svg")
                                            .getBoundingClientRect();
                                          setChartModalData({
                                            ...payload,
                                            kpiName: kpi.kpiName,
                                          });
                                          setChartModalPosition({
                                            x: rect.left + cx,
                                            y: rect.top + cy - 150,
                                          });
                                        }}
                                      />
                                      <text
                                        x={cx}
                                        y={cy}
                                        fill="white"
                                        fontSize="14"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        style={{
                                          pointerEvents: "none",
                                          userSelect: "none",
                                        }}
                                      >
                                        +
                                      </text>
                                    </g>
                                  );
                                }

                                return (
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r={2}
                                    fill={dotColor}
                                    stroke="white"
                                    strokeWidth={1}
                                  />
                                );
                              }}
                            />

                            <Line
                              type="monotone"
                              dataKey="prediction"
                              stroke={currentTheme.chartColors.predictedLine}
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray="5 5"
                              connectNulls={false}
                              dot={(props) => {
                                const { cx, cy, payload } = props;
                                if (payload.prediction === null) return null;

                                const dotColor =
                                  payload.prediction >
                                  (payload.targetForCheck ?? 0)
                                    ? currentTheme.chartColors.badColor
                                    : currentTheme.chartColors.goodColor;

                                return (
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r={2.5}
                                    fill={
                                      currentTheme.chartColors.highlightColor
                                    } // ✅ special color
                                    stroke="white"
                                    strokeWidth={1}
                                  />
                                );
                              }}
                            />
                          </>
                        )}

                        {activeGraphTab === "percentage" && (
                          <>
                            {chartData.some(
                              (d) => d.isHistorical && d.productionTarget
                            ) && (
                              <Line
                                type="monotone"
                                dataKey="productionTarget"
                                stroke={currentTheme.chartColors.targetLine}
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                dot={false}
                                activeDot={{
                                  r: 5,
                                  fill: currentTheme.chartColors.targetLine,
                                }}
                                name="Target %"
                              />
                            )}

                            <Line
                              type="monotone"
                              dataKey="productionPercent"
                              stroke={currentTheme.chartColors.percentActual}
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              connectNulls={false}
                              name="Actual %"
                              dot={(props) => {
                                const { cx, cy, index, payload } = props;

                                if (payload.productionPercent === null)
                                  return null;

                                const isLastActual =
                                  payload.productionPercent !== null &&
                                  payload.isHistorical === true &&
                                  (!chartData[index + 1] ||
                                    chartData[index + 1]?.isHistorical ===
                                      false);

                                const dotColor =
                                  payload.productionPercent <=
                                  payload.productionTarget
                                    ? currentTheme.chartColors.goodColor
                                    : currentTheme.chartColors.badColor;

                                if (isLastActual) {
                                  return (
                                    <g>
                                      <circle
                                        cx={cx}
                                        cy={cy}
                                        r={2.5}
                                        fill={dotColor}
                                        stroke="white"
                                        strokeWidth={1}
                                      />
                                      <circle
                                        cx={cx}
                                        cy={cy}
                                        r={12}
                                        fill={dotColor}
                                        opacity={0.2}
                                        style={{
                                          cursor: "pointer",
                                          pointerEvents: "auto",
                                        }}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const rect = e.currentTarget
                                            .closest("svg")
                                            .getBoundingClientRect();
                                          setChartModalData({
                                            ...payload,
                                            kpiName: kpi.kpiName,
                                          });
                                          setChartModalPosition({
                                            x: rect.left + cx,
                                            y: rect.top + cy - 150,
                                          });
                                        }}
                                      />
                                      <text
                                        x={cx}
                                        y={cy}
                                        fill="white"
                                        fontSize="14"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        style={{
                                          pointerEvents: "none",
                                          userSelect: "none",
                                        }}
                                      >
                                        +
                                      </text>
                                    </g>
                                  );
                                }

                                return (
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r={4}
                                    fill={dotColor}
                                    stroke="white"
                                    strokeWidth={1}
                                  />
                                );
                              }}
                            />

                            <Line
                              type="monotone"
                              dataKey="productionPercentPredicted"
                              stroke={currentTheme.chartColors.percentPredicted}
                              strokeWidth={1}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray="5 5"
                              name="Predicted %"
                              connectNulls={false}
                              dot={(props) => {
                                const { cx, cy, payload } = props;
                                if (payload.productionPercentPredicted === null)
                                  return null;

                                const dotColor =
                                  payload.productionPercentPredicted >
                                  (payload.productionTargetForCheck ?? 0)
                                    ? currentTheme.chartColors.badColor
                                    : currentTheme.chartColors.goodColor;

                                return (
                                  <circle
                                    cx={cx}
                                    cy={cy}
                                    r={4}
                                    fill={dotColor}
                                    stroke="white"
                                    strokeWidth={2}
                                  />
                                );
                              }}
                            />
                          </>
                        )}
                      </ComposedChart>
                    </ResponsiveContainer>

                    {chartModalData &&
                      chartModalData.kpiName === kpi.kpiName && (
                        <div
                          className={`absolute ${currentTheme.modalBg} rounded-lg ${currentTheme.shadow} ${currentTheme.border} border p-3 w-64 z-50`}
                          style={{
                            left: "50%",
                            top: "-10px",
                            transform: "translateX(-50%)",
                          }}
                        >
                          <button
                            onClick={() => setChartModalData(null)}
                            className={`absolute top-2 right-2 ${currentTheme.mutedText} hover:${currentTheme.secondaryText}`}
                          >
                            ×
                          </button>

                          <div className="flex gap-1 mb-2 mt-1">
                            {["Insights", "Action", "Improve"].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setActiveChartModalTab(tab)}
                                className={`flex-1 px-2 py-1 text-xs font-medium rounded transition-all ${
                                  activeChartModalTab === tab
                                    ? `${currentTheme.buttonBg} ${currentTheme.primaryText}`
                                    : `bg-gray-100 ${currentTheme.secondaryText} hover:bg-gray-200`
                                }`}
                              >
                                {tab}
                              </button>
                            ))}
                          </div>

                          <div
                            className={`text-xs ${currentTheme.secondaryText}`}
                          >
                            {activeChartModalTab === "Insights" && (
                              <div>
                                <p className="font-semibold mb-1">
                                  Current Status:
                                </p>
                                <p>Month: {chartModalData.month}</p>
                                <p>
                                  Value: ₹
                                  {chartModalData.actual ||
                                    chartModalData.productionPercent}
                                  %
                                </p>
                                <p>
                                  Target: ₹
                                  {chartModalData.target ||
                                    chartModalData.productionTarget}
                                  %
                                </p>
                                <p
                                  className={
                                    chartModalData.variance > 0
                                      ? currentTheme.chartColors.badColor
                                      : currentTheme.chartColors.goodColor
                                  }
                                >
                                  Variance:{" "}
                                  {chartModalData.variance?.toFixed(2)}
                                </p>
                              </div>
                            )}
                            {activeChartModalTab === "Action" && (
                              <div className="space-y-2">
                                {/* Completed Tasks */}
                                <div>
                                  <p className="font-semibold mb-1 text-green-600">
                                    ✓ Completed:
                                  </p>
                                  <ul className="ml-3 space-y-1">
                                    <li className="flex items-start gap-1">
                                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="line-through text-gray-500">
                                        Budget review for {chartModalData.month}
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-1">
                                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="line-through text-gray-500">
                                        Vendor performance analysis
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-1">
                                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="line-through text-gray-500">
                                        Cost allocation verified
                                      </span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Pending Tasks */}
                                <div>
                                  <p className="font-semibold mb-1 text-orange-600">
                                    ⏳ Remaining:
                                  </p>
                                  <ul className="ml-3 space-y-1">
                                    <li className="flex items-start gap-1">
                                      <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                                      <span>Optimize vendor contracts</span>
                                    </li>
                                    <li className="flex items-start gap-1">
                                      <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                                      <span>Process efficiency audit</span>
                                    </li>
                                    <li className="flex items-start gap-1">
                                      <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                                      <span>Update forecast model</span>
                                    </li>
                                  </ul>
                                </div>

                                {/* Progress Indicator */}
                                <div className="pt-1 border-t border-gray-200">
                                  <div className="flex items-center justify-between text-xs">
                                    <span className="font-medium">
                                      Progress:
                                    </span>
                                    <span className="text-green-600 font-bold">
                                      3/6 (50%)
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                                    <div
                                      className="bg-green-500 h-1.5 rounded-full"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {activeChartModalTab === "Improve" && (
                              <div>
                                <p className="font-semibold mb-1">
                                  Improvements:
                                </p>
                                <ul className="list-disc ml-3 space-y-1">
                                  <li>Implement cost controls</li>
                                  <li>Negotiate better rates</li>
                                  <li>Reduce waste by 10%</li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Mini Legend */}
                  <div
                    className={`mt-2 flex items-center justify-center gap-2 text-[10px] ${currentTheme.mutedText} font-medium`}
                  >
                    {activeGraphTab === "tonnage" ? (
                      <>
                        <div className="flex items-center gap-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                currentTheme.chartColors.actualLine,
                            }}
                          ></div>
                          <span>Actual</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                currentTheme.chartColors.predictedLine,
                            }}
                          ></div>
                          <span>Prediction</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                currentTheme.chartColors.targetLine,
                            }}
                          ></div>
                          <span>Target</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-1">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor:
                              currentTheme.chartColors.percentActual,
                          }}
                        ></div>
                        <span>Production %</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`w-full mx-auto p-4 min-h-screen transition-all duration-500 ${currentTheme.mainBg}`}
    >
      <NotificationPanel data={getCurrentData()} theme={currentTheme} />
      <div>
        {showCombinedView && renderCombinedChart()}
        {renderCardsView()}
      </div>
    </div>
  );
};

export default CostScreener;
