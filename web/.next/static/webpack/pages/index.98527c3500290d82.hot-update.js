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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_aplicacao_trilha_ignite_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/aplicacao-trilha-ignite.png */ \"./src/assets/aplicacao-trilha-ignite.png\");\n/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var _assets_avatares_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/avatares.png */ \"./src/assets/avatares.png\");\n/* harmony import */ var _assets_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icon.svg */ \"./src/assets/icon.svg\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(props) {\n    _s();\n    const [namePool, setNamePool] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const createPool = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.post(\"polls\", {\n                title: namePool\n            });\n            const { code  } = response.data;\n            await navigator.clipboard.writeText(code);\n            setNamePool(\"\");\n            alert(\"Bol\\xe3o criado com sucesso o codigo foi copiado para area de transferencia\");\n        } catch (err) {\n            alert(\"Falha ao criar o bol\\xe3o, tente novamente\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mt-14 text-white text-5xl font-bold leading-tight\",\n                        children: \"Crie seu pr\\xf3prio bol\\xe3o da copa e compartilhe entre amigos!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: _assets_avatares_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"text-gray-100 text-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-ignite-500\",\n                                        children: [\n                                            \"+\",\n                                            props.usersCount\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    \" pessoas j\\xe1 est\\xe3o usando\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: createPool,\n                        className: \"mt-10 flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100\",\n                                type: \"text\",\n                                required: true,\n                                placeholder: \"Qual nome do seu bol\\xe3o?\",\n                                onChange: (e)=>{\n                                    setNamePool(e.target.value);\n                                },\n                                value: namePool\n                            }, void 0, false, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700\",\n                                type: \"submit\",\n                                children: \"Criar meu bol\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-300 mt-4 text-sm leading-relaxed\",\n                        children: \"Ap\\xf3s criar seu bol\\xe3o, voc\\xea receber\\xe1 um c\\xf3digo \\xfanico que poder\\xe1 usar para convidar outras pessoas \\uD83D\\uDE80\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-10 pt-10 border-t border-gray-600 flex item-center justify-between text-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.pollCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Bol\\xf5es criados\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-px h-14 bg-gray-600\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: _assets_icon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-bold text-2xl\",\n                                                children: [\n                                                    \"+\",\n                                                    props.guessCount\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Palpites enviados\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _assets_aplicacao_trilha_ignite_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"appPreview\"\n            }, void 0, false, {\n                fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\bolao\\\\web\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"7NEaEMjv0uO0292ZVa0p/SpRckw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDbUM7QUFDekI7QUFDUTtBQUNOO0FBQ1I7QUFDUzs7QUFRNUIsU0FBU08sS0FBS0MsS0FBZ0IsRUFBRTs7SUFDN0MsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1LLGFBQWEsT0FBT0MsUUFBcUI7UUFDN0NBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVQsZ0RBQVEsQ0FBQyxTQUFTO2dCQUFFVyxPQUFPUDtZQUFTO1lBRTNELE1BQU0sRUFBRVEsS0FBSSxFQUFFLEdBQUdILFNBQVNJLElBQUk7WUFFOUIsTUFBTUMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNKO1lBRXBDUCxZQUFZO1lBQ1pZLE1BQU07UUFDUixFQUFFLE9BQU9DLEtBQUs7WUFDWkQsTUFBTTtRQUNSO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOztrQ0FDQyw4REFBQzFCLG1EQUFLQTt3QkFBQzJCLEtBQUt6Qix3REFBT0E7d0JBQUUwQixLQUFJOzs7Ozs7a0NBQ3pCLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FBb0Q7Ozs7OztrQ0FDbEUsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3pCLG1EQUFLQTtnQ0FBQzJCLEtBQUt4Qiw0REFBV0E7Z0NBQUV5QixLQUFJOzs7Ozs7MENBQzdCLDhEQUFDRTtnQ0FBT0wsV0FBVTs7a0RBQ2hCLDhEQUFDTTt3Q0FBS04sV0FBVTs7NENBQWtCOzRDQUFFakIsTUFBTXdCLFVBQVU7Ozs7Ozs7b0NBQVE7Ozs7Ozs7Ozs7Ozs7a0NBR2hFLDhEQUFDQzt3QkFBS0MsVUFBVXZCO3dCQUFZYyxXQUFVOzswQ0FDcEMsOERBQUNVO2dDQUNDVixXQUFVO2dDQUNWVyxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxhQUFZO2dDQUNaQyxVQUFVQyxDQUFBQSxJQUFLO29DQUFFOUIsWUFBWThCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztnQ0FBRTtnQ0FDN0NBLE9BQU9qQzs7Ozs7OzBDQUVULDhEQUFDa0M7Z0NBQ0NsQixXQUFVO2dDQUNWVyxNQUFLOzBDQUNOOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNRO3dCQUFFbkIsV0FBVTtrQ0FBNkM7Ozs7OztrQ0FDMUQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDekIsbURBQUtBO3dDQUFDMkIsS0FBS3ZCLHdEQUFTQTt3Q0FBRXdCLEtBQUk7Ozs7OztrREFDM0IsOERBQUNKO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ007Z0RBQUtOLFdBQVU7O29EQUFxQjtvREFBRWpCLE1BQU1xQyxTQUFTOzs7Ozs7OzBEQUN0RCw4REFBQ2Q7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHViw4REFBQ1A7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDekIsbURBQUtBO3dDQUFDMkIsS0FBS3ZCLHdEQUFTQTt3Q0FBRXdCLEtBQUk7Ozs7OztrREFDM0IsOERBQUNKO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ007Z0RBQUtOLFdBQVU7O29EQUFxQjtvREFBRWpCLE1BQU1zQyxVQUFVOzs7Ozs7OzBEQUN2RCw4REFBQ2Y7MERBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLZCw4REFBQy9CLG1EQUFLQTtnQkFBQzJCLEtBQUsxQiwyRUFBYUE7Z0JBQUUyQixLQUFJOzs7Ozs7Ozs7Ozs7QUFHckMsQ0FBQztHQWxFdUJyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgYXBwUHJldmlld0ltZyBmcm9tICcuLi9hc3NldHMvYXBsaWNhY2FvLXRyaWxoYS1pZ25pdGUucG5nJ1xuaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi4vYXNzZXRzL2xvZ28uc3ZnJ1xuaW1wb3J0IGF2YXRhcmVzSW1nIGZyb20gJy4uL2Fzc2V0cy9hdmF0YXJlcy5wbmcnXG5pbXBvcnQgSWNvbkNoZWNrIGZyb20gJy4uL2Fzc2V0cy9pY29uLnN2ZydcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2xpYi9heGlvcydcbmltcG9ydCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHBvbGxDb3VudDogbnVtYmVyXG4gIGd1ZXNzQ291bnQ6IG51bWJlclxuICB1c2Vyc0NvdW50OiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczogSG9tZVByb3BzKSB7XG4gIGNvbnN0IFtuYW1lUG9vbCwgc2V0TmFtZVBvb2xdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgY3JlYXRlUG9vbCA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KFwicG9sbHNcIiwgeyB0aXRsZTogbmFtZVBvb2wgfSlcblxuICAgICAgY29uc3QgeyBjb2RlIH0gPSByZXNwb25zZS5kYXRhXG5cbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpXG5cbiAgICAgIHNldE5hbWVQb29sKFwiXCIpXG4gICAgICBhbGVydChcIkJvbMOjbyBjcmlhZG8gY29tIHN1Y2Vzc28gbyBjb2RpZ28gZm9pIGNvcGlhZG8gcGFyYSBhcmVhIGRlIHRyYW5zZmVyZW5jaWFcIilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFwiRmFsaGEgYW8gY3JpYXIgbyBib2zDo28sIHRlbnRlIG5vdmFtZW50ZVwiKVxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTEyNHB4XSBoLXNjcmVlbiBteC1hdXRvIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTI4IGl0ZW1zLWNlbnRlcic+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEltYWdlIHNyYz17bG9nb0ltZ30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J210LTE0IHRleHQtd2hpdGUgdGV4dC01eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQnPkNyaWUgc2V1IHByw7NwcmlvIGJvbMOjbyBkYSBjb3BhIGUgY29tcGFydGlsaGUgZW50cmUgYW1pZ29zITwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMic+XG4gICAgICAgICAgPEltYWdlIHNyYz17YXZhdGFyZXNJbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9J3RleHQtZ3JheS0xMDAgdGV4dC14bCc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtaWduaXRlLTUwMCc+K3twcm9wcy51c2Vyc0NvdW50fTwvc3Bhbj4gcGVzc29hcyBqw6EgZXN0w6NvIHVzYW5kb1xuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NyZWF0ZVBvb2x9IGNsYXNzTmFtZT0nbXQtMTAgZmxleCBnYXAtMic+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgtMSBweC02IHB5LTQgcm91bmRlZCBiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHRleHQtc20gdGV4dC1ncmF5LTEwMCdcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUXVhbCBub21lIGRvIHNldSBib2zDo28/J1xuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4geyBzZXROYW1lUG9vbChlLnRhcmdldC52YWx1ZSkgfX1cbiAgICAgICAgICAgIHZhbHVlPXtuYW1lUG9vbH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYmcteWVsbG93LTUwMCBweC02IHB5LTQgcm91bmRlZCB0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCB0ZXh0LXNtIHVwcGVyY2FzZSBob3ZlcjpiZy15ZWxsb3ctNzAwJ1xuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3JpYXIgbWV1IGJvbMOjb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTMwMCBtdC00IHRleHQtc20gbGVhZGluZy1yZWxheGVkJz5BcMOzcyBjcmlhciBzZXUgYm9sw6NvLCB2b2PDqiByZWNlYmVyw6EgdW0gY8OzZGlnbyDDum5pY28gcXVlIHBvZGVyw6EgdXNhciBwYXJhIGNvbnZpZGFyIG91dHJhcyBwZXNzb2FzIPCfmoA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBwdC0xMCBib3JkZXItdCBib3JkZXItZ3JheS02MDAgIGZsZXggaXRlbS1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtZ3JheS0xMDAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNic+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtJY29uQ2hlY2t9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtMnhsJz4re3Byb3BzLnBvbGxDb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPkJvbMO1ZXMgY3JpYWRvczwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LXB4IGgtMTQgYmctZ3JheS02MDAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC02Jz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0ljb25DaGVja30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC0yeGwnPit7cHJvcHMuZ3Vlc3NDb3VudH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPlBhbHBpdGVzIGVudmlhZG9zPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEltYWdlIHNyYz17YXBwUHJldmlld0ltZ30gYWx0PVwiYXBwUHJldmlld1wiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgW3BvbGxDb3VudFJlc3BvbnNlLCBndWVzc2VzQ291bnRSZXNwb25zZSwgdXNlcnNDb3VudFJlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhcGkuZ2V0KFwicG9sbHMvY291bnRcIiksXG4gICAgYXBpLmdldChcImd1ZXNzZXMvY291bnRcIiksXG4gICAgYXBpLmdldChcInVzZXJzL2NvdW50XCIpXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9sbENvdW50OiBwb2xsQ291bnRSZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgZ3Vlc3NDb3VudDogZ3Vlc3Nlc0NvdW50UmVzcG9uc2UuZGF0YS5jb3VudCxcbiAgICAgIHVzZXJzQ291bnQ6IHVzZXJzQ291bnRSZXNwb25zZS5kYXRhLmNvdW50XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJhcHBQcmV2aWV3SW1nIiwibG9nb0ltZyIsImF2YXRhcmVzSW1nIiwiSWNvbkNoZWNrIiwiYXBpIiwidXNlU3RhdGUiLCJIb21lIiwicHJvcHMiLCJuYW1lUG9vbCIsInNldE5hbWVQb29sIiwiY3JlYXRlUG9vbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJ0aXRsZSIsImNvZGUiLCJkYXRhIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYWxlcnQiLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwic3JjIiwiYWx0IiwiaDEiLCJzdHJvbmciLCJzcGFuIiwidXNlcnNDb3VudCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInAiLCJwb2xsQ291bnQiLCJndWVzc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});