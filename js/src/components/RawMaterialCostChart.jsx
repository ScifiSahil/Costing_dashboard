import React, { useState } from "react";

const RawMaterialCostChart = ({ mode }) => {
  // 🔹 Machining Data (sirf required plants)
  const dataMachining = [
    {
      plant: "Khed",
      total: 20.1,
      categories: {
        RawMaterial: 7.2,
        Consumable: 3.0,
        Power: 2.5,
        Labour: 3.3,
        Fuel: 1.6,
        SubContract: 1.5,
        RepairMaintenance: 0.6,
        MachineHire: 0.3,
        Establishment: 0.5,
      },
    },
    {
      plant: "Chakan",
      total: 21.4,
      categories: {
        RawMaterial: 7.5,
        Consumable: 3.1,
        Power: 2.6,
        Labour: 3.5,
        Fuel: 1.7,
        SubContract: 1.7,
        RepairMaintenance: 0.7,
        MachineHire: 0.3,
        Establishment: 0.1,
      },
    },
    {
      plant: "Ambethan-1",
      total: 19.3,
      categories: {
        RawMaterial: 6.9,
        Consumable: 2.8,
        Power: 2.2,
        Labour: 3.0,
        Fuel: 1.5,
        SubContract: 1.6,
        RepairMaintenance: 0.6,
        MachineHire: 0.2,
        Establishment: 0.1,
      },
    },
    {
      plant: "Ambethan-2",
      total: 22.0,
      categories: {
        RawMaterial: 7.9,
        Consumable: 3.4,
        Power: 2.7,
        Labour: 3.6,
        Fuel: 1.8,
        SubContract: 1.8,
        RepairMaintenance: 0.7,
        MachineHire: 0.3,
        Establishment: 0.1,
      },
    },
  ];

  // 🔹 Forging Data
  const dataForging = [
    {
      plant: "R1",
      total: 10.5,
      sales: 15.2,
      production: 12.8,
      tonnage: 9.3,
      categories: {
        RawMaterial: 3.5,
        Consumable: 1.2,
        Power: 1.5,
        Labour: 2.0,
        Fuel: 1.0,
        SubContract: 0.8,
        RepairMaintenance: 0.3,
        MachineHire: 0.1,
        Establishment: 0.1,
      },
    },
    {
      plant: "R2",
      total: 14.2,
      sales: 15.2,
      production: 12.8,
      tonnage: 9.3,
      categories: {
        RawMaterial: 5.1,
        Consumable: 2.0,
        Power: 1.8,
        Labour: 2.5,
        Fuel: 1.2,
        SubContract: 1.0,
        RepairMaintenance: 0.4,
        MachineHire: 0.1,
        Establishment: 0.1,
      },
    },
    {
      plant: "Mundhva",
      total: 12.9,
      sales: 15.2,
      production: 12.8,
      tonnage: 9.3,
      categories: {
        RawMaterial: 4.2,
        Consumable: 1.7,
        Power: 1.6,
        Labour: 2.3,
        Fuel: 1.1,
        SubContract: 0.9,
        RepairMaintenance: 0.6,
        MachineHire: 0.3,
        Establishment: 0.2,
      },
    },
    {
      plant: "Baramati",
      total: 16.1,
      sales: 15.2,
      production: 12.8,
      tonnage: 9.3,
      categories: {
        RawMaterial: 5.6,
        Consumable: 2.2,
        Power: 2.0,
        Labour: 2.8,
        Fuel: 1.5,
        SubContract: 1.3,
        RepairMaintenance: 0.5,
        MachineHire: 0.1,
        Establishment: 0.1,
      },
    },
  ];
  const [forgingView, setForgingView] = useState("sales"); // default Sales

  // Dummy data: apne hisaab se update kar lena
  const salesData = [
    { plant: "Khed", value: 35 },
    { plant: "Pune", value: 25 },
    { plant: "Nashik", value: 40 },
  ];

  const productionData = [
    { plant: "Khed", value: 1200 },
    { plant: "Pune", value: 800 },
    { plant: "Nashik", value: 1500 },
  ];

  const tonnageData = [
    { plant: "Khed", value: 200 },
    { plant: "Pune", value: 350 },
    { plant: "Nashik", value: 180 },
  ];

  // Active dataset choose karne ka logic
  const activeData =
    forgingView === "sales"
      ? salesData
      : forgingView === "production"
      ? productionData
      : tonnageData;

  // 🔹 State for toggle (Machining/Forging)
  const rawData =
    mode === "Machining"
      ? dataMachining
      : dataForging.map((d) => ({
          ...d,
          total:
            forgingView === "sales"
              ? d.sales
              : forgingView === "production"
              ? d.production
              : d.tonnage,
        }));

  const [tooltip, setTooltip] = useState(null);

  // 🔹 Hover State (category-wise)
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Sort plants by total value (smallest → largest)
  const selectedData = [...rawData].sort((a, b) => a.total - b.total);

  // 🔹 Colors
  const colors = {
    RawMaterial: "#FF5757",
    Consumable: "#B794F6",
    Power: "#4299E1",
    Labour: "#F687B3",
    Fuel: "#F6AD55",
    SubContract: "#48BB78",
    RepairMaintenance: "#ED8936",
    MachineHire: "#38B2AC",
    Establishment: "#6B46C1",
  };

  const categoryLabels = {
    RawMaterial: "Raw Material",
    Consumable: "Consumable",
    Power: "Power",
    Labour: "Labour",
    Fuel: "Fuel",
    SubContract: "Sub Contract",
    RepairMaintenance: "Repair & Maintenance",
    MachineHire: "Machine Hire",
    Establishment: "Establishment",
  };

  const maxHeight = 300;
  const barWidth = 60;
  const chartWidth = 900;
  const chartHeight = 400;
  const yAxisWidth = 160;
  const chartStartX = yAxisWidth + 20;
  const barSpacing = 160;

  // 🔹 Stack biggest category at bottom
  const getBarData = (plantData) => {
    const segments = [];
    let currentHeight = 0;
    const gapSize = 5;

    const sortedCategories = Object.entries(plantData.categories)
      .sort((a, b) => b[1] - a[1])
      .map(([category]) => category);

    sortedCategories.forEach((category, index) => {
      const value = plantData.categories[category];
      if (value > 0) {
        // Percentage based height
        const segmentHeight = (value / plantData.total) * maxHeight;

        if (index > 0) currentHeight += gapSize;

        segments.push({
          category,
          value,
          y: maxHeight - currentHeight - segmentHeight,
          height: segmentHeight,
          color: colors[category],
          stackIndex: index,
        });
        currentHeight += segmentHeight;
      }
    });

    return segments;
  };

  const generateFlowPath = (startSegments, endSegments, startX, endX) => {
    const paths = [];
    const categoryMapping = {};
    startSegments.forEach((seg) => {
      categoryMapping[seg.category] = seg;
    });

    Object.keys(categoryMapping).forEach((category) => {
      const startSeg = startSegments.find((seg) => seg.category === category);
      const endSeg = endSegments.find((seg) => seg.category === category);

      if (startSeg && endSeg) {
        const startY1 = startSeg.y + 20;
        const startY2 = startSeg.y + startSeg.height + 20;
        const endY1 = endSeg.y + 20;
        const endY2 = endSeg.y + endSeg.height + 20;

        const controlX1 = startX + barWidth + (endX - startX - barWidth) * 0.3;
        const controlX2 = startX + barWidth + (endX - startX - barWidth) * 0.7;

        const pathD = `
          M ${startX + barWidth} ${startY1}
          C ${controlX1} ${startY1}, ${controlX2} ${endY1}, ${endX} ${endY1}
          L ${endX} ${endY2}
          C ${controlX2} ${endY2}, ${controlX1} ${startY2}, ${
          startX + barWidth
        } ${startY2}
          Z
        `;

        paths.push(
          <path
            key={`${category}-flow-${startX}-${endX}`}
            d={pathD}
            fill={startSeg.color}
            fillOpacity="0.2"
            stroke="none"
          />
        );
      }
    });

    return paths;
  };

  // 🔹 Create a global stack order based on average values
  const getGlobalStackOrder = () => {
    const categoryAverages = {};
    Object.keys(selectedData[0].categories).forEach((category) => {
      const total = selectedData.reduce(
        (sum, plant) => sum + plant.categories[category],
        0
      );
      categoryAverages[category] = total / selectedData.length;
    });

    return Object.entries(categoryAverages)
      .sort((a, b) => a[1] - b[1])
      .map(([category]) => category);
  };

  const globalStackOrder = getGlobalStackOrder();

  // 🔹 Category Totals (sum across all plants)
  const categoryTotals = {};
  Object.keys(selectedData[0].categories).forEach((category) => {
    categoryTotals[category] = selectedData.reduce(
      (sum, plant) => sum + plant.categories[category],
      0
    );
  });

  const createYAxisLabels = () => {
    const labelGap = 28;
    const startY = 40;

    return globalStackOrder.map((category, index) => {
      const y = startY + index * labelGap;
      return (
        <g
          key={`y-label-${category}`}
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
          opacity={hoveredCategory && hoveredCategory !== category ? 0.3 : 1}
        >
          <rect
            x={15}
            y={y - 8}
            width={12}
            height={12}
            fill={colors[category]}
            rx="6"
            ry="6"
          />
          <text
            x={32}
            y={y + 3}
            className={`text-xs font-medium ${
              hoveredCategory === category ? "fill-blue-600" : "fill-gray-700"
            }`}
            textAnchor="start"
          >
            {categoryLabels[category]}
          </text>
        </g>
      );
    });
  };

  // 🔹 Right Y-axis labels with totals
  const createRightYAxisLabels = () => {
    const labelGap = 28;
    const startY = 40;

    return globalStackOrder.map((category, index) => {
      const y = startY + index * labelGap;
      return (
        <g key={`y-label-right-${category}`}>
          <text
            x={chartStartX + chartWidth - yAxisWidth + 10}
            y={y + 3}
            className="text-xs font-medium fill-gray-700"
            textAnchor="start"
          >
            {categoryLabels[category]} : {categoryTotals[category].toFixed(1)}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="p-3 bg-gray-50 min-h-screen flex">
      <div className="max-w-6xl mx-auto w-full flex flex-col">
        {mode === "Forging" && (
          <div className="flex gap-3 mb-4">
            {["sales", "production", "tonnage"].map((view) => (
              <button
                key={view}
                onClick={() => setForgingView(view)}
                className={`px-4 py-1 rounded-lg text-sm font-medium border 
      ${
        forgingView === view
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700"
      }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)} Value
              </button>
            ))}
          </div>
        )}

        {/* 🔹 Chart Centered */}
        <div className="flex flex-1 items-center justify-center">
          <svg
            width={chartWidth + yAxisWidth}
            height={chartHeight}
            className="overflow-visible"
          >
            {/* Background */}
            <rect
              x={chartStartX}
              y={20}
              width={chartWidth - yAxisWidth}
              height={maxHeight}
              fill="#F9FAFB"
              rx="6"
              ry="6"
            />

            {/* Y-axis labels */}
            {createYAxisLabels()}
            {/* Right Y-axis labels with totals */}
            {/* {createRightYAxisLabels()} */}

            {/* Flow waves */}
            {generateFlowPath(
              getBarData(selectedData[0]),
              getBarData(selectedData[1]),
              chartStartX,
              chartStartX + barSpacing
            )}
            {generateFlowPath(
              getBarData(selectedData[1]),
              getBarData(selectedData[2]),
              chartStartX + barSpacing,
              chartStartX + barSpacing * 2
            )}
            {generateFlowPath(
              getBarData(selectedData[2]),
              getBarData(selectedData[3]),
              chartStartX + barSpacing * 2,
              chartStartX + barSpacing * 3
            )}

            {/* Bars */}
            {selectedData.map((plantData, index) => {
              const x = chartStartX + index * barSpacing;

              // 🔹 Segment heights updated according to percentage of total
              let cumulativeHeight = 0;
              const segments = Object.entries(plantData.categories)
                .sort((a, b) => b[1] - a[1]) // badi value neeche
                .map(([category, value], idx) => {
                  const height = (value / plantData.total) * maxHeight;
                  const y = maxHeight - cumulativeHeight - height;
                  cumulativeHeight += height + 5; // 5px gap between stacks
                  return {
                    category,
                    value,
                    height,
                    y,
                    color: colors[category],
                  };
                });

              return (
                <g key={plantData.plant}>
                  {segments.map((segment) => (
                    <g key={`${plantData.plant}-${segment.category}`}>
                      <defs>
                        <linearGradient
                          id={`gradient-${plantData.plant}-${segment.category}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor={segment.color}
                            stopOpacity="1"
                          />
                          <stop
                            offset="50%"
                            stopColor={segment.color}
                            stopOpacity="1"
                          />
                          <stop
                            offset="100%"
                            stopColor={segment.color}
                            stopOpacity="1"
                          />
                        </linearGradient>
                      </defs>

                      <rect
                        x={x}
                        y={segment.y + 20}
                        width={barWidth}
                        height={segment.height}
                        fill={`url(#gradient-${plantData.plant}-${segment.category})`}
                        rx="6"
                        ry="6"
                        onMouseEnter={() =>
                          setHoveredCategory(segment.category)
                        }
                        onMouseMove={(e) =>
                          setTooltip({
                            x: e.clientX,
                            y: e.clientY,
                            plant: plantData.plant,
                            category: segment.category,
                            value: segment.value,
                            Sale: (
                              (segment.value / plantData.total) *
                              100
                            ).toFixed(1),
                          })
                        }
                        onMouseLeave={() => setHoveredCategory(null)}
                        opacity={
                          hoveredCategory &&
                          hoveredCategory !== segment.category
                            ? 0.3
                            : 1
                        }
                      />

                      {hoveredCategory === segment.category &&
                        tooltip &&
                        tooltip.plant === plantData.plant && (
                          <foreignObject
                            x={x + barWidth + 8} // bar ke side me
                            y={segment.y - 50} // bar ke upar shift
                            width={150}
                            height={50}
                            style={{ pointerEvents: "none", zIndex: 999 }}
                          >
                            <div className="bg-white shadow-md rounded px-2 py-1 text-xs text-gray-700 border">
                              <div className="font-medium">
                                {plantData.plant}
                              </div>
                              <div>
                                {categoryLabels[segment.category]}: ₹
                                {segment.value.toFixed(2)} Cr
                              </div>
                              <div>
                                Sales:{" "}
                                {(
                                  (segment.value / plantData.total) *
                                  100
                                ).toFixed(1)}
                                %
                              </div>
                            </div>
                          </foreignObject>
                        )}
                    </g>
                  ))}

                  {/* Plant labels */}
                  <text
                    x={x + barWidth / 2}
                    y={maxHeight + 45}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-700"
                  >
                    {plantData.plant}
                  </text>
                  <text
                    x={x + barWidth / 2}
                    y={maxHeight + 62}
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    ₹{plantData.total.toFixed(2)}Cr
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
      {/* Right Side → Insights */}
      <div className="w-96 ml-6 bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            💡
          </div>
          <h3 className="text-xl font-bold text-gray-800">Key Insights</h3>
        </div>

        {/* Machining View */}
        {mode === "Machining" && (
          <div className="space-y-4 mb-6">
            {/* Highest Cost */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-700">
                    Highest Cost Plant
                  </p>
                  <p className="text-xl font-bold text-red-800">
                    {selectedData[selectedData.length - 1].plant}
                  </p>
                  <p className="text-lg font-semibold text-red-600">
                    ₹{selectedData[selectedData.length - 1].total.toFixed(2)} Cr
                  </p>
                </div>
              </div>
            </div>

            {/* Lowest Cost */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-700">
                    Lowest Cost Plant
                  </p>
                  <p className="text-xl font-bold text-green-800">
                    {selectedData[0].plant}
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    ₹{selectedData[0].total.toFixed(2)} Cr
                  </p>
                </div>
              </div>
            </div>

            {/* Major Cost Contributors */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2">
                📊 Major Cost Contributors
              </h4>
              <div className="space-y-3">
                {Object.entries(categoryTotals)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 3)
                  .map(([cat, val], index) => {
                    const percentage = (
                      (val /
                        Object.values(categoryTotals).reduce(
                          (a, b) => a + b,
                          0
                        )) *
                      100
                    ).toFixed(1);
                    return (
                      <div key={cat} className="relative">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">
                            #{index + 1} {categoryLabels[cat]}
                          </span>
                          <span className="text-sm font-bold text-purple-600">
                            {percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="h-2.5 rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${percentage}%`,
                              background: `linear-gradient(90deg, ${colors[cat]}, ${colors[cat]}CC)`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ₹{val.toFixed(2)} Cr total
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* Forging Views */}
        {mode === "Forging" && forgingView === "sales" && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-amber-700">
                Top Sales Plant
              </p>
              <p className="text-xl font-bold text-amber-800">
                {
                  dataForging.reduce((a, b) => (a.sales > b.sales ? a : b))
                    .plant
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-blue-700">Total Sales</p>
              <p className="text-xl font-bold text-blue-800">
                ₹{dataForging.reduce((sum, p) => sum + p.sales, 0).toFixed(1)}{" "}
                Cr
              </p>
            </div>
          </div>
        )}

        {mode === "Forging" && forgingView === "production" && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-orange-700">
                Highest Production Plant
              </p>
              <p className="text-xl font-bold text-orange-800">
                {
                  dataForging.reduce((a, b) =>
                    a.production > b.production ? a : b
                  ).plant
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-green-700">
                Average Production
              </p>
              <p className="text-xl font-bold text-green-800">
                {(
                  dataForging.reduce((s, p) => s + p.production, 0) /
                  dataForging.length
                ).toFixed(1)}
              </p>
            </div>
          </div>
        )}

        {mode === "Forging" && forgingView === "tonnage" && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-pink-700">
                Highest Tonnage Plant
              </p>
              <p className="text-xl font-bold text-pink-800">
                {
                  dataForging.reduce((a, b) => (a.tonnage > b.tonnage ? a : b))
                    .plant
                }
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <p className="text-sm font-medium text-indigo-700">
                Total Tonnage
              </p>
              <p className="text-xl font-bold text-indigo-800">
                {dataForging.reduce((s, p) => s + p.tonnage, 0).toFixed(1)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RawMaterialCostChart
