"use strict";
(self["webpackChunkcost_screener_backend"] = self["webpackChunkcost_screener_backend"] || []).push([["src_components_AllPlants_jsx"],{

/***/ "./src/components/ActionInsightsModal.jsx":
/*!************************************************!*\
  !*** ./src/components/ActionInsightsModal.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/target.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/lightbulb.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check-big.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-right.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ActionInsightsModal = function ActionInsightsModal(_ref) {
  var kpiName = _ref.kpiName,
    month = _ref.month,
    position = _ref.position,
    cardRef = _ref.cardRef,
    onClose = _ref.onClose;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    modalPosition = _useState2[0],
    setModalPosition = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("action"),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!modalPosition && position && cardRef !== null && cardRef !== void 0 && cardRef.current) {
      var modalHeight = 185;
      var modalWidth = 230;
      var cardRect = cardRef.current.getBoundingClientRect();
      var top = position.y - modalHeight - 10;
      var left = position.x - modalWidth / 2;
      if (top < 5) top = 5;
      if (left < 5) left = 5;
      if (left + modalWidth > cardRect.width - 5) {
        left = cardRect.width - modalWidth - 5;
      }
      setModalPosition({
        top: top,
        left: left
      });
    }
  }, [position, cardRef, modalPosition]);
  if (!modalPosition) return null;
  var tabs = [{
    id: "action",
    label: "Action",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"],
    color: "#3b82f6",
    bg: "#eff6ff",
    text: "text-blue-600"
  }, {
    id: "improve",
    label: "Improve",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
    color: "#10b981",
    bg: "#ecfdf5",
    text: "text-emerald-600"
  }, {
    id: "insights",
    label: "Insights",
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"],
    color: "#f97316",
    bg: "#fff7ed",
    text: "text-orange-600"
  }];
  var currentTab = tabs.find(function (t) {
    return t.id === activeTab;
  });
  var tabContent = {
    action: {
      title: "Action Required",
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"],
      items: ["Cost increased by 12%", "Peak usage: night shift", "Material waste: 8%"]
    },
    improve: {
      title: "Improvement Steps",
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
      items: ["Schedule maintenance", "Negotiate bulk discounts", "Optimize shift timings"]
    },
    insights: {
      title: "Root Cause",
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
      items: ["High production volume", "Equipment downtime", "Supplier price hike"]
    }
  };
  var content = tabContent[activeTab];
  var ContentIcon = content.icon;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute",
    style: {
      top: "".concat(modalPosition.top, "px"),
      left: "".concat(modalPosition.left, "px"),
      width: "230px",
      pointerEvents: "all",
      zIndex: 999999
    },
    onMouseDown: function onMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-3 h-3 rotate-45",
    style: {
      backgroundColor: "#f9fafb",
      borderRight: "1px solid #e5e7eb",
      borderBottom: "1px solid #e5e7eb",
      zIndex: 999998
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-lg overflow-hidden",
    style: {
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2.5 py-1.5 flex items-center justify-between",
    style: {
      backgroundColor: currentTab.color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[13px] font-bold text-white"
  }, kpiName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-[10px] text-white/70 font-medium"
  }, "\u2022 ", month)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onClose();
    },
    className: "w-5 h-5 rounded bg-white/20 hover:bg-white/30 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "w-3 h-3 text-white"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex border-b border-gray-200",
    style: {
      backgroundColor: "#f9fafb"
    },
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, tabs.map(function (tab) {
    var Icon = tab.icon;
    var isActive = activeTab === tab.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: tab.id,
      type: "button",
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        setActiveTab(tab.id);
      },
      className: "flex-1 py-1 flex items-center justify-center gap-1 text-[10px] font-bold transition-all ".concat(isActive ? "".concat(tab.text, " border-b-2") : "text-gray-500 hover:bg-gray-100"),
      style: {
        backgroundColor: isActive ? tab.bg : "transparent",
        borderBottomColor: isActive ? tab.color : "transparent"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Icon, {
      className: "w-3 h-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, tab.label));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-2.5",
    style: {
      backgroundColor: currentTab.bg
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-start gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-6 h-6 rounded flex items-center justify-center flex-shrink-0",
    style: {
      backgroundColor: currentTab.color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentIcon, {
    className: "w-3 h-3 text-white"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "font-bold text-gray-800 text-[12px] mb-1"
  }, content.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-0.5"
  }, content.items.map(function (item, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: idx,
      className: "flex items-center gap-1.5 text-[11px] text-gray-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "w-1 h-1 rounded-full flex-shrink-0",
      style: {
        backgroundColor: currentTab.color
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold"
    }, item));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-2.5 py-1.5 flex gap-2 border-t border-gray-200",
    style: {
      backgroundColor: "#f9fafb"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      onClose();
    },
    className: "flex-1 py-1 rounded text-[11px] font-bold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    className: "flex-1 py-1 rounded text-[11px] font-bold text-white hover:opacity-90 transition-all flex items-center justify-center gap-1",
    style: {
      backgroundColor: currentTab.color
    }
  }, "Details", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "w-3 h-3"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionInsightsModal);

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

/***/ "./src/components/MonthRangeSlider.jsx":
/*!*********************************************!*\
  !*** ./src/components/MonthRangeSlider.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var _store_costStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/costStore */ "./src/store/costStore.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var MonthRangeSlider = function MonthRangeSlider(_ref) {
  var theme = _ref.theme,
    _ref$compact = _ref.compact,
    compact = _ref$compact === void 0 ? false : _ref$compact;
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1]; // 'start', 'end', or 'range'
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    dragStartX = _useState4[0],
    setDragStartX = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      from: 1,
      to: 12
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    initialRange = _useState6[0],
    setInitialRange = _useState6[1];

  // Zustand Store
  var monthRange = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.monthRange;
  });
  var setMonthRange = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.setMonthRange;
  });
  var currentYear = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.currentYear;
  });
  var setCurrentYear = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.setCurrentYear;
  });
  var viewType = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.viewType;
  });
  var fetchCostData = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.fetchCostData;
  });
  var apiLoading = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_1__.useCostStore)(function (state) {
    return state.apiLoading;
  });

  // Get current month for "Current Month" preset
  var today = new Date();
  var currentMonth = today.getMonth() + 1;

  // Quick presets
  var presets = [{
    label: "Current Month",
    value: "current",
    from: currentMonth,
    to: currentMonth
  }, {
    label: "Last 3M",
    value: "3m",
    from: Math.max(1, currentMonth - 2),
    to: currentMonth
  }, {
    label: "Last 6M",
    value: "6m",
    from: Math.max(1, currentMonth - 5),
    to: currentMonth
  }, {
    label: "YTD",
    value: "ytd",
    from: 1,
    to: currentMonth
  }, {
    label: "Full Year",
    value: "full",
    from: 1,
    to: 12
  }];

  // Handle preset click
  var handlePresetClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(preset) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!apiLoading) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            setMonthRange(preset.from, preset.to);
            _context.next = 5;
            return fetchCostData(preset.from, preset.to, currentYear, viewType);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePresetClick(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Get active preset
  var getActivePreset = function getActivePreset() {
    var preset = presets.find(function (p) {
      return p.from === monthRange.from && p.to === monthRange.to;
    });
    return (preset === null || preset === void 0 ? void 0 : preset.value) || null;
  };

  // Calculate position from month (1-12)
  var getPositionFromMonth = function getPositionFromMonth(month) {
    return (month - 1) / 11 * 100;
  };

  // Calculate month from position (0-100)
  var getMonthFromPosition = function getMonthFromPosition(position) {
    var month = Math.round(position / 100 * 11) + 1;
    return Math.max(1, Math.min(12, month));
  };

  // Handle mouse down on slider track
  var handleTrackClick = function handleTrackClick(e) {
    if (apiLoading || isDragging) return;
    var rect = sliderRef.current.getBoundingClientRect();
    var clickX = e.clientX - rect.left;
    var position = clickX / rect.width * 100;
    var clickedMonth = getMonthFromPosition(position);

    // Determine which handle is closer
    var startPos = getPositionFromMonth(monthRange.from);
    var endPos = getPositionFromMonth(monthRange.to);
    var clickPos = position;
    var distToStart = Math.abs(clickPos - startPos);
    var distToEnd = Math.abs(clickPos - endPos);
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
  var updateRange = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(from, to) {
      var _ref4;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (from > to) {
              _ref4 = [to, from];
              from = _ref4[0];
              to = _ref4[1];
            }
            setMonthRange(from, to);
            _context2.next = 4;
            return fetchCostData(from, to, currentYear, viewType);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function updateRange(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  // Handle drag start
  var handleDragStart = function handleDragStart(e, type) {
    var _e$touches, _e$touches$;
    if (apiLoading) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(type);
    setDragStartX(e.clientX || ((_e$touches = e.touches) === null || _e$touches === void 0 ? void 0 : (_e$touches$ = _e$touches[0]) === null || _e$touches$ === void 0 ? void 0 : _e$touches$.clientX));
    setInitialRange({
      from: monthRange.from,
      to: monthRange.to
    });
  };

  // Handle drag move
  var handleDragMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var _e$touches2, _e$touches2$;
    if (!isDragging || !sliderRef.current) return;
    var clientX = e.clientX || ((_e$touches2 = e.touches) === null || _e$touches2 === void 0 ? void 0 : (_e$touches2$ = _e$touches2[0]) === null || _e$touches2$ === void 0 ? void 0 : _e$touches2$.clientX);
    var rect = sliderRef.current.getBoundingClientRect();
    var position = (clientX - rect.left) / rect.width * 100;
    var newMonth = getMonthFromPosition(position);
    if (isDragging === "start") {
      if (newMonth <= monthRange.to) {
        setMonthRange(newMonth, monthRange.to);
      }
    } else if (isDragging === "end") {
      if (newMonth >= monthRange.from) {
        setMonthRange(monthRange.from, newMonth);
      }
    } else if (isDragging === "range") {
      var deltaX = clientX - dragStartX;
      var deltaMonths = Math.round(deltaX / rect.width * 11);
      var newFrom = initialRange.from + deltaMonths;
      var newTo = initialRange.to + deltaMonths;

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
  }, [isDragging, monthRange, dragStartX, initialRange, setMonthRange]);

  // Handle drag end
  var handleDragEnd = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!isDragging) {
            _context3.next = 4;
            break;
          }
          setIsDragging(null);
          _context3.next = 4;
          return fetchCostData(monthRange.from, monthRange.to, currentYear, viewType);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), [isDragging, monthRange, currentYear, viewType, fetchCostData]);

  // Add/remove event listeners
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    }
    return function () {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Year navigation
  var handleYearChange = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(delta) {
      var newYear;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!apiLoading) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            newYear = currentYear + delta;
            if (!(newYear >= 2020 && newYear <= new Date().getFullYear())) {
              _context4.next = 7;
              break;
            }
            setCurrentYear(newYear);
            _context4.next = 7;
            return fetchCostData(monthRange.from, monthRange.to, newYear, viewType);
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleYearChange(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  var startPosition = getPositionFromMonth(monthRange.from);
  var endPosition = getPositionFromMonth(monthRange.to);
  var activePreset = getActivePreset();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(compact ? "px-5 py-4" : "p-6", " relative")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center justify-between mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleYearChange(-1);
    },
    disabled: apiLoading || currentYear <= 2020,
    className: "p-2 rounded-lg transition-all ".concat(apiLoading || currentYear <= 2020 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100 active:scale-95")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "w-6 h-6 text-gray-600"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2 px-5 py-2.5 bg-blue-50 rounded-xl border-2 border-blue-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "w-6 h-6 text-blue-600"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-lg font-extrabold text-gray-800"
  }, currentYear)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleYearChange(1);
    },
    disabled: apiLoading || currentYear >= new Date().getFullYear(),
    className: "p-2 rounded-lg transition-all ".concat(apiLoading || currentYear >= new Date().getFullYear() ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100 active:scale-95")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "w-6 h-6 text-gray-600"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, presets.map(function (preset) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: preset.value,
      onClick: function onClick() {
        return handlePresetClick(preset);
      },
      disabled: apiLoading,
      className: "px-4 py-2.5 rounded-xl text-base font-bold transition-all ".concat(activePreset === preset.value ? "bg-blue-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200", " ").concat(apiLoading ? "opacity-50 cursor-not-allowed" : "")
    }, preset.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between mb-4 px-1"
  }, monthNames.map(function (month, index) {
    var monthNum = index + 1;
    var isInRange = monthNum >= monthRange.from && monthNum <= monthRange.to;
    var isEndpoint = monthNum === monthRange.from || monthNum === monthRange.to;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: month,
      className: "text-base font-bold transition-all cursor-pointer select-none px-1 ".concat(isEndpoint ? "text-blue-600 scale-110" : isInRange ? "text-blue-500" : "text-gray-400"),
      onClick: function onClick() {
        if (apiLoading) return;
        // Smart click: closest handle moves to this month
        var distToStart = Math.abs(monthNum - monthRange.from);
        var distToEnd = Math.abs(monthNum - monthRange.to);
        if (distToStart <= distToEnd && monthNum <= monthRange.to) {
          updateRange(monthNum, monthRange.to);
        } else if (monthNum >= monthRange.from) {
          updateRange(monthRange.from, monthNum);
        }
      }
    }, month);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: sliderRef,
    className: "relative h-5 bg-gray-200 rounded-full cursor-pointer overflow-visible",
    onClick: handleTrackClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute h-full bg-blue-400 rounded-full transition-all duration-150 shadow-md",
    style: {
      left: "".concat(startPosition, "%"),
      width: "".concat(endPosition - startPosition, "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute h-full cursor-grab active:cursor-grabbing",
    style: {
      left: "".concat(startPosition, "%"),
      width: "".concat(endPosition - startPosition, "%")
    },
    onMouseDown: function onMouseDown(e) {
      return handleDragStart(e, "range");
    },
    onTouchStart: function onTouchStart(e) {
      return handleDragStart(e, "range");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 \n              bg-white border-[3px] border-blue-500 rounded-full shadow-lg cursor-ew-resize\n              hover:scale-125 hover:border-blue-600 transition-transform z-20\n              ".concat(isDragging === "start" ? "scale-125 border-blue-600 shadow-xl" : ""),
    style: {
      left: "".concat(startPosition, "%")
    },
    onMouseDown: function onMouseDown(e) {
      return handleDragStart(e, "start");
    },
    onTouchStart: function onTouchStart(e) {
      return handleDragStart(e, "start");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-1.5 bg-blue-500 rounded-full"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 \n              bg-white border-[3px] border-blue-500 rounded-full shadow-lg cursor-ew-resize\n              hover:scale-125 hover:border-blue-600 transition-transform z-20\n              ".concat(isDragging === "end" ? "scale-125 border-blue-600 shadow-xl" : ""),
    style: {
      left: "".concat(endPosition, "%")
    },
    onMouseDown: function onMouseDown(e) {
      return handleDragStart(e, "end");
    },
    onTouchStart: function onTouchStart(e) {
      return handleDragStart(e, "end");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-1.5 bg-blue-500 rounded-full"
  })), monthNames.map(function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: index,
      className: "absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-gray-300 rounded-full",
      style: {
        left: "".concat(index / 11 * 100, "%")
      }
    });
  }))), apiLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0 bg-white/50 rounded-xl flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-7 h-7 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthRangeSlider);

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

