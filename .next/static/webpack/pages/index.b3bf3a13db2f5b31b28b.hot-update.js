self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comp/nav.js":
/*!*********************!*\
  !*** ./comp/nav.js ***!
  \*********************/
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



var _jsxFileName = "D:\\work\\ECU\\main\\comp\\nav.js",
    _s = $RefreshSig$();



function Nav(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showBasic = _useState[0],
      setShowBasic = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      navBG = _useState2[0],
      setnavBG = _useState2[1];

  var handleScroll = function handleScroll() {
    var position = window.pageYOffset;
    setnavBG(position);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "topbar",
      className: "d-flex align-items-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container d-flex justify-content-center justify-content-md-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "contact-info d-flex align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
            icon: "at",
            fas: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "mailto:contact@example.com",
            className: "email",
            children: "info@example.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
            icon: "mobile-alt",
            fas: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }, this), "   +1 5589 55488 55"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "social-links d-none d-md-block",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "twitter",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "twitter",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "facebook",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "facebook",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "instagram",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "instagram",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 43
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "linkedin",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "whatsapp",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 1
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "sticky-top wrapper",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "logo",
          children: "Brand"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 10
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          id: "click"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 10
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          "for": "click",
          "class": "menu-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            "class": "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 10
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              "class": "active",
              href: "#",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Gallery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "Feedback"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Nav, "t5CyhnQv1rSPy5dBaWzIiv4lTCE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQVllLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBLE1BQ3hCQyxTQUR3QjtBQUFBLE1BQ2JDLFlBRGE7O0FBQUEsbUJBRUxGLCtDQUFRLENBQUMsQ0FBRCxDQUZIO0FBQUEsTUFFeEJHLEtBRndCO0FBQUEsTUFFakJDLFFBRmlCOztBQUkvQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxXQUF4QjtBQUNBSixZQUFRLENBQUNFLFFBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBSUFHLGtEQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxZQUFsQyxFQUFnRDtBQUFFTSxhQUFPLEVBQUU7QUFBWCxLQUFoRDtBQUVBLFdBQU8sWUFBTTtBQUNUSixZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUCxZQUFyQztBQUNILEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0o7QUFBQSw0QkFDQTtBQUFTLFFBQUUsRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBQywyQkFBL0I7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsb0VBQWY7QUFBQSxnQ0FDRTtB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QUFBLG1DQUFJO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaERBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQlI7QUFBQSxrQkFESTtBQW9GSDs7R0FwR3VCUCxHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzYmYzYTEzZGIyZjViMzFiMjhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTURCQ29udGFpbmVyLFxyXG4gICAgTURCTmF2YmFyLFxyXG4gICAgTURCTmF2YmFyQnJhbmQsXHJcbiAgICBNREJOYXZiYXJUb2dnbGVyLFxyXG4gICAgTURCSWNvbixcclxuICAgIE1EQk5hdmJhck5hdixcclxuICAgIE1EQk5hdmJhckl0ZW0sXHJcbiAgICBNREJOYXZiYXJMaW5rLFxyXG4gICAgTURCQ29sbGFwc2UsIFxyXG4gIH0gZnJvbSAnbWRiLXJlYWN0LXVpLWtpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzaG93QmFzaWMsIHNldFNob3dCYXNpY10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmF2QkcsIHNldG5hdkJHXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBzZXRuYXZCRyhwb3NpdGlvbik7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG48PlxyXG48c2VjdGlvbiBpZD1cInRvcGJhclwiIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPE1EQkljb24gaWNvbj0nYXQnIGZhcyAvPiA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3RAZXhhbXBsZS5jb21cIiBjbGFzc05hbWU9XCJlbWFpbFwiPmluZm9AZXhhbXBsZS5jb208L2E+XHJcbiAgICAgIDxNREJJY29uIGljb249J21vYmlsZS1hbHQnIGZhcyAvPiAgICsxIDU1ODkgNTU0ODggNTVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzIGQtbm9uZSBkLW1kLWJsb2NrXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0d2l0dGVyXCI+PE1EQkljb24gaWNvbj0ndHdpdHRlcicgZmFiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2tcIj48TURCSWNvbiBpY29uPSdmYWNlYm9vaycgZmFiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5zdGFncmFtXCI+PE1EQkljb24gaWNvbj0naW5zdGFncmFtJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rZWRpblwiPjxNREJJY29uIGljb249J3doYXRzYXBwJyBmYWIgLz48L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gIDwvc2VjdGlvbj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInN0aWNreS10b3Agd3JhcHBlclwiPlxyXG4gICAgICAgIHsvKiA8TURCTmF2YmFyICBleHBhbmQ9J2xnJyBiZ0NvbG9yPVwicHJpbWFyeVwiICBkYXJrIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgPE1EQkNvbnRhaW5lciBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJCcmFuZCBocmVmPScjJz48aW1nIHNyYz1cIi4vbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvXCIvPjxiPlRlc3RlZCBFQ1UgU29sdXRpb25zPC9iPiBcclxuICAgICAgICA8L01EQk5hdmJhckJyYW5kPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJUb2dnbGVyXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmFzaWMoIXNob3dCYXNpYyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPSdiYXJzJyBmYXMgLz5cclxuICAgICAgICAgICAgPC9NREJOYXZiYXJUb2dnbGVyPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJDb2xsYXBzZSBuYXZiYXIgc2hvdz17c2hvd0Jhc2ljfT5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyTmF2IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb21lJz8gXCJhY3RpdmUgbmF2X2xpbmtcIjogXCIgbmF2X2xpbmtcIn0gIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rICBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0VDVSc/IFwiYWN0aXZlXCI6IFwiaG92ZXItc2hhZG93XCJ9IGhyZWY9Jy9maWxlJz5FQ1UgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdUVU5JTkcnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvdHVuaW5nJz5UVU5JTkcgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb3cnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvZmFxJz5Ib3cgdG8/PC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnYWJvdXQnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvYWJvdXQnPkFib3V0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnQ29udGFjdCc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9jb250YWN0Jz5Db250YWN0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01EQk5hdmJhck5hdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01EQkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgPC9NREJOYXZiYXI+ICovfVxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgIEJyYW5kXHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjbGlja1wiIC8+XHJcbiAgICAgICAgIDxsYWJlbCBmb3I9XCJjbGlja1wiIGNsYXNzPVwibWVudS1idG5cIj5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJhY3RpdmVcIiBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2VydmljZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+R2FsbGVyeTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GZWVkYmFjazwvYT48L2xpPlxyXG4gICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgXHJcbiAgICA8Lz4pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9