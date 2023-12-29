"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_index_js"],{

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var index = function index() {
  var body = document.querySelector('body');
  var navigation = document.querySelector('.nav');
  var logo = navigation.querySelector('.logo');
  var menuList = navigation.querySelector('.nav__menu_list');
  var burgerBtn = navigation.querySelector('.js-burger-btn');
  function activationMenu() {
    navigation.classList.add('nav--active');
    burgerBtn.classList.add('burger_btn--active');
    burgerBtn.innerHTML = 'close';
    body.classList.add('disable_scrloll');
  }
  function deactivationMenu() {
    navigation.classList.remove('nav--active');
    burgerBtn.classList.remove('burger_btn--active');
    burgerBtn.innerHTML = 'menu';
    body.classList.remove('disable_scrloll');
  }
  burgerBtn.addEventListener('click', function () {
    if (burgerBtn.classList.contains('burger_btn--active')) {
      deactivationMenu();
    } else {
      activationMenu();
    }
  });
  logo.addEventListener('click', function () {
    console.log('logo');
    deactivationMenu();
  });
  menuList.addEventListener('click', function (event) {
    if (_toConsumableArray(event.target.classList).some(function (item) {
      console.log('hello');
      return item === 'nav__menu_link';
    })) {
      deactivationMenu();
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      deactivationMenu();
    }
  });
  document.addEventListener('click', function (event) {
    if (!navigation.contains(event.target)) {
      deactivationMenu();
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ })

}]);
//# sourceMappingURL=src_js_pages_index_js.js.map