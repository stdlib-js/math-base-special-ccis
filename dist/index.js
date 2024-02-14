"use strict";var t=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=t(function(g,u){
var n=require('@stdlib/math-base-special-sincos/dist').assign,c=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/complex-float64/dist'),o=require('@stdlib/complex-real/dist'),m=require('@stdlib/complex-imag/dist'),e=[0,0];function p(i){var r,a,s;return r=o(i),a=m(i),n(r,e,1,0),a!==0&&(s=c(-a),e[0]*=s,e[1]*=s),new q(e[1],e[0])}u.exports=p
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
