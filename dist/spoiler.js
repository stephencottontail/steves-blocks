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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/spoiler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() {\n  module.exports = _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./src/spoiler.js":
/*!************************!*\
  !*** ./src/spoiler.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spoiler_edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spoiler/edit.js */ \"./src/spoiler/edit.js\");\n/* harmony import */ var _spoiler_save_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spoiler/save.js */ \"./src/spoiler/save.js\");\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__[\"registerBlockType\"])('scbc/spoiler', {\n  title: 'Spoiler Block',\n  description: 'Hide the contents of the block with an overlay',\n  category: 'scbc',\n  icon: 'hidden',\n  edit: _spoiler_edit_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  save: _spoiler_save_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/spoiler.js?");

/***/ }),

/***/ "./src/spoiler/SpoilerButton.js":
/*!**************************************!*\
  !*** ./src/spoiler/SpoilerButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpoilerButton; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SpoilerButton(_ref) {\n  var stem = _ref.stem,\n      _ref$isRevealed = _ref.isRevealed,\n      isRevealed = _ref$isRevealed === void 0 ? false : _ref$isRevealed,\n      onClick = _ref.onClick,\n      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"stem\", \"isRevealed\", \"onClick\"]);\n\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"button\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    className: \"\".concat(stem, \"__toggle \").concat(isRevealed ? 'is-revealed' : ''),\n    onClick: onClick\n  }, rest), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"i\", {\n    className: \"dashicons dashicons-hidden\"\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(\"span\", {\n    className: \"\".concat(stem, \"__toggle-text\")\n  }, \"Spoiler\"));\n}\n\n//# sourceURL=webpack:///./src/spoiler/SpoilerButton.js?");

/***/ }),

/***/ "./src/spoiler/edit.js":
/*!*****************************!*\
  !*** ./src/spoiler/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SpoilerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpoilerButton */ \"./src/spoiler/SpoilerButton.js\");\n\n\n\n // `scbcPlaceholderImage` comes from PHP\n\nvar TEMPLATE = [['core/columns', {}, [['core/paragraph', {\n  content: 'You can hide anything with this block...'\n}], ['core/image', {\n  url: scbcPlaceholderImage,\n  caption: 'Like this picture of a tree.'\n}]]]];\n\nfunction Spoiler(_ref) {\n  var isRevealed = _ref.isRevealed,\n      setState = _ref.setState,\n      className = _ref.className;\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: \"\".concat(className)\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_SpoilerButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    stem: className,\n    onClick: function onClick() {\n      setState(function (state) {\n        return {\n          isRevealed: !state.isRevealed\n        };\n      });\n    },\n    isRevealed: isRevealed\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: \"\".concat(className, \"__wrapper\"),\n    \"aria-live\": \"polite\",\n    \"aria-hidden\": isRevealed ? false : true\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__[\"InnerBlocks\"], {\n    allowedBlocks: true,\n    template: TEMPLATE\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__[\"withState\"])({\n  isRevealed: true\n})(Spoiler));\n\n//# sourceURL=webpack:///./src/spoiler/edit.js?");

/***/ }),

/***/ "./src/spoiler/save.js":
/*!*****************************!*\
  !*** ./src/spoiler/save.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Save; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpoilerButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpoilerButton */ \"./src/spoiler/SpoilerButton.js\");\n\n\n\nfunction Save() {\n  var className = 'wp-block-scbc-spoiler';\n  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_SpoilerButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    stem: className\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n    className: \"\".concat(className, \"__wrapper\"),\n    \"aria-live\": \"polite\",\n    \"aria-hidden\": true\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__[\"InnerBlocks\"].Content, null)));\n}\n\n//# sourceURL=webpack:///./src/spoiler/save.js?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blockEditor%22%5D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blocks%22%5D?");

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"compose\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22compose%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");

/***/ })

/******/ });