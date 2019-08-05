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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/assets/js/detail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/js/api.js":
/*!*********************************!*\
  !*** ./public/assets/js/api.js ***!
  \*********************************/
/*! exports provided: loadImages, loadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImages\", function() { return loadImages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\nfunction loadImages() {\n    return fetch(\"/api/images\")\n      .then(res => res.json())\n      .catch(err => reject(err));\n}\n\nfunction loadImage(id) {\n    return fetch(\"/api/images/\" + id)\n      .then(res => res.json())\n      .catch(err => reject(err));\n}\n\n\n//# sourceURL=webpack:///./public/assets/js/api.js?");

/***/ }),

/***/ "./public/assets/js/cardCreation.js":
/*!******************************************!*\
  !*** ./public/assets/js/cardCreation.js ***!
  \******************************************/
/*! exports provided: createCards, createCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCards\", function() { return createCards; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCard\", function() { return createCard; });\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMethods */ \"./public/assets/js/domMethods.js\");\n/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating */ \"./public/assets/js/rating.js\");\n\n\n\nfunction createCards(data) {\n  const container = document.getElementsByClassName(\"container\")[0];\n  container.innerHTML = \"\";\n  let lastRow;\n\n  const row = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"row\");\n\n  return data.forEach(function(image, index) {\n    const col = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"col-md-4 mt-4\");\n    col.appendChild(createCard(image));\n\n    if (index % 3 === 0) {\n      row.appendChild(col);\n      container.appendChild(row);\n      lastRow = row;\n    }\n\n    return lastRow.appendChild(col);\n  });\n}\n\nfunction createCard(image) {\n  const card = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"card\");\n  const cardBody = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"card-body\");\n  const imageContainer = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"card__image-container\");\n\n  const img = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"img\", \"card-img-top card__image--cover\");\n  img.setAttribute(\"src\", image.image);\n  img.setAttribute(\"alt\", image.description);\n\n  const ratingFormContainer = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"div\", \"rating d-flex justify-content-start\");\n  ratingFormContainer.setAttribute(\"data-id\", image._id);\n  ratingFormContainer.setAttribute(\"data-rating\", image.rating);\n\n  const ratingForm = Object(_rating__WEBPACK_IMPORTED_MODULE_1__[\"createRatingForm\"])(image);\n\n  const cardText = Object(_domMethods__WEBPACK_IMPORTED_MODULE_0__[\"createEl\"])(\"a\", \"card-text font-weight-bold mt-2\");\n  cardText.setAttribute(\"href\", `/images/${image._id}`);\n  cardText.innerText = `${image.description} (${image.rating})`;\n\n  imageContainer.append(img);\n  ratingFormContainer.append(ratingForm);\n\n  cardBody.appendChild(ratingFormContainer);\n  cardBody.appendChild(cardText);\n  \n  card.appendChild(imageContainer);\n  card.appendChild(cardBody);\n\n  return card;\n}\n\n\n//# sourceURL=webpack:///./public/assets/js/cardCreation.js?");

/***/ }),

/***/ "./public/assets/js/detail.js":
/*!************************************!*\
  !*** ./public/assets/js/detail.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./public/assets/js/api.js\");\n/* harmony import */ var _cardCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardCreation */ \"./public/assets/js/cardCreation.js\");\n/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexedDb */ \"./public/assets/js/indexedDb.js\");\n\n\n\n\nconst id = window.location.pathname.split(\"/\")[2];\nconst container = document.querySelector(\".container\");\n\nObject(_api__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])(id).then(image => {\n  const card = Object(_cardCreation__WEBPACK_IMPORTED_MODULE_1__[\"createCard\"])(image);\n  const btn = document.createElement(\"button\");\n\n  btn.setAttribute(\"class\", \"btn btn-primary mt-5 mx-auto\");\n  btn.textContent = \"Save to favorites\";\n  btn.onclick = Object(_indexedDb__WEBPACK_IMPORTED_MODULE_2__[\"useIndexedDb\"])(\"favorites\", \"FavoritesStore\", \"put\", image);\n\n  container.appendChild(card);\n  container.appendChild(btn);\n});\n\n\n//# sourceURL=webpack:///./public/assets/js/detail.js?");

/***/ }),

/***/ "./public/assets/js/domMethods.js":
/*!****************************************!*\
  !*** ./public/assets/js/domMethods.js ***!
  \****************************************/
