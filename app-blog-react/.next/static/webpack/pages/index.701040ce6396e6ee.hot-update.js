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

/***/ "./src/components/ProjectCard.js":
/*!***************************************!*\
  !*** ./src/components/ProjectCard.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ProjectCard(props) {\n    const { title , id , img , imgAlt , modal , projectLink , githubLink  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-custom mb-4 mx-auto\",\n            style: {\n                width: \"18rem\",\n                backgroundColor: \"aliceblue\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"card-title \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-text \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: imgAlt,\n                                className: \"border rounded mw-100\",\n                                id: \"project-teaser\",\n                                src: img\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"btn btn-primary mt-1\",\n                                \"data-bs-toggle\": \"modal\",\n                                \"data-bs-target\": \"#\" + id,\n                                children: \"More info\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"modal fade\",\n                                id: id,\n                                tabIndex: -1,\n                                \"aria-labelledby\": \"exampleModalLabel\",\n                                \"aria-hidden\": \"true\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"modal-dialog\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"modal-content\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"modal-header\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        className: \"modal-title\",\n                                                        id: id,\n                                                        children: title\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        type: \"button\",\n                                                        className: \"btn-close\",\n                                                        \"data-bs-dismiss\": \"modal\",\n                                                        \"aria-label\": \"Close\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"modal-body\",\n                                                children: modal\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 37\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"modal-footer\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        type: \"button\",\n                                                        className: \"btn btn-secondary\",\n                                                        \"data-bs-dismiss\": \"modal\",\n                                                        children: \"Close\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                        lineNumber: 51,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: githubLink,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            type: \"button\",\n                                                            className: \"btn btn-primary\",\n                                                            children: \"Project Repo!\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 45\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: projectLink,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            type: \"button\",\n                                                            className: \"btn btn-primary\",\n                                                            children: \"Check it out!\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 45\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: projectLink,\n                        className: \"btn btn-primary mt-1 card-link\",\n                        children: \"Check it out!\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsWUFBWUMsS0FBSyxFQUFFO0lBQ3hCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxHQUFFLEVBQUVDLElBQUcsRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsV0FBVSxFQUFFLEdBQUdQO0lBRW5FLHFCQUNJO2tCQUNJLDRFQUFDUTtZQUNHQyxXQUFVO1lBQ1ZDLE9BQU87Z0JBQUVDLE9BQU87Z0JBQVNDLGlCQUFpQjtZQUFZO3NCQUV0RCw0RUFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBZVI7Ozs7OztrQ0FDN0IsOERBQUNPO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ047Z0NBQ0dXLEtBQUtWO2dDQUNMSyxXQUFVO2dDQUNWUCxJQUFHO2dDQUNIYSxLQUFLWjs7Ozs7OzBDQUVULDhEQUFDYTtnQ0FDR0MsTUFBSztnQ0FDTFIsV0FBVTtnQ0FDVlMsa0JBQWU7Z0NBQ2ZDLGtCQUFnQixNQUFNakI7MENBQ3pCOzs7Ozs7MENBR0QsOERBQUNNO2dDQUNHQyxXQUFVO2dDQUNWUCxJQUFJQTtnQ0FDSmtCLFVBQVUsQ0FBQztnQ0FDWEMsbUJBQWdCO2dDQUNoQkMsZUFBWTswQ0FFWiw0RUFBQ2Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ0Q7Z0RBQUlDLFdBQVU7O2tFQUNYLDhEQUFDSTt3REFBR0osV0FBVTt3REFBY1AsSUFBSUE7a0VBQzNCRDs7Ozs7O2tFQUVMLDhEQUFDZTt3REFDR0MsTUFBSzt3REFDTFIsV0FBVTt3REFDVmMsbUJBQWdCO3dEQUNoQkMsY0FBVzs7Ozs7Ozs7Ozs7OzBEQUduQiw4REFBQ2hCO2dEQUFJQyxXQUFVOzBEQUNWSjs7Ozs7OzBEQUVMLDhEQUFDRztnREFBSUMsV0FBVTs7a0VBQ1gsOERBQUNPO3dEQUNHQyxNQUFLO3dEQUNMUixXQUFVO3dEQUNWYyxtQkFBZ0I7a0VBQ25COzs7Ozs7a0VBR0QsOERBQUNFO3dEQUFFQyxNQUFNbkI7a0VBQ0wsNEVBQUNTOzREQUFPQyxNQUFLOzREQUFTUixXQUFVO3NFQUFrQjs7Ozs7Ozs7Ozs7a0VBSXRELDhEQUFDZ0I7d0RBQUVDLE1BQU1wQjtrRUFDTCw0RUFBQ1U7NERBQU9DLE1BQUs7NERBQVNSLFdBQVU7c0VBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBVTFFLDhEQUFDZ0I7d0JBQ0dDLE1BQU1wQjt3QkFDTkcsV0FBVTtrQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0tBbkZTVjtBQXFGVCwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcz9iZTY0Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFByb2plY3RDYXJkKHByb3BzKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaWQsIGltZywgaW1nQWx0LCBtb2RhbCwgcHJvamVjdExpbmssIGdpdGh1YkxpbmsgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItY3VzdG9tIG1iLTQgbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMThyZW1cIiwgYmFja2dyb3VuZENvbG9yOiBcImFsaWNlYmx1ZVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1nQWx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkIG13LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0LXRlYXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD17XCIjXCIgKyBpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlIGluZm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1jbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2dpdGh1Ykxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3QgUmVwbyFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3RMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaGVjayBpdCBvdXQhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3RMaW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTEgY2FyZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZCJdLCJuYW1lcyI6WyJQcm9qZWN0Q2FyZCIsInByb3BzIiwidGl0bGUiLCJpZCIsImltZyIsImltZ0FsdCIsIm1vZGFsIiwicHJvamVjdExpbmsiLCJnaXRodWJMaW5rIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImg1IiwiYWx0Iiwic3JjIiwiYnV0dG9uIiwidHlwZSIsImRhdGEtYnMtdG9nZ2xlIiwiZGF0YS1icy10YXJnZXQiLCJ0YWJJbmRleCIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtaGlkZGVuIiwiZGF0YS1icy1kaXNtaXNzIiwiYXJpYS1sYWJlbCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.js\n"));

/***/ })

});