var CleanPlantCostChart = function CleanPlantCostChart(_ref) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CleanPlantCostChart);

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
/* harmony import */ var _MachinePowerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MachinePowerForm */ "./src/components/MachinePowerForm.jsx");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/ResponsiveContainer.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/ReferenceLine.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/ComposedChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/ReferenceArea.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Area.js");
/* harmony import */ var _ActionInsightsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionInsightsModal */ "./src/components/ActionInsightsModal.jsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/package.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/fuel.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/users.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/handshake.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wrench.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/building.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/box.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/truck.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/factory.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/palette.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trending-up.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var _MonthRangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthRangeSlider */ "./src/components/MonthRangeSlider.jsx");
/* harmony import */ var _store_costStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/costStore */ "./src/store/costStore.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// import React, { useState } from "react";
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   PieChart,
//   Pie,
//   Cell,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   TrendingUp,
//   TrendingDown,
//   IndianRupee,
//   Activity,
//   Users,
//   ShoppingCart,
//   Briefcase,
//   Clock,
//   FileText,
//   Package,
//   BarChart3,
//   AlertCircle,
//   CheckCircle,
//   Filter,
//   Download,
//   RefreshCw,
//   Lightbulb,
//   MessageSquare,
//   Send,
//   X,
//   ChevronRight,
//   Search,
//   Percent,
//   DollarSign,
//   Building,
//   Archive,
//   Truck,
//   Settings,
//   Target,
// } from "lucide-react";

// const CostScreener = () => {
//   const [selectedModule, setSelectedModule] = useState(null);
//   const [chatOpen, setChatOpen] = useState(true);
//   const [chatMessages, setChatMessages] = useState([
//     {
//       type: "bot",
//       text: "🤖 Hello! Ask me about any module - MIS, Sales, FI, Treasury, GST, Materials, Plant, or Dispatch!",
//     },
//   ]);
//   const [chatInput, setChatInput] = useState("");

//   const COLORS = {
//     primary: "#2563EB",
//     success: "#059669",
//     warning: "#D97706",
//     danger: "#DC2626",
//     info: "#7C3AED",
//   };

