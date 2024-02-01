// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{assign as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@v0.1.1-esm/index.mjs";var d=[0,0];function r(r){var n,l,o;return n=m(r),l=i(r),s(n,d,1,0),0!==l&&(o=e(-l),d[0]*=o,d[1]*=o),new t(d[1],d[0])}export{r as default};
//# sourceMappingURL=index.mjs.map
