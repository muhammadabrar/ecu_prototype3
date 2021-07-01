self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./comp/admin/nav.js":
/*!***************************!*\
  !*** ./comp/admin/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdb-react-ui-kit */ "./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\work\\ECU\\main\\comp\\admin\\nav.js",
    _s = $RefreshSig$();



function Nav(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sideNavLeft = _useState[0],
      setsideNavLeft = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      navBG = _useState2[0],
      setnavBG = _useState2[1];

  var sidenavToggle = function sidenavToggle(sidenavId) {
    return function () {
      var sidenavNr = "sideNav".concat(sidenavId);
      setsideNavLeft(sidenavNr);
    };
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        "class": "navbar navbar-expand-lg navbar-light bg-light",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "container-fluid",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "class": "navbar-toggler",
            type: "button",
            "data-mdb-toggle": "collapse",
            "data-mdb-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              "class": "fas fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 5
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "collapse navbar-collapse",
            id: "navbarSupportedContent",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "navbar-brand mt-2 mt-lg-0",
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png",
                height: "15",
                alt: "",
                loading: "lazy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              "class": "navbar-nav me-auto mb-2 mb-lg-0",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                "class": "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "nav-link hover-shadow",
                  href: "#",
                  children: "Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                "class": "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "nav-link hover-shadow",
                  href: "#",
                  children: "Team"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                "class": "nav-item",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "nav-link hover-shadow",
                  href: "#",
                  children: "Projects"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 5
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "text-reset me-3",
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-shopping-cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "text-reset me-3 dropdown-toggle hidden-arrow",
              href: "#",
              id: "navbarDropdownMenuLink",
              role: "button",
              "data-mdb-toggle": "dropdown",
              "aria-expanded": "false",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-bell"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "badge  rounded-pill badge-notification bg-danger",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              "class": "dropdown-menu dropdown-menu-end",
              "aria-labelledby": "navbarDropdownMenuLink",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item ",
                  href: "#",
                  children: "Some news"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item",
                  href: "#",
                  children: "Another news"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item",
                  href: "#",
                  children: "Something else here"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "dropdown-toggle d-flex align-items-center hidden-arrow",
              href: "#",
              id: "navbarDropdownMenuLink",
              role: "button",
              "data-mdb-toggle": "dropdown",
              "aria-expanded": "false",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "https://mdbootstrap.com/img/new/avatars/2.jpg",
                "class": "rounded-circle",
                height: "25",
                alt: "",
                loading: "lazy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              "class": "dropdown-menu dropdown-menu-end",
              "aria-labelledby": "navbarDropdownMenuLink",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item",
                  href: "#",
                  children: "My profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item",
                  href: "#",
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 9
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  "class": "dropdown-item",
                  href: "#",
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 11
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }, this)
  }, void 0, false);
}

_s(Nav, "ZgaHBShK3xTP4/tBOIXR5zZS7E0=");