//   // All 11 Module Cards Data
//   const modules = [
//     {
//       id: "mis",
//       title: "MIS Dashboard",
//       subtitle: "P&L, Balance Sheet & Ratios",
//       icon: Activity,
//       color: "from-blue-500 to-blue-600",
//       bgGradient: "from-blue-50 to-blue-100",
//       summary: {
//         metric1: "P&L",
//         value1: "On Track",
//         metric2: "Balance Sheet",
//         value2: "Healthy",
//         metric3: "Ratios",
//         value3: "Positive",
//       },
//       deepDiveData: {
//         sections: [
//           "Dashboard - P & L",
//           "Balance sheet & MIS P & L",
//           "Balancesheet ratios",
//           "Sales",
//           "Raw Material Consumption",
//           "Manufacturing Cost",
//         ],
//       },
//     },
//     {
//       id: "treasury",
//       title: "Treasury",
//       subtitle: "Cash, FX, Loans, AP/AR",
//       icon: Briefcase,
//       color: "from-green-500 to-green-600",
//       bgGradient: "from-green-50 to-green-100",
//       summary: {
//         metric1: "Cash Flow",
//         value1: "₹285 Cr",
//         metric2: "FX Loss",
//         value2: "₹6 Mn",
//         metric3: "Loans",
//         value3: "₹630 Cr",
//       },
//       deepDiveData: {
//         sections: [
//           "Cash Flow",
//           "Bank balances",
//           "FX - Forward position",
//           "Fx - Realised & unrealised gain/loss",
//           "Loan position",
//           "Account payable",
//           "Account Receivable",
//         ],
//       },
//     },
//     {
//       id: "fi",
//       title: "FI - Ageing",
//       subtitle: "Advances, CWIP, Sub-con",
//       icon: Clock,
//       color: "from-orange-500 to-orange-600",
//       bgGradient: "from-orange-50 to-orange-100",
//       summary: {
//         metric1: "Advances",
//         value1: "₹30 L",
//         metric2: "CWIP >12M",
//         value2: "₹200 Cr 🔴",
//         metric3: "Sub-con",
//         value3: "₹222 Cr",
//       },
//       deepDiveData: {
//         ageingAdvances: [
//           {
//             category: "abc",
//             "1m": 1000000,
//             "3m": 0,
//             "6m": 0,
//             "12m": 0,
//             ">12m": 0,
//             total: 1000000,
//           },
//           {
//             category: "xyz",
//             "1m": 0,
//             "3m": 0,
//             "6m": 0,
//             "12m": 2000000,
//             ">12m": 0,
//             total: 2000000,
//           },
//           {
//             category: "Total",
//             "1m": 1000000,
//             "3m": 0,
//             "6m": 0,
//             "12m": 2000000,
//             ">12m": 0,
//             total: 3000000,
//           },
//         ],
//         ageingCWIP: [
//           {
//             category: "abc",
//             "1m": 1000000,
//             "3m": 2000000,
//             "6m": 15000000,
//             "12m": 0,
//             ">12m": 200000000,
//             total: 218000000,
//           },
//           {
//             category: "xyz",
//             "1m": 0,
//             "3m": 1000000,
//             "6m": 2000000,
//             "12m": 2000000,
//             ">12m": 0,
//             total: 5000000,
//           },
//           {
//             category: "Total",
//             "1m": 1000000,
//             "3m": 3000000,
//             "6m": 17000000,
//             "12m": 2000000,
//             ">12m": 200000000,
//             total: 223000000,
//           },
//         ],
//         subconChallan: [
//           {
//             vendor: "abc",
//             "3m": 2000000,
//             "6m": 15000000,
//             "12m": 0,
//             ">12m": 200000000,
//             total: 217000000,
//           },
//           {
//             vendor: "xyz",
//             "3m": 1000000,
//             "6m": 2000000,
//             "12m": 2000000,
//             ">12m": 0,
//             total: 5000000,
//           },
//           {
//             vendor: "Total",
//             "3m": 3000000,
//             "6m": 17000000,
//             "12m": 2000000,
//             ">12m": 200000000,
//             total: 222000000,
//           },
//         ],
//       },
//     },
//     {
//       id: "sales",
//       title: "Sales Performance",
//       subtitle: "Auto, Gear, GB&DC",
//       icon: ShoppingCart,
//       color: "from-purple-500 to-purple-600",
//       bgGradient: "from-purple-50 to-purple-100",
//       summary: {
//         metric1: "Total FTM",
//         value1: "₹1,892 Mn",
//         metric2: "Auto",
//         value2: "₹1,367 Mn",
//         metric3: "Export",
//         value3: "₹689 Mn",
//       },
//       deepDiveData: {
//         ftm: {
//           auto: {
//             plan: 1347.48,
//             actual: 1367.42,
//             exportUSD: { plan: 360.54, actual: 352.72 },
//             exportEuro: { plan: 40.52, actual: 27.13 },
//             domestic: { plan: 818.75, actual: 842.99 },
//           },
//           gear: {
//             plan: 478.6,
//             actual: 479.91,
//             exportUSD: { plan: 41.42, actual: 74.25 },
//             exportEuro: { plan: 239.65, actual: 228.51 },
//             domestic: { plan: 94.15, actual: 77.12 },
//           },
//           gbdc: {
//             plan: 52.72,
//             actual: 44.98,
//             exportUSD: { plan: 0, actual: 0.2 },
//             exportEuro: { plan: 15.0, actual: 6.31 },
//             domestic: { plan: 2.07, actual: 4.88 },
//           },
//           total: { plan: 1878.79, actual: 1892.32 },
//         },
//       },
//     },
//     {
//       id: "customers",
//       title: "Sales by Customer",
//       subtitle: "Top Customers Analysis",
//       icon: Users,
//       color: "from-pink-500 to-pink-600",
//       bgGradient: "from-pink-50 to-pink-100",
//       summary: {
//         metric1: "Stellantis",
//         value1: "Top",
//         metric2: "Dana",
//         value2: "2nd",
//         metric3: "TML/Maruti",
//         value3: "3rd/4th",
//       },
//       deepDiveData: {
//         customers: [
//           {
//             name: "Stellantis",
//             budOct: 450,
//             actOct: 460,
//             delta: 10,
//             budYTD: 2500,
//             actYTD: 2600,
//             deltaYTD: 100,
//           },
//           {
//             name: "Dana",
//             budOct: 380,
//             actOct: 375,
//             delta: -5,
//             budYTD: 2100,
//             actYTD: 2080,
//             deltaYTD: -20,
//           },
//           {
//             name: "TML",
//             budOct: 320,
//             actOct: 310,
//             delta: -10,
//             budYTD: 1800,
//             actYTD: 1750,
//             deltaYTD: -50,
//           },
//           {
//             name: "Maruti",
//             budOct: 280,
//             actOct: 295,
//             delta: 15,
//             budYTD: 1600,
//             actYTD: 1680,
//             deltaYTD: 80,
//           },
//         ],
//       },
//     },
//     {
//       id: "fx",
//       title: "FX Management",
//       subtitle: "Forward Contracts & Hedging",
//       icon: DollarSign,
//       color: "from-teal-500 to-teal-600",
//       bgGradient: "from-teal-50 to-teal-100",
//       summary: {
//         metric1: "USD Forward",
//         value1: "36 Mn",
//         metric2: "Euro Forward",
//         value2: "36 Mn",
//         metric3: "FX Loss",
//         value3: "₹6 Mn",
//       },
//       deepDiveData: {
//         usdForward: [
//           { month: "Oct-25", contract: 5.0, rate: 89.0, loss: -5.0 },
//           { month: "Nov-25", contract: 5.0, rate: 90.0, loss: 0 },
//           { month: "Dec-25", contract: 6.0, rate: 90.2, loss: 1.2 },
//           { month: "Jan-26", contract: 6.0, rate: 90.3, loss: 1.8 },
//           { month: "FY 25-26", contract: 36.0, rate: 0, loss: 4.3 },
//         ],
//         euroForward: [
//           { month: "Oct-25", contract: 5.0, rate: 104.0, loss: -5.0 },
//           { month: "Nov-25", contract: 5.0, rate: 105.0, loss: 0 },
//           { month: "Dec-25", contract: 6.0, rate: 105.1, loss: 0.6 },
//           { month: "Jan-26", contract: 6.0, rate: 105.2, loss: 1.2 },
//           { month: "FY 25-26", contract: 36.0, rate: 0, loss: 1.7 },
//         ],
//       },
//     },
//     {
//       id: "gst",
//       title: "GST Management",
//       subtitle: "CGST, SGST, IGST Balance",
//       icon: FileText,
//       color: "from-yellow-500 to-yellow-600",
//       bgGradient: "from-yellow-50 to-yellow-100",
//       summary: {
//         metric1: "Net Balance",
//         value1: "₹-10 L",
//         metric2: "CGST",
//         value2: "₹-10 L",
//         metric3: "ITC",
//         value3: "₹250 L",
//       },
//       deepDiveData: {
//         gstBalance: [
//           {
//             type: "CGST",
//             opening: 40,
//             itc: 25,
//             liability: -70,
//             rcm: -5,
//             net: -10,
//           },
//           {
//             type: "SGST",
//             opening: 50,
//             itc: 25,
//             liability: -70,
//             rcm: -5,
//             net: 0,
//           },
//           {
//             type: "IGST",
//             opening: 60,
//             itc: 200,
//             liability: -240,
//             rcm: -20,
//             net: 0,
//           },
//           {
//             type: "Total",
//             opening: 150,
//             itc: 250,
//             liability: -380,
//             rcm: -30,
//             net: -10,
//           },
//         ],
//       },
//     },
//     {
//       id: "refunds",
//       title: "Tax Refunds",
//       subtitle: "IGST, DBK, RODTEP",
//       icon: Package,
//       color: "from-indigo-500 to-indigo-600",
//       bgGradient: "from-indigo-50 to-indigo-100",
//       summary: {
//         metric1: "IGST Pending",
//         value1: "₹476 L",
//         metric2: "DBK Pending",
//         value2: "₹105 L",
//         metric3: "RODTEP",
//         value3: "₹29 L",
//       },
//       deepDiveData: {
//         refunds: [
//           {
//             year: "2020-21",
//             igstTotal: 2000,
//             igstRecv: 10,
//             dbkTotal: 150,
//             dbkRecv: 22,
//             rodtepTotal: 100,
//             rodtepRecv: 0,
//           },
//           {
//             year: "2021-22",
//             igstTotal: 2200,
//             igstRecv: 15,
//             dbkTotal: 200,
//             dbkRecv: 10,
//             rodtepTotal: 110,
//             rodtepRecv: 1,
//           },
//           {
//             year: "2022-23",
//             igstTotal: 2500,
//             igstRecv: 10,
//             dbkTotal: 220,
//             dbkRecv: 1,
//             rodtepTotal: 115,
//             rodtepRecv: 1,
//           },
//           {
//             year: "2024-25",
//             igstTotal: 2550,
//             igstRecv: 30,
//             dbkTotal: 230,
//             dbkRecv: 30,
//             rodtepTotal: 115,
//             rodtepRecv: 6,
//           },
//           {
//             year: "Total",
//             igstTotal: 10850,
//             igstRecv: 476,
//             dbkTotal: 960,
//             dbkRecv: 105,
//             rodtepTotal: 520,
//             rodtepRecv: 29,
//           },
//         ],
//       },
//     },
//     {
//       id: "material",
//       title: "Material Management",
//       subtitle: "GRN, Stock, Movement",
//       icon: Archive,
//       color: "from-cyan-500 to-cyan-600",
//       bgGradient: "from-cyan-50 to-cyan-100",
//       summary: {
//         metric1: "Pending GRN",
//         value1: "30 items",
//         metric2: ">7 days",
//         value2: "2 items 🔴",
//         metric3: "Mismatch",
//         value3: "₹1 L",
//       },
//       deepDiveData: {
//         pendingGRN: [
//           { days: "For 1 days", mundhwa: 10, ranjangaon: 15, total: 25 },
//           { days: "For 2-3 days", mundhwa: 1, ranjangaon: 1, total: 2 },
//           { days: "For 4-7 days", mundhwa: 0, ranjangaon: 1, total: 1 },
//           { days: "More than 7 days", mundhwa: 1, ranjangaon: 1, total: 2 },
//           { days: "Total", mundhwa: 12, ranjangaon: 18, total: 30 },
//         ],
//         mismatch: [
//           { type: "Mismatch numbers", mundhwa: 0, ranjangaon: 2, total: 2 },
//           {
//             type: "Mismatch value",
//             mundhwa: 0,
//             ranjangaon: 100000,
//             total: 100000,
//           },
//         ],
//         partMovement: [
//           { period: "Last 1 month", count: 30, value: 300000 },
//           { period: "Last 3 month", count: 30, value: 300000 },
//           { period: "Last 6 month", count: 30, value: 300000 },
//           { period: "Last 12 month", count: 30, value: 300000 },
//         ],
//       },
//     },
//     {
//       id: "plant",
//       title: "Plant Operations",
//       subtitle: "Utilization & Efficiency",
//       icon: Building,
//       color: "from-rose-500 to-rose-600",
//       bgGradient: "from-rose-50 to-rose-100",
//       summary: {
//         metric1: "Avg Util",
//         value1: "46%",
//         metric2: "Rejection",
//         value2: "₹50 Mn/yr",
//         metric3: "Scrap",
//         value3: "73%",
//       },
//       deepDiveData: {
//         utilization: [
//           {
//             machine: "2500 Ton Press",
//             mundhwa: 50,
//             ranjangaon: 20,
//             khed: null,
//           },
//           {
//             machine: "1500 Ton Press",
//             mundhwa: 70,
//             ranjangaon: 80,
//             khed: null,
//           },
//           {
//             machine: "Tesla line - 4 DU",
//             mundhwa: null,
//             ranjangaon: null,
//             khed: 10,
//           },
//         ],
//         rejection: [
//           {
//             month: "Apr-25",
//             mundhwa: 2500000,
//             ranjangaon: 5000000,
//             khed: 6000000,
//             total: 13500000,
//           },
//           {
//             month: "May-25",
//             mundhwa: 2500000,
//             ranjangaon: 5000000,
//             khed: 7000000,
//             total: 14500000,
//           },
//           {
//             month: "Jun-25",
//             mundhwa: 2500000,
//             ranjangaon: 5000000,
//             khed: 5000000,
//             total: 12500000,
//           },
//         ],
//         scrap: [
//           { month: "Apr-25", mundhwa: 95, ranjangaon: 100, khed: 50 },
//           { month: "May-25", mundhwa: 80, ranjangaon: 90, khed: 60 },
//         ],
//       },
//     },
//     {
//       id: "consumption",
//       title: "Material Consumption",
//       subtitle: "Die-wise Variance",
//       icon: Percent,
//       color: "from-violet-500 to-violet-600",
//       bgGradient: "from-violet-50 to-violet-100",
//       summary: {
//         metric1: "Die #12345",
//         value1: "-5%",
//         metric2: "Die #25600",
//         value2: "+3%",
//         metric3: "Variance",
//         value3: ">2%",
//       },
//       deepDiveData: {
//         materialChange: [
//           { dieNumber: 12345, mundhwa: -5.0, ranjangaon: -4.5 },
//           { dieNumber: 25600, mundhwa: 3.0, ranjangaon: 2.4 },
//           { dieNumber: 21456, mundhwa: 0, ranjangaon: 0 },
//         ],
//       },
//     },
//     {
//       id: "dispatch",
//       title: "Dispatch Discipline",
//       subtitle: "On-time Performance",
//       icon: Truck,
//       color: "from-emerald-500 to-emerald-600",
//       bgGradient: "from-emerald-50 to-emerald-100",
//       summary: {
//         metric1: "Post 5 PM",
//         value1: "10-20%",
//         metric2: "Delays",
//         value2: "15-30%",
//         metric3: "Cancel",
//         value3: "45 cases",
//       },
//       deepDiveData: {
//         dispatch: [
//           { metric: "Post 5 pm", mundhwa: 10, ranjangaon: 5, khed: 20 },
//           {
//             metric: "Delay in PGI and invoice time beyond 24 hrs",
//             mundhwa: 20,
//             ranjangaon: 30,
//             khed: 15,
//           },
//           {
//             metric: "Delay in invoice and e invoice time beyond 24 hrs",
//             mundhwa: 20,
//             ranjangaon: 30,
//             khed: 15,
//           },
//           {
//             metric: "Delay in e invoice and e-way bill time beyond 24 hrs",
//             mundhwa: 20,
//             ranjangaon: 30,
//             khed: 15,
//           },
//           {
//             metric: "Cancellation of invoice",
//             mundhwa: 10,
//             ranjangaon: 15,
//             khed: 20,
//           },
//         ],
//       },
//     },
//   ];

//   const formatCurrency = (value) => {
//     if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
//     if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
//     return `₹${value.toLocaleString("en-IN")}`;
//   };

//   const handleSendMessage = () => {
//     if (!chatInput.trim()) return;
//     setChatMessages([...chatMessages, { type: "user", text: chatInput }]);
//     const msg = chatInput.toLowerCase();
//     setChatInput("");

//     setTimeout(() => {
//       let response = "";
//       if (msg.includes("sales") || msg.includes("revenue"))
//         response =
//           "📊 Total Sales: ₹1,892 Mn. Auto: ₹1,367 Mn, Gear: ₹480 Mn, GB&DC: ₹45 Mn. Export: ₹689 Mn (+6.3%)";
//       else if (msg.includes("cwip") || msg.includes("ageing"))
//         response =
//           "⚠️ CRITICAL: ₹200 Cr CWIP aged >12 months! Advances: ₹30 L (₹20L >12M). Sub-con: ₹222 Cr.";
//       else if (msg.includes("gst"))
//         response =
//           "GST Net: ₹-10 Lakhs payable. CGST: ₹-10L, SGST: ₹0, IGST: ₹0. Total ITC: ₹250L";
//       else if (msg.includes("refund"))
//         response =
//           "Pending Refunds: IGST ₹476L, DBK ₹105L, RODTEP ₹29L. Total: ₹610 Lakhs";
//       else if (msg.includes("grn") || msg.includes("material"))
//         response =
//           "Pending GRN: 30 items (Mundhwa: 12, Ranjangaon: 18). 2 items >7 days ⚠️. Mismatch value: ₹1L";
//       else if (msg.includes("plant") || msg.includes("utilization"))
//         response =
//           "Plant Utilization - Mundhwa: 50-70%, Ranjangaon: 20-80% (2500T critical at 20% 🔴), Khed: 10%";
//       else if (msg.includes("dispatch"))
//         response =
//           "Dispatch Issues: Post 5PM (10-20%), Invoice delays (15-30%), Cancellations: 45 cases";
//       else if (msg.includes("fx") || msg.includes("forward"))
//         response =
//           "FX Forwards: USD 36Mn, Euro 36Mn. Current loss: ₹6 Mn. Spot rate: USD ₹90, Euro ₹105";
//       else
//         response =
//           "I can help with: Sales, FI Ageing, GST, Refunds, Material/GRN, Plant, Dispatch, FX, Customers. What would you like to know?";

