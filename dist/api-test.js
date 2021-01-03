/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/api-test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/api-test.js":
/*!*************************!*\
  !*** ./src/api-test.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_test_edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-test/edit.js */ \"./src/api-test/edit.js\");\n/* harmony import */ var _api_test_save_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-test/save.js */ \"./src/api-test/save.js\");\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('scbc/api', {\n  title: 'API Test',\n  icon: 'editor-help',\n  category: 'scbc',\n  edit: _api_test_edit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _api_test_save_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/api-test.js?");

/***/ }),

/***/ "./src/api-test/edit.js":
/*!******************************!*\
  !*** ./src/api-test/edit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Edit; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ \"@wordpress/url\");\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Edit(_ref) {\n  var className = _ref.className;\n\n  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      themesLoaded = _useState2[0],\n      setThemesLoaded = _useState2[1];\n\n  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      selectedTheme = _useState4[0],\n      setSelectedTheme = _useState4[1];\n\n  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      isSuggestionsVisible = _useState6[0],\n      setIsSuggestionsVisible = _useState6[1];\n\n  var ThemeSuggestion = function ThemeSuggestion() {\n    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n      /**\n       * with the default options, requests to `url: api.wordpress.org` fail, but\n       * other URLs work correctly (e.g., `jsonplaceholder.typicode.com`, as\n       * you can see below). if you use plain `window.fetch` (or use `setFetchHandler`\n       * to force `apiFetch` to use plain `window.fetch` (which is the same thing\n       * really but at least you're using built-in functionality (which doesn't\n       * matter all that much))), it works correctly, so i suspect something in\n       * the default middlewares is acting up but i've looked at all the code there\n       * and nothing jumps out at me\n       */\n      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({\n        url: 'https://jsonplaceholder.typicode.com/todos/1'\n      }).then(function (data) {\n        console.log(data);\n      });\n      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default.a.setFetchHandler(function (options) {\n        var url = options.url,\n            path = options.path,\n            data = options.data,\n            method = options.method;\n        return window.fetch(url || path, {\n          method: method,\n          data: data\n        });\n      });\n      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({\n        url: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__[\"addQueryArgs\"])('http://api.wordpress.org/themes/info/1.1/', {\n          'action': 'query_themes',\n          'request[search]': 'food'\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        console.log(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(data.themes[0].slug));\n        console.log(data.themes[0].slug);\n        setThemesLoaded({\n          themesLoaded: true\n        });\n        setSelectedTheme({\n          selectedTheme: data.themes[0].slug\n        });\n      });\n    }, [themesLoaded]);\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"div\", {\n      style: {\n        position: 'relative'\n      }\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__[\"TextControl\"], {\n      label: \"Theme Slug\",\n      type: \"text\",\n      value: themesLoaded && selectedTheme,\n      placeholder: \"\",\n      onChange: function onChange(value) {\n        console.log(value);\n        setIsSuggestionsVisible({\n          isSuggestionsVisible: true\n        });\n      }\n    }), isSuggestionsVisible && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"div\", {\n      style: {\n        position: 'absolute',\n        top: '0',\n        left: '0'\n      }\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"button\", {\n      style: {\n        display: 'block'\n      }\n    }, \"Foo\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"button\", {\n      style: {\n        display: 'block'\n      }\n    }, \"Foo\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"button\", {\n      style: {\n        display: 'block'\n      }\n    }, \"Foo\")));\n  };\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"div\", {\n    className: className\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(ThemeSuggestion, null), themesLoaded ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"p\", null, \"Yes\") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"p\", null, \"No\"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"p\", null, \"Here's some text.\"));\n}\n\n//# sourceURL=webpack:///./src/api-test/edit.js?");

/***/ }),

/***/ "./src/api-test/save.js":
/*!******************************!*\
  !*** ./src/api-test/save.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Save; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Save() {\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"p\", null, \"Hello from front-end!\");\n}\n\n//# sourceURL=webpack:///./src/api-test/save.js?");

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"apiFetch\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22apiFetch%22%5D%7D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22blocks%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ }),

/***/ "@wordpress/url":
/*!**************************************!*\
  !*** external {"this":["wp","url"]} ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = this[\"wp\"][\"url\"]; }());\n\n//# sourceURL=webpack:///external_%7B%22this%22:%5B%22wp%22,%22url%22%5D%7D?");

/***/ })

/******/ });