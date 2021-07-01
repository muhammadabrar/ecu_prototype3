self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comp/nav.js":
/*!*********************!*\
  !*** ./comp/nav.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit */ "./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js");
/* harmony import */ var _comp_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comp/nav */ "./comp/nav.js");
/* harmony import */ var _comp_nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_comp_nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comp_landing_intro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comp/landing-intro */ "./comp/landing-intro.js");
/* harmony import */ var _comp_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comp/services */ "./comp/services.js");
/* harmony import */ var _comp_files__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comp/files */ "./comp/files.js");
/* harmony import */ var _comp_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comp/about */ "./comp/about.js");
/* harmony import */ var _comp_stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comp/stats */ "./comp/stats.js");
/* harmony import */ var _comp_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comp/footer */ "./comp/footer.js");
/* harmony import */ var _comp_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comp/contact */ "./comp/contact.js");
/* harmony import */ var _comp_feedback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comp/feedback */ "./comp/feedback.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\work\\ECU\\main\\pages\\index.js";












function App() {
  var Options1 = [{
    value: 1,
    label: "warka sdsdang"
  }, {
    value: 2,
    label: "dsad dang"
  }, {
    value: 3,
    label: "warka ddddang"
  }, {
    value: 4,
    label: "warkdsda dang"
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_comp_nav__WEBPACK_IMPORTED_MODULE_3___default()), {
      value: 200,
      page: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_landing_intro__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "main",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_services__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "line border"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_files__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_about__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_stats__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_feedback__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_contact__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 1
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comp_footer__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 1
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c = App;

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwiT3B0aW9uczEiLCJ2YWx1ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsR0FBVCxHQUFlO0FBSTlCLE1BQUlDLFFBQVEsR0FBRyxDQUFDO0FBQUNDLFNBQUssRUFBRSxDQUFSO0FBQVdDLFNBQUssRUFBRTtBQUFsQixHQUFELEVBQXFDO0FBQUNELFNBQUssRUFBRSxDQUFSO0FBQVdDLFNBQUssRUFBRTtBQUFsQixHQUFyQyxFQUFxRTtBQUFDRCxTQUFLLEVBQUUsQ0FBUjtBQUFXQyxTQUFLLEVBQUU7QUFBbEIsR0FBckUsRUFBd0c7QUFBQ0QsU0FBSyxFQUFFLENBQVI7QUFBV0MsU0FBSyxFQUFFO0FBQWxCLEdBQXhHLENBQWY7QUFDRSxzQkFDSTtBQUFBLDRCQUVELDhEQUFDLGtEQUFEO0FBQUssV0FBSyxFQUFFLEdBQVo7QUFBaUIsVUFBSSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQyxlQUdGLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRSxlQUtGO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDSiw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREksZUFFSjtBQUFNLGlCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZJLGVBR0osOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhJLGVBSUosOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpJLGVBS0osOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxJLGVBTUosOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5JLGVBT0osOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBJLGVBUUosOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxFO0FBQUEsa0JBREo7QUF3QkQ7S0E3QnVCSCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmOWVjZWI0NzY3Yjc1ZGMzZmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTURCQ29udGFpbmVyLFxyXG4gIE1EQk5hdmJhcixcclxuICBNREJOYXZiYXJCcmFuZCxcclxuICBNREJOYXZiYXJUb2dnbGVyLFxyXG4gIE1EQkljb24sXHJcbiAgTURCTmF2YmFyTmF2LFxyXG4gIE1EQk5hdmJhckl0ZW0sXHJcbiAgTURCTmF2YmFyTGluayxcclxuICBNREJCdG4sXHJcbiAgTURCRHJvcGRvd24sXHJcbiAgTURCRHJvcGRvd25Ub2dnbGUsXHJcbiAgTURCRHJvcGRvd25NZW51LFxyXG4gIE1EQkRyb3Bkb3duSXRlbSxcclxuICBNREJEcm9wZG93bkxpbmssXHJcbiAgTURCQ29sbGFwc2UsIE1EQlJvdywgTURCQ29sLCBNREJJbnB1dCwgIE1EQkNhcmQsIE1EQlRhYmxlLCBNREJUYWJsZUhlYWQsIE1EQlRhYmxlQm9keSxNREJJbnB1dEdyb3VwLE1EQklucHV0R3JvdXBUZXh0LCBNREJJbnB1dEdyb3VwRWxlbWVudCxcclxufSBmcm9tICdtZGItcmVhY3QtdWkta2l0JztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXAvbmF2J1xyXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcC9sYW5kaW5nLWludHJvJ1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vY29tcC9zZXJ2aWNlcydcclxuaW1wb3J0IEZpbGVzIGZyb20gJy4uL2NvbXAvZmlsZXMnXHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wL2Fib3V0J1xyXG5pbXBvcnQgU3RhdGVzIGZyb20gJy4uL2NvbXAvc3RhdHMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcC9mb290ZXInXHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXAvY29udGFjdCdcclxuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4uL2NvbXAvZmVlZGJhY2snXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIFxyXG4gIFxyXG5cclxubGV0IE9wdGlvbnMxID0gW3t2YWx1ZTogMSwgbGFiZWw6IFwid2Fya2Egc2RzZGFuZ1wifSwge3ZhbHVlOiAyLCBsYWJlbDogXCJkc2FkIGRhbmdcIn0gLHt2YWx1ZTogMywgbGFiZWw6IFwid2Fya2EgZGRkZGFuZ1wifSx7dmFsdWU6IDQsIGxhYmVsOiBcIndhcmtkc2RhIGRhbmdcIn1dXHJcbiAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICBcclxuICAgICA8TmF2IHZhbHVlPXsyMDB9IHBhZ2U9e1wiSG9tZVwifS8+IFxyXG4gICAgPEludHJvIC8+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG48U2VydmljZXMgLz5cclxuPHNwYW4gY2xhc3NOYW1lPVwibGluZSBib3JkZXJcIj48L3NwYW4+XHJcbjxGaWxlcyAvPlxyXG48QWJvdXQgLz5cclxuPFN0YXRlcyAvPlxyXG48RmVlZGJhY2sgLz5cclxuPENvbnRhY3QgLz5cclxuPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIFxyXG4gIDwvPlxyXG5cclxuXHJcblxyXG5cclxuKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=