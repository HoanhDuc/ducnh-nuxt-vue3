const dynamicChunks = {
 ['components/test.js']: () => import('../app/components/test.mjs').then(function (n) { return n.t; }),
 ['pages/Favorite.js']: () => import('../app/pages/Favorite.mjs').then(function (n) { return n.F; }),
 ['pages/Search.js']: () => import('../app/pages/Search.mjs').then(function (n) { return n.S; }),
 ['pages/index.js']: () => import('../app/pages/index.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
//# sourceMappingURL=_dynamic-require.mjs.map
