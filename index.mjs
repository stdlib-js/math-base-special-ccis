// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";var e=s,r=t;var n=function(s,t,n){var i,a;return e(s,t),i=s[0],0!==n&&(i*=a=r(-n),s[1]*=a),s[0]=s[1],s[1]=i,s};var i=function(s,t,e){return 2===arguments.length?n([0,0],s,t):n(s,t,e)};export{i as default};
//# sourceMappingURL=index.mjs.map
