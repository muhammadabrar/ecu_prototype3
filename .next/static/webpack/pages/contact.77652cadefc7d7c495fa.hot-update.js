self["webpackHotUpdate_N_E"]("pages/contact",{

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./logo.png",
            className: "logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Tested ECU Solutions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 69
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
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
                lineNumber: 110,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
                lineNumber: 116,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
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
                lineNumber: 123,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active),
          onClick: openMenu,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_4___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJpc09wZW4iLCJzZXRJc09wZW4iLCJhY3RpdmUiLCJzZXRhY3RpdmUiLCJvcGVuTWVudSIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWdlIiwic3R5bGVzIiwiYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBWWUsU0FBU0EsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsa0JBQ0dDLCtDQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDeEJDLFNBRHdCO0FBQUEsTUFDYkMsWUFEYTs7QUFBQSxtQkFFTEYsK0NBQVEsQ0FBQyxDQUFELENBRkg7QUFBQSxNQUV4QkcsS0FGd0I7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR0pKLCtDQUFRLENBQUMsS0FBRCxDQUhKO0FBQUEsTUFHeEJLLE1BSHdCO0FBQUEsTUFHakJDLFNBSGlCOztBQUFBLG1CQUlKTiwrQ0FBUSxDQUFDLE1BQUQsQ0FKSjtBQUFBLE1BSXhCTyxNQUp3QjtBQUFBLE1BSWpCQyxTQUppQjs7QUFLL0IsTUFBTUMsUUFBUSxHQUFFLFNBQVZBLFFBQVU7QUFBQSxXQUFLSCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFkO0FBQUEsR0FBaEI7O0FBRUEsTUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQVQsWUFBUSxDQUFDTyxRQUFELENBQVI7QUFDSCxHQUhEOztB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QWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIQSxlQXlCQTtBQUFRLG1CQUFTLEVBQUVKLE1BQU0sS0FBSyxLQUFYLEdBQ0NjLHdFQURELEdBQ29CQSx3RUFBQSxHQUFpQixHQUFqQixHQUFxQkEscUVBRDVEO0FBRW9CLGlCQUFPLEVBQUVWLFFBRjdCO0FBQUEsa0NBSUk7QUFBTSxxQkFBUyxFQUFFVSxrRUFBVUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQU0scUJBQVMsRUFBRUQsa0VBQVVDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFNLHFCQUFTLEVBQUVELGtFQUFVQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpFUjtBQUFBLGtCQURJO0FBMEdIOztHQTdIdUJ0QixHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuNzc2NTJjYWRlZmM3ZDdjNDk1ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvbmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE1EQkNvbnRhaW5lcixcclxuICAgIE1EQk5hdmJhcixcclxuICAgIE1EQk5hdmJhckJyYW5kLFxyXG4gICAgTURCTmF2YmFyVG9nZ2xlcixcclxuICAgIE1EQkljb24sXHJcbiAgICBNREJOYXZiYXJOYXYsXHJcbiAgICBNREJOYXZiYXJJdGVtLFxyXG4gICAgTURCTmF2YmFyTGluayxcclxuICAgIE1EQkNvbGxhcHNlLCBcclxuICB9IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2ljLCBzZXRTaG93QmFzaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25hdkJHLCBzZXRuYXZCR10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXSA9IHVzZVN0YXRlKCdob21lJyk7XHJcbiAgICBjb25zdCBvcGVuTWVudT0gKCk9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIHNldG5hdkJHKHBvc2l0aW9uKTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbjw+XHJcbjxzZWN0aW9uIGlkPVwidG9wYmFyXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8TURCSWNvbiBpY29uPSdhdCcgZmFzIC8+IDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdEBleGFtcGxlLmNvbVwiIGNsYXNzTmFtZT1cImVtYWlsXCI+aW5mb0BleGFtcGxlLmNvbTwvYT5cclxuICAgICAgPE1EQkljb24gaWNvbj0nbW9iaWxlLWFsdCcgZmFzIC8+ICAgKzEgNTU4OSA1NTQ4OCA1NVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48TURCSWNvbiBpY29uPSd0d2l0dGVyJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxNREJJY29uIGljb249J2ZhY2Vib29rJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48TURCSWNvbiBpY29uPSdpbnN0YWdyYW0nIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PE1EQkljb24gaWNvbj0nd2hhdHNhcHAnIGZhYiAvPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5LXRvcFwiPlxyXG4gICAgICAgIDxNREJOYXZiYXIgIGV4cGFuZD0nbGcnIGJnQ29sb3I9XCJibGFja1wiICBkYXJrIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgPE1EQkNvbnRhaW5lciBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJCcmFuZCBocmVmPScjJz48aW1nIHNyYz1cIi4vbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvXCIvPjxiPlRlc3RlZCBFQ1UgU29sdXRpb25zPC9iPiBcclxuICAgICAgICA8L01EQk5hdmJhckJyYW5kPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJUb2dnbGVyXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmFzaWMoIXNob3dCYXNpYyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPSdiYXJzJyBmYXMgLz5cclxuICAgICAgICAgICAgPC9NREJOYXZiYXJUb2dnbGVyPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJDb2xsYXBzZSBuYXZiYXIgc2hvdz17c2hvd0Jhc2ljfT5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyTmF2IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb21lJz8gXCJhY3RpdmVcIjogXCJcIn0gIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rICBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0VDVSc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9maWxlJz5FQ1UgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdUVU5JTkcnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvdHVuaW5nJz5UVU5JTkcgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb3cnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvZmFxJz5Ib3cgdG8/PC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnYWJvdXQnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvYWJvdXQnPkFib3V0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnQ29udGFjdCc/IFwiYWN0aXZlXCI6IFwiXCJ9IGhyZWY9Jy9jb250YWN0Jz5Db250YWN0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01EQk5hdmJhck5hdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01EQkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgPC9NREJOYXZiYXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+PGltZyBzcmM9XCIuL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiLz48Yj5UZXN0ZWQgRUNVIFNvbHV0aW9uczwvYj4gXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2bWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXshYWN0aXZlID09J2hvbWUnPyBzdHlsZXMubmF2bGluazogc3R5bGVzLm5hdml0ZW1fYWN0aXZlICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZsaW5rIDogc3R5bGVzLm5hdmxpbmsrJyAnK3N0eWxlcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzT3BlbiA9PT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm5hdmxpbmsgOiBzdHlsZXMubmF2bGluaysnICcrc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1lbnV9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5oYW1idXJnZXIgOiBzdHlsZXMuaGFtYnVyZ2VyKycgJytzdHlsZXMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgXHJcbiAgIFxyXG4gICAgPC8+KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==