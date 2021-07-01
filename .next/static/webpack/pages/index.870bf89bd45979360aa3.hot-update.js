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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdb-react-ui-kit */ "./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js");
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      isOpen = _useState3[0],
      setIsOpen = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('home'),
      active = _useState4[0],
      setactive = _useState4[1];

  var openMenu = function openMenu() {
    return setIsOpen(!isOpen);
  };

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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
            icon: "at",
            fas: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "mailto:contact@example.com",
            className: "email",
            children: "info@example.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
            icon: "mobile-alt",
            fas: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 7
          }, this), "   +1 5589 55488 55"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "social-links d-none d-md-block",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "twitter",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
              icon: "twitter",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "facebook",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
              icon: "facebook",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "instagram",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
              icon: "instagram",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 43
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "linkedin",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
              icon: "whatsapp",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 1
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "sticky-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbar, {
        expand: "lg",
        bgColor: "black",
        dark: true,
        className: "shadow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBContainer, {
          container: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarBrand, {
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "./logo.png",
              className: "logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 38
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Tested ECU Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 78
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarToggler, {
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            onClick: function onClick() {
              return setShowBasic(!showBasic);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBIcon, {
              icon: "bars",
              fas: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBCollapse, {
            navbar: true,
            show: showBasic,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarNav, {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'Home' ? "active" : "",
                  href: "/",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'ECU' ? "active" : "",
                  href: "/file",
                  children: "ECU FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'TUNING' ? "active" : "",
                  href: "/tuning",
                  children: "TUNING FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'How' ? "active" : "",
                  href: "/faq",
                  children: "How to?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'about' ? "active" : "",
                  href: "/about",
                  children: "About US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_3__.MDBNavbarLink, {
                  className: props.page == 'Contact' ? "active" : "",
                  href: "/contact",
                  children: "Contact US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Nav, "8e9GXyliEdgKv9g8dcyCc1EV1Bs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJpc09wZW4iLCJzZXRJc09wZW4iLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJvcGVuTWVudSIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQVllLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBLE1BQ3hCQyxTQUR3QjtBQUFBLE1BQ2JDLFlBRGE7O0FBQUEsbUJBRUxGLCtDQUFRLENBQUMsQ0FBRCxDQUZIO0FBQUEsTUFFeEJHLEtBRndCO0FBQUEsTUFFakJDLFFBRmlCOztBQUFBLG1CQUdKSiwrQ0FBUSxDQUFDLEtBQUQsQ0FISjtBQUFBLE1BR3hCSyxNQUh3QjtBQUFBLE1BR2pCQyxTQUhpQjs7QUFBQSxtQkFJSk4sK0NBQVEsQ0FBQyxNQUFELENBSko7QUFBQSxNQUl4Qk8sTUFKd0I7QUFBQSxNQUlqQkMsU0FKaUI7O0FBSy9CLE1BQU1DLFFBQVEsR0FBRSxTQUFWQSxRQUFVO0FBQUEsV0FBS0gsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZDtBQUFBLEdBQWhCOztBQUVBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBTUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFdBQXhCO0FBQ0FULFlBQVEsQ0FBQ08sUUFBRCxDQUFSO0FBQ0gsR0FIRDs7QUFJQUcsa0RBQVMsQ0FBQyxZ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RDtBQUFBLHVDQUNFLDhEQUFDLDJEQUFEO0FBQWUsMkJBQVMsRUFBRW5CLEtBQUssQ0FBQ21CLElBQU4sSUFBYyxLQUFkLEdBQXFCLFFBQXJCLEdBQStCLEVBQXpEO0FBQTZELHNCQUFJLEVBQUMsTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVpGLGVBZUUsOERBQUMsMkRBQUQ7QUFBQSx1Q0FDRSw4REFBQywyREFBRDtBQUFlLDJCQUFTLEVBQUVuQixLQUFLLENBQUNtQixJQUFOLElBQWMsT0FBZCxHQUF1QixRQUF2QixHQUFpQyxFQUEzRDtBQUErRCxzQkFBSSxFQUFDLFFBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmRixlQWtCRSw4REFBQywyREFBRDtBQUFBLHVDQUNFLDhEQUFDLDJEQUFEO0FBQWUsMkJBQVMsRUFBRW5CLEtBQUssQ0FBQ21CLElBQU4sSUFBYyxTQUFkLEdBQXlCLFFBQXpCLEdBQW1DLEVBQTdEO0FBQWlFLHNCQUFJLEVBQUMsVUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJSO0FBQUEsa0JBREk7QUFvRUg7O0dBdkZ1QnBCLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODcwYmY4OWJkNDU5NzkzNjBhYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvbmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE1EQkNvbnRhaW5lcixcclxuICAgIE1EQk5hdmJhcixcclxuICAgIE1EQk5hdmJhckJyYW5kLFxyXG4gICAgTURCTmF2YmFyVG9nZ2xlcixcclxuICAgIE1EQkljb24sXHJcbiAgICBNREJOYXZiYXJOYXYsXHJcbiAgICBNREJOYXZiYXJJdGVtLFxyXG4gICAgTURCTmF2YmFyTGluayxcclxuICAgIE1EQkNvbGxhcHNlLCBcclxuICB9IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2ljLCBzZXRTaG93QmFzaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25hdkJHLCBzZXRuYXZCR10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXSA9IHVzZVN0YXRlKCdob21lJyk7XHJcbiAgICBjb25zdCBvcGVuTWVudT0gKCk9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHNldG5hdkJHKHBvc2l0aW9uKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbjw+XHJcbjxzZWN0aW9uIGlkPVwidG9wYmFyXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8TURCSWNvbiBpY29uPSdhdCcgZmFzIC8+IDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBleGFtcGxlLmNvbVwiIGNsYXNzTmFtZT1cImVtYWlsXCI+aW5mb0BleGFtcGxlLmNvbTwvYT5cclxuICAgICAgPE1EQkljb24gaWNvbj0nbW9iaWxlLWFsdCcgZmFzIC8+ICAgKzEgNTU4OSA1NTQ4OCA1NVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48TURCSWNvbiBpY29uPSd0d2l0dGVyJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxNREJJY29uIGljb249J2ZhY2Vib29rJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48TURCSWNvbiBpY29uPSdpbnN0YWdyYW0nIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PE1EQkljb24gaWNvbj0nd2hhdHNhcHAnIGZhYiAvPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxyXG4gICAgICAgIDxNREJOYXZiYXIgIGV4cGFuZD0nbGcnIGJnQ29sb3I9XCJibGFja1wiICBkYXJrIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgPE1EQkNvbnRhaW5lciBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJCcmFuZCBocmVmPScjJz48aW1nIHNyYz1cIi4vbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvXCIvPjxiPlRlc3RlZCBFQ1UgU29sdXRpb25zPC9iPiBcclxuICAgICAgICA8L01EQk5hdmJhckJyYW5kPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJUb2dnbGVyXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmFzaWMoIXNob3dCYXNpYyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPSdiYXJzJyBmYXMgLz5cclxuICAgICAgICAgICAgPC9NREJOYXZiYXJUb2dnbGVyPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJDb2xsYXBzZSBuYXZiYXIgc2hvdz17c2hvd0Jhc2ljfT5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyTmF2IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb21lJz8gXCJhY3RpdmVcIjogXCJcIn0gIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rICBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0VDVSc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9maWxlJz5FQ1UgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdUVU5JTkcnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvdHVuaW5nJz5UVU5JTkcgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb3cnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvZmFxJz5Ib3cgdG8/PC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnYWJvdXQnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvYWJvdXQnPkFib3V0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnQ29udGFjdCc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9jb250YWN0Jz5Db250YWN0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01EQk5hdmJhck5hdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01EQkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgPC9NREJOYXZiYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8Lz4pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9