//       setChatMessages((prev) => [...prev, { type: "bot", text: response }]);
//     }, 800);
//   };

//   const DeepDiveModal = ({ module, onClose }) => {
//     if (!module) return null;

//     const renderDeepDive = () => {
//       switch (module.id) {
//         case "fi":
//           return (
//             <div className="space-y-4">
//               {/* Ageing of Advances */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-orange-600 text-white px-4 py-2 font-semibold text-sm">
//                   Ageing of Advances
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Category</th>
//                         <th className="px-3 py-2 text-center">1 month</th>
//                         <th className="px-3 py-2 text-center">3 month</th>
//                         <th className="px-3 py-2 text-center">6 month</th>
//                         <th className="px-3 py-2 text-center">12 month</th>
//                         <th className="px-3 py-2 text-center">&gt;12 month</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.ageingAdvances.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className={`border-b ${
//                             row.category === "Total"
//                               ? "bg-green-50 font-semibold"
//                               : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <td className="px-3 py-2">{row.category}</td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["1m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["3m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["6m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center text-red-600 font-semibold">
//                             {formatCurrency(row[">12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-bold">
//                             {formatCurrency(row.total)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Ageing of CWIP */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-purple-600 text-white px-4 py-2 font-semibold text-sm">
//                   Ageing of CWIP / Asset
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Category</th>
//                         <th className="px-3 py-2 text-center">1 month</th>
//                         <th className="px-3 py-2 text-center">3 month</th>
//                         <th className="px-3 py-2 text-center">6 month</th>
//                         <th className="px-3 py-2 text-center">12 month</th>
//                         <th className="px-3 py-2 text-center">&gt;12 month</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.ageingCWIP.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className={`border-b ${
//                             row.category === "Total"
//                               ? "bg-green-50 font-semibold"
//                               : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <td className="px-3 py-2">{row.category}</td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["1m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["3m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["6m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center text-red-600 font-bold">
//                             {formatCurrency(row[">12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-bold">
//                             {formatCurrency(row.total)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Sub-con Challan */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-teal-600 text-white px-4 py-2 font-semibold text-sm">
//                   Open Sub-con Challan / Vendor name - Material
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Vendor</th>
//                         <th className="px-3 py-2 text-center">3 month</th>
//                         <th className="px-3 py-2 text-center">6 month</th>
//                         <th className="px-3 py-2 text-center">12 month</th>
//                         <th className="px-3 py-2 text-center">&gt;12 month</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.subconChallan.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className={`border-b ${
//                             row.vendor === "Total"
//                               ? "bg-green-50 font-semibold"
//                               : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <td className="px-3 py-2">{row.vendor}</td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["3m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["6m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row["12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center text-red-600 font-bold">
//                             {formatCurrency(row[">12m"])}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-bold">
//                             {formatCurrency(row.total)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "sales":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="text-sm text-gray-600 mb-2">
//                   Filters: Customer, country, PY to CY FTM and YTD
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-purple-600 text-white px-4 py-2 font-semibold text-sm">
//                   FTM Oct 25 (Rs. Mio.)
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left" rowSpan="2">
//                           Particulars
//                         </th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           Auto
//                         </th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           Gear
//                         </th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           GB & DC
//                         </th>
//                         <th
//                           className="px-3 py-2 text-center bg-blue-50"
//                           colSpan="2"
//                         >
//                           Total-KTFL
//                         </th>
//                       </tr>
//                       <tr>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Plan
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Actuals
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Plan
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Actuals
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Plan
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Actuals
//                         </th>
//                         <th className="px-3 py-1.5 text-center bg-blue-50 text-gray-600">
//                           Plan
//                         </th>
//                         <th className="px-3 py-1.5 text-center bg-blue-50 text-gray-600">
//                           Actuals
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-b hover:bg-gray-50">
//                         <td className="px-3 py-2 font-medium">
//                           Export (INR Mn / US$ Mn)
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.auto.exportUSD.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.auto.exportUSD.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gear.exportUSD.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gear.exportUSD.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gbdc.exportUSD.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gbdc.exportUSD.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50">
//                           {(
//                             module.deepDiveData.ftm.auto.exportUSD.plan +
//                             module.deepDiveData.ftm.gear.exportUSD.plan +
//                             module.deepDiveData.ftm.gbdc.exportUSD.plan
//                           ).toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           {(
//                             module.deepDiveData.ftm.auto.exportUSD.actual +
//                             module.deepDiveData.ftm.gear.exportUSD.actual +
//                             module.deepDiveData.ftm.gbdc.exportUSD.actual
//                           ).toFixed(2)}
//                         </td>
//                       </tr>
//                       <tr className="border-b hover:bg-gray-50">
//                         <td className="px-3 py-2 font-medium">
//                           Export (INR Mn / Euro Mn)
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.auto.exportEuro.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.auto.exportEuro.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gear.exportEuro.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gear.exportEuro.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gbdc.exportEuro.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gbdc.exportEuro.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50">
//                           {(
//                             module.deepDiveData.ftm.auto.exportEuro.plan +
//                             module.deepDiveData.ftm.gear.exportEuro.plan +
//                             module.deepDiveData.ftm.gbdc.exportEuro.plan
//                           ).toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           {(
//                             module.deepDiveData.ftm.auto.exportEuro.actual +
//                             module.deepDiveData.ftm.gear.exportEuro.actual +
//                             module.deepDiveData.ftm.gbdc.exportEuro.actual
//                           ).toFixed(2)}
//                         </td>
//                       </tr>
//                       <tr className="border-b hover:bg-gray-50">
//                         <td className="px-3 py-2 font-medium">
//                           Domestic Income
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.auto.domestic.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.auto.domestic.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gear.domestic.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gear.domestic.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gbdc.domestic.plan.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center font-semibold">
//                           {module.deepDiveData.ftm.gbdc.domestic.actual.toFixed(
//                             2
//                           )}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50">
//                           {(
//                             module.deepDiveData.ftm.auto.domestic.plan +
//                             module.deepDiveData.ftm.gear.domestic.plan +
//                             module.deepDiveData.ftm.gbdc.domestic.plan
//                           ).toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           {(
//                             module.deepDiveData.ftm.auto.domestic.actual +
//                             module.deepDiveData.ftm.gear.domestic.actual +
//                             module.deepDiveData.ftm.gbdc.domestic.actual
//                           ).toFixed(2)}
//                         </td>
//                       </tr>
//                       <tr className="bg-green-50 font-bold">
//                         <td className="px-3 py-2">Total</td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.auto.plan.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.auto.actual.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gear.plan.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gear.actual.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gbdc.plan.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center">
//                           {module.deepDiveData.ftm.gbdc.actual.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-green-100">
//                           {module.deepDiveData.ftm.total.plan.toFixed(2)}
//                         </td>
//                         <td className="px-3 py-2 text-center bg-green-100">
//                           {module.deepDiveData.ftm.total.actual.toFixed(2)}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "customers":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="text-sm text-gray-600">
//                   Filter for monthly, YTD comparison | Filter for Domestic,
//                   exports & Auto, Gear, and GBDC
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-pink-600 text-white px-4 py-2 font-semibold text-sm">
//                   Sales by Customer (Rs. Mio.)
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Customer name</th>
//                         <th className="px-3 py-2 text-center">Bud Oct 25</th>
//                         <th className="px-3 py-2 text-center">Act Oct 25</th>
//                         <th className="px-3 py-2 text-center">Delta</th>
//                         <th className="px-3 py-2 text-center">Bud YTD Oct</th>
//                         <th className="px-3 py-2 text-center">Act Oct 25</th>
//                         <th className="px-3 py-2 text-center">Delta</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.customers.map((cust, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium">{cust.name}</td>
//                           <td className="px-3 py-2 text-center">
//                             {cust.budOct}
//                           </td>
//                           <td className="px-3 py-2 text-center font-semibold">
//                             {cust.actOct}
//                           </td>
//                           <td
//                             className={`px-3 py-2 text-center font-semibold ${
//                               cust.delta >= 0
//                                 ? "text-green-600"
//                                 : "text-red-600"
//                             }`}
//                           >
//                             {cust.delta}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {cust.budYTD}
//                           </td>
//                           <td className="px-3 py-2 text-center font-semibold">
//                             {cust.actYTD}
//                           </td>
//                           <td
//                             className={`px-3 py-2 text-center font-semibold ${
//                               cust.deltaYTD >= 0
//                                 ? "text-green-600"
//                                 : "text-red-600"
//                             }`}
//                           >
//                             {cust.deltaYTD}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "fx":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-teal-600 text-white px-4 py-2 font-semibold text-sm">
//                   Spot Rate Rs 90 / USD
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left"></th>
//                         <th className="px-3 py-2 text-center">Oct-25</th>
//                         <th className="px-3 py-2 text-center">Nov-25</th>
//                         <th className="px-3 py-2 text-center">Dec-25</th>
//                         <th className="px-3 py-2 text-center">Jan-26</th>
//                         <th className="px-3 py-2 text-center bg-blue-50">
//                           2025-26
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.usdForward.map((row, idx) => {
//                         if (idx < 4) {
//                           return (
//                             <tr key={idx} className="border-b hover:bg-gray-50">
//                               <td className="px-3 py-2 font-medium">
//                                 {idx === 0
//                                   ? "Forward contract Mio. USD"
//                                   : idx === 1
//                                   ? "Forward contract Rate"
//                                   : "Forward contract loss"}
//                               </td>
//                               <td className="px-3 py-2 text-center">
//                                 {row.contract !== undefined
//                                   ? row.contract.toFixed(2)
//                                   : row.rate !== undefined
//                                   ? row.rate.toFixed(2)
//                                   : row.loss.toFixed(2)}
//                               </td>
//                               <td className="px-3 py-2 text-center">
//                                 {module.deepDiveData.usdForward[idx + 4]
//                                   ?.contract !== undefined
//                                   ? module.deepDiveData.usdForward[
//                                       idx + 4
//                                     ].contract.toFixed(2)
//                                   : ""}
//                               </td>
//                               <td className="px-3 py-2 text-center"></td>
//                               <td className="px-3 py-2 text-center"></td>
//                               <td className="px-3 py-2 text-center bg-blue-50 font-semibold"></td>
//                             </tr>
//                           );
//                         }
//                         return null;
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-teal-700 text-white px-4 py-2 font-semibold text-sm">
//                   Spot Rate Rs 105 / Euro
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left"></th>
//                         <th className="px-3 py-2 text-center">Oct-25</th>
//                         <th className="px-3 py-2 text-center">Nov-25</th>
//                         <th className="px-3 py-2 text-center">Dec-25</th>
//                         <th className="px-3 py-2 text-center">Jan-26</th>
//                         <th className="px-3 py-2 text-center bg-blue-50">
//                           2025-26
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">
//                           Forward contract Mio. Euro
//                         </td>
//                         <td className="px-3 py-2 text-center">5.00</td>
//                         <td className="px-3 py-2 text-center">5.00</td>
//                         <td className="px-3 py-2 text-center">6.00</td>
//                         <td className="px-3 py-2 text-center">6.00</td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           36.00
//                         </td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">
//                           Forward contract Rate
//                         </td>
//                         <td className="px-3 py-2 text-center">104.00</td>
//                         <td className="px-3 py-2 text-center">105.00</td>
//                         <td className="px-3 py-2 text-center">105.10</td>
//                         <td className="px-3 py-2 text-center">105.20</td>
//                         <td className="px-3 py-2 text-center bg-blue-50"></td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">
//                           Forward contract loss
//                         </td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -5.00
//                         </td>
//                         <td className="px-3 py-2 text-center">-</td>
//                         <td className="px-3 py-2 text-center">0.60</td>
//                         <td className="px-3 py-2 text-center">1.20</td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           1.70
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "gst":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="text-sm text-gray-600">
//                   Filter for month / Year, different GST and company
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-yellow-600 text-white px-4 py-2 font-semibold text-sm">
//                   FTM Oct 25
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left"></th>
//                         <th className="px-3 py-2 text-center">CGST</th>
//                         <th className="px-3 py-2 text-center">SGST</th>
//                         <th className="px-3 py-2 text-center">IGST</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.gstBalance.map((row, idx) => {
//                         if (idx < 4) {
//                           const labels = [
//                             "Opening balance",
//                             "ITC",
//                             "GST Liability",
//                             "RCM GST",
//                           ];
//                           const values =
//                             idx === 0
//                               ? [
//                                   row.opening,
//                                   module.deepDiveData.gstBalance[1].opening,
//                                   module.deepDiveData.gstBalance[2].opening,
//                                   module.deepDiveData.gstBalance[3].opening,
//                                 ]
//                               : idx === 1
//                               ? [
//                                   row.itc,
//                                   module.deepDiveData.gstBalance[1].itc,
//                                   module.deepDiveData.gstBalance[2].itc,
//                                   module.deepDiveData.gstBalance[3].itc,
//                                 ]
//                               : idx === 2
//                               ? [
//                                   row.liability,
//                                   module.deepDiveData.gstBalance[1].liability,
//                                   module.deepDiveData.gstBalance[2].liability,
//                                   module.deepDiveData.gstBalance[3].liability,
//                                 ]
//                               : [
//                                   row.rcm,
//                                   module.deepDiveData.gstBalance[1].rcm,
//                                   module.deepDiveData.gstBalance[2].rcm,
//                                   module.deepDiveData.gstBalance[3].rcm,
//                                 ];
//                           return null;
//                         }
//                         return null;
//                       })}
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">
//                           Opening balance
//                         </td>
//                         <td className="px-3 py-2 text-center">40.00</td>
//                         <td className="px-3 py-2 text-center">50.00</td>
//                         <td className="px-3 py-2 text-center">60.00</td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                           150.00
//                         </td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">ITC</td>
//                         <td className="px-3 py-2 text-center text-green-600">
//                           25.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-green-600">
//                           25.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-green-600">
//                           200.00
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold text-green-600">
//                           250.00
//                         </td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">GST Liability</td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -70.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -70.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -240.00
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold text-red-600">
//                           -380.00
//                         </td>
//                       </tr>
//                       <tr className="border-b">
//                         <td className="px-3 py-2 font-medium">RCM GST</td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -5.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -5.00
//                         </td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -20.00
//                         </td>
//                         <td className="px-3 py-2 text-center bg-blue-50 font-semibold text-red-600">
//                           -30.00
//                         </td>
//                       </tr>
//                       <tr className="bg-green-50 font-bold">
//                         <td className="px-3 py-2">Net Balance</td>
//                         <td className="px-3 py-2 text-center text-red-600">
//                           -10.00
//                         </td>
//                         <td className="px-3 py-2 text-center">-</td>
//                         <td className="px-3 py-2 text-center">-</td>
//                         <td className="px-3 py-2 text-center bg-green-100 text-red-600">
//                           -10.00
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "refunds":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="text-sm text-gray-600">
//                   Filter for year / All
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-indigo-600 text-white px-4 py-2 font-semibold text-sm">
//                   Refunds Rs. Mio.
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Year / Month</th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           IGST
//                         </th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           DBK
//                         </th>
//                         <th className="px-3 py-2 text-center" colSpan="2">
//                           RODTEP
//                         </th>
//                       </tr>
//                       <tr className="bg-gray-50">
//                         <th className="px-3 py-1.5 text-left"></th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Total refund
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Receivable
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Total refund
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Receivable
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Total refund
//                         </th>
//                         <th className="px-3 py-1.5 text-center text-gray-600">
//                           Receivable
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.refunds.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className={`border-b ${
//                             row.year === "Total"
//                               ? "bg-green-50 font-bold"
//                               : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <td className="px-3 py-2 font-medium">{row.year}</td>
//                           <td className="px-3 py-2 text-center">
//                             {row.igstTotal.toFixed(2)}
//                           </td>
//                           <td className="px-3 py-2 text-center text-orange-600 font-semibold">
//                             {row.igstRecv.toFixed(2)}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.dbkTotal.toFixed(2)}
//                           </td>
//                           <td className="px-3 py-2 text-center text-orange-600 font-semibold">
//                             {row.dbkRecv.toFixed(2)}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.rodtepTotal.toFixed(2)}
//                           </td>
//                           <td className="px-3 py-2 text-center text-orange-600 font-semibold">
//                             {row.rodtepRecv.toFixed(2)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "material":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-cyan-600 text-white px-4 py-2 font-semibold text-sm">
//                   Pending GRN / Plant
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left"></th>
//                         <th className="px-3 py-2 text-center">Mundhwa</th>
//                         <th className="px-3 py-2 text-center">Ranjangaon</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.pendingGRN.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className={`border-b ${
//                             row.days === "Total"
//                               ? "bg-green-50 font-bold"
//                               : row.days === "More than 7 days"
//                               ? "bg-red-50"
//                               : "hover:bg-gray-50"
//                           }`}
//                         >
//                           <td className="px-3 py-2 font-medium">{row.days}</td>
//                           <td className="px-3 py-2 text-center">
//                             {row.mundhwa}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.ranjangaon}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                             {row.total}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-cyan-700 text-white px-4 py-2 font-semibold text-sm">
//                   101 and 561 recon
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <tbody>
//                       {module.deepDiveData.mismatch.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium">{row.type}</td>
//                           <td className="px-3 py-2 text-center">
//                             {row.mundhwa}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.ranjangaon}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                             {row.total}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-cyan-800 text-white px-4 py-2 font-semibold text-sm">
//                   Part movement
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Period</th>
//                         <th className="px-3 py-2 text-center">Parts Count</th>
//                         <th className="px-3 py-2 text-center">Value</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.partMovement.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2">
//                             No movement of parts in {row.period}
//                           </td>
//                           <td className="px-3 py-2 text-center">{row.count}</td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row.value)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "plant":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-rose-600 text-white px-4 py-2 font-semibold text-sm">
//                   Utilization of machines
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Machine</th>
//                         <th className="px-3 py-2 text-center">Mundhwa</th>
//                         <th className="px-3 py-2 text-center">Ranjangaon</th>
//                         <th className="px-3 py-2 text-center">Khed</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.utilization.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium">
//                             {row.machine}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.mundhwa !== null ? (
//                               <span
//                                 className={`font-semibold ${
//                                   row.mundhwa < 30
//                                     ? "text-red-600"
//                                     : row.mundhwa < 60
//                                     ? "text-yellow-600"
//                                     : "text-green-600"
//                                 }`}
//                               >
//                                 {row.mundhwa}%
//                               </span>
//                             ) : (
//                               "-"
//                             )}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.ranjangaon !== null ? (
//                               <span
//                                 className={`font-semibold ${
//                                   row.ranjangaon < 30
//                                     ? "text-red-600"
//                                     : row.ranjangaon < 60
//                                     ? "text-yellow-600"
//                                     : "text-green-600"
//                                 }`}
//                               >
//                                 {row.ranjangaon}%
//                               </span>
//                             ) : (
//                               "-"
//                             )}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.khed !== null ? (
//                               <span
//                                 className={`font-semibold ${
//                                   row.khed < 30
//                                     ? "text-red-600"
//                                     : row.khed < 60
//                                     ? "text-yellow-600"
//                                     : "text-green-600"
//                                 }`}
//                               >
//                                 {row.khed}%
//                               </span>
//                             ) : (
//                               "-"
//                             )}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-rose-700 text-white px-4 py-2 font-semibold text-sm">
//                   Rejection
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Month</th>
//                         <th className="px-3 py-2 text-center">Mundhwa</th>
//                         <th className="px-3 py-2 text-center">Ranjangaon</th>
//                         <th className="px-3 py-2 text-center">Khed</th>
//                         <th className="px-3 py-2 text-center bg-blue-50 font-bold">
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.rejection.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium">{row.month}</td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row.mundhwa)}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row.ranjangaon)}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {formatCurrency(row.khed)}
//                           </td>
//                           <td className="px-3 py-2 text-center bg-blue-50 font-semibold">
//                             {formatCurrency(row.total)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "consumption":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="text-sm text-gray-600">
//                   Filter for two random month comparison
//                 </div>
//               </div>
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-violet-600 text-white px-4 py-2 font-semibold text-sm">
//                   Material % change by more than 2% than previous month / Die
//                   number
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Die Number</th>
//                         <th className="px-3 py-2 text-center">Mundhwa</th>
//                         <th className="px-3 py-2 text-center">Ranjangaon</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.materialChange.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium">
//                             {row.dieNumber}
//                           </td>
//                           <td
//                             className={`px-3 py-2 text-center font-semibold ${
//                               row.mundhwa < 0
//                                 ? "text-red-600"
//                                 : row.mundhwa > 0
//                                 ? "text-green-600"
//                                 : ""
//                             }`}
//                           >
//                             {row.mundhwa !== 0
//                               ? `${row.mundhwa.toFixed(2)}%`
//                               : ""}
//                           </td>
//                           <td
//                             className={`px-3 py-2 text-center font-semibold ${
//                               row.ranjangaon < 0
//                                 ? "text-red-600"
//                                 : row.ranjangaon > 0
//                                 ? "text-green-600"
//                                 : ""
//                             }`}
//                           >
//                             {row.ranjangaon !== 0
//                               ? `${row.ranjangaon.toFixed(2)}%`
//                               : ""}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         case "dispatch":
//           return (
//             <div className="space-y-4">
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="bg-emerald-600 text-white px-4 py-2 font-semibold text-sm">
//                   Dispatch discipline
//                 </div>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-xs">
//                     <thead className="bg-gray-100">
//                       <tr>
//                         <th className="px-3 py-2 text-left">Metric</th>
//                         <th className="px-3 py-2 text-center">Mundhwa</th>
//                         <th className="px-3 py-2 text-center">Ranjangaon</th>
//                         <th className="px-3 py-2 text-center">Khed</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {module.deepDiveData.dispatch.map((row, idx) => (
//                         <tr key={idx} className="border-b hover:bg-gray-50">
//                           <td className="px-3 py-2 font-medium text-xs">
//                             {row.metric}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.metric === "Cancellation of invoice"
//                               ? row.mundhwa
//                               : `${row.mundhwa}%`}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.metric === "Cancellation of invoice"
//                               ? row.ranjangaon
//                               : `${row.ranjangaon}%`}
//                           </td>
//                           <td className="px-3 py-2 text-center">
//                             {row.metric === "Cancellation of invoice"
//                               ? row.khed
//                               : `${row.khed}%`}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           );

//         default:
//           return (
//             <div className="text-center text-gray-600 py-8">
//               Deep dive content for {module.title}
//             </div>
//           );
//       }
//     };

//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-auto">
//         <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//           <div
//             className={`bg-gradient-to-r ${module.color} text-white px-6 py-4 rounded-t-xl flex justify-between items-center sticky top-0 z-10`}
//           >
//             <div className="flex items-center">
//               {React.createElement(module.icon, {
//                 size: 28,
//                 className: "mr-3",
//               })}
//               <div>
//                 <h3 className="text-2xl font-bold">{module.title}</h3>
//                 <p className="text-sm opacity-90">{module.subtitle}</p>
//               </div>
//             </div>
//             <button
//               onClick={onClose}
//               className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <div className="p-6">{renderDeepDive()}</div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl">
//         <div className="max-w-[1920px] mx-auto px-6 py-3">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold flex items-center">
//                 <IndianRupee className="mr-2" size={28} />
//                 Ultimate Finance Dashboard
//               </h1>
//               <p className="text-xs text-blue-100">
//                 11 Modules • All Excel Data • Single Screen • Interactive Deep
//                 Dive
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="flex items-center bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse"></div>
//                 Live
//               </div>
//               <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded text-xs flex items-center gap-1">
//                 <RefreshCw size={14} />
//                 Refresh
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-[1920px] mx-auto px-4 py-3">
//         <div className="grid grid-cols-12 gap-3">
//           {/* Main Content - 11 Module Cards (9 columns) */}
//           <div className="col-span-9">
//             <div className="grid grid-cols-4 gap-3">
//               {modules.map((module) => {
//                 const Icon = module.icon;
//                 return (
//                   <div
//                     key={module.id}
//                     onClick={() => setSelectedModule(module)}
//                     className={`bg-gradient-to-br ${module.bgGradient} rounded-xl p-3 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl border-2 border-white`}
//                   >
//                     <div className="flex items-start justify-between mb-2">
//                       <div
//                         className={`bg-gradient-to-br ${module.color} p-2 rounded-lg shadow-md`}
//                       >
//                         <Icon className="text-white" size={20} />
//                       </div>
//                       <ChevronRight size={16} className="text-gray-400" />
//                     </div>
//                     <h3 className="font-bold text-sm text-gray-800 mb-1">
//                       {module.title}
//                     </h3>
//                     <p className="text-xs text-gray-600 mb-2">
//                       {module.subtitle}
//                     </p>
//                     <div className="space-y-1">
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">
//                           {module.summary.metric1}:
//                         </span>
//                         <span className="font-semibold text-gray-800">
//                           {module.summary.value1}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">
//                           {module.summary.metric2}:
//                         </span>
//                         <span className="font-semibold text-gray-800">
//                           {module.summary.value2}
//                         </span>
//                       </div>
//                       <div className="flex justify-between text-xs">
//                         <span className="text-gray-600">
//                           {module.summary.metric3}:
//                         </span>
//                         <span className="font-semibold text-gray-800">
//                           {module.summary.value3}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Sidebar - AI Chatbot (3 columns) */}
//           <div className="col-span-3">
//             <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-xl h-full flex flex-col">
//               <div className="p-3 border-b border-white border-opacity-20">
//                 <div className="flex items-center">
//                   <MessageSquare className="text-white mr-2" size={20} />
//                   <h3 className="text-white font-bold text-sm">AI Assistant</h3>
//                 </div>
//                 <p className="text-xs text-white text-opacity-80 mt-1">
//                   Ask about any module!
//                 </p>
//               </div>

//               <div
//                 className="flex-1 overflow-y-auto p-3 space-y-2"
//                 style={{ maxHeight: "calc(100vh - 300px)" }}
//               >
//                 {chatMessages.map((msg, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex ${
//                       msg.type === "user" ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
//                         msg.type === "user"
//                           ? "bg-white text-gray-800"
//                           : "bg-white bg-opacity-20 text-white"
//                       }`}
//                     >
//                       {msg.text}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="p-3 border-t border-white border-opacity-20">
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     value={chatInput}
//                     onChange={(e) => setChatInput(e.target.value)}
//                     onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                     placeholder="Ask about MIS, Sales, FI, GST..."
//                     className="flex-1 px-3 py-2 border border-white border-opacity-30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-60"
//                   />
//                   <button
//                     onClick={handleSendMessage}
//                     className="bg-white bg-opacity-30 hover:bg-opacity-40 text-white p-2 rounded-lg transition"
//                   >
//                     <Send size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {selectedModule && (
//         <DeepDiveModal
//           module={selectedModule}
//           onClose={() => setSelectedModule(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default CostScreener;




// Apne CostScreener.jsx mein simply import karein




// Import Zustand Store


// Themes Configuration
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
      highlightColor: "#ef4444"
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
    secondaryText: "text-gray-200",
    mutedText: "text-gray-400",
    border: "border-cyan-400/30",
    shadow: "shadow-2xl shadow-cyan-500/30",
    chartBg: "bg-gradient-to-br from-gray-900/95 via-purple-950/90 to-blue-950/80",
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

// Icon Map
var iconMap = {
  Consumables: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  Power: lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"],
  Fuel: lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
  Labour: lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"],
  "Sub Contract": lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"],
  "Machine Hire Charges": lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"],
  "Repair & Maintenance": lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  "Employee Cost": lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"],
  "Establishment Expenses": lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"],
  Packing: lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"],
  Freight: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"],
  "Raw Material": lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"]
};

// Month Names
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Helper Functions
var getMonthName = function getMonthName(monthNo) {
  return monthNames[monthNo - 1] || "";
};

// Custom Tooltip Component
var CustomTooltip = function CustomTooltip(_ref) {
  var active = _ref.active,
    payload = _ref.payload,
    label = _ref.label,
    theme = _ref.theme;
  if (active && payload && payload.length) {
    var uniqueEntries = payload.filter(function (entry, index, self) {
      if (entry.value === null || entry.value === undefined) return false;
      return self.findIndex(function (e) {
        return e.dataKey === entry.dataKey && e.value === entry.value;
      }) === index;
    });
    if (uniqueEntries.length === 0) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(theme.cardBg, " p-4 rounded-xl ").concat(theme.shadow, " ").concat(theme.border, " border")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm font-bold ".concat(theme.primaryText, " mb-3")
    }, label), uniqueEntries.map(function (entry, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "item-".concat(entry.dataKey, "-").concat(index),
        className: "text-sm mb-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "inline-block w-3 h-3 rounded-full mr-2",
        style: {
          backgroundColor: entry.color
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-semibold ".concat(theme.primaryText)
      }, entry.name, ":", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "font-bold ".concat(theme.primaryText)
      }, entry.dataKey.includes("Percent") || entry.dataKey.includes("Target") || entry.dataKey.includes("EBITDA") ? "".concat(entry.value, "%") : "\u20B9".concat(entry.value.toLocaleString())));
    }));
  }
  return null;
};

