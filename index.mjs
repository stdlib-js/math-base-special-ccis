// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{assign as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.2.1-esm/index.mjs";var r=[0,0];function d(d){var n,l,o;return n=m(d),l=i(d),s(n,r,1,0),0!==l&&(o=e(-l),r[0]*=o,r[1]*=o),new t(r[1],r[0])}export{d as default};
//# sourceMappingURL=index.mjs.map
