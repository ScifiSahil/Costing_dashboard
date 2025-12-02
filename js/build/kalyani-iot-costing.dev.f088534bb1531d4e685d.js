(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cs-web-components-base"), require("Immutable"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["cs-web-components-base", "Immutable", "React"], factory);
	else if(typeof exports === 'object')
		exports["kalyani-iot-costing"] = factory(require("cs-web-components-base"), require("Immutable"), require("React"));
	else
		root["kalyani-iot-costing"] = factory(root["cs-web-components-base"], root["Immutable"], root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_cs_web_components_base__, __WEBPACK_EXTERNAL_MODULE_immutable__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_FETCH_FAILURE": () => (/* binding */ DATA_FETCH_FAILURE),
/* harmony export */   "DATA_FETCH_SUCCESS": () => (/* binding */ DATA_FETCH_SUCCESS),
/* harmony export */   "asyncActionCreator": () => (/* binding */ asyncActionCreator),
/* harmony export */   "thunkActionCreator": () => (/* binding */ thunkActionCreator)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__);


var DATA_FETCH_SUCCESS = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.prefixNS)('DATA_FETCH_SUCCESS');
var DATA_FETCH_FAILURE = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.prefixNS)('DATA_FETCH_FAILURE');

/*
 Action Creator
  */
function onDataReceived(payload) {
  return {
    type: DATA_FETCH_SUCCESS,
    payload: payload
  };
}

/*
 Action Creator
  */
function onDataFailed(err) {
  return {
    type: DATA_FETCH_FAILURE,
    payload: err,
    error: true
  };
}

/*
 Thunk Action Creator
  */
function thunkActionCreator() {
  return function (dispatch /*, getState */) {
    cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__.Console.log("Dispatching ", DATA_FETCH_SUCCESS);
    dispatch(onDataReceived("foo"));
  };
}

/*
 Async Thunk Action Creator

 Use an AJAX call to fetch data from server
  */
function asyncActionCreator() {
  return function (dispatch /*, getState */) {
    (0,cs_web_components_base__WEBPACK_IMPORTED_MODULE_1__.getJSON)("/api/v1/i18n/labels/en").then(function (info) {
      dispatch(onDataReceived(info));
    }, function (err) {
      dispatch(onDataFailed(err));
    });
  };
}

/***/ }),

/***/ "./src/components/AllPlants.jsx":
/*!**************************************!*\
  !*** ./src/components/AllPlants.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RawMaterialCostChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawMaterialCostChart */ "./src/components/RawMaterialCostChart.jsx");
/* harmony import */ var _costscreener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./costscreener */ "./src/components/costscreener.jsx");



var AllPlants = function AllPlants(_ref) {
  var showDetailsPage = _ref.showDetailsPage,
    chartMode = _ref.chartMode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "flex-1"
  }, showDetailsPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_costscreener__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RawMaterialCostChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mode: chartMode
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllPlants);

/***/ }),

/***/ "./src/components/Dashboard.jsx":
/*!**************************************!*\
  !*** ./src/components/Dashboard.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AllPlants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllPlants */ "./src/components/AllPlants.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Dashboard = function Dashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All Plant"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedPlant = _useState2[0],
    setSelectedPlant = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showChatBot = _useState4[0],
    setShowChatBot = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Machining"),
    _useState6 = _slicedToArray(_useState5, 2),
    chartMode = _useState6[0],
    setChartMode = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDetailsPage = _useState8[0],
    setShowDetailsPage = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedCategory = _useState10[0],
    setSelectedCategory = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      type: "bot",
      message: "Hello! I can help you analyze plant costs and production data. What would you like to know?"
    }]),
    _useState12 = _slicedToArray(_useState11, 2),
    chatMessages = _useState12[0],
    setChatMessages = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    currentMessage = _useState14[0],
    setCurrentMessage = _useState14[1];
  // Add this with your other useState declarations at the top of Dashboard component
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Ranjangaon"),
    _useState16 = _slicedToArray(_useState15, 2),
    selectedLocation = _useState16[0],
    setSelectedLocation = _useState16[1];
  var kpiData = [{
    name: "Raw Material Cost",
    actual: 15000,
    target: 15000,
    predictive: 15000
  }, {
    name: "Consumables",
    actual: 2950,
    target: 3000,
    predictive: 2500
  }, {
    name: "Power",
    actual: 4800,
    target: 4200,
    predictive: 4900
  }, {
    name: "Labour",
    actual: 3150,
    target: 3000,
    predictive: 3250
  }, {
    name: "Fuel",
    actual: 1850,
    target: 2000,
    predictive: 1800
  }, {
    name: "Sub Contract",
    actual: 2100,
    target: 2200,
    predictive: 2050
  }, {
    name: "Repair & Maintenance",
    actual: 1650,
    target: 1500,
    predictive: 1700
  }, {
    name: "Machine Hire Charges",
    actual: 950,
    target: 1000,
    predictive: 900
  }, {
    name: "Establishment Expenses",
    actual: 1250,
    target: 1300,
    predictive: 1200
  }, {
    name: "Packing",
    actual: 850,
    target: 900,
    predictive: 800
  }, {
    name: "Freight",
    actual: 2450,
    target: 2500,
    predictive: 2400
  }];
  var totalCost = kpiData.reduce(function (sum, kpi) {
    return sum + kpi.actual;
  }, 0);
  var totalTarget = kpiData.reduce(function (sum, kpi) {
    return sum + kpi.target;
  }, 0);
  var totalPredictive = kpiData.reduce(function (sum, kpi) {
    return sum + kpi.predictive;
  }, 0);
  var overallEfficiency = (totalTarget / totalCost * 100).toFixed(1);

  // Complete plant configurations based on your reference data
  var plants = {
    "All Plant": {
      category: "Overview",
      unit: "per tonn",
      status: "active",
      efficiency: 87.3,
      growth: 3.5,
      // Add growth property
      data: {
        tonnage: [4374, 4399, 4824, 5037],
        months: ["Apr-25", "May-25", "Jun-25", "Jul-25"],
        costs: {
          consumables: [3633, 3875, 3230, 3470],
          power: [7374, 7183, 7116, 7477],
          fuel: [3136, 3345, 3025, 3237],
          labour: [2271, 2619, 2013, 2150],
          subContract: [8207, 7885, 7017, 7560],
          machineHire: [632, 510, 858, 609],
          repairMaint: [1436, 3871, 3337, 3151],
          employeeCost: [5788, 5756, 5248, 5026],
          establishment: [1177, 1287, 1281, 1188],
          total: [33655, 36330, 33125, 33868],
          packing: [500, 550, 600, 580],
          freight: [800, 850, 900, 870],
          rawMaterial: [10000, 10500, 9800, 10200]
        }
      }
    },
    "R'Gon": {
      category: "Forging",
      lines: 16,
      unit: "per tonn",
      status: "active",
      efficiency: 87.3,
      growth: 5.2,
      data: generatePlantData("forging")
    },
    Mundhwa: {
      category: "Forging",
      lines: 6,
      unit: "per tonn",
      status: "active",
      efficiency: 91.2,
      growth: -2.1,
      data: generatePlantData("forging")
    },
    "Ranjangaon-2": {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 82.5,
      growth: 0,
      data: generatePlantData("forging")
    },
    Baramati: {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 89.7,
      growth: 3.8,
      data: generatePlantData("machining")
    },
    Khed: {
      category: "Machining",
      lines: 6,
      unit: "per pc",
      status: "maintenance",
      efficiency: 75.3,
      growth: -5.5,
      data: generatePlantData("other")
    },
    Chakan: {
      category: "Machining",
      lines: 12,
      unit: "per pc",
      status: "active",
      efficiency: 93.1,
      growth: 7.2,
      data: generatePlantData("forging")
    },
    "Ambethan-1": {
      category: "Machining",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 88.4,
      growth: 1.5,
      data: generatePlantData("other")
    },
    "Ambethan-2": {
      category: "Machining",
      lines: 12,
      unit: "per pc",
      status: "active",
      efficiency: 90.6,
      growth: 4.3,
      data: generatePlantData("other")
    },
    Bhiwadi: {
      category: "Other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 85.9,
      growth: -1.2,
      data: generatePlantData("forging")
    },
    Gujarat: {
      category: "other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 87.2,
      growth: 2.7,
      data: generatePlantData("machining")
    },
    "Heat Treatment": {
      category: "Forging",
      lines: 5,
      unit: "per tonn",
      status: "active",
      efficiency: 92.1,
      growth: 6.1,
      data: generatePlantData("heat_treatment")
    },
    Jejuri: {
      category: "Other",
      lines: 5,
      unit: "per pc",
      status: "active",
      efficiency: 89.3,
      growth: -3.4,
      data: generatePlantData("other")
    }
  };

  // Helper function to generate sample data for plants based on category
  function generatePlantData(category) {
    var months = ["Apr-25", "May-25", "Jun-25", "Jul-25"];
    var baseMultiplier = category === "forging" ? 1.2 : category === "machining" ? 1.1 : 0.9;
    return {
      tonnage: months.map(function () {
        return Math.floor((Math.random() * 2000 + 1500) * baseMultiplier);
      }),
      months: months,
      costs: {
        consumables: months.map(function () {
          return Math.floor((Math.random() * 1500 + 2000) * baseMultiplier);
        }),
        power: months.map(function () {
          return Math.floor((Math.random() * 2000 + 5000) * baseMultiplier);
        }),
        fuel: months.map(function () {
          return Math.floor((Math.random() * 1000 + 2000) * baseMultiplier);
        }),
        labour: months.map(function () {
          return Math.floor((Math.random() * 1000 + 1500) * baseMultiplier);
        }),
        subContract: months.map(function () {
          return Math.floor((Math.random() * 3000 + 7000) * baseMultiplier);
        }),
        machineHire: months.map(function () {
          return Math.floor((Math.random() * 300 + 500) * baseMultiplier);
        }),
        repairMaint: months.map(function () {
          return Math.floor((Math.random() * 1500 + 1500) * baseMultiplier);
        }),
        employeeCost: months.map(function () {
          return Math.floor((Math.random() * 1500 + 4000) * baseMultiplier);
        }),
        establishment: months.map(function () {
          return Math.floor((Math.random() * 300 + 1000) * baseMultiplier);
        }),
        total: months.map(function () {
          return Math.floor((Math.random() * 8000 + 25000) * baseMultiplier);
        })
      }
    };
  }

  // Chat functionality
  var handleSendMessage = function handleSendMessage() {
    if (!currentMessage.trim()) return;
    var newUserMessage = {
      type: "user",
      message: currentMessage
    };
    var botResponse = generateBotResponse(currentMessage);
    setChatMessages(function (prev) {
      return [].concat(_toConsumableArray(prev), [newUserMessage, {
        type: "bot",
        message: botResponse
      }]);
    });
    setCurrentMessage("");
  };
  var generateBotResponse = function generateBotResponse(message) {
    var lowerMessage = message.toLowerCase();
    var allPlantData = plants["All Plant"];
    var totalProduction = allPlantData.data.tonnage.reduce(function (a, b) {
      return a + b;
    }, 0);
    var totalCost = allPlantData.data.costs.total.reduce(function (a, b) {
      return a + b;
    }, 0);
    var avgCost = Math.round(totalCost / 4);
    var avgProduction = Math.round(totalProduction / 4);
    if (lowerMessage.includes("cost")) {
      return "All plants have a combined average monthly cost of \u20B9".concat((avgCost / 1000).toFixed(1), "K. The total cost across all plants for the 4-month period is \u20B9").concat((totalCost / 100000).toFixed(1), "L.");
    } else if (lowerMessage.includes("efficiency")) {
      var avgEfficiency = Object.values(plants).filter(function (p) {
        return p.efficiency;
      }).reduce(function (sum, p) {
        return sum + p.efficiency;
      }, 0) / Object.keys(plants).length;
      return "The average efficiency across all plants is ".concat(avgEfficiency.toFixed(1), "%. This includes ").concat(Object.keys(plants).length, " production units across Forging, Machining, and Other categories.");
    } else if (lowerMessage.includes("production")) {
      return "All plants combined produced ".concat(totalProduction, " tonnes over the 4-month period. The monthly average is ").concat(avgProduction, " tonnes across all facilities.");
    } else if (lowerMessage.includes("plant") && lowerMessage.includes("count")) {
      var forgingCount = Object.values(plants).filter(function (p) {
        return p.category === "Forging";
      }).length;
      var machiningCount = Object.values(plants).filter(function (p) {
        return p.category === "Machining";
      }).length;
      var otherCount = Object.values(plants).filter(function (p) {
        return p.category === "Other" || p.category === "other";
      }).length;
      return "We have ".concat(Object.keys(plants).length, " plants total: ").concat(forgingCount, " in Forging, ").concat(machiningCount, " in Machining, and ").concat(otherCount, " in Other categories.");
    } else if (lowerMessage.includes("trend")) {
      var trend = allPlantData.data.costs.total[3] > allPlantData.data.costs.total[0] ? "increasing" : "decreasing";
      var change = ((allPlantData.data.costs.total[3] - allPlantData.data.costs.total[0]) / allPlantData.data.costs.total[0] * 100).toFixed(1);
      return "Cost trends are ".concat(trend, " by ").concat(Math.abs(change), "% over the 4-month period. Production shows ").concat(allPlantData.data.tonnage[3] > allPlantData.data.tonnage[0] ? "growth" : "decline", " from ").concat(allPlantData.data.tonnage[0], " to ").concat(allPlantData.data.tonnage[3], " tonnes.");
    } else {
      return "I can analyze costs, efficiency, production, and trends across all plants. Try asking about \"total costs\", \"plant efficiency\", \"production trends\", or \"plant count by category\".";
    }
  };

  // Group plants by category
  var forgingPlants = Object.entries(plants).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      _ = _ref2[0],
      p = _ref2[1];
    return p.category === "Forging";
  });
  var machiningPlants = Object.entries(plants).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      _ = _ref4[0],
      p = _ref4[1];
    return p.category === "Machining";
  });
  var otherPlants = Object.entries(plants).filter(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      _ = _ref6[0],
      p = _ref6[1];
    return p.category === "Other" || p.category === "other";
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gray-50 flex flex-col h-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white border-b border-gray-300 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-lg font-bold"
  }, "Kalyani Technoforge Ltd.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-white/20 px-2 py-1 rounded"
  }, Object.keys(plants).length, " Units"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-white/20 px-2 py-1 rounded"
  }, "87.3% Avg Efficiency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "bg-white/20 px-2 py-1 rounded"
  }, "Active Status")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowDetailsPage(!showDetailsPage);
    },
    className: "px-3 py-1 text-xs font-medium rounded-md bg-white text-gray-700 border border-gray-200 hover:bg-green-100 hover:text-green-700 transition"
  }, showDetailsPage ? "Show Comparison" : "Details"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 overflow-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AllPlants__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showDetailsPage: showDetailsPage,
    chartMode: chartMode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowChatBot(true);
    },
    className: "fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-110 z-40",
    title: "ProfitPulse \u2014 Plant Costing Assistant"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-medium"
  }, "ProfitPulse")), showChatBot && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 rounded-t-xl flex justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "font-bold"
  }, "Plant Analytics Assistant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs opacity-90"
  }, "AI-powered manufacturing insights")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowChatBot(false);
    },
    className: "text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
  }, chatMessages.map(function (msg, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "flex ".concat(msg.type === "user" ? "justify-end" : "justify-start")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "max-w-[85%] p-3 rounded-lg text-sm ".concat(msg.type === "user" ? "bg-blue-600 text-white rounded-br-none shadow-md" : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none")
    }, msg.message));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 bg-white border-t border-gray-200 rounded-b-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: currentMessage,
    onChange: function onChange(e) {
      return setCurrentMessage(e.target.value);
    },
    onKeyPress: function onKeyPress(e) {
      return e.key === "Enter" && handleSendMessage();
    },
    placeholder: "Ask about costs, efficiency, production...",
    className: "flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSendMessage,
    className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-3 flex flex-wrap gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setCurrentMessage("Show total cost analysis");
    },
    className: "text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-200"
  }, "Cost Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setCurrentMessage("What's the average plant efficiency?");
    },
    className: "text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-full transition-colors border border-green-200"
  }, "Efficiency Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setCurrentMessage("Show production trends");
    },
    className: "text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full transition-colors border border-orange-200"
  }, "Production Trends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setCurrentMessage("How many plants per category?");
    },
    className: "text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full transition-colors border border-purple-200"
  }, "Plant Count"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

// import React, { useState } from "react";
// import AllPlants from "./AllPlants";

// const Dashboard = () => {
//   const [selectedPlant, setSelectedPlant] = useState("All Plant");
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [showChatBot, setShowChatBot] = useState(false);
//   const [chatMessages, setChatMessages] = useState([
//     {
//       type: "bot",
//       message:
//         "Hello! I can help you analyze plant costs and production data. What would you like to know?",
//     },
//   ]);
//   const [currentMessage, setCurrentMessage] = useState("");

//   // Complete plant configurations based on your reference data
//   const plants = {
//     "All Plant": {
//       category: "Forging",
//       unit: "per tonn",
//       status: "active",
//       efficiency: 87.3,
//       data: {
//         tonnage: [4374, 4399, 4824, 5037],
//         months: ["Apr-25", "May-25", "Jun-25", "Jul-25"],
//         costs: {
//           consumables: [3633, 3875, 3230, 3470],
//           power: [7374, 7183, 7116, 7477],
//           fuel: [3136, 3345, 3025, 3237],
//           labour: [2271, 2619, 2013, 2150],
//           subContract: [8207, 7885, 7017, 7560],
//           machineHire: [632, 510, 858, 609],
//           repairMaint: [1436, 3871, 3337, 3151],
//           employeeCost: [5788, 5756, 5248, 5026],
//           establishment: [1177, 1287, 1281, 1188],
//           total: [33655, 36330, 33125, 33868],
//           packing: [500, 550, 600, 580],
//           freight: [800, 850, 900, 870],
//           rawMaterial: [10000, 10500, 9800, 10200],
//         },
//       },
//     },
//     "R'Gon": {
//       category: "Forging",
//       lines: 16,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 87.3,
//       data: generatePlantData("forging"),
//     },
//     Mundhwa: {
//       category: "Forging",
//       lines: 6,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 91.2,
//       data: generatePlantData("forging"),
//     },
//     "Ranjangaon-2": {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 82.5,
//       data: generatePlantData("forging"),
//     },
//     Baramati: {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 89.7,
//       data: generatePlantData("machining"),
//     },
//     Khed: {
//       category: "Machining",
//       lines: 6,
//       unit: "per pc",
//       status: "maintenance",
//       efficiency: 75.3,
//       data: generatePlantData("other"),
//     },
//     Chakan: {
//       category: "Machining",
//       lines: 12,
//       unit: "per pc",
//       status: "active",
//       efficiency: 93.1,
//       data: generatePlantData("forging"),
//     },
//     "Ambethan-1": {
//       category: "Machining",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 88.4,
//       data: generatePlantData("other"),
//     },
//     "Ambethan-2": {
//       category: "Machining",
//       lines: 12,
//       unit: "per pc",
//       status: "active",
//       efficiency: 90.6,
//       data: generatePlantData("other"),
//     },
//     Bhiwadi: {
//       category: "Other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 85.9,
//       data: generatePlantData("forging"),
//     },
//     Gujarat: {
//       category: "other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 87.2,
//       data: generatePlantData("machining"),
//     },
//     "Heat Treatment": {
//       category: "Forging",
//       lines: 5,
//       unit: "per tonn",
//       status: "active",
//       efficiency: 92.1,
//       data: generatePlantData("heat_treatment"),
//     },
//     Jejuri: {
//       category: "Other",
//       lines: 5,
//       unit: "per pc",
//       status: "active",
//       efficiency: 89.3,
//       data: generatePlantData("other"),
//     },
//   };

//   // Helper function to generate sample data for plants based on category
//   function generatePlantData(category) {
//     const months = ["Apr-25", "May-25", "Jun-25", "Jul-25"];
//     const baseMultiplier =
//       category === "forging" ? 1.2 : category === "machining" ? 1.1 : 0.9;

//     return {
//       tonnage: months.map(() =>
//         Math.floor((Math.random() * 2000 + 1500) * baseMultiplier)
//       ),
//       months: months,
//       costs: {
//         consumables: months.map(() =>
//           Math.floor((Math.random() * 1500 + 2000) * baseMultiplier)
//         ),
//         power: months.map(() =>
//           Math.floor((Math.random() * 2000 + 5000) * baseMultiplier)
//         ),
//         fuel: months.map(() =>
//           Math.floor((Math.random() * 1000 + 2000) * baseMultiplier)
//         ),
//         labour: months.map(() =>
//           Math.floor((Math.random() * 1000 + 1500) * baseMultiplier)
//         ),
//         subContract: months.map(() =>
//           Math.floor((Math.random() * 3000 + 7000) * baseMultiplier)
//         ),
//         machineHire: months.map(() =>
//           Math.floor((Math.random() * 300 + 500) * baseMultiplier)
//         ),
//         repairMaint: months.map(() =>
//           Math.floor((Math.random() * 1500 + 1500) * baseMultiplier)
//         ),
//         employeeCost: months.map(() =>
//           Math.floor((Math.random() * 1500 + 4000) * baseMultiplier)
//         ),
//         establishment: months.map(() =>
//           Math.floor((Math.random() * 300 + 1000) * baseMultiplier)
//         ),
//         total: months.map(() =>
//           Math.floor((Math.random() * 8000 + 25000) * baseMultiplier)
//         ),
//       },
//     };
//   }

//   // Chat functionality
//   const handleSendMessage = () => {
//     if (!currentMessage.trim()) return;

//     const newUserMessage = { type: "user", message: currentMessage };
//     const botResponse = generateBotResponse(currentMessage);

//     setChatMessages((prev) => [
//       ...prev,
//       newUserMessage,
//       { type: "bot", message: botResponse },
//     ]);
//     setCurrentMessage("");
//   };

//   const generateBotResponse = (message) => {
//     const lowerMessage = message.toLowerCase();
//     const allPlantData = plants["All Plant"];
//     const totalProduction = allPlantData.data.tonnage.reduce((a, b) => a + b, 0);
//     const totalCost = allPlantData.data.costs.total.reduce((a, b) => a + b, 0);
//     const avgCost = Math.round(totalCost / 4);
//     const avgProduction = Math.round(totalProduction / 4);

//     if (lowerMessage.includes("cost")) {
//       return `All plants have a combined average monthly cost of ₹${(avgCost / 1000).toFixed(1)}K. The total cost across all plants for the 4-month period is ₹${(totalCost / 100000).toFixed(1)}L.`;
//     } else if (lowerMessage.includes("efficiency")) {
//       const avgEfficiency = Object.values(plants)
//         .filter((p) => p.efficiency)
//         .reduce((sum, p) => sum + p.efficiency, 0) / Object.keys(plants).length;
//       return `The average efficiency across all plants is ${avgEfficiency.toFixed(1)}%. This includes ${Object.keys(plants).length} production units across Forging, Machining, and Other categories.`;
//     } else if (lowerMessage.includes("production")) {
//       return `All plants combined produced ${totalProduction} tonnes over the 4-month period. The monthly average is ${avgProduction} tonnes across all facilities.`;
//     } else if (lowerMessage.includes("plant") && lowerMessage.includes("count")) {
//       const forgingCount = Object.values(plants).filter(p => p.category === "Forging").length;
//       const machiningCount = Object.values(plants).filter(p => p.category === "Machining").length;
//       const otherCount = Object.values(plants).filter(p => p.category === "Other" || p.category === "other").length;
//       return `We have ${Object.keys(plants).length} plants total: ${forgingCount} in Forging, ${machiningCount} in Machining, and ${otherCount} in Other categories.`;
//     } else if (lowerMessage.includes("trend")) {
//       const trend = allPlantData.data.costs.total[3] > allPlantData.data.costs.total[0] ? "increasing" : "decreasing";
//       const change = ((allPlantData.data.costs.total[3] - allPlantData.data.costs.total[0]) / allPlantData.data.costs.total[0] * 100).toFixed(1);
//       return `Cost trends are ${trend} by ${Math.abs(change)}% over the 4-month period. Production shows ${allPlantData.data.tonnage[3] > allPlantData.data.tonnage[0] ? "growth" : "decline"} from ${allPlantData.data.tonnage[0]} to ${allPlantData.data.tonnage[3]} tonnes.`;
//     } else {
//       return `I can analyze costs, efficiency, production, and trends across all plants. Try asking about "total costs", "plant efficiency", "production trends", or "plant count by category".`;
//     }
//   };

//   return (
//     <div className="bg-gray-50 flex">
//       {/* Enhanced Sidebar */}
//       <div
//         className={`${
//           isSidebarCollapsed ? "w-16" : "w-64"
//         } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
//       >
//         {/* Sidebar Header */}
//         <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-between px-4">
//           {!isSidebarCollapsed && (
//             <div>
//               <h2 className="text font-bold">Kalyani Technoforge Ltd.</h2>
//               <p className="text-xs opacity-90">
//                 {Object.keys(plants).length} Production Units
//               </p>
//             </div>
//           )}
//           <button
//             onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
//             className="text-white/80 hover:text-white transition-colors"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isSidebarCollapsed ? "M13 5l7 7-7 7" : "M11 19l-7-7 7-7"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Plant List with Categories */}
//         <div className="flex-1 py-3 overflow-y-auto">
//           {/* All Plant Button - Always at top */}
//           <div className="mb-4">
//             <button
//               onClick={() => setSelectedPlant("All Plant")}
//               className={`w-full flex items-center px-4 py-3 transition-all relative
//                 border-l-4 group
//                 ${
//                   selectedPlant === "All Plant"
//                     ? "bg-blue-50 border-blue-500 text-blue-600 shadow-sm"
//                     : "border-transparent text-gray-700 hover:bg-gray-50"
//                 }`}
//               title="All Plants Overview"
//             >
//               {/* Status Dot */}
//               <div className="w-2.5 h-2.5 rounded-full mr-3 bg-green-400 animate-pulse"></div>

//               {/* Plant Info */}
//               {!isSidebarCollapsed && (
//                 <div className="flex-1 text-left">
//                   <div className="text-sm font-medium group-hover:text-blue-600 transition-colors">
//                     All Plant
//                   </div>
//                   <div className="text-xs text-gray-500 mt-0.5">
//                     Overview Dashboard
//                   </div>
//                 </div>
//               )}
//             </button>
//           </div>

//           {/* Category Sections */}
//           {["Forging", "Machining", "Other"].map((category) => {
//             const categoryPlants = Object.entries(plants).filter(
//               ([name, p]) => name !== "All Plant" && p.category === category
//             );
//             const plantCount = categoryPlants.length;

//             // Unit logic: Forging = Per Ton, others = Per Pic
//             const unit = category === "Forging" ? "Per Ton" : "Per Pic";

//             return (
//               <div key={category} className="mb-4">
//                 {/* Category Header */}
//                 {!isSidebarCollapsed && (
//                   <div
//                     className="px-4 py-2 text-xs font-semibold tracking-wider
//                        bg-gradient-to-r from-gray-50 to-gray-100
//                        border-b border-gray-200
//                        flex items-center justify-between
//                        rounded-md shadow-sm"
//                   >
//                     {/* Left Side → Category Name – Unit */}
//                     <div className="flex items-center gap-2 text-gray-700">
//                       <span>{category}</span>
//                       <span className="text-gray-400">–</span>
//                       <span className="text-[11px] font-normal text-gray-500">
//                         {unit}
//                       </span>
//                     </div>

//                     {/* Right Side → Plant Count */}
//                     <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
//                       {plantCount}
//                     </span>
//                   </div>
//                 )}

//                 {/* Plants under category - Disabled/View Only */}
//                 {categoryPlants.map(([plantName, plantInfo]) => (
//                   <div
//                     key={plantName}
//                     className="w-full flex items-center px-4 py-3 opacity-50 cursor-not-allowed
//                       border-l-4 border-transparent text-gray-500"
//                     title={`${plantName} - ${plantInfo.category} - ${plantInfo.lines} Lines`}
//                   >
//                     {/* Status Dot */}
//                     <div
//                       className={`w-2.5 h-2.5 rounded-full mr-3
//                         ${
//                           plantInfo.status === "active"
//                             ? "bg-gray-400"
//                             : "bg-gray-300"
//                         }
//                       `}
//                     ></div>

//                     {/* Plant Info */}
//                     {!isSidebarCollapsed && (
//                       <div className="flex-1 text-left">
//                         <div className="text-sm font-medium">
//                           {plantName}
//                         </div>
//                         <div className="text-xs text-gray-400 mt-0.5">
//                           {plantInfo.lines} Lines
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Main Content - Only AllPlants Component */}
//       <div className="flex-1 flex flex-col">
//         <AllPlants />
//       </div>

//       {/* Enhanced ChatBot Button */}
//       <button
//         onClick={() => setShowChatBot(true)}
//         className="fixed bottom-6 right-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-110 z-40"
//         title="ProfitPulse — Plant Costing Assistant"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//           />
//         </svg>
//         <span className="font-medium">ProfitPulse</span>
//       </button>