// Tab Toggle Component
var TabToggle = function TabToggle(_ref2) {
  var theme = _ref2.theme;
  var viewType = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.viewType;
  });
  var setViewType = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.setViewType;
  });
  var apiLoading = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.apiLoading;
  });
  var currentYear = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.currentYear;
  });
  var monthRange = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.monthRange;
  });
  var fetchCostData = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.fetchCostData;
  });
  var handleToggle = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(type) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setViewType(type);
            _context.next = 3;
            return fetchCostData(monthRange.from, monthRange.to, currentYear, type);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleToggle(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-semibold ".concat(theme.secondaryText)
  }, "View:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative flex items-center rounded-full p-1 border shadow-md ".concat(theme.cardBg, " ").concat(theme.border)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-1 left-1 h-9 w-28 rounded-full bg-gradient-to-r\n      ".concat(theme.accentGradient, " transition-all duration-300 ease-in-out ").concat(viewType === "production" ? "translate-x-0" : "translate-x-28")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleToggle("production");
    },
    disabled: apiLoading,
    className: "relative z-10 w-28 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors\n        ".concat(viewType === "production" ? "text-white" : "text-gray-600", "\n        ").concat(apiLoading ? "opacity-50 cursor-not-allowed" : "", "\n      ")
  }, apiLoading && viewType === "production" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
  }) : "Production"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleToggle("sale");
    },
    disabled: apiLoading,
    className: "relative z-10 w-28 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-colors\n        ".concat(viewType === "sale" ? "text-white" : "text-gray-600", "\n        ").concat(apiLoading ? "opacity-50 cursor-not-allowed" : "", "\n      ")
  }, apiLoading && viewType === "sale" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
  }) : "Sale")));
};

