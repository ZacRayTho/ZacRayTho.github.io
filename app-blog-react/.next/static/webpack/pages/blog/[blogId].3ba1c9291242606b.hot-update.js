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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n/* harmony import */ var _components_Nav2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav2 */ \"./src/components/Nav2.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FullBlog() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const blogId = parseInt(router.query.blogId);\n    function handleClick(symbol) {\n        switch(symbol){\n            default:\n            case \"+\":\n                setBlog(blog + 1);\n                break;\n            case \"-\":\n                setBlog(blog - 1);\n                break;\n        }\n    }\n    // let blog = blogs[blogId]\n    // setTimeout(() => {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-auto justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-14 p-4 w-1/2 mx-auto max-w-7xl min-h-fit bg-mediumnavy border-8 border-gold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-7xl\",\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.header\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.date\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"h-1/4 w-1/4 flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.img,\n                            alt: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.imgAlt\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-3 text-lg flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.first\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.second\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.third\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.fourth\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"/blog/\" + (blogId - 1),\n                                children: \"Last Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"/blog/\",\n                                children: \"All Blogs\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"/blog/\" + (blogId + 1),\n                                children: \"Next Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n// }, 1000)\n}\n_s(FullBlog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FullBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullBlog);\nvar _c;\n$RefreshReg$(_c, \"FullBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bYmxvZ0lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ007QUFDTDtBQUNQO0FBQ0o7QUFLN0IsU0FBU0ssV0FBVzs7SUFDbEIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFNBQVNDLFNBQVNGLE9BQU9HLEtBQUssQ0FBQ0YsTUFBTTtJQUczQyxTQUFTRyxZQUFZQyxNQUFNLEVBQUU7UUFDM0IsT0FBUUE7WUFDTjtZQUNBLEtBQUs7Z0JBQ0hDLFFBQVFDLE9BQU87Z0JBQ2YsS0FBTTtZQUVSLEtBQUs7Z0JBQ0hELFFBQVFDLE9BQU87Z0JBQ2YsS0FBTTtRQUNWO0lBQ0Y7SUFDQSwyQkFBMkI7SUFFM0IscUJBQXFCO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Isd0RBQUlBOzs7OzswQkFDTCw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBWWQsbURBQUssQ0FBQ00sT0FBTyxFQUFFVTs7Ozs7O2tDQUN6Qyw4REFBQ0M7a0NBQUlqQixtREFBSyxDQUFDTSxPQUFPLEVBQUVZOzs7Ozs7a0NBQ3BCLDhEQUFDQzt3QkFBTUwsV0FBVTtrQ0FDZiw0RUFBQ007NEJBQUlDLEtBQUtyQixtREFBSyxDQUFDTSxPQUFPLEVBQUVjOzRCQUFLRSxLQUFLdEIsbURBQUssQ0FBQ00sT0FBTyxFQUFFaUI7Ozs7Ozs7Ozs7O2tDQUVwRCw4REFBQ1Y7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDRWIsbURBQUssQ0FBQ00sT0FBTyxFQUFFa0I7Ozs7OzswQ0FFbEIsOERBQUNYOzBDQUNFYixtREFBSyxDQUFDTSxPQUFPLEVBQUVtQjs7Ozs7OzBDQUVsQiw4REFBQ1o7MENBQ0ViLG1EQUFLLENBQUNNLE9BQU8sRUFBRW9COzs7Ozs7MENBRWxCLDhEQUFDYjswQ0FDRWIsbURBQUssQ0FBQ00sT0FBTyxFQUFFcUI7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNkO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1gsa0RBQUlBO2dDQUFDVyxXQUFVO2dDQUEyQ2MsTUFBTSxXQUFZdEIsQ0FBQUEsU0FBUzswQ0FBSTs7Ozs7OzBDQUMxRiw4REFBQ0gsa0RBQUlBO2dDQUFDVyxXQUFVO2dDQUEyQ2MsTUFBSzswQ0FBUzs7Ozs7OzBDQUN6RSw4REFBQ3pCLGtEQUFJQTtnQ0FBQ1csV0FBVTtnQ0FBMkNjLE1BQU0sV0FBWXRCLENBQUFBLFNBQVM7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRyxXQUFXO0FBRWI7R0F2RFNGOztRQUNRTCxrREFBU0E7OztLQURqQks7QUF5RFQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cvW2Jsb2dJZF0uanM/M2U1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGJsb2dzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EYXRhJ1xuaW1wb3J0IE5hdjIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXYyJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cblxuXG5mdW5jdGlvbiBGdWxsQmxvZygpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGJsb2dJZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5ibG9nSWQpXG5cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhzeW1ib2wpIHtcbiAgICBzd2l0Y2ggKHN5bWJvbCkge1xuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgIHNldEJsb2coYmxvZyArIDEpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiLVwiOlxuICAgICAgICBzZXRCbG9nKGJsb2cgLSAxKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLy8gbGV0IGJsb2cgPSBibG9nc1tibG9nSWRdXG5cbiAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LWF1dG8ganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxOYXYyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE0IHAtNCB3LTEvMiBteC1hdXRvIG1heC13LTd4bCBtaW4taC1maXQgYmctbWVkaXVtbmF2eSBib3JkZXItOCBib3JkZXItZ29sZFwiPlxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtN3hsJz57YmxvZ3NbYmxvZ0lkXT8uaGVhZGVyfTwvaDE+XG4gICAgICAgIDxoMj57YmxvZ3NbYmxvZ0lkXT8uZGF0ZX08L2gyPlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiaC0xLzQgdy0xLzQgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtibG9nc1tibG9nSWRdPy5pbWd9IGFsdD17YmxvZ3NbYmxvZ0lkXT8uaW1nQWx0fSAvPlxuICAgICAgICA8L2FzaWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0zIHRleHQtbGcgZmxleC1jb2wnPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7YmxvZ3NbYmxvZ0lkXT8uZmlyc3R9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtibG9nc1tibG9nSWRdPy5zZWNvbmR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtibG9nc1tibG9nSWRdPy50aGlyZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Jsb2dzW2Jsb2dJZF0/LmZvdXJ0aH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0yIHB4LTQgdGV4dC1ibGFjayByb3VuZGVkLWxnXCIgaHJlZj17XCIvYmxvZy9cIiArIChibG9nSWQgLSAxKX0+TGFzdCBCbG9nPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LWJsYWNrIHJvdW5kZWQtbGdcIiBocmVmPVwiL2Jsb2cvXCI+QWxsIEJsb2dzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTIgcHgtNCB0ZXh0LWJsYWNrIHJvdW5kZWQtbGdcIiBocmVmPXtcIi9ibG9nL1wiICsgKGJsb2dJZCArIDEpfT5OZXh0IEJsb2c8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgKVxuICAvLyB9LCAxMDAwKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bGxCbG9nXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImJsb2dzIiwiTmF2MiIsInVzZUVmZmVjdCIsIkxpbmsiLCJGdWxsQmxvZyIsInJvdXRlciIsImJsb2dJZCIsInBhcnNlSW50IiwicXVlcnkiLCJoYW5kbGVDbGljayIsInN5bWJvbCIsInNldEJsb2ciLCJibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoZWFkZXIiLCJoMiIsImRhdGUiLCJhc2lkZSIsImltZyIsInNyYyIsImFsdCIsImltZ0FsdCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[blogId].js\n"));

/***/ })

});