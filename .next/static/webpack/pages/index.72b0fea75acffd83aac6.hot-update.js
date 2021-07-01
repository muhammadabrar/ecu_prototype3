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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          "for": "show-menu",
          "class": "menu-icon",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            "class": "fas fa-bars"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 48
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "CodingNepal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            "class": "links",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                "class": "desktop-link",
                children: "Features"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                "for": "show-features",
                children: "Features"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                "class": "desktop-link",
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                "for": "show-services",
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    children: "Drop Menu 3"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 15
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "#",
                    "class": "desktop-link",
                    children: "More Items"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    "for": "show-items",
                    children: "More Items"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        children: "Sub Menu 1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 19
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        children: "Sub Menu 2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 19
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                        href: "#",
                        children: "Sub Menu 3"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 19
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 17
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "#",
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQVllLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBLE1BQ3hCQyxTQUR3QjtBQUFBLE1BQ2JDLFlBRGE7O0FBQUEsbUJBRUxGLCtDQUFRLENBQUMsQ0FBRCxDQUZIO0FBQUEsTUFFeEJHLEtBRndCO0FBQUEsTUFFakJDLFFBRmlCOztBQUkvQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxXQUF4QjtBQUNBSixZQUFRLENBQUNFLFFBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBSUFHLGtEQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxZQUFsQyxFQUFnRDtBQUFFTSxhQUFPLEVBQUU7QUFBWCxLQUFoRDtBQUVBLFdBQU8sWUFBTTtBQUNUSixZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUCxZQUFyQztBQUNILEtBRkQ7QUFHRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0o7QUFBQSw0QkFDQTtBQUFTLFFBQUUsRUFBQyxRQUFaO0FBQXFCLGVBQVMsRUFBQywyQkFBL0I7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsb0VBQWY7QUFBQSxnQ0FDRTtB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SSxFQUFDLEdBQVI7QUFBWSw2QkFBTSxjQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQUVFO0FBQU8sMkJBQUksWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGRixlQUdFO0FBQUEsNENBQ0U7QUFBQSw2Q0FBSTtBQUFHLDRCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRTtBQUFBLDZDQUFJO0FBQUcsNEJBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixlQUdFO0FBQUEsNkNBQUk7QUFBRyw0QkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRixlQStCRTtBQUFBLHFDQUFJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCUjtBQUFBLGtCQURJO0FBNEdIOztHQTVIdUJQLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzJiMGZlYTc1YWNmZmQ4M2FhYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgICBNREJDb250YWluZXIsXHJcbiAgICBNREJOYXZiYXIsXHJcbiAgICBNREJOYXZiYXJCcmFuZCxcclxuICAgIE1EQk5hdmJhclRvZ2dsZXIsXHJcbiAgICBNREJJY29uLFxyXG4gICAgTURCTmF2YmFyTmF2LFxyXG4gICAgTURCTmF2YmFySXRlbSxcclxuICAgIE1EQk5hdmJhckxpbmssXHJcbiAgICBNREJDb2xsYXBzZSwgXHJcbiAgfSBmcm9tICdtZGItcmVhY3QtdWkta2l0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdihwcm9wcykge1xyXG4gICAgY29uc3QgW3Nob3dCYXNpYywgc2V0U2hvd0Jhc2ljXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuYXZCRywgc2V0bmF2QkddID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHNldG5hdkJHKHBvc2l0aW9uKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbjw+XHJcbjxzZWN0aW9uIGlkPVwidG9wYmFyXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8TURCSWNvbiBpY29uPSdhdCcgZmFzIC8+IDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBleGFtcGxlLmNvbVwiIGNsYXNzTmFtZT1cImVtYWlsXCI+aW5mb0BleGFtcGxlLmNvbTwvYT5cclxuICAgICAgPE1EQkljb24gaWNvbj0nbW9iaWxlLWFsdCcgZmFzIC8+ICAgKzEgNTU4OSA1NTQ4OCA1NVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48TURCSWNvbiBpY29uPSd0d2l0dGVyJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxNREJJY29uIGljb249J2ZhY2Vib29rJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48TURCSWNvbiBpY29uPSdpbnN0YWdyYW0nIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PE1EQkljb24gaWNvbj0nd2hhdHNhcHAnIGZhYiAvPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5LXRvcCB3cmFwcGVyXCI+XHJcbiAgICAgICAgey8qIDxNREJOYXZiYXIgIGV4cGFuZD0nbGcnIGJnQ29sb3I9XCJwcmltYXJ5XCIgIGRhcmsgY2xhc3NOYW1lPVwic2hhZG93XCI+XHJcbiAgICAgICAgICA8TURCQ29udGFpbmVyIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1EQk5hdmJhckJyYW5kIGhyZWY9JyMnPjxpbWcgc3JjPVwiLi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIi8+PGI+VGVzdGVkIEVDVSBTb2x1dGlvbnM8L2I+IFxyXG4gICAgICAgIDwvTURCTmF2YmFyQnJhbmQ+XHJcbiAgICBcclxuICAgICAgICAgICAgPE1EQk5hdmJhclRvZ2dsZXJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dCYXNpYyghc2hvd0Jhc2ljKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNREJJY29uIGljb249J2JhcnMnIGZhcyAvPlxyXG4gICAgICAgICAgICA8L01EQk5hdmJhclRvZ2dsZXI+XHJcbiAgICBcclxuICAgICAgICAgICAgPE1EQkNvbGxhcHNlIG5hdmJhciBzaG93PXtzaG93QmFzaWN9PlxyXG4gICAgICAgICAgICAgIDxNREJOYXZiYXJOYXYgY2xhc3NOYW1lPSdqdXN0aWZ5LWNvbnRlbnQtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0hvbWUnPyBcImFjdGl2ZSBuYXZfbGlua1wiOiBcIiBuYXZfbGlua1wifSAgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICA8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnRUNVJz8gXCJhY3RpdmVcIjogXCJob3Zlci1zaGFkb3dcIn0gaHJlZj0nL2ZpbGUnPkVDVSBGSUxFUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ1RVTklORyc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy90dW5pbmcnPlRVTklORyBGSUxFUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0hvdyc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9mYXEnPkhvdyB0bz88L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdhYm91dCc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9hYm91dCc+QWJvdXQgVVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdDb250YWN0Jz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL2NvbnRhY3QnPkNvbnRhY3QgVVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTURCTmF2YmFyTmF2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTURCQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgICAgICA8L01EQk5hdmJhcj4gKi99XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgPGxhYmVsIGZvcj1cInNob3ctbWVudVwiIGNsYXNzPVwibWVudS1pY29uXCI+PGkgY2xhc3M9XCJmYXMgZmEtYmFyc1wiPjwvaT48L2xhYmVsPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPjxhIGhyZWY9XCIjXCI+Q29kaW5nTmVwYWw8L2E+PC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlua3NcIj5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkZXNrdG9wLWxpbmtcIj5GZWF0dXJlczwvYT5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNob3ctZmVhdHVyZXNcIj5GZWF0dXJlczwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ecm9wIE1lbnUgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkRyb3AgTWVudSAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RHJvcCBNZW51IDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ecm9wIE1lbnUgNDwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRlc2t0b3AtbGlua1wiPlNlcnZpY2VzPC9hPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwic2hvdy1zZXJ2aWNlc1wiPlNlcnZpY2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkRyb3AgTWVudSAxPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RHJvcCBNZW51IDI8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ecm9wIE1lbnUgMzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkZXNrdG9wLWxpbmtcIj5Nb3JlIEl0ZW1zPC9hPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNob3ctaXRlbXNcIj5Nb3JlIEl0ZW1zPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U3ViIE1lbnUgMTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TdWIgTWVudSAyPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlN1YiBNZW51IDM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5GZWVkYmFjazwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvbmF2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICBcclxuICAgIDwvPilcclxufSJdLCJzb3VyY2VSb290IjoiIn0=