/*! exports provided: createEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEl\", function() { return createEl; });\nfunction createEl(htmlString = \"\", className) {\n  const el = document.createElement(htmlString);\n  if (className) {\n    el.setAttribute(\"class\", className);\n  }\n  return el;\n}\n\n\n//# sourceURL=webpack:///./public/assets/js/domMethods.js?");

/***/ }),

/***/ "./public/assets/js/indexedDb.js":
/*!***************************************!*\
  !*** ./public/assets/js/indexedDb.js ***!
  \***************************************/
/*! exports provided: useIndexedDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIndexedDb\", function() { return useIndexedDb; });\nfunction useIndexedDb(databaseName, storeName, method, object) {\n  return new Promise((resolve, reject) => {\n    const request = window.indexedDB.open(databaseName, 1);\n    let db,\n      tx,\n      store;\n\n    request.onupgradeneeded = function(e) {\n      const db = request.result;\n      db.createObjectStore(storeName, { keyPath: \"_id\" });\n    };\n\n    request.onerror = function(e) {\n      console.log(\"There was an error\");\n    };\n\n    request.onsuccess = function(e) {\n      db = request.result;\n      tx = db.transaction(storeName, \"readwrite\");\n      store = tx.objectStore(storeName);\n\n      db.onerror = function(e) {\n        console.log(\"error\");\n      };\n      if (method === \"put\") {\n        store.put(object);\n      }\n      if (method === \"get\") {\n        const all = store.getAll();\n        all.onsuccess = function() {\n          resolve(all.result);\n        };\n      }\n      tx.oncomplete = function() {\n        db.close();\n      };\n    };\n  });\n}\n\n\n//# sourceURL=webpack:///./public/assets/js/indexedDb.js?");

/***/ }),

/***/ "./public/assets/js/rating.js":
/*!************************************!*\
  !*** ./public/assets/js/rating.js ***!
  \************************************/
/*! exports provided: createRatingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRatingForm\", function() { return createRatingForm; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./public/assets/js/api.js\");\n/* harmony import */ var _domMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domMethods */ \"./public/assets/js/domMethods.js\");\n/* harmony import */ var _cardCreation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardCreation */ \"./public/assets/js/cardCreation.js\");\n\n\n\n\nfunction createRatingForm(image) {\n  const labelText = {\n    1: \"One Star\",\n    2: \"Two Stars\",\n    3: \"Three Stars\",\n    4: \"Four Stars\",\n    5: \"Five Stars\"\n  };\n\n  const form = Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"createEl\"])(\"form\");\n  form.setAttribute(\"action\", \"post\");\n\n  for (let i = 1; i <= 5; i++) {\n    const input = Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"createEl\"])(\"input\", \"visuallyhidden\");\n    input.setAttribute(\"type\", \"radio\");\n    input.setAttribute(\"name\", \"rating\");\n    input.setAttribute(\"id\", `${image._id}-star-${i}`);\n    input.setAttribute(\"value\", i);\n\n    const label = Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"createEl\"])(\"label\");\n    label.setAttribute(\"for\", `${image._id}-star-${i}`);\n    const labelSpan = Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"createEl\"])(\"span\", \"visuallyhidden\");\n    labelSpan.innerText = labelText[i];\n    const star = Object(_domMethods__WEBPACK_IMPORTED_MODULE_1__[\"createEl\"])(\"i\", `fa-star ${image.rating >= i ? \"fas\" : \"far\"}`);\n\n    label.appendChild(labelSpan);\n    label.appendChild(star);\n    label.onclick = updateRating;\n    form.appendChild(input);\n    form.appendChild(label);\n  }\n  mouseoverListener;\n  mouseleaveListener;\n  return form;\n}\n\nfunction updateRating(event) {\n  const [id, , rating] = event.currentTarget.getAttribute(\"for\").split(\"-\");\n  fetch(`/api/images/${id}`, {\n    method: \"PUT\",\n    body: JSON.stringify({ rating }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function() {\n    if (window.location.pathname.includes(\"/images\")) {\n      console.log(\"yoyo\");\n      const id = window.location.pathname.split(\"/\")[2];\n      const container = document.getElementsByClassName(\"container\")[0];\n      Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"loadImage\"])(id).then(image => {\n        container.removeChild(container.firstChild);\n        container.appendChild(Object(_cardCreation__WEBPACK_IMPORTED_MODULE_2__[\"createCard\"])(image));\n      });\n    } else {\n      Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"loadImages\"])().then(images => {\n        Object(_cardCreation__WEBPACK_IMPORTED_MODULE_2__[\"createCards\"])(images);\n      });\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./public/assets/js/rating.js?");

/***/ })

/******/ });