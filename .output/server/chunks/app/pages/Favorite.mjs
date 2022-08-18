function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var Favorite$1 = {};

var ids = Favorite$1.ids = [2, 1];
var modules = Favorite$1.modules = {
  82: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode("Tesst")]);
    };
    var staticRenderFns = [];
    var testvue_type_script_lang_js_ = {};
    var components_testvue_type_script_lang_js_ = testvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_testvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "5bd9f403"
    );
    __webpack_exports__["default"] = component.exports;
  },
  83: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_c("test")], 1);
    };
    var staticRenderFns = [];
    var Favoritevue_type_script_lang_js_ = {
      layout: "search"
    };
    var pages_Favoritevue_type_script_lang_js_ = Favoritevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pages_Favoritevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "2f0823bf"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Test: __webpack_require__(82).default });
  }
};

const Favorite = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Favorite$1
}, [Favorite$1]);

export { Favorite as F };
//# sourceMappingURL=Favorite.mjs.map
