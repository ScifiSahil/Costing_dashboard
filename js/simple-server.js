const http = require('http');
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'forging_data.json');

const initialData = {
Baramati: {
  meta: {
    title: "Forging Cost Analysis - Complete",
    location: "Baramati",
    lines: "Baramati Plant",
    currency: "INR",
    unit: "per tonne",
    data_source: "Excel Import - Baramati Data",
    last_updated: "2025-01-27T18:00:00",
    total_kpis: 9
  },
  kpi_data: [
    {
      kpiName: "Consumables",
      lastDayCost: 7.40,
      lastWeek: 51.80,
      mtd: 7.40,
      lastMonth: 8.00,
      lastQuarter: 25464.0,
      ytd: 67016.8,
      lastDayChange: -7.5,
      lastWeekChange: -6.8,
      mtdChange: -7.5,
      lastMonthChange: -7.5,
      lastQuarterChange: -12.3,
      ytdChange: -8.5,
      trend: [3632.95, 3875, 3230, 3470, 3542],
      monthly_budget: [3840, 3840, 3840, 3840, 3840],  // ✅ Added
      budget_per_tonne: 8.00,
      actual_per_tonne: 7.40,
      monthly_costs: [3632.95, 3875, 3230, 3470, 3542],
      production_percentage: [3.80, 2.98, 4.78, 4.49, 3.54],
      target_percentage: [2.91, 2.97, 3.27, 3.27, 3.57]
    },
    {
      kpiName: "Power",
      lastDayCost: 15.35,
      lastWeek: 107.45,
      mtd: 15.35,
      lastMonth: 15.31,
      lastQuarter: 55000.2,
      ytd: 153444.9,
      lastDayChange: 0.3,
      lastWeekChange: 0.8,
      mtdChange: 0.3,
      lastMonthChange: 0.3,
      lastQuarterChange: -2.1,
      ytdChange: -1.5,
      trend: [7374, 7183, 7116.2, 7477, 7290],
      monthly_budget: [7348, 7348, 7348, 7348, 7348],  // ✅ Added
      budget_per_tonne: 15.31,
      actual_per_tonne: 15.35,
      monthly_costs: [7374, 7183, 7116.2, 7477, 7290],
      production_percentage: [7.31, 8.80, 8.54, 9.20, 9.00],
      target_percentage: [7.89, 8.05, 8.85, 8.85, 9.67]
    },
    {
      kpiName: "Fuel",
      lastDayCost: 0.80,
      lastWeek: 5.60,
      mtd: 0.80,
      lastMonth: 0.90,
      lastQuarter: 3848.8,
      ytd: 4893.8,
      lastDayChange: -11.1,
      lastWeekChange: -10.2,
      mtdChange: -11.1,
      lastMonthChange: -11.1,
      lastQuarterChange: -15.6,
      ytdChange: -18.2,
      trend: [539.0, 819.5, 1319.4, 1386.7, 784.2],
      monthly_budget: [432, 432, 432, 432, 432],  // ✅ Added
      budget_per_tonne: 0.90,
      actual_per_tonne: 0.80,
      monthly_costs: [539.0, 819.5, 1319.4, 1386.7, 784.2],
      production_percentage: [7.31, 8.80, 8.54, 9.20, 9.00],
      target_percentage: [7.89, 8.05, 8.85, 8.85, 9.67]
    },
    {
      kpiName: "Labour Charges",
      lastDayCost: 13.40,
      lastWeek: 93.80,
      mtd: 13.40,
      lastMonth: 15.05,
      lastQuarter: 56313.9,
      ytd: 157253.4,
      lastDayChange: -10.9,
      lastWeekChange: -9.8,
      mtdChange: -10.9,
      lastMonthChange: -10.9,
      lastQuarterChange: 5.2,
      ytdChange: 8.6,
      trend: [15060.6, 9022.4, 11235.8, 10901.1, 9094.0],
      monthly_budget: [10214, 10214, 10214, 10214, 10214],  // ✅ Added
      budget_per_tonne: 15.05,
      actual_per_tonne: 13.40,
      monthly_costs: [15060.6, 9022.4, 11235.8, 10901.1, 9094.0],
      production_percentage: [3.12, 3.17, 4.64, 4.14, 3.94],
      target_percentage: [2.34, 2.39, 2.63, 2.63, 2.87]
    },
    {
      kpiName: "Sub-Contract",
      lastDayCost: 4.31,
      lastWeek: 30.17,
      mtd: 4.31,
      lastMonth: 5.42,
      lastQuarter: 23548.6,
      ytd: 63501.9,
      lastDayChange: -20.5,
      lastWeekChange: -19.2,
      mtdChange: -20.5,
      lastMonthChange: -20.5,
      lastQuarterChange: -12.8,
      ytdChange: -8.5,
      trend: [5388.3, 3786.5, 5495.9, 5208.9, 4669.0],
      monthly_budget: [5673, 5673, 5673, 5673, 5673],  // ✅ Added
      budget_per_tonne: 5.42,
      actual_per_tonne: 4.31,
      monthly_costs: [5388.3, 3786.5, 5495.9, 5208.9, 4669.0],
      production_percentage: [8.73, 7.56, 9.48, 8.66, 7.68],
      target_percentage: [9.62, 9.82, 10.80, 10.80, 11.79]
    },
    {
      kpiName: "Machine Hire Charges",
      lastDayCost: 0.74,
      lastWeek: 5.18,
      mtd: 0.74,
      lastMonth: 0.62,
      lastQuarter: 2251.5,
      ytd: 7243.3,
      lastDayChange: 19.4,
      lastWeekChange: 18.2,
      mtdChange: 19.4,
      lastMonthChange: 19.4,
      lastQuarterChange: 12.5,
      ytdChange: 10.2,
      trend: [410.4, 396.9, 480.4, 510.7, 453.5],
      monthly_budget: [298, 298, 298, 298, 298],  // ✅ Added
      budget_per_tonne: 0.62,
      actual_per_tonne: 0.74,
      monthly_costs: [410.4, 396.9, 480.4, 510.7, 453.5],
      production_percentage: [0.24, 0.33, 0.41, 0.41, 0.38],
      target_percentage: [0.47, 0.48, 0.52, 0.52, 0.57]
    },
    {
      kpiName: "Repair & Maintenance",
      lastDayCost: 1.38,
      lastWeek: 9.66,
      mtd: 1.38,
      lastMonth: 2.15,
      lastQuarter: 9622.6,
      ytd: 18209.0,
      lastDayChange: -35.8,
      lastWeekChange: -34.2,
      mtdChange: -35.8,
      lastMonthChange: -35.8,
      lastQuarterChange: -22.5,
      ytdChange: -18.6,
      trend: [1932.2, 1532.5, 1123.1, 3793.5, 3241.3],
      monthly_budget: [3232, 3232, 3232, 3232, 3232],  // ✅ Added
      budget_per_tonne: 2.15,
      actual_per_tonne: 1.38,
      monthly_costs: [1932.2, 1532.5, 1123.1, 3793.5, 3241.3],
      production_percentage: [1.12, 1.28, 0.95, 3.01, 2.74],
      target_percentage: [0.87, 0.88, 0.97, 0.97, 1.06]
    },
    {
      kpiName: "Employee Cost",
      lastDayCost: 6.85,
      lastWeek: 47.95,
      mtd: 6.85,
      lastMonth: 7.63,
      lastQuarter: 34637.4,
      ytd: 98241.4,
      lastDayChange: -10.2,
      lastWeekChange: -9.5,
      mtdChange: -10.2,
      lastMonthChange: -10.2,
      lastQuarterChange: -5.8,
      ytdChange: -3.2,
      trend: [9149.5, 6324.6, 6282.2, 6675.9, 6275.8],
      monthly_budget: [7007, 7007, 7007, 7007, 7007],  // ✅ Added
      budget_per_tonne: 7.63,
      actual_per_tonne: 6.85,
      monthly_costs: [9149.5, 6324.6, 6282.2, 6675.9, 6275.8],
      production_percentage: [5.30, 5.30, 5.30, 5.30, 5.30],
      target_percentage: [5.30, 5.30, 5.30, 5.30, 5.30]
    },
    {
      kpiName: "Establishment Expenses",
      lastDayCost: 1.41,
      lastWeek: 9.87,
      mtd: 1.41,
      lastMonth: 1.53,
      lastQuarter: 5530.0,
      ytd: 16655.4,
      lastDayChange: -7.8,
      lastWeekChange: -7.2,
      mtdChange: -7.8,
      lastMonthChange: -7.8,
      lastQuarterChange: -8.5,
      ytdChange: -6.2,
      trend: [2625.2, 1131.2, 973.2, 948.8, 851.6],
      monthly_budget: [1303, 1303, 1303, 1303, 1303],  // ✅ Added
      budget_per_tonne: 1.53,
      actual_per_tonne: 1.41,
      monthly_costs: [2625.2, 1131.2, 973.2, 948.8, 851.6],
      production_percentage: [1.52, 0.95, 0.82, 0.75, 0.72],
      target_percentage: [2.04, 0.82, 0.82, 1.01, 0.82]
    }
  ]
},
"Ranjangaon-2": {
  meta: {
    title: "Forging Cost Analysis - Complete",
    location: "Ranjangaon-2",
    lines: "R-2 Line",
    currency: "INR",
    unit: "per tonne",
    data_source: "Excel Import - Ranjangaon-2 Data",
    last_updated: "2025-01-27T18:00:00",
    total_kpis: 9
  },
  kpi_data: [
    {
      kpiName: "Consumables",
      lastDayCost: 2.84,
      lastWeek: 19.88,
      mtd: 2.84,
      lastMonth: 2.77,
      lastQuarter: 10435.0,
      ytd: 57299.59,
      lastDayChange: 2.5,
      lastWeekChange: 3.1,
      mtdChange: 2.5,
      lastMonthChange: 2.5,
      lastQuarterChange: 4.8,
      ytdChange: 5.2,
      trend: [3497.24, 3384.06, 4286.67, 3517.92, 3760.33],
      monthly_budget: [3759, 3759, 3759, 3759, 3759],  // ✅ Added
      budget_per_tonne: 2.77,
      actual_per_tonne: 2.84,
      monthly_costs: [3497.24, 3384.06, 4286.67, 3517.92, 3760.33],
      production_percentage: [2.93, 3.37, 6.20, 5.87, 4.08],
      target_percentage: [5.09, 4.96, 5.10, 5.57, 5.62]
    },
    {
      kpiName: "Power",
      lastDayCost: 6.59,
      lastWeek: 46.13,
      mtd: 6.59,
      lastMonth: 6.53,
      lastQuarter: 44652.0,
      ytd: 143917.30,
      lastDayChange: 0.9,
      lastWeekChange: 1.2,
      mtdChange: 0.9,
      lastMonthChange: 0.9,
      lastQuarterChange: -2.1,
      ytdChange: -1.8,
      trend: [8734, 8706, 8371, 7729, 12112],
      monthly_budget: [8861, 8861, 8861, 8861, 8861],  // ✅ Added
      budget_per_tonne: 6.53,
      actual_per_tonne: 6.59,
      monthly_costs: [8734, 8706, 8371, 7729, 12112],
      production_percentage: [10.15, 11.09, 13.66, 13.33, 18.75],
      target_percentage: [9.96, 9.69, 9.98, 10.90, 10.99]
    },
    {
      kpiName: "Fuel",
      lastDayCost: 2.23,
      lastWeek: 15.61,
      mtd: 2.23,
      lastMonth: 2.31,
      lastQuarter: 14361.0,
      ytd: 48328.59,
      lastDayChange: -3.5,
      lastWeekChange: -2.8,
      mtdChange: -3.5,
      lastMonthChange: -3.5,
      lastQuarterChange: 1.2,
      ytdChange: 2.5,
      trend: [3574, 2915, 2553, 3382, 2537],
      monthly_budget: [3135, 3135, 3135, 3135, 3135],  // ✅ Added
      budget_per_tonne: 2.31,
      actual_per_tonne: 2.23,
      monthly_costs: [3574, 2915, 2553, 3382, 2537],
      production_percentage: [4.15, 3.71, 4.17, 5.83, 3.93],
      target_percentage: [3.91, 3.80, 3.92, 4.28, 4.31]
    },
    {
      kpiName: "Labour Charges",
      lastDayCost: 3.47,
      lastWeek: 24.29,
      mtd: 3.47,
      lastMonth: 3.60,
      lastQuarter: 20900.0,
      ytd: 74005.83,
      lastDayChange: -3.6,
      lastWeekChange: -2.9,
      mtdChange: -3.6,
      lastMonthChange: -3.6,
      lastQuarterChange: 4.5,
      ytdChange: 6.8,
      trend: [4233, 5760, 3745, 3461, 3701],
      monthly_budget: [4885, 4885, 4885, 4885, 4885],  // ✅ Added
      budget_per_tonne: 3.60,
      actual_per_tonne: 3.47,
      monthly_costs: [4233, 5760, 3745, 3461, 3701],
      production_percentage: [4.92, 7.34, 6.11, 5.97, 5.73],
      target_percentage: [5.65, 5.50, 5.67, 6.19, 6.24]
    },
    {
      kpiName: "Sub-Contract",
      lastDayCost: 1.10,
      lastWeek: 7.70,
      mtd: 1.10,
      lastMonth: 1.05,
      lastQuarter: 7889.0,
      ytd: 22554.24,
      lastDayChange: 4.8,
      lastWeekChange: 5.2,
      mtdChange: 4.8,
      lastMonthChange: 4.8,
      lastQuarterChange: 3.2,
      ytdChange: 2.1,
      trend: [1610, 1712, 1580, 1474, 1513],
      monthly_budget: [1425, 1425, 1425, 1425, 1425],  // ✅ Added
      budget_per_tonne: 1.05,
      actual_per_tonne: 1.10,
      monthly_costs: [1610, 1712, 1580, 1474, 1513],
      production_percentage: [1.87, 2.18, 2.58, 2.54, 2.34],
      target_percentage: [1.83, 1.78, 1.83, 2.00, 2.02]
    },
    {
      kpiName: "Machine Hire Charges",
      lastDayCost: 0.51,
      lastWeek: 3.57,
      mtd: 0.51,
      lastMonth: 0.65,
      lastQuarter: 4091.0,
      ytd: 10703.21,
      lastDayChange: -21.5,
      lastWeekChange: -20.8,
      mtdChange: -21.5,
      lastMonthChange: -21.5,
      lastQuarterChange: -18.2,
      ytdChange: -15.6,
      trend: [659, 691, 729, 613, 1341],
      monthly_budget: [882, 882, 882, 882, 882],  // ✅ Added
      budget_per_tonne: 0.65,
      actual_per_tonne: 0.51,
      monthly_costs: [659, 691, 729, 613, 1341],
      production_percentage: [0.77, 0.88, 1.19, 1.06, 2.08],
      target_percentage: [0.76, 0.74, 0.76, 0.83, 0.84]
    },
    {
      kpiName: "Repair & Maintenance",
      lastDayCost: 1.40,
      lastWeek: 9.80,
      mtd: 1.40,
      lastMonth: 1.85,
      lastQuarter: 11262.0,
      ytd: 28121.93,
      lastDayChange: -24.3,
      lastWeekChange: -23.5,
      mtdChange: -24.3,
      lastMonthChange: -24.3,
      lastQuarterChange: -12.5,
      ytdChange: -8.2,
      trend: [1431, 1616, 5167, 1267, 1579],
      monthly_budget: [2510, 2510, 2510, 2510, 2510],  // ✅ Added
      budget_per_tonne: 1.85,
      actual_per_tonne: 1.40,
      monthly_costs: [1431, 1616, 5167, 1267, 1579],
      production_percentage: [1.66, 2.06, 8.43, 2.19, 2.44],
      target_percentage: [2.30, 2.24, 2.30, 2.52, 2.54]
    },
    {
      kpiName: "Employee Cost",
      lastDayCost: 2.19,
      lastWeek: 15.33,
      mtd: 2.19,
      lastMonth: 2.17,
      lastQuarter: 13664.0,
      ytd: 44603.12,
      lastDayChange: 0.9,
      lastWeekChange: 1.2,
      mtdChange: 0.9,
      lastMonthChange: 0.9,
      lastQuarterChange: -1.5,
      ytdChange: -0.8,
      trend: [3288, 3000, 2341, 2215, 2468],
      monthly_budget: [2945, 2945, 2945, 2945, 2945],  // ✅ Added
      budget_per_tonne: 2.17,
      actual_per_tonne: 2.19,
      monthly_costs: [3288, 3000, 2341, 2215, 2468],
      production_percentage: [3.82, 3.82, 3.82, 3.82, 3.82],
      target_percentage: [3.82, 3.82, 3.82, 3.82, 3.82]
    },
    {
      kpiName: "Establishment Expenses",
      lastDayCost: 0.96,
      lastWeek: 6.72,
      mtd: 0.96,
      lastMonth: 0.93,
      lastQuarter: 5299.0,
      ytd: 18902.31,
      lastDayChange: 3.2,
      lastWeekChange: 3.8,
      mtdChange: 3.2,
      lastMonthChange: 3.2,
      lastQuarterChange: 2.5,
      ytdChange: 1.8,
      trend: [1277, 1167, 930, 780, 1425],
      monthly_budget: [1262, 1262, 1262, 1262, 1262],  // ✅ Added
      budget_per_tonne: 0.93,
      actual_per_tonne: 0.96,
      monthly_costs: [1277, 1167, 930, 780, 1425],
      production_percentage: [1.48, 1.49, 1.52, 1.35, 2.21],
      target_percentage: [1.39, 1.67, 1.36, 1.38, 1.37]
    }
  ]
},
Mundhwa: {
  meta: {
    title: "Forging Cost Analysis - Complete",
    location: "Mundhwa",
    lines: "Line 1 to 16",
    currency: "INR",
    unit: "per tonne",
    data_source: "Excel Import - Mundhwa Data",
    last_updated: "2025-01-27T18:00:00",
    total_kpis: 9
  },
  kpi_data: [
    {
      kpiName: "Consumables",
      lastDayCost: 1.70,
      lastWeek: 11.90,
      mtd: 1.70,
      lastMonth: 1.58,
      lastQuarter: 7792.0,
      ytd: 41974.0,
      lastDayChange: 7.6,
      lastWeekChange: 6.8,
      mtdChange: 7.6,
      lastMonthChange: 7.6,
      lastQuarterChange: 5.2,
      ytdChange: 4.8,
      trend: [2446, 3023, 2556, 2439, 2576],
      monthly_budget: [2575, 2575, 2575, 2575, 2575],  // ✅ Added
      budget_per_tonne: 1.58,
      actual_per_tonne: 1.70,
      monthly_costs: [2446, 3023, 2556, 2439, 2576],
      production_percentage: [3.5, 4.2, 3.8, 3.6, 3.9],
      target_percentage: [3.0, 3.2, 3.5, 3.5, 3.7]
    },
    {
      kpiName: "Power",
      lastDayCost: 3.76,
      lastWeek: 26.32,
      mtd: 3.76,
      lastMonth: 4.48,
      lastQuarter: 20344.0,
      ytd: 113499.0,
      lastDayChange: -16.1,
      lastWeekChange: -15.8,
      mtdChange: -16.1,
      lastMonthChange: -16.1,
      lastQuarterChange: -12.5,
      ytdChange: -8.2,
      trend: [6879, 6664, 6149, 7186, 6961],
      monthly_budget: [7302, 7302, 7302, 7302, 7302],  // ✅ Added
      budget_per_tonne: 4.48,
      actual_per_tonne: 3.76,
      monthly_costs: [6879, 6664, 6149, 7186, 6961],
      production_percentage: [8.5, 8.2, 7.8, 9.1, 8.9],
      target_percentage: [8.0, 8.3, 8.5, 8.7, 9.0]
    },
    {
      kpiName: "Fuel",
      lastDayCost: 1.53,
      lastWeek: 10.71,
      mtd: 1.53,
      lastMonth: 1.55,
      lastQuarter: 7702.0,
      ytd: 39995.0,
      lastDayChange: -1.3,
      lastWeekChange: -0.8,
      mtdChange: -1.3,
      lastMonthChange: -1.3,
      lastQuarterChange: 2.5,
      ytdChange: 3.8,
      trend: [2568, 2230, 2463, 2857, 2403],
      monthly_budget: [2527, 2527, 2527, 2527, 2527],  // ✅ Added
      budget_per_tonne: 1.55,
      actual_per_tonne: 1.53,
      monthly_costs: [2568, 2230, 2463, 2857, 2403],
      production_percentage: [4.8, 4.2, 4.6, 5.3, 4.5],
      target_percentage: [4.5, 4.7, 4.9, 5.0, 5.2]
    },
    {
      kpiName: "Sub-Contract",
      lastDayCost: 5.76,
      lastWeek: 40.32,
      mtd: 5.76,
      lastMonth: 7.04,
      lastQuarter: 35202.0,
      ytd: 176169.0,
      lastDayChange: -18.2,
      lastWeekChange: -17.5,
      mtdChange: -18.2,
      lastMonthChange: -18.2,
      lastQuarterChange: -15.8,
      ytdChange: -12.3,
      trend: [11403, 10309, 11358, 13835, 11726],
      monthly_budget: [11475, 11475, 11475, 11475, 11475],  // ✅ Added
      budget_per_tonne: 7.04,
      actual_per_tonne: 5.76,
      monthly_costs: [11403, 10309, 11358, 13835, 11726],
      production_percentage: [12.5, 11.8, 12.2, 14.5, 13.1],
      target_percentage: [11.0, 11.5, 12.0, 12.5, 13.0]
    },
    {
      kpiName: "Labour Charges",
      lastDayCost: 1.15,
      lastWeek: 8.05,
      mtd: 1.15,
      lastMonth: 1.60,
      lastQuarter: 7467.0,
      ytd: 40127.0,
      lastDayChange: -28.1,
      lastWeekChange: -26.8,
      mtdChange: -28.1,
      lastMonthChange: -28.1,
      lastQuarterChange: -22.5,
      ytdChange: -18.2,
      trend: [2362, 1821, 2470, 2870, 2371],
      monthly_budget: [2608, 2608, 2608, 2608, 2608],  // ✅ Added
      budget_per_tonne: 1.60,
      actual_per_tonne: 1.15,
      monthly_costs: [2362, 1821, 2470, 2870, 2371],
      production_percentage: [3.2, 2.5, 3.4, 3.9, 3.3],
      target_percentage: [2.8, 3.0, 3.2, 3.4, 3.6]
    },
    {
      kpiName: "Machine Hire Charges",
      lastDayCost: 0.29,
      lastWeek: 2.03,
      mtd: 0.29,
      lastMonth: 0.47,
      lastQuarter: 2138.0,
      ytd: 12059.0,
      lastDayChange: -38.3,
      lastWeekChange: -36.2,
      mtdChange: -38.3,
      lastMonthChange: -38.3,
      lastQuarterChange: -32.8,
      ytdChange: -25.4,
      trend: [838, 761, 667, 666, 730],
      monthly_budget: [766, 766, 766, 766, 766],  // ✅ Added
      budget_per_tonne: 0.47,
      actual_per_tonne: 0.29,
      monthly_costs: [838, 761, 667, 666, 730],
      production_percentage: [1.2, 1.1, 0.9, 0.9, 1.0],
      target_percentage: [1.0, 1.1, 1.2, 1.2, 1.3]
    },
    {
      kpiName: "Repair & Maintenance",
      lastDayCost: 2.82,
      lastWeek: 19.74,
      mtd: 2.82,
      lastMonth: 2.51,
      lastQuarter: 11910.0,
      ytd: 47534.0,
      lastDayChange: 12.4,
      lastWeekChange: 11.8,
      mtdChange: 12.4,
      lastMonthChange: 12.4,
      lastQuarterChange: 8.5,
      ytdChange: 6.2,
      trend: [4333, 3738, 3402, 3257, 3666],
      monthly_budget: [4091, 4091, 4091, 4091, 4091],  // ✅ Added
      budget_per_tonne: 2.51,
      actual_per_tonne: 2.82,
      monthly_costs: [4333, 3738, 3402, 3257, 3666],
      production_percentage: [5.8, 5.2, 4.7, 4.5, 5.1],
      target_percentage: [4.5, 4.8, 5.0, 5.2, 5.5]
    },
    {
      kpiName: "Employee Cost",
      lastDayCost: 3.94,
      lastWeek: 27.58,
      mtd: 3.94,
      lastMonth: 4.10,
      lastQuarter: 17988.0,
      ytd: 96566.0,
      lastDayChange: -3.9,
      lastWeekChange: -3.2,
      mtdChange: -3.9,
      lastMonthChange: -3.9,
      lastQuarterChange: -1.8,
      ytdChange: 1.2,
      trend: [6358, 5428, 5420, 5880, 5746],
      monthly_budget: [6683, 6683, 6683, 6683, 6683],  // ✅ Added
      budget_per_tonne: 4.10,
      actual_per_tonne: 3.94,
      monthly_costs: [6358, 5428, 5420, 5880, 5746],
      production_percentage: [5.5, 5.5, 5.5, 5.5, 5.5],
      target_percentage: [5.5, 5.5, 5.5, 5.5, 5.5]
    },
    {
      kpiName: "Establishment Expenses",
      lastDayCost: 0.57,
      lastWeek: 3.99,
      mtd: 0.57,
      lastMonth: 0.81,
      lastQuarter: 4255.0,
      ytd: 20190.0,
      lastDayChange: -29.6,
      lastWeekChange: -28.2,
      mtdChange: -29.6,
      lastMonthChange: -29.6,
      lastQuarterChange: -24.8,
      ytdChange: -18.5,
      trend: [1571, 1333, 1342, 1390, 1403],
      monthly_budget: [1320, 1320, 1320, 1320, 1320],  // ✅ Added
      budget_per_tonne: 0.81,
      actual_per_tonne: 0.57,
      monthly_costs: [1571, 1333, 1342, 1390, 1403],
      production_percentage: [2.1, 1.8, 1.9, 1.9, 2.0],
      target_percentage: [1.8, 1.9, 2.0, 2.1, 2.2]
    }
  ]
},
Ranjangaon: {
  meta: {
    title: "Forging Cost Analysis - Complete",
    location: "Ranjangaon",
    lines: "Line 1 to 16",
    currency: "INR",
    unit: "per tonne",
    data_source: "Excel Import - CleanDataForging.xlsx",
    last_updated: "2025-01-18T18:00:00",
    total_kpis: 12
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
      monthly_budget: [3634, 3650, 3620, 3640, 3630],  
      budget_per_tonne: 15.17,
      actual_per_tonne: 15.89,
      monthly_costs: [3632.95, 3875, 3230, 3470, 3542],
      production_percentage: [4.2, 4.5, 3.8, 4.1, 4.3],
      target_percentage: [4.0, 4.2, 4.4, 4.4, 4.6]
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
      monthly_budget: [7495, 7510, 7530, 7550, 7570],  
      budget_per_tonne: 33.16,
      actual_per_tonne: 32.25,
      monthly_costs: [7374, 7183, 7116.2, 7477, 7290],
      production_percentage: [8.5, 8.3, 8.2, 8.6, 8.4],
      target_percentage: [8.0, 8.2, 8.4, 8.6, 8.8]
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
      monthly_budget: [2860, 2880, 2900, 2920, 2940],  
      budget_per_tonne: 12.65,
      actual_per_tonne: 13.72,
      monthly_costs: [3136.49, 3344.52, 3025.01, 2989.34, 2756.89],
      production_percentage: [6.5, 6.9, 6.3, 6.2, 5.7],
      target_percentage: [6.0, 6.2, 6.4, 6.6, 6.8]
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
      monthly_budget: [1814, 1830, 1845, 1860, 1875],  // ✅ Added
      budget_per_tonne: 8.02,
      actual_per_tonne: 9.93,
      monthly_costs: [2270.99, 2619.46, 2012.52, 2234.56, 2145.67],
      production_percentage: [4.8, 5.5, 4.2, 4.7, 4.5],
      target_percentage: [4.0, 4.2, 4.4, 4.6, 4.8]
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
      monthly_budget: [6720, 6750, 6780, 6810, 6840],  // ✅ Added
      budget_per_tonne: 29.71,
      actual_per_tonne: 35.9,
      monthly_costs: [8207.23, 7884.71, 7017.29, 7560.44, 7560.45],
      production_percentage: [15.2, 14.6, 13.0, 14.0, 14.0],
      target_percentage: [13.5, 14.0, 14.5, 15.0, 15.5]
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
      monthly_budget: [712, 718, 724, 730, 736],  // ✅ Added
      budget_per_tonne: 3.15,
      actual_per_tonne: 2.77,
      monthly_costs: [632.37, 509.66, 858.24, 779.37, 779.37],
      production_percentage: [1.3, 1.1, 1.8, 1.6, 1.6],
      target_percentage: [1.5, 1.6, 1.7, 1.8, 1.9]
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
      monthly_budget: [1624, 1636, 1648, 1660, 1672],  // ✅ Added
      budget_per_tonne: 7.18,
      actual_per_tonne: 6.28,
      monthly_costs: [1436.47, 3871.06, 3336.9, 2162.51, 2162.51],
      production_percentage: [3.0, 8.1, 7.0, 4.5, 4.5],
      target_percentage: [3.5, 4.0, 4.5, 5.0, 5.5]
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
      monthly_budget: [5722, 5722, 5722, 5722, 5722],  // ✅ Added
      budget_per_tonne: 25.32,
      actual_per_tonne: 25.32,
      monthly_costs: [5787.85, 5755.55, 5248.11, 5572.07, 5572.07],
      production_percentage: [11.0, 10.9, 10.0, 10.6, 10.6],
      target_percentage: [11.0, 11.0, 11.0, 11.0, 11.0]
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
      monthly_budget: [1542, 1550, 1558, 1566, 1574],  // ✅ Added
      budget_per_tonne: 6.82,
      actual_per_tonne: 5.15,
      monthly_costs: [1177.42, 1286.86, 1281.15, 1309.54, 1309.54],
      production_percentage: [2.4, 2.6, 2.6, 2.6, 2.6],
      target_percentage: [2.5, 2.6, 2.7, 2.8, 2.9]
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
      monthly_budget: [1805, 1815, 1825, 1835, 1845],  // ✅ Added
      budget_per_tonne: 7.98,
      actual_per_tonne: 6.67,
      monthly_costs: [1524, 1639, 2678, 2404, 1994],
      production_percentage: [3.2, 3.4, 5.6, 5.0, 4.2],
      target_percentage: [3.5, 3.7, 3.9, 4.1, 4.3]
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
      monthly_budget: [3416, 3435, 3454, 3473, 3492],  // ✅ Added
      budget_per_tonne: 151.11,
      actual_per_tonne: 166.17,
      monthly_costs: [3781, 4342, 3992, 3172, 3165],
      production_percentage: [7.9, 9.1, 8.4, 6.6, 6.6],
      target_percentage: [7.0, 7.5, 8.0, 8.5, 9.0]
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
      monthly_budget: [47572, 47860, 48148, 48436, 48724],  // ✅ Added
      budget_per_tonne: 210.32,
      actual_per_tonne: 215.45,
      monthly_costs: [98182, 100581, 97506, 101193, 90876],
      production_percentage: [45.2, 46.3, 44.9, 46.6, 41.8],
      target_percentage: [44.0, 44.5, 45.0, 45.5, 46.0]
    }
  ]
}
};

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
  console.log('Database file created with all locations');
}

