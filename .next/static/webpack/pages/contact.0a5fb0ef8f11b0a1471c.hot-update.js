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
      className: "sticky-top",
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
              lineNumber: 52,
              columnNumber: 38
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "Tested ECU Solutions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 78
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBCollapse, {
            navbar: true,
            show: showBasic,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarNav, {
              className: "justify-content-end",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'Home' ? "active nav_link" : " nav_link",
                  href: "/",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'ECU' ? "active" : "hover-shadow",
                  href: "/file",
                  children: "ECU FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'TUNING' ? "active" : "",
                  href: "/tuning",
                  children: "TUNING FILES"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'How' ? "active" : "",
                  href: "/faq",
                  children: "How to?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'about' ? "active" : "",
                  href: "/about",
                  children: "About US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
                  className: props.page == 'Contact' ? "active" : "",
                  href: "/contact",
                  children: "Contact US"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNob3dCYXNpYyIsInNldFNob3dCYXNpYyIsIm5hdkJHIiwic2V0bmF2QkciLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFZZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxrQkFDR0MsK0NBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUN4QkMsU0FEd0I7QUFBQSxNQUNiQyxZQURhOztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLENBQUQsQ0FGSDtBQUFBLE1BRXhCRyxLQUZ3QjtBQUFBLE1BRWpCQyxRQUZpQjs7QUFJL0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBeEI7QUFDQUosWUFBUSxDQUFDRSxRQUFELENBQVI7QUFDSCxHQUhEOztBQUlBRyxrREFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsWUFBbEMsRUFBZ0Q7QUFBRU0sYUFBTyxFQUFFO0FBQVgsS0FBaEQ7QUFFQSxXQUFPLFlBQU07QUFDVEosWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckM7QUFDSCxLQUZEO0FBR0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUNKO0FBQUEsNEJBQ0E7QUFBUyxRQUFFLEVBQUMsUUFBWjtBQUFxQixlQUFTLEVBQUMsMkJBQS9CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG9FQUFmO0FBQUEs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QkFBSSxFQUFDLFFBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmRixlQWtCRSw4REFBQywyREFBRDtBQUFBLHVDQUNFLDhEQUFDLDJEQUFEO0FBQWUsMkJBQVMsRUFBRWQsS0FBSyxDQUFDYyxJQUFOLElBQWMsU0FBZCxHQUF5QixRQUF6QixHQUFtQyxFQUE3RDtBQUFpRSxzQkFBSSxFQUFDLFVBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCUjtBQUFBLGtCQURJO0FBb0VIOztHQXBGdUJmLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC4wYTVmYjBlZjhmMTFiMGExNDcxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICAgIE1EQkNvbnRhaW5lcixcclxuICAgIE1EQk5hdmJhcixcclxuICAgIE1EQk5hdmJhckJyYW5kLFxyXG4gICAgTURCTmF2YmFyVG9nZ2xlcixcclxuICAgIE1EQkljb24sXHJcbiAgICBNREJOYXZiYXJOYXYsXHJcbiAgICBNREJOYXZiYXJJdGVtLFxyXG4gICAgTURCTmF2YmFyTGluayxcclxuICAgIE1EQkNvbGxhcHNlLCBcclxuICB9IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2hvd0Jhc2ljLCBzZXRTaG93QmFzaWNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW25hdkJHLCBzZXRuYXZCR10gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2V0bmF2QkcocG9zaXRpb24pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuPD5cclxuPHNlY3Rpb24gaWQ9XCJ0b3BiYXJcIiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5mbyBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxNREJJY29uIGljb249J2F0JyBmYXMgLz4gPGEgaHJlZj1cIm1haWx0bzpjb250YWN0QGV4YW1wbGUuY29tXCIgY2xhc3NOYW1lPVwiZW1haWxcIj5pbmZvQGV4YW1wbGUuY29tPC9hPlxyXG4gICAgICA8TURCSWNvbiBpY29uPSdtb2JpbGUtYWx0JyBmYXMgLz4gICArMSA1NTg5IDU1NDg4IDU1XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rcyBkLW5vbmUgZC1tZC1ibG9ja1wiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidHdpdHRlclwiPjxNREJJY29uIGljb249J3R3aXR0ZXInIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rXCI+PE1EQkljb24gaWNvbj0nZmFjZWJvb2snIGZhYiAvPjwvYT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImluc3RhZ3JhbVwiPjxNREJJY29uIGljb249J2luc3RhZ3JhbScgZmFiIC8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlua2VkaW5cIj48TURCSWNvbiBpY29uPSd3aGF0c2FwcCcgZmFiIC8+PC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBcclxuICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3ktdG9wXCI+XHJcbiAgICAgICAgPE1EQk5hdmJhciAgZXhwYW5kPSdsZycgYmdDb2xvcj1cInByaW1hcnlcIiAgZGFyayBjbGFzc05hbWU9XCJzaGFkb3dcIj5cclxuICAgICAgICAgIDxNREJDb250YWluZXIgY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8TURCTmF2YmFyQnJhbmQgaHJlZj0nIyc+PGltZyBzcmM9XCIuL2xvZ28ucG5nXCIgY2xhc3NOYW1lPVwibG9nb1wiLz48Yj5UZXN0ZWQgRUNVIFNvbHV0aW9uczwvYj4gXHJcbiAgICAgICAgPC9NREJOYXZiYXJCcmFuZD5cclxuICAgIFxyXG4gICAgICAgICAgICA8TURCTmF2YmFyVG9nZ2xlclxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9J25hdmJhclN1cHBvcnRlZENvbnRlbnQnXHJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nVG9nZ2xlIG5hdmlnYXRpb24nXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Jhc2ljKCFzaG93QmFzaWMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1EQkljb24gaWNvbj0nYmFycycgZmFzIC8+XHJcbiAgICAgICAgICAgIDwvTURCTmF2YmFyVG9nZ2xlcj5cclxuICAgIFxyXG4gICAgICAgICAgICA8TURCQ29sbGFwc2UgbmF2YmFyIHNob3c9e3Nob3dCYXNpY30+XHJcbiAgICAgICAgICAgICAgPE1EQk5hdmJhck5hdiBjbGFzc05hbWU9J2p1c3RpZnktY29udGVudC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnSG9tZSc/IFwiYWN0aXZlIG5hdl9saW5rXCI6IFwiIG5hdl9saW5rXCJ9ICBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICAgIDwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayAgY2xhc3NOYW1lPXtwcm9wcy5wYWdlID09ICdFQ1UnPyBcImFjdGl2ZVwiOiBcImhvdmVyLXNoYWRvd1wifSBocmVmPScvZmlsZSc+RUNVIEZJTEVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnVFVOSU5HJz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL3R1bmluZyc+VFVOSU5HIEZJTEVTPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rIGNsYXNzTmFtZT17cHJvcHMucGFnZSA9PSAnSG93Jz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL2ZhcSc+SG93IHRvPzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ2Fib3V0Jz8gXCJhY3RpdmVcIjogXCJcIn0gaHJlZj0nL2Fib3V0Jz5BYm91dCBVUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayBjbGFzc05hbWU9e3Byb3BzLnBhZ2UgPT0gJ0NvbnRhY3QnPyBcImFjdGl2ZVwiOiBcIlwifSBocmVmPScvY29udGFjdCc+Q29udGFjdCBVUzwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTURCTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9NREJOYXZiYXJOYXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9NREJDb2xsYXBzZT5cclxuICAgICAgICAgIDwvTURCQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTURCTmF2YmFyPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICBcclxuICAgIDwvPilcclxufSJdLCJzb3VyY2VSb290IjoiIn0=