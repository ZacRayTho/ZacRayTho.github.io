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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.js\");\n\n\nfunction ProjectCard({ project  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-72 border-custom mb-4 mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"card-title \",\n                        children: project.title\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-text \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: project.imgAlt,\n                                className: \"border rounded mw-100\",\n                                id: \"project-teaser\",\n                                src: project.img\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-full bg-white text-black py-2 px-4\",\n                                \"data-bs-toggle\": \"modal\",\n                                \"data-bs-target\": \"#\" + project.id,\n                                children: \"More info\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: project.projectLink,\n                        className: \"rounded-full bg-white text-black py-2 px-4\",\n                        children: \"Check it out!\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/components/ProjectCard.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQjtBQUUzQixTQUFTQyxZQUFZLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBRTlCLHFCQUNJO2tCQUNJLDRFQUFDQztZQUNHQyxXQUFVO3NCQUVWLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFlRixRQUFRSSxLQUFLOzs7Ozs7a0NBQzFDLDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNHO2dDQUNHQyxLQUFLTixRQUFRTyxNQUFNO2dDQUNuQkwsV0FBVTtnQ0FDVk0sSUFBRztnQ0FDSEMsS0FBS1QsUUFBUUssR0FBRzs7Ozs7OzBDQUVwQiw4REFBQ0s7Z0NBRUdSLFdBQVU7Z0NBQ1ZTLGtCQUFlO2dDQUNmQyxrQkFBZ0IsTUFBTVosUUFBUVEsRUFBRTswQ0FDbkM7Ozs7OzswQ0FHRCw4REFBQ1YsOENBQUtBOzs7Ozs7Ozs7OztrQ0FnRFYsOERBQUNlO3dCQUNHQyxNQUFNZCxRQUFRZSxXQUFXO3dCQUN6QmIsV0FBVTtrQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0tBbEZTSDtBQW9GVCwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qcz9iZTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiXG5cbmZ1bmN0aW9uIFByb2plY3RDYXJkKHsgcHJvamVjdCB9KSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzIgYm9yZGVyLWN1c3RvbSBtYi00IG14LWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIFwiPntwcm9qZWN0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5pbWdBbHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgbXctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2plY3QtdGVhc2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgdGV4dC1ibGFjayBweS0yIHB4LTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PXtcIiNcIiArIHByb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBpbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsTGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiIGlkPXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QubW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QuZ2l0aHViTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdCBSZXBvIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5wcm9qZWN0TGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgaXQgb3V0IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5wcm9qZWN0TGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSB0ZXh0LWJsYWNrIHB5LTIgcHgtNFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENoZWNrIGl0IG91dCFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmQiXSwibmFtZXMiOlsiTW9kYWwiLCJQcm9qZWN0Q2FyZCIsInByb2plY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInRpdGxlIiwiaW1nIiwiYWx0IiwiaW1nQWx0IiwiaWQiLCJzcmMiLCJidXR0b24iLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYSIsImhyZWYiLCJwcm9qZWN0TGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProjectCard.js\n"));

/***/ })

});