"use strict";var q=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}}};var v=q(function(j,g){"use strict";var o=require("@stdlib/math-base-special-sincos").assign,w=require("@stdlib/math-base-special-exp"),n=[0,0];function y(i,e,r,u,a){var s;return o(i,n,1,0),e===0?(r[a]=n[1],r[a+u]=n[0],r):(s=w(-e),r[a]=n[1]*s,r[a+u]=n[0]*s,r)}g.exports=y});var p=q(function(k,d){"use strict";var A=require("@stdlib/complex-float64-ctor"),C=require("@stdlib/array-float64"),R=require("@stdlib/complex-float64-real"),E=require("@stdlib/complex-float64-imag"),F=v(),t=new C(2);function K(i){return F(R(i),E(i),t,1,0),new A(t[0],t[1])}d.exports=K});var l=q(function(B,x){"use strict";var P=v();function S(i,e,r,u,a,s){return P(i[r],i[r+e],u,a,s)}x.exports=S});var m=require("@stdlib/utils-define-nonenumerable-read-only-property"),c=p(),W=v(),b=l();m(c,"assign",W);m(c,"strided",b);module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