_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9hZG1pbi9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNpZGVOYXZMZWZ0Iiwic2V0c2lkZU5hdkxlZnQiLCJuYXZCRyIsInNldG5hdkJHIiwic2lkZW5hdlRvZ2dsZSIsInNpZGVuYXZJZCIsInNpZGVuYXZOciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFZZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLENBQUQsQ0FGSDtBQUFBLE1BRXhCRyxLQUZ3QjtBQUFBLE1BRWpCQyxRQUZpQjs7QUFJL0IsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxTQUFTO0FBQUEsV0FBSSxZQUFNO0FBQ3ZDLFVBQU1DLFNBQVMsb0JBQWFELFNBQWIsQ0FBZjtBQUVBSixvQkFBYyxDQUFDSyxTQUFELENBQWQ7QUFDRCxLQUo4QjtBQUFBLEdBQS9COztBQU9BLHNCQUNKO0FBQUEsMkJBQ0EsOERBQUMsMERBQUQ7QUFBQSw2QkFDQTtBQUFLLGlCQUFNLCtDQUFYO0FBQUEsK0JBQ0U7QUFBSyxtQkFBTSxpQkFBWDtBQUFBLGtDQUNFO0FBQ0UscUJBQU0sZ0JBRFI7QUFFRSxnQkFBSSxFQUFDLFFBRlA7QUFHRSwrQkFBZ0IsVUFIbEI7QUFJRSwrQkFBZ0IseUJBSmxCO0FBS0UsNkJBQWMsd0JBTGhCO0FBTUUsNkJBQWMsT0FOaEI7QUFPRSwwQkFBVyxtQkFQYjtBQUFBLG1DQVNFO0FBQUcsdUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWFFO0FBQUsscUJBQU0sMEJBQVg7QUFBc0MsY0FBRSxFQUFD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QUFBO0FBQUE7QUFBQTtBQUFBLG9CQS9CRixlQStDRTtBQUNFLHVCQUFNLGlDQURSO0FBRUUsaUNBQWdCLHdCQUZsQjtBQUFBLHNDQUlFO0FBQUEsdUNBQ0U7QUFBRywyQkFBTSxlQUFUO0FBQXlCLHNCQUFJLEVBQUMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBT0U7QUFBQSx1Q0FDRTtBQUFHLDJCQUFNLGVBQVQ7QUFBeUIsc0JBQUksRUFBQyxHQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEYsZUFVRTtBQUFBLHVDQUNFO0FBQUcsMkJBQU0sZUFBVDtBQUF5QixzQkFBSSxFQUFDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBL0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESTtBQTJHSDs7R0F0SHVCVCxHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLmM0OTBjNTY0NDdjMzAyNTEwZWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTURCQ29udGFpbmVyLFxyXG4gICAgTURCTmF2YmFyLFxyXG4gICAgTURCTmF2YmFyQnJhbmQsXHJcbiAgICBNREJOYXZiYXJUb2dnbGVyLFxyXG4gICAgTURCSWNvbixcclxuICAgIE1EQk5hdmJhck5hdixcclxuICAgIE1EQk5hdmJhckl0ZW0sXHJcbiAgICBNREJOYXZiYXJMaW5rLFxyXG4gICAgTURCQ29sbGFwc2UsIFxyXG4gICAgTURCU2lkZU5hdkNhdCwgTURCU2lkZU5hdiwgICBNREJCdG59IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2lkZU5hdkxlZnQsIHNldHNpZGVOYXZMZWZ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuYXZCRywgc2V0bmF2QkddID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgc2lkZW5hdlRvZ2dsZSA9IHNpZGVuYXZJZCA9PiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVuYXZOciA9IGBzaWRlTmF2JHtzaWRlbmF2SWR9YFxyXG4gICAgICBcclxuICAgICAgc2V0c2lkZU5hdkxlZnQoc2lkZW5hdk5yKVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuPD5cclxuPE1EQkNvbnRhaW5lcj5cclxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkYXRhLW1kYi10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgIGRhdGEtbWRiLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcclxuICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxyXG4gICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgPlxyXG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxyXG4gIFxyXG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZCBtdC0yIG10LWxnLTBcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9sb2dvL21kYi10cmFuc2FwcmVudC1ub3NoYWRvd3MucG5nXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgaG92ZXItc2hhZG93XCIgaHJlZj1cIiNcIj5EYXNoYm9hcmQ8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBob3Zlci1zaGFkb3dcIiBocmVmPVwiI1wiPlRlYW08L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBob3Zlci1zaGFkb3dcIiBocmVmPVwiI1wiPlByb2plY3RzPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwidGV4dC1yZXNldCBtZS0zXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zaG9wcGluZy1jYXJ0XCI+PC9pPlxyXG4gICAgICA8L2E+XHJcblxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwidGV4dC1yZXNldCBtZS0zIGRyb3Bkb3duLXRvZ2dsZSBoaWRkZW4tYXJyb3dcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBpZD1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRhdGEtbWRiLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmVsbFwiPjwvaT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlICByb3VuZGVkLXBpbGwgYmFkZ2Utbm90aWZpY2F0aW9uIGJnLWRhbmdlclwiPjE8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtZW5kXCJcclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBcIiBocmVmPVwiI1wiPlNvbWUgbmV3czwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBuZXdzPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Tb21ldGhpbmcgZWxzZSBoZXJlPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgaGlkZGVuLWFycm93XCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgaWQ9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLW1kYi10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9uZXcvYXZhdGFycy8yLmpwZ1wiXHJcbiAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtY2lyY2xlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjI1XCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8dWxcclxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1lbmRcIlxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5NeSBwcm9maWxlPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5TZXR0aW5nczwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+TG9nb3V0PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uYXY+XHJcblxyXG4gICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICBcclxuICAgIDwvPilcclxufSJdLCJzb3VyY2VSb290IjoiIn0=