//       {/* Enhanced ChatBot Modal */}
//       {showChatBot && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-end justify-end p-6 z-50">
//           <div className="bg-white rounded-xl shadow-2xl w-96 h-[600px] flex flex-col animate-in slide-in-from-bottom border border-gray-200">
//             {/* Chat Header */}
//             <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 rounded-t-xl flex justify-between items-center">
//               <div>
//                 <h3 className="font-bold">Plant Analytics Assistant</h3>
//                 <p className="text-xs opacity-90">
//                   AI-powered manufacturing insights
//                 </p>
//               </div>
//               <button
//                 onClick={() => setShowChatBot(false)}
//                 className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Chat Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
//               {chatMessages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`flex ${
//                     msg.type === "user" ? "justify-end" : "justify-start"
//                   }`}
//                 >
//                   <div
//                     className={`max-w-[85%] p-3 rounded-lg text-sm ${
//                       msg.type === "user"
//                         ? "bg-blue-600 text-white rounded-br-none shadow-md"
//                         : "bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none"
//                     }`}
//                   >
//                     {msg.message}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Chat Input */}
//             <div className="p-4 bg-white border-t border-gray-200 rounded-b-xl">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={currentMessage}
//                   onChange={(e) => setCurrentMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                   placeholder="Ask about costs, efficiency, production..."
//                   className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
//                 >
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                     />
//                   </svg>
//                 </button>
//               </div>
//               {/* Enhanced Quick Actions */}
//               <div className="mt-3 flex flex-wrap gap-2">
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("Show total cost analysis")
//                   }
//                   className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full transition-colors border border-blue-200"
//                 >
//                   Cost Analysis
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("What's the average plant efficiency?")
//                   }
//                   className="text-xs bg-green-50 hover:bg-green-100 text-green-700 px-3 py-1.5 rounded-full transition-colors border border-green-200"
//                 >
//                   Efficiency Overview
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("Show production trends")
//                   }
//                   className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full transition-colors border border-orange-200"
//                 >
//                   Production Trends
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentMessage("How many plants per category?")
//                   }
//                   className="text-xs bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full transition-colors border border-purple-200"
//                 >
//                   Plant Count
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

/***/ }),

/***/ "./src/components/RawMaterialCostChart.jsx":
/*!*************************************************!*\
  !*** ./src/components/RawMaterialCostChart.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RawMaterialCostChart = function RawMaterialCostChart(_ref) {
  var mode = _ref.mode;
  // 🔹 Machining Data (sirf required plants)
  var dataMachining = [{
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
      Establishment: 0.5
    }
  }, {
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
      Establishment: 0.1
    }
  }, {
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
      Establishment: 0.1
    }
  }, {
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
      Establishment: 0.1
    }
  }];

  // 🔹 Forging Data
  var dataForging = [{
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
      Establishment: 0.1
    }
  }, {
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
      Establishment: 0.1
    }
  }, {
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
      Establishment: 0.2
    }
  }, {
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
      Establishment: 0.1
    }
  }];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("sales"),
    _useState2 = _slicedToArray(_useState, 2),
    forgingView = _useState2[0],
    setForgingView = _useState2[1]; // default Sales

  // Dummy data: apne hisaab se update kar lena
  var salesData = [{
    plant: "Khed",
    value: 35
  }, {
    plant: "Pune",
    value: 25
  }, {
    plant: "Nashik",
    value: 40
  }];
  var productionData = [{
    plant: "Khed",
    value: 1200
  }, {
    plant: "Pune",
    value: 800
  }, {
    plant: "Nashik",
    value: 1500
  }];
  var tonnageData = [{
    plant: "Khed",
    value: 200
  }, {
    plant: "Pune",
    value: 350
  }, {
    plant: "Nashik",
    value: 180
  }];

  // Active dataset choose karne ka logic
  var activeData = forgingView === "sales" ? salesData : forgingView === "production" ? productionData : tonnageData;

  // 🔹 State for toggle (Machining/Forging)
  var rawData = mode === "Machining" ? dataMachining : dataForging.map(function (d) {
    return _objectSpread(_objectSpread({}, d), {}, {
      total: forgingView === "sales" ? d.sales : forgingView === "production" ? d.production : d.tonnage
    });
  });
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    tooltip = _useState4[0],
    setTooltip = _useState4[1];

  // 🔹 Hover State (category-wise)
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    hoveredCategory = _useState6[0],
    setHoveredCategory = _useState6[1];

  // Sort plants by total value (smallest → largest)
  var selectedData = _toConsumableArray(rawData).sort(function (a, b) {
    return a.total - b.total;
  });

  // 🔹 Colors
  var colors = {
    RawMaterial: "#FF5757",
    Consumable: "#B794F6",
    Power: "#4299E1",
    Labour: "#F687B3",
    Fuel: "#F6AD55",
    SubContract: "#48BB78",
    RepairMaintenance: "#ED8936",
    MachineHire: "#38B2AC",
    Establishment: "#6B46C1"
  };
  var categoryLabels = {
    RawMaterial: "Raw Material",
    Consumable: "Consumable",
    Power: "Power",
    Labour: "Labour",
    Fuel: "Fuel",
    SubContract: "Sub Contract",
    RepairMaintenance: "Repair & Maintenance",
    MachineHire: "Machine Hire",
    Establishment: "Establishment"
  };
  var maxHeight = 300;
  var barWidth = 60;
  var chartWidth = 900;
  var chartHeight = 400;
  var yAxisWidth = 160;
  var chartStartX = yAxisWidth + 20;
  var barSpacing = 160;

  // 🔹 Stack biggest category at bottom
  var getBarData = function getBarData(plantData) {
    var segments = [];
    var currentHeight = 0;
    var gapSize = 5;
    var sortedCategories = Object.entries(plantData.categories).sort(function (a, b) {
      return b[1] - a[1];
    }).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        category = _ref3[0];
      return category;
    });
    sortedCategories.forEach(function (category, index) {
      var value = plantData.categories[category];
      if (value > 0) {
        // Percentage based height
        var segmentHeight = value / plantData.total * maxHeight;
        if (index > 0) currentHeight += gapSize;
        segments.push({
          category: category,
          value: value,
          y: maxHeight - currentHeight - segmentHeight,
          height: segmentHeight,
          color: colors[category],
          stackIndex: index
        });
        currentHeight += segmentHeight;
      }
    });
    return segments;
  };
  var generateFlowPath = function generateFlowPath(startSegments, endSegments, startX, endX) {
    var paths = [];
    var categoryMapping = {};
    startSegments.forEach(function (seg) {
      categoryMapping[seg.category] = seg;
    });
    Object.keys(categoryMapping).forEach(function (category) {
      var startSeg = startSegments.find(function (seg) {
        return seg.category === category;
      });
      var endSeg = endSegments.find(function (seg) {
        return seg.category === category;
      });
      if (startSeg && endSeg) {
        var startY1 = startSeg.y + 20;
        var startY2 = startSeg.y + startSeg.height + 20;
        var endY1 = endSeg.y + 20;
        var endY2 = endSeg.y + endSeg.height + 20;
        var controlX1 = startX + barWidth + (endX - startX - barWidth) * 0.3;
        var controlX2 = startX + barWidth + (endX - startX - barWidth) * 0.7;
        var pathD = "\n          M ".concat(startX + barWidth, " ").concat(startY1, "\n          C ").concat(controlX1, " ").concat(startY1, ", ").concat(controlX2, " ").concat(endY1, ", ").concat(endX, " ").concat(endY1, "\n          L ").concat(endX, " ").concat(endY2, "\n          C ").concat(controlX2, " ").concat(endY2, ", ").concat(controlX1, " ").concat(startY2, ", ").concat(startX + barWidth, " ").concat(startY2, "\n          Z\n        ");
        paths.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
          key: "".concat(category, "-flow-").concat(startX, "-").concat(endX),
          d: pathD,
          fill: startSeg.color,
          fillOpacity: "0.2",
          stroke: "none"
        }));
      }
    });
    return paths;
  };

  // 🔹 Create a global stack order based on average values
  var getGlobalStackOrder = function getGlobalStackOrder() {
    var categoryAverages = {};
    Object.keys(selectedData[0].categories).forEach(function (category) {
      var total = selectedData.reduce(function (sum, plant) {
        return sum + plant.categories[category];
      }, 0);
      categoryAverages[category] = total / selectedData.length;
    });
    return Object.entries(categoryAverages).sort(function (a, b) {
      return a[1] - b[1];
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
        category = _ref5[0];
      return category;
    });
  };
  var globalStackOrder = getGlobalStackOrder();

  // 🔹 Category Totals (sum across all plants)
  var categoryTotals = {};
  Object.keys(selectedData[0].categories).forEach(function (category) {
    categoryTotals[category] = selectedData.reduce(function (sum, plant) {
      return sum + plant.categories[category];
    }, 0);
  });
  var createYAxisLabels = function createYAxisLabels() {
    var labelGap = 28;
    var startY = 40;
    return globalStackOrder.map(function (category, index) {
      var y = startY + index * labelGap;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        key: "y-label-".concat(category),
        onMouseEnter: function onMouseEnter() {
          return setHoveredCategory(category);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoveredCategory(null);
        },
        opacity: hoveredCategory && hoveredCategory !== category ? 0.3 : 1
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
        x: 15,
        y: y - 8,
        width: 12,
        height: 12,
        fill: colors[category],
        rx: "6",
        ry: "6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
        x: 32,
        y: y + 3,
        className: "text-xs font-medium ".concat(hoveredCategory === category ? "fill-blue-600" : "fill-gray-700"),
        textAnchor: "start"
      }, categoryLabels[category]));
    });
  };

  // 🔹 Right Y-axis labels with totals
  var createRightYAxisLabels = function createRightYAxisLabels() {
    var labelGap = 28;
    var startY = 40;
    return globalStackOrder.map(function (category, index) {
      var y = startY + index * labelGap;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        key: "y-label-right-".concat(category)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
        x: chartStartX + chartWidth - yAxisWidth + 10,
        y: y + 3,
        className: "text-xs font-medium fill-gray-700",
        textAnchor: "start"
      }, categoryLabels[category], " : ", categoryTotals[category].toFixed(1)));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 bg-gray-50 min-h-screen flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-6xl mx-auto w-full flex flex-col"
  }, mode === "Forging" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-3 mb-4"
  }, ["sales", "production", "tonnage"].map(function (view) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: view,
      onClick: function onClick() {
        return setForgingView(view);
      },
      className: "px-4 py-1 rounded-lg text-sm font-medium border \n      ".concat(forgingView === view ? "bg-blue-600 text-white" : "bg-white text-gray-700")
    }, view.charAt(0).toUpperCase() + view.slice(1), " Value");
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-1 items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: chartWidth + yAxisWidth,
    height: chartHeight,
    className: "overflow-visible"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: chartStartX,
    y: 20,
    width: chartWidth - yAxisWidth,
    height: maxHeight,
    fill: "#F9FAFB",
    rx: "6",
    ry: "6"
  }), createYAxisLabels(), generateFlowPath(getBarData(selectedData[0]), getBarData(selectedData[1]), chartStartX, chartStartX + barSpacing), generateFlowPath(getBarData(selectedData[1]), getBarData(selectedData[2]), chartStartX + barSpacing, chartStartX + barSpacing * 2), generateFlowPath(getBarData(selectedData[2]), getBarData(selectedData[3]), chartStartX + barSpacing * 2, chartStartX + barSpacing * 3), selectedData.map(function (plantData, index) {
    var x = chartStartX + index * barSpacing;

    // 🔹 Segment heights updated according to percentage of total
    var cumulativeHeight = 0;
    var segments = Object.entries(plantData.categories).sort(function (a, b) {
      return b[1] - a[1];
    }) // badi value neeche
    .map(function (_ref6, idx) {
      var _ref7 = _slicedToArray(_ref6, 2),
        category = _ref7[0],
        value = _ref7[1];
      var height = value / plantData.total * maxHeight;
      var y = maxHeight - cumulativeHeight - height;
      cumulativeHeight += height + 5; // 5px gap between stacks
      return {
        category: category,
        value: value,
        height: height,
        y: y,
        color: colors[category]
      };
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
      key: plantData.plant
    }, segments.map(function (segment) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
        key: "".concat(plantData.plant, "-").concat(segment.category)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", {
        id: "gradient-".concat(plantData.plant, "-").concat(segment.category),
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
        offset: "0%",
        stopColor: segment.color,
        stopOpacity: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
        offset: "50%",
        stopColor: segment.color,
        stopOpacity: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
        offset: "100%",
        stopColor: segment.color,
        stopOpacity: "1"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
        x: x,
        y: segment.y + 20,
        width: barWidth,
        height: segment.height,
        fill: "url(#gradient-".concat(plantData.plant, "-").concat(segment.category, ")"),
        rx: "6",
        ry: "6",
        onMouseEnter: function onMouseEnter() {
          return setHoveredCategory(segment.category);
        },
        onMouseMove: function onMouseMove(e) {
          return setTooltip({
            x: e.clientX,
            y: e.clientY,
            plant: plantData.plant,
            category: segment.category,
            value: segment.value,
            Sale: (segment.value / plantData.total * 100).toFixed(1)
          });
        },
        onMouseLeave: function onMouseLeave() {
          return setHoveredCategory(null);
        },
        opacity: hoveredCategory && hoveredCategory !== segment.category ? 0.3 : 1
      }), hoveredCategory === segment.category && tooltip && tooltip.plant === plantData.plant && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("foreignObject", {
        x: x + barWidth + 8 // bar ke side me
        ,
        y: segment.y - 50 // bar ke upar shift
        ,
        width: 150,
        height: 50,
        style: {
          pointerEvents: "none",
          zIndex: 999
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "bg-white shadow-md rounded px-2 py-1 text-xs text-gray-700 border"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "font-medium"
      }, plantData.plant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, categoryLabels[segment.category], ": \u20B9", segment.value.toFixed(2), " Cr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Sales:", " ", (segment.value / plantData.total * 100).toFixed(1), "%"))));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: x + barWidth / 2,
      y: maxHeight + 45,
      textAnchor: "middle",
      className: "text-sm font-semibold fill-gray-700"
    }, plantData.plant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: x + barWidth / 2,
      y: maxHeight + 62,
      textAnchor: "middle",
      className: "text-xs fill-gray-500"
    }, "\u20B9", plantData.total.toFixed(2), "Cr"));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-96 ml-6 bg-white rounded-2xl shadow-xl border border-gray-200/50 p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
  }, "\uD83D\uDCA1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-xl font-bold text-gray-800"
  }, "Key Insights")), mode === "Machining" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4 mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-red-700"
  }, "Highest Cost Plant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-red-800"
  }, selectedData[selectedData.length - 1].plant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg font-semibold text-red-600"
  }, "\u20B9", selectedData[selectedData.length - 1].total.toFixed(2), " Cr")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-green-700"
  }, "Lowest Cost Plant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-green-800"
  }, selectedData[0].plant), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg font-semibold text-green-600"
  }, "\u20B9", selectedData[0].total.toFixed(2), " Cr")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "text-sm font-semibold text-purple-700 mb-3 flex items-center gap-2"
  }, "\uD83D\uDCCA Major Cost Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-3"
  }, Object.entries(categoryTotals).sort(function (a, b) {
    return b[1] - a[1];
  }).slice(0, 3).map(function (_ref8, index) {
    var _ref9 = _slicedToArray(_ref8, 2),
      cat = _ref9[0],
      val = _ref9[1];
    var percentage = (val / Object.values(categoryTotals).reduce(function (a, b) {
      return a + b;
    }, 0) * 100).toFixed(1);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: cat,
      className: "relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex justify-between items-center mb-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm font-medium text-gray-700"
    }, "#", index + 1, " ", categoryLabels[cat]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-sm font-bold text-purple-600"
    }, percentage, "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full bg-gray-200 rounded-full h-2.5 overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-2.5 rounded-full transition-all duration-500 ease-out",
      style: {
        width: "".concat(percentage, "%"),
        background: "linear-gradient(90deg, ".concat(colors[cat], ", ").concat(colors[cat], "CC)")
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-xs text-gray-500 mt-1"
    }, "\u20B9", val.toFixed(2), " Cr total"));
  })))), mode === "Forging" && forgingView === "sales" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-amber-700"
  }, "Top Sales Plant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-amber-800"
  }, dataForging.reduce(function (a, b) {
    return a.sales > b.sales ? a : b;
  }).plant)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-blue-700"
  }, "Total Sales"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-blue-800"
  }, "\u20B9", dataForging.reduce(function (sum, p) {
    return sum + p.sales;
  }, 0).toFixed(1), " ", "Cr"))), mode === "Forging" && forgingView === "production" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-orange-700"
  }, "Highest Production Plant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-orange-800"
  }, dataForging.reduce(function (a, b) {
    return a.production > b.production ? a : b;
  }).plant)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-green-700"
  }, "Average Production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-green-800"
  }, (dataForging.reduce(function (s, p) {
    return s + p.production;
  }, 0) / dataForging.length).toFixed(1)))), mode === "Forging" && forgingView === "tonnage" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-pink-700"
  }, "Highest Tonnage Plant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-pink-800"
  }, dataForging.reduce(function (a, b) {
    return a.tonnage > b.tonnage ? a : b;
  }).plant)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-4 transform hover:scale-105 transition-all duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-indigo-700"
  }, "Total Tonnage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xl font-bold text-indigo-800"
  }, dataForging.reduce(function (s, p) {
    return s + p.tonnage;
  }, 0).toFixed(1))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RawMaterialCostChart);

/***/ }),

