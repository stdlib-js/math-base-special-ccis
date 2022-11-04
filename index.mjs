// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{assign as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.0.7-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";function e(e,n,i){var r,m;return s(n,e,1,0),r=e[0],0!==i&&(r*=m=t(-i),e[1]*=m),e[0]=e[1],e[1]=r,e}function n(s,t,n){return 2===arguments.length?e([0,0],s,t):e(s,t,n)}export{n as default};
//# sourceMappingURL=index.mjs.map
