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
  ReferenceArea,
} from "recharts";
import {
  Zap,
  Palette,
  ChevronDown,
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
} from "lucide-react";
import Layout from "./Layout";

const realForgingData = {
  meta: {
    title: "Forging Cost Analysis - Complete",
    location: "Ranjangaon",
    lines: "Line 1 to 16",
    currency: "INR",
    unit: "per tonne",
    data_source: "Excel Import - CleanDataForging.xlsx",
    last_updated: "2025-01-18T18:00:00",
    total_kpis: 12,
  },
  kpi_data: [
    {
      kpiName: "Consumables",
      lastDayCost: 15.89,
      lastWeek: 111.23,
      mtd: 15.89,
      lastMonth: 15.17,
      lastQuarter: 9287.64,
      ytd: 34725.811,
      lastDayChange: 2.1,
      lastWeekChange: 3.4,
      mtdChange: 4.2,
      lastMonthChange: 1.8,
      lastQuarterChange: 5.6,
      ytdChange: 8.2,
      trend: [3632.95, 3875, 3230, 3470, 3542],
      budget_per_tonne: 15.17,
      actual_per_tonne: 15.89,
      monthly_costs: [
        3632.95, 3875, 3230, 3470.32, 0.0, 3541.75, 0.0, 4453.91, 3234.49,
        3103.35, 3012.85, 3171.44,
      ],
    },
    {
      kpiName: "Power",
      lastDayCost: 32.25,
      lastWeek: 225.75,
      mtd: 32.25,
      lastMonth: 33.16,
      lastQuarter: 20725.68,
      ytd: 73591.491,
      lastDayChange: -1.2,
      lastWeekChange: -0.8,
      mtdChange: -2.7,
      lastMonthChange: -2.8,
      lastQuarterChange: 1.2,
      ytdChange: 3.4,
      trend: [7374, 7183, 7116.2, 7477, 7290],
      budget_per_tonne: 33.16,
      actual_per_tonne: 32.25,
      monthly_costs: [
        7373.62, 7182.75, 7116.2, 7089.25, 6969.51, 6895.12, 6756.89, 6823.45,
        6945.23, 7012.34, 6889.56, 6823.78,
      ],
    },
    {
      kpiName: "Fuel",
      lastDayCost: 13.72,
      lastWeek: 96.04,
      mtd: 13.72,
      lastMonth: 12.65,
      lastQuarter: 8878.24,
      ytd: 31476.451,
      lastDayChange: 8.5,
      lastWeekChange: 7.8,
      mtdChange: 8.5,
      lastMonthChange: 8.5,
      lastQuarterChange: 6.2,
      ytdChange: 4.8,
      trend: [3136.49, 3344.52, 3025.01, 2989.34, 2756.89],
      budget_per_tonne: 12.65,
      actual_per_tonne: 13.72,
      monthly_costs: [
        3136.49, 3344.52, 3025.01, 2989.34, 2756.89, 2834.56, 2923.45, 2867.23,
        2934.12, 3045.67, 2987.34, 2845.23,
      ],
    },
    {
      kpiName: "Labour",
      lastDayCost: 9.93,
      lastWeek: 69.51,
      mtd: 9.93,
      lastMonth: 8.02,
      lastQuarter: 5580.46,
      ytd: 19753.035,
      lastDayChange: 23.8,
      lastWeekChange: 21.4,
      mtdChange: 23.8,
      lastMonthChange: 23.8,
      lastQuarterChange: 18.5,
      ytdChange: 12.3,
      trend: [2270.99, 2619.46, 2012.52, 2234.56, 2145.67],
      budget_per_tonne: 8.02,
      actual_per_tonne: 9.93,
      monthly_costs: [
        2270.99, 2619.46, 2012.52, 2234.56, 2145.67, 2389.45, 2234.78, 2456.89,
        2345.12, 2123.45, 2267.34, 2189.67,
      ],
    },
    {
      kpiName: "Sub Contract",
      lastDayCost: 35.9,
      lastWeek: 251.3,
      mtd: 35.9,
      lastMonth: 29.71,
      lastQuarter: 19969.12,
      ytd: 73838.445,
      lastDayChange: 20.8,
      lastWeekChange: 18.2,
      mtdChange: 20.8,
      lastMonthChange: 20.8,
      lastQuarterChange: 15.6,
      ytdChange: 11.2,
      trend: [8207.23, 7884.71, 7017.29, 7560.44, 7560.45],
      budget_per_tonne: 29.71,
      actual_per_tonne: 35.9,
      monthly_costs: [
        8207.23, 7884.71, 7017.29, 7560.44, 7560.44, 7667.0, 7667.0, 8090.04,
        7442.78, 6338.62, 5766.86, 7863.48,
      ],
    },
    {
      kpiName: "Machine Hire Charges",
      lastDayCost: 2.77,
      lastWeek: 19.39,
      mtd: 2.77,
      lastMonth: 3.15,
      lastQuarter: 2061.41,
      ytd: 6734.137,
      lastDayChange: -12.1,
      lastWeekChange: -10.8,
      mtdChange: -12.1,
      lastMonthChange: -12.1,
      lastQuarterChange: -8.5,
      ytdChange: -3.2,
      trend: [632.37, 509.66, 858.24, 779.37, 779.37],
      budget_per_tonne: 3.15,
      actual_per_tonne: 2.77,
      monthly_costs: [
        632.37, 509.66, 858.24, 779.37, 779.37, 704.58, 704.58, 738.87, 664.05,
        715.39, 639.85, 491.76,
      ],
    },
    {
      kpiName: "Repair & Maintenance",
      lastDayCost: 6.28,
      lastWeek: 43.96,
      mtd: 6.28,
      lastMonth: 7.18,
      lastQuarter: 7234.76,
      ytd: 22693.379,
      lastDayChange: 5.2,
      lastWeekChange: 4.8,
      mtdChange: 5.2,
      lastMonthChange: 3.5,
      lastQuarterChange: 6.1,
      ytdChange: 7.8,
      trend: [1436.47, 3871.06, 3336.9, 2162.51, 2162.51],
      budget_per_tonne: 7.18,
      actual_per_tonne: 6.28,
      monthly_costs: [
        1436.47, 3871.06, 3336.9, 2162.51, 2162.51, 1444.66, 1444.66, 2313.45,
        1966.7, 2486.29, 1996.33, 1679.01,
      ],
    },
    {
      kpiName: "Employee Cost",
      lastDayCost: 25.32,
      lastWeek: 177.24,
      mtd: 25.32,
      lastMonth: 25.32,
      lastQuarter: 15513.99,
      ytd: 55278.593,
      lastDayChange: -2.1,
      lastWeekChange: -1.8,
      mtdChange: -2.1,
      lastMonthChange: -1.5,
      lastQuarterChange: 0.8,
      ytdChange: 2.3,
      trend: [5787.85, 5755.55, 5248.11, 5572.07, 5572.07],
      budget_per_tonne: 25.32,
      actual_per_tonne: 25.32,
      monthly_costs: [
        5787.85, 5755.55, 5248.11, 5572.07, 5572.07, 5104.67, 5104.67, 6099.68,
        5177.21, 6738.36, 5224.14, 3570.94,
      ],
    },
    {
      kpiName: "Establishment Expenses",
      lastDayCost: 5.15,
      lastWeek: 36.05,
      mtd: 5.15,
      lastMonth: 6.82,
      lastQuarter: 3876.72,
      ytd: 14255.899,
      lastDayChange: 1.5,
      lastWeekChange: 1.2,
      mtdChange: 1.5,
      lastMonthChange: 0.9,
      lastQuarterChange: 2.4,
      ytdChange: 3.6,
      trend: [1177.42, 1286.86, 1281.15, 1309.54, 1309.54],
      budget_per_tonne: 6.82,
      actual_per_tonne: 5.15,
      monthly_costs: [
        1177.42, 1286.86, 1281.15, 1309.54, 1309.54, 1241.42, 1241.42, 1453.95,
        1216.5, 1585.58, 1221.78, 1481.71,
      ],
    },
    {
      kpiName: "Packing",
      lastDayCost: 6.67,
      lastWeek: 46.69,
      mtd: 6.67,
      lastMonth: 7.98,
      lastQuarter: 0.0,
      ytd: 0.0,
      lastDayChange: 3.8,
      lastWeekChange: 3.2,
      mtdChange: 3.8,
      lastMonthChange: 2.7,
      lastQuarterChange: 4.5,
      ytdChange: 5.9,
      trend: [1524, 1639, 2678, 2404, 1994],
      budget_per_tonne: 7.98,
      actual_per_tonne: 6.67,
      monthly_costs: [
        0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      ],
    },
    {
      kpiName: "Freight",
      lastDayCost: 166.17,
      lastWeek: 1163.22,
      mtd: 166.17,
      lastMonth: 151.11,
      lastQuarter: 103110.13,
      ytd: 332347.239,
      lastDayChange: 6.7,
      lastWeekChange: 5.9,
      mtdChange: 6.7,
      lastMonthChange: 5.2,
      lastQuarterChange: 7.8,
      ytdChange: 9.2,
      trend: [3781, 4342, 3992, 3172, 3165],
      budget_per_tonne: 0.0,
      actual_per_tonne: 0.0,
      monthly_costs: [3781, 4342, 3992, 3172, 3165],
    },
    {
      kpiName: "Raw Material",
      lastDayCost: 215.45,
      lastWeek: 1508.15,
      mtd: 215.45,
      lastMonth: 210.32,
      lastQuarter: 143914.35,
      ytd: 565947.523,
      lastDayChange: 2.4,
      lastWeekChange: 2.1,
      mtdChange: 2.4,
      lastMonthChange: 2.4,
      lastQuarterChange: 3.8,
      ytdChange: 4.5,
      trend: [98182, 100581, 97506, 101193, 90876],
      budget_per_tonne: 210.32,
      actual_per_tonne: 215.45,
      monthly_costs: [98182, 100581, 97506, 101193, 90876],
    },
  ],
};

// Comprehensive Theme Configuration
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

