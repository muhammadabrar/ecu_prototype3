self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./comp/intro.js":
/*!***********************!*\
  !*** ./comp/intro.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Intro; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-react-ui-kit */ "./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\work\\ECU\\main\\comp\\intro.js";

function Intro(props) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "other-page",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "other-bg",
      style: {
        backgroundImage: "url('./l-bg.jpg')"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "other-page-content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBreadcrumb, {
          children: props.links.map(function (link) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: link.active ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBreadcrumbItem, {
                children: link.link
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 28
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBreadcrumbItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: link.url,
                  children: link.link
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 81
              }, _this)
            }, void 0, false);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 4
  }, this);
}
_c = Intro;

var _c;

$RefreshReg$(_c, "Intro");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9pbnRyby5qcyJdLCJuYW1lcyI6WyJJbnRybyIsInByb3BzIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJsaW5rcyIsIm1hcCIsImxpbmsiLCJhY3RpdmUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEMsc0JBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBMEIsV0FBSyxFQUFFO0FBQUVDLHVCQUFlLEVBQUU7QUFBbkI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUs7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw4QkFDSTtBQUFBLGtCQUFLRCxLQUFLLENBQUNFO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSwrQkFDSiw4REFBQywyREFBRDtBQUFBLG9CQUNLRixLQUFLLENBQUNHLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsZ0NBQ2pCO0FBQUEsd0JBQUdBLElBQUksQ0FBQ0MsTUFBTCxnQkFBWSw4REFBQywrREFBRDtBQUFBLDBCQUFxQkQsSUFBSSxDQUFDQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFaLGdCQUFpRSw4REFBQywrREFBRDtBQUFBLHVDQUNoRTtBQUFHLHNCQUFJLEVBQUVBLElBQUksQ0FBQ0UsR0FBZDtBQUFBLDRCQUFvQkYsSUFBSSxDQUFDQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEUsNkJBRGlCO0FBQUEsV0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBb0JGO0tBckJ1Qk4sSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC43ZTI1NzQwMWEzY2ZkMmQyOTI5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNREJJY29uLCBNREJCcmVhZGNydW1iLCBNREJCcmVhZGNydW1iSXRlbX0gZnJvbSAnbWRiLXJlYWN0LXVpLWtpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRybyhwcm9wcykge1xyXG4gICByZXR1cm4oIFxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyLXBhZ2VcIiA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVyLWJnXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgnLi9sLWJnLmpwZycpXCJ9fSA+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlci1wYWdlLWNvbnRlbnRcIiA+XHJcbiAgICAgICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgIDxNREJCcmVhZGNydW1iPlxyXG4gICAgICAgICAgICB7cHJvcHMubGlua3MubWFwKChsaW5rKT0+XHJcbiAgICAgICAgICAgIDw+e2xpbmsuYWN0aXZlPzxNREJCcmVhZGNydW1iSXRlbSA+e2xpbmsubGlua308L01EQkJyZWFkY3J1bWJJdGVtPjogPE1EQkJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bGluay51cmx9PntsaW5rLmxpbmt9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTURCQnJlYWRjcnVtYkl0ZW0+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTURCQnJlYWRjcnVtYj5cclxuICAgICAgPC9oMz5cclxuICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8L2Rpdj4pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9