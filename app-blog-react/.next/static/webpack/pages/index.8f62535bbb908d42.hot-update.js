"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/BlogTeaseCard.js":
/*!*****************************************!*\
  !*** ./src/components/BlogTeaseCard.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction BlogTeaseCard(props) {\n    const { setBlog , setView , title , body , link  } = props;\n    function handleClick() {\n        setView(\"Blog\");\n        setBlog(link);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-custom\",\n            style: {\n                width: \"18rem\",\n                backgroundColor: \"aliceblue\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"card-title\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-text\",\n                        children: body\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        to: \"/fullBlog\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            className: \"btn btn-primary card-link\",\n                            children: \"Read Full Post\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/BlogTeaseCard.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = BlogTeaseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogTeaseCard);\nvar _c;\n$RefreshReg$(_c, \"BlogTeaseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nVGVhc2VDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMkM7QUFFM0MsU0FBU0MsY0FBY0MsS0FBSyxFQUFFO0lBQzFCLE1BQU0sRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR0w7SUFFaEQsU0FBU00sY0FBYztRQUNuQkosUUFBUTtRQUNSRCxRQUFRSTtJQUNaO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNFO1lBQ0dDLFdBQVU7WUFDVkMsT0FBTztnQkFBRUMsT0FBTztnQkFBU0MsaUJBQWlCO1lBQVk7c0JBRXRELDRFQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFjTDs7Ozs7O2tDQUM1Qiw4REFBQ1U7d0JBQUVMLFdBQVU7a0NBQ1JKOzs7Ozs7a0NBRUwsOERBQUNVO3dCQUFFQyxJQUFHO2tDQUNGLDRFQUFDQzs0QkFDR0MsU0FBU1g7NEJBQ1RFLFdBQVU7c0NBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpCO0tBL0JTVDtBQWdDVCwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CbG9nVGVhc2VDYXJkLmpzP2NjZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmZ1bmN0aW9uIEJsb2dUZWFzZUNhcmQocHJvcHMpIHtcbiAgICBjb25zdCB7IHNldEJsb2csIHNldFZpZXcsIHRpdGxlLCBib2R5LCBsaW5rIH0gPSBwcm9wcztcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBzZXRWaWV3KFwiQmxvZ1wiKVxuICAgICAgICBzZXRCbG9nKGxpbmspXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItY3VzdG9tXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYWxpY2VibHVlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aXRsZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxhIHRvPVwiL2Z1bGxCbG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGNhcmQtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBGdWxsIFBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQmxvZ1RlYXNlQ2FyZCJdLCJuYW1lcyI6WyJOYXZMaW5rIiwiQmxvZ1RlYXNlQ2FyZCIsInByb3BzIiwic2V0QmxvZyIsInNldFZpZXciLCJ0aXRsZSIsImJvZHkiLCJsaW5rIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaDUiLCJwIiwiYSIsInRvIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/BlogTeaseCard.js\n"));

/***/ })

});