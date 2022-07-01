// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";function e(e,n,i){var r,m;return s(e,n),r=e[0],0!==i&&(r*=m=t(-i),e[1]*=m),e[0]=e[1],e[1]=r,e}function n(s,t,n){return 2===arguments.length?e([0,0],s,t):e(s,t,n)}export{n as default};
//# sourceMappingURL=index.mjs.map
