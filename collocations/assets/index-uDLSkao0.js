(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hs="160",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ad=0,Xs=1,od=2,xu=1,sd=2,vn=3,Bn=0,kt=1,xn=2,Mn=0,Oi=1,$s=2,qs=3,Ys=4,cd=5,Kn=100,ld=101,ud=102,Ks=103,Zs=104,hd=200,dd=201,fd=202,pd=203,zo=204,Io=205,md=206,gd=207,vd=208,_d=209,yd=210,xd=211,bd=212,Ad=213,Md=214,Sd=0,Ed=1,wd=2,ca=3,Td=4,Cd=5,Rd=6,kd=7,ds=0,Pd=1,Ld=2,Un=0,Dd=1,Od=2,zd=3,Id=4,Nd=5,Ud=6,bu=300,Ii=301,Ni=302,No=303,Uo=304,Ea=306,Fo=1e3,Zt=1001,Bo=1002,Ct=1003,Js=1004,Ha=1005,Ft=1006,Fd=1007,pr=1008,Fn=1009,Bd=1010,Hd=1011,fs=1012,Au=1013,In=1014,Nn=1015,Ui=1016,Mu=1017,Su=1018,Jn=1020,Gd=1021,Jt=1023,Vd=1024,Wd=1025,Qn=1026,Fi=1027,jd=1028,Eu=1029,Xd=1030,wu=1031,Tu=1033,Ga=33776,Va=33777,Wa=33778,ja=33779,Qs=35840,ec=35841,tc=35842,nc=35843,Cu=36196,ic=37492,rc=37496,ac=37808,oc=37809,sc=37810,cc=37811,lc=37812,uc=37813,hc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,vc=37820,_c=37821,Xa=36492,yc=36494,xc=36495,$d=36283,bc=36284,Ac=36285,Mc=36286,Ru=3e3,ei=3001,qd=3200,Yd=3201,ku=0,Kd=1,Wt="",ut="srgb",wn="srgb-linear",ps="display-p3",wa="display-p3-linear",la="linear",nt="srgb",ua="rec709",ha="p3",oi=7680,Sc=519,Zd=512,Jd=513,Qd=514,Pu=515,ef=516,tf=517,nf=518,rf=519,Ho=35044,Ec="300 es",Go=1035,bn=2e3,da=2001;class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const lr=Math.PI/180,mr=180/Math.PI;function Sn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function ms(n,e){return(n%e+e)%e}function af(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function of(n,e,t){return n!==e?(t-n)/(e-n):0}function ur(n,e,t){return(1-t)*n+t*e}function sf(n,e,t,i){return ur(n,e,1-Math.exp(-t*i))}function cf(n,e=1){return e-Math.abs(ms(n,e*2)-e)}function lf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function df(n,e){return n+Math.random()*(e-n)}function ff(n){return n*(.5-Math.random())}function pf(n){n!==void 0&&(wc=n);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(n){return n*lr}function gf(n){return n*mr}function Vo(n){return(n&n-1)===0&&n!==0}function vf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _f(n,e,t,i,r){const a=Math.cos,o=Math.sin,s=a(t/2),c=o(t/2),l=a((e+i)/2),u=o((e+i)/2),h=a((e-i)/2),f=o((e-i)/2),m=a((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(s*u,c*h,c*f,s*l);break;case"YZY":n.set(c*f,s*u,c*h,s*l);break;case"ZXZ":n.set(c*h,c*f,s*u,s*l);break;case"XZX":n.set(s*u,c*g,c*m,s*l);break;case"YXY":n.set(c*m,s*u,c*g,s*l);break;case"ZYZ":n.set(c*g,c*m,s*u,s*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Wo={DEG2RAD:lr,RAD2DEG:mr,generateUUID:Sn,clamp:vt,euclideanModulo:ms,mapLinear:af,inverseLerp:of,lerp:ur,damp:sf,pingpong:cf,smoothstep:lf,smootherstep:uf,randInt:hf,randFloat:df,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:Vo,ceilPowerOfTwo:vf,floorPowerOfTwo:fa,setQuaternionFromProperEuler:_f,normalize:Ze,denormalize:sn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,a,o,s,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l)}set(e,t,i,r,a,o,s,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],d=r[6],x=r[1],_=r[4],y=r[7],A=r[2],M=r[5],E=r[8];return a[0]=o*v+s*x+c*A,a[3]=o*p+s*_+c*M,a[6]=o*d+s*y+c*E,a[1]=l*v+u*x+h*A,a[4]=l*p+u*_+h*M,a[7]=l*d+u*y+h*E,a[2]=f*v+m*x+g*A,a[5]=f*p+m*_+g*M,a[8]=f*d+m*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*s*l-i*a*u+i*s*c+r*a*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=u*o-s*l,f=s*c-u*a,m=l*a-o*c,g=t*h+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(s*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*a-s*t)*v,e[6]=m*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,s){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*s)+o+e,-r*l,r*c,-r*(-l*o+c*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Ve;function Lu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yf(){const n=gr("canvas");return n.style.display="block",n}const Tc={};function hr(n){n in Tc||(Tc[n]=!0,console.warn(n))}const Cc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rc=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[wn]:{transfer:la,primaries:ua,toReference:n=>n,fromReference:n=>n},[ut]:{transfer:nt,primaries:ua,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wa]:{transfer:la,primaries:ha,toReference:n=>n.applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(Cc)},[ps]:{transfer:nt,primaries:ha,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rc),fromReference:n=>n.applyMatrix3(Cc).convertLinearToSRGB()}},xf=new Set([wn,wa]),Je={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sr[e].toReference,r=Sr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Wt?la:Sr[n].transfer}};function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let si;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=gr("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=zi(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(zi(t[i]/255)*255):t[i]=zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bf=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ya(r[o].image)):a.push(Ya(r[o]))}else a=Ya(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Du.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;class Pt extends nn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,i=Zt,r=Zt,a=Ft,o=pr,s=Jt,c=Fn,l=Pt.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Sn(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ei?ut:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ut?ei:Ru}set encoding(e){hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?ut:Wt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=bu;Pt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,y=(m+1)/2,A=(d+1)/2,M=(u+f)/4,E=(h+v)/4,P=(g+p)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(_),r=M/i,a=E/i):y>A?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=M/r,a=P/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=E/a,r=P/a),this.set(i,r,a,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-v)/x,this.z=(f-u)/x,this.w=Math.acos((l+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends nn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ei?ut:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ou(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Mf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class zu extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends Pt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,s){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=a[o+0],m=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==f||l!==m||u!==g){let p=1-s;const d=c*f+l*m+u*g+h*v,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const A=Math.sqrt(_),M=Math.atan2(A,d*x);p=Math.sin(p*M)/A,s=Math.sin(s*M)/A}const y=s*x;if(c=c*p+f*y,l=l*p+m*y,u=u*p+g*y,h=h*p+v*y,p===1-s){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const s=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=a[o],f=a[o+1],m=a[o+2],g=a[o+3];return e[t]=s*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-s*m,e[t+2]=l*g+u*m+s*f-c*h,e[t+3]=u*g-s*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,c=Math.sin,l=s(i/2),u=s(r/2),h=s(a/2),f=c(i/2),m=c(r/2),g=c(a/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],s=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=i+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(a-l)*m,this._z=(o-r)*m}else if(i>s&&i>h){const m=2*Math.sqrt(1+i-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-i-h);this._w=(a-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-s);this._w=(o-r)/m,this._x=(a+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*s+r*l-a*c,this._y=r*u+o*c+a*s-i*l,this._z=a*u+o*l+i*c-r*s,this._w=o*u-i*s-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,c=e.w,l=2*(o*r-s*i),u=2*(s*t-a*r),h=2*(a*i-o*t);return this.x=t+c*l+o*h-s*u,this.y=i+c*u+s*l-a*h,this.z=r+c*h+a*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,s=t.y,c=t.z;return this.x=r*c-a*s,this.y=a*o-i*c,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new D,kc=new tn;class ii{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(a,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),wr.subVectors(this.max,ji),ci.subVectors(e.a,ji),li.subVectors(e.b,ji),ui.subVectors(e.c,ji),Rn.subVectors(li,ci),kn.subVectors(ui,li),jn.subVectors(ci,ui);let t=[0,-Rn.z,Rn.y,0,-kn.z,kn.y,0,-jn.z,jn.y,Rn.z,0,-Rn.x,kn.z,0,-kn.x,jn.z,0,-jn.x,-Rn.y,Rn.x,0,-kn.y,kn.x,0,-jn.y,jn.x,0];return!Za(t,ci,li,ui,wr)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,ci,li,ui,wr))?!1:(Tr.crossVectors(Rn,kn),t=[Tr.x,Tr.y,Tr.z],Za(t,ci,li,ui,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],Xt=new D,Er=new ii,ci=new D,li=new D,ui=new D,Rn=new D,kn=new D,jn=new D,ji=new D,wr=new D,Tr=new D,Xn=new D;function Za(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){Xn.fromArray(n,a);const s=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),u=i.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Ef=new ii,Xi=new D,Ja=new D;class Ta{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ef.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ja)),this.expandByPoint(Xi.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new D,Qa=new D,Cr=new D,Pn=new D,eo=new D,Rr=new D,to=new D;class Ca{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qa.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Qa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),s=Pn.dot(this.direction),c=-Pn.dot(Cr),l=Pn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-s,f=o*s-c,g=a*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*s)+f*(o*h+f+2*c)+l}else f=a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f=-a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*a+s)),f=h>0?-a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(h=Math.max(0,-(o*a+s)),f=h>0?a:Math.min(Math.max(-a,-c),a),m=-h*h+f*(f+2*c)+l);else f=o>0?-a:a,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qa).addScaledVector(Cr,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,c=i+o;return c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(s=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||s>r)||((s>i||i!==i)&&(i=s),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,a){eo.subVectors(t,e),Rr.subVectors(i,e),to.crossVectors(eo,Rr);let o=this.direction.dot(to),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Pn.subVectors(this.origin,e);const c=s*this.direction.dot(Rr.crossVectors(Pn,Rr));if(c<0)return null;const l=s*this.direction.dot(eo.cross(Pn));if(l<0||c+l>o)return null;const u=-s*Pn.dot(to);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,a,o,s,c,l,u,h,f,m,g,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,s,c,l,u,h,f,m,g,v,p)}set(e,t,i,r,a,o,s,c,l,u,h,f,m,g,v,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/hi.setFromMatrixColumn(e,0).length(),a=1/hi.setFromMatrixColumn(e,1).length(),o=1/hi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=o*u,m=o*h,g=s*u,v=s*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-s*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f+v*s,t[4]=g*s-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=v+f*s,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,v=l*h;t[0]=f-v*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=v-f*s,t[2]=-o*l,t[6]=s,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=s*u,v=s*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*h,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=s*c,v=s*l;t[0]=c*u,t[4]=v-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=s*c,v=s*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Tf)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Ln.crossVectors(i,It),Ln.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Ln.crossVectors(i,It)),Ln.normalize(),kr.crossVectors(It,Ln),r[0]=Ln.x,r[4]=kr.x,r[8]=It.x,r[1]=Ln.y,r[5]=kr.y,r[9]=It.y,r[2]=Ln.z,r[6]=kr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],s=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],x=i[3],_=i[7],y=i[11],A=i[15],M=r[0],E=r[4],P=r[8],b=r[12],w=r[1],N=r[5],U=r[9],ee=r[13],C=r[2],k=r[6],O=r[10],K=r[14],J=r[3],te=r[7],F=r[11],$=r[15];return a[0]=o*M+s*w+c*C+l*J,a[4]=o*E+s*N+c*k+l*te,a[8]=o*P+s*U+c*O+l*F,a[12]=o*b+s*ee+c*K+l*$,a[1]=u*M+h*w+f*C+m*J,a[5]=u*E+h*N+f*k+m*te,a[9]=u*P+h*U+f*O+m*F,a[13]=u*b+h*ee+f*K+m*$,a[2]=g*M+v*w+p*C+d*J,a[6]=g*E+v*N+p*k+d*te,a[10]=g*P+v*U+p*O+d*F,a[14]=g*b+v*ee+p*K+d*$,a[3]=x*M+_*w+y*C+A*J,a[7]=x*E+_*N+y*k+A*te,a[11]=x*P+_*U+y*O+A*F,a[15]=x*b+_*ee+y*K+A*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],d=e[15];return g*(+a*c*h-r*l*h-a*s*f+i*l*f+r*s*m-i*c*m)+v*(+t*c*m-t*l*f+a*o*f-r*o*m+r*l*u-a*c*u)+p*(+t*l*h-t*s*m-a*o*h+i*o*m+a*s*u-i*l*u)+d*(-r*s*u-t*c*h+t*s*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],d=e[15],x=h*p*l-v*f*l+v*c*m-s*p*m-h*c*d+s*f*d,_=g*f*l-u*p*l-g*c*m+o*p*m+u*c*d-o*f*d,y=u*v*l-g*h*l+g*s*m-o*v*m-u*s*d+o*h*d,A=g*h*c-u*v*c-g*s*f+o*v*f+u*s*p-o*h*p,M=t*x+i*_+r*y+a*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(v*f*a-h*p*a-v*r*m+i*p*m+h*r*d-i*f*d)*E,e[2]=(s*p*a-v*c*a+v*r*l-i*p*l-s*r*d+i*c*d)*E,e[3]=(h*c*a-s*f*a-h*r*l+i*f*l+s*r*m-i*c*m)*E,e[4]=_*E,e[5]=(u*p*a-g*f*a+g*r*m-t*p*m-u*r*d+t*f*d)*E,e[6]=(g*c*a-o*p*a-g*r*l+t*p*l+o*r*d-t*c*d)*E,e[7]=(o*f*a-u*c*a+u*r*l-t*f*l-o*r*m+t*c*m)*E,e[8]=y*E,e[9]=(g*h*a-u*v*a-g*i*m+t*v*m+u*i*d-t*h*d)*E,e[10]=(o*v*a-g*s*a+g*i*l-t*v*l-o*i*d+t*s*d)*E,e[11]=(u*s*a-o*h*a-u*i*l+t*h*l+o*i*m-t*s*m)*E,e[12]=A*E,e[13]=(u*v*r-g*h*r+g*i*f-t*v*f-u*i*p+t*h*p)*E,e[14]=(g*s*r-o*v*r-g*i*c+t*v*c+o*i*p-t*s*p)*E,e[15]=(o*h*r-u*s*r+u*i*c-t*h*c-o*i*f+t*s*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,s=e.y,c=e.z,l=a*o,u=a*s;return this.set(l*o+i,l*s-r*c,l*c+r*s,0,l*s+r*c,u*s+i,u*c-r*o,0,l*c-r*s,u*c+r*o,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,s=t._z,c=t._w,l=a+a,u=o+o,h=s+s,f=a*l,m=a*u,g=a*h,v=o*u,p=o*h,d=s*h,x=c*l,_=c*u,y=c*h,A=i.x,M=i.y,E=i.z;return r[0]=(1-(v+d))*A,r[1]=(m+y)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(m-y)*M,r[5]=(1-(f+d))*M,r[6]=(p+x)*M,r[7]=0,r[8]=(g+_)*E,r[9]=(p-x)*E,r[10]=(1-(f+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=hi.set(r[0],r[1],r[2]).length();const o=hi.set(r[4],r[5],r[6]).length(),s=hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const l=1/a,u=1/o,h=1/s;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=u,$t.elements[5]*=u,$t.elements[6]*=u,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,r,a,o,s=bn){const c=this.elements,l=2*a/(t-e),u=2*a/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(s===bn)m=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(s===da)m=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,s=bn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(o-a),f=(t+e)*l,m=(i+r)*u;let g,v;if(s===bn)g=(o+a)*h,v=-2*h;else if(s===da)g=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hi=new D,$t=new at,wf=new D(0,0,0),Tf=new D(1,1,1),Ln=new D,kr=new D,It=new D,Pc=new at,Lc=new tn;class Ra{constructor(e=0,t=0,i=0,r=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class gs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const Dc=new D,di=new tn,dn=new at,Pr=new D,$i=new D,Rf=new D,kf=new tn,Oc=new D(1,0,0),zc=new D(0,1,0),Ic=new D(0,0,1),Pf={type:"added"},Lf={type:"removed"};class yt extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new Ra,i=new tn,r=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(zc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(zc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pr.copy(e):Pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt($i,Pr,this.up):dn.lookAt(Pr,$i,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),di.setFromRotationMatrix(dn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(a(e.materials,this.material[c]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];r.animations.push(a(e.animations,c))}}if(t){const s=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new D,fn=new D,no=new D,pn=new D,fi=new D,pi=new D,Nc=new D,io=new D,ro=new D,ao=new D;let Lr=!1;class Gt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qt.subVectors(r,t),fn.subVectors(i,t),no.subVectors(e,t);const o=qt.dot(qt),s=qt.dot(fn),c=qt.dot(no),l=fn.dot(fn),u=fn.dot(no),h=o*l-s*s;if(h===0)return a.set(0,0,0),null;const f=1/h,m=(l*c-s*u)*f,g=(o*u-s*c)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,a,o,s,c){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(e,t,i,r,a,o,s,c)}static getInterpolation(e,t,i,r,a,o,s,c){return this.getBarycoord(e,t,i,r,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,pn.x),c.addScaledVector(o,pn.y),c.addScaledVector(s,pn.z),c)}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),fn.subVectors(e,t),qt.cross(fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),Gt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,s;fi.subVectors(r,i),pi.subVectors(a,i),io.subVectors(e,i);const c=fi.dot(io),l=pi.dot(io);if(c<=0&&l<=0)return t.copy(i);ro.subVectors(e,r);const u=fi.dot(ro),h=pi.dot(ro);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(fi,o);ao.subVectors(e,a);const m=fi.dot(ao),g=pi.dot(ao);if(g>=0&&m<=g)return t.copy(a);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(i).addScaledVector(pi,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Nc.subVectors(a,r),s=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(Nc,s);const d=1/(p+v+f);return o=v*d,s=f*d,t.copy(i).addScaledVector(fi,o).addScaledVector(pi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=ms(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=oo(o,a,e+1/3),this.g=oo(o,a,e),this.b=oo(o,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=ut){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=Iu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Je.fromWorkingColorSpace(At.copy(this),e),Math.round(vt(At.r*255,0,255))*65536+Math.round(vt(At.g*255,0,255))*256+Math.round(vt(At.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(At.copy(this),t);const i=At.r,r=At.g,a=At.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let c,l;const u=(s+o)/2;if(s===o)c=0,l=0;else{const h=o-s;switch(l=u<=.5?h/(o+s):h/(2-o-s),o){case i:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-i)/h+2;break;case a:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ut){Je.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,r=At.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Dr);const i=ur(Dn.h,Dr.h,t),r=ur(Dn.s,Dr.s,t),a=ur(Dn.l,Dr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new We;We.NAMES=Iu;let Df=0;class ri extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Oi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Io,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Io&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const c=a[s];delete c.metadata,o.push(c)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new D,Or=new fe;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}}class Nu extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Uu extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ht extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Of=0;const Ht=new at,so=new yt,mi=new D,Nt=new ii,qi=new ii,gt=new D;class Dt extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Uu:Nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ve().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];qi.setFromBufferAttribute(s),this.morphTargetsRelative?(gt.addVectors(Nt.min,qi.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,qi.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(qi.min),Nt.expandByPoint(qi.max))}Nt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)gt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)gt.fromBufferAttribute(s,l),c&&(mi.fromBufferAttribute(e,l),gt.add(mi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<s;w++)l[w]=new D,u[w]=new D;const h=new D,f=new D,m=new D,g=new fe,v=new fe,p=new fe,d=new D,x=new D;function _(w,N,U){h.fromArray(r,w*3),f.fromArray(r,N*3),m.fromArray(r,U*3),g.fromArray(o,w*2),v.fromArray(o,N*2),p.fromArray(o,U*2),f.sub(h),m.sub(h),v.sub(g),p.sub(g);const ee=1/(v.x*p.y-p.x*v.y);isFinite(ee)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ee),x.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ee),l[w].add(d),l[N].add(d),l[U].add(d),u[w].add(x),u[N].add(x),u[U].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,N=y.length;w<N;++w){const U=y[w],ee=U.start,C=U.count;for(let k=ee,O=ee+C;k<O;k+=3)_(i[k+0],i[k+1],i[k+2])}const A=new D,M=new D,E=new D,P=new D;function b(w){E.fromArray(a,w*3),P.copy(E);const N=l[w];A.copy(N),A.sub(E.multiplyScalar(E.dot(N))).normalize(),M.crossVectors(P,N);const ee=M.dot(u[w])<0?-1:1;c[w*4]=A.x,c[w*4+1]=A.y,c[w*4+2]=A.z,c[w*4+3]=ee}for(let w=0,N=y.length;w<N;++w){const U=y[w],ee=U.start,C=U.count;for(let k=ee,O=ee+C;k<O;k+=3)b(i[k+0]),b(i[k+1]),b(i[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,a=new D,o=new D,s=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),s.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),s.add(u),c.add(u),l.add(u),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,a),h.subVectors(r,a),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,h=s.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){s.isInterleavedBufferAttribute?m=c[v]*s.data.stride+s.offset:m=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new jt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,r=this.attributes;for(const s in r){const c=r[s],l=e(c,i);t.setAttribute(s,l)}const a=this.morphAttributes;for(const s in a){const c=[],l=a[s];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,c=o.length;s<c;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new at,$n=new Ca,zr=new Ta,Fc=new D,gi=new D,vi=new D,_i=new D,co=new D,Ir=new D,Nr=new fe,Ur=new fe,Fr=new fe,Bc=new D,Hc=new D,Gc=new D,Br=new D,Hr=new D;class Qt extends yt{constructor(e=new Dt,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ir.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=s[c],h=a[c];u!==0&&(co.fromBufferAttribute(h,e),o?Ir.addScaledVector(co,u):Ir.addScaledVector(co.sub(t),u))}t.add(Ir)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(a),$n.copy(e.ray).recast(e.near),!(zr.containsPoint($n.origin)===!1&&($n.intersectSphere(zr,Fc)===null||$n.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(a).invert(),$n.copy(e.ray).applyMatrix4(Uc),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,s=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,f=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let y=x,A=_;y<A;y+=3){const M=s.getX(y),E=s.getX(y+1),P=s.getX(y+2);r=Gr(this,d,e,i,l,u,h,M,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const x=s.getX(p),_=s.getX(p+1),y=s.getX(p+2);r=Gr(this,o,e,i,l,u,h,x,_,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=o[p.materialIndex],x=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=x,A=_;y<A;y+=3){const M=y,E=y+1,P=y+2;r=Gr(this,d,e,i,l,u,h,M,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const x=p,_=p+1,y=p+2;r=Gr(this,o,e,i,l,u,h,x,_,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function zf(n,e,t,i,r,a,o,s){let c;if(e.side===kt?c=i.intersectTriangle(o,a,r,!0,s):c=i.intersectTriangle(r,a,o,e.side===Bn,s),c===null)return null;Hr.copy(s),Hr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:n}}function Gr(n,e,t,i,r,a,o,s,c,l){n.getVertexPosition(s,gi),n.getVertexPosition(c,vi),n.getVertexPosition(l,_i);const u=zf(n,e,t,i,gi,vi,_i,Br);if(u){r&&(Nr.fromBufferAttribute(r,s),Ur.fromBufferAttribute(r,c),Fr.fromBufferAttribute(r,l),u.uv=Gt.getInterpolation(Br,gi,vi,_i,Nr,Ur,Fr,new fe)),a&&(Nr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,c),Fr.fromBufferAttribute(a,l),u.uv1=Gt.getInterpolation(Br,gi,vi,_i,Nr,Ur,Fr,new fe),u.uv2=u.uv1),o&&(Bc.fromBufferAttribute(o,s),Hc.fromBufferAttribute(o,c),Gc.fromBufferAttribute(o,l),u.normal=Gt.getInterpolation(Br,gi,vi,_i,Bc,Hc,Gc,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:s,b:c,c:l,normal:new D,materialIndex:0};Gt.getNormal(gi,vi,_i,h.normal),u.face=h}return u}class yr extends Dt{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,a,0),g("z","y","x",1,-1,i,t,-e,o,a,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(v,p,d,x,_,y,A,M,E,P,b){const w=y/E,N=A/P,U=y/2,ee=A/2,C=M/2,k=E+1,O=P+1;let K=0,J=0;const te=new D;for(let F=0;F<O;F++){const $=F*N-ee;for(let Q=0;Q<k;Q++){const W=Q*w-U;te[v]=W*x,te[p]=$*_,te[d]=C,l.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[d]=M>0?1:-1,u.push(te.x,te.y,te.z),h.push(Q/E),h.push(1-F/P),K+=1}}for(let F=0;F<P;F++)for(let $=0;$<E;$++){const Q=f+$+k*F,W=f+$+k*(F+1),G=f+($+1)+k*(F+1),V=f+($+1)+k*F;c.push(Q,W,V),c.push(W,G,V),J+=6}s.addGroup(m,J,b),m+=J,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function If(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fu(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const Bu={clone:Bi,merge:Tt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=If(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hu extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Hu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,xi=1;class Ff extends yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(yi,xi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(yi,xi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(yi,xi,e,t);o.layers=this.layers,this.add(o);const s=new Vt(yi,xi,e,t);s.layers=this.layers,this.add(s);const c=new Vt(yi,xi,e,t);c.layers=this.layers,this.add(c);const l=new Vt(yi,xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,s,c]=t;for(const l of t)this.remove(l);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gu extends Pt{constructor(e,t,i,r,a,o,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,i,r,a,o,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?ut:Wt),this.texture=new Gu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yr(5,5,5),a=new Tn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:Mn});a.uniforms.tEquirect.value=t;const o=new Qt(r,a),s=t.minFilter;return t.minFilter===pr&&(t.minFilter=Ft),new Ff(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}const lo=new D,Hf=new D,Gf=new Ve;class _n{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lo.subVectors(i,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(lo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),r=this.coplanarPoint(lo).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Ta,Vr=new D;class _s{constructor(e=new _n,t=new _n,i=new _n,r=new _n,a=new _n,o=new _n){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],m=r[8],g=r[9],v=r[10],p=r[11],d=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(c-a,f-l,p-m,y-d).normalize(),i[1].setComponents(c+a,f+l,p+m,y+d).normalize(),i[2].setComponents(c+o,f+u,p+g,y+x).normalize(),i[3].setComponents(c-o,f-u,p-g,y-x).normalize(),i[4].setComponents(c-s,f-h,p-v,y-_).normalize(),t===bn)i[5].setComponents(c+s,f+h,p+v,y+_).normalize();else if(t===da)i[5].setComponents(s,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let n=null,e=!1,t=null,i=null;function r(a,o){t(a,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Vf(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,f=l.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function a(l,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,l),m.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){const d=g[v];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,r(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,l,u),h.version=l.version}}return{get:o,remove:s,update:c}}class ys extends Dt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(i),c=Math.floor(r),l=s+1,u=c+1,h=e/s,f=t/c,m=[],g=[],v=[],p=[];for(let d=0;d<u;d++){const x=d*f-o;for(let _=0;_<l;_++){const y=_*h-a;g.push(y,-x,0),v.push(0,0,1),p.push(_/s),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<s;x++){const _=x+l*d,y=x+l*(d+1),A=x+1+l*(d+1),M=x+1+l*d;m.push(_,y,M),m.push(y,A,M)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ip=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,em=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,am=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Wf,alphahash_pars_fragment:jf,alphamap_fragment:Xf,alphamap_pars_fragment:$f,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:sp,clipping_planes_vertex:cp,color_fragment:lp,color_pars_fragment:up,color_pars_vertex:hp,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:vp,emissivemap_fragment:_p,emissivemap_pars_fragment:yp,colorspace_fragment:xp,colorspace_pars_fragment:bp,envmap_fragment:Ap,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Cp,fog_fragment:Rp,fog_pars_fragment:kp,gradientmap_pars_fragment:Pp,lightmap_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:zp,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:jp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphcolor_vertex:im,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:sm,normal_fragment_maps:cm,normal_pars_fragment:lm,normal_pars_vertex:um,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:vm,packing:_m,premultiplied_alpha_fragment:ym,project_vertex:xm,dithering_fragment:bm,dithering_pars_fragment:Am,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:km,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Om,tonemapping_fragment:zm,tonemapping_pars_fragment:Im,transmission_fragment:Nm,transmission_pars_fragment:Um,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:jm,backgroundCube_frag:Xm,cube_vert:$m,cube_frag:qm,depth_vert:Ym,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:sg,meshmatcap_frag:cg,meshnormal_vert:lg,meshnormal_frag:ug,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:vg,points_frag:_g,shadow_vert:yg,shadow_frag:xg,sprite_vert:bg,sprite_frag:Ag},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},on={basic:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Tt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Tt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Tt([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Tt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Tt([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Tt([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Tt([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Tt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};on.physical={uniforms:Tt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Wr={r:0,b:0,g:0};function Mg(n,e,t,i,r,a,o){const s=new We(0);let c=a===!0?0:1,l,u,h=null,f=0,m=null;function g(p,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(s,c):_&&_.isColor&&(v(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ea)?(u===void 0&&(u=new Qt(new yr(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Bi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,(h!==_||f!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Qt(new ys(2,2),new Tn({name:"BackgroundMaterial",uniforms:Bi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(Wr,Fu(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(p,d=1){s.set(p),c=d,v(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(s,c)},render:g}}function Sg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},c=p(null);let l=c,u=!1;function h(C,k,O,K,J){let te=!1;if(o){const F=v(K,O,k);l!==F&&(l=F,m(l.object)),te=d(C,K,O,J),te&&x(C,K,O,J)}else{const F=k.wireframe===!0;(l.geometry!==K.id||l.program!==O.id||l.wireframe!==F)&&(l.geometry=K.id,l.program=O.id,l.wireframe=F,te=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(C,k,O,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):a.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function v(C,k,O){const K=O.wireframe===!0;let J=s[C.id];J===void 0&&(J={},s[C.id]=J);let te=J[k.id];te===void 0&&(te={},J[k.id]=te);let F=te[K];return F===void 0&&(F=p(f()),te[K]=F),F}function p(C){const k=[],O=[],K=[];for(let J=0;J<r;J++)k[J]=0,O[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:K,object:C,attributes:{},index:null}}function d(C,k,O,K){const J=l.attributes,te=k.attributes;let F=0;const $=O.getAttributes();for(const Q in $)if($[Q].location>=0){const G=J[Q];let V=te[Q];if(V===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),G===void 0||G.attribute!==V||V&&G.data!==V.data)return!0;F++}return l.attributesNum!==F||l.index!==K}function x(C,k,O,K){const J={},te=k.attributes;let F=0;const $=O.getAttributes();for(const Q in $)if($[Q].location>=0){let G=te[Q];G===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(G=C.instanceColor));const V={};V.attribute=G,G&&G.data&&(V.data=G.data),J[Q]=V,F++}l.attributes=J,l.attributesNum=F,l.index=K}function _(){const C=l.newAttributes;for(let k=0,O=C.length;k<O;k++)C[k]=0}function y(C){A(C,0)}function A(C,k){const O=l.newAttributes,K=l.enabledAttributes,J=l.attributeDivisors;O[C]=1,K[C]===0&&(n.enableVertexAttribArray(C),K[C]=1),J[C]!==k&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,k),J[C]=k)}function M(){const C=l.newAttributes,k=l.enabledAttributes;for(let O=0,K=k.length;O<K;O++)k[O]!==C[O]&&(n.disableVertexAttribArray(O),k[O]=0)}function E(C,k,O,K,J,te,F){F===!0?n.vertexAttribIPointer(C,k,O,J,te):n.vertexAttribPointer(C,k,O,K,J,te)}function P(C,k,O,K){if(i.isWebGL2===!1&&(C.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const J=K.attributes,te=O.getAttributes(),F=k.defaultAttributeValues;for(const $ in te){const Q=te[$];if(Q.location>=0){let W=J[$];if(W===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){const G=W.normalized,V=W.itemSize,ne=t.get(W);if(ne===void 0)continue;const I=ne.buffer,Z=ne.type,le=ne.bytesPerElement,ue=i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||W.gpuType===Au);if(W.isInterleavedBufferAttribute){const _e=W.data,B=_e.stride,tt=W.offset;if(_e.isInstancedInterleavedBuffer){for(let be=0;be<Q.locationSize;be++)A(Q.location+be,_e.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let be=0;be<Q.locationSize;be++)y(Q.location+be);n.bindBuffer(n.ARRAY_BUFFER,I);for(let be=0;be<Q.locationSize;be++)E(Q.location+be,V/Q.locationSize,Z,G,B*le,(tt+V/Q.locationSize*be)*le,ue)}else{if(W.isInstancedBufferAttribute){for(let _e=0;_e<Q.locationSize;_e++)A(Q.location+_e,W.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let _e=0;_e<Q.locationSize;_e++)y(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,I);for(let _e=0;_e<Q.locationSize;_e++)E(Q.location+_e,V/Q.locationSize,Z,G,V*le,V/Q.locationSize*_e*le,ue)}}else if(F!==void 0){const G=F[$];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(Q.location,G);break;case 3:n.vertexAttrib3fv(Q.location,G);break;case 4:n.vertexAttrib4fv(Q.location,G);break;default:n.vertexAttrib1fv(Q.location,G)}}}}M()}function b(){U();for(const C in s){const k=s[C];for(const O in k){const K=k[O];for(const J in K)g(K[J].object),delete K[J];delete k[O]}delete s[C]}}function w(C){if(s[C.id]===void 0)return;const k=s[C.id];for(const O in k){const K=k[O];for(const J in K)g(K[J].object),delete K[J];delete k[O]}delete s[C.id]}function N(C){for(const k in s){const O=s[k];if(O[C.id]===void 0)continue;const K=O[C.id];for(const J in K)g(K[J].object),delete K[J];delete O[C.id]}}function U(){ee(),u=!0,l!==c&&(l=c,m(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:U,resetDefaultState:ee,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:y,disableUnusedAttributes:M}}function Eg(n,e,t,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,h){n.drawArrays(a,u,h),t.update(h,a,1)}function c(u,h,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,u,h,f),t.update(h,a,f)}function l(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(a,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];t.update(g,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function wg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const c=a(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||e.has("OES_texture_float"),A=_&&y,M=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:M}}function Tg(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new _n,s=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||a&&!p)a?u(null):l();else{const x=a?0:i,_=x*4;let y=d.clippingState||null;c.value=y,y=u(g,f,_,m);for(let A=0;A!==_;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const d=m+v*4,x=f.matrixWorldInverse;s.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,y=m;_!==v;++_,y+=4)o.copy(h[_]).applyMatrix4(x,s),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Cg(n){let e=new WeakMap;function t(o,s){return s===No?o.mapping=Ii:s===Uo&&(o.mapping=Ni),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===No||s===Uo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bf(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class xs extends Hu{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,Vc=[.125,.215,.35,.446,.526,.582],Zn=20,uo=new xs,Wc=new We;let ho=null,fo=0,po=0;const Yn=(1+Math.sqrt(5))/2,bi=1/Yn,jc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Yn,bi),new D(0,Yn,-bi),new D(bi,0,Yn),new D(-bi,0,Yn),new D(Yn,bi,0),new D(-Yn,bi,0)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho,fo,po),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget(),fo=this._renderer.getActiveCubeFace(),po=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ui,format:Jt,colorSpace:wn,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(a)),this._blurMaterial=kg(a,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,r){const s=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wc),u.toneMapping=Un,u.autoClear=!1;const m=new vs({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Qt(new yr,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Wc),v=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(s.up.set(0,c[d],0),s.lookAt(l[d],0,0)):x===1?(s.up.set(0,0,c[d]),s.lookAt(0,l[d],0)):(s.up.set(0,c[d],0),s.lookAt(0,0,l[d]));const _=this._cubeSize;jr(r,x*_,d>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,uo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jc[(r-1)%jc.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,o,s){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Qt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),v=a/g,p=isFinite(a)?1+Math.floor(u*v):Zn;p>Zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const d=[];let x=0;for(let E=0;E<Zn;++E){const P=E/v,b=Math.exp(-P*P/2);d.push(b),E===0?x+=b:E<p&&(x+=2*b)}for(let E=0;E<d.length;E++)d[E]=d[E]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-Ri?r-_+Ri:0),M=4*(this._cubeSize-y);jr(t,A,M,3*y,2*y),c.setRenderTarget(t),c.render(h,uo)}}function Rg(n){const e=[],t=[],i=[];let r=n;const a=n-Ri+1+Vc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let c=1/s;o>n-Ri?c=Vc[o-n+Ri-1]:o===0&&(c=0),i.push(c);const l=1/(s-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,p=2,d=1,x=new Float32Array(v*g*m),_=new Float32Array(p*g*m),y=new Float32Array(d*g*m);for(let M=0;M<m;M++){const E=M%3*2/3-1,P=M>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(b,v*g*M),_.set(f,p*g*M);const w=[M,M,M,M,M,M];y.set(w,d*g*M)}const A=new Dt;A.setAttribute("position",new jt(x,v)),A.setAttribute("uv",new jt(_,p)),A.setAttribute("faceIndex",new jt(y,d)),e.push(A),r>Ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kg(n,e,t){const i=new Float32Array(Zn),r=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function qc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function bs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pg(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const c=s.mapping,l=c===No||c===Uo,u=c===Ii||c===Ni;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Xc(n)),h=l?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Xc(n));const f=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function a(s){const c=s.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Lg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dg(n,e,t,i){const r={},a=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)e.update(v[p],n.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,y=x.length;_<y;_+=3){const A=x[_+0],M=x[_+1],E=x[_+2];f.push(A,M,M,E,E,A)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const A=_+0,M=_+1,E=_+2;f.push(A,M,M,E,E,A)}}else return;const p=new(Lu(f)?Uu:Nu)(f,1);p.version=v;const d=a.get(h);d&&e.remove(d),a.set(h,p)}function u(h){const f=a.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return a.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function Og(n,e,t,i){const r=i.isWebGL2;let a;function o(m){a=m}let s,c;function l(m){s=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(a,g,s,m*c),t.update(g,a,1)}function h(m,g,v){if(v===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](a,g,s,m*c,v),t.update(g,a,v)}function f(m,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(a,g,0,s,m,0,v);let d=0;for(let x=0;x<v;x++)d+=g[x];t.update(d,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=s*(a/3);break;case n.LINES:t.lines+=s*(a/2);break;case n.LINE_STRIP:t.lines+=s*(a-1);break;case n.LINE_LOOP:t.lines+=s*a;break;case n.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ig(n,e){return n[0]-e[0]}function Ng(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ug(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,o=new _t,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let p=a.get(u);if(p===void 0||p.count!==v){let k=function(){ee.dispose(),a.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),A===!0&&(b=3);let w=u.attributes.position.count*b,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*N*4*v),ee=new zu(U,w,N,v);ee.type=Nn,ee.needsUpdate=!0;const C=b*4;for(let O=0;O<v;O++){const K=M[O],J=E[O],te=P[O],F=w*N*4*O;for(let $=0;$<K.count;$++){const Q=$*C;_===!0&&(o.fromBufferAttribute(K,$),U[F+Q+0]=o.x,U[F+Q+1]=o.y,U[F+Q+2]=o.z,U[F+Q+3]=0),y===!0&&(o.fromBufferAttribute(J,$),U[F+Q+4]=o.x,U[F+Q+5]=o.y,U[F+Q+6]=o.z,U[F+Q+7]=0),A===!0&&(o.fromBufferAttribute(te,$),U[F+Q+8]=o.x,U[F+Q+9]=o.y,U[F+Q+10]=o.z,U[F+Q+11]=te.itemSize===4?o.w:1)}}p={count:v,texture:ee,size:new fe(w,N)},a.set(u,p),u.addEventListener("dispose",k)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const x=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const A=v[y];A[0]=y,A[1]=f[y]}v.sort(Ng);for(let y=0;y<8;y++)y<g&&v[y][1]?(s[y][0]=v[y][0],s[y][1]=v[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(Ig);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const A=s[y],M=A[0],E=A[1];M!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+y)!==p[M]&&u.setAttribute("morphTarget"+y,p[M]),d&&u.getAttribute("morphNormal"+y)!==d[M]&&u.setAttribute("morphNormal"+y,d[M]),r[y]=E,x+=E):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Fg(n,e,t,i){let r=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:o}}class Wu extends Pt{constructor(e,t,i,r,a,o,s,c,l,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qn&&(i=In),i===void 0&&u===Fi&&(i=Jn),super(null,r,a,o,s,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Ct,this.minFilter=c!==void 0?c:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ju=new Pt,Xu=new Wu(1,1);Xu.compareFunction=Pu;const $u=new zu,qu=new Sf,Yu=new Gu,Kc=[],Zc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),el=new Float32Array(4);function Gi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Kc[r];if(a===void 0&&(a=new Float32Array(r),Kc[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,n[o].toArray(a,s)}return a}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ka(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),ft(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Qc.set(i),n.uniformMatrix3fv(this.addr,!1,Qc),ft(t,i)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),ft(t,i)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Xu:ju;t.setTexture2D(e||a,r)}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qu,r)}function iv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yu,r)}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$u,r)}function av(n){switch(n){case 5126:return Bg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return jg;case 35676:return Xg;case 5124:case 35670:return $g;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Kg;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function ov(n,e){n.uniform1fv(this.addr,e)}function sv(n,e){const t=Gi(e,this.size,2);n.uniform2fv(this.addr,t)}function cv(n,e){const t=Gi(e,this.size,3);n.uniform3fv(this.addr,t)}function lv(n,e){const t=Gi(e,this.size,4);n.uniform4fv(this.addr,t)}function uv(n,e){const t=Gi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hv(n,e){const t=Gi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dv(n,e){const t=Gi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fv(n,e){n.uniform1iv(this.addr,e)}function pv(n,e){n.uniform2iv(this.addr,e)}function mv(n,e){n.uniform3iv(this.addr,e)}function gv(n,e){n.uniform4iv(this.addr,e)}function vv(n,e){n.uniform1uiv(this.addr,e)}function _v(n,e){n.uniform2uiv(this.addr,e)}function yv(n,e){n.uniform3uiv(this.addr,e)}function xv(n,e){n.uniform4uiv(this.addr,e)}function bv(n,e,t){const i=this.cache,r=e.length,a=ka(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ju,a[o])}function Av(n,e,t){const i=this.cache,r=e.length,a=ka(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qu,a[o])}function Mv(n,e,t){const i=this.cache,r=e.length,a=ka(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Yu,a[o])}function Sv(n,e,t){const i=this.cache,r=e.length,a=ka(t,r);dt(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$u,a[o])}function Ev(n){switch(n){case 5126:return ov;case 35664:return sv;case 35665:return cv;case 35666:return lv;case 35674:return uv;case 35675:return hv;case 35676:return dv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return _v;case 36295:return yv;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=av(t.type)}}class Tv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class Cv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],i)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function tl(n,e){n.seq.push(e),n.map[e.id]=e}function Rv(n,e,t){const i=n.name,r=i.length;for(mo.lastIndex=0;;){const a=mo.exec(i),o=mo.lastIndex;let s=a[1];const c=a[2]==="]",l=a[3];if(c&&(s=s|0),l===void 0||l==="["&&o+2===r){tl(t,l===void 0?new wv(s,n,e):new Tv(s,n,e));break}else{let h=t.map[s];h===void 0&&(h=new Cv(s),tl(t,h)),t=h}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Rv(a,o,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],c=i[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function nl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kv=37297;let Pv=0;function Lv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Dv(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===ha&&t===ua?i="LinearDisplayP3ToLinearSRGB":e===ua&&t===ha&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case wa:return[i,"LinearTransferOETF"];case ut:case ps:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function il(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Lv(n.getShaderSource(e),o)}else return r}function Ov(n,e){const t=Dv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zv(n,e){let t;switch(e){case Dd:t="Linear";break;case Od:t="Reinhard";break;case zd:t="OptimizedCineon";break;case Id:t="ACESFilmic";break;case Ud:t="AgX";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ki).join(`
`)}function Nv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ki).join(`
`)}function Uv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let s=1;a.type===n.FLOAT_MAT2&&(s=2),a.type===n.FLOAT_MAT3&&(s=3),a.type===n.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:s}}return t}function ki(n){return n!==""}function rl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(Bv,Gv)}const Hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gv(n,e){let t=Ue[e];if(t===void 0){const i=Hv.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(n){return n.replace(Vv,Wv)}function Wv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function sl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Ni:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ds:e="ENVMAP_BLENDING_MULTIPLY";break;case Pd:e="ENVMAP_BLENDING_MIX";break;case Ld:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kv(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const c=jv(t),l=Xv(t),u=$v(t),h=qv(t),f=Yv(t),m=t.isWebGL2?"":Iv(t),g=Nv(t),v=Uv(a),p=r.createProgram();let d,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ki).join(`
`),d.length>0&&(d+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ki).join(`
`),x.length>0&&(x+=`
`)):(d=[sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),x=[m,sl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Un?zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Ov("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),o=jo(o),o=rl(o,t),o=al(o,t),s=jo(s),s=rl(s,t),s=al(s,t),o=ol(o),s=ol(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,A=_+x+s,M=nl(r,r.VERTEX_SHADER,y),E=nl(r,r.FRAGMENT_SHADER,A);r.attachShader(p,M),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(U){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(M).trim(),k=r.getShaderInfoLog(E).trim();let O=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,M,E);else{const J=il(r,M,"vertex"),te=il(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+J+`
`+te)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(C===""||k==="")&&(K=!1);K&&(U.diagnostics={runnable:O,programLog:ee,vertexShader:{log:C,prefix:d},fragmentShader:{log:k,prefix:x}})}r.deleteShader(M),r.deleteShader(E),b=new ia(r,p),w=Fv(r,p)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(p,kv)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let Zv=0;class Jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qv(e),t.set(e,i)),i}}class Qv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function e0(n,e,t,i,r,a,o){const s=new gs,c=new Jv,l=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function p(b,w,N,U,ee){const C=U.fog,k=ee.geometry,O=b.isMeshStandardMaterial?U.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),J=K&&K.mapping===Ea?K.image.height:null,te=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const F=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$=F!==void 0?F.length:0;let Q=0;k.morphAttributes.position!==void 0&&(Q=1),k.morphAttributes.normal!==void 0&&(Q=2),k.morphAttributes.color!==void 0&&(Q=3);let W,G,V,ne;if(te){const St=on[te];W=St.vertexShader,G=St.fragmentShader}else W=b.vertexShader,G=b.fragmentShader,c.update(b),V=c.getVertexShaderID(b),ne=c.getFragmentShaderID(b);const I=n.getRenderTarget(),Z=ee.isInstancedMesh===!0,le=ee.isBatchedMesh===!0,ue=!!b.map,_e=!!b.matcap,B=!!K,tt=!!b.aoMap,be=!!b.lightMap,Ce=!!b.bumpMap,ye=!!b.normalMap,je=!!b.displacementMap,De=!!b.emissiveMap,R=!!b.metalnessMap,S=!!b.roughnessMap,j=b.anisotropy>0,se=b.clearcoat>0,ae=b.iridescence>0,oe=b.sheen>0,Se=b.transmission>0,ve=j&&!!b.anisotropyMap,Ae=se&&!!b.clearcoatMap,ke=se&&!!b.clearcoatNormalMap,Ie=se&&!!b.clearcoatRoughnessMap,re=ae&&!!b.iridescenceMap,Xe=ae&&!!b.iridescenceThicknessMap,L=oe&&!!b.sheenColorMap,ie=oe&&!!b.sheenRoughnessMap,me=!!b.specularMap,ce=!!b.specularColorMap,Ee=!!b.specularIntensityMap,He=Se&&!!b.transmissionMap,$e=Se&&!!b.thicknessMap,Fe=!!b.gradientMap,pe=!!b.alphaMap,z=b.alphaTest>0,he=!!b.alphaHash,de=!!b.extensions,Re=!!k.attributes.uv1,we=!!k.attributes.uv2,qe=!!k.attributes.uv3;let Ke=Un;return b.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ke=n.toneMapping),{isWebGL2:u,shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:G,defines:b.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:le,instancing:Z,instancingColor:Z&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,map:ue,matcap:_e,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:J,aoMap:tt,lightMap:be,bumpMap:Ce,normalMap:ye,displacementMap:f&&je,emissiveMap:De,normalMapObjectSpace:ye&&b.normalMapType===Kd,normalMapTangentSpace:ye&&b.normalMapType===ku,metalnessMap:R,roughnessMap:S,anisotropy:j,anisotropyMap:ve,clearcoat:se,clearcoatMap:Ae,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ie,iridescence:ae,iridescenceMap:re,iridescenceThicknessMap:Xe,sheen:oe,sheenColorMap:L,sheenRoughnessMap:ie,specularMap:me,specularColorMap:ce,specularIntensityMap:Ee,transmission:Se,transmissionMap:He,thicknessMap:$e,gradientMap:Fe,opaque:b.transparent===!1&&b.blending===Oi,alphaMap:pe,alphaTest:z,alphaHash:he,combine:b.combine,mapUv:ue&&v(b.map.channel),aoMapUv:tt&&v(b.aoMap.channel),lightMapUv:be&&v(b.lightMap.channel),bumpMapUv:Ce&&v(b.bumpMap.channel),normalMapUv:ye&&v(b.normalMap.channel),displacementMapUv:je&&v(b.displacementMap.channel),emissiveMapUv:De&&v(b.emissiveMap.channel),metalnessMapUv:R&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:ve&&v(b.anisotropyMap.channel),clearcoatMapUv:Ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ke&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:L&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ie&&v(b.sheenRoughnessMap.channel),specularMapUv:me&&v(b.specularMap.channel),specularColorMapUv:ce&&v(b.specularColorMap.channel),specularIntensityMapUv:Ee&&v(b.specularIntensityMap.channel),transmissionMapUv:He&&v(b.transmissionMap.channel),thicknessMapUv:$e&&v(b.thicknessMap.channel),alphaMapUv:pe&&v(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ye||j),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:we,vertexUv3s:qe,pointsUvs:ee.isPoints===!0&&!!k.attributes.uv&&(ue||pe),fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ue&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:de&&b.extensions.derivatives===!0,extensionFragDepth:de&&b.extensions.fragDepth===!0,extensionDrawBuffers:de&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)w.push(N),w.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(w,b),_(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),b.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),b.push(s.mask)}function y(b){const w=g[b.type];let N;if(w){const U=on[w];N=Bu.clone(U.uniforms)}else N=b.uniforms;return N}function A(b,w){let N;for(let U=0,ee=l.length;U<ee;U++){const C=l[U];if(C.cacheKey===w){N=C,++N.usedTimes;break}}return N===void 0&&(N=new Kv(n,w,b,a),l.push(N)),N}function M(b){if(--b.usedTimes===0){const w=l.indexOf(b);l[w]=l[l.length-1],l.pop(),b.destroy()}}function E(b){c.remove(b)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:P}}function t0(){let n=new WeakMap;function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function t(a){n.delete(a)}function i(a,o,s){n.get(a)[o]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function n0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ll(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,g,v,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=p),e++,d}function s(h,f,m,g,v,p){const d=o(h,f,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,g,v,p){const d=o(h,f,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||n0),i.length>1&&i.sort(f||cl),r.length>1&&r.sort(f||cl)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:s,unshift:c,finish:u,sort:l}}function i0(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new ll,n.set(i,[o])):r>=a.length?(o=new ll,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function r0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function a0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let o0=0;function s0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c0(n,e){const t=new r0,i=a0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const a=new D,o=new at,s=new at;function c(u,h){let f=0,m=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let v=0,p=0,d=0,x=0,_=0,y=0,A=0,M=0,E=0,P=0,b=0;u.sort(s0);const w=h===!0?Math.PI:1;for(let U=0,ee=u.length;U<ee;U++){const C=u[U],k=C.color,O=C.intensity,K=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=k.r*O*w,m+=k.g*O*w,g+=k.b*O*w;else if(C.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(C.sh.coefficients[te],O);b++}else if(C.isDirectionalLight){const te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*w),C.castShadow){const F=C.shadow,$=i.get(C);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=C.shadow.matrix,y++}r.directional[v]=te,v++}else if(C.isSpotLight){const te=t.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(k).multiplyScalar(O*w),te.distance=K,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,r.spot[d]=te;const F=C.shadow;if(C.map&&(r.spotLightMap[E]=C.map,E++,F.updateMatrices(C),C.castShadow&&P++),r.spotLightMatrix[d]=F.matrix,C.castShadow){const $=i.get(C);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=J,M++}d++}else if(C.isRectAreaLight){const te=t.get(C);te.color.copy(k).multiplyScalar(O),te.halfWidth.set(C.width*.5,0,0),te.halfHeight.set(0,C.height*.5,0),r.rectArea[x]=te,x++}else if(C.isPointLight){const te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*w),te.distance=C.distance,te.decay=C.decay,C.castShadow){const F=C.shadow,$=i.get(C);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=C.shadow.matrix,A++}r.point[p]=te,p++}else if(C.isHemisphereLight){const te=t.get(C);te.skyColor.copy(C.color).multiplyScalar(O*w),te.groundColor.copy(C.groundColor).multiplyScalar(O*w),r.hemi[_]=te,_++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==v||N.pointLength!==p||N.spotLength!==d||N.rectAreaLength!==x||N.hemiLength!==_||N.numDirectionalShadows!==y||N.numPointShadows!==A||N.numSpotShadows!==M||N.numSpotMaps!==E||N.numLightProbes!==b)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=x,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=M+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=b,N.directionalLength=v,N.pointLength=p,N.spotLength=d,N.rectAreaLength=x,N.hemiLength=_,N.numDirectionalShadows=y,N.numPointShadows=A,N.numSpotShadows=M,N.numSpotMaps=E,N.numLightProbes=b,r.version=o0++)}function l(u,h){let f=0,m=0,g=0,v=0,p=0;const d=h.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const A=r.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),f++}else if(y.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),s.identity(),o.copy(y.matrixWorld),o.premultiply(d),s.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(s),A.halfHeight.applyMatrix4(s),v++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:r}}function ul(n,e){const t=new c0(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(h){i.push(h)}function s(h){r.push(h)}function c(h){t.setup(i,h)}function l(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function l0(n,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let c;return s===void 0?(c=new ul(n,e),t.set(a,[c])):o>=s.length?(c=new ul(n,e),s.push(c)):c=s[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class u0 extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h0 extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p0(n,e,t){let i=new _s;const r=new fe,a=new fe,o=new _t,s=new u0({depthPacking:Yd}),c=new h0,l={},u=t.maxTextureSize,h={[Bn]:kt,[kt]:Bn,[xn]:xn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let d=this.type;this.render=function(M,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Mn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const ee=d!==vn&&this.type===vn,C=d===vn&&this.type!==vn;for(let k=0,O=M.length;k<O;k++){const K=M[k],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const te=J.getFrameExtents();if(r.multiply(te),a.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/te.x),r.x=a.x*te.x,J.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/te.y),r.y=a.y*te.y,J.mapSize.y=a.y)),J.map===null||ee===!0||C===!0){const $=this.type!==vn?{minFilter:Ct,magFilter:Ct}:{};J.map!==null&&J.map.dispose(),J.map=new Hn(r.x,r.y,$),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const F=J.getViewportCount();for(let $=0;$<F;$++){const Q=J.getViewport($);o.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),U.viewport(o),J.updateMatrices(K,$),i=J.getFrustum(),y(E,P,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===vn&&x(J,P),J.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,w,N)};function x(M,E){const P=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,P,m,v,null)}function _(M,E,P,b){let w=null;const N=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)w=N;else if(w=P.isPointLight===!0?c:s,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=w.uuid,ee=E.uuid;let C=l[U];C===void 0&&(C={},l[U]=C);let k=C[ee];k===void 0&&(k=w.clone(),C[ee]=k,E.addEventListener("dispose",A)),w=k}if(w.visible=E.visible,w.wireframe=E.wireframe,b===vn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:h[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=n.properties.get(w);U.light=P}return w}function y(M,E,P,b,w){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===vn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),C=M.material;if(Array.isArray(C)){const k=ee.groups;for(let O=0,K=k.length;O<K;O++){const J=k[O],te=C[J.materialIndex];if(te&&te.visible){const F=_(M,te,b,w);M.onBeforeShadow(n,M,E,P,ee,F,J),n.renderBufferDirect(P,null,ee,F,M,J),M.onAfterShadow(n,M,E,P,ee,F,J)}}}else if(C.visible){const k=_(M,C,b,w);M.onBeforeShadow(n,M,E,P,ee,k,null),n.renderBufferDirect(P,null,ee,k,M,null),M.onAfterShadow(n,M,E,P,ee,k,null)}}const U=M.children;for(let ee=0,C=U.length;ee<C;ee++)y(U[ee],E,P,b,w)}function A(M){M.target.removeEventListener("dispose",A);for(const P in l){const b=l[P],w=M.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function m0(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const he=new _t;let de=null;const Re=new _t(0,0,0,0);return{setMask:function(we){de!==we&&!z&&(n.colorMask(we,we,we,we),de=we)},setLocked:function(we){z=we},setClear:function(we,qe,Ke,pt,St){St===!0&&(we*=pt,qe*=pt,Ke*=pt),he.set(we,qe,Ke,pt),Re.equals(he)===!1&&(n.clearColor(we,qe,Ke,pt),Re.copy(he))},reset:function(){z=!1,de=null,Re.set(-1,0,0,0)}}}function a(){let z=!1,he=null,de=null,Re=null;return{setTest:function(we){we?le(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(we){he!==we&&!z&&(n.depthMask(we),he=we)},setFunc:function(we){if(de!==we){switch(we){case Sd:n.depthFunc(n.NEVER);break;case Ed:n.depthFunc(n.ALWAYS);break;case wd:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case Td:n.depthFunc(n.EQUAL);break;case Cd:n.depthFunc(n.GEQUAL);break;case Rd:n.depthFunc(n.GREATER);break;case kd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=we}},setLocked:function(we){z=we},setClear:function(we){Re!==we&&(n.clearDepth(we),Re=we)},reset:function(){z=!1,he=null,de=null,Re=null}}}function o(){let z=!1,he=null,de=null,Re=null,we=null,qe=null,Ke=null,pt=null,St=null;return{setTest:function(et){z||(et?le(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(et){he!==et&&!z&&(n.stencilMask(et),he=et)},setFunc:function(et,Et,rn){(de!==et||Re!==Et||we!==rn)&&(n.stencilFunc(et,Et,rn),de=et,Re=Et,we=rn)},setOp:function(et,Et,rn){(qe!==et||Ke!==Et||pt!==rn)&&(n.stencilOp(et,Et,rn),qe=et,Ke=Et,pt=rn)},setLocked:function(et){z=et},setClear:function(et){St!==et&&(n.clearStencil(et),St=et)},reset:function(){z=!1,he=null,de=null,Re=null,we=null,qe=null,Ke=null,pt=null,St=null}}}const s=new r,c=new a,l=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,v=[],p=null,d=!1,x=null,_=null,y=null,A=null,M=null,E=null,P=null,b=new We(0,0,0),w=0,N=!1,U=null,ee=null,C=null,k=null,O=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=te>=1):F.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=te>=2);let $=null,Q={};const W=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),V=new _t().fromArray(W),ne=new _t().fromArray(G);function I(z,he,de,Re){const we=new Uint8Array(4),qe=n.createTexture();n.bindTexture(z,qe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<de;Ke++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(he+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return qe}const Z={};Z[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Z[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),le(n.DEPTH_TEST),c.setFunc(ca),De(!1),R(Xs),le(n.CULL_FACE),ye(Mn);function le(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function ue(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function _e(z,he){return m[z]!==he?(n.bindFramebuffer(z,he),m[z]=he,i&&(z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=he),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function B(z,he){let de=v,Re=!1;if(z)if(de=g.get(he),de===void 0&&(de=[],g.set(he,de)),z.isWebGLMultipleRenderTargets){const we=z.texture;if(de.length!==we.length||de[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,Ke=we.length;qe<Ke;qe++)de[qe]=n.COLOR_ATTACHMENT0+qe;de.length=we.length,Re=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,Re=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function tt(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const be={[Kn]:n.FUNC_ADD,[ld]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};if(i)be[Ks]=n.MIN,be[Zs]=n.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(be[Ks]=z.MIN_EXT,be[Zs]=z.MAX_EXT)}const Ce={[hd]:n.ZERO,[dd]:n.ONE,[fd]:n.SRC_COLOR,[zo]:n.SRC_ALPHA,[yd]:n.SRC_ALPHA_SATURATE,[vd]:n.DST_COLOR,[md]:n.DST_ALPHA,[pd]:n.ONE_MINUS_SRC_COLOR,[Io]:n.ONE_MINUS_SRC_ALPHA,[_d]:n.ONE_MINUS_DST_COLOR,[gd]:n.ONE_MINUS_DST_ALPHA,[xd]:n.CONSTANT_COLOR,[bd]:n.ONE_MINUS_CONSTANT_COLOR,[Ad]:n.CONSTANT_ALPHA,[Md]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(z,he,de,Re,we,qe,Ke,pt,St,et){if(z===Mn){d===!0&&(ue(n.BLEND),d=!1);return}if(d===!1&&(le(n.BLEND),d=!0),z!==cd){if(z!==x||et!==N){if((_!==Kn||M!==Kn)&&(n.blendEquation(n.FUNC_ADD),_=Kn,M=Kn),et)switch(z){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $s:n.blendFunc(n.ONE,n.ONE);break;case qs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ys:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $s:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ys:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,A=null,E=null,P=null,b.set(0,0,0),w=0,x=z,N=et}return}we=we||he,qe=qe||de,Ke=Ke||Re,(he!==_||we!==M)&&(n.blendEquationSeparate(be[he],be[we]),_=he,M=we),(de!==y||Re!==A||qe!==E||Ke!==P)&&(n.blendFuncSeparate(Ce[de],Ce[Re],Ce[qe],Ce[Ke]),y=de,A=Re,E=qe,P=Ke),(pt.equals(b)===!1||St!==w)&&(n.blendColor(pt.r,pt.g,pt.b,St),b.copy(pt),w=St),x=z,N=!1}function je(z,he){z.side===xn?ue(n.CULL_FACE):le(n.CULL_FACE);let de=z.side===kt;he&&(de=!de),De(de),z.blending===Oi&&z.transparent===!1?ye(Mn):ye(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),s.setMask(z.colorWrite);const Re=z.stencilWrite;l.setTest(Re),Re&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),j(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(z){U!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),U=z)}function R(z){z!==ad?(le(n.CULL_FACE),z!==ee&&(z===Xs?n.cullFace(n.BACK):z===od?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),ee=z}function S(z){z!==C&&(J&&n.lineWidth(z),C=z)}function j(z,he,de){z?(le(n.POLYGON_OFFSET_FILL),(k!==he||O!==de)&&(n.polygonOffset(he,de),k=he,O=de)):ue(n.POLYGON_OFFSET_FILL)}function se(z){z?le(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function ae(z){z===void 0&&(z=n.TEXTURE0+K-1),$!==z&&(n.activeTexture(z),$=z)}function oe(z,he,de){de===void 0&&($===null?de=n.TEXTURE0+K-1:de=$);let Re=Q[de];Re===void 0&&(Re={type:void 0,texture:void 0},Q[de]=Re),(Re.type!==z||Re.texture!==he)&&($!==de&&(n.activeTexture(de),$=de),n.bindTexture(z,he||Z[z]),Re.type=z,Re.texture=he)}function Se(){const z=Q[$];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){V.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),V.copy(z))}function He(z){ne.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ne.copy(z))}function $e(z,he){let de=h.get(he);de===void 0&&(de=new WeakMap,h.set(he,de));let Re=de.get(z);Re===void 0&&(Re=n.getUniformBlockIndex(he,z.name),de.set(z,Re))}function Fe(z,he){const Re=h.get(he).get(z);u.get(he)!==Re&&(n.uniformBlockBinding(he,Re,z.__bindingPointIndex),u.set(he,Re))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,Q={},m={},g=new WeakMap,v=[],p=null,d=!1,x=null,_=null,y=null,A=null,M=null,E=null,P=null,b=new We(0,0,0),w=0,N=!1,U=null,ee=null,C=null,k=null,O=null,V.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:le,disable:ue,bindFramebuffer:_e,drawBuffers:B,useProgram:tt,setBlending:ye,setMaterial:je,setFlipSided:De,setCullFace:R,setLineWidth:S,setPolygonOffset:j,setScissorTest:se,activeTexture:ae,bindTexture:oe,unbindTexture:Se,compressedTexImage2D:ve,compressedTexImage3D:Ae,texImage2D:me,texImage3D:ce,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:L,texStorage3D:ie,texSubImage2D:ke,texSubImage3D:Ie,compressedTexSubImage2D:re,compressedTexSubImage3D:Xe,scissor:Ee,viewport:He,reset:pe}}function g0(n,e,t,i,r,a,o){const s=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):gr("canvas")}function v(R,S,j,se){let ae=1;if((R.width>se||R.height>se)&&(ae=se/Math.max(R.width,R.height)),ae<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=S?fa:Math.floor,Se=oe(ae*R.width),ve=oe(ae*R.height);h===void 0&&(h=g(Se,ve));const Ae=j?g(Se,ve):h;return Ae.width=Se,Ae.height=ve,Ae.getContext("2d").drawImage(R,0,0,Se,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+ve+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Vo(R.width)&&Vo(R.height)}function d(R){return s?!1:R.wrapS!==Zt||R.wrapT!==Zt||R.minFilter!==Ct&&R.minFilter!==Ft}function x(R,S){return R.generateMipmaps&&S&&R.minFilter!==Ct&&R.minFilter!==Ft}function _(R){n.generateMipmap(R)}function y(R,S,j,se,ae=!1){if(s===!1)return S;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=S;if(S===n.RED&&(j===n.FLOAT&&(oe=n.R32F),j===n.HALF_FLOAT&&(oe=n.R16F),j===n.UNSIGNED_BYTE&&(oe=n.R8)),S===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(oe=n.R8UI),j===n.UNSIGNED_SHORT&&(oe=n.R16UI),j===n.UNSIGNED_INT&&(oe=n.R32UI),j===n.BYTE&&(oe=n.R8I),j===n.SHORT&&(oe=n.R16I),j===n.INT&&(oe=n.R32I)),S===n.RG&&(j===n.FLOAT&&(oe=n.RG32F),j===n.HALF_FLOAT&&(oe=n.RG16F),j===n.UNSIGNED_BYTE&&(oe=n.RG8)),S===n.RGBA){const Se=ae?la:Je.getTransfer(se);j===n.FLOAT&&(oe=n.RGBA32F),j===n.HALF_FLOAT&&(oe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(oe=Se===nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function A(R,S,j){return x(R,j)===!0||R.isFramebufferTexture&&R.minFilter!==Ct&&R.minFilter!==Ft?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function M(R){return R===Ct||R===Js||R===Ha?n.NEAREST:n.LINEAR}function E(R){const S=R.target;S.removeEventListener("dispose",E),b(S),S.isVideoTexture&&u.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),N(S)}function b(R){const S=i.get(R);if(S.__webglInit===void 0)return;const j=R.source,se=f.get(j);if(se){const ae=se[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(R),Object.keys(se).length===0&&f.delete(j)}i.remove(R)}function w(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const j=R.source,se=f.get(j);delete se[S.__cacheKey],o.memory.textures--}function N(R){const S=R.texture,j=i.get(R),se=i.get(S);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(j.__webglFramebuffer[ae]))for(let oe=0;oe<j.__webglFramebuffer[ae].length;oe++)n.deleteFramebuffer(j.__webglFramebuffer[ae][oe]);else n.deleteFramebuffer(j.__webglFramebuffer[ae]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ae])}else{if(Array.isArray(j.__webglFramebuffer))for(let ae=0;ae<j.__webglFramebuffer.length;ae++)n.deleteFramebuffer(j.__webglFramebuffer[ae]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ae=0,oe=S.length;ae<oe;ae++){const Se=i.get(S[ae]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(S[ae])}i.remove(S),i.remove(R)}let U=0;function ee(){U=0}function C(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function O(R,S){const j=i.get(R);if(R.isVideoTexture&&je(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(j,R,S);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+S)}function K(R,S){const j=i.get(R);if(R.version>0&&j.__version!==R.version){V(j,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+S)}function J(R,S){const j=i.get(R);if(R.version>0&&j.__version!==R.version){V(j,R,S);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+S)}function te(R,S){const j=i.get(R);if(R.version>0&&j.__version!==R.version){ne(j,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+S)}const F={[Fo]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},$={[Ct]:n.NEAREST,[Js]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Fd]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},Q={[Zd]:n.NEVER,[rf]:n.ALWAYS,[Jd]:n.LESS,[Pu]:n.LEQUAL,[Qd]:n.EQUAL,[nf]:n.GEQUAL,[ef]:n.GREATER,[tf]:n.NOTEQUAL};function W(R,S,j){if(j?(n.texParameteri(R,n.TEXTURE_WRAP_S,F[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,F[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,F[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[S.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Zt||S.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,M(S.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==Ct&&S.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ct||S.minFilter!==Ha&&S.minFilter!==pr||S.type===Nn&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function G(R,S){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));const se=S.source;let ae=f.get(se);ae===void 0&&(ae={},f.set(se,ae));const oe=k(S);if(oe!==R.__cacheKey){ae[oe]===void 0&&(ae[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[oe].usedTimes++;const Se=ae[R.__cacheKey];Se!==void 0&&(ae[R.__cacheKey].usedTimes--,Se.usedTimes===0&&w(S)),R.__cacheKey=oe,R.__webglTexture=ae[oe].texture}return j}function V(R,S,j){let se=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=n.TEXTURE_3D);const ae=G(R,S),oe=S.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+j);const Se=i.get(oe);if(oe.version!==Se.__version||ae===!0){t.activeTexture(n.TEXTURE0+j);const ve=Je.getPrimaries(Je.workingColorSpace),Ae=S.colorSpace===Wt?null:Je.getPrimaries(S.colorSpace),ke=S.colorSpace===Wt||ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ie=d(S)&&p(S.image)===!1;let re=v(S.image,Ie,!1,r.maxTextureSize);re=De(S,re);const Xe=p(re)||s,L=a.convert(S.format,S.colorSpace);let ie=a.convert(S.type),me=y(S.internalFormat,L,ie,S.colorSpace,S.isVideoTexture);W(se,S,Xe);let ce;const Ee=S.mipmaps,He=s&&S.isVideoTexture!==!0&&me!==Cu,$e=Se.__version===void 0||ae===!0,Fe=A(S,re,Xe);if(S.isDepthTexture)me=n.DEPTH_COMPONENT,s?S.type===Nn?me=n.DEPTH_COMPONENT32F:S.type===In?me=n.DEPTH_COMPONENT24:S.type===Jn?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:S.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Qn&&me===n.DEPTH_COMPONENT&&S.type!==fs&&S.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=In,ie=a.convert(S.type)),S.format===Fi&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,S.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Jn,ie=a.convert(S.type))),$e&&(He?t.texStorage2D(n.TEXTURE_2D,1,me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,me,re.width,re.height,0,L,ie,null));else if(S.isDataTexture)if(Ee.length>0&&Xe){He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,z=Ee.length;pe<z;pe++)ce=Ee[pe],He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,L,ie,ce.data):t.texImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,L,ie,ce.data);S.generateMipmaps=!1}else He?($e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,L,ie,re.data)):t.texImage2D(n.TEXTURE_2D,0,me,re.width,re.height,0,L,ie,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,me,Ee[0].width,Ee[0].height,re.depth);for(let pe=0,z=Ee.length;pe<z;pe++)ce=Ee[pe],S.format!==Jt?L!==null?He?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,re.depth,L,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,me,ce.width,ce.height,re.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,re.depth,L,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,me,ce.width,ce.height,re.depth,0,L,ie,ce.data)}else{He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,z=Ee.length;pe<z;pe++)ce=Ee[pe],S.format!==Jt?L!==null?He?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,L,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,L,ie,ce.data):t.texImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,L,ie,ce.data)}else if(S.isDataArrayTexture)He?($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,L,ie,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,re.width,re.height,re.depth,0,L,ie,re.data);else if(S.isData3DTexture)He?($e&&t.texStorage3D(n.TEXTURE_3D,Fe,me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,L,ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,me,re.width,re.height,re.depth,0,L,ie,re.data);else if(S.isFramebufferTexture){if($e)if(He)t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height);else{let pe=re.width,z=re.height;for(let he=0;he<Fe;he++)t.texImage2D(n.TEXTURE_2D,he,me,pe,z,0,L,ie,null),pe>>=1,z>>=1}}else if(Ee.length>0&&Xe){He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,z=Ee.length;pe<z;pe++)ce=Ee[pe],He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,L,ie,ce):t.texImage2D(n.TEXTURE_2D,pe,me,L,ie,ce);S.generateMipmaps=!1}else He?($e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,L,ie,re)):t.texImage2D(n.TEXTURE_2D,0,me,L,ie,re);x(S,Xe)&&_(se),Se.__version=oe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ne(R,S,j){if(S.image.length!==6)return;const se=G(R,S),ae=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+j);const oe=i.get(ae);if(ae.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+j);const Se=Je.getPrimaries(Je.workingColorSpace),ve=S.colorSpace===Wt?null:Je.getPrimaries(S.colorSpace),Ae=S.colorSpace===Wt||Se===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ke=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,re=[];for(let pe=0;pe<6;pe++)!ke&&!Ie?re[pe]=v(S.image[pe],!1,!0,r.maxCubemapSize):re[pe]=Ie?S.image[pe].image:S.image[pe],re[pe]=De(S,re[pe]);const Xe=re[0],L=p(Xe)||s,ie=a.convert(S.format,S.colorSpace),me=a.convert(S.type),ce=y(S.internalFormat,ie,me,S.colorSpace),Ee=s&&S.isVideoTexture!==!0,He=oe.__version===void 0||se===!0;let $e=A(S,Xe,L);W(n.TEXTURE_CUBE_MAP,S,L);let Fe;if(ke){Ee&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,Xe.width,Xe.height);for(let pe=0;pe<6;pe++){Fe=re[pe].mipmaps;for(let z=0;z<Fe.length;z++){const he=Fe[z];S.format!==Jt?ie!==null?Ee?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z,0,0,he.width,he.height,ie,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z,ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z,0,0,he.width,he.height,ie,me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z,ce,he.width,he.height,0,ie,me,he.data)}}}else{Fe=S.mipmaps,Ee&&He&&(Fe.length>0&&$e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,re[0].width,re[0].height));for(let pe=0;pe<6;pe++)if(Ie){Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,re[pe].width,re[pe].height,ie,me,re[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ce,re[pe].width,re[pe].height,0,ie,me,re[pe].data);for(let z=0;z<Fe.length;z++){const de=Fe[z].image[pe].image;Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z+1,0,0,de.width,de.height,ie,me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z+1,ce,de.width,de.height,0,ie,me,de.data)}}else{Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie,me,re[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ce,ie,me,re[pe]);for(let z=0;z<Fe.length;z++){const he=Fe[z];Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z+1,0,0,ie,me,he.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,z+1,ce,ie,me,he.image[pe])}}}x(S,L)&&_(n.TEXTURE_CUBE_MAP),oe.__version=ae.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function I(R,S,j,se,ae,oe){const Se=a.convert(j.format,j.colorSpace),ve=a.convert(j.type),Ae=y(j.internalFormat,Se,ve,j.colorSpace);if(!i.get(S).__hasExternalTextures){const Ie=Math.max(1,S.width>>oe),re=Math.max(1,S.height>>oe);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,oe,Ae,Ie,re,S.depth,0,Se,ve,null):t.texImage2D(ae,oe,Ae,Ie,re,0,Se,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ye(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ae,i.get(j).__webglTexture,0,Ce(S)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ae,i.get(j).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(R,S,j){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let se=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||ye(S)){const ae=S.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Nn?se=n.DEPTH_COMPONENT32F:ae.type===In&&(se=n.DEPTH_COMPONENT24));const oe=Ce(S);ye(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,se,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,se,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const se=Ce(S);j&&ye(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,S.width,S.height):ye(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const se=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0;ae<se.length;ae++){const oe=se[ae],Se=a.convert(oe.format,oe.colorSpace),ve=a.convert(oe.type),Ae=y(oe.internalFormat,Se,ve,oe.colorSpace),ke=Ce(S);j&&ye(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,Ae,S.width,S.height):ye(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ke,Ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),O(S.depthTexture,0);const se=i.get(S.depthTexture).__webglTexture,ae=Ce(S);if(S.depthTexture.format===Qn)ye(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(S.depthTexture.format===Fi)ye(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ue(R){const S=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,R)}else if(j){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]=n.createRenderbuffer(),Z(S.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Z(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(R,S,j){const se=i.get(R);S!==void 0&&I(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ue(R)}function B(R){const S=R.texture,j=i.get(R),se=i.get(S);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=S.version,o.memory.textures++);const ae=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,Se=p(R)||s;if(ae){j.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(s&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ve]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)j.__webglFramebuffer[ve][Ae]=n.createFramebuffer()}else j.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(s&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)j.__webglFramebuffer[ve]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){const ve=R.texture;for(let Ae=0,ke=ve.length;Ae<ke;Ae++){const Ie=i.get(ve[Ae]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&R.samples>0&&ye(R)===!1){const ve=oe?S:[S];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const ke=ve[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const Ie=a.convert(ke.format,ke.colorSpace),re=a.convert(ke.type),Xe=y(ke.internalFormat,Ie,re,ke.colorSpace,R.isXRRenderTarget===!0),L=Ce(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,L,Xe,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(j.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),W(n.TEXTURE_CUBE_MAP,S,Se);for(let ve=0;ve<6;ve++)if(s&&S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)I(j.__webglFramebuffer[ve][Ae],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ae);else I(j.__webglFramebuffer[ve],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(S,Se)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ve=R.texture;for(let Ae=0,ke=ve.length;Ae<ke;Ae++){const Ie=ve[Ae],re=i.get(Ie);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),W(n.TEXTURE_2D,Ie,Se),I(j.__webglFramebuffer,R,Ie,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),x(Ie,Se)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(s?ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,se.__webglTexture),W(ve,S,Se),s&&S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)I(j.__webglFramebuffer[Ae],R,S,n.COLOR_ATTACHMENT0,ve,Ae);else I(j.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ve,0);x(S,Se)&&_(ve),t.unbindTexture()}R.depthBuffer&&ue(R)}function tt(R){const S=p(R)||s,j=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ae=j.length;se<ae;se++){const oe=j[se];if(x(oe,S)){const Se=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(oe).__webglTexture;t.bindTexture(Se,ve),_(Se),t.unbindTexture()}}}function be(R){if(s&&R.samples>0&&ye(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],j=R.width,se=R.height;let ae=n.COLOR_BUFFER_BIT;const oe=[],Se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),Ae=R.isWebGLMultipleRenderTargets===!0;if(Ae)for(let ke=0;ke<S.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ke=0;ke<S.length;ke++){oe.push(n.COLOR_ATTACHMENT0+ke),R.depthBuffer&&oe.push(Se);const Ie=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ie===!1&&(R.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ke]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),Ae){const re=i.get(S[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,j,se,0,0,j,se,ae,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let ke=0;ke<S.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ve.__webglColorRenderbuffer[ke]);const Ie=i.get(S[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ce(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const S=i.get(R);return s&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function je(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function De(R,S){const j=R.colorSpace,se=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Go||j!==wn&&j!==Wt&&(Je.getTransfer(j)===nt?s===!1?e.has("EXT_sRGB")===!0&&se===Jt?(R.format=Go,R.minFilter=Ft,R.generateMipmaps=!1):S=Du.sRGBToLinear(S):(se!==Jt||ae!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}this.allocateTextureUnit=C,this.resetTextureUnits=ee,this.setTexture2D=O,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=_e,this.setupRenderTarget=B,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=I,this.useMultisampledRTT=ye}function v0(n,e,t){const i=t.isWebGL2;function r(a,o=Wt){let s;const c=Je.getTransfer(o);if(a===Fn)return n.UNSIGNED_BYTE;if(a===Mu)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Su)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Bd)return n.BYTE;if(a===Hd)return n.SHORT;if(a===fs)return n.UNSIGNED_SHORT;if(a===Au)return n.INT;if(a===In)return n.UNSIGNED_INT;if(a===Nn)return n.FLOAT;if(a===Ui)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Gd)return n.ALPHA;if(a===Jt)return n.RGBA;if(a===Vd)return n.LUMINANCE;if(a===Wd)return n.LUMINANCE_ALPHA;if(a===Qn)return n.DEPTH_COMPONENT;if(a===Fi)return n.DEPTH_STENCIL;if(a===Go)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===jd)return n.RED;if(a===Eu)return n.RED_INTEGER;if(a===Xd)return n.RG;if(a===wu)return n.RG_INTEGER;if(a===Tu)return n.RGBA_INTEGER;if(a===Ga||a===Va||a===Wa||a===ja)if(c===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qs||a===ec||a===tc||a===nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Qs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cu)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ic||a===rc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===ic)return c===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===rc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ac||a===oc||a===sc||a===cc||a===lc||a===uc||a===hc||a===dc||a===fc||a===pc||a===mc||a===gc||a===vc||a===_c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ac)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===oc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===sc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===lc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===uc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vc)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_c)return c===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xa||a===yc||a===xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Xa)return c===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===$d||a===bc||a===Ac||a===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(a===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jn?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class _0 extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Pi=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const y0={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return s!==null&&(s.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class x0 extends nn{constructor(e,t){super();const i=this;let r=null,a=1,o=null,s="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const v=t.getContextAttributes();let p=null,d=null;const x=[],_=[],y=new fe;let A=null;const M=new Vt;M.layers.enable(1),M.viewport=new _t;const E=new Vt;E.layers.enable(2),E.viewport=new _t;const P=[M,E],b=new _0;b.layers.enable(1),b.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let G=x[W];return G===void 0&&(G=new go,x[W]=G),G.getTargetRaySpace()},this.getControllerGrip=function(W){let G=x[W];return G===void 0&&(G=new go,x[W]=G),G.getGripSpace()},this.getHand=function(W){let G=x[W];return G===void 0&&(G=new go,x[W]=G),G.getHandSpace()};function U(W){const G=_.indexOf(W.inputSource);if(G===-1)return;const V=x[G];V!==void 0&&(V.update(W.inputSource,W.frame,l||o),V.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",C);for(let W=0;W<x.length;W++){const G=_[W];G!==null&&(_[W]=null,x[W].disconnect(G))}w=null,N=null,e.setRenderTarget(p),m=null,f=null,h=null,r=null,d=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let G=null,V=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=v.stencil?Fi:Qn,V=v.stencil?Jn:In);const I={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(I),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Hn(f.textureWidth,f.textureHeight,{format:Jt,type:Fn,depthTexture:new Wu(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Z=e.properties.get(d);Z.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(s),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(W){for(let G=0;G<W.removed.length;G++){const V=W.removed[G],ne=_.indexOf(V);ne>=0&&(_[ne]=null,x[ne].disconnect(V))}for(let G=0;G<W.added.length;G++){const V=W.added[G];let ne=_.indexOf(V);if(ne===-1){for(let Z=0;Z<x.length;Z++)if(Z>=_.length){_.push(V),ne=Z;break}else if(_[Z]===null){_[Z]=V,ne=Z;break}if(ne===-1)break}const I=x[ne];I&&I.connect(V)}}const k=new D,O=new D;function K(W,G,V){k.setFromMatrixPosition(G.matrixWorld),O.setFromMatrixPosition(V.matrixWorld);const ne=k.distanceTo(O),I=G.projectionMatrix.elements,Z=V.projectionMatrix.elements,le=I[14]/(I[10]-1),ue=I[14]/(I[10]+1),_e=(I[9]+1)/I[5],B=(I[9]-1)/I[5],tt=(I[8]-1)/I[0],be=(Z[8]+1)/Z[0],Ce=le*tt,ye=le*be,je=ne/(-tt+be),De=je*-tt;G.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const R=le+je,S=ue+je,j=Ce-De,se=ye+(ne-De),ae=_e*ue/S*R,oe=B*ue/S*R;W.projectionMatrix.makePerspective(j,se,ae,oe,R,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function J(W,G){G===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(G.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;b.near=E.near=M.near=W.near,b.far=E.far=M.far=W.far,(w!==b.near||N!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,N=b.far);const G=W.parent,V=b.cameras;J(b,G);for(let ne=0;ne<V.length;ne++)J(V[ne],G);V.length===2?K(b,M,E):b.projectionMatrix.copy(M.projectionMatrix),te(W,b,G)};function te(W,G,V){V===null?W.matrix.copy(G.matrixWorld):(W.matrix.copy(V.matrixWorld),W.matrix.invert(),W.matrix.multiply(G.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(G.projectionMatrix),W.projectionMatrixInverse.copy(G.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=mr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let F=null;function $(W,G){if(u=G.getViewerPose(l||o),g=G,u!==null){const V=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ne=!1;V.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let I=0;I<V.length;I++){const Z=V[I];let le=null;if(m!==null)le=m.getViewport(Z);else{const _e=h.getViewSubImage(f,Z);le=_e.viewport,I===0&&(e.setRenderTargetTextures(d,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(d))}let ue=P[I];ue===void 0&&(ue=new Vt,ue.layers.enable(I),ue.viewport=new _t,P[I]=ue),ue.matrix.fromArray(Z.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Z.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(le.x,le.y,le.width,le.height),I===0&&(b.matrix.copy(ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(ue)}}for(let V=0;V<x.length;V++){const ne=_[V],I=x[V];ne!==null&&I!==void 0&&I.update(ne,G,l||o)}F&&F(W,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}const Q=new Vu;Q.setAnimationLoop($),this.setAnimationLoop=function(W){F=W},this.dispose=function(){}}}function b0(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Fu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),h(p,d)):d.isMeshPhongMaterial?(a(p,d),u(p,d)):d.isMeshStandardMaterial?(a(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(a(p,d),g(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),v(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&s(p,d)):d.isPointsMaterial?c(p,d,x,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function s(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,x,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=_*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A0(n,e,t,i){let r={},a={},o=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function l(x,_){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const A=_.program;i.updateUBOMapping(x,A);const M=e.render.frame;a[x.id]!==M&&(f(x),a[x.id]=M)}function u(x){const _=h();x.__bindingPointIndex=_;const y=n.createBuffer(),A=x.__size,M=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function h(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const _=r[x.id],y=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,E=y.length;M<E;M++){const P=Array.isArray(y[M])?y[M]:[y[M]];for(let b=0,w=P.length;b<w;b++){const N=P[b];if(m(N,M,b,A)===!0){const U=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value];let C=0;for(let k=0;k<ee.length;k++){const O=ee[k],K=v(O);typeof O=="number"||typeof O=="boolean"?(N.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,U+C,N.__data)):O.isMatrix3?(N.__data[0]=O.elements[0],N.__data[1]=O.elements[1],N.__data[2]=O.elements[2],N.__data[3]=0,N.__data[4]=O.elements[3],N.__data[5]=O.elements[4],N.__data[6]=O.elements[5],N.__data[7]=0,N.__data[8]=O.elements[6],N.__data[9]=O.elements[7],N.__data[10]=O.elements[8],N.__data[11]=0):(O.toArray(N.__data,C),C+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,_,y,A){const M=x.value,E=_+"_"+y;if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:A[E]=M.clone(),!0;{const P=A[E];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return A[E]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(x){const _=x.uniforms;let y=0;const A=16;for(let E=0,P=_.length;E<P;E++){const b=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,N=b.length;w<N;w++){const U=b[w],ee=Array.isArray(U.value)?U.value:[U.value];for(let C=0,k=ee.length;C<k;C++){const O=ee[C],K=v(O),J=y%A;J!==0&&A-J<K.boundary&&(y+=A-J),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=K.storage}}}const M=y%A;return M>0&&(y+=A-M),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(x){const _=x.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete a[_.id]}function d(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},a={}}return{bind:c,update:l,dispose:d}}class Ku{constructor(e={}){const{canvas:t=yf(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const _=this;let y=!1,A=0,M=0,E=null,P=-1,b=null;const w=new _t,N=new _t;let U=null;const ee=new We(0);let C=0,k=t.width,O=t.height,K=1,J=null,te=null;const F=new _t(0,0,k,O),$=new _t(0,0,k,O);let Q=!1;const W=new _s;let G=!1,V=!1,ne=null;const I=new at,Z=new fe,le=new D,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return E===null?K:1}let B=i;function tt(T,H){for(let q=0;q<T.length;q++){const Y=T[q],X=t.getContext(Y,H);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hs}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",he,!1),B===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),B=tt(H,T),B===null)throw tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Ce,ye,je,De,R,S,j,se,ae,oe,Se,ve,Ae,ke,Ie,re,Xe,L,ie,me,ce,Ee,He;function $e(){be=new Lg(B),Ce=new wg(B,be,e),be.init(Ce),ce=new v0(B,be,Ce),ye=new m0(B,be,Ce),je=new zg(B),De=new t0,R=new g0(B,be,ye,De,Ce,ce,je),S=new Cg(_),j=new Pg(_),se=new Vf(B,Ce),Ee=new Sg(B,be,se,Ce),ae=new Dg(B,se,je,Ee),oe=new Fg(B,ae,se,je),L=new Ug(B,Ce,R),Ie=new Tg(De),Se=new e0(_,S,j,be,Ce,Ee,Ie),ve=new b0(_,De),Ae=new i0,ke=new l0(be,Ce),Xe=new Mg(_,S,j,ye,oe,f,c),re=new p0(_,oe,Ce),He=new A0(B,je,Ce,ye),ie=new Eg(B,be,je,Ce),me=new Og(B,be,je,Ce),je.programs=Se.programs,_.capabilities=Ce,_.extensions=be,_.properties=De,_.renderLists=Ae,_.shadowMap=re,_.state=ye,_.info=je}$e();const Fe=new x0(_,B);this.xr=Fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(k,O,!1))},this.getSize=function(T){return T.set(k,O)},this.setSize=function(T,H,q=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,O=H,t.width=Math.floor(T*K),t.height=Math.floor(H*K),q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(k*K,O*K).floor()},this.setDrawingBufferSize=function(T,H,q){k=T,O=H,K=q,t.width=Math.floor(T*q),t.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,H,q,Y){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,q,Y),ye.viewport(w.copy(F).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,H,q,Y){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,H,q,Y),ye.scissor(N.copy($).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){ye.setScissorTest(Q=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,H=!0,q=!0){let Y=0;if(T){let X=!1;if(E!==null){const xe=E.texture.format;X=xe===Tu||xe===wu||xe===Eu}if(X){const xe=E.texture.type,Te=xe===Fn||xe===In||xe===fs||xe===Jn||xe===Mu||xe===Su,Le=Xe.getClearColor(),Oe=Xe.getClearAlpha(),Be=Le.r,ze=Le.g,Ne=Le.b;Te?(m[0]=Be,m[1]=ze,m[2]=Ne,m[3]=Oe,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Be,g[1]=ze,g[2]=Ne,g[3]=Oe,B.clearBufferiv(B.COLOR,0,g))}else Y|=B.COLOR_BUFFER_BIT}H&&(Y|=B.DEPTH_BUFFER_BIT),q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ae.dispose(),ke.dispose(),De.dispose(),S.dispose(),j.dispose(),oe.dispose(),Ee.dispose(),He.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",St),Fe.removeEventListener("sessionend",et),ne&&(ne.dispose(),ne=null),Et.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=je.autoReset,H=re.enabled,q=re.autoUpdate,Y=re.needsUpdate,X=re.type;$e(),je.autoReset=T,re.enabled=H,re.autoUpdate=q,re.needsUpdate=Y,re.type=X}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const H=T.target;H.removeEventListener("dispose",de),Re(H)}function Re(T){we(T),De.remove(T)}function we(T){const H=De.get(T).programs;H!==void 0&&(H.forEach(function(q){Se.releaseProgram(q)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,Y,X,xe){H===null&&(H=ue);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Le=td(T,H,q,Y,X);ye.setMaterial(Y,Te);let Oe=q.index,Be=1;if(Y.wireframe===!0){if(Oe=ae.getWireframeAttribute(q),Oe===void 0)return;Be=2}const ze=q.drawRange,Ne=q.attributes.position;let ct=ze.start*Be,zt=(ze.start+ze.count)*Be;xe!==null&&(ct=Math.max(ct,xe.start*Be),zt=Math.min(zt,(xe.start+xe.count)*Be)),Oe!==null?(ct=Math.max(ct,0),zt=Math.min(zt,Oe.count)):Ne!=null&&(ct=Math.max(ct,0),zt=Math.min(zt,Ne.count));const mt=zt-ct;if(mt<0||mt===1/0)return;Ee.setup(X,Y,Le,q,Oe);let ln,ot=ie;if(Oe!==null&&(ln=se.get(Oe),ot=me,ot.setIndex(ln)),X.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*_e()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(X.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),ye.setLineWidth(Ge*_e()),X.isLineSegments?ot.setMode(B.LINES):X.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else X.isPoints?ot.setMode(B.POINTS):X.isSprite&&ot.setMode(B.TRIANGLES);if(X.isBatchedMesh)ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)ot.renderInstances(ct,mt,X.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Na=Math.min(q.instanceCount,Ge);ot.renderInstances(ct,mt,Na)}else ot.render(ct,mt)};function qe(T,H,q){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,Mr(T,H,q),T.side=Bn,T.needsUpdate=!0,Mr(T,H,q),T.side=xn):Mr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=ke.get(q),p.init(),x.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(_._useLegacyLights);const Y=new Set;return T.traverse(function(X){const xe=X.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Le=xe[Te];qe(Le,q,X),Y.add(Le)}else qe(xe,q,X),Y.add(xe)}),x.pop(),p=null,Y},this.compileAsync=function(T,H,q=null){const Y=this.compile(T,H,q);return new Promise(X=>{function xe(){if(Y.forEach(function(Te){De.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){X(T);return}setTimeout(xe,10)}be.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ke=null;function pt(T){Ke&&Ke(T)}function St(){Et.stop()}function et(){Et.start()}const Et=new Vu;Et.setAnimationLoop(pt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){Ke=T,Fe.setAnimationLoop(T),T===null?Et.stop():Et.start()},Fe.addEventListener("sessionstart",St),Fe.addEventListener("sessionend",et),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(H),H=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,E),p=ke.get(T,x.length),p.init(),x.push(p),I.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W.setFromProjectionMatrix(I),V=this.localClippingEnabled,G=Ie.init(this.clippingPlanes,V),v=Ae.get(T,d.length),v.init(),d.push(v),rn(T,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(J,te),this.info.render.frame++,G===!0&&Ie.beginShadows();const q=p.state.shadowsArray;if(re.render(q,T,H),G===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(v,T),p.setupLights(_._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let X=0,xe=Y.length;X<xe;X++){const Te=Y[X];Bs(v,T,Te,Te.viewport)}}else Bs(v,T,H);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(_,T,H),Ee.resetDefaultState(),P=-1,b=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function rn(T,H,q,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){Y&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(I);const Te=oe.update(T),Le=T.material;Le.visible&&v.push(T,Te,Le,q,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Te=oe.update(T),Le=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),le.copy(Te.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(I)),Array.isArray(Le)){const Oe=Te.groups;for(let Be=0,ze=Oe.length;Be<ze;Be++){const Ne=Oe[Be],ct=Le[Ne.materialIndex];ct&&ct.visible&&v.push(T,Te,ct,q,le.z,Ne)}}else Le.visible&&v.push(T,Te,Le,q,le.z,null)}}const xe=T.children;for(let Te=0,Le=xe.length;Te<Le;Te++)rn(xe[Te],H,q,Y)}function Bs(T,H,q,Y){const X=T.opaque,xe=T.transmissive,Te=T.transparent;p.setupLightsView(q),G===!0&&Ie.setGlobalState(_.clippingPlanes,q),xe.length>0&&ed(X,xe,H,q),Y&&ye.viewport(w.copy(Y)),X.length>0&&Ar(X,H,q),xe.length>0&&Ar(xe,H,q),Te.length>0&&Ar(Te,H,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ed(T,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const xe=Ce.isWebGL2;ne===null&&(ne=new Hn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ui:Fn,minFilter:pr,samples:xe?4:0})),_.getDrawingBufferSize(Z),xe?ne.setSize(Z.x,Z.y):ne.setSize(fa(Z.x),fa(Z.y));const Te=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(ee),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Le=_.toneMapping;_.toneMapping=Un,Ar(T,q,Y),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne);let Oe=!1;for(let Be=0,ze=H.length;Be<ze;Be++){const Ne=H[Be],ct=Ne.object,zt=Ne.geometry,mt=Ne.material,ln=Ne.group;if(mt.side===xn&&ct.layers.test(Y.layers)){const ot=mt.side;mt.side=kt,mt.needsUpdate=!0,Hs(ct,q,Y,zt,mt,ln),mt.side=ot,mt.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne)),_.setRenderTarget(Te),_.setClearColor(ee,C),_.toneMapping=Le}function Ar(T,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const Te=T[X],Le=Te.object,Oe=Te.geometry,Be=Y===null?Te.material:Y,ze=Te.group;Le.layers.test(q.layers)&&Hs(Le,H,q,Oe,Be,ze)}}function Hs(T,H,q,Y,X,xe){T.onBeforeRender(_,H,q,Y,X,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(_,H,q,Y,T,xe),X.transparent===!0&&X.side===xn&&X.forceSinglePass===!1?(X.side=kt,X.needsUpdate=!0,_.renderBufferDirect(q,H,Y,X,T,xe),X.side=Bn,X.needsUpdate=!0,_.renderBufferDirect(q,H,Y,X,T,xe),X.side=xn):_.renderBufferDirect(q,H,Y,X,T,xe),T.onAfterRender(_,H,q,Y,X,xe)}function Mr(T,H,q){H.isScene!==!0&&(H=ue);const Y=De.get(T),X=p.state.lights,xe=p.state.shadowsArray,Te=X.state.version,Le=Se.getParameters(T,X.state,xe,H,q),Oe=Se.getProgramCacheKey(Le);let Be=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?j:S).get(T.envMap||Y.environment),Be===void 0&&(T.addEventListener("dispose",de),Be=new Map,Y.programs=Be);let ze=Be.get(Oe);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Te)return Vs(T,Le),ze}else Le.uniforms=Se.getUniforms(T),T.onBuild(q,Le,_),T.onBeforeCompile(Le,_),ze=Se.acquireProgram(Le,Oe),Be.set(Oe,ze),Y.uniforms=Le.uniforms;const Ne=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Ie.uniform),Vs(T,Le),Y.needsLights=id(T),Y.lightsStateVersion=Te,Y.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function Gs(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ia.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Vs(T,H){const q=De.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function td(T,H,q,Y,X){H.isScene!==!0&&(H=ue),R.resetTextureUnits();const xe=H.fog,Te=Y.isMeshStandardMaterial?H.environment:null,Le=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:wn,Oe=(Y.isMeshStandardMaterial?j:S).get(Y.envMap||Te),Be=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,zt=!!q.morphAttributes.color;let mt=Un;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(mt=_.toneMapping);const ln=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=ln!==void 0?ln.length:0,Ge=De.get(Y),Na=p.state.lights;if(G===!0&&(V===!0||T!==b)){const Bt=T===b&&Y.id===P;Ie.setState(Y,T,Bt)}let st=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Na.state.version||Ge.outputColorSpace!==Le||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||Ge.envMap!==Oe||Y.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ie.numPlanes||Ge.numIntersection!==Ie.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==ze||Ge.morphTargets!==Ne||Ge.morphNormals!==ct||Ge.morphColors!==zt||Ge.toneMapping!==mt||Ce.isWebGL2===!0&&Ge.morphTargetsCount!==ot)&&(st=!0):(st=!0,Ge.__version=Y.version);let Vn=Ge.currentProgram;st===!0&&(Vn=Mr(Y,H,X));let Ws=!1,Wi=!1,Ua=!1;const xt=Vn.getUniforms(),Wn=Ge.uniforms;if(ye.useProgram(Vn.program)&&(Ws=!0,Wi=!0,Ua=!0),Y.id!==P&&(P=Y.id,Wi=!0),Ws||b!==T){xt.setValue(B,"projectionMatrix",T.projectionMatrix),xt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Bt=xt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,le.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&xt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Wi=!0,Ua=!0)}if(X.isSkinnedMesh){xt.setOptional(B,X,"bindMatrix"),xt.setOptional(B,X,"bindMatrixInverse");const Bt=X.skeleton;Bt&&(Ce.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),xt.setValue(B,"boneTexture",Bt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(xt.setOptional(B,X,"batchingTexture"),xt.setValue(B,"batchingTexture",X._matricesTexture,R));const Fa=q.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&Ce.isWebGL2===!0)&&L.update(X,q,Vn),(Wi||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,xt.setValue(B,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wn.envMap.value=Oe,Wn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Wi&&(xt.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&nd(Wn,Ua),xe&&Y.fog===!0&&ve.refreshFogUniforms(Wn,xe),ve.refreshMaterialUniforms(Wn,Y,K,O,ne),ia.upload(B,Gs(Ge),Wn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(B,Gs(Ge),Wn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xt.setValue(B,"center",X.center),xt.setValue(B,"modelViewMatrix",X.modelViewMatrix),xt.setValue(B,"normalMatrix",X.normalMatrix),xt.setValue(B,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Bt=Y.uniformsGroups;for(let Ba=0,rd=Bt.length;Ba<rd;Ba++)if(Ce.isWebGL2){const js=Bt[Ba];He.update(js,Vn),He.bind(js,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function nd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function id(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,H,q){De.get(T.texture).__webglTexture=H,De.get(T.depthTexture).__webglTexture=q;const Y=De.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const q=De.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){E=T,A=H,M=q;let Y=!0,X=null,xe=!1,Te=!1;if(T){const Oe=De.get(T);Oe.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1):Oe.__webglFramebuffer===void 0?R.setupRenderTarget(T):Oe.__hasExternalTextures&&R.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const ze=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?X=ze[H][q]:X=ze[H],xe=!0):Ce.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?X=De.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[q]:X=ze,w.copy(T.viewport),N.copy(T.scissor),U=T.scissorTest}else w.copy(F).multiplyScalar(K).floor(),N.copy($).multiplyScalar(K).floor(),U=Q;if(ye.bindFramebuffer(B.FRAMEBUFFER,X)&&Ce.drawBuffers&&Y&&ye.drawBuffers(T,X),ye.viewport(w),ye.scissor(N),ye.setScissorTest(U),xe){const Oe=De.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,q)}else if(Te){const Oe=De.get(T.texture),Be=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,q||0,Be)}P=-1},this.readRenderTargetPixels=function(T,H,q,Y,X,xe,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){ye.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Oe=T.texture,Be=Oe.format,ze=Oe.type;if(Be!==Jt&&ce.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=ze===Ui&&(be.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&be.has("EXT_color_buffer_float"));if(ze!==Fn&&ce.convert(ze)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Nn&&(Ce.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-X&&B.readPixels(H,q,Y,X,ce.convert(Be),ce.convert(ze),xe)}finally{const Oe=E!==null?De.get(E).__webglFramebuffer:null;ye.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(T,H,q=0){const Y=Math.pow(2,-q),X=Math.floor(H.image.width*Y),xe=Math.floor(H.image.height*Y);R.setTexture2D(H,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,T.x,T.y,X,xe),ye.unbindTexture()},this.copyTextureToTexture=function(T,H,q,Y=0){const X=H.image.width,xe=H.image.height,Te=ce.convert(q.format),Le=ce.convert(q.type);R.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,X,xe,Te,Le,H.image.data):H.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Te,H.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,Te,Le,H.image),Y===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q,Y,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Oe=ce.convert(Y.format),Be=ce.convert(Y.type);let ze;if(Y.isData3DTexture)R.setTexture3D(Y,0),ze=B.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),ze=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ne=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),zt=B.getParameter(B.UNPACK_SKIP_PIXELS),mt=B.getParameter(B.UNPACK_SKIP_ROWS),ln=B.getParameter(B.UNPACK_SKIP_IMAGES),ot=q.isCompressedTexture?q.mipmaps[X]:q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(ze,X,H.x,H.y,H.z,xe,Te,Le,Oe,Be,ot.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(ze,X,H.x,H.y,H.z,xe,Te,Le,Oe,ot.data)):B.texSubImage3D(ze,X,H.x,H.y,H.z,xe,Te,Le,Oe,Be,ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,mt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ln),X===0&&Y.generateMipmaps&&B.generateMipmap(ze),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){A=0,M=0,E=null,ye.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ps?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ut?ei:Ru}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?ut:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class M0 extends Ku{}M0.prototype.isWebGL1Renderer=!0;class S0 extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class E0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new D;class pa{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zu extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ai;const Yi=new D,Mi=new D,Si=new D,Ei=new fe,Ki=new fe,Ju=new at,Xr=new D,Zi=new D,$r=new D,hl=new fe,vo=new fe,dl=new fe;class w0 extends yt{constructor(e=new Zu){if(super(),this.isSprite=!0,this.type="Sprite",Ai===void 0){Ai=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new E0(t,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new pa(i,3,0,!1)),Ai.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=Ai,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),Ju.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const o=this.center;qr(Xr.set(-.5,-.5,0),Si,o,Mi,r,a),qr(Zi.set(.5,-.5,0),Si,o,Mi,r,a),qr($r.set(.5,.5,0),Si,o,Mi,r,a),hl.set(0,0),vo.set(1,0),dl.set(1,1);let s=e.ray.intersectTriangle(Xr,Zi,$r,!1,Yi);if(s===null&&(qr(Zi.set(-.5,.5,0),Si,o,Mi,r,a),vo.set(0,1),s=e.ray.intersectTriangle(Xr,$r,Zi,!1,Yi),s===null))return;const c=e.ray.origin.distanceTo(Yi);c<e.near||c>e.far||t.push({distance:c,point:Yi.clone(),uv:Gt.getInterpolation(Yi,Xr,Zi,$r,hl,vo,dl,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(n,e,t,i,r,a){Ei.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ki.x=a*Ei.x-r*Ei.y,Ki.y=r*Ei.x+a*Ei.y):Ki.copy(Ei),n.copy(e),n.x+=Ki.x,n.y+=Ki.y,n.applyMatrix4(Ju)}class Qu extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fl=new D,pl=new D,ml=new at,_o=new Ca,Yr=new Ta;class T0 extends yt{constructor(e=new Dt,t=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)fl.fromBufferAttribute(t,r-1),pl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=a,e.ray.intersectsSphere(Yr)===!1)return;ml.copy(r).invert(),_o.copy(e.ray).applyMatrix4(ml);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const d=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=m){const A=g.getX(_),M=g.getX(_+1);if(l.fromBufferAttribute(p,A),u.fromBufferAttribute(p,M),_o.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let _=d,y=x-1;_<y;_+=m){if(l.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),_o.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let s=0,c=a-1,l;for(;s<=c;)if(r=Math.floor(s+(c-s)/2),l=i[r]-o,l<0)s=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(a-1);const u=i[r],f=i[r+1]-u,m=(o-u)/f;return(r+m)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),c=t||(o.isVector2?new fe:new D);return c.copy(s).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],a=[],o=[],s=new D,c=new at;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new D)}a[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),o[m]=o[m-1].clone(),s.crossVectors(r[m-1],r[m]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(vt(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(c.makeRotationAxis(s,g))}o[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos(vt(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class eh extends Cn{constructor(e=0,t=0,i=1,r=1,a=0,o=Math.PI*2,s=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=c}getPoint(e,t){const i=t||new fe,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class C0 extends eh{constructor(e,t,i,r,a,o){super(e,t,i,i,r,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function As(){let n=0,e=0,t=0,i=0;function r(a,o,s,c){n=a,e=s,t=-3*a+3*o-2*s-c,i=2*a-2*o+s+c}return{initCatmullRom:function(a,o,s,c,l){r(o,s,l*(s-a),l*(c-o))},initNonuniformCatmullRom:function(a,o,s,c,l,u,h){let f=(o-a)/l-(s-a)/(l+u)+(s-o)/u,m=(s-o)/u-(c-o)/(u+h)+(c-s)/h;f*=u,m*=u,r(o,s,f,m)},calc:function(a){const o=a*a,s=o*a;return n+e*a+t*o+i*s}}}const Kr=new D,yo=new As,xo=new As,bo=new As;class R0 extends Cn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),c=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:c===0&&s===a-1&&(s=a-2,c=1);let l,u;this.closed||s>0?l=r[(s-1)%a]:(Kr.subVectors(r[0],r[1]).add(r[0]),l=Kr);const h=r[s%a],f=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(Kr.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),yo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,p),xo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,p),bo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),xo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),bo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(yo.calc(c),xo.calc(c),bo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gl(n,e,t,i,r){const a=(i-e)*.5,o=(r-t)*.5,s=n*n,c=n*s;return(2*t-2*i+a+o)*c+(-3*t+3*i-2*a-o)*s+a*n+t}function k0(n,e){const t=1-n;return t*t*e}function P0(n,e){return 2*(1-n)*n*e}function L0(n,e){return n*n*e}function dr(n,e,t,i){return k0(n,e)+P0(n,t)+L0(n,i)}function D0(n,e){const t=1-n;return t*t*t*e}function O0(n,e){const t=1-n;return 3*t*t*n*e}function z0(n,e){return 3*(1-n)*n*n*e}function I0(n,e){return n*n*n*e}function fr(n,e,t,i,r){return D0(n,e)+O0(n,t)+z0(n,i)+I0(n,r)}class N0 extends Cn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(fr(e,r.x,a.x,o.x,s.x),fr(e,r.y,a.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class th extends Cn{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,a=this.v1,o=this.v2,s=this.v3;return i.set(fr(e,r.x,a.x,o.x,s.x),fr(e,r.y,a.y,o.y,s.y),fr(e,r.z,a.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends Cn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends Cn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends Cn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(dr(e,r.x,a.x,o.x),dr(e,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ms extends Cn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,a=this.v1,o=this.v2;return i.set(dr(e,r.x,a.x,o.x),dr(e,r.y,a.y,o.y),dr(e,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,a=(r.length-1)*e,o=Math.floor(a),s=a-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(gl(s,c.x,l.x,u.x,h.x),gl(s,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var G0=Object.freeze({__proto__:null,ArcCurve:C0,CatmullRomCurve3:R0,CubicBezierCurve:N0,CubicBezierCurve3:th,EllipseCurve:eh,LineCurve:U0,LineCurve3:F0,QuadraticBezierCurve:B0,QuadraticBezierCurve3:Ms,SplineCurve:H0});class Pa extends Dt{constructor(e=1,t=1,i=1,r=32,a=1,o=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:o,thetaStart:s,thetaLength:c};const l=this;r=Math.floor(r),a=Math.floor(a);const u=[],h=[],f=[],m=[];let g=0;const v=[],p=i/2;let d=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(m,2));function x(){const y=new D,A=new D;let M=0;const E=(t-e)/i;for(let P=0;P<=a;P++){const b=[],w=P/a,N=w*(t-e)+e;for(let U=0;U<=r;U++){const ee=U/r,C=ee*c+s,k=Math.sin(C),O=Math.cos(C);A.x=N*k,A.y=-w*i+p,A.z=N*O,h.push(A.x,A.y,A.z),y.set(k,E,O).normalize(),f.push(y.x,y.y,y.z),m.push(ee,1-w),b.push(g++)}v.push(b)}for(let P=0;P<r;P++)for(let b=0;b<a;b++){const w=v[b][P],N=v[b+1][P],U=v[b+1][P+1],ee=v[b][P+1];u.push(w,N,ee),u.push(N,U,ee),M+=6}l.addGroup(d,M,0),d+=M}function _(y){const A=g,M=new fe,E=new D;let P=0;const b=y===!0?e:t,w=y===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const N=g;for(let U=0;U<=r;U++){const C=U/r*c+s,k=Math.cos(C),O=Math.sin(C);E.x=b*O,E.y=p*w,E.z=b*k,h.push(E.x,E.y,E.z),f.push(0,w,0),M.x=k*.5+.5,M.y=O*.5*w+.5,m.push(M.x,M.y),g++}for(let U=0;U<r;U++){const ee=A+U,C=N+U;y===!0?u.push(C,C+1,ee):u.push(C+1,C,ee),P+=3}l.addGroup(d,P,y===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ss extends Pa{constructor(e=1,t=1,i=32,r=1,a=!1,o=0,s=Math.PI*2){super(0,e,t,i,r,a,o,s),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:s}}static fromJSON(e){return new Ss(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class La extends Dt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+s,Math.PI);let l=0;const u=[],h=new D,f=new D,m=[],g=[],v=[],p=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const M=A/t;h.x=-e*Math.cos(r+M*a)*Math.sin(o+_*s),h.y=e*Math.cos(o+_*s),h.z=e*Math.sin(r+M*a)*Math.sin(o+_*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(M+y,1-_),x.push(l++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){const _=u[d][x+1],y=u[d][x],A=u[d+1][x],M=u[d+1][x+1];(d!==0||o>0)&&m.push(_,y,M),(d!==i-1||c<Math.PI)&&m.push(y,A,M)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Es extends Dt{constructor(e=new Ms(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const o=e.computeFrenetFrames(t,a);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const s=new D,c=new D,l=new fe;let u=new D;const h=[],f=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ht(h,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(m,2));function v(){for(let _=0;_<t;_++)p(_);p(a===!1?t:0),x(),d()}function p(_){u=e.getPointAt(_/t,u);const y=o.normals[_],A=o.binormals[_];for(let M=0;M<=r;M++){const E=M/r*Math.PI*2,P=Math.sin(E),b=-Math.cos(E);c.x=b*y.x+P*A.x,c.y=b*y.y+P*A.y,c.z=b*y.z+P*A.z,c.normalize(),f.push(c.x,c.y,c.z),s.x=u.x+i*c.x,s.y=u.y+i*c.y,s.z=u.z+i*c.z,h.push(s.x,s.y,s.z)}}function d(){for(let _=1;_<=t;_++)for(let y=1;y<=r;y++){const A=(r+1)*(_-1)+(y-1),M=(r+1)*_+(y-1),E=(r+1)*_+y,P=(r+1)*(_-1)+y;g.push(A,M,P),g.push(M,E,P)}}function x(){for(let _=0;_<=t;_++)for(let y=0;y<=r;y++)l.x=_/t,l.y=y/r,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Es(new G0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class V0 extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ku,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class W0{constructor(e,t,i){const r=this;let a=!1,o=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const j0=new W0;class ws{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";class X0 extends ws{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=vl.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=gr("img");function c(){u(),vl.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(h){u(),r&&r(h),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class $0 extends ws{constructor(e){super(e)}load(e,t,i,r){const a=new Pt,o=new X0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class nh extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ao=new at,_l=new D,yl=new D;class q0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),yl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yl),t.updateMatrixWorld(),Ao.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y0 extends q0{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K0 extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z0 extends nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ih{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xl(){return(typeof performance>"u"?Date:performance).now()}class rh{constructor(e,t,i=0,r=1/0){this.ray=new Ca(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Xo(e,this,i,t),i.sort(bl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Xo(e[r],this,i,t);return i.sort(bl),i}}function bl(n,e){return n.distance-e.distance}function Xo(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Xo(r[a],e,t,!0)}}class $o{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hs);const wi=new _n,On=new rh,Ji=new fe,Al=new D,Zr=new D,Mo=new D,Ml=new at;class J0 extends nn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,a=null;const o=[],s=this;function c(){i.addEventListener("pointermove",m),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",v),i.addEventListener("pointerleave",v)}function l(){i.removeEventListener("pointermove",m),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",v),i.removeEventListener("pointerleave",v),i.style.cursor=""}function u(){l()}function h(){return e}function f(){return On}function m(d){if(s.enabled!==!1){if(p(d),On.setFromCamera(Ji,t),r){On.ray.intersectPlane(wi,Zr)&&r.position.copy(Zr.sub(Al).applyMatrix4(Ml)),s.dispatchEvent({type:"drag",object:r});return}if(d.pointerType==="mouse"||d.pointerType==="pen")if(o.length=0,On.setFromCamera(Ji,t),On.intersectObjects(e,s.recursive,o),o.length>0){const x=o[0].object;wi.setFromNormalAndCoplanarPoint(t.getWorldDirection(wi.normal),Mo.setFromMatrixPosition(x.matrixWorld)),a!==x&&a!==null&&(s.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null),a!==x&&(s.dispatchEvent({type:"hoveron",object:x}),i.style.cursor="pointer",a=x)}else a!==null&&(s.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null)}}function g(d){s.enabled!==!1&&(p(d),o.length=0,On.setFromCamera(Ji,t),On.intersectObjects(e,s.recursive,o),o.length>0&&(r=s.transformGroup===!0?e[0]:o[0].object,wi.setFromNormalAndCoplanarPoint(t.getWorldDirection(wi.normal),Mo.setFromMatrixPosition(r.matrixWorld)),On.ray.intersectPlane(wi,Zr)&&(Ml.copy(r.parent.matrixWorld).invert(),Al.copy(Zr).sub(Mo.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})))}function v(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=a?"pointer":"auto")}function p(d){const x=i.getBoundingClientRect();Ji.x=(d.clientX-x.left)/x.width*2-1,Ji.y=-(d.clientY-x.top)/x.height*2+1}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=u,this.getObjects=h,this.getRaycaster=f}}function Q0(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var o,s=i.length,c,l=0,u=0,h=0;for(o=0;o<s;++o)c=i[o],l+=c.x||0,u+=c.y||0,h+=c.z||0;for(l=(l/s-n)*r,u=(u/s-e)*r,h=(h/s-t)*r,o=0;o<s;++o)c=i[o],l&&(c.x-=l),u&&(c.y-=u),h&&(c.z-=h)}return a.initialize=function(o){i=o},a.x=function(o){return arguments.length?(n=+o,a):n},a.y=function(o){return arguments.length?(e=+o,a):e},a.z=function(o){return arguments.length?(t=+o,a):t},a.strength=function(o){return arguments.length?(r=+o,a):r},a}function e_(n){const e=+this._x.call(null,n);return ah(this.cover(e),e,n)}function ah(n,e,t){if(isNaN(e))return n;var i,r=n._root,a={data:t},o=n._x0,s=n._x1,c,l,u,h,f;if(!r)return n._root=a,n;for(;r.length;)if((u=e>=(c=(o+s)/2))?o=c:s=c,i=r,!(r=r[h=+u]))return i[h]=a,n;if(l=+n._x.call(null,r.data),e===l)return a.next=r,i?i[h]=a:n._root=a,n;do i=i?i[h]=new Array(2):n._root=new Array(2),(u=e>=(c=(o+s)/2))?o=c:s=c;while((h=+u)==(f=+(l>=c)));return i[f]=r,i[h]=a,n}function t_(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let a=0,o;a<e;++a)isNaN(o=+this._x.call(null,n[a]))||(t[a]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let a=0;a<e;++a)ah(this,t[a],n[a]);return this}function n_(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,a,o;e>n||n>=t;)switch(o=+(n<e),a=new Array(2),a[o]=r,r=a,i*=2,o){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function i_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function r_(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function En(n,e,t){this.node=n,this.x0=e,this.x1=t}function a_(n,e){var t,i=this._x0,r,a,o=this._x1,s=[],c=this._root,l,u;for(c&&s.push(new En(c,i,o)),e==null?e=1/0:(i=n-e,o=n+e);l=s.pop();)if(!(!(c=l.node)||(r=l.x0)>o||(a=l.x1)<i))if(c.length){var h=(r+a)/2;s.push(new En(c[1],h,a),new En(c[0],r,h)),(u=+(n>=h))&&(l=s[s.length-1],s[s.length-1]=s[s.length-1-u],s[s.length-1-u]=l)}else{var f=Math.abs(n-+this._x.call(null,c.data));f<e&&(e=f,i=n-f,o=n+f,t=c.data)}return t}function o_(n){if(isNaN(c=+this._x.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._x1,c,l,u,h,f;if(!t)return this;if(t.length)for(;;){if((u=c>=(l=(o+s)/2))?o=l:s=l,e=t,!(t=t[h=+u]))return this;if(!t.length)break;e[h+1&1]&&(i=e,f=h)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[h]=a:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=a,this)}function s_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function c_(){return this._root}function l_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function u_(n){var e=[],t,i=this._root,r,a,o;for(i&&e.push(new En(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.x1)&&i.length){var s=(a+o)/2;(r=i[1])&&e.push(new En(r,s,o)),(r=i[0])&&e.push(new En(r,a,s))}return this}function h_(n){var e=[],t=[],i;for(this._root&&e.push(new En(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.x1,c=(o+s)/2;(a=r[0])&&e.push(new En(a,o,c)),(a=r[1])&&e.push(new En(a,c,s))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function d_(n){return n[0]}function f_(n){return arguments.length?(this._x=n,this):this._x}function oh(n,e){var t=new Ts(e??d_,NaN,NaN);return n==null?t:t.addAll(n)}function Ts(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Sl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ot=oh.prototype=Ts.prototype;Ot.copy=function(){var n=new Ts(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Sl(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Sl(i));return n};Ot.add=e_;Ot.addAll=t_;Ot.cover=n_;Ot.data=i_;Ot.extent=r_;Ot.find=a_;Ot.remove=o_;Ot.removeAll=s_;Ot.root=c_;Ot.size=l_;Ot.visit=u_;Ot.visitAfter=h_;Ot.x=f_;function p_(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return sh(this.cover(e,t),e,t,n)}function sh(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,a=n._root,o={data:i},s=n._x0,c=n._y0,l=n._x1,u=n._y1,h,f,m,g,v,p,d,x;if(!a)return n._root=o,n;for(;a.length;)if((v=e>=(h=(s+l)/2))?s=h:l=h,(p=t>=(f=(c+u)/2))?c=f:u=f,r=a,!(a=a[d=p<<1|v]))return r[d]=o,n;if(m=+n._x.call(null,a.data),g=+n._y.call(null,a.data),e===m&&t===g)return o.next=a,r?r[d]=o:n._root=o,n;do r=r?r[d]=new Array(4):n._root=new Array(4),(v=e>=(h=(s+l)/2))?s=h:l=h,(p=t>=(f=(c+u)/2))?c=f:u=f;while((d=p<<1|v)===(x=(g>=f)<<1|m>=h));return r[x]=a,r[d]=o,n}function m_(n){var e,t,i=n.length,r,a,o=new Array(i),s=new Array(i),c=1/0,l=1/0,u=-1/0,h=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(o[t]=r,s[t]=a,r<c&&(c=r),r>u&&(u=r),a<l&&(l=a),a>h&&(h=a));if(c>u||l>h)return this;for(this.cover(c,l).cover(u,h),t=0;t<i;++t)sh(this,o[t],s[t],n[t]);return this}function g_(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,a=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,a=(i=Math.floor(e))+1;else{for(var o=r-t||1,s=this._root,c,l;t>n||n>=r||i>e||e>=a;)switch(l=(e<i)<<1|n<t,c=new Array(4),c[l]=s,s=c,o*=2,l){case 0:r=t+o,a=i+o;break;case 1:t=r-o,a=i+o;break;case 2:r=t+o,i=a-o;break;case 3:t=r-o,i=a-o;break}this._root&&this._root.length&&(this._root=s)}return this._x0=t,this._y0=i,this._x1=r,this._y1=a,this}function v_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function __(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Rt(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function y_(n,e,t){var i,r=this._x0,a=this._y0,o,s,c,l,u=this._x1,h=this._y1,f=[],m=this._root,g,v;for(m&&f.push(new Rt(m,r,a,u,h)),t==null?t=1/0:(r=n-t,a=e-t,u=n+t,h=e+t,t*=t);g=f.pop();)if(!(!(m=g.node)||(o=g.x0)>u||(s=g.y0)>h||(c=g.x1)<r||(l=g.y1)<a))if(m.length){var p=(o+c)/2,d=(s+l)/2;f.push(new Rt(m[3],p,d,c,l),new Rt(m[2],o,d,p,l),new Rt(m[1],p,s,c,d),new Rt(m[0],o,s,p,d)),(v=(e>=d)<<1|n>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var x=n-+this._x.call(null,m.data),_=e-+this._y.call(null,m.data),y=x*x+_*_;if(y<t){var A=Math.sqrt(t=y);r=n-A,a=e-A,u=n+A,h=e+A,i=m.data}}return i}function x_(n){if(isNaN(u=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._y0,c=this._x1,l=this._y1,u,h,f,m,g,v,p,d;if(!t)return this;if(t.length)for(;;){if((g=u>=(f=(o+c)/2))?o=f:c=f,(v=h>=(m=(s+l)/2))?s=m:l=m,e=t,!(t=t[p=v<<1|g]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,d=p)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[p]=a:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=a,this)}function b_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function A_(){return this._root}function M_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function S_(n){var e=[],t,i=this._root,r,a,o,s,c;for(i&&e.push(new Rt(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.y0,s=t.x1,c=t.y1)&&i.length){var l=(a+s)/2,u=(o+c)/2;(r=i[3])&&e.push(new Rt(r,l,u,s,c)),(r=i[2])&&e.push(new Rt(r,a,u,l,c)),(r=i[1])&&e.push(new Rt(r,l,o,s,u)),(r=i[0])&&e.push(new Rt(r,a,o,l,u))}return this}function E_(n){var e=[],t=[],i;for(this._root&&e.push(new Rt(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,c=i.x1,l=i.y1,u=(o+c)/2,h=(s+l)/2;(a=r[0])&&e.push(new Rt(a,o,s,u,h)),(a=r[1])&&e.push(new Rt(a,u,s,c,h)),(a=r[2])&&e.push(new Rt(a,o,h,u,l)),(a=r[3])&&e.push(new Rt(a,u,h,c,l))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function w_(n){return n[0]}function T_(n){return arguments.length?(this._x=n,this):this._x}function C_(n){return n[1]}function R_(n){return arguments.length?(this._y=n,this):this._y}function ch(n,e,t){var i=new Cs(e??w_,t??C_,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Cs(n,e,t,i,r,a){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=a,this._root=void 0}function El(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Lt=ch.prototype=Cs.prototype;Lt.copy=function(){var n=new Cs(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=El(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=El(i));return n};Lt.add=p_;Lt.addAll=m_;Lt.cover=g_;Lt.data=v_;Lt.extent=__;Lt.find=y_;Lt.remove=x_;Lt.removeAll=b_;Lt.root=A_;Lt.size=M_;Lt.visit=S_;Lt.visitAfter=E_;Lt.x=T_;Lt.y=R_;function k_(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return lh(this.cover(e,t,i),e,t,i,n)}function lh(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var a,o=n._root,s={data:r},c=n._x0,l=n._y0,u=n._z0,h=n._x1,f=n._y1,m=n._z1,g,v,p,d,x,_,y,A,M,E,P;if(!o)return n._root=s,n;for(;o.length;)if((y=e>=(g=(c+h)/2))?c=g:h=g,(A=t>=(v=(l+f)/2))?l=v:f=v,(M=i>=(p=(u+m)/2))?u=p:m=p,a=o,!(o=o[E=M<<2|A<<1|y]))return a[E]=s,n;if(d=+n._x.call(null,o.data),x=+n._y.call(null,o.data),_=+n._z.call(null,o.data),e===d&&t===x&&i===_)return s.next=o,a?a[E]=s:n._root=s,n;do a=a?a[E]=new Array(8):n._root=new Array(8),(y=e>=(g=(c+h)/2))?c=g:h=g,(A=t>=(v=(l+f)/2))?l=v:f=v,(M=i>=(p=(u+m)/2))?u=p:m=p;while((E=M<<2|A<<1|y)===(P=(_>=p)<<2|(x>=v)<<1|d>=g));return a[P]=o,a[E]=s,n}function P_(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let a=1/0,o=1/0,s=1/0,c=-1/0,l=-1/0,u=-1/0;for(let h=0,f,m,g,v;h<e;++h)isNaN(m=+this._x.call(null,f=n[h]))||isNaN(g=+this._y.call(null,f))||isNaN(v=+this._z.call(null,f))||(t[h]=m,i[h]=g,r[h]=v,m<a&&(a=m),m>c&&(c=m),g<o&&(o=g),g>l&&(l=g),v<s&&(s=v),v>u&&(u=v));if(a>c||o>l||s>u)return this;this.cover(a,o,s).cover(c,l,u);for(let h=0;h<e;++h)lh(this,t[h],i[h],r[h],n[h]);return this}function L_(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,a=this._z0,o=this._x1,s=this._y1,c=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,s=(r=Math.floor(e))+1,c=(a=Math.floor(t))+1;else{for(var l=o-i||1,u=this._root,h,f;i>n||n>=o||r>e||e>=s||a>t||t>=c;)switch(f=(t<a)<<2|(e<r)<<1|n<i,h=new Array(8),h[f]=u,u=h,l*=2,f){case 0:o=i+l,s=r+l,c=a+l;break;case 1:i=o-l,s=r+l,c=a+l;break;case 2:o=i+l,r=s-l,c=a+l;break;case 3:i=o-l,r=s-l,c=a+l;break;case 4:o=i+l,s=r+l,a=c-l;break;case 5:i=o-l,s=r+l,a=c-l;break;case 6:o=i+l,r=s-l,a=c-l;break;case 7:i=o-l,r=s-l,a=c-l;break}this._root&&this._root.length&&(this._root=u)}return this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=c,this}function D_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function O_(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Qe(n,e,t,i,r,a,o){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=a,this.z1=o}function z_(n,e,t,i){var r,a=this._x0,o=this._y0,s=this._z0,c,l,u,h,f,m,g=this._x1,v=this._y1,p=this._z1,d=[],x=this._root,_,y;for(x&&d.push(new Qe(x,a,o,s,g,v,p)),i==null?i=1/0:(a=n-i,o=e-i,s=t-i,g=n+i,v=e+i,p=t+i,i*=i);_=d.pop();)if(!(!(x=_.node)||(c=_.x0)>g||(l=_.y0)>v||(u=_.z0)>p||(h=_.x1)<a||(f=_.y1)<o||(m=_.z1)<s))if(x.length){var A=(c+h)/2,M=(l+f)/2,E=(u+m)/2;d.push(new Qe(x[7],A,M,E,h,f,m),new Qe(x[6],c,M,E,A,f,m),new Qe(x[5],A,l,E,h,M,m),new Qe(x[4],c,l,E,A,M,m),new Qe(x[3],A,M,u,h,f,E),new Qe(x[2],c,M,u,A,f,E),new Qe(x[1],A,l,u,h,M,E),new Qe(x[0],c,l,u,A,M,E)),(y=(t>=E)<<2|(e>=M)<<1|n>=A)&&(_=d[d.length-1],d[d.length-1]=d[d.length-1-y],d[d.length-1-y]=_)}else{var P=n-+this._x.call(null,x.data),b=e-+this._y.call(null,x.data),w=t-+this._z.call(null,x.data),N=P*P+b*b+w*w;if(N<i){var U=Math.sqrt(i=N);a=n-U,o=e-U,s=t-U,g=n+U,v=e+U,p=t+U,r=x.data}}return r}function I_(n){if(isNaN(f=+this._x.call(null,n))||isNaN(m=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,a,o=this._x0,s=this._y0,c=this._z0,l=this._x1,u=this._y1,h=this._z1,f,m,g,v,p,d,x,_,y,A,M;if(!t)return this;if(t.length)for(;;){if((x=f>=(v=(o+l)/2))?o=v:l=v,(_=m>=(p=(s+u)/2))?s=p:u=p,(y=g>=(d=(c+h)/2))?c=d:h=d,e=t,!(t=t[A=y<<2|_<<1|x]))return this;if(!t.length)break;(e[A+1&7]||e[A+2&7]||e[A+3&7]||e[A+4&7]||e[A+5&7]||e[A+6&7]||e[A+7&7])&&(i=e,M=A)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[A]=a:delete e[A],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[M]=t:this._root=t),this):(this._root=a,this)}function N_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function U_(){return this._root}function F_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function B_(n){var e=[],t,i=this._root,r,a,o,s,c,l,u;for(i&&e.push(new Qe(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,a=t.x0,o=t.y0,s=t.z0,c=t.x1,l=t.y1,u=t.z1)&&i.length){var h=(a+c)/2,f=(o+l)/2,m=(s+u)/2;(r=i[7])&&e.push(new Qe(r,h,f,m,c,l,u)),(r=i[6])&&e.push(new Qe(r,a,f,m,h,l,u)),(r=i[5])&&e.push(new Qe(r,h,o,m,c,f,u)),(r=i[4])&&e.push(new Qe(r,a,o,m,h,f,u)),(r=i[3])&&e.push(new Qe(r,h,f,s,c,l,m)),(r=i[2])&&e.push(new Qe(r,a,f,s,h,l,m)),(r=i[1])&&e.push(new Qe(r,h,o,s,c,f,m)),(r=i[0])&&e.push(new Qe(r,a,o,s,h,f,m))}return this}function H_(n){var e=[],t=[],i;for(this._root&&e.push(new Qe(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var a,o=i.x0,s=i.y0,c=i.z0,l=i.x1,u=i.y1,h=i.z1,f=(o+l)/2,m=(s+u)/2,g=(c+h)/2;(a=r[0])&&e.push(new Qe(a,o,s,c,f,m,g)),(a=r[1])&&e.push(new Qe(a,f,s,c,l,m,g)),(a=r[2])&&e.push(new Qe(a,o,m,c,f,u,g)),(a=r[3])&&e.push(new Qe(a,f,m,c,l,u,g)),(a=r[4])&&e.push(new Qe(a,o,s,g,f,m,h)),(a=r[5])&&e.push(new Qe(a,f,s,g,l,m,h)),(a=r[6])&&e.push(new Qe(a,o,m,g,f,u,h)),(a=r[7])&&e.push(new Qe(a,f,m,g,l,u,h))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function G_(n){return n[0]}function V_(n){return arguments.length?(this._x=n,this):this._x}function W_(n){return n[1]}function j_(n){return arguments.length?(this._y=n,this):this._y}function X_(n){return n[2]}function $_(n){return arguments.length?(this._z=n,this):this._z}function uh(n,e,t,i){var r=new Rs(e??G_,t??W_,i??X_,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Rs(n,e,t,i,r,a,o,s,c){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=a,this._x1=o,this._y1=s,this._z1=c,this._root=void 0}function wl(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Mt=uh.prototype=Rs.prototype;Mt.copy=function(){var n=new Rs(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=wl(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=wl(i));return n};Mt.add=k_;Mt.addAll=P_;Mt.cover=L_;Mt.data=D_;Mt.extent=O_;Mt.find=z_;Mt.remove=I_;Mt.removeAll=N_;Mt.root=U_;Mt.size=F_;Mt.visit=B_;Mt.visitAfter=H_;Mt.x=V_;Mt.y=j_;Mt.z=$_;function An(n){return function(){return n}}function yn(n){return(n()-.5)*1e-6}function q_(n){return n.index}function Tl(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Y_(n){var e=q_,t=f,i,r=An(30),a,o,s,c,l,u,h=1;n==null&&(n=[]);function f(d){return 1/Math.min(c[d.source.index],c[d.target.index])}function m(d){for(var x=0,_=n.length;x<h;++x)for(var y=0,A,M,E,P=0,b=0,w=0,N,U;y<_;++y)A=n[y],M=A.source,E=A.target,P=E.x+E.vx-M.x-M.vx||yn(u),s>1&&(b=E.y+E.vy-M.y-M.vy||yn(u)),s>2&&(w=E.z+E.vz-M.z-M.vz||yn(u)),N=Math.sqrt(P*P+b*b+w*w),N=(N-a[y])/N*d*i[y],P*=N,b*=N,w*=N,E.vx-=P*(U=l[y]),s>1&&(E.vy-=b*U),s>2&&(E.vz-=w*U),M.vx+=P*(U=1-U),s>1&&(M.vy+=b*U),s>2&&(M.vz+=w*U)}function g(){if(o){var d,x=o.length,_=n.length,y=new Map(o.map((M,E)=>[e(M,E,o),M])),A;for(d=0,c=new Array(x);d<_;++d)A=n[d],A.index=d,typeof A.source!="object"&&(A.source=Tl(y,A.source)),typeof A.target!="object"&&(A.target=Tl(y,A.target)),c[A.source.index]=(c[A.source.index]||0)+1,c[A.target.index]=(c[A.target.index]||0)+1;for(d=0,l=new Array(_);d<_;++d)A=n[d],l[d]=c[A.source.index]/(c[A.source.index]+c[A.target.index]);i=new Array(_),v(),a=new Array(_),p()}}function v(){if(o)for(var d=0,x=n.length;d<x;++d)i[d]=+t(n[d],d,n)}function p(){if(o)for(var d=0,x=n.length;d<x;++d)a[d]=+r(n[d],d,n)}return m.initialize=function(d,...x){o=d,u=x.find(_=>typeof _=="function")||Math.random,s=x.find(_=>[1,2,3].includes(_))||2,g()},m.links=function(d){return arguments.length?(n=d,g(),m):n},m.id=function(d){return arguments.length?(e=d,m):e},m.iterations=function(d){return arguments.length?(h=+d,m):h},m.strength=function(d){return arguments.length?(t=typeof d=="function"?d:An(+d),v(),m):t},m.distance=function(d){return arguments.length?(r=typeof d=="function"?d:An(+d),p(),m):r},m}var K_={value:()=>{}};function hh(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new ra(t)}function ra(n){this._=n}function Z_(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}ra.prototype=hh.prototype={constructor:ra,on:function(n,e){var t=this._,i=Z_(n+"",t),r,a=-1,o=i.length;if(arguments.length<2){for(;++a<o;)if((r=(n=i[a]).type)&&(r=J_(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<o;)if(r=(n=i[a]).type)t[r]=Cl(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Cl(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ra(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,a;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],i=0,r=a.length;i<r;++i)a[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,a=i.length;r<a;++r)i[r].value.apply(e,t)}};function J_(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Cl(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=K_,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Hi=0,ar=0,Qi=0,dh=1e3,ma,or,ga=0,ni=0,Da=0,vr=typeof performance=="object"&&performance.now?performance:Date,fh=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function ph(){return ni||(fh(Q_),ni=vr.now()+Da)}function Q_(){ni=0}function qo(){this._call=this._time=this._next=null}qo.prototype=mh.prototype={constructor:qo,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?ph():+t)+(e==null?0:+e),!this._next&&or!==this&&(or?or._next=this:ma=this,or=this),this._call=n,this._time=t,Yo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Yo())}};function mh(n,e,t){var i=new qo;return i.restart(n,e,t),i}function ey(){ph(),++Hi;for(var n=ma,e;n;)(e=ni-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Hi}function Rl(){ni=(ga=vr.now())+Da,Hi=ar=0;try{ey()}finally{Hi=0,ny(),ni=0}}function ty(){var n=vr.now(),e=n-ga;e>dh&&(Da-=e,ga=n)}function ny(){for(var n,e=ma,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ma=t);or=n,Yo(i)}function Yo(n){if(!Hi){ar&&(ar=clearTimeout(ar));var e=n-ni;e>24?(n<1/0&&(ar=setTimeout(Rl,n-vr.now()-Da)),Qi&&(Qi=clearInterval(Qi))):(Qi||(ga=vr.now(),Qi=setInterval(ty,dh)),Hi=1,fh(Rl))}}const iy=1664525,ry=1013904223,kl=4294967296;function ay(){let n=1;return()=>(n=(iy*n+ry)%kl)/kl}var Pl=3;function So(n){return n.x}function Ll(n){return n.y}function oy(n){return n.z}var sy=10,cy=Math.PI*(3-Math.sqrt(5)),ly=Math.PI*20/(9+Math.sqrt(221));function uy(n,e){e=e||2;var t=Math.min(Pl,Math.max(1,Math.round(e))),i,r=1,a=.001,o=1-Math.pow(a,1/300),s=0,c=.6,l=new Map,u=mh(m),h=hh("tick","end"),f=ay();n==null&&(n=[]);function m(){g(),h.call("tick",i),r<a&&(u.stop(),h.call("end",i))}function g(d){var x,_=n.length,y;d===void 0&&(d=1);for(var A=0;A<d;++A)for(r+=(s-r)*o,l.forEach(function(M){M(r)}),x=0;x<_;++x)y=n[x],y.fx==null?y.x+=y.vx*=c:(y.x=y.fx,y.vx=0),t>1&&(y.fy==null?y.y+=y.vy*=c:(y.y=y.fy,y.vy=0)),t>2&&(y.fz==null?y.z+=y.vz*=c:(y.z=y.fz,y.vz=0));return i}function v(){for(var d=0,x=n.length,_;d<x;++d){if(_=n[d],_.index=d,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var y=sy*(t>2?Math.cbrt(.5+d):t>1?Math.sqrt(.5+d):d),A=d*cy,M=d*ly;t===1?_.x=y:t===2?(_.x=y*Math.cos(A),_.y=y*Math.sin(A)):(_.x=y*Math.sin(A)*Math.cos(M),_.y=y*Math.cos(A),_.z=y*Math.sin(A)*Math.sin(M))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function p(d){return d.initialize&&d.initialize(n,f,t),d}return v(),i={tick:g,restart:function(){return u.restart(m),i},stop:function(){return u.stop(),i},numDimensions:function(d){return arguments.length?(t=Math.min(Pl,Math.max(1,Math.round(d))),l.forEach(p),i):t},nodes:function(d){return arguments.length?(n=d,v(),l.forEach(p),i):n},alpha:function(d){return arguments.length?(r=+d,i):r},alphaMin:function(d){return arguments.length?(a=+d,i):a},alphaDecay:function(d){return arguments.length?(o=+d,i):+o},alphaTarget:function(d){return arguments.length?(s=+d,i):s},velocityDecay:function(d){return arguments.length?(c=1-d,i):1-c},randomSource:function(d){return arguments.length?(f=d,l.forEach(p),i):f},force:function(d,x){return arguments.length>1?(x==null?l.delete(d):l.set(d,p(x)),i):l.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),x=d.shift()||0,_=(t>1?d.shift():null)||0,y=(t>2?d.shift():null)||0,A=d.shift()||1/0,M=0,E=n.length,P,b,w,N,U,ee;for(A*=A,M=0;M<E;++M)U=n[M],P=x-U.x,b=_-(U.y||0),w=y-(U.z||0),N=P*P+b*b+w*w,N<A&&(ee=U,A=N);return ee},on:function(d,x){return arguments.length>1?(h.on(d,x),i):h.on(d)}}}function hy(){var n,e,t,i,r,a=An(-30),o,s=1,c=1/0,l=.81;function u(g){var v,p=n.length,d=(e===1?oh(n,So):e===2?ch(n,So,Ll):e===3?uh(n,So,Ll,oy):null).visitAfter(f);for(r=g,v=0;v<p;++v)t=n[v],d.visit(m)}function h(){if(n){var g,v=n.length,p;for(o=new Array(v),g=0;g<v;++g)p=n[g],o[p.index]=+a(p,g,n)}}function f(g){var v=0,p,d,x=0,_,y,A,M,E=g.length;if(E){for(_=y=A=M=0;M<E;++M)(p=g[M])&&(d=Math.abs(p.value))&&(v+=p.value,x+=d,_+=d*(p.x||0),y+=d*(p.y||0),A+=d*(p.z||0));v*=Math.sqrt(4/E),g.x=_/x,e>1&&(g.y=y/x),e>2&&(g.z=A/x)}else{p=g,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do v+=o[p.data.index];while(p=p.next)}g.value=v}function m(g,v,p,d,x){if(!g.value)return!0;var _=[p,d,x][e-1],y=g.x-t.x,A=e>1?g.y-t.y:0,M=e>2?g.z-t.z:0,E=_-v,P=y*y+A*A+M*M;if(E*E/l<P)return P<c&&(y===0&&(y=yn(i),P+=y*y),e>1&&A===0&&(A=yn(i),P+=A*A),e>2&&M===0&&(M=yn(i),P+=M*M),P<s&&(P=Math.sqrt(s*P)),t.vx+=y*g.value*r/P,e>1&&(t.vy+=A*g.value*r/P),e>2&&(t.vz+=M*g.value*r/P)),!0;if(g.length||P>=c)return;(g.data!==t||g.next)&&(y===0&&(y=yn(i),P+=y*y),e>1&&A===0&&(A=yn(i),P+=A*A),e>2&&M===0&&(M=yn(i),P+=M*M),P<s&&(P=Math.sqrt(s*P)));do g.data!==t&&(E=o[g.data.index]*r/P,t.vx+=y*E,e>1&&(t.vy+=A*E),e>2&&(t.vz+=M*E));while(g=g.next)}return u.initialize=function(g,...v){n=g,i=v.find(p=>typeof p=="function")||Math.random,e=v.find(p=>[1,2,3].includes(p))||2,h()},u.strength=function(g){return arguments.length?(a=typeof g=="function"?g:An(+g),h(),u):a},u.distanceMin=function(g){return arguments.length?(s=g*g,u):Math.sqrt(s)},u.distanceMax=function(g){return arguments.length?(c=g*g,u):Math.sqrt(c)},u.theta=function(g){return arguments.length?(l=g*g,u):Math.sqrt(l)},u}function dy(n,e,t,i){var r,a,o=An(.1),s,c;typeof n!="function"&&(n=An(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function l(h){for(var f=0,m=r.length;f<m;++f){var g=r[f],v=g.x-e||1e-6,p=(g.y||0)-t||1e-6,d=(g.z||0)-i||1e-6,x=Math.sqrt(v*v+p*p+d*d),_=(c[f]-x)*s[f]*h/x;g.vx+=v*_,a>1&&(g.vy+=p*_),a>2&&(g.vz+=d*_)}}function u(){if(r){var h,f=r.length;for(s=new Array(f),c=new Array(f),h=0;h<f;++h)c[h]=+n(r[h],h,r),s[h]=isNaN(c[h])?0:+o(r[h],h,r)}}return l.initialize=function(h,...f){r=h,a=f.find(m=>[1,2,3].includes(m))||2,u()},l.strength=function(h){return arguments.length?(o=typeof h=="function"?h:An(+h),u(),l):o},l.radius=function(h){return arguments.length?(n=typeof h=="function"?h:An(+h),u(),l):n},l.x=function(h){return arguments.length?(e=+h,l):e},l.y=function(h){return arguments.length?(t=+h,l):t},l.z=function(h){return arguments.length?(i=+h,l):i},l}function gh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ks=function(e){py(e);var t=fy(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function fy(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var a=typeof i!="function";if(a)delete e[t];else for(var o=e[t],s=0;s<o.length;++s)o[s].callback===i&&o.splice(s,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var a=0;a<i.length;++a){var o=i[a];o.callback.apply(o.ctx,r)}return n}}}function py(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var my=vy,gy=ks;function vy(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,a=n.multigraph?y:_,o=[],s=O,c=O,l=O,u=O,h={version:20,addNode:v,addLink:x,removeLink:P,removeNode:d,getNode:p,getNodeCount:A,getLinkCount:M,getEdgeCount:M,getLinksCount:M,getNodesCount:A,getLinks:E,forEachNode:te,forEachLinkedNode:ee,forEachLink:U,beginUpdate:l,endUpdate:u,clear:N,hasLink:w,hasNode:p,getLink:w};return gy(h),f(),h;function f(){var F=h.on;h.on=$;function $(){return h.beginUpdate=l=K,h.endUpdate=u=J,s=m,c=g,h.on=F,F.apply(h,arguments)}}function m(F,$){o.push({link:F,changeType:$})}function g(F,$){o.push({node:F,changeType:$})}function v(F,$){if(F===void 0)throw new Error("Invalid node identifier");l();var Q=p(F);return Q?(Q.data=$,c(Q,"update")):(Q=new _y(F,$),c(Q,"add")),e.set(F,Q),u(),Q}function p(F){return e.get(F)}function d(F){var $=p(F);if(!$)return!1;l();var Q=$.links;return Q&&(Q.forEach(b),$.links=null),e.delete(F),c($,"remove"),u(),!0}function x(F,$,Q){l();var W=p(F)||v(F),G=p($)||v($),V=a(F,$,Q),ne=t.has(V.id);return t.set(V.id,V),Dl(W,V),F!==$&&Dl(G,V),s(V,ne?"update":"add"),u(),V}function _(F,$,Q){var W=Jr(F,$),G=t.get(W);return G?(G.data=Q,G):new Ol(F,$,Q,W)}function y(F,$,Q){var W=Jr(F,$),G=i.hasOwnProperty(W);if(G||w(F,$)){G||(i[W]=0);var V="@"+ ++i[W];W=Jr(F+V,$+V)}return new Ol(F,$,Q,W)}function A(){return e.size}function M(){return t.size}function E(F){var $=p(F);return $?$.links:null}function P(F,$){return $!==void 0&&(F=w(F,$)),b(F)}function b(F){if(!F||!t.get(F.id))return!1;l(),t.delete(F.id);var $=p(F.fromId),Q=p(F.toId);return $&&$.links.delete(F),Q&&Q.links.delete(F),s(F,"remove"),u(),!0}function w(F,$){if(!(F===void 0||$===void 0))return t.get(Jr(F,$))}function N(){l(),te(function(F){d(F.id)}),u()}function U(F){if(typeof F=="function")for(var $=t.values(),Q=$.next();!Q.done;){if(F(Q.value))return!0;Q=$.next()}}function ee(F,$,Q){var W=p(F);if(W&&W.links&&typeof $=="function")return Q?k(W.links,F,$):C(W.links,F,$)}function C(F,$,Q){for(var W,G=F.values(),V=G.next();!V.done;){var ne=V.value,I=ne.fromId===$?ne.toId:ne.fromId;if(W=Q(e.get(I),ne),W)return!0;V=G.next()}}function k(F,$,Q){for(var W,G=F.values(),V=G.next();!V.done;){var ne=V.value;if(ne.fromId===$&&(W=Q(e.get(ne.toId),ne),W))return!0;V=G.next()}}function O(){}function K(){r+=1}function J(){r-=1,r===0&&o.length>0&&(h.fire("changed",o),o.length=0)}function te(F){if(typeof F!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+F);for(var $=e.values(),Q=$.next();!Q.done;){if(F(Q.value))return!0;Q=$.next()}}}function _y(n,e){this.id=n,this.links=null,this.data=e}function Dl(n,e){n.links?n.links.add(e):n.links=new Set([e])}function Ol(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Jr(n,e){return n.toString()+"👉 "+e.toString()}const yy=gh(my);var Ps={exports:{}},xr={exports:{}},vh=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const xy=vh;var Vi=function(e){return t;function t(i,r){let a=r&&r.indent||0,o=r&&r.join!==void 0?r.join:`
`,s=Array(a+1).join(" "),c=[];for(let l=0;l<e;++l){let u=xy(l),h=l===0?"":s;c.push(h+i.replace(/{var}/g,u))}return c.join(o)}};const _h=Vi;xr.exports=by;xr.exports.generateCreateBodyFunctionBody=yh;xr.exports.getVectorCode=bh;xr.exports.getBodyCode=xh;function by(n,e){let t=yh(n,e),{Body:i}=new Function(t)();return i}function yh(n,e){return`
${bh(n,e)}
${xh(n)}
return {Body: Body, Vector: Vector};
`}function xh(n){let e=_h(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function bh(n,e){let t=_h(n),i="";return e&&(i=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var Ay=xr.exports,Gn={exports:{}};const Ls=Vi,zn=vh;Gn.exports=My;Gn.exports.generateQuadTreeFunctionBody=Ah;Gn.exports.getInsertStackCode=Th;Gn.exports.getQuadNodeCode=wh;Gn.exports.isSamePosition=Mh;Gn.exports.getChildBodyCode=Eh;Gn.exports.setChildBodyCode=Sh;function My(n){let e=Ah(n);return new Function(e)()}function Ah(n){let e=Ls(n),t=Math.pow(2,n);return`
${Th()}
${wh(n)}
${Mh(n)}
${Eh(n)}
${Sh(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${o("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${zn(0)} - node.min_${zn(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(s){let c=[],l=Array(s+1).join(" ");for(let u=0;u<n;++u)c.push(l+`if (${zn(u)} > max_${zn(u)}) {`),c.push(l+`  quadIdx = quadIdx + ${Math.pow(2,u)};`),c.push(l+`  min_${zn(u)} = max_${zn(u)};`),c.push(l+`  max_${zn(u)} = node.max_${zn(u)};`),c.push(l+"}");return c.join(`
`)}function a(){let s=Array(11).join(" "),c=[];for(let l=0;l<t;++l)c.push(s+`if (node.quad${l}) {`),c.push(s+`  queue[pushIdx] = node.quad${l};`),c.push(s+"  queueLength += 1;"),c.push(s+"  pushIdx += 1;"),c.push(s+"}");return c.join(`
`)}function o(s){let c=[];for(let l=0;l<t;++l)c.push(`${s}quad${l} = null;`);return c.join(`
`)}}function Mh(n){let e=Ls(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Sh(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let a=r===0?"  ":"  else ";i.push(`${a}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function Eh(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function wh(n){let e=Ls(n),t=Math.pow(2,n);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(a){let o=[];for(let s=0;s<t;++s)o.push(`${a}quad${s} = null;`);return o.join(`
`)}}function Th(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var Sy=Gn.exports,Ds={exports:{}};Ds.exports=wy;Ds.exports.generateFunctionBody=Ch;const Ey=Vi;function wy(n){let e=Ch(n);return new Function("bodies","settings","random",e)}function Ch(n){let e=Ey(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var Ty=Ds.exports,Os={exports:{}};const Cy=Vi;Os.exports=Ry;Os.exports.generateCreateDragForceFunctionBody=Rh;function Ry(n){let e=Rh(n);return new Function("options",e)}function Rh(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${Cy(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var ky=Os.exports,zs={exports:{}};const Py=Vi;zs.exports=Ly;zs.exports.generateCreateSpringForceFunctionBody=kh;function Ly(n){let e=kh(n);return new Function("options","random",e)}function kh(n){let e=Py(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var Dy=zs.exports,Is={exports:{}};const Oy=Vi;Is.exports=zy;Is.exports.generateIntegratorFunctionBody=Ph;function zy(n){let e=Ph(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function Ph(n){let e=Oy(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var Iy=Is.exports,Eo,zl;function Ny(){if(zl)return Eo;zl=1,Eo=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Eo}var wo,Il;function Uy(){if(Il)return wo;Il=1,wo=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),a=typeof t[i],o=!r||typeof e[i]!==a;o?e[i]=t[i]:a==="object"&&(e[i]=n(e[i],t[i]))}}return e}return wo}var er={exports:{}},Nl;function Fy(){if(Nl)return er.exports;Nl=1,er.exports=n,er.exports.random=n,er.exports.randomIterator=s;function n(c){var l=typeof c=="number"?c:+new Date;return new e(l)}function e(c){this.seed=c}e.prototype.next=o,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var c,l,u;do l=this.nextDouble()*2-1,u=this.nextDouble()*2-1,c=l*l+u*u;while(c>=1||c===0);return l*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=i;function i(){var c=1.5,l=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*l/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function a(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function o(c){return Math.floor(this.nextDouble()*c)}function s(c,l){var u=l||n();if(typeof u.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var m,g,v;for(m=c.length-1;m>0;--m)g=u.next(m+1),v=c[g],c[g]=c[m],c[m]=v;return c}function f(m){var g,v,p;for(g=c.length-1;g>0;--g)v=u.next(g+1),p=c[v],c[v]=c[g],c[g]=p,m(p);c.length&&m(c[0])}}return er.exports}var Lh=Xy,By=Ay,Hy=Sy,Gy=Ty,Vy=ky,Wy=Dy,jy=Iy,Ul={};function Xy(n){var e=Ny(),t=Uy(),i=ks;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=Ul[n.dimensions];if(!r){var a=n.dimensions;r={Body:By(a,n.debug),createQuadTree:Hy(a),createBounds:Gy(a),createDragForce:Vy(a),createSpringForce:Wy(a),integrate:jy(a)},Ul[a]=r}var o=r.Body,s=r.createQuadTree,c=r.createBounds,l=r.createDragForce,u=r.createSpringForce,h=r.integrate,f=k=>new o(k),m=Fy().random(42),g=[],v=[],p=s(n,m),d=c(g,n,m),x=u(n,m),_=l(n),y=0,A=[],M=new Map,E=0;w("nbody",ee),w("spring",C);var P={bodies:g,quadTree:p,springs:v,settings:n,addForce:w,removeForce:N,getForces:U,step:function(){for(var k=0;k<A.length;++k)A[k](E);var O=h(g,n.timeStep,n.adaptiveTimeStepWeight);return E+=1,O},addBody:function(k){if(!k)throw new Error("Body is required");return g.push(k),k},addBodyAt:function(k){if(!k)throw new Error("Body position is required");var O=f(k);return g.push(O),O},removeBody:function(k){if(k){var O=g.indexOf(k);if(!(O<0))return g.splice(O,1),g.length===0&&d.reset(),!0}},addSpring:function(k,O,K,J){if(!k||!O)throw new Error("Cannot add null spring to force simulator");typeof K!="number"&&(K=-1);var te=new e(k,O,K,J>=0?J:-1);return v.push(te),te},getTotalMovement:function(){return y},removeSpring:function(k){if(k){var O=v.indexOf(k);if(O>-1)return v.splice(O,1),!0}},getBestNewBodyPosition:function(k){return d.getBestNewPosition(k)},getBBox:b,getBoundingBox:b,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(k){return k!==void 0?(n.gravity=k,p.options({gravity:k}),this):n.gravity},theta:function(k){return k!==void 0?(n.theta=k,p.options({theta:k}),this):n.theta},random:m};return $y(n,P),i(P),P;function b(){return d.update(),d.box}function w(k,O){if(M.has(k))throw new Error("Force "+k+" is already added");M.set(k,O),A.push(O)}function N(k){var O=A.indexOf(M.get(k));O<0||(A.splice(O,1),M.delete(k))}function U(){return M}function ee(){if(g.length!==0){p.insertBodies(g);for(var k=g.length;k--;){var O=g[k];O.isPinned||(O.reset(),p.updateBodyForce(O),_.update(O))}}}function C(){for(var k=v.length;k--;)x.update(v[k])}}function $y(n,e){for(var t in n)qy(n,e,t)}function qy(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}Ps.exports=Ky;Ps.exports.simulator=Lh;var Yy=ks;function Ky(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Lh,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?ee:U;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var a=new Map,o={},s=0,c=i.settings.springTransform||Zy;_(),p();var l=!1,u={step:function(){if(s===0)return h(!0),!0;var C=i.step();u.lastMove=C,u.fire("step");var k=C/s,O=k<=.01;return h(O),O},getNodePosition:function(C){return N(C).pos},setNodePosition:function(C){var k=N(C);k.setPosition.apply(k,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(C){var k=o[C];if(k)return{from:k.from.pos,to:k.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:f,pinNode:function(C,k){var O=N(C.id);O.isPinned=!!k},isNodePinned:function(C){return N(C.id).isPinned},dispose:function(){n.off("changed",x),u.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:m,simulator:i,graph:n,lastMove:0};return Yy(u),u;function h(C){l!==C&&(l=C,d(C))}function f(C){a.forEach(C)}function m(){var C=0,k=0;return f(function(O){C+=Math.abs(O.force.x),k+=Math.abs(O.force.y)}),Math.sqrt(C*C+k*k)}function g(C,k){var O;if(k===void 0)typeof C!="object"?O=C:O=C.id;else{var K=n.hasLink(C,k);if(!K)return;O=K.id}return o[O]}function v(C){return a.get(C)}function p(){n.on("changed",x)}function d(C){u.fire("stable",C)}function x(C){for(var k=0;k<C.length;++k){var O=C[k];O.changeType==="add"?(O.node&&y(O.node.id),O.link&&M(O.link)):O.changeType==="remove"&&(O.node&&A(O.node),O.link&&E(O.link))}s=n.getNodesCount()}function _(){s=0,n.forEachNode(function(C){y(C.id),s+=1}),n.forEachLink(M)}function y(C){var k=a.get(C);if(!k){var O=n.getNode(C);if(!O)throw new Error("initBody() was called with unknown node id");var K=O.position;if(!K){var J=P(O);K=i.getBestNewBodyPosition(J)}k=i.addBodyAt(K),k.id=C,a.set(C,k),b(C),w(O)&&(k.isPinned=!0)}}function A(C){var k=C.id,O=a.get(k);O&&(a.delete(k),i.removeBody(O))}function M(C){b(C.fromId),b(C.toId);var k=a.get(C.fromId),O=a.get(C.toId),K=i.addSpring(k,O,C.length);c(C,K),o[C.id]=K}function E(C){var k=o[C.id];if(k){var O=n.getNode(C.fromId),K=n.getNode(C.toId);O&&b(O.id),K&&b(K.id),delete o[C.id],i.removeSpring(k)}}function P(C){var k=[];if(!C.links)return k;for(var O=Math.min(C.links.length,2),K=0;K<O;++K){var J=C.links[K],te=J.fromId!==C.id?a.get(J.fromId):a.get(J.toId);te&&te.pos&&k.push(te)}return k}function b(C){var k=a.get(C);if(k.mass=r(C),Number.isNaN(k.mass))throw new Error("Node mass should be a number")}function w(C){return C&&(C.isPinned||C.data&&C.data.isPinned)}function N(C){var k=a.get(C);return k||(y(C),k=a.get(C)),k}function U(C){var k=n.getLinks(C);return k?1+k.length/3:1}function ee(C){var k=n.getLinks(C);return k?1+k.size/3:1}}function Zy(){}var Jy=Ps.exports;const Qy=gh(Jy);function Ko(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var ex=typeof global=="object"&&global&&global.Object===Object&&global,tx=typeof self=="object"&&self&&self.Object===Object&&self,Dh=ex||tx||Function("return this")(),To=function(){return Dh.Date.now()},nx=/\s/;function ix(n){for(var e=n.length;e--&&nx.test(n.charAt(e)););return e}var rx=/^\s+/;function ax(n){return n&&n.slice(0,ix(n)+1).replace(rx,"")}var va=Dh.Symbol,Oh=Object.prototype,ox=Oh.hasOwnProperty,sx=Oh.toString,tr=va?va.toStringTag:void 0;function cx(n){var e=ox.call(n,tr),t=n[tr];try{n[tr]=void 0;var i=!0}catch{}var r=sx.call(n);return i&&(e?n[tr]=t:delete n[tr]),r}var lx=Object.prototype,ux=lx.toString;function hx(n){return ux.call(n)}var dx="[object Null]",fx="[object Undefined]",Fl=va?va.toStringTag:void 0;function px(n){return n==null?n===void 0?fx:dx:Fl&&Fl in Object(n)?cx(n):hx(n)}function mx(n){return n!=null&&typeof n=="object"}var gx="[object Symbol]";function vx(n){return typeof n=="symbol"||mx(n)&&px(n)==gx}var Bl=NaN,_x=/^[-+]0x[0-9a-f]+$/i,yx=/^0b[01]+$/i,xx=/^0o[0-7]+$/i,bx=parseInt;function Hl(n){if(typeof n=="number")return n;if(vx(n))return Bl;if(Ko(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ko(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=ax(n);var t=yx.test(n);return t||xx.test(n)?bx(n.slice(2),t?2:8):_x.test(n)?Bl:+n}var Ax="Expected a function",Mx=Math.max,Sx=Math.min;function Ex(n,e,t){var i,r,a,o,s,c,l=0,u=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(Ax);e=Hl(e)||0,Ko(t)&&(u=!!t.leading,h="maxWait"in t,a=h?Mx(Hl(t.maxWait)||0,e):a,f="trailing"in t?!!t.trailing:f);function m(M){var E=i,P=r;return i=r=void 0,l=M,o=n.apply(P,E),o}function g(M){return l=M,s=setTimeout(d,e),u?m(M):o}function v(M){var E=M-c,P=M-l,b=e-E;return h?Sx(b,a-P):b}function p(M){var E=M-c,P=M-l;return c===void 0||E>=e||E<0||h&&P>=a}function d(){var M=To();if(p(M))return x(M);s=setTimeout(d,v(M))}function x(M){return s=void 0,f&&i?m(M):(i=r=void 0,o)}function _(){s!==void 0&&clearTimeout(s),l=0,i=c=r=s=void 0}function y(){return s===void 0?o:x(To())}function A(){var M=To(),E=p(M);if(i=arguments,r=this,c=M,E){if(s===void 0)return g(c);if(h)return clearTimeout(s),s=setTimeout(d,e),m(c)}return s===void 0&&(s=setTimeout(d,e)),o}return A.cancel=_,A.flush=y,A}function wx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function Tx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Gl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Ox(i.key),i)}}function Cx(n,e,t){return e&&Gl(n.prototype,e),t&&Gl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Rx(n,e){return kx(n)||wx(n,e)||Px(n,e)||Lx()}function kx(n){if(Array.isArray(n))return n}function Px(n,e){if(n){if(typeof n=="string")return Vl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vl(n,e)}}function Vl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Lx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ox(n){var e=Dx(n,"string");return typeof e=="symbol"?e:String(e)}var zx=Cx(function n(e,t){var i=t.default,r=i===void 0?null:i,a=t.triggerUpdate,o=a===void 0?!0:a,s=t.onChange,c=s===void 0?function(l,u){}:s;Tx(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=o,this.onChange=c});function Ns(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,a=n.methods,o=a===void 0?{}:a,s=n.aliases,c=s===void 0?{}:s,l=n.init,u=l===void 0?function(){}:l,h=n.update,f=h===void 0?function(){}:h,m=Object.keys(r).map(function(g){return new zx(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),p={};function d(y){return x(y,g),_(),d}var x=function(A,M){u.call(d,A,v,M),v.initialised=!0},_=Ex(function(){v.initialised&&(f.call(d,v,p),p={})},1);return m.forEach(function(y){d[y.name]=A(y);function A(M){var E=M.name,P=M.triggerUpdate,b=P===void 0?!1:P,w=M.onChange,N=w===void 0?function(C,k){}:w,U=M.defaultVal,ee=U===void 0?null:U;return function(C){var k=v[E];if(!arguments.length)return k;var O=C===void 0?ee:C;return v[E]=O,N.call(d,O,v,k),!p.hasOwnProperty(E)&&(p[E]=k),b&&_(),d}}}),Object.keys(o).forEach(function(y){d[y]=function(){for(var A,M=arguments.length,E=new Array(M),P=0;P<M;P++)E[P]=arguments[P];return(A=o[y]).call.apply(A,[d,v].concat(E))}}),Object.entries(c).forEach(function(y){var A=Rx(y,2),M=A[0],E=A[1];return d[M]=d[E]}),d.resetProps=function(){return m.forEach(function(y){d[y.name](y.defaultVal)}),d},d.resetProps(),v._rerender=_,d}}var Ye=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class Wl extends Map{constructor(e,t=Ux){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(jl(this,e))}has(e){return super.has(jl(this,e))}set(e,t){return super.set(Ix(this,e),t)}delete(e){return super.delete(Nx(this,e))}}function jl({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function Ix({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function Nx({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function Ux(n){return n!==null&&typeof n=="object"?n.valueOf():n}function Fx(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function Bx(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function Hx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function Gx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Vx(n,e){if(n==null)return{};var t=Gx(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Wx(n,e){return $x(n)||Hx(n,e)||zh(n,e)||Kx()}function jx(n){return Xx(n)||qx(n)||zh(n)||Yx()}function Xx(n){if(Array.isArray(n))return Zo(n)}function $x(n){if(Array.isArray(n))return n}function qx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function zh(n,e){if(n){if(typeof n=="string")return Zo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zo(n,e)}}function Zo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Yx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Jx(n){var e=Zx(n,"string");return typeof e=="symbol"?e:String(e)}var Xl=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),a=n.reduce(function(s,c){var l=s,u=c;return r.forEach(function(h,f){var m=h.keyAccessor,g=h.isProp,v;if(g){var p=u,d=p[m],x=Vx(p,[m].map(Jx));v=d,u=x}else v=m(u,f);f+1<r.length?(l.hasOwnProperty(v)||(l[v]={}),l=l[v]):t?(l.hasOwnProperty(v)||(l[v]=[]),l[v].push(u)):l[v]=u}),s},{});t instanceof Function&&function s(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;l===r.length?Object.keys(c).forEach(function(u){return c[u]=t(c[u])}):Object.values(c).forEach(function(u){return s(u,l+1)})}(a);var o=a;return i&&(o=[],function s(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];l.length===r.length?o.push({keys:l,vals:c}):Object.entries(c).forEach(function(u){var h=Wx(u,2),f=h[0],m=h[1];return s(m,[].concat(jx(l),[f]))})}(a),e instanceof Array&&e.length===0&&o.length===1&&(o[0].keys=[])),o};function Qx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function $l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function eb(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$l(Object(t),!0).forEach(function(i){Ih(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$l(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ih(n,e,t){return e=lb(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function tb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function nb(n,e){if(n==null)return{};var t=tb(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Nh(n,e){return rb(n)||Qx(n,e)||Uh(n,e)||sb()}function _a(n){return ib(n)||ab(n)||Uh(n)||ob()}function ib(n){if(Array.isArray(n))return Jo(n)}function rb(n){if(Array.isArray(n))return n}function ab(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Uh(n,e){if(n){if(typeof n=="string")return Jo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Jo(n,e)}}function Jo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function ob(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function lb(n){var e=cb(n,"string");return typeof e=="symbol"?e:String(e)}var ub=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function hb(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var o=Xl(n,t,!1),s=Xl(e,t,!1),c=Object.assign({},o,s);Object.entries(c).forEach(function(l){var u=Nh(l,2),h=u[0],f=u[1],m=o.hasOwnProperty(h)?s.hasOwnProperty(h)?"update":"exit":"enter";i[m].push(m==="update"?[o[h],s[h]]:f)})}else{var r=new Set(n),a=new Set(e);new Set([].concat(_a(r),_a(a))).forEach(function(l){var u=r.has(l)?a.has(l)?"update":"exit":"enter";i[u].push(u==="update"?[l,l]:l)})}return i}function db(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,a=t.dataBindAttr,o=a===void 0?"__data":a,s=t.idAccessor,c=t.purge,l=c===void 0?!1:c,u=function(p){return p.hasOwnProperty(o)},h=e.filter(function(v){return!u(v)}),f=e.filter(u).map(function(v){return v[o]}),m=n,g=l?{enter:m,exit:f,update:[]}:hb(f,m,s);return g.update=g.update.map(function(v){var p=Nh(v,2),d=p[0],x=p[1];return d!==x&&(x[r]=d[r],x[r][o]=x),x}),g.exit=g.exit.concat(h.map(function(v){return Ih({},r,v)})),g}function fb(n,e,t,i,r){var a=r.createObj,o=a===void 0?function(P){return{}}:a,s=r.updateObj,c=s===void 0?function(P,b){}:s,l=r.exitObj,u=l===void 0?function(P){}:l,h=r.objBindAttr,f=h===void 0?"__obj":h,m=r.dataBindAttr,g=m===void 0?"__data":m,v=nb(r,ub),p=db(n,e,eb({objBindAttr:f,dataBindAttr:g},v)),d=p.enter,x=p.update,_=p.exit;_.forEach(function(P){var b=P[f];delete P[f],u(b),i(b)});var y=M(d),A=[].concat(_a(d),_a(x));E(A),y.forEach(t);function M(P){var b=[];return P.forEach(function(w){var N=o(w);N&&(N[g]=w,w[f]=N,b.push(N))}),b}function E(P){P.forEach(function(b){var w=b[f];w&&(w[g]=b,c(w,b))})}}function pb(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const ql=Symbol("implicit");function Fh(){var n=new Wl,e=[],t=[],i=ql;function r(a){let o=n.get(a);if(o===void 0){if(i!==ql)return i;n.set(a,o=e.push(a)-1)}return t[o%t.length]}return r.domain=function(a){if(!arguments.length)return e.slice();e=[],n=new Wl;for(const o of a)n.has(o)||n.set(o,e.push(o)-1);return r},r.range=function(a){return arguments.length?(t=Array.from(a),r):t.slice()},r.unknown=function(a){return arguments.length?(i=a,r):i},r.copy=function(){return Fh(e,t).unknown(i)},pb.apply(r,arguments),r}function mb(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const gb=mb("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function ya(n){"@babel/helpers - typeof";return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ya(n)}var vb=/^\s+/,_b=/\s+$/;function Me(n,e){if(n=n||"",e=e||{},n instanceof Me)return n;if(!(this instanceof Me))return new Me(n,e);var t=yb(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Me.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,a,o,s;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*a+.7152*o+.0722*s},setAlpha:function(e){return this._a=Bh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Kl(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Kl(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Yl(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Yl(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Zl(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Mb(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(rt(this._r,255)*100)+"%",g:Math.round(rt(this._g,255)*100)+"%",b:Math.round(rt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%)":"rgba("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:zb[Zl(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Jl(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=Me(e);i="#"+Jl(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,a=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Me(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Tb,arguments)},brighten:function(){return this._applyModification(Cb,arguments)},darken:function(){return this._applyModification(Rb,arguments)},desaturate:function(){return this._applyModification(Sb,arguments)},saturate:function(){return this._applyModification(Eb,arguments)},greyscale:function(){return this._applyModification(wb,arguments)},spin:function(){return this._applyModification(kb,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Db,arguments)},complement:function(){return this._applyCombination(Pb,arguments)},monochromatic:function(){return this._applyCombination(Ob,arguments)},splitcomplement:function(){return this._applyCombination(Lb,arguments)},triad:function(){return this._applyCombination(Ql,[3])},tetrad:function(){return this._applyCombination(Ql,[4])}};Me.fromRatio=function(n,e){if(ya(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=sr(n[i]));n=t}return Me(n,e)};function yb(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,a=null,o=!1,s=!1;return typeof n=="string"&&(n=Fb(n)),ya(n)=="object"&&(mn(n.r)&&mn(n.g)&&mn(n.b)?(e=xb(n.r,n.g,n.b),o=!0,s=String(n.r).substr(-1)==="%"?"prgb":"rgb"):mn(n.h)&&mn(n.s)&&mn(n.v)?(i=sr(n.s),r=sr(n.v),e=Ab(n.h,i,r),o=!0,s="hsv"):mn(n.h)&&mn(n.s)&&mn(n.l)&&(i=sr(n.s),a=sr(n.l),e=bb(n.h,i,a),o=!0,s="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=Bh(t),{ok:o,format:n.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function xb(n,e,t){return{r:rt(n,255)*255,g:rt(e,255)*255,b:rt(t,255)*255}}function Yl(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,o,s=(i+r)/2;if(i==r)a=o=0;else{var c=i-r;switch(o=s>.5?c/(2-i-r):c/(i+r),i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s:o,l:s}}function bb(n,e,t){var i,r,a;n=rt(n,360),e=rt(e,100),t=rt(t,100);function o(l,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?l+(u-l)*6*h:h<1/2?u:h<2/3?l+(u-l)*(2/3-h)*6:l}if(e===0)i=r=a=t;else{var s=t<.5?t*(1+e):t+e-t*e,c=2*t-s;i=o(c,s,n+1/3),r=o(c,s,n),a=o(c,s,n-1/3)}return{r:i*255,g:r*255,b:a*255}}function Kl(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,o,s=i,c=i-r;if(o=i===0?0:c/i,i==r)a=0;else{switch(i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s:o,v:s}}function Ab(n,e,t){n=rt(n,360)*6,e=rt(e,100),t=rt(t,100);var i=Math.floor(n),r=n-i,a=t*(1-e),o=t*(1-r*e),s=t*(1-(1-r)*e),c=i%6,l=[t,o,a,a,s,t][c],u=[s,t,t,o,a,a][c],h=[a,a,s,t,t,o][c];return{r:l*255,g:u*255,b:h*255}}function Zl(n,e,t,i){var r=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Mb(n,e,t,i,r){var a=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(Hh(i))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Jl(n,e,t,i){var r=[en(Hh(i)),en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return r.join("")}Me.equals=function(n,e){return!n||!e?!1:Me(n).toRgbString()==Me(e).toRgbString()};Me.random=function(){return Me.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Sb(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.s-=e/100,t.s=Oa(t.s),Me(t)}function Eb(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.s+=e/100,t.s=Oa(t.s),Me(t)}function wb(n){return Me(n).desaturate(100)}function Tb(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.l+=e/100,t.l=Oa(t.l),Me(t)}function Cb(n,e){e=e===0?0:e||10;var t=Me(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Me(t)}function Rb(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.l-=e/100,t.l=Oa(t.l),Me(t)}function kb(n,e){var t=Me(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,Me(t)}function Pb(n){var e=Me(n).toHsl();return e.h=(e.h+180)%360,Me(e)}function Ql(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Me(n).toHsl(),i=[Me(n)],r=360/e,a=1;a<e;a++)i.push(Me({h:(t.h+a*r)%360,s:t.s,l:t.l}));return i}function Lb(n){var e=Me(n).toHsl(),t=e.h;return[Me(n),Me({h:(t+72)%360,s:e.s,l:e.l}),Me({h:(t+216)%360,s:e.s,l:e.l})]}function Db(n,e,t){e=e||6,t=t||30;var i=Me(n).toHsl(),r=360/t,a=[Me(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,a.push(Me(i));return a}function Ob(n,e){e=e||6;for(var t=Me(n).toHsv(),i=t.h,r=t.s,a=t.v,o=[],s=1/e;e--;)o.push(Me({h:i,s:r,v:a})),a=(a+s)%1;return o}Me.mix=function(n,e,t){t=t===0?0:t||50;var i=Me(n).toRgb(),r=Me(e).toRgb(),a=t/100,o={r:(r.r-i.r)*a+i.r,g:(r.g-i.g)*a+i.g,b:(r.b-i.b)*a+i.b,a:(r.a-i.a)*a+i.a};return Me(o)};Me.readability=function(n,e){var t=Me(n),i=Me(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};Me.isReadable=function(n,e,t){var i=Me.readability(n,e),r,a;switch(a=!1,r=Bb(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7;break}return a};Me.mostReadable=function(n,e,t){var i=null,r=0,a,o,s,c;t=t||{},o=t.includeFallbackColors,s=t.level,c=t.size;for(var l=0;l<e.length;l++)a=Me.readability(n,e[l]),a>r&&(r=a,i=Me(e[l]));return Me.isReadable(n,i,{level:s,size:c})||!o?i:(t.includeFallbackColors=!1,Me.mostReadable(n,["#fff","#000"],t))};var Qo=Me.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},zb=Me.hexNames=Ib(Qo);function Ib(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Bh(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function rt(n,e){Nb(n)&&(n="100%");var t=Ub(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Oa(n){return Math.min(1,Math.max(0,n))}function Ut(n){return parseInt(n,16)}function Nb(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function Ub(n){return typeof n=="string"&&n.indexOf("%")!=-1}function en(n){return n.length==1?"0"+n:""+n}function sr(n){return n<=1&&(n=n*100+"%"),n}function Hh(n){return Math.round(parseFloat(n)*255).toString(16)}function eu(n){return Ut(n)/255}var Yt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function mn(n){return!!Yt.CSS_UNIT.exec(n)}function Fb(n){n=n.replace(vb,"").replace(_b,"").toLowerCase();var e=!1;if(Qo[n])n=Qo[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Yt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Yt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Yt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Yt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Yt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Yt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Yt.hex8.exec(n))?{r:Ut(t[1]),g:Ut(t[2]),b:Ut(t[3]),a:eu(t[4]),format:e?"name":"hex8"}:(t=Yt.hex6.exec(n))?{r:Ut(t[1]),g:Ut(t[2]),b:Ut(t[3]),format:e?"name":"hex"}:(t=Yt.hex4.exec(n))?{r:Ut(t[1]+""+t[1]),g:Ut(t[2]+""+t[2]),b:Ut(t[3]+""+t[3]),a:eu(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Yt.hex3.exec(n))?{r:Ut(t[1]+""+t[1]),g:Ut(t[2]+""+t[2]),b:Ut(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Bb(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function Hb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function tu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Gh(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tu(Object(t),!0).forEach(function(i){Us(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):tu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function es(n){"@babel/helpers - typeof";return es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},es(n)}function Gb(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function nu(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Xh(i.key),i)}}function Vb(n,e,t){return e&&nu(n.prototype,e),t&&nu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Us(n,e,t){return e=Xh(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wb(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ba(n,e)}function xa(n){return xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xa(n)}function ba(n,e){return ba=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ba(n,e)}function Vh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function aa(n,e,t){return Vh()?aa=Reflect.construct.bind():aa=function(r,a,o){var s=[null];s.push.apply(s,a);var c=Function.bind.apply(r,s),l=new c;return o&&ba(l,o.prototype),l},aa.apply(null,arguments)}function jb(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Xb(n,e){if(n==null)return{};var t=jb(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Wh(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $b(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wh(n)}function qb(n){var e=Vh();return function(){var i=xa(n),r;if(e){var a=xa(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return $b(this,r)}}function iu(n,e){return Kb(n)||Hb(n,e)||jh(n,e)||Qb()}function Kt(n){return Yb(n)||Zb(n)||jh(n)||Jb()}function Yb(n){if(Array.isArray(n))return ts(n)}function Kb(n){if(Array.isArray(n))return n}function Zb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function jh(n,e){if(n){if(typeof n=="string")return ts(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ts(n,e)}}function ts(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Jb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e1(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Xh(n){var e=e1(n,"string");return typeof e=="symbol"?e:String(e)}var t1=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},n1=function n(e){e.geometry&&e.geometry.dispose(),e.material&&t1(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},ns=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),n1(t)}},i1=["objFilter"];function nr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,a=Xb(t,i1);return fb(n,e.children.filter(r),function(o){return e.add(o)},function(o){e.remove(o),ns(o)},Gh({objBindAttr:"__threeObj"},a))}var ir=function(e){return isNaN(e)?parseInt(Me(e).toHex(),16):e},Co=function(e){return isNaN(e)?Me(e).getAlpha():1},r1=Fh(gb);function ru(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=r1(e(i))})}function a1(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.nodeFilter,o=a===void 0?function(){return!0}:a,s=r.onLoopError,c=s===void 0?function(m){throw"Invalid DAG structure! Found cycle in node path: ".concat(m.join(" -> "),".")}:s,l={};t.forEach(function(m){return l[e(m)]={data:m,out:[],depth:-1,skip:!o(m)}}),i.forEach(function(m){var g=m.source,v=m.target,p=y(g),d=y(v);if(!l.hasOwnProperty(p))throw"Missing source node with id: ".concat(p);if(!l.hasOwnProperty(d))throw"Missing target node with id: ".concat(d);var x=l[p],_=l[d];x.out.push(_);function y(A){return es(A)==="object"?e(A):A}});var u=[];f(Object.values(l));var h=Object.assign.apply(Object,[{}].concat(Kt(Object.entries(l).filter(function(m){var g=iu(m,2),v=g[1];return!v.skip}).map(function(m){var g=iu(m,2),v=g[0],p=g[1];return Us({},v,p.depth)}))));return h;function f(m){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,p=function(){var A=m[d];if(g.indexOf(A)!==-1){var M=[].concat(Kt(g.slice(g.indexOf(A))),[A]).map(function(E){return e(E.data)});return u.some(function(E){return E.length===M.length&&E.every(function(P,b){return P===M[b]})})||(u.push(M),c(M)),"continue"}v>A.depth&&(A.depth=v,f(A.out,[].concat(Kt(g),[A]),v+(A.skip?0:1)))},d=0,x=m.length;d<x;d++)var _=p()}}var Pe=window.THREE?window.THREE:{Group:Pi,Mesh:Qt,MeshLambertMaterial:V0,Color:We,BufferGeometry:Dt,BufferAttribute:jt,Matrix4:at,Vector3:D,SphereGeometry:La,CylinderGeometry:Pa,TubeGeometry:Es,ConeGeometry:Ss,Line:T0,LineBasicMaterial:Qu,QuadraticBezierCurve3:Ms,CubicBezierCurve3:th,Box3:ii},au={graph:yy,forcelayout:Qy},o1=2,ou=new Pe.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Qr=new Pe.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",s1=Ns({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(a,o){a.forEach(function(s){delete s[o],delete s["v".concat(o)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),a(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var o=Ye(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var m=f.__threeObj;if(m){var g=t?f:e.layout.getNodePosition(f[e.nodeId]),v=o(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?m.children[0]:m,{x:g.x,y:g.y,z:g.z},f)||v)&&(m.position.x=g.x,m.position.y=g.y||0,m.position.z=g.z||0)}});var s=Ye(e.linkWidth),c=Ye(e.linkCurvature),l=Ye(e.linkCurveRotation),u=Ye(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var m=f.__lineObj;if(m){var g=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),v=g[t?"source":"from"],p=g[t?"target":"to"];if(!(!v||!p||!v.hasOwnProperty("x")||!p.hasOwnProperty("x"))){h(f);var d=u(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?m.children[1]:m,{start:{x:v.x,y:v.y,z:v.z},end:{x:p.x,y:p.y,z:p.z}},f)&&!d)){var x=30,_=f.__curve,y=m.children.length?m.children[0]:m;if(y.type==="Line"){if(_)y.geometry.setFromPoints(_.getPoints(x));else{var A=y.geometry.getAttribute("position");(!A||!A.array||A.array.length!==6)&&y.geometry[ou]("position",A=new Pe.BufferAttribute(new Float32Array(2*3),3)),A.array[0]=v.x,A.array[1]=v.y||0,A.array[2]=v.z||0,A.array[3]=p.x,A.array[4]=p.y||0,A.array[5]=p.z||0,A.needsUpdate=!0}y.geometry.computeBoundingSphere()}else if(y.type==="Mesh")if(_){y.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(y.position.set(0,0,0),y.rotation.set(0,0,0),y.scale.set(1,1,1));var U=Math.ceil(s(f)*10)/10,ee=U/2,C=new Pe.TubeGeometry(_,x,ee,e.linkResolution,!1);y.geometry.dispose(),y.geometry=C}else{if(!y.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var M=Math.ceil(s(f)*10)/10,E=M/2,P=new Pe.CylinderGeometry(E,E,1,e.linkResolution,1,!1);P[Qr](new Pe.Matrix4().makeTranslation(0,1/2,0)),P[Qr](new Pe.Matrix4().makeRotationX(Math.PI/2)),y.geometry.dispose(),y.geometry=P}var b=new Pe.Vector3(v.x,v.y||0,v.z||0),w=new Pe.Vector3(p.x,p.y||0,p.z||0),N=b.distanceTo(w);y.position.x=b.x,y.position.y=b.y,y.position.z=b.z,y.scale.z=N,y.parent.localToWorld(w),y.lookAt(w)}}}}});function h(f){var m=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=m[t?"source":"from"],v=m[t?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var p=c(f);if(!p)f.__curve=null;else{var d=new Pe.Vector3(g.x,g.y||0,g.z||0),x=new Pe.Vector3(v.x,v.y||0,v.z||0),_=d.distanceTo(x),y,A=l(f);if(_>0){var M=v.x-g.x,E=v.y-g.y||0,P=new Pe.Vector3().subVectors(x,d),b=P.clone().multiplyScalar(p).cross(M!==0||E!==0?new Pe.Vector3(0,0,1):new Pe.Vector3(0,1,0)).applyAxisAngle(P.normalize(),A).add(new Pe.Vector3().addVectors(d,x).divideScalar(2));y=new Pe.QuadraticBezierCurve3(d,b,x)}else{var w=p*70,N=-A,U=N+Math.PI/2;y=new Pe.CubicBezierCurve3(d,new Pe.Vector3(w*Math.cos(U),w*Math.sin(U),0).add(d),new Pe.Vector3(w*Math.cos(N),w*Math.sin(N),0).add(d),x)}f.__curve=y}}}}function r(){var o=Ye(e.linkDirectionalArrowRelPos),s=Ye(e.linkDirectionalArrowLength),c=Ye(e.nodeVal);e.graphData.links.forEach(function(l){var u=l.__arrowObj;if(u){var h=t?l:e.layout.getLinkPosition(e.layout.graph.getLink(l.source,l.target).id),f=h[t?"source":"from"],m=h[t?"target":"to"];if(!(!f||!m||!f.hasOwnProperty("x")||!m.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,c(f)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(m)||1))*e.nodeRelSize,p=s(l),d=o(l),x=l.__curve?function(P){return l.__curve.getPoint(P)}:function(P){var b=function(N,U,ee,C){return U[N]+(ee[N]-U[N])*C||0};return{x:b("x",f,m,P),y:b("y",f,m,P),z:b("z",f,m,P)}},_=l.__curve?l.__curve.getLength():Math.sqrt(["x","y","z"].map(function(P){return Math.pow((m[P]||0)-(f[P]||0),2)}).reduce(function(P,b){return P+b},0)),y=g+p+(_-g-v-p)*d,A=x(y/_),M=x((y-p)/_);["x","y","z"].forEach(function(P){return u.position[P]=M[P]});var E=aa(Pe.Vector3,Kt(["x","y","z"].map(function(P){return A[P]})));u.parent.localToWorld(E),u.lookAt(E)}}})}function a(){var o=Ye(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var c=s.__photonsObj&&s.__photonsObj.children,l=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!l||!l.length)&&(!c||!c.length))){var u=t?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),h=u[t?"source":"from"],f=u[t?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var m=o(s),g=s.__curve?function(p){return s.__curve.getPoint(p)}:function(p){var d=function(_,y,A,M){return y[_]+(A[_]-y[_])*M||0};return{x:d("x",h,f,p),y:d("y",h,f,p),z:d("z",h,f,p)}},v=[].concat(Kt(c||[]),Kt(l||[]));v.forEach(function(p,d){var x=p.parent.__linkThreeObjType==="singleHopPhotons";if(p.hasOwnProperty("__progressRatio")||(p.__progressRatio=x?0:d/c.length),p.__progressRatio+=m,p.__progressRatio>=1)if(!x)p.__progressRatio=p.__progressRatio%1;else{p.parent.remove(p),ns(p);return}var _=p.__progressRatio,y=g(_);["x","y","z"].forEach(function(A){return p.position[A]=y[A]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new Pe.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=Ye(e.linkDirectionalParticleWidth),a=Math.ceil(r(t)*10)/10/2,o=e.linkDirectionalParticleResolution,s=new Pe.SphereGeometry(a,o,o),c=Ye(e.linkColor),l=Ye(e.linkDirectionalParticleColor),u=l(t)||c(t)||"#f0f0f0",h=new Pe.Color(ir(u)),f=e.linkOpacity*3,m=new Pe.MeshLambertMaterial({color:h,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new Pe.Mesh(s,m))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(a){var o=[];if(a.geometry){a.geometry.computeBoundingBox();var s=new Pe.Box3;s.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),o.push(s)}return o.concat.apply(o,Kt((a.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Kt(["x","y","z"].map(function(r){return Us({},r,[Bx(i,function(a){return a.min[r]}),Fx(i,function(a){return a.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:uy().force("link",Y_()).force("charge",hy()).force("center",Q0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(V){return V.some(function(ne){return t.hasOwnProperty(ne)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&ru(e.graphData.nodes,Ye(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&ru(e.graphData.links,Ye(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=Ye(e.nodeThreeObject),a=Ye(e.nodeThreeObjectExtend),o=Ye(e.nodeVal),s=Ye(e.nodeColor),c=Ye(e.nodeVisibility),l={},u={};nr(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(V){return V.__graphObjType==="node"},createObj:function(V){var ne=r(V),I=a(V);ne&&e.nodeThreeObject===ne&&(ne=ne.clone());var Z;return ne&&!I?Z=ne:(Z=new Pe.Mesh,Z.__graphDefaultObj=!0,ne&&I&&Z.add(ne)),Z.__graphObjType="node",Z},updateObj:function(V,ne){if(V.__graphDefaultObj){var I=o(ne)||1,Z=Math.cbrt(I)*e.nodeRelSize,le=e.nodeResolution;(!V.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||V.geometry.parameters.radius!==Z||V.geometry.parameters.widthSegments!==le)&&(l.hasOwnProperty(I)||(l[I]=new Pe.SphereGeometry(Z,le,le)),V.geometry.dispose(),V.geometry=l[I]);var ue=s(ne),_e=new Pe.Color(ir(ue||"#ffffaa")),B=e.nodeOpacity*Co(ue);(V.material.type!=="MeshLambertMaterial"||!V.material.color.equals(_e)||V.material.opacity!==B)&&(u.hasOwnProperty(ue)||(u[ue]=new Pe.MeshLambertMaterial({color:_e,transparent:!0,opacity:B})),V.material.dispose(),V.material=u[ue])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=Ye(e.linkThreeObject),f=Ye(e.linkThreeObjectExtend),m=Ye(e.linkMaterial),g=Ye(e.linkVisibility),v=Ye(e.linkColor),p=Ye(e.linkWidth),d={},x={},_={},y=e.graphData.links.filter(g);if(nr(y,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(V){return V.__graphObjType==="link"},exitObj:function(V){var ne=V.__data&&V.__data.__singleHopPhotonsObj;ne&&(ne.parent.remove(ne),ns(ne),delete V.__data.__singleHopPhotonsObj)},createObj:function(V){var ne=h(V),I=f(V);ne&&e.linkThreeObject===ne&&(ne=ne.clone());var Z;if(!ne||I){var le=!!p(V);if(le)Z=new Pe.Mesh;else{var ue=new Pe.BufferGeometry;ue[ou]("position",new Pe.BufferAttribute(new Float32Array(2*3),3)),Z=new Pe.Line(ue)}}var _e;return ne?I?(_e=new Pe.Group,_e.__graphDefaultObj=!0,_e.add(Z),_e.add(ne)):_e=ne:(_e=Z,_e.__graphDefaultObj=!0),_e.renderOrder=10,_e.__graphObjType="link",_e},updateObj:function(V,ne){if(V.__graphDefaultObj){var I=V.children.length?V.children[0]:V,Z=Math.ceil(p(ne)*10)/10,le=!!Z;if(le){var ue=Z/2,_e=e.linkResolution;if(!I.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||I.geometry.parameters.radiusTop!==ue||I.geometry.parameters.radialSegments!==_e){if(!d.hasOwnProperty(Z)){var B=new Pe.CylinderGeometry(ue,ue,1,_e,1,!1);B[Qr](new Pe.Matrix4().makeTranslation(0,1/2,0)),B[Qr](new Pe.Matrix4().makeRotationX(Math.PI/2)),d[Z]=B}I.geometry.dispose(),I.geometry=d[Z]}}var tt=m(ne);if(tt)I.material=tt;else{var be=v(ne),Ce=new Pe.Color(ir(be||"#f0f0f0")),ye=e.linkOpacity*Co(be),je=le?"MeshLambertMaterial":"LineBasicMaterial";if(I.material.type!==je||!I.material.color.equals(Ce)||I.material.opacity!==ye){var De=le?x:_;De.hasOwnProperty(be)||(De[be]=new Pe[je]({color:Ce,transparent:ye<1,opacity:ye,depthWrite:ye>=1})),I.material.dispose(),I.material=De[be]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var A=Ye(e.linkDirectionalArrowLength),M=Ye(e.linkDirectionalArrowColor);nr(y.filter(A),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(V){return V.__linkThreeObjType==="arrow"},createObj:function(){var V=new Pe.Mesh(void 0,new Pe.MeshLambertMaterial({transparent:!0}));return V.__linkThreeObjType="arrow",V},updateObj:function(V,ne){var I=A(ne),Z=e.linkDirectionalArrowResolution;if(!V.geometry.type.match(/^Cone(Buffer)?Geometry$/)||V.geometry.parameters.height!==I||V.geometry.parameters.radialSegments!==Z){var le=new Pe.ConeGeometry(I*.25,I,Z);le.translate(0,I/2,0),le.rotateX(Math.PI/2),V.geometry.dispose(),V.geometry=le}var ue=M(ne)||v(ne)||"#f0f0f0";V.material.color=new Pe.Color(ir(ue)),V.material.opacity=e.linkOpacity*3*Co(ue)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var E=Ye(e.linkDirectionalParticles),P=Ye(e.linkDirectionalParticleWidth),b=Ye(e.linkDirectionalParticleColor),w={},N={};nr(y.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(V){return V.__linkThreeObjType==="photons"},createObj:function(){var V=new Pe.Group;return V.__linkThreeObjType="photons",V},updateObj:function(V,ne){var I=Math.round(Math.abs(E(ne))),Z=!!V.children.length&&V.children[0],le=Math.ceil(P(ne)*10)/10/2,ue=e.linkDirectionalParticleResolution,_e;Z&&Z.geometry.parameters.radius===le&&Z.geometry.parameters.widthSegments===ue?_e=Z.geometry:(N.hasOwnProperty(le)||(N[le]=new Pe.SphereGeometry(le,ue,ue)),_e=N[le],Z&&Z.geometry.dispose());var B=b(ne)||v(ne)||"#f0f0f0",tt=new Pe.Color(ir(B)),be=e.linkOpacity*3,Ce;Z&&Z.material.color.equals(tt)&&Z.material.opacity===be?Ce=Z.material:(w.hasOwnProperty(B)||(w[B]=new Pe.MeshLambertMaterial({color:tt,transparent:!0,opacity:be})),Ce=w[B],Z&&Z.material.dispose()),nr(Kt(new Array(I)).map(function(ye,je){return{idx:je}}),V,{idAccessor:function(je){return je.idx},createObj:function(){return new Pe.Mesh(_e,Ce)},updateObj:function(je){je.geometry=_e,je.material=Ce}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(G){G.source=G[e.linkSource],G.target=G[e.linkTarget]});var U=e.forceEngine!=="ngraph",ee;if(U){(ee=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var C=e.d3ForceLayout.force("link");C&&C.id(function(G){return G[e.nodeId]}).links(e.graphData.links);var k=e.dagMode&&a1(e.graphData,function(G){return G[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),O=Math.max.apply(Math,Kt(Object.values(k||[]))),K=e.dagLevelDistance||e.graphData.nodes.length/(O||1)*o1*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var J=function(V,ne){return function(I){return V?(k[I[e.nodeId]]-O/2)*K*(ne?-1:1):void 0}},te=J(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),F=J(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),$=J(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(G){G.fx=te(G),G.fy=F(G),G.fz=$(G)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?dy(function(G){var V=k[G[e.nodeId]]||-1;return(e.dagMode==="radialin"?O-V:V)*K}).strength(function(G){return e.dagNodeFilter(G)?1:0}):null)}else{var Q=au.graph();e.graphData.nodes.forEach(function(G){Q.addNode(G[e.nodeId])}),e.graphData.links.forEach(function(G){Q.addLink(G.source,G.target)}),ee=au.forcelayout(Q,Gh({dimensions:e.numDimensions},e.ngraphPhysics)),ee.graph=Q}for(var W=0;W<e.warmupTicks&&!(U&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);W++)ee[U?"tick":"step"]();e.layout=ee,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function c1(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){Wb(o,r);var a=qb(o);function o(){var s;Gb(this,o);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return s=a.call.apply(a,[this].concat(l)),s.__kapsuleInstance=n().apply(void 0,[].concat(Kt(t?[Wh(s)]:[]),l)),s}return Vb(o)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var a,o=(a=this.__kapsuleInstance)[r].apply(a,arguments);return o===this.__kapsuleInstance?this:o}}),i}var l1=window.THREE?window.THREE:{Group:Pi},$h=c1(s1,l1.Group,!0);const Ro={type:"change"},ko={type:"start"},Po={type:"end"};class u1 extends nn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.target=new D;const a=1e-6,o=new D;let s=1,c=r.NONE,l=r.NONE,u=0,h=0,f=0;const m=new D,g=new fe,v=new fe,p=new D,d=new fe,x=new fe,_=new fe,y=new fe,A=[],M={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const I=i.domElement.getBoundingClientRect(),Z=i.domElement.ownerDocument.documentElement;i.screen.left=I.left+window.pageXOffset-Z.clientLeft,i.screen.top=I.top+window.pageYOffset-Z.clientTop,i.screen.width=I.width,i.screen.height=I.height};const E=function(){const I=new fe;return function(le,ue){return I.set((le-i.screen.left)/i.screen.width,(ue-i.screen.top)/i.screen.height),I}}(),P=function(){const I=new fe;return function(le,ue){return I.set((le-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-ue))/i.screen.width),I}}();this.rotateCamera=function(){const I=new D,Z=new tn,le=new D,ue=new D,_e=new D,B=new D;return function(){B.set(v.x-g.x,v.y-g.y,0);let be=B.length();be?(m.copy(i.object.position).sub(i.target),le.copy(m).normalize(),ue.copy(i.object.up).normalize(),_e.crossVectors(ue,le).normalize(),ue.setLength(v.y-g.y),_e.setLength(v.x-g.x),B.copy(ue.add(_e)),I.crossVectors(B,m).normalize(),be*=i.rotateSpeed,Z.setFromAxisAngle(I,be),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z),p.copy(I),f=be):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),m.copy(i.object.position).sub(i.target),Z.setFromAxisAngle(p,f),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z)),g.copy(v)}}(),this.zoomCamera=function(){let I;c===r.TOUCH_ZOOM_PAN?(I=u/h,u=h,i.object.isPerspectiveCamera?m.multiplyScalar(I):i.object.isOrthographicCamera?(i.object.zoom=Wo.clamp(i.object.zoom/I,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(I=1+(x.y-d.y)*i.zoomSpeed,I!==1&&I>0&&(i.object.isPerspectiveCamera?m.multiplyScalar(I):i.object.isOrthographicCamera?(i.object.zoom=Wo.clamp(i.object.zoom/I,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?d.copy(x):d.y+=(x.y-d.y)*this.dynamicDampingFactor)},this.panCamera=function(){const I=new fe,Z=new D,le=new D;return function(){if(I.copy(y).sub(_),I.lengthSq()){if(i.object.isOrthographicCamera){const _e=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,B=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;I.x*=_e,I.y*=B}I.multiplyScalar(m.length()*i.panSpeed),le.copy(m).cross(i.object.up).setLength(I.x),le.add(Z.copy(i.object.up).setLength(I.y)),i.object.position.add(le),i.target.add(le),i.staticMoving?_.copy(y):_.add(I.subVectors(y,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(m.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,m.setLength(i.maxDistance)),d.copy(x)),m.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,m.setLength(i.minDistance)),d.copy(x)))},this.update=function(){m.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,m),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),o.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(Ro),o.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(o.distanceToSquared(i.object.position)>a||s!==i.object.zoom)&&(i.dispatchEvent(Ro),o.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,l=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),m.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Ro),o.copy(i.object.position),s=i.object.zoom};function b(I){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",N)),W(I),I.pointerType==="touch"?te(I):k(I))}function w(I){i.enabled!==!1&&(I.pointerType==="touch"?F(I):O(I))}function N(I){i.enabled!==!1&&(I.pointerType==="touch"?$(I):K(),G(I),A.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N)))}function U(I){G(I)}function ee(I){i.enabled!==!1&&(window.removeEventListener("keydown",ee),l===r.NONE&&(I.code===i.keys[r.ROTATE]&&!i.noRotate?l=r.ROTATE:I.code===i.keys[r.ZOOM]&&!i.noZoom?l=r.ZOOM:I.code===i.keys[r.PAN]&&!i.noPan&&(l=r.PAN)))}function C(){i.enabled!==!1&&(l=r.NONE,window.addEventListener("keydown",ee))}function k(I){if(c===r.NONE)switch(I.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const Z=l!==r.NONE?l:c;Z===r.ROTATE&&!i.noRotate?(v.copy(P(I.pageX,I.pageY)),g.copy(v)):Z===r.ZOOM&&!i.noZoom?(d.copy(E(I.pageX,I.pageY)),x.copy(d)):Z===r.PAN&&!i.noPan&&(_.copy(E(I.pageX,I.pageY)),y.copy(_)),i.dispatchEvent(ko)}function O(I){const Z=l!==r.NONE?l:c;Z===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(P(I.pageX,I.pageY))):Z===r.ZOOM&&!i.noZoom?x.copy(E(I.pageX,I.pageY)):Z===r.PAN&&!i.noPan&&y.copy(E(I.pageX,I.pageY))}function K(){c=r.NONE,i.dispatchEvent(Po)}function J(I){if(i.enabled!==!1&&i.noZoom!==!0){switch(I.preventDefault(),I.deltaMode){case 2:d.y-=I.deltaY*.025;break;case 1:d.y-=I.deltaY*.01;break;default:d.y-=I.deltaY*25e-5;break}i.dispatchEvent(ko),i.dispatchEvent(Po)}}function te(I){switch(V(I),A.length){case 1:c=r.TOUCH_ROTATE,v.copy(P(A[0].pageX,A[0].pageY)),g.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const Z=A[0].pageX-A[1].pageX,le=A[0].pageY-A[1].pageY;h=u=Math.sqrt(Z*Z+le*le);const ue=(A[0].pageX+A[1].pageX)/2,_e=(A[0].pageY+A[1].pageY)/2;_.copy(E(ue,_e)),y.copy(_);break}i.dispatchEvent(ko)}function F(I){switch(V(I),A.length){case 1:g.copy(v),v.copy(P(I.pageX,I.pageY));break;default:const Z=ne(I),le=I.pageX-Z.x,ue=I.pageY-Z.y;h=Math.sqrt(le*le+ue*ue);const _e=(I.pageX+Z.x)/2,B=(I.pageY+Z.y)/2;y.copy(E(_e,B));break}}function $(I){switch(A.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(P(I.pageX,I.pageY)),g.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<A.length;Z++)if(A[Z].pointerId!==I.pointerId){const le=M[A[Z].pointerId];v.copy(P(le.x,le.y)),g.copy(v);break}break}i.dispatchEvent(Po)}function Q(I){i.enabled!==!1&&I.preventDefault()}function W(I){A.push(I)}function G(I){delete M[I.pointerId];for(let Z=0;Z<A.length;Z++)if(A[Z].pointerId==I.pointerId){A.splice(Z,1);return}}function V(I){let Z=M[I.pointerId];Z===void 0&&(Z=new fe,M[I.pointerId]=Z),Z.set(I.pageX,I.pageY)}function ne(I){const Z=I.pointerId===A[0].pointerId?A[1]:A[0];return M[Z.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",ee),window.removeEventListener("keyup",C)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",J,{passive:!1}),window.addEventListener("keydown",ee),window.addEventListener("keyup",C),this.handleResize(),this.update()}}const su={type:"change"},Lo={type:"start"},cu={type:"end"},ea=new Ca,lu=new _n,h1=Math.cos(70*Wo.DEG2RAD);class d1 extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",oe),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(su),i.update(),a=r.NONE},this.update=function(){const L=new D,ie=new tn().setFromUnitVectors(e.up,new D(0,1,0)),me=ie.clone().invert(),ce=new D,Ee=new tn,He=new D,$e=2*Math.PI;return function(pe=null){const z=i.object.position;L.copy(z).sub(i.target),L.applyQuaternion(ie),s.setFromVector3(L),i.autoRotate&&a===r.NONE&&N(b(pe)),i.enableDamping?(s.theta+=c.theta*i.dampingFactor,s.phi+=c.phi*i.dampingFactor):(s.theta+=c.theta,s.phi+=c.phi);let he=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite(he)&&isFinite(de)&&(he<-Math.PI?he+=$e:he>Math.PI&&(he-=$e),de<-Math.PI?de+=$e:de>Math.PI&&(de-=$e),he<=de?s.theta=Math.max(he,Math.min(de,s.theta)):s.theta=s.theta>(he+de)/2?Math.max(he,s.theta):Math.min(de,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&M||i.object.isOrthographicCamera?s.radius=te(s.radius):s.radius=te(s.radius*l),L.setFromSpherical(s),L.applyQuaternion(me),z.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Re=!1;if(i.zoomToCursor&&M){let we=null;if(i.object.isPerspectiveCamera){const qe=L.length();we=te(qe*l);const Ke=qe-we;i.object.position.addScaledVector(y,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new D(A.x,A.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Re=!0;const Ke=new D(A.x,A.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(qe),i.object.updateMatrixWorld(),we=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(we).add(i.object.position):(ea.origin.copy(i.object.position),ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ea.direction))<h1?e.lookAt(i.target):(lu.setFromNormalAndCoplanarPoint(i.object.up,i.target),ea.intersectPlane(lu,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Re=!0);return l=1,M=!1,Re||ce.distanceToSquared(i.object.position)>o||8*(1-Ee.dot(i.object.quaternion))>o||He.distanceToSquared(i.target)>0?(i.dispatchEvent(su),ce.copy(i.object.position),Ee.copy(i.object.quaternion),He.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ae),i.domElement.removeEventListener("pointerdown",De),i.domElement.removeEventListener("pointercancel",S),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",oe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new $o,c=new $o;let l=1;const u=new D,h=new fe,f=new fe,m=new fe,g=new fe,v=new fe,p=new fe,d=new fe,x=new fe,_=new fe,y=new D,A=new fe;let M=!1;const E=[],P={};function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function w(L){const ie=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ie)}function N(L){c.theta-=L}function U(L){c.phi-=L}const ee=function(){const L=new D;return function(me,ce){L.setFromMatrixColumn(ce,0),L.multiplyScalar(-me),u.add(L)}}(),C=function(){const L=new D;return function(me,ce){i.screenSpacePanning===!0?L.setFromMatrixColumn(ce,1):(L.setFromMatrixColumn(ce,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(me),u.add(L)}}(),k=function(){const L=new D;return function(me,ce){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;L.copy(He).sub(i.target);let $e=L.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*me*$e/Ee.clientHeight,i.object.matrix),C(2*ce*$e/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(me*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),C(ce*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function O(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(L,ie){if(!i.zoomToCursor)return;M=!0;const me=i.domElement.getBoundingClientRect(),ce=L-me.left,Ee=ie-me.top,He=me.width,$e=me.height;A.x=ce/He*2-1,A.y=-(Ee/$e)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function F(L){h.set(L.clientX,L.clientY)}function $(L){J(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function Q(L){g.set(L.clientX,L.clientY)}function W(L){f.set(L.clientX,L.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;N(2*Math.PI*m.x/ie.clientHeight),U(2*Math.PI*m.y/ie.clientHeight),h.copy(f),i.update()}function G(L){x.set(L.clientX,L.clientY),_.subVectors(x,d),_.y>0?O(w(_.y)):_.y<0&&K(w(_.y)),d.copy(x),i.update()}function V(L){v.set(L.clientX,L.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),k(p.x,p.y),g.copy(v),i.update()}function ne(L){J(L.clientX,L.clientY),L.deltaY<0?K(w(L.deltaY)):L.deltaY>0&&O(w(L.deltaY)),i.update()}function I(L){let ie=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),ie=!0;break}ie&&(L.preventDefault(),i.update())}function Z(L){if(E.length===1)h.set(L.pageX,L.pageY);else{const ie=Xe(L),me=.5*(L.pageX+ie.x),ce=.5*(L.pageY+ie.y);h.set(me,ce)}}function le(L){if(E.length===1)g.set(L.pageX,L.pageY);else{const ie=Xe(L),me=.5*(L.pageX+ie.x),ce=.5*(L.pageY+ie.y);g.set(me,ce)}}function ue(L){const ie=Xe(L),me=L.pageX-ie.x,ce=L.pageY-ie.y,Ee=Math.sqrt(me*me+ce*ce);d.set(0,Ee)}function _e(L){i.enableZoom&&ue(L),i.enablePan&&le(L)}function B(L){i.enableZoom&&ue(L),i.enableRotate&&Z(L)}function tt(L){if(E.length==1)f.set(L.pageX,L.pageY);else{const me=Xe(L),ce=.5*(L.pageX+me.x),Ee=.5*(L.pageY+me.y);f.set(ce,Ee)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ie=i.domElement;N(2*Math.PI*m.x/ie.clientHeight),U(2*Math.PI*m.y/ie.clientHeight),h.copy(f)}function be(L){if(E.length===1)v.set(L.pageX,L.pageY);else{const ie=Xe(L),me=.5*(L.pageX+ie.x),ce=.5*(L.pageY+ie.y);v.set(me,ce)}p.subVectors(v,g).multiplyScalar(i.panSpeed),k(p.x,p.y),g.copy(v)}function Ce(L){const ie=Xe(L),me=L.pageX-ie.x,ce=L.pageY-ie.y,Ee=Math.sqrt(me*me+ce*ce);x.set(0,Ee),_.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),O(_.y),d.copy(x);const He=(L.pageX+ie.x)*.5,$e=(L.pageY+ie.y)*.5;J(He,$e)}function ye(L){i.enableZoom&&Ce(L),i.enablePan&&be(L)}function je(L){i.enableZoom&&Ce(L),i.enableRotate&&tt(L)}function De(L){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",S)),ke(L),L.pointerType==="touch"?Se(L):j(L))}function R(L){i.enabled!==!1&&(L.pointerType==="touch"?ve(L):se(L))}function S(L){Ie(L),E.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",S)),i.dispatchEvent(cu),a=r.NONE}function j(L){let ie;switch(L.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case an.DOLLY:if(i.enableZoom===!1)return;$(L),a=r.DOLLY;break;case an.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Q(L),a=r.PAN}else{if(i.enableRotate===!1)return;F(L),a=r.ROTATE}break;case an.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;F(L),a=r.ROTATE}else{if(i.enablePan===!1)return;Q(L),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Lo)}function se(L){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;W(L);break;case r.DOLLY:if(i.enableZoom===!1)return;G(L);break;case r.PAN:if(i.enablePan===!1)return;V(L);break}}function ae(L){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(L.preventDefault(),i.dispatchEvent(Lo),ne(L),i.dispatchEvent(cu))}function oe(L){i.enabled===!1||i.enablePan===!1||I(L)}function Se(L){switch(re(L),E.length){case 1:switch(i.touches.ONE){case ai.ROTATE:if(i.enableRotate===!1)return;Z(L),a=r.TOUCH_ROTATE;break;case ai.PAN:if(i.enablePan===!1)return;le(L),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case ai.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(L),a=r.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;B(L),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(Lo)}function ve(L){switch(re(L),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;tt(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;je(L),i.update();break;default:a=r.NONE}}function Ae(L){i.enabled!==!1&&L.preventDefault()}function ke(L){E.push(L.pointerId)}function Ie(L){delete P[L.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie]==L.pointerId){E.splice(ie,1);return}}function re(L){let ie=P[L.pointerId];ie===void 0&&(ie=new fe,P[L.pointerId]=ie),ie.set(L.pageX,L.pageY)}function Xe(L){const ie=L.pointerId===E[0]?E[1]:E[0];return P[ie]}i.domElement.addEventListener("contextmenu",Ae),i.domElement.addEventListener("pointerdown",De),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const f1={type:"change"};class p1 extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,a=new tn,o=new D;this.tmpQuaternion=new tn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new D(0,0,0),this.rotationVector=new D(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),p=v.size[0]/2,d=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-p)/p,this.moveState.pitchDown=(g.pageY-v.offset[1]-d)/d,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,p=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*p,i.rotationVector.y*p,i.rotationVector.z*p,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(o.distanceToSquared(i.object.position)>r||8*(1-a.dot(i.object.quaternion))>r)&&(i.dispatchEvent(f1),a.copy(i.object.quaternion),o.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",l),this.domElement.removeEventListener("pointermove",c),this.domElement.removeEventListener("pointerup",u),this.domElement.removeEventListener("pointercancel",h),window.removeEventListener("keydown",f),window.removeEventListener("keyup",m)};const s=this.contextMenu.bind(this),c=this.pointermove.bind(this),l=this.pointerdown.bind(this),u=this.pointerup.bind(this),h=this.pointercancel.bind(this),f=this.keydown.bind(this),m=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",l),this.domElement.addEventListener("pointermove",c),this.domElement.addEventListener("pointerup",u),this.domElement.addEventListener("pointercancel",h),window.addEventListener("keydown",f),window.addEventListener("keyup",m),this.updateMovementVector(),this.updateRotationVector()}}const m1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g1=new xs(-1,1,1,-1,0,1);class v1 extends Dt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const _1=new v1;class y1{constructor(e){this._mesh=new Qt(_1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,g1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class x1 extends za{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bu.clone(e.uniforms),this.material=new Tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new y1(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class uu extends za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class b1 extends za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class A1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x1(m1),this.copyPass.material.blending=Mn,this.clock=new ih}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}uu!==void 0&&(o instanceof uu?i=!0:o instanceof b1&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class M1 extends za{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}function is(){return is=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},is.apply(this,arguments)}function S1(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _r(n,e){return _r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},_r(n,e)}function E1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,_r(n,e)}function rs(n){return rs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},rs(n)}function w1(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function T1(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oa(n,e,t){return T1()?oa=Reflect.construct.bind():oa=function(r,a,o){var s=[null];s.push.apply(s,a);var c=Function.bind.apply(r,s),l=new c;return o&&_r(l,o.prototype),l},oa.apply(null,arguments)}function as(n){var e=typeof Map=="function"?new Map:void 0;return as=function(i){if(i===null||!w1(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return oa(i,arguments,rs(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_r(r,i)},as(n)}var Li=function(n){E1(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,S1(i)}return e}(as(Error));function Do(n){return Math.round(n*255)}function C1(n,e,t){return Do(n)+","+Do(e)+","+Do(t)}function hu(n,e,t,i){if(i===void 0&&(i=C1),e===0)return i(t,t,t);var r=(n%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,o=a*(1-Math.abs(r%2-1)),s=0,c=0,l=0;r>=0&&r<1?(s=a,c=o):r>=1&&r<2?(s=o,c=a):r>=2&&r<3?(c=a,l=o):r>=3&&r<4?(c=o,l=a):r>=4&&r<5?(s=o,l=a):r>=5&&r<6&&(s=a,l=o);var u=t-a/2,h=s+u,f=c+u,m=l+u;return i(h,f,m)}var du={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function R1(n){if(typeof n!="string")return n;var e=n.toLowerCase();return du[e]?"#"+du[e]:n}var k1=/^#[a-fA-F0-9]{6}$/,P1=/^#[a-fA-F0-9]{8}$/,L1=/^#[a-fA-F0-9]{3}$/,D1=/^#[a-fA-F0-9]{4}$/,Oo=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,O1=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,z1=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,I1=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Fs(n){if(typeof n!="string")throw new Li(3);var e=R1(n);if(e.match(k1))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(P1)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(L1))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(D1)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=Oo.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var a=O1.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var o=z1.exec(e);if(o){var s=parseInt(""+o[1],10),c=parseInt(""+o[2],10)/100,l=parseInt(""+o[3],10)/100,u="rgb("+hu(s,c,l)+")",h=Oo.exec(u);if(!h)throw new Li(4,e,u);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=I1.exec(e.substring(0,50));if(f){var m=parseInt(""+f[1],10),g=parseInt(""+f[2],10)/100,v=parseInt(""+f[3],10)/100,p="rgb("+hu(m,g,v)+")",d=Oo.exec(p);if(!d)throw new Li(4,e,p);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new Li(5)}var N1=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},fu=N1;function Ti(n){var e=n.toString(16);return e.length===1?"0"+e:e}function pu(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return fu("#"+Ti(n)+Ti(e)+Ti(t));if(typeof n=="object"&&e===void 0&&t===void 0)return fu("#"+Ti(n.red)+Ti(n.green)+Ti(n.blue));throw new Li(6)}function U1(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Fs(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?pu(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?pu(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Li(7)}function qh(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):qh(n,e,r)}}function F1(n){return qh(n,n.length,[])}function B1(n,e,t){return Math.max(n,Math.min(e,t))}function H1(n,e){if(e==="transparent")return e;var t=Fs(e),i=typeof t.alpha=="number"?t.alpha:1,r=is({},t,{alpha:B1(0,1,(i*100+parseFloat(n)*100)/100)});return U1(r)}var G1=F1(H1),V1=G1,ti=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ti.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ti.Bounce.In(n*2)*.5:ti.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),cr=function(){return performance.now()},W1=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=cr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var a=this._tweens[i[r]],o=!t;a&&a.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Di={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Di.Utils.Linear;return e<0?a(n[0],n[1],i):e>1?a(n[t],n[t-1],t-i):a(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,a=Di.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*a(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Di.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),a(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(a(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(a(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):a(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Di.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var a=(t-n)*.5,o=(i-e)*.5,s=r*r,c=r*s;return(2*e-2*t+a+o)*c+(-3*e+3*t-2*a-o)*s+a*r+e}}},j1=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),os=new W1,mu=function(){function n(e,t){t===void 0&&(t=os),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ti.Linear.None,this._interpolationFunction=Di.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=j1.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=cr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var a in this._valuesEnd)r[a]=this._valuesEnd[a];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,a){for(var o in i){var s=e[o],c=Array.isArray(s),l=c?"array":typeof s,u=!c&&Array.isArray(i[o]);if(!(l==="undefined"||l==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var f=[s],m=0,g=h.length;m<g;m+=1){var v=this._handleRelativeValue(s,h[m]);if(isNaN(v)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}u&&(i[o]=f)}if((l==="object"||c)&&s&&!u){t[o]=c?[]:{};var p=s;for(var d in p)t[o][d]=p[d];r[o]=c?[]:{};var h=i[o];if(!this._isDynamic){var x={};for(var d in h)x[d]=h[d];i[o]=h=x}this._setupProperties(p,t[o],h,r[o],a)}else(typeof t[o]>"u"||a)&&(t[o]=s),c||(t[o]*=1),u?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=cr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=cr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=os),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ti.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Di.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=cr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,c=this._chainedTweens.length;s<c;s++)this._chainedTweens[s].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var a in i)if(t[a]!==void 0){var o=t[a]||0,s=i[a],c=Array.isArray(e[a]),l=Array.isArray(s),u=!c&&l;u?e[a]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(e[a],o,s,r):(s=this._handleRelativeValue(o,s),typeof s=="number"&&(e[a]=o+(s-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),cn=os;cn.getAll.bind(cn);cn.removeAll.bind(cn);cn.add.bind(cn);cn.remove.bind(cn);var X1=cn.update.bind(cn);function $1(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var q1=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;$1(q1);function Y1(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function K1(n,e,t){return e=rA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z1(n,e){return Q1(n)||Y1(n,e)||Yh(n,e)||nA()}function rr(n){return J1(n)||eA(n)||Yh(n)||tA()}function J1(n){if(Array.isArray(n))return ss(n)}function Q1(n){if(Array.isArray(n))return n}function eA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Yh(n,e){if(n){if(typeof n=="string")return ss(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ss(n,e)}}function ss(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rA(n){var e=iA(n,"string");return typeof e=="symbol"?e:String(e)}var it=window.THREE?window.THREE:{WebGLRenderer:Ku,Scene:S0,PerspectiveCamera:Vt,Raycaster:rh,SRGBColorSpace:ut,TextureLoader:$0,Vector2:fe,Vector3:D,Box3:ii,Color:We,Mesh:Qt,SphereGeometry:La,MeshBasicMaterial:vs,BackSide:kt,EventDispatcher:nn,MOUSE:an,Quaternion:tn,Spherical:$o,Clock:ih},Kh=Ns({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(a){return a.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(a){return e.hoverFilter(a.object)}).sort(function(a,o){return e.hoverOrderComparator(a.object,o.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&Ye(e.tooltipContent)(t)||"",e.hoverObj=t)}X1()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var a=e.camera;if(t&&e.initialised){var o=t,s=i||{x:0,y:0,z:0};if(!r)u(o),h(s);else{var c=Object.assign({},a.position),l=f();new mu(c).to(o,r).easing(ti.Quadratic.Out).onUpdate(u).start(),new mu(l).to(s,r/3).easing(ti.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},a.position,{lookAt:f()});function u(m){var g=m.x,v=m.y,p=m.z;g!==void 0&&(a.position.x=g),v!==void 0&&(a.position.y=v),p!==void 0&&(a.position.z=p)}function h(m){var g=new it.Vector3(m.x,m.y,m.z);e.controls.target?e.controls.target=g:a.lookAt(g)}function f(){return Object.assign(new it.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return this.fitToBbox(this.getBbox.apply(this,a),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var o=new it.Vector3(0,0,0),s=Math.max.apply(Math,rr(Object.entries(t).map(function(m){var g=Z1(m,2),v=g[0],p=g[1];return Math.max.apply(Math,rr(p.map(function(d){return Math.abs(o[v]-d)})))})))*2,c=(1-r*2/e.height)*a.fov,l=s/Math.atan(c*Math.PI/180),u=l/a.aspect,h=Math.max(l,u);if(h>0){var f=o.clone().sub(a.position).normalize().multiplyScalar(-h);this.cameraPosition(f,o,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new it.Box3(new it.Vector3(0,0,0),new it.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(a){return i.expandByObject(a)}),Object.assign.apply(Object,rr(["x","y","z"].map(function(a){return K1({},a,[i.min[a],i.max[a]])})))):null},getScreenCoords:function(e,t,i,r){var a=new it.Vector3(t,i,r);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),o=new it.Raycaster;return o.setFromCamera(a,e.camera),Object.assign({},o.ray.at(r,new it.Vector3))},intersectingObjects:function(e,t,i){var r=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),a=new it.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.setFromCamera(r,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new it.Scene,camera:new it.PerspectiveCamera,clock:new it.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,a=r===void 0?"trackball":r,o=i.rendererConfig,s=o===void 0?{}:o,c=i.extraRenderers,l=c===void 0?[]:c,u=i.waitForLoadComplete,h=u===void 0?!0:u;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new it.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(m){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&m.type==="pointermove"&&(m.pressure>0||t.isPointerPressed)&&(m.pointerType!=="touch"||m.movementX===void 0||[m.movementX,m.movementY].some(function(p){return Math.abs(p)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=v(t.container);t.pointerPos.x=m.pageX-g.left,t.pointerPos.y=m.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(p){var d=p.getBoundingClientRect(),x=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:d.top+_,left:d.left+x}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new it.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=l,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new A1(t.renderer),t.postProcessingComposer.addPass(new M1(t.scene,t.camera)),t.controls=new{trackball:u1,orbit:d1,fly:p1}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(rr(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new it.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(rr(e.extraRenderers)).forEach(function(a){return a.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new it.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Fs(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new it.Color(V1(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new it.TextureLoader().load(e.backgroundImageUrl,function(a){a.colorSpace=it.SRGBColorSpace,e.skysphere.material=new it.MeshBasicMaterial({map:a,side:it.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(a){return e.scene.remove(a)}),e.lights.forEach(function(a){return e.scene.add(a)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(a){return e.scene.remove(a)}),e.objects.forEach(function(a){return e.scene.add(a)}));function r(){e.loadComplete=e.scene.visible=!0}}});function aA(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var oA=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;aA(oA);function gu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ta(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gu(Object(t),!0).forEach(function(i){br(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):gu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function br(n,e,t){return e=dA(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ia(n){return sA(n)||cA(n)||lA(n)||uA()}function sA(n){if(Array.isArray(n))return cs(n)}function cA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function lA(n,e){if(n){if(typeof n=="string")return cs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cs(n,e)}}function cs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function uA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function dA(n){var e=hA(n,"string");return typeof e=="symbol"?e:String(e)}function Zh(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(o,s){s[n][r](o)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var o=a[n],s=arguments.length,c=new Array(s>1?s-1:0),l=1;l<s;l++)c[l-1]=arguments[l];var u=o[r].apply(o,c);return u===o?this:u}}}}var vu=window.THREE?window.THREE:{AmbientLight:Z0,DirectionalLight:K0,Vector3:D},fA=170,Jh=Zh("forceGraph",$h),pA=Object.assign.apply(Object,Ia(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return br({},n,Jh.linkProp(n))}))),mA=Object.assign.apply(Object,Ia(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return br({},n,Jh.linkMethod(n))}))),sa=Zh("renderObjs",Kh),gA=Object.assign.apply(Object,Ia(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return br({},n,sa.linkProp(n))}))),vA=Object.assign.apply(Object,Ia(["lights","cameraPosition","postProcessingComposer"].map(function(n){return br({},n,sa.linkMethod(n))})).concat([{graph2ScreenCoords:sa.linkMethod("getScreenCoords"),screen2GraphCoords:sa.linkMethod("getSceneCoords")}])),_A=Ns({props:ta(ta({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},pA),gA),methods:ta(ta({zoomToFit:function(e,t,i){for(var r,a=arguments.length,o=new Array(a>3?a-3:0),s=3;s<a;s++)o[s-3]=arguments[s];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,o),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},mA),vA),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers,a=new $h;return{forceGraph:a,renderObjs:Kh({controlType:t,rendererConfig:i,extraRenderers:r}).objects([a]).lights([new vu.AmbientLight(13421772,Math.PI),new vu.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),a=t.renderObjs.renderer(),o=t.renderObjs.controls();o.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var s;t.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",t.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*fA)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(u){return u.__initialFixedPos&&!u.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var l=t._dragControls=new J0(t.graphData.nodes.map(function(u){return u.__threeObj}).filter(function(u){return u}),r,a.domElement);l.addEventListener("dragstart",function(u){o.enabled=!1,u.object.__initialPos=u.object.position.clone(),u.object.__prevPos=u.object.position.clone();var h=gn(u.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(f){return h["f".concat(f)]=h[f]}),a.domElement.classList.add("grabbable")}),l.addEventListener("drag",function(u){var h=gn(u.object);if(!u.object.hasOwnProperty("__graphObjType")){var f=u.object.__initialPos,m=u.object.__prevPos,g=u.object.position;h.position.add(g.clone().sub(m)),m.copy(g),g.copy(f)}var v=h.__data,p=h.position,d={x:p.x-v.x,y:p.y-v.y,z:p.z-v.z};["x","y","z"].forEach(function(x){return v["f".concat(x)]=v[x]=p[x]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,d)}),l.addEventListener("dragend",function(u){delete u.object.__initialPos,delete u.object.__prevPos;var h=gn(u.object).__data;h.__disposeControlsAfterDrag&&(l.dispose(),delete h.__disposeControlsAfterDrag);var f=h.__initialFixedPos,m=h.__initialPos,g={x:m.x-h.x,y:m.y-h.y,z:m.z-h.z};f&&(["x","y","z"].forEach(function(v){var p="f".concat(v);f[p]===void 0&&delete h[p]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(o.enabled=!0,o.domElement&&o.domElement.ownerDocument&&o.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),a.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.hoverOrderComparator(function(c,l){var u=gn(c);if(!u)return 1;var h=gn(l);if(!h)return-1;var f=function(g){return g.__graphObjType==="node"};return f(h)-f(u)}).tooltipContent(function(c){var l=gn(c);return l&&Ye(t["".concat(l.__graphObjType,"Label")])(l.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var l=gn(c);if(l!==t.hoverObj){var u=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,f=l?l.__graphObjType:null,m=l?l.__data:null;if(u&&u!==f){var g=t["on".concat(u==="node"?"Node":"Link","Hover")];g&&g(null,h)}if(f){var v=t["on".concat(f==="node"?"Node":"Link","Hover")];v&&v(m,u===f?h:null)}a.domElement.classList[l&&t["on".concat(f==="node"?"Node":"Link","Click")]||!l&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=l}}).clickAfterDrag(!1).onClick(function(c,l){var u=gn(c);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","Click")];h&&h(u.__data,l)}else t.onBackgroundClick&&t.onBackgroundClick(l)}).onRightClick(function(c,l){var u=gn(c);if(u){var h=t["on".concat(u.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(u.__data,l)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(l)}),this._animationCycle()}});function gn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function yA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,o,s=[],c=!0,l=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(s.push(i.value),s.length!==e);c=!0);}catch(u){l=!0,r=u}finally{try{if(!c&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw r}}return s}}function xA(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _u(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,DA(i.key),i)}}function bA(n,e,t){return e&&_u(n.prototype,e),t&&_u(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function AA(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&ls(n,e)}function Aa(n){return Aa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Aa(n)}function ls(n,e){return ls=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},ls(n,e)}function MA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function SA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function EA(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return SA(n)}function wA(n){var e=MA();return function(){var i=Aa(n),r;if(e){var a=Aa(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return EA(this,r)}}function yu(n,e){return CA(n)||yA(n,e)||Qh(n,e)||PA()}function na(n){return TA(n)||RA(n)||Qh(n)||kA()}function TA(n){if(Array.isArray(n))return us(n)}function CA(n){if(Array.isArray(n))return n}function RA(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Qh(n,e){if(n){if(typeof n=="string")return us(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return us(n,e)}}function us(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function kA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function PA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function LA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function DA(n){var e=LA(n,"string");return typeof e=="symbol"?e:String(e)}var Ci=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:Ft,Sprite:w0,SpriteMaterial:Zu,SRGBColorSpace:ut,Texture:Pt},OA=function(n){AA(t,n);var e=wA(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return xA(this,t),i=e.call(this,new Ci.SpriteMaterial),i._text="".concat(r),i._textHeight=a,i._color=o,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return bA(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,a=this._canvas,o=a.getContext("2d"),s=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],c=s.map(function(P){return P*r.fontSize*.1}),l=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],u=l.map(function(P){return P*r.fontSize*.1}),h=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],f=h.map(function(P){return P*r.fontSize*.1}),m=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);o.font=g;var v=Math.max.apply(Math,na(m.map(function(P){return o.measureText(P).width}))),p=this.fontSize*m.length;if(a.width=v+c[0]*2+f[0]*2,a.height=p+c[1]*2+f[1]*2,this.borderWidth){if(o.strokeStyle=this.borderColor,c[0]){var d=c[0]/2;o.lineWidth=c[0],o.beginPath(),o.moveTo(d,u[0]),o.lineTo(d,a.height-u[3]),o.moveTo(a.width-d,u[1]),o.lineTo(a.width-d,a.height-u[2]),o.stroke()}if(c[1]){var x=c[1]/2;o.lineWidth=c[1],o.beginPath(),o.moveTo(Math.max(c[0],u[0]),x),o.lineTo(a.width-Math.max(c[0],u[1]),x),o.moveTo(Math.max(c[0],u[3]),a.height-x),o.lineTo(a.width-Math.max(c[0],u[2]),a.height-x),o.stroke()}if(this.borderRadius){var _=Math.max.apply(Math,na(c)),y=_/2;o.lineWidth=_,o.beginPath(),[!!u[0]&&[u[0],y,y,u[0]],!!u[1]&&[a.width-u[1],a.width-y,y,u[1]],!!u[2]&&[a.width-u[2],a.width-y,a.height-y,a.height-u[2]],!!u[3]&&[u[3],y,a.height-y,a.height-u[3]]].filter(function(P){return P}).forEach(function(P){var b=yu(P,4),w=b[0],N=b[1],U=b[2],ee=b[3];o.moveTo(w,U),o.quadraticCurveTo(N,U,N,ee)}),o.stroke()}}this.backgroundColor&&(o.fillStyle=this.backgroundColor,this.borderRadius?(o.beginPath(),o.moveTo(c[0],u[0]),[[c[0],u[0],a.width-u[1],c[1],c[1],c[1]],[a.width-c[0],a.width-c[0],a.width-c[0],c[1],u[1],a.height-u[2]],[a.width-c[0],a.width-u[2],u[3],a.height-c[1],a.height-c[1],a.height-c[1]],[c[0],c[0],c[0],a.height-c[1],a.height-u[3],u[0]]].forEach(function(P){var b=yu(P,6),w=b[0],N=b[1],U=b[2],ee=b[3],C=b[4],k=b[5];o.quadraticCurveTo(w,ee,N,C),o.lineTo(U,k)}),o.closePath(),o.fill()):o.fillRect(c[0],c[1],a.width-c[0]*2,a.height-c[1]*2)),o.translate.apply(o,na(c)),o.translate.apply(o,na(f)),o.font=g,o.fillStyle=this.color,o.textBaseline="bottom";var A=this.strokeWidth>0;A&&(o.lineWidth=this.strokeWidth*this.fontSize/10,o.strokeStyle=this.strokeColor),m.forEach(function(P,b){var w=(v-o.measureText(P).width)/2,N=(b+1)*r.fontSize;A&&o.strokeText(P,w,N),o.fillText(P,w,N)}),this.material.map&&this.material.map.dispose();var M=this.material.map=new Ci.Texture(a);M.minFilter=Ci.LinearFilter,M.colorSpace=Ci.SRGBColorSpace,M.needsUpdate=!0;var E=this.textHeight*m.length+s[1]*2+h[1]*2;this.scale.set(E*a.width/a.height,E,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return Ci.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(Ci.Sprite);const zA=[{id:"nīl",size:5,type:"noun"},{id:"mēṉi",size:4,type:"noun"},{id:"vāl",size:3,type:"noun"},{id:"iḻai",size:7,type:"noun"},{id:"pākattu",size:1},{id:"oru",size:2,type:"noun"},{id:"iru",size:4,type:"noun"},{id:"tāḷ",size:1,type:"noun"},{id:"niḻal",size:4,type:"noun"},{id:"kīḻ",size:1},{id:"mu",size:1,type:"noun"},{id:"vaku",size:1,type:"verb"},{id:"ulakam",size:1,type:"noun"},{id:"vāḻ",size:42,type:"verb"},{id:"ātaṉ",size:10,type:"noun"},{id:"aviṉi",size:10},{id:"nel",size:8,type:"noun"},{id:"pal",size:19,type:"noun"},{id:"poli",size:2,type:"noun"},{id:"poṉ",size:5,type:"noun"},{id:"peru(m)",size:21,type:"adjective"},{id:"ciṟa",size:8,type:"verb"},{id:"eṉ",size:33,type:"pronoun"},{id:"vēṭṭōḷ",size:10},{id:"yāy",size:10,type:"noun"},{id:"yām",size:18,type:"pronoun"},{id:"naṉai",size:2,type:"noun"},{id:"kāñci",size:1,type:"noun"},{id:"ciṉai",size:4,type:"verb"},{id:"ciṟu(m)",size:5,type:"adjective"},{id:"miṉ",size:5,type:"noun"},{id:"yāṇar",size:8,type:"noun"},{id:"ūr",size:73,type:"noun"},{id:"pāṇ",size:9,type:"noun"},{id:"māri",size:3,type:"noun"},{id:"vāy",size:4,type:"noun"},{id:"vaḷam",size:4,type:"noun"},{id:"naṉi",size:4},{id:"pū(m)",size:25,type:"noun"},{id:"mā(m)",size:6,type:"noun"},{id:"pulavu",size:2,type:"noun"},{id:"taṭpam",size:28,type:"noun"},{id:"tuṟai",size:22,type:"noun"},{id:"tāṉ",size:16,type:"pronoun"},{id:"koḷ",size:14,type:"verb"},{id:"cel",size:8,type:"noun"},{id:"aṉṉai",size:12,type:"noun"},{id:"vēṇṭu",size:8,type:"verb"},{id:"u-",size:2,type:"noun"},{id:"kaṇ",size:19,type:"noun"},{id:"ēr",size:4,type:"noun"},{id:"koṭi",size:4,type:"noun"},{id:"pācu",size:1},{id:"aṭumpu",size:1,type:"noun"},{id:"pari",size:2,type:"noun"},{id:"iḻi",size:2,type:"verb"},{id:"neytal",size:2,type:"noun"},{id:"mayakkam",size:1},{id:"varavu",size:15,type:"noun"},{id:"nī",size:39,type:"pronoun"},{id:"maka",size:22,type:"noun"},{id:"pōl",size:11,type:"verb"},{id:"uṇ",size:13},{id:"maruvu",size:2,type:"verb"},{id:"no/nō",size:4,type:"verb"},{id:"maruntu",size:3,type:"noun"},{id:"ākkam",size:31,type:"noun"},{id:"nām",size:9,type:"pronoun"},{id:"niṟa",size:2,type:"verb"},{id:"kaṭal",size:2,type:"noun"},{id:"puḷ",size:1,type:"noun"},{id:"°āṉ",size:1,type:"verb"},{id:"tuṉpam",size:1,type:"noun"},{id:"uṟu",size:8,type:"verb"},{id:"tuyara",size:1},{id:"nīkku",size:2,type:"verb"},{id:"iṉ",size:5,type:"adjective"},{id:"icai",size:1,type:"noun"},{id:"a-",size:45,type:"pronoun"},{id:"tēr",size:6,type:"noun"},{id:"puṉṉai",size:1,type:"noun"},{id:"ñāḻal",size:1,type:"noun"},{id:"am",size:4,type:"adjective"},{id:"i-",size:29,type:"pronoun"},{id:"amaintaṉaṉ",size:1},{id:"amai",size:5,type:"noun"},{id:"mā",size:2,type:"adjective"},{id:"muḻakkam",size:2},{id:"tirai",size:1,type:"verb"},{id:"taru",size:1},{id:"muttam",size:1,type:"noun"},{id:"veḷ",size:12,type:"adjective"},{id:"maṇal",size:2,type:"noun"},{id:"imai",size:1,type:"noun"},{id:"civantaṉṟu",size:1},{id:"maṉai",size:9,type:"noun"},{id:"naṭu",size:2,type:"verb"},{id:"vayalai",size:3,type:"noun"},{id:"vēḻam",size:10,type:"noun"},{id:"cuṟṟam",size:1,type:"noun"},{id:"keḻu",size:3},{id:"koṭu(m)",size:2,type:"adjective"},{id:"nāṇ",size:1,type:"noun"},{id:"nallaṉ",size:1},{id:"e-",size:20,type:"pronoun"},{id:"al",size:13,type:"verb"},{id:"taṭa(m)",size:3,type:"adjective"},{id:"karai",size:4,type:"noun"},{id:"cēr",size:2,type:"verb"},{id:"karuppu",size:6,type:"adjective"},{id:"nal",size:23,type:"adjective"},{id:"āṟṟuka",size:1},{id:"tōṟka",size:1},{id:"uṭai",size:4,type:"noun"},{id:"poṅku",size:1,type:"verb"},{id:"uḷai",size:3,type:"noun"},{id:"aṭai",size:3,type:"noun"},{id:"pakar",size:1,type:"verb"},{id:"peṇ",size:7,type:"noun"},{id:"tuñcu",size:3,type:"verb"},{id:"yāmam",size:1,type:"noun"},{id:"tīṇṭu",size:1,type:"verb"},{id:"ayal",size:2,type:"noun"},{id:"vaṭu",size:1,type:"noun"},{id:"val",size:4,type:"noun"},{id:"taḷir",size:2,type:"noun"},{id:"nuṭaṅku",size:4,type:"verb"},{id:"aṇi",size:10,type:"noun"},{id:"mārpu",size:9,type:"noun"},{id:"paṉi",size:2,type:"noun"},{id:"tuyil",size:1,type:"noun"},{id:"cey",size:7,type:"noun"},{id:"aṭu",size:6,type:"verb"},{id:"malir",size:3,type:"verb"},{id:"niṟai",size:5,type:"noun"},{id:"virumpiya",size:1},{id:"oṇmai",size:10,type:"noun"},{id:"taḻai",size:4,type:"noun"},{id:"puṉal",size:14,type:"noun"},{id:"puṇar",size:5,type:"verb"},{id:"tuṇai",size:8,type:"noun"},{id:"utavum",size:1},{id:"mūtu",size:1},{id:"ōkku",size:3,type:"verb"},{id:"tūmpu",size:2,type:"noun"},{id:"tiraḷ",size:1,type:"noun"},{id:"kāl",size:7,type:"noun"},{id:"toḻumakaḷir",size:1},{id:"añcaṉam",size:1},{id:"pey",size:3,type:"verb"},{id:"kañal",size:3,type:"verb"},{id:"uḷḷi",size:3,type:"noun"},{id:"putal",size:1,type:"noun"},{id:"micai",size:2,type:"noun"},{id:"vicumpu",size:2,type:"noun"},{id:"kuruku",size:4,type:"noun"},{id:"tōṟṟam",size:2,type:"noun"},{id:"putu",size:6,type:"adjective"},{id:"mēvu",size:1,type:"noun"},{id:"vaṟu(m)",size:1,type:"adjective"},{id:"maṭa(m)",size:5,type:"noun"},{id:"iru(m)",size:3,type:"adjective"},{id:"cāy",size:1,type:"noun"},{id:"ceruntiyoṭu",size:1},{id:"alamvaru",size:2,type:"verb"},{id:"kaḻaṉi",size:9,type:"noun"},{id:"poru",size:2,type:"verb"},{id:"malar",size:17,type:"noun"},{id:"aḻu",size:3,type:"verb"},{id:"piri",size:4,type:"verb"},{id:"ekkar",size:1,type:"noun"},{id:"mey",size:2,type:"noun"},{id:"maṇa",size:3,type:"verb"},{id:"kamaḻ",size:1,type:"verb"},{id:"poḻil",size:2,type:"noun"},{id:"cī",size:2,type:"verb"},{id:"kalakkam",size:3,type:"noun"},{id:"viḷaika",size:1},{id:"vayal",size:3,type:"noun"},{id:"ira",size:1,type:"verb"},{id:"itaḻ",size:2,type:"noun"},{id:"nikar",size:1,type:"noun"},{id:"kēḷ",size:4,type:"verb"},{id:"vaḻi",size:2,type:"noun"},{id:"aṟu",size:5,type:"noun"},{id:"cil",size:3,type:"noun"},{id:"ciṟai",size:3,type:"noun"},{id:"tumpi",size:1,type:"noun"},{id:"nūṟṟu",size:1},{id:"tāmarai",size:5,type:"noun"},{id:"kāmpu",size:1,type:"noun"},{id:"naṇṇu",size:2,type:"verb"},{id:"iṟai",size:2,type:"noun"},{id:"el",size:2,type:"noun"},{id:"vaḷai",size:3,type:"noun"},{id:"tāṉum",size:1},{id:"malaintāṉ",size:1},{id:"em",size:13,type:"pronoun"},{id:"vī",size:2,type:"noun"},{id:"maṇi",size:3,type:"noun"},{id:"arumpu",size:1,type:"noun"},{id:"maram",size:1,type:"noun"},{id:"aḵtu",size:2},{id:"varaiyara",size:1},{id:"niraiyuṭaṉ",size:1},{id:"kuḻuvu",size:1,type:"verb"},{id:"peyarvuḻi",size:2},{id:"tavir",size:1,type:"verb"},{id:"nōkkam",size:2,type:"noun"},{id:"tīyēṉ",size:1},{id:"muḷḷi",size:3,type:"noun"},{id:"nīṭṭu",size:1,type:"verb"},{id:"mutu",size:1,type:"adjective"},{id:"nīr",size:5,type:"pronoun"},{id:"puḷḷi",size:3,type:"noun"},{id:"kaḷvaṉ",size:9,type:"noun"},{id:"āmpal",size:10,type:"noun"},{id:"teḷ",size:1,type:"adjective"},{id:"pacappatu",size:2},{id:"aḷḷal",size:1,type:"noun"},{id:"āṭu",size:7,type:"noun"},{id:"vēr",size:2,type:"noun"},{id:"aḷai",size:4,type:"noun"},{id:"col",size:4,type:"noun"},{id:"nīyēṉ",size:1},{id:"āṭṭi",size:1,type:"noun"},{id:"kuṟṟu",size:2,type:"verb"},{id:"eytu",size:1,type:"verb"},{id:"tēṟṟam",size:1},{id:"na",size:1},{id:"tākku",size:1,type:"verb"},{id:"aṇaṅku",size:4,type:"noun"},{id:"tāy",size:2,type:"noun"},{id:"cā",size:3,type:"verb"},{id:"piṟa",size:4,type:"noun"},{id:"kaḷvaṉoṭu",size:1},{id:"piḷḷai",size:1,type:"noun"},{id:"tiṉṉum",size:2},{id:"mutalaittu",size:1},{id:"eytiṉaṉ",size:1},{id:"makiḻ",size:23,type:"noun"},{id:"polam",size:1,type:"noun"},{id:"toṭi",size:8,type:"noun"},{id:"teḷir",size:1,type:"verb"},{id:"muyaṅkiyavar",size:1},{id:"tuṟappatu",size:1},{id:"puṟantā",size:1,type:"verb"},{id:"puṉiṟu",size:2,type:"noun"},{id:"pai(m)",size:1,type:"adjective"},{id:"kāy",size:2,type:"noun"},{id:"ce(m)",size:9,type:"adjective"},{id:"palarkku",size:1},{id:"nekiḻ",size:4,type:"verb"},{id:"poy",size:5,type:"noun"},{id:"paṭu",size:2,type:"verb"},{id:"aṟi",size:10,type:"verb"},{id:"kaḻaṅku",size:1,type:"noun"},{id:"varai",size:1,type:"noun"},{id:"kaṭci",size:1,type:"noun"},{id:"mayil",size:2,type:"noun"},{id:"ālu",size:2,type:"verb"},{id:"vaḷḷiam",size:1},{id:"kāṉ",size:1,type:"noun"},{id:"kiḻamai",size:1,type:"noun"},{id:"āṇ",size:1,type:"noun"},{id:"taku",size:2,type:"verb"},{id:"viṟal",size:1,type:"noun"},{id:"vēṭkai",size:1,type:"noun"},{id:"pūṭṭu",size:1,type:"noun"},{id:"tāṅku",size:1,type:"verb"},{id:"iḷa(m)",size:2,type:"adjective"},{id:"karantai",size:1,type:"noun"},{id:"ceṟu",size:3,type:"verb"},{id:"tuṟa",size:1,type:"verb"},{id:"vaḷḷai",size:1,type:"noun"},{id:"mel",size:5,type:"adjective"},{id:"iṉṉaṉ",size:1},{id:"katir",size:3,type:"noun"},{id:"aka(m)",size:5,type:"noun"},{id:"maṇ",size:2,type:"noun"},{id:"allal",size:1,type:"noun"},{id:"uḻa",size:1,type:"verb"},{id:"uṟai",size:4,type:"noun"},{id:"cēṟu",size:1,type:"noun"},{id:"vari",size:2,type:"noun"},{id:"tōḷ",size:4,type:"noun"},{id:"kaṭi",size:1,type:"noun"},{id:"kā",size:1,type:"noun"},{id:"kaṭuka",size:1},{id:"vittu",size:2,type:"noun"},{id:"muḷai",size:1,type:"noun"},{id:"titti",size:2,type:"noun"},{id:"alkul",size:2,type:"noun"},{id:"paca",size:6,type:"verb"},{id:"koḷvatu",size:1},{id:"pāl",size:2,type:"noun"},{id:"ūṟuka",size:1},{id:"pakaṭu",size:1},{id:"uḻavaṉ",size:1,type:"noun"},{id:"peyar",size:2,type:"noun"},{id:"vēppa(m)",size:1,type:"noun"},{id:"neṭu(m)",size:4,type:"adjective"},{id:"kaviṉ",size:2,type:"noun"},{id:"iḻa",size:1,type:"verb"},{id:"ñeli",size:1,type:"noun"},{id:"kaḻai",size:1,type:"noun"},{id:"aḻal",size:1,type:"noun"},{id:"vayamā",size:1},{id:"veru",size:1,type:"noun"},{id:"kuṉṟam",size:1,type:"noun"},{id:"aru(m)",size:2,type:"adjective"},{id:"curam",size:1,type:"noun"},{id:"ayar",size:2,type:"verb"},{id:"il",size:9,type:"noun"},{id:"koṇkaṉ",size:1,type:"noun"},{id:"poruḷ",size:1,type:"noun"},{id:"pāvai",size:1,type:"noun"},{id:"amma",size:12},{id:"tōḻaṉ",size:10},{id:"kaṭam",size:1,type:"noun"},{id:"muṭam",size:1},{id:"mutir",size:2,type:"verb"},{id:"marutattu",size:3},{id:"-uṭaṉ",size:1},{id:"āyamōṭu",size:2},{id:"nāḷ",size:4,type:"noun"},{id:"vantataṟku",size:1},{id:"eḻu",size:2,type:"noun"},{id:"aḻupa",size:1},{id:"tī",size:3,type:"noun"},{id:"meḻukiṉ",size:1},{id:"maruta(m)",size:3,type:"noun"},{id:"uyar",size:1,type:"verb"},{id:"viri",size:2,type:"verb"},{id:"peṇṭirōṭu",size:1},{id:"tār",size:2,type:"noun"},{id:"akal",size:1,type:"noun"},{id:"talai",size:5},{id:"poykai",size:10,type:"noun"},{id:"puḻai",size:1,type:"noun"},{id:"tātu",size:5,type:"noun"},{id:"vaṇṇa(m)",size:2,type:"noun"},{id:"ētilāḷarkku",size:1},{id:"tiṇ",size:2,type:"adjective"},{id:"nil",size:3,type:"verb"},{id:"kōṅkam",size:1,type:"noun"},{id:"paya",size:2,type:"verb"},{id:"miku",size:3,type:"verb"},{id:"koḻu",size:1,type:"verb"},{id:"mukiḻ",size:2,type:"noun"},{id:"nār",size:1,type:"noun"},{id:"uri",size:1,type:"noun"},{id:"niṟattiṉum",size:1},{id:"niḻaṟṟutal",size:1},{id:"maṟa",size:2,type:"verb"},{id:"uḷḷu",size:1,type:"verb"},{id:"amaikuva",size:1},{id:"kayal",size:2,type:"noun"},{id:"karutiya",size:1},{id:"olku",size:1,type:"verb"},{id:"naya",size:4,type:"verb"},{id:"mal",size:1,type:"noun"},{id:"tēṟṟāṉ",size:1},{id:"uṇarntōr",size:2},{id:"vauvu",size:1,type:"verb"},{id:"muṉ",size:5},{id:"vem",size:2},{id:"mulai",size:3,type:"noun"},{id:"muyakkam",size:1,type:"noun"},{id:"vayiṉ",size:2,type:"noun"},{id:"tiruttu",size:1,type:"verb"},{id:"paṇṇai",size:3,type:"noun"},{id:"ñekiḻ",size:1,type:"verb"},{id:"pakai",size:2,type:"noun"},{id:"pul",size:2,type:"noun"},{id:"ārka",size:1},{id:"pār",size:1,type:"noun"},{id:"ōtuka",size:1},{id:"kāytta",size:1},{id:"paḻaṉa(m)",size:7,type:"noun"},{id:"ākaṟka",size:2},{id:"keṇṭai",size:1,type:"noun"},{id:"pāy",size:3,type:"verb"},{id:"taru/tā",size:3,type:"verb"},{id:"aviḻ",size:3,type:"noun"},{id:"vaṇṭu",size:5,type:"noun"},{id:"piṇi",size:3,type:"noun"},{id:"maṟi",size:1,type:"noun"},{id:"iṭai",size:1,type:"noun"},{id:"piṇa",size:1,type:"noun"},{id:"putalvaṉ",size:4,type:"noun"},{id:"naṭuvaṇaṉ",size:1},{id:"naṉṟ",size:1},{id:"kiṭa",size:1,type:"verb"},{id:"muṉi",size:1,type:"noun"},{id:"viyal",size:1,type:"noun"},{id:"kavai",size:2,type:"noun"},{id:"īṟṟu",size:2,type:"noun"},{id:"kātaliyiṉ",size:1},{id:"amar",size:3,type:"noun"},{id:"-uḷ",size:2},{id:"tantai",size:2,type:"noun"},{id:"muṟuvaliṉ",size:1},{id:"naku",size:1,type:"verb"},{id:"payil",size:1,type:"verb"},{id:"uruṭṭu",size:1,type:"verb"},{id:"taḷar",size:2,type:"verb"},{id:"vāḷ",size:1,type:"noun"},{id:"nutal",size:6,type:"noun"},{id:"arivai",size:4,type:"noun"},{id:"ūṭṭu",size:1,type:"noun"},{id:"puṟam",size:1,type:"noun"},{id:"naṟu(m)",size:8,type:"adjective"},{id:"puṟavam",size:2},{id:"kuṟu(m)",size:2,type:"adjective"},{id:"poṟu",size:1,type:"verb"},{id:"oṇ",size:1},{id:"cuṭar",size:4,type:"noun"},{id:"pāṇṭil",size:1,type:"noun"},{id:"maṉaikku",size:1},{id:"viḷakkam",size:1,type:"noun"},{id:"maṉ",size:1},{id:"kaṉai",size:1,type:"verb"},{id:"vai",size:1,type:"noun"},{id:"nāṭu",size:2,type:"noun"},{id:"pārppu",size:3,type:"noun"},{id:"aṉpu",size:1,type:"noun"},{id:"mutalai",size:2,type:"noun"},{id:"poykaittu",size:1},{id:"mayaṅkiṉaḷ",size:1},{id:"māṇ",size:4,type:"noun"},{id:"kāviri",size:1,type:"noun"},{id:"ampaṇattu",size:1},{id:"yāmai",size:3,type:"noun"},{id:"ēl",size:3,type:"verb"},{id:"cempiṉ",size:1},{id:"tīm",size:2,type:"adjective"},{id:"mukam",size:1,type:"noun"},{id:"vaḷarnticiṉāaṅku",size:1},{id:"ai",size:1,type:"noun"},{id:"oḻukumati",size:1},{id:"kūtir",size:1,type:"noun"},{id:"kaliḻ",size:1,type:"verb"},{id:"vēṉal",size:2,type:"noun"},{id:"niṟam",size:1,type:"noun"},{id:"yāṟu",size:1,type:"noun"},{id:"aṇintaṉa",size:1},{id:"kuṟippiṉai",size:1},{id:"aruḷ",size:3,type:"noun"},{id:"muḷ",size:1,type:"noun"},{id:"eyiṟu",size:2,type:"noun"},{id:"keṭiṟu",size:1,type:"noun"},{id:"cori",size:3,type:"verb"},{id:"vaṭṭi",size:2,type:"noun"},{id:"ari",size:4,type:"noun"},{id:"payaṟu",size:1,type:"noun"},{id:"niṟaikkum",size:2},{id:"āy",size:2,type:"verb"},{id:"valai",size:1,type:"noun"},{id:"varāal",size:1,type:"noun"},{id:"yāṅkaṇ",size:8,type:"pronoun"},{id:"kaḻi",size:1},{id:"vēṇṭēm",size:1},{id:"parattaṉ",size:1,type:"noun"},{id:"kuṟiyōṭu",size:1},{id:"ōti",size:2,type:"noun"},{id:"acai",size:1,type:"verb"},{id:"naṭa",size:3,type:"verb"},{id:"peṟu",size:5,type:"verb"},{id:"citai",size:1,type:"verb"},{id:"paci",size:2,type:"noun"},{id:"cēṇ",size:1,type:"noun"},{id:"pōttu",size:2,type:"noun"},{id:"muḻu",size:1,type:"noun"},{id:"kaṭai",size:1,type:"noun"},{id:"niṟka",size:1},{id:"celvam",size:1,type:"noun"},{id:"varuttam",size:1,type:"noun"},{id:"vañci",size:1,type:"noun"},{id:"tañcam",size:1,type:"noun"},{id:"neñcam",size:2,type:"noun"},{id:"kōḻi",size:1,type:"noun"},{id:"nīla",size:1},{id:"cēval",size:1,type:"noun"},{id:"kūr",size:1,type:"noun"},{id:"ukir",size:1,type:"noun"},{id:"pēṭai",size:3,type:"noun"},{id:"vayāam",size:1},{id:"puḷim",size:1},{id:"vēṭkaittu",size:1},{id:"tai",size:2,type:"noun"},{id:"viral",size:1,type:"noun"},{id:"civa",size:3,type:"verb"},{id:"maḻai",size:1,type:"noun"},{id:"e",size:2},{id:"aḻi",size:2,type:"noun"},{id:"teṉ",size:1,type:"noun"},{id:"nāṭṭu",size:1,type:"verb"},{id:"uḷ",size:1},{id:"oḻukku",size:1,type:"verb"},{id:"tēṉūr",size:3},{id:"teri",size:1,type:"verb"},{id:"pañcāy",size:1,type:"noun"},{id:"kōtai",size:1,type:"noun"},{id:"accam",size:2,type:"noun"},{id:"entiram",size:1},{id:"kaḷiṟu",size:1,type:"noun"},{id:"etir",size:1,type:"noun"},{id:"piḷiṟṟum",size:1},{id:"vaḷ",size:3,type:"noun"},{id:"kō",size:1,type:"noun"},{id:"tuṟattaliṉ",size:1},{id:"pakal",size:2,type:"noun"},{id:"viḷakkōṭu",size:1},{id:"ira(m)",size:1,type:"noun"},{id:"vel",size:1,type:"verb"},{id:"cōḻaṉ",size:1,type:"noun"},{id:"āmūr",size:1,type:"noun"},{id:"tēmpa",size:1},{id:"pulampu",size:1,type:"noun"},{id:"-uṭai",size:2},{id:"viṇṭu",size:1,type:"noun"},{id:"pōr",size:2,type:"verb"},{id:"kai",size:2,type:"noun"},{id:"virāaṉ",size:1,type:"noun"},{id:"iruppai",size:1,type:"noun"},{id:"maṉaiyai",size:1},{id:"āṟṟu",size:1,type:"verb"},{id:"maintu",size:1,type:"noun"},{id:"evvam",size:1,type:"noun"},{id:"tīr",size:1,type:"verb"},{id:"yāṉ",size:1,type:"pronoun"},{id:"vēttu",size:1,type:"adjective"},{id:"taṇika",size:1},{id:"nantuka",size:1},{id:"varaika",size:1},{id:"entai",size:1,type:"noun"},{id:"koṭukka",size:1},{id:"kampuḷ",size:2,type:"noun"},{id:"payir",size:1,type:"noun"},{id:"peṭai",size:1,type:"noun"},{id:"akavu",size:2,type:"verb"},{id:"moḻi",size:2,type:"noun"},{id:"nakar",size:1,type:"noun"},{id:"vaṭi",size:1,type:"noun"},{id:"viḷai",size:1,type:"noun"},{id:"uku",size:1,type:"verb"},{id:"paḻa(m)",size:1,type:"adjective"},{id:"tuṭumeṉ",size:1},{id:"viḻūum",size:1},{id:"matti",size:1,type:"noun"},{id:"kaḻāar",size:1,type:"noun"},{id:"vatuvai",size:1,type:"noun"},{id:"intira",size:1},{id:"viḻavu",size:1,type:"noun"},{id:"i",size:1},{id:"maṅkai",size:1,type:"noun"},{id:"toku",size:1,type:"verb"},{id:"paḷḷi",size:1,type:"noun"},{id:"nīrnāy",size:1,type:"noun"},{id:"vāḷai",size:1,type:"noun"},{id:"irai",size:1,type:"noun"},{id:"tolaivatu",size:1},{id:"tuṉṉu",size:1,type:"verb"},{id:"taḻuvu",size:2,type:"verb"},{id:"oruvar",size:1},{id:"ē",size:1,type:"noun"},{id:"pāttiyiṉ",size:1},{id:"kali",size:1,type:"noun"},{id:"curumpu",size:1,type:"noun"},{id:"kaḷai",size:1,type:"verb"},{id:"muyaṅkaṉmō",size:1},{id:"uṭaliṉēṉ",size:1},{id:"urai",size:2,type:"verb"},{id:"nikarā",size:1},{id:"nikari",size:1},{id:"tarukkum",size:1},{id:"vaṇṭiṉum",size:1},{id:"kaṉṉi",size:1,type:"noun"},{id:"viṭiyal",size:1,type:"noun"},{id:"kaṇai",size:1,type:"noun"},{id:"pēṇāḷ",size:1},{id:"kaṇṭaṉem",size:1},{id:"vaṇṭal",size:1,type:"noun"},{id:"uy",size:1,type:"verb"},{id:"aṟam",size:1,type:"noun"},{id:"keṭu",size:1,type:"verb"},{id:"kiḷai",size:1,type:"noun"},{id:"nārai",size:2,type:"noun"},{id:"ceṉṉi",size:1,type:"noun"},{id:"cē",size:2,type:"noun"},{id:"tūyar",size:1},{id:"naṟiyar",size:1},{id:"pēy",size:1,type:"noun"},{id:"iyām",size:1},{id:"cūtu",size:1},{id:"cūr",size:1,type:"noun"},{id:"nuṭakkattu",size:1},{id:"kātal",size:2,type:"noun"},{id:"nerunal",size:1},{id:"maṟai",size:1,type:"noun"},{id:"ol(lu)",size:3,type:"verb"},{id:"putaittal",size:1},{id:"kayil",size:1},{id:"tuyal",size:1,type:"verb"},{id:"kūntal",size:3,type:"noun"},{id:"kuvaḷai",size:2,type:"noun"},{id:"iyal",size:1,type:"noun"},{id:"kaḷ",size:1,type:"verb"},{id:"tōkai",size:1,type:"noun"},{id:"cīr",size:1,type:"noun"},{id:"pacu(m)",size:3,type:"adjective"},{id:"avir",size:1,type:"verb"},{id:"pai",size:2},{id:"pāyvōḷ",size:1},{id:"ovvāy",size:1},{id:"toṭakku",size:1,type:"verb"},{id:"tol",size:1,type:"adjective"},{id:"niṉṉōṭu",size:2},{id:"āṭiṉaḷ",size:1},{id:"paiñcāy",size:1,type:"noun"},{id:"cuṇaṅku",size:1,type:"noun"},{id:"āṭi",size:3,type:"noun"},{id:"mēmpaṭṭaṉaḷ",size:1},{id:"antaram",size:1},{id:"pēr",size:1,type:"noun"},{id:"alai",size:1,type:"noun"},{id:"vēl",size:1,type:"noun"},{id:"kaṭu",size:1,type:"verb"},{id:"kiḷḷi",size:1,type:"noun"},{id:"matil",size:1,type:"noun"},{id:"kol",size:1,type:"verb"},{id:"yāṉai",size:1,type:"noun"},{id:"kataḻpu",size:1},{id:"neṟi",size:2,type:"noun"},{id:"paṟṟu",size:1,type:"noun"},{id:"makaṉai",size:1},{id:"aracaṉ",size:1,type:"noun"},{id:"muṟai",size:1,type:"noun"},{id:"ceyka",size:1},{id:"kaḷavu",size:1,type:"noun"},{id:"alaṅku",size:1,type:"verb"},{id:"cūḷ",size:1,type:"noun"},{id:"vāyppatu",size:1},{id:"pulakkuvēm",size:1},{id:"nala",size:1},{id:"tava",size:1},{id:"akaṭṭu",size:1},{id:"paṟai",size:2,type:"noun"},{id:"viṉai",size:1,type:"noun"},{id:"kūṭṭam",size:1,type:"noun"},{id:"nayantaṉeṉ",size:1},{id:"kēṭkiṉ",size:1},{id:"vekuṇṭaṉaḷ",size:1},{id:"talaimakaḷ",size:1},{id:"iṇar",size:1,type:"noun"},{id:"paṟa",size:1,type:"verb"},{id:"poḻutu",size:2,type:"noun"},{id:"taṇa",size:1,type:"verb"},{id:"uymmō",size:1},{id:"num",size:3,type:"pronoun"},{id:"cevi",size:1,type:"noun"},{id:"iṟa",size:1,type:"verb"},{id:"vekuḷvōḷ",size:1},{id:"ai(m)",size:1,type:"noun"},{id:"kayam",size:1,type:"noun"},{id:"paṭintu",size:1},{id:"kural",size:2,type:"noun"},{id:"kiḷaiyōṭu",size:1},{id:"mali",size:1,type:"verb"},{id:"ciṟuvariṉ",size:1},{id:"nakār",size:1},{id:"viḷi",size:1,type:"noun"},{id:"nīḷ",size:1,type:"noun"},{id:"imiḻum",size:1},{id:"alku",size:1,type:"verb"},{id:"pakaṉṟai",size:1,type:"noun"},{id:"ā",size:3},{id:"kōvalar",size:1,type:"noun"},{id:"kuṇil",size:1,type:"noun"},{id:"kaṉi",size:1,type:"noun"},{id:"utirkkum",size:1},{id:"pula",size:2,type:"verb"},{id:"evvai",size:1},{id:"evvaikku",size:1},{id:"aḷi",size:1,type:"noun"},{id:"ūtu",size:1,type:"verb"},{id:"virumpiṉṟu",size:1},{id:"ampal",size:1,type:"noun"},{id:"kuṇam",size:2,type:"noun"},{id:"maruppu",size:1,type:"noun"},{id:"erumai",size:4,type:"noun"},{id:"veṟi",size:1,type:"noun"},{id:"mayakkum",size:1},{id:"vetir",size:1,type:"noun"},{id:"karu(m)",size:1,type:"adjective"},{id:"kōṭṭam",size:2,type:"noun"},{id:"kuḻavikku",size:1},{id:"ūṟṟu",size:1,type:"noun"},{id:"maṭukkum",size:1},{id:"nuntai",size:1,type:"noun"},{id:"maṭantai",size:1,type:"noun"},{id:"niṉṉai",size:1},{id:"iṉam",size:1,type:"noun"},{id:"mēy",size:1,type:"verb"},{id:"aruttu",size:1,type:"verb"},{id:"mōrōṭamōṭu",size:1},{id:"viṉaiya",size:1},{id:"veṟukkaiya",size:1},{id:"mucci",size:1,type:"noun"},{id:"maḷḷar",size:1,type:"noun"},{id:"vati",size:1,type:"noun"},{id:"ilañci",size:1,type:"noun"},{id:"paḻaṉattatu",size:1}],IA=[{id:"a- ūr",source:"a-",target:"ūr",strength:.048826364073441056,citations:["Aink24","Aink41"]},{id:"vāḻ ūr",source:"vāḻ",target:"ūr",strength:.05860521768615948,citations:["Aink36","Aink39"]},{id:"ūr eṉ",source:"ūr",target:"eṉ",strength:.09278684253707536,citations:["Aink41","Aink89"]},{id:"ūr ūr",source:"ūr",target:"ūr",strength:.1265639771171183,citations:["Aink15","Aink54","Aink7"],curvature:.5},{id:"ūr pū(m)",source:"ūr",target:"pū(m)",strength:.13213757619878183,citations:["Aink16","Aink34"],curvature:.25},{id:"nī a-",source:"nī",target:"a-",strength:.13768107667637536,citations:["Aink46","Aink48"],curvature:.25},{id:"ūr peru(m)",source:"ūr",target:"peru(m)",strength:.15684992999743275,citations:["Aink30","Aink48"]},{id:"ūr e-",source:"ūr",target:"e-",strength:.16376530926590702,citations:["Aink20","Aink81"]},{id:"eṉ nī",source:"eṉ",target:"nī",strength:.18164155514000963,citations:["Aink81","Aink82"]},{id:"ūr malar",source:"ūr",target:"malar",strength:.18680028065646606,citations:["Aink18","Aink75"],curvature:.25},{id:"malar ūr",source:"malar",target:"ūr",strength:.18680028065646606,citations:["Aink53","Aink68"],curvature:.25},{id:"ākkam nī",source:"ākkam",target:"nī",strength:.19050301293352953,citations:["Aink46","Aink79"]},{id:"tāṉ ūr",source:"tāṉ",target:"ūr",strength:.1953930423330322,citations:["Aink40","Aink7"],curvature:.25},{id:"nī i-",source:"nī",target:"i-",strength:.19995565890111822,citations:["Aink67","Aink85"]},{id:"pū(m) a-",source:"pū(m)",target:"a-",strength:.20070958173851888,citations:["Aink41","Aink62"]},{id:"ūr nal",source:"ūr",target:"nal",strength:.21370694669609214,citations:["Aink12","Aink22","Aink63"]},{id:"ākkam eṉ",source:"ākkam",target:"eṉ",strength:.2141807843339666,citations:["Aink8","Aink9"]},{id:"puṉal ūr",source:"puṉal",target:"ūr",strength:.21431940259366572,citations:["Aink23","Aink65"]},{id:"ūr ākkam",source:"ūr",target:"ākkam",strength:.22167101803662365,citations:["Aink15","Aink19","Aink24"]},{id:"i- eṉ",source:"i-",target:"eṉ",strength:.22363343030155527,citations:["Aink22","Aink79"]},{id:"ūr i-",source:"ūr",target:"i-",strength:.23215351378313226,citations:["Aink30","Aink8","Aink86","Aink91"]},{id:"eṉ a-",source:"eṉ",target:"a-",strength:.2321710695947595,citations:["Aink32","Aink41","Aink89"]},{id:"a- e-",source:"a-",target:"e-",strength:.23233731480564407,citations:["Aink18","Aink31"]},{id:"makiḻ nī",source:"makiḻ",target:"nī",strength:.23281056118601773,citations:["Aink69","Aink77"]},{id:"a- kaṇ",source:"a-",target:"kaṇ",strength:.23960748064045487,citations:["Aink18","Aink30"]},{id:"nī e-",source:"nī",target:"e-",strength:.2526200218688413,citations:["Aink60","Aink81"]},{id:"malar a-",source:"malar",target:"a-",strength:.2553722861962031,citations:["Aink18","Aink72"]},{id:"pū(m) ūr",source:"pū(m)",target:"ūr",strength:.2554820489054674,citations:["Aink16","Aink3","Aink30","Aink8"],curvature:.25},{id:"nī pal",source:"nī",target:"pal",strength:.2598901877036521,citations:["Aink55","Aink69"]},{id:"a- nī",source:"a-",target:"nī",strength:.26162950437734156,citations:["Aink307","Aink42","Aink44","Aink51"],curvature:.25},{id:"ūr poykai",source:"ūr",target:"poykai",strength:.2620100215771803,citations:["Aink34","Aink35"],curvature:.25},{id:"poykai ūr",source:"poykai",target:"ūr",strength:.2620100215771803,citations:["Aink70","Aink81"],curvature:.25},{id:"tāṉ a-",source:"tāṉ",target:"a-",strength:.26396504787276925,citations:["Aink103","Aink404"],curvature:.25},{id:"ūr tāṉ",source:"ūr",target:"tāṉ",strength:.26828045095343883,citations:["Aink10","Aink3","Aink7"],curvature:.25},{id:"peru(m) eṉ",source:"peru(m)",target:"eṉ",strength:.2693824140008041,citations:["Aink1","Aink89"],curvature:.25},{id:"eṉ peru(m)",source:"eṉ",target:"peru(m)",strength:.2693824140008041,citations:["Aink67","Aink73"],curvature:.25},{id:"ūr maṉai",source:"ūr",target:"maṉai",strength:.27694352176311277,citations:["Aink3","Aink87"]},{id:"ākkam peru(m)",source:"ākkam",target:"peru(m)",strength:.27824387179432397,citations:["Aink403","Aink63"]},{id:"tuṟai i-",source:"tuṟai",target:"i-",strength:.2811029028977883,citations:["Aink103","Aink28"]},{id:"pal eṉ",source:"pal",target:"eṉ",strength:.2835679591040892,citations:["Aink3","Aink6"]},{id:"makiḻ a-",source:"makiḻ",target:"a-",strength:.2864600337803068,citations:["Aink31","Aink75","Aink90"]},{id:"ūr koḷ",source:"ūr",target:"koḷ",strength:.2883608193981266,citations:["Aink10","Aink40","Aink7"]},{id:"em a-",source:"em",target:"a-",strength:.29339526158388163,citations:["Aink82","Aink90"]},{id:"cel ūr",source:"cel",target:"ūr",strength:.29363775464430547,citations:["Aink22","Aink27"]},{id:"ūr toṭi",source:"ūr",target:"toṭi",strength:.29363775464430547,citations:["Aink28","Aink83"]},{id:"nel ūr",source:"nel",target:"ūr",strength:.29363775464430547,citations:["Aink4","Aink48"]},{id:"pū(m) tuṟai",source:"pū(m)",target:"tuṟai",strength:.3021395327983861,citations:["Aink12","Aink33"]},{id:"ākkam i-",source:"ākkam",target:"i-",strength:.30764452955176425,citations:["Aink46","Aink59","Aink93"]},{id:"nal nal",source:"nal",target:"nal",strength:.307657338632463,citations:["Aink204","Aink61"],curvature:.5},{id:"eṉ tāṉ",source:"eṉ",target:"tāṉ",strength:.3079255263364035,citations:["Aink33","Aink41"]},{id:"pū(m) peru(m)",source:"pū(m)",target:"peru(m)",strength:.30873314766251053,citations:["Aink19","Aink33"]},{id:"ūr peṇ",source:"ūr",target:"peṇ",strength:.312564114904939,citations:["Aink13","Aink89"],curvature:.25},{id:"peṇ ūr",source:"peṇ",target:"ūr",strength:.312564114904939,citations:["Aink13","Aink40"],curvature:.25},{id:"ākkam taṭpam",source:"ākkam",target:"taṭpam",strength:.31292154057644567,citations:["Aink28","Aink45","Aink54"]},{id:"nī maka",source:"nī",target:"maka",strength:.3146640789974377,citations:["Aink101","Aink29","Aink49"]},{id:"i- tāṉ",source:"i-",target:"tāṉ",strength:.3262396300975121,citations:["Aink103","Aink67"]},{id:"eṉ puṉal",source:"eṉ",target:"puṉal",strength:.326851886597037,citations:["Aink71","Aink72"]},{id:"nal eṉ",source:"nal",target:"eṉ",strength:.333100940557857,citations:["Aink204","Aink67"]},{id:"eṉ uṇ",source:"eṉ",target:"uṇ",strength:.3373557400475159,citations:["Aink36","Aink69"]},{id:"aṇi ūr",source:"aṇi",target:"ūr",strength:.33895930676476926,citations:["Aink14","Aink23","Aink45"]},{id:"ūr oṇmai",source:"ūr",target:"oṇmai",strength:.33895930676476926,citations:["Aink28","Aink83","Aink92"]},{id:"a- tāṉ",source:"a-",target:"tāṉ",strength:.34103353803765357,citations:["Aink343","Aink41","Aink66"],curvature:.25},{id:"pū(m) taṭpam",source:"pū(m)",target:"taṭpam",strength:.34526985713672764,citations:["Aink103","Aink13","Aink404"]},{id:"aṇi nī",source:"aṇi",target:"nī",strength:.35086473418011455,citations:["Aink45","Aink55"]},{id:"aṟi nī",source:"aṟi",target:"nī",strength:.35086473418011455,citations:["Aink47","Aink79"]},{id:"i- nal",source:"i-",target:"nal",strength:.3525317210245177,citations:["Aink55","Aink56","Aink57"]},{id:"kaṇ e-",source:"kaṇ",target:"e-",strength:.3545464258329208,citations:["Aink84"]},{id:"ūr pāṇ",source:"ūr",target:"pāṇ",strength:.3548033561103829,citations:["Aink1","Aink43","Aink49"]},{id:"vāḻ pāṇ",source:"vāḻ",target:"pāṇ",strength:.3552943809155683,citations:["Aink1","Aink89"]},{id:"vāḻ nām",source:"vāḻ",target:"nām",strength:.3552943809155683,citations:["Aink34","Aink35"]},{id:"makiḻ tāṉ",source:"makiḻ",target:"tāṉ",strength:.3590945323824116,citations:["Aink38","Aink66"]},{id:"maka i-",source:"maka",target:"i-",strength:.359216349656738,citations:["Aink52","Aink79","Aink91"]},{id:"peṟu ūr",source:"peṟu",target:"ūr",strength:.3602547338884536,citations:["Aink49","Aink63"]},{id:"e- yām",source:"e-",target:"yām",strength:.3622097601840425,citations:["Aink11","Aink53"],curvature:.25},{id:"yām e-",source:"yām",target:"e-",strength:.3622097601840425,citations:["Aink11","Aink12"],curvature:.25},{id:"a- tuṇai",source:"a-",target:"tuṇai",strength:.3622097601840425,citations:["Aink307","Aink94"]},{id:"tuṟai tāṉ",source:"tuṟai",target:"tāṉ",strength:.3653949989326365,citations:["Aink10","Aink7"]},{id:"tuṟai varavu",source:"tuṟai",target:"varavu",strength:.3745425055805517,citations:["Aink105","Aink69"]},{id:"pū(m) uṇ",source:"pū(m)",target:"uṇ",strength:.37670647370922233,citations:["Aink101","Aink16"]},{id:"nī yāṅkaṇ",source:"nī",target:"yāṅkaṇ",strength:.38249246724723973,citations:["Aink79","Aink87"]},{id:"ākkam aṟi",source:"ākkam",target:"aṟi",strength:.38340396337407157,citations:["Aink79","Aink90"]},{id:"ākkam vēṭṭōḷ",source:"ākkam",target:"vēṭṭōḷ",strength:.38340396337407157,citations:["Aink8","Aink9"]},{id:"il eṉ",source:"il",target:"eṉ",strength:.3894760057664841,citations:["Aink8","Aink9"]},{id:"ūr kēḷ",source:"ūr",target:"kēḷ",strength:.39188246695557877,citations:["Aink2","Aink9"]},{id:"aḷai ūr",source:"aḷai",target:"ūr",strength:.39188246695557877,citations:["Aink22","Aink27"]},{id:"ūr māṇ",source:"ūr",target:"māṇ",strength:.39188246695557877,citations:["Aink42","Aink47"]},{id:"nekiḻ ūr",source:"nekiḻ",target:"ūr",strength:.39188246695557877,citations:["Aink54"]},{id:"a- i-",source:"a-",target:"i-",strength:.3972436001529703,citations:["Aink103","Aink54","Aink55","Aink56","Aink57","Aink58"]},{id:"tōḻaṉ ūr",source:"tōḻaṉ",target:"ūr",strength:.39950387738985843,citations:["Aink34","Aink35","Aink36","Aink39"]},{id:"pū(m) pōl",source:"pū(m)",target:"pōl",strength:.4003842451096594,citations:["Aink101","Aink16"]},{id:"malar taṭpam",source:"malar",target:"taṭpam",strength:.4032655430783327,citations:["Aink69","Aink76","Aink88"]},{id:"ūr em",source:"ūr",target:"em",strength:.40763644311527636,citations:["Aink26","Aink5","Aink63","Aink86","Aink88"]},{id:"al e-",source:"al",target:"e-",strength:.4083342067763476,citations:["Aink11"]},{id:"ūr nī",source:"ūr",target:"nī",strength:.40973884279575795,citations:["Aink42","Aink43","Aink49","Aink53","Aink54","Aink60","Aink68","Aink81","Aink85","Aink87"]},{id:"yām pū(m)",source:"yām",target:"pū(m)",strength:.41171239384898395,citations:["Aink10","Aink4","Aink7"]},{id:"kaḷvaṉ taṭpam",source:"kaḷvaṉ",target:"taṭpam",strength:.4127638535118012,citations:["Aink27","Aink30"]},{id:"yāy pū(m)",source:"yāy",target:"pū(m)",strength:.413893239242258,citations:["Aink10","Aink4"]},{id:"pū(m) vēḻam",source:"pū(m)",target:"vēḻam",strength:.413893239242258,citations:["Aink14","Aink16"],curvature:.25},{id:"nām ūr",source:"nām",target:"ūr",strength:.4160643571450792,citations:["Aink102","Aink31","Aink34","Aink35"]},{id:"ūr mārpu",source:"ūr",target:"mārpu",strength:.4160643571450792,citations:["Aink14","Aink25","Aink29","Aink4"]},{id:"maka pōl",source:"maka",target:"pōl",strength:.41850298404418595,citations:["Aink101","Aink401"]},{id:"aṉṉai e-",source:"aṉṉai",target:"e-",strength:.4196792327802755,citations:["Aink201","Aink204"]},{id:"nī paca",source:"nī",target:"paca",strength:.4232677069622801,citations:["Aink29","Aink45"]},{id:"āṭu eṉ",source:"āṭu",target:"eṉ",strength:.4250965989083103,citations:["Aink33","Aink71"]},{id:"tāṉ koḷ",source:"tāṉ",target:"koḷ",strength:.4294580863929939,citations:["Aink10","Aink7"]},{id:"naṟu(m) taṭpam",source:"naṟu(m)",target:"taṭpam",strength:.4294580863929939,citations:["Aink404","Aink73"]},{id:"vēḻam tuṟai",source:"vēḻam",target:"tuṟai",strength:.4320119781767846,citations:["Aink11","Aink20"]},{id:"tuñcu ūr",source:"tuñcu",target:"ūr",strength:.43265770667061904,citations:["Aink13","Aink43"]},{id:"ūr uḷḷi",source:"ūr",target:"uḷḷi",strength:.43265770667061904,citations:["Aink16","Aink20"]},{id:"num ūr",source:"num",target:"ūr",strength:.43265770667061904,citations:["Aink83","Aink92"]},{id:"a- nal",source:"a-",target:"nal",strength:.4361580313770697,citations:["Aink55","Aink56","Aink57","Aink61"]},{id:"varavu puṉal",source:"varavu",target:"puṉal",strength:.438605593040909,citations:["Aink69","Aink72"]},{id:"pōl kaṇ",source:"pōl",target:"kaṇ",strength:.43928214401159543,citations:["Aink101","Aink16"]},{id:"aṟu ūr",source:"aṟu",target:"ūr",strength:.44319435216100883,citations:["Aink25","Aink26","Aink29"]},{id:"nel pū(m)",source:"nel",target:"pū(m)",strength:.44552097230938326,citations:["Aink3","Aink30"]},{id:"taṭpam ūr",source:"taṭpam",target:"ūr",strength:.4459120336732204,citations:["Aink10","Aink13","Aink2","Aink21","Aink5","Aink6","Aink7","Aink83","Aink88","Aink9"]},{id:"nī pāṇ",source:"nī",target:"pāṇ",strength:.44907585977950826,citations:["Aink43","Aink47","Aink49"]},{id:"nī maṉai",source:"nī",target:"maṉai",strength:.44907585977950826,citations:["Aink66","Aink81","Aink87"]},{id:"aviṉi pal",source:"aviṉi",target:"pal",strength:.4527911381441941,citations:["Aink1","Aink3"]},{id:"cel nal",source:"cel",target:"nal",strength:.4573392446936849,citations:["Aink22","Aink307"]},{id:"makiḻ toṭi",source:"makiḻ",target:"toṭi",strength:.4573392446936849,citations:["Aink24","Aink40"]},{id:"puṉal em",source:"puṉal",target:"em",strength:.4588883001041062,citations:["Aink77","Aink78"]},{id:"varavu eṉ",source:"varavu",target:"eṉ",strength:.46056591069189695,citations:["Aink105","Aink2","Aink72","Aink88"]},{id:"yāṅkaṇ maka",source:"yāṅkaṇ",target:"maka",strength:.4636397112439098,citations:["Aink79"]},{id:"malar āmpal",source:"malar",target:"āmpal",strength:.4685559436999423,citations:["Aink72","Aink91"]},{id:"peru(m) tuṟai",source:"peru(m)",target:"tuṟai",strength:.47141015385434343,citations:["Aink31","Aink33","Aink69","Aink75"]},{id:"kaḻaṉi malar",source:"kaḻaṉi",target:"malar",strength:.4834894438858748,citations:["Aink53","Aink94"]},{id:"il ākkam",source:"il",target:"ākkam",strength:.4835991226849416,citations:["Aink5","Aink8","Aink9"]},{id:"nī peṇ",source:"nī",target:"peṇ",strength:.4868683684634915,citations:["Aink68","Aink69","Aink70"]},{id:"ūr koṭu(m)",source:"ūr",target:"koṭu(m)",strength:.490127179266852,citations:["Aink11","Aink12"]},{id:"naṇṇu ūr",source:"naṇṇu",target:"ūr",strength:.490127179266852,citations:["Aink20","Aink86"]},{id:"niṟaikkum ūr",source:"niṟaikkum",target:"ūr",strength:.490127179266852,citations:["Aink47","Aink48"]},{id:"akavu ūr",source:"akavu",target:"ūr",strength:.490127179266852,citations:["Aink60","Aink62"]},{id:"ciṟa eṉ",source:"ciṟa",target:"eṉ",strength:.4919094902114432,citations:["Aink1","Aink10","Aink3"]},{id:"toṭi yām",source:"toṭi",target:"yām",strength:.492082205562441,citations:["Aink38","Aink40"]},{id:"pōl uṇ",source:"pōl",target:"uṇ",strength:.4930699249550221,citations:["Aink101","Aink16"]},{id:"miṉ taṭpam",source:"miṉ",target:"taṭpam",strength:.496075065637142,citations:["Aink10","Aink5"]},{id:"taṭpam aka(m)",source:"taṭpam",target:"aka(m)",strength:.496075065637142,citations:["Aink27","Aink30"]},{id:"taṭpam puṉal",source:"taṭpam",target:"puṉal",strength:.4972351731952399,citations:["Aink54","Aink69","Aink76","Aink77"]},{id:"vāḻ vāḻ",source:"vāḻ",target:"vāḻ",strength:.4992026420354124,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.5},{id:"kaḻaṉi ūr",source:"kaḻaṉi",target:"ūr",strength:.5124540753100538,citations:["Aink18","Aink25","Aink29","Aink4","Aink60","Aink91"]},{id:"no/nō ākkam",source:"no/nō",target:"ākkam",strength:.5132764087524699,citations:["Aink101","Aink28"]},{id:"nī mārpu",source:"nī",target:"mārpu",strength:.5145996402934334,citations:["Aink42","Aink44","Aink46","Aink51"]},{id:"keḻu ūr",source:"keḻu",target:"ūr",strength:.5200119943243899,citations:["Aink11","Aink12","Aink85"]},{id:"kañal ūr",source:"kañal",target:"ūr",strength:.5200119943243899,citations:["Aink16","Aink3","Aink8"]},{id:"vāḻ makiḻ",source:"vāḻ",target:"makiḻ",strength:.5212079905250204,citations:["Aink31","Aink32","Aink33","Aink37","Aink38","Aink40","Aink59","Aink77"]},{id:"aruḷ nī",source:"aruḷ",target:"nī",strength:.5215124192735534,citations:["Aink50"]},{id:"i- aṇaṅku",source:"i-",target:"aṇaṅku",strength:.5227290547200587,citations:["Aink23","Aink58"]},{id:"kaṇ paca",source:"kaṇ",target:"paca",strength:.5251941109263596,citations:["Aink36","Aink37"]},{id:"koḷ cel",source:"koḷ",target:"cel",strength:.5277027987042672,citations:["Aink10","Aink7"]},{id:"yāṇar nī",source:"yāṇar",target:"nī",strength:.5331126815909027,citations:["Aink42","Aink43","Aink49","Aink87"]},{id:"aka(m) peru(m)",source:"aka(m)",target:"peru(m)",strength:.5368503053521823,citations:["Aink403","Aink47"]},{id:"em cel",source:"em",target:"cel",strength:.538206652154746,citations:["Aink77"]},{id:"veḷ pū(m)",source:"veḷ",target:"pū(m)",strength:.5392773612349321,citations:["Aink13","Aink17","Aink19","Aink41"]},{id:"pū(m) ciṉai",source:"pū(m)",target:"ciṉai",strength:.5437656846206564,citations:["Aink19","Aink20"]},{id:"poykai āmpal",source:"poykai",target:"āmpal",strength:.5437656846206566,citations:["Aink35","Aink91"]},{id:"pāy eṉ",source:"pāy",target:"eṉ",strength:.5451901906739904,citations:["Aink53","Aink73"]},{id:"veḷ nel",source:"veḷ",target:"nel",strength:.549551678158674,citations:["Aink48","Aink58"]},{id:"maka tuṇai",source:"maka",target:"tuṇai",strength:.5528830830292107,citations:["Aink15","Aink80","Aink94"]},{id:"maruntu ākkam",source:"maruntu",target:"ākkam",strength:.5540516484675103,citations:["Aink101","Aink59"]},{id:"aṉṉai vāḻ",source:"aṉṉai",target:"vāḻ",strength:.5569598798204596,citations:["Aink101","Aink102","Aink103","Aink105","Aink201","Aink204"],curvature:.25},{id:"vāḻ aṉṉai",source:"vāḻ",target:"aṉṉai",strength:.5569598798204596,citations:["Aink101","Aink102","Aink103","Aink105","Aink201","Aink204"],curvature:.25},{id:"āṭu em",source:"āṭu",target:"em",strength:.5571330124153795,citations:["Aink77","Aink78"]},{id:"malar poykai",source:"malar",target:"poykai",strength:.558099075841215,citations:["Aink6","Aink88","Aink91"]},{id:"nām poykai",source:"nām",target:"poykai",strength:.5586991848065891,citations:["Aink34","Aink35"]},{id:"muṉ yām",source:"muṉ",target:"yām",strength:.5586991848065891,citations:["Aink38","Aink40"]},{id:"peru(m) ciṟa",source:"peru(m)",target:"ciṟa",strength:.5598787342812576,citations:["Aink1","Aink403","Aink9"]},{id:"tuṟai kēḷ",source:"tuṟai",target:"kēḷ",strength:.5618844235551831,citations:["Aink2","Aink9"]},{id:"tuṟai aṇaṅku",source:"tuṟai",target:"aṇaṅku",strength:.5618844235551831,citations:["Aink28","Aink53"]},{id:"i- maruntu",source:"i-",target:"maruntu",strength:.563504294435099,citations:["Aink59"]},{id:"vēḻam pū(m)",source:"vēḻam",target:"pū(m)",strength:.567934514546827,citations:["Aink12","Aink13","Aink17","Aink19"],curvature:.25},{id:"puṉal aṭu",source:"puṉal",target:"aṭu",strength:.5684780384193076,citations:["Aink15","Aink72"]},{id:"yāṇar ūr",source:"yāṇar",target:"ūr",strength:.5729324627676623,citations:["Aink1","Aink42","Aink43","Aink49","Aink50","Aink70","Aink87"]},{id:"kaḷvaṉ kaḻaṉi",source:"kaḷvaṉ",target:"kaḻaṉi",strength:.5736326849925215,citations:["Aink25","Aink29"]},{id:"tāṉ amai",source:"tāṉ",target:"amai",strength:.5753934176877817,citations:["Aink103"]},{id:"uṇ paca",source:"uṇ",target:"paca",strength:.5789818918697863,citations:["Aink36","Aink37"]},{id:"nī neñcam",source:"nī",target:"neñcam",strength:.5789818918697863,citations:["Aink50"]},{id:"nī moḻi",source:"nī",target:"moḻi",strength:.5789818918697863,citations:["Aink60","Aink77"]},{id:"kaṇ ēr",source:"kaṇ",target:"ēr",strength:.5826635835225925,citations:["Aink101","Aink72"]},{id:"ōkku pū(m)",source:"ōkku",target:"pū(m)",strength:.5845409243356969,citations:["Aink16","Aink33"]},{id:"pey pū(m)",source:"pey",target:"pū(m)",strength:.5845409243356969,citations:["Aink16","Aink405"]},{id:"tuṟai ūr",source:"tuṟai",target:"ūr",strength:.588330111926955,citations:["Aink10","Aink11","Aink12","Aink13","Aink14","Aink2","Aink20","Aink21","Aink5","Aink6","Aink7","Aink83","Aink88","Aink9"]},{id:"mūtu ūr",source:"mūtu",target:"ūr",strength:.5883718915781253,citations:["Aink15"]},{id:"maṉai yāṅkaṇ",source:"maṉai",target:"yāṅkaṇ",strength:.5903269178737143,citations:["Aink48","Aink87"]},{id:"tēṉūr a-",source:"tēṉūr",target:"a-",strength:.5927650814086047,citations:["Aink54","Aink55","Aink57"]},{id:"kāl āmpal",source:"kāl",target:"āmpal",strength:.5943197779484152,citations:["Aink34","Aink68"]},{id:"tuṟai keḻu",source:"tuṟai",target:"keḻu",strength:.6026596632702235,citations:["Aink11","Aink12"]},{id:"marutattu tuṟai",source:"marutattu",target:"tuṟai",strength:.6026596632702235,citations:["Aink31","Aink75"]},{id:"pāṇ maka",source:"pāṇ",target:"maka",strength:.6045877391762879,citations:["Aink47","Aink48","Aink49"]},{id:"al poy",source:"al",target:"poy",strength:.6048236313988942,citations:["Aink66","Aink80"]},{id:"tāṉ col",source:"tāṉ",target:"col",strength:.607021150754907,citations:["Aink38","Aink41"]},{id:"marutattu peru(m)",source:"marutattu",target:"peru(m)",strength:.6092532781343478,citations:["Aink31","Aink75"]},{id:"vēḻam veḷ",source:"vēḻam",target:"veḷ",strength:.6104772216479002,citations:["Aink13","Aink17","Aink19"]},{id:"ākkam vī",source:"ākkam",target:"vī",strength:.6115211210637432,citations:["Aink201","Aink84"]},{id:"vēṉal ākkam",source:"vēṉal",target:"ākkam",strength:.6115211210637432,citations:["Aink45","Aink54"]},{id:"vēḻam karuppu",source:"vēḻam",target:"karuppu",strength:.6161686574028221,citations:["Aink12","Aink18"]},{id:"i- e",source:"i-",target:"e",strength:.620973767031332,citations:["Aink52","Aink62"]},{id:"kaṇ aḻu",source:"kaṇ",target:"aḻu",strength:.6234388232376329,citations:["Aink18","Aink69"]},{id:"kaṇ ā",source:"kaṇ",target:"ā",strength:.6234388232376329,citations:["Aink87","Aink92"]},{id:"vāḻ vēṇṭu",source:"vāḻ",target:"vēṇṭu",strength:.6250286209610851,citations:["Aink101","Aink102","Aink103","Aink105","Aink201","Aink204"]},{id:"taṭpam maṇ",source:"taṭpam",target:"maṇ",strength:.6259475110155404,citations:["Aink27","Aink30"]},{id:"puṉal āṭu",source:"puṉal",target:"āṭu",strength:.6409326955437128,citations:["Aink64","Aink77","Aink78"]},{id:"nīr poykai",source:"nīr",target:"poykai",strength:.6420103969319297,citations:["Aink61","Aink70"]},{id:"tōḻaṉ nām",source:"tōḻaṉ",target:"nām",strength:.6537386742263723,citations:["Aink34","Aink35","Aink36"]},{id:"nōkkam nal",source:"nōkkam",target:"nal",strength:.6538286693162315,citations:["Aink204"]},{id:"nal nāṭu",source:"nal",target:"nāṭu",strength:.6538286693162315,citations:["Aink61"]},{id:"aṟu kaḻaṉi",source:"aṟu",target:"kaḻaṉi",strength:.6569438971178624,citations:["Aink25","Aink29"]},{id:"kaḷvaṉ aka(m)",source:"kaḷvaṉ",target:"aka(m)",strength:.6569438971178624,citations:["Aink27","Aink30"]},{id:"kaḻaṉi tāmarai",source:"kaḻaṉi",target:"tāmarai",strength:.6569438971178624,citations:["Aink53","Aink94"]},{id:"tēṉūr i-",source:"tēṉūr",target:"i-",strength:.6588367686528157,citations:["Aink54","Aink55","Aink57"]},{id:"eyiṟu maka",source:"eyiṟu",target:"maka",strength:.6601291358664563,citations:["Aink47","Aink48"]},{id:"tāmarai malar",source:"tāmarai",target:"malar",strength:.6623341212374545,citations:["Aink53","Aink68","Aink94"]},{id:"putu āṭu",source:"putu",target:"āṭu",strength:.6667227507305808,citations:["Aink64","Aink78"]},{id:"kaḻaṉi mārpu",source:"kaḻaṉi",target:"mārpu",strength:.6695827235719859,citations:["Aink25","Aink29","Aink4"]},{id:"ciṟa vēṭṭōḷ",source:"ciṟa",target:"vēṭṭōḷ",strength:.6714508144656677,citations:["Aink1","Aink10","Aink3"]},{id:"karai vēḻam",source:"karai",target:"vēḻam",strength:.6736381299990549,citations:["Aink12","Aink13"]},{id:"oṇmai taḻai",source:"oṇmai",target:"taḻai",strength:.6736381299990549,citations:["Aink15","Aink73"]},{id:"puṇar tuṇai",source:"puṇar",target:"tuṇai",strength:.6736381299990549,citations:["Aink15","Aink72"]},{id:"pū(m) kañal",source:"pū(m)",target:"kañal",strength:.6811560774592306,citations:["Aink16","Aink3","Aink8"]},{id:"ce(m) koṭi",source:"ce(m)",target:"koṭi",strength:.6885716301849876,citations:["Aink25","Aink52"]},{id:"tōḻaṉ makiḻ",source:"tōḻaṉ",target:"makiḻ",strength:.6886597952262993,citations:["Aink31","Aink32","Aink33","Aink37","Aink38","Aink40"]},{id:"mel kāl",source:"mel",target:"kāl",strength:.6925644902596885,citations:["Aink26","Aink35"]},{id:"tātu uṇ",source:"tātu",target:"uṇ",strength:.7026754940441413,citations:["Aink67","Aink82","Aink93"]},{id:"naṉi ciṟa",source:"naṉi",target:"ciṟa",strength:.7052658630661801,citations:["Aink10","Aink7"]},{id:"aḷai cel",source:"aḷai",target:"cel",strength:.7052658630661801,citations:["Aink22","Aink27"]},{id:"tāṉ uṇarntōr",source:"tāṉ",target:"uṇarntōr",strength:.7052658630661801,citations:["Aink38","Aink41"]},{id:"aṇaṅku uṟu",source:"aṇaṅku",target:"uṟu",strength:.7052658630661801,citations:["Aink53","Aink58"]},{id:"aṭu puṇar",source:"aṭu",target:"puṇar",strength:.7144133697140954,citations:["Aink15","Aink72"]},{id:"peṟu nutal",source:"peṟu",target:"nutal",strength:.7144133697140954,citations:["Aink56","Aink94"]},{id:"e- taṭa(m)",source:"e-",target:"taṭa(m)",strength:.7147122670441397,citations:["Aink11","Aink12"]},{id:"yāṉ i-",source:"yāṉ",target:"i-",strength:.7192184793426053,citations:["Aink59"]},{id:"uṇ kaṇ",source:"uṇ",target:"kaṇ",strength:.7212315148672924,citations:["Aink101","Aink16","Aink21","Aink36","Aink37","Aink69","Aink72"]},{id:"taṭpam tuṟai",source:"taṭpam",target:"tuṟai",strength:.7238683526786107,citations:["Aink10","Aink103","Aink105","Aink13","Aink2","Aink21","Aink5","Aink6","Aink7","Aink83","Aink88","Aink9"]},{id:"māṇ iḻai",source:"māṇ",target:"iḻai",strength:.7241922233268137,citations:["Aink42","Aink47"]},{id:"aḻi puṉal",source:"aḻi",target:"puṉal",strength:.7241922233268137,citations:["Aink53","Aink78"]},{id:"kuṇam koḷ",source:"kuṇam",target:"koḷ",strength:.7241922233268137,citations:["Aink90"]},{id:"puḷḷi kaḷvaṉ",source:"puḷḷi",target:"kaḷvaṉ",strength:.7293468699000278,citations:["Aink21","Aink22"]},{id:"vayalai ce(m)",source:"vayalai",target:"ce(m)",strength:.7293468699000278,citations:["Aink25","Aink52"]},{id:"al urai",source:"al",target:"urai",strength:.7346960767772924,citations:["Aink66","Aink80"]},{id:"vāḻ ātaṉ",source:"vāḻ",target:"ātaṉ",strength:.736482283655628,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.25},{id:"ātaṉ vāḻ",source:"ātaṉ",target:"vāḻ",strength:.736482283655628,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.25},{id:"vāḻ aviṉi",source:"vāḻ",target:"aviṉi",strength:.736482283655628,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"vāḻ tōḻaṉ",source:"vāḻ",target:"tōḻaṉ",strength:.736482283655628,citations:["Aink31","Aink32","Aink33","Aink34","Aink35","Aink36","Aink37","Aink38","Aink39","Aink40"]},{id:"putu puṉal",source:"putu",target:"puṉal",strength:.7393610659488854,citations:["Aink53","Aink64","Aink78","Aink79"]},{id:"ciṟu(m) miṉ",source:"ciṟu(m)",target:"miṉ",strength:.740255109243203,citations:["Aink1","Aink10"]},{id:"oṇmai muṉ",source:"oṇmai",target:"muṉ",strength:.7421296702769982,citations:["Aink38","Aink40","Aink83"]},{id:"cuṭar nutal",source:"cuṭar",target:"nutal",strength:.7460411027812206,citations:["Aink56","Aink94"]},{id:"kaḷvaṉ aṟu",source:"kaḷvaṉ",target:"aṟu",strength:.7579737196226118,citations:["Aink21","Aink25","Aink29"]},{id:"amma vāḻ",source:"amma",target:"vāḻ",strength:.7619929200952027,citations:["Aink31","Aink32","Aink33","Aink34","Aink35","Aink36","Aink37","Aink38","Aink39","Aink40","Aink77","Aink89"]},{id:"vāl iḻai",source:"vāl",target:"iḻai",strength:.764967463041854,citations:["Aink0","Aink73"]},{id:"puṉal āṭi",source:"puṉal",target:"āṭi",strength:.7683488250737366,citations:["Aink76","Aink79","Aink80"]},{id:"aka(m) aḷai",source:"aka(m)",target:"aḷai",strength:.7718828423103282,citations:["Aink27","Aink30"]},{id:"val poy",source:"val",target:"poy",strength:.7718828423103282,citations:["Aink37"]},{id:"aviṉi pakai",source:"aviṉi",target:"pakai",strength:.7718828423103282,citations:["Aink4","Aink6"]},{id:"puṟavam aṇi",source:"puṟavam",target:"aṇi",strength:.7718828423103282,citations:["Aink404","Aink405"]},{id:"peṟu cuṭar",source:"peṟu",target:"cuṭar",strength:.7718828423103282,citations:["Aink56","Aink94"]},{id:"toṭi muṉ",source:"toṭi",target:"muṉ",strength:.7756858598619073,citations:["Aink38","Aink40","Aink83"]},{id:"vekuḷvōḷ kaṇ",source:"vekuḷvōḷ",target:"kaṇ",strength:.7791530081451391,citations:["Aink84"]},{id:"eṉ vēṭṭōḷ",source:"eṉ",target:"vēṭṭōḷ",strength:.7807657201789825,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"eṉ yāy",source:"eṉ",target:"yāy",strength:.7807657201789825,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"nām maṟa",source:"nām",target:"maṟa",strength:.7868163424962609,citations:["Aink36"]},{id:"vaṭṭi maṉai",source:"vaṭṭi",target:"maṉai",strength:.7868163424962609,citations:["Aink47","Aink48"]},{id:"ciṟai putu",source:"ciṟai",target:"putu",strength:.7868163424962609,citations:["Aink53","Aink78"]},{id:"amaintaṉaṉ tāṉ",source:"amaintaṉaṉ",target:"tāṉ",strength:.8035105753774534,citations:["Aink103"]},{id:"vaḻi ciṟa",source:"vaḻi",target:"ciṟa",strength:.8035105753774534,citations:["Aink2"]},{id:"vēṇṭu aṉṉai",source:"vēṇṭu",target:"aṉṉai",strength:.8353401780046682,citations:["Aink101","Aink102","Aink103","Aink105","Aink201","Aink204"],curvature:.25},{id:"aṉṉai vēṇṭu",source:"aṉṉai",target:"vēṇṭu",strength:.8353401780046682,citations:["Aink101","Aink102","Aink103","Aink105","Aink201","Aink204"],curvature:.25},{id:"aṭai karai",source:"aṭai",target:"karai",strength:.8442858150924939,citations:["Aink13","Aink21"]},{id:"aḻu piri",source:"aḻu",target:"piri",strength:.8442858150924939,citations:["Aink18","Aink40"]},{id:"muḷḷi aḷai",source:"muḷḷi",target:"aḷai",strength:.8442858150924939,citations:["Aink22","Aink23"]},{id:"vayalai koṭi",source:"vayalai",target:"koṭi",strength:.8442858150924939,citations:["Aink25","Aink52"]},{id:"vaḷai nekiḻ",source:"vaḷai",target:"nekiḻ",strength:.8442858150924939,citations:["Aink27","Aink54"]},{id:"nekiḻ cā",source:"nekiḻ",target:"cā",strength:.8442858150924939,citations:["Aink27","Aink28"]},{id:"tēr taḷar",source:"tēr",target:"taḷar",strength:.8442858150924939,citations:["Aink403","Aink66"]},{id:"aḻi putu",source:"aḻi",target:"putu",strength:.8442858150924939,citations:["Aink53","Aink78"]},{id:"nutal arivai",source:"nutal",target:"arivai",strength:.8525035020252885,citations:["Aink404","Aink46","Aink73"]},{id:"oṇmai toṭi",source:"oṇmai",target:"toṭi",strength:.8659479876671777,citations:["Aink28","Aink38","Aink40","Aink76","Aink83","Aink92"]},{id:"nīl niṟa",source:"nīl",target:"niṟa",strength:.8701275546216015,citations:["Aink102","Aink401"]},{id:"aka(m) maṇ",source:"aka(m)",target:"maṇ",strength:.8701275546216015,citations:["Aink27","Aink30"]},{id:"maṟa amai",source:"maṟa",target:"amai",strength:.8701275546216015,citations:["Aink36"]},{id:"poy urai",source:"poy",target:"urai",strength:.8701275546216015,citations:["Aink66","Aink80"]},{id:"yāy yām",source:"yāy",target:"yām",strength:.8920675424317228,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"vēṭṭōḷ yām",source:"vēṭṭōḷ",target:"yām",strength:.8920675424317228,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"karai cēr",source:"karai",target:"cēr",strength:.9017552876887267,citations:["Aink12","Aink74"]},{id:"tūmpu uṭai",source:"tūmpu",target:"uṭai",strength:.9017552876887267,citations:["Aink16","Aink20"]},{id:"kēḷ vaḻi",source:"kēḷ",target:"vaḻi",strength:.9017552876887267,citations:["Aink2"]},{id:"vēr aḷai",source:"vēr",target:"aḷai",strength:.9017552876887267,citations:["Aink22","Aink23"]},{id:"maṇ aḷai",source:"maṇ",target:"aḷai",strength:.9017552876887267,citations:["Aink27","Aink30"]},{id:"col uṇarntōr",source:"col",target:"uṇarntōr",strength:.9017552876887267,citations:["Aink38","Aink41"]},{id:"māṇ kuṇam",source:"māṇ",target:"kuṇam",strength:.9017552876887267,citations:["Aink90"]},{id:"kōṭṭam erumai",source:"kōṭṭam",target:"erumai",strength:.9017552876887267,citations:["Aink92","Aink94"]},{id:"malir niṟai",source:"malir",target:"niṟai",strength:.9231823578366188,citations:["Aink15","Aink42","Aink72"]},{id:"keḻu koṭu(m)",source:"keḻu",target:"koṭu(m)",strength:.942530527403767,citations:["Aink11","Aink12"]},{id:"el vaḷai",source:"el",target:"vaḷai",strength:.942530527403767,citations:["Aink20","Aink27"]},{id:"muḷḷi vēr",source:"muḷḷi",target:"vēr",strength:.942530527403767,citations:["Aink22","Aink23"]},{id:"ciṟai aḻi",source:"ciṟai",target:"aḻi",strength:.942530527403767,citations:["Aink53","Aink78"]},{id:"kai vaḷ",source:"kai",target:"vaḷ",strength:.942530527403767,citations:["Aink58","Aink61"]},{id:"amma tōḻaṉ",source:"amma",target:"tōḻaṉ",strength:.9665211634297239,citations:["Aink31","Aink32","Aink33","Aink34","Aink35","Aink36","Aink37","Aink38","Aink39","Aink40"]},{id:"vēṭṭōḷ yāy",source:"vēṭṭōḷ",target:"yāy",strength:1,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"ātaṉ aviṉi",source:"ātaṉ",target:"aviṉi",strength:1,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"titti alkul",source:"titti",target:"alkul",strength:1,citations:["Aink29","Aink72"]},{id:"mal val",source:"mal",target:"val",strength:1,citations:["Aink37"]},{id:"kuḻuvu peyarvuḻi",source:"kuḻuvu",target:"peyarvuḻi",strength:1.0982447123112733,citations:["Aink204"]},{id:"peyarvuḻi tavir",source:"peyarvuḻi",target:"tavir",strength:1.0982447123112733,citations:["Aink204"]}],Ma={nodes:zA,links:IA},NA=n=>{const t=1+200/Math.hypot(n.x,n.y,n.z),i=n.x||n.y||n.z?{x:n.x*t,y:n.y*t,z:n.z*t}:{x:0,y:0,z:200};Sa.cameraPosition(i,n,1e3)},Sa=_A(),UA=()=>{const n=new Map([["adjective","#66c2a5"],["noun","#fc8d62"],["pronoun","#8da0cb"],["verb","#e78ac3"],["other","#a6d854"]]),e=document.getElementById("panellegend");e.innerHTML=[...n].map(i=>`<div><input type="checkbox" name="${i[0]}" checked autocomplete="off"/><label><span style="color:${i[1]}; font-size: 150%">●</span> ${i[0]}</div>`).join("")+'<div id="solonodes"><input type="checkbox" name="solonodes" checked autocomplete="off"/><label>Show unconnected nodes</label></div>';const t=structuredClone(Ma.links).filter(i=>i.strength>=.45);Sa(document.getElementById("colgraph")).graphData({nodes:Ma.nodes,links:t}).nodeLabel(i=>`${i.size} occurences`).nodeThreeObject(i=>{const r=new OA(i.id);return r.material.depthWrite=!1,r.color=n.get(i.type)||n.get("other"),r.textHeight=i.size/2<8?8:i.size/2,r}).linkWidth(i=>i.strength*5).linkOpacity(.3).linkDirectionalArrowLength(5).linkCurvature(i=>i.curvature||0).linkLabel(i=>`${i.citations.join(", ")} (NPMI: ${i.strength.toPrecision(4)})`).onNodeClick(NA),Sa.d3Force("link").distance(i=>40/i.strength)},FA=n=>{const e=document.getElementById("panel");e.style.display!=="flex"?(e.animate([{marginTop:"-25px"},{marginTop:"0px"}],{duration:200,iterations:1}),e.style.display="flex",n.target.textContent="⇧"):(e.animate([{marginTop:"0px"},{marginTop:"-25px"}],{duration:200,iterations:1}),setTimeout(()=>e.style.display="none",200),n.target.textContent="⇩")},BA=n=>{const e=new Set;for(const t of n)e.add(t.source),e.add(t.target);return e},HA=()=>{const n={};n.nodes=Ma.nodes,n.links=structuredClone(Ma.links);const e=document.getElementById("npmi").value;n.links=n.links.filter(r=>r.strength>=e);const t=document.getElementById("panellegend").querySelectorAll('input:not([name="solonodes"])'),i=new Set([...t].filter(r=>r.checked).map(r=>r.getAttribute("name")));if(i.size!==t.length){n.nodes=n.nodes.filter(a=>i.has(a.type));const r=new Set(n.nodes.map(a=>a.id));n.links=n.links.filter(a=>r.has(a.target)&&r.has(a.source))}if(!document.querySelector('input[name="solonodes"]').checked){const r=BA(n.links);n.nodes=n.nodes.filter(a=>r.has(a.id))}Sa.graphData(n)};document.getElementById("paneltoggle").addEventListener("click",FA);document.getElementById("graphupdate").addEventListener("click",HA);UA();
