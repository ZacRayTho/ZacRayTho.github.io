"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[blogId]",{

/***/ "./src/pages/blog/[blogId].js":
/*!************************************!*\
  !*** ./src/pages/blog/[blogId].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n/* harmony import */ var _components_Nav2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav2 */ \"./src/components/Nav2.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FullBlog() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const blogId = parseInt(router.query.blogId);\n    function handleClick(symbol) {\n        switch(symbol){\n            default:\n            case \"+\":\n                setBlog(blog + 1);\n                break;\n            case \"-\":\n                setBlog(blog - 1);\n                break;\n        }\n    }\n    // let blog = blogs[blogId]\n    // setTimeout(() => {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-auto justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-14 p-4 w-1/2 mx-auto max-w-7xl min-h-fit bg-mediumnavy border-8 border-gold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-7xl\",\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.header\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.date\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"h-1/5 w-1/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.img,\n                            alt: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.imgAlt,\n                            className: \"w-100 h-100\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-3 text-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.first\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.second\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.third\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.fourth\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white py-3 px-2 text-black rounded-lg\",\n                                onClick: ()=>handleClick(\"-\"),\n                                children: \"Last Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white py-3 px-2 text-black rounded-lg\",\n                                onClick: ()=>handleClick(\"+\"),\n                                children: \"All Blogs\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-white py-3 px-2 text-black rounded-lg\",\n                                onClick: ()=>handleClick(\"+\"),\n                                children: \"Next Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n// }, 1000)\n}\n_s(FullBlog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FullBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullBlog);\nvar _c;\n$RefreshReg$(_c, \"FullBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bYmxvZ0lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNNO0FBQ0w7QUFDUDtBQUtqQyxTQUFTSSxXQUFXOztJQUNsQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTU0sU0FBU0MsU0FBU0YsT0FBT0csS0FBSyxDQUFDRixNQUFNO0lBRzNDLFNBQVNHLFlBQVlDLE1BQU0sRUFBRTtRQUMzQixPQUFRQTtZQUNOO1lBQ0EsS0FBSztnQkFDSEMsUUFBUUMsT0FBTztnQkFDZixLQUFNO1lBRVIsS0FBSztnQkFDSEQsUUFBUUMsT0FBTztnQkFDZixLQUFNO1FBQ1Y7SUFDRjtJQUNBLDJCQUEyQjtJQUUzQixxQkFBcUI7SUFDckIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWix3REFBSUE7Ozs7OzBCQUNMLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFZYixtREFBSyxDQUFDSyxPQUFPLEVBQUVVOzs7Ozs7a0NBQ3pDLDhEQUFDQztrQ0FBSWhCLG1EQUFLLENBQUNLLE9BQU8sRUFBRVk7Ozs7OztrQ0FDcEIsOERBQUNDO3dCQUFNTCxXQUFVO2tDQUNmLDRFQUFDTTs0QkFBSUMsS0FBS3BCLG1EQUFLLENBQUNLLE9BQU8sRUFBRWM7NEJBQUtFLEtBQUtyQixtREFBSyxDQUFDSyxPQUFPLEVBQUVpQjs0QkFBUVQsV0FBVTs7Ozs7Ozs7Ozs7a0NBRXRFLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOzBDQUNFWixtREFBSyxDQUFDSyxPQUFPLEVBQUVrQjs7Ozs7OzBDQUVsQiw4REFBQ1g7MENBQ0VaLG1EQUFLLENBQUNLLE9BQU8sRUFBRW1COzs7Ozs7MENBRWxCLDhEQUFDWjswQ0FDRVosbURBQUssQ0FBQ0ssT0FBTyxFQUFFb0I7Ozs7OzswQ0FFbEIsOERBQUNiOzBDQUNFWixtREFBSyxDQUFDSyxPQUFPLEVBQUVxQjs7Ozs7Ozs7Ozs7O2tDQUdwQiw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDYztnQ0FBT2QsV0FBVTtnQ0FBMkNlLFNBQVMsSUFBTXBCLFlBQVk7MENBQU07Ozs7OzswQ0FDOUYsOERBQUNtQjtnQ0FBT2QsV0FBVTtnQ0FBMkNlLFNBQVMsSUFBTXBCLFlBQVk7MENBQU07Ozs7OzswQ0FDOUYsOERBQUNtQjtnQ0FBT2QsV0FBVTtnQ0FBMkNlLFNBQVMsSUFBTXBCLFlBQVk7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10RyxXQUFXO0FBRWI7R0F2RFNMOztRQUNRSixrREFBU0E7OztLQURqQkk7QUF5RFQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW2Jsb2dJZF0uanM/M2U1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGJsb2dzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRhJ1xuaW1wb3J0IE5hdjIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXYyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuXG5cbmZ1bmN0aW9uIEZ1bGxCbG9nKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgYmxvZ0lkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmJsb2dJZClcblxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHN5bWJvbCkge1xuICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICBkZWZhdWx0OlxuICAgICAgY2FzZSBcIitcIjpcbiAgICAgICAgc2V0QmxvZyhibG9nICsgMSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgIHNldEJsb2coYmxvZyAtIDEpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICAvLyBsZXQgYmxvZyA9IGJsb2dzW2Jsb2dJZF1cblxuICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPE5hdjIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTQgcC00IHctMS8yIG14LWF1dG8gbWF4LXctN3hsIG1pbi1oLWZpdCBiZy1tZWRpdW1uYXZ5IGJvcmRlci04IGJvcmRlci1nb2xkXCI+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC03eGwnPntibG9nc1tibG9nSWRdPy5oZWFkZXJ9PC9oMT5cbiAgICAgICAgPGgyPntibG9nc1tibG9nSWRdPy5kYXRlfTwvaDI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoLTEvNSB3LTEvNVwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtibG9nc1tibG9nSWRdPy5pbWd9IGFsdD17YmxvZ3NbYmxvZ0lkXT8uaW1nQWx0fSBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMFwiIC8+XG4gICAgICAgIDwvYXNpZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTMgdGV4dC1sZyc+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtibG9nc1tibG9nSWRdPy5maXJzdH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Jsb2dzW2Jsb2dJZF0/LnNlY29uZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Jsb2dzW2Jsb2dJZF0/LnRoaXJkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7YmxvZ3NbYmxvZ0lkXT8uZm91cnRofVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMyBweC0yIHRleHQtYmxhY2sgcm91bmRlZC1sZ1wiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiLVwiKX0+TGFzdCBCbG9nPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0zIHB4LTIgdGV4dC1ibGFjayByb3VuZGVkLWxnXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCIrXCIpfT5BbGwgQmxvZ3M8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTMgcHgtMiB0ZXh0LWJsYWNrIHJvdW5kZWQtbGdcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIitcIil9Pk5leHQgQmxvZzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIClcbiAgLy8gfSwgMTAwMClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsQmxvZ1xuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJibG9ncyIsIk5hdjIiLCJ1c2VFZmZlY3QiLCJGdWxsQmxvZyIsInJvdXRlciIsImJsb2dJZCIsInBhcnNlSW50IiwicXVlcnkiLCJoYW5kbGVDbGljayIsInN5bWJvbCIsInNldEJsb2ciLCJibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoZWFkZXIiLCJoMiIsImRhdGUiLCJhc2lkZSIsImltZyIsInNyYyIsImFsdCIsImltZ0FsdCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[blogId].js\n"));

/***/ })

});