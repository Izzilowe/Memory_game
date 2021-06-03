/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/const.js":
/*!*********************!*\
  !*** ./js/const.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cards\": () => (/* binding */ cards),\n/* harmony export */   \"dws\": () => (/* binding */ dws)\n/* harmony export */ });\nconst cards = document.querySelectorAll(\".memory-card\");\r\nconst dws = document.querySelector(\".dws\");\n\n//# sourceURL=webpack://naval_battle_in_pure_js/./js/const.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ \"./js/const.js\");\n\r\n\r\nlet hasFlippedCard = false;\r\nlet boardLocked = false;\r\nlet firstCard, secondCard;\r\n\r\nconst flipCard = (event) => {\r\n  if (boardLocked) return;\r\n\r\n  const target = event.target.parentElement;\r\n\r\n  if (target === firstCard) return;\r\n\r\n  target.classList.add(\"flip\");\r\n\r\n  if (!hasFlippedCard) {\r\n    hasFlippedCard = true;\r\n    firstCard = target;\r\n  } else {\r\n    hasFlippedCard = false;\r\n    secondCard = target;\r\n\r\n    checkForMatch();\r\n  }\r\n  _const__WEBPACK_IMPORTED_MODULE_0__.dws.addEventListener(\"click\", startNewGame);\r\n};\r\n\r\nconst checkForMatch = () => {\r\n  const isEqual = firstCard.dataset.img === secondCard.dataset.img;\r\n\r\n  isEqual ? disableCards() : unFlipCards();\r\n};\r\n\r\nconst disableCards = () => {\r\n  firstCard.removeEventListener(\"click\", flipCard);\r\n  secondCard.removeEventListener(\"click\", flipCard);\r\n};\r\n\r\nconst unFlipCards = () => {\r\n  boardLocked = true;\r\n\r\n  setTimeout(() => {\r\n    firstCard.classList.remove(\"flip\");\r\n    secondCard.classList.remove(\"flip\");\r\n\r\n    resetBoard();\r\n  }, 1000);\r\n};\r\n\r\nconst startNewGame = () => {\r\n  _const__WEBPACK_IMPORTED_MODULE_0__.cards.forEach((card) => {\r\n    card.classList.remove(\"flip\");\r\n    resetBoard();\r\n    setTimeout(() => {\r\n      addEvent();\r\n    }, 300);\r\n  });\r\n  _const__WEBPACK_IMPORTED_MODULE_0__.dws.removeEventListener(\"click\", startNewGame);\r\n};\r\n\r\nconst resetBoard = () => {\r\n  [hasFlippedCard, boardLocked] = [false, false];\r\n  [firstCard, secondCard] = [null, null];\r\n};\r\n\r\nconst addEvent = () => {\r\n  _const__WEBPACK_IMPORTED_MODULE_0__.cards.forEach((card) => {\r\n    card.addEventListener(\"click\", flipCard);\r\n\r\n    const rendomIndex = Math.floor(Math.random() * _const__WEBPACK_IMPORTED_MODULE_0__.cards.length);\r\n    card.style.order = rendomIndex;\r\n  });\r\n};\r\n\r\naddEvent();\r\n\n\n//# sourceURL=webpack://naval_battle_in_pure_js/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;