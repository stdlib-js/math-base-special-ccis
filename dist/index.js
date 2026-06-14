"use strict";var t=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=t(function(g,u){
var n=require('@stdlib/math-base-special-sincos/dist').assign,c=require('@stdlib/math-base-special-exp/dist'),q=require('@stdlib/complex-float64-ctor/dist'),o=require('@stdlib/complex-float64-real/dist'),m=require('@stdlib/complex-float64-imag/dist'),i=[0,0];function p(a){var r,e,s;return r=o(a),e=m(a),n(r,i,1,0),e!==0&&(s=c(-e),i[0]*=s,i[1]*=s),new q(i[1],i[0])}u.exports=p
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
