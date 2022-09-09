"use strict";
(self["webpackChunkcapstone_project_2"] = self["webpackChunkcapstone_project_2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #180a0a;\n  font-style: normal;\n  width: 100%;\n  color: white;\n}\n\n.logo {\n  width: 5rem;\n  height: 5rem;\n}\n\n.navi {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navi > a {\n  text-decoration: none;\n  color: white;\n  align-self: center;\n}\n\n.header-wrapper {\n  padding: 0 2rem 0 2rem;\n  margin-top: 2rem;\n  background-color: #701a7558;\n}\n\n.icon-ed {\n  color: #f582a7;\n}\n\n.sec-wrapper {\n  padding: 2rem;\n}\n\n.movie-disp {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.movie-disp li {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  text-align: center;\n  background: black;\n}\n\n.movie-disp li img {\n  max-width: 400px;\n  border-radius: 12px;\n  height: 30rem;\n}\n\n.movie-disp li h2 {\n  color: #fff;\n  font-size: 1.8em;\n  padding: 15px 10px 0;\n  margin-top: auto;\n}\n\n.mv-wrapper {\n  display: flex;\n  width: 100%;\n}\n\n.mv-title {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.com-sec {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: auto;\n  align-items: flex-end;\n}\n\n.lk-edit {\n  color: #f582a7;\n  padding-top: 1rem;\n  font-size: 1.8rem;\n}\n\n.cmt {\n  background-color: #f582a7;\n  width: 70%;\n  border-radius: 15%;\n  align-self: center;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n}\n\n.comm-popup {\n  position: fixed;\n  overflow-y: scroll;\n  width: 90%;\n  display: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  background-color: #711a75;\n  z-index: 5;\n  padding: 2rem;\n}\n\n.poster {\n  width: 60%;\n  margin: auto;\n  height: 25rem;\n}\n\n.fa-x {\n  font-size: 50px;\n  color: #180a0a;\n  position: absolute;\n  left: 85%;\n  padding: 0.2rem;\n}\n\n.movie-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  width: 60%;\n  background-color: #f582a7;\n}\n\n.more-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 5rem;\n}\n\n.description {\n  font-size: 15px;\n  line-height: 2em;\n}\n\n.movie-title {\n  padding: 0.5rem;\n  font-size: 35px;\n  text-align: center;\n  margin: 1rem auto;\n}\n\nspan {\n  font-size: 18px;\n  padding: 0.5rem;\n  text-align: justify;\n}\n\nh3 {\n  padding: 0.7rem;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 1.5rem;\n}\n\n.comment-section {\n  padding: 0.5rem;\n  text-align: start;\n  width: 60%;\n  min-height: 7rem;\n  max-width: max-content;\n  overflow-y: scroll;\n}\n\n.comment {\n  text-align: start;\n  font-size: 20px;\n  padding: 0.5rem;\n}\n\nform {\n  width: 40%;\n  gap: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  padding: 0.6rem;\n  margin: auto;\n}\n\n#name {\n  font-size: 15px;\n  padding: 0.4rem;\n  border-radius: 3%;\n  width: 80%;\n}\n\n#add-comment {\n  font-size: 15px;\n  padding: 0.4rem;\n  border-radius: 3%;\n  width: 80%;\n}\n\n.comm-btn {\n  padding: 0.5rem;\n  background-color: #f10086;\n  border-radius: 15%;\n  font-size: 16px;\n  animation: zoom-in-zoom-out 1.5s infinite;\n}\n\n.comm-btn:hover {\n  background-color: #f582a7;\n  animation: none;\n}\n\n@keyframes zoom-in-zoom-out {\n  0% {\n    transform: scale(1, 1);\n  }\n\n  50% {\n    transform: scale(1.3, 1.3);\n  }\n\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\nfooter {\n  margin-top: 2rem;\n  bottom: 0;\n  height: 4rem;\n  width: 100%;\n  background-color: #701a7558;\n  margin-bottom: 0.5rem;\n}\n\nfooter p {\n  padding: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border-top: #f582a7 1px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  background-color: #180a0a;\n  font-style: normal;\n  width: 100%;\n  color: white;\n}\n\n.logo {\n  width: 5rem;\n  height: 5rem;\n}\n\n.navi {\n  display: flex;\n  justify-content: space-around;\n}\n\n.navi > a {\n  text-decoration: none;\n  color: white;\n  align-self: center;\n}\n\n.header-wrapper {\n  padding: 0 2rem 0 2rem;\n  margin-top: 2rem;\n  background-color: #701a7558;\n}\n\n.icon-ed {\n  color: #f582a7;\n}\n\n.sec-wrapper {\n  padding: 2rem;\n}\n\n.movie-disp {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.movie-disp li {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  list-style: none;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  text-align: center;\n  background: black;\n}\n\n.movie-disp li img {\n  max-width: 400px;\n  border-radius: 12px;\n  height: 30rem;\n}\n\n.movie-disp li h2 {\n  color: #fff;\n  font-size: 1.8em;\n  padding: 15px 10px 0;\n  margin-top: auto;\n}\n\n.mv-wrapper {\n  display: flex;\n  width: 100%;\n}\n\n.mv-title {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n}\n\n.com-sec {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: auto;\n  align-items: flex-end;\n}\n\n.lk-edit {\n  color: #f582a7;\n  padding-top: 1rem;\n  font-size: 1.8rem;\n}\n\n.cmt {\n  background-color: #f582a7;\n  width: 70%;\n  border-radius: 15%;\n  align-self: center;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n}\n\n.comm-popup {\n  position: fixed;\n  overflow-y: scroll;\n  width: 90%;\n  display: none;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  background-color: #711a75;\n  z-index: 5;\n  padding: 2rem;\n}\n\n.poster {\n  width: 60%;\n  margin: auto;\n  height: 25rem;\n}\n\n.fa-x {\n  font-size: 50px;\n  color: #180a0a;\n  position: absolute;\n  left: 85%;\n  padding: 0.2rem;\n}\n\n.movie-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  width: 60%;\n  background-color: #f582a7;\n}\n\n.more-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 5rem;\n}\n\n.description {\n  font-size: 15px;\n  line-height: 2em;\n}\n\n.movie-title {\n  padding: 0.5rem;\n  font-size: 35px;\n  text-align: center;\n  margin: 1rem auto;\n}\n\nspan {\n  font-size: 18px;\n  padding: 0.5rem;\n  text-align: justify;\n}\n\nh3 {\n  padding: 0.7rem;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 1.5rem;\n}\n\n.comment-section {\n  padding: 0.5rem;\n  text-align: start;\n  width: 60%;\n  min-height: 7rem;\n  max-width: max-content;\n  overflow-y: scroll;\n}\n\n.comment {\n  text-align: start;\n  font-size: 20px;\n  padding: 0.5rem;\n}\n\nform {\n  width: 40%;\n  gap: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  padding: 0.6rem;\n  margin: auto;\n}\n\n#name {\n  font-size: 15px;\n  padding: 0.4rem;\n  border-radius: 3%;\n  width: 80%;\n}\n\n#add-comment {\n  font-size: 15px;\n  padding: 0.4rem;\n  border-radius: 3%;\n  width: 80%;\n}\n\n.comm-btn {\n  padding: 0.5rem;\n  background-color: #f10086;\n  border-radius: 15%;\n  font-size: 16px;\n  animation: zoom-in-zoom-out 1.5s infinite;\n}\n\n.comm-btn:hover {\n  background-color: #f582a7;\n  animation: none;\n}\n\n@keyframes zoom-in-zoom-out {\n  0% {\n    transform: scale(1, 1);\n  }\n\n  50% {\n    transform: scale(1.3, 1.3);\n  }\n\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\nfooter {\n  margin-top: 2rem;\n  bottom: 0;\n  height: 4rem;\n  width: 100%;\n  background-color: #701a7558;\n  margin-bottom: 0.5rem;\n}\n\nfooter p {\n  padding: 1.5rem;\n  font-size: 1.5rem;\n  text-align: center;\n  border-top: #f582a7 1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_comment_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comment-popup.js */ "./src/modules/comment-popup.js");
/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _modules_createLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createLikes.js */ "./src/modules/createLikes.js");
/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/itemCounter.js */ "./src/modules/itemCounter.js");
/* eslint-disable prefer-destructuring */






fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json())
  .then((data) => {
    const list = data.slice(0, 6);
    (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(list.length);
    list.forEach((item, index) => {
      const { name } = item;
      const poster = item.image.original;
      const movie = `<li>
        <div>
      <img src=" ${poster}" class="img">
       <div class = "mv-title">
        <h2>${name}</h2>
      <i data-id="${index}" class="fa-regular lk-edit fa-heart"></i>
       </div>
       <div class="com-sec">
       <p class="likes" data-id="${index}"></p>
       <button id="${item.id}"type="button" class="cmt" >Comments</button>
     </div>
     </div>
       </li>`;
      document.querySelector('.movie-disp').innerHTML += movie;
    });
    (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_createLikes_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });

const commentModal = document.querySelector('.comm-popup');

document.addEventListener('click', async (e) => {
  if (e.target.matches('.cmt')) {
    const id = e.target.id;
    await (0,_modules_comment_popup_js__WEBPACK_IMPORTED_MODULE_1__.commentPopup)(id);
    commentModal.style.display = 'flex';
  }
});


/***/ }),

/***/ "./src/modules/comment-popup.js":
/*!**************************************!*\
  !*** ./src/modules/comment-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentPopup": () => (/* binding */ commentPopup)
/* harmony export */ });
/* harmony import */ var _getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData.js */ "./src/modules/getData.js");
/* eslint-disable no-return-assign */
/* eslint-disable import/prefer-default-export */


