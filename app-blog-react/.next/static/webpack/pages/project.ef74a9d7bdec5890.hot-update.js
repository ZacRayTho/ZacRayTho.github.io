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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectCard */ \"./src/components/ProjectCard.js\");\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Projects() {\n    _s();\n    const [showModal, setShowModal] = useState(false);\n    const [modalData, setModalData] = useState(null);\n    // const content = [\n    //   { title: \"Weather app\", id: \"weatherapp\", img: \"./img/project-teasers/weather-app-teaser.png\", imgAlt: \"Teaser of Weather App\", modal: \"Our first time using axios and pulling data from an outside source AKA an API. This is a rather simple app, simply displaying the temp of whatever zip code you put in,or if you allow it, can use your browsers geolocation to find your zip out automatically. As an extra challenge, we had to generate html elements using javascript.\", projectLink: \"https://zacraytho.github.io/weather-app/\", githubLink: \"https://github.com/ZacRayTho/weather-app\" },\n    //   { title: \"Tic-Tac-Toe\", id: \"tictactoe\", img: \"./img/project-teasers/tic-tac-toe-teaser.png\", imgAlt: \"Teaser of Tic Tac Toe\", modal: \"Our second big project, maybe not super advanced for a human, but getting the human logic into code that the computer will understand was the real challenge of this project. It really made me stop and think and pseudocode before hopping straight into coding, sadly I still had a couple hiccups along the way because of bad logic on my part.\", projectLink: \"https://zacraytho.github.io/tic-tac-toe/\", githubLink: \"https://github.com/ZacRayTho/tic-tac-toe\" },\n    //   { title: \"To-Do List\", id: \"todolist\", img: \"./img/project-teasers/to-do-list-teaser.png\", imgAlt: \"Teaser of To Do List\", modal: \"Our first project after React's introduction, meant for us to get use to it's form of state and the way it renders HTML elements as components in Javascript. Definitely the hardest project up to this point, but i'll probably say that every coming week as we travel away from the VanillaJS which I had experience with prior to the bootcamp.\", projectLink: \"https://zacraytho.github.io/To-do-list/\", githubLink: \"https://github.com/ZacRayTho/To-do-list\" },\n    //   { title: \"Restaurant Menu\", id: \"restaurant\", img: \"./img/project-teasers/restaurant-teaser.png\", imgAlt: \"Teaser of Restaurant Menu\", modal: \"Our Second project with React, this time we were tasked with pulling info from an API and displaying it with React components. This was a more open ended project, and definitely was harder to start because of that but after looking at a few real restaurant website I had my target in site. I really tried to replicate a functioning restaurant frontend.\", projectLink: \"https://zacraytho.github.io/react-restaurants/#/\", githubLink: \"https://github.com/ZacRayTho/react-restaurants\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" }\n    // ]\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center bg-transparent\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-sm \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid lg:grid-cols-3 max-w-7xl mx-auto \",\n                    children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            project: project,\n                            setShowModal: setShowModal,\n                            showModal: showModal,\n                            setModalData: setModalData\n                        }, void 0, false, {\n                            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"g5QpKf7tAgSMtAmaNIpOYWOxk2g=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNEO0FBQ047QUFHaEQsU0FBU0UsV0FBVzs7SUFDbEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdDLFNBQVMsS0FBSztJQUNoRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0YsU0FBUyxJQUFJO0lBQy9DLG9CQUFvQjtJQUNwQiw0a0JBQTRrQjtJQUM1a0IscWxCQUFxbEI7SUFDcmxCLDhrQkFBOGtCO0lBQzlrQix1bkJBQXVuQjtJQUN2bkIseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDekssd0tBQXdLO0lBQ3hLLElBQUk7SUFHSixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRWIsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUdYUiwwREFBWSxDQUFDLENBQUNVLHdCQUNaLDhEQUFDWCwrREFBV0E7NEJBQUNXLFNBQVNBOzRCQUFTUCxjQUFjQTs0QkFBY0QsV0FBV0E7NEJBQVdJLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvRztHQXhDU0w7S0FBQUE7QUF5Q1QsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2plY3QvaW5kZXguanM/YTUzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmRcIlxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9EYXRhXCJcblxuXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbW9kYWxEYXRhLCBzZXRNb2RhbERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgLy8gY29uc3QgY29udGVudCA9IFtcbiAgLy8gICB7IHRpdGxlOiBcIldlYXRoZXIgYXBwXCIsIGlkOiBcIndlYXRoZXJhcHBcIiwgaW1nOiBcIi4vaW1nL3Byb2plY3QtdGVhc2Vycy93ZWF0aGVyLWFwcC10ZWFzZXIucG5nXCIsIGltZ0FsdDogXCJUZWFzZXIgb2YgV2VhdGhlciBBcHBcIiwgbW9kYWw6IFwiT3VyIGZpcnN0IHRpbWUgdXNpbmcgYXhpb3MgYW5kIHB1bGxpbmcgZGF0YSBmcm9tIGFuIG91dHNpZGUgc291cmNlIEFLQSBhbiBBUEkuIFRoaXMgaXMgYSByYXRoZXIgc2ltcGxlIGFwcCwgc2ltcGx5IGRpc3BsYXlpbmcgdGhlIHRlbXAgb2Ygd2hhdGV2ZXIgemlwIGNvZGUgeW91IHB1dCBpbixvciBpZiB5b3UgYWxsb3cgaXQsIGNhbiB1c2UgeW91ciBicm93c2VycyBnZW9sb2NhdGlvbiB0byBmaW5kIHlvdXIgemlwIG91dCBhdXRvbWF0aWNhbGx5LiBBcyBhbiBleHRyYSBjaGFsbGVuZ2UsIHdlIGhhZCB0byBnZW5lcmF0ZSBodG1sIGVsZW1lbnRzIHVzaW5nIGphdmFzY3JpcHQuXCIsIHByb2plY3RMaW5rOiBcImh0dHBzOi8vemFjcmF5dGhvLmdpdGh1Yi5pby93ZWF0aGVyLWFwcC9cIiwgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vWmFjUmF5VGhvL3dlYXRoZXItYXBwXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIlRpYy1UYWMtVG9lXCIsIGlkOiBcInRpY3RhY3RvZVwiLCBpbWc6IFwiLi9pbWcvcHJvamVjdC10ZWFzZXJzL3RpYy10YWMtdG9lLXRlYXNlci5wbmdcIiwgaW1nQWx0OiBcIlRlYXNlciBvZiBUaWMgVGFjIFRvZVwiLCBtb2RhbDogXCJPdXIgc2Vjb25kIGJpZyBwcm9qZWN0LCBtYXliZSBub3Qgc3VwZXIgYWR2YW5jZWQgZm9yIGEgaHVtYW4sIGJ1dCBnZXR0aW5nIHRoZSBodW1hbiBsb2dpYyBpbnRvIGNvZGUgdGhhdCB0aGUgY29tcHV0ZXIgd2lsbCB1bmRlcnN0YW5kIHdhcyB0aGUgcmVhbCBjaGFsbGVuZ2Ugb2YgdGhpcyBwcm9qZWN0LiBJdCByZWFsbHkgbWFkZSBtZSBzdG9wIGFuZCB0aGluayBhbmQgcHNldWRvY29kZSBiZWZvcmUgaG9wcGluZyBzdHJhaWdodCBpbnRvIGNvZGluZywgc2FkbHkgSSBzdGlsbCBoYWQgYSBjb3VwbGUgaGljY3VwcyBhbG9uZyB0aGUgd2F5IGJlY2F1c2Ugb2YgYmFkIGxvZ2ljIG9uIG15IHBhcnQuXCIsIHByb2plY3RMaW5rOiBcImh0dHBzOi8vemFjcmF5dGhvLmdpdGh1Yi5pby90aWMtdGFjLXRvZS9cIiwgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vWmFjUmF5VGhvL3RpYy10YWMtdG9lXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIlRvLURvIExpc3RcIiwgaWQ6IFwidG9kb2xpc3RcIiwgaW1nOiBcIi4vaW1nL3Byb2plY3QtdGVhc2Vycy90by1kby1saXN0LXRlYXNlci5wbmdcIiwgaW1nQWx0OiBcIlRlYXNlciBvZiBUbyBEbyBMaXN0XCIsIG1vZGFsOiBcIk91ciBmaXJzdCBwcm9qZWN0IGFmdGVyIFJlYWN0J3MgaW50cm9kdWN0aW9uLCBtZWFudCBmb3IgdXMgdG8gZ2V0IHVzZSB0byBpdCdzIGZvcm0gb2Ygc3RhdGUgYW5kIHRoZSB3YXkgaXQgcmVuZGVycyBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudHMgaW4gSmF2YXNjcmlwdC4gRGVmaW5pdGVseSB0aGUgaGFyZGVzdCBwcm9qZWN0IHVwIHRvIHRoaXMgcG9pbnQsIGJ1dCBpJ2xsIHByb2JhYmx5IHNheSB0aGF0IGV2ZXJ5IGNvbWluZyB3ZWVrIGFzIHdlIHRyYXZlbCBhd2F5IGZyb20gdGhlIFZhbmlsbGFKUyB3aGljaCBJIGhhZCBleHBlcmllbmNlIHdpdGggcHJpb3IgdG8gdGhlIGJvb3RjYW1wLlwiLCBwcm9qZWN0TGluazogXCJodHRwczovL3phY3JheXRoby5naXRodWIuaW8vVG8tZG8tbGlzdC9cIiwgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vWmFjUmF5VGhvL1RvLWRvLWxpc3RcIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiUmVzdGF1cmFudCBNZW51XCIsIGlkOiBcInJlc3RhdXJhbnRcIiwgaW1nOiBcIi4vaW1nL3Byb2plY3QtdGVhc2Vycy9yZXN0YXVyYW50LXRlYXNlci5wbmdcIiwgaW1nQWx0OiBcIlRlYXNlciBvZiBSZXN0YXVyYW50IE1lbnVcIiwgbW9kYWw6IFwiT3VyIFNlY29uZCBwcm9qZWN0IHdpdGggUmVhY3QsIHRoaXMgdGltZSB3ZSB3ZXJlIHRhc2tlZCB3aXRoIHB1bGxpbmcgaW5mbyBmcm9tIGFuIEFQSSBhbmQgZGlzcGxheWluZyBpdCB3aXRoIFJlYWN0IGNvbXBvbmVudHMuIFRoaXMgd2FzIGEgbW9yZSBvcGVuIGVuZGVkIHByb2plY3QsIGFuZCBkZWZpbml0ZWx5IHdhcyBoYXJkZXIgdG8gc3RhcnQgYmVjYXVzZSBvZiB0aGF0IGJ1dCBhZnRlciBsb29raW5nIGF0IGEgZmV3IHJlYWwgcmVzdGF1cmFudCB3ZWJzaXRlIEkgaGFkIG15IHRhcmdldCBpbiBzaXRlLiBJIHJlYWxseSB0cmllZCB0byByZXBsaWNhdGUgYSBmdW5jdGlvbmluZyByZXN0YXVyYW50IGZyb250ZW5kLlwiLCBwcm9qZWN0TGluazogXCJodHRwczovL3phY3JheXRoby5naXRodWIuaW8vcmVhY3QtcmVzdGF1cmFudHMvIy9cIiwgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vWmFjUmF5VGhvL3JlYWN0LXJlc3RhdXJhbnRzXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH1cbiAgLy8gXVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbSBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBtYXgtdy03eGwgbXgtYXV0byBcIj5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+XG4gICAgICAgICAgICAgICAgPFByb2plY3RDYXJkIHByb2plY3Q9e3Byb2plY3R9IHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfSBzaG93TW9kYWw9e3Nob3dNb2RhbH0gc2V0TW9kYWxEYXRhPXtzZXRNb2RhbERhdGF9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzXG4iXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJwcm9qZWN0cyIsIlByb2plY3RzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJtb2RhbERhdGEiLCJzZXRNb2RhbERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/project/index.js\n"));

/***/ })

});