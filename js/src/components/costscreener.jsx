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
  ChevronLeft,
  AlertTriangle,
  AlertCircle,
  X,
  TrendingDown,
  ChevronRight,
  Edit,
  Save,
  Plus,
  Trash2,
  ChevronDown,
  CheckCircle,
  Calendar,
  Upload,
  Star,
} from "lucide-react";

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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
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
      highlightColor: "#6366f1",
    },
  },

  neon: {
    name: "Neon Cyber",
    mainBg: "bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950",
    cardBg:
      "bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 backdrop-blur-xl",
    modalBg: "bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl",
    primaryText: "text-white", // ⬅️ CHANGED from text-cyan-300
    secondaryText: "text-gray-200", // ⬅️ CHANGED from text-cyan-400
    mutedText: "text-gray-400", // ⬅️ CHANGED from text-cyan-500
    border: "border-cyan-400/30",
    shadow: "shadow-2xl shadow-cyan-500/30",
    chartBg:
      "bg-gradient-to-br from-gray-900/95 via-purple-950/90 to-blue-950/80",
    gridColor: "#374151", // ⬅️ CHANGED from #064e3b to lighter gray
    axisTextColor: "#ffffff", // ⬅️ NEW: White color for axis labels
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

  const generateAlerts = () => {
    const alerts = [];

    if (!data || data.length === 0) return alerts;

    data.forEach((kpi) => {
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
      } else if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.1) {
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

            <div className="max-h-96 overflow-y-auto p-2">
              {alerts.map((alert) => {
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
            <span className={`font-medium ${theme.primaryText}`}>
              {" "}
              {/* Changed to primaryText */}
              {entry.name}:{" "}
            </span>
            <span className={`font-bold ${theme.primaryText}`}>
              {" "}
              {/* Changed to primaryText */}
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

const ManualEntryModal = ({ theme, onClose, selectedLocation }) => {
  const [activeTab, setActiveTab] = useState("Power");
  const [expandedLines, setExpandedLines] = useState({});
  const [editMode, setEditMode] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // New states for add line/machine modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [addModalType, setAddModalType] = useState(null); // 'line' or 'machine'
  const [selectedLineForMachine, setSelectedLineForMachine] = useState(null);

  // Date status tracking
  const [dateStatus, setDateStatus] = useState({});

  const [formData, setFormData] = useState({
    Power: {},
    Consumables: {},
    Fuel: {},
    Labour: {},
  });

  // Fetch line and machine data from cost_line_master API
  useEffect(() => {
    fetchLineMasterData();
  }, []);

  // Fetch existing data for selected date
  useEffect(() => {
    if (selectedDate) {
      fetchExistingData(selectedDate);
    }
  }, [selectedDate]);

  const fetchLineMasterData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/collection/cost_line_master"
      );
      const data = await response.json();

      // Transform API data to formData structure
      const transformedData = {
        Power: {},
        Consumables: {},
        Fuel: {},
        Labour: {},
      };

      // Group machines by line_name
      data.objects.forEach((item) => {
        const lineName = item.line_name;

        // Initialize line if not exists
        if (!transformedData.Power[lineName]) {
          transformedData.Power[lineName] = {
            machines: [],
          };
        }

        // Add machine to the line (removed cost field)
        transformedData.Power[lineName].machines.push({
          name: item.machine_name,
          consumption: "",
          power: item.power || "",
          status: "active",
          cdb_object_id: item.cdb_object_id,
        });
      });

      setFormData(transformedData);
    } catch (error) {
      console.error("Error fetching line master data:", error);
      alert("Failed to load line and machine data");
    } finally {
      setLoading(false);
    }
  };

  const fetchExistingData = async (date) => {
    try {
      const dateStr = formatDateKey(date);
      const response = await fetch(
        `http://localhost:8080/api/v1/collection/cost_machine_entry?datee=${dateStr}`
      );
      const data = await response.json();

      if (data.objects && data.objects.length > 0) {
        // Update formData with existing values
        setFormData((prev) => {
          const newData = { ...prev };

          data.objects.forEach((entry) => {
            const lineName = entry.line_name;
            const machineName = entry.machine_name;

            if (newData.Power[lineName]) {
              const machineIndex = newData.Power[lineName].machines.findIndex(
                (m) => m.name === machineName
              );

              if (machineIndex !== -1) {
                newData.Power[lineName].machines[machineIndex] = {
                  ...newData.Power[lineName].machines[machineIndex],
                  consumption: entry.power || "",
                  power: entry.power || "",
                };
              }
            }
          });

          return newData;
        });

        // Mark date as filled
        setDateStatus((prev) => ({
          ...prev,
          [dateStr]: true,
        }));
      }
    } catch (error) {
      console.error("Error fetching existing data:", error);
    }
  };

  const kpiConfig = {
    Power: { icon: Zap, color: "blue", gradient: "from-blue-500 to-cyan-500" },
    Fuel: { icon: Fuel, color: "orange", gradient: "from-orange-500 to-amber-500" },
    Labour: { icon: Users, color: "purple", gradient: "from-purple-500 to-pink-500" },
    Consumables: { icon: Settings, color: "green", gradient: "from-green-500 to-emerald-500" },
  };

  const kpiTabs = Object.keys(kpiConfig);

  // Date formatting functions
  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateKey = (date) => {
    return date.toISOString().split("T")[0];
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const getDateIndicatorColor = (date) => {
    if (!isPastDate(date)) return null;

    const dateKey = formatDateKey(date);
    if (dateStatus[dateKey] === true) {
      return "bg-green-500";
    } else if (dateStatus[dateKey] === false) {
      return "bg-red-500";
    }
    return null;
  };

  // Calendar Component
  const CalendarDropdown = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

    const getDaysInMonth = (date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDayOfWeek = firstDay.getDay();

      return { daysInMonth, startingDayOfWeek };
    };

    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

    const handlePrevMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
      );
    };

    const handleNextMonth = () => {
      setCurrentMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
      );
    };

    const handleDateSelect = (day) => {
      const newDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      setSelectedDate(newDate);
      setShowCalendar(false);
    };

    const getDateStyle = (date) => {
      const dateKey = formatDateKey(date);
      const isSelected = formatDateKey(date) === formatDateKey(selectedDate);
      const isTodayDate = isToday(date);
      const isPast = isPastDate(date);

      if (isSelected) {
        return "bg-blue-600 text-white shadow-md border-2 border-blue-700";
      }

      if (isTodayDate) {
        return "bg-blue-100 text-blue-700 border-2 border-blue-500 font-bold";
      }

      if (isPast) {
        if (dateStatus[dateKey] === true) {
          return "bg-green-600 text-white hover:bg-green-700 border-2 border-green-700 shadow-sm";
        } else if (dateStatus[dateKey] === false) {
          return "bg-red-600 text-white hover:bg-red-700 border-2 border-red-700 shadow-sm";
        }
      }

      return "bg-white hover:bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-gray-300";
    };

    return (
      <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border-2 border-gray-200 p-5 z-50 w-96">
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={handlePrevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="text-base font-bold text-gray-900">
            {currentMonth.toLocaleDateString("en-IN", {
              month: "long",
              year: "numeric",
            })}
          </div>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-3">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
            <div
              key={day}
              className="text-center text-xs font-bold text-gray-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const date = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day
            );
            const dateStyle = getDateStyle(date);

            return (
              <button
                key={day}
                onClick={() => handleDateSelect(day)}
                className={`p-3 rounded-lg text-sm font-bold transition-all ${dateStyle}`}
              >
                {day}
              </button>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg border border-green-200">
              <div className="w-7 h-7 rounded-lg bg-green-600 border-2 border-green-700 flex items-center justify-center shadow-sm">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Filled</span>
            </div>
            <div className="flex items-center gap-2 bg-red-50 p-2 rounded-lg border border-red-200">
              <div className="w-7 h-7 rounded-lg bg-red-600 border-2 border-red-700 flex items-center justify-center shadow-sm">
                <X className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Not Filled</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-200">
              <div className="w-7 h-7 rounded-lg bg-blue-600 border-2 border-blue-700 flex items-center justify-center shadow-sm">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold">Selected</span>
            </div>
            <div className="flex items-center gap-2 bg-cyan-50 p-2 rounded-lg border border-cyan-200">
              <div className="w-7 h-7 rounded-lg bg-blue-100 border-2 border-blue-500 flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-gray-700 font-semibold">Today</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Add Line/Machine Modal
  const AddModal = () => {
    const [newLineName, setNewLineName] = useState("");
    const [newMachines, setNewMachines] = useState([{ name: "", power: "" }]);

    const handleAddMachineRow = () => {
      setNewMachines([...newMachines, { name: "", power: "" }]);
    };

    const handleRemoveMachineRow = (index) => {
      const updated = newMachines.filter((_, i) => i !== index);
      setNewMachines(updated);
    };

    const handleMachineChange = (index, field, value) => {
      const updated = [...newMachines];
      updated[index][field] = value;
      setNewMachines(updated);
    };

    const handleSubmit = () => {
      if (addModalType === "line") {
        if (!newLineName.trim()) {
          alert("Please enter line name");
          return;
        }
        
        const validMachines = newMachines.filter(m => m.name.trim());
        if (validMachines.length === 0) {
          alert("Please add at least one machine");
          return;
        }

        setFormData((prev) => {
          const newData = { ...prev };
          newData[activeTab][newLineName.trim()] = {
            machines: validMachines.map(m => ({
              name: m.name,
              consumption: "",
              power: m.power || "",
              status: "active",
            })),
          };
          return newData;
        });

        setShowAddModal(false);
        setNewLineName("");
        setNewMachines([{ name: "", power: "" }]);
      } else if (addModalType === "machine") {
        const validMachines = newMachines.filter(m => m.name.trim());
        if (validMachines.length === 0) {
          alert("Please add at least one machine");
          return;
        }

        setFormData((prev) => {
          const newData = { ...prev };
          validMachines.forEach(machine => {
            newData[activeTab][selectedLineForMachine].machines.push({
              name: machine.name,
              consumption: "",
              power: machine.power || "",
              status: "active",
            });
          });
          return newData;
        });

        setShowAddModal(false);
        setNewMachines([{ name: "", power: "" }]);
      }
    };

    return (
      <div className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200">
          {/* Modal Header */}
          <div className={`bg-${kpiConfig[activeTab].color}-600 p-5 border-b-2 border-${kpiConfig[activeTab].color}-700`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {addModalType === "line" ? "Add New Line" : "Add Machines"}
                  </h3>
                  <p className="text-sm text-white/90 mt-1">
                    {addModalType === "line" 
                      ? "Create a new line with machines"
                      : `Add machines to ${selectedLineForMachine}`
                    }
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-lg hover:bg-white/20 transition-all text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-240px)]">
            {addModalType === "line" && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Line Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newLineName}
                  onChange={(e) => setNewLineName(e.target.value)}
                  placeholder="Enter line name (e.g., Line 1, Production Line A)"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Machines <span className="text-red-500">*</span>
              </label>
              
              <div className="space-y-3">
                {newMachines.map((machine, index) => (
                  <div key={index} className="flex gap-3 items-start bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Machine Name
                        </label>
                        <input
                          type="text"
                          value={machine.name}
                          onChange={(e) => handleMachineChange(index, "name", e.target.value)}
                          placeholder="e.g., Machine A1"
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          Power (kW) - Optional
                        </label>
                        <input
                          type="text"
                          value={machine.power}
                          onChange={(e) => handleMachineChange(index, "power", e.target.value)}
                          placeholder="e.g., 100"
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                    {newMachines.length > 1 && (
                      <button
                        onClick={() => handleRemoveMachineRow(index)}
                        className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all mt-6"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddMachineRow}
                className="w-full mt-3 py-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 hover:border-blue-400 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-gray-600"
              >
                <Plus className="w-4 h-4" />
                Add Another Machine
              </button>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-5 border-t border-gray-200 bg-gray-50 flex gap-3 justify-end">
            <button
              onClick={() => setShowAddModal(false)}
              className="px-6 py-2.5 rounded-lg bg-white border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`px-6 py-2.5 rounded-lg bg-${kpiConfig[activeTab].color}-600 border-2 border-${kpiConfig[activeTab].color}-700 text-white text-sm font-semibold hover:bg-${kpiConfig[activeTab].color}-700 transition-all flex items-center gap-2 shadow-sm`}
            >
              <Check className="w-4 h-4" />
              {addModalType === "line" ? "Create Line" : "Add Machines"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleLineToggle = (lineName) => {
    setExpandedLines((prev) => ({
      ...prev,
      [lineName]: !prev[lineName],
    }));
  };

  const handleEdit = (lineName, machineIndex = null) => {
    const key =
      machineIndex !== null ? `${lineName}-${machineIndex}` : lineName;
    setEditMode((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleSave = async (lineName, machineIndex = null) => {
    const key =
      machineIndex !== null ? `${lineName}-${machineIndex}` : lineName;

    // Save individual machine data
    if (machineIndex !== null) {
      await saveMachineData(lineName, machineIndex);
    }

    setEditMode((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const saveMachineData = async (lineName, machineIndex) => {
    try {
      const machine = formData[activeTab][lineName].machines[machineIndex];

      const payload = {
        datee: formatDateKey(selectedDate),
        line_name: lineName,
        machine_name: machine.name,
        plant_code: parseInt(selectedLocation) || 2101,
        power: parseFloat(machine.consumption) || 0,
        type: activeTab.toUpperCase(),
      };

      const response = await fetch(
        "http://localhost:8080/api/v1/collection/cost_machine_entry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      console.log("Data saved successfully for:", lineName, machine.name);
    } catch (error) {
      console.error("Error saving machine data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  const handleInputChange = (lineName, field, value, machineIndex = null) => {
    setFormData((prev) => {
      const newData = { ...prev };
      newData[activeTab][lineName].machines[machineIndex][field] = value;
      return newData;
    });
  };

  const handleDeleteMachine = (lineName, machineIndex) => {
    if (confirm("Are you sure you want to delete this machine?")) {
      setFormData((prev) => {
        const newData = { ...prev };
        newData[activeTab][lineName].machines.splice(machineIndex, 1);
        return newData;
      });
    }
  };

  const handleSaveAll = async () => {
    setSaving(true);
    try {
      const allMachines = [];

      // Collect all machine data
      Object.keys(formData[activeTab] || {}).forEach((lineName) => {
        formData[activeTab][lineName].machines.forEach((machine) => {
          if (machine.consumption) {
            allMachines.push({
              datee: formatDateKey(selectedDate),
              line_name: lineName,
              machine_name: machine.name,
              plant_code: parseInt(selectedLocation) || 2101,
              power: parseFloat(machine.consumption) || 0,
              type: activeTab.toUpperCase(),
            });
          }
        });
      });

      // Save all machines
      for (const machineData of allMachines) {
        const response = await fetch(
          "http://localhost:8080/api/v1/collection/cost_machine_entry",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(machineData),
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to save ${machineData.machine_name}`);
        }
      }

      alert("All data saved successfully!");

      // Update date status
      setDateStatus((prev) => ({
        ...prev,
        [formatDateKey(selectedDate)]: true,
      }));
    } catch (error) {
      console.error("Error saving all data:", error);
      alert("Failed to save some data. Please check and try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleUploadBill = () => {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        console.log("File selected:", file.name);
        // Here you can add your file upload logic
        alert(`Bill uploaded: ${file.name}`);
      }
    };
    input.click();
  };

  const renderInputField = (value, onChange, label, isEditing) => {
    return (
      <div className="flex-1 min-w-0">
        <label className="text-xs font-bold text-gray-600 block mb-1.5">
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={!isEditing}
          placeholder={isEditing ? `Enter ${label.toLowerCase()}` : ""}
          className={`w-full px-3 py-2.5 rounded-lg text-sm border-2 transition-all ${
            isEditing
              ? "border-blue-500 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none font-semibold"
              : "border-gray-200 bg-gray-50 text-gray-700"
          }`}
        />
      </div>
    );
  };

  const IconComponent = kpiConfig[activeTab]?.icon || Settings;

  if (loading) {
    return (
      <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 font-semibold text-lg">Loading data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="h-screen w-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-200 shadow-sm">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-xl shadow-sm">
                  <Edit className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    Manual Data Entry
                    <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700">
                      {selectedLocation}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    Enter consumption data for {activeTab}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Upload Bill Button */}
                <button
                  onClick={handleUploadBill}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm font-semibold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span className="text-sm">Upload Bill</span>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowCalendar(!showCalendar)}
                    className="flex items-center gap-3 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm border border-blue-700"
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      {formatDate(selectedDate)}
                    </span>
                    {isToday(selectedDate) && (
                      <span className="px-2 py-0.5 bg-blue-700 rounded-md text-xs font-bold">
                        Today
                      </span>
                    )}
                  </button>

                  {showCalendar && <CalendarDropdown />}
                </div>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-lg hover:bg-gray-100 transition-all text-gray-600 border border-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Tabs */}
        <div className="px-5 py-4 bg-white border-b border-gray-200 overflow-x-auto flex-shrink-0 shadow-sm">
          <div className="flex gap-3 items-center">
            {kpiTabs.map((tab) => {
              const TabIcon = kpiConfig[tab].icon;
              const isActive = activeTab === tab;
              const colorClass = kpiConfig[tab].color;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-2 ${
                    isActive
                      ? `bg-${colorClass}-600 text-white border-${colorClass}-700 shadow-md`
                      : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab}
                </button>
              );
            })}

            {/* Add New Line Button */}
            <button
              onClick={() => {
                setAddModalType("line");
                setShowAddModal(true);
              }}
              className="ml-auto px-5 py-2.5 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all flex items-center gap-2 shadow-sm border-2 border-green-700"
            >
              <Plus className="w-4 h-4" />
              Add New Line
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {formData[activeTab] &&
              Object.keys(formData[activeTab]).map((lineName) => {
                const lineData = formData[activeTab][lineName];
                const isLineExpanded = expandedLines[lineName];
                const colorClass = kpiConfig[activeTab].color;

                return (
                  <div
                    key={lineName}
                    className={`bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all hover:shadow-lg ${
                      isLineExpanded ? "row-span-2" : ""
                    }`}
                  >
                    <div className={`bg-${colorClass}-600 p-4 border-b-2 border-${colorClass}-700`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1">
                          <button
                            onClick={() => handleLineToggle(lineName)}
                            className="p-1.5 rounded-md hover:bg-white/20 transition-all text-white"
                          >
                            {isLineExpanded ? (
                              <ChevronDown className="w-5 h-5" />
                            ) : (
                              <ChevronRight className="w-5 h-5" />
                            )}
                          </button>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                              {lineName}
                            </h3>
                            <span className="inline-block mt-1 px-2.5 py-0.5 bg-white/20 rounded-md text-xs font-semibold text-white">
                              {lineData.machines.length} machines
                            </span>
                          </div>
                        </div>
                        
                        {isLineExpanded && (
                          <button
                            onClick={() => {
                              setAddModalType("machine");
                              setSelectedLineForMachine(lineName);
                              setShowAddModal(true);
                            }}
                            className="p-2 rounded-md bg-white/20 hover:bg-white/30 transition-all text-white"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {isLineExpanded && (
                      <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
                        {lineData.machines.map((machine, machineIndex) => {
                          const machineKey = `${lineName}-${machineIndex}`;
                          const isMachineEditing = editMode[machineKey];

                          return (
                            <div
                              key={machineIndex}
                              className={`rounded-lg border-2 transition-all ${
                                isMachineEditing
                                  ? "border-blue-500 bg-blue-50 shadow-md"
                                  : "border-gray-200 bg-white hover:shadow-sm"
                              }`}
                            >
                              <div className="p-3">
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <input
                                    type="text"
                                    value={machine.name}
                                    onChange={(e) =>
                                      handleInputChange(
                                        lineName,
                                        "name",
                                        e.target.value,
                                        machineIndex
                                      )
                                    }
                                    disabled={!isMachineEditing}
                                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
                                      isMachineEditing
                                        ? "border-blue-500 bg-white shadow-sm"
                                        : "border-transparent bg-transparent text-gray-900"
                                    }`}
                                  />

                                  <div className="flex items-center gap-2">
                                    {isMachineEditing ? (
                                      <button
                                        onClick={() =>
                                          handleSave(lineName, machineIndex)
                                        }
                                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm"
                                      >
                                        <Check className="w-4 h-4" />
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() =>
                                          handleEdit(lineName, machineIndex)
                                        }
                                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
                                      >
                                        <Edit className="w-4 h-4" />
                                      </button>
                                    )}
                                    <button
                                      onClick={() =>
                                        handleDeleteMachine(
                                          lineName,
                                          machineIndex
                                        )
                                      }
                                      className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-sm"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3">
                                  {renderInputField(
                                    machine.consumption,
                                    (val) =>
                                      handleInputChange(
                                        lineName,
                                        "consumption",
                                        val,
                                        machineIndex
                                      ),
                                    "Consumption",
                                    isMachineEditing
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t-2 border-gray-200 bg-white flex-shrink-0 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-semibold">
              <span className={`text-${kpiConfig[activeTab].color}-600 font-bold`}>{activeTab}</span> •{" "}
              {Object.keys(formData[activeTab] || {}).length} lines •{" "}
              {Object.values(formData[activeTab] || {}).reduce(
                (sum, line) => sum + line.machines.length,
                0
              )}{" "}
              machines
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-white text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-all border-2 border-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveAll}
                disabled={saving}
                className={`px-8 py-2.5 rounded-lg bg-${kpiConfig[activeTab].color}-600 border-2 border-${kpiConfig[activeTab].color}-700 text-white text-sm font-bold hover:bg-${kpiConfig[activeTab].color}-700 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    Save All Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && <AddModal />}
    </div>
  );
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
  const [globalTabView, setGlobalTabView] = useState("production");
  const [selectedTheme, setSelectedTheme] = useState("ocean");
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [currentPeriodIndex, setCurrentPeriodIndex] = useState(4); // Default to Aug (index 4)
  const [expandedCards, setExpandedCards] = useState({});
  const [showPlantLines, setShowPlantLines] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [plantLineData, setPlantLineData] = useState({});
  // ✅ ADD THESE TWO NEW STATES
  const [combinedCurrentPeriodIndex, setCombinedCurrentPeriodIndex] =
    useState(4); // For combined chart
  const [cardCurrentPeriodIndex, setCardCurrentPeriodIndex] = useState({}); // For individual cards - object
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
  const [cardDetails, setCardDetails] = useState({});
  const [showCombinedValues, setShowCombinedValues] = useState(false);
  const themeSelectorRef = useRef(null);
  const modalRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [drillDownLevel, setDrillDownLevel] = useState(0);
  const [drillDownPath, setDrillDownPath] = useState([]);
  const [showDrillDownModal, setShowDrillDownModal] = useState(false);
  const [selectedKpiForDrill, setSelectedKpiForDrill] = useState(null);
  const [selectedLine, setSelectedLine] = useState("All"); // Add this state
  const [dismissedAlerts, setDismissedAlerts] = useState([]);
  const [alertsMinimized, setAlertsMinimized] = useState(false);

  const locationsByCategory = {
    All: [
      { name: "Ranjangaon", code: "RGN", percentage: -9, status: "active" },
      { name: "Mundhwa", code: "MUN", percentage: -7, status: "active" },
      { name: "Ranjangaon-2", code: "RGN-2", percentage: -7, status: "active" },
      { name: "Baramati", code: "BRM", percentage: 13, status: "active" },
      { name: "Chakan", code: "CHK", percentage: -7, status: "active" },
    ],
    Forging: [
      { name: "Ranjangaon", code: "RGN", percentage: -9, status: "active" },
      { name: "Mundhwa", code: "MUN", percentage: -7, status: "active" },
      { name: "Ranjangaon-2", code: "RGN-2", percentage: -7, status: "active" },
      { name: "Baramati", code: "BRM", percentage: 13, status: "active" },
      { name: "Bhiwadi", code: "BWD", percentage: 13, status: "active" },
      { name: "Gujrat", code: "GUT", percentage: 13, status: "active" },
    ],
    Machining: [
      { name: "Chakan", code: "CHK", percentage: -7, status: "active" },
      { name: "Khed", code: "KHD", percentage: -4, status: "active" },
      { name: "Ambhethan-1", code: "AMB1", percentage: -3, status: "active" },
      { name: "Ambhethan-2", code: "AMB2", percentage: -3, status: "active" },
    ],
  };

  // Add this after locationsByCategory
  const linesByLocation = {
    Ranjangaon: [
      { name: "Line 1", code: "L1", status: "active", capacity: "85%" },
      { name: "Line 2", code: "L2", status: "active", capacity: "92%" },
      { name: "Line 3", code: "L3", status: "active", capacity: "78%" },
      { name: "Line 4", code: "L4", status: "maintenance", capacity: "0%" },
    ],
    Mundhwa: [
      { name: "Line A", code: "LA", status: "active", capacity: "88%" },
      { name: "Line B", code: "LB", status: "active", capacity: "91%" },
      { name: "Line C", code: "LC", status: "active", capacity: "82%" },
    ],
    "Ranjangaon-2": [
      { name: "Line 5", code: "L5", status: "active", capacity: "90%" },
      { name: "Line 6", code: "L6", status: "active", capacity: "87%" },
    ],
    Baramati: [
      { name: "Line X", code: "LX", status: "active", capacity: "76%" },
      { name: "Line Y", code: "LY", status: "active", capacity: "94%" },
      { name: "Line Z", code: "LZ", status: "active", capacity: "89%" },
    ],
    Chakan: [
      { name: "M-Line 1", code: "ML1", status: "active", capacity: "83%" },
      { name: "M-Line 2", code: "ML2", status: "active", capacity: "91%" },
    ],
    Aurangabad: [
      { name: "Line P", code: "LP", status: "active", capacity: "86%" },
      { name: "Line Q", code: "LQ", status: "active", capacity: "79%" },
    ],
  };

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

  useEffect(() => {
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

  useEffect(() => {
    setIsLoading(true);
    const url = `http://localhost:5000/api/forging-data/${selectedLocation}/forging`;

    // console.log("Fetching from:", url);s
    // console.log("Selected Location:", selectedLocation);

    fetch(url)
      .then((res) => {
        // console.log("Response status:", res.status);
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // console.log("Raw data received:", data);
        // console.log("KPI data length:", data?.kpi_data?.length);

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

          // console.log("Setting data:", dataWithEfficiency);
          setRealForgingData(dataWithEfficiency);
        } else {
          // console.log("No kpi_data found");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  }, [selectedLocation, activeProcess]);

  // useEffect(() => {
  //   const data = getCurrentData();
  //   if (data && data.length > 0) {
  //     const initialTabs = {};
  //     data.forEach((kpi) => {
  //       initialTabs[kpi.kpiName] = "production";
  //     });
  //     setCardTabs((prev) => ({ ...initialTabs, ...prev }));
  //   }
  // }, [activeTab, activeProcess, selectedLocation]);

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
    // console.log("getCurrentData called");
    // console.log("Tab:", activeTab);
    // console.log("Process:", activeProcess);
    // console.log("Location:", selectedLocation);
    // console.log("Data available:", realForgingData);

    if (activeTab === "production" || activeTab === "sale") {
      if (activeProcess === "forging") {
        // console.log("Conditions met, returning:", realForgingData?.kpi_data);
        return realForgingData?.kpi_data || [];
      }
    }
    // console.log("Conditions not met");
    return [];
  };

  // Function 1: Get drill-down data for each KPI
  const getKpiDrillDownData = (kpiName) => {
    const drillDownData = {
      Consumables: [
        {
          name: "Electrodes",
          cost: 2.45,
          percentage: 15.4,
          trend: [520, 548, 512, 523, 541],
          monthlyActual: [2.2, 2.35, 2.28, 2.32, 2.45],
          monthlyTarget: [2.1, 2.1, 2.15, 2.15, 2.2],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Grinding Wheels",
          cost: 3.12,
          percentage: 19.6,
          trend: [678, 695, 670, 688, 702],
          monthlyActual: [2.85, 2.98, 2.88, 2.95, 3.12],
          monthlyTarget: [2.8, 2.85, 2.85, 2.9, 2.95],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Cutting Tools",
          cost: 4.23,
          percentage: 26.6,
          trend: [890, 920, 885, 903, 915],
          monthlyActual: [3.95, 4.15, 4.02, 4.1, 4.23],
          monthlyTarget: [3.9, 3.95, 4.0, 4.05, 4.1],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Lubricants",
          cost: 2.87,
          percentage: 18.1,
          trend: [595, 612, 588, 599, 610],
          monthlyActual: [2.65, 2.78, 2.7, 2.75, 2.87],
          monthlyTarget: [2.6, 2.65, 2.7, 2.7, 2.75],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Safety Equipment",
          cost: 1.56,
          percentage: 9.8,
          trend: [325, 338, 318, 330, 340],
          monthlyActual: [1.42, 1.48, 1.45, 1.5, 1.56],
          monthlyTarget: [1.4, 1.45, 1.45, 1.5, 1.5],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Others",
          cost: 1.66,
          percentage: 10.5,
          trend: [348, 362, 345, 356, 368],
          monthlyActual: [1.52, 1.6, 1.55, 1.58, 1.66],
          monthlyTarget: [1.5, 1.55, 1.55, 1.6, 1.6],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      Power: [
        {
          name: "Furnace Power",
          cost: 12.45,
          percentage: 38.6,
          trend: [2845, 2773, 2747, 2888, 2814],
          monthlyActual: [11.8, 11.95, 12.1, 12.25, 12.45],
          monthlyTarget: [11.5, 11.6, 11.7, 11.8, 11.9],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Machine Power",
          cost: 8.9,
          percentage: 27.6,
          trend: [2028, 1979, 1957, 2057, 2004],
          monthlyActual: [8.45, 8.6, 8.72, 8.85, 8.9],
          monthlyTarget: [8.2, 8.3, 8.4, 8.5, 8.6],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Lighting & HVAC",
          cost: 5.67,
          percentage: 17.6,
          trend: [1294, 1261, 1248, 1312, 1279],
          monthlyActual: [5.35, 5.42, 5.5, 5.58, 5.67],
          monthlyTarget: [5.2, 5.25, 5.3, 5.35, 5.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Compressed Air",
          cost: 3.23,
          percentage: 10.0,
          trend: [737, 718, 712, 748, 729],
          monthlyActual: [3.02, 3.08, 3.15, 3.2, 3.23],
          monthlyTarget: [2.95, 3.0, 3.05, 3.1, 3.15],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Other Utilities",
          cost: 2.0,
          percentage: 6.2,
          trend: [470, 452, 442, 472, 464],
          monthlyActual: [1.85, 1.88, 1.92, 1.96, 2.0],
          monthlyTarget: [1.8, 1.85, 1.9, 1.9, 1.95],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      Fuel: [
        {
          name: "LPG",
          cost: 5.89,
          percentage: 42.9,
          trend: [1346, 1435, 1298, 1282, 1183],
          monthlyActual: [6.15, 6.35, 6.02, 5.95, 5.89],
          monthlyTarget: [5.8, 5.85, 5.9, 5.85, 5.8],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Natural Gas",
          cost: 4.12,
          percentage: 30.0,
          trend: [941, 1003, 908, 897, 827],
          monthlyActual: [4.3, 4.42, 4.25, 4.18, 4.12],
          monthlyTarget: [4.0, 4.05, 4.1, 4.1, 4.05],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Diesel",
          cost: 2.34,
          percentage: 17.1,
          trend: [535, 572, 517, 511, 471],
          monthlyActual: [2.45, 2.52, 2.42, 2.38, 2.34],
          monthlyTarget: [2.3, 2.35, 2.35, 2.35, 2.3],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Coal",
          cost: 1.37,
          percentage: 10.0,
          trend: [314, 335, 302, 299, 275],
          monthlyActual: [1.43, 1.48, 1.4, 1.38, 1.37],
          monthlyTarget: [1.35, 1.38, 1.4, 1.38, 1.35],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      Labour: [
        {
          name: "Direct Labour",
          cost: 5.67,
          percentage: 57.1,
          trend: [1297, 1496, 1149, 1276, 1225],
          monthlyActual: [5.45, 5.52, 5.58, 5.62, 5.67],
          monthlyTarget: [5.3, 5.35, 5.4, 5.45, 5.5],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Indirect Labour",
          cost: 2.34,
          percentage: 23.6,
          trend: [535, 618, 475, 527, 506],
          monthlyActual: [2.18, 2.22, 2.26, 2.3, 2.34],
          monthlyTarget: [2.1, 2.15, 2.2, 2.2, 2.25],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Overtime",
          cost: 1.23,
          percentage: 12.4,
          trend: [281, 323, 248, 276, 265],
          monthlyActual: [1.15, 1.18, 1.2, 1.22, 1.23],
          monthlyTarget: [1.1, 1.12, 1.15, 1.18, 1.2],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Contract Labour",
          cost: 0.69,
          percentage: 6.9,
          trend: [157, 182, 140, 156, 150],
          monthlyActual: [0.65, 0.66, 0.67, 0.68, 0.69],
          monthlyTarget: [0.62, 0.64, 0.65, 0.66, 0.68],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      "Sub Contract": [
        {
          name: "Heat Treatment",
          cost: 12.45,
          percentage: 34.7,
          trend: [2849, 2737, 2436, 2624, 2624],
          monthlyActual: [11.95, 12.05, 12.15, 12.3, 12.45],
          monthlyTarget: [11.5, 11.7, 11.9, 12.0, 12.2],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Surface Finishing",
          cost: 8.9,
          percentage: 24.8,
          trend: [2034, 1956, 1740, 1875, 1875],
          monthlyActual: [8.55, 8.65, 8.72, 8.82, 8.9],
          monthlyTarget: [8.3, 8.4, 8.5, 8.6, 8.7],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Testing & Inspection",
          cost: 6.78,
          percentage: 18.9,
          trend: [1549, 1490, 1326, 1429, 1429],
          monthlyActual: [6.45, 6.52, 6.6, 6.69, 6.78],
          monthlyTarget: [6.2, 6.3, 6.4, 6.5, 6.6],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Special Processes",
          cost: 4.56,
          percentage: 12.7,
          trend: [1042, 1002, 891, 960, 960],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Logistics Support",
          cost: 3.21,
          percentage: 8.9,
          trend: [734, 706, 628, 677, 677],
          monthlyActual: [3.05, 3.08, 3.12, 3.17, 3.21],
          monthlyTarget: [2.95, 3.0, 3.05, 3.1, 3.15],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      "Machine Hire Charges": [
        {
          name: "Press Hire",
          cost: 1.12,
          percentage: 40.4,
          trend: [256, 206, 347, 315, 315],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "CNC Machines",
          cost: 0.89,
          percentage: 32.1,
          trend: [203, 164, 275, 250, 250],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Material Handling",
          cost: 0.45,
          percentage: 16.2,
          trend: [103, 83, 140, 127, 127],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Other Equipment",
          cost: 0.31,
          percentage: 11.3,
          trend: [70, 57, 96, 87, 87],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      "Repair & Maintenance": [
        {
          name: "Preventive Maintenance",
          cost: 2.45,
          percentage: 39.0,
          trend: [560, 1509, 1301, 843, 843],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Breakdown Repairs",
          cost: 1.89,
          percentage: 30.1,
          trend: [432, 1165, 1004, 651, 651],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Spare Parts",
          cost: 1.23,
          percentage: 19.6,
          trend: [281, 759, 654, 424, 424],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "External Services",
          cost: 0.71,
          percentage: 11.3,
          trend: [163, 438, 378, 245, 245],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      "Employee Cost": [
        {
          name: "Salaries",
          cost: 18.23,
          percentage: 72.0,
          trend: [4167, 4144, 3779, 4012, 4012],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Benefits",
          cost: 4.56,
          percentage: 18.0,
          trend: [1042, 1036, 944, 1003, 1003],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Training",
          cost: 1.52,
          percentage: 6.0,
          trend: [347, 345, 315, 334, 334],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Other Costs",
          cost: 1.01,
          percentage: 4.0,
          trend: [232, 231, 210, 223, 223],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      "Establishment Expenses": [
        {
          name: "Rent & Lease",
          cost: 2.06,
          percentage: 40.0,
          trend: [471, 515, 512, 524, 524],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Insurance",
          cost: 1.54,
          percentage: 30.0,
          trend: [353, 386, 384, 393, 393],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Communication",
          cost: 0.77,
          percentage: 15.0,
          trend: [177, 193, 192, 197, 197],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Office Supplies",
          cost: 0.78,
          percentage: 15.0,
          trend: [176, 193, 193, 195, 195],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      Packing: [
        {
          name: "Packaging Material",
          cost: 3.67,
          percentage: 55.0,
          trend: [838, 901, 1473, 1322, 1097],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Packing Labour",
          cost: 1.87,
          percentage: 28.0,
          trend: [427, 459, 750, 673, 559],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Equipment",
          cost: 0.8,
          percentage: 12.0,
          trend: [183, 197, 321, 289, 239],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
        {
          name: "Other Costs",
          cost: 0.33,
          percentage: 5.0,
          trend: [76, 82, 134, 120, 99],
          monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
          monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
          months: ["Apr", "May", "Jun", "Jul", "Aug"],
        },
      ],
      Freight: [
        {
          name: "Outbound Freight",
          cost: 99.7,
          percentage: 60.0,
          trend: [2269, 2605, 2395, 1903, 1899],
        },
        {
          name: "Inbound Freight",
          cost: 49.85,
          percentage: 30.0,
          trend: [1134, 1303, 1198, 952, 950],
        },
        {
          name: "Handling Charges",
          cost: 11.63,
          percentage: 7.0,
          trend: [265, 304, 279, 222, 222],
        },
        {
          name: "Insurance & Other",
          cost: 4.99,
          percentage: 3.0,
          trend: [113, 130, 120, 95, 94],
        },
      ],
      "Raw Material": [
        {
          name: "Steel Billets",
          cost: 150.32,
          percentage: 69.8,
          trend: [68547, 70205, 68067, 70633, 63431],
        },
        {
          name: "Alloy Elements",
          cost: 43.09,
          percentage: 20.0,
          trend: [20236, 20116, 19501, 20239, 18175],
        },
        {
          name: "Scrap & Rework",
          cost: 15.09,
          percentage: 7.0,
          trend: [7073, 7041, 6825, 7084, 6361],
        },
        {
          name: "Quality Loss",
          cost: 6.95,
          percentage: 3.2,
          trend: [3326, 3219, 3113, 3237, 2909],
        },
      ],
    };

    return drillDownData[kpiName] || [];
  };

  // Function 2: Handle KPI card click
  const handleKpiDrillDown = (kpi) => {
    setSelectedKpiForDrill(kpi);
    setDrillDownPath([kpi.kpiName]);
    setDrillDownLevel(1);
    setShowDrillDownModal(true);
  };

  // Function 3: Handle clicking on sub-item
  const handleDrillDownItemClick = (item, kpiName) => {
    setDrillDownPath([...drillDownPath, item.name]);
    setDrillDownLevel(2);
  };

  // Function 4: Handle back button in modal
  const handleDrillDownBack = () => {
    if (drillDownLevel > 1) {
      const newPath = [...drillDownPath];
      newPath.pop();
      setDrillDownPath(newPath);
      setDrillDownLevel(drillDownLevel - 1);
    } else {
      setShowDrillDownModal(false);
      setDrillDownLevel(0);
      setDrillDownPath([]);
      setSelectedKpiForDrill(null);
    }
  };

  // UPDATED buildChartData function with sale tab support
  const buildChartData = (kpi, tabType = "production") => {
    if (!kpi || !kpi.trend) return [];

    const avgTrendValue =
      kpi.trend.reduce((a, b) => a + b, 0) / kpi.trend.length;
    const targetValue =
      kpi.budget_per_tonne && kpi.actual_per_tonne
        ? avgTrendValue * (kpi.budget_per_tonne / kpi.actual_per_tonne)
        : (avgTrendValue || 0) * 1.05;

    // ✅ NEW: Calculate SINGLE average target percentage for solid line
    const avgTargetPercent =
      kpi.target_percentage?.length > 0
        ? kpi.target_percentage.reduce((a, b) => a + b, 0) /
          kpi.target_percentage.length
        : null;

    // console.log(`[${kpi.kpiName}] Building chart data (${tabType} tab)`);
    // console.log(`  - Trend length: ${kpi.trend.length}`);

    // console.log(`  - Target %: ${kpi.target_percentage?.length || 0} values`);
    // console.log(`  - Avg Target %: ${avgTargetPercent?.toFixed(2) || "null"}`); // NEW log

    const historicalData = kpi.trend.map((value, index) => {
      let displayValue = value;
      let displayTarget = targetValue;

      if (tabType === "sale") {
        const saleReduction = 0.93 + Math.random() * 0.04;
        displayValue = value * saleReduction;
        displayTarget = targetValue * 0.95;
      }

      let productionPercent = kpi.production_percentage?.[index] || null;

      // ✅ CHANGED: Use single average target for ALL months (solid line)
      let productionTarget = avgTargetPercent;

      if (tabType === "sale" && productionPercent !== null) {
        productionPercent = productionPercent * 0.95;
      }
      if (tabType === "sale" && productionTarget !== null) {
        productionTarget = productionTarget * 0.93;
      }

      if (index < 3) {
        // console.log(
        //   `  Month ${index}: percent=${productionPercent}, target=${productionTarget}`
        // );
      }

      const isLastPoint = index === kpi.trend.length - 1;
      return {
        month: monthNames[index] || `M${index + 1}`,
        actual: parseFloat(displayValue.toFixed(2)),
        prediction: isLastPoint ? parseFloat(displayValue.toFixed(2)) : null,
        target: parseFloat((displayTarget || 0).toFixed(2)),
        productionPercentPredicted: isLastPoint ? productionPercent : null,
        productionPercent: productionPercent,
        productionTarget: productionTarget, // ✅ Now same value for all months
        isHistorical: true,
        isHighlighted: isLastPoint,
        variance: displayValue - displayTarget,
      };
    });

    // Prediction data
    const lastValue = kpi.trend[kpi.trend.length - 1];
    const prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
    const costDirection = lastValue >= prevValue ? 1 : -1;
    const monthIndex = kpi.trend.length % 12;
    const stepChange =
      Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;
    let predictedValue = lastValue + costDirection * stepChange;
    let predTarget = targetValue;

    if (tabType === "sale") {
      predictedValue = predictedValue * 0.95;
      predTarget = targetValue * 0.95;
    }

    const percentLength = kpi.production_percentage?.length || 0;

    let lastPercent =
      percentLength > 0 ? kpi.production_percentage[percentLength - 1] : null;

    // ✅ CHANGED: Use average target for prediction too
    let lastPercentTarget = avgTargetPercent;

    if (tabType === "sale") {
      if (lastPercent) lastPercent = lastPercent * 0.95;
      if (lastPercentTarget) lastPercentTarget = lastPercentTarget * 0.93;
    }

    const predictionData = [
      {
        month: monthNames[monthIndex] || `M${monthIndex + 1}`,
        actual: null,
        prediction: parseFloat(predictedValue.toFixed(2)),
        target: parseFloat(predTarget.toFixed(2)),
        targetForCheck: predTarget,
        productionPercent: null,
        productionPercentPredicted: lastPercent,
        productionTarget: lastPercentTarget, // ✅ Same average value
        productionTargetForCheck: lastPercentTarget,
        isHistorical: false,
        isHighlighted: false,
        variance: predictedValue - predTarget,
      },
    ];

    return [...historicalData, ...predictionData];
  };

  const getPlantLineData = (location) => {
    const plantLines = {
      Ranjangaon: ["Line 1", "Line 2", "Line 3", "Line 4"],
      Mundhwa: ["Line A", "Line B", "Line C"],
      "Ranjangaon-2": ["Line X", "Line Y", "Line Z"],
      Baramati: ["Line P", "Line Q"],
      Chakan: ["Line M1", "Line M2", "Line M3"],
      Aurangabad: ["Line T1", "Line T2"],
    };

    return plantLines[location] || [];
  };

  // const generatePlantLineChartData = (kpi, line) => {
  //   // Generate slight variations for each line based on main KPI data
  //   const baseData = buildChartData(kpi, cardTabs[kpi.kpiName] || "production");
  //   const lineVariation = Math.random() * 0.15 + 0.9; // 90% to 105% of base

  //   return baseData.map((d) => ({
  //     ...d,
  //     actual: d.actual ? d.actual * lineVariation : null,
  //     prediction: d.prediction ? d.prediction * lineVariation : null,
  //     lineName: line,
  //   }));
  // };

  // Custom label component for chart values
  const renderCustomLabel = (props, theme) => {
    const { x, y, value, index, viewBox } = props;
    if (!value || value === null) return null;

    // Calculate position - show above for first half, below for second half
    const midPoint = (viewBox.width || 400) / 2;
    const showAbove = x < midPoint;
    const offsetY = showAbove ? -12 : 12;

    return (
      <text
        x={x}
        y={y + offsetY}
        fill={theme.primaryText}
        fontSize="10"
        fontWeight="600"
        textAnchor="middle"
        className="transition-all duration-200"
      >
        {typeof value === "number"
          ? value % 1 === 0
            ? value
            : value.toFixed(1)
          : value}
      </text>
    );
  };

  const renderCombinedChart = () => {
    const kpis = getCurrentData();
    if (!kpis || kpis.length === 0) return null;

    const dataLength = kpis[0]?.trend?.length || 5;
    const displayMonths = monthNames.slice(0, dataLength);

    // Calculate monthly totals
    const monthlyTotals = displayMonths.map((m, idx) => {
      let total = 0;
      kpis.forEach((k) => {
        const arr = Array.isArray(k.trend) ? k.trend : [];
        total += arr[idx] ?? 0;
      });
      return total;
    });

    const manualPercentages = {
      0: 20.41,
      1: 21.46,
      2: 20.97,
      3: 20.17,
      4: 21.34,
    };
    const EBITDAActualData = {
      0: 16.82,
      1: 15.61,
      2: 13.1,
      3: 16.26,
      4: 16.54,
    };
    const EBITDABudgetData = {
      0: 18.78,
      1: 18.89,
      2: 18.93,
      3: 19.15,
      4: 19.2,
    };
    const PercentTargetData = { 0: 20, 1: 20, 2: 20, 3: 20, 4: 20 };

    let baseData = displayMonths.map((m, idx) => {
      const total = monthlyTotals[idx];
      let percent = manualPercentages[idx] || 20 + idx * 0.15;
      let EBITDAActual = EBITDAActualData[idx] || null;
      let EBITDABudget = EBITDABudgetData[idx] || null;
      let PercentTarget = PercentTargetData[idx] || null;

      if (idx < dataLength - 2) {
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
      } else if (idx === dataLength - 2) {
        return {
          month: m,
          TotalActual: parseFloat(total.toFixed(2)),
          TotalPredicted: parseFloat(total.toFixed(2)),
          EBITDAActual: EBITDAActual,
          EBITDABudget: EBITDABudget,
          PercentActual: parseFloat(percent.toFixed(2)),
          PercentPredicted: parseFloat(percent.toFixed(2)),
          PercentTarget,
        };
      } else {
        const prevTotal = monthlyTotals[idx - 1];
        const prevPrevTotal = monthlyTotals[idx - 2] || prevTotal;
        const trend = prevTotal > prevPrevTotal ? 1.03 : 0.97;
        const predictedTotal = prevTotal * trend;
        const predictedPercent = percent + 0.3;

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

    // Calculate dynamic target
    const actualTotals = combinedData
      .map((d) => d.TotalActual)
      .filter((v) => v !== null && v !== undefined && v > 0);

    let dynamicTarget = null;
    if (actualTotals.length > 0) {
      const avgActual =
        actualTotals.reduce((a, b) => a + b, 0) / actualTotals.length;
      dynamicTarget = avgActual * 1.05;
    }

    const percentTargets = combinedData
      .map((d) => d.PercentTarget ?? null)
      .filter((v) => v !== null && v !== undefined);

    const avgPercentTarget =
      percentTargets.length > 0
        ? (
            percentTargets.reduce((a, b) => a + b, 0) / percentTargets.length
          ).toFixed(2)
        : 20;

    return (
      <div className="mb-6">
        {/* Theme selector - keep existing code */}
        <div className="fixed top-4 right-4 z-50">
          <div className="relative" ref={themeSelectorRef}>
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className={`p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Palette className="w-6 h-6 relative z-10" />
              <div
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium ${currentTheme.cardBg} ${currentTheme.border} border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none`}
              >
                {currentTheme.name}
              </div>
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
          <div className="fixed top-4 right-20 z-50">
            <button
              onClick={() => setShowManualEntry(true)}
              className={`px-4 py-2 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group flex items-center gap-2`}
            >
              <Edit className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Two side-by-side charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* LEFT CHART - Manufacturing Cost with Interactive Dots */}
          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-sm font-bold ${currentTheme.primaryText}`}>
                Manufacturing Cost
              </h3>
              <div className="flex gap-2 items-center">
                {/* Existing tonnage/percentage tabs */}
                {["tonnage", "percentage"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGraphTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeGraphTab === tab
                        ? `${currentTheme.buttonBg} ${currentTheme.primaryText} font-bold`
                        : selectedTheme === "neon" ||
                          selectedTheme === "midnight"
                        ? `bg-gray-800 ${currentTheme.secondaryText} hover:bg-gray-700`
                        : `bg-gray-100 ${currentTheme.secondaryText} hover:bg-gray-200`
                    }`}
                  >
                    {tab === "tonnage" ? "Cost/Ton" : "Production %"}
                  </button>
                ))}

                {/* NEW: Values Toggle Button */}
                <button
                  onClick={() => setShowCombinedValues(!showCombinedValues)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                    showCombinedValues
                      ? `bg-gradient-to-r ${currentTheme.accentGradient} text-white font-bold shadow-md`
                      : selectedTheme === "neon" || selectedTheme === "midnight"
                      ? `bg-gray-800 ${currentTheme.secondaryText} hover:bg-gray-700`
                      : `bg-gray-100 ${currentTheme.secondaryText} hover:bg-gray-200`
                  }`}
                  title={showCombinedValues ? "Hide Values" : "Show Values"}
                >
                  {showCombinedValues ? (
                    <>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Values
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                      Values
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={combinedData}
                  margin={{ top: 20, right: 50, left: 10, bottom: 10 }}
                >
                  <CartesianGrid stroke={currentTheme.gridColor} />
                  <XAxis
                    dataKey="month"
                    tick={{
                      fontSize: 12,
                      fill: currentTheme.axisTextColor || "#1f2937",
                    }}
                  />
                  <YAxis
                    tick={{
                      fontSize: 10,
                      fill: currentTheme.axisTextColor || "#1f2937",
                    }}
                    label={{
                      value:
                        activeGraphTab === "tonnage"
                          ? "Manufacturing Cost (₹)"
                          : "% of Production",
                      offset: -5,
                      style: { fontSize: 11, fontWeight: 500 },
                      angle: -90,
                      position: "insideLeft",
                      fill: currentTheme.axisTextColor || "#1f2937",
                    }}
                  />
                  <Tooltip content={<CustomTooltip theme={currentTheme} />} />
                  <Legend
                    verticalAlign="top"
                    height={30}
                    wrapperStyle={{ fontSize: 13, fontWeight: 500 }}
                    iconType="line"
                  />

                  <ReferenceLine
                    x={displayMonths[dataLength - 2]}
                    stroke={currentTheme.chartColors.predictedLine}
                    label={{
                      value: "Predicted →",
                      position: "insideTopRight",
                      fontSize: 11,
                      fill: currentTheme.primaryText,
                    }}
                  />

                  {/* TONNAGE VIEW */}
                  {activeGraphTab === "tonnage" && (
                    <>
                      {dynamicTarget && dynamicTarget > 0 && (
                        <ReferenceLine
                          y={dynamicTarget}
                          stroke={currentTheme.chartColors.targetLine}
                          strokeWidth={2}
                          label={{
                            value: `Target: ₹${Math.round(
                              dynamicTarget
                            ).toLocaleString()}`,
                            position: "right",
                            fill: currentTheme.chartColors.targetLine,
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        />
                      )}
                      {/* Actual Cost Line with Interactive Dot */}
                      <Line
                        type="monotone"
                        dataKey="TotalActual"
                        stroke={currentTheme.chartColors.actualLine}
                        strokeWidth={2}
                        name="Actual Cost"
                        connectNulls={false}
                        label={
                          showCombinedValues
                            ? (props) => renderCustomLabel(props, currentTheme)
                            : false
                        }
                        dot={(props) => {
                          const { cx, cy, payload, index } = props;
                          if (payload?.TotalActual == null) return null;

                          const isCurrentPeriod =
                            index === combinedCurrentPeriodIndex;
                          const monthTarget = dynamicTarget || 0;
                          const dotColor =
                            payload.TotalActual > monthTarget
                              ? "#dc2626"
                              : "#16a34a";

                          if (isCurrentPeriod) {
                            return (
                              <g>
                                {/* Interactive outer circle - SAME AS INDIVIDUAL CHART */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={12}
                                  fill={dotColor}
                                  opacity={0.25}
                                  style={{
                                    cursor: "pointer",
                                    pointerEvents: "auto",
                                  }}
                                  className="transition-opacity duration-200 hover:opacity-40"
                                  onMouseDown={(e) => {
                                    e.stopPropagation();
                                    const startX = e.clientX;
                                    const startY = e.clientY;
                                    const startTime = Date.now();
                                    let hasMoved = false;

                                    const circleElement = e.currentTarget;
                                    const svgElement =
                                      circleElement.closest("svg");
                                    const svgRect =
                                      svgElement?.getBoundingClientRect();

                                    const chartWidth = svgRect?.width || 0;
                                    const pointSpacing =
                                      chartWidth / (combinedData.length - 1);

                                    const handleMouseMove = (moveEvent) => {
                                      const deltaX = moveEvent.clientX - startX;
                                      const deltaY = moveEvent.clientY - startY;
                                      const distance = Math.sqrt(
                                        deltaX * deltaX + deltaY * deltaY
                                      );

                                      if (
                                        distance > 15 &&
                                        Date.now() - startTime > 100
                                      ) {
                                        hasMoved = true;

                                        if (circleElement) {
                                          circleElement.style.cursor =
                                            "grabbing";
                                        }

                                        const indexChange = Math.round(
                                          deltaX / pointSpacing
                                        );
                                        const newIndex = Math.max(
                                          0,
                                          Math.min(
                                            combinedData.length - 2,
                                            index + indexChange
                                          )
                                        );
                                        setCombinedCurrentPeriodIndex(newIndex);
                                      }
                                    };

                                    const handleMouseUp = () => {
                                      document.removeEventListener(
                                        "mousemove",
                                        handleMouseMove
                                      );
                                      document.removeEventListener(
                                        "mouseup",
                                        handleMouseUp
                                      );

                                      if (circleElement) {
                                        circleElement.style.cursor = "pointer";
                                      }

                                      const clickDuration =
                                        Date.now() - startTime;

                                      if (
                                        !hasMoved &&
                                        clickDuration < 250 &&
                                        svgRect
                                      ) {
                                        setChartModalData({
                                          ...payload,
                                          kpiName: "Manufacturing Cost",
                                        });
                                        setChartModalPosition({
                                          x: svgRect.left + cx,
                                          y: svgRect.top + cy - 150,
                                        });
                                      }
                                    };

                                    document.addEventListener(
                                      "mousemove",
                                      handleMouseMove
                                    );
                                    document.addEventListener(
                                      "mouseup",
                                      handleMouseUp
                                    );
                                  }}
                                />

                                {/* Inner visible dot - SAME AS INDIVIDUAL CHART */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={5}
                                  fill={dotColor}
                                  stroke="white"
                                  strokeWidth={2}
                                  style={{ pointerEvents: "none" }}
                                />
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
                              strokeWidth={2}
                            />
                          );
                        }}
                      />
                      {/* Predicted Cost Line */}
                      {/* <Line
                        type="monotone"
                        dataKey="TotalPredicted"
                        stroke={currentTheme.chartColors.predictedLine}
                        strokeWidth={2}
                        name="Predicted Cost"
                        connectNulls={false}
                        dot={(props) => {
                          const { cx, cy, payload } = props;
                          if (payload.TotalPredicted === null) return null;

                          const monthTarget = dynamicTarget || 0;
                          const dotColor =
                            payload.TotalPredicted > monthTarget
                              ? "#dc2626"
                              : "#16a34a";

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
                      /> */}
                      <Line
                        type="monotone"
                        dataKey="TotalPredicted"
                        stroke={currentTheme.chartColors.predictedLine}
                        strokeWidth={2}
                        name="Predicted Cost"
                        connectNulls={false}
                        label={
                          showCombinedValues
                            ? (props) => renderCustomLabel(props, currentTheme)
                            : false
                        }
                        dot={(props) => {
                          const { cx, cy, payload } = props;
                          if (payload.TotalPredicted === null) return null;
                          const monthTarget = dynamicTarget || 0;
                          const dotColor =
                            payload.TotalPredicted > monthTarget
                              ? "#dc2626"
                              : "#16a34a";
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
                      />{" "}
                    </>
                  )}

                  {/* PERCENTAGE VIEW */}
                  {activeGraphTab === "percentage" && (
                    <>
                      {avgPercentTarget && (
                        <ReferenceLine
                          y={parseFloat(avgPercentTarget)}
                          stroke={currentTheme.chartColors.targetLine}
                          strokeWidth={2}
                          label={{
                            value: `Target: ${avgPercentTarget}%`,
                            position: "right",
                            fill: currentTheme.chartColors.targetLine,
                            fontSize: 12,
                            fontWeight: "bold",
                          }}
                        />
                      )}

                      {/* Actual Percentage Line with Interactive Dot */}
                      <Line
                        type="monotone"
                        dataKey="PercentActual"
                        stroke={currentTheme.chartColors.percentActual}
                        strokeWidth={2}
                        name="Actual %"
                        connectNulls={false}
                        label={
                          showCombinedValues
                            ? (props) => renderCustomLabel(props, currentTheme)
                            : false
                        }
                        dot={(props) => {
                          const { cx, cy, payload, index } = props;
                          if (payload?.PercentActual == null) return null;

                          const isCurrentPeriod =
                            index === combinedCurrentPeriodIndex;
                          const monthTarget = parseFloat(avgPercentTarget) || 0;
                          const dotColor =
                            payload.PercentActual > monthTarget
                              ? "#dc2626"
                              : "#16a34a";

                          if (isCurrentPeriod) {
                            return (
                              <g>
                                {/* Interactive outer circle - SAME AS INDIVIDUAL CHART */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={12}
                                  fill={dotColor}
                                  opacity={0.25}
                                  style={{
                                    cursor: "pointer",
                                    pointerEvents: "auto",
                                  }}
                                  className="transition-opacity duration-200 hover:opacity-40"
                                  onMouseDown={(e) => {
                                    e.stopPropagation();
                                    const startX = e.clientX;
                                    const startY = e.clientY;
                                    const startTime = Date.now();
                                    let hasMoved = false;

                                    const circleElement = e.currentTarget;
                                    const svgElement =
                                      circleElement.closest("svg");
                                    const svgRect =
                                      svgElement?.getBoundingClientRect();

                                    const chartWidth = svgRect?.width || 0;
                                    const pointSpacing =
                                      chartWidth / (combinedData.length - 1);

                                    const handleMouseMove = (moveEvent) => {
                                      const deltaX = moveEvent.clientX - startX;
                                      const deltaY = moveEvent.clientY - startY;
                                      const distance = Math.sqrt(
                                        deltaX * deltaX + deltaY * deltaY
                                      );

                                      if (
                                        distance > 15 &&
                                        Date.now() - startTime > 100
                                      ) {
                                        hasMoved = true;

                                        if (circleElement) {
                                          circleElement.style.cursor =
                                            "grabbing";
                                        }

                                        const indexChange = Math.round(
                                          deltaX / pointSpacing
                                        );
                                        const newIndex = Math.max(
                                          0,
                                          Math.min(
                                            combinedData.length - 2,
                                            index + indexChange
                                          )
                                        );
                                        setCombinedCurrentPeriodIndex(newIndex);
                                      }
                                    };

                                    const handleMouseUp = () => {
                                      document.removeEventListener(
                                        "mousemove",
                                        handleMouseMove
                                      );
                                      document.removeEventListener(
                                        "mouseup",
                                        handleMouseUp
                                      );

                                      if (circleElement) {
                                        circleElement.style.cursor = "pointer";
                                      }

                                      const clickDuration =
                                        Date.now() - startTime;

                                      if (
                                        !hasMoved &&
                                        clickDuration < 250 &&
                                        svgRect
                                      ) {
                                        setChartModalData({
                                          ...payload,
                                          kpiName: "Production Percentage",
                                        });
                                        setChartModalPosition({
                                          x: svgRect.left + cx,
                                          y: svgRect.top + cy - 150,
                                        });
                                      }
                                    };

                                    document.addEventListener(
                                      "mousemove",
                                      handleMouseMove
                                    );
                                    document.addEventListener(
                                      "mouseup",
                                      handleMouseUp
                                    );
                                  }}
                                />

                                {/* Inner visible dot - SAME AS INDIVIDUAL CHART */}
                                <circle
                                  cx={cx}
                                  cy={cy}
                                  r={5}
                                  fill={dotColor}
                                  stroke="white"
                                  strokeWidth={2}
                                  style={{ pointerEvents: "none" }}
                                />
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
                              strokeWidth={2}
                            />
                          );
                        }}
                      />

                      {/* Predicted Percentage Line */}
                      <Line
                        type="monotone"
                        dataKey="PercentPredicted"
                        stroke={currentTheme.chartColors.percentPredicted}
                        strokeWidth={2}
                        strokeDasharray="6 4"
                        name="Predicted %"
                        connectNulls={false}
                        label={
                          showCombinedValues
                            ? (props) => renderCustomLabel(props, currentTheme)
                            : false
                        }
                        dot={(props) => {
                          const { cx, cy, payload } = props;
                          if (payload.PercentPredicted === null) return null;

                          const monthTarget = parseFloat(avgPercentTarget) || 0;
                          const dotColor =
                            payload.PercentPredicted > monthTarget
                              ? "#dc2626"
                              : "#16a34a";

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
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT CHART - EBITDA (No Interactive Dots) */}
          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-sm font-bold ${currentTheme.primaryText}`}>
                EBITDA Performance
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: currentTheme.chartColors.ebitdaActual,
                    }}
                  ></div>
                  <span className={`text-xs ${currentTheme.secondaryText}`}>
                    Actual
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: currentTheme.chartColors.ebitdaBudget,
                    }}
                  ></div>
                  <span className={`text-xs ${currentTheme.secondaryText}`}>
                    Budget
                  </span>
                </div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={combinedData}
                  margin={{ top: 20, right: 50, left: 10, bottom: 10 }}
                >
                  <CartesianGrid stroke={currentTheme.gridColor} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: currentTheme.primaryText }}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: currentTheme.primaryText }}
                    label={{
                      value: "EBITDA %",
                      offset: -5,
                      style: { fontSize: 11, fontWeight: 500 },
                      angle: -90,
                      position: "insideLeft",
                      fill: currentTheme.primaryText,
                    }}
                  />
                  <Tooltip content={<CustomTooltip theme={currentTheme} />} />
                  <Legend
                    verticalAlign="top"
                    height={30}
                    wrapperStyle={{ fontSize: 13, fontWeight: 500 }}
                    iconType="line"
                  />

                  <ReferenceLine
                    x={displayMonths[dataLength - 2]}
                    stroke={currentTheme.chartColors.predictedLine}
                    label={{
                      value: "Predicted →",
                      position: "insideTopRight",
                      fontSize: 11,
                      fill: currentTheme.primaryText,
                    }}
                  />

                  {/* EBITDA Lines - Regular dots, no interaction */}
                  <Line
                    type="monotone"
                    dataKey="EBITDABudget"
                    stroke={currentTheme.chartColors.ebitdaBudget}
                    strokeWidth={2}
                    name="EBITDA Budget %"
                    label={
                      showCombinedValues
                        ? (props) => renderCustomLabel(props, currentTheme)
                        : false
                    }
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="EBITDAActual"
                    stroke={currentTheme.chartColors.ebitdaActual}
                    strokeWidth={2}
                    name="EBITDA Actual %"
                    label={
                      showCombinedValues
                        ? (props) => renderCustomLabel(props, currentTheme)
                        : false
                    }
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCardsView = () => {
    const data = getCurrentData();

    if (!data || data.length === 0) {
      return (
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {data.map((kpi, idx) => {
              const IconComponent = iconMap[kpi.kpiName] || Package;
              // const currentCardTab = cardTabs[kpi.kpiName] || "production";

              // Pass the tab type to buildChartData
              // const chartData = buildChartData(kpi, currentCardTab);
              const chartData = buildChartData(kpi, globalTabView);

              const targetNums = chartData
                .map((d) => d.target ?? d.targetForCheck ?? null)
                .filter((v) => v !== null && v !== undefined && !isNaN(v));

              const avgTarget =
                targetNums.length > 0
                  ? Math.round(
                      targetNums.reduce((a, b) => a + b, 0) / targetNums.length
                    )
                  : 0; // fallback so line always shows

              const thisCardPeriodIndex =
                cardCurrentPeriodIndex[kpi.kpiName] ?? 4;

              return (
                <div
                  key={`${kpi.kpiName}-${idx}`}
                  className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl ${currentTheme.shadow} ${currentTheme.hoverGlow} transition-all duration-300 p-4 ${currentTheme.border} border cursor-pointer group relative`}
                  onClick={() => {
                    setExpandedCards((prev) => ({
                      ...prev,
                      [kpi.kpiName]: !prev[kpi.kpiName],
                    }));
                  }}
                >
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
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPlantLines((prev) => !prev);
                            setPlantLineData((prev) => ({
                              ...prev,
                              [kpi.kpiName]: !prev[kpi.kpiName],
                            }));
                          }}
                          className={`text-[9px] ${currentTheme.secondaryText} hover:${currentTheme.primaryText} flex items-center gap-1 mt-0.5 transition-colors`}
                        >
                          <Factory className="w-2.5 h-2.5" />
                          {plantLineData[kpi.kpiName] ? "Hide" : "Show"} Lines
                        </button>
                        <div
                          className={`text-[10px] ${currentTheme.mutedText} flex items-center gap-1 mt-0.5`}
                        ></div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={`flex items-center gap-1 text-sm font-extrabold transition-all duration-300`}
                      >
                        {(() => {
                          // Check if monthly_budget exists
                          if (
                            !kpi.monthly_budget ||
                            kpi.monthly_budget.length === 0
                          ) {
                            const actual = kpi.actual_per_tonne;
                            const budget = kpi.budget_per_tonne;
                            const difference = actual - budget;
                            const variance = (difference / budget) * 100;
                            const isOverBudget = actual > budget;

                            return (
                              <>
                                {isOverBudget ? (
                                  <>
                                    <ArrowUp className="w-3 h-3 text-red-700" />
                                    <span className="text-base font-black tracking-wide text-red-700">
                                      {Math.abs(variance).toFixed(1)}%
                                    </span>
                                    <span className="text-xs text-red-700">
                                      !
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <ArrowDown className="w-3 h-3 text-green-700" />
                                    <span className="text-base font-black tracking-wide text-green-700">
                                      {Math.abs(variance).toFixed(1)}%
                                    </span>
                                    <Check className="w-3 h-3 text-green-700" />
                                  </>
                                )}
                              </>
                            );
                          }

                          const lastActual =
                            kpi.monthly_costs[kpi.monthly_costs.length - 1];
                          const lastBudget =
                            kpi.monthly_budget[kpi.monthly_budget.length - 1];
                          const difference = lastActual - lastBudget;
                          const variance = (difference / lastBudget) * 100;
                          const isOverBudget = lastActual > lastBudget;

                          if (isOverBudget) {
                            console.log(
                              `  Spent ₹${difference.toFixed(
                                2
                              )} MORE than budget (OVERSPENDING)`
                            );
                          } else {
                            console.log(
                              `  Saved ₹${Math.abs(difference).toFixed(
                                2
                              )} from budget (SAVING)`
                            );
                          }

                          return (
                            <>
                              {isOverBudget ? (
                                <>
                                  <ArrowUp className="w-3 h-3 text-red-700" />
                                  <span className="text-base font-black tracking-wide text-red-700">
                                    {Math.abs(variance).toFixed(1)}%
                                  </span>
                                  <span className="text-xs text-red-700">
                                    !
                                  </span>
                                </>
                              ) : (
                                <>
                                  <ArrowDown className="w-3 h-3 text-green-700" />
                                  <span className="text-base font-black tracking-wide text-green-700">
                                    {Math.abs(variance).toFixed(1)}%
                                  </span>
                                  <Check className="w-3 h-3 text-green-700" />
                                </>
                              )}
                            </>
                          );
                        })()}
                      </div>
                    </div>

                    {/* ADD THIS - Rejection Badge */}
                    {/* <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div
                        className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${(() => {
                          const rejectionRate = 2.5 + Math.random() * 3; // Random 2.5-5.5%
                          return rejectionRate > 4
                            ? "bg-red-100 border border-red-300"
                            : rejectionRate > 3
                            ? "bg-orange-100 border border-orange-300"
                            : "bg-green-100 border border-green-300";
                        })()}`}
                      >
                        <svg
                          className={`w-2.5 h-2.5 ${(() => {
                            const rejectionRate = 2.5 + Math.random() * 3;
                            return rejectionRate > 4
                              ? "text-red-600"
                              : rejectionRate > 3
                              ? "text-orange-600"
                              : "text-green-600";
                          })()}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span
                          className={`text-[9px] font-bold ${(() => {
                            const rejectionRate = 2.5 + Math.random() * 3;
                            return rejectionRate > 4
                              ? "text-red-700"
                              : rejectionRate > 3
                              ? "text-orange-700"
                              : "text-green-700";
                          })()}`}
                        >
                          {(2.5 + Math.random() * 3).toFixed(1)}% Rej
                        </span>
                      </div>
                    </div> */}
                  </div>

                  {/* <div className="absolute top-4 right-1 z-10 mr-4">
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
                  </div> */}
                  {/* View Mode Indicator Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className={`px-2 py-1 rounded-full text-[9px] font-bold ${
                        globalTabView === "production"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {globalTabView === "production" ? "PROD" : "SALE"}
                    </div>
                  </div>
                  {!expandedCards[kpi.kpiName] && (
                    <div
                      className="relative h-56 mb-3"
                      onClick={() => {
                        setExpandedCards((prev) => ({
                          ...prev,
                          [kpi.kpiName]: !prev[kpi.kpiName], // toggle same card
                        }));
                      }}
                    >
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
                              fill: currentTheme.axisTextColor || "#1f2937",
                            }}
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis
                            tick={{
                              fontSize: 11,
                              fill: currentTheme.axisTextColor || "#1f2937",
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

                              {avgTarget > 0 && (
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

                              {/* FIXED: Tonnage Actual Line Dots - Individual Month Comparison */}
                              <Line
                                type="monotone"
                                dataKey="actual"
                                stroke={currentTheme.chartColors.actualLine}
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                // dot={(props) => {
                                //   const { cx, cy, payload, index } = props;
                                //   if (payload?.actual == null) return null;

                                //   // Get THIS month's target value
                                //   const monthTarget =
                                //     payload.target || avgTarget || 0;

                                //   // DETAILED Debug log
                                //   if (index < 3) {
                                //     // Log first 3 months only
                                //   }

                                //   // INDIVIDUAL COMPARISON: Red only if THIS month's actual > target
                                //   const dotColor =
                                //     payload.actual > monthTarget
                                //       ? "#dc2626" // Red (over target this month)
                                //       : "#16a34a"; // Green (under target this month)

                                //   const isLastActual =
                                //     payload.isHistorical &&
                                //     (!chartData[index + 1] ||
                                //       chartData[index + 1].isHistorical ===
                                //         false);

                                //   if (isLastActual) {
                                //     return (
                                //       <g>
                                //         <circle
                                //           cx={cx}
                                //           cy={cy}
                                //           r={5}
                                //           fill={dotColor}
                                //           stroke="white"
                                //           strokeWidth={2}
                                //         />
                                //         <circle
                                //           cx={cx}
                                //           cy={cy}
                                //           r={12}
                                //           fill={dotColor}
                                //           opacity={0.25}
                                //           style={{
                                //             cursor: "pointer",
                                //             pointerEvents: "auto",
                                //           }}
                                //           onClick={(e) => {
                                //             e.stopPropagation();
                                //             const rect = e.currentTarget
                                //               .closest("svg")
                                //               .getBoundingClientRect();
                                //             setChartModalData({
                                //               ...payload,
                                //               kpiName: kpi.kpiName,
                                //             });
                                //             setChartModalPosition({
                                //               x: rect.left + cx,
                                //               y: rect.top + cy - 150,
                                //             });
                                //           }}
                                //         />
                                //       </g>
                                //     );
                                //   }

                                //   return (
                                //     <circle
                                //       cx={cx}
                                //       cy={cy}
                                //       r={4}
                                //       fill={dotColor}
                                //       stroke="white"
                                //       strokeWidth={2}
                                //     />
                                //   );
                                // }}
                                dot={(props) => {
                                  const { cx, cy, payload, index } = props;
                                  if (payload?.actual == null) return null;

                                  const monthTarget =
                                    payload.target || avgTarget || 0;
                                  const dotColor =
                                    payload.actual > monthTarget
                                      ? "#dc2626"
                                      : "#16a34a";
                                  const isCurrentPeriod =
                                    index === thisCardPeriodIndex;

                                  if (isCurrentPeriod) {
                                    return (
                                      <g>
                                        {/* ✅ INTERACTIVE OUTER CIRCLE - Easy to find */}
                                        <circle
                                          cx={cx}
                                          cy={cy}
                                          r={12} // Large hit area
                                          fill={dotColor}
                                          opacity={0.25}
                                          style={{
                                            cursor: "pointer",
                                            pointerEvents: "auto", // ✅ Make it interactive
                                          }}
                                          className="transition-opacity duration-200 hover:opacity-40" // ✅ Hover feedback
                                          onMouseDown={(e) => {
                                            e.stopPropagation();
                                            const startX = e.clientX;
                                            const startY = e.clientY;
                                            const startTime = Date.now();
                                            let hasMoved = false;

                                            const circleElement =
                                              e.currentTarget;
                                            const svgElement =
                                              circleElement.closest("svg");
                                            const svgRect =
                                              svgElement?.getBoundingClientRect();

                                            const chartWidth =
                                              svgRect?.width || 0;
                                            const pointSpacing =
                                              chartWidth /
                                              (chartData.length - 1);

                                            const handleMouseMove = (
                                              moveEvent
                                            ) => {
                                              const deltaX =
                                                moveEvent.clientX - startX;
                                              const deltaY =
                                                moveEvent.clientY - startY;
                                              const distance = Math.sqrt(
                                                deltaX * deltaX +
                                                  deltaY * deltaY
                                              );

                                              if (
                                                distance > 15 &&
                                                Date.now() - startTime > 100
                                              ) {
                                                hasMoved = true;

                                                if (circleElement) {
                                                  circleElement.style.cursor =
                                                    "grabbing";
                                                }

                                                const indexChange = Math.round(
                                                  deltaX / pointSpacing
                                                );
                                                const newIndex = Math.max(
                                                  0,
                                                  Math.min(
                                                    chartData.length - 2,
                                                    index + indexChange
                                                  )
                                                );
                                                setCardCurrentPeriodIndex(
                                                  (prev) => ({
                                                    ...prev,
                                                    [kpi.kpiName]: newIndex,
                                                  })
                                                );
                                              }
                                            };

                                            const handleMouseUp = () => {
                                              document.removeEventListener(
                                                "mousemove",
                                                handleMouseMove
                                              );
                                              document.removeEventListener(
                                                "mouseup",
                                                handleMouseUp
                                              );

                                              if (circleElement) {
                                                circleElement.style.cursor =
                                                  "pointer";
                                              }

                                              const clickDuration =
                                                Date.now() - startTime;

                                              if (
                                                !hasMoved &&
                                                clickDuration < 250 &&
                                                svgRect
                                              ) {
                                                setChartModalData({
                                                  ...payload,
                                                  kpiName: kpi.kpiName,
                                                });
                                                setChartModalPosition({
                                                  x: svgRect.left + cx,
                                                  y: svgRect.top + cy - 150,
                                                });
                                              }
                                            };

                                            document.addEventListener(
                                              "mousemove",
                                              handleMouseMove
                                            );
                                            document.addEventListener(
                                              "mouseup",
                                              handleMouseUp
                                            );
                                          }}
                                        />

                                        {/* Inner circle - Visual indicator */}
                                        <circle
                                          cx={cx}
                                          cy={cy}
                                          r={5}
                                          fill={dotColor}
                                          stroke="white"
                                          strokeWidth={2}
                                          style={{ pointerEvents: "none" }} // ✅ Not interactive
                                        />
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
                                      strokeWidth={2}
                                    />
                                  );
                                }}
                              />

                              {/* Target Line sirf historical data ke liye show karo */}
                              {chartData.some(
                                (d) => d.isHistorical && d.target
                              ) && (
                                <Line
                                  type="monotone"
                                  dataKey="target"
                                  stroke="#fbbf24"
                                  strokeWidth={1}
                                  dot={false}
                                  activeDot={{ r: 1, fill: "#fbbf24" }}
                                />
                              )}

                              {/* FIXED: Tonnage Predicted Line Dots - Individual Month Comparison */}
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

                                  // Get THIS month's target value
                                  const monthTarget =
                                    payload.target ||
                                    payload.targetForCheck ||
                                    avgTarget ||
                                    0;

                                  // Debug log
                                  console.log(
                                    `${kpi.kpiName} PREDICTION - ${payload.month}: prediction=${payload.prediction}, target=${monthTarget}`
                                  );

                                  // INDIVIDUAL COMPARISON: Red only if THIS month's prediction > target
                                  const dotColor =
                                    payload.prediction > monthTarget
                                      ? "#dc2626" // Red (over target)
                                      : "#16a34a"; // Green (under target)

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

                              {/* FIXED: Percentage Actual Line Dots - Individual Month Comparison */}
                              {/* <Line
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

                                  // Get THIS month's target
                                  const monthTarget =
                                    payload.productionTarget || 0;

                                  // Debug log
                                  if (index === 0) {
                                    // console.log(
                                    //   `${kpi.kpiName} % - ${payload.month}: actual=${payload.productionPercent}%, target=${monthTarget}%`
                                    // );
                                  }

                                  const dotColor =
                                    payload.productionPercent > monthTarget
                                      ? "#dc2626" // Red (higher % = worse)
                                      : "#16a34a"; // Green (lower % = better)

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
                              /> */}

                              <Line
                                type="monotone"
                                dataKey="productionPercent"
                                stroke={currentTheme.chartColors.percentActual}
                                strokeWidth={1}
                                connectNulls={false}
                                name="Actual %"
                                dot={(props) => {
                                  const { cx, cy, index, payload } = props;
                                  if (payload.productionPercent === null)
                                    return null;

                                  const monthTarget =
                                    payload.productionTarget || 0;
                                  const dotColor =
                                    payload.productionPercent > monthTarget
                                      ? "#dc2626"
                                      : "#16a34a";

                                  // ✅ Use this card's specific period index
                                  const isCurrentPeriod =
                                    index === thisCardPeriodIndex;

                                  if (isCurrentPeriod) {
                                    return (
                                      <g>
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
                                          className="transition-opacity duration-200 hover:opacity-40"
                                          onMouseDown={(e) => {
                                            e.stopPropagation();
                                            const startX = e.clientX;
                                            const startTime = Date.now();
                                            let hasMoved = false;

                                            const circleElement =
                                              e.currentTarget;
                                            const svgElement =
                                              circleElement.closest("svg");
                                            const svgRect =
                                              svgElement?.getBoundingClientRect();

                                            const chartWidth =
                                              svgRect?.width || 0;
                                            const pointSpacing =
                                              chartWidth /
                                              (chartData.length - 1);

                                            const handleMouseMove = (
                                              moveEvent
                                            ) => {
                                              const deltaX =
                                                moveEvent.clientX - startX;
                                              const distance = Math.abs(deltaX);

                                              if (
                                                distance > 15 &&
                                                Date.now() - startTime > 100
                                              ) {
                                                hasMoved = true;
                                                if (circleElement)
                                                  circleElement.style.cursor =
                                                    "grabbing";

                                                const indexChange = Math.round(
                                                  deltaX / pointSpacing
                                                );
                                                const newIndex = Math.max(
                                                  0,
                                                  Math.min(
                                                    chartData.length - 2,
                                                    index + indexChange
                                                  )
                                                );

                                                // ✅ Update THIS card's index only
                                                setCardCurrentPeriodIndex(
                                                  (prev) => ({
                                                    ...prev,
                                                    [kpi.kpiName]: newIndex,
                                                  })
                                                );
                                              }
                                            };

                                            const handleMouseUp = () => {
                                              document.removeEventListener(
                                                "mousemove",
                                                handleMouseMove
                                              );
                                              document.removeEventListener(
                                                "mouseup",
                                                handleMouseUp
                                              );
                                              if (circleElement)
                                                circleElement.style.cursor =
                                                  "pointer";

                                              if (
                                                !hasMoved &&
                                                Date.now() - startTime < 250 &&
                                                svgRect
                                              ) {
                                                setChartModalData({
                                                  ...payload,
                                                  kpiName: kpi.kpiName,
                                                });
                                                setChartModalPosition({
                                                  x: svgRect.left + cx,
                                                  y: svgRect.top + cy - 150,
                                                });
                                              }
                                            };

                                            document.addEventListener(
                                              "mousemove",
                                              handleMouseMove
                                            );
                                            document.addEventListener(
                                              "mouseup",
                                              handleMouseUp
                                            );
                                          }}
                                        />
                                        <circle
                                          cx={cx}
                                          cy={cy}
                                          r={2.5}
                                          fill={dotColor}
                                          stroke="white"
                                          strokeWidth={1}
                                          style={{ pointerEvents: "none" }}
                                        />
                                        <text
                                          x={cx}
                                          y={cy}
                                          fill="white"
                                          fontSize="14"
                                          fontWeight="bold"
                                          textAnchor="middle"
                                          dominantBaseline="middle"
                                          style={{ pointerEvents: "none" }}
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

                              {/* FIXED: Percentage Predicted Line Dots - Individual Month Comparison */}
                              <Line
                                type="monotone"
                                dataKey="productionPercentPredicted"
                                stroke={
                                  currentTheme.chartColors.percentPredicted
                                }
                                strokeWidth={1}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray="5 5"
                                name="Predicted %"
                                connectNulls={false}
                                dot={(props) => {
                                  const { cx, cy, payload } = props;
                                  if (
                                    payload.productionPercentPredicted === null
                                  )
                                    return null;

                                  // Get THIS month's target
                                  const monthTarget =
                                    payload.productionTargetForCheck || 0;

                                  const dotColor =
                                    payload.productionPercentPredicted >
                                    monthTarget
                                      ? "#dc2626" // Red (higher % = worse)
                                      : "#16a34a"; // Green (lower % = better)

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
                                  <div>
                                    <p className="font-semibold mb-1 text-green-600">
                                      Completed:
                                    </p>
                                    <ul className="ml-3 space-y-1">
                                      <li className="flex items-start gap-1">
                                        <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span className="line-through text-gray-500">
                                          Budget review for{" "}
                                          {chartModalData.month}
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

                                  <div>
                                    <p className="font-semibold mb-1 text-orange-600">
                                      Remaining:
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
                  )}

                  {/* Expanded drill-down view - COMPACT */}
                  {/* Expanded drill-down view - COMPACT */}
                  {expandedCards[kpi.kpiName] && (
                    <div
                      className="mt-3 space-y-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                        <h4
                          className={`text-xs font-bold ${currentTheme.primaryText}`}
                        >
                          Cost Breakdown
                        </h4>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCards((prev) => ({
                              ...prev,
                              [kpi.kpiName]: false,
                            }));
                          }}
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${currentTheme.buttonBg}`}
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                        {getKpiDrillDownData(kpi.kpiName)
                          .slice(0, 6)
                          .map((item, subIdx) => (
                            <div
                              key={subIdx}
                              className={`${currentTheme.cardBg} rounded-lg p-2 ${currentTheme.border} border`}
                            >
                              {/* Header with Cost */}
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 min-w-0">
                                  <h5
                                    className={`text-[10px] font-bold ${currentTheme.primaryText} truncate`}
                                  >
                                    {item.name}
                                  </h5>
                                  <span
                                    className={`text-[8px] ${currentTheme.secondaryText}`}
                                  >
                                    {item.percentage}% of total
                                  </span>
                                </div>
                                <div
                                  className={`text-[10px] font-bold ${currentTheme.primaryText} ml-1`}
                                >
                                  ₹{item.cost}
                                </div>
                              </div>

                              {/* Monthly Breakdown - Compact Grid */}
                              <div className="mb-2 bg-gray-50 rounded p-1.5">
                                {/* Month Headers */}
                                <div className="grid grid-cols-5 gap-0.5 mb-1">
                                  {item.months?.slice(0, 5).map((month, i) => (
                                    <div
                                      key={i}
                                      className="text-center text-[7px] font-semibold text-gray-600"
                                    >
                                      {month}
                                    </div>
                                  ))}
                                </div>

                                {/* Actual Values */}
                                <div className="grid grid-cols-5 gap-0.5 mb-0.5">
                                  {item.monthlyActual
                                    ?.slice(0, 5)
                                    .map((val, i) => (
                                      <div
                                        key={i}
                                        className={`text-center text-[7px] font-bold rounded px-0.5 ${
                                          val > item.monthlyTarget[i]
                                            ? "bg-red-100 text-red-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                      >
                                        {val}
                                      </div>
                                    ))}
                                </div>

                                {/* Target Values */}
                                <div className="grid grid-cols-5 gap-0.5">
                                  {item.monthlyTarget
                                    ?.slice(0, 5)
                                    .map((val, i) => (
                                      <div
                                        key={i}
                                        className="text-center text-[6px] text-gray-500"
                                      >
                                        T:{val}
                                      </div>
                                    ))}
                                </div>
                              </div>

                              {/* Mini sparkline chart */}
                              <div className="h-8">
                                <ResponsiveContainer width="100%" height="100%">
                                  <LineChart
                                    data={item.months
                                      ?.slice(0, 5)
                                      .map((month, i) => ({
                                        month,
                                        actual: item.monthlyActual?.[i],
                                        target: item.monthlyTarget?.[i],
                                      }))}
                                    margin={{
                                      top: 2,
                                      right: 2,
                                      left: 2,
                                      bottom: 2,
                                    }}
                                  >
                                    <Line
                                      type="monotone"
                                      dataKey="target"
                                      stroke="#fbbf24"
                                      strokeWidth={1}
                                      strokeDasharray="2 2"
                                      dot={false}
                                    />
                                    <Line
                                      type="monotone"
                                      dataKey="actual"
                                      stroke={
                                        currentTheme.chartColors.actualLine
                                      }
                                      strokeWidth={1.5}
                                      dot={{ r: 2 }}
                                    />
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>

                              {/* Progress bar */}
                              <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                                <div
                                  className={`h-full bg-gradient-to-r ${currentTheme.accentGradient} rounded-full`}
                                  style={{ width: `${item.percentage}%` }}
                                ></div>
                              </div>

                              {/* Stats Footer */}
                              <div className="mt-1 flex items-center justify-between text-[7px]">
                                <span className={currentTheme.mutedText}>
                                  Avg: ₹
                                  {(
                                    item.monthlyActual?.reduce(
                                      (a, b) => a + b,
                                      0
                                    ) / item.monthlyActual?.length
                                  ).toFixed(2)}
                                </span>
                                <span
                                  className={`font-bold ${
                                    item.cost >
                                    item.monthlyTarget?.[
                                      item.monthlyTarget?.length - 1
                                    ]
                                      ? "text-red-600"
                                      : "text-green-600"
                                  }`}
                                >
                                  {item.cost >
                                  item.monthlyTarget?.[
                                    item.monthlyTarget?.length - 1
                                  ]
                                    ? "▲"
                                    : "▼"}
                                  {Math.abs(
                                    (item.cost /
                                      item.monthlyTarget?.[
                                        item.monthlyTarget?.length - 1
                                      ] -
                                      1) *
                                      100
                                  ).toFixed(1)}
                                  %
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {!expandedCards[kpi.kpiName] && (
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Add before the return statement
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
    
    .animate-slideInRight {
      animation: slideInRight 0.5s ease-out;
    }
    
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto p-4 min-h-screen transition-all duration-500 ${currentTheme.mainBg}`}
    >
      {showDrillDownModal && selectedKpiForDrill && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`${currentTheme.modalBg} rounded-2xl ${currentTheme.shadow} ${currentTheme.border} border w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`p-4 border-b ${currentTheme.border} bg-gradient-to-r ${currentTheme.buttonBg}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDrillDownBack}
                    className={`p-2 rounded-lg hover:bg-white/20 transition-colors ${currentTheme.primaryText}`}
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <div>
                    <h2
                      className={`text-lg font-bold ${currentTheme.primaryText}`}
                    >
                      {drillDownLevel === 1
                        ? `${selectedKpiForDrill.kpiName} - Cost Breakdown`
                        : `${drillDownPath[1]} - Detailed Analysis`}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      {drillDownPath.map((path, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span
                            className={`text-xs ${currentTheme.secondaryText}`}
                          >
                            {path}
                          </span>
                          {idx < drillDownPath.length - 1 && (
                            <ChevronRight className="w-3 h-3" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  // onClick={() => {
                  //   setShowDrillDownModal(false);
                  //   setDrillDownLevel(0);
                  //   setDrillDownPath([]);
                  //   setSelectedKpiForDrill(null);
                  // }}
                  className={`p-2 rounded-lg hover:bg-white/20 transition-colors ${currentTheme.primaryText}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {drillDownLevel === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getKpiDrillDownData(selectedKpiForDrill.kpiName).map(
                    (item, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          handleDrillDownItemClick(
                            item,
                            selectedKpiForDrill.kpiName
                          )
                        }
                        className={`${currentTheme.cardBg} rounded-xl p-4 ${currentTheme.border} border cursor-pointer transition-all duration-200 hover:scale-[1.02] ${currentTheme.hoverGlow} group`}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3
                              className={`text-sm font-bold ${currentTheme.primaryText} mb-1`}
                            >
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs ${currentTheme.secondaryText}`}
                              >
                                {item.percentage}% of total
                              </span>
                            </div>
                          </div>
                          <div className={`text-right`}>
                            <div
                              className={`text-lg font-bold ${currentTheme.primaryText}`}
                            >
                              ₹{item.cost}
                            </div>
                            <div
                              className={`text-xs ${currentTheme.mutedText}`}
                            >
                              per tonne
                            </div>
                          </div>
                        </div>

                        {/* Monthly Breakdown Table */}
                        <div className="mb-3 bg-gray-50 rounded-lg p-2">
                          <div className="grid grid-cols-6 gap-1 text-[9px] font-semibold mb-1">
                            {item.months?.map((month, i) => (
                              <div
                                key={i}
                                className="text-center text-gray-600"
                              >
                                {month}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-6 gap-1 text-[9px] mb-1">
                            {item.monthlyActual?.map((val, i) => (
                              <div
                                key={i}
                                className={`text-center font-bold ${
                                  val > item.monthlyTarget[i]
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                              >
                                ₹{val}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-6 gap-1 text-[9px]">
                            {item.monthlyTarget?.map((val, i) => (
                              <div
                                key={i}
                                className="text-center text-gray-500"
                              >
                                T: {val}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Trend Chart */}
                        <div className="h-16">
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                              data={item.months?.map((month, i) => ({
                                month,
                                actual: item.monthlyActual?.[i],
                                target: item.monthlyTarget?.[i],
                              }))}
                              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                            >
                              <Line
                                type="monotone"
                                dataKey="target"
                                stroke="#fbbf24"
                                strokeWidth={1}
                                strokeDasharray="3 3"
                                dot={false}
                              />
                              <Line
                                type="monotone"
                                dataKey="actual"
                                stroke={currentTheme.chartColors.actualLine}
                                strokeWidth={2}
                                dot={{ r: 3 }}
                              />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </div>

                        {/* Percentage Bar */}
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${currentTheme.accentGradient} transition-all duration-500`}
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="mt-2 flex items-center justify-between text-[10px]">
                          <span className={currentTheme.mutedText}>
                            Avg: ₹
                            {(
                              item.monthlyActual?.reduce((a, b) => a + b, 0) /
                              item.monthlyActual?.length
                            ).toFixed(2)}
                          </span>
                          <span
                            className={`font-semibold ${
                              item.cost >
                              item.monthlyTarget?.[
                                item.monthlyTarget.length - 1
                              ]
                                ? "text-red-600"
                                : "text-green-600"
                            }`}
                          >
                            {item.cost >
                            item.monthlyTarget?.[item.monthlyTarget.length - 1]
                              ? "▲"
                              : "▼"}
                            {Math.abs(
                              (item.cost /
                                item.monthlyTarget?.[
                                  item.monthlyTarget.length - 1
                                ] -
                                1) *
                                100
                            ).toFixed(1)}
                            %
                          </span>
                        </div>

                        <div
                          className={`mt-2 text-xs ${currentTheme.mutedText} flex items-center justify-between`}
                        >
                          <span>Click for detailed analysis</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {drillDownLevel === 2 && (
                <div className="space-y-6">
                  {/* Detailed Analysis */}
                  <div
                    className={`${currentTheme.cardBg} rounded-xl p-6 ${currentTheme.border} border`}
                  >
                    <h3
                      className={`text-lg font-bold ${currentTheme.primaryText} mb-4`}
                    >
                      Cost Trend Analysis
                    </h3>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                          data={
                            getKpiDrillDownData(selectedKpiForDrill.kpiName)
                              .find((item) => item.name === drillDownPath[1])
                              ?.trend.map((val, i) => ({
                                month: monthNames[i],
                                actual: val,
                                budget: val * 0.95,
                              })) || []
                          }
                        >
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke={currentTheme.gridColor}
                          />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip
                            content={<CustomTooltip theme={currentTheme} />}
                          />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="actual"
                            fill={currentTheme.chartColors.actualFill}
                            stroke={currentTheme.chartColors.actualLine}
                            strokeWidth={2}
                            name="Actual Cost"
                          />
                          <Line
                            type="monotone"
                            dataKey="budget"
                            stroke={currentTheme.chartColors.targetLine}
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Target Cost"
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  {/* Action Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      className={`${currentTheme.cardBg} rounded-xl p-6 ${currentTheme.border} border`}
                    >
                      <h3
                        className={`text-sm font-bold ${currentTheme.primaryText} mb-4 flex items-center gap-2`}
                      >
                        <Check className="w-4 h-4 text-green-500" />
                        Completed Actions
                      </h3>
                      <ul className="space-y-2">
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="line-through">
                            Cost analysis completed
                          </span>
                        </li>
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="line-through">
                            Vendor negotiation initiated
                          </span>
                        </li>
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="line-through">
                            Process optimization reviewed
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div
                      className={`${currentTheme.cardBg} rounded-xl p-6 ${currentTheme.border} border`}
                    >
                      <h3
                        className={`text-sm font-bold ${currentTheme.primaryText} mb-4 flex items-center gap-2`}
                      >
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        Pending Actions
                      </h3>
                      <ul className="space-y-2">
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                          <span>Implement cost reduction strategies</span>
                        </li>
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                          <span>Monitor vendor performance</span>
                        </li>
                        <li
                          className={`text-xs ${currentTheme.secondaryText} flex items-start gap-2`}
                        >
                          <div className="w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0" />
                          <span>Update forecasting model</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div
                    className={`${currentTheme.cardBg} rounded-xl p-6 ${currentTheme.border} border`}
                  >
                    <h3
                      className={`text-sm font-bold ${currentTheme.primaryText} mb-4 flex items-center gap-2`}
                    >
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      Key Insights & Recommendations
                    </h3>
                    <div className="space-y-3">
                      <div
                        className={`p-3 rounded-lg bg-blue-50 ${currentTheme.border} border`}
                      >
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p
                              className={`text-xs font-semibold ${currentTheme.primaryText} mb-1`}
                            >
                              Cost Trend
                            </p>
                            <p
                              className={`text-xs ${currentTheme.secondaryText}`}
                            >
                              Costs have increased by 8.5% over the last
                              quarter. Review supplier contracts and consider
                              bulk purchasing options.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-lg bg-green-50 ${currentTheme.border} border`}
                      >
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p
                              className={`text-xs font-semibold ${currentTheme.primaryText} mb-1`}
                            >
                              Opportunity
                            </p>
                            <p
                              className={`text-xs ${currentTheme.secondaryText}`}
                            >
                              Potential 15% savings identified through process
                              optimization and vendor consolidation.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-3 rounded-lg bg-orange-50 ${currentTheme.border} border`}
                      >
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p
                              className={`text-xs font-semibold ${currentTheme.primaryText} mb-1`}
                            >
                              Risk Alert
                            </p>
                            <p
                              className={`text-xs ${currentTheme.secondaryText}`}
                            >
                              Current trajectory will exceed budget by ₹50,000
                              this quarter. Immediate action recommended.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              className={`p-4 border-t ${currentTheme.border} bg-gradient-to-r ${currentTheme.buttonBg}`}
            >
              <div className="flex items-center justify-between">
                <div className={`text-xs ${currentTheme.secondaryText}`}>
                  {drillDownLevel === 1
                    ? `Showing ${
                        getKpiDrillDownData(selectedKpiForDrill.kpiName).length
                      } sub-components`
                    : "Detailed cost analysis"}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleDrillDownBack}
                    className={`px-4 py-2 rounded-lg ${currentTheme.buttonBg} ${currentTheme.primaryText} text-xs font-semibold transition-all hover:scale-105`}
                  >
                    {drillDownLevel > 1 ? "Back" : "Close"}
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${currentTheme.accentGradient} text-white text-xs font-semibold transition-all hover:scale-105 ${currentTheme.shadow}`}
                  >
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2 mb-4">
        {/* Category Selection Buttons - Compact */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedLocation(locationsByCategory.All[0].name);
            }}
            className={`px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md shadow-green-200"
                : "bg-white text-gray-700 border border-gray-200 hover:border-green-400 hover:bg-green-50"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              All Plants
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedCategory === "All"
                    ? "bg-white/20"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {locationsByCategory.All.length}
              </span>
            </div>
          </button>

          <button
            onClick={() => {
              setSelectedCategory("Forging");
              setSelectedLocation(locationsByCategory.Forging[0].name);
            }}
            className={`px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
              selectedCategory === "Forging"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Forging
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedCategory === "Forging"
                    ? "bg-white/20"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {locationsByCategory.Forging.length}
              </span>
            </div>
          </button>

          <button
            onClick={() => {
              setSelectedCategory("Machining");
              setSelectedLocation(locationsByCategory.Machining[0].name);
            }}
            className={`px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ${
              selectedCategory === "Machining"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200"
                : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clipRule="evenodd"
                />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              Machining
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  selectedCategory === "Machining"
                    ? "bg-white/20"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {locationsByCategory.Machining.length}
              </span>
            </div>
          </button>
        </div>

        {/* Location Buttons with Simple Line Arrows */}
        {/* Location Buttons with Simple Line Arrows - HIDE ON "ALL" TAB */}
        {selectedCategory !== "All" && (
          <div className="flex flex-wrap items-center gap-1.5">
            {locationsByCategory[selectedCategory].map((location) => (
              <button
                key={location.code}
                onClick={() => setSelectedLocation(location.name)}
                className={`relative px-2.5 py-1.5 rounded-md transition-all duration-200 font-medium text-xs ${
                  selectedLocation === location.name
                    ? selectedCategory === "Forging"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                      : selectedCategory === "Machining"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                      : "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  {/* Location Icon */}
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {/* Location Code */}
                  <span className="font-semibold">{location.code}</span>

                  {/* Percentage with Simple Line Arrow */}
                  {location.percentage !== undefined && (
                    <span
                      className={`flex items-center gap-0.5 font-semibold text-[10px] ${
                        selectedLocation === location.name
                          ? "text-white"
                          : location.percentage >= 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {/* Simple Up/Down Arrow */}
                      {location.percentage >= 0 ? (
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-2.5 h-2.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                          />
                        </svg>
                      )}
                      {location.percentage >= 0 ? "" : ""}
                      {Math.abs(location.percentage)}%
                    </span>
                  )}

                  {/* Status Badge */}
                  {selectedLocation === location.name && (
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Line Selection - Compact Dropdown */}
        {selectedCategory !== "All" &&
          selectedLocation &&
          linesByLocation[selectedLocation] && (
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`text-[10px] font-medium ${currentTheme.mutedText}`}
              >
                Line:
              </span>

              <select
                value={selectedLine}
                onChange={(e) => setSelectedLine(e.target.value)}
                className={`px-3 py-1.5 pr-8 rounded-md text-xs font-medium border ${currentTheme.border} ${currentTheme.cardBg} ${currentTheme.primaryText} cursor-pointer transition-all hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                style={{
                  // ⬅️ ADD THIS STYLE OBJECT
                  color:
                    selectedTheme === "neon" || selectedTheme === "midnight"
                      ? "#ffffff"
                      : "inherit",
                }}
              >
                <option
                  value="All"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#1f2937", // ⬅️ Dark text for white background
                  }}
                >
                  All Lines
                </option>
                {linesByLocation[selectedLocation].map((line) => (
                  <option
                    key={line.code}
                    value={line.code}
                    disabled={line.status === "maintenance"}
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#1f2937", // ⬅️ Dark text for white background
                    }}
                  >
                    {line.name} - {line.capacity}{" "}
                    {line.status === "maintenance" ? "⚠️" : ""}
                  </option>
                ))}
              </select>

              {/* Selected Line Info Badge */}
              {selectedLine !== "All" && (
                <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-[10px] font-semibold">
                  <span>
                    {
                      linesByLocation[selectedLocation].find(
                        (l) => l.code === selectedLine
                      )?.capacity
                    }
                  </span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                </div>
              )}
            </div>
          )}
      </div>

      {/* ADD THIS NEW SECTION - Global Prod/Sale Toggle */}
      <div className="flex items-center justify-between mb-3 mt-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold ${currentTheme.primaryText}`}>
            View:
          </span>
          <div
            className={`${currentTheme.cardBg} backdrop-blur-sm rounded-full p-0.5 shadow-md ${currentTheme.border} border`}
          >
            <div className="relative flex">
              <div
                className={`absolute h-7 bg-gradient-to-r ${
                  currentTheme.accentGradient
                } rounded-full transition-all duration-300 ease-out shadow-md ${
                  globalTabView === "production"
                    ? "w-20 left-0"
                    : "w-16 left-20"
                }`}
              />
              <button
                onClick={() => setGlobalTabView("production")}
                className={`relative px-3 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full w-20 ${
                  globalTabView === "production"
                    ? "text-white"
                    : currentTheme.mutedText
                }`}
              >
                Production
              </button>
              <button
                onClick={() => setGlobalTabView("sale")}
                className={`relative px-3 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full w-16 ${
                  globalTabView === "sale"
                    ? "text-white"
                    : currentTheme.mutedText
                }`}
              >
                Sale
              </button>
            </div>
          </div>
        </div>

        {/* Status Indicator - No Icons */}
        <div
          className={`px-2.5 py-1 rounded-full ${currentTheme.buttonBg} ${currentTheme.border} border`}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span
              className={`text-[10px] font-medium ${currentTheme.secondaryText}`}
            >
              {globalTabView === "production" ? "Production" : "Sale"} View
            </span>
          </div>
        </div>
      </div>

      {/* ADD THIS - Rejection Summary Card */}
      {/* <div
        className={`${currentTheme.cardBg} rounded-xl ${currentTheme.shadow} p-4 mb-4 ${currentTheme.border} border`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className={`text-xs ${currentTheme.mutedText} font-medium`}>
                Total Rejections
              </div>
              <div className={`text-2xl font-bold ${currentTheme.primaryText}`}>
                247
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-red-500 font-semibold">+12.3%</span>
                <span className={currentTheme.mutedText}>vs last month</span>
              </div>
            </div>
          </div>

         
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className={`text-xs ${currentTheme.mutedText} font-medium`}>
                Rejection Rate
              </div>
              <div className={`text-2xl font-bold ${currentTheme.primaryText}`}>
                3.8%
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-orange-500 font-semibold">
                  Target: 2.5%
                </span>
              </div>
            </div>
          </div>

       
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className={`text-xs ${currentTheme.mutedText} font-medium`}>
                Top Category
              </div>
              <div className={`text-sm font-bold ${currentTheme.primaryText}`}>
                Dimension Error
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-amber-500 font-semibold">89 cases</span>
                <span className={currentTheme.mutedText}>(36%)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div
              className={`text-xs ${currentTheme.mutedText} font-medium mb-2`}
            >
              5-Month Trend
            </div>
            <div className="h-12">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { month: "Apr", value: 198 },
                    { month: "May", value: 215 },
                    { month: "Jun", value: 189 },
                    { month: "Jul", value: 234 },
                    { month: "Aug", value: 247 },
                  ]}
                  margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                >
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ fill: "#ef4444", r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div> */}

      {(() => {
        const data = getCurrentData();
        const alerts = [];

        // Generate alerts
        if (data && data.length > 0) {
          data.forEach((kpi) => {
            if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.2) {
              alerts.push({
                id: `${kpi.kpiName}-critical`,
                type: "critical",
                title: kpi.kpiName,
                message: `₹${kpi.actual_per_tonne}/t`,
                variance: `+${(
                  (kpi.actual_per_tonne / kpi.budget_per_tonne - 1) *
                  100
                ).toFixed(1)}%`,
                icon: AlertTriangle,
              });
            } else if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.1) {
              alerts.push({
                id: `${kpi.kpiName}-warning`,
                type: "warning",
                title: kpi.kpiName,
                message: `₹${kpi.actual_per_tonne}/t`,
                variance: `+${(
                  (kpi.actual_per_tonne / kpi.budget_per_tonne - 1) *
                  100
                ).toFixed(1)}%`,
                icon: AlertCircle,
              });
            }
          });
        }

        const criticalAlerts = alerts.filter((a) => a.type === "critical");
        const warningAlerts = alerts.filter((a) => a.type === "warning");

        return alerts.length > 0 ? (
          <>
            {/* Animated Alert Banner at Top */}
            {criticalAlerts.length > 0 && (
              <div className="mb-4 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-2xl animate-pulse">
                <div className="relative">
                  {/* Animated stripe pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>

                  {/* <div className="relative px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <AlertTriangle className="w-6 h-6 text-white animate-bounce" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          CRITICAL ALERTS: {criticalAlerts.length} Cost Overruns
                          Detected
                        </div>
                        <div className="text-red-100 text-xs font-medium">
                          Immediate action required - Exceeding budget by 20%+
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {criticalAlerts.slice(0, 3).map((alert, idx) => (
                        <div
                          key={idx}
                          className="px-2 py-1 bg-white/20 rounded-lg backdrop-blur-sm"
                        >
                          <div className="text-white text-xs font-bold">
                            {alert.title}
                          </div>
                          <div className="text-red-100 text-[10px]">
                            {alert.variance}
                          </div>
                        </div>
                      ))}
                      {criticalAlerts.length > 3 && (
                        <div className="px-2 py-1 bg-white/20 rounded-lg backdrop-blur-sm text-white text-xs font-bold">
                          +{criticalAlerts.length - 3} more
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
              </div>
            )}

            {/* Floating Alert Cards - Right Side */}
            <div className="fixed right-4 top-32 z-40">
              {/* Minimized View - Small Badge */}
              {alertsMinimized &&
                alerts.filter((a) => !dismissedAlerts.includes(a.id)).length >
                  0 && (
                  <button
                    onClick={() => setAlertsMinimized(false)}
                    className="group relative animate-in slide-in-from-right duration-300"
                  >
                    <div
                      className={`${currentTheme.cardBg} backdrop-blur-xl rounded-full p-3 ${currentTheme.shadow} ${currentTheme.border} border transition-all hover:scale-110`}
                    >
                      <Bell
                        className={`w-5 h-5 ${currentTheme.primaryText} ${
                          alerts.filter(
                            (a) =>
                              !dismissedAlerts.includes(a.id) &&
                              a.type === "critical"
                          ).length > 0
                            ? "animate-bounce"
                            : ""
                        }`}
                      />

                      {/* Badge with count */}
                      <div className="absolute -top-1 -right-1 flex items-center justify-center">
                        <span
                          className={`absolute inline-flex h-5 w-5 rounded-full ${
                            alerts.filter(
                              (a) =>
                                !dismissedAlerts.includes(a.id) &&
                                a.type === "critical"
                            ).length > 0
                              ? "bg-red-400"
                              : "bg-orange-400"
                          } opacity-75 animate-ping`}
                        ></span>
                        <span
                          className={`relative inline-flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-bold text-white ${
                            alerts.filter(
                              (a) =>
                                !dismissedAlerts.includes(a.id) &&
                                a.type === "critical"
                            ).length > 0
                              ? "bg-red-500"
                              : "bg-orange-500"
                          }`}
                        >
                          {
                            alerts.filter(
                              (a) => !dismissedAlerts.includes(a.id)
                            ).length
                          }
                        </span>
                      </div>
                    </div>

                    {/* Hover tooltip */}
                    <div
                      className={`absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 ${currentTheme.cardBg} rounded-lg ${currentTheme.shadow} border ${currentTheme.border} opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none`}
                    >
                      <span
                        className={`text-xs font-semibold ${currentTheme.primaryText}`}
                      >
                        {
                          alerts.filter((a) => !dismissedAlerts.includes(a.id))
                            .length
                        }{" "}
                        Active Alert
                        {alerts.filter((a) => !dismissedAlerts.includes(a.id))
                          .length > 1
                          ? "s"
                          : ""}
                      </span>
                    </div>
                  </button>
                )}

              {/* Expanded View - Alert Cards */}
              {!alertsMinimized && (
                <div className="space-y-2 animate-in slide-in-from-right duration-500">
                  {/* Minimize Button */}
                  <div className="flex justify-end mb-2">
                    <button
                      onClick={() => setAlertsMinimized(true)}
                      className={`px-3 py-1.5 ${currentTheme.cardBg} backdrop-blur-xl rounded-full ${currentTheme.shadow} ${currentTheme.border} border transition-all hover:scale-105 flex items-center gap-2 group`}
                    >
                      <span
                        className={`text-xs font-semibold ${currentTheme.primaryText}`}
                      >
                        Hide Alerts
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 ${currentTheme.primaryText} group-hover:translate-x-1 transition-transform`}
                      />
                    </button>
                  </div>

                  {/* Alert Cards */}
                  <div className="max-w-xs space-y-2">
                    {alerts
                      .filter((alert) => !dismissedAlerts.includes(alert.id))
                      .slice(0, 4)
                      .map((alert, index) => {
                        const IconComponent = alert.icon;
                        const colors = {
                          critical: {
                            bg: "bg-gradient-to-br from-red-500 to-red-600",
                            border: "border-red-300",
                            text: "text-white",
                            glow: "shadow-2xl shadow-red-500/50",
                          },
                          warning: {
                            bg: "bg-gradient-to-br from-orange-500 to-orange-600",
                            border: "border-orange-300",
                            text: "text-white",
                            glow: "shadow-xl shadow-orange-500/40",
                          },
                        };

                        const style = colors[alert.type];

                        return (
                          <div
                            key={alert.id}
                            className={`${style.bg} ${style.glow} rounded-xl p-3 ${style.text} backdrop-blur-xl border ${style.border} transform transition-all duration-500 hover:scale-105 cursor-pointer relative`}
                            style={{
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            {/* Close Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setDismissedAlerts((prev) => [
                                  ...prev,
                                  alert.id,
                                ]);
                              }}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10 group/btn"
                            >
                              <X className="w-4 h-4 text-gray-700 group-hover/btn:text-red-600 transition-colors" />
                            </button>

                            {/* Pulsing indicator */}
                            <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                            <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-300 rounded-full"></div>

                            <div className="flex items-start gap-2">
                              <div
                                className={`p-2 rounded-lg bg-white/20 ${
                                  alert.type === "critical"
                                    ? "animate-bounce"
                                    : ""
                                }`}
                              >
                                <IconComponent className="w-4 h-4" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <h4 className="text-xs font-bold truncate">
                                    {alert.title}
                                  </h4>
                                  <span className="text-xs font-black bg-white/30 px-2 py-0.5 rounded-full">
                                    {alert.variance}
                                  </span>
                                </div>

                                <p className="text-xs opacity-90 mb-2">
                                  {alert.message}
                                </p>

                                {/* Progress bar showing severity */}
                                <div className="w-full bg-white/30 rounded-full h-1.5 overflow-hidden">
                                  <div
                                    className="h-full bg-white rounded-full animate-pulse"
                                    style={{
                                      width:
                                        alert.type === "critical"
                                          ? "85%"
                                          : "65%",
                                      transition: "width 1s ease-out",
                                    }}
                                  ></div>
                                </div>

                                {alert.type === "critical" && (
                                  <div className="mt-2 text-[10px] font-semibold bg-white/20 px-2 py-1 rounded">
                                    ACTION REQUIRED
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* Show more indicator */}
                    {alerts.filter((a) => !dismissedAlerts.includes(a.id))
                      .length > 4 && (
                      <div
                        className={`${currentTheme.cardBg} rounded-xl p-2 text-center ${currentTheme.border} border ${currentTheme.shadow} backdrop-blur-xl`}
                      >
                        <span
                          className={`text-xs font-semibold ${currentTheme.secondaryText}`}
                        >
                          +
                          {alerts.filter((a) => !dismissedAlerts.includes(a.id))
                            .length - 4}{" "}
                          more alerts
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Warning Banner if warnings exist */}
            {warningAlerts.length > 0 && criticalAlerts.length === 0 && (
              <div className="mb-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 shadow-xl">
                <div className="px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-white" />
                    <div>
                      <div className="text-white font-bold text-xs">
                        {warningAlerts.length} Warning
                        {warningAlerts.length > 1 ? "s" : ""}: Budget Threshold
                        Exceeded
                      </div>
                      <div className="text-orange-100 text-[10px]">
                        Monitoring required - 10-20% over budget
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {warningAlerts.slice(0, 3).map((alert, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 bg-white/20 rounded backdrop-blur-sm"
                      >
                        <div className="text-white text-[10px] font-bold">
                          {alert.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : null;
      })()}

      {/* <NotificationPanel data={getCurrentData()} theme={currentTheme} /> */}
      <div>
        {showCombinedView && renderCombinedChart()}
        {renderCardsView()}
      </div>
      {showManualEntry && (
        <ManualEntryModal
          theme={currentTheme}
          onClose={() => setShowManualEntry(false)}
          selectedLocation={selectedLocation}
        />
      )}
    </div>
  );
};

export default CostScreener;
