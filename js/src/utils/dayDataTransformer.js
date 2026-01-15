// Day-wise Data Transformation Utilities
// Use this in CostScreener.jsx for transforming day API responses

/**
 * Transform day-wise API data to chart format
 * @param {Array} apiData - Raw API response data
 * @returns {Array} - Transformed chart data
 */
export const transformDayDataToChartFormat = (apiData) => {
  if (!apiData || apiData.length === 0) {
    return null;
  }

  // Group by date
  const dateData = {};

  apiData.forEach((item) => {
    // Parse date from API (format: "2025-04-01 00:00:00.000000")
    const tranDate = item.tran_date || item.date;
    if (!tranDate) return;

    const dateStr = tranDate.split(" ")[0]; // Get "2025-04-01"
    const [year, month, day] = dateStr.split("-");
    const dateKey = `${day}-${getMonthName(parseInt(month))}`; // "01-Apr"

    if (!dateData[dateKey]) {
      dateData[dateKey] = {
        date: dateKey,
        fullDate: dateStr,
        costs: {},
        total: 0,
        count: 0,
      };
    }

    const costHead = (item.cost_head || "Other").trim();
    const amount = parseFloat(item.total_amount || 0);

    if (amount !== 0 && !isNaN(amount)) {
      if (dateData[dateKey].costs[costHead]) {
        dateData[dateKey].costs[costHead] += amount;
      } else {
        dateData[dateKey].costs[costHead] = amount;
      }

      dateData[dateKey].total += amount;
      dateData[dateKey].count++;
    }
  });

  // Sort by date
  const sortedData = Object.values(dateData)
    .filter((d) => d.count > 0)
    .sort((a, b) => new Date(a.fullDate) - new Date(b.fullDate));

  if (sortedData.length === 0) {
    return null;
  }

  // Format for chart
  const finalData = sortedData.map((dayData) => ({
    date: dayData.date,
    fullDate: dayData.fullDate,
    TotalActual: parseFloat(dayData.total.toFixed(2)),
    TotalPredicted: null,
    rawData: dayData.costs,
  }));

  return finalData;
};

/**
 * Transform day-wise API data to KPI cards
 * @param {Array} apiData - Raw API response data
 * @returns {Array} - KPI cards data
 */
export const transformDayDataToKpiCards = (apiData) => {
  if (!apiData || apiData.length === 0) {
    return [];
  }

  const costHeadData = {};

  apiData.forEach((item) => {
    const costHead = (item.cost_head || "Other").trim();
    const tranDate = item.tran_date || item.date;
    if (!tranDate) return;

    const dateStr = tranDate.split(" ")[0];
    const [year, month, day] = dateStr.split("-");
    const dateKey = `${year}-${month}-${day}`;

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
        dailyAmounts: {},
        dates: [],
      };
    }

    if (!costHeadData[costHead].dailyAmounts[dateKey]) {
      costHeadData[costHead].dailyAmounts[dateKey] = 0;
      costHeadData[costHead].dates.push(dateKey);
    }
    costHeadData[costHead].dailyAmounts[dateKey] += costValue;
  });

  if (Object.keys(costHeadData).length === 0) {
    return [];
  }

  const kpiCards = Object.values(costHeadData).map((costHead) => {
    const sortedDates = costHead.dates.sort();
    const trend = sortedDates.map((date) => costHead.dailyAmounts[date]);
    const lastDayAmount = trend[trend.length - 1] || 0;
    const avgAmount = trend.reduce((a, b) => a + b, 0) / trend.length;
    const budgetAmount = avgAmount * 1.05;

    return {
      kpiName: costHead.kpiName,
      actual_per_tonne: parseFloat(lastDayAmount.toFixed(2)),
      budget_per_tonne: parseFloat(budgetAmount.toFixed(2)),
      trend: trend.map((val, idx) => ({
        date: sortedDates[idx],
        actual: parseFloat(val.toFixed(2)),
        target: null,
      })),
      dates: sortedDates,
      daily_costs: trend.map((val) => parseFloat(val.toFixed(2))),
      daily_budget: trend.map(() => parseFloat(budgetAmount.toFixed(2))),
      production_percentage: null,
      target_percentage: null,
    };
  });

  return kpiCards;
};

