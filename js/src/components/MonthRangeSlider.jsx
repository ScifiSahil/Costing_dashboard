import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useCostStore } from "../store/costStore";

// 🔥 FINANCIAL YEAR FORMAT: April to March
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

// 🔥 Mapping financial year index to calendar month
const financialToCalendarMonth = (fIndex) => {
  return ((fIndex + 3) % 12) + 1;
};

// 🔥 Mapping calendar month to financial year index
const calendarToFinancialIndex = (calMonth) => {
  return (calMonth + 8) % 12;
};

const MonthRangeSlider = ({ theme, compact = false }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [initialRange, setInitialRange] = useState({
    fromMonth: 4,
    fromYear: 2024,
    toMonth: 3,
    toYear: 2025,
  });
  const [showQuarterDropdown, setShowQuarterDropdown] = useState(false);
  const quarterDropdownRef = useRef(null);

  // Zustand Store
  const { fromMonth, fromYear, toMonth, toYear } = useCostStore(
    (state) => state.monthRange
  );
  const setMonthRange = useCostStore((state) => state.setMonthRange);

  const currentYear = useCostStore((state) => state.currentYear);
  const setCurrentYear = useCostStore((state) => state.setCurrentYear);
  const viewType = useCostStore((state) => state.viewType);
  const viewMode = useCostStore((state) => state.viewMode);
  const isDayView = viewMode === "day";
  const setViewMode = useCostStore((state) => state.setViewMode);

  const fetchCostData = useCostStore((state) => state.fetchCostData);
  const apiLoading = useCostStore((state) => state.apiLoading);
  const isDefaultView = useCostStore((state) => state.isDefaultView);
  const setIsDefaultView = useCostStore((state) => state.setIsDefaultView);
  const selectedDayFrom = useCostStore((state) => state.selectedDayFrom);
  const selectedDayTo = useCostStore((state) => state.selectedDayTo);
  const setSelectedDayRange = useCostStore(
    (state) => state.setSelectedDayRange
  );

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const systemYear = new Date().getFullYear();
  const systemMonth = new Date().getMonth() + 1;

  // 🔥 Get Financial Year from calendar year
  const getFinancialYearFromDate = (month, year) => {
    // If month is Jan, Feb, or Mar, financial year started in previous calendar year
    if (month >= 1 && month <= 3) {
      return year - 1;
    }
    // If month is Apr to Dec, financial year started in same calendar year
    return year;
  };

  // 🔥 Current Financial Year
  const currentFinancialYear = getFinancialYearFromDate(
    systemMonth,
    systemYear
  );

  // 🔥 Helper: Get position on 12-month financial scale (0-100)
  const getPositionFromMonth = (calMonth) => {
    const fIndex = calendarToFinancialIndex(calMonth);
    return (fIndex / 11) * 100;
  };

  // 🔥 Helper: Get calendar month from position (1-12)
  const getMonthFromPosition = (position) => {
    const fIndex = Math.round((position / 100) * 11);
    return financialToCalendarMonth(fIndex);
  };

  // 🔥 Quarter options (Financial Year)
  const quarterOptions = [
    { label: "Q1 (Apr-Jun)", value: "q1", from: 4, to: 6 },
    { label: "Q2 (Jul-Sep)", value: "q2", from: 7, to: 9 },
    { label: "Q3 (Oct-Dec)", value: "q3", from: 10, to: 12 },
    { label: "Q4 (Jan-Mar)", value: "q4", from: 1, to: 3 },
  ];

  // 🔥 Current effective month (for current FY)
  const effectiveMonth = currentYear === currentFinancialYear ? systemMonth : 3;

  // 🔥 Preset buttons
  const presets =
    viewMode === "day"
      ? [
          {
            label: "Last 7 Days",
            value: "7d",
            getRange: () => {
              const today = new Date();
              const fromDate = new Date();
              fromDate.setDate(today.getDate() - 6);

              return {
                from: fromDate.getMonth() + 1,
                to: today.getMonth() + 1,
                fromYear: fromDate.getFullYear(),
                toYear: today.getFullYear(),
                fromDay: fromDate.getDate(),
                toDay: today.getDate(),
              };
            },
          },
          {
            label: "Last 14 Days",
            value: "14d",
            getRange: () => {
              const today = new Date();
              const fromDate = new Date();
              fromDate.setDate(today.getDate() - 13);

              return {
                from: fromDate.getMonth() + 1,
                to: today.getMonth() + 1,
                fromYear: fromDate.getFullYear(),
                toYear: today.getFullYear(),
                fromDay: fromDate.getDate(),
                toDay: today.getDate(),
              };
            },
          },
          {
            label: "Current Month",
            value: "cm",
            getRange: () => {
              const today = new Date();
              return {
                from: today.getMonth() + 1,
                to: today.getMonth() + 1,
                fromYear: today.getFullYear(),
                toYear: today.getFullYear(),
                fromDay: 1,
                toDay: today.getDate(),
              };
            },
          },
          {
            label: "Full Month",
            value: "fm",
            getRange: () => {
              const today = new Date();
              const totalDays = getDaysInMonth(
                today.getMonth() + 1,
                today.getFullYear()
              );
              return {
                from: today.getMonth() + 1,
                to: today.getMonth() + 1,
                fromYear: today.getFullYear(),
                toYear: today.getFullYear(),
                fromDay: 1,
                toDay: totalDays,
              };
            },
          },
        ]
      : [
          {
            label: "Current",
            value: "current",
            getRange: () => ({
              from: effectiveMonth,
              to: effectiveMonth,
              fromYear: effectiveMonth >= 4 ? currentYear : currentYear + 1,
              toYear: effectiveMonth >= 4 ? currentYear : currentYear + 1,
            }),
          },
          {
            label: "Last 3M",
            value: "3m",
            getRange: () => {
              let to = effectiveMonth;
              let from = effectiveMonth - 2;
              let toYr = effectiveMonth >= 4 ? currentYear : currentYear + 1;
              let fromYr = toYr;

              if (from <= 0) {
                from += 12;
                fromYr -= 1;
              }

              return { from, to, fromYear: fromYr, toYear: toYr };
            },
          },
          {
            label: "Last 6M",
            value: "6m",
            getRange: () => {
              let to = effectiveMonth;
              let from = effectiveMonth - 5;
              let toYr = effectiveMonth >= 4 ? currentYear : currentYear + 1;
              let fromYr = toYr;

              if (from <= 0) {
                from += 12;
                fromYr -= 1;
              }

              return { from, to, fromYear: fromYr, toYear: toYr };
            },
          },
          {
            label: "YTD",
            value: "ytd",
            getRange: () => ({
              from: 4,
              to: effectiveMonth,
              fromYear: currentYear,
              toYear: effectiveMonth >= 4 ? currentYear : currentYear + 1,
            }),
          },
          {
            label: "Full Year",
            value: "full",
            getRange: () => ({
              from: 4,
              to: 3,
              fromYear: currentYear,
              toYear: currentYear + 1,
            }),
          },
        ];

  // 🔥 Handle preset click
  const handlePresetClick = async (preset) => {
    if (apiLoading) return;

    setIsDefaultView(false);

    const range = preset.getRange();

    if (isDayView) {
      setMonthRange(range.from, range.fromYear, range.to, range.toYear);
      setSelectedDayRange(range.fromDay, range.toDay);

      await fetchCostData(
        range.from,
        range.fromYear,
        range.to,
        range.toYear,
        viewType,
        false,
        { fromDay: range.fromDay, toDay: range.toDay }
      );
    } else {
      setMonthRange(range.from, range.fromYear, range.to, range.toYear);
      await fetchCostData(
        range.from,
        range.fromYear,
        range.to,
        range.toYear,
        viewType,
        false
      );
    }
  };

  // 🔥 Handle quarter selection
  const handleQuarterClick = async (quarter) => {
    if (apiLoading) return;

    setIsDefaultView(false);

    const fromMonth = quarter.from;
    const toMonth = quarter.to;

    // Q4 crosses year boundary (Jan-Mar next year)
    const fromYr = quarter.value === "q4" ? currentYear : currentYear;
    const toYr = quarter.value === "q4" ? currentYear + 1 : currentYear;

    setMonthRange(fromMonth, fromYr, toMonth, toYr);
    await fetchCostData(fromMonth, fromYr, toMonth, toYr, viewType, false);

    setShowQuarterDropdown(false);
  };

  // 🔥 Get active preset
  const getActivePreset = () => {
    const preset = presets.find((p) => {
      const range = p.getRange ? p.getRange() : p;

      if (isDayView) {
        return (
          range.from === fromMonth &&
          range.to === toMonth &&
          range.fromYear === fromYear &&
          range.toYear === toYear &&
          range.fromDay === selectedDayFrom &&
          range.toDay === selectedDayTo
        );
      }

      return (
        range.from === fromMonth &&
        range.to === toMonth &&
        range.fromYear === fromYear &&
        range.toYear === toYear
      );
    });
    if (preset) return preset.value;

    const quarter = quarterOptions.find((q) => {
      const fromYr = q.value === "q4" ? currentYear : currentYear;
      const toYr = q.value === "q4" ? currentYear + 1 : currentYear;
      return (
        q.from === fromMonth &&
        q.to === toMonth &&
        fromYr === fromYear &&
        toYr === toYear
      );
    });
    if (quarter) return quarter.value;

    return null;
  };

  // 🔥 Update range and fetch data
  const updateRange = async (
    newFromMonth,
    newFromYear,
    newToMonth,
    newToYear
  ) => {
    setMonthRange(newFromMonth, newFromYear, newToMonth, newToYear);

    if (isDefaultView) {
      setIsDefaultView(false);
      return;
    }

    await fetchCostData(
      newFromMonth,
      newFromYear,
      newToMonth,
      newToYear,
      viewType,
      false
    );
  };

  // 🔥 Handle track click for DAY VIEW
  const handleDayTrackClick = (e) => {
    if (apiLoading || isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(1, clickX / rect.width));

    const totalDays = getDaysInMonth(fromMonth, fromYear);
    const clickedDay = Math.max(
      1,
      Math.min(totalDays, Math.ceil(percent * totalDays))
    );

    // Determine which handle is closer
    const distToFrom = Math.abs(clickedDay - selectedDayFrom);
    const distToTo = Math.abs(clickedDay - selectedDayTo);

    if (distToFrom < distToTo) {
      // Move FROM handle
      if (clickedDay <= selectedDayTo) {
        setSelectedDayRange(clickedDay, selectedDayTo);
        fetchCostData(fromMonth, fromYear, toMonth, toYear, viewType, false, {
          fromDay: clickedDay,
          toDay: selectedDayTo,
        });
      }
    } else {
      // Move TO handle
      if (clickedDay >= selectedDayFrom) {
        setSelectedDayRange(selectedDayFrom, clickedDay);
        fetchCostData(fromMonth, fromYear, toMonth, toYear, viewType, false, {
          fromDay: selectedDayFrom,
          toDay: clickedDay,
        });
      }
    }
  };

  // 🔥 Handle track click for MONTH VIEW
  const handleTrackClick = (e) => {
    if (viewMode === "day") {
      handleDayTrackClick(e);
      return;
    }

    if (apiLoading || isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const position = (clickX / rect.width) * 100;
    const clickedMonth = getMonthFromPosition(position);

    const isStartVisible = fromYear === currentYear;
    const isEndVisible = toYear === currentYear;

    if (isStartVisible && isEndVisible) {
      const startPos = getPositionFromMonth(fromMonth);
      const endPos = getPositionFromMonth(toMonth);
      const clickPos = position;

      const distToStart = Math.abs(clickPos - startPos);
      const distToEnd = Math.abs(clickPos - endPos);

      if (distToStart < distToEnd) {
        updateRange(clickedMonth, fromYear, toMonth, toYear);
      } else {
        updateRange(fromMonth, fromYear, clickedMonth, toYear);
      }
    } else if (isStartVisible) {
      updateRange(clickedMonth, fromYear, toMonth, toYear);
    } else if (isEndVisible) {
      updateRange(fromMonth, fromYear, clickedMonth, toYear);
    }
  };

  // 🔥 Handle drag start
  const handleDragStart = (e, type) => {
    if (apiLoading) return;
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(type);
    setDragStartX(e.clientX || e.touches?.[0]?.clientX);

    if (isDayView) {
      setInitialRange({
        fromDay: selectedDayFrom,
        toDay: selectedDayTo,
      });
    } else {
      setInitialRange({
        fromMonth,
        fromYear,
        toMonth,
        toYear,
      });
    }
  };

  // 🔥 Handle drag move for DAY VIEW
  const handleDayDragMove = useCallback(
    (e, clientX) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      const percent = Math.max(0, Math.min(100, position)) / 100;

      const totalDays = getDaysInMonth(fromMonth, fromYear);
      const newDay = Math.max(
        1,
        Math.min(totalDays, Math.ceil(percent * totalDays))
      );

      if (isDragging === "dayFrom") {
        if (newDay <= selectedDayTo) {
          setSelectedDayRange(newDay, selectedDayTo);
        }
      } else if (isDragging === "dayTo") {
        if (newDay >= selectedDayFrom) {
          setSelectedDayRange(selectedDayFrom, newDay);
        }
      }
    },
    [
      isDragging,
      fromMonth,
      fromYear,
      selectedDayFrom,
      selectedDayTo,
      setSelectedDayRange,
    ]
  );

  // 🔥 Handle drag move for MONTH VIEW
  const handleMonthDragMove = useCallback(
    (e, clientX) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;

      const deltaX = clientX - dragStartX;
      const deltaMonths = Math.round((deltaX / rect.width) * 11);

      if (isDragging === "start") {
        const newMonth = getMonthFromPosition(position);
        if (currentYear === fromYear) {
          setMonthRange(newMonth, fromYear, toMonth, toYear);
        }
      } else if (isDragging === "end") {
        const newMonth = getMonthFromPosition(position);
        if (currentYear === toYear) {
          setMonthRange(fromMonth, fromYear, newMonth, toYear);
        }
      } else if (isDragging === "range") {
        if (currentYear === fromYear && currentYear === toYear) {
          const fromFIndex = calendarToFinancialIndex(initialRange.fromMonth);
          const toFIndex = calendarToFinancialIndex(initialRange.toMonth);

          let newFromFIndex = fromFIndex + deltaMonths;
          let newToFIndex = toFIndex + deltaMonths;

          if (newFromFIndex < 0) {
            const shift = -newFromFIndex;
            newFromFIndex = 0;
            newToFIndex = Math.min(11, newToFIndex + shift);
          }

          if (newToFIndex > 11) {
            const shift = newToFIndex - 11;
            newToFIndex = 11;
            newFromFIndex = Math.max(0, newFromFIndex - shift);
          }

          const newFromMonth = financialToCalendarMonth(newFromFIndex);
          const newToMonth = financialToCalendarMonth(newToFIndex);

          setMonthRange(newFromMonth, fromYear, newToMonth, toYear);
        }
      }
    },
    [
      isDragging,
      fromMonth,
      fromYear,
      toMonth,
      toYear,
      dragStartX,
      initialRange,
      setMonthRange,
      currentYear,
    ]
  );

  // 🔥 Handle drag move (combined)
  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging || !sliderRef.current) return;

      const clientX = e.clientX || e.touches?.[0]?.clientX;

      if (isDayView) {
        handleDayDragMove(e, clientX);
      } else {
        handleMonthDragMove(e, clientX);
      }
    },
    [isDragging, isDayView, handleDayDragMove, handleMonthDragMove]
  );

  // 🔥 Handle drag end
  const handleDragEnd = useCallback(async () => {
    if (!isDragging) return;

    setIsDragging(null);

    if (isDefaultView) {
      setIsDefaultView(false);
      return;
    }

    if (isDayView) {
      await fetchCostData(
        fromMonth,
        fromYear,
        toMonth,
        toYear,
        viewType,
        false,
        {
          fromDay: selectedDayFrom,
          toDay: selectedDayTo,
        }
      );
    } else {
      await fetchCostData(
        fromMonth,
        fromYear,
        toMonth,
        toYear,
        viewType,
        false
      );
    }
  }, [
    isDragging,
    isDayView,
    fromMonth,
    fromYear,
    toMonth,
    toYear,
    viewType,
    selectedDayFrom,
    selectedDayTo,
    fetchCostData,
    isDefaultView,
    setIsDefaultView,
  ]);

  const getDayLabel = (day) => {
    const d = new Date(fromYear, fromMonth - 1, day);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
  };

  // 🔥 Add/remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // 🔥 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        quarterDropdownRef.current &&
        !quarterDropdownRef.current.contains(event.target)
      ) {
        setShowQuarterDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔥 Year navigation - Navigate Financial Years
  const handleYearChange = (delta) => {
    if (apiLoading) return;

    const newYear = currentYear + delta;

    // Limit: can't go beyond current FY + 1 or before 2020
    if (newYear < 2020 || newYear > currentFinancialYear + 1) return;

    setCurrentYear(newYear);
  };

  // 🔥 Month change for Day View
  const handleMonthChange = (delta) => {
    if (apiLoading) return;

    let newMonth = fromMonth + delta;
    let newYear = fromYear;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    // Check bounds
    const targetFY = getFinancialYearFromDate(newMonth, newYear);
    if (targetFY < 2020 || targetFY > currentFinancialYear) return;

    setMonthRange(newMonth, newYear, newMonth, newYear);

    // Reset to full month
    const totalDays = getDaysInMonth(newMonth, newYear);
    setSelectedDayRange(1, totalDays);

    fetchCostData(newMonth, newYear, newMonth, newYear, viewType, false, {
      fromDay: 1,
      toDay: totalDays,
    });
  };

  // 🔥 Calculate positions for current year view
  const getDisplayPositionForMonth = (month, year) => {
    if (year < currentYear) {
      return -10;
    }
    if (year > currentYear) {
      return 110;
    }
    return getPositionFromMonth(month);
  };

  const startPosition = getDisplayPositionForMonth(fromMonth, fromYear);
  const endPosition = getDisplayPositionForMonth(toMonth, toYear);
  const activePreset = getActivePreset();

  const isCrossYear = fromYear !== toYear;

  // 🔥 Format display text
  const getDisplayText = () => {
    const getMonthName = (month) => {
      const standardMonths = [
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
      return standardMonths[month - 1];
    };

    if (isDayView) {
      return `${getMonthName(fromMonth)} ${fromYear}`;
    }

    return `${getMonthName(fromMonth)} '${String(fromYear).slice(
      -2
    )} – ${getMonthName(toMonth)} '${String(toYear).slice(-2)}`;
  };

  // 🔥 Check if month is in selected range
  const isMonthInRange = (fIndex) => {
    const calMonth = financialToCalendarMonth(fIndex);

    if (fromYear === toYear && fromYear === currentYear) {
      if (fromMonth > toMonth) {
        return calMonth >= fromMonth || calMonth <= toMonth;
      }
      return calMonth >= fromMonth && calMonth <= toMonth;
    }

    if (fromYear < currentYear && toYear === currentYear) {
      return calMonth <= toMonth;
    }

    if (fromYear === currentYear && toYear > currentYear) {
      return calMonth >= fromMonth;
    }

    return false;
  };

  return (
    <div className={`${compact ? "px-5 py-4" : "p-6"} relative`}>
      {/* 🔥 DAY / MONTH TOGGLE */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setViewMode("month")}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            viewMode === "month"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Month
        </button>

        <button
          onClick={() => setViewMode("day")}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            viewMode === "day"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Day
        </button>
      </div>

      {/* Header Row */}
      <div className="flex items-center justify-between mb-5 gap-4 flex-wrap">
        {/* Year/Month Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              isDayView ? handleMonthChange(-1) : handleYearChange(-1)
            }
            disabled={apiLoading}
            className={`p-2 rounded-lg transition-all ${
              apiLoading
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 active:scale-95"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 rounded-xl border-2 border-blue-300">
            <Calendar className="w-6 h-6 text-blue-600" />

            <span className="text-lg font-extrabold text-gray-800">
              {isDayView
                ? getDisplayText()
                : `FY ${currentYear}-${String(currentYear + 1).slice(-2)}`}
            </span>
          </div>

          <button
            onClick={() =>
              isDayView ? handleMonthChange(1) : handleYearChange(1)
            }
            disabled={apiLoading}
            className={`p-2 rounded-lg transition-all ${
              apiLoading
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 active:scale-95"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Range Display */}
        <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg border border-blue-300">
          <span className="text-sm font-bold text-blue-900">
            {isDayView
              ? `${selectedDayFrom} - ${selectedDayTo} ${getDisplayText()}`
              : getDisplayText()}
          </span>
        </div>

        {/* Quick Presets + Quarter Dropdown */}
        <div className="flex items-center gap-2 flex-wrap">
          {presets.map((preset) => (
            <button
              key={preset.value}
              onClick={() => handlePresetClick(preset)}
              disabled={apiLoading}
              className={`px-3 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                activePreset === preset.value
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {preset.label}
            </button>
          ))}

          {!isDayView && (
            <div className="relative" ref={quarterDropdownRef}>
              <button
                onClick={() => setShowQuarterDropdown(!showQuarterDropdown)}
                disabled={apiLoading}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                  quarterOptions.some((q) => q.value === activePreset)
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span>Quarters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showQuarterDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showQuarterDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 min-w-[160px] z-50">
                  {quarterOptions.map((quarter) => (
                    <button
                      key={quarter.value}
                      onClick={() => handleQuarterClick(quarter)}
                      disabled={apiLoading}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-all ${
                        activePreset === quarter.value
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-gray-50"
                      } ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {quarter.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Year Range Display Above Slider */}
      {isCrossYear && !isDayView && (
        <div className="flex items-center justify-between mb-3 px-2">
          {fromYear < currentYear && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-400 rounded-lg shadow-md">
              <Calendar className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-extrabold text-purple-900">
                Start: {getDisplayText().split(" – ")[0]}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-blue-200 border-2 border-blue-400 rounded-lg shadow-md">
            <Calendar className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-extrabold text-blue-900">
              Viewing: FY {currentYear}-{String(currentYear + 1).slice(-2)}
            </span>
          </div>

          {toYear > currentYear && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-green-200 border-2 border-green-400 rounded-lg shadow-md">
              <Calendar className="w-4 h-4 text-green-700" />
              <span className="text-xs font-extrabold text-green-900">
                End: {getDisplayText().split(" – ")[1]}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Slider Container */}
      <div className="relative pt-4 pb-8">
        <div className="relative">
          {/* Overflow indicators for month view only */}
          {!isDayView && fromYear < currentYear && (
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-purple-300 via-purple-200 to-transparent rounded-l-full pointer-events-none z-10 flex items-center justify-start pl-2 border-l-4 border-purple-500 animate-pulse">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-5 h-5 text-purple-700 rotate-180" />
                <span className="text-[9px] font-extrabold text-purple-900 mt-0.5">
                  '{String(fromYear).slice(-2)}
                </span>
              </div>
            </div>
          )}

          {!isDayView && toYear > currentYear && (
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-green-300 via-green-200 to-transparent rounded-r-full pointer-events-none z-10 flex items-center justify-end pr-2 border-r-4 border-green-500 animate-pulse">
              <div className="flex flex-col items-center">
                <ArrowRight className="w-5 h-5 text-green-700" />
                <span className="text-[9px] font-extrabold text-green-900 mt-0.5">
                  '{String(toYear).slice(-2)}
                </span>
              </div>
            </div>
          )}

          <div
            ref={sliderRef}
            className={`relative rounded-full overflow-hidden ${
              isDayView
                ? "h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 cursor-pointer"
                : "h-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 cursor-pointer"
            }`}
            onClick={handleTrackClick}
          >
            {/* =====================================================
             🔥 DAY VIEW : DAY-BASED SELECTION WITH 2 HANDLES
            ===================================================== */}
            {isDayView &&
              (() => {
                const totalDays = getDaysInMonth(fromMonth, fromYear);
                const leftPos = ((selectedDayFrom - 1) / totalDays) * 100;
                const rightPos = (selectedDayTo / totalDays) * 100;

                return (
                  <>
                    {/* Selected range bar */}
                    <div
                      className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-all duration-200"
                      style={{
                        left: `${leftPos}%`,
                        width: `${rightPos - leftPos}%`,
                      }}
                    />

                    {/* Day tick marks */}
                    {Array.from({ length: totalDays }, (_, i) => i + 1).map(
                      (day) => (
                        <div
                          key={day}
                          className="absolute top-0 bottom-0 w-px bg-gray-300 opacity-50"
                          style={{
                            left: `${((day - 0.5) / totalDays) * 100}%`,
                          }}
                        />
                      )
                    )}

                    {/* FROM Handle */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
                        bg-white border-[3px] border-blue-600 
                        rounded-full shadow-xl cursor-ew-resize hover:scale-125 transition-transform z-20
                        ${
                          isDragging === "dayFrom"
                            ? "scale-125 border-blue-700 shadow-2xl animate-pulse"
                            : ""
                        }`}
                      style={{ left: `${leftPos}%` }}
                      onMouseDown={(e) => handleDragStart(e, "dayFrom")}
                      onTouchStart={(e) => handleDragStart(e, "dayFrom")}
                    >
                      <div className="absolute inset-1.5 bg-blue-600 rounded-full" />
                    </div>

                    {/* TO Handle */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
                        bg-white border-[3px] border-blue-600 
                        rounded-full shadow-xl cursor-ew-resize hover:scale-125 transition-transform z-20
                        ${
                          isDragging === "dayTo"
                            ? "scale-125 border-blue-700 shadow-2xl animate-pulse"
                            : ""
                        }`}
                      style={{ left: `${rightPos}%` }}
                      onMouseDown={(e) => handleDragStart(e, "dayTo")}
                      onTouchStart={(e) => handleDragStart(e, "dayTo")}
                    >
                      <div className="absolute inset-1.5 bg-blue-600 rounded-full" />
                    </div>
                  </>
                );
              })()}

            {/* =====================================================
             🔥 MONTH VIEW : EXISTING SLIDER LOGIC
            ===================================================== */}
            {!isDayView && (
              <>
                {/* Selected Range Background */}
                {!isCrossYear && (
                  <div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transition-all duration-150"
                    style={{
                      left: `${Math.max(0, startPosition)}%`,
                      width: `${
                        Math.min(100, endPosition) - Math.max(0, startPosition)
                      }%`,
                    }}
                  />
                )}

                {/* Cross-year range visualization */}
                {isCrossYear && (
                  <>
                    {fromYear < currentYear && (
                      <div
                        className="absolute h-full bg-gradient-to-r from-purple-400 to-blue-500 shadow-lg border-l-4 border-purple-600"
                        style={{
                          left: "0%",
                          width: `${Math.min(100, endPosition)}%`,
                        }}
                      />
                    )}

                    {toYear > currentYear && (
                      <div
                        className="absolute h-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg border-r-4 border-green-600"
                        style={{
                          left: `${Math.max(0, startPosition)}%`,
                          width: `${100 - Math.max(0, startPosition)}%`,
                        }}
                      />
                    )}
                  </>
                )}

                {/* Draggable Range Area */}
                {!isCrossYear && (
                  <div
                    className="absolute h-full cursor-grab active:cursor-grabbing"
                    style={{
                      left: `${Math.max(0, startPosition)}%`,
                      width: `${
                        Math.min(100, endPosition) - Math.max(0, startPosition)
                      }%`,
                    }}
                    onMouseDown={(e) => handleDragStart(e, "range")}
                    onTouchStart={(e) => handleDragStart(e, "range")}
                  />
                )}

                {/* Start Handle */}
                {fromYear === currentYear && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
                      bg-white border-[3px] ${
                        fromYear < currentYear
                          ? "border-purple-600"
                          : "border-blue-600"
                      } 
                      rounded-full shadow-xl cursor-ew-resize hover:scale-125 transition-transform z-20
                      ${
                        isDragging === "start"
                          ? "scale-125 border-blue-700 shadow-2xl animate-pulse"
                          : ""
                      }`}
                    style={{ left: `${startPosition}%` }}
                    onMouseDown={(e) => handleDragStart(e, "start")}
                    onTouchStart={(e) => handleDragStart(e, "start")}
                  >
                    <div
                      className={`absolute inset-1.5 ${
                        fromYear < currentYear ? "bg-purple-600" : "bg-blue-600"
                      } rounded-full`}
                    />
                  </div>
                )}

                {/* End Handle */}
                {toYear === currentYear && (
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
                      bg-white border-[3px] ${
                        toYear > currentYear
                          ? "border-green-600"
                          : "border-blue-600"
                      } 
                      rounded-full shadow-xl cursor-ew-resize hover:scale-125 transition-transform z-20
                      ${
                        isDragging === "end"
                          ? "scale-125 border-blue-700 shadow-2xl animate-pulse"
                          : ""
                      }`}
                    style={{ left: `${endPosition}%` }}
                    onMouseDown={(e) => handleDragStart(e, "end")}
                    onTouchStart={(e) => handleDragStart(e, "end")}
                  >
                    <div
                      className={`absolute inset-1.5 ${
                        toYear > currentYear ? "bg-green-600" : "bg-blue-600"
                      } rounded-full`}
                    />
                  </div>
                )}

                {/* Month tick marks */}
                {monthNames.map((_, index) => (
                  <div
                    key={index}
                    className="absolute top-0 bottom-0 w-px bg-gray-400 opacity-60"
                    style={{ left: `${(index / 11) * 100}%` }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Month Labels - ONLY for Month View */}
          {!isDayView && (
            <div className="relative mt-6 h-6">
              {monthNames.map((name, index) => (
                <div
                  key={name}
                  className={`absolute text-xs font-bold tracking-wide transition-colors ${
                    isMonthInRange(index)
                      ? "text-blue-700 scale-110"
                      : "text-gray-500"
                  }`}
                  style={{
                    left: `${(index / 11) * 100}%`,
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          )}

          {/* Day Labels - ONLY for Day View */}
          {isDayView && (
            <>
              {/* Day numbers below slider */}
              <div className="relative mt-6 h-6">
                {Array.from(
                  { length: getDaysInMonth(fromMonth, fromYear) },
                  (_, i) => i + 1
                ).map((day) => {
                  const totalDays = getDaysInMonth(fromMonth, fromYear);
                  const isInRange =
                    day >= selectedDayFrom && day <= selectedDayTo;

                  // Show every 5th day or first/last day
                  const shouldShow =
                    day === 1 || day === totalDays || day % 5 === 0;

                  if (!shouldShow) return null;

                  return (
                    <div
                      key={day}
                      className={`absolute text-xs font-bold transition-colors ${
                        isInRange ? "text-blue-700" : "text-gray-500"
                      }`}
                      style={{
                        left: `${((day - 0.5) / totalDays) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              {/* From - To day labels */}
              <div className="mt-8 flex justify-between items-center px-4">
                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg px-4 py-2 shadow-md">
                  <span className="text-sm font-bold text-blue-900">
                    From: {getDayLabel(selectedDayFrom)}
                  </span>
                </div>

                <ArrowRight className="w-5 h-5 text-gray-400" />

                <div className="bg-blue-50 border-2 border-blue-400 rounded-lg px-4 py-2 shadow-md">
                  <span className="text-sm font-bold text-blue-900">
                    To: {getDayLabel(selectedDayTo)}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Loading Indicator */}
      {apiLoading && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center z-50">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default MonthRangeSlider;