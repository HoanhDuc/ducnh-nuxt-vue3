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

var Search$1 = {};

var ids = Search$1.ids = [3];
var modules = Search$1.modules = {
  84: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode("Search")]);
    };
    var staticRenderFns = [];
    var Searchvue_type_script_lang_js_ = {
      layout: "search"
    };
    var pages_Searchvue_type_script_lang_js_ = Searchvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(3);
    var component = Object(componentNormalizer["a"])(
      pages_Searchvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "4759c08b"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const Search = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': Search$1
}, [Search$1]);

export { Search as S };
//# sourceMappingURL=Search.mjs.map