/**
 * Build day-wise chart data for individual KPI cards
 * @param {Object} kpi - KPI data object
 * @param {String} currentDate - Selected date
 * @param {Object} kpiTargets - Target values
 * @returns {Array} - Chart data points
 */
export const buildDayChartData = (kpi, currentDate, kpiTargets = {}) => {
  if (!kpi || !kpi.dates || !Array.isArray(kpi.dates) || kpi.dates.length === 0) {
    console.warn("⚠️ Invalid KPI data for day chart:", kpi?.kpiName);
    return [];
  }

  const targetValue = Number(kpiTargets[kpi.kpiName] || 0);
  const trendData = kpi.trend || [];
  const dates = kpi.dates || [];

  console.log(`📅 Building day chart for: ${kpi.kpiName}`);
  console.log(`📊 Target value: ${targetValue ? `₹${targetValue}` : "NOT FOUND"}`);

  const chartData = dates.map((dateStr, index) => {
    const [year, month, day] = dateStr.split("-");
    const displayDate = `${day}-${getMonthName(parseInt(month))}`;
    const isCurrentDate = dateStr === currentDate;

    const trendItem = trendData[index];
    let actualValue = 0;

    if (trendItem && typeof trendItem === "object") {
      actualValue = trendItem.actual || 0;
    } else if (typeof trendItem === "number") {
      actualValue = trendItem;
    }

    const safeActualValue =
      isNaN(actualValue) || actualValue === null || actualValue === undefined
        ? 0
        : actualValue;

    return {
      date: displayDate,
      fullDate: dateStr,
      actual: parseFloat(safeActualValue.toFixed(2)),
      prediction: null,
      target: targetValue > 0 ? targetValue : null,
      isHistorical: true,
      isHighlighted: isCurrentDate,
      variance: targetValue > 0 ? safeActualValue - targetValue : 0,
    };
  });

  console.log(`✅ Day chart data built: ${chartData.length} points`);
  return chartData;
};

/**
 * Get top cost contributors for a specific date
 * @param {String} kpiName - KPI name
 * @param {String} selectedDate - Selected date (YYYY-MM-DD)
 * @param {Array} apiData - Raw API data
 * @returns {Array} - Top contributors
 */
export const getTopCostContributorsByDate = (kpiName, selectedDate, apiData) => {
  if (!apiData || apiData.length === 0) return [];

  const kpiData = apiData.filter((item) => {
    const costHead = (item.cost_head || "Other").trim();
    const tranDate = item.tran_date || item.date;
    if (!tranDate) return false;

    const dateStr = tranDate.split(" ")[0];
    return costHead === kpiName && dateStr === selectedDate;
  });

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

/**
 * Helper: Get month name from number
 */
function getMonthName(monthNo) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return months[monthNo - 1] || "Jan";
}

/**
 * Group day data by week for better visualization
 * @param {Array} chartData - Daily chart data
 * @returns {Array} - Weekly aggregated data
 */
export const aggregateByWeek = (chartData) => {
  if (!chartData || chartData.length === 0) return [];

  const weeks = {};
  
  chartData.forEach((day) => {
    const date = new Date(day.fullDate);
    const weekNum = getWeekNumber(date);
    const weekKey = `Week ${weekNum}`;

    if (!weeks[weekKey]) {
      weeks[weekKey] = {
        week: weekKey,
        totalActual: 0,
        count: 0,
        dates: [],
      };
    }

    weeks[weekKey].totalActual += day.actual;
    weeks[weekKey].count++;
    weeks[weekKey].dates.push(day.date);
  });

  return Object.values(weeks).map((week) => ({
    week: week.week,
    actual: parseFloat((week.totalActual / week.count).toFixed(2)),
    dates: week.dates.join(", "),
  }));
};

/**
 * Get week number of year
 */
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}