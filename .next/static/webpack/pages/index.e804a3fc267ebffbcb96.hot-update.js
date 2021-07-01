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
/* harmony import */ var _style_nav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/nav.module.css */ "./style/nav.module.css");
/* harmony import */ var _style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4__);
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navbar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navmenu),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: !active == 'home' ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navitem_active),
                onClick: openMenu,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/about",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
                onClick: openMenu,
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/contact",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().navlink) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
                onClick: openMenu,
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
          onClick: openMenu,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJpc09wZW4iLCJzZXRJc09wZW4iLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJvcGVuTWVudSIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlIiwic3R5bGVzIiwiYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBWWUsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsa0JBQ0dDLCtDQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDeEJDLFNBRHdCO0FBQUEsTUFDYkMsWUFEYTs7QUFBQSxtQkFFTEYsK0NBQVEsQ0FBQyxDQUFELENBRkg7QUFBQSxNQUV4QkcsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0pKLCtDQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHeEJLLE1BSHdCO0FBQUEsTUFHakJDLFNBSGlCOztBQUFBLG1CQUlKTiwrQ0FBUSxDQUFDLE1BQUQsQ0FKSjtBQUFBLE1BSXhCTyxNQUp3QjtBQUFBLE1BSWpCQyxTQUppQjs7QUFLL0IsTUFBTUMsUUFBUSxHQUFFLFNBQVZBLFFBQVU7QUFBQSxXQUFLSCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFkO0FBQUEsR0FBaEI7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQVQsWUFBUSxDQUFDTyxRQUFELENBQVI7QUFDSCxHQUhEOztBQUlBRyxrREFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsWUFBbEMsRUFBZ0Q7QUFBRU0sYUFBTyxFQUFFO0FBQVgsS0FBaEQ7QUFFQSxXQUFPLFlBQU07QUFDVEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckM7QUFDSCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNKO0FBQUEsNEJBQ0E7QUFBUyxRQUFFLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUMsMkJBQS9CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHdDQUFmO0FBQUEsa0NBQ0EsOERBQUMscURBQUQ7QUFBUyxnQkFBSSxFQUFDLElBQWQ7QUFBbUIsZUFBRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLG9CQUMwQjtBQUFHLGdCQUFJLEVBQUMsNEJBQVI7QUFBcUMscUJBQVMsRUFBQyxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEMUIsZUFFQSw4REFBQyxxREFBRDtBQUFTLGdCQUFJLEVBQUMsWUFBZDtBQUEyQixlQUFHO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLGdDQUFmO0FBQUEsa0NBQ0U7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBWSxxQkFBUyxFQUFDLFNBQXRCO0FBQUEsbUNBQWdDLDhEQUFDLHFEQUFEO0FBQVMsa0JBQUksRUFBQyxTQUFkO0FBQXdCLGlCQUFHO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQVkscUJBQVMsRUFBQyxVQUF0QjtBQUFBLG1DQUFpQyw4REFBQyxxREFBRDtBQUFTLGtCQUFJLEVBQUMsVUFBZDtBQUF5QixpQkFBRztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFZLHFCQUFTLEVBQUMsV0FBdEI7QUFBQSxtQ0FBa0MsOERBQUMscURBQUQ7QUFBUyxrQkFBSSxFQUFDLFdBQWQ7QUFBMEIsaUJBQUc7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLGVBSUU7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBWSxxQkFBUyxFQUFDLFVBQXRCO0FBQUEsbUNBQWlDLDhEQUFDLHFEQUFEO0FBQVMsa0JBQUksRUFBQyxVQUFkO0FBQXlCLGlCQUFHO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBZ0JRO0FBQVEsZUFBUyxFQUFDLFlBQWxCO0FBQUEsNkJBQ0EsOERBQUMsdURBQUQ7QUFBWSxjQUFNLEVBQUMsSUFBbkI7QUFBd0IsZUFBTyxFQUFDLE9BQWhDO0FBQXlDLFlBQUksTUFBN0M7QUFBOEMsaUJBQVMsRUFBQyxRQUF4RDtBQUFBLCtCQUNFLDhEQUFDLDBEQUFEO0FBQWMsbUJBQVMsTUFBdkI7QUFBQSxrQ0FDRSw4REFBQyw0REFBRDtBQUFnQixnQkFBSSxFQUFDLEdBQXJCO0FBQUEsb0NBQXlCO0FBQUssaUJBQUcsRUFBQyxZQUFUO0FBQXNCLHVCQUFTLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBekIsZUFBaUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLDhEQUFEO0FBQ0UsNkJBQWMsd0JBRGhCO0FBRUUsNkJBQWMsT0FGaEI7QUFHRSwwQkFBVyxtQkFIYjtBQUlFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVIsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBbEI7QUFBQSxhQUpYO0FBQUEsbUNBTUUsOERBQUMscURBQUQ7QUFBUyxrQkFBSSxFQUFDLE1BQWQ7QUFBcUIsaUJBQUc7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFhRSw4REFBQyx5REFBRDtBQUFhLGtCQUFNLE1BQW5CO0FBQW9CLGdCQUFJLEVBQUVBLFNBQTFCO0FBQUEsbUNBQ0UsOERBQUMsMERBQUQ7QUFBYyx1QkFBUyxFQUFDLHFCQUF4QjtBQUFBLHNDQUNFLDhEQUFDLDJEQUFEO0FBQUEsdUNBQ0UsOERBQUMsMkRBQUQ7QUFBZSwyQkFBUyxFQUFFRixLQUFLLENBQUNtQixJQUFOLElBQWMsTUFBZCxHQUFzQixRQUF0QixHQUFnQyxFQUExRDtBQUErRCxzQkFBSSxFQUFDLEdBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU1FLDhEQUFDLDJEQUFEO0FBQUEsdUNBQ0UsOERBQUMsMkRBQUQ7QUFBZ0IsMkJBQVMsRUFBRW5CLEtBQUssQ0FBQ21CLElBQU4sSUFBYyxLQUFkLEdBQXFCLFFBQXJCLEdBQStCLEVBQTFEO0FBQThELHNCQUFJLEVBQUMsT0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5GLGVBU0UsOERBQUMsMkRBQUQ7QUFBQSx1Q0FDRSw4REFBQywyREFBRDtBQUFlLDJCQUFTLEVBQUVuQixLQUFLLENBQUNtQixJQUFOLElBQWMsUUFBZCxHQUF3QixRQUF4QixHQUFrQyxFQUE1RDtBQUFnRSxzQkFBSSxFQUFDLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFURixlQVlFLDhEQUFDLDJEQUFEO0FBQUEsdUNBQ0UsOERBQUMsMkRBQUQ7QUFBZSwyQkFBUyxFQUFFbkIsS0FBSyxDQUFDbUIsSUFBTixJQUFjLEtBQWQsR0FBcUIsUUFBckIsR0FBK0IsRUFBekQ7QUFBNkQsc0JBQUksRUFBQyxNQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkYsZUFlRSw4REFBQywyREFBRDtBQUFBLHVDQUNFLDhEQUFDLDJEQUFEO0FBQWUsMkJBQVMsRUFBRW5CLEtBQUssQ0FBQ21CLElBQU4sSUFBYyxPQUFkLEdBQXVCLFFBQXZCLEdBQWlDLEVBQTNEO0FBQStELHNCQUFJLEVBQUMsUUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZGLGVBa0JFLDhEQUFDLDJEQUFEO0FBQUEsdUNBQ0UsOERBQUMsMkRBQUQ7QUFBZSwyQkFBUyxFQUFFbkIsS0FBSyxDQUFDbUIsSUFBTixJQUFjLFNBQWQsR0FBeUIsUUFBekIsR0FBbUMsRUFBN0Q7QUFBaUUsc0JBQUksRUFBQyxVQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQlIsZUFpRVE7QUFBUSxlQUFTLEVBQUVDLHFFQUFuQjtBQUFBLDZCQUNRO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsZ0NBRUE7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxtQ0FDRyw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBRSxDQUFDWixNQUFELElBQVUsTUFBVixHQUFrQlksc0VBQWxCLEdBQWtDQSw2RUFBaEQ7QUFDVyx1QkFBTyxFQUFFVixRQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBT0k7QUFBSSxxQkFBUyxFQUFFVSxzRUFBZjtBQUFBLG1DQUNJLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFFZCxNQUFNLEtBQUssS0FBWCxHQUNKYyxzRUFESSxHQUNhQSxzRUFBQSxHQUFlLEdBQWYsR0FBbUJBLHFFQUQ5QztBQUVVLHVCQUFPLEVBQUVWLFFBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFjSTtBQUFJLHFCQUFTLEVBQUVVLHNFQUFmO0FBQUEsbUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUVkLE1BQU0sS0FBSyxLQUFYLEdBQ0hjLHNFQURHLEdBQ2NBLHNFQUFBLEdBQWUsR0FBZixHQUFtQkEscUVBRC9DO0FBRVcsdUJBQU8sRUFBRVYsUUFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUF3QkE7QUFBUSxtQkFBUyxFQUFFSixNQUFNLEtBQUssS0FBWCxHQUNDYyx3RUFERCxHQUNvQkEsd0VBQUEsR0FBaUIsR0FBakIsR0FBcUJBLHFFQUQ1RDtBQUVvQixpQkFBTyxFQUFFVixRQUY3QjtBQUFBLGtDQUlJO0FBQU0scUJBQVMsRUFBRVUsa0VBQVVDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFLSTtBQUFNLHFCQUFTLEVBQUVELGtFQUFVQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUk7QUFBTSxxQkFBUyxFQUFFRCxrRUFBVUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqRVI7QUFBQSxrQkFESTtBQXlHSDs7R0E1SHVCdEIsRzs7S0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lODA0YTNmYzI2N2ViZmZiY2I5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZS9uYXYubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTURCQ29udGFpbmVyLFxyXG4gICAgTURCTmF2YmFyLFxyXG4gICAgTURCTmF2YmFyQnJhbmQsXHJcbiAgICBNREJOYXZiYXJUb2dnbGVyLFxyXG4gICAgTURCSWNvbixcclxuICAgIE1EQk5hdmJhck5hdixcclxuICAgIE1EQk5hdmJhckl0ZW0sXHJcbiAgICBNREJOYXZiYXJMaW5rLFxyXG4gICAgTURCQ29sbGFwc2UsIFxyXG4gIH0gZnJvbSAnbWRiLXJlYWN0LXVpLWtpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzaG93QmFzaWMsIHNldFNob3dCYXNpY10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbmF2QkcsIHNldG5hdkJHXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lzT3BlbixzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSxzZXRhY3RpdmVdID0gdXNlU3RhdGUoJ2hvbWUnKTtcclxuICAgIGNvbnN0IG9wZW5NZW51PSAoKT0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2V0bmF2QkcocG9zaXRpb24pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuPD5cclxuPHNlY3Rpb24gaWQ9XCJ0b3BiYXJcIiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxNREJJY29uIGljb249J2F0JyBmYXMgLz4gPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGV4YW1wbGUuY29tXCIgY2xhc3NOYW1lPVwiZW1haWxcIj5pbmZvQGV4YW1wbGUuY29tPC9hPlxyXG4gICAgICA8TURCSWNvbiBpY29uPSdtb2JpbGUtYWx0JyBmYXMgLz4gICArMSA1NTg5IDU1NDg4IDU1XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rcyBkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidHdpdHRlclwiPjxNREJJY29uIGljb249J3R3aXR0ZXInIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+PE1EQkljb24gaWNvbj0nZmFjZWJvb2snIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiPjxNREJJY29uIGljb249J2luc3RhZ3JhbScgZmFiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlua2VkaW5cIj48TURCSWNvbiBpY29uPSd3aGF0c2FwcCcgZmFiIC8+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3ktdG9wXCI+XHJcbiAgICAgICAgPE1EQk5hdmJhciAgZXhwYW5kPSdsZycgYmdDb2xvcj1cImJsYWNrXCIgIGRhcmsgY2xhc3NOYW1lPVwic2hhZG93XCI+XHJcbiAgICAgICAgICA8TURCQ29udGFpbmVyIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE1EQk5hdmJhckJyYW5kIGhyZWY9JyMnPjxpbWcgc3JjPVwiLi9sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cImxvZ29cIi8+PGI+VGVzdGVkIEVDVSBTb2x1dGlvbnM8L2I+IFxyXG4gICAgICAgIDwvTURCTmF2YmFyQnJhbmQ+XHJcbiAgICBcclxuICAgICAgICAgICAgPE1EQk5hdmJhclRvZ2dsZXJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPSduYXZiYXJTdXBwb3J0ZWRDb250ZW50J1xyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9J2ZhbHNlJ1xyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9J1RvZ2dsZSBuYXZpZ2F0aW9uJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dCYXNpYyghc2hvd0Jhc2ljKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNREJJY29uIGljb249J2JhcnMnIGZhcyAvPlxyXG4gICAgICAgICAgICA8L01EQk5hdmJhclRvZ2dsZXI+XHJcbiAgICBcclxuICAgICAgICAgICAgPE1EQkNvbGxhcHNlIG5hdmJhciBzaG93PXtzaG93QmFzaWN9PlxyXG4gICAgICAgICAgICAgIDxNREJOYXZiYXJOYXYgY2xhc3NOYW1lPSdqdXN0aWZ5LWNvbnRlbnQtZW5kJz5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0hvbWUnPyBcImFjdGl2ZVwiOiBcIlwifSAgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICA8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnRUNVJz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL2ZpbGUnPkVDVSBGSUxFUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ1RVTklORyc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy90dW5pbmcnPlRVTklORyBGSUxFUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0hvdyc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9mYXEnPkhvdyB0bz88L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdhYm91dCc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9hYm91dCc+QWJvdXQgVVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdDb250YWN0Jz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL2NvbnRhY3QnPkNvbnRhY3QgVVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTURCTmF2YmFyTmF2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTURCQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgICAgICA8L01EQk5hdmJhcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2bWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXshYWN0aXZlID09J2hvbWUnPyBzdHlsZXMubmF2bGluazogc3R5bGVzLm5hdml0ZW1fYWN0aXZlICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZsaW5rIDogc3R5bGVzLm5hdmxpbmsrJyAnK3N0eWxlcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzT3BlbiA9PT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm5hdmxpbmsgOiBzdHlsZXMubmF2bGluaysnICcrc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1lbnV9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5oYW1idXJnZXIgOiBzdHlsZXMuaGFtYnVyZ2VyKycgJytzdHlsZXMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgXHJcbiAgIFxyXG4gICAgPC8+KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==