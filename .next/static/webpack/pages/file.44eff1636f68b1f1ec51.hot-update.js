self["webpackHotUpdate_N_E"]("pages/file",{

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
          }, this)]
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
              lineNumber: 40,
              columnNumber: 41
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "facebook",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "facebook",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "instagram",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "instagram",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 43
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            className: "linkedin",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "whatsapp",
              fab: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
      className: "sticky-top ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbar, {
        expand: "lg",
        bgColor: "primary",
        dark: true,
        className: "shadow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBContainer, {
          container: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarBrand, {
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "./logo.png",
              className: "logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 38
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Tested ECU Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 78
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarToggler, {
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            onClick: function onClick() {
              return setShowBasic(!showBasic);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "bars",
              fas: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBCollapse, {
            navbar: true,
            show: showBasic,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarNav, {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'Home' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'ECU' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/file",
                  children: "ECU FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'TUNING' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/tuning",
                  children: "TUNING FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'How' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/faq",
                  children: "How to?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'about' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/about",
                  children: "About US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'Contact' ? "active text-black nav_link" : "text-white nav_link",
                  href: "/contact",
                  children: "Contact US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFZZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxrQkFDR0MsK0NBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQSxNQUNiQyxZQURhOztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLENBQUQsQ0FGSDtBQUFBLE1BRXhCRyxLQUZ3QjtBQUFBLE1BRWpCQyxRQUZpQjs7QUFJL0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQUosWUFBUSxDQUFDRSxRQUFELENBQVI7QUFDSCxHQUhEOztBQUlBRyxrREFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsWUFBbEMsRUFBZ0Q7QUFBRU0sYUFBTyxFQUFFO0FBQVgsS0FBaEQ7QUFFQSxXQUFPLFlBQU07QUFDVEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckM7QUFDSCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNKO0FBQUEsNEJBQ0E7QUFBUyxRQUFFLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUMsMkJBQS9CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEs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QWZGLGVBa0JFLDhEQUFDLDJEQUFEO0FBQUEsdUNBQ0UsOERBQUMsMkRBQUQ7QUFBZSwyQkFBUyxFQUFFZCxLQUFLLENBQUNjLElBQU4sSUFBYyxTQUFkLEdBQXlCLDRCQUF6QixHQUF1RCxxQkFBakY7QUFBd0csc0JBQUksRUFBQyxVQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmUjtBQUFBLGtCQURJO0FBb0VIOztHQXBGdUJmLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmlsZS40NGVmZjE2MzZmNjhiMWYxZWM1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE1EQkNvbnRhaW5lcixcclxuICAgIE1EQk5hdmJhcixcclxuICAgIE1EQk5hdmJhckJyYW5kLFxyXG4gICAgTURCTmF2YmFyVG9nZ2xlcixcclxuICAgIE1EQkljb24sXHJcbiAgICBNREJOYXZiYXJOYXYsXHJcbiAgICBNREJOYXZiYXJJdGVtLFxyXG4gICAgTURCTmF2YmFyTGluayxcclxuICAgIE1EQkNvbGxhcHNlLCBcclxuICB9IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2ljLCBzZXRTaG93QmFzaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25hdkJHLCBzZXRuYXZCR10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2V0bmF2QkcocG9zaXRpb24pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuPD5cclxuPHNlY3Rpb24gaWQ9XCJ0b3BiYXJcIiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxNREJJY29uIGljb249J2F0JyBmYXMgLz4gPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGV4YW1wbGUuY29tXCIgY2xhc3NOYW1lPVwiZW1haWxcIj5pbmZvQGV4YW1wbGUuY29tPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3MgZC1ub25lIGQtbWQtYmxvY2tcIj5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInR3aXR0ZXJcIj48TURCSWNvbiBpY29uPSd0d2l0dGVyJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmYWNlYm9va1wiPjxNREJJY29uIGljb249J2ZhY2Vib29rJyBmYWIgLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbnN0YWdyYW1cIj48TURCSWNvbiBpY29uPSdpbnN0YWdyYW0nIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpbmtlZGluXCI+PE1EQkljb24gaWNvbj0nd2hhdHNhcHAnIGZhYiAvPjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5LXRvcCBcIj5cclxuICAgICAgICA8TURCTmF2YmFyICBleHBhbmQ9J2xnJyBiZ0NvbG9yPVwicHJpbWFyeVwiICBkYXJrIGNsYXNzTmFtZT1cInNoYWRvd1wiPlxyXG4gICAgICAgICAgPE1EQkNvbnRhaW5lciBjb250YWluZXI+XHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJCcmFuZCBocmVmPScjJz48aW1nIHNyYz1cIi4vbG9nby5wbmdcIiBjbGFzc05hbWU9XCJsb2dvXCIvPjxiPlRlc3RlZCBFQ1UgU29sdXRpb25zPC9iPiBcclxuICAgICAgICA8L01EQk5hdmJhckJyYW5kPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJOYXZiYXJUb2dnbGVyXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz0nbmF2YmFyU3VwcG9ydGVkQ29udGVudCdcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPSdmYWxzZSdcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdUb2dnbGUgbmF2aWdhdGlvbidcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmFzaWMoIXNob3dCYXNpYyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPSdiYXJzJyBmYXMgLz5cclxuICAgICAgICAgICAgPC9NREJOYXZiYXJUb2dnbGVyPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxNREJDb2xsYXBzZSBuYXZiYXIgc2hvdz17c2hvd0Jhc2ljfT5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyTmF2IGNsYXNzTmFtZT0nanVzdGlmeS1jb250ZW50LWVuZCc+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb21lJz8gXCJhY3RpdmUgdGV4dC1ibGFjayBuYXZfbGlua1wiOiBcInRleHQtd2hpdGUgbmF2X2xpbmtcIn0gIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rICBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0VDVSc/IFwiYWN0aXZlIHRleHQtYmxhY2sgbmF2X2xpbmtcIjogXCJ0ZXh0LXdoaXRlIG5hdl9saW5rXCJ9IGhyZWY9Jy9maWxlJz5FQ1UgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdUVU5JTkcnPyBcImFjdGl2ZSB0ZXh0LWJsYWNrIG5hdl9saW5rXCI6IFwidGV4dC13aGl0ZSBuYXZfbGlua1wifSBocmVmPScvdHVuaW5nJz5UVU5JTkcgRklMRVM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8L01EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbmsgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdIb3cnPyBcImFjdGl2ZSB0ZXh0LWJsYWNrIG5hdl9saW5rXCI6IFwidGV4dC13aGl0ZSBuYXZfbGlua1wifSBocmVmPScvZmFxJz5Ib3cgdG8/PC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnYWJvdXQnPyBcImFjdGl2ZSB0ZXh0LWJsYWNrIG5hdl9saW5rXCI6IFwidGV4dC13aGl0ZSBuYXZfbGlua1wifSBocmVmPScvYWJvdXQnPkFib3V0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnQ29udGFjdCc/IFwiYWN0aXZlIHRleHQtYmxhY2sgbmF2X2xpbmtcIjogXCJ0ZXh0LXdoaXRlIG5hdl9saW5rXCJ9IGhyZWY9Jy9jb250YWN0Jz5Db250YWN0IFVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01EQk5hdmJhck5hdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L01EQkNvbGxhcHNlPlxyXG4gICAgICAgICAgPC9NREJDb250YWluZXI+XHJcbiAgICAgICAgPC9NREJOYXZiYXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgIFxyXG4gICAgPC8+KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==