const CustomTooltip = ({ active, payload, label, theme }) => {
  if (active && payload && payload.length) {
    // Filter out duplicate entries and null/undefined values
    const uniqueEntries = payload.filter((entry, index, self) => {
      if (entry.value === null || entry.value === undefined) return false;

      // Check if this is the first occurrence of this dataKey
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
  const [miniModalPosition, setMiniModalPosition] = useState({ x: 0, y: 0 });
  const [miniModalKpi, setMiniModalKpi] = useState(null);
  const [activeMiniTab, setActiveMiniTab] = useState("Insights");
  const [hoveredDataPoint, setHoveredDataPoint] = useState(null);
  const [activeGraphTab, setActiveGraphTab] = useState("tonnage");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [chartModalData, setChartModalData] = useState(null);
  const [chartModalPosition, setChartModalPosition] = useState({ x: 0, y: 0 });
  const [activeChartModalTab, setActiveChartModalTab] = useState("Insights");
  const [cardTabs, setCardTabs] = useState({});
  const [selectedTheme, setSelectedTheme] = useState("ocean");
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const currentTheme = themes[selectedTheme];
  const themeSelectorRef = useRef(null);

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
              className={`p-3 rounded-full ${currentTheme.cardBg} ${currentTheme.border} border ${currentTheme.shadow} transition-all duration-300 hover:scale-110 group`}
            >
              <Palette className="w-6 h-6 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text" />
            </button>

            {showThemeSelector && (
              <div
                className={`absolute right-0 mt-2 w-64 ${currentTheme.cardBg} rounded-xl ${currentTheme.shadow} ${currentTheme.border} border overflow-hidden`}
              >
                <div
                  className={`p-3 ${currentTheme.primaryText} font-semibold text-sm border-b ${currentTheme.border}`}
                >
                  Choose Theme
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {Object.entries(themes).map(([key, theme]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedTheme(key);
                        setShowThemeSelector(false);
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                        selectedTheme === key
                          ? "bg-gray-50 dark:bg-gray-800"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${theme.accentGradient}`}
                        />
                        <span className={`text-sm ${theme.primaryText}`}>
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
                tick={{ fontSize: 12, fill: currentTheme.primaryText }}
                label={{
                  value:
                    activeGraphTab === "tonnage"
                      ? "Manufacturing Cost"
                      : activeGraphTab === "EBITDA"
                      ? "EBITDA Value"
                      : "% of Production",
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
              />

              {activeGraphTab === "tonnage" && (
                <>
                  {/* Actual line */}
                  <Line
                    type="monotone"
                    dataKey="TotalActual"
                    stroke={currentTheme.chartColors.actualLine}
                    strokeWidth={2}
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
                              r={5}
                              fill={currentTheme.chartColors.highlightColor} // ✅ special color
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

                  {/* Predicted line */}
                  <Line
                    type="monotone"
                    dataKey="TotalPredicted"
                    stroke={currentTheme.chartColors.predictedLine}
                    strokeWidth={2}
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
                          r={4}
                          fill="white"
                          stroke={dotColor}
                          strokeWidth={2}
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
                    strokeWidth={2}
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
        return realForgingData.kpi_data;
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
        <Layout>
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
        </Layout>
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
                        className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full transition-all duration-300 ${
                          kpi.actual_per_tonne <= kpi.budget_per_tonne
                            ? "bg-red-100 text-red-700 border border-red-300 shadow-sm shadow-red-400/30 animate-pulse"
                            : "bg-green-100 text-green-700 border border-green-300 shadow-sm shadow-green-400/30"
                        }`}
                      >
                        {kpi.actual_per_tonne <= kpi.budget_per_tonne ? (
                          <>
                            <ArrowUp className="w-3 h-3" />
                            <span className="font-extrabold">
                              {Math.abs(kpi.ytdChange).toFixed(1)}%
                            </span>
                            <span className="text-xs">!</span>
                          </>
                        ) : (
                          <>
                            <ArrowDown className="w-3 h-3" />
                            <span className="font-extrabold">
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
                                  strokeWidth={2}
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
                              strokeWidth={2}
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
                                        strokeWidth={2}
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
                                    r={3}
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
                              strokeWidth={2}
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
                                    r={3}
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
                                strokeWidth={2}
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
                              strokeWidth={2}
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
                                        r={4}
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
                              strokeWidth={2}
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
      <div>
        {showCombinedView && renderCombinedChart()}
        {renderCardsView()}

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${currentTheme.secondaryText}`}
                >
                  Total KPIs
                </p>
                <p className={`text-2xl font-bold ${currentTheme.primaryText}`}>
                  {realForgingData.kpi_data.length}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-gradient-to-br ${currentTheme.accentGradient} rounded-2xl flex items-center justify-center`}
              >
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${currentTheme.secondaryText}`}
                >
                  Total YTD
                </p>
                <p
                  className={`text-2xl font-bold`}
                  style={{ color: currentTheme.chartColors.goodColor }}
                >
                  ₹
                  {realForgingData.kpi_data
                    .reduce((sum, kpi) => sum + kpi.ytd, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-gradient-to-br ${currentTheme.accentGradient} rounded-2xl flex items-center justify-center`}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${currentTheme.secondaryText}`}
                >
                  Location
                </p>
                <p className={`text-2xl font-bold ${currentTheme.primaryText}`}>
                  {realForgingData.meta.location}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-gradient-to-br ${currentTheme.accentGradient} rounded-2xl flex items-center justify-center`}
              >
                <Factory className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div
            className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${currentTheme.secondaryText}`}
                >
                  Process
                </p>
                <p
                  className={`text-2xl font-bold ${currentTheme.primaryText} capitalize`}
                >
                  {activeProcess}
                </p>
              </div>
              <div
                className={`w-12 h-12 bg-gradient-to-br ${currentTheme.accentGradient} rounded-2xl flex items-center justify-center`}
              >
                <Settings className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostScreener;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   LineChart,
//   Line,
//   ComposedChart,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine,
//   Area,
//   ReferenceArea,
// } from "recharts";
// import { Zap, Palette, Check, ChevronDown } from "lucide-react";

// import {
//   TrendingUp,
//   Factory,
//   Package,
//   Users,
//   Fuel,
//   Handshake,
//   Wrench,
//   Settings,
//   Building,
//   Box,
//   Truck,
//   ArrowUp,
//   ArrowDown,
// } from "lucide-react";
// import Layout from "./Layout";

// // Theme configurations
// const themes = {
//   coral: {
//     name: "Coral Sunset",
//     mainBg: "bg-gradient-to-br from-pink-50 via-coral-50 to-orange-50",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-coral-200/60",
//     shadow: "shadow-xl shadow-orange-400/20",
//     chartBg: "bg-gradient-to-br from-white via-coral-50/50 to-orange-50/40",
//     gridColor: "#fed7aa",
//     buttonBg: "bg-gradient-to-r from-coral-100 to-orange-100",
//     buttonHover: "hover:from-coral-200 hover:to-orange-200",
//     cardGradient: "from-coral-50 via-orange-50 to-pink-100",
//     dotPattern: "from-coral-500/5 via-orange-500/10 to-pink-500/5",
//     accentGradient: "from-coral-500 via-orange-500 to-pink-600",
//     glowEffect: "shadow-2xl shadow-coral-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-orange-500/40",
//     icon: "🌅",
//   },
//   ocean: {
//     name: "Ocean Breeze",
//     mainBg: "bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-blue-200/60",
//     shadow: "shadow-xl shadow-blue-400/20",
//     chartBg: "bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/40",
//     gridColor: "#dbeafe",
//     buttonBg: "bg-gradient-to-r from-blue-100 to-cyan-100",
//     buttonHover: "hover:from-blue-200 hover:to-cyan-200",
//     cardGradient: "from-blue-50 via-cyan-50 to-indigo-100",
//     dotPattern: "from-blue-500/5 via-cyan-500/10 to-indigo-500/5",
//     accentGradient: "from-blue-500 via-cyan-500 to-indigo-600",
//     glowEffect: "shadow-2xl shadow-blue-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-cyan-500/40",
//     icon: "🌊",
//   },
//   forest: {
//     name: "Forest Mist",
//     mainBg: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-emerald-200/60",
//     shadow: "shadow-xl shadow-green-400/20",
//     chartBg: "bg-gradient-to-br from-white via-green-50/50 to-emerald-50/40",
//     gridColor: "#d1fae5",
//     buttonBg: "bg-gradient-to-r from-emerald-100 to-green-100",
//     buttonHover: "hover:from-emerald-200 hover:to-green-200",
//     cardGradient: "from-emerald-50 via-green-50 to-teal-100",
//     dotPattern: "from-emerald-500/5 via-green-500/10 to-teal-500/5",
//     accentGradient: "from-emerald-500 via-green-500 to-teal-600",
//     glowEffect: "shadow-2xl shadow-emerald-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-green-500/40",
//     icon: "🌲",
//   },
//   lavender: {
//     name: "Lavender Dreams",
//     mainBg: "bg-gradient-to-br from-purple-50 via-violet-50 to-pink-100",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-purple-200/60",
//     shadow: "shadow-xl shadow-violet-400/20",
//     chartBg: "bg-gradient-to-br from-white via-purple-50/50 to-violet-50/40",
//     gridColor: "#e9d5ff",
//     buttonBg: "bg-gradient-to-r from-purple-100 to-violet-100",
//     buttonHover: "hover:from-purple-200 hover:to-violet-200",
//     cardGradient: "from-purple-50 via-violet-50 to-pink-100",
//     dotPattern: "from-purple-500/5 via-violet-500/10 to-pink-500/5",
//     accentGradient: "from-purple-500 via-violet-500 to-pink-600",
//     glowEffect: "shadow-2xl shadow-purple-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-violet-500/40",
//     icon: "🌸",
//   },
//   midnight: {
//     name: "Midnight Blue",
//     mainBg: "bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950",
//     cardBg:
//       "bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 backdrop-blur-xl",
//     modalBg: "bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl",
//     primaryText: "text-white",
//     secondaryText: "text-slate-300",
//     mutedText: "text-slate-400",
//     border: "border-blue-400/30",
//     shadow: "shadow-2xl shadow-blue-500/30",
//     chartBg:
//       "bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-indigo-950/80",
//     gridColor: "#4b5563",
//     buttonBg: "bg-gradient-to-r from-blue-800 to-indigo-800",
//     buttonHover: "hover:from-blue-700 hover:to-indigo-700",
//     cardGradient: "from-blue-900/80 via-indigo-900/70 to-slate-900/80",
//     dotPattern: "from-blue-500/10 via-indigo-500/15 to-purple-500/10",
//     accentGradient: "from-blue-400 via-indigo-400 to-purple-500",
//     glowEffect: "shadow-2xl shadow-blue-500/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-indigo-500/40",
//     icon: "🌙",
//   },
//   aurora: {
//     name: "Aurora Borealis",
//     mainBg: "bg-gradient-to-br from-slate-900 via-purple-950 to-emerald-950",
//     cardBg:
//       "bg-gradient-to-br from-slate-800/90 via-purple-900/95 to-slate-800/90 backdrop-blur-xl",
//     modalBg: "bg-gradient-to-br from-slate-900 to-purple-900 backdrop-blur-xl",
//     primaryText: "text-white",
//     secondaryText: "text-slate-300",
//     mutedText: "text-slate-400",
//     border: "border-emerald-400/30",
//     shadow: "shadow-2xl shadow-purple-500/30",
//     chartBg:
//       "bg-gradient-to-br from-slate-900/95 via-purple-950/90 to-emerald-950/80",
//     gridColor: "#4b5563",
//     buttonBg: "bg-gradient-to-r from-purple-800 to-emerald-800",
//     buttonHover: "hover:from-purple-700 hover:to-emerald-700",
//     cardGradient: "from-purple-900/80 via-emerald-900/70 to-slate-900/80",
//     dotPattern: "from-purple-500/10 via-emerald-500/15 to-cyan-500/10",
//     accentGradient: "from-purple-400 via-emerald-400 to-cyan-500",
//     glowEffect: "shadow-2xl shadow-purple-500/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-emerald-500/40",
//     icon: "🌌",
//   },
//   sunset: {
//     name: "Golden Sunset",
//     mainBg: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-100",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-amber-200/60",
//     shadow: "shadow-xl shadow-orange-400/20",
//     chartBg: "bg-gradient-to-br from-white via-amber-50/50 to-orange-50/40",
//     gridColor: "#fed7aa",
//     buttonBg: "bg-gradient-to-r from-amber-100 to-orange-100",
//     buttonHover: "hover:from-amber-200 hover:to-orange-200",
//     cardGradient: "from-amber-50 via-orange-50 to-red-100",
//     dotPattern: "from-amber-500/5 via-orange-500/10 to-red-500/5",
//     accentGradient: "from-amber-500 via-orange-500 to-red-600",
//     glowEffect: "shadow-2xl shadow-amber-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-orange-500/40",
//     icon: "🌇",
//   },
//   monochrome: {
//     name: "Monochrome",
//     mainBg: "bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-100",
//     cardBg: "bg-white/90 backdrop-blur-xl",
//     modalBg: "bg-white/95 backdrop-blur-xl",
//     primaryText: "text-slate-800",
//     secondaryText: "text-slate-600",
//     mutedText: "text-slate-500",
//     border: "border-gray-200/60",
//     shadow: "shadow-xl shadow-gray-400/20",
//     chartBg: "bg-gradient-to-br from-white via-gray-50/50 to-slate-50/40",
//     gridColor: "#e5e7eb",
//     buttonBg: "bg-gradient-to-r from-gray-100 to-slate-100",
//     buttonHover: "hover:from-gray-200 hover:to-slate-200",
//     cardGradient: "from-gray-50 via-slate-50 to-zinc-100",
//     dotPattern: "from-gray-500/5 via-slate-500/10 to-zinc-500/5",
//     accentGradient: "from-gray-500 via-slate-500 to-zinc-600",
//     glowEffect: "shadow-2xl shadow-gray-400/30",
//     hoverGlow: "hover:shadow-2xl hover:shadow-slate-500/40",
//     icon: "⚫",
//   },
// };

// // Theme Selector Component
// const ThemeSelector = ({ currentTheme, onThemeChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const currentThemeConfig = themes[currentTheme];

//   return (
//     <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`p-3 rounded-xl ${currentThemeConfig.cardBg} ${currentThemeConfig.border} border ${currentThemeConfig.shadow} transition-all duration-300 hover:scale-105 group flex items-center gap-2`}
//       >
//         <Palette className={`w-5 h-5 ${currentThemeConfig.primaryText}`} />
//         <span
//           className={`text-sm font-medium ${currentThemeConfig.primaryText} hidden sm:inline`}
//         >
//           {currentThemeConfig.name}
//         </span>
//         <ChevronDown
//           className={`w-4 h-4 ${
//             currentThemeConfig.mutedText
//           } transition-transform ${isOpen ? "rotate-180" : ""}`}
//         />
//       </button>

//       {isOpen && (
//         <div
//           className={`absolute right-0 mt-2 w-64 rounded-xl ${currentThemeConfig.cardBg} ${currentThemeConfig.border} border ${currentThemeConfig.shadow} overflow-hidden`}
//         >
//           <div className={`p-2 ${currentThemeConfig.primaryText}`}>
//             <div
//               className={`text-xs font-semibold ${currentThemeConfig.mutedText} uppercase tracking-wider px-3 py-2`}
//             >
//               Select Theme
//             </div>
//             <div className="grid grid-cols-2 gap-1">
//               {Object.entries(themes).map(([key, theme]) => (
//                 <button
//                   key={key}
//                   onClick={() => {
//                     onThemeChange(key);
//                     setIsOpen(false);
//                   }}
//                   className={`
//                     relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200
//                     ${
//                       currentTheme === key
//                         ? `${theme.buttonBg} ${theme.primaryText}`
//                         : `hover:${theme.buttonBg} ${currentThemeConfig.primaryText} hover:bg-gray-100`
//                     }
//                   `}
//                 >
//                   <span className="text-lg">{theme.icon}</span>
//                   <span className="font-medium truncate">{theme.name}</span>
//                   {currentTheme === key && (
//                     <Check className="w-3 h-3 ml-auto flex-shrink-0" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const realForgingData = {
//   meta: {
//     title: "Forging Cost Analysis - Complete",
//     location: "Ranjangaon",
//     lines: "Line 1 to 16",
//     currency: "INR",
//     unit: "per tonne",
//     data_source: "Excel Import - CleanDataForging.xlsx",
//     last_updated: "2025-01-18T18:00:00",
//     total_kpis: 12,
//   },
//   kpi_data: [
//     {
//       kpiName: "Consumables",
//       lastDayCost: 15.89,
//       lastWeek: 111.23,
//       mtd: 15.89,
//       lastMonth: 15.17,
//       lastQuarter: 9287.64,
//       ytd: 34725.811,
//       lastDayChange: 2.1,
//       lastWeekChange: 3.4,
//       mtdChange: 4.2,
//       lastMonthChange: 1.8,
//       lastQuarterChange: 5.6,
//       ytdChange: 8.2,
//       trend: [3632.95, 3875, 3230, 3470, 3542],
//       budget_per_tonne: 15.17,
//       actual_per_tonne: 15.89,
//       monthly_costs: [
//         3632.95, 3875, 3230, 3470.32, 0.0, 3541.75, 0.0, 4453.91, 3234.49,
//         3103.35, 3012.85, 3171.44,
//       ],
//     },
//     {
//       kpiName: "Power",
//       lastDayCost: 32.25,
//       lastWeek: 225.75,
//       mtd: 32.25,
//       lastMonth: 33.16,
//       lastQuarter: 20725.68,
//       ytd: 73591.491,
//       lastDayChange: -1.2,
//       lastWeekChange: -0.8,
//       mtdChange: -2.7,
//       lastMonthChange: -2.8,
//       lastQuarterChange: 1.2,
//       ytdChange: 3.4,
//       trend: [7374, 7183, 7116.2, 7477, 7290],
//       budget_per_tonne: 33.16,
//       actual_per_tonne: 32.25,
//       monthly_costs: [
//         7373.62, 7182.75, 7116.2, 7089.25, 6969.51, 6895.12, 6756.89, 6823.45,
//         6945.23, 7012.34, 6889.56, 6823.78,
//       ],
//     },
//     {
//       kpiName: "Fuel",
//       lastDayCost: 13.72,
//       lastWeek: 96.04,
//       mtd: 13.72,
//       lastMonth: 12.65,
//       lastQuarter: 8878.24,
//       ytd: 31476.451,
//       lastDayChange: 8.5,
//       lastWeekChange: 7.8,
//       mtdChange: 8.5,
//       lastMonthChange: 8.5,
//       lastQuarterChange: 6.2,
//       ytdChange: 4.8,
//       trend: [3136.49, 3344.52, 3025.01, 2989.34, 2756.89],
//       budget_per_tonne: 12.65,
//       actual_per_tonne: 13.72,
//       monthly_costs: [
//         3136.49, 3344.52, 3025.01, 2989.34, 2756.89, 2834.56, 2923.45, 2867.23,
//         2934.12, 3045.67, 2987.34, 2845.23,
//       ],
//     },
//     {
//       kpiName: "Labour",
//       lastDayCost: 9.93,
//       lastWeek: 69.51,
//       mtd: 9.93,
//       lastMonth: 8.02,
//       lastQuarter: 5580.46,
//       ytd: 19753.035,
//       lastDayChange: 23.8,
//       lastWeekChange: 21.4,
//       mtdChange: 23.8,
//       lastMonthChange: 23.8,
//       lastQuarterChange: 18.5,
//       ytdChange: 12.3,
//       trend: [2270.99, 2619.46, 2012.52, 2234.56, 2145.67],
//       budget_per_tonne: 8.02,
//       actual_per_tonne: 9.93,
//       monthly_costs: [
//         2270.99, 2619.46, 2012.52, 2234.56, 2145.67, 2389.45, 2234.78, 2456.89,
//         2345.12, 2123.45, 2267.34, 2189.67,
//       ],
//     },
//     {
//       kpiName: "Sub Contract",
//       lastDayCost: 35.9,
//       lastWeek: 251.3,
//       mtd: 35.9,
//       lastMonth: 29.71,
//       lastQuarter: 19969.12,
//       ytd: 73838.445,
//       lastDayChange: 20.8,
//       lastWeekChange: 18.2,
//       mtdChange: 20.8,
//       lastMonthChange: 20.8,
//       lastQuarterChange: 15.6,
//       ytdChange: 11.2,
//       trend: [8207.23, 7884.71, 7017.29, 7560.44, 7560.45],
//       budget_per_tonne: 29.71,
//       actual_per_tonne: 35.9,
//       monthly_costs: [
//         8207.23, 7884.71, 7017.29, 7560.44, 7560.44, 7667.0, 7667.0, 8090.04,
//         7442.78, 6338.62, 5766.86, 7863.48,
//       ],
//     },
//     {
//       kpiName: "Machine Hire Charges",
//       lastDayCost: 2.77,
//       lastWeek: 19.39,
//       mtd: 2.77,
//       lastMonth: 3.15,
//       lastQuarter: 2061.41,
//       ytd: 6734.137,
//       lastDayChange: -12.1,
//       lastWeekChange: -10.8,
//       mtdChange: -12.1,
//       lastMonthChange: -12.1,
//       lastQuarterChange: -8.5,
//       ytdChange: -3.2,
//       trend: [632.37, 509.66, 858.24, 779.37, 779.37],
//       budget_per_tonne: 3.15,
//       actual_per_tonne: 2.77,
//       monthly_costs: [
//         632.37, 509.66, 858.24, 779.37, 779.37, 704.58, 704.58, 738.87, 664.05,
//         715.39, 639.85, 491.76,
//       ],
//     },
//     {
//       kpiName: "Repair & Maintenance",
//       lastDayCost: 6.28,
//       lastWeek: 43.96,
//       mtd: 6.28,
//       lastMonth: 7.18,
//       lastQuarter: 7234.76,
//       ytd: 22693.379,
//       lastDayChange: 5.2,
//       lastWeekChange: 4.8,
//       mtdChange: 5.2,
//       lastMonthChange: 3.5,
//       lastQuarterChange: 6.1,
//       ytdChange: 7.8,
//       trend: [1436.47, 3871.06, 3336.9, 2162.51, 2162.51],
//       budget_per_tonne: 7.18,
//       actual_per_tonne: 6.28,
//       monthly_costs: [
//         1436.47, 3871.06, 3336.9, 2162.51, 2162.51, 1444.66, 1444.66, 2313.45,
//         1966.7, 2486.29, 1996.33, 1679.01,
//       ],
//     },
//     {
//       kpiName: "Employee Cost",
//       lastDayCost: 25.32,
//       lastWeek: 177.24,
//       mtd: 25.32,
//       lastMonth: 25.32,
//       lastQuarter: 15513.99,
//       ytd: 55278.593,
//       lastDayChange: -2.1,
//       lastWeekChange: -1.8,
//       mtdChange: -2.1,
//       lastMonthChange: -1.5,
//       lastQuarterChange: 0.8,
//       ytdChange: 2.3,
//       trend: [5787.85, 5755.55, 5248.11, 5572.07, 5572.07],
//       budget_per_tonne: 25.32,
//       actual_per_tonne: 25.32,
//       monthly_costs: [
//         5787.85, 5755.55, 5248.11, 5572.07, 5572.07, 5104.67, 5104.67, 6099.68,
//         5177.21, 6738.36, 5224.14, 3570.94,
//       ],
//     },
//     {
//       kpiName: "Establishment Expenses",
//       lastDayCost: 5.15,
//       lastWeek: 36.05,
//       mtd: 5.15,
//       lastMonth: 6.82,
//       lastQuarter: 3876.72,
//       ytd: 14255.899,
//       lastDayChange: 1.5,
//       lastWeekChange: 1.2,
//       mtdChange: 1.5,
//       lastMonthChange: 0.9,
//       lastQuarterChange: 2.4,
//       ytdChange: 3.6,
//       trend: [1177.42, 1286.86, 1281.15, 1309.54, 1309.54],
//       budget_per_tonne: 6.82,
//       actual_per_tonne: 5.15,
//       monthly_costs: [
//         1177.42, 1286.86, 1281.15, 1309.54, 1309.54, 1241.42, 1241.42, 1453.95,
//         1216.5, 1585.58, 1221.78, 1481.71,
//       ],
//     },
//     {
//       kpiName: "Packing",
//       lastDayCost: 6.67,
//       lastWeek: 46.69,
//       mtd: 6.67,
//       lastMonth: 7.98,
//       lastQuarter: 0.0,
//       ytd: 0.0,
//       lastDayChange: 3.8,
//       lastWeekChange: 3.2,
//       mtdChange: 3.8,
//       lastMonthChange: 2.7,
//       lastQuarterChange: 4.5,
//       ytdChange: 5.9,
//       trend: [1524, 1639, 2678, 2404, 1994],
//       budget_per_tonne: 7.98,
//       actual_per_tonne: 6.67,
//       monthly_costs: [
//         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
//       ],
//     },
//     {
//       kpiName: "Freight",
//       lastDayCost: 166.17,
//       lastWeek: 1163.22,
//       mtd: 166.17,
//       lastMonth: 151.11,
//       lastQuarter: 103110.13,
//       ytd: 332347.239,
//       lastDayChange: 6.7,
//       lastWeekChange: 5.9,
//       mtdChange: 6.7,
//       lastMonthChange: 5.2,
//       lastQuarterChange: 7.8,
//       ytdChange: 9.2,
//       trend: [3781, 4342, 3992, 3172, 3165],
//       budget_per_tonne: 0.0,
//       actual_per_tonne: 0.0,
//       monthly_costs: [3781, 4342, 3992, 3172, 3165],
//     },
//     {
//       kpiName: "Raw Material",
//       lastDayCost: 215.45,
//       lastWeek: 1508.15,
//       mtd: 215.45,
//       lastMonth: 210.32,
//       lastQuarter: 143914.35,
//       ytd: 565947.523,
//       lastDayChange: 2.4,
//       lastWeekChange: 2.1,
//       mtdChange: 2.4,
//       lastMonthChange: 2.4,
//       lastQuarterChange: 3.8,
//       ytdChange: 4.5,
//       trend: [98182, 100581, 97506, 101193, 90876],
//       budget_per_tonne: 210.32,
//       actual_per_tonne: 215.45,
//       monthly_costs: [98182, 100581, 97506, 101193, 90876],
//     },
//   ],
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
//         <p className="text-xs font-semibold text-gray-800 mb-2">{label}</p>
//         {payload.map((entry, index) => {
//           // Skip null values
//           if (entry.value === null || entry.value === undefined) return null;

//           return (
//             <div key={`item-${index}`} className="text-xs">
//               <span
//                 className="inline-block w-2 h-2 rounded-full mr-2"
//                 style={{ backgroundColor: entry.color }}
//               />
//               <span className="font-medium">{entry.name}: </span>
//               <span className="font-bold">
//                 {entry.dataKey.includes("Percent") ||
//                 entry.dataKey.includes("Target")
//                   ? `${entry.value}%`
//                   : `₹${entry.value.toLocaleString()}`}
//               </span>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
//   return null;
// };

// const CostScreener = () => {
//   const [activeTab, setActiveTab] = useState("production");
//   const [activeProcess, setActiveProcess] = useState("forging");
//   const [selectedLocation, setSelectedLocation] = useState("Ranjangaon");
//   const [showCombinedView, setShowCombinedView] = useState(true);
//   const [showMiniModal, setShowMiniModal] = useState(false);
//   const [miniModalPosition, setMiniModalPosition] = useState({ x: 0, y: 0 });
//   const [miniModalKpi, setMiniModalKpi] = useState(null);
//   const [activeMiniTab, setActiveMiniTab] = useState("Insights");
//   const [hoveredDataPoint, setHoveredDataPoint] = useState(null);
//   const [activeGraphTab, setActiveGraphTab] = useState("tonnage");
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [chartModalData, setChartModalData] = useState(null);
//   const [chartModalPosition, setChartModalPosition] = useState({ x: 0, y: 0 });
//   const [activeChartModalTab, setActiveChartModalTab] = useState("Insights");
//   const [cardTabs, setCardTabs] = useState({});
//   const [currentThemeName, setCurrentThemeName] = useState("ocean");

//   const currentTheme = themes[currentThemeName];

//   const iconMap = {
//     Consumables: Package,
//     Power: Zap,
//     Fuel: Fuel,
//     Labour: Users,
//     "Sub Contract": Handshake,
//     "Machine Hire Charges": Settings,
//     "Repair & Maintenance": Wrench,
//     "Employee Cost": Users,
//     "Establishment Expenses": Building,
//     Packing: Box,
//     Freight: Truck,
//     "Raw Material": Factory,
//   };

//   // April → March order
//   const monthNames = [
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//     "Jan",
//     "Feb",
//     "Mar",
//   ];

//   const modalRef = useRef(null);

//   const renderCombinedChart = () => {
//     const kpis = getCurrentData();
//     if (!kpis || kpis.length === 0) return null;

//     const fiscalMonthOrder = [3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2];
//     const manualPercentages = {
//       3: 20.41,
//       4: 21.46,
//       5: 20.97,
//       6: 20.17,
//       7: 21.34,
//     };

//     // EBITDA data from Excel sheet (percentage values)
//     const EBITDAActualData = {
//       3: 16.82, // Apr - Actual EBITDA %
//       4: 15.61, // May - Actual EBITDA %
//       5: 13.1, // Jun - Actual EBITDA %
//       6: 16.26, // Jul - Actual EBITDA %
//       7: 16.54, // Aug - Actual EBITDA %
//     };

//     const EBITDABudgetData = {
//       3: 18.78, // Apr - Budget EBITDA %
//       4: 18.89, // May - Budget EBITDA %
//       5: 18.93, // Jun - Budget EBITDA %
//       6: 19.15, // Jul - Budget EBITDA %
//       7: 19.2, // Aug - Budget EBITDA %
//     };

//     // Step 1: Build base data with EBITDA
//     let baseData = monthNames.map((m, idx) => {
//       const mi = fiscalMonthOrder[idx];
//       let total = 0;

//       kpis.forEach((k) => {
//         const arr =
//           Array.isArray(k.monthly_costs) && k.monthly_costs.length >= 12
//             ? k.monthly_costs
//             : Array.isArray(k.trend) && k.trend.length >= 12
//             ? k.trend
//             : new Array(12).fill(0);
//         total += arr[mi] ?? 0;
//       });

//       let percent = manualPercentages[mi] || 20 + mi * 0.15;
//       let EBITDAActual = EBITDAActualData[mi] || null;
//       let EBITDABudget = EBITDABudgetData[mi] || null;

//       return {
//         month: m,
//         TotalActual: idx <= 4 ? parseFloat(total.toFixed(2)) : null,
//         TotalPredicted: idx === 4 ? parseFloat(total.toFixed(2)) : null,
//         EBITDAActual: idx <= 4 ? EBITDAActual : null,
//         EBITDABudget: idx <= 4 ? EBITDABudget : null, // Only show budget for actual months
//         PercentActual: idx <= 4 ? parseFloat(percent.toFixed(2)) : null,
//         PercentPredicted: idx === 4 ? parseFloat(percent.toFixed(2)) : null,
//       };
//     });

//     // Step 2: Apply prediction logic (only for Total and Percentage, not EBITDA)
//     for (let idx = 5; idx < baseData.length; idx++) {
//       // Total predictions
//       const lastActual =
//         baseData[idx - 1].TotalActual ?? baseData[idx - 1].TotalPredicted;
//       const prevActual =
//         baseData[idx - 2].TotalActual ?? baseData[idx - 2].TotalPredicted;

//       const direction = lastActual >= prevActual ? 1 : -1;
//       const stepChange =
//         Math.abs(lastActual - prevActual) * 0.2 || lastActual * 0.05;

//       baseData[idx].TotalPredicted = parseFloat(
//         (lastActual + direction * stepChange).toFixed(2)
//       );

//       // No EBITDA predictions or budget for future months
//       baseData[idx].EBITDABudget = null;
//       baseData[idx].EBITDAPredicted = null;

//       // Percentage predictions
//       const lastPercent =
//         baseData[idx - 1].PercentActual ?? baseData[idx - 1].PercentPredicted;
//       baseData[idx].PercentPredicted = parseFloat(
//         (lastPercent + direction * 0.1).toFixed(2)
//       );
//     }

//     const combinedData = baseData;

//     return (
//       <div
//         className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-4 mb-6 ${currentTheme.border} border transition-all duration-300`}
//       >
//         {/* Tabs */}
//         <div className="flex gap-2 mb-3">
//           {["tonnage", "EBITDA", "percentage"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveGraphTab(tab)}
//               className={`px-4 py-1 rounded-lg text-sm font-medium ${
//                 activeGraphTab === tab
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {tab === "tonnage"
//                 ? "Cost Per Ton"
//                 : tab === "EBITDA"
//                 ? "EBITDA"
//                 : "Percentage"}
//             </button>
//           ))}
//         </div>

//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               data={combinedData}
//               margin={{ top: 20, right: 50, left: 10, bottom: 10 }}
//             >
//               <CartesianGrid
//                 strokeDasharray="3 3"
//                 stroke={currentTheme.gridColor}
//               />
//               <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//               <YAxis
//                 domain={
//                   activeGraphTab === "tonnage"
//                     ? [10000, "auto"]
//                     : activeGraphTab === "EBITDA"
//                     ? [5000, "auto"]
//                     : ["auto", "auto"]
//                 }
//                 tick={{ fontSize: 12 }}
//                 label={{
//                   value:
//                     activeGraphTab === "tonnage"
//                       ? "Manufacturing Cost"
//                       : activeGraphTab === "EBITDA"
//                       ? "EBITDA Value"
//                       : "% of Production",
//                   angle: -90,
//                   position: "insideLeft",
//                 }}
//               />

//               <ReferenceLine
//                 x="Sep"
//                 stroke="#9ca3af"
//                 strokeDasharray="3 3"
//                 label={{
//                   value: "Predicted →",
//                   position: "insideTopRight",
//                   fontSize: 11,
//                 }}
//               />

//               {/* Reference lines for targets */}
//               {activeGraphTab === "tonnage" && (
//                 <ReferenceLine
//                   y={30000}
//                   stroke="#22c55e"
//                   strokeDasharray="5 5"
//                   label={{
//                     value: "Target",
//                     position: "right",
//                     fill: "#22c55e",
//                     fontSize: 12,
//                   }}
//                 />
//               )}

//               <Tooltip
//                 content={<CustomTooltip />}
//                 cursor={{ strokeDasharray: "3 3" }}
//                 position={{ y: 0 }}
//                 wrapperStyle={{ zIndex: 100 }}
//               />

//               <Legend
//                 verticalAlign="top"
//                 height={30}
//                 wrapperStyle={{ fontSize: 13, fontWeight: 500 }}
//               />

//               {activeGraphTab === "tonnage" && (
//                 <>
//                   <Line
//                     type="monotone"
//                     dataKey="TotalActual"
//                     stroke="#2563eb"
//                     strokeWidth={1}
//                     name="Total Cost (Actual)"
//                     dot={(props) => {
//                       const { cx, cy, index, payload } = props;
//                       if (payload.TotalActual === null) return null;

//                       const dotColor =
//                         payload.TotalActual <= 30000 ? "#10b981" : "#ef4444";

//                       const isCurrentPeriod = index === 4;

//                       if (isCurrentPeriod) {
//                         return (
//                           <g>
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={5}
//                               fill={dotColor}
//                               stroke="white"
//                               strokeWidth={2}
//                             />
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={12}
//                               fill={dotColor}
//                               opacity={0.2}
//                             />
//                             <text
//                               x={cx}
//                               y={cy}
//                               fill="white"
//                               fontSize="14"
//                               fontWeight="bold"
//                               textAnchor="middle"
//                               dominantBaseline="middle"
//                             >
//                               +
//                             </text>
//                           </g>
//                         );
//                       }

//                       return (
//                         <circle
//                           cx={cx}
//                           cy={cy}
//                           r={3}
//                           fill={dotColor}
//                           stroke="white"
//                           strokeWidth={1}
//                         />
//                       );
//                     }}
//                   />

//                   <Line
//                     type="monotone"
//                     dataKey="TotalPredicted"
//                     stroke="#f59e0b"
//                     strokeWidth={1}
//                     dot={{
//                       fill: "white",
//                       stroke: "#f59e0b",
//                     }}
//                     connectNulls={true}
//                     name="Total Cost (Predicted)"
//                   />
//                 </>
//               )}

//               {/* EBITDA Lines - Percentage values */}
//               {activeGraphTab === "EBITDA" && (
//                 <>
//                   <Line
//                     type="monotone"
//                     dataKey="EBITDABudget"
//                     stroke="#fbbf24"
//                     strokeWidth={2}
//                     name="EBITDA Budget %"
//                     dot={false}
//                     activeDot={{ r: 5, fill: "#fbbf24" }}
//                     connectNulls={false}
//                   />

//                   <Line
//                     type="monotone"
//                     dataKey="EBITDAActual"
//                     stroke="#059669"
//                     strokeWidth={2}
//                     name="EBITDA Actual %"
//                     dot={(props) => {
//                       const { cx, cy, index, payload } = props;
//                       if (payload.EBITDAActual === null) return null;

//                       const dotColor =
//                         payload.EBITDAActual >= (payload.EBITDABudget || 19)
//                           ? "#10b981"
//                           : "#ef4444";
//                       const isCurrentPeriod = index === 4;

//                       if (isCurrentPeriod) {
//                         return (
//                           <g>
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={5}
//                               fill={dotColor}
//                               stroke="white"
//                               strokeWidth={2}
//                             />
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={12}
//                               fill={dotColor}
//                               opacity={0.2}
//                             />
//                             <text
//                               x={cx}
//                               y={cy}
//                               fill="white"
//                               fontSize="14"
//                               fontWeight="bold"
//                               textAnchor="middle"
//                               dominantBaseline="middle"
//                             >
//                               +
//                             </text>
//                           </g>
//                         );
//                       }

//                       return (
//                         <circle
//                           cx={cx}
//                           cy={cy}
//                           r={3}
//                           fill={dotColor}
//                           stroke="white"
//                           strokeWidth={1}
//                         />
//                       );
//                     }}
//                   />
//                 </>
//               )}

//               {/* Percentage Lines - keep as is */}
//               {activeGraphTab === "percentage" && (
//                 <>
//                   <Line
//                     type="monotone"
//                     dataKey="PercentActual"
//                     stroke="#dc2626"
//                     strokeWidth={2}
//                     dot={(props) => {
//                       const { cx, cy, index, payload } = props;
//                       if (payload.PercentActual === null) return null;

//                       const isCurrentPeriod = index === 4;

//                       if (isCurrentPeriod) {
//                         return (
//                           <g>
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={2}
//                               fill="#dc2626"
//                               stroke="white"
//                               strokeWidth={1}
//                             />
//                             <circle
//                               cx={cx}
//                               cy={cy}
//                               r={12}
//                               fill="#dc2626"
//                               opacity={0.2}
//                             />
//                             <text
//                               x={cx}
//                               y={cy}
//                               fill="white"
//                               fontSize="14"
//                               fontWeight="bold"
//                               textAnchor="middle"
//                               dominantBaseline="middle"
//                             >
//                               +
//                             </text>
//                           </g>
//                         );
//                       }

//                       return <circle cx={cx} cy={cy} r={3} fill="#dc2626" />;
//                     }}
//                     name="% of Production (Actual)"
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="productionTarget"
//                     stroke="#fbbf24"
//                     strokeWidth={2}
//                     dot={false}
//                     activeDot={{ r: 5, fill: "#fbbf24" }}
//                     name=""
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="PercentPredicted"
//                     stroke="#f87171"
//                     strokeWidth={2}
//                     dot={{
//                       r: 3,
//                       fill: "white",
//                       stroke: "#f87171",
//                       strokeWidth: 2,
//                     }}
//                     strokeDasharray="6 4"
//                     connectNulls={true}
//                     name="% of Production (Predicted)"
//                   />
//                 </>
//               )}
//               <defs>
//                 <linearGradient
//                   id="combinedActualGradient"
//                   x1="0"
//                   y1="0"
//                   x2="0"
//                   y2="1"
//                 >
//                   <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
//                   <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
//                 </linearGradient>
//                 <linearGradient
//                   id="combinedPredictionGradient"
//                   x1="0"
//                   y1="0"
//                   x2="0"
//                   y2="1"
//                 >
//                   <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
//                   <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.05} />
//                 </linearGradient>
//               </defs>
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     const data = getCurrentData();
//     if (data && data.length > 0) {
//       const initialTabs = {};
//       data.forEach((kpi) => {
//         initialTabs[kpi.kpiName] = "production";
//       });
//       setCardTabs((prev) => ({ ...initialTabs, ...prev }));
//     }
//   }, [activeTab, activeProcess, selectedLocation]);

//   const getCurrentData = () => {
//     if (activeTab === "production" || activeTab === "sale") {
//       if (activeProcess === "forging" && selectedLocation === "Ranjangaon") {
//         return realForgingData.kpi_data;
//       }
//     }
//     return [];
//   };

//   const buildChartData = (kpi) => {
//     if (!kpi || !kpi.trend) return [];

//     const kpiTargetValues = {
//       Consumables: [
//         3500, 3400, 3300, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800,
//       ],
//       Power: [
//         7200, 7100, 7000, 7100, 7150, 7200, 7250, 7300, 7350, 7400, 7450, 7500,
//       ],
//       Fuel: [
//         3000, 2950, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350,
//       ],
//       Labour: [
//         2200, 2150, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550,
//       ],
//       "Sub Contract": [
//         7500, 7400, 7300, 7400, 7450, 7500, 7550, 7600, 7650, 7700, 7750, 7800,
//       ],
//       "Machine Hire Charges": [
//         700, 680, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840,
//       ],
//       "Repair & Maintenance": [
//         2500, 2400, 2300, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800,
//       ],
//       "Employee Cost": [
//         5500, 5400, 5300, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750, 5800,
//       ],
//       "Establishment Expenses": [
//         1300, 1280, 1260, 1280, 1300, 1320, 1340, 1360, 1380, 1400, 1420, 1440,
//       ],
//       Packing: [
//         2000, 1950, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350,
//       ],
//       Freight: [
//         3500, 3450, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850,
//       ],
//       "Raw Material": [
//         95000, 94000, 93000, 94000, 94500, 95000, 95500, 96000, 96500, 97000,
//         97500, 98000,
//       ],
//     };

//     const targetValuesForKpi =
//       kpiTargetValues[kpi.kpiName] ||
//       new Array(12).fill(kpi.budget_per_tonne * 100 || 1000);

//     const kpiTargetPercentages = {
//       Consumables: { 0: 2.2, 1: 1.94, 2: 1.94, 3: 1.94, 4: 1.94 },
//       Power: { 0: 4.24, 1: 4.24, 2: 4.24, 3: 4.24, 4: 4.24 },
//       Fuel: { 0: 1.62, 1: 1.62, 2: 1.62, 3: 1.62, 4: 1.62 },
//       Labour: { 0: 1.03, 1: 1.03, 2: 1.03, 3: 1.03, 4: 1.03 },
//       "Sub Contract": { 0: 3.8, 1: 3.8, 2: 3.8, 3: 3.8, 4: 3.8 },
//       "Machine Hire Charges": { 0: 0.4, 1: 0.4, 2: 0.4, 3: 0.4, 4: 0.4 },
//       "Repair & Maintenance": { 0: 0.92, 1: 0.92, 2: 0.92, 3: 0.92, 4: 0.92 },
//       "Employee Cost": { 0: 3.24, 1: 3.18, 2: 3.16, 3: 3.0, 4: 2.89 },
//       "Establishment Expenses": { 0: 0.87, 1: 0.81, 2: 0.79, 3: 0.74, 4: 0.79 },
//       Packing: { 0: 1.02, 1: 1.02, 2: 1.02, 3: 1.02, 4: 1.02 },
//       Freight: { 0: 2.55, 1: 2.55, 2: 2.55, 3: 2.55, 4: 2.55 },
//       "Raw Material": { 0: 59.6, 1: 59.6, 2: 59.6, 3: 59.6, 4: 59.6 },
//     };

//     const kpiPercentages = {
//       Consumables: {
//         0: 2.2,
//         1: 2.29,
//         2: 2.04,
//         3: 2.07,
//         4: 2.07,
//       },
//       Power: {
//         0: 4.47,
//         1: 4.24,
//         2: 4.5,
//         3: 4.45,
//         4: 5.36,
//       },
//       Fuel: {
//         0: 1.9,
//         1: 1.98,
//         2: 1.91,
//         3: 1.93,
//         4: 1.6,
//       },
//       Labour: {
//         0: 1.38,
//         1: 1.55,
//         2: 1.27,
//         3: 1.28,
//         4: 1.44,
//       },
//       "Sub Contract": {
//         0: 4.98,
//         1: 4.66,
//         2: 4.44,
//         3: 4.5,
//         4: 4.42,
//       },
//       "Machine Hire Charges": {
//         0: 0.38,
//         1: 0.3,
//         2: 0.54,
//         3: 0.36,
//         4: 0.4,
//       },
//       "Repair & Maintenance": {
//         0: 0.87,
//         1: 2.29,
//         2: 2.11,
//         3: 1.88,
//         4: 1.91,
//       },
//       "Employee Cost": {
//         0: 3.51,
//         1: 3.4,
//         2: 3.32,
//         3: 2.99,
//         4: 3.33,
//       },
//       "Establishment Expenses": {
//         0: 0.71,
//         1: 0.76,
//         2: 0.81,
//         3: 0.71,
//         4: 0.8,
//       },
//       Packing: {
//         0: 0.92,
//         1: 0.97,
//         2: 1.7,
//         3: 1.43,
//         4: 1.29,
//       },
//       Freight: {
//         0: 2.29,
//         1: 2.56,
//         2: 2.53,
//         3: 1.89,
//         4: 2.05,
//       },
//       "Raw Material": {
//         0: 59.55,
//         1: 59.4,
//         2: 61.71,
//         3: 60.25,
//         4: 58.79,
//       },
//     };

//     const historicalData = kpi.trend.map((value, index) => {
//       let productionPercent = null;
//       let targetValue = targetValuesForKpi[index];

//       if (
//         kpiPercentages[kpi.kpiName] &&
//         kpiPercentages[kpi.kpiName].hasOwnProperty(index)
//       ) {
//         productionPercent = kpiPercentages[kpi.kpiName][index];
//       }

//       let productionTarget = null;
//       if (
//         kpiTargetPercentages[kpi.kpiName] &&
//         kpiTargetPercentages[kpi.kpiName].hasOwnProperty(index)
//       ) {
//         productionTarget = kpiTargetPercentages[kpi.kpiName][index];
//       }

//       const isLastPoint = index === kpi.trend.length - 1;

//       return {
//         month: monthNames[index] || `M${index + 1}`,
//         actual: parseFloat(value.toFixed(2)),
//         prediction: isLastPoint ? parseFloat(value.toFixed(2)) : null,
//         target: targetValue,
//         productionPercent,
//         productionPercentPredicted: isLastPoint ? productionPercent : null,
//         productionTarget,
//         isHistorical: true,
//         isHighlighted: isLastPoint,
//         variance: value - targetValue,
//       };
//     });

//     const lastValue = kpi.trend[kpi.trend.length - 1];
//     const prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
//     const direction = lastValue >= prevValue ? 1 : -1;

//     const predictionData = [];

//     for (let i = 0; i < 6; i++) {
//       const monthIndex = (kpi.trend.length + i) % 12;

//       const stepChange =
//         Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;
//       const predictedValue = lastValue + direction * stepChange * (i + 1);

//       let productionPercentPredicted = null;
//       if (kpiPercentages[kpi.kpiName] && kpiPercentages[kpi.kpiName][0]) {
//         const basePercent = kpiPercentages[kpi.kpiName][0];
//         productionPercentPredicted = basePercent + direction * 0.1 * (i + 1);
//       }

//       predictionData.push({
//         month: monthNames[monthIndex] || `M${monthIndex + 1}`,
//         actual: null,
//         prediction: parseFloat(predictedValue.toFixed(2)),
//         target: null,
//         targetForCheck: targetValuesForKpi[monthIndex] ?? targetValuesForKpi[0],
//         productionPercent: null,
//         productionPercentPredicted: productionPercentPredicted
//           ? parseFloat(productionPercentPredicted.toFixed(2))
//           : null,
//         productionTarget: null,
//         productionTargetForCheck:
//           (kpiTargetPercentages[kpi.kpiName] &&
//             (kpiTargetPercentages[kpi.kpiName][monthIndex] ??
//               kpiTargetPercentages[kpi.kpiName][0])) ||
//           null,
//         isHistorical: false,
//         isHighlighted: false,
//         variance: null,
//       });
//     }

//     return [...historicalData, ...predictionData];
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         setShowMiniModal(false);
//       }
//     }

//     if (showMiniModal) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showMiniModal]);

//   const renderCardsView = () => {
//     const data = getCurrentData();

//     if (!data || data.length === 0) {
//       return (
//         <Layout>
//           <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
//             <Factory className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-600 mb-2">
//               No Data Available
//             </h3>
//             <p className="text-gray-500 mb-4">
//               Only Forging process data is available for Ranjangaon location.
//             </p>
//             <div className="text-xs text-gray-400 bg-gray-50 rounded-lg p-3 inline-block">
//               Source: {realForgingData.meta.data_source}
//             </div>
//           </div>
//         </Layout>
//       );
//     }

//     return (
//       <div className="relative min-h-96 rounded-2xl overflow-hidden">
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${currentTheme.cardGradient} transition-all duration-500`}
//         ></div>
//         <div
//           className={`absolute inset-0 bg-gradient-to-tr ${currentTheme.dotPattern} opacity-50 transition-all duration-500`}
//         ></div>
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage: `radial-gradient(circle at 20px 20px, ${
//               currentThemeName.includes("midnight") ||
//               currentThemeName.includes("aurora")
//                 ? "#6366f1"
//                 : "#3b82f6"
//             } 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         ></div>

//         <div className="relative z-10 p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data.map((kpi, idx) => {
//               const IconComponent = iconMap[kpi.kpiName] || Package;
//               const chartData = buildChartData(kpi);
//               const currentCardTab = cardTabs[kpi.kpiName] || "production";

//               return (
//                 <div
//                   key={`${kpi.kpiName}-${idx}`}
//                   className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl ${currentTheme.shadow} hover:shadow-xl transition-all duration-300 p-4 ${currentTheme.border} border hover:border-blue-200/60 cursor-pointer group relative`}
//                 >
//                   {/* Header - Compact and focused */}
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
//                         <IconComponent className="w-4 h-4 text-white" />
//                       </div>
//                       <div>
//                         <div
//                           className={`text-xs font-bold ${currentTheme.primaryText} leading-tight`}
//                         >
//                           {kpi.kpiName}
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className={`flex items-center gap-1 text-xs font-medium ${
//                         kpi.actual_per_tonne > kpi.budget_per_tonne
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {kpi.actual_per_tonne > kpi.budget_per_tonne ? (
//                         <ArrowDown className="w-3 h-3" />
//                       ) : (
//                         <ArrowUp className="w-3 h-3" />
//                       )}
//                       {Math.abs(kpi.ytdChange).toFixed(1)}%
//                     </div>
//                   </div>

//                   <div className="absolute top-2 right-10 z-10 mr-4">
//                     <div className="bg-white/80 backdrop-blur-sm rounded-full p-0.5 shadow-sm border border-gray-200/50">
//                       <div className="relative flex">
//                         <div
//                           className={`absolute h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out ${
//                             currentCardTab === "production"
//                               ? "w-12 left-0"
//                               : "w-10 left-12"
//                           }`}
//                           style={{
//                             boxShadow: "0 2px 4px rgba(59, 130, 246, 0.3)",
//                           }}
//                         />

//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setCardTabs((prev) => ({
//                               ...prev,
//                               [kpi.kpiName]: "production",
//                             }));
//                           }}
//                           className={`relative px-2 py-1 text-[9px] font-semibold transition-colors duration-300 rounded-full w-12 ${
//                             currentCardTab === "production"
//                               ? "text-white"
//                               : "text-gray-500 hover:text-gray-700"
//                           }`}
//                         >
//                           Prod
//                         </button>

//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             setCardTabs((prev) => ({
//                               ...prev,
//                               [kpi.kpiName]: "sale",
//                             }));
//                           }}
//                           className={`relative px-2 py-1 text-[9px] font-semibold transition-colors duration-300 rounded-full w-10 ${
//                             currentCardTab === "sale"
//                               ? "text-white"
//                               : "text-gray-500 hover:text-gray-700"
//                           }`}
//                         >
//                           Sale
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Chart - Main focus, large and clear */}
//                   <div className="relative h-56 mb-3">
//                     <ResponsiveContainer width="95%" height="100%">
//                       <ComposedChart
//                         data={chartData}
//                         margin={{ top: 15, right: 15, left: 15, bottom: 15 }}
//                         onMouseMove={(e) => {
//                           if (
//                             e &&
//                             e.activePayload &&
//                             e.activePayload.length > 0
//                           ) {
//                             setHoveredDataPoint(e.activePayload[0].payload);
//                             setCursorPosition({
//                               x: e.chartX || 0,
//                               y: e.chartY || 0,
//                             });
//                           }
//                         }}
//                         onMouseLeave={() => {
//                           setHoveredDataPoint(null);
//                         }}
//                       >
//                         <defs>
//                           {chartData.map((entry, index) => {
//                             if (entry.target === null || entry.actual === null)
//                               return null;

//                             const nextEntry = chartData[index + 1];
//                             if (!nextEntry) return null;

//                             const maxY =
//                               Math.max(
//                                 ...chartData
//                                   .filter((d) => d.actual || d.prediction)
//                                   .map((d) =>
//                                     Math.max(
//                                       d.actual || 0,
//                                       d.prediction || 0,
//                                       d.target || 0
//                                     )
//                                   )
//                               ) * 1.1;

//                             return (
//                               <React.Fragment key={`area-${index}`}>
//                                 <ReferenceArea
//                                   x1={entry.month}
//                                   x2={entry.month}
//                                   y1={0}
//                                   y2={entry.target}
//                                   fill="#10b981"
//                                   fillOpacity={0.1}
//                                 />
//                                 <ReferenceArea
//                                   x1={entry.month}
//                                   x2={entry.month}
//                                   y1={entry.target}
//                                   y2={maxY}
//                                   fill="#ef4444"
//                                   fillOpacity={0.1}
//                                 />
//                               </React.Fragment>
//                             );
//                           })}
//                           <linearGradient
//                             id={`actualGradient-${idx}`}
//                             x1="0"
//                             y1="0"
//                             x2="0"
//                             y2="1"
//                           >
//                             <stop
//                               offset="5%"
//                               stopColor="#3b82f6"
//                               stopOpacity={0.4}
//                             />
//                             <stop
//                               offset="95%"
//                               stopColor="#3b82f6"
//                               stopOpacity={0.1}
//                             />
//                           </linearGradient>
//                           <linearGradient
//                             id={`predictionGradient-${idx}`}
//                             x1="0"
//                             y1="0"
//                             x2="0"
//                             y2="1"
//                           >
//                             <stop
//                               offset="5%"
//                               stopColor="#8b5cf6"
//                               stopOpacity={0.3}
//                             />
//                             <stop
//                               offset="95%"
//                               stopColor="#8b5cf6"
//                               stopOpacity={0.05}
//                             />
//                           </linearGradient>
//                           <filter id={`glow-${idx}`}>
//                             <feGaussianBlur
//                               stdDeviation="3"
//                               result="coloredBlur"
//                             />
//                             <feMerge>
//                               <feMergeNode in="coloredBlur" />
//                               <feMergeNode in="SourceGraphic" />
//                             </feMerge>
//                           </filter>
//                         </defs>
//                         <CartesianGrid
//                           strokeDasharray="3 3"
//                           stroke="#f0f0f0"
//                           opacity={0.6}
//                         />
//                         <XAxis
//                           dataKey="month"
//                           tick={{ fontSize: 11, fontWeight: 500 }}
//                           axisLine={false}
//                           tickLine={false}
//                         />
//                         <YAxis
//                           tick={{ fontSize: 11 }}
//                           axisLine={false}
//                           tickLine={false}
//                           label={{
//                             value:
//                               activeGraphTab === "tonnage"
//                                 ? "Cost"
//                                 : "Production %",
//                             angle: -90,
//                             position: "insideLeft",
//                             fontSize: 11,
//                           }}
//                         />

//                         <Tooltip
//                           content={({ active, payload, label }) => {
//                             if (!active || !payload || !payload.length)
//                               return null;

//                             const uniquePayload = payload.filter(
//                               (item, index, self) =>
//                                 index ===
//                                 self.findIndex(
//                                   (p) => p.dataKey === item.dataKey
//                                 )
//                             );

//                             return (
//                               <div className="bg-white p-2 rounded shadow text-xs border border-gray-200">
//                                 <p className="font-semibold mb-1">{label}</p>
//                                 {uniquePayload.map((entry, i) => {
//                                   if (
//                                     entry.value === null ||
//                                     entry.value === undefined
//                                   )
//                                     return null;

//                                   return (
//                                     <p key={i} style={{ color: entry.color }}>
//                                       {entry.name}:{" "}
//                                       {entry.dataKey.includes("Percent") ||
//                                       entry.dataKey.includes("EBITDA")
//                                         ? `${entry.value}%`
//                                         : `₹${entry.value.toLocaleString()}`}
//                                     </p>
//                                   );
//                                 })}
//                               </div>
//                             );
//                           }}
//                         />
//                         {activeGraphTab === "tonnage" && (
//                           <>
//                             <Area
//                               type="monotone"
//                               dataKey="actual"
//                               stroke="none"
//                               fill={`url(#actualGradient-${idx})`}
//                               dot={false}
//                               activeDot={{ r: 6, fill: "#3b82f6" }}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="prediction"
//                               stroke="none"
//                               fill={`url(#predictionGradient-${idx})`}
//                               dot={false}
//                               activeDot={{ r: 6, fill: "#8b5cf6" }}
//                             />
//                             {chartData.some(
//                               (d) => d.isHistorical && d.target
//                             ) && (
//                               <Line
//                                 type="monotone"
//                                 dataKey="target"
//                                 stroke="#fbbf24"
//                                 strokeWidth={1}
//                                 dot={false}
//                                 activeDot={{ r: 1, fill: "#fbbf24" }}
//                               />
//                             )}

//                             <Line
//                               type="monotone"
//                               dataKey="actual"
//                               stroke="#6b7280"
//                               strokeWidth={1}
//                               dot={(props) => {
//                                 const { cx, cy, payload, index } = props;
//                                 if (payload?.actual == null) return null;

//                                 const dotColor =
//                                   payload.actual <= payload.target
//                                     ? "#10b981"
//                                     : "#ef4444";
//                                 const isLastActual =
//                                   payload.isHistorical &&
//                                   (!chartData[index + 1] ||
//                                     chartData[index + 1].isHistorical ===
//                                       false);

//                                 if (isLastActual) {
//                                   return (
//                                     <g>
//                                       <circle
//                                         cx={cx}
//                                         cy={cy}
//                                         r={2}
//                                         fill={dotColor}
//                                         stroke="white"
//                                         strokeWidth={2}
//                                       />
//                                       <circle
//                                         cx={cx}
//                                         cy={cy}
//                                         r={12}
//                                         fill={dotColor}
//                                         opacity={0.2}
//                                         style={{
//                                           cursor: "pointer",
//                                           pointerEvents: "auto",
//                                         }}
//                                         onClick={(e) => {
//                                           e.stopPropagation();
//                                           const rect = e.currentTarget
//                                             .closest("svg")
//                                             .getBoundingClientRect();
//                                           setChartModalData({
//                                             ...payload,
//                                             kpiName: kpi.kpiName,
//                                           });
//                                           setChartModalPosition({
//                                             x: rect.left + cx,
//                                             y: rect.top + cy - 150,
//                                           });
//                                         }}
//                                       />
//                                       <text
//                                         x={cx}
//                                         y={cy}
//                                         fill="white"
//                                         fontSize="14"
//                                         fontWeight="bold"
//                                         textAnchor="middle"
//                                         dominantBaseline="middle"
//                                         style={{
//                                           pointerEvents: "none",
//                                           userSelect: "none",
//                                         }}
//                                       >
//                                         +
//                                       </text>
//                                     </g>
//                                   );
//                                 }

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={3}
//                                     fill={dotColor}
//                                     stroke="white"
//                                     strokeWidth={1}
//                                   />
//                                 );
//                               }}
//                             />

//                             <Line
//                               type="monotone"
//                               dataKey="prediction"
//                               stroke="#8b5cf6"
//                               strokeWidth={1}
//                               strokeDasharray="5 5"
//                               connectNulls={false}
//                               dot={(props) => {
//                                 const { cx, cy, payload } = props;
//                                 if (payload.prediction === null) return null;

//                                 const dotColor =
//                                   payload.prediction >
//                                   (payload.targetForCheck ?? 0)
//                                     ? "#ef4444"
//                                     : "#10b981";

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={3}
//                                     fill={dotColor}
//                                     stroke="white"
//                                     strokeWidth={1}
//                                   />
//                                 );
//                               }}
//                               activeDot={(props) => {
//                                 const { cx, cy, payload } = props;
//                                 if (payload.prediction === null) return null;

//                                 const dotColor =
//                                   payload.prediction >
//                                   (payload.target ?? Infinity)
//                                     ? "#ef4444"
//                                     : "#10b981";

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={5}
//                                     fill={dotColor}
//                                   />
//                                 );
//                               }}
//                             />
//                           </>
//                         )}
//                         {/* Percentage Mode */}
//                         {activeGraphTab === "percentage" && (
//                           <>
//                             <Area
//                               type="monotone"
//                               dataKey="PercentActual"
//                               stroke="none"
//                               fill="url(#combinedActualGradient)"
//                               dot={false}
//                             />
//                             <Area
//                               type="monotone"
//                               dataKey="PercentPredicted"
//                               stroke="none"
//                               fill="url(#combinedPredictionGradient)"
//                               dot={false}
//                             />
//                             {chartData.some(
//                               (d) => d.isHistorical && d.productionTarget
//                             ) && (
//                               <Line
//                                 type="monotone"
//                                 dataKey="productionTarget"
//                                 stroke="#fbbf24"
//                                 strokeWidth={2}
//                                 dot={false}
//                                 activeDot={{ r: 5, fill: "#fbbf24" }}
//                                 name="Target %"
//                               />
//                             )}

//                             <Line
//                               type="monotone"
//                               dataKey="productionPercent"
//                               stroke="#6b7280"
//                               strokeWidth={2}
//                               connectNulls={false}
//                               name="Actual %"
//                               dot={(props) => {
//                                 const { cx, cy, index, payload } = props;

//                                 if (payload.productionPercent === null)
//                                   return null;

//                                 const isLastActual =
//                                   payload.productionPercent !== null &&
//                                   payload.isHistorical === true &&
//                                   (!chartData[index + 1] ||
//                                     chartData[index + 1]?.isHistorical ===
//                                       false);

//                                 const dotColor =
//                                   payload.productionPercent <=
//                                   payload.productionTarget
//                                     ? "#10b981"
//                                     : "#ef4444";

//                                 if (isLastActual) {
//                                   return (
//                                     <g>
//                                       <circle
//                                         cx={cx}
//                                         cy={cy}
//                                         r={2}
//                                         fill={dotColor}
//                                         stroke="white"
//                                         strokeWidth={2}
//                                       />
//                                       <circle
//                                         cx={cx}
//                                         cy={cy}
//                                         r={12}
//                                         fill={dotColor}
//                                         opacity={0.2}
//                                         style={{
//                                           cursor: "pointer",
//                                           pointerEvents: "auto",
//                                         }}
//                                         onClick={(e) => {
//                                           e.stopPropagation();
//                                           const rect = e.currentTarget
//                                             .closest("svg")
//                                             .getBoundingClientRect();
//                                           setChartModalData({
//                                             ...payload,
//                                             kpiName: kpi.kpiName,
//                                           });
//                                           setChartModalPosition({
//                                             x: rect.left + cx,
//                                             y: rect.top + cy - 150,
//                                           });
//                                         }}
//                                       />
//                                       <text
//                                         x={cx}
//                                         y={cy}
//                                         fill="white"
//                                         fontSize="14"
//                                         fontWeight="bold"
//                                         textAnchor="middle"
//                                         dominantBaseline="middle"
//                                         style={{
//                                           pointerEvents: "none",
//                                           userSelect: "none",
//                                         }}
//                                       >
//                                         +
//                                       </text>
//                                     </g>
//                                   );
//                                 }

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={4}
//                                     fill={dotColor}
//                                     stroke="white"
//                                     strokeWidth={1}
//                                   />
//                                 );
//                               }}
//                               activeDot={(props) => {
//                                 const { cx, cy, payload } = props;
//                                 if (payload.productionPercent === null)
//                                   return null;
//                                 const dotColor =
//                                   payload.productionPercent <=
//                                   payload.productionTarget
//                                     ? "#10b981"
//                                     : "#ef4444";
//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={6}
//                                     fill={dotColor}
//                                   />
//                                 );
//                               }}
//                             />
//                             <Line
//                               type="monotone"
//                               dataKey="productionPercentPredicted"
//                               stroke="#6b7280"
//                               strokeWidth={2}
//                               name="Predicted %"
//                               connectNulls={false}
//                               dot={(props) => {
//                                 const { cx, cy, payload } = props;
//                                 if (payload.productionPercentPredicted === null)
//                                   return null;

//                                 const dotColor =
//                                   payload.productionPercentPredicted >
//                                   (payload.productionTargetForCheck ?? 0)
//                                     ? "#ef4444"
//                                     : "#10b981";

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={4}
//                                     fill={dotColor}
//                                     stroke="white"
//                                     strokeWidth={2}
//                                   />
//                                 );
//                               }}
//                               activeDot={(props) => {
//                                 const { cx, cy, payload } = props;
//                                 if (payload.productionPercentPredicted === null)
//                                   return null;

//                                 const dotColor =
//                                   payload.productionPercentPredicted >
//                                   (payload.productionTarget ?? Infinity)
//                                     ? "#ef4444"
//                                     : "#10b981";

//                                 return (
//                                   <circle
//                                     cx={cx}
//                                     cy={cy}
//                                     r={6}
//                                     fill={dotColor}
//                                   />
//                                 );
//                               }}
//                             />
//                           </>
//                         )}
//                       </ComposedChart>
//                     </ResponsiveContainer>
//                     {/* Chart Mini Modal */}
//                     {chartModalData &&
//                       chartModalData.kpiName === kpi.kpiName && (
//                         <div
//                           className="absolute bg-white rounded-lg shadow-xl border border-gray-200 p-3 w-64 z-50"
//                           style={{
//                             left: "50%",
//                             top: "-10px",
//                             transform: "translateX(-50%)",
//                           }}
//                         >
//                           <button
//                             onClick={() => setChartModalData(null)}
//                             className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//                           >
//                             ×
//                           </button>

//                           <div className="flex gap-1 mb-2 mt-1">
//                             {["Insights", "Action", "Improve"].map((tab) => (
//                               <button
//                                 key={tab}
//                                 onClick={() => setActiveChartModalTab(tab)}
//                                 className={`flex-1 px-2 py-1 text-xs font-medium rounded ${
//                                   activeChartModalTab === tab
//                                     ? "bg-blue-500 text-white"
//                                     : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                                 }`}
//                               >
//                                 {tab}
//                               </button>
//                             ))}
//                           </div>

//                           <div className="text-xs text-gray-700">
//                             {activeChartModalTab === "Insights" && (
//                               <div>
//                                 <p className="font-semibold mb-1">
//                                   Current Status:
//                                 </p>
//                                 <p>Month: {chartModalData.month}</p>
//                                 <p>
//                                   Value: ₹
//                                   {chartModalData.actual ||
//                                     chartModalData.productionPercent}
//                                   %
//                                 </p>
//                                 <p>
//                                   Target: ₹
//                                   {chartModalData.target ||
//                                     chartModalData.productionTarget}
//                                   %
//                                 </p>
//                                 <p
//                                   className={
//                                     chartModalData.variance > 0
//                                       ? "text-red-600"
//                                       : "text-green-600"
//                                   }
//                                 >
//                                   Variance:{" "}
//                                   {chartModalData.variance?.toFixed(2)}
//                                 </p>
//                               </div>
//                             )}
//                             {activeChartModalTab === "Action" && (
//                               <div>
//                                 <p className="font-semibold mb-1">
//                                   Quick Actions:
//                                 </p>
//                                 <ul className="list-disc ml-3 space-y-1">
//                                   <li>Review current spending</li>
//                                   <li>Check vendor invoices</li>
//                                   <li>Optimize process flow</li>
//                                 </ul>
//                               </div>
//                             )}
//                             {activeChartModalTab === "Improve" && (
//                               <div>
//                                 <p className="font-semibold mb-1">
//                                   Improvements:
//                                 </p>
//                                 <ul className="list-disc ml-3 space-y-1">
//                                   <li>Implement cost controls</li>
//                                   <li>Negotiate better rates</li>
//                                   <li>Reduce waste by 10%</li>
//                                 </ul>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       )}
//                   </div>

//                   <div
//                     className={`mt-2 flex items-center justify-center gap-2 text-[10px] ${currentTheme.mutedText} font-medium`}
//                   >
//                     {activeGraphTab === "tonnage" ? (
//                       <>
//                         <div className="flex items-center gap-1">
//                           <div className="w-1.5 h-1.5 bg-[#c5cbd6] rounded-full"></div>
//                           <span>Actual</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
//                           <span>Prediction</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full"></div>
//                           <span>Target</span>
//                         </div>
//                       </>
//                     ) : (
//                       <div className="flex items-center gap-1">
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                         <span>Production %</span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Global Mini Modal - Optimally positioned */}
//         {showMiniModal && miniModalKpi && (
//           <div
//             ref={modalRef}
//             className={`fixed ${currentTheme.modalBg} rounded-lg shadow-2xl ${currentTheme.border} border p-4 w-72 z-[100] transition-all duration-300`}
//             style={{
//               left: `${Math.min(
//                 window.innerWidth - 300,
//                 Math.max(20, miniModalPosition.x)
//               )}px`,
//               top: `${Math.min(
//                 window.innerHeight - 200,
//                 Math.max(20, miniModalPosition.y)
//               )}px`,
//             }}
//           >
//             <div className="flex items-center justify-between mb-3">
//               <h3 className={`text-sm font-bold ${currentTheme.primaryText}`}>
//                 {miniModalKpi.kpiName}
//               </h3>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowMiniModal(false);
//                 }}
//                 className="text-gray-400 hover:text-gray-600 text-lg font-bold"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="flex border-b mb-3">
//               {["Insights", "Action", "Improve"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveMiniTab(tab)}
//                   className={`flex-1 px-2 py-1 text-xs font-medium rounded-t-lg ${
//                     activeMiniTab === tab
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div
//               className={`text-xs ${currentTheme.secondaryText} min-h-[80px]`}
//             >
//               {activeMiniTab === "Insights" && (
//                 <div>
//                   <p className="mb-1">
//                     Value: ₹{miniModalKpi.actual || miniModalKpi.prediction}
//                   </p>
//                   <p className="mb-1">Month: {miniModalKpi.month}</p>
//                   <p className="mb-1">
//                     Variance: {miniModalKpi.variance?.toFixed(2)}
//                   </p>
//                   <p className="mb-1">Target: ₹{miniModalKpi.target}</p>
//                 </div>
//               )}
//               {activeMiniTab === "Action" && (
//                 <div>
//                   <p className="mb-1">📋 Immediate Actions:</p>
//                   <ul className="list-disc ml-4 text-xs">
//                     <li>Review vendor contracts</li>
//                     <li>Cost control measures</li>
//                     <li>Process optimization</li>
//                   </ul>
//                 </div>
//               )}
//               {activeMiniTab === "Improve" && (
//                 <div>
//                   <p className="mb-1">🚀 Improvement Plans:</p>
//                   <ul className="list-disc ml-4 text-xs">
//                     <li>Technology upgrade</li>
//                     <li>Efficiency programs</li>
//                     <li>Training initiatives</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`w-full mx-auto p-4 min-h-screen transition-all duration-500 ${currentTheme.mainBg}`}
//     >
//       <ThemeSelector
//         currentTheme={currentThemeName}
//         onThemeChange={setCurrentThemeName}
//       />

//       <div>
//         {showCombinedView && renderCombinedChart()}
//         {renderCardsView()}

//         {/* Summary Stats */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <div
//             className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p
//                   className={`text-sm font-medium ${currentTheme.secondaryText}`}
//                 >
//                   Total KPIs
//                 </p>
//                 <p className={`text-2xl font-bold ${currentTheme.primaryText}`}>
//                   {realForgingData.kpi_data.length}
//                 </p>
//               </div>
//               <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
//                 <Package className="w-6 h-6 text-blue-600" />
//               </div>
//             </div>
//           </div>

//           <div
//             className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p
//                   className={`text-sm font-medium ${currentTheme.secondaryText}`}
//                 >
//                   Total YTD
//                 </p>
//                 <p className="text-2xl font-bold text-green-600">
//                   ₹
//                   {realForgingData.kpi_data
//                     .reduce((sum, kpi) => sum + kpi.ytd, 0)
//                     .toLocaleString()}
//                 </p>
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </div>

//           <div
//             className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p
//                   className={`text-sm font-medium ${currentTheme.secondaryText}`}
//                 >
//                   Location
//                 </p>
//                 <p className="text-2xl font-bold text-orange-600">
//                   {realForgingData.meta.location}
//                 </p>
//               </div>
//               <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
//                 <Factory className="w-6 h-6 text-orange-600" />
//               </div>
//             </div>
//           </div>

//           <div
//             className={`${currentTheme.chartBg} rounded-2xl ${currentTheme.shadow} p-6 ${currentTheme.border} border transition-all duration-300`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <p
//                   className={`text-sm font-medium ${currentTheme.secondaryText}`}
//                 >
//                   Process
//                 </p>
//                 <p className="text-2xl font-bold text-purple-600 capitalize">
//                   {activeProcess}
//                 </p>
//               </div>
//               <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
//                 <Settings className="w-6 h-6 text-purple-600" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CostScreener;