function readData() {
  try {
    return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
  } catch (error) {
    console.log('Error reading file, returning initialData');
    return initialData;
  }
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const urlParts = req.url.split('/');
  
  if (req.method === 'GET' && urlParts[1] === 'api' && urlParts[2] === 'forging-data') {
    const location = urlParts[3];
    const data = readData();
    
    console.log('Requested location:', location);
    console.log('Available locations:', Object.keys(data));
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    if (data[location]) {
      res.end(JSON.stringify(data[location]));
    } else {
      res.end(JSON.stringify({ meta: {}, kpi_data: [] }));
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Test APIs:');
  console.log('  - Ranjangaon: http://localhost:5000/api/forging-data/Ranjangaon/forging');
  console.log('  - Mundhwa: http://localhost:5000/api/forging-data/Mundhwa/forging');
  console.log('  - Ranjangaon-2: http://localhost:5000/api/forging-data/Ranjangaon-2/forging');
  console.log('  - Baramati: http://localhost:5000/api/forging-data/Baramati/forging');
});
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // JSON file as database
// const dataFile = path.join(__dirname, 'forging_data.json');

// // Your existing data with Ranjangaon, Mundhwa, Ranjangaon-2 and Baramati
// const initialData = {
//   Baramati: {
//     meta: {
//       title: "Forging Cost Analysis - Complete",
//       location: "Baramati",
//       lines: "Baramati Plant",
//       currency: "INR",
//       unit: "per tonne",
//       data_source: "Excel Import - Baramati Data",
//       last_updated: "2025-01-27T18:00:00",
//       total_kpis: 9
//     },
//     kpi_data: [
//       {
//         kpiName: "Consumables",
//         lastDayCost: 7.40,
//         lastWeek: 51.80,
//         mtd: 7.40,
//         lastMonth: 8.00,
//         lastQuarter: 25464.0,
//         ytd: 67016.8,
//         lastDayChange: -7.5,
//         lastWeekChange: -6.8,
//         mtdChange: -7.5,
//         lastMonthChange: -7.5,
//         lastQuarterChange: -12.3,
//         ytdChange: -8.5,
//         trend: [ 6552.7, 	 3550.8, 	 5665.7, 	 5655.8,	 4188.4, 	 5021.0 ,		 3,447.4 ,	 2,625.4, 	 2367.5, 	 2933.8, 	 3117.7, 	 2899.7, 	 3558.5, 	 2837.0, 	 3746.7, 	 4406.1, 	 5095.4,	 5102.7, 	 3397.3 
//  ],
//         budget_per_tonne: 8.00,
//         actual_per_tonne: 7.40,
//         monthly_costs: [ 6552.7, 	 3550.8, 	 5665.7, 	 5655.8,	 4188.4, 	 5021.0 ,		 3,447.4 ,	 2,625.4, 	 2367.5, 	 2933.8, 	 3117.7, 	 2899.7, 	 3558.5, 	 2837.0, 	 3746.7, 	 4406.1, 	 5095.4,	 5102.7, 	 3397.3 
//  ],production_percentage: [3.80, 2.98, 4.78, 4.49, 3.54, 3.20],
//       target_percentage: [2.91, 2.97, 3.27, 3.27, 3.57, 3.60],
//   predicted_percentage: null, 
//       },
//       {
//         kpiName: "Power",
//         lastDayCost: 15.35,
//         lastWeek: 107.45,
//         mtd: 15.35,
//         lastMonth: 15.31,
//         lastQuarter: 55000.2,
//         ytd: 153444.9,
//         lastDayChange: 0.3,
//         lastWeekChange: 0.8,
//         mtdChange: 0.3,
//         lastMonthChange: 0.3,
//         lastQuarterChange: -2.1,
//         ytdChange: -1.5,
//         trend: [ 12624.0, 10501.3, 10123.2, 11591.8, 10660.5, 10991.4, 9236.1, 7863.8, 7092.2, 8359.9, 7726.5, 7611.7,9005.9, 8005.8, 9017.4, 9376.7, 8779.0, 10568.7, 8443.6],
    
   
    


//         budget_per_tonne: 15.31,
//         actual_per_tonne: 15.35,
//         monthly_costs: [ 12624.0, 10501.3, 10123.2, 11591.8, 10660.5, 10991.4, 9236.1, 7863.8, 7092.2, 8359.9, 7726.5, 7611.7,9005.9, 8005.8, 9017.4, 9376.7, 8779.0, 10568.7, 8443.6],
//          production_percentage: [ 	 7.31 
// , 	 	 2.98, 	 	 4.78, 	 ,	 4.49 	,3.54
// ],
//   target_percentage: [  2.91 ,	 2.97 ,	 3.27 	, 3.27 	, 3.57 ,
// ],
//       },
//       {
//         kpiName: "Fuel",
//         lastDayCost: 0.80,
//         lastWeek: 5.60,
//         mtd: 0.80,
//         lastMonth: 0.90,
//         lastQuarter: 3848.8,
//         ytd: 4893.8,
//         lastDayChange: -11.1,
//         lastWeekChange: -10.2,
//         mtdChange: -11.1,
//         lastMonthChange: -11.1,
//         lastQuarterChange: -15.6,
//         ytdChange: -18.2,
//         trend: [
//   539.0, 819.5, 1319.4, 1386.7, 784.2, 993.8,
//   null, null, null, null, 83.5, null,
//   null, null, null, null, 12.4, 551.8, 49.6
// ],

//         budget_per_tonne: 0.90,
//         actual_per_tonne: 0.80,
//         monthly_costs:  [
//   539.0, 819.5, 1319.4, 1386.7, 784.2, 993.8,
//   null, null, null, null, 83.5, null,
//   null, null, null, null, 12.4, 551.8, 49.6
// ],
// production_percentage: [ 	 7.31, 		 8.80, 		 8.54 ,		 9.20 ,		 9.00 	,

// ],
//   target_percentage: [  7.89 	, 8.05 ,	 8.85 ,	 8.85 	, 9.67 ,

// ],
//       },
//       {
//         kpiName: "Labour Charges",
//         lastDayCost: 13.40,
//         lastWeek: 93.80,
//         mtd: 13.40,
//         lastMonth: 15.05,
//         lastQuarter: 56313.9,
//         ytd: 157253.4,
//         lastDayChange: -10.9,
//         lastWeekChange: -9.8,
//         mtdChange: -10.9,
//         lastMonthChange: -10.9,
//         lastQuarterChange: 5.2,
//         ytdChange: 8.6,
//         trend: [
//   15060.6, 9022.4, 11235.8, 10901.1, 9094.0, 10796.3,
//   4618.6, 5259.8, 6974.3, 7039.5, 9605.1, 10176.4,
//   11864.1, 9472.0, 9023.5, 13125.2, 12969.4, 13831.8, 9239.5
// ],
//         budget_per_tonne: 15.05,
//         actual_per_tonne: 13.40,
//         monthly_costs: [
//   15060.6, 9022.4, 11235.8, 10901.1, 9094.0, 10796.3,
//   4618.6, 5259.8, 6974.3, 7039.5, 9605.1, 10176.4,
//   11864.1, 9472.0, 9023.5, 13125.2, 12969.4, 13831.8, 9239.5
// ],
// production_percentage: [ 	 3.12 ,		 3.17 	,	 4.64 		, 4.14 		, 3.94 ,

// ],
//   target_percentage: [   2.34, 	 2.39, 	 2.63, 	 2.63 ,	 2.87 


// ],
//       },
//       {
//         kpiName: "Sub-Contract",
//         lastDayCost: 4.31,
//         lastWeek: 30.17,
//         mtd: 4.31,
//         lastMonth: 5.42,
//         lastQuarter: 23548.6,
//         ytd: 63501.9,
//         lastDayChange: -20.5,
//         lastWeekChange: -19.2,
//         mtdChange: -20.5,
//         lastMonthChange: -20.5,
//         lastQuarterChange: -12.8,
//         ytdChange: -8.5,
//         trend: [
//   5388.3, 3786.5, 5495.9, 5208.9, 4669.0, 4875.0,
//   2044.2, 2123.1, 2066.9, 2385.6, 2496.4, 2339.5,
//   2854.6, 2118.3, 2829.0, 4309.1, 5418.6, 6422.6, 2977.4
// ],

//         budget_per_tonne: 5.42,
//         actual_per_tonne: 4.31,
//         monthly_costs: [
//   5388.3, 3786.5, 5495.9, 5208.9, 4669.0, 4875.0,
//   2044.2, 2123.1, 2066.9, 2385.6, 2496.4, 2339.5,
//   2854.6, 2118.3, 2829.0, 4309.1, 5418.6, 6422.6, 2977.4
// ],
// production_percentage: [ 	 8.73 ,		 7.56, 		 9.48 	,	 8.66 ,		 7.68 ,


// ],
//   target_percentage: [   9.62 ,	 9.82 ,	 10.80 	, 10.80 ,	 11.79 ,



// ],
//       },
//       {
//         kpiName: "Machine Hire Charges",
//         lastDayCost: 0.74,
//         lastWeek: 5.18,
//         mtd: 0.74,
//         lastMonth: 0.62,
//         lastQuarter: 2251.5,
//         ytd: 7243.3,
//         lastDayChange: 19.4,
//         lastWeekChange: 18.2,
//         mtdChange: 19.4,
//         lastMonthChange: 19.4,
//         lastQuarterChange: 12.5,
//         ytdChange: 10.2,
//         trend: [
//   410.4, 396.9, 480.4, 510.7, 453.5, 452.4,
//   325.4, 346.1, 341.0, 430.4, 460.5, 454.0,
//   521.2, 854.2, 918.1, 526.7, 537.2, 543.1, 514.7
// ],

//         budget_per_tonne: 0.62,
//         actual_per_tonne: 0.74,
//         monthly_costs: [
//   410.4, 396.9, 480.4, 510.7, 453.5, 452.4,
//   325.4, 346.1, 341.0, 430.4, 460.5, 454.0,
//   521.2, 854.2, 918.1, 526.7, 537.2, 543.1, 514.7
// ],
// production_percentage: [  0.24 	,	 0.33 ,		 0.41 	,	 0.41 ,		 0.38 ,


// ],
//   target_percentage: [  0.47, 	 0.48 ,	 0.52 ,	 0.52 	 ,0.57 ,




// ],
//       },
//       {
//         kpiName: "Repair & Maintenance",
//         lastDayCost: 1.38,
//         lastWeek: 9.66,
//         mtd: 1.38,
//         lastMonth: 2.15,
//         lastQuarter: 9622.6,
//         ytd: 18209.0,
//         lastDayChange: -35.8,
//         lastWeekChange: -34.2,
//         mtdChange: -35.8,
//         lastMonthChange: -35.8,
//         lastQuarterChange: -22.5,
//         ytdChange: -18.6,
//         trend: [
//   1932.2, 1532.5, 1123.1, 3793.5, 3241.3, 2333.7,
//   536.7, 1161.6, 12.3, 1052.0, 680.0, 663.5,
//   660.3, 3060.2, 708.2, 1054.7, 1002.3, 959.5, 954.0
// ],

//         budget_per_tonne: 2.15,
//         actual_per_tonne: 1.38,
//         monthly_costs:  [
//   1932.2, 1532.5, 1123.1, 3793.5, 3241.3, 2333.7,
//   536.7, 1161.6, 12.3, 1052.0, 680.0, 663.5,
//   660.3, 3060.2, 708.2, 1054.7, 1002.3, 959.5, 954.0
// ],
// production_percentage: [  1.12 ,		 1.28 ,		 0.95 ,		 3.01 	,	 2.74 ,



// ],
//   target_percentage: [

//  0.87 ,	 0.88 ,	 0.97 ,	 0.97 ,	 1.06 ,



// ],
//       },
//       {
//         kpiName: "Employee Cost",
//         lastDayCost: 6.85,
//         lastWeek: 47.95,
//         mtd: 6.85,
//         lastMonth: 7.63,
//         lastQuarter: 34637.4,
//         ytd: 98241.4,
//         lastDayChange: -10.2,
//         lastWeekChange: -9.5,
//         mtdChange: -10.2,
//         lastMonthChange: -10.2,
//         lastQuarterChange: -5.8,
//         ytdChange: -3.2,
//         trend: [
//   9149.5, 6324.6, 6282.2, 6675.9, 6275.8, 6796.0,
//   5195.9, 4367.2, 3615.6, 4236.9, 4285.1, 4241.9,
//   5432.7, 4395.3, 5009.9, 5726.8, 6211.9, 5288.3, 4726.2
// ],

//         budget_per_tonne: 7.63,
//         actual_per_tonne: 6.85,
//         monthly_costs:[
//   9149.5, 6324.6, 6282.2, 6675.9, 6275.8, 6796.0,
//   5195.9, 4367.2, 3615.6, 4236.9, 4285.1, 4241.9,
//   5432.7, 4395.3, 5009.9, 5726.8, 6211.9, 5288.3, 4726.2
// ],
// production_percentage: [  
//  5.30 ,		 5.30, 		 5.30 	,	 5.30 ,		 5.30 



// ],
//   target_percentage: [

//  5.30 ,	 5.30 ,	 5.30 	, 5.30 	, 5.30 ,




// ],
//       },
//       {
//         kpiName: "Establishment Expenses",
//         lastDayCost: 1.41,
//         lastWeek: 9.87,
//         mtd: 1.41,
//         lastMonth: 1.53,
//         lastQuarter: 5530.0,
//         ytd: 16655.4,
//         lastDayChange: -7.8,
//         lastWeekChange: -7.2,
//         mtdChange: -7.8,
//         lastMonthChange: -7.8,
//         lastQuarterChange: -8.5,
//         ytdChange: -6.2,
//         trend: [
//   2625.2, 1131.2, 973.2, 948.8, 851.6, 1221.3,
//   957.2, 551.3, 536.9, 1292.8, 751.2, 966.1,
//   1039.6, 1012.4, 977.0, 1039.6, 1160.2, 1689.9, 973.5
// ],

//         budget_per_tonne: 1.53,
//         actual_per_tonne: 1.41,
//         monthly_costs:[
//   2625.2, 1131.2, 973.2, 948.8, 851.6, 1221.3,
//   957.2, 551.3, 536.9, 1292.8, 751.2, 966.1,
//   1039.6, 1012.4, 977.0, 1039.6, 1160.2, 1689.9, 973.5
// ],
// production_percentage: [  
//  1.52 ,		 0.95 	,	 0.82, 		 0.75 ,		 0.72 ,




// ],
//   target_percentage: [

//   2.04 ,	 0.82, 	 0.82 ,	 1.01 ,	 0.82 ,





// ],

//       }
//     ]
//   },
//   "Ranjangaon-2": {
//     meta: {
//       title: "Forging Cost Analysis - Complete",
//       location: "Ranjangaon-2",
//       lines: "R-2 Line",
//       currency: "INR",
//       unit: "per tonne",
//       data_source: "Excel Import - Ranjangaon-2 Data",
//       last_updated: "2025-01-27T18:00:00",
//       total_kpis: 9
//     },
//     kpi_data: [
//       {
//         kpiName: "Consumables",
//         lastDayCost: 2.84,
//         lastWeek: 19.88,
//         mtd: 2.84,
//         lastMonth: 2.77,
//         lastQuarter: 10435.0,
//         ytd: 57299.59,
//         lastDayChange: 2.5,
//         lastWeekChange: 3.1,
//         mtdChange: 2.5,
//         lastMonthChange: 2.5,
//         lastQuarterChange: 4.8,
//         ytdChange: 5.2,
//         trend: [
//   3497.24, 3384.06, 4286.67, 3517.92, 3760.33, 3185.54,
//   3227.12, 3619.32, 2948.34, 3310.47, 3019.51, 3138.47
// ],

//         budget_per_tonne: 2.77,
//         actual_per_tonne: 2.84,
//         monthly_costs: [
//   3497.24, 3384.06, 4286.67, 3517.92, 3760.33, 3185.54,
//   3227.12, 3619.32, 2948.34, 3310.47, 3019.51, 3138.47
// ],
// production_percentage: [  
//  	 2.93 ,		 3.37 ,		 6.20, 		 5.87, 		 4.08 	,




// ],
//   target_percentage: [

//    5.09, 	 4.96, 	 5.10 ,	 5.57 ,	 5.62 ,






// ],
//       },
//       {
//         kpiName: "Power",
//         lastDayCost: 6.59,
//         lastWeek: 46.13,
//         mtd: 6.59,
//         lastMonth: 6.53,
//         lastQuarter: 44652.0,
//         ytd: 143917.30,
//         lastDayChange: 0.9,
//         lastWeekChange: 1.2,
//         mtdChange: 0.9,
//         lastMonthChange: 0.9,
//         lastQuarterChange: -2.1,
//         ytdChange: -1.8,
//         trend: [
//   8734, 8706, 8371, 7729, 12112, 9130,
//   7532.36, 8015.13, 7468.75, 7772.97, 8793.24, 8337.07,
//   8030.70, 7597.51, 8044.82, 7775.31, 7397.00, 7863.88
// ],

//         budget_per_tonne: 6.53,
//         actual_per_tonne: 6.59,
//         monthly_costs: [
//   8734, 8706, 8371, 7729, 12112, 9130,
//   7532.36, 8015.13, 7468.75, 7772.97, 8793.24, 8337.07,
//   8030.70, 7597.51, 8044.82, 7775.31, 7397.00, 7863.88
// ],
// production_percentage: [ 	 10.15, 		 11.09, 		 13.66, 		 13.33, 		 18.75 ],
//  target_percentage: [

//     9.96, 	 9.69, 	 9.98 ,	 10.90, 	 10.99 ,







// ],
//       },
//       {
//         kpiName: "Fuel",
//         lastDayCost: 2.23,
//         lastWeek: 15.61,
//         mtd: 2.23,
//         lastMonth: 2.31,
//         lastQuarter: 14361.0,
//         ytd: 48328.59,
//         lastDayChange: -3.5,
//         lastWeekChange: -2.8,
//         mtdChange: -3.5,
//         lastMonthChange: -3.5,
//         lastQuarterChange: 1.2,
//         ytdChange: 2.5,
//         trend:  [
//   3574, 2915, 2553, 3382, 2537, 2992,
//   2985.63, 2958.05, 2855.29, 2511.67, 3367.32, 2752.07,
//   2612.04, 2505.70, 2750.94, 2635.85, 2925.00, 795.29
// ],
//         budget_per_tonne: 2.31,
//         actual_per_tonne: 2.23,
//         monthly_costs: [
//   3574, 2915, 2553, 3382, 2537, 2992,
//   2985.63, 2958.05, 2855.29, 2511.67, 3367.32, 2752.07,
//   2612.04, 2505.70, 2750.94, 2635.85, 2925.00, 795.29
// ],
// production_percentage: [  4.15 	,	 3.71 	,	 4.17 ,		 5.83 	,	 3.93 
// ],
// target_percentage: [

//     3.91, 	 3.80 ,	 3.92 ,	 4.28 ,	 4.31 ,







// ],
//       },
//       {
//         kpiName: "Labour Charges",
//         lastDayCost: 3.47,
//         lastWeek: 24.29,
//         mtd: 3.47,
//         lastMonth: 3.60,
//         lastQuarter: 20900.0,
//         ytd: 74005.83,
//         lastDayChange: -3.6,
//         lastWeekChange: -2.9,
//         mtdChange: -3.6,
//         lastMonthChange: -3.6,
//         lastQuarterChange: 4.5,
//         ytdChange: 6.8,
//        trend: [
//   4233, 5760, 3745, 3461, 3701, 4180,
//   4646.39, 4627.62, 4251.29, 4301.89, 3774.55, 4171.53,
//   3461.76, 3874.00, 3324.04, 3633.21, 3952.25, 6501.92
// ],

//         budget_per_tonne: 3.60,
//         actual_per_tonne: 3.47,
//         monthly_costs: [
//   4233, 5760, 3745, 3461, 3701, 4180,
//   4646.39, 4627.62, 4251.29, 4301.89, 3774.55, 4171.53,
//   3461.76, 3874.00, 3324.04, 3633.21, 3952.25, 6501.92
// ],
// production_percentage: [ 4.92 ,		 7.34 ,		 6.11, 		 5.97 ,		 5.73 ,

// ],
// target_percentage: [

//     5.65, 	 5.50 ,	 5.67 	, 6.19, 	 6.24 ,








// ],

//       },
//       {
//         kpiName: "Sub-Contract",
//         lastDayCost: 1.10,
//         lastWeek: 7.70,
//         mtd: 1.10,
//         lastMonth: 1.05,
//         lastQuarter: 7889.0,
//         ytd: 22554.24,
//         lastDayChange: 4.8,
//         lastWeekChange: 5.2,
//         mtdChange: 4.8,
//         lastMonthChange: 4.8,
//         lastQuarterChange: 3.2,
//         ytdChange: 2.1,
//         trend: [
//   1610, 1712, 1580, 1474, 1513, 1578,
//   1060.43, 1250.69, 1350.41, 1385.92, 1380.38, 1358.33,
//   1128.96, 1385.83, 1159.66, 1190.06, 1366.00, 1989.05
// ],

//         budget_per_tonne: 1.05,
//         actual_per_tonne: 1.10,
//         monthly_costs: [
//   1610, 1712, 1580, 1474, 1513, 1578,
//   1060.43, 1250.69, 1350.41, 1385.92, 1380.38, 1358.33,
//   1128.96, 1385.83, 1159.66, 1190.06, 1366.00, 1989.05
// ],
//   production_percentage: [ 1.87, 		 2.18 ,		 2.58 ,		 2.54, 		 2.34 ],
//   target_percentage: [

//     1.83 ,	 1.78 ,	 1.83 ,	 2.00 	, 2.02 ,









// ],
//       },
//       {
//         kpiName: "Machine Hire Charges",
//         lastDayCost: 0.51,
//         lastWeek: 3.57,
//         mtd: 0.51,
//         lastMonth: 0.65,
//         lastQuarter: 4091.0,
//         ytd: 10703.21,
//         lastDayChange: -21.5,
//         lastWeekChange: -20.8,
//         mtdChange: -21.5,
//         lastMonthChange: -21.5,
//         lastQuarterChange: -18.2,
//         ytdChange: -15.6,
//         trend: [
//   659, 691, 729, 613, 1341, 807,
//   524.89, 635.42, 630.56, 642.15, 688.47, 675.67,
//   500.91, 590.54, 545.35, 570.04, 624.58, 782.13
// ],

//         budget_per_tonne: 0.65,
//         actual_per_tonne: 0.51,
//         monthly_costs: [
//   659, 691, 729, 613, 1341, 807,
//   524.89, 635.42, 630.56, 642.15, 688.47, 675.67,
//   500.91, 590.54, 545.35, 570.04, 624.58, 782.13
// ],
//  production_percentage: [ 0.77 ,		 0.88 ,		 1.19 ,		 1.06, 		 2.08, 
// ],
//   target_percentage: [

//      0.76, 	 0.74, 	 0.76 ,	 0.83 ,	 0.84, 
// ],
//       },
//       {
//         kpiName: "Repair & Maintenance",
//         lastDayCost: 1.40,
//         lastWeek: 9.80,
//         mtd: 1.40,
//         lastMonth: 1.85,
//         lastQuarter: 11262.0,
//         ytd: 28121.93,
//         lastDayChange: -24.3,
//         lastWeekChange: -23.5,
//         mtdChange: -24.3,
//         lastMonthChange: -24.3,
//         lastQuarterChange: -12.5,
//         ytdChange: -8.2,
//        trend: [
//   1431, 1616, 5167, 1267, 1579, 2212,
//   1747.57, 1720.62, 2298.07, 1640.01, 1634.16, 1170.40,
//   1367.39, 2077.49, 1342.80, 1670.61, 2033.59, 1400.88
// ],

//         budget_per_tonne: 1.85,
//         actual_per_tonne: 1.40,
//         monthly_costs: [
//   1431, 1616, 5167, 1267, 1579, 2212,
//   1747.57, 1720.62, 2298.07, 1640.01, 1634.16, 1170.40,
//   1367.39, 2077.49, 1342.80, 1670.61, 2033.59, 1400.88
// ],
//  production_percentage: [ 1.66 	,	 2.06 	,	 8.43 	,	 2.19 ,		 2.44 ,

// ],
//   target_percentage: [

//      2.30 ,	 2.24 ,	 2.30 ,	 2.52 	 ,2.54 

// ],
//       },
//       {
//         kpiName: "Employee Cost",
//         lastDayCost: 2.19,
//         lastWeek: 15.33,
//         mtd: 2.19,
//         lastMonth: 2.17,
//         lastQuarter: 13664.0,
//         ytd: 44603.12,
//         lastDayChange: 0.9,
//         lastWeekChange: 1.2,
//         mtdChange: 0.9,
//         lastMonthChange: 0.9,
//         lastQuarterChange: -1.5,
//         ytdChange: -0.8,
//         trend: [
//   3288, 3000, 2341, 2215, 2468, 2662,
//   2716.95, 2588.27, 2796.95, 2718.45, 2901.24, 2683.57,
//   2246.95, 2753.50, 2193.51, 2261.81, 2663.95, 3293.71
// ],

//         budget_per_tonne: 2.17,
//         actual_per_tonne: 2.19,
//         monthly_costs: [
//   3288, 3000, 2341, 2215, 2468, 2662,
//   2716.95, 2588.27, 2796.95, 2718.45, 2901.24, 2683.57,
//   2246.95, 2753.50, 2193.51, 2261.81, 2663.95, 3293.71
// ],
// production_percentage: [ 3.82 ,		 3.82 ,		 3.82 	,	 3.82 	,	 3.82 ],
//   target_percentage: [
//      3.82 ,	 3.82 ,	 3.82 	, 3.82, 	 3.82 ,
//  ]
//       },
//       {
//         kpiName: "Establishment Expenses",
//         lastDayCost: 0.96,
//         lastWeek: 6.72,
//         mtd: 0.96,
//         lastMonth: 0.93,
//         lastQuarter: 5299.0,
//         ytd: 18902.31,
//         lastDayChange: 3.2,
//         lastWeekChange: 3.8,
//         mtdChange: 3.2,
//         lastMonthChange: 3.2,
//         lastQuarterChange: 2.5,
//         ytdChange: 1.8,
//         trend: [
//   1277, 1167, 930, 780, 1425, 1116,
//   1211.69, 1586.54, 2448.98, 1083.75, 1212.56, 1051.81,
//   1021.28, 1400.73, 1008.21, 1207.93, 1116.94, 1751.59
// ],

//         budget_per_tonne: 0.93,
//         actual_per_tonne: 0.96,
//         monthly_costs: [
//   1277, 1167, 930, 780, 1425, 1116,
//   1211.69, 1586.54, 2448.98, 1083.75, 1212.56, 1051.81,
//   1021.28, 1400.73, 1008.21, 1207.93, 1116.94, 1751.59
// ],
// production_percentage: [  1.48 	,	 1.49, 		 1.52 ,		 1.35 	,	 2.21 ,
// ],
//   target_percentage: [
//      1.39 ,	 1.67 ,	 1.36, 	 1.38, 	 1.37 ,

//  ]
//       }
//     ]
//   },
//   Mundhwa: {
//     meta: {
//       title: "Forging Cost Analysis - Complete",
//       location: "Mundhwa",
//       lines: "Line 1 to 16",
//       currency: "INR",
//       unit: "per tonne",
//       data_source: "Excel Import - Mundhwa Data",
//       last_updated: "2025-01-27T18:00:00",
//       total_kpis: 10
//     },
//     kpi_data: [
//       {
//         kpiName: "Consumables",
//         lastDayCost: 1.70,
//         lastWeek: 11.90,
//         mtd: 1.70,
//         lastMonth: 1.58,
//         lastQuarter: 7792.0,
//         ytd: 41974.0,
//         lastDayChange: 7.6,
//         lastWeekChange: 6.8,
//         mtdChange: 7.6,
//         lastMonthChange: 7.6,
//         lastQuarterChange: 5.2,
//         ytdChange: 4.8,
//         trend: [
//   2446, 3023, 2556, 2439, 2576, 2663,
//   2503, 2571, 1687, 2488, 2738, 2906,
//   2552, 2863, 2685, 2622, 2855
// ],

//         budget_per_tonne: 1.58,
//         actual_per_tonne: 1.70,
//         monthly_costs: [
//   2446, 3023, 2556, 2439, 2576, 2663,
//   2503, 2571, 1687, 2488, 2738, 2906,
//   2552, 2863, 2685, 2622, 2855
// ]
//       },
//       {
//         kpiName: "Power",
//         lastDayCost: 3.76,
//         lastWeek: 26.32,
//         mtd: 3.76,
//         lastMonth: 4.48,
//         lastQuarter: 20344.0,
//         ytd: 113499.0,
//         lastDayChange: -16.1,
//         lastWeekChange: -15.8,
//         mtdChange: -16.1,
//         lastMonthChange: -16.1,
//         lastQuarterChange: -12.5,
//         ytdChange: -8.2,
//         trend: [
//   6879, 6664, 6149, 7186, 6961, 6345,
//   6420, 6864, 6868, 7356, 7440, 7303,
//   7707, 7164, 7115, 5868, 7210
// ],

//         budget_per_tonne: 4.48,
//         actual_per_tonne: 3.76,
//         monthly_costs: [
//   6879, 6664, 6149, 7186, 6961, 6345,
//   6420, 6864, 6868, 7356, 7440, 7303,
//   7707, 7164, 7115, 5868, 7210
// ],
//       },
//       {
//         kpiName: "Fuel",
//         lastDayCost: 1.53,
//         lastWeek: 10.71,
//         mtd: 1.53,
//         lastMonth: 1.55,
//         lastQuarter: 7702.0,
//         ytd: 39995.0,
//         lastDayChange: -1.3,
//         lastWeekChange: -0.8,
//         mtdChange: -1.3,
//         lastMonthChange: -1.3,
//         lastQuarterChange: 2.5,
//         ytdChange: 3.8,
//         trend: [
//   2568, 2230, 2463, 2857, 2403, 2584,
//   2287, 1878, 2553, 2348, 2329, 2639,
//   2344, 2432, 2361, 2560, 2568
// ],

//         budget_per_tonne: 1.55,
//         actual_per_tonne: 1.53,
//         monthly_costs: [
//   2568, 2230, 2463, 2857, 2403, 2584,
//   2287, 1878, 2553, 2348, 2329, 2639,
//   2344, 2432, 2361, 2560, 2568
// ],
//       },
//       {
//         kpiName: "Sub-Contract",
//         lastDayCost: 5.76,
//         lastWeek: 40.32,
//         mtd: 5.76,
//         lastMonth: 7.04,
//         lastQuarter: 35202.0,
//         ytd: 176169.0,
//         lastDayChange: -18.2,
//         lastWeekChange: -17.5,
//         mtdChange: -18.2,
//         lastMonthChange: -18.2,
//         lastQuarterChange: -15.8,
//         ytdChange: -12.3,
//         trend: [
//   11403, 10309, 11358, 13835, 11726, 9705,
//   10952, 13338, 10726, 10363, 11864, 9368,
//   9835, 9410, 10525, 11103, 11139
// ],

//         budget_per_tonne: 7.04,
//         actual_per_tonne: 5.76,
//         monthly_costs: [
//   11403, 10309, 11358, 13835, 11726, 9705,
//   10952, 13338, 10726, 10363, 11864, 9368,
//   9835, 9410, 10525, 11103, 11139
// ],
//       },
//       {
//         kpiName: "Labour Charges",
//         lastDayCost: 1.15,
//         lastWeek: 8.05,
//         mtd: 1.15,
//         lastMonth: 1.60,
//         lastQuarter: 7467.0,
//         ytd: 40127.0,
//         lastDayChange: -28.1,
//         lastWeekChange: -26.8,
//         mtdChange: -28.1,
//         lastMonthChange: -28.1,
//         lastQuarterChange: -22.5,
//         ytdChange: -18.2,
//         trend: [
//   2362, 1821, 2470, 2870, 2371, 1944,
//   2489, 2436, 2261, 2632, 2336, 2505,
//   2936, 2422, 2533, 2685, 2790
// ],

//         budget_per_tonne: 1.60,
//         actual_per_tonne: 1.15,
//         monthly_costs: [
//   2362, 1821, 2470, 2870, 2371, 1944,
//   2489, 2436, 2261, 2632, 2336, 2505,
//   2936, 2422, 2533, 2685, 2790
// ],
//       },
//       {
//         kpiName: "Machine Hire Charges",
//         lastDayCost: 0.29,
//         lastWeek: 2.03,
//         mtd: 0.29,
//         lastMonth: 0.47,
//         lastQuarter: 2138.0,
//         ytd: 12059.0,
//         lastDayChange: -38.3,
//         lastWeekChange: -36.2,
//         mtdChange: -38.3,
//         lastMonthChange: -38.3,
//         lastQuarterChange: -32.8,
//         ytdChange: -25.4,
//         trend: [
//   838, 761, 667, 666, 730, 493,
//   583, 761, 583, 637, 1028, 949,
//   915, 748, 684, 772, 926
// ],

//         budget_per_tonne: 0.47,
//         actual_per_tonne: 0.29,
//         monthly_costs: [
//   838, 761, 667, 666, 730, 493,
//   583, 761, 583, 637, 1028, 949,
//   915, 748, 684, 772, 926
// ],
//       },
//       {
//         kpiName: "Repair & Maintenance",
//         lastDayCost: 2.82,
//         lastWeek: 19.74,
//         mtd: 2.82,
//         lastMonth: 2.51,
//         lastQuarter: 11910.0,
//         ytd: 47534.0,
//         lastDayChange: 12.4,
//         lastWeekChange: 11.8,
//         mtdChange: 12.4,
//         lastMonthChange: 12.4,
//         lastQuarterChange: 8.5,
//         ytdChange: 6.2,
//         trend: [
//   4333, 3738, 3402, 3257, 3666, 1580,
//   1625, 1661, 1577, 2368, 990, 2473,
//   1873, 2453, 1789, 2178, 6167
// ],

//         budget_per_tonne: 2.51,
//         actual_per_tonne: 2.82,
//         monthly_costs: [
//   4333, 3738, 3402, 3257, 3666, 1580,
//   1625, 1661, 1577, 2368, 990, 2473,
//   1873, 2453, 1789, 2178, 6167
// ],
//       },
//       {
//         kpiName: "Employee Cost",
//         lastDayCost: 3.94,
//         lastWeek: 27.58,
//         mtd: 3.94,
//         lastMonth: 4.10,
//         lastQuarter: 17988.0,
//         ytd: 96566.0,
//         lastDayChange: -3.9,
//         lastWeekChange: -3.2,
//         mtdChange: -3.9,
//         lastMonthChange: -3.9,
//         lastQuarterChange: -1.8,
//         ytdChange: 1.2,
//         trend: [
//   6358, 5428, 5420, 5880, 5746, 6021,
//   5692, 5845, 5198, 5704, 5955, 6736,
//   7325, 6448, 5956, 6544, 6442
// ],

//         budget_per_tonne: 4.10,
//         actual_per_tonne: 3.94,
//         monthly_costs: [
//   6358, 5428, 5420, 5880, 5746, 6021,
//   5692, 5845, 5198, 5704, 5955, 6736,
//   7325, 6448, 5956, 6544, 6442
// ],
//       },
//       {
//         kpiName: "Establishment Expenses",
//         lastDayCost: 0.57,
//         lastWeek: 3.99,
//         mtd: 0.57,
//         lastMonth: 0.81,
//         lastQuarter: 4255.0,
//         ytd: 20190.0,
//         lastDayChange: -29.6,
//         lastWeekChange: -28.2,
//         mtdChange: -29.6,
//         lastMonthChange: -29.6,
//         lastQuarterChange: -24.8,
//         ytdChange: -18.5,
//         trend: [
//   1571, 1333, 1342, 1390, 1403, 962,
//   970, 996, 932, 1247, 1360, 1473,
//   1637, 1441, 1361, 1491, 1417
// ],

//         budget_per_tonne: 0.81,
//         actual_per_tonne: 0.57,
//         monthly_costs: [
//   1571, 1333, 1342, 1390, 1403, 962,
//   970, 996, 932, 1247, 1360, 1473,
//   1637, 1441, 1361, 1491, 1417
// ],
//       },
     
//     ]
//   },
//   Ranjangaon: {
//     meta: {
//       title: "Forging Cost Analysis - Complete",
//       location: "Ranjangaon",
//       lines: "Line 1 to 16",
//       currency: "INR",
//       unit: "per tonne",
//       data_source: "Excel Import - CleanDataForging.xlsx",
//       last_updated: "2025-01-18T18:00:00",
//       total_kpis: 12
//     },
//     kpi_data: [
//       {
//         kpiName: "Consumables",
//         lastDayCost: 15.89,
//         lastWeek: 111.23,
//         mtd: 15.89,
//         lastMonth: 15.17,
//         lastQuarter: 9287.64,
//         ytd: 34725.811,
//         lastDayChange: 2.1,
//         lastWeekChange: 3.4,
//         mtdChange: 4.2,
//         lastMonthChange: 1.8,
//         lastQuarterChange: 5.6,
//         ytdChange: 8.2,
//         trend: [3632.95, 3875, 3230, 3470, 3542],
//         budget_per_tonne: 15.17,
//         actual_per_tonne: 15.89,
//         monthly_costs: [3632.95, 3875, 3230, 3470.32, 0.0, 3541.75, 0.0, 4453.91, 3234.49, 3103.35, 3012.85, 3171.44]
//       },
//       {
//         kpiName: "Power",
//         lastDayCost: 32.25,
//         lastWeek: 225.75,
//         mtd: 32.25,
//         lastMonth: 33.16,
//         lastQuarter: 20725.68,
//         ytd: 73591.491,
//         lastDayChange: -1.2,
//         lastWeekChange: -0.8,
//         mtdChange: -2.7,
//         lastMonthChange: -2.8,
//         lastQuarterChange: 1.2,
//         ytdChange: 3.4,
//         trend: [7374, 7183, 7116.2, 7477, 7290],
//         budget_per_tonne: 33.16,
//         actual_per_tonne: 32.25,
//         monthly_costs: [7373.62, 7182.75, 7116.2, 7089.25, 6969.51, 6895.12, 6756.89, 6823.45, 6945.23, 7012.34, 6889.56, 6823.78]
//       },
//       {
//         kpiName: "Fuel",
//         lastDayCost: 13.72,
//         lastWeek: 96.04,
//         mtd: 13.72,
//         lastMonth: 12.65,
//         lastQuarter: 8878.24,
//         ytd: 31476.451,
//         lastDayChange: 8.5,
//         lastWeekChange: 7.8,
//         mtdChange: 8.5,
//         lastMonthChange: 8.5,
//         lastQuarterChange: 6.2,
//         ytdChange: 4.8,
//         trend: [3136.49, 3344.52, 3025.01, 2989.34, 2756.89],
//         budget_per_tonne: 12.65,
//         actual_per_tonne: 13.72,
//         monthly_costs: [
//           3136.49, 3344.52, 3025.01, 2989.34, 2756.89, 2834.56, 2923.45, 2867.23,
//           2934.12, 3045.67, 2987.34, 2845.23,
//         ],
//       },
//       {
//         kpiName: "Labour",
//         lastDayCost: 9.93,
//         lastWeek: 69.51,
//         mtd: 9.93,
//         lastMonth: 8.02,
//         lastQuarter: 5580.46,
//         ytd: 19753.035,
//         lastDayChange: 23.8,
//         lastWeekChange: 21.4,
//         mtdChange: 23.8,
//         lastMonthChange: 23.8,
//         lastQuarterChange: 18.5,
//         ytdChange: 12.3,
//         trend: [2270.99, 2619.46, 2012.52, 2234.56, 2145.67],
//         budget_per_tonne: 8.02,
//         actual_per_tonne: 9.93,
//         monthly_costs: [
//           2270.99, 2619.46, 2012.52, 2234.56, 2145.67, 2389.45, 2234.78, 2456.89,
//           2345.12, 2123.45, 2267.34, 2189.67,
//         ],
//       },
//       {
//         kpiName: "Sub Contract",
//         lastDayCost: 35.9,
//         lastWeek: 251.3,
//         mtd: 35.9,
//         lastMonth: 29.71,
//         lastQuarter: 19969.12,
//         ytd: 73838.445,
//         lastDayChange: 20.8,
//         lastWeekChange: 18.2,
//         mtdChange: 20.8,
//         lastMonthChange: 20.8,
//         lastQuarterChange: 15.6,
//         ytdChange: 11.2,
//         trend: [8207.23, 7884.71, 7017.29, 7560.44, 7560.45],
//         budget_per_tonne: 29.71,
//         actual_per_tonne: 35.9,
//         monthly_costs: [
//           8207.23, 7884.71, 7017.29, 7560.44, 7560.44, 7667.0, 7667.0, 8090.04,
//           7442.78, 6338.62, 5766.86, 7863.48,
//         ],
//       },
//       {
//         kpiName: "Machine Hire Charges",
//         lastDayCost: 2.77,
//         lastWeek: 19.39,
//         mtd: 2.77,
//         lastMonth: 3.15,
//         lastQuarter: 2061.41,
//         ytd: 6734.137,
//         lastDayChange: -12.1,
//         lastWeekChange: -10.8,
//         mtdChange: -12.1,
//         lastMonthChange: -12.1,
//         lastQuarterChange: -8.5,
//         ytdChange: -3.2,
//         trend: [632.37, 509.66, 858.24, 779.37, 779.37],
//         budget_per_tonne: 3.15,
//         actual_per_tonne: 2.77,
//         monthly_costs: [
//           632.37, 509.66, 858.24, 779.37, 779.37, 704.58, 704.58, 738.87, 664.05,
//           715.39, 639.85, 491.76,
//         ],
//       },
//       {
//         kpiName: "Repair & Maintenance",
//         lastDayCost: 6.28,
//         lastWeek: 43.96,
//         mtd: 6.28,
//         lastMonth: 7.18,
//         lastQuarter: 7234.76,
//         ytd: 22693.379,
//         lastDayChange: 5.2,
//         lastWeekChange: 4.8,
//         mtdChange: 5.2,
//         lastMonthChange: 3.5,
//         lastQuarterChange: 6.1,
//         ytdChange: 7.8,
//         trend: [1436.47, 3871.06, 3336.9, 2162.51, 2162.51],
//         budget_per_tonne: 7.18,
//         actual_per_tonne: 6.28,
//         monthly_costs: [
//           1436.47, 3871.06, 3336.9, 2162.51, 2162.51, 1444.66, 1444.66, 2313.45,
//           1966.7, 2486.29, 1996.33, 1679.01,
//         ],
//       },
//       {
//         kpiName: "Employee Cost",
//         lastDayCost: 25.32,
//         lastWeek: 177.24,
//         mtd: 25.32,
//         lastMonth: 25.32,
//         lastQuarter: 15513.99,
//         ytd: 55278.593,
//         lastDayChange: -2.1,
//         lastWeekChange: -1.8,
//         mtdChange: -2.1,
//         lastMonthChange: -1.5,
//         lastQuarterChange: 0.8,
//         ytdChange: 2.3,
//         trend: [5787.85, 5755.55, 5248.11, 5572.07, 5572.07],
//         budget_per_tonne: 25.32,
//         actual_per_tonne: 25.32,
//         monthly_costs: [
//           5787.85, 5755.55, 5248.11, 5572.07, 5572.07, 5104.67, 5104.67, 6099.68,
//           5177.21, 6738.36, 5224.14, 3570.94,
//         ],
//       },
//       {
//         kpiName: "Establishment Expenses",
//         lastDayCost: 5.15,
//         lastWeek: 36.05,
//         mtd: 5.15,
//         lastMonth: 6.82,
//         lastQuarter: 3876.72,
//         ytd: 14255.899,
//         lastDayChange: 1.5,
//         lastWeekChange: 1.2,
//         mtdChange: 1.5,
//         lastMonthChange: 0.9,
//         lastQuarterChange: 2.4,
//         ytdChange: 3.6,
//         trend: [1177.42, 1286.86, 1281.15, 1309.54, 1309.54],
//         budget_per_tonne: 6.82,
//         actual_per_tonne: 5.15,
//         monthly_costs: [
//           1177.42, 1286.86, 1281.15, 1309.54, 1309.54, 1241.42, 1241.42, 1453.95,
//           1216.5, 1585.58, 1221.78, 1481.71,
//         ],
//       },
//       {
//         kpiName: "Packing",
//         lastDayCost: 6.67,
//         lastWeek: 46.69,
//         mtd: 6.67,
//         lastMonth: 7.98,
//         lastQuarter: 0.0,
//         ytd: 0.0,
//         lastDayChange: 3.8,
//         lastWeekChange: 3.2,
//         mtdChange: 3.8,
//         lastMonthChange: 2.7,
//         lastQuarterChange: 4.5,
//         ytdChange: 5.9,
//         trend: [1524, 1639, 2678, 2404, 1994],
//         budget_per_tonne: 7.98,
//         actual_per_tonne: 6.67,
//         monthly_costs: [
//           0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
//         ],
//       },
//       {
//         kpiName: "Freight",
//         lastDayCost: 166.17,
//         lastWeek: 1163.22,
//         mtd: 166.17,
//         lastMonth: 151.11,
//         lastQuarter: 103110.13,
//         ytd: 332347.239,
//         lastDayChange: 6.7,
//         lastWeekChange: 5.9,
//         mtdChange: 6.7,
//         lastMonthChange: 5.2,
//         lastQuarterChange: 7.8,
//         ytdChange: 9.2,
//         trend: [3781, 4342, 3992, 3172, 3165],
//         budget_per_tonne: 0.0,
//         actual_per_tonne: 0.0,
//         monthly_costs: [3781, 4342, 3992, 3172, 3165],
//       },
//       {
//         kpiName: "Raw Material",
//         lastDayCost: 215.45,
//         lastWeek: 1508.15,
//         mtd: 215.45,
//         lastMonth: 210.32,
//         lastQuarter: 143914.35,
//         ytd: 565947.523,
//         lastDayChange: 2.4,
//         lastWeekChange: 2.1,
//         mtdChange: 2.4,
//         lastMonthChange: 2.4,
//         lastQuarterChange: 3.8,
//         ytdChange: 4.5,
//         trend: [98182, 100581, 97506, 101193, 90876],
//         budget_per_tonne: 210.32,
//         actual_per_tonne: 215.45,
//         monthly_costs: [98182, 100581, 97506, 101193, 90876],
//       },
//     ]
//   }
// };

// // Create file if not exists
// if (!fs.existsSync(dataFile)) {
//   fs.writeFileSync(dataFile, JSON.stringify(initialData, null, 2));
//   console.log('Database file created with all locations');
// }

// // Read data
// function readData() {
//   try {
//     return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
//   } catch (error) {
//     console.log('Error reading file, returning initialData');
//     return initialData;
//   }
// }

// // Create server
// const server = http.createServer((req, res) => {
//   // Enable CORS
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
//   // Handle OPTIONS request
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200);
//     res.end();
//     return;
//   }

//   // Parse URL
//   const urlParts = req.url.split('/');
  
//   // GET /api/forging-data/:location/:process
//   if (req.method === 'GET' && urlParts[1] === 'api' && urlParts[2] === 'forging-data') {
//     const location = urlParts[3];
//     const data = readData();
    
//     console.log('Requested location:', location);
//     console.log('Available locations:', Object.keys(data));
    
//     res.writeHead(200, { 'Content-Type': 'application/json' });
    
//     if (data[location]) {
//       res.end(JSON.stringify(data[location]));
//     } else {
//       res.end(JSON.stringify({ meta: {}, kpi_data: [] }));
//     }
//   } else {
//     res.writeHead(404);
//     res.end('Not found');
//   }
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
//   console.log('No npm packages needed!');
//   console.log('Test APIs:');
//   console.log('  - Ranjangaon: http://localhost:5000/api/forging-data/Ranjangaon/forging');
//   console.log('  - Mundhwa: http://localhost:5000/api/forging-data/Mundhwa/forging');
//   console.log('  - Ranjangaon-2: http://localhost:5000/api/forging-data/Ranjangaon-2/forging');
// });