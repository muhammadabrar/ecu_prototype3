self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./comp/admin/nav.js":
/*!***************************!*\
  !*** ./comp/admin/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/nav.module.css */ "./style/nav.module.css");
/* harmony import */ var _style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\work\\ECU\\main\\comp\\admin\\nav.js",
    _s = $RefreshSig$();




function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var openMenu = function openMenu() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navmenu),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem_active),
                onClick: openMenu,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/about",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),
                onClick: openMenu,
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/contact",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),
                onClick: openMenu,
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),
          onClick: openMenu,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Layout, "K4MA9akBn/hvxyj0MRX3sG61gfg=");

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9hZG1pbi9uYXYuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsIm9wZW5NZW51Iiwic3R5bGVzIiwiYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsTUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTs7QUFBQSxrQkFFWEMsK0NBQVEsQ0FBQyxLQUFELENBRkc7QUFBQSxNQUUvQkMsTUFGK0I7QUFBQSxNQUV4QkMsU0FGd0I7O0FBR3RDLE1BQU1DLFFBQVEsR0FBRSxTQUFWQSxRQUFVO0FBQUEsV0FBS0QsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZDtBQUFBLEdBQWhCOztBQUNBLHNCQUFPO0FBQUEsMkJBQ0M7QUFBUSxlQUFTLEVBQUVHLHFFQUFuQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsZ0NBRUE7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxtQ0FDRyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBRUEsc0VBQUEsR0FBbUJBLDZFQUFqQztBQUNXLHVCQUFPLEVBQUVELFFBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFPSTtBQUFJLHFCQUFTLEVBQUVDLHNFQUFmO0FBQUEsbUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFFBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUVILE1BQU0sS0FBSyxLQUFYLEdBQ0pHLHNFQURJLEdBQ2FBLHNFQUFBLEdBQWUsR0FBZixHQUFtQkEscUVBRDlDO0FBRVUsdUJBQU8sRUFBRUQsUUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSixlQWNJO0FBQUkscUJBQVMsRUFBRUMsc0VBQWY7QUFBQSxtQ0FDSSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBRUgsTUFBTSxLQUFLLEtBQVgsR0FDSEcsc0VBREcsR0FDY0Esc0VBQUEsR0FBZSxHQUFmLEdBQW1CQSxxRUFEL0M7QUFFVyx1QkFBTyxFQUFFRCxRQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxlQXdCQTtBQUFRLG1CQUFTLEVBQUVGLE1BQU0sS0FBSyxLQUFYLEdBQ0NHLHdFQURELEdBQ29CQSx3RUFBQSxHQUFpQixHQUFqQixHQUFxQkEscUVBRDVEO0FBRW9CLGlCQUFPLEVBQUVELFFBRjdCO0FBQUEsa0NBSUk7QUFBTSxxQkFBUyxFQUFFQyxrRUFBVUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQU0scUJBQVMsRUFBRUQsa0VBQVVDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFNLHFCQUFTLEVBQUVELGtFQUFVQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUFQO0FBdUNIOztHQTNDdUJQLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uYzU5YWFkNGE1ODNlOGI4MWMwNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGUvbmF2Lm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9wZW5NZW51PSAoKT0+IHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIHJldHVybiA8PiBcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLm5hdmxpbmsgICsgIHN0eWxlcy5uYXZpdGVtX2FjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1lbnV9PkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Fib3V0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzT3BlbiA9PT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm5hdmxpbmsgOiBzdHlsZXMubmF2bGluaysnICcrc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1lbnV9PkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNPcGVuID09PSBmYWxzZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMubmF2bGluayA6IHN0eWxlcy5uYXZsaW5rKycgJytzdHlsZXMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTWVudX0+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2lzT3BlbiA9PT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmhhbWJ1cmdlciA6IHN0eWxlcy5oYW1idXJnZXIrJyAnK3N0eWxlcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgXHJcbiAgICAgICBcclxuICAgICA8Lz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=