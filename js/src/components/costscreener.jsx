

import React, { useState, useEffect, useRef } from "react";
import MachinePowerForm from "./MachinePowerForm";
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
  ReferenceArea,
} from "recharts";
// Apne CostScreener.jsx mein simply import karein
import ActionInsightsModal from "./ActionInsightsModal";

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
  AlertTriangle,
  AlertCircle,
  X,
  ChevronDown,
  CheckCircle,
  Calendar,
  Upload,
} from "lucide-react";
import MonthRangeSlider from "./MonthRangeSlider";

// Import Zustand Store
import { useCostStore } from "../store/costStore";

// Themes Configuration
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
      highlightColor: "#ef4444",
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
    primaryText: "text-white",
    secondaryText: "text-gray-200",
    mutedText: "text-gray-400",
    border: "border-cyan-400/30",
    shadow: "shadow-2xl shadow-cyan-500/30",
    chartBg:
      "bg-gradient-to-br from-gray-900/95 via-purple-950/90 to-blue-950/80",
    gridColor: "#374151",
    axisTextColor: "#ffffff",
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

// Icon Map
const iconMap = {
  Consumables: Package,
  Power: Zap,
  Fuel: Fuel,
  Labour: Users,
  "Sub Contract": Handshake,
  "Machine Hire Charges": Settings,
  "Repair & Maintenance": Wrench,
  "Employee Cost": Users,
  "Establishment Expenses": Building,  // ⭐ Change from "Establishment Exp"
  Packing: Box,
  Freight: Truck,
  "Raw Material": Factory,
};

// Month Names
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Helper Functions
const getMonthName = (monthNo) => {
  return monthNames[monthNo - 1] || "";
};

// Custom Tooltip Component
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
        className={`${theme.cardBg} p-4 rounded-xl ${theme.shadow} ${theme.border} border`}
      >
        <p className={`text-sm font-bold ${theme.primaryText} mb-3`}>{label}</p>
        {uniqueEntries.map((entry, index) => (
          <div key={`item-${entry.dataKey}-${index}`} className="text-sm mb-1">
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: entry.color }}
            />
            <span className={`font-semibold ${theme.primaryText}`}>
              {entry.name}:{" "}
            </span>
            <span className={`font-bold ${theme.primaryText}`}>
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

// Tab Toggle Component
const TabToggle = ({ theme }) => {
  const viewType = useCostStore((state) => state.viewType);
  const setViewType = useCostStore((state) => state.setViewType);
  const apiLoading = useCostStore((state) => state.apiLoading);
  const currentYear = useCostStore((state) => state.currentYear);
  const monthRange = useCostStore((state) => state.monthRange);
  const fetchCostData = useCostStore((state) => state.fetchCostData);

  const handleToggle = async (type) => {
    setViewType(type);
    await fetchCostData(monthRange.from, monthRange.to, currentYear, type);
  };

  return (
    <div className="flex items-center gap-3">
      <span className={`text-sm font-semibold ${theme.secondaryText}`}>
        View:
      </span>

      <div
        className={`relative flex items-center rounded-full p-1 border shadow-md ${theme.cardBg} ${theme.border}`}
      >
        {/* Sliding Indicator */}
        <div
          className={`absolute top-1 left-1 h-9 w-28 rounded-full bg-gradient-to-r
      ${theme.accentGradient} transition-all duration-300 ease-in-out ${
            viewType === "production" ? "translate-x-0" : "translate-x-28"
          }`}
        />

        {/* Production Button */}
        <button
          onClick={() => handleToggle("production")}
          disabled={apiLoading}
          className={`relative z-10 w-28 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors
        ${viewType === "production" ? "text-white" : "text-gray-600"}
        ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}
      `}
        >
          {apiLoading && viewType === "production" ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Production"
          )}
        </button>

        {/* Sale Button */}
        <button
          onClick={() => handleToggle("sale")}
          disabled={apiLoading}
          className={`relative z-10 w-28 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors
        ${viewType === "sale" ? "text-white" : "text-gray-600"}
        ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}
      `}
        >
          {apiLoading && viewType === "sale" ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            "Sale"
          )}
        </button>
      </div>
    </div>
  );
};

