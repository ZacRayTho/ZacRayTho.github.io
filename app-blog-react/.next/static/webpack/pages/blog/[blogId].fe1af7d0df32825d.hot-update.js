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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n/* harmony import */ var _components_Nav2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Nav2 */ \"./src/components/Nav2.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction FullBlog() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const blogId = parseInt(router.query.blogId);\n    function handleClick(symbol) {\n        switch(symbol){\n            default:\n            case \"+\":\n                setBlog(blog + 1);\n                break;\n            case \"-\":\n                setBlog(blog - 1);\n                break;\n        }\n    }\n    // let blog = blogs[blogId]\n    // setTimeout(() => {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-auto justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav2__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-14 p-4 w-1/2 mx-auto max-w-7xl min-h-fit bg-mediumnavy border-8 border-gold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-7xl\",\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.header\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.date\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n                        className: \"h-1/5 w-1/5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.img,\n                            alt: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.imgAlt,\n                            className: \"w-100 h-100\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-3 text-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.first\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.second\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.third\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.blogs[blogId]?.fourth\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"/blog/\" + (blogId - 1),\n                                children: \"Last Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"\",\n                                children: \"All Blogs\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"bg-white py-2 px-4 text-black rounded-lg\",\n                                href: \"\",\n                                children: \"Next Blog\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/blog/[blogId].js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n// }, 1000)\n}\n_s(FullBlog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = FullBlog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FullBlog);\nvar _c;\n$RefreshReg$(_c, \"FullBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bYmxvZ0lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ007QUFDTDtBQUNQO0FBQ0o7QUFLN0IsU0FBU0ssV0FBVzs7SUFDbEIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLFNBQVNDLFNBQVNGLE9BQU9HLEtBQUssQ0FBQ0YsTUFBTTtJQUczQyxTQUFTRyxZQUFZQyxNQUFNLEVBQUU7UUFDM0IsT0FBUUE7WUFDTjtZQUNBLEtBQUs7Z0JBQ0hDLFFBQVFDLE9BQU87Z0JBQ2YsS0FBTTtZQUVSLEtBQUs7Z0JBQ0hELFFBQVFDLE9BQU87Z0JBQ2YsS0FBTTtRQUNWO0lBQ0Y7SUFDQSwyQkFBMkI7SUFFM0IscUJBQXFCO0lBQ3JCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Isd0RBQUlBOzs7OzswQkFDTCw4REFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBWWQsbURBQUssQ0FBQ00sT0FBTyxFQUFFVTs7Ozs7O2tDQUN6Qyw4REFBQ0M7a0NBQUlqQixtREFBSyxDQUFDTSxPQUFPLEVBQUVZOzs7Ozs7a0NBQ3BCLDhEQUFDQzt3QkFBTUwsV0FBVTtrQ0FDZiw0RUFBQ007NEJBQUlDLEtBQUtyQixtREFBSyxDQUFDTSxPQUFPLEVBQUVjOzRCQUFLRSxLQUFLdEIsbURBQUssQ0FBQ00sT0FBTyxFQUFFaUI7NEJBQVFULFdBQVU7Ozs7Ozs7Ozs7O2tDQUV0RSw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDswQ0FDRWIsbURBQUssQ0FBQ00sT0FBTyxFQUFFa0I7Ozs7OzswQ0FFbEIsOERBQUNYOzBDQUNFYixtREFBSyxDQUFDTSxPQUFPLEVBQUVtQjs7Ozs7OzBDQUVsQiw4REFBQ1o7MENBQ0ViLG1EQUFLLENBQUNNLE9BQU8sRUFBRW9COzs7Ozs7MENBRWxCLDhEQUFDYjswQ0FDRWIsbURBQUssQ0FBQ00sT0FBTyxFQUFFcUI7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNkO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1gsa0RBQUlBO2dDQUFDVyxXQUFVO2dDQUEyQ2MsTUFBTSxXQUFZdEIsQ0FBQUEsU0FBUzswQ0FBSTs7Ozs7OzBDQUMxRiw4REFBQ0gsa0RBQUlBO2dDQUFDVyxXQUFVO2dDQUEyQ2MsTUFBSzswQ0FBRzs7Ozs7OzBDQUNuRSw4REFBQ3pCLGtEQUFJQTtnQ0FBQ1csV0FBVTtnQ0FBMkNjLE1BQUs7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRSxXQUFXO0FBRWI7R0F2RFN4Qjs7UUFDUUwsa0RBQVNBOzs7S0FEakJLO0FBeURULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nL1tibG9nSWRdLmpzPzNlNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBibG9ncyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGF0YSdcbmltcG9ydCBOYXYyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2MidcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5cblxuZnVuY3Rpb24gRnVsbEJsb2coKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBibG9nSWQgPSBwYXJzZUludChyb3V0ZXIucXVlcnkuYmxvZ0lkKVxuXG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soc3ltYm9sKSB7XG4gICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlIFwiK1wiOlxuICAgICAgICBzZXRCbG9nKGJsb2cgKyAxKVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgc2V0QmxvZyhibG9nIC0gMSlcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGxldCBibG9nID0gYmxvZ3NbYmxvZ0lkXVxuXG4gIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC1hdXRvIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8TmF2MiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBwLTQgdy0xLzIgbXgtYXV0byBtYXgtdy03eGwgbWluLWgtZml0IGJnLW1lZGl1bW5hdnkgYm9yZGVyLTggYm9yZGVyLWdvbGRcIj5cblxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTd4bCc+e2Jsb2dzW2Jsb2dJZF0/LmhlYWRlcn08L2gxPlxuICAgICAgICA8aDI+e2Jsb2dzW2Jsb2dJZF0/LmRhdGV9PC9oMj5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImgtMS81IHctMS81XCI+XG4gICAgICAgICAgPGltZyBzcmM9e2Jsb2dzW2Jsb2dJZF0/LmltZ30gYWx0PXtibG9nc1tibG9nSWRdPy5pbWdBbHR9IGNsYXNzTmFtZT1cInctMTAwIGgtMTAwXCIgLz5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMyB0ZXh0LWxnJz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Jsb2dzW2Jsb2dJZF0/LmZpcnN0fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7YmxvZ3NbYmxvZ0lkXT8uc2Vjb25kfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7YmxvZ3NbYmxvZ0lkXT8udGhpcmR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtibG9nc1tibG9nSWRdPy5mb3VydGh9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMiBweC00IHRleHQtYmxhY2sgcm91bmRlZC1sZ1wiIGhyZWY9e1wiL2Jsb2cvXCIgKyAoYmxvZ0lkIC0gMSl9Pkxhc3QgQmxvZzwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0yIHB4LTQgdGV4dC1ibGFjayByb3VuZGVkLWxnXCIgaHJlZj1cIlwiPkFsbCBCbG9nczwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0yIHB4LTQgdGV4dC1ibGFjayByb3VuZGVkLWxnXCIgaHJlZj1cIlwiPk5leHQgQmxvZzwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICApXG4gIC8vIH0sIDEwMDApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVsbEJsb2dcblxuXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiYmxvZ3MiLCJOYXYyIiwidXNlRWZmZWN0IiwiTGluayIsIkZ1bGxCbG9nIiwicm91dGVyIiwiYmxvZ0lkIiwicGFyc2VJbnQiLCJxdWVyeSIsImhhbmRsZUNsaWNrIiwic3ltYm9sIiwic2V0QmxvZyIsImJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhlYWRlciIsImgyIiwiZGF0ZSIsImFzaWRlIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1nQWx0IiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/[blogId].js\n"));

/***/ })

});