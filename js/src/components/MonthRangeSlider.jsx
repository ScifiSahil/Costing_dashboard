import React, { useState, useRef, useEffect, useCallback } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useCostStore } from "../store/costStore";

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

const MonthRangeSlider = ({ theme, compact = false }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(null); // 'start', 'end', or 'range'
  const [dragStartX, setDragStartX] = useState(0);
  const [initialRange, setInitialRange] = useState({ from: 1, to: 12 });

  // Zustand Store
  const monthRange = useCostStore((state) => state.monthRange);
  const setMonthRange = useCostStore((state) => state.setMonthRange);
  const currentYear = useCostStore((state) => state.currentYear);
  const setCurrentYear = useCostStore((state) => state.setCurrentYear);
  const viewType = useCostStore((state) => state.viewType);
  const fetchCostData = useCostStore((state) => state.fetchCostData);
  const apiLoading = useCostStore((state) => state.apiLoading);

  // Get current month for "Current Month" preset
const systemYear = new Date().getFullYear();
const systemMonth = new Date().getMonth() + 1;

// 🔥 KEY FIX
const effectiveMonth =
  currentYear === systemYear ? systemMonth : 12;


  // Quick presets
const presets = [
  {
    label: "Current Month",
    value: "current",
    from: effectiveMonth,
    to: effectiveMonth,
  },
  {
    label: "Last 3M",
    value: "3m",
    from: Math.max(1, effectiveMonth - 2),
    to: effectiveMonth,
  },
  {
    label: "Last 6M",
    value: "6m",
    from: Math.max(1, effectiveMonth - 5),
    to: effectiveMonth,
  },
  {
    label: "YTD",
    value: "ytd",
    from: 1,
    to: effectiveMonth,
  },
  {
    label: "Full Year",
    value: "full",
    from: 1,
    to: 12,
  },
];


  // Handle preset click
  const handlePresetClick = async (preset) => {
    if (apiLoading) return;
    setMonthRange(preset.from, preset.to);
    await fetchCostData(preset.from, preset.to, currentYear, viewType);
  };

  // Get active preset
  const getActivePreset = () => {
    const preset = presets.find(
      (p) => p.from === monthRange.from && p.to === monthRange.to
    );
    return preset?.value || null;
  };

  // Calculate position from month (1-12)
  const getPositionFromMonth = (month) => {
    return ((month - 1) / 11) * 100;
  };

  // Calculate month from position (0-100)
  const getMonthFromPosition = (position) => {
    const month = Math.round((position / 100) * 11) + 1;
    return Math.max(1, Math.min(12, month));
  };

  // Handle mouse down on slider track
  const handleTrackClick = (e) => {
    if (apiLoading || isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const position = (clickX / rect.width) * 100;
    const clickedMonth = getMonthFromPosition(position);

    // Determine which handle is closer
    const startPos = getPositionFromMonth(monthRange.from);
    const endPos = getPositionFromMonth(monthRange.to);
    const clickPos = position;

    const distToStart = Math.abs(clickPos - startPos);
    const distToEnd = Math.abs(clickPos - endPos);

    if (distToStart < distToEnd) {
      if (clickedMonth <= monthRange.to) {
        updateRange(clickedMonth, monthRange.to);
      }
    } else {
      if (clickedMonth >= monthRange.from) {
        updateRange(monthRange.from, clickedMonth);
      }
    }
  };

  // Update range and fetch data
  const updateRange = async (from, to) => {
    if (from > to) [from, to] = [to, from];
    setMonthRange(from, to);
    await fetchCostData(from, to, currentYear, viewType);
  };

  // Handle drag start
  const handleDragStart = (e, type) => {
    if (apiLoading) return;
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(type);
    setDragStartX(e.clientX || e.touches?.[0]?.clientX);
    setInitialRange({ from: monthRange.from, to: monthRange.to });
  };

  // Handle drag move
  const handleDragMove = useCallback(
    (e) => {
      if (!isDragging || !sliderRef.current) return;

      const clientX = e.clientX || e.touches?.[0]?.clientX;
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      const newMonth = getMonthFromPosition(position);

      if (isDragging === "start") {
        if (newMonth <= monthRange.to) {
          setMonthRange(newMonth, monthRange.to);
        }
      } else if (isDragging === "end") {
        if (newMonth >= monthRange.from) {
          setMonthRange(monthRange.from, newMonth);
        }
      } else if (isDragging === "range") {
        const deltaX = clientX - dragStartX;
        const deltaMonths = Math.round((deltaX / rect.width) * 11);

        let newFrom = initialRange.from + deltaMonths;
        let newTo = initialRange.to + deltaMonths;

        // Clamp to valid range
        if (newFrom < 1) {
          newTo = newTo + (1 - newFrom);
          newFrom = 1;
        }
        if (newTo > 12) {
          newFrom = newFrom - (newTo - 12);
          newTo = 12;
        }

        newFrom = Math.max(1, Math.min(12, newFrom));
        newTo = Math.max(1, Math.min(12, newTo));

        if (newFrom <= newTo) {
          setMonthRange(newFrom, newTo);
        }
      }
    },
    [isDragging, monthRange, dragStartX, initialRange, setMonthRange]
  );

  // Handle drag end
  const handleDragEnd = useCallback(async () => {
    if (isDragging) {
      setIsDragging(null);
      await fetchCostData(
        monthRange.from,
        monthRange.to,
        currentYear,
        viewType
      );
    }
  }, [isDragging, monthRange, currentYear, viewType, fetchCostData]);

  // Add/remove event listeners
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

  // Year navigation
const handleYearChange = async (delta) => {
  if (apiLoading) return;

  const newYear = currentYear + delta;

  setCurrentYear(newYear);

  await fetchCostData(
    monthRange.from,
    monthRange.to,
    newYear,
    viewType
  );
};


  const startPosition = getPositionFromMonth(monthRange.from);
  const endPosition = getPositionFromMonth(monthRange.to);
  const activePreset = getActivePreset();

  return (
    <div className={`${compact ? "px-5 py-4" : "p-6"} relative`}>
      {/* Header Row: Year + Presets */}
      <div className="flex items-center justify-between mb-5">
        {/* Year Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleYearChange(1)}
            disabled={apiLoading || currentYear <= 2020}
            className={`p-2 rounded-lg transition-all ${
              apiLoading || currentYear <= 2020
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 active:scale-95"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-2 px-5 py-2.5 bg-blue-50 rounded-xl border-2 border-blue-300">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-extrabold text-gray-800">
              {currentYear}
            </span>
          </div>

          <button
            onClick={() => handleYearChange(1)}
            disabled={apiLoading || currentYear >= new Date().getFullYear()}
            className={`p-2 rounded-lg transition-all ${
              apiLoading || currentYear >= new Date().getFullYear()
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-gray-100 active:scale-95"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-2">
          {presets.map((preset) => (
            <button
              key={preset.value}
              onClick={() => handlePresetClick(preset)}
              disabled={apiLoading}
              className={`px-4 py-2.5 rounded-xl text-base font-bold transition-all ${
                activePreset === preset.value
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } ${apiLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative pt-2">
        {/* Month Labels */}
        <div className="flex justify-between mb-4 px-1">
          {monthNames.map((month, index) => {
            const monthNum = index + 1;
            const isInRange =
              monthNum >= monthRange.from && monthNum <= monthRange.to;
            const isEndpoint =
              monthNum === monthRange.from || monthNum === monthRange.to;

            return (
              <span
                key={month}
                className={`text-base font-bold transition-all cursor-pointer select-none px-1 ${
                  isEndpoint
                    ? "text-blue-600 scale-110"
                    : isInRange
                    ? "text-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => {
                  if (apiLoading) return;
                  // Smart click: closest handle moves to this month
                  const distToStart = Math.abs(monthNum - monthRange.from);
                  const distToEnd = Math.abs(monthNum - monthRange.to);

                  if (distToStart <= distToEnd && monthNum <= monthRange.to) {
                    updateRange(monthNum, monthRange.to);
                  } else if (monthNum >= monthRange.from) {
                    updateRange(monthRange.from, monthNum);
                  }
                }}
              >
                {month}
              </span>
            );
          })}
        </div>

        {/* Slider Track */}
        <div
          ref={sliderRef}
          className="relative h-5 bg-gray-200 rounded-full cursor-pointer overflow-visible"
          onClick={handleTrackClick}
        >
          {/* Selected Range Background - Solid Color */}
          <div
            className="absolute h-full bg-blue-400 rounded-full transition-all duration-150 shadow-md"
            style={{
              left: `${startPosition}%`,
              width: `${endPosition - startPosition}%`,
            }}
          />

          {/* Draggable Range Area */}
          <div
            className="absolute h-full cursor-grab active:cursor-grabbing"
            style={{
              left: `${startPosition}%`,
              width: `${endPosition - startPosition}%`,
            }}
            onMouseDown={(e) => handleDragStart(e, "range")}
            onTouchStart={(e) => handleDragStart(e, "range")}
          />

          {/* Start Handle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
              bg-white border-[3px] border-blue-500 rounded-full shadow-lg cursor-ew-resize
              hover:scale-125 hover:border-blue-600 transition-transform z-20
              ${
                isDragging === "start"
                  ? "scale-125 border-blue-600 shadow-xl"
                  : ""
              }`}
            style={{ left: `${startPosition}%` }}
            onMouseDown={(e) => handleDragStart(e, "start")}
            onTouchStart={(e) => handleDragStart(e, "start")}
          >
            <div className="absolute inset-1.5 bg-blue-500 rounded-full" />
          </div>

          {/* End Handle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 
              bg-white border-[3px] border-blue-500 rounded-full shadow-lg cursor-ew-resize
              hover:scale-125 hover:border-blue-600 transition-transform z-20
              ${
                isDragging === "end"
                  ? "scale-125 border-blue-600 shadow-xl"
                  : ""
              }`}
            style={{ left: `${endPosition}%` }}
            onMouseDown={(e) => handleDragStart(e, "end")}
            onTouchStart={(e) => handleDragStart(e, "end")}
          >
            <div className="absolute inset-1.5 bg-blue-500 rounded-full" />
          </div>

          {/* Month tick marks */}
          {monthNames.map((_, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-gray-300 rounded-full"
              style={{ left: `${(index / 11) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      {apiLoading && (
        <div className="absolute inset-0 bg-white/50 rounded-xl flex items-center justify-center">
          <div className="w-7 h-7 border-3 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default MonthRangeSlider;
