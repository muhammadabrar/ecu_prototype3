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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('home'),
      active = _useState2[0],
      setactive = _useState2[1];

  var openMenu = function openMenu() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navmenu),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: !active == 'home' ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navlink) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navitem_active),
                onClick: openMenu,
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 24
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
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
                lineNumber: 23,
                columnNumber: 27
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
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
                lineNumber: 30,
                columnNumber: 26
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: isOpen === false ? (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger) : (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger) + ' ' + (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),
          onClick: openMenu,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: (_style_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().bar)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "checkbox",
        id: "btn",
        hidden: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        "for": "btn",
        "class": "menu-btn",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          "class": "fas fa-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 10
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          "class": "fas fa-times"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        id: "sidebar",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "title",
          children: "Side Menu"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          "class": "list-items",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 32
              }, this), "Home"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-sliders-h"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 32
              }, this), "Clients"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-address-book"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 32
              }, this), "Services"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-cog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 32
              }, this), "Settings"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-stream"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 32
              }, this), "Features"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-user"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 32
              }, this), "About us"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-globe-asia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 32
              }, this), "Languages"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-envelope"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 32
              }, this), "Contact us"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 20
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 16
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "icons",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fab fa-facebook-f"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 31
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fab fa-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 31
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fab fa-github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 31
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 19
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fab fa-youtube"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 31
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 10
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Layout, "31vcWhV2a1TtfeJWZp9LRONOG2s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcC9hZG1pbi9uYXYuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImFjdGl2ZSIsInNldGFjdGl2ZSIsIm9wZW5NZW51Iiwic3R5bGVzIiwiYmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsTUFBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTs7QUFBQSxrQkFFWEMsK0NBQVEsQ0FBQyxLQUFELENBRkc7QUFBQSxNQUUvQkMsTUFGK0I7QUFBQSxNQUV4QkMsU0FGd0I7O0FBQUEsbUJBR1hGLCtDQUFRLENBQUMsTUFBRCxDQUhHO0FBQUEsTUFHL0JHLE1BSCtCO0FBQUEsTUFHeEJDLFNBSHdCOztBQUt0QyxNQUFNQyxRQUFRLEdBQUUsU0FBVkEsUUFBVTtBQUFBLFdBQUtILFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWQ7QUFBQSxHQUFoQjs7QUFDQSxzQkFBTztBQUFBLDJCQUNDO0FBQVEsZUFBUyxFQUFFSyxxRUFBbkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHFFQUFoQjtBQUFBLGdDQUVBO0FBQUksbUJBQVMsRUFBRUEsc0VBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUVBLHNFQUFmO0FBQUEsbUNBQ0csOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUUsQ0FBQ0gsTUFBRCxJQUFVLE1BQVYsR0FBa0JHLHNFQUFsQixHQUFrQ0EsNkVBQWhEO0FBQ1csdUJBQU8sRUFBRUQsUUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU9JO0FBQUkscUJBQVMsRUFB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ZUFHRztBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFBLHFDQUFZO0FBQUcseUJBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISCxlQUlHO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQUEscUNBQVk7QUFBRyx5QkFBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdkNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUFQO0FBaUVIOztHQXZFdUJULE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZDYxMGVmMDUwYzg5MjViZDcyYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGUvbmF2Lm1vZHVsZS5jc3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbn0pe1xyXG5cclxuICAgIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthY3RpdmUsc2V0YWN0aXZlXSA9IHVzZVN0YXRlKCdob21lJyk7XHJcblxyXG4gICAgY29uc3Qgb3Blbk1lbnU9ICgpPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgcmV0dXJuIDw+IFxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2bWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXshYWN0aXZlID09J2hvbWUnPyBzdHlsZXMubmF2bGluazogc3R5bGVzLm5hdml0ZW1fYWN0aXZlICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5uYXZsaW5rIDogc3R5bGVzLm5hdmxpbmsrJyAnK3N0eWxlcy5hY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fT5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzT3BlbiA9PT0gZmFsc2UgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLm5hdmxpbmsgOiBzdHlsZXMubmF2bGluaysnICcrc3R5bGVzLmFjdGl2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1lbnV9PkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtpc09wZW4gPT09IGZhbHNlID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcy5oYW1idXJnZXIgOiBzdHlsZXMuaGFtYnVyZ2VyKycgJytzdHlsZXMuYWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImJ0blwiIGhpZGRlbiAvPlxyXG4gICAgICAgICA8bGFiZWwgZm9yPVwiYnRuXCIgY2xhc3M9XCJtZW51LWJ0blwiPlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgPG5hdiBpZD1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgIFNpZGUgTWVudVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1ob21lXCI+PC9pPkhvbWU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2xpZGVycy1oXCI+PC9pPkNsaWVudHM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtYWRkcmVzcy1ib29rXCI+PC9pPlNlcnZpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNvZ1wiPjwvaT5TZXR0aW5nczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1zdHJlYW1cIj48L2k+RmVhdHVyZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtdXNlclwiPjwvaT5BYm91dCB1czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1nbG9iZS1hc2lhXCI+PC9pPkxhbmd1YWdlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5Db250YWN0IHVzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYWIgZmEteW91dHViZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgIFxyXG4gICAgICAgXHJcbiAgICAgPC8+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9