const options = { method: 'GET' };

const commentPopup = async (id) => {
  const getCmnt = await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  await fetch(`https://api.tvmaze.com/shows/${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      const commentModal = document.querySelector('.comm-popup');
      commentModal.innerHTML += `
    <img src="${data.image.original}" class="poster" alt="show poster">
    <i class="fa fa-x"></i>
    <h2 class="movie-title">${data.name}</h2>
    <div class="movie-info">
    <div class="summary">
    <p class="description">SUMMARY: ${data.summary}</p>
    </div>
    <div class="more-info">
     <span class="season">Language: ${data.language}</span>
     <span class="likes">Release: ${data.premiered}</span>
     <span class="imdb">Average rating: ${data.rating.average}</span>
     <span class="cast">Status: ${data.status}</span>
     </div>
   </div>
   <h3 class="comment-num">comments(${getCmnt.length})</h3>
   <div class="comment-section"></div>
 <h3 class="add">Add a comment</h3>
    `;
      const commCont = document.querySelector('.comment-section');
      getCmnt.map((comments) => commCont.innerHTML += `
    <p class="comment">${comments.creation_date} ${comments.username}: ${comments.comment}</p>
    `);

      const form = document.createElement('form');
      const input = document.createElement('input');
      input.id = 'name';
      input.setAttribute('type', 'text');
      input.setAttribute('required', 'true');
      input.setAttribute('placeholder', 'Your name...');

      const textarea = document.createElement('textarea');
      textarea.id = 'add-comment';
      textarea.setAttribute('type', 'text');
      textarea.setAttribute('required', 'true');
      textarea.setAttribute('placeholder', 'Your thoughts...');

      const btn = document.createElement('button');
      btn.className = 'comm-btn';
      btn.setAttribute('type', 'submit');
      btn.innerText = 'Post!';

      form.append(input, textarea, btn);
      commentModal.appendChild(form);
      const index = id;
      form.addEventListener('submit', async (e) => {
        const userName = input.value;
        const txt = textarea.value;
        e.preventDefault();
        await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(index, userName, txt);
        form.reset();
        await (0,_getData_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(index);
      });
      const closeBtn = document.querySelector('.fa-x');
      closeBtn.addEventListener('click', () => {
        commentModal.style.display = 'none';
        window.location.reload();
      });
    });
};


/***/ }),

/***/ "./src/modules/createLikes.js":
/*!************************************!*\
  !*** ./src/modules/createLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likesCounter.js */ "./src/modules/likesCounter.js");


const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/likes/';

const postLikes = async () => {
  const likeBtn = document.querySelectorAll('.lk-edit');
  likeBtn.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      (0,_likesCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e);
      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: `item${e.target.dataset.id}`,
        }),
      });
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/comments';

const postComment = async (id, name, text) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: text,
    }),
  });
};

const getComments = async (id) => {
  const path = `?item_id=${id}`;
  const cmnt = await fetch(baseUrl + path);
  const response = await cmnt.json();
  return response;
};


/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6TFbzgZmXlGKu2dnVJez/likes/';

const getLikes = async () => {
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      const disp = document.querySelectorAll('.likes');
      disp.forEach((element, index) => {
        const id = data.findIndex((like) => like.item_id === `item${index}`);
        const msgLikes = id >= 0 ? data[id].likes : 0;
        element.innerHTML = `${msgLikes}`;
      });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dispCounter = (count) => {
  const movieUpdate = document.getElementById('movies-count');
  movieUpdate.innerHTML = `Movies(${count})`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispCounter);

/***/ }),

/***/ "./src/modules/likesCounter.js":
/*!*************************************!*\
  !*** ./src/modules/likesCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counter = (dataset) => {
  const disp = document.querySelectorAll('.likes');
  disp.forEach((e) => {
    if (dataset.target.dataset.id === e.dataset.id) {
      // eslint-disable-next-line no-plusplus
      e.innerHTML++;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map