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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBBtn, {
        onClick: sidenavToggle("Left"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
          size: "lg",
          icon: "bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBSideNav, {
        slim: true,
        fixed: true,
        mask: "rgba-blue-strong",
        triggerOpening: sideNavLeft,
        breakWidth: 1300,
        className: "sn-bg-1",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "logo-wrapper sn-ad-avatar-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#!",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                alt: "",
                src: "https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
                className: "rounded-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "Anna Deynah"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarNav, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
            to: "/other-page",
            topLevel: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBIcon, {
              icon: "pencil-alt",
              className: "mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this), "Submit listing"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBSideNavCat, {
            name: "Instruction",
            id: "instruction",
            icon: "hand-pointer",
            href: "#",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "For bloggers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "For authors"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBSideNavCat, {
            name: "About",
            id: "about",
            icon: "eye",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "Instruction"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "Monthly meetings"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBSideNavCat, {
            name: "Contact me",
            id: "contact-me",
            icon: "envelope",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "FAQ"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_2__.MDBNavbarLink, {
              children: "Write a message"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9hZG1pbi9uYXYuanMiXSwibmFtZXMiOlsiTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNpZGVOYXZMZWZ0Iiwic2V0c2lkZU5hdkxlZnQiLCJuYXZCRyIsInNldG5hdkJHIiwic2lkZW5hdlRvZ2dsZSIsInNpZGVuYXZJZCIsInNpZGVuYXZOciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFZZSxTQUFTQSxHQUFULENBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSxrQkFDT0MsK0NBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLENBQUQsQ0FGSDtBQUFBLE1BRXhCRyxLQUZ3QjtBQUFBLE1BRWpCQyxRQUZpQjs7QUFJL0IsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxTQUFTO0FBQUEsV0FBSSxZQUFNO0FBQ3ZDLFVBQU1DLFNBQVMsb0JBQWFELFNBQWIsQ0FBZjtBQUVBSixvQkFBYyxDQUFDSyxTQUFELENBQWQ7QUFDRCxLQUo4QjtBQUFBLEdBQS9COztBQU9BLHNCQUNKO0FBQUEsMkJBQ0EsOERBQUMsMERBQUQ7QUFBQSw4QkFDVSw4REFBQyxvREFBRDtBQUFRLGVBQU8sRUFBRUYsYUFBYSxDQUFDLE1BQUQsQ0FBOUI7QUFBQSwrQkFDRSw4REFBQyxxREFBRDtBQUFTLGNBQUksRUFBQyxJQUFkO0FBQW1CLGNBQUksRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURWLGVBSVUsOERBQUMsd0RBQUQ7QUFBWSxZQUFJLE1BQWhCO0FBQWlCLGFBQUssTUFBdEI7QUFBdUIsWUFBSSxFQUFDLGtCQUE1QjtBQUErQyxzQkFBYyxFQUFFSixXQUEvRDtBQUE0RSxrQkFBVSxFQUFFLElBQXhGO0FBQ0UsaUJBQVMsRUFBQyxTQURaO0FBQUEsZ0NBRUU7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsbUNBQWY7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUMsSUFBUjtBQUFBLHNDQUNFO0FBQUssbUJBQUcsRUFBQyxFQUFUO0FBQVksbUJBQUcsRUFBQywyREFBaEI7QUFBNEUseUJBQVMsRUFBQztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFXRSw4REFBQywwREFBRDtBQUFBLGtDQUNFLDhEQUFDLDJEQUFEO0FBQWUsY0FBRSxFQUFDLGFBQWxCO0FBQWdDLG9CQUFRLE1BQXhDO0FBQUEsb0NBQ0UsOERBQUMscURBQUQ7QUFBUyxrQkFBSSxFQUFDLFlBQWQ7QUFBMkIsdUJBQVMsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFLDhEQUFDLDJEQUFEO0FBQWUsZ0JBQUksRUFBQyxhQUFwQjtBQUFrQyxjQUFFLEVBQUMsYUFBckM7QUFBbUQsZ0JBQUksRUFBQyxjQUF4RDtBQUF1RSxnQkFBSSxFQUFDLEdBQTVFO0FBQUEsb0NBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFRRSw4REFBQywyREFBRDtBQUFlLGdCQUFJLEVBQUMsT0FBcEI7QUFBNEIsY0FBRSxFQUFDLE9BQS9CO0FBQXVDLGdCQUFJLEVBQUMsS0FBNUM7QUFBQSxvQ0FDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQVlFLDhEQUFDLDJEQUFEO0FBQWUsZ0JBQUksRUFBQyxZQUFwQjtBQUFpQyxjQUFFLEVBQUMsWUFBcEM7QUFBaUQsZ0JBQUksRUFBQyxVQUF0RDtBQUFBLG9DQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFESTtBQXNDSDs7R0FqRHVCSCxHOztLQUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjRmYTc1ZjJmNGFlYmUyZGVjMzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTURCQ29udGFpbmVyLFxyXG4gICAgTURCTmF2YmFyLFxyXG4gICAgTURCTmF2YmFyQnJhbmQsXHJcbiAgICBNREJOYXZiYXJUb2dnbGVyLFxyXG4gICAgTURCSWNvbixcclxuICAgIE1EQk5hdmJhck5hdixcclxuICAgIE1EQk5hdmJhckl0ZW0sXHJcbiAgICBNREJOYXZiYXJMaW5rLFxyXG4gICAgTURCQ29sbGFwc2UsIFxyXG4gICAgTURCU2lkZU5hdkNhdCwgTURCU2lkZU5hdiwgICBNREJCdG59IGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHByb3BzKSB7XHJcbiAgICBjb25zdCBbc2lkZU5hdkxlZnQsIHNldHNpZGVOYXZMZWZ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtuYXZCRywgc2V0bmF2QkddID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgc2lkZW5hdlRvZ2dsZSA9IHNpZGVuYXZJZCA9PiAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVuYXZOciA9IGBzaWRlTmF2JHtzaWRlbmF2SWR9YFxyXG4gICAgICBcclxuICAgICAgc2V0c2lkZU5hdkxlZnQoc2lkZW5hdk5yKVxyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybihcclxuPD5cclxuPE1EQkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxNREJCdG4gb25DbGljaz17c2lkZW5hdlRvZ2dsZShcIkxlZnRcIil9PlxyXG4gICAgICAgICAgICA8TURCSWNvbiBzaXplPVwibGdcIiBpY29uPVwiYmFyc1wiIC8+XHJcbiAgICAgICAgICA8L01EQkJ0bj5cclxuICAgICAgICAgIDxNREJTaWRlTmF2IHNsaW0gZml4ZWQgbWFzaz1cInJnYmEtYmx1ZS1zdHJvbmdcIiB0cmlnZ2VyT3BlbmluZz17c2lkZU5hdkxlZnR9IGJyZWFrV2lkdGg9ezEzMDB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNuLWJnLTFcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyIHNuLWFkLWF2YXRhci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyFcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCJodHRwczovL21kYm9vdHN0cmFwLmNvbS9pbWcvUGhvdG9zL0F2YXRhcnMvaW1nJTIwKDEwKS5qcGdcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFubmEgRGV5bmFoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPE1EQk5hdmJhck5hdj5cclxuICAgICAgICAgICAgICA8TURCTmF2YmFyTGluayB0bz1cIi9vdGhlci1wYWdlXCIgdG9wTGV2ZWw+XHJcbiAgICAgICAgICAgICAgICA8TURCSWNvbiBpY29uPVwicGVuY2lsLWFsdFwiIGNsYXNzTmFtZT1cIm1yLTJcIiAvPlN1Ym1pdCBsaXN0aW5nPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPE1EQlNpZGVOYXZDYXQgbmFtZT1cIkluc3RydWN0aW9uXCIgaWQ9XCJpbnN0cnVjdGlvblwiIGljb249XCJoYW5kLXBvaW50ZXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbms+Rm9yIGJsb2dnZXJzPC9NREJOYXZiYXJMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE1EQk5hdmJhckxpbms+Rm9yIGF1dGhvcnM8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgPC9NREJTaWRlTmF2Q2F0PlxyXG4gICAgICAgICAgICAgIDxNREJTaWRlTmF2Q2F0IG5hbWU9XCJBYm91dFwiIGlkPVwiYWJvdXRcIiBpY29uPVwiZXllXCI+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluaz5JbnN0cnVjdGlvbjwvTURCTmF2YmFyTGluaz5cclxuICAgICAgICAgICAgICAgIDxNREJOYXZiYXJMaW5rPk1vbnRobHkgbWVldGluZ3M8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgPC9NREJTaWRlTmF2Q2F0PlxyXG4gICAgICAgICAgICAgIDxNREJTaWRlTmF2Q2F0IG5hbWU9XCJDb250YWN0IG1lXCIgaWQ9XCJjb250YWN0LW1lXCIgaWNvbj1cImVudmVsb3BlXCI+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluaz5GQVE8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgICA8TURCTmF2YmFyTGluaz5Xcml0ZSBhIG1lc3NhZ2U8L01EQk5hdmJhckxpbms+XHJcbiAgICAgICAgICAgICAgPC9NREJTaWRlTmF2Q2F0PlxyXG4gICAgICAgICAgICA8L01EQk5hdmJhck5hdj5cclxuICAgICAgICAgIDwvTURCU2lkZU5hdj5cclxuICAgICAgICA8L01EQkNvbnRhaW5lcj5cclxuICAgXHJcbiAgICA8Lz4pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9