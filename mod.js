// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var b=l&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return y.call(r);t=r[p],a=p,n=null!=(o=r)&&v.call(o,a);try{r[p]=void 0}catch(n){return y.call(r)}return e=y.call(r),n?r[p]=t:delete r[p],e}:function(r){return y.call(r)},s="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var A,_="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var U,g="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h([1,3.14,-3.14,NaN]),t=n,r=(m&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var N=U,j="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var O,S="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,256,257]),t=n,r=(j&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null;var T,G="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(F&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L={uint16:T,uint8:E};(P=new L.uint16(1))[0]=4660;var M=52===new L.uint8(P.buffer)[0],V=!0===M?1:0,W=new N(1),k=new d(W.buffer);function x(r){return W[0]=r,k[V]}var Y,C,q=!0===M?0:1,z=new N(1),B=new d(z.buffer);!0===M?(Y=1,C=0):(Y=0,C=1);var D={HIGH:Y,LOW:C},J=new N(1),K=new d(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,n){return K[Q]=r,K[R]=n,J[0]}var Z=Math.floor,$=Number.POSITIVE_INFINITY,rr=Number.NEGATIVE_INFINITY;function nr(r){return r!=r}function tr(r){return r===$||r===rr}var er,or;!0===M?(er=1,or=0):(er=0,or=1);var ar={HIGH:er,LOW:or},ur=new N(1),ir=new d(ur.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,n,t,e){return ur[0]=r,n[e]=ir[fr],n[e+t]=ir[cr],n}function yr(r){return lr(r,[0,0],1,0)}c(yr,"assign",lr);var vr=[0,0];function pr(r,n,t,e){return nr(r)||tr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return pr(r,[0,0],1,0)}),"assign",pr);var br=[0,0],sr=[0,0];function wr(r,n){var t,e,o,a,u,i;return 0===n||0===r||nr(r)||tr(r)?r:(pr(r,br,1,0),n+=br[1],n+=function(r){var n=x(r);return(n=(2146435072&n)>>>20)-1023|0}(r=br[0]),n<-1074?(o=0,a=r,yr.assign(o,vr,1,0),u=vr[0],u&=2147483647,i=x(a),X(u|=i&=2147483648,vr[1])):n>1023?r<0?rr:$:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,yr.assign(r,sr,1,0),t=sr[0],t&=2148532223,e*X(t|=n+1023<<20,sr[1])))}function Ar(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var _r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],dr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],mr=5.960464477539063e-8,hr=Ar(20),Ur=Ar(20),gr=Ar(20),Nr=Ar(20);function jr(r,n,t,e,o,a,u,i,f){var c,l,y,v,p,b,s,w,A;for(v=a,A=e[t],w=t,p=0;w>0;p++)l=mr*A|0,Nr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=wr(A,o),A-=8*Z(.125*A),A-=s=0|A,y=0,o>0?(s+=p=Nr[t-1]>>24-o,Nr[t-1]-=p<<24-o,y=Nr[t-1]>>23-o):0===o?y=Nr[t-1]>>23:A>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=Nr[p],0===c?0!==w&&(c=1,Nr[p]=16777216-w):Nr[p]=16777215-w;if(o>0)switch(o){case 1:Nr[t-1]&=8388607;break;case 2:Nr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=wr(1,o)))}if(0===A){for(w=0,p=t-1;p>=a;p--)w|=Nr[p];if(0===w){for(b=1;0===Nr[a-b];b++);for(p=t+1;p<=t+b;p++){for(f[i+p]=_r[u+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];e[p]=l}return jr(r,n,t+=b,e,o,a,u,i,f)}}if(0===A)for(t-=1,o-=24;0===Nr[t];)t-=1,o-=24;else(A=wr(A,-o))>=16777216?(l=mr*A|0,Nr[t]=A-16777216*l|0,o+=24,Nr[t+=1]=l):Nr[t]=0|A;for(l=wr(1,o),p=t;p>=0;p--)e[p]=l*Nr[p],l*=mr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=dr[b]*e[p+b];gr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=gr[p];for(n[0]=0===y?l:-l,l=gr[0]-l,p=1;p<=t;p++)l+=gr[p];return n[1]=0===y?l:-l,7&s}function Ir(r,n,t,e){var o,a,u,i,f,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),i=t-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)hr[f]=c<0?0:_r[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*hr[u+(f-c)];Ur[f]=o}return 4,jr(r,n,4,Ur,i,4,a,u,hr)}var Or=Math.round;function Sr(r,n,t){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Or(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=a-u,i-(x(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,i-(x(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Er=1.5707963267341256,Fr=6077100506506192e-26,Hr=2*Fr,Tr=4*Fr,Gr=[0,0,0],Pr=[0,0];function Lr(r,n){var t,e,o,a,u,i,f;if((o=2147483647&x(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Sr(r,o,n):o<=1073928572?r>0?(f=r-Er,n[0]=f-Fr,n[1]=f-n[0]-Fr,1):(f=r+Er,n[0]=f+Fr,n[1]=f-n[0]+Fr,-1):r>0?(f=r-2*Er,n[0]=f-Hr,n[1]=f-n[0]-Hr,2):(f=r+2*Er,n[0]=f+Hr,n[1]=f-n[0]+Hr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Sr(r,o,n):r>0?(f=r-3*Er,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Er,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Sr(r,o,n):r>0?(f=r-4*Er,n[0]=f-Tr,n[1]=f-n[0]-Tr,4):(f=r+4*Er,n[0]=f+Tr,n[1]=f-n[0]+Tr,-4);if(o<1094263291)return Sr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return z[0]=r,B[q]}(r),f=X(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Gr[u]=0|f,f=16777216*(f-Gr[u]);for(Gr[2]=f,a=3;0===Gr[a-1];)a-=1;return i=Ir(Gr,Pr,e,a),r<0?(n[0]=-Pr[0],n[1]=-Pr[1],-i):(n[0]=Pr[0],n[1]=Pr[1],i)}var Mr=-.16666666666666632;function Vr(r,n,t,e,o){var a,u,i,f,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(f=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),i=c*r,t[o]=0===n?r+i*(Mr+c*u):r-(c*(.5*n-i*u)-n-i*Mr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=f*f*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),f=1-(a=.5*c),t[o+e]=f+(1-f-a+(c*u-r*n)),t}var Wr=[0,0];function kr(r,n,t,e){var o,a;if(o=x(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Vr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(a=Lr(r,Wr),Vr(Wr[0],Wr[1],n,t,e),3&a){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}c((function(r){return kr(r,[0,0],1,0)}),"assign",kr);var xr=Math.ceil;function Yr(r){return r<0?xr(r):Z(r)}function Cr(r){var n;return nr(r)||r===$?r:r===rr?0:r>709.782712893384?$:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,a,u;return wr(1-(n-(e=r-n)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=Yr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function qr(r,n,t){var e,o;return kr(n,r,1,0),e=r[0],0!==t&&(e*=o=Cr(-t),r[1]*=o),r[0]=r[1],r[1]=e,r}function zr(r,n,t){return 2===arguments.length?qr([0,0],r,n):qr(r,n,t)}export{zr as default};
//# sourceMappingURL=mod.js.map