/***/ "./src/components/costscreener.jsx":
/*!*****************************************!*\
  !*** ./src/components/costscreener.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var themes = {
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
  },
  midnight: {
    name: "Midnight Aurora",
    mainBg: "bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950",
    cardBg: "bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 backdrop-blur-xl",
    modalBg: "bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl",
    primaryText: "text-white",
    secondaryText: "text-slate-300",
    mutedText: "text-slate-400",
    border: "border-purple-400/30",
    shadow: "shadow-2xl shadow-purple-500/30",
    chartBg: "bg-gradient-to-br from-slate-900/95 via-indigo-950/90 to-purple-950/80",
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
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
      highlightColor: "#6366f1"
    }
  },
  neon: {
    name: "Neon Cyber",
    mainBg: "bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950",
    cardBg: "bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-gray-800/90 backdrop-blur-xl",
    modalBg: "bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-xl",
    primaryText: "text-white",
    // ⬅️ CHANGED from text-cyan-300
    secondaryText: "text-gray-200",
    // ⬅️ CHANGED from text-cyan-400
    mutedText: "text-gray-400",
    // ⬅️ CHANGED from text-cyan-500
    border: "border-cyan-400/30",
    shadow: "shadow-2xl shadow-cyan-500/30",
    chartBg: "bg-gradient-to-br from-gray-900/95 via-purple-950/90 to-blue-950/80",
    gridColor: "#374151",
    // ⬅️ CHANGED from #064e3b to lighter gray
    axisTextColor: "#ffffff",
    // ⬅️ NEW: White color for axis labels
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
      percentPredicted: "#f472b6"
    }
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
      percentPredicted: "#ff8c69"
    }
  }
};
var NotificationPanel = function NotificationPanel(_ref) {
  var data = _ref.data,
    theme = _ref.theme;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    dismissedAlerts = _useState4[0],
    setDismissedAlerts = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedAlert = _useState6[0],
    setSelectedAlert = _useState6[1];
  var generateAlerts = function generateAlerts() {
    var alerts = [];
    if (!data || data.length === 0) return alerts;
    data.forEach(function (kpi) {
      if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.2) {
        alerts.push({
          id: "".concat(kpi.kpiName, "-critical"),
          type: "critical",
          title: "".concat(kpi.kpiName),
          message: "Cost overrun: \u20B9".concat(kpi.actual_per_tonne, "/t"),
          value: "+".concat(((kpi.actual_per_tonne / kpi.budget_per_tonne - 1) * 100).toFixed(1), "%"),
          icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        });
      } else if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.1) {
        alerts.push({
          id: "".concat(kpi.kpiName, "-warning"),
          type: "warning",
          title: "".concat(kpi.kpiName),
          message: "Above budget",
          value: "+".concat(((kpi.actual_per_tonne / kpi.budget_per_tonne - 1) * 100).toFixed(1), "%"),
          icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        });
      }
      if (kpi.actual_per_tonne < kpi.budget_per_tonne * 0.9) {
        alerts.push({
          id: "".concat(kpi.kpiName, "-success"),
          type: "success",
          title: "".concat(kpi.kpiName),
          message: "Saving vs budget",
          value: "-".concat(((1 - kpi.actual_per_tonne / kpi.budget_per_tonne) * 100).toFixed(1), "%"),
          icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
        });
      }
    });
    return alerts.sort(function (a, b) {
      var priority = {
        critical: 0,
        warning: 1,
        success: 2
      };
      return priority[a.type] - priority[b.type];
    });
  };
  var alerts = generateAlerts().filter(function (alert) {
    return !dismissedAlerts.includes(alert.id);
  });
  if (!data || alerts.length === 0) return null;
  var criticalCount = alerts.filter(function (a) {
    return a.type === "critical";
  }).length;
  var warningCount = alerts.filter(function (a) {
    return a.type === "warning";
  }).length;
  var successCount = alerts.filter(function (a) {
    return a.type === "success";
  }).length;
  var getTypeColor = function getTypeColor(type) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed right-6 top-24 z-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "group relative p-3 rounded-full ".concat(theme.cardBg, " ").concat(theme.shadow, " ").concat(theme.border, " border backdrop-blur-xl transition-all duration-300 hover:scale-110 ").concat(criticalCount > 0 ? "animate-bounce" : "")
  }, alerts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -top-1 -right-1 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "absolute inline-flex h-6 w-6 rounded-full ".concat(criticalCount > 0 ? "bg-red-400" : warningCount > 0 ? "bg-amber-400" : "bg-green-400", " opacity-75 animate-ping")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "relative inline-flex items-center justify-center h-6 w-6 rounded-full text-[10px] font-bold text-white ".concat(criticalCount > 0 ? "bg-red-500" : warningCount > 0 ? "bg-amber-500" : "bg-green-500")
  }, alerts.length)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-5 h-5 ".concat(theme.primaryText, " transition-transform duration-300 ").concat(isOpen ? "rotate-12" : "")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute right-0 top-16 transition-all duration-300 ".concat(isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-80 ".concat(theme.cardBg, " rounded-2xl ").concat(theme.shadow, " ").concat(theme.border, " border backdrop-blur-xl overflow-hidden")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 bg-gradient-to-r ".concat(theme.buttonBg, " border-b ").concat(theme.border)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-bold ".concat(theme.primaryText)
  }, "Alert Center"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setIsOpen(false);
    },
    className: "".concat(theme.mutedText, " hover:").concat(theme.primaryText, " transition-colors")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-3 mt-2"
  }, criticalCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-red-600 font-semibold"
  }, criticalCount)), warningCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-2 h-2 bg-amber-500 rounded-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-amber-600 font-semibold"
  }, warningCount)), successCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-2 h-2 bg-green-500 rounded-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs text-green-600 font-semibold"
  }, successCount)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-h-96 overflow-y-auto p-2"
  }, alerts.map(function (alert) {
    var IconComponent = alert.icon;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: alert.id,
      className: "relative mb-2 p-3 rounded-lg ".concat(selectedAlert === alert.id ? "".concat(theme.buttonBg, " ").concat(theme.border, " border") : "hover:bg-gray-50 dark:hover:bg-gray-800", " cursor-pointer transition-all duration-200 group"),
      onClick: function onClick() {
        return setSelectedAlert(selectedAlert === alert.id ? null : alert.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setDismissedAlerts([].concat(_toConsumableArray(dismissedAlerts), [alert.id]));
      },
      className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-3 h-3 ".concat(theme.mutedText)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-1.5 rounded-lg ".concat(getTypeColor(alert.type), " bg-opacity-10")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
      className: "w-4 h-4 ".concat(alert.type === "critical" ? "text-red-500" : alert.type === "warning" ? "text-amber-500" : "text-green-500")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      className: "text-xs font-semibold ".concat(theme.primaryText, " truncate")
    }, alert.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-xs ".concat(theme.secondaryText, " mt-0.5")
    }, alert.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-bold whitespace-nowrap ".concat(alert.type === "critical" ? "text-red-500" : alert.type === "warning" ? "text-amber-500" : "text-green-500")
    }, alert.value)), selectedAlert === alert.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2 pt-2 border-t ".concat(theme.border, " text-xs ").concat(theme.mutedText)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Take action to", " ", alert.type === "critical" ? "resolve immediately" : alert.type === "warning" ? "monitor closely" : "maintain performance")))), alert.type === "critical" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2 h-1 bg-red-100 rounded-full overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-full bg-red-500 rounded-full animate-pulse",
      style: {
        width: "70%"
      }
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 border-t ".concat(theme.border, " bg-gradient-to-r ").concat(theme.buttonBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs ".concat(theme.secondaryText)
  }, "Total Impact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-bold ".concat(theme.primaryText)
  }, "\u20B9", data.reduce(function (sum, kpi) {
    return sum + Math.abs(kpi.actual_per_tonne - kpi.budget_per_tonne);
  }, 0).toFixed(2), "/t")))))));
};
var CustomTooltip = function CustomTooltip(_ref2) {
  var active = _ref2.active,
    payload = _ref2.payload,
    label = _ref2.label,
    theme = _ref2.theme;
  if (active && payload && payload.length) {
    var uniqueEntries = payload.filter(function (entry, index, self) {
      if (entry.value === null || entry.value === undefined) return false;
      return self.findIndex(function (e) {
        return e.dataKey === entry.dataKey && e.value === entry.value;
      }) === index;
    });
    if (uniqueEntries.length === 0) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(theme.cardBg, " p-3 rounded-lg ").concat(theme.shadow, " ").concat(theme.border, " border")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-xs font-semibold ".concat(theme.primaryText, " mb-2")
    }, label), uniqueEntries.map(function (entry, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "item-".concat(entry.dataKey, "-").concat(index),
        className: "text-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "inline-block w-2 h-2 rounded-full mr-2",
        style: {
          backgroundColor: entry.color
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-medium ".concat(theme.primaryText)
      }, " ", entry.name, ":", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-bold ".concat(theme.primaryText)
      }, " ", entry.dataKey.includes("Percent") || entry.dataKey.includes("Target") || entry.dataKey.includes("EBITDA") ? "".concat(entry.value, "%") : "\u20B9".concat(entry.value.toLocaleString())));
    }));
  }
  return null;
};
var ManualEntryModal = function ManualEntryModal(_ref3) {
  var _kpiConfig$activeTab;
  var theme = _ref3.theme,
    onClose = _ref3.onClose,
    selectedLocation = _ref3.selectedLocation;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Power"),
    _useState8 = _slicedToArray(_useState7, 2),
    activeTab = _useState8[0],
    setActiveTab = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    expandedLines = _useState10[0],
    setExpandedLines = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    editMode = _useState12[0],
    setEditMode = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date()),
    _useState14 = _slicedToArray(_useState13, 2),
    selectedDate = _useState14[0],
    setSelectedDate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showCalendar = _useState16[0],
    setShowCalendar = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    saving = _useState20[0],
    setSaving = _useState20[1];

  // New states for add line/machine modal
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showAddModal = _useState22[0],
    setShowAddModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    addModalType = _useState24[0],
    setAddModalType = _useState24[1]; // 'line' or 'machine'
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState26 = _slicedToArray(_useState25, 2),
    selectedLineForMachine = _useState26[0],
    setSelectedLineForMachine = _useState26[1];

  // Date status tracking
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState28 = _slicedToArray(_useState27, 2),
    dateStatus = _useState28[0],
    setDateStatus = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      Power: {},
      Consumables: {},
      Fuel: {},
      Labour: {}
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    formData = _useState30[0],
    setFormData = _useState30[1];

  // Fetch line and machine data from cost_line_master API
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchLineMasterData();
  }, []);

  // Fetch existing data for selected date
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (selectedDate) {
      fetchExistingData(selectedDate);
    }
  }, [selectedDate]);
  var fetchLineMasterData = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data, transformedData;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return fetch("http://localhost:8080/api/v1/collection/cost_line_master");
          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();
          case 7:
            data = _context.sent;
            // Transform API data to formData structure
            transformedData = {
              Power: {},
              Consumables: {},
              Fuel: {},
              Labour: {}
            }; // Group machines by line_name
            data.objects.forEach(function (item) {
              var lineName = item.line_name;

              // Initialize line if not exists
              if (!transformedData.Power[lineName]) {
                transformedData.Power[lineName] = {
                  machines: []
                };
              }

              // Add machine to the line (removed cost field)
              transformedData.Power[lineName].machines.push({
                name: item.machine_name,
                consumption: "",
                power: item.power || "",
                status: "active",
                cdb_object_id: item.cdb_object_id
              });
            });
            setFormData(transformedData);
            _context.next = 17;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.error("Error fetching line master data:", _context.t0);
            alert("Failed to load line and machine data");
          case 17:
            _context.prev = 17;
            setLoading(false);
            return _context.finish(17);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13, 17, 20]]);
    }));
    return function fetchLineMasterData() {
      return _ref4.apply(this, arguments);
    };
  }();
  var fetchExistingData = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(date) {
      var dateStr, response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dateStr = formatDateKey(date);
            _context2.next = 4;
            return fetch("http://localhost:8080/api/v1/collection/cost_machine_entry?datee=".concat(dateStr));
          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response.json();
          case 7:
            data = _context2.sent;
            if (data.objects && data.objects.length > 0) {
              // Update formData with existing values
              setFormData(function (prev) {
                var newData = _objectSpread({}, prev);
                data.objects.forEach(function (entry) {
                  var lineName = entry.line_name;
                  var machineName = entry.machine_name;
                  if (newData.Power[lineName]) {
                    var machineIndex = newData.Power[lineName].machines.findIndex(function (m) {
                      return m.name === machineName;
                    });
                    if (machineIndex !== -1) {
                      newData.Power[lineName].machines[machineIndex] = _objectSpread(_objectSpread({}, newData.Power[lineName].machines[machineIndex]), {}, {
                        consumption: entry.power || "",
                        power: entry.power || ""
                      });
                    }
                  }
                });
                return newData;
              });

              // Mark date as filled
              setDateStatus(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, dateStr, true));
              });
            }
            _context2.next = 14;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.error("Error fetching existing data:", _context2.t0);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 11]]);
    }));
    return function fetchExistingData(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  var kpiConfig = {
    Power: {
      icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      color: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    Fuel: {
      icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      color: "orange",
      gradient: "from-orange-500 to-amber-500"
    },
    Labour: {
      icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    Consumables: {
      icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      color: "green",
      gradient: "from-green-500 to-emerald-500"
    }
  };
  var kpiTabs = Object.keys(kpiConfig);

  // Date formatting functions
  var formatDate = function formatDate(date) {
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };
  var formatDateKey = function formatDateKey(date) {
    return date.toISOString().split("T")[0];
  };
  var isToday = function isToday(date) {
    var today = new Date();
    return date.toDateString() === today.toDateString();
  };
  var isPastDate = function isPastDate(date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  var getDateIndicatorColor = function getDateIndicatorColor(date) {
    if (!isPastDate(date)) return null;
    var dateKey = formatDateKey(date);
    if (dateStatus[dateKey] === true) {
      return "bg-green-500";
    } else if (dateStatus[dateKey] === false) {
      return "bg-red-500";
    }
    return null;
  };

  // Calendar Component
  var CalendarDropdown = function CalendarDropdown() {
    var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date(selectedDate)),
      _useState32 = _slicedToArray(_useState31, 2),
      currentMonth = _useState32[0],
      setCurrentMonth = _useState32[1];
    var getDaysInMonth = function getDaysInMonth(date) {
      var year = date.getFullYear();
      var month = date.getMonth();
      var firstDay = new Date(year, month, 1);
      var lastDay = new Date(year, month + 1, 0);
      var daysInMonth = lastDay.getDate();
      var startingDayOfWeek = firstDay.getDay();
      return {
        daysInMonth: daysInMonth,
        startingDayOfWeek: startingDayOfWeek
      };
    };
    var _getDaysInMonth = getDaysInMonth(currentMonth),
      daysInMonth = _getDaysInMonth.daysInMonth,
      startingDayOfWeek = _getDaysInMonth.startingDayOfWeek;
    var handlePrevMonth = function handlePrevMonth() {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };
    var handleNextMonth = function handleNextMonth() {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };
    var handleDateSelect = function handleDateSelect(day) {
      var newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(newDate);
      setShowCalendar(false);
    };
    var getDateStyle = function getDateStyle(date) {
      var dateKey = formatDateKey(date);
      var isSelected = formatDateKey(date) === formatDateKey(selectedDate);
      var isTodayDate = isToday(date);
      var isPast = isPastDate(date);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border-2 border-gray-200 p-5 z-50 w-96"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between mb-5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handlePrevMonth,
      className: "p-2 hover:bg-gray-100 rounded-lg transition-all"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5 text-gray-600"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-base font-bold text-gray-900"
    }, currentMonth.toLocaleDateString("en-IN", {
      month: "long",
      year: "numeric"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleNextMonth,
      className: "p-2 hover:bg-gray-100 rounded-lg transition-all"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5 text-gray-600"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-7 gap-2 mb-3"
    }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(function (day) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: day,
        className: "text-center text-xs font-bold text-gray-500 py-2"
      }, day);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-7 gap-2"
    }, Array.from({
      length: startingDayOfWeek
    }).map(function (_, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "empty-".concat(index)
      });
    }), Array.from({
      length: daysInMonth
    }).map(function (_, index) {
      var day = index + 1;
      var date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      var dateStyle = getDateStyle(date);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        key: day,
        onClick: function onClick() {
          return handleDateSelect(day);
        },
        className: "p-3 rounded-lg text-sm font-bold transition-all ".concat(dateStyle)
      }, day);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-5 pt-4 border-t border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-2 gap-3 text-xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2 bg-green-50 p-2 rounded-lg border border-green-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-7 h-7 rounded-lg bg-green-600 border-2 border-green-700 flex items-center justify-center shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4 text-white"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-700 font-semibold"
    }, "Filled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2 bg-red-50 p-2 rounded-lg border border-red-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-7 h-7 rounded-lg bg-red-600 border-2 border-red-700 flex items-center justify-center shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4 text-white"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-700 font-semibold"
    }, "Not Filled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2 bg-blue-50 p-2 rounded-lg border border-blue-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-7 h-7 rounded-lg bg-blue-600 border-2 border-blue-700 flex items-center justify-center shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4 text-white"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-700 font-semibold"
    }, "Selected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2 bg-cyan-50 p-2 rounded-lg border border-cyan-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-7 h-7 rounded-lg bg-blue-100 border-2 border-blue-500 flex items-center justify-center shadow-sm"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-4 h-4 text-blue-700",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-gray-700 font-semibold"
    }, "Today")))));
  };

  // Add Line/Machine Modal
  var AddModal = function AddModal() {
    var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState34 = _slicedToArray(_useState33, 2),
      newLineName = _useState34[0],
      setNewLineName = _useState34[1];
    var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
        name: "",
        power: ""
      }]),
      _useState36 = _slicedToArray(_useState35, 2),
      newMachines = _useState36[0],
      setNewMachines = _useState36[1];
    var handleAddMachineRow = function handleAddMachineRow() {
      setNewMachines([].concat(_toConsumableArray(newMachines), [{
        name: "",
        power: ""
      }]));
    };
    var handleRemoveMachineRow = function handleRemoveMachineRow(index) {
      var updated = newMachines.filter(function (_, i) {
        return i !== index;
      });
      setNewMachines(updated);
    };
    var handleMachineChange = function handleMachineChange(index, field, value) {
      var updated = _toConsumableArray(newMachines);
      updated[index][field] = value;
      setNewMachines(updated);
    };
    var handleSubmit = function handleSubmit() {
      if (addModalType === "line") {
        if (!newLineName.trim()) {
          alert("Please enter line name");
          return;
        }
        var validMachines = newMachines.filter(function (m) {
          return m.name.trim();
        });
        if (validMachines.length === 0) {
          alert("Please add at least one machine");
          return;
        }
        setFormData(function (prev) {
          var newData = _objectSpread({}, prev);
          newData[activeTab][newLineName.trim()] = {
            machines: validMachines.map(function (m) {
              return {
                name: m.name,
                consumption: "",
                power: m.power || "",
                status: "active"
              };
            })
          };
          return newData;
        });
        setShowAddModal(false);
        setNewLineName("");
        setNewMachines([{
          name: "",
          power: ""
        }]);
      } else if (addModalType === "machine") {
        var _validMachines = newMachines.filter(function (m) {
          return m.name.trim();
        });
        if (_validMachines.length === 0) {
          alert("Please add at least one machine");
          return;
        }
        setFormData(function (prev) {
          var newData = _objectSpread({}, prev);
          _validMachines.forEach(function (machine) {
            newData[activeTab][selectedLineForMachine].machines.push({
              name: machine.name,
              consumption: "",
              power: machine.power || "",
              status: "active"
            });
          });
          return newData;
        });
        setShowAddModal(false);
        setNewMachines([{
          name: "",
          power: ""
        }]);
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-".concat(kpiConfig[activeTab].color, "-600 p-5 border-b-2 border-").concat(kpiConfig[activeTab].color, "-700")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-3 bg-white/20 rounded-lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-6 h-6 text-white"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xl font-bold text-white"
    }, addModalType === "line" ? "Add New Line" : "Add Machines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-white/90 mt-1"
    }, addModalType === "line" ? "Create a new line with machines" : "Add machines to ".concat(selectedLineForMachine)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowAddModal(false);
      },
      className: "p-2 rounded-lg hover:bg-white/20 transition-all text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-6 overflow-y-auto max-h-[calc(90vh-240px)]"
    }, addModalType === "line" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "block text-sm font-bold text-gray-700 mb-2"
    }, "Line Name ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-red-500"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      value: newLineName,
      onChange: function onChange(e) {
        return setNewLineName(e.target.value);
      },
      placeholder: "Enter line name (e.g., Line 1, Production Line A)",
      className: "w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "block text-sm font-bold text-gray-700 mb-3"
    }, "Machines ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-red-500"
    }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "space-y-3"
    }, newMachines.map(function (machine, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "flex gap-3 items-start bg-gray-50 p-4 rounded-lg border-2 border-gray-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex-1 grid grid-cols-2 gap-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "block text-xs font-semibold text-gray-600 mb-1"
      }, "Machine Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: machine.name,
        onChange: function onChange(e) {
          return handleMachineChange(index, "name", e.target.value);
        },
        placeholder: "e.g., Machine A1",
        className: "w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "block text-xs font-semibold text-gray-600 mb-1"
      }, "Power (kW) - Optional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: machine.power,
        onChange: function onChange(e) {
          return handleMachineChange(index, "power", e.target.value);
        },
        placeholder: "e.g., 100",
        className: "w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
      }))), newMachines.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return handleRemoveMachineRow(index);
        },
        className: "p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-all mt-6"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4"
      })));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleAddMachineRow,
      className: "w-full mt-3 py-3 border-2 border-dashed border-gray-300 rounded-lg bg-white hover:bg-gray-50 hover:border-blue-400 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-gray-600"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4"
    }), "Add Another Machine"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-5 border-t border-gray-200 bg-gray-50 flex gap-3 justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowAddModal(false);
      },
      className: "px-6 py-2.5 rounded-lg bg-white border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-all"
    }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleSubmit,
      className: "px-6 py-2.5 rounded-lg bg-".concat(kpiConfig[activeTab].color, "-600 border-2 border-").concat(kpiConfig[activeTab].color, "-700 text-white text-sm font-semibold hover:bg-").concat(kpiConfig[activeTab].color, "-700 transition-all flex items-center gap-2 shadow-sm")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4"
    }), addModalType === "line" ? "Create Line" : "Add Machines"))));
  };
  var handleLineToggle = function handleLineToggle(lineName) {
    setExpandedLines(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, lineName, !prev[lineName]));
    });
  };
  var handleEdit = function handleEdit(lineName) {
    var machineIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var key = machineIndex !== null ? "".concat(lineName, "-").concat(machineIndex) : lineName;
    setEditMode(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, true));
    });
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(lineName) {
      var machineIndex,
        key,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            machineIndex = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
            key = machineIndex !== null ? "".concat(lineName, "-").concat(machineIndex) : lineName; // Save individual machine data
            if (!(machineIndex !== null)) {
              _context3.next = 5;
              break;
            }
            _context3.next = 5;
            return saveMachineData(lineName, machineIndex);
          case 5:
            setEditMode(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, false));
            });
          case 6:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleSave(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();
  var saveMachineData = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(lineName, machineIndex) {
      var machine, payload, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            machine = formData[activeTab][lineName].machines[machineIndex];
            payload = {
              datee: formatDateKey(selectedDate),
              line_name: lineName,
              machine_name: machine.name,
              plant_code: parseInt(selectedLocation) || 2101,
              power: parseFloat(machine.consumption) || 0,
              type: activeTab.toUpperCase()
            };
            _context4.next = 5;
            return fetch("http://localhost:8080/api/v1/collection/cost_machine_entry", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(payload)
            });
          case 5:
            response = _context4.sent;
            if (response.ok) {
              _context4.next = 8;
              break;
            }
            throw new Error("Failed to save data");
          case 8:
            console.log("Data saved successfully for:", lineName, machine.name);
            _context4.next = 15;
            break;
          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.error("Error saving machine data:", _context4.t0);
            alert("Failed to save data. Please try again.");
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 11]]);
    }));
    return function saveMachineData(_x4, _x5) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleInputChange = function handleInputChange(lineName, field, value) {
    var machineIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    setFormData(function (prev) {
      var newData = _objectSpread({}, prev);
      newData[activeTab][lineName].machines[machineIndex][field] = value;
      return newData;
    });
  };
  var handleDeleteMachine = function handleDeleteMachine(lineName, machineIndex) {
    if (confirm("Are you sure you want to delete this machine?")) {
      setFormData(function (prev) {
        var newData = _objectSpread({}, prev);
        newData[activeTab][lineName].machines.splice(machineIndex, 1);
        return newData;
      });
    }
  };
  var handleSaveAll = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var allMachines, _i2, _allMachines, machineData, response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setSaving(true);
            _context5.prev = 1;
            allMachines = []; // Collect all machine data
            Object.keys(formData[activeTab] || {}).forEach(function (lineName) {
              formData[activeTab][lineName].machines.forEach(function (machine) {
                if (machine.consumption) {
                  allMachines.push({
                    datee: formatDateKey(selectedDate),
                    line_name: lineName,
                    machine_name: machine.name,
                    plant_code: parseInt(selectedLocation) || 2101,
                    power: parseFloat(machine.consumption) || 0,
                    type: activeTab.toUpperCase()
                  });
                }
              });
            });

            // Save all machines
            _i2 = 0, _allMachines = allMachines;
          case 5:
            if (!(_i2 < _allMachines.length)) {
              _context5.next = 15;
              break;
            }
            machineData = _allMachines[_i2];
            _context5.next = 9;
            return fetch("http://localhost:8080/api/v1/collection/cost_machine_entry", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(machineData)
            });
          case 9:
            response = _context5.sent;
            if (response.ok) {
              _context5.next = 12;
              break;
            }
            throw new Error("Failed to save ".concat(machineData.machine_name));
          case 12:
            _i2++;
            _context5.next = 5;
            break;
          case 15:
            alert("All data saved successfully!");

            // Update date status
            setDateStatus(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, formatDateKey(selectedDate), true));
            });
            _context5.next = 23;
            break;
          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](1);
            console.error("Error saving all data:", _context5.t0);
            alert("Failed to save some data. Please check and try again.");
          case 23:
            _context5.prev = 23;
            setSaving(false);
            return _context5.finish(23);
          case 26:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 19, 23, 26]]);
    }));
    return function handleSaveAll() {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleUploadBill = function handleUploadBill() {
    // Create a file input element
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.jpg,.jpeg,.png';
    input.onchange = function (e) {
      var file = e.target.files[0];
      if (file) {
        console.log("File selected:", file.name);
        // Here you can add your file upload logic
        alert("Bill uploaded: ".concat(file.name));
      }
    };
    input.click();
  };
  var renderInputField = function renderInputField(value, _onChange, label, isEditing) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "text-xs font-bold text-gray-600 block mb-1.5"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      value: value,
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      disabled: !isEditing,
      placeholder: isEditing ? "Enter ".concat(label.toLowerCase()) : "",
      className: "w-full px-3 py-2.5 rounded-lg text-sm border-2 transition-all ".concat(isEditing ? "border-blue-500 bg-blue-50 focus:ring-2 focus:ring-blue-200 focus:outline-none font-semibold" : "border-gray-200 bg-gray-50 text-gray-700")
    }));
  };
  var IconComponent = ((_kpiConfig$activeTab = kpiConfig[activeTab]) === null || _kpiConfig$activeTab === void 0 ? void 0 : _kpiConfig$activeTab.icon) || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
  if (loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-white rounded-2xl p-8 shadow-2xl border border-gray-200"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "mt-6 text-gray-700 font-semibold text-lg"
    }, "Loading data...")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-screen w-screen flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white border-b-2 border-gray-200 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 bg-blue-600 rounded-xl shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-6 h-6 text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-900 flex items-center gap-3"
  }, "Manual Data Entry", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-3 py-1 bg-gray-100 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700"
  }, selectedLocation)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm text-gray-600 mt-1 font-medium"
  }, "Enter consumption data for ", activeTab))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleUploadBill,
    className: "flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm font-semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm"
  }, "Upload Bill")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowCalendar(!showCalendar);
    },
    className: "flex items-center gap-3 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm border border-blue-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-5 h-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-semibold"
  }, formatDate(selectedDate)), isToday(selectedDate) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-2 py-0.5 bg-blue-700 rounded-md text-xs font-bold"
  }, "Today")), showCalendar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CalendarDropdown, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose,
    className: "p-2.5 rounded-lg hover:bg-gray-100 transition-all text-gray-600 border border-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-5 h-5"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-5 py-4 bg-white border-b border-gray-200 overflow-x-auto flex-shrink-0 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-3 items-center"
  }, kpiTabs.map(function (tab) {
    var TabIcon = kpiConfig[tab].icon;
    var isActive = activeTab === tab;
    var colorClass = kpiConfig[tab].color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: tab,
      onClick: function onClick() {
        return setActiveTab(tab);
      },
      className: "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 border-2 ".concat(isActive ? "bg-".concat(colorClass, "-600 text-white border-").concat(colorClass, "-700 shadow-md") : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabIcon, {
      className: "w-4 h-4"
    }), tab);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      setAddModalType("line");
      setShowAddModal(true);
    },
    className: "ml-auto px-5 py-2.5 rounded-lg text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition-all flex items-center gap-2 shadow-sm border-2 border-green-700"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4"
  }), "Add New Line"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 overflow-y-auto p-5 bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5"
  }, formData[activeTab] && Object.keys(formData[activeTab]).map(function (lineName) {
    var lineData = formData[activeTab][lineName];
    var isLineExpanded = expandedLines[lineName];
    var colorClass = kpiConfig[activeTab].color;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: lineName,
      className: "bg-white rounded-lg border-2 border-gray-200 overflow-hidden transition-all hover:shadow-lg ".concat(isLineExpanded ? "row-span-2" : "")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "bg-".concat(colorClass, "-600 p-4 border-b-2 border-").concat(colorClass, "-700")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-3 flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return handleLineToggle(lineName);
      },
      className: "p-1.5 rounded-md hover:bg-white/20 transition-all text-white"
    }, isLineExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-base font-bold text-white flex items-center gap-2"
    }, lineName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "inline-block mt-1 px-2.5 py-0.5 bg-white/20 rounded-md text-xs font-semibold text-white"
    }, lineData.machines.length, " machines"))), isLineExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        setAddModalType("machine");
        setSelectedLineForMachine(lineName);
        setShowAddModal(true);
      },
      className: "p-2 rounded-md bg-white/20 hover:bg-white/30 transition-all text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4"
    })))), isLineExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-4 space-y-3 max-h-[600px] overflow-y-auto"
    }, lineData.machines.map(function (machine, machineIndex) {
      var machineKey = "".concat(lineName, "-").concat(machineIndex);
      var isMachineEditing = editMode[machineKey];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: machineIndex,
        className: "rounded-lg border-2 transition-all ".concat(isMachineEditing ? "border-blue-500 bg-blue-50 shadow-md" : "border-gray-200 bg-white hover:shadow-sm")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between gap-2 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        value: machine.name,
        onChange: function onChange(e) {
          return handleInputChange(lineName, "name", e.target.value, machineIndex);
        },
        disabled: !isMachineEditing,
        className: "flex-1 px-3 py-2 rounded-lg text-sm font-bold border-2 transition-all ".concat(isMachineEditing ? "border-blue-500 bg-white shadow-sm" : "border-transparent bg-transparent text-gray-900")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-2"
      }, isMachineEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return handleSave(lineName, machineIndex);
        },
        className: "p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return handleEdit(lineName, machineIndex);
        },
        className: "p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return handleDeleteMachine(lineName, machineIndex);
        },
        className: "p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "grid grid-cols-1 gap-3"
      }, renderInputField(machine.consumption, function (val) {
        return handleInputChange(lineName, "consumption", val, machineIndex);
      }, "Consumption", isMachineEditing))));
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-5 border-t-2 border-gray-200 bg-white flex-shrink-0 shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-sm text-gray-600 font-semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-".concat(kpiConfig[activeTab].color, "-600 font-bold")
  }, activeTab), " \u2022", " ", Object.keys(formData[activeTab] || {}).length, " lines \u2022", " ", Object.values(formData[activeTab] || {}).reduce(function (sum, line) {
    return sum + line.machines.length;
  }, 0), " ", "machines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onClose,
    className: "px-6 py-2.5 rounded-lg bg-white text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-all border-2 border-gray-300"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSaveAll,
    disabled: saving,
    className: "px-8 py-2.5 rounded-lg bg-".concat(kpiConfig[activeTab].color, "-600 border-2 border-").concat(kpiConfig[activeTab].color, "-700 text-white text-sm font-bold hover:bg-").concat(kpiConfig[activeTab].color, "-700 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed")
  }, saving ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"
  }), "Saving...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-5 h-5"
  }), "Save All Changes")))))), showAddModal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddModal, null));
};
var CostScreener = function CostScreener() {
  var _getKpiDrillDownData$, _linesByLocation$sele;
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("production"),
    _useState38 = _slicedToArray(_useState37, 2),
    activeTab = _useState38[0],
    setActiveTab = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("forging"),
    _useState40 = _slicedToArray(_useState39, 2),
    activeProcess = _useState40[0],
    setActiveProcess = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Ranjangaon"),
    _useState42 = _slicedToArray(_useState41, 2),
    selectedLocation = _useState42[0],
    setSelectedLocation = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState44 = _slicedToArray(_useState43, 2),
    showCombinedView = _useState44[0],
    setShowCombinedView = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    showMiniModal = _useState46[0],
    setShowMiniModal = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("tonnage"),
    _useState48 = _slicedToArray(_useState47, 2),
    activeGraphTab = _useState48[0],
    setActiveGraphTab = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState50 = _slicedToArray(_useState49, 2),
    chartModalData = _useState50[0],
    setChartModalData = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      x: 0,
      y: 0
    }),
    _useState52 = _slicedToArray(_useState51, 2),
    chartModalPosition = _useState52[0],
    setChartModalPosition = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Insights"),
    _useState54 = _slicedToArray(_useState53, 2),
    activeChartModalTab = _useState54[0],
    setActiveChartModalTab = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("production"),
    _useState56 = _slicedToArray(_useState55, 2),
    globalTabView = _useState56[0],
    setGlobalTabView = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ocean"),
    _useState58 = _slicedToArray(_useState57, 2),
    selectedTheme = _useState58[0],
    setSelectedTheme = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    showThemeSelector = _useState60[0],
    setShowThemeSelector = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),
    _useState62 = _slicedToArray(_useState61, 2),
    currentPeriodIndex = _useState62[0],
    setCurrentPeriodIndex = _useState62[1]; // Default to Aug (index 4)
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState64 = _slicedToArray(_useState63, 2),
    expandedCards = _useState64[0],
    setExpandedCards = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    showPlantLines = _useState66[0],
    setShowPlantLines = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    showManualEntry = _useState68[0],
    setShowManualEntry = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState70 = _slicedToArray(_useState69, 2),
    plantLineData = _useState70[0],
    setPlantLineData = _useState70[1];
  // ✅ ADD THESE TWO NEW STATES
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(4),
    _useState72 = _slicedToArray(_useState71, 2),
    combinedCurrentPeriodIndex = _useState72[0],
    setCombinedCurrentPeriodIndex = _useState72[1]; // For combined chart
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState74 = _slicedToArray(_useState73, 2),
    cardCurrentPeriodIndex = _useState74[0],
    setCardCurrentPeriodIndex = _useState74[1]; // For individual cards - object
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      meta: {
        title: "Loading...",
        location: "Ranjangaon",
        lines: "",
        currency: "INR",
        unit: "per tonne",
        data_source: "",
        last_updated: "",
        total_kpis: 0
      },
      kpi_data: [],
      efficiency: {
        current: 85.2,
        target: 90.0,
        trend: "up",
        change: 2.3
      }
    }),
    _useState76 = _slicedToArray(_useState75, 2),
    realForgingData = _useState76[0],
    setRealForgingData = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState78 = _slicedToArray(_useState77, 2),
    isLoading = _useState78[0],
    setIsLoading = _useState78[1];
  var currentTheme = themes[selectedTheme];
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState80 = _slicedToArray(_useState79, 2),
    cardDetails = _useState80[0],
    setCardDetails = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    showCombinedValues = _useState82[0],
    setShowCombinedValues = _useState82[1];
  var themeSelectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState84 = _slicedToArray(_useState83, 2),
    selectedCategory = _useState84[0],
    setSelectedCategory = _useState84[1];
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState86 = _slicedToArray(_useState85, 2),
    drillDownLevel = _useState86[0],
    setDrillDownLevel = _useState86[1];
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState88 = _slicedToArray(_useState87, 2),
    drillDownPath = _useState88[0],
    setDrillDownPath = _useState88[1];
  var _useState89 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState90 = _slicedToArray(_useState89, 2),
    showDrillDownModal = _useState90[0],
    setShowDrillDownModal = _useState90[1];
  var _useState91 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState92 = _slicedToArray(_useState91, 2),
    selectedKpiForDrill = _useState92[0],
    setSelectedKpiForDrill = _useState92[1];
  var _useState93 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState94 = _slicedToArray(_useState93, 2),
    selectedLine = _useState94[0],
    setSelectedLine = _useState94[1]; // Add this state
  var _useState95 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState96 = _slicedToArray(_useState95, 2),
    dismissedAlerts = _useState96[0],
    setDismissedAlerts = _useState96[1];
  var _useState97 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState98 = _slicedToArray(_useState97, 2),
    alertsMinimized = _useState98[0],
    setAlertsMinimized = _useState98[1];
  var locationsByCategory = {
    All: [{
      name: "Ranjangaon",
      code: "RGN",
      percentage: -9,
      status: "active"
    }, {
      name: "Mundhwa",
      code: "MUN",
      percentage: -7,
      status: "active"
    }, {
      name: "Ranjangaon-2",
      code: "RGN-2",
      percentage: -7,
      status: "active"
    }, {
      name: "Baramati",
      code: "BRM",
      percentage: 13,
      status: "active"
    }, {
      name: "Chakan",
      code: "CHK",
      percentage: -7,
      status: "active"
    }],
    Forging: [{
      name: "Ranjangaon",
      code: "RGN",
      percentage: -9,
      status: "active"
    }, {
      name: "Mundhwa",
      code: "MUN",
      percentage: -7,
      status: "active"
    }, {
      name: "Ranjangaon-2",
      code: "RGN-2",
      percentage: -7,
      status: "active"
    }, {
      name: "Baramati",
      code: "BRM",
      percentage: 13,
      status: "active"
    }, {
      name: "Bhiwadi",
      code: "BWD",
      percentage: 13,
      status: "active"
    }, {
      name: "Gujrat",
      code: "GUT",
      percentage: 13,
      status: "active"
    }],
    Machining: [{
      name: "Chakan",
      code: "CHK",
      percentage: -7,
      status: "active"
    }, {
      name: "Khed",
      code: "KHD",
      percentage: -4,
      status: "active"
    }, {
      name: "Ambhethan-1",
      code: "AMB1",
      percentage: -3,
      status: "active"
    }, {
      name: "Ambhethan-2",
      code: "AMB2",
      percentage: -3,
      status: "active"
    }]
  };

  // Add this after locationsByCategory
  var linesByLocation = {
    Ranjangaon: [{
      name: "Line 1",
      code: "L1",
      status: "active",
      capacity: "85%"
    }, {
      name: "Line 2",
      code: "L2",
      status: "active",
      capacity: "92%"
    }, {
      name: "Line 3",
      code: "L3",
      status: "active",
      capacity: "78%"
    }, {
      name: "Line 4",
      code: "L4",
      status: "maintenance",
      capacity: "0%"
    }],
    Mundhwa: [{
      name: "Line A",
      code: "LA",
      status: "active",
      capacity: "88%"
    }, {
      name: "Line B",
      code: "LB",
      status: "active",
      capacity: "91%"
    }, {
      name: "Line C",
      code: "LC",
      status: "active",
      capacity: "82%"
    }],
    "Ranjangaon-2": [{
      name: "Line 5",
      code: "L5",
      status: "active",
      capacity: "90%"
    }, {
      name: "Line 6",
      code: "L6",
      status: "active",
      capacity: "87%"
    }],
    Baramati: [{
      name: "Line X",
      code: "LX",
      status: "active",
      capacity: "76%"
    }, {
      name: "Line Y",
      code: "LY",
      status: "active",
      capacity: "94%"
    }, {
      name: "Line Z",
      code: "LZ",
      status: "active",
      capacity: "89%"
    }],
    Chakan: [{
      name: "M-Line 1",
      code: "ML1",
      status: "active",
      capacity: "83%"
    }, {
      name: "M-Line 2",
      code: "ML2",
      status: "active",
      capacity: "91%"
    }],
    Aurangabad: [{
      name: "Line P",
      code: "LP",
      status: "active",
      capacity: "86%"
    }, {
      name: "Line Q",
      code: "LQ",
      status: "active",
      capacity: "79%"
    }]
  };
  var monthNames = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!realForgingData.efficiency) {
      setRealForgingData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          efficiency: {
            current: 85.2,
            target: 90.0,
            trend: "up",
            change: 2.3
          }
        });
      });
    }
  }, [realForgingData.efficiency]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsLoading(true);
    var url = "http://localhost:5000/api/forging-data/".concat(selectedLocation, "/forging");

    // console.log("Fetching from:", url);s
    // console.log("Selected Location:", selectedLocation);

    fetch(url).then(function (res) {
      // console.log("Response status:", res.status);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    }).then(function (data) {
      // console.log("Raw data received:", data);
      // console.log("KPI data length:", data?.kpi_data?.length);

      if (data && data.kpi_data) {
        var dataWithEfficiency = _objectSpread(_objectSpread({}, data), {}, {
          efficiency: data.efficiency || {
            current: 85.2,
            target: 90.0,
            trend: "up",
            change: 2.3
          }
        });

        // console.log("Setting data:", dataWithEfficiency);
        setRealForgingData(dataWithEfficiency);
      } else {
        // console.log("No kpi_data found");
      }
      setIsLoading(false);
    })["catch"](function (err) {
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handleClickOutside(event) {
      if (themeSelectorRef.current && !themeSelectorRef.current.contains(event.target)) {
        setShowThemeSelector(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowMiniModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showThemeSelector, showMiniModal]);
  var iconMap = {
    Consumables: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Power: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Fuel: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Labour: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Sub Contract": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Machine Hire Charges": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Repair & Maintenance": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Employee Cost": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Establishment Expenses": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Packing: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Freight: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    "Raw Material": Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  };
  var getCurrentData = function getCurrentData() {
    // console.log("getCurrentData called");
    // console.log("Tab:", activeTab);
    // console.log("Process:", activeProcess);
    // console.log("Location:", selectedLocation);
    // console.log("Data available:", realForgingData);

    if (activeTab === "production" || activeTab === "sale") {
      if (activeProcess === "forging") {
        // console.log("Conditions met, returning:", realForgingData?.kpi_data);
        return (realForgingData === null || realForgingData === void 0 ? void 0 : realForgingData.kpi_data) || [];
      }
    }
    // console.log("Conditions not met");
    return [];
  };

  // Function 1: Get drill-down data for each KPI
  var getKpiDrillDownData = function getKpiDrillDownData(kpiName) {
    var drillDownData = {
      Consumables: [{
        name: "Electrodes",
        cost: 2.45,
        percentage: 15.4,
        trend: [520, 548, 512, 523, 541],
        monthlyActual: [2.2, 2.35, 2.28, 2.32, 2.45],
        monthlyTarget: [2.1, 2.1, 2.15, 2.15, 2.2],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Grinding Wheels",
        cost: 3.12,
        percentage: 19.6,
        trend: [678, 695, 670, 688, 702],
        monthlyActual: [2.85, 2.98, 2.88, 2.95, 3.12],
        monthlyTarget: [2.8, 2.85, 2.85, 2.9, 2.95],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Cutting Tools",
        cost: 4.23,
        percentage: 26.6,
        trend: [890, 920, 885, 903, 915],
        monthlyActual: [3.95, 4.15, 4.02, 4.1, 4.23],
        monthlyTarget: [3.9, 3.95, 4.0, 4.05, 4.1],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Lubricants",
        cost: 2.87,
        percentage: 18.1,
        trend: [595, 612, 588, 599, 610],
        monthlyActual: [2.65, 2.78, 2.7, 2.75, 2.87],
        monthlyTarget: [2.6, 2.65, 2.7, 2.7, 2.75],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Safety Equipment",
        cost: 1.56,
        percentage: 9.8,
        trend: [325, 338, 318, 330, 340],
        monthlyActual: [1.42, 1.48, 1.45, 1.5, 1.56],
        monthlyTarget: [1.4, 1.45, 1.45, 1.5, 1.5],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Others",
        cost: 1.66,
        percentage: 10.5,
        trend: [348, 362, 345, 356, 368],
        monthlyActual: [1.52, 1.6, 1.55, 1.58, 1.66],
        monthlyTarget: [1.5, 1.55, 1.55, 1.6, 1.6],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      Power: [{
        name: "Furnace Power",
        cost: 12.45,
        percentage: 38.6,
        trend: [2845, 2773, 2747, 2888, 2814],
        monthlyActual: [11.8, 11.95, 12.1, 12.25, 12.45],
        monthlyTarget: [11.5, 11.6, 11.7, 11.8, 11.9],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Machine Power",
        cost: 8.9,
        percentage: 27.6,
        trend: [2028, 1979, 1957, 2057, 2004],
        monthlyActual: [8.45, 8.6, 8.72, 8.85, 8.9],
        monthlyTarget: [8.2, 8.3, 8.4, 8.5, 8.6],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Lighting & HVAC",
        cost: 5.67,
        percentage: 17.6,
        trend: [1294, 1261, 1248, 1312, 1279],
        monthlyActual: [5.35, 5.42, 5.5, 5.58, 5.67],
        monthlyTarget: [5.2, 5.25, 5.3, 5.35, 5.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Compressed Air",
        cost: 3.23,
        percentage: 10.0,
        trend: [737, 718, 712, 748, 729],
        monthlyActual: [3.02, 3.08, 3.15, 3.2, 3.23],
        monthlyTarget: [2.95, 3.0, 3.05, 3.1, 3.15],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Other Utilities",
        cost: 2.0,
        percentage: 6.2,
        trend: [470, 452, 442, 472, 464],
        monthlyActual: [1.85, 1.88, 1.92, 1.96, 2.0],
        monthlyTarget: [1.8, 1.85, 1.9, 1.9, 1.95],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      Fuel: [{
        name: "LPG",
        cost: 5.89,
        percentage: 42.9,
        trend: [1346, 1435, 1298, 1282, 1183],
        monthlyActual: [6.15, 6.35, 6.02, 5.95, 5.89],
        monthlyTarget: [5.8, 5.85, 5.9, 5.85, 5.8],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Natural Gas",
        cost: 4.12,
        percentage: 30.0,
        trend: [941, 1003, 908, 897, 827],
        monthlyActual: [4.3, 4.42, 4.25, 4.18, 4.12],
        monthlyTarget: [4.0, 4.05, 4.1, 4.1, 4.05],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Diesel",
        cost: 2.34,
        percentage: 17.1,
        trend: [535, 572, 517, 511, 471],
        monthlyActual: [2.45, 2.52, 2.42, 2.38, 2.34],
        monthlyTarget: [2.3, 2.35, 2.35, 2.35, 2.3],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Coal",
        cost: 1.37,
        percentage: 10.0,
        trend: [314, 335, 302, 299, 275],
        monthlyActual: [1.43, 1.48, 1.4, 1.38, 1.37],
        monthlyTarget: [1.35, 1.38, 1.4, 1.38, 1.35],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      Labour: [{
        name: "Direct Labour",
        cost: 5.67,
        percentage: 57.1,
        trend: [1297, 1496, 1149, 1276, 1225],
        monthlyActual: [5.45, 5.52, 5.58, 5.62, 5.67],
        monthlyTarget: [5.3, 5.35, 5.4, 5.45, 5.5],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Indirect Labour",
        cost: 2.34,
        percentage: 23.6,
        trend: [535, 618, 475, 527, 506],
        monthlyActual: [2.18, 2.22, 2.26, 2.3, 2.34],
        monthlyTarget: [2.1, 2.15, 2.2, 2.2, 2.25],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Overtime",
        cost: 1.23,
        percentage: 12.4,
        trend: [281, 323, 248, 276, 265],
        monthlyActual: [1.15, 1.18, 1.2, 1.22, 1.23],
        monthlyTarget: [1.1, 1.12, 1.15, 1.18, 1.2],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Contract Labour",
        cost: 0.69,
        percentage: 6.9,
        trend: [157, 182, 140, 156, 150],
        monthlyActual: [0.65, 0.66, 0.67, 0.68, 0.69],
        monthlyTarget: [0.62, 0.64, 0.65, 0.66, 0.68],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      "Sub Contract": [{
        name: "Heat Treatment",
        cost: 12.45,
        percentage: 34.7,
        trend: [2849, 2737, 2436, 2624, 2624],
        monthlyActual: [11.95, 12.05, 12.15, 12.3, 12.45],
        monthlyTarget: [11.5, 11.7, 11.9, 12.0, 12.2],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Surface Finishing",
        cost: 8.9,
        percentage: 24.8,
        trend: [2034, 1956, 1740, 1875, 1875],
        monthlyActual: [8.55, 8.65, 8.72, 8.82, 8.9],
        monthlyTarget: [8.3, 8.4, 8.5, 8.6, 8.7],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Testing & Inspection",
        cost: 6.78,
        percentage: 18.9,
        trend: [1549, 1490, 1326, 1429, 1429],
        monthlyActual: [6.45, 6.52, 6.6, 6.69, 6.78],
        monthlyTarget: [6.2, 6.3, 6.4, 6.5, 6.6],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Special Processes",
        cost: 4.56,
        percentage: 12.7,
        trend: [1042, 1002, 891, 960, 960],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Logistics Support",
        cost: 3.21,
        percentage: 8.9,
        trend: [734, 706, 628, 677, 677],
        monthlyActual: [3.05, 3.08, 3.12, 3.17, 3.21],
        monthlyTarget: [2.95, 3.0, 3.05, 3.1, 3.15],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      "Machine Hire Charges": [{
        name: "Press Hire",
        cost: 1.12,
        percentage: 40.4,
        trend: [256, 206, 347, 315, 315],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "CNC Machines",
        cost: 0.89,
        percentage: 32.1,
        trend: [203, 164, 275, 250, 250],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Material Handling",
        cost: 0.45,
        percentage: 16.2,
        trend: [103, 83, 140, 127, 127],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Other Equipment",
        cost: 0.31,
        percentage: 11.3,
        trend: [70, 57, 96, 87, 87],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      "Repair & Maintenance": [{
        name: "Preventive Maintenance",
        cost: 2.45,
        percentage: 39.0,
        trend: [560, 1509, 1301, 843, 843],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Breakdown Repairs",
        cost: 1.89,
        percentage: 30.1,
        trend: [432, 1165, 1004, 651, 651],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Spare Parts",
        cost: 1.23,
        percentage: 19.6,
        trend: [281, 759, 654, 424, 424],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "External Services",
        cost: 0.71,
        percentage: 11.3,
        trend: [163, 438, 378, 245, 245],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      "Employee Cost": [{
        name: "Salaries",
        cost: 18.23,
        percentage: 72.0,
        trend: [4167, 4144, 3779, 4012, 4012],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Benefits",
        cost: 4.56,
        percentage: 18.0,
        trend: [1042, 1036, 944, 1003, 1003],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Training",
        cost: 1.52,
        percentage: 6.0,
        trend: [347, 345, 315, 334, 334],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Other Costs",
        cost: 1.01,
        percentage: 4.0,
        trend: [232, 231, 210, 223, 223],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      "Establishment Expenses": [{
        name: "Rent & Lease",
        cost: 2.06,
        percentage: 40.0,
        trend: [471, 515, 512, 524, 524],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Insurance",
        cost: 1.54,
        percentage: 30.0,
        trend: [353, 386, 384, 393, 393],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Communication",
        cost: 0.77,
        percentage: 15.0,
        trend: [177, 193, 192, 197, 197],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Office Supplies",
        cost: 0.78,
        percentage: 15.0,
        trend: [176, 193, 193, 195, 195],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      Packing: [{
        name: "Packaging Material",
        cost: 3.67,
        percentage: 55.0,
        trend: [838, 901, 1473, 1322, 1097],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Packing Labour",
        cost: 1.87,
        percentage: 28.0,
        trend: [427, 459, 750, 673, 559],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Equipment",
        cost: 0.8,
        percentage: 12.0,
        trend: [183, 197, 321, 289, 239],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }, {
        name: "Other Costs",
        cost: 0.33,
        percentage: 5.0,
        trend: [76, 82, 134, 120, 99],
        monthlyActual: [4.35, 4.4, 4.45, 4.5, 4.56],
        monthlyTarget: [4.2, 4.25, 4.3, 4.35, 4.4],
        months: ["Apr", "May", "Jun", "Jul", "Aug"]
      }],
      Freight: [{
        name: "Outbound Freight",
        cost: 99.7,
        percentage: 60.0,
        trend: [2269, 2605, 2395, 1903, 1899]
      }, {
        name: "Inbound Freight",
        cost: 49.85,
        percentage: 30.0,
        trend: [1134, 1303, 1198, 952, 950]
      }, {
        name: "Handling Charges",
        cost: 11.63,
        percentage: 7.0,
        trend: [265, 304, 279, 222, 222]
      }, {
        name: "Insurance & Other",
        cost: 4.99,
        percentage: 3.0,
        trend: [113, 130, 120, 95, 94]
      }],
      "Raw Material": [{
        name: "Steel Billets",
        cost: 150.32,
        percentage: 69.8,
        trend: [68547, 70205, 68067, 70633, 63431]
      }, {
        name: "Alloy Elements",
        cost: 43.09,
        percentage: 20.0,
        trend: [20236, 20116, 19501, 20239, 18175]
      }, {
        name: "Scrap & Rework",
        cost: 15.09,
        percentage: 7.0,
        trend: [7073, 7041, 6825, 7084, 6361]
      }, {
        name: "Quality Loss",
        cost: 6.95,
        percentage: 3.2,
        trend: [3326, 3219, 3113, 3237, 2909]
      }]
    };
    return drillDownData[kpiName] || [];
  };

  // Function 2: Handle KPI card click
  var handleKpiDrillDown = function handleKpiDrillDown(kpi) {
    setSelectedKpiForDrill(kpi);
    setDrillDownPath([kpi.kpiName]);
    setDrillDownLevel(1);
    setShowDrillDownModal(true);
  };

  // Function 3: Handle clicking on sub-item
  var handleDrillDownItemClick = function handleDrillDownItemClick(item, kpiName) {
    setDrillDownPath([].concat(_toConsumableArray(drillDownPath), [item.name]));
    setDrillDownLevel(2);
  };

  // Function 4: Handle back button in modal
  var handleDrillDownBack = function handleDrillDownBack() {
    if (drillDownLevel > 1) {
      var newPath = _toConsumableArray(drillDownPath);
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
  var buildChartData = function buildChartData(kpi) {
    var _kpi$target_percentag, _kpi$production_perce2;
    var tabType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "production";
    if (!kpi || !kpi.trend) return [];
    var avgTrendValue = kpi.trend.reduce(function (a, b) {
      return a + b;
    }, 0) / kpi.trend.length;
    var targetValue = kpi.budget_per_tonne && kpi.actual_per_tonne ? avgTrendValue * (kpi.budget_per_tonne / kpi.actual_per_tonne) : (avgTrendValue || 0) * 1.05;

    // ✅ NEW: Calculate SINGLE average target percentage for solid line
    var avgTargetPercent = ((_kpi$target_percentag = kpi.target_percentage) === null || _kpi$target_percentag === void 0 ? void 0 : _kpi$target_percentag.length) > 0 ? kpi.target_percentage.reduce(function (a, b) {
      return a + b;
    }, 0) / kpi.target_percentage.length : null;

    // console.log(`[${kpi.kpiName}] Building chart data (${tabType} tab)`);
    // console.log(`  - Trend length: ${kpi.trend.length}`);

    // console.log(`  - Target %: ${kpi.target_percentage?.length || 0} values`);
    // console.log(`  - Avg Target %: ${avgTargetPercent?.toFixed(2) || "null"}`); // NEW log

    var historicalData = kpi.trend.map(function (value, index) {
      var _kpi$production_perce;
      var displayValue = value;
      var displayTarget = targetValue;
      if (tabType === "sale") {
        var saleReduction = 0.93 + Math.random() * 0.04;
        displayValue = value * saleReduction;
        displayTarget = targetValue * 0.95;
      }
      var productionPercent = ((_kpi$production_perce = kpi.production_percentage) === null || _kpi$production_perce === void 0 ? void 0 : _kpi$production_perce[index]) || null;

      // ✅ CHANGED: Use single average target for ALL months (solid line)
      var productionTarget = avgTargetPercent;
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
      var isLastPoint = index === kpi.trend.length - 1;
      return {
        month: monthNames[index] || "M".concat(index + 1),
        actual: parseFloat(displayValue.toFixed(2)),
        prediction: isLastPoint ? parseFloat(displayValue.toFixed(2)) : null,
        target: parseFloat((displayTarget || 0).toFixed(2)),
        productionPercentPredicted: isLastPoint ? productionPercent : null,
        productionPercent: productionPercent,
        productionTarget: productionTarget,
        // ✅ Now same value for all months
        isHistorical: true,
        isHighlighted: isLastPoint,
        variance: displayValue - displayTarget
      };
    });

    // Prediction data
    var lastValue = kpi.trend[kpi.trend.length - 1];
    var prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
    var costDirection = lastValue >= prevValue ? 1 : -1;
    var monthIndex = kpi.trend.length % 12;
    var stepChange = Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;
    var predictedValue = lastValue + costDirection * stepChange;
    var predTarget = targetValue;
    if (tabType === "sale") {
      predictedValue = predictedValue * 0.95;
      predTarget = targetValue * 0.95;
    }
    var percentLength = ((_kpi$production_perce2 = kpi.production_percentage) === null || _kpi$production_perce2 === void 0 ? void 0 : _kpi$production_perce2.length) || 0;
    var lastPercent = percentLength > 0 ? kpi.production_percentage[percentLength - 1] : null;

    // ✅ CHANGED: Use average target for prediction too
    var lastPercentTarget = avgTargetPercent;
    if (tabType === "sale") {
      if (lastPercent) lastPercent = lastPercent * 0.95;
      if (lastPercentTarget) lastPercentTarget = lastPercentTarget * 0.93;
    }
    var predictionData = [{
      month: monthNames[monthIndex] || "M".concat(monthIndex + 1),
      actual: null,
      prediction: parseFloat(predictedValue.toFixed(2)),
      target: parseFloat(predTarget.toFixed(2)),
      targetForCheck: predTarget,
      productionPercent: null,
      productionPercentPredicted: lastPercent,
      productionTarget: lastPercentTarget,
      // ✅ Same average value
      productionTargetForCheck: lastPercentTarget,
      isHistorical: false,
      isHighlighted: false,
      variance: predictedValue - predTarget
    }];
    return [].concat(_toConsumableArray(historicalData), predictionData);
  };
  var getPlantLineData = function getPlantLineData(location) {
    var plantLines = {
      Ranjangaon: ["Line 1", "Line 2", "Line 3", "Line 4"],
      Mundhwa: ["Line A", "Line B", "Line C"],
      "Ranjangaon-2": ["Line X", "Line Y", "Line Z"],
      Baramati: ["Line P", "Line Q"],
      Chakan: ["Line M1", "Line M2", "Line M3"],
      Aurangabad: ["Line T1", "Line T2"]
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
  var renderCustomLabel = function renderCustomLabel(props, theme) {
    var x = props.x,
      y = props.y,
      value = props.value,
      index = props.index,
      viewBox = props.viewBox;
    if (!value || value === null) return null;

    // Calculate position - show above for first half, below for second half
    var midPoint = (viewBox.width || 400) / 2;
    var showAbove = x < midPoint;
    var offsetY = showAbove ? -12 : 12;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: x,
      y: y + offsetY,
      fill: theme.primaryText,
      fontSize: "10",
      fontWeight: "600",
      textAnchor: "middle",
      className: "transition-all duration-200"
    }, typeof value === "number" ? value % 1 === 0 ? value : value.toFixed(1) : value);
  };
  var renderCombinedChart = function renderCombinedChart() {
    var _kpis$, _kpis$$trend;
    var kpis = getCurrentData();
    if (!kpis || kpis.length === 0) return null;
    var dataLength = ((_kpis$ = kpis[0]) === null || _kpis$ === void 0 ? void 0 : (_kpis$$trend = _kpis$.trend) === null || _kpis$$trend === void 0 ? void 0 : _kpis$$trend.length) || 5;
    var displayMonths = monthNames.slice(0, dataLength);

    // Calculate monthly totals
    var monthlyTotals = displayMonths.map(function (m, idx) {
      var total = 0;
      kpis.forEach(function (k) {
        var _arr$idx;
        var arr = Array.isArray(k.trend) ? k.trend : [];
        total += (_arr$idx = arr[idx]) !== null && _arr$idx !== void 0 ? _arr$idx : 0;
      });
      return total;
    });
    var manualPercentages = {
      0: 20.41,
      1: 21.46,
      2: 20.97,
      3: 20.17,
      4: 21.34
    };
    var EBITDAActualData = {
      0: 16.82,
      1: 15.61,
      2: 13.1,
      3: 16.26,
      4: 16.54
    };
    var EBITDABudgetData = {
      0: 18.78,
      1: 18.89,
      2: 18.93,
      3: 19.15,
      4: 19.2
    };
    var PercentTargetData = {
      0: 20,
      1: 20,
      2: 20,
      3: 20,
      4: 20
    };
    var baseData = displayMonths.map(function (m, idx) {
      var total = monthlyTotals[idx];
      var percent = manualPercentages[idx] || 20 + idx * 0.15;
      var EBITDAActual = EBITDAActualData[idx] || null;
      var EBITDABudget = EBITDABudgetData[idx] || null;
      var PercentTarget = PercentTargetData[idx] || null;
      if (idx < dataLength - 2) {
        return {
          month: m,
          TotalActual: parseFloat(total.toFixed(2)),
          TotalPredicted: null,
          EBITDAActual: EBITDAActual,
          EBITDABudget: EBITDABudget,
          PercentActual: parseFloat(percent.toFixed(2)),
          PercentPredicted: null,
          PercentTarget: PercentTarget
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
          PercentTarget: PercentTarget
        };
      } else {
        var prevTotal = monthlyTotals[idx - 1];
        var prevPrevTotal = monthlyTotals[idx - 2] || prevTotal;
        var trend = prevTotal > prevPrevTotal ? 1.03 : 0.97;
        var predictedTotal = prevTotal * trend;
        var predictedPercent = percent + 0.3;
        return {
          month: m,
          TotalActual: null,
          TotalPredicted: parseFloat(predictedTotal.toFixed(2)),
          EBITDAActual: null,
          EBITDABudget: EBITDABudget,
          PercentActual: null,
          PercentPredicted: parseFloat(predictedPercent.toFixed(2)),
          PercentTarget: PercentTarget
        };
      }
    });
    var combinedData = baseData;

    // Calculate dynamic target
    var actualTotals = combinedData.map(function (d) {
      return d.TotalActual;
    }).filter(function (v) {
      return v !== null && v !== undefined && v > 0;
    });
    var dynamicTarget = null;
    if (actualTotals.length > 0) {
      var avgActual = actualTotals.reduce(function (a, b) {
        return a + b;
      }, 0) / actualTotals.length;
      dynamicTarget = avgActual * 1.05;
    }
    var percentTargets = combinedData.map(function (d) {
      var _d$PercentTarget;
      return (_d$PercentTarget = d.PercentTarget) !== null && _d$PercentTarget !== void 0 ? _d$PercentTarget : null;
    }).filter(function (v) {
      return v !== null && v !== undefined;
    });
    var avgPercentTarget = percentTargets.length > 0 ? (percentTargets.reduce(function (a, b) {
      return a + b;
    }, 0) / percentTargets.length).toFixed(2) : 20;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed top-4 right-4 z-50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative",
      ref: themeSelectorRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowThemeSelector(!showThemeSelector);
      },
      className: "p-3 rounded-full ".concat(currentTheme.cardBg, " ").concat(currentTheme.border, " border ").concat(currentTheme.shadow, " transition-all duration-300 hover:scale-110 group relative overflow-hidden")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-6 h-6 relative z-10"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium ".concat(currentTheme.cardBg, " ").concat(currentTheme.border, " border rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none")
    }, currentTheme.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"
    })), showThemeSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute right-0 mt-2 w-64 ".concat(currentTheme.cardBg, " rounded-xl ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border overflow-hidden animate-in slide-in-from-top-2 duration-200")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-3 ".concat(currentTheme.primaryText, " font-semibold text-sm border-b ").concat(currentTheme.border, " bg-gradient-to-r ").concat(currentTheme.buttonBg)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4"
    }), "Choose Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "max-h-96 overflow-y-auto"
    }, Object.entries(themes).map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 2),
        key = _ref10[0],
        theme = _ref10[1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        key: key,
        onClick: function onClick() {
          setSelectedTheme(key);
          setShowThemeSelector(false);
        },
        className: "w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ".concat(selectedTheme === key ? "bg-gradient-to-r ".concat(theme.buttonBg) : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-8 h-8 rounded-lg bg-gradient-to-br ".concat(theme.accentGradient, " shadow-sm")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-sm font-medium ".concat(theme.primaryText)
      }, theme.name)), selectedTheme === key && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4 ".concat(theme.primaryText, " animate-in zoom-in duration-200")
      }));
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed top-4 right-20 z-50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowManualEntry(true);
      },
      className: "px-4 py-2 rounded-full ".concat(currentTheme.cardBg, " ").concat(currentTheme.border, " border ").concat(currentTheme.shadow, " transition-all duration-300 hover:scale-110 group flex items-center gap-2")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.chartBg, " rounded-2xl ").concat(currentTheme.shadow, " p-4 ").concat(currentTheme.border, " border transition-all duration-300")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-sm font-bold ".concat(currentTheme.primaryText)
    }, "Manufacturing Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex gap-2 items-center"
    }, ["tonnage", "percentage"].map(function (tab) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        key: tab,
        onClick: function onClick() {
          return setActiveGraphTab(tab);
        },
        className: "px-3 py-1 rounded-lg text-xs font-medium transition-all ".concat(activeGraphTab === tab ? "".concat(currentTheme.buttonBg, " ").concat(currentTheme.primaryText, " font-bold") : selectedTheme === "neon" || selectedTheme === "midnight" ? "bg-gray-800 ".concat(currentTheme.secondaryText, " hover:bg-gray-700") : "bg-gray-100 ".concat(currentTheme.secondaryText, " hover:bg-gray-200"))
      }, tab === "tonnage" ? "Cost/Ton" : "Production %");
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowCombinedValues(!showCombinedValues);
      },
      className: "px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ".concat(showCombinedValues ? "bg-gradient-to-r ".concat(currentTheme.accentGradient, " text-white font-bold shadow-md") : selectedTheme === "neon" || selectedTheme === "midnight" ? "bg-gray-800 ".concat(currentTheme.secondaryText, " hover:bg-gray-700") : "bg-gray-100 ".concat(currentTheme.secondaryText, " hover:bg-gray-200")),
      title: showCombinedValues ? "Hide Values" : "Show Values"
    }, showCombinedValues ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-3 h-3",
      fill: "currentColor",
      viewBox: "0 0 20 20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
      clipRule: "evenodd"
    })), "Values") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-3 h-3",
      fill: "currentColor",
      viewBox: "0 0 20 20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",
      clipRule: "evenodd"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
    })), "Values")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: combinedData,
      margin: {
        top: 20,
        right: 50,
        left: 10,
        bottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      stroke: currentTheme.gridColor
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      dataKey: "month",
      tick: {
        fontSize: 12,
        fill: currentTheme.axisTextColor || "#1f2937"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      tick: {
        fontSize: 10,
        fill: currentTheme.axisTextColor || "#1f2937"
      },
      label: {
        value: activeGraphTab === "tonnage" ? "Manufacturing Cost (₹)" : "% of Production",
        offset: -5,
        style: {
          fontSize: 11,
          fontWeight: 500
        },
        angle: -90,
        position: "insideLeft",
        fill: currentTheme.axisTextColor || "#1f2937"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
        theme: currentTheme
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      verticalAlign: "top",
      height: 30,
      wrapperStyle: {
        fontSize: 13,
        fontWeight: 500
      },
      iconType: "line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      x: displayMonths[dataLength - 2],
      stroke: currentTheme.chartColors.predictedLine,
      label: {
        value: "Predicted →",
        position: "insideTopRight",
        fontSize: 11,
        fill: currentTheme.primaryText
      }
    }), activeGraphTab === "tonnage" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, dynamicTarget && dynamicTarget > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      y: dynamicTarget,
      stroke: currentTheme.chartColors.targetLine,
      strokeWidth: 2,
      label: {
        value: "Target: \u20B9".concat(Math.round(dynamicTarget).toLocaleString()),
        position: "right",
        fill: currentTheme.chartColors.targetLine,
        fontSize: 12,
        fontWeight: "bold"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "TotalActual",
      stroke: currentTheme.chartColors.actualLine,
      strokeWidth: 2,
      name: "Actual Cost",
      connectNulls: false,
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: function dot(props) {
        var cx = props.cx,
          cy = props.cy,
          payload = props.payload,
          index = props.index;
        if ((payload === null || payload === void 0 ? void 0 : payload.TotalActual) == null) return null;
        var isCurrentPeriod = index === combinedCurrentPeriodIndex;
        var monthTarget = dynamicTarget || 0;
        var dotColor = payload.TotalActual > monthTarget ? "#dc2626" : "#16a34a";
        if (isCurrentPeriod) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 12,
            fill: dotColor,
            opacity: 0.25,
            style: {
              cursor: "pointer",
              pointerEvents: "auto"
            },
            className: "transition-opacity duration-200 hover:opacity-40",
            onMouseDown: function onMouseDown(e) {
              e.stopPropagation();
              var startX = e.clientX;
              var startY = e.clientY;
              var startTime = Date.now();
              var hasMoved = false;
              var circleElement = e.currentTarget;
              var svgElement = circleElement.closest("svg");
              var svgRect = svgElement === null || svgElement === void 0 ? void 0 : svgElement.getBoundingClientRect();
              var chartWidth = (svgRect === null || svgRect === void 0 ? void 0 : svgRect.width) || 0;
              var pointSpacing = chartWidth / (combinedData.length - 1);
              var handleMouseMove = function handleMouseMove(moveEvent) {
                var deltaX = moveEvent.clientX - startX;
                var deltaY = moveEvent.clientY - startY;
                var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (distance > 15 && Date.now() - startTime > 100) {
                  hasMoved = true;
                  if (circleElement) {
                    circleElement.style.cursor = "grabbing";
                  }
                  var indexChange = Math.round(deltaX / pointSpacing);
                  var newIndex = Math.max(0, Math.min(combinedData.length - 2, index + indexChange));
                  setCombinedCurrentPeriodIndex(newIndex);
                }
              };
              var handleMouseUp = function handleMouseUp() {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                if (circleElement) {
                  circleElement.style.cursor = "pointer";
                }
                var clickDuration = Date.now() - startTime;
                if (!hasMoved && clickDuration < 250 && svgRect) {
                  setChartModalData(_objectSpread(_objectSpread({}, payload), {}, {
                    kpiName: "Manufacturing Cost"
                  }));
                  setChartModalPosition({
                    x: svgRect.left + cx,
                    y: svgRect.top + cy - 150
                  });
                }
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 5,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 2,
            style: {
              pointerEvents: "none"
            }
          }));
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: cx,
          cy: cy,
          r: 4,
          fill: dotColor,
          stroke: "white",
          strokeWidth: 2
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "TotalPredicted",
      stroke: currentTheme.chartColors.predictedLine,
      strokeWidth: 2,
      name: "Predicted Cost",
      connectNulls: false,
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: function dot(props) {
        var cx = props.cx,
          cy = props.cy,
          payload = props.payload;
        if (payload.TotalPredicted === null) return null;
        var monthTarget = dynamicTarget || 0;
        var dotColor = payload.TotalPredicted > monthTarget ? "#dc2626" : "#16a34a";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: cx,
          cy: cy,
          r: 4,
          fill: dotColor,
          stroke: "white",
          strokeWidth: 2
        });
      }
    }), " "), activeGraphTab === "percentage" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, avgPercentTarget && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      y: parseFloat(avgPercentTarget),
      stroke: currentTheme.chartColors.targetLine,
      strokeWidth: 2,
      label: {
        value: "Target: ".concat(avgPercentTarget, "%"),
        position: "right",
        fill: currentTheme.chartColors.targetLine,
        fontSize: 12,
        fontWeight: "bold"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "PercentActual",
      stroke: currentTheme.chartColors.percentActual,
      strokeWidth: 2,
      name: "Actual %",
      connectNulls: false,
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: function dot(props) {
        var cx = props.cx,
          cy = props.cy,
          payload = props.payload,
          index = props.index;
        if ((payload === null || payload === void 0 ? void 0 : payload.PercentActual) == null) return null;
        var isCurrentPeriod = index === combinedCurrentPeriodIndex;
        var monthTarget = parseFloat(avgPercentTarget) || 0;
        var dotColor = payload.PercentActual > monthTarget ? "#dc2626" : "#16a34a";
        if (isCurrentPeriod) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 12,
            fill: dotColor,
            opacity: 0.25,
            style: {
              cursor: "pointer",
              pointerEvents: "auto"
            },
            className: "transition-opacity duration-200 hover:opacity-40",
            onMouseDown: function onMouseDown(e) {
              e.stopPropagation();
              var startX = e.clientX;
              var startY = e.clientY;
              var startTime = Date.now();
              var hasMoved = false;
              var circleElement = e.currentTarget;
              var svgElement = circleElement.closest("svg");
              var svgRect = svgElement === null || svgElement === void 0 ? void 0 : svgElement.getBoundingClientRect();
              var chartWidth = (svgRect === null || svgRect === void 0 ? void 0 : svgRect.width) || 0;
              var pointSpacing = chartWidth / (combinedData.length - 1);
              var handleMouseMove = function handleMouseMove(moveEvent) {
                var deltaX = moveEvent.clientX - startX;
                var deltaY = moveEvent.clientY - startY;
                var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (distance > 15 && Date.now() - startTime > 100) {
                  hasMoved = true;
                  if (circleElement) {
                    circleElement.style.cursor = "grabbing";
                  }
                  var indexChange = Math.round(deltaX / pointSpacing);
                  var newIndex = Math.max(0, Math.min(combinedData.length - 2, index + indexChange));
                  setCombinedCurrentPeriodIndex(newIndex);
                }
              };
              var handleMouseUp = function handleMouseUp() {
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                if (circleElement) {
                  circleElement.style.cursor = "pointer";
                }
                var clickDuration = Date.now() - startTime;
                if (!hasMoved && clickDuration < 250 && svgRect) {
                  setChartModalData(_objectSpread(_objectSpread({}, payload), {}, {
                    kpiName: "Production Percentage"
                  }));
                  setChartModalPosition({
                    x: svgRect.left + cx,
                    y: svgRect.top + cy - 150
                  });
                }
              };
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 5,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 2,
            style: {
              pointerEvents: "none"
            }
          }));
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: cx,
          cy: cy,
          r: 4,
          fill: dotColor,
          stroke: "white",
          strokeWidth: 2
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "PercentPredicted",
      stroke: currentTheme.chartColors.percentPredicted,
      strokeWidth: 2,
      strokeDasharray: "6 4",
      name: "Predicted %",
      connectNulls: false,
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: function dot(props) {
        var cx = props.cx,
          cy = props.cy,
          payload = props.payload;
        if (payload.PercentPredicted === null) return null;
        var monthTarget = parseFloat(avgPercentTarget) || 0;
        var dotColor = payload.PercentPredicted > monthTarget ? "#dc2626" : "#16a34a";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
          cx: cx,
          cy: cy,
          r: 4,
          fill: dotColor,
          stroke: "white",
          strokeWidth: 2
        });
      }
    })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.chartBg, " rounded-2xl ").concat(currentTheme.shadow, " p-4 ").concat(currentTheme.border, " border transition-all duration-300")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-sm font-bold ".concat(currentTheme.primaryText)
    }, "EBITDA Performance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-3 h-3 rounded-full",
      style: {
        backgroundColor: currentTheme.chartColors.ebitdaActual
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs ".concat(currentTheme.secondaryText)
    }, "Actual")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-3 h-3 rounded-full",
      style: {
        backgroundColor: currentTheme.chartColors.ebitdaBudget
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs ".concat(currentTheme.secondaryText)
    }, "Budget")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: combinedData,
      margin: {
        top: 20,
        right: 50,
        left: 10,
        bottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      stroke: currentTheme.gridColor
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      dataKey: "month",
      tick: {
        fontSize: 12,
        fill: currentTheme.primaryText
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      tick: {
        fontSize: 10,
        fill: currentTheme.primaryText
      },
      label: {
        value: "EBITDA %",
        offset: -5,
        style: {
          fontSize: 11,
          fontWeight: 500
        },
        angle: -90,
        position: "insideLeft",
        fill: currentTheme.primaryText
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
        theme: currentTheme
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      verticalAlign: "top",
      height: 30,
      wrapperStyle: {
        fontSize: 13,
        fontWeight: 500
      },
      iconType: "line"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      x: displayMonths[dataLength - 2],
      stroke: currentTheme.chartColors.predictedLine,
      label: {
        value: "Predicted →",
        position: "insideTopRight",
        fontSize: 11,
        fill: currentTheme.primaryText
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "EBITDABudget",
      stroke: currentTheme.chartColors.ebitdaBudget,
      strokeWidth: 2,
      name: "EBITDA Budget %",
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: {
        r: 4
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "EBITDAActual",
      stroke: currentTheme.chartColors.ebitdaActual,
      strokeWidth: 2,
      name: "EBITDA Actual %",
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: {
        r: 4
      }
    })))))));
  };
  var renderCardsView = function renderCardsView() {
    var data = getCurrentData();
    if (!data || data.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(currentTheme.cardBg, " rounded-2xl ").concat(currentTheme.shadow, " p-12 text-center")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-16 h-16 ".concat(currentTheme.mutedText, " mx-auto mb-4")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "text-lg font-semibold ".concat(currentTheme.secondaryText, " mb-2")
      }, "No Data Available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "".concat(currentTheme.mutedText, " mb-4")
      }, "Only Forging process data is available for Ranjangaon location."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-xs ".concat(currentTheme.mutedText, " bg-gray-50 rounded-lg p-3 inline-block")
      }, "Source: ", realForgingData.meta.data_source));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative min-h-96 rounded-2xl overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-br ".concat(currentTheme.cardGradient, " transition-all duration-500")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-tr ".concat(currentTheme.dotPattern, " opacity-50 transition-all duration-500")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative z-10 p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
    }, data.map(function (kpi, idx) {
      var _cardCurrentPeriodInd, _chartModalData$varia;
      var IconComponent = iconMap[kpi.kpiName] || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
      // const currentCardTab = cardTabs[kpi.kpiName] || "production";

      // Pass the tab type to buildChartData
      // const chartData = buildChartData(kpi, currentCardTab);
      var chartData = buildChartData(kpi, globalTabView);
      var targetNums = chartData.map(function (d) {
        var _ref11, _d$target;
        return (_ref11 = (_d$target = d.target) !== null && _d$target !== void 0 ? _d$target : d.targetForCheck) !== null && _ref11 !== void 0 ? _ref11 : null;
      }).filter(function (v) {
        return v !== null && v !== undefined && !isNaN(v);
      });
      var avgTarget = targetNums.length > 0 ? Math.round(targetNums.reduce(function (a, b) {
        return a + b;
      }, 0) / targetNums.length) : 0; // fallback so line always shows

      var thisCardPeriodIndex = (_cardCurrentPeriodInd = cardCurrentPeriodIndex[kpi.kpiName]) !== null && _cardCurrentPeriodInd !== void 0 ? _cardCurrentPeriodInd : 4;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "".concat(kpi.kpiName, "-").concat(idx),
        className: "".concat(currentTheme.cardBg, " backdrop-blur-sm rounded-2xl ").concat(currentTheme.shadow, " ").concat(currentTheme.hoverGlow, " transition-all duration-300 p-4 ").concat(currentTheme.border, " border cursor-pointer group relative"),
        onClick: function onClick() {
          setExpandedCards(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, !prev[kpi.kpiName]));
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-start justify-between mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-8 h-8 rounded-lg bg-gradient-to-br ".concat(currentTheme.accentGradient, " flex items-center justify-center")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
        className: "w-4 h-4 text-white"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-xs font-bold ".concat(currentTheme.primaryText, " leading-tight")
      }, kpi.kpiName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          setShowPlantLines(function (prev) {
            return !prev;
          });
          setPlantLineData(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, !prev[kpi.kpiName]));
          });
        },
        className: "text-[9px] ".concat(currentTheme.secondaryText, " hover:").concat(currentTheme.primaryText, " flex items-center gap-1 mt-0.5 transition-colors")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-2.5 h-2.5"
      }), plantLineData[kpi.kpiName] ? "Hide" : "Show", " Lines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-[10px] ".concat(currentTheme.mutedText, " flex items-center gap-1 mt-0.5")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute top-4 left-1/2 transform -translate-x-1/2 z-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-1 text-sm font-extrabold transition-all duration-300"
      }, function () {
        // Check if monthly_budget exists
        if (!kpi.monthly_budget || kpi.monthly_budget.length === 0) {
          var actual = kpi.actual_per_tonne;
          var budget = kpi.budget_per_tonne;
          var _difference = actual - budget;
          var _variance = _difference / budget * 100;
          var _isOverBudget = actual > budget;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, _isOverBudget ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-3 h-3 text-red-700"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "text-base font-black tracking-wide text-red-700"
          }, Math.abs(_variance).toFixed(1), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "text-xs text-red-700"
          }, "!")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-3 h-3 text-green-700"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
            className: "text-base font-black tracking-wide text-green-700"
          }, Math.abs(_variance).toFixed(1), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "w-3 h-3 text-green-700"
          })));
        }
        var lastActual = kpi.monthly_costs[kpi.monthly_costs.length - 1];
        var lastBudget = kpi.monthly_budget[kpi.monthly_budget.length - 1];
        var difference = lastActual - lastBudget;
        var variance = difference / lastBudget * 100;
        var isOverBudget = lastActual > lastBudget;
        if (isOverBudget) {
          console.log("  Spent \u20B9".concat(difference.toFixed(2), " MORE than budget (OVERSPENDING)"));
        } else {
          console.log("  Saved \u20B9".concat(Math.abs(difference).toFixed(2), " from budget (SAVING)"));
        }
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isOverBudget ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "w-3 h-3 text-red-700"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "text-base font-black tracking-wide text-red-700"
        }, Math.abs(variance).toFixed(1), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "text-xs text-red-700"
        }, "!")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "w-3 h-3 text-green-700"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "text-base font-black tracking-wide text-green-700"
        }, Math.abs(variance).toFixed(1), "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          className: "w-3 h-3 text-green-700"
        })));
      }()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute top-4 right-4 z-10"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "px-2 py-1 rounded-full text-[9px] font-bold ".concat(globalTabView === "production" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700")
      }, globalTabView === "production" ? "PROD" : "SALE")), !expandedCards[kpi.kpiName] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "relative h-56 mb-3",
        onClick: function onClick() {
          setExpandedCards(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, !prev[kpi.kpiName]));
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        width: "95%",
        height: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        data: chartData,
        margin: {
          top: 15,
          right: 15,
          left: 15,
          bottom: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        strokeDasharray: "3 3",
        stroke: currentTheme.gridColor,
        opacity: 0.6
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        dataKey: "month",
        tick: {
          fontSize: 11,
          fontWeight: 500,
          fill: currentTheme.axisTextColor || "#1f2937"
        },
        axisLine: false,
        tickLine: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        tick: {
          fontSize: 11,
          fill: currentTheme.axisTextColor || "#1f2937"
        },
        axisLine: false,
        tickLine: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
          theme: currentTheme
        })
      }), activeGraphTab === "tonnage" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "actual",
        stroke: "none",
        fill: currentTheme.chartColors.actualFill,
        dot: false,
        activeDot: {
          r: 6,
          fill: currentTheme.chartColors.actualLine
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "prediction",
        stroke: "none",
        fill: currentTheme.chartColors.predictedFill,
        dot: false,
        activeDot: {
          r: 6,
          fill: currentTheme.chartColors.predictedLine
        }
      }), avgTarget > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        y: avgTarget,
        stroke: currentTheme.chartColors.targetLine,
        strokeWidth: 1,
        label: {
          value: "Target (avg): \u20B9".concat(avgTarget.toLocaleString()),
          position: "right",
          fill: currentTheme.chartColors.targetLine,
          fontSize: 12
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "actual",
        stroke: currentTheme.chartColors.actualLine,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round"
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
        ,
        dot: function dot(props) {
          var cx = props.cx,
            cy = props.cy,
            payload = props.payload,
            index = props.index;
          if ((payload === null || payload === void 0 ? void 0 : payload.actual) == null) return null;
          var monthTarget = payload.target || avgTarget || 0;
          var dotColor = payload.actual > monthTarget ? "#dc2626" : "#16a34a";
          var isCurrentPeriod = index === thisCardPeriodIndex;
          if (isCurrentPeriod) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
              cx: cx,
              cy: cy,
              r: 12 // Large hit area
              ,
              fill: dotColor,
              opacity: 0.25,
              style: {
                cursor: "pointer",
                pointerEvents: "auto" // ✅ Make it interactive
              },

              className: "transition-opacity duration-200 hover:opacity-40" // ✅ Hover feedback
              ,
              onMouseDown: function onMouseDown(e) {
                e.stopPropagation();
                var startX = e.clientX;
                var startY = e.clientY;
                var startTime = Date.now();
                var hasMoved = false;
                var circleElement = e.currentTarget;
                var svgElement = circleElement.closest("svg");
                var svgRect = svgElement === null || svgElement === void 0 ? void 0 : svgElement.getBoundingClientRect();
                var chartWidth = (svgRect === null || svgRect === void 0 ? void 0 : svgRect.width) || 0;
                var pointSpacing = chartWidth / (chartData.length - 1);
                var handleMouseMove = function handleMouseMove(moveEvent) {
                  var deltaX = moveEvent.clientX - startX;
                  var deltaY = moveEvent.clientY - startY;
                  var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                  if (distance > 15 && Date.now() - startTime > 100) {
                    hasMoved = true;
                    if (circleElement) {
                      circleElement.style.cursor = "grabbing";
                    }
                    var indexChange = Math.round(deltaX / pointSpacing);
                    var newIndex = Math.max(0, Math.min(chartData.length - 2, index + indexChange));
                    setCardCurrentPeriodIndex(function (prev) {
                      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, newIndex));
                    });
                  }
                };
                var handleMouseUp = function handleMouseUp() {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                  if (circleElement) {
                    circleElement.style.cursor = "pointer";
                  }
                  var clickDuration = Date.now() - startTime;
                  if (!hasMoved && clickDuration < 250 && svgRect) {
                    setChartModalData(_objectSpread(_objectSpread({}, payload), {}, {
                      kpiName: kpi.kpiName
                    }));
                    setChartModalPosition({
                      x: svgRect.left + cx,
                      y: svgRect.top + cy - 150
                    });
                  }
                };
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
              cx: cx,
              cy: cy,
              r: 5,
              fill: dotColor,
              stroke: "white",
              strokeWidth: 2,
              style: {
                pointerEvents: "none"
              } // ✅ Not interactive
            }));
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 4,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 2
          });
        }
      }), chartData.some(function (d) {
        return d.isHistorical && d.target;
      }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "target",
        stroke: "#fbbf24",
        strokeWidth: 1,
        dot: false,
        activeDot: {
          r: 1,
          fill: "#fbbf24"
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "prediction",
        stroke: currentTheme.chartColors.predictedLine,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "5 5",
        connectNulls: false,
        dot: function dot(props) {
          var cx = props.cx,
            cy = props.cy,
            payload = props.payload;
          if (payload.prediction === null) return null;

          // Get THIS month's target value
          var monthTarget = payload.target || payload.targetForCheck || avgTarget || 0;

          // Debug log
          console.log("".concat(kpi.kpiName, " PREDICTION - ").concat(payload.month, ": prediction=").concat(payload.prediction, ", target=").concat(monthTarget));

          // INDIVIDUAL COMPARISON: Red only if THIS month's prediction > target
          var dotColor = payload.prediction > monthTarget ? "#dc2626" // Red (over target)
          : "#16a34a"; // Green (under target)

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 4,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 2
          });
        }
      })), activeGraphTab === "percentage" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, chartData.some(function (d) {
        return d.isHistorical && d.productionTarget;
      }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "productionTarget",
        stroke: currentTheme.chartColors.targetLine,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        dot: false,
        activeDot: {
          r: 5,
          fill: currentTheme.chartColors.targetLine
        },
        name: "Target %"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "productionPercent",
        stroke: currentTheme.chartColors.percentActual,
        strokeWidth: 1,
        connectNulls: false,
        name: "Actual %",
        dot: function dot(props) {
          var cx = props.cx,
            cy = props.cy,
            index = props.index,
            payload = props.payload;
          if (payload.productionPercent === null) return null;
          var monthTarget = payload.productionTarget || 0;
          var dotColor = payload.productionPercent > monthTarget ? "#dc2626" : "#16a34a";

          // ✅ Use this card's specific period index
          var isCurrentPeriod = index === thisCardPeriodIndex;
          if (isCurrentPeriod) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
              cx: cx,
              cy: cy,
              r: 12,
              fill: dotColor,
              opacity: 0.2,
              style: {
                cursor: "pointer",
                pointerEvents: "auto"
              },
              className: "transition-opacity duration-200 hover:opacity-40",
              onMouseDown: function onMouseDown(e) {
                e.stopPropagation();
                var startX = e.clientX;
                var startTime = Date.now();
                var hasMoved = false;
                var circleElement = e.currentTarget;
                var svgElement = circleElement.closest("svg");
                var svgRect = svgElement === null || svgElement === void 0 ? void 0 : svgElement.getBoundingClientRect();
                var chartWidth = (svgRect === null || svgRect === void 0 ? void 0 : svgRect.width) || 0;
                var pointSpacing = chartWidth / (chartData.length - 1);
                var handleMouseMove = function handleMouseMove(moveEvent) {
                  var deltaX = moveEvent.clientX - startX;
                  var distance = Math.abs(deltaX);
                  if (distance > 15 && Date.now() - startTime > 100) {
                    hasMoved = true;
                    if (circleElement) circleElement.style.cursor = "grabbing";
                    var indexChange = Math.round(deltaX / pointSpacing);
                    var newIndex = Math.max(0, Math.min(chartData.length - 2, index + indexChange));

                    // ✅ Update THIS card's index only
                    setCardCurrentPeriodIndex(function (prev) {
                      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, newIndex));
                    });
                  }
                };
                var handleMouseUp = function handleMouseUp() {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                  if (circleElement) circleElement.style.cursor = "pointer";
                  if (!hasMoved && Date.now() - startTime < 250 && svgRect) {
                    setChartModalData(_objectSpread(_objectSpread({}, payload), {}, {
                      kpiName: kpi.kpiName
                    }));
                    setChartModalPosition({
                      x: svgRect.left + cx,
                      y: svgRect.top + cy - 150
                    });
                  }
                };
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
              cx: cx,
              cy: cy,
              r: 2.5,
              fill: dotColor,
              stroke: "white",
              strokeWidth: 1,
              style: {
                pointerEvents: "none"
              }
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
              x: cx,
              y: cy,
              fill: "white",
              fontSize: "14",
              fontWeight: "bold",
              textAnchor: "middle",
              dominantBaseline: "middle",
              style: {
                pointerEvents: "none"
              }
            }, "+"));
          }
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 4,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 1
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        type: "monotone",
        dataKey: "productionPercentPredicted",
        stroke: currentTheme.chartColors.percentPredicted,
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "5 5",
        name: "Predicted %",
        connectNulls: false,
        dot: function dot(props) {
          var cx = props.cx,
            cy = props.cy,
            payload = props.payload;
          if (payload.productionPercentPredicted === null) return null;

          // Get THIS month's target
          var monthTarget = payload.productionTargetForCheck || 0;
          var dotColor = payload.productionPercentPredicted > monthTarget ? "#dc2626" // Red (higher % = worse)
          : "#16a34a"; // Green (lower % = better)

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: 4,
            fill: dotColor,
            stroke: "white",
            strokeWidth: 2
          });
        }
      })))), chartModalData && chartModalData.kpiName === kpi.kpiName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute ".concat(currentTheme.modalBg, " rounded-lg ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border p-3 w-64 z-50"),
        style: {
          left: "50%",
          top: "-10px",
          transform: "translateX(-50%)"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          return setChartModalData(null);
        },
        className: "absolute top-2 right-2 ".concat(currentTheme.mutedText, " hover:").concat(currentTheme.secondaryText)
      }, "\xD7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex gap-1 mb-2 mt-1"
      }, ["Insights", "Action", "Improve"].map(function (tab) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          key: tab,
          onClick: function onClick() {
            return setActiveChartModalTab(tab);
          },
          className: "flex-1 px-2 py-1 text-xs font-medium rounded transition-all ".concat(activeChartModalTab === tab ? "".concat(currentTheme.buttonBg, " ").concat(currentTheme.primaryText) : "bg-gray-100 ".concat(currentTheme.secondaryText, " hover:bg-gray-200"))
        }, tab);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-xs ".concat(currentTheme.secondaryText)
      }, activeChartModalTab === "Insights" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "font-semibold mb-1"
      }, "Current Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Month: ", chartModalData.month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Value: \u20B9", chartModalData.actual || chartModalData.productionPercent, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Target: \u20B9", chartModalData.target || chartModalData.productionTarget, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: chartModalData.variance > 0 ? currentTheme.chartColors.badColor : currentTheme.chartColors.goodColor
      }, "Variance:", " ", (_chartModalData$varia = chartModalData.variance) === null || _chartModalData$varia === void 0 ? void 0 : _chartModalData$varia.toFixed(2))), activeChartModalTab === "Action" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "space-y-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "font-semibold mb-1 text-green-600"
      }, "Completed:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "ml-3 space-y-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "line-through text-gray-500"
      }, "Budget review for", " ", chartModalData.month)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "line-through text-gray-500"
      }, "Vendor performance analysis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "line-through text-gray-500"
      }, "Cost allocation verified")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "font-semibold mb-1 text-orange-600"
      }, "Remaining:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "ml-3 space-y-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Optimize vendor contracts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Process efficiency audit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "flex items-start gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Update forecast model")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "pt-1 border-t border-gray-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between text-xs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-medium"
      }, "Progress:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-green-600 font-bold"
      }, "3/6 (50%)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-full bg-gray-200 rounded-full h-1.5 mt-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "bg-green-500 h-1.5 rounded-full",
        style: {
          width: "50%"
        }
      })))), activeChartModalTab === "Improve" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "font-semibold mb-1"
      }, "Improvements:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "list-disc ml-3 space-y-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Implement cost controls"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Negotiate better rates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Reduce waste by 10%")))))), expandedCards[kpi.kpiName] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mt-3 space-y-3",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between pb-2 border-b border-gray-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
        className: "text-xs font-bold ".concat(currentTheme.primaryText)
      }, "Cost Breakdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          setExpandedCards(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, false));
          });
        },
        className: "px-2 py-0.5 rounded text-[10px] font-semibold ".concat(currentTheme.buttonBg)
      }, "\u2715")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "grid grid-cols-2 gap-2 max-h-96 overflow-y-auto"
      }, getKpiDrillDownData(kpi.kpiName).slice(0, 6).map(function (item, subIdx) {
        var _item$months, _item$monthlyActual, _item$monthlyTarget, _item$months2, _item$monthlyActual3, _item$monthlyActual4, _item$monthlyTarget3, _item$monthlyTarget4, _item$monthlyTarget5, _item$monthlyTarget6, _item$monthlyTarget7, _item$monthlyTarget8;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: subIdx,
          className: "".concat(currentTheme.cardBg, " rounded-lg p-2 ").concat(currentTheme.border, " border")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex items-start justify-between mb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex-1 min-w-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
          className: "text-[10px] font-bold ".concat(currentTheme.primaryText, " truncate")
        }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "text-[8px] ".concat(currentTheme.secondaryText)
        }, item.percentage, "% of total")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-[10px] font-bold ".concat(currentTheme.primaryText, " ml-1")
        }, "\u20B9", item.cost)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "mb-2 bg-gray-50 rounded p-1.5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "grid grid-cols-5 gap-0.5 mb-1"
        }, (_item$months = item.months) === null || _item$months === void 0 ? void 0 : _item$months.slice(0, 5).map(function (month, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            key: i,
            className: "text-center text-[7px] font-semibold text-gray-600"
          }, month);
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "grid grid-cols-5 gap-0.5 mb-0.5"
        }, (_item$monthlyActual = item.monthlyActual) === null || _item$monthlyActual === void 0 ? void 0 : _item$monthlyActual.slice(0, 5).map(function (val, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            key: i,
            className: "text-center text-[7px] font-bold rounded px-0.5 ".concat(val > item.monthlyTarget[i] ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700")
          }, val);
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "grid grid-cols-5 gap-0.5"
        }, (_item$monthlyTarget = item.monthlyTarget) === null || _item$monthlyTarget === void 0 ? void 0 : _item$monthlyTarget.slice(0, 5).map(function (val, i) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
            key: i,
            className: "text-center text-[6px] text-gray-500"
          }, "T:", val);
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "h-8"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          width: "100%",
          height: "100%"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          data: (_item$months2 = item.months) === null || _item$months2 === void 0 ? void 0 : _item$months2.slice(0, 5).map(function (month, i) {
            var _item$monthlyActual2, _item$monthlyTarget2;
            return {
              month: month,
              actual: (_item$monthlyActual2 = item.monthlyActual) === null || _item$monthlyActual2 === void 0 ? void 0 : _item$monthlyActual2[i],
              target: (_item$monthlyTarget2 = item.monthlyTarget) === null || _item$monthlyTarget2 === void 0 ? void 0 : _item$monthlyTarget2[i]
            };
          }),
          margin: {
            top: 2,
            right: 2,
            left: 2,
            bottom: 2
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "monotone",
          dataKey: "target",
          stroke: "#fbbf24",
          strokeWidth: 1,
          strokeDasharray: "2 2",
          dot: false
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          type: "monotone",
          dataKey: "actual",
          stroke: currentTheme.chartColors.actualLine,
          strokeWidth: 1.5,
          dot: {
            r: 2
          }
        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "w-full bg-gray-200 rounded-full h-1 mt-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "h-full bg-gradient-to-r ".concat(currentTheme.accentGradient, " rounded-full"),
          style: {
            width: "".concat(item.percentage, "%")
          }
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "mt-1 flex items-center justify-between text-[7px]"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: currentTheme.mutedText
        }, "Avg: \u20B9", (((_item$monthlyActual3 = item.monthlyActual) === null || _item$monthlyActual3 === void 0 ? void 0 : _item$monthlyActual3.reduce(function (a, b) {
          return a + b;
        }, 0)) / ((_item$monthlyActual4 = item.monthlyActual) === null || _item$monthlyActual4 === void 0 ? void 0 : _item$monthlyActual4.length)).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "font-bold ".concat(item.cost > ((_item$monthlyTarget3 = item.monthlyTarget) === null || _item$monthlyTarget3 === void 0 ? void 0 : _item$monthlyTarget3[((_item$monthlyTarget4 = item.monthlyTarget) === null || _item$monthlyTarget4 === void 0 ? void 0 : _item$monthlyTarget4.length) - 1]) ? "text-red-600" : "text-green-600")
        }, item.cost > ((_item$monthlyTarget5 = item.monthlyTarget) === null || _item$monthlyTarget5 === void 0 ? void 0 : _item$monthlyTarget5[((_item$monthlyTarget6 = item.monthlyTarget) === null || _item$monthlyTarget6 === void 0 ? void 0 : _item$monthlyTarget6.length) - 1]) ? "▲" : "▼", Math.abs((item.cost / ((_item$monthlyTarget7 = item.monthlyTarget) === null || _item$monthlyTarget7 === void 0 ? void 0 : _item$monthlyTarget7[((_item$monthlyTarget8 = item.monthlyTarget) === null || _item$monthlyTarget8 === void 0 ? void 0 : _item$monthlyTarget8.length) - 1]) - 1) * 100).toFixed(1), "%")));
      }))), !expandedCards[kpi.kpiName] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mt-2 flex items-center justify-center gap-2 text-[10px] ".concat(currentTheme.mutedText, " font-medium")
      }, activeGraphTab === "tonnage" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-1.5 h-1.5 rounded-full",
        style: {
          backgroundColor: currentTheme.chartColors.actualLine
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Actual")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-1.5 h-1.5 rounded-full",
        style: {
          backgroundColor: currentTheme.chartColors.predictedLine
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Prediction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-1.5 h-1.5 rounded-full",
        style: {
          backgroundColor: currentTheme.chartColors.targetLine
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Target"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-1.5 h-1.5 rounded-full",
        style: {
          backgroundColor: currentTheme.chartColors.percentActual
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Production %"))));
    }))));
  };

  // Add before the return statement
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var style = document.createElement("style");
    style.textContent = "\n    @keyframes slideInRight {\n      from {\n        transform: translateX(400px);\n        opacity: 0;\n      }\n      to {\n        transform: translateX(0);\n        opacity: 1;\n      }\n    }\n    \n    @keyframes shimmer {\n      0% {\n        transform: translateX(-100%);\n      }\n      100% {\n        transform: translateX(100%);\n      }\n    }\n    \n    .animate-slideInRight {\n      animation: slideInRight 0.5s ease-out;\n    }\n    \n    .animate-shimmer {\n      animation: shimmer 2s infinite;\n    }\n  ";
    document.head.appendChild(style);
    return function () {
      document.head.removeChild(style);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full mx-auto p-4 min-h-screen transition-all duration-500 ".concat(currentTheme.mainBg)
  }, showDrillDownModal && selectedKpiForDrill && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.modalBg, " rounded-2xl ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300"),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 border-b ".concat(currentTheme.border, " bg-gradient-to-r ").concat(currentTheme.buttonBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDrillDownBack,
    className: "p-2 rounded-lg hover:bg-white/20 transition-colors ".concat(currentTheme.primaryText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 19l-7-7 7-7"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-lg font-bold ".concat(currentTheme.primaryText)
  }, drillDownLevel === 1 ? "".concat(selectedKpiForDrill.kpiName, " - Cost Breakdown") : "".concat(drillDownPath[1], " - Detailed Analysis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mt-1"
  }, drillDownPath.map(function (path, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: idx,
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs ".concat(currentTheme.secondaryText)
    }, path), idx < drillDownPath.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-3 h-3"
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    // onClick={() => {
    //   setShowDrillDownModal(false);
    //   setDrillDownLevel(0);
    //   setDrillDownPath([]);
    //   setSelectedKpiForDrill(null);
    // }}
    className: "p-2 rounded-lg hover:bg-white/20 transition-colors ".concat(currentTheme.primaryText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-5 h-5"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1 overflow-y-auto p-6"
  }, drillDownLevel === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  }, getKpiDrillDownData(selectedKpiForDrill.kpiName).map(function (item, idx) {
    var _item$months3, _item$monthlyActual5, _item$monthlyTarget9, _item$months4, _item$monthlyActual7, _item$monthlyActual8, _item$monthlyTarget11, _item$monthlyTarget12, _item$monthlyTarget13;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: idx,
      onClick: function onClick() {
        return handleDrillDownItemClick(item, selectedKpiForDrill.kpiName);
      },
      className: "".concat(currentTheme.cardBg, " rounded-xl p-4 ").concat(currentTheme.border, " border cursor-pointer transition-all duration-200 hover:scale-[1.02] ").concat(currentTheme.hoverGlow, " group")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-start justify-between mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-sm font-bold ".concat(currentTheme.primaryText, " mb-1")
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs ".concat(currentTheme.secondaryText)
    }, item.percentage, "% of total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-lg font-bold ".concat(currentTheme.primaryText)
    }, "\u20B9", item.cost), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-xs ".concat(currentTheme.mutedText)
    }, "per tonne"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-3 bg-gray-50 rounded-lg p-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-6 gap-1 text-[9px] font-semibold mb-1"
    }, (_item$months3 = item.months) === null || _item$months3 === void 0 ? void 0 : _item$months3.map(function (month, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        className: "text-center text-gray-600"
      }, month);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-6 gap-1 text-[9px] mb-1"
    }, (_item$monthlyActual5 = item.monthlyActual) === null || _item$monthlyActual5 === void 0 ? void 0 : _item$monthlyActual5.map(function (val, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        className: "text-center font-bold ".concat(val > item.monthlyTarget[i] ? "text-red-600" : "text-green-600")
      }, "\u20B9", val);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-6 gap-1 text-[9px]"
    }, (_item$monthlyTarget9 = item.monthlyTarget) === null || _item$monthlyTarget9 === void 0 ? void 0 : _item$monthlyTarget9.map(function (val, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: i,
        className: "text-center text-gray-500"
      }, "T: ", val);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-16"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      data: (_item$months4 = item.months) === null || _item$months4 === void 0 ? void 0 : _item$months4.map(function (month, i) {
        var _item$monthlyActual6, _item$monthlyTarget10;
        return {
          month: month,
          actual: (_item$monthlyActual6 = item.monthlyActual) === null || _item$monthlyActual6 === void 0 ? void 0 : _item$monthlyActual6[i],
          target: (_item$monthlyTarget10 = item.monthlyTarget) === null || _item$monthlyTarget10 === void 0 ? void 0 : _item$monthlyTarget10[i]
        };
      }),
      margin: {
        top: 5,
        right: 5,
        left: 5,
        bottom: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "target",
      stroke: "#fbbf24",
      strokeWidth: 1,
      strokeDasharray: "3 3",
      dot: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      type: "monotone",
      dataKey: "actual",
      stroke: currentTheme.chartColors.actualLine,
      strokeWidth: 2,
      dot: {
        r: 3
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-full bg-gradient-to-r ".concat(currentTheme.accentGradient, " transition-all duration-500"),
      style: {
        width: "".concat(item.percentage, "%")
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2 flex items-center justify-between text-[10px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: currentTheme.mutedText
    }, "Avg: \u20B9", (((_item$monthlyActual7 = item.monthlyActual) === null || _item$monthlyActual7 === void 0 ? void 0 : _item$monthlyActual7.reduce(function (a, b) {
      return a + b;
    }, 0)) / ((_item$monthlyActual8 = item.monthlyActual) === null || _item$monthlyActual8 === void 0 ? void 0 : _item$monthlyActual8.length)).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold ".concat(item.cost > ((_item$monthlyTarget11 = item.monthlyTarget) === null || _item$monthlyTarget11 === void 0 ? void 0 : _item$monthlyTarget11[item.monthlyTarget.length - 1]) ? "text-red-600" : "text-green-600")
    }, item.cost > ((_item$monthlyTarget12 = item.monthlyTarget) === null || _item$monthlyTarget12 === void 0 ? void 0 : _item$monthlyTarget12[item.monthlyTarget.length - 1]) ? "▲" : "▼", Math.abs((item.cost / ((_item$monthlyTarget13 = item.monthlyTarget) === null || _item$monthlyTarget13 === void 0 ? void 0 : _item$monthlyTarget13[item.monthlyTarget.length - 1]) - 1) * 100).toFixed(1), "%")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mt-2 text-xs ".concat(currentTheme.mutedText, " flex items-center justify-between")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Click for detailed analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4 group-hover:translate-x-1 transition-transform"
    })));
  })), drillDownLevel === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " rounded-xl p-6 ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-bold ".concat(currentTheme.primaryText, " mb-4")
  }, "Cost Trend Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    data: ((_getKpiDrillDownData$ = getKpiDrillDownData(selectedKpiForDrill.kpiName).find(function (item) {
      return item.name === drillDownPath[1];
    })) === null || _getKpiDrillDownData$ === void 0 ? void 0 : _getKpiDrillDownData$.trend.map(function (val, i) {
      return {
        month: monthNames[i],
        actual: val,
        budget: val * 0.95
      };
    })) || []
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    strokeDasharray: "3 3",
    stroke: currentTheme.gridColor
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    dataKey: "month"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
      theme: currentTheme
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    type: "monotone",
    dataKey: "actual",
    fill: currentTheme.chartColors.actualFill,
    stroke: currentTheme.chartColors.actualLine,
    strokeWidth: 2,
    name: "Actual Cost"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'recharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    type: "monotone",
    dataKey: "budget",
    stroke: currentTheme.chartColors.targetLine,
    strokeWidth: 2,
    strokeDasharray: "5 5",
    name: "Target Cost"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " rounded-xl p-6 ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-bold ".concat(currentTheme.primaryText, " mb-4 flex items-center gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-green-500"
  }), "Completed Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "line-through"
  }, "Cost analysis completed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "line-through"
  }, "Vendor negotiation initiated")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "line-through"
  }, "Process optimization reviewed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " rounded-xl p-6 ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-bold ".concat(currentTheme.primaryText, " mb-4 flex items-center gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-orange-500"
  }), "Pending Actions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Implement cost reduction strategies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Monitor vendor performance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-xs ".concat(currentTheme.secondaryText, " flex items-start gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-3 h-3 border border-gray-400 rounded-sm mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Update forecasting model"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " rounded-xl p-6 ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-sm font-bold ".concat(currentTheme.primaryText, " mb-4 flex items-center gap-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-blue-500"
  }), "Key Insights & Recommendations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 rounded-lg bg-blue-50 ".concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs font-semibold ".concat(currentTheme.primaryText, " mb-1")
  }, "Cost Trend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs ".concat(currentTheme.secondaryText)
  }, "Costs have increased by 8.5% over the last quarter. Review supplier contracts and consider bulk purchasing options.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 rounded-lg bg-green-50 ".concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs font-semibold ".concat(currentTheme.primaryText, " mb-1")
  }, "Opportunity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs ".concat(currentTheme.secondaryText)
  }, "Potential 15% savings identified through process optimization and vendor consolidation.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-3 rounded-lg bg-orange-50 ".concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    className: "w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs font-semibold ".concat(currentTheme.primaryText, " mb-1")
  }, "Risk Alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-xs ".concat(currentTheme.secondaryText)
  }, "Current trajectory will exceed budget by \u20B950,000 this quarter. Immediate action recommended.")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 border-t ".concat(currentTheme.border, " bg-gradient-to-r ").concat(currentTheme.buttonBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-xs ".concat(currentTheme.secondaryText)
  }, drillDownLevel === 1 ? "Showing ".concat(getKpiDrillDownData(selectedKpiForDrill.kpiName).length, " sub-components") : "Detailed cost analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDrillDownBack,
    className: "px-4 py-2 rounded-lg ".concat(currentTheme.buttonBg, " ").concat(currentTheme.primaryText, " text-xs font-semibold transition-all hover:scale-105")
  }, drillDownLevel > 1 ? "Back" : "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-4 py-2 rounded-lg bg-gradient-to-r ".concat(currentTheme.accentGradient, " text-white text-xs font-semibold transition-all hover:scale-105 ").concat(currentTheme.shadow)
  }, "Export Report")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-2 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      setSelectedCategory("All");
      setSelectedLocation(locationsByCategory.All[0].name);
    },
    className: "px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ".concat(selectedCategory === "All" ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md shadow-green-200" : "bg-white text-gray-700 border border-gray-200 hover:border-green-400 hover:bg-green-50")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3 h-3",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
  })), "All Plants", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-1.5 py-0.5 rounded-full text-[10px] font-bold ".concat(selectedCategory === "All" ? "bg-white/20" : "bg-green-100 text-green-700")
  }, locationsByCategory.All.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      setSelectedCategory("Forging");
      setSelectedLocation(locationsByCategory.Forging[0].name);
    },
    className: "px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ".concat(selectedCategory === "Forging" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200" : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3 h-3",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
  })), "Forging", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-1.5 py-0.5 rounded-full text-[10px] font-bold ".concat(selectedCategory === "Forging" ? "bg-white/20" : "bg-blue-100 text-blue-700")
  }, locationsByCategory.Forging.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      setSelectedCategory("Machining");
      setSelectedLocation(locationsByCategory.Machining[0].name);
    },
    className: "px-2.5 py-1.5 rounded-md font-medium text-xs transition-all duration-300 ".concat(selectedCategory === "Machining" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-200" : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3 h-3",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    fillRule: "evenodd",
    d: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z",
    clipRule: "evenodd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
  })), "Machining", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "px-1.5 py-0.5 rounded-full text-[10px] font-bold ".concat(selectedCategory === "Machining" ? "bg-white/20" : "bg-blue-100 text-blue-700")
  }, locationsByCategory.Machining.length)))), selectedCategory !== "All" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap items-center gap-1.5"
  }, locationsByCategory[selectedCategory].map(function (location) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: location.code,
      onClick: function onClick() {
        return setSelectedLocation(location.name);
      },
      className: "relative px-2.5 py-1.5 rounded-md transition-all duration-200 font-medium text-xs ".concat(selectedLocation === location.name ? selectedCategory === "Forging" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" : selectedCategory === "Machining" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" : "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-200 hover:border-blue-400 hover:bg-blue-50")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-1.5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-3 h-3",
      fill: "currentColor",
      viewBox: "0 0 20 20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      fillRule: "evenodd",
      d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
      clipRule: "evenodd"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold"
    }, location.code), location.percentage !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "flex items-center gap-0.5 font-semibold text-[10px] ".concat(selectedLocation === location.name ? "text-white" : location.percentage >= 0 ? "text-green-600" : "text-red-500")
    }, location.percentage >= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-2.5 h-2.5",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      strokeWidth: "2.5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "w-2.5 h-2.5",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      strokeWidth: "2.5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
    })), location.percentage >= 0 ? "" : "", Math.abs(location.percentage), "%"), selectedLocation === location.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-white animate-pulse"
    })));
  })), selectedCategory !== "All" && selectedLocation && linesByLocation[selectedLocation] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[10px] font-medium ".concat(currentTheme.mutedText)
  }, "Line:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedLine,
    onChange: function onChange(e) {
      return setSelectedLine(e.target.value);
    },
    className: "px-3 py-1.5 pr-8 rounded-md text-xs font-medium border ".concat(currentTheme.border, " ").concat(currentTheme.cardBg, " ").concat(currentTheme.primaryText, " cursor-pointer transition-all hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"),
    style: {
      // ⬅️ ADD THIS STYLE OBJECT
      color: selectedTheme === "neon" || selectedTheme === "midnight" ? "#ffffff" : "inherit"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "All",
    style: {
      backgroundColor: "#ffffff",
      color: "#1f2937" // ⬅️ Dark text for white background
    }
  }, "All Lines"), linesByLocation[selectedLocation].map(function (line) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: line.code,
      value: line.code,
      disabled: line.status === "maintenance",
      style: {
        backgroundColor: "#ffffff",
        color: "#1f2937" // ⬅️ Dark text for white background
      }
    }, line.name, " - ", line.capacity, " ", line.status === "maintenance" ? "⚠️" : "");
  })), selectedLine !== "All" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 px-2 py-1 rounded-md bg-blue-100 text-blue-700 text-[10px] font-semibold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_linesByLocation$sele = linesByLocation[selectedLocation].find(function (l) {
    return l.code === selectedLine;
  })) === null || _linesByLocation$sele === void 0 ? void 0 : _linesByLocation$sele.capacity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-3 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-xs font-semibold ".concat(currentTheme.primaryText)
  }, "View:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " backdrop-blur-sm rounded-full p-0.5 shadow-md ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute h-7 bg-gradient-to-r ".concat(currentTheme.accentGradient, " rounded-full transition-all duration-300 ease-out shadow-md ").concat(globalTabView === "production" ? "w-20 left-0" : "w-16 left-20")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setGlobalTabView("production");
    },
    className: "relative px-3 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full w-20 ".concat(globalTabView === "production" ? "text-white" : currentTheme.mutedText)
  }, "Production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setGlobalTabView("sale");
    },
    className: "relative px-3 py-1.5 text-xs font-semibold transition-colors duration-300 rounded-full w-16 ".concat(globalTabView === "sale" ? "text-white" : currentTheme.mutedText)
  }, "Sale")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2.5 py-1 rounded-full ".concat(currentTheme.buttonBg, " ").concat(currentTheme.border, " border")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[10px] font-medium ".concat(currentTheme.secondaryText)
  }, globalTabView === "production" ? "Production" : "Sale", " View")))), function () {
    var data = getCurrentData();
    var alerts = [];

    // Generate alerts
    if (data && data.length > 0) {
      data.forEach(function (kpi) {
        if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.2) {
          alerts.push({
            id: "".concat(kpi.kpiName, "-critical"),
            type: "critical",
            title: kpi.kpiName,
            message: "\u20B9".concat(kpi.actual_per_tonne, "/t"),
            variance: "+".concat(((kpi.actual_per_tonne / kpi.budget_per_tonne - 1) * 100).toFixed(1), "%"),
            icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
          });
        } else if (kpi.actual_per_tonne > kpi.budget_per_tonne * 1.1) {
          alerts.push({
            id: "".concat(kpi.kpiName, "-warning"),
            type: "warning",
            title: kpi.kpiName,
            message: "\u20B9".concat(kpi.actual_per_tonne, "/t"),
            variance: "+".concat(((kpi.actual_per_tonne / kpi.budget_per_tonne - 1) * 100).toFixed(1), "%"),
            icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
          });
        }
      });
    }
    var criticalAlerts = alerts.filter(function (a) {
      return a.type === "critical";
    });
    var warningAlerts = alerts.filter(function (a) {
      return a.type === "warning";
    });
    return alerts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, criticalAlerts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-4 overflow-hidden rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-2xl animate-pulse"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed right-4 top-32 z-40"
    }, alertsMinimized && alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setAlertsMinimized(false);
      },
      className: "group relative animate-in slide-in-from-right duration-300"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.cardBg, " backdrop-blur-xl rounded-full p-3 ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border transition-all hover:scale-110")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5 ".concat(currentTheme.primaryText, " ").concat(alerts.filter(function (a) {
        return !dismissedAlerts.includes(a.id) && a.type === "critical";
      }).length > 0 ? "animate-bounce" : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute -top-1 -right-1 flex items-center justify-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "absolute inline-flex h-5 w-5 rounded-full ".concat(alerts.filter(function (a) {
        return !dismissedAlerts.includes(a.id) && a.type === "critical";
      }).length > 0 ? "bg-red-400" : "bg-orange-400", " opacity-75 animate-ping")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "relative inline-flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-bold text-white ".concat(alerts.filter(function (a) {
        return !dismissedAlerts.includes(a.id) && a.type === "critical";
      }).length > 0 ? "bg-red-500" : "bg-orange-500")
    }, alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute right-full mr-2 top-1/2 -translate-y-1/2 px-3 py-1.5 ".concat(currentTheme.cardBg, " rounded-lg ").concat(currentTheme.shadow, " border ").concat(currentTheme.border, " opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold ".concat(currentTheme.primaryText)
    }, alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length, " ", "Active Alert", alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length > 1 ? "s" : ""))), !alertsMinimized && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "space-y-2 animate-in slide-in-from-right duration-500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex justify-end mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setAlertsMinimized(true);
      },
      className: "px-3 py-1.5 ".concat(currentTheme.cardBg, " backdrop-blur-xl rounded-full ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border transition-all hover:scale-105 flex items-center gap-2 group")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold ".concat(currentTheme.primaryText)
    }, "Hide Alerts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-4 h-4 ".concat(currentTheme.primaryText, " group-hover:translate-x-1 transition-transform")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "max-w-xs space-y-2"
    }, alerts.filter(function (alert) {
      return !dismissedAlerts.includes(alert.id);
    }).slice(0, 4).map(function (alert, index) {
      var IconComponent = alert.icon;
      var colors = {
        critical: {
          bg: "bg-gradient-to-br from-red-500 to-red-600",
          border: "border-red-300",
          text: "text-white",
          glow: "shadow-2xl shadow-red-500/50"
        },
        warning: {
          bg: "bg-gradient-to-br from-orange-500 to-orange-600",
          border: "border-orange-300",
          text: "text-white",
          glow: "shadow-xl shadow-orange-500/40"
        }
      };
      var style = colors[alert.type];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: alert.id,
        className: "".concat(style.bg, " ").concat(style.glow, " rounded-xl p-3 ").concat(style.text, " backdrop-blur-xl border ").concat(style.border, " transform transition-all duration-500 hover:scale-105 cursor-pointer relative"),
        style: {
          animationDelay: "".concat(index * 100, "ms")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          setDismissedAlerts(function (prev) {
            return [].concat(_toConsumableArray(prev), [alert.id]);
          });
        },
        className: "absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10 group/btn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "w-4 h-4 text-gray-700 group-hover/btn:text-red-600 transition-colors"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute top-1 right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute top-1 right-1 w-3 h-3 bg-yellow-300 rounded-full"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-start gap-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "p-2 rounded-lg bg-white/20 ".concat(alert.type === "critical" ? "animate-bounce" : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
        className: "w-4 h-4"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between gap-2 mb-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
        className: "text-xs font-bold truncate"
      }, alert.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-xs font-black bg-white/30 px-2 py-0.5 rounded-full"
      }, alert.variance)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-xs opacity-90 mb-2"
      }, alert.message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-full bg-white/30 rounded-full h-1.5 overflow-hidden"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "h-full bg-white rounded-full animate-pulse",
        style: {
          width: alert.type === "critical" ? "85%" : "65%",
          transition: "width 1s ease-out"
        }
      })), alert.type === "critical" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mt-2 text-[10px] font-semibold bg-white/20 px-2 py-1 rounded"
      }, "ACTION REQUIRED"))));
    }), alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length > 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.cardBg, " rounded-xl p-2 text-center ").concat(currentTheme.border, " border ").concat(currentTheme.shadow, " backdrop-blur-xl")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs font-semibold ".concat(currentTheme.secondaryText)
    }, "+", alerts.filter(function (a) {
      return !dismissedAlerts.includes(a.id);
    }).length - 4, " ", "more alerts"))))), warningAlerts.length > 0 && criticalAlerts.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-4 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 shadow-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "px-4 py-2.5 flex items-center justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lucide-react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "w-5 h-5 text-white"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-white font-bold text-xs"
    }, warningAlerts.length, " Warning", warningAlerts.length > 1 ? "s" : "", ": Budget Threshold Exceeded"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-orange-100 text-[10px]"
    }, "Monitoring required - 10-20% over budget"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-1"
    }, warningAlerts.slice(0, 3).map(function (alert, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: idx,
        className: "px-2 py-1 bg-white/20 rounded backdrop-blur-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-white text-[10px] font-bold"
      }, alert.title));
    }))))) : null;
  }(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, showCombinedView && renderCombinedChart(), renderCardsView()), showManualEntry && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ManualEntryModal, {
    theme: currentTheme,
    onClose: function onClose() {
      return setShowManualEntry(false);
    },
    selectedLocation: selectedLocation
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CostScreener);

/***/ }),

