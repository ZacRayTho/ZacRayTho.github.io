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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProjectCard */ \"./src/components/ProjectCard.js\");\n/* harmony import */ var _components_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Data */ \"./src/components/Data.js\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Nav */ \"./src/components/Nav.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Projects() {\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [modalData, setModalData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    // const content = [\n    //   { title: \"Weather app\", id: \"weatherapp\", img: \"./img/project-teasers/weather-app-teaser.png\", imgAlt: \"Teaser of Weather App\", modal: \"Our first time using axios and pulling data from an outside source AKA an API. This is a rather simple app, simply displaying the temp of whatever zip code you put in,or if you allow it, can use your browsers geolocation to find your zip out automatically. As an extra challenge, we had to generate html elements using javascript.\", projectLink: \"https://zacraytho.github.io/weather-app/\", githubLink: \"https://github.com/ZacRayTho/weather-app\" },\n    //   { title: \"Tic-Tac-Toe\", id: \"tictactoe\", img: \"./img/project-teasers/tic-tac-toe-teaser.png\", imgAlt: \"Teaser of Tic Tac Toe\", modal: \"Our second big project, maybe not super advanced for a human, but getting the human logic into code that the computer will understand was the real challenge of this project. It really made me stop and think and pseudocode before hopping straight into coding, sadly I still had a couple hiccups along the way because of bad logic on my part.\", projectLink: \"https://zacraytho.github.io/tic-tac-toe/\", githubLink: \"https://github.com/ZacRayTho/tic-tac-toe\" },\n    //   { title: \"To-Do List\", id: \"todolist\", img: \"./img/project-teasers/to-do-list-teaser.png\", imgAlt: \"Teaser of To Do List\", modal: \"Our first project after React's introduction, meant for us to get use to it's form of state and the way it renders HTML elements as components in Javascript. Definitely the hardest project up to this point, but i'll probably say that every coming week as we travel away from the VanillaJS which I had experience with prior to the bootcamp.\", projectLink: \"https://zacraytho.github.io/To-do-list/\", githubLink: \"https://github.com/ZacRayTho/To-do-list\" },\n    //   { title: \"Restaurant Menu\", id: \"restaurant\", img: \"./img/project-teasers/restaurant-teaser.png\", imgAlt: \"Teaser of Restaurant Menu\", modal: \"Our Second project with React, this time we were tasked with pulling info from an API and displaying it with React components. This was a more open ended project, and definitely was harder to start because of that but after looking at a few real restaurant website I had my target in site. I really tried to replicate a functioning restaurant frontend.\", projectLink: \"https://zacraytho.github.io/react-restaurants/#/\", githubLink: \"https://github.com/ZacRayTho/react-restaurants\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" },\n    //   { title: \"Coming soon\", id: \"Coming soon\", img: \"Coming soon\", imgAlt: \"Coming soon\", modal: \"Coming soon\", projectLink: \"Coming soon\", githubLink: \"Coming soon\" }\n    // ]\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-auto justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid lg:grid-cols-3 max-w-7xl mx-auto \",\n                children: _components_Data__WEBPACK_IMPORTED_MODULE_2__.projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        project: project,\n                        setShowModal: setShowModal,\n                        showModal: showModal,\n                        setModalData: setModalData\n                    }, void 0, false, {\n                        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                isVisible: showModal,\n                setShowModal: setShowModal,\n                modalData: modalData\n            }, void 0, false, {\n                fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/ZacRayTho.github.io/app-blog-react/src/pages/project/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"g5QpKf7tAgSMtAmaNIpOYWOxk2g=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvamVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRDtBQUNOO0FBQ047QUFDVjtBQUNNO0FBRXRDLFNBQVNLLFdBQVc7O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLG9CQUFvQjtJQUNwQiw0a0JBQTRrQjtJQUM1a0IscWxCQUFxbEI7SUFDcmxCLDhrQkFBOGtCO0lBQzlrQix1bkJBQXVuQjtJQUN2bkIseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDeksseUtBQXlLO0lBQ3pLLHlLQUF5SztJQUN6Syx5S0FBeUs7SUFDekssd0tBQXdLO0lBQ3hLLElBQUk7SUFHSixxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLHVEQUFHQTs7Ozs7MEJBQ0osOERBQUNNO2dCQUFJQyxXQUFVOzBCQUVYViwwREFBWSxDQUFDLENBQUNZLHdCQUNaLDhEQUFDYiwrREFBV0E7d0JBQUNhLFNBQVNBO3dCQUFTTixjQUFjQTt3QkFBY0QsV0FBV0E7d0JBQVdHLGNBQWNBOzs7Ozs7Ozs7OzswQkFJckcsOERBQUNQLHlEQUFLQTtnQkFBQ1ksV0FBV1I7Z0JBQVdDLGNBQWNBO2dCQUFjQyxXQUFXQTs7Ozs7Ozs7Ozs7O0FBSTFFO0dBbkNTSDtLQUFBQTtBQW9DVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdC9pbmRleC5qcz9hNTM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9qZWN0Q2FyZFwiXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0RhdGFcIlxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmF2XCJcblxuZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21vZGFsRGF0YSwgc2V0TW9kYWxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIC8vIGNvbnN0IGNvbnRlbnQgPSBbXG4gIC8vICAgeyB0aXRsZTogXCJXZWF0aGVyIGFwcFwiLCBpZDogXCJ3ZWF0aGVyYXBwXCIsIGltZzogXCIuL2ltZy9wcm9qZWN0LXRlYXNlcnMvd2VhdGhlci1hcHAtdGVhc2VyLnBuZ1wiLCBpbWdBbHQ6IFwiVGVhc2VyIG9mIFdlYXRoZXIgQXBwXCIsIG1vZGFsOiBcIk91ciBmaXJzdCB0aW1lIHVzaW5nIGF4aW9zIGFuZCBwdWxsaW5nIGRhdGEgZnJvbSBhbiBvdXRzaWRlIHNvdXJjZSBBS0EgYW4gQVBJLiBUaGlzIGlzIGEgcmF0aGVyIHNpbXBsZSBhcHAsIHNpbXBseSBkaXNwbGF5aW5nIHRoZSB0ZW1wIG9mIHdoYXRldmVyIHppcCBjb2RlIHlvdSBwdXQgaW4sb3IgaWYgeW91IGFsbG93IGl0LCBjYW4gdXNlIHlvdXIgYnJvd3NlcnMgZ2VvbG9jYXRpb24gdG8gZmluZCB5b3VyIHppcCBvdXQgYXV0b21hdGljYWxseS4gQXMgYW4gZXh0cmEgY2hhbGxlbmdlLCB3ZSBoYWQgdG8gZ2VuZXJhdGUgaHRtbCBlbGVtZW50cyB1c2luZyBqYXZhc2NyaXB0LlwiLCBwcm9qZWN0TGluazogXCJodHRwczovL3phY3JheXRoby5naXRodWIuaW8vd2VhdGhlci1hcHAvXCIsIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1phY1JheVRoby93ZWF0aGVyLWFwcFwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJUaWMtVGFjLVRvZVwiLCBpZDogXCJ0aWN0YWN0b2VcIiwgaW1nOiBcIi4vaW1nL3Byb2plY3QtdGVhc2Vycy90aWMtdGFjLXRvZS10ZWFzZXIucG5nXCIsIGltZ0FsdDogXCJUZWFzZXIgb2YgVGljIFRhYyBUb2VcIiwgbW9kYWw6IFwiT3VyIHNlY29uZCBiaWcgcHJvamVjdCwgbWF5YmUgbm90IHN1cGVyIGFkdmFuY2VkIGZvciBhIGh1bWFuLCBidXQgZ2V0dGluZyB0aGUgaHVtYW4gbG9naWMgaW50byBjb2RlIHRoYXQgdGhlIGNvbXB1dGVyIHdpbGwgdW5kZXJzdGFuZCB3YXMgdGhlIHJlYWwgY2hhbGxlbmdlIG9mIHRoaXMgcHJvamVjdC4gSXQgcmVhbGx5IG1hZGUgbWUgc3RvcCBhbmQgdGhpbmsgYW5kIHBzZXVkb2NvZGUgYmVmb3JlIGhvcHBpbmcgc3RyYWlnaHQgaW50byBjb2RpbmcsIHNhZGx5IEkgc3RpbGwgaGFkIGEgY291cGxlIGhpY2N1cHMgYWxvbmcgdGhlIHdheSBiZWNhdXNlIG9mIGJhZCBsb2dpYyBvbiBteSBwYXJ0LlwiLCBwcm9qZWN0TGluazogXCJodHRwczovL3phY3JheXRoby5naXRodWIuaW8vdGljLXRhYy10b2UvXCIsIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1phY1JheVRoby90aWMtdGFjLXRvZVwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJUby1EbyBMaXN0XCIsIGlkOiBcInRvZG9saXN0XCIsIGltZzogXCIuL2ltZy9wcm9qZWN0LXRlYXNlcnMvdG8tZG8tbGlzdC10ZWFzZXIucG5nXCIsIGltZ0FsdDogXCJUZWFzZXIgb2YgVG8gRG8gTGlzdFwiLCBtb2RhbDogXCJPdXIgZmlyc3QgcHJvamVjdCBhZnRlciBSZWFjdCdzIGludHJvZHVjdGlvbiwgbWVhbnQgZm9yIHVzIHRvIGdldCB1c2UgdG8gaXQncyBmb3JtIG9mIHN0YXRlIGFuZCB0aGUgd2F5IGl0IHJlbmRlcnMgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnRzIGluIEphdmFzY3JpcHQuIERlZmluaXRlbHkgdGhlIGhhcmRlc3QgcHJvamVjdCB1cCB0byB0aGlzIHBvaW50LCBidXQgaSdsbCBwcm9iYWJseSBzYXkgdGhhdCBldmVyeSBjb21pbmcgd2VlayBhcyB3ZSB0cmF2ZWwgYXdheSBmcm9tIHRoZSBWYW5pbGxhSlMgd2hpY2ggSSBoYWQgZXhwZXJpZW5jZSB3aXRoIHByaW9yIHRvIHRoZSBib290Y2FtcC5cIiwgcHJvamVjdExpbms6IFwiaHR0cHM6Ly96YWNyYXl0aG8uZ2l0aHViLmlvL1RvLWRvLWxpc3QvXCIsIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1phY1JheVRoby9Uby1kby1saXN0XCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIlJlc3RhdXJhbnQgTWVudVwiLCBpZDogXCJyZXN0YXVyYW50XCIsIGltZzogXCIuL2ltZy9wcm9qZWN0LXRlYXNlcnMvcmVzdGF1cmFudC10ZWFzZXIucG5nXCIsIGltZ0FsdDogXCJUZWFzZXIgb2YgUmVzdGF1cmFudCBNZW51XCIsIG1vZGFsOiBcIk91ciBTZWNvbmQgcHJvamVjdCB3aXRoIFJlYWN0LCB0aGlzIHRpbWUgd2Ugd2VyZSB0YXNrZWQgd2l0aCBwdWxsaW5nIGluZm8gZnJvbSBhbiBBUEkgYW5kIGRpc3BsYXlpbmcgaXQgd2l0aCBSZWFjdCBjb21wb25lbnRzLiBUaGlzIHdhcyBhIG1vcmUgb3BlbiBlbmRlZCBwcm9qZWN0LCBhbmQgZGVmaW5pdGVseSB3YXMgaGFyZGVyIHRvIHN0YXJ0IGJlY2F1c2Ugb2YgdGhhdCBidXQgYWZ0ZXIgbG9va2luZyBhdCBhIGZldyByZWFsIHJlc3RhdXJhbnQgd2Vic2l0ZSBJIGhhZCBteSB0YXJnZXQgaW4gc2l0ZS4gSSByZWFsbHkgdHJpZWQgdG8gcmVwbGljYXRlIGEgZnVuY3Rpb25pbmcgcmVzdGF1cmFudCBmcm9udGVuZC5cIiwgcHJvamVjdExpbms6IFwiaHR0cHM6Ly96YWNyYXl0aG8uZ2l0aHViLmlvL3JlYWN0LXJlc3RhdXJhbnRzLyMvXCIsIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL1phY1JheVRoby9yZWFjdC1yZXN0YXVyYW50c1wiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9LFxuICAvLyAgIHsgdGl0bGU6IFwiQ29taW5nIHNvb25cIiwgaWQ6IFwiQ29taW5nIHNvb25cIiwgaW1nOiBcIkNvbWluZyBzb29uXCIsIGltZ0FsdDogXCJDb21pbmcgc29vblwiLCBtb2RhbDogXCJDb21pbmcgc29vblwiLCBwcm9qZWN0TGluazogXCJDb21pbmcgc29vblwiLCBnaXRodWJMaW5rOiBcIkNvbWluZyBzb29uXCIgfSxcbiAgLy8gICB7IHRpdGxlOiBcIkNvbWluZyBzb29uXCIsIGlkOiBcIkNvbWluZyBzb29uXCIsIGltZzogXCJDb21pbmcgc29vblwiLCBpbWdBbHQ6IFwiQ29taW5nIHNvb25cIiwgbW9kYWw6IFwiQ29taW5nIHNvb25cIiwgcHJvamVjdExpbms6IFwiQ29taW5nIHNvb25cIiwgZ2l0aHViTGluazogXCJDb21pbmcgc29vblwiIH0sXG4gIC8vICAgeyB0aXRsZTogXCJDb21pbmcgc29vblwiLCBpZDogXCJDb21pbmcgc29vblwiLCBpbWc6IFwiQ29taW5nIHNvb25cIiwgaW1nQWx0OiBcIkNvbWluZyBzb29uXCIsIG1vZGFsOiBcIkNvbWluZyBzb29uXCIsIHByb2plY3RMaW5rOiBcIkNvbWluZyBzb29uXCIsIGdpdGh1Ykxpbms6IFwiQ29taW5nIHNvb25cIiB9XG4gIC8vIF1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LWF1dG8ganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBtYXgtdy03eGwgbXgtYXV0byBcIj5cbiAgICAgICAge1xuICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdCkgPT5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZCBwcm9qZWN0PXtwcm9qZWN0fSBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gc2hvd01vZGFsPXtzaG93TW9kYWx9IHNldE1vZGFsRGF0YT17c2V0TW9kYWxEYXRhfSAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWwgaXNWaXNpYmxlPXtzaG93TW9kYWx9IHNldFNob3dNb2RhbD17c2V0U2hvd01vZGFsfSBtb2RhbERhdGE9e21vZGFsRGF0YX0gLz5cbiAgICA8L2Rpdj5cblxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sIm5hbWVzIjpbIlByb2plY3RDYXJkIiwicHJvamVjdHMiLCJNb2RhbCIsInVzZVN0YXRlIiwiTmF2IiwiUHJvamVjdHMiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJtb2RhbERhdGEiLCJzZXRNb2RhbERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0IiwiaXNWaXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/project/index.js\n"));

/***/ })

});