// Main Component
var CostScreener = function CostScreener() {
  // Zustand Store
  var viewType = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.viewType;
  });
  var setViewType = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.setViewType;
  });
  var apiData = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.apiData;
  });
  var apiLoading = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.apiLoading;
  });
  var apiError = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.apiError;
  });
  var selectedTheme = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.selectedTheme;
  });
  var setSelectedTheme = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.setSelectedTheme;
  });
  var selectedLocation = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.selectedLocation;
  });
  var setSelectedLocation = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.setSelectedLocation;
  });
  var fetchCostData = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.fetchCostData;
  });
  var currentYear = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.currentYear;
  });
  var monthRange = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.monthRange;
  });
  var currentPeriodMonth = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.currentPeriodMonth;
  });
  var setCurrentPeriodMonth = (0,_store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore)(function (state) {
    return state.setCurrentPeriodMonth;
  });

  // Local States
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showThemeSelector = _useState2[0],
    setShowThemeSelector = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCategory = _useState4[0],
    setSelectedCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("All"),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedLine = _useState6[0],
    setSelectedLine = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showCombinedValues = _useState8[0],
    setShowCombinedValues = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    expandedCards = _useState10[0],
    setExpandedCards = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    cardCurrentMonths = _useState12[0],
    setCardCurrentMonths = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    breakdownCards = _useState14[0],
    setBreakdownCards = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    actionModal = _useState16[0],
    setActionModal = _useState16[1];
  var cardRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var themeSelectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var currentTheme = themes[selectedTheme];
  var handleLocationSelect = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(locationName) {
      var _useCostStore$getStat, monthRange, currentYear, viewType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setSelectedLocation(locationName);
            _useCostStore$getStat = _store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore.getState(), monthRange = _useCostStore$getStat.monthRange, currentYear = _useCostStore$getStat.currentYear, viewType = _useCostStore$getStat.viewType;
            _context2.next = 4;
            return fetchCostData(monthRange.from, monthRange.to, currentYear, viewType);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleLocationSelect(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var openPowerForm = function openPowerForm() {
    window.location.href = "".concat(window.location.origin, "/kalyani.iot/costing_entry");
  };
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
    }]
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

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    console.log("🚀 Component Mounted - Initializing");
    var today = new Date();
    var currentMonth = today.getMonth() + 1;
    setCurrentPeriodMonth(currentMonth);
    var to = currentMonth;
    var from = currentMonth - 5;
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handleClickOutside(event) {
      if (themeSelectorRef.current && !themeSelectorRef.current.contains(event.target)) {
        setShowThemeSelector(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Transform API Data to Chart Format
  var transformApiDataToChartFormat = function transformApiDataToChartFormat() {
    if (!apiData || apiData.length === 0) {
      return null;
    }
    var monthlyData = {};
    apiData.forEach(function (item) {
      var monthName = getMonthName(item.month_no);
      if (!monthlyData[monthName]) {
        monthlyData[monthName] = {
          month: monthName,
          monthNo: item.month_no,
          costs: {},
          total: 0,
          count: 0
        };
      }
      var costHead = (item.cost_head || "Other").trim();
      var amount = parseFloat(item.total_amount || 0);
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
    var sortedData = Object.values(monthlyData).filter(function (m) {
      return m.count > 0;
    }).sort(function (a, b) {
      return a.monthNo - b.monthNo;
    });
    if (sortedData.length === 0) {
      return null;
    }
    var finalData = sortedData.map(function (monthData) {
      return {
        month: monthData.month,
        TotalActual: parseFloat(monthData.total.toFixed(2)),
        TotalPredicted: null,
        EBITDAActual: null,
        EBITDABudget: null,
        PercentActual: null,
        PercentPredicted: null,
        PercentTarget: 20,
        rawData: monthData.costs
      };
    });
    return finalData;
  };

  // Transform API Data to KPI Cards
  var transformApiDataToKpiCards = function transformApiDataToKpiCards() {
    if (!apiData || apiData.length === 0) {
      return [];
    }
    var costHeadData = {};
    apiData.forEach(function (item) {
      var costHead = (item.cost_head || "Other").trim();
      var monthNo = item.month_no;
      var costValue = parseFloat(item.cost_per_ton);
      if (!costValue || isNaN(costValue)) {
        var totalAmount = parseFloat(item.total_amount || 0);
        var totalTonn = parseFloat(item.total_tonn || 1);
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
          monthlyAmounts: {}
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
    var kpiCards = Object.values(costHeadData).map(function (costHead) {
      var months = Object.keys(costHead.monthlyAmounts).map(Number).sort(function (a, b) {
        return a - b;
      });
      var trend = months.map(function (month) {
        return costHead.monthlyAmounts[month];
      });
      var lastMonthAmount = trend[trend.length - 1] || 0;
      var avgAmount = trend.reduce(function (a, b) {
        return a + b;
      }, 0) / trend.length;
      var budgetAmount = avgAmount * 1.05;
      return {
        kpiName: costHead.kpiName,
        actual_per_tonne: parseFloat(lastMonthAmount.toFixed(2)),
        budget_per_tonne: parseFloat(budgetAmount.toFixed(2)),
        trend: trend.map(function (val) {
          return parseFloat(val.toFixed(2));
        }),
        monthly_costs: trend.map(function (val) {
          return parseFloat(val.toFixed(2));
        }),
        monthly_budget: trend.map(function () {
          return parseFloat(budgetAmount.toFixed(2));
        }),
        production_percentage: null,
        target_percentage: null,
        months: months
      };
    });
    return kpiCards;
  };
  var getTopCostContributors = function getTopCostContributors(kpiName, cardCurrentMonth) {
    if (!apiData || apiData.length === 0) return [];
    var kpiData = apiData.filter(function (item) {
      return (item.cost_head || "Other").trim() === kpiName && item.month_no === cardCurrentMonth;
    });
    if (kpiData.length === 0) return [];
    var contributors = {};
    kpiData.forEach(function (item) {
      var key = item.sub_category || item.cost_head || "Other";
      var amount = parseFloat(item.total_amount || 0);
      if (!contributors[key]) {
        contributors[key] = 0;
      }
      contributors[key] += amount;
    });
    var sorted = Object.entries(contributors).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
        name = _ref6[0],
        amount = _ref6[1];
      return {
        name: name,
        amount: amount
      };
    }).sort(function (a, b) {
      return b.amount - a.amount;
    }).slice(0, 10);
    return sorted;
  };

  // Get Current Data (KPI Cards)
  var getCurrentData = function getCurrentData() {
    if (apiData && apiData.length > 0) {
      var cards = transformApiDataToKpiCards();
      return cards;
    }
    return [];
  };

  // Build Chart Data for Individual KPI Card with specific current month
  var buildChartData = function buildChartData(kpi, cardCurrentMonth) {
    var _kpi$target_percentag, _historicalData, _kpi$production_perce2;
    if (!kpi || !kpi.trend) return [];
    var avgTrendValue = kpi.trend.reduce(function (a, b) {
      return a + b;
    }, 0) / kpi.trend.length;
    var targetValue = kpi.budget_per_tonne && kpi.actual_per_tonne ? avgTrendValue * (kpi.budget_per_tonne / kpi.actual_per_tonne) : (avgTrendValue || 0) * 1.05;
    var avgTargetPercent = ((_kpi$target_percentag = kpi.target_percentage) === null || _kpi$target_percentag === void 0 ? void 0 : _kpi$target_percentag.length) > 0 ? kpi.target_percentage.reduce(function (a, b) {
      return a + b;
    }, 0) / kpi.target_percentage.length : null;
    var historicalData = kpi.trend.map(function (value, index) {
      var _kpi$production_perce;
      var actualMonthNo = kpi.months ? kpi.months[index] : monthRange.from + index;
      var monthIndex = (actualMonthNo - 1) % 12;
      var isCurrentMonth = actualMonthNo === cardCurrentMonth;
      return {
        month: monthNames[monthIndex] || "M".concat(index + 1),
        monthNo: actualMonthNo,
        actual: parseFloat(value.toFixed(2)),
        prediction: null,
        target: targetValue,
        productionPercentPredicted: null,
        productionPercent: ((_kpi$production_perce = kpi.production_percentage) === null || _kpi$production_perce === void 0 ? void 0 : _kpi$production_perce[index]) || null,
        productionTarget: avgTargetPercent,
        isHistorical: true,
        isHighlighted: isCurrentMonth,
        variance: value - targetValue
      };
    });
    var lastValue = kpi.trend[kpi.trend.length - 1];
    var prevValue = kpi.trend[kpi.trend.length - 2] || lastValue;
    var costDirection = lastValue >= prevValue ? 1 : -1;
    var lastMonthNo = ((_historicalData = historicalData[historicalData.length - 1]) === null || _historicalData === void 0 ? void 0 : _historicalData.monthNo) || 12;
    var nextMonthNo = lastMonthNo % 12 + 1;
    var monthIndex = (nextMonthNo - 1) % 12;
    var stepChange = Math.abs(lastValue - prevValue) * 0.2 || lastValue * 0.05;
    var predictedValue = lastValue + costDirection * stepChange;
    var percentLength = ((_kpi$production_perce2 = kpi.production_percentage) === null || _kpi$production_perce2 === void 0 ? void 0 : _kpi$production_perce2.length) || 0;
    var lastPercent = percentLength > 0 ? kpi.production_percentage[percentLength - 1] : null;
    var predictionData = [{
      month: monthNames[monthIndex] || "M".concat(monthIndex + 1),
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
      variance: predictedValue - targetValue
    }];
    return [].concat(_toConsumableArray(historicalData), predictionData);
  };

  // Custom Label Component
  var renderCustomLabel = function renderCustomLabel(props, theme) {
    var x = props.x,
      y = props.y,
      value = props.value,
      viewBox = props.viewBox;
    if (!value || value === null) return null;
    var midPoint = (viewBox.width || 400) / 2;
    var showAbove = x < midPoint;
    var offsetY = showAbove ? -12 : 12;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("text", {
      x: x,
      y: y + offsetY,
      fill: theme.primaryText,
      fontSize: "11",
      fontWeight: "700",
      textAnchor: "middle",
      className: "transition-all duration-200"
    }, typeof value === "number" ? value % 1 === 0 ? value : value.toFixed(1) : value);
  };

  // Render Combined Chart
  var renderCombinedChart = function renderCombinedChart() {
    var baseData = transformApiDataToChartFormat();
    if (apiLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(currentTheme.cardBg, " rounded-xl p-8 text-center ").concat(currentTheme.shadow, " m-6")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "mt-4 ".concat(currentTheme.secondaryText, " font-bold text-base")
      }, "Loading ", viewType, " cost data..."));
    }
    if (apiError) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(currentTheme.cardBg, " rounded-xl p-8 text-center ").concat(currentTheme.shadow, " m-6")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-red-600 text-3xl mb-4"
      }, "\u26A0\uFE0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-red-600 font-bold text-base mb-2"
      }, "Error loading data"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "".concat(currentTheme.secondaryText, " text-sm font-medium mb-4")
      }, apiError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          fetchCostData(monthRange.from, monthRange.to, currentYear, viewType);
        },
        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
      }, "Retry"));
    }
    if (!baseData || baseData.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(currentTheme.cardBg, " rounded-xl p-8 text-center ").concat(currentTheme.shadow, " m-6")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-gray-400 text-5xl mb-4"
      }, "\uD83D\uDCCA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "".concat(currentTheme.primaryText, " font-bold text-lg mb-2")
      }, "No Data Available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "".concat(currentTheme.secondaryText, " text-sm font-medium mb-4")
      }, "No ", viewType, " data found for the selected period."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick() {
          fetchCostData(monthRange.from, monthRange.to, currentYear, viewType);
        },
        className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold"
      }, "Load Data"));
    }
    var combinedData = [];
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fixed top-4 right-4 z-50 flex items-center gap-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: openPowerForm // 👈 Yahan click pe navigate hoga
      ,
      className: "p-3 rounded-full ".concat(currentTheme.cardBg, " ").concat(currentTheme.border, " border ").concat(currentTheme.shadow, " transition-all duration-300 hover:scale-110 group relative overflow-hidden"),
      title: "Machine Power Unit Entry"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "w-6 h-6 relative z-10 text-blue-600"
    }), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative",
      ref: themeSelectorRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowThemeSelector(!showThemeSelector);
      },
      className: "p-3 rounded-full ".concat(currentTheme.cardBg, " ").concat(currentTheme.border, " border ").concat(currentTheme.shadow, " transition-all duration-300 hover:scale-110 group relative overflow-hidden")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: "w-6 h-6 relative z-10"
    })), showThemeSelector && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute right-0 mt-2 w-64 ".concat(currentTheme.cardBg, " rounded-xl ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border overflow-hidden")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-3 ".concat(currentTheme.primaryText, " font-bold text-sm border-b ").concat(currentTheme.border, " bg-gradient-to-r ").concat(currentTheme.buttonBg)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"], {
      className: "w-4 h-4"
    }), "Choose Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "max-h-96 overflow-y-auto"
    }, Object.entries(themes).map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        key = _ref8[0],
        theme = _ref8[1];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        key: key,
        onClick: function onClick() {
          setSelectedTheme(key);
          setShowThemeSelector(false);
        },
        className: "w-full px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-all ".concat(selectedTheme === key ? "bg-gradient-to-r ".concat(theme.buttonBg) : "")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-8 h-8 rounded-lg bg-gradient-to-br ".concat(theme.accentGradient, " shadow-sm")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-sm font-bold ".concat(theme.primaryText)
      }, theme.name)), selectedTheme === key && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: "w-4 h-4 ".concat(theme.primaryText)
      }));
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.chartBg, " rounded-2xl ").concat(currentTheme.shadow, " p-4 ").concat(currentTheme.border, " border transition-all duration-300")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xxl font-bold ".concat(currentTheme.primaryText)
    }, "Manufacturing Cost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex gap-2 items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        return setShowCombinedValues(!showCombinedValues);
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ".concat(showCombinedValues ? "bg-gradient-to-r ".concat(currentTheme.accentGradient, " text-white font-bold shadow-md") : "bg-gray-100 ".concat(currentTheme.secondaryText, " hover:bg-gray-200"))
    }, "Values"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_18__.ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_19__.LineChart, {
      data: combinedData,
      margin: {
        top: 20,
        right: 50,
        left: 10,
        bottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_20__.XAxis, {
      dataKey: "month",
      tick: {
        fontSize: 15,
        fontWeight: 600
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_21__.YAxis, {
      tick: {
        fontSize: 15,
        fontWeight: 600
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_22__.Tooltip, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
        theme: currentTheme
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_23__.Legend, {
      wrapperStyle: {
        fontSize: "15px",
        fontWeight: 600
      }
    }), dynamicTarget && dynamicTarget > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_24__.ReferenceLine, {
      y: dynamicTarget,
      stroke: currentTheme.chartColors.targetLine,
      strokeWidth: 2,
      label: {
        value: "Target: \u20B9".concat(Math.round(dynamicTarget).toLocaleString()),
        position: "right",
        fill: currentTheme.chartColors.targetLine,
        fontSize: 15,
        fontWeight: "bold"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.Line, {
      type: "monotone",
      dataKey: "TotalActual",
      stroke: currentTheme.chartColors.actualLine,
      strokeWidth: 2.5,
      name: "Actual Cost",
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: {
        r: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.Line, {
      type: "monotone",
      dataKey: "TotalPredicted",
      stroke: currentTheme.chartColors.predictedLine,
      strokeWidth: 2.5,
      name: "Predicted Cost",
      strokeDasharray: "5 5",
      label: showCombinedValues ? function (props) {
        return renderCustomLabel(props, currentTheme);
      } : false,
      dot: {
        r: 5
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "".concat(currentTheme.chartBg, " rounded-2xl ").concat(currentTheme.shadow, " p-4 ").concat(currentTheme.border, " border")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xxl font-bold ".concat(currentTheme.primaryText)
    }, "EBITDA Performance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-64"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_18__.ResponsiveContainer, {
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_19__.LineChart, {
      data: combinedData,
      margin: {
        top: 20,
        right: 50,
        left: 10,
        bottom: 10
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_26__.CartesianGrid, {
      stroke: currentTheme.gridColor
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_20__.XAxis, {
      dataKey: "month",
      tick: {
        fontSize: 15,
        fontWeight: 600
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_21__.YAxis, {
      tick: {
        fontSize: 15,
        fontWeight: 600
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_22__.Tooltip, {
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
        theme: currentTheme
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_23__.Legend, {
      wrapperStyle: {
        fontSize: "15px",
        fontWeight: 600
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.Line, {
      type: "monotone",
      dataKey: "EBITDABudget",
      stroke: currentTheme.chartColors.ebitdaBudget,
      strokeWidth: 2.5,
      name: "EBITDA Budget %",
      dot: {
        r: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.Line, {
      type: "monotone",
      dataKey: "EBITDAActual",
      stroke: currentTheme.chartColors.ebitdaActual,
      strokeWidth: 2.5,
      name: "EBITDA Actual %",
      dot: {
        r: 5
      }
    })))))));
  };

  // Render Cards View
  var renderCardsView = function renderCardsView() {
    var data = getCurrentData();
    if (!data || data.length === 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(currentTheme.cardBg, " rounded-2xl ").concat(currentTheme.shadow, " p-12 text-center")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: "w-16 h-16 ".concat(currentTheme.mutedText, " mx-auto mb-4")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
        className: "text-lg font-bold ".concat(currentTheme.secondaryText, " mb-2")
      }, "No Data Available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "".concat(currentTheme.mutedText, " font-medium")
      }, "Switch between Production and Sale tabs to view data."));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative min-h-96 rounded-2xl overflow-hidden"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute inset-0 bg-gradient-to-br ".concat(currentTheme.cardGradient, " transition-all duration-500")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative z-10 p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    }, data.map(function (kpi, idx) {
      var _chartData$Math$max, _chartData$Math$min;
      var IconComponent = iconMap[kpi.kpiName] || lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"];
      var cardCurrentMonth = cardCurrentMonths[kpi.kpiName] || currentPeriodMonth;
      var chartData = buildChartData(kpi, cardCurrentMonth);
      var currentMonthIndex = chartData.findIndex(function (d) {
        return d.monthNo === cardCurrentMonth;
      });
      var highlightIndex = currentMonthIndex >= 0 ? currentMonthIndex : chartData.filter(function (d) {
        return d.isHistorical;
      }).length - 1;
      if (!cardRefs.current[kpi.kpiName]) {
        cardRefs.current[kpi.kpiName] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
      }
      var isModalOpen = actionModal && actionModal.kpiName === kpi.kpiName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: "".concat(kpi.kpiName, "-").concat(idx),
        ref: cardRefs.current[kpi.kpiName],
        className: "".concat(currentTheme.cardBg, " backdrop-blur-sm rounded-2xl ").concat(currentTheme.shadow, " ").concat(currentTheme.hoverGlow, " transition-all duration-300 p-5 ").concat(currentTheme.border, " border group relative overflow-visible")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between px-3 py-2 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "w-10 h-10 rounded-lg bg-gradient-to-br ".concat(currentTheme.accentGradient, " flex items-center justify-center")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
        className: "w-6 h-6 text-white"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-xxl font-extrabold text-slate-800"
      }, kpi.kpiName)), function () {
        var actual = kpi.actual_per_tonne;
        var budget = kpi.budget_per_tonne;
        var variance = (actual - budget) / budget * 100;
        var isOverBudget = actual > budget;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex items-center gap-1 px-3 py-1 rounded-full ".concat(isOverBudget ? "bg-red-100" : "bg-green-100")
        }, isOverBudget ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_27__["default"], {
          className: "w-4 h-4 text-red-700"
        }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_28__["default"], {
          className: "w-4 h-4 text-green-700"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "text-3xl font-extrabold ".concat(isOverBudget ? "text-red-700" : "text-green-700")
        }, Math.abs(variance).toFixed(1), "%"));
      }()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "relative h-56 mb-3",
        style: {
          cursor: isModalOpen ? "default" : "pointer",
          zIndex: isModalOpen ? 1 : 1,
          pointerEvents: isModalOpen ? "none" : "all"
        },
        onClick: function onClick(e) {
          if (isModalOpen) return;
          e.stopPropagation();
          var rect = e.currentTarget.getBoundingClientRect();
          var clickX = e.clientX - rect.left;
          var clickY = e.clientY - rect.top;
          var chartWidth = rect.width - 10;
          var historicalPoints = chartData.filter(function (d) {
            return d.isHistorical;
          });
          var pointSpacing = chartWidth / (historicalPoints.length + 1);
          var clickedIndex = Math.round(clickX / pointSpacing) - 1;
          if (clickedIndex >= 0 && clickedIndex < historicalPoints.length) {
            var point = historicalPoints[clickedIndex];
            if (point) {
              setActionModal({
                kpiName: kpi.kpiName,
                month: point.month,
                x: clickX,
                y: clickY
              });
            }
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_18__.ResponsiveContainer, {
        width: "100%",
        height: "100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_29__.ComposedChart, {
        data: chartData,
        margin: {
          top: 5,
          right: 5,
          left: 0,
          bottom: 5
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_20__.XAxis, {
        dataKey: "month",
        tick: {
          fontSize: 15,
          fontWeight: 600
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_21__.YAxis, {
        tick: {
          fontSize: 15,
          fontWeight: 600
        },
        domain: ["dataMin", "dataMax"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_22__.Tooltip, {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomTooltip, {
          theme: currentTheme
        })
      }), highlightIndex >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_30__.ReferenceArea, {
        x1: (_chartData$Math$max = chartData[Math.max(0, highlightIndex - 0.4)]) === null || _chartData$Math$max === void 0 ? void 0 : _chartData$Math$max.month,
        x2: (_chartData$Math$min = chartData[Math.min(chartData.length - 1, highlightIndex + 0.4)]) === null || _chartData$Math$min === void 0 ? void 0 : _chartData$Math$min.month,
        fill: currentTheme.chartColors.highlightColor,
        fillOpacity: 0.1,
        strokeOpacity: 0.3
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_31__.Area, {
        type: "monotone",
        dataKey: "actual",
        fill: currentTheme.chartColors.actualLine,
        fillOpacity: 0.2,
        stroke: "none"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(recharts__WEBPACK_IMPORTED_MODULE_25__.Line, {
        type: "monotone",
        dataKey: "actual",
        stroke: currentTheme.chartColors.actualLine,
        strokeWidth: 2,
        dot: function dot(props) {
          var cx = props.cx,
            cy = props.cy,
            index = props.index,
            payload = props.payload;
          var isHighlight = index === highlightIndex;
          var isHistorical = payload.isHistorical;
          if (!isHistorical) return null;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
            cx: cx,
            cy: cy,
            r: isHighlight ? 7 : 3,
            fill: isHighlight ? currentTheme.chartColors.highlightColor : currentTheme.chartColors.actualLine,
            stroke: isHighlight ? "white" : "none",
            strokeWidth: isHighlight ? 2 : 0,
            style: {
              filter: isHighlight ? "drop-shadow(0px 0px 6px ".concat(currentTheme.chartColors.highlightColor, ")") : "none"
            }
          });
        },
        activeDot: {
          r: 8,
          stroke: "white",
          strokeWidth: 2,
          fill: currentTheme.chartColors.highlightColor
        }
      })))), breakdownCards[kpi.kpiName] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mt-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 shadow-xl border-2 border-orange-300",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "text-base font-bold text-gray-800 flex items-center gap-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_32__["default"], {
        className: "w-5 h-5 text-orange-600"
      }), "Top 10 Cost Contributors - ", kpi.kpiName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: function onClick(e) {
          e.stopPropagation();
          setBreakdownCards(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, false));
          });
        },
        className: "p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all shadow-md hover:shadow-lg"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_33__["default"], {
        className: "w-4 h-4"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "space-y-2"
      }, getTopCostContributors(kpi.kpiName, cardCurrentMonth).length > 0 ? getTopCostContributors(kpi.kpiName, cardCurrentMonth).map(function (contributor, index) {
        var total = getTopCostContributors(kpi.kpiName, cardCurrentMonth).reduce(function (sum, c) {
          return sum + c.amount;
        }, 0);
        var percentage = contributor.amount / total * 100;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: index,
          className: "bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex items-center justify-between mb-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "flex items-center gap-2"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white text-xs font-bold flex items-center justify-center"
        }, index + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "font-bold text-gray-800 text-sm"
        }, contributor.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-sm font-bold text-orange-600"
        }, "\u20B9", contributor.amount.toLocaleString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "text-xs font-semibold text-gray-500"
        }, percentage.toFixed(1), "%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "w-full bg-gray-200 rounded-full h-2.5"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "bg-gradient-to-r from-orange-400 to-red-500 h-2.5 rounded-full transition-all duration-500",
          style: {
            width: "".concat(percentage, "%")
          }
        })));
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "text-center py-8 text-gray-500"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_34__["default"], {
        className: "w-12 h-12 mx-auto mb-2 text-gray-400"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "font-bold"
      }, "No breakdown data available"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "text-sm font-medium"
      }, "for ", getMonthName(cardCurrentMonth), " month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "mt-4 pt-4 border-t border-orange-200"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "flex items-center justify-between text-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-gray-600 font-bold"
      }, "Showing for: ", getMonthName(cardCurrentMonth)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "text-gray-500 font-medium"
      }, "Double-click again to close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "absolute inset-0 cursor-pointer",
        style: {
          zIndex: 0,
          pointerEvents: isModalOpen ? "none" : "all"
        },
        onDoubleClick: function onDoubleClick(e) {
          if (isModalOpen) return;
          e.stopPropagation();
          setBreakdownCards(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, kpi.kpiName, !prev[kpi.kpiName]));
          });
        }
      }), isModalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ActionInsightsModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
        kpiName: actionModal.kpiName,
        month: actionModal.month,
        position: {
          x: actionModal.x,
          y: actionModal.y
        },
        cardRef: cardRefs.current[kpi.kpiName],
        onClose: function onClose() {
          setActionModal(null);
        }
      }));
    }))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full mx-auto p-4 min-h-screen transition-all duration-500 ".concat(currentTheme.mainBg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(currentTheme.cardBg, " rounded-2xl ").concat(currentTheme.shadow, " ").concat(currentTheme.border, " border p-4 mb-4")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap items-center gap-4 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, ["All", "Forging", "Machining"].map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: category,
      onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _useCostStore$getStat2, monthRange, currentYear;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
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
              _useCostStore$getStat2 = _store_costStore__WEBPACK_IMPORTED_MODULE_4__.useCostStore.getState(), monthRange = _useCostStore$getStat2.monthRange, currentYear = _useCostStore$getStat2.currentYear;
              _context3.next = 5;
              return fetchCostData(monthRange.from, monthRange.to, currentYear, "production" // ⭐ Hardcode to production for category selection
              );
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      })),
      className: "px-4 py-2 text-sm rounded-xl font-bold transition-all ".concat(selectedCategory === category ? "bg-gradient-to-r ".concat(currentTheme.accentGradient, " text-white shadow-lg scale-105") : "".concat(currentTheme.buttonBg, " ").concat(currentTheme.primaryText, " hover:scale-105 ").concat(currentTheme.buttonHover))
    }, category);
  })), selectedCategory !== "All" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-8 w-px bg-gray-300"
  }), selectedCategory !== "All" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-bold ".concat(currentTheme.mutedText, " uppercase")
  }, "Location:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, locationsByCategory[selectedCategory].map(function (location) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: location.code,
      onClick: function onClick() {
        return handleLocationSelect(location.name);
      },
      className: "px-3 py-1.5 rounded-lg text-sm font-bold transition-all ".concat(selectedLocation === location.name ? "bg-gradient-to-r ".concat(currentTheme.accentGradient, " text-white shadow-md") : "bg-gray-100 ".concat(currentTheme.primaryText, " hover:bg-gray-200"))
    }, location.code);
  }))), selectedCategory !== "All" && selectedLocation && linesByLocation[selectedLocation] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "h-8 w-px bg-gray-300"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-bold ".concat(currentTheme.mutedText, " uppercase")
  }, "Line:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedLine,
    onChange: function onChange(e) {
      return setSelectedLine(e.target.value);
    },
    className: "px-3 py-1.5 rounded-lg text-xs font-bold border ".concat(currentTheme.border, " ").concat(currentTheme.cardBg, " focus:outline-none focus:ring-2 focus:ring-blue-400")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "All"
  }, "All Lines"), linesByLocation[selectedLocation].map(function (line) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: line.code,
      value: line.code
    }, line.name, " - ", line.capacity);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabToggle, {
    theme: currentTheme
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border ".concat(currentTheme.border)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MonthRangeSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: currentTheme,
    compact: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, renderCombinedChart(), renderCardsView()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CostScreener);

/***/ })

}]);
//# sourceMappingURL=src_components_AllPlants_jsx.dev.54c8fa7969b70e60a717.js.map