"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./src/pages/project/index.js":
/*!************************************!*\
  !*** ./src/pages/project/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectCard */ \"./src/components/ProjectCard.js\");\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Projects() {\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [modalData, setModalData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    // const content = [\n    //   { title: \"Weather app\", id: \"weatherapp\", img: \"./img/project-teasers/weather-app-teaser.png\", imgAlt: \"Teaser of Weather App\", modal: \"Our first time using axios and pulling data from an outside source AKA an API. This is a rather simple app, simply displaying the temp of whatever zip code you put in,or if you allow it, can use your browsers geolocation to find your zip out automatically. As an extra challenge, we had to generate html elements using javascript.\", projectLink: \"https://zacraytho.github.io/weather-app/\", githubLink: \"https://github.com/ZacRayTho/weather-app\" },\n    //   { title: \"Tic-Tac-Toe\", id: \"tictactoe\", img: \"./img/project-teasers/tic-tac-toe-teaser.png\", imgAlt: \"Teaser of Tic Tac Toe\", modal: \"Our second big project, maybe not super advanced for a human, but getting the human logic into code that the computer will understand was the real challenge of this project. It really made me stop and think and pseudocode before hopping straight into coding, sadly I still had a couple hiccups along the way because of bad logic on my part.\", projectLink: \"https://zacraytho.github.io/tic-tac-toe/\", githubLink: \"https://github.com/ZacRayTho/tic-tac-toe\" },\n    //   { title: \"To-Do List\", id: \"todolist\", img: \"./img/project-teasers/to-do-list-teaser.png\", imgAlt: \"Teaser of To Do List\", modal: \"Our first project after React's introduction, meant for us to get use to it's form of state and the way it renders HTML elements as components in Javascript. Definitely the hardest project up to this point, but i'll probably say that every coming week as we travel away from the VanillaJS which I had experience with prior to the bootcamp.\", projectLink: \"https://zacraytho.github.io/To-do-list/\", githubLink: \"https://github.com/ZacRayTho/To-do-list\" },\n    //   { title: \"Restaurant Menu\", id: \"restaurant\", img: \"./img/project-teasers/restaurant-teaser.png\", imgAlt: \"Teaser of Restaurant Menu\", modal: \"Our Second project with React, this time we were tasked with pulling info from an API and displaying it with React components. This was a more open ended project, and definitely was harder to start because of that but after looking at a few real restaurant website I had my target in site. I really tried to replicate a functioning restaurant frontend.\", projectLink: \"https://zacraytho.github.io/react-restaurants/#/\", githubLink: \"https://github.com/ZacRayTho/react-restaurants\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" }\n    // ]\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center bg-transparent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-sm \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid lg:grid-cols-3 max-w-7xl mx-auto \",\n                    children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            project: project,\n                            setShowModal: setShowModal,\n                            showModal: showModal,\n                            setModalData: setModalData\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"g5QpKf7tAgSMtAmaNIpOYWOxk2g=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQ047QUFDTjtBQUNWO0FBRWhDLFNBQVNJLFdBQVc7O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLG9CQUFvQjtJQUNwQiw0a0JBQTRrQjtJQUM1a0IscWxCQUFxbEI7SUFDcmxCLDhrQkFBOGtCO0lBQzlrQix1bkJBQXVuQjtJQUN2bkIseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDekssd0tBQXdLO0lBQ3hLLElBQUk7SUFHSixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUdYVCwwREFBWSxDQUFDLENBQUNXLHdCQUNaLDhEQUFDWiwrREFBV0E7NEJBQUNZLFNBQVNBOzRCQUFTTixjQUFjQTs0QkFBY0QsV0FBV0E7NEJBQVdHLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvRztHQXpDU0o7S0FBQUE7QUEwQ1QsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3QvaW5kZXguanM/YTUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIlxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXRhXCJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Nb2RhbFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFttb2RhbERhdGEsIHNldE1vZGFsRGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICAvLyBjb25zdCBjb250ZW50ID0gW1xuICAvLyAgIHsgdGl0bGU6IFwiV2VhdGhlciBhcHBcIiwgaWQ6IFwid2VhdGhlcmFwcFwiLCBpbWc6IFwiLi9pbWcvcHJvamVjdC10ZWFzZXJzL3dlYXRoZXItYXBwLXRlYXNlci5wbmdcIiwgaW1nQWx0OiBcIlRlYXNlciBvZiBXZWF0aGVyIEFwcFwiLCBtb2RhbDogXCJPdXIgZmlyc3QgdGltZSB1c2luZyBheGlvcyBhbmQgcHVsbGluZyBkYXRhIGZyb20gYW4gb3V0c2lkZSBzb3VyY2UgQUtBIGFuIEFQSS4gVGhpcyBpcyBhIHJhdGhlciBzaW1wbGUgYXBwLCBzaW1wbHkgZGlzcGxheWluZyB0aGUgdGVtcCBvZiB3aGF0ZXZlciB6aXAgY29kZSB5b3UgcHV0IGluLG9yIGlmIHlvdSBhbGxvdyBpdCwgY2FuIHVzZSB5b3VyIGJyb3dzZXJzIGdlb2xvY2F0aW9uIHRvIGZpbmQgeW91ciB6aXAgb3V0IGF1dG9tYXRpY2FsbHkuIEFzIGFuIGV4dHJhIGNoYWxsZW5nZSwgd2UgaGFkIHRvIGdlbmVyYXRlIGh0bWwgZWxlbWVudHMgdXNpbmcgamF2YXNjcmlwdC5cIiwgcHJvamVjdExpbms6IFwiaHR0cHM6Ly96YWNyYXl0aG8uZ2l0aHViLmlvL3dlYXRoZXItYXBwL1wiLCBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9aYWNSYXlUaG8vd2VhdGhlci1hcHBcIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiVGljLVRhYy1Ub2VcIiwgaWQ6IFwidGljdGFjdG9lXCIsIGltZzogXCIuL2ltZy9wcm9qZWN0LXRlYXNlcnMvdGljLXRhYy10b2UtdGVhc2VyLnBuZ1wiLCBpbWdBbHQ6IFwiVGVhc2VyIG9mIFRpYyBUYWMgVG9lXCIsIG1vZGFsOiBcIk91ciBzZWNvbmQgYmlnIHByb2plY3QsIG1heWJlIG5vdCBzdXBlciBhZHZhbmNlZCBmb3IgYSBodW1hbiwgYnV0IGdldHRpbmcgdGhlIGh1bWFuIGxvZ2ljIGludG8gY29kZSB0aGF0IHRoZSBjb21wdXRlciB3aWxsIHVuZGVyc3RhbmQgd2FzIHRoZSByZWFsIGNoYWxsZW5nZSBvZiB0aGlzIHByb2plY3QuIEl0IHJlYWxseSBtYWRlIG1lIHN0b3AgYW5kIHRoaW5rIGFuZCBwc2V1ZG9jb2RlIGJlZm9yZSBob3BwaW5nIHN0cmFpZ2h0IGludG8gY29kaW5nLCBzYWRseSBJIHN0aWxsIGhhZCBhIGNvdXBsZSBoaWNjdXBzIGFsb25nIHRoZSB3YXkgYmVjYXVzZSBvZiBiYWQgbG9naWMgb24gbXkgcGFydC5cIiwgcHJvamVjdExpbms6IFwiaHR0cHM6Ly96YWNyYXl0aG8uZ2l0aHViLmlvL3RpYy10YWMtdG9lL1wiLCBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9aYWNSYXlUaG8vdGljLXRhYy10b2VcIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiVG8tRG8gTGlzdFwiLCBpZDogXCJ0b2RvbGlzdFwiLCBpbWc6IFwiLi9pbWcvcHJvamVjdC10ZWFzZXJzL3RvLWRvLWxpc3QtdGVhc2VyLnBuZ1wiLCBpbWdBbHQ6IFwiVGVhc2VyIG9mIFRvIERvIExpc3RcIiwgbW9kYWw6IFwiT3VyIGZpcnN0IHByb2plY3QgYWZ0ZXIgUmVhY3QncyBpbnRyb2R1Y3Rpb24sIG1lYW50IGZvciB1cyB0byBnZXQgdXNlIHRvIGl0J3MgZm9ybSBvZiBzdGF0ZSBhbmQgdGhlIHdheSBpdCByZW5kZXJzIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50cyBpbiBKYXZhc2NyaXB0LiBEZWZpbml0ZWx5IHRoZSBoYXJkZXN0IHByb2plY3QgdXAgdG8gdGhpcyBwb2ludCwgYnV0IGknbGwgcHJvYmFibHkgc2F5IHRoYXQgZXZlcnkgY29taW5nIHdlZWsgYXMgd2UgdHJhdmVsIGF3YXkgZnJvbSB0aGUgVmFuaWxsYUpTIHdoaWNoIEkgaGFkIGV4cGVyaWVuY2Ugd2l0aCBwcmlvciB0byB0aGUgYm9vdGNhbXAuXCIsIHByb2plY3RMaW5rOiBcImh0dHBzOi8vemFjcmF5dGhvLmdpdGh1Yi5pby9Uby1kby1saXN0L1wiLCBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9aYWNSYXlUaG8vVG8tZG8tbGlzdFwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJSZXN0YXVyYW50IE1lbnVcIiwgaWQ6IFwicmVzdGF1cmFudFwiLCBpbWc6IFwiLi9pbWcvcHJvamVjdC10ZWFzZXJzL3Jlc3RhdXJhbnQtdGVhc2VyLnBuZ1wiLCBpbWdBbHQ6IFwiVGVhc2VyIG9mIFJlc3RhdXJhbnQgTWVudVwiLCBtb2RhbDogXCJPdXIgU2Vjb25kIHByb2plY3Qgd2l0aCBSZWFjdCwgdGhpcyB0aW1lIHdlIHdlcmUgdGFza2VkIHdpdGggcHVsbGluZyBpbmZvIGZyb20gYW4gQVBJIGFuZCBkaXNwbGF5aW5nIGl0IHdpdGggUmVhY3QgY29tcG9uZW50cy4gVGhpcyB3YXMgYSBtb3JlIG9wZW4gZW5kZWQgcHJvamVjdCwgYW5kIGRlZmluaXRlbHkgd2FzIGhhcmRlciB0byBzdGFydCBiZWNhdXNlIG9mIHRoYXQgYnV0IGFmdGVyIGxvb2tpbmcgYXQgYSBmZXcgcmVhbCByZXN0YXVyYW50IHdlYnNpdGUgSSBoYWQgbXkgdGFyZ2V0IGluIHNpdGUuIEkgcmVhbGx5IHRyaWVkIHRvIHJlcGxpY2F0ZSBhIGZ1bmN0aW9uaW5nIHJlc3RhdXJhbnQgZnJvbnRlbmQuXCIsIHByb2plY3RMaW5rOiBcImh0dHBzOi8vemFjcmF5dGhvLmdpdGh1Yi5pby9yZWFjdC1yZXN0YXVyYW50cy8jL1wiLCBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9aYWNSYXlUaG8vcmVhY3QtcmVzdGF1cmFudHNcIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfVxuICAvLyBdXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy0zIG1heC13LTd4bCBteC1hdXRvIFwiPlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdCkgPT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQgcHJvamVjdD17cHJvamVjdH0gc2V0U2hvd01vZGFsPXtzZXRTaG93TW9kYWx9IHNob3dNb2RhbD17c2hvd01vZGFsfSBzZXRNb2RhbERhdGE9e3NldE1vZGFsRGF0YX0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cblxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdHMiLCJNb2RhbCIsInVzZVN0YXRlIiwiUHJvamVjdHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb2RhbERhdGEiLCJzZXRNb2RhbERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/project/index.js\n"));

/***/ })

});