/***/ "./src/containers/MainComponent.jsx":
/*!******************************************!*\
  !*** ./src/containers/MainComponent.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Dashboard */ "./src/components/Dashboard.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Created by cla on 07.04.2016.
 */


// import { SinglePage, PageFrame } from "cs-web-components-base";

var MainComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(MainComponent, _React$Component);
  var _super = _createSuper(MainComponent);
  function MainComponent() {
    _classCallCheck(this, MainComponent);
    return _super.apply(this, arguments);
  }
  _createClass(MainComponent, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null);
    }
  }]);
  return MainComponent;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefixNS": () => (/* binding */ prefixNS)
/* harmony export */ });
function prefixNS(name) {
  return "".concat("kalyani-iot-costing", "-").concat(name);
}

/***/ }),

/***/ "./src/reducers/reducers.js":
/*!**********************************!*\
  !*** ./src/reducers/reducers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Reducer Template
 */




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : immutable__WEBPACK_IMPORTED_MODULE_0___default().Map();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__.Console.log('reducer got ', action.type);
  switch (action.type) {
    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__.DATA_FETCH_SUCCESS:
      cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__.Console.log('Reducing', action.payload);
      return state;
    case _actions_actions__WEBPACK_IMPORTED_MODULE_1__.DATA_FETCH_FAILURE:
      cs_web_components_base__WEBPACK_IMPORTED_MODULE_2__.Console.log('Reducing failed');
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "../../../../../node_modules/css-loader/dist/cjs.js!./src/output.css":
/*!***************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/cjs.js!./src/output.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-0 {\n  inset: 0px;\n}\n\n.-bottom-8 {\n  bottom: -2rem;\n}\n\n.-right-0 {\n  right: -0px;\n}\n\n.-right-0\\.5 {\n  right: -0.125rem;\n}\n\n.-right-1 {\n  right: -0.25rem;\n}\n\n.-right-2 {\n  right: -0.5rem;\n}\n\n.-top-0 {\n  top: -0px;\n}\n\n.-top-0\\.5 {\n  top: -0.125rem;\n}\n\n.-top-1 {\n  top: -0.25rem;\n}\n\n.-top-2 {\n  top: -0.5rem;\n}\n\n.bottom-6 {\n  bottom: 1.5rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.left-1\\/2 {\n  left: 50%;\n}\n\n.left-12 {\n  left: 3rem;\n}\n\n.left-20 {\n  left: 5rem;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-1 {\n  right: 0.25rem;\n}\n\n.right-2 {\n  right: 0.5rem;\n}\n\n.right-20 {\n  right: 5rem;\n}\n\n.right-3 {\n  right: 0.75rem;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.right-6 {\n  right: 1.5rem;\n}\n\n.right-full {\n  right: 100%;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-12 {\n  top: 3rem;\n}\n\n.top-16 {\n  top: 4rem;\n}\n\n.top-2 {\n  top: 0.5rem;\n}\n\n.top-24 {\n  top: 6rem;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.top-32 {\n  top: 8rem;\n}\n\n.top-4 {\n  top: 1rem;\n}\n\n.top-full {\n  top: 100%;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-40 {\n  z-index: 40;\n}\n\n.z-50 {\n  z-index: 50;\n}\n\n.z-\\[100\\] {\n  z-index: 100;\n}\n\n.z-\\[200\\] {\n  z-index: 200;\n}\n\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-1\\.5 {\n  height: 0.375rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-2 {\n  height: 0.5rem;\n}\n\n.h-2\\.5 {\n  height: 0.625rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-32 {\n  height: 8rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-56 {\n  height: 14rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-64 {\n  height: 16rem;\n}\n\n.h-7 {\n  height: 1.75rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-\\[600px\\] {\n  height: 600px;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.max-h-96 {\n  max-height: 24rem;\n}\n\n.max-h-\\[500px\\] {\n  max-height: 500px;\n}\n\n.max-h-\\[85vh\\] {\n  max-height: 85vh;\n}\n\n.min-h-96 {\n  min-height: 24rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-1\\.5 {\n  width: 0.375rem;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-16 {\n  width: 4rem;\n}\n\n.w-2 {\n  width: 0.5rem;\n}\n\n.w-2\\.5 {\n  width: 0.625rem;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-3 {\n  width: 0.75rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-screen {\n  width: 100vw;\n}\n\n.min-w-0 {\n  min-width: 0px;\n}\n\n.max-w-5xl {\n  max-width: 64rem;\n}\n\n.max-w-6xl {\n  max-width: 72rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.max-w-\\[85\\%\\] {\n  max-width: 85%;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-12 {\n  --tw-rotate: 12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.list-disc {\n  list-style-type: disc;\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.auto-rows-max {\n  grid-auto-rows: max-content;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-baseline {\n  align-items: baseline;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-0 {\n  gap: 0px;\n}\n\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-6 {\n  gap: 1.5rem;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.overflow-x-auto {\n  overflow-x: auto;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-2xl {\n  border-radius: 1rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n\n.rounded-bl-none {\n  border-bottom-left-radius: 0px;\n}\n\n.rounded-br-none {\n  border-bottom-right-radius: 0px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-b-4 {\n  border-bottom-width: 4px;\n}\n\n.border-l-4 {\n  border-left-width: 4px;\n}\n\n.border-r {\n  border-right-width: 1px;\n}\n\n.border-t {\n  border-top-width: 1px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-dashed {\n  border-style: dashed;\n}\n\n.border-amber-200\\/60 {\n  border-color: rgb(253 230 138 / 0.6);\n}\n\n.border-blue-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(191 219 254 / var(--tw-border-opacity));\n}\n\n.border-blue-200\\/60 {\n  border-color: rgb(191 219 254 / 0.6);\n}\n\n.border-blue-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\n}\n\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n\n.border-cyan-200\\/60 {\n  border-color: rgb(165 243 252 / 0.6);\n}\n\n.border-cyan-400\\/30 {\n  border-color: rgb(34 211 238 / 0.3);\n}\n\n.border-emerald-200\\/60 {\n  border-color: rgb(167 243 208 / 0.6);\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-gray-200\\/50 {\n  border-color: rgb(229 231 235 / 0.5);\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n\n.border-green-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(187 247 208 / var(--tw-border-opacity));\n}\n\n.border-green-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(134 239 172 / var(--tw-border-opacity));\n}\n\n.border-green-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(22 163 74 / var(--tw-border-opacity));\n}\n\n.border-indigo-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(199 210 254 / var(--tw-border-opacity));\n}\n\n.border-orange-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 215 170 / var(--tw-border-opacity));\n}\n\n.border-orange-200\\/60 {\n  border-color: rgb(254 215 170 / 0.6);\n}\n\n.border-orange-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 186 116 / var(--tw-border-opacity));\n}\n\n.border-pink-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(251 207 232 / var(--tw-border-opacity));\n}\n\n.border-purple-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(233 213 255 / var(--tw-border-opacity));\n}\n\n.border-purple-200\\/60 {\n  border-color: rgb(233 213 255 / 0.6);\n}\n\n.border-purple-400\\/30 {\n  border-color: rgb(192 132 252 / 0.3);\n}\n\n.border-red-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity));\n}\n\n.border-red-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity));\n}\n\n.border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(220 38 38 / var(--tw-border-opacity));\n}\n\n.border-rose-200\\/60 {\n  border-color: rgb(254 205 211 / 0.6);\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.border-yellow-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 240 138 / var(--tw-border-opacity));\n}\n\n.border-r-pink-500 {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(236 72 153 / var(--tw-border-opacity));\n}\n\n.border-t-purple-500 {\n  --tw-border-opacity: 1;\n  border-top-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n\n.bg-amber-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 191 36 / var(--tw-bg-opacity));\n}\n\n.bg-amber-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\n\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n\n.bg-black\\/50 {\n  background-color: rgb(0 0 0 / 0.5);\n}\n\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n\n.bg-blue-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\n\n.bg-green-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.bg-orange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n\n.bg-orange-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 146 60 / var(--tw-bg-opacity));\n}\n\n.bg-orange-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 247 237 / var(--tw-bg-opacity));\n}\n\n.bg-orange-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 115 22 / var(--tw-bg-opacity));\n}\n\n.bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n\n.bg-purple-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 245 255 / var(--tw-bg-opacity));\n}\n\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}\n\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n\n.bg-red-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-white\\/20 {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.bg-white\\/30 {\n  background-color: rgb(255 255 255 / 0.3);\n}\n\n.bg-white\\/90 {\n  background-color: rgb(255 255 255 / 0.9);\n}\n\n.bg-white\\/95 {\n  background-color: rgb(255 255 255 / 0.95);\n}\n\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 252 232 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n\n.bg-opacity-10 {\n  --tw-bg-opacity: 0.1;\n}\n\n.bg-opacity-40 {\n  --tw-bg-opacity: 0.4;\n}\n\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-tr {\n  background-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\n\n.from-amber-100 {\n  --tw-gradient-from: #fef3c7 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 243 199 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-50 {\n  --tw-gradient-from: #fffbeb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 251 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-500 {\n  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-500\\/5 {\n  --tw-gradient-from: rgb(245 158 11 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-100 {\n  --tw-gradient-from: #dbeafe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(219 234 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-50 {\n  --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-500\\/5 {\n  --tw-gradient-from: rgb(59 130 246 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-600 {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-100 {\n  --tw-gradient-from: #cffafe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(207 250 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-400 {\n  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-50 {\n  --tw-gradient-from: #ecfeff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 254 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500 {\n  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500\\/10 {\n  --tw-gradient-from: rgb(6 182 212 / 0.1) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500\\/5 {\n  --tw-gradient-from: rgb(6 182 212 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-800 {\n  --tw-gradient-from: #155e75 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(21 94 117 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-100 {\n  --tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(209 250 229 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-50 {\n  --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 253 245 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-500 {\n  --tw-gradient-from: #10b981 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-500\\/5 {\n  --tw-gradient-from: rgb(16 185 129 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-50 {\n  --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-800\\/90 {\n  --tw-gradient-from: rgb(31 41 55 / 0.9) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-900 {\n  --tw-gradient-from: #111827 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-900\\/95 {\n  --tw-gradient-from: rgb(17 24 39 / 0.95) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-green-50 {\n  --tw-gradient-from: #f0fdf4 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(240 253 244 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-green-500 {\n  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-50 {\n  --tw-gradient-from: #eef2ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(238 242 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-800 {\n  --tw-gradient-from: #3730a3 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(55 48 163 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-900\\/80 {\n  --tw-gradient-from: rgb(49 46 129 / 0.8) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(49 46 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-100 {\n  --tw-gradient-from: #ffedd5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 237 213 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-50 {\n  --tw-gradient-from: #fff7ed var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 247 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-500 {\n  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-500\\/5 {\n  --tw-gradient-from: rgb(249 115 22 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-pink-50 {\n  --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(253 242 248 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-100 {\n  --tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(243 232 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-400 {\n  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-50 {\n  --tw-gradient-from: #faf5ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(250 245 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500 {\n  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500\\/10 {\n  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500\\/5 {\n  --tw-gradient-from: rgb(168 85 247 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-900\\/80 {\n  --tw-gradient-from: rgb(88 28 135 / 0.8) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-red-50 {\n  --tw-gradient-from: #fef2f2 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 242 242 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-100 {\n  --tw-gradient-from: #ffe4e6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 228 230 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-50 {\n  --tw-gradient-from: #fff1f2 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 241 242 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-500 {\n  --tw-gradient-from: #f43f5e var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-500\\/5 {\n  --tw-gradient-from: rgb(244 63 94 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-50 {\n  --tw-gradient-from: #f8fafc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(248 250 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-800\\/90 {\n  --tw-gradient-from: rgb(30 41 59 / 0.9) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(30 41 59 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-900 {\n  --tw-gradient-from: #0f172a var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-900\\/95 {\n  --tw-gradient-from: rgb(15 23 42 / 0.95) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-transparent {\n  --tw-gradient-from: transparent var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-white {\n  --tw-gradient-from: #fff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-yellow-50 {\n  --tw-gradient-from: #fefce8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 252 232 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.via-amber-50\\/50 {\n  --tw-gradient-to: rgb(255 251 235 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 251 235 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-50 {\n  --tw-gradient-to: rgb(239 246 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eff6ff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-50\\/50 {\n  --tw-gradient-to: rgb(239 246 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(239 246 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-500 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-500\\/10 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(59 130 246 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-900\\/70 {\n  --tw-gradient-to: rgb(30 58 138 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(30 58 138 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-cyan-50 {\n  --tw-gradient-to: rgb(236 254 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfeff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-cyan-50\\/50 {\n  --tw-gradient-to: rgb(236 254 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 254 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-emerald-50 {\n  --tw-gradient-to: rgb(236 253 245 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfdf5 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-emerald-50\\/50 {\n  --tw-gradient-to: rgb(236 253 245 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 253 245 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-gray-900\\/95 {\n  --tw-gradient-to: rgb(17 24 39 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(17 24 39 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-50 {\n  --tw-gradient-to: rgb(240 253 244 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f0fdf4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-500 {\n  --tw-gradient-to: rgb(34 197 94 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #22c55e var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-500\\/10 {\n  --tw-gradient-to: rgb(34 197 94 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(34 197 94 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-400 {\n  --tw-gradient-to: rgb(129 140 248 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #818cf8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-50 {\n  --tw-gradient-to: rgb(238 242 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eef2ff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500\\/10 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(99 102 241 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500\\/15 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(99 102 241 / 0.15) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-950\\/90 {\n  --tw-gradient-to: rgb(30 27 75 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(30 27 75 / 0.9) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-50 {\n  --tw-gradient-to: rgb(255 247 237 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fff7ed var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-50\\/50 {\n  --tw-gradient-to: rgb(255 247 237 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 247 237 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-500 {\n  --tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f97316 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-500\\/10 {\n  --tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(249 115 22 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-600 {\n  --tw-gradient-to: rgb(234 88 12 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ea580c var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-50 {\n  --tw-gradient-to: rgb(253 242 248 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fdf2f8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-500 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-500\\/10 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 72 153 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-400 {\n  --tw-gradient-to: rgb(192 132 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #c084fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-50\\/50 {\n  --tw-gradient-to: rgb(250 245 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(250 245 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-500\\/15 {\n  --tw-gradient-to: rgb(168 85 247 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(168 85 247 / 0.15) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-900\\/70 {\n  --tw-gradient-to: rgb(88 28 135 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(88 28 135 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-950 {\n  --tw-gradient-to: rgb(59 7 100 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b0764 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-950\\/90 {\n  --tw-gradient-to: rgb(59 7 100 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(59 7 100 / 0.9) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-red-600 {\n  --tw-gradient-to: rgb(220 38 38 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #dc2626 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-rose-50 {\n  --tw-gradient-to: rgb(255 241 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fff1f2 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-rose-50\\/50 {\n  --tw-gradient-to: rgb(255 241 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 241 242 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-50 {\n  --tw-gradient-to: rgb(248 250 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f8fafc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-500 {\n  --tw-gradient-to: rgb(100 116 139 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #64748b var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-500\\/10 {\n  --tw-gradient-to: rgb(100 116 139 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(100 116 139 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-900\\/95 {\n  --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-white\\/10 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-50 {\n  --tw-gradient-to: rgb(254 252 232 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fefce8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-500 {\n  --tw-gradient-to: rgb(234 179 8 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eab308 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-500\\/10 {\n  --tw-gradient-to: rgb(234 179 8 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(234 179 8 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.to-amber-50 {\n  --tw-gradient-to: #fffbeb var(--tw-gradient-to-position);\n}\n\n.to-amber-600 {\n  --tw-gradient-to: #d97706 var(--tw-gradient-to-position);\n}\n\n.to-blue-100 {\n  --tw-gradient-to: #dbeafe var(--tw-gradient-to-position);\n}\n\n.to-blue-50 {\n  --tw-gradient-to: #eff6ff var(--tw-gradient-to-position);\n}\n\n.to-blue-50\\/40 {\n  --tw-gradient-to: rgb(239 246 255 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);\n}\n\n.to-blue-500\\/10 {\n  --tw-gradient-to: rgb(59 130 246 / 0.1) var(--tw-gradient-to-position);\n}\n\n.to-blue-600 {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\n\n.to-blue-700 {\n  --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);\n}\n\n.to-blue-950 {\n  --tw-gradient-to: #172554 var(--tw-gradient-to-position);\n}\n\n.to-blue-950\\/80 {\n  --tw-gradient-to: rgb(23 37 84 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-emerald-50 {\n  --tw-gradient-to: #ecfdf5 var(--tw-gradient-to-position);\n}\n\n.to-gray-100 {\n  --tw-gradient-to: #f3f4f6 var(--tw-gradient-to-position);\n}\n\n.to-gray-500\\/5 {\n  --tw-gradient-to: rgb(107 114 128 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-gray-600 {\n  --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);\n}\n\n.to-gray-800 {\n  --tw-gradient-to: #1f2937 var(--tw-gradient-to-position);\n}\n\n.to-gray-800\\/90 {\n  --tw-gradient-to: rgb(31 41 55 / 0.9) var(--tw-gradient-to-position);\n}\n\n.to-gray-900\\/80 {\n  --tw-gradient-to: rgb(17 24 39 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-green-100 {\n  --tw-gradient-to: #dcfce7 var(--tw-gradient-to-position);\n}\n\n.to-green-50\\/40 {\n  --tw-gradient-to: rgb(240 253 244 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-green-600 {\n  --tw-gradient-to: #16a34a var(--tw-gradient-to-position);\n}\n\n.to-indigo-100 {\n  --tw-gradient-to: #e0e7ff var(--tw-gradient-to-position);\n}\n\n.to-indigo-50 {\n  --tw-gradient-to: #eef2ff var(--tw-gradient-to-position);\n}\n\n.to-indigo-50\\/40 {\n  --tw-gradient-to: rgb(238 242 255 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-indigo-950 {\n  --tw-gradient-to: #1e1b4b var(--tw-gradient-to-position);\n}\n\n.to-orange-100 {\n  --tw-gradient-to: #ffedd5 var(--tw-gradient-to-position);\n}\n\n.to-orange-50\\/40 {\n  --tw-gradient-to: rgb(255 247 237 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-orange-500 {\n  --tw-gradient-to: #f97316 var(--tw-gradient-to-position);\n}\n\n.to-orange-500\\/5 {\n  --tw-gradient-to: rgb(249 115 22 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-orange-600 {\n  --tw-gradient-to: #ea580c var(--tw-gradient-to-position);\n}\n\n.to-pink-100 {\n  --tw-gradient-to: #fce7f3 var(--tw-gradient-to-position);\n}\n\n.to-pink-50 {\n  --tw-gradient-to: #fdf2f8 var(--tw-gradient-to-position);\n}\n\n.to-pink-50\\/40 {\n  --tw-gradient-to: rgb(253 242 248 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-pink-500 {\n  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);\n}\n\n.to-pink-500\\/10 {\n  --tw-gradient-to: rgb(236 72 153 / 0.1) var(--tw-gradient-to-position);\n}\n\n.to-pink-500\\/5 {\n  --tw-gradient-to: rgb(236 72 153 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-pink-600 {\n  --tw-gradient-to: #db2777 var(--tw-gradient-to-position);\n}\n\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\n\n.to-purple-800 {\n  --tw-gradient-to: #6b21a8 var(--tw-gradient-to-position);\n}\n\n.to-purple-950\\/80 {\n  --tw-gradient-to: rgb(59 7 100 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-red-100 {\n  --tw-gradient-to: #fee2e2 var(--tw-gradient-to-position);\n}\n\n.to-red-50 {\n  --tw-gradient-to: #fef2f2 var(--tw-gradient-to-position);\n}\n\n.to-red-500 {\n  --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n}\n\n.to-red-500\\/5 {\n  --tw-gradient-to: rgb(239 68 68 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-red-600 {\n  --tw-gradient-to: #dc2626 var(--tw-gradient-to-position);\n}\n\n.to-rose-50 {\n  --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);\n}\n\n.to-slate-100 {\n  --tw-gradient-to: #f1f5f9 var(--tw-gradient-to-position);\n}\n\n.to-slate-50\\/40 {\n  --tw-gradient-to: rgb(248 250 252 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-slate-800 {\n  --tw-gradient-to: #1e293b var(--tw-gradient-to-position);\n}\n\n.to-slate-800\\/90 {\n  --tw-gradient-to: rgb(30 41 59 / 0.9) var(--tw-gradient-to-position);\n}\n\n.to-slate-900\\/80 {\n  --tw-gradient-to: rgb(15 23 42 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-teal-100 {\n  --tw-gradient-to: #ccfbf1 var(--tw-gradient-to-position);\n}\n\n.to-teal-500\\/5 {\n  --tw-gradient-to: rgb(20 184 166 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-teal-600 {\n  --tw-gradient-to: #0d9488 var(--tw-gradient-to-position);\n}\n\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n\n.to-yellow-100 {\n  --tw-gradient-to: #fef9c3 var(--tw-gradient-to-position);\n}\n\n.to-yellow-50 {\n  --tw-gradient-to: #fefce8 var(--tw-gradient-to-position);\n}\n\n.to-yellow-50\\/40 {\n  --tw-gradient-to: rgb(254 252 232 / 0.4) var(--tw-gradient-to-position);\n}\n\n.fill-blue-600 {\n  fill: #2563eb;\n}\n\n.fill-gray-500 {\n  fill: #6b7280;\n}\n\n.fill-gray-700 {\n  fill: #374151;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n\n.p-12 {\n  padding: 3rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.px-0\\.5 {\n  padding-left: 0.125rem;\n  padding-right: 0.125rem;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pr-8 {\n  padding-right: 2rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n\n.text-\\[6px\\] {\n  font-size: 6px;\n}\n\n.text-\\[7px\\] {\n  font-size: 7px;\n}\n\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n\n.text-\\[9px\\] {\n  font-size: 9px;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.leading-tight {\n  line-height: 1.25;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity));\n}\n\n.text-amber-700 {\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity));\n}\n\n.text-amber-800 {\n  --tw-text-opacity: 1;\n  color: rgb(146 64 14 / var(--tw-text-opacity));\n}\n\n.text-amber-900 {\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity));\n}\n\n.text-blue-100 {\n  --tw-text-opacity: 1;\n  color: rgb(219 234 254 / var(--tw-text-opacity));\n}\n\n.text-blue-200 {\n  --tw-text-opacity: 1;\n  color: rgb(191 219 254 / var(--tw-text-opacity));\n}\n\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.text-cyan-300 {\n  --tw-text-opacity: 1;\n  color: rgb(103 232 249 / var(--tw-text-opacity));\n}\n\n.text-cyan-400 {\n  --tw-text-opacity: 1;\n  color: rgb(34 211 238 / var(--tw-text-opacity));\n}\n\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n\n.text-green-200 {\n  --tw-text-opacity: 1;\n  color: rgb(187 247 208 / var(--tw-text-opacity));\n}\n\n.text-green-300 {\n  --tw-text-opacity: 1;\n  color: rgb(134 239 172 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity));\n}\n\n.text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgb(22 101 52 / var(--tw-text-opacity));\n}\n\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgb(20 83 45 / var(--tw-text-opacity));\n}\n\n.text-indigo-700 {\n  --tw-text-opacity: 1;\n  color: rgb(67 56 202 / var(--tw-text-opacity));\n}\n\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\n\n.text-orange-100 {\n  --tw-text-opacity: 1;\n  color: rgb(255 237 213 / var(--tw-text-opacity));\n}\n\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n\n.text-orange-700 {\n  --tw-text-opacity: 1;\n  color: rgb(194 65 12 / var(--tw-text-opacity));\n}\n\n.text-orange-800 {\n  --tw-text-opacity: 1;\n  color: rgb(154 52 18 / var(--tw-text-opacity));\n}\n\n.text-orange-900 {\n  --tw-text-opacity: 1;\n  color: rgb(124 45 18 / var(--tw-text-opacity));\n}\n\n.text-pink-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 24 93 / var(--tw-text-opacity));\n}\n\n.text-pink-800 {\n  --tw-text-opacity: 1;\n  color: rgb(157 23 77 / var(--tw-text-opacity));\n}\n\n.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity));\n}\n\n.text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(126 34 206 / var(--tw-text-opacity));\n}\n\n.text-purple-900 {\n  --tw-text-opacity: 1;\n  color: rgb(88 28 135 / var(--tw-text-opacity));\n}\n\n.text-red-100 {\n  --tw-text-opacity: 1;\n  color: rgb(254 226 226 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n\n.text-red-800 {\n  --tw-text-opacity: 1;\n  color: rgb(153 27 27 / var(--tw-text-opacity));\n}\n\n.text-rose-600 {\n  --tw-text-opacity: 1;\n  color: rgb(225 29 72 / var(--tw-text-opacity));\n}\n\n.text-rose-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\n\n.text-rose-900 {\n  --tw-text-opacity: 1;\n  color: rgb(136 19 55 / var(--tw-text-opacity));\n}\n\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.text-slate-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 41 59 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-white\\/80 {\n  color: rgb(255 255 255 / 0.8);\n}\n\n.text-yellow-200 {\n  --tw-text-opacity: 1;\n  color: rgb(254 240 138 / var(--tw-text-opacity));\n}\n\n.text-yellow-300 {\n  --tw-text-opacity: 1;\n  color: rgb(253 224 71 / var(--tw-text-opacity));\n}\n\n.line-through {\n  text-decoration-line: line-through;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-40 {\n  opacity: 0.4;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-75 {\n  opacity: 0.75;\n}\n\n.opacity-90 {\n  opacity: 0.9;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-amber-400\\/20 {\n  --tw-shadow-color: rgb(251 191 36 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-amber-400\\/30 {\n  --tw-shadow-color: rgb(251 191 36 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-200 {\n  --tw-shadow-color: #bfdbfe;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-400\\/20 {\n  --tw-shadow-color: rgb(96 165 250 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-400\\/30 {\n  --tw-shadow-color: rgb(96 165 250 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-400\\/20 {\n  --tw-shadow-color: rgb(34 211 238 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-400\\/30 {\n  --tw-shadow-color: rgb(34 211 238 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-500\\/30 {\n  --tw-shadow-color: rgb(6 182 212 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-emerald-400\\/20 {\n  --tw-shadow-color: rgb(52 211 153 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-emerald-400\\/30 {\n  --tw-shadow-color: rgb(52 211 153 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-green-200 {\n  --tw-shadow-color: #bbf7d0;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-400\\/20 {\n  --tw-shadow-color: rgb(251 146 60 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-400\\/30 {\n  --tw-shadow-color: rgb(251 146 60 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-500\\/40 {\n  --tw-shadow-color: rgb(249 115 22 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-400\\/20 {\n  --tw-shadow-color: rgb(192 132 252 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-400\\/30 {\n  --tw-shadow-color: rgb(192 132 252 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-500\\/30 {\n  --tw-shadow-color: rgb(168 85 247 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-red-500\\/50 {\n  --tw-shadow-color: rgb(239 68 68 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-rose-400\\/20 {\n  --tw-shadow-color: rgb(251 113 133 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-rose-400\\/30 {\n  --tw-shadow-color: rgb(251 113 133 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.outline {\n  outline-style: solid;\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.backdrop-blur-xl {\n  --tw-backdrop-blur: blur(24px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-shadow {\n  transition-property: box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.duration-500 {\n  transition-duration: 500ms;\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-\\[1\\.02\\]:hover {\n  --tw-scale-x: 1.02;\n  --tw-scale-y: 1.02;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-solid:hover {\n  border-style: solid;\n}\n\n.hover\\:border-blue-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.hover\\:border-green-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(74 222 128 / var(--tw-border-opacity));\n}\n\n.hover\\:bg-blue-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-orange-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-purple-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-white\\/20:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.hover\\:from-amber-200:hover {\n  --tw-gradient-from: #fde68a var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(253 230 138 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-blue-200:hover {\n  --tw-gradient-from: #bfdbfe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(191 219 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-blue-700:hover {\n  --tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(29 78 216 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-cyan-200:hover {\n  --tw-gradient-from: #a5f3fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(165 243 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-cyan-700:hover {\n  --tw-gradient-from: #0e7490 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(14 116 144 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-emerald-200:hover {\n  --tw-gradient-from: #a7f3d0 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(167 243 208 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-indigo-700:hover {\n  --tw-gradient-from: #4338ca var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(67 56 202 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-orange-200:hover {\n  --tw-gradient-from: #fed7aa var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 215 170 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-purple-200:hover {\n  --tw-gradient-from: #e9d5ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(233 213 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-rose-200:hover {\n  --tw-gradient-from: #fecdd3 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 205 211 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:to-blue-200:hover {\n  --tw-gradient-to: #bfdbfe var(--tw-gradient-to-position);\n}\n\n.hover\\:to-blue-800:hover {\n  --tw-gradient-to: #1e40af var(--tw-gradient-to-position);\n}\n\n.hover\\:to-green-200:hover {\n  --tw-gradient-to: #bbf7d0 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-indigo-200:hover {\n  --tw-gradient-to: #c7d2fe var(--tw-gradient-to-position);\n}\n\n.hover\\:to-orange-200:hover {\n  --tw-gradient-to: #fed7aa var(--tw-gradient-to-position);\n}\n\n.hover\\:to-pink-200:hover {\n  --tw-gradient-to: #fbcfe8 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-purple-700:hover {\n  --tw-gradient-to: #7e22ce var(--tw-gradient-to-position);\n}\n\n.hover\\:to-slate-200:hover {\n  --tw-gradient-to: #e2e8f0 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-yellow-200:hover {\n  --tw-gradient-to: #fef08a var(--tw-gradient-to-position);\n}\n\n.hover\\:text-green-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.hover\\:opacity-40:hover {\n  opacity: 0.4;\n}\n\n.hover\\:shadow-2xl:hover {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-sm:hover {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-blue-500\\/40:hover {\n  --tw-shadow-color: rgb(59 130 246 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-green-500\\/40:hover {\n  --tw-shadow-color: rgb(34 197 94 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-indigo-500\\/40:hover {\n  --tw-shadow-color: rgb(99 102 241 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-orange-500\\/40:hover {\n  --tw-shadow-color: rgb(249 115 22 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-pink-500\\/40:hover {\n  --tw-shadow-color: rgb(236 72 153 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-purple-500\\/40:hover {\n  --tw-shadow-color: rgb(168 85 247 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-slate-500\\/40:hover {\n  --tw-shadow-color: rgb(100 116 139 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-yellow-500\\/40:hover {\n  --tw-shadow-color: rgb(234 179 8 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.focus\\:border-transparent:focus {\n  border-color: transparent;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-blue-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-blue-500\\/50:focus {\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n}\n\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.group:hover .group-hover\\:translate-x-1 {\n  --tw-translate-x: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.group:hover .group-hover\\:animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n.group\\/btn:hover .group-hover\\/btn\\:text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n\n.group:hover .group-hover\\:opacity-20 {\n  opacity: 0.2;\n}\n\n@media (min-width: 640px) {\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .dark\\:hover\\:bg-gray-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n}\r\n", "",{"version":3,"sources":["webpack://./src/output.css"],"names":[],"mappings":"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","sourcesContent":["/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  /* 1 */\n  border-width: 0;\n  /* 2 */\n  border-style: solid;\n  /* 2 */\n  border-color: #e5e7eb;\n  /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4;\n  /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  /* 4 */\n  font-feature-settings: normal;\n  /* 5 */\n  font-variation-settings: normal;\n  /* 6 */\n  -webkit-tap-highlight-color: transparent;\n  /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0;\n  /* 1 */\n  line-height: inherit;\n  /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  border-top-width: 1px;\n  /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  /* 1 */\n  font-feature-settings: normal;\n  /* 2 */\n  font-variation-settings: normal;\n  /* 3 */\n  font-size: 1em;\n  /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0;\n  /* 1 */\n  border-color: inherit;\n  /* 2 */\n  border-collapse: collapse;\n  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-feature-settings: inherit;\n  /* 1 */\n  font-variation-settings: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  font-weight: inherit;\n  /* 1 */\n  line-height: inherit;\n  /* 1 */\n  color: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  padding: 0;\n  /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n  /* 1 */\n  background-color: transparent;\n  /* 2 */\n  background-image: none;\n  /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\n\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  /* 1 */\n  color: #9ca3af;\n  /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  /* 1 */\n  vertical-align: middle;\n  /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.relative {\n  position: relative;\n}\n\n.inset-0 {\n  inset: 0px;\n}\n\n.-bottom-8 {\n  bottom: -2rem;\n}\n\n.-right-0 {\n  right: -0px;\n}\n\n.-right-0\\.5 {\n  right: -0.125rem;\n}\n\n.-right-1 {\n  right: -0.25rem;\n}\n\n.-right-2 {\n  right: -0.5rem;\n}\n\n.-top-0 {\n  top: -0px;\n}\n\n.-top-0\\.5 {\n  top: -0.125rem;\n}\n\n.-top-1 {\n  top: -0.25rem;\n}\n\n.-top-2 {\n  top: -0.5rem;\n}\n\n.bottom-6 {\n  bottom: 1.5rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.left-1\\/2 {\n  left: 50%;\n}\n\n.left-12 {\n  left: 3rem;\n}\n\n.left-20 {\n  left: 5rem;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-1 {\n  right: 0.25rem;\n}\n\n.right-2 {\n  right: 0.5rem;\n}\n\n.right-20 {\n  right: 5rem;\n}\n\n.right-3 {\n  right: 0.75rem;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.right-6 {\n  right: 1.5rem;\n}\n\n.right-full {\n  right: 100%;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-12 {\n  top: 3rem;\n}\n\n.top-16 {\n  top: 4rem;\n}\n\n.top-2 {\n  top: 0.5rem;\n}\n\n.top-24 {\n  top: 6rem;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.top-32 {\n  top: 8rem;\n}\n\n.top-4 {\n  top: 1rem;\n}\n\n.top-full {\n  top: 100%;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-40 {\n  z-index: 40;\n}\n\n.z-50 {\n  z-index: 50;\n}\n\n.z-\\[100\\] {\n  z-index: 100;\n}\n\n.z-\\[200\\] {\n  z-index: 200;\n}\n\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.ml-1 {\n  margin-left: 0.25rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.grid {\n  display: grid;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-1\\.5 {\n  height: 0.375rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-2 {\n  height: 0.5rem;\n}\n\n.h-2\\.5 {\n  height: 0.625rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-32 {\n  height: 8rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-56 {\n  height: 14rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-64 {\n  height: 16rem;\n}\n\n.h-7 {\n  height: 1.75rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-\\[600px\\] {\n  height: 600px;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.max-h-96 {\n  max-height: 24rem;\n}\n\n.max-h-\\[500px\\] {\n  max-height: 500px;\n}\n\n.max-h-\\[85vh\\] {\n  max-height: 85vh;\n}\n\n.min-h-96 {\n  min-height: 24rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-1\\.5 {\n  width: 0.375rem;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-16 {\n  width: 4rem;\n}\n\n.w-2 {\n  width: 0.5rem;\n}\n\n.w-2\\.5 {\n  width: 0.625rem;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-3 {\n  width: 0.75rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-screen {\n  width: 100vw;\n}\n\n.min-w-0 {\n  min-width: 0px;\n}\n\n.max-w-5xl {\n  max-width: 64rem;\n}\n\n.max-w-6xl {\n  max-width: 72rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.max-w-\\[85\\%\\] {\n  max-width: 85%;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-full {\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-12 {\n  --tw-rotate: 12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.list-disc {\n  list-style-type: disc;\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.auto-rows-max {\n  grid-auto-rows: max-content;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-baseline {\n  align-items: baseline;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-0 {\n  gap: 0px;\n}\n\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-6 {\n  gap: 1.5rem;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(2rem * var(--tw-space-x-reverse));\n  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.overflow-x-auto {\n  overflow-x: auto;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-2xl {\n  border-radius: 1rem;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n\n.rounded-bl-none {\n  border-bottom-left-radius: 0px;\n}\n\n.rounded-br-none {\n  border-bottom-right-radius: 0px;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-b-4 {\n  border-bottom-width: 4px;\n}\n\n.border-l-4 {\n  border-left-width: 4px;\n}\n\n.border-r {\n  border-right-width: 1px;\n}\n\n.border-t {\n  border-top-width: 1px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-dashed {\n  border-style: dashed;\n}\n\n.border-amber-200\\/60 {\n  border-color: rgb(253 230 138 / 0.6);\n}\n\n.border-blue-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(191 219 254 / var(--tw-border-opacity));\n}\n\n.border-blue-200\\/60 {\n  border-color: rgb(191 219 254 / 0.6);\n}\n\n.border-blue-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(147 197 253 / var(--tw-border-opacity));\n}\n\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n\n.border-cyan-200\\/60 {\n  border-color: rgb(165 243 252 / 0.6);\n}\n\n.border-cyan-400\\/30 {\n  border-color: rgb(34 211 238 / 0.3);\n}\n\n.border-emerald-200\\/60 {\n  border-color: rgb(167 243 208 / 0.6);\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-gray-200\\/50 {\n  border-color: rgb(229 231 235 / 0.5);\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n\n.border-green-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(187 247 208 / var(--tw-border-opacity));\n}\n\n.border-green-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(134 239 172 / var(--tw-border-opacity));\n}\n\n.border-green-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(22 163 74 / var(--tw-border-opacity));\n}\n\n.border-indigo-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(199 210 254 / var(--tw-border-opacity));\n}\n\n.border-orange-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 215 170 / var(--tw-border-opacity));\n}\n\n.border-orange-200\\/60 {\n  border-color: rgb(254 215 170 / 0.6);\n}\n\n.border-orange-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(253 186 116 / var(--tw-border-opacity));\n}\n\n.border-pink-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(251 207 232 / var(--tw-border-opacity));\n}\n\n.border-purple-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(233 213 255 / var(--tw-border-opacity));\n}\n\n.border-purple-200\\/60 {\n  border-color: rgb(233 213 255 / 0.6);\n}\n\n.border-purple-400\\/30 {\n  border-color: rgb(192 132 252 / 0.3);\n}\n\n.border-red-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 202 202 / var(--tw-border-opacity));\n}\n\n.border-red-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity));\n}\n\n.border-red-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(220 38 38 / var(--tw-border-opacity));\n}\n\n.border-rose-200\\/60 {\n  border-color: rgb(254 205 211 / 0.6);\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.border-yellow-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(254 240 138 / var(--tw-border-opacity));\n}\n\n.border-r-pink-500 {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(236 72 153 / var(--tw-border-opacity));\n}\n\n.border-t-purple-500 {\n  --tw-border-opacity: 1;\n  border-top-color: rgb(168 85 247 / var(--tw-border-opacity));\n}\n\n.bg-amber-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 191 36 / var(--tw-bg-opacity));\n}\n\n.bg-amber-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\n\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n\n.bg-black\\/50 {\n  background-color: rgb(0 0 0 / 0.5);\n}\n\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n\n.bg-blue-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-green-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\n\n.bg-green-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.bg-orange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n\n.bg-orange-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 146 60 / var(--tw-bg-opacity));\n}\n\n.bg-orange-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 247 237 / var(--tw-bg-opacity));\n}\n\n.bg-orange-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 115 22 / var(--tw-bg-opacity));\n}\n\n.bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n\n.bg-purple-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 245 255 / var(--tw-bg-opacity));\n}\n\n.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(147 51 234 / var(--tw-bg-opacity));\n}\n\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226 / var(--tw-bg-opacity));\n}\n\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n\n.bg-red-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 242 242 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-white\\/20 {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.bg-white\\/30 {\n  background-color: rgb(255 255 255 / 0.3);\n}\n\n.bg-white\\/90 {\n  background-color: rgb(255 255 255 / 0.9);\n}\n\n.bg-white\\/95 {\n  background-color: rgb(255 255 255 / 0.95);\n}\n\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 224 71 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 252 232 / var(--tw-bg-opacity));\n}\n\n.bg-yellow-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 179 8 / var(--tw-bg-opacity));\n}\n\n.bg-opacity-10 {\n  --tw-bg-opacity: 0.1;\n}\n\n.bg-opacity-40 {\n  --tw-bg-opacity: 0.4;\n}\n\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-tr {\n  background-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\n\n.from-amber-100 {\n  --tw-gradient-from: #fef3c7 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 243 199 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-50 {\n  --tw-gradient-from: #fffbeb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 251 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-500 {\n  --tw-gradient-from: #f59e0b var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-amber-500\\/5 {\n  --tw-gradient-from: rgb(245 158 11 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(245 158 11 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-100 {\n  --tw-gradient-from: #dbeafe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(219 234 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-50 {\n  --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-500\\/5 {\n  --tw-gradient-from: rgb(59 130 246 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-600 {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-100 {\n  --tw-gradient-from: #cffafe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(207 250 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-400 {\n  --tw-gradient-from: #22d3ee var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(34 211 238 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-50 {\n  --tw-gradient-from: #ecfeff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 254 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500 {\n  --tw-gradient-from: #06b6d4 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500\\/10 {\n  --tw-gradient-from: rgb(6 182 212 / 0.1) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-500\\/5 {\n  --tw-gradient-from: rgb(6 182 212 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(6 182 212 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-cyan-800 {\n  --tw-gradient-from: #155e75 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(21 94 117 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-100 {\n  --tw-gradient-from: #d1fae5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(209 250 229 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-50 {\n  --tw-gradient-from: #ecfdf5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 253 245 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-500 {\n  --tw-gradient-from: #10b981 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-emerald-500\\/5 {\n  --tw-gradient-from: rgb(16 185 129 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(16 185 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-50 {\n  --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-800\\/90 {\n  --tw-gradient-from: rgb(31 41 55 / 0.9) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-900 {\n  --tw-gradient-from: #111827 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-900\\/95 {\n  --tw-gradient-from: rgb(17 24 39 / 0.95) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-green-50 {\n  --tw-gradient-from: #f0fdf4 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(240 253 244 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-green-500 {\n  --tw-gradient-from: #22c55e var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(34 197 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-50 {\n  --tw-gradient-from: #eef2ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(238 242 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-800 {\n  --tw-gradient-from: #3730a3 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(55 48 163 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-900\\/80 {\n  --tw-gradient-from: rgb(49 46 129 / 0.8) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(49 46 129 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-100 {\n  --tw-gradient-from: #ffedd5 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 237 213 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-50 {\n  --tw-gradient-from: #fff7ed var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 247 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-500 {\n  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-500\\/5 {\n  --tw-gradient-from: rgb(249 115 22 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-pink-50 {\n  --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(253 242 248 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-100 {\n  --tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(243 232 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-400 {\n  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-50 {\n  --tw-gradient-from: #faf5ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(250 245 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500 {\n  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500\\/10 {\n  --tw-gradient-from: rgb(168 85 247 / 0.1) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-500\\/5 {\n  --tw-gradient-from: rgb(168 85 247 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-900\\/80 {\n  --tw-gradient-from: rgb(88 28 135 / 0.8) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(88 28 135 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-red-50 {\n  --tw-gradient-from: #fef2f2 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 242 242 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-100 {\n  --tw-gradient-from: #ffe4e6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 228 230 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-50 {\n  --tw-gradient-from: #fff1f2 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 241 242 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-500 {\n  --tw-gradient-from: #f43f5e var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-rose-500\\/5 {\n  --tw-gradient-from: rgb(244 63 94 / 0.05) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(244 63 94 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-50 {\n  --tw-gradient-from: #f8fafc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(248 250 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-800\\/90 {\n  --tw-gradient-from: rgb(30 41 59 / 0.9) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(30 41 59 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-900 {\n  --tw-gradient-from: #0f172a var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-slate-900\\/95 {\n  --tw-gradient-from: rgb(15 23 42 / 0.95) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-transparent {\n  --tw-gradient-from: transparent var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-white {\n  --tw-gradient-from: #fff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-yellow-50 {\n  --tw-gradient-from: #fefce8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 252 232 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.via-amber-50\\/50 {\n  --tw-gradient-to: rgb(255 251 235 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 251 235 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-50 {\n  --tw-gradient-to: rgb(239 246 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eff6ff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-50\\/50 {\n  --tw-gradient-to: rgb(239 246 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(239 246 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-500 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-500\\/10 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(59 130 246 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-900\\/70 {\n  --tw-gradient-to: rgb(30 58 138 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(30 58 138 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-cyan-50 {\n  --tw-gradient-to: rgb(236 254 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfeff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-cyan-50\\/50 {\n  --tw-gradient-to: rgb(236 254 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 254 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-emerald-50 {\n  --tw-gradient-to: rgb(236 253 245 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ecfdf5 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-emerald-50\\/50 {\n  --tw-gradient-to: rgb(236 253 245 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 253 245 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-gray-900\\/95 {\n  --tw-gradient-to: rgb(17 24 39 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(17 24 39 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-50 {\n  --tw-gradient-to: rgb(240 253 244 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f0fdf4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-500 {\n  --tw-gradient-to: rgb(34 197 94 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #22c55e var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-green-500\\/10 {\n  --tw-gradient-to: rgb(34 197 94 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(34 197 94 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-400 {\n  --tw-gradient-to: rgb(129 140 248 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #818cf8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-50 {\n  --tw-gradient-to: rgb(238 242 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eef2ff var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500\\/10 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(99 102 241 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500\\/15 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(99 102 241 / 0.15) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-950\\/90 {\n  --tw-gradient-to: rgb(30 27 75 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(30 27 75 / 0.9) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-50 {\n  --tw-gradient-to: rgb(255 247 237 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fff7ed var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-50\\/50 {\n  --tw-gradient-to: rgb(255 247 237 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 247 237 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-500 {\n  --tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f97316 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-500\\/10 {\n  --tw-gradient-to: rgb(249 115 22 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(249 115 22 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-orange-600 {\n  --tw-gradient-to: rgb(234 88 12 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ea580c var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-50 {\n  --tw-gradient-to: rgb(253 242 248 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fdf2f8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-500 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-500\\/10 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(236 72 153 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-400 {\n  --tw-gradient-to: rgb(192 132 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #c084fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-50\\/50 {\n  --tw-gradient-to: rgb(250 245 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(250 245 255 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-500\\/15 {\n  --tw-gradient-to: rgb(168 85 247 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(168 85 247 / 0.15) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-900\\/70 {\n  --tw-gradient-to: rgb(88 28 135 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(88 28 135 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-950 {\n  --tw-gradient-to: rgb(59 7 100 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b0764 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-950\\/90 {\n  --tw-gradient-to: rgb(59 7 100 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(59 7 100 / 0.9) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-red-600 {\n  --tw-gradient-to: rgb(220 38 38 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #dc2626 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-rose-50 {\n  --tw-gradient-to: rgb(255 241 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fff1f2 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-rose-50\\/50 {\n  --tw-gradient-to: rgb(255 241 242 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 241 242 / 0.5) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-50 {\n  --tw-gradient-to: rgb(248 250 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #f8fafc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-500 {\n  --tw-gradient-to: rgb(100 116 139 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #64748b var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-500\\/10 {\n  --tw-gradient-to: rgb(100 116 139 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(100 116 139 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-slate-900\\/95 {\n  --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-white\\/10 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-50 {\n  --tw-gradient-to: rgb(254 252 232 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #fefce8 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-500 {\n  --tw-gradient-to: rgb(234 179 8 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #eab308 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-yellow-500\\/10 {\n  --tw-gradient-to: rgb(234 179 8 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(234 179 8 / 0.1) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.to-amber-50 {\n  --tw-gradient-to: #fffbeb var(--tw-gradient-to-position);\n}\n\n.to-amber-600 {\n  --tw-gradient-to: #d97706 var(--tw-gradient-to-position);\n}\n\n.to-blue-100 {\n  --tw-gradient-to: #dbeafe var(--tw-gradient-to-position);\n}\n\n.to-blue-50 {\n  --tw-gradient-to: #eff6ff var(--tw-gradient-to-position);\n}\n\n.to-blue-50\\/40 {\n  --tw-gradient-to: rgb(239 246 255 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);\n}\n\n.to-blue-500\\/10 {\n  --tw-gradient-to: rgb(59 130 246 / 0.1) var(--tw-gradient-to-position);\n}\n\n.to-blue-600 {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\n\n.to-blue-700 {\n  --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);\n}\n\n.to-blue-950 {\n  --tw-gradient-to: #172554 var(--tw-gradient-to-position);\n}\n\n.to-blue-950\\/80 {\n  --tw-gradient-to: rgb(23 37 84 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-emerald-50 {\n  --tw-gradient-to: #ecfdf5 var(--tw-gradient-to-position);\n}\n\n.to-gray-100 {\n  --tw-gradient-to: #f3f4f6 var(--tw-gradient-to-position);\n}\n\n.to-gray-500\\/5 {\n  --tw-gradient-to: rgb(107 114 128 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-gray-600 {\n  --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);\n}\n\n.to-gray-800 {\n  --tw-gradient-to: #1f2937 var(--tw-gradient-to-position);\n}\n\n.to-gray-800\\/90 {\n  --tw-gradient-to: rgb(31 41 55 / 0.9) var(--tw-gradient-to-position);\n}\n\n.to-gray-900\\/80 {\n  --tw-gradient-to: rgb(17 24 39 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-green-100 {\n  --tw-gradient-to: #dcfce7 var(--tw-gradient-to-position);\n}\n\n.to-green-50\\/40 {\n  --tw-gradient-to: rgb(240 253 244 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-green-600 {\n  --tw-gradient-to: #16a34a var(--tw-gradient-to-position);\n}\n\n.to-indigo-100 {\n  --tw-gradient-to: #e0e7ff var(--tw-gradient-to-position);\n}\n\n.to-indigo-50 {\n  --tw-gradient-to: #eef2ff var(--tw-gradient-to-position);\n}\n\n.to-indigo-50\\/40 {\n  --tw-gradient-to: rgb(238 242 255 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-indigo-950 {\n  --tw-gradient-to: #1e1b4b var(--tw-gradient-to-position);\n}\n\n.to-orange-100 {\n  --tw-gradient-to: #ffedd5 var(--tw-gradient-to-position);\n}\n\n.to-orange-50\\/40 {\n  --tw-gradient-to: rgb(255 247 237 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-orange-500 {\n  --tw-gradient-to: #f97316 var(--tw-gradient-to-position);\n}\n\n.to-orange-500\\/5 {\n  --tw-gradient-to: rgb(249 115 22 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-orange-600 {\n  --tw-gradient-to: #ea580c var(--tw-gradient-to-position);\n}\n\n.to-pink-100 {\n  --tw-gradient-to: #fce7f3 var(--tw-gradient-to-position);\n}\n\n.to-pink-50 {\n  --tw-gradient-to: #fdf2f8 var(--tw-gradient-to-position);\n}\n\n.to-pink-50\\/40 {\n  --tw-gradient-to: rgb(253 242 248 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-pink-500 {\n  --tw-gradient-to: #ec4899 var(--tw-gradient-to-position);\n}\n\n.to-pink-500\\/10 {\n  --tw-gradient-to: rgb(236 72 153 / 0.1) var(--tw-gradient-to-position);\n}\n\n.to-pink-500\\/5 {\n  --tw-gradient-to: rgb(236 72 153 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-pink-600 {\n  --tw-gradient-to: #db2777 var(--tw-gradient-to-position);\n}\n\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\n\n.to-purple-800 {\n  --tw-gradient-to: #6b21a8 var(--tw-gradient-to-position);\n}\n\n.to-purple-950\\/80 {\n  --tw-gradient-to: rgb(59 7 100 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-red-100 {\n  --tw-gradient-to: #fee2e2 var(--tw-gradient-to-position);\n}\n\n.to-red-50 {\n  --tw-gradient-to: #fef2f2 var(--tw-gradient-to-position);\n}\n\n.to-red-500 {\n  --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n}\n\n.to-red-500\\/5 {\n  --tw-gradient-to: rgb(239 68 68 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-red-600 {\n  --tw-gradient-to: #dc2626 var(--tw-gradient-to-position);\n}\n\n.to-rose-50 {\n  --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);\n}\n\n.to-slate-100 {\n  --tw-gradient-to: #f1f5f9 var(--tw-gradient-to-position);\n}\n\n.to-slate-50\\/40 {\n  --tw-gradient-to: rgb(248 250 252 / 0.4) var(--tw-gradient-to-position);\n}\n\n.to-slate-800 {\n  --tw-gradient-to: #1e293b var(--tw-gradient-to-position);\n}\n\n.to-slate-800\\/90 {\n  --tw-gradient-to: rgb(30 41 59 / 0.9) var(--tw-gradient-to-position);\n}\n\n.to-slate-900\\/80 {\n  --tw-gradient-to: rgb(15 23 42 / 0.8) var(--tw-gradient-to-position);\n}\n\n.to-teal-100 {\n  --tw-gradient-to: #ccfbf1 var(--tw-gradient-to-position);\n}\n\n.to-teal-500\\/5 {\n  --tw-gradient-to: rgb(20 184 166 / 0.05) var(--tw-gradient-to-position);\n}\n\n.to-teal-600 {\n  --tw-gradient-to: #0d9488 var(--tw-gradient-to-position);\n}\n\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n\n.to-yellow-100 {\n  --tw-gradient-to: #fef9c3 var(--tw-gradient-to-position);\n}\n\n.to-yellow-50 {\n  --tw-gradient-to: #fefce8 var(--tw-gradient-to-position);\n}\n\n.to-yellow-50\\/40 {\n  --tw-gradient-to: rgb(254 252 232 / 0.4) var(--tw-gradient-to-position);\n}\n\n.fill-blue-600 {\n  fill: #2563eb;\n}\n\n.fill-gray-500 {\n  fill: #6b7280;\n}\n\n.fill-gray-700 {\n  fill: #374151;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n\n.p-12 {\n  padding: 3rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.px-0\\.5 {\n  padding-left: 0.125rem;\n  padding-right: 0.125rem;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pr-8 {\n  padding-right: 2rem;\n}\n\n.pt-1 {\n  padding-top: 0.25rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-\\[10px\\] {\n  font-size: 10px;\n}\n\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n\n.text-\\[6px\\] {\n  font-size: 6px;\n}\n\n.text-\\[7px\\] {\n  font-size: 7px;\n}\n\n.text-\\[8px\\] {\n  font-size: 8px;\n}\n\n.text-\\[9px\\] {\n  font-size: 9px;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.leading-tight {\n  line-height: 1.25;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n\n.text-amber-600 {\n  --tw-text-opacity: 1;\n  color: rgb(217 119 6 / var(--tw-text-opacity));\n}\n\n.text-amber-700 {\n  --tw-text-opacity: 1;\n  color: rgb(180 83 9 / var(--tw-text-opacity));\n}\n\n.text-amber-800 {\n  --tw-text-opacity: 1;\n  color: rgb(146 64 14 / var(--tw-text-opacity));\n}\n\n.text-amber-900 {\n  --tw-text-opacity: 1;\n  color: rgb(120 53 15 / var(--tw-text-opacity));\n}\n\n.text-blue-100 {\n  --tw-text-opacity: 1;\n  color: rgb(219 234 254 / var(--tw-text-opacity));\n}\n\n.text-blue-200 {\n  --tw-text-opacity: 1;\n  color: rgb(191 219 254 / var(--tw-text-opacity));\n}\n\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.text-cyan-300 {\n  --tw-text-opacity: 1;\n  color: rgb(103 232 249 / var(--tw-text-opacity));\n}\n\n.text-cyan-400 {\n  --tw-text-opacity: 1;\n  color: rgb(34 211 238 / var(--tw-text-opacity));\n}\n\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n\n.text-green-200 {\n  --tw-text-opacity: 1;\n  color: rgb(187 247 208 / var(--tw-text-opacity));\n}\n\n.text-green-300 {\n  --tw-text-opacity: 1;\n  color: rgb(134 239 172 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity));\n}\n\n.text-green-800 {\n  --tw-text-opacity: 1;\n  color: rgb(22 101 52 / var(--tw-text-opacity));\n}\n\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgb(20 83 45 / var(--tw-text-opacity));\n}\n\n.text-indigo-700 {\n  --tw-text-opacity: 1;\n  color: rgb(67 56 202 / var(--tw-text-opacity));\n}\n\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\n\n.text-orange-100 {\n  --tw-text-opacity: 1;\n  color: rgb(255 237 213 / var(--tw-text-opacity));\n}\n\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n\n.text-orange-700 {\n  --tw-text-opacity: 1;\n  color: rgb(194 65 12 / var(--tw-text-opacity));\n}\n\n.text-orange-800 {\n  --tw-text-opacity: 1;\n  color: rgb(154 52 18 / var(--tw-text-opacity));\n}\n\n.text-orange-900 {\n  --tw-text-opacity: 1;\n  color: rgb(124 45 18 / var(--tw-text-opacity));\n}\n\n.text-pink-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 24 93 / var(--tw-text-opacity));\n}\n\n.text-pink-800 {\n  --tw-text-opacity: 1;\n  color: rgb(157 23 77 / var(--tw-text-opacity));\n}\n\n.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity));\n}\n\n.text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(126 34 206 / var(--tw-text-opacity));\n}\n\n.text-purple-900 {\n  --tw-text-opacity: 1;\n  color: rgb(88 28 135 / var(--tw-text-opacity));\n}\n\n.text-red-100 {\n  --tw-text-opacity: 1;\n  color: rgb(254 226 226 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n\n.text-red-800 {\n  --tw-text-opacity: 1;\n  color: rgb(153 27 27 / var(--tw-text-opacity));\n}\n\n.text-rose-600 {\n  --tw-text-opacity: 1;\n  color: rgb(225 29 72 / var(--tw-text-opacity));\n}\n\n.text-rose-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\n\n.text-rose-900 {\n  --tw-text-opacity: 1;\n  color: rgb(136 19 55 / var(--tw-text-opacity));\n}\n\n.text-slate-300 {\n  --tw-text-opacity: 1;\n  color: rgb(203 213 225 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-500 {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.text-slate-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 41 59 / var(--tw-text-opacity));\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-white\\/80 {\n  color: rgb(255 255 255 / 0.8);\n}\n\n.text-yellow-200 {\n  --tw-text-opacity: 1;\n  color: rgb(254 240 138 / var(--tw-text-opacity));\n}\n\n.text-yellow-300 {\n  --tw-text-opacity: 1;\n  color: rgb(253 224 71 / var(--tw-text-opacity));\n}\n\n.line-through {\n  text-decoration-line: line-through;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-40 {\n  opacity: 0.4;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-75 {\n  opacity: 0.75;\n}\n\n.opacity-90 {\n  opacity: 0.9;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-amber-400\\/20 {\n  --tw-shadow-color: rgb(251 191 36 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-amber-400\\/30 {\n  --tw-shadow-color: rgb(251 191 36 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-200 {\n  --tw-shadow-color: #bfdbfe;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-400\\/20 {\n  --tw-shadow-color: rgb(96 165 250 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-blue-400\\/30 {\n  --tw-shadow-color: rgb(96 165 250 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-400\\/20 {\n  --tw-shadow-color: rgb(34 211 238 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-400\\/30 {\n  --tw-shadow-color: rgb(34 211 238 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-cyan-500\\/30 {\n  --tw-shadow-color: rgb(6 182 212 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-emerald-400\\/20 {\n  --tw-shadow-color: rgb(52 211 153 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-emerald-400\\/30 {\n  --tw-shadow-color: rgb(52 211 153 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-green-200 {\n  --tw-shadow-color: #bbf7d0;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-400\\/20 {\n  --tw-shadow-color: rgb(251 146 60 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-400\\/30 {\n  --tw-shadow-color: rgb(251 146 60 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-orange-500\\/40 {\n  --tw-shadow-color: rgb(249 115 22 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-400\\/20 {\n  --tw-shadow-color: rgb(192 132 252 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-400\\/30 {\n  --tw-shadow-color: rgb(192 132 252 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-purple-500\\/30 {\n  --tw-shadow-color: rgb(168 85 247 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-red-500\\/50 {\n  --tw-shadow-color: rgb(239 68 68 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-rose-400\\/20 {\n  --tw-shadow-color: rgb(251 113 133 / 0.2);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-rose-400\\/30 {\n  --tw-shadow-color: rgb(251 113 133 / 0.3);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.outline {\n  outline-style: solid;\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.backdrop-blur-xl {\n  --tw-backdrop-blur: blur(24px);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-shadow {\n  transition-property: box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.duration-500 {\n  transition-duration: 500ms;\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-110:hover {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:scale-\\[1\\.02\\]:hover {\n  --tw-scale-x: 1.02;\n  --tw-scale-y: 1.02;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-solid:hover {\n  border-style: solid;\n}\n\n.hover\\:border-blue-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.hover\\:border-green-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(74 222 128 / var(--tw-border-opacity));\n}\n\n.hover\\:bg-blue-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-green-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-orange-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 237 213 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-purple-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-red-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n\n.hover\\:bg-white\\/20:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\n\n.hover\\:from-amber-200:hover {\n  --tw-gradient-from: #fde68a var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(253 230 138 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-blue-200:hover {\n  --tw-gradient-from: #bfdbfe var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(191 219 254 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-blue-700:hover {\n  --tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(29 78 216 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-cyan-200:hover {\n  --tw-gradient-from: #a5f3fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(165 243 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-cyan-700:hover {\n  --tw-gradient-from: #0e7490 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(14 116 144 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-emerald-200:hover {\n  --tw-gradient-from: #a7f3d0 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(167 243 208 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-indigo-700:hover {\n  --tw-gradient-from: #4338ca var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(67 56 202 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-orange-200:hover {\n  --tw-gradient-from: #fed7aa var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 215 170 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-purple-200:hover {\n  --tw-gradient-from: #e9d5ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(233 213 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-rose-200:hover {\n  --tw-gradient-from: #fecdd3 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(254 205 211 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:to-blue-200:hover {\n  --tw-gradient-to: #bfdbfe var(--tw-gradient-to-position);\n}\n\n.hover\\:to-blue-800:hover {\n  --tw-gradient-to: #1e40af var(--tw-gradient-to-position);\n}\n\n.hover\\:to-green-200:hover {\n  --tw-gradient-to: #bbf7d0 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-indigo-200:hover {\n  --tw-gradient-to: #c7d2fe var(--tw-gradient-to-position);\n}\n\n.hover\\:to-orange-200:hover {\n  --tw-gradient-to: #fed7aa var(--tw-gradient-to-position);\n}\n\n.hover\\:to-pink-200:hover {\n  --tw-gradient-to: #fbcfe8 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-purple-700:hover {\n  --tw-gradient-to: #7e22ce var(--tw-gradient-to-position);\n}\n\n.hover\\:to-slate-200:hover {\n  --tw-gradient-to: #e2e8f0 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-yellow-200:hover {\n  --tw-gradient-to: #fef08a var(--tw-gradient-to-position);\n}\n\n.hover\\:text-green-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.hover\\:opacity-40:hover {\n  opacity: 0.4;\n}\n\n.hover\\:shadow-2xl:hover {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-sm:hover {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-blue-500\\/40:hover {\n  --tw-shadow-color: rgb(59 130 246 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-green-500\\/40:hover {\n  --tw-shadow-color: rgb(34 197 94 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-indigo-500\\/40:hover {\n  --tw-shadow-color: rgb(99 102 241 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-orange-500\\/40:hover {\n  --tw-shadow-color: rgb(249 115 22 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-pink-500\\/40:hover {\n  --tw-shadow-color: rgb(236 72 153 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-purple-500\\/40:hover {\n  --tw-shadow-color: rgb(168 85 247 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-slate-500\\/40:hover {\n  --tw-shadow-color: rgb(100 116 139 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.hover\\:shadow-yellow-500\\/40:hover {\n  --tw-shadow-color: rgb(234 179 8 / 0.4);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.focus\\:border-transparent:focus {\n  border-color: transparent;\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-blue-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n\n.focus\\:ring-blue-500\\/50:focus {\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n}\n\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.group:hover .group-hover\\:translate-x-1 {\n  --tw-translate-x: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.group:hover .group-hover\\:animate-spin {\n  animation: spin 1s linear infinite;\n}\n\n.group\\/btn:hover .group-hover\\/btn\\:text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n\n.group:hover .group-hover\\:opacity-20 {\n  opacity: 0.2;\n}\n\n@media (min-width: 640px) {\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 1280px) {\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  .dark\\:hover\\:bg-gray-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************************!*\
  !*** ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/output.css":
/*!************************!*\
  !*** ./src/output.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js!./output.css */ "../../../../../node_modules/css-loader/dist/cjs.js!./src/output.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************************!*\
  !*** ../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "Immutable" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_immutable__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "cs-web-components-base":
/*!*****************************************!*\
  !*** external "cs-web-components-base" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_cs_web_components_base__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cs-web-components-base */ "cs-web-components-base");
/* harmony import */ var cs_web_components_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/reducers */ "./src/reducers/reducers.js");
/* harmony import */ var _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/MainComponent */ "./src/containers/MainComponent.jsx");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./output.css */ "./src/output.css");





cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__.Registry.registerComponent((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.prefixNS)('MainComponent'), _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);
cs_web_components_base__WEBPACK_IMPORTED_MODULE_0__.Registry.registerReducer((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.prefixNS)('reducer'), _reducers_reducers__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  MainComponent: _containers_MainComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=kalyani-iot-costing.dev.f088534bb1531d4e685d.js.map