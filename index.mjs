// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{assign as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@esm/index.mjs";var r=[0,0];function d(d){var l,n,o;return l=m(d),n=i(d),s(l,r,1,0),0!==n&&(o=t(-n),r[0]*=o,r[1]*=o),new e(r[1],r[0])}export{d as default};
//# sourceMappingURL=index.mjs.map