// Main Component
const CostScreener = () => {
  // Zustand Store
  const viewType = useCostStore((state) => state.viewType);
  const setViewType = useCostStore((state) => state.setViewType);
  const apiData = useCostStore((state) => state.apiData);
  const apiLoading = useCostStore((state) => state.apiLoading);
  const kpiTargets = useCostStore((state) => state.kpiTargets); // ⭐ ADD THIS
  const apiError = useCostStore((state) => state.apiError);
  const selectedTheme = useCostStore((state) => state.selectedTheme);
  const setSelectedTheme = useCostStore((state) => state.setSelectedTheme);
  const selectedLocation = useCostStore((state) => state.selectedLocation);
  const setSelectedLocation = useCostStore(
    (state) => state.setSelectedLocation
  );
  const fetchCostData = useCostStore((state) => state.fetchCostData);
  const currentYear = useCostStore((state) => state.currentYear);
  const monthRange = useCostStore((state) => state.monthRange);
  const currentPeriodMonth = useCostStore((state) => state.currentPeriodMonth);
  const setCurrentPeriodMonth = useCostStore(
    (state) => state.setCurrentPeriodMonth
  );

  // Local States
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLine, setSelectedLine] = useState("All");
  const [showCombinedValues, setShowCombinedValues] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const [cardCurrentMonths, setCardCurrentMonths] = useState({});
  const [breakdownCards, setBreakdownCards] = useState({});
  const [actionModal, setActionModal] = useState(null);
  const cardRefs = useRef({});
  const themeSelectorRef = useRef(null);
  const currentTheme = themes[selectedTheme];

  const handleLocationSelect = async (locationName) => {
    setSelectedLocation(locationName);
    const { monthRange, currentYear, viewType } = useCostStore.getState();
    await fetchCostData(monthRange.from, monthRange.to, currentYear, viewType);
  };

  const openPowerForm = () => {
    window.location.href = `${window.location.origin}/kalyani.iot/costing_entry`;
  };

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
  };

  // useEffect(() => {
  //   console.log("🚀 Component Mounted - Initializing");

  //   const today = new Date();
  //   const currentMonth = today.getMonth() + 1;

  //   setCurrentPeriodMonth(currentMonth);

  //   let to = currentMonth;
  //   let from = currentMonth - 5;

  //   if (from < 1) {
  //     from = 1;
  //     to = 6;
  //   }

  //   fetchCostData(from, to, currentYear, viewType);
  // }, []);

  useEffect(() => {
    console.log("🚀 Component Mounted - Initializing");

    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    setCurrentPeriodMonth(currentMonth);

    let to = currentMonth;
    let from = currentMonth - 5;

    if (from < 1) {
      from = 1;
      to = 6;
    }

    // Reset location to "All" on initial load when category is "All"
    if (selectedCategory === "All") {
      setSelectedLocation("All");
    }

    fetchCostData(from, to, currentYear, viewType);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        themeSelectorRef.current &&
        !themeSelectorRef.current.contains(event.target)
      ) {
        setShowThemeSelector(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Transform API Data to Chart Format
  const transformApiDataToChartFormat = () => {
    if (!apiData || apiData.length === 0) {
      return null;
    }

    const monthlyData = {};

    apiData.forEach((item) => {
      const monthName = getMonthName(item.month_no);

      if (!monthlyData[monthName]) {
        monthlyData[monthName] = {
          month: monthName,
          monthNo: item.month_no,
          costs: {},
          total: 0,
          count: 0,
        };
      }

      const costHead = (item.cost_head || "Other").trim();
      const amount = parseFloat(item.total_amount || 0);

      if (amount !== 0 && !isNaN(amount)) {
        if (monthlyData[monthName].costs[costHead]) {
          monthlyData[monthName].costs[costHead] += amount;
        } else {
          monthlyData[monthName].costs[costHead] = amount;
        }

        monthlyData[monthName].total += amount;
        monthlyData[monthName].count++;
      }
    });

    const sortedData = Object.values(monthlyData)
      .filter((m) => m.count > 0)
      .sort((a, b) => a.monthNo - b.monthNo);

    if (sortedData.length === 0) {
      return null;
    }

    const finalData = sortedData.map((monthData) => ({
      month: monthData.month,
      TotalActual: parseFloat(monthData.total.toFixed(2)),
      TotalPredicted: null,
      EBITDAActual: null,
      EBITDABudget: null,
      PercentActual: null,
      PercentPredicted: null,
      PercentTarget: 20,
      rawData: monthData.costs,
    }));

    return finalData;
  };

  // Transform API Data to KPI Cards
  const transformApiDataToKpiCards = () => {
    if (!apiData || apiData.length === 0) {
      return [];
    }

    const costHeadData = {};

    apiData.forEach((item) => {
      const costHead = (item.cost_head || "Other").trim();
      const monthNo = item.month_no;

      let costValue = parseFloat(item.cost_per_ton);

      if (!costValue || isNaN(costValue)) {
        const totalAmount = parseFloat(item.total_amount || 0);
        const totalTonn = parseFloat(item.total_tonn || 1);

        if (totalAmount !== 0 && totalTonn !== 0) {
          costValue = totalAmount / totalTonn;
        } else {
          costValue = totalAmount;
        }
      }

      if (costValue === 0 || isNaN(costValue)) {
        return;
      }

      if (!costHeadData[costHead]) {
        costHeadData[costHead] = {
          kpiName: costHead,
          monthlyAmounts: {},
        };
      }

      if (!costHeadData[costHead].monthlyAmounts[monthNo]) {
        costHeadData[costHead].monthlyAmounts[monthNo] = 0;
      }
      costHeadData[costHead].monthlyAmounts[monthNo] += costValue;
    });

    if (Object.keys(costHeadData).length === 0) {
      return [];
    }

    const kpiCards = Object.values(costHeadData).map((costHead) => {
      const months = Object.keys(costHead.monthlyAmounts)
        .map(Number)
        .sort((a, b) => a - b);

      const trend = months.map((month) => costHead.monthlyAmounts[month]);
      const lastMonthAmount = trend[trend.length - 1] || 0;
      const avgAmount = trend.reduce((a, b) => a + b, 0) / trend.length;
      const budgetAmount = avgAmount * 1.05;

      return {
        kpiName: costHead.kpiName,
        actual_per_tonne: parseFloat(lastMonthAmount.toFixed(2)),
        budget_per_tonne: parseFloat(budgetAmount.toFixed(2)),
        trend: trend.map((val) => parseFloat(val.toFixed(2))),
        monthly_costs: trend.map((val) => parseFloat(val.toFixed(2))),
        monthly_budget: trend.map(() => parseFloat(budgetAmount.toFixed(2))),
        production_percentage: null,
        target_percentage: null,
        months: months,
      };
    });

    return kpiCards;
  };

  const getTopCostContributors = (kpiName, cardCurrentMonth) => {
    if (!apiData || apiData.length === 0) return [];

    const kpiData = apiData.filter(
      (item) =>
        (item.cost_head || "Other").trim() === kpiName &&
        item.month_no === cardCurrentMonth
    );

    if (kpiData.length === 0) return [];

    const contributors = {};

    kpiData.forEach((item) => {
      const key = item.sub_category || item.cost_head || "Other";
      const amount = parseFloat(item.total_amount || 0);

      if (!contributors[key]) {
        contributors[key] = 0;
      }
      contributors[key] += amount;
    });

    const sorted = Object.entries(contributors)
      .map(([name, amount]) => ({ name, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 10);

    return sorted;
  };

  // Get Current Data (KPI Cards)
  const getCurrentData = () => {
    if (apiData && apiData.length > 0) {
      const cards = transformApiDataToKpiCards();
      return cards;
    }
    return [];
  };

  // Build Chart Data for Individual KPI Card with specific current month
  const buildChartData = (kpi, cardCurrentMonth) => {
    if (!kpi || !kpi.trend) return [];

    const avgTrendValue =
      kpi.trend.reduce((a, b) => a + b, 0) / kpi.trend.length;

    // ⭐ USE TARGET FROM STORE IF AVAILABLE
    const targetFromStore = kpiTargets[kpi.kpiName];
    const targetValue =
      targetFromStore && targetFromStore > 0
        ? targetFromStore // Use stored target
        : kpi.budget_per_tonne && kpi.actual_per_tonne
        ? avgTrendValue * (kpi.budget_per_tonne / kpi.actual_per_tonne)
        : (avgTrendValue || 0) * 1.05; // Fallback

    console.log(`🎯 Target for ${kpi.kpiName}:`, {
      fromStore: targetFromStore,
      used: targetValue,
    });

    const avgTargetPercent =
      kpi.target_percentage?.length > 0
        ? kpi.target_percentage.reduce((a, b) => a + b, 0) /
          kpi.target_percentage.length
        : null;

    const historicalData = kpi.trend.map((value, index) => {
      const actualMonthNo = kpi.months
        ? kpi.months[index]
        : monthRange.from + index;
      const monthIndex = (actualMonthNo - 1) % 12;

      const isCurrentMonth = actualMonthNo === cardCurrentMonth;

      return {
        month: monthNames[monthIndex] || `M${index + 1}`,
        monthNo: actualMonthNo,
        actual: parseFloat(value.toFixed(2)),
        prediction: null,
        target: targetValue,
        productionPercentPredicted: null,
        productionPercent: kpi.production_percentage?.[index] || null,
        productionTarget: avgTargetPercent,
        isHistorical: true,
        isHighlighted: isCurrentMonth,
        variance: value - targetValue,
      };
    });

    const lastValue = kpi.trend[kpi.trend.length - 1];
    const prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
    const costDirection = lastValue >= prevValue ? 1 : -1;
    const lastMonthNo =
      historicalData[historicalData.length - 1]?.monthNo || 12;
    const nextMonthNo = (lastMonthNo % 12) + 1;
    const monthIndex = (nextMonthNo - 1) % 12;
    const stepChange =
      Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;
    const predictedValue = lastValue + costDirection * stepChange;

    const percentLength = kpi.production_percentage?.length || 0;
    const lastPercent =
      percentLength > 0 ? kpi.production_percentage[percentLength - 1] : null;

    const predictionData = [
      {
        month: monthNames[monthIndex] || `M${monthIndex + 1}`,
        monthNo: nextMonthNo,
        actual: null,
        prediction: parseFloat(predictedValue.toFixed(2)),
        target: targetValue,
        targetForCheck: null,
        productionPercent: null,
        productionPercentPredicted: lastPercent,
        productionTarget: avgTargetPercent,
        productionTargetForCheck: avgTargetPercent,
        isHistorical: false,
        isHighlighted: false,
        variance: predictedValue - targetValue,
      },
    ];

    return [...historicalData, ...predictionData];
  };

  // Custom Label Component
  const renderCustomLabel = (props, theme) => {
    const { x, y, value, viewBox } = props;
    if (!value || value === null) return null;

    const midPoint = (viewBox.width || 400) / 2;
    const showAbove = x < midPoint;
    const offsetY = showAbove ? -12 : 12;

    return (
      <text
        x={x}
        y={y + offsetY}
        fill={theme.primaryText}
        fontSize="11"
        fontWeight="700"
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

  // Render Combined Chart
  const renderCombinedChart = () => {
    const baseData = transformApiDataToChartFormat();

    if (apiLoading) {
      return (
        <div
          className={`${currentTheme.cardBg} rounded-xl p-8 text-center ${currentTheme.shadow} m-6`}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p
            className={`mt-4 ${currentTheme.secondaryText} font-bold text-base`}
          >
            Loading {viewType} cost data...
          </p>
        </div>
      );
    }

    if (apiError) {
      return (
        <div
          className={`${currentTheme.cardBg} rounded-xl p-8 text-center ${currentTheme.shadow} m-6`}
        >
          <div className="text-red-600 text-3xl mb-4">⚠️</div>
          <p className="text-red-600 font-bold text-base mb-2">
            Error loading data
          </p>
          <p
            className={`${currentTheme.secondaryText} text-sm font-medium mb-4`}
          >
            {apiError}
          </p>
          <button
            onClick={() => {
              fetchCostData(
                monthRange.from,
                monthRange.to,
                currentYear,
                viewType
              );
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
          >
            Retry
          </button>
        </div>
      );
    }

    if (!baseData || baseData.length === 0) {
      return (
        <div
          className={`${currentTheme.cardBg} rounded-xl p-8 text-center ${currentTheme.shadow} m-6`}
        >
          <div className="text-gray-400 text-5xl mb-4">📊</div>
          <p className={`${currentTheme.primaryText} font-bold text-lg mb-2`}>
            No Data Available
          </p>
          <p
            className={`${currentTheme.secondaryText} text-sm font-medium mb-4`}
          >
            No {viewType} data found for the selected period.
          </p>
          <button
            onClick={() => {
              fetchCostData(
                monthRange.from,
                monthRange.to,
                currentYear,
                viewType
              );
            }}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
          >
            Load Data
          </button>
        </div>
      );
    }

    const combinedData = [];

    const actualTotals = combinedData
      .map((d) => d.TotalActual)
      .filter((v) => v !== null && v !== undefined && v > 0);

    let dynamicTarget = null;
    if (actualTotals.length > 0) {
      const avgActual =
        actualTotals.reduce((a, b) => a + b, 0) / actualTotals.length;
      dynamicTarget = avgActual * 1.05;
    }

    return (
      <div className="mb-6">
        {/* Theme Selector */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
          <button
            onClick={openPowerForm} // 👈 Yahan click pe navigate hoga
            className={`p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group relative overflow-hidden`}
            title="Machine Power Unit Entry"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Zap className="w-6 h-6 relative z-10 text-blue-600" />{" "}
            {/* ⚡ POWER ICON */}
          </button>

          <div className="relative" ref={themeSelectorRef}>
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className={`p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Palette className="w-6 h-6 relative z-10" />
            </button>

            {showThemeSelector && (
              <div
                className={`absolute right-0 mt-2 w-64 ${currentTheme.cardBg} rounded-xl ${currentTheme.shadow} ${currentTheme.border} border overflow-hidden`}
              >
                <div
                  className={`p-3 ${currentTheme.primaryText} font-bold text-sm border-b ${currentTheme.border} bg-gradient-to-r ${currentTheme.buttonBg}`}
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
                      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-all ${
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
                          className={`text-sm font-bold ${theme.primaryText}`}
                        >
                          {theme.name}
                        </span>
                      </div>

                      {selectedTheme === key && (
                        <Check className={`w-4 h-4 ${theme.primaryText}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* LEFT CHART - Manufacturing Cost */}
          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-xxl font-bold ${currentTheme.primaryText}`}>
                Manufacturing Cost
              </h3>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setShowCombinedValues(!showCombinedValues)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                    showCombinedValues
                      ? `bg-gradient-to-r ${currentTheme.accentGradient} text-white font-bold shadow-md`
                      : `bg-gray-100 ${currentTheme.secondaryText} hover:bg-gray-200`
                  }`}
                >
                  Values
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={combinedData}
                  margin={{ top: 20, right: 50, left: 10, bottom: 10 }}
                >
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 15, fontWeight: 600 }}
                  />
                  <YAxis tick={{ fontSize: 15, fontWeight: 600 }} />
                  <Tooltip content={<CustomTooltip theme={currentTheme} />} />
                  <Legend
                    wrapperStyle={{ fontSize: "15px", fontWeight: 600 }}
                  />

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
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    />
                  )}

                  <Line
                    type="monotone"
                    dataKey="TotalActual"
                    stroke={currentTheme.chartColors.actualLine}
                    strokeWidth={2.5}
                    name="Actual Cost"
                    label={
                      showCombinedValues
                        ? (props) => renderCustomLabel(props, currentTheme)
                        : false
                    }
                    dot={{ r: 5 }}
                  />

                  <Line
                    type="monotone"
                    dataKey="TotalPredicted"
                    stroke={currentTheme.chartColors.predictedLine}
                    strokeWidth={2.5}
                    name="Predicted Cost"
                    strokeDasharray="5 5"
                    label={
                      showCombinedValues
                        ? (props) => renderCustomLabel(props, currentTheme)
                        : false
                    }
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* RIGHT CHART - EBITDA */}
          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 ${currentTheme.border} border`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-xxl font-bold ${currentTheme.primaryText}`}>
                EBITDA Performance
              </h3>
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
                    tick={{ fontSize: 15, fontWeight: 600 }}
                  />
                  <YAxis tick={{ fontSize: 15, fontWeight: 600 }} />
                  <Tooltip content={<CustomTooltip theme={currentTheme} />} />
                  <Legend
                    wrapperStyle={{ fontSize: "15px", fontWeight: 600 }}
                  />

                  <Line
                    type="monotone"
                    dataKey="EBITDABudget"
                    stroke={currentTheme.chartColors.ebitdaBudget}
                    strokeWidth={2.5}
                    name="EBITDA Budget %"
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="EBITDAActual"
                    stroke={currentTheme.chartColors.ebitdaActual}
                    strokeWidth={2.5}
                    name="EBITDA Actual %"
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Cards View
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
            className={`text-lg font-bold ${currentTheme.secondaryText} mb-2`}
          >
            No Data Available
          </h3>
          <p className={`${currentTheme.mutedText} font-medium`}>
            Switch between Production and Sale tabs to view data.
          </p>
        </div>
      );
    }

    return (
      <div className="relative min-h-96 rounded-2xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${currentTheme.cardGradient} transition-all duration-500`}
        ></div>

        <div className="relative z-10 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((kpi, idx) => {
              const IconComponent = iconMap[kpi.kpiName] || Package;
              const cardCurrentMonth =
                cardCurrentMonths[kpi.kpiName] || currentPeriodMonth;
              const chartData = buildChartData(kpi, cardCurrentMonth);
              const currentMonthIndex = chartData.findIndex(
                (d) => d.monthNo === cardCurrentMonth
              );
              const highlightIndex =
                currentMonthIndex >= 0
                  ? currentMonthIndex
                  : chartData.filter((d) => d.isHistorical).length - 1;

              if (!cardRefs.current[kpi.kpiName]) {
                cardRefs.current[kpi.kpiName] = React.createRef();
              }

              const isModalOpen =
                actionModal && actionModal.kpiName === kpi.kpiName;

              return (
                <div
                  key={`${kpi.kpiName}-${idx}`}
                  ref={cardRefs.current[kpi.kpiName]}
                  className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl ${currentTheme.shadow} ${currentTheme.hoverGlow} transition-all duration-300 p-5 ${currentTheme.border} border group relative overflow-visible`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between px-3 py-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentTheme.accentGradient} flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xxl font-extrabold text-slate-800">
                        {kpi.kpiName}
                      </span>
                    </div>

                    {(() => {
                      const actual = kpi.actual_per_tonne;
                      const budget = kpi.budget_per_tonne;
                      const variance = ((actual - budget) / budget) * 100;
                      const isOverBudget = actual > budget;

                      return (
                        <div
                          className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                            isOverBudget ? "bg-red-100" : "bg-green-100"
                          }`}
                        >
                          {isOverBudget ? (
                            <ArrowUp className="w-4 h-4 text-red-700" />
                          ) : (
                            <ArrowDown className="w-4 h-4 text-green-700" />
                          )}
                          <span
                            className={`text-3xl font-extrabold ${
                              isOverBudget ? "text-red-700" : "text-green-700"
                            }`}
                          >
                            {Math.abs(variance).toFixed(1)}%
                          </span>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Chart Area */}
                  <div
                    className="relative h-56 mb-3"
                    style={{
                      cursor: isModalOpen ? "default" : "pointer",
                      zIndex: isModalOpen ? 1 : 1,
                      pointerEvents: isModalOpen ? "none" : "all",
                    }}
                    onClick={(e) => {
                      if (isModalOpen) return;

                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const clickY = e.clientY - rect.top;

                      const chartWidth = rect.width - 10;
                      const historicalPoints = chartData.filter(
                        (d) => d.isHistorical
                      );
                      const pointSpacing =
                        chartWidth / (historicalPoints.length + 1);
                      const clickedIndex =
                        Math.round(clickX / pointSpacing) - 1;

                      if (
                        clickedIndex >= 0 &&
                        clickedIndex < historicalPoints.length
                      ) {
                        const point = historicalPoints[clickedIndex];
                        if (point) {
                          setActionModal({
                            kpiName: kpi.kpiName,
                            month: point.month,
                            x: clickX,
                            y: clickY,
                          });
                        }
                      }
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={chartData}
                        margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
                      >
                        <XAxis
                          dataKey="month"
                          tick={{ fontSize: 15, fontWeight: 600 }}
                        />
                        <YAxis
                          tick={{ fontSize: 15, fontWeight: 600 }}
                          domain={["dataMin", "dataMax"]}
                        />
                        <Tooltip
                          content={<CustomTooltip theme={currentTheme} />}
                        />
                        {/* ⭐⭐⭐ ADD THIS TARGET LINE ⭐⭐⭐ */}
                        {(() => {
                          const targetForKpi = kpiTargets[kpi.kpiName];
                          return targetForKpi && targetForKpi > 0 ? (
                            <ReferenceLine
                              y={targetForKpi}
                              stroke="#ef4444"
                              strokeWidth={2}
                              strokeDasharray="5 5"
                              label={{
                                value: `Target: ₹${Math.round(
                                  targetForKpi
                                ).toLocaleString()}`,
                                position: "right",
                                fill: "#ef4444",
                                fontSize: 11,
                                fontWeight: "bold",
                              }}
                            />
                          ) : null;
                        })()}

                        {highlightIndex >= 0 && (
                          <ReferenceArea
                            x1={
                              chartData[Math.max(0, highlightIndex - 0.4)]
                                ?.month
                            }
                            x2={
                              chartData[
                                Math.min(
                                  chartData.length - 1,
                                  highlightIndex + 0.4
                                )
                              ]?.month
                            }
                            fill={currentTheme.chartColors.highlightColor}
                            fillOpacity={0.1}
                            strokeOpacity={0.3}
                          />
                        )}

                        <Area
                          type="monotone"
                          dataKey="actual"
                          fill={currentTheme.chartColors.actualLine}
                          fillOpacity={0.2}
                          stroke="none"
                        />

                        <Line
                          type="monotone"
                          dataKey="actual"
                          stroke={currentTheme.chartColors.actualLine}
                          strokeWidth={2}
                          dot={(props) => {
                            const { cx, cy, index, payload } = props;
                            const isHighlight = index === highlightIndex;
                            const isHistorical = payload.isHistorical;

                            if (!isHistorical) return null;

                            return (
                              <circle
                                cx={cx}
                                cy={cy}
                                r={isHighlight ? 7 : 3}
                                fill={
                                  isHighlight
                                    ? currentTheme.chartColors.highlightColor
                                    : currentTheme.chartColors.actualLine
                                }
                                stroke={isHighlight ? "white" : "none"}
                                strokeWidth={isHighlight ? 2 : 0}
                                style={{
                                  filter: isHighlight
                                    ? `drop-shadow(0px 0px 6px ${currentTheme.chartColors.highlightColor})`
                                    : "none",
                                }}
                              />
                            );
                          }}
                          activeDot={{
                            r: 8,
                            stroke: "white",
                            strokeWidth: 2,
                            fill: currentTheme.chartColors.highlightColor,
                          }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  {/* TOP 10 BREAKDOWN VIEW */}
                  {breakdownCards[kpi.kpiName] && (
                    <div
                      className="mt-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 shadow-xl border-2 border-orange-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          Top 10 Cost Contributors - {kpi.kpiName}
                        </h2>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setBreakdownCards((prev) => ({
                              ...prev,
                              [kpi.kpiName]: false,
                            }));
                          }}
                          className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="space-y-2">
                        {getTopCostContributors(kpi.kpiName, cardCurrentMonth)
                          .length > 0 ? (
                          getTopCostContributors(
                            kpi.kpiName,
                            cardCurrentMonth
                          ).map((contributor, index) => {
                            const total = getTopCostContributors(
                              kpi.kpiName,
                              cardCurrentMonth
                            ).reduce((sum, c) => sum + c.amount, 0);
                            const percentage =
                              (contributor.amount / total) * 100;

                            return (
                              <div
                                key={index}
                                className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white text-xs font-bold flex items-center justify-center">
                                      {index + 1}
                                    </span>
                                    <span className="font-bold text-gray-800 text-sm">
                                      {contributor.name}
                                    </span>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-sm font-bold text-orange-600">
                                      ₹{contributor.amount.toLocaleString()}
                                    </div>
                                    <div className="text-xs font-semibold text-gray-500">
                                      {percentage.toFixed(1)}%
                                    </div>
                                  </div>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className="bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="text-center py-8 text-gray-500">
                            <AlertCircle className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                            <p className="font-bold">
                              No breakdown data available
                            </p>
                            <p className="text-sm font-medium">
                              for {getMonthName(cardCurrentMonth)} month
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-orange-200">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-bold">
                            Showing for: {getMonthName(cardCurrentMonth)}
                          </span>
                          <span className="text-gray-500 font-medium">
                            Double-click again to close
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card double-click handler */}
                  <div
                    className="absolute inset-0 cursor-pointer"
                    style={{
                      zIndex: 0,
                      pointerEvents: isModalOpen ? "none" : "all",
                    }}
                    onDoubleClick={(e) => {
                      if (isModalOpen) return;
                      e.stopPropagation();
                      setBreakdownCards((prev) => ({
                        ...prev,
                        [kpi.kpiName]: !prev[kpi.kpiName],
                      }));
                    }}
                  />

                  {/* MODAL */}
                  {isModalOpen && (
                    <ActionInsightsModal
                      kpiName={actionModal.kpiName}
                      month={actionModal.month}
                      position={{ x: actionModal.x, y: actionModal.y }}
                      cardRef={cardRefs.current[kpi.kpiName]}
                      onClose={() => {
                        setActionModal(null);
                      }}
                    />
                  )}
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
      {/* COMPACT HEADER SECTION */}
      <div
        className={`${currentTheme.cardBg} rounded-2xl ${currentTheme.shadow} ${currentTheme.border} border p-4 mb-4`}
      >
        {/* Row 1: Category + Location + Line + View Toggle */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* Category Selection */}
          <div className="flex items-center gap-2">
            {["All", "Forging", "Machining"].map((category) => (
              <button
                key={category}
                onClick={async () => {
                  setSelectedCategory(category);

                  // ⭐ FIX: Reset location - don't set first location
                  // When category changes, we want ALL PLANTS, not specific plant
                  if (category === "All") {
                    setSelectedLocation(null); // or "All"
                  } else {
                    // Forging या Machining selected - still show all plants initially
                    setSelectedLocation(null); // ⭐ KEY CHANGE
                  }

                  // ⭐ IMPORTANT: Set viewType to production (not sale)
                  const { monthRange, currentYear } = useCostStore.getState();

                  await fetchCostData(
                    monthRange.from,
                    monthRange.to,
                    currentYear,
                    "production" // ⭐ Hardcode to production for category selection
                  );
                }}
                className={`px-4 py-2 text-sm rounded-xl font-bold transition-all ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${currentTheme.accentGradient} text-white shadow-lg scale-105`
                    : `${currentTheme.buttonBg} ${currentTheme.primaryText} hover:scale-105 ${currentTheme.buttonHover}`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Divider */}
          {selectedCategory !== "All" && (
            <div className="h-8 w-px bg-gray-300" />
          )}

          {/* Location Selection */}
          {selectedCategory !== "All" && (
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-bold ${currentTheme.mutedText} uppercase`}
              >
                Location:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {locationsByCategory[selectedCategory].map((location) => (
                  <button
                    key={location.code}
                    onClick={() => handleLocationSelect(location.name)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                      selectedLocation === location.name
                        ? `bg-gradient-to-r ${currentTheme.accentGradient} text-white shadow-md`
                        : `bg-gray-100 ${currentTheme.primaryText} hover:bg-gray-200`
                    }`}
                  >
                    {location.code}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Line Selection */}
          {selectedCategory !== "All" &&
            selectedLocation &&
            linesByLocation[selectedLocation] && (
              <>
                <div className="h-8 w-px bg-gray-300" />
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-bold ${currentTheme.mutedText} uppercase`}
                  >
                    Line:
                  </span>
                  <select
                    value={selectedLine}
                    onChange={(e) => setSelectedLine(e.target.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${currentTheme.border} ${currentTheme.cardBg} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  >
                    <option value="All">All Lines</option>
                    {linesByLocation[selectedLocation].map((line) => (
                      <option key={line.code} value={line.code}>
                        {line.name} - {line.capacity}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* View Toggle */}
          <TabToggle theme={currentTheme} />
        </div>

        {/* Row 2: Month Range Slider */}
        <div
          className={`bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border ${currentTheme.border}`}
        >
          <MonthRangeSlider theme={currentTheme} compact={true} />
        </div>
      </div>

      {/* Charts and Cards */}
      <div>
        {renderCombinedChart()}
        {renderCardsView()}
      </div>
    </div>
  );
};

export default CostScreener;
