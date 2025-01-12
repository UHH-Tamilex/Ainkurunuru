(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="160",an={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ah=0,Xo=1,sh=2,xl=1,oh=2,vn=3,Bn=0,Rt=1,xn=2,Mn=0,Di=1,$o=2,qo=3,Yo=4,ch=5,Kn=100,uh=101,lh=102,Ko=103,Zo=104,dh=200,hh=201,fh=202,ph=203,Ds=204,Os=205,mh=206,gh=207,vh=208,yh=209,_h=210,xh=211,Ah=212,bh=213,Mh=214,Sh=0,Eh=1,wh=2,ca=3,Th=4,kh=5,Ch=6,Rh=7,ho=0,zh=1,Ph=2,Un=0,Lh=1,Dh=2,Oh=3,Ih=4,Nh=5,Uh=6,Al=300,Ii=301,Ni=302,Is=303,Ns=304,Ea=306,Us=1e3,Zt=1001,Fs=1002,kt=1003,Jo=1004,Ha=1005,Ft=1006,Fh=1007,pr=1008,Fn=1009,Bh=1010,Hh=1011,fo=1012,bl=1013,In=1014,Nn=1015,Ui=1016,Ml=1017,Sl=1018,Jn=1020,Gh=1021,Jt=1023,Vh=1024,Wh=1025,Qn=1026,Fi=1027,jh=1028,El=1029,Xh=1030,wl=1031,Tl=1033,Ga=33776,Va=33777,Wa=33778,ja=33779,Qo=35840,ec=35841,tc=35842,nc=35843,kl=36196,ic=37492,rc=37496,ac=37808,sc=37809,oc=37810,cc=37811,uc=37812,lc=37813,dc=37814,hc=37815,fc=37816,pc=37817,mc=37818,gc=37819,vc=37820,yc=37821,Xa=36492,_c=36494,xc=36495,$h=36283,Ac=36284,bc=36285,Mc=36286,Cl=3e3,ei=3001,qh=3200,Yh=3201,Rl=0,Kh=1,Wt="",lt="srgb",wn="srgb-linear",po="display-p3",wa="display-p3-linear",ua="linear",nt="srgb",la="rec709",da="p3",si=7680,Sc=519,Zh=512,Jh=513,Qh=514,zl=515,ef=516,tf=517,nf=518,rf=519,Bs=35044,Ec="300 es",Hs=1035,An=2e3,ha=2001;class nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wc=1234567;const ur=Math.PI/180,mr=180/Math.PI;function Sn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function vt(n,e,t){return Math.max(e,Math.min(t,n))}function mo(n,e){return(n%e+e)%e}function af(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function sf(n,e,t){return n!==e?(t-n)/(e-n):0}function lr(n,e,t){return(1-t)*n+t*e}function of(n,e,t,i){return lr(n,e,1-Math.exp(-t*i))}function cf(n,e=1){return e-Math.abs(mo(n,e*2)-e)}function uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function lf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function df(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hf(n,e){return n+Math.random()*(e-n)}function ff(n){return n*(.5-Math.random())}function pf(n){n!==void 0&&(wc=n);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(n){return n*ur}function gf(n){return n*mr}function Gs(n){return(n&n-1)===0&&n!==0}function vf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yf(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),u=a((e+i)/2),l=s((e+i)/2),d=a((e-i)/2),f=s((e-i)/2),m=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*l,c*d,c*f,o*u);break;case"YZY":n.set(c*f,o*l,c*d,o*u);break;case"ZXZ":n.set(c*d,c*f,o*l,o*u);break;case"XZX":n.set(o*l,c*g,c*m,o*u);break;case"YXY":n.set(c*m,o*l,c*g,o*u);break;case"ZYZ":n.set(c*g,c*m,o*l,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Vs={DEG2RAD:ur,RAD2DEG:mr,generateUUID:Sn,clamp:vt,euclideanModulo:mo,mapLinear:af,inverseLerp:sf,lerp:lr,damp:of,pingpong:cf,smoothstep:uf,smootherstep:lf,randInt:df,randFloat:hf,randFloatSpread:ff,seededRandom:pf,degToRad:mf,radToDeg:gf,isPowerOfTwo:Gs,ceilPowerOfTwo:vf,floorPowerOfTwo:fa,setQuaternionFromProperEuler:yf,normalize:Ze,denormalize:on};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,a,s,o,c,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,u)}set(e,t,i,r,a,s,o,c,u){const l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=a,l[5]=c,l[6]=i,l[7]=s,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],c=i[6],u=i[1],l=i[4],d=i[7],f=i[2],m=i[5],g=i[8],v=r[0],p=r[3],h=r[6],x=r[1],y=r[4],_=r[7],b=r[2],M=r[5],E=r[8];return a[0]=s*v+o*x+c*b,a[3]=s*p+o*y+c*M,a[6]=s*h+o*_+c*E,a[1]=u*v+l*x+d*b,a[4]=u*p+l*y+d*M,a[7]=u*h+l*_+d*E,a[2]=f*v+m*x+g*b,a[5]=f*p+m*y+g*M,a[8]=f*h+m*_+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],l=e[8];return t*s*l-t*o*u-i*a*l+i*o*c+r*a*u-r*s*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],l=e[8],d=l*s-o*u,f=o*c-l*a,m=u*a-s*c,g=t*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-l*i)*v,e[2]=(o*i-r*s)*v,e[3]=f*v,e[4]=(l*t-r*c)*v,e[5]=(r*a-o*t)*v,e[6]=m*v,e[7]=(i*c-u*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const c=Math.cos(a),u=Math.sin(a);return this.set(i*c,i*u,-i*(c*s+u*o)+s+e,-r*u,r*c,-r*(-u*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Ve;function Pl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _f(){const n=gr("canvas");return n.style.display="block",n}const Tc={};function dr(n){n in Tc||(Tc[n]=!0,console.warn(n))}const kc=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[wn]:{transfer:ua,primaries:la,toReference:n=>n,fromReference:n=>n},[lt]:{transfer:nt,primaries:la,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wa]:{transfer:ua,primaries:da,toReference:n=>n.applyMatrix3(Cc),fromReference:n=>n.applyMatrix3(kc)},[po]:{transfer:nt,primaries:da,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Cc),fromReference:n=>n.applyMatrix3(kc).convertLinearToSRGB()}},xf=new Set([wn,wa]),Je={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sr[e].toReference,r=Sr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Wt?ua:Sr[n].transfer}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let oi;class Ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=gr("canvas")),oi.width=e.width,oi.height=e.height;const i=oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Oi(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Af=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Ya(r[s].image)):a.push(Ya(r[s]))}else a=Ya(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ll.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class zt extends nn{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,i=Zt,r=Zt,a=Ft,s=pr,o=Jt,c=Fn,u=zt.DEFAULT_ANISOTROPY,l=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Sn(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===ei?lt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Us:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Us:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===lt?ei:Cl}set encoding(e){dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?lt:Wt}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Al;zt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const c=e.elements,u=c[0],l=c[4],d=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(l-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,_=(m+1)/2,b=(h+1)/2,M=(l+f)/4,E=(d+v)/4,z=(g+p)/4;return y>_&&y>b?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=M/i,a=E/i):_>b?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=M/r,a=z/r):b<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(b),i=E/a,r=z/a),this.set(i,r,a,t),this}let x=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-l)*(f-l));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-v)/x,this.z=(f-l)/x,this.w=Math.acos((u+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends nn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ei?lt:Wt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Mf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ol extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let c=i[r+0],u=i[r+1],l=i[r+2],d=i[r+3];const f=a[s+0],m=a[s+1],g=a[s+2],v=a[s+3];if(o===0){e[t+0]=c,e[t+1]=u,e[t+2]=l,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||u!==m||l!==g){let p=1-o;const h=c*f+u*m+l*g+d*v,x=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),M=Math.atan2(b,h*x);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b}const _=o*x;if(c=c*p+f*_,u=u*p+m*_,l=l*p+g*_,d=d*p+v*_,p===1-o){const b=1/Math.sqrt(c*c+u*u+l*l+d*d);c*=b,u*=b,l*=b,d*=b}}e[t]=c,e[t+1]=u,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],c=i[r+1],u=i[r+2],l=i[r+3],d=a[s],f=a[s+1],m=a[s+2],g=a[s+3];return e[t]=o*g+l*d+c*m-u*f,e[t+1]=c*g+l*f+u*d-o*m,e[t+2]=u*g+l*m+o*f-c*d,e[t+3]=l*g-o*d-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,u=o(i/2),l=o(r/2),d=o(a/2),f=c(i/2),m=c(r/2),g=c(a/2);switch(s){case"XYZ":this._x=f*l*d+u*m*g,this._y=u*m*d-f*l*g,this._z=u*l*g+f*m*d,this._w=u*l*d-f*m*g;break;case"YXZ":this._x=f*l*d+u*m*g,this._y=u*m*d-f*l*g,this._z=u*l*g-f*m*d,this._w=u*l*d+f*m*g;break;case"ZXY":this._x=f*l*d-u*m*g,this._y=u*m*d+f*l*g,this._z=u*l*g+f*m*d,this._w=u*l*d-f*m*g;break;case"ZYX":this._x=f*l*d-u*m*g,this._y=u*m*d+f*l*g,this._z=u*l*g-f*m*d,this._w=u*l*d+f*m*g;break;case"YZX":this._x=f*l*d+u*m*g,this._y=u*m*d+f*l*g,this._z=u*l*g-f*m*d,this._w=u*l*d-f*m*g;break;case"XZY":this._x=f*l*d-u*m*g,this._y=u*m*d-f*l*g,this._z=u*l*g+f*m*d,this._w=u*l*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],u=t[2],l=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(l-c)*m,this._y=(a-u)*m,this._z=(s-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(l-c)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+u)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(a-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(s-r)/m,this._x=(a+u)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,u=t._z,l=t._w;return this._x=i*l+s*o+r*u-a*c,this._y=r*l+s*c+a*o-i*u,this._z=a*l+s*u+i*c-r*o,this._w=s*l-i*o-r*c-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const u=Math.sqrt(c),l=Math.atan2(u,o),d=Math.sin((1-t)*l)/u,f=Math.sin(t*l)/u;return this._w=s*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(a),i*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,u=2*(s*r-o*i),l=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+c*u+s*d-o*l,this.y=i+c*l+o*u-a*d,this.z=r+c*d+a*l-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-i*c,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new L,Rc=new tn;class ii{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Xt):Xt.fromBufferAttribute(a,s),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),wr.subVectors(this.max,ji),ci.subVectors(e.a,ji),ui.subVectors(e.b,ji),li.subVectors(e.c,ji),Cn.subVectors(ui,ci),Rn.subVectors(li,ui),jn.subVectors(ci,li);let t=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-jn.z,jn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,jn.z,0,-jn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-jn.y,jn.x,0];return!Za(t,ci,ui,li,wr)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,ci,ui,li,wr))?!1:(Tr.crossVectors(Cn,Rn),t=[Tr.x,Tr.y,Tr.z],Za(t,ci,ui,li,wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new L,new L,new L,new L,new L,new L,new L,new L],Xt=new L,Er=new ii,ci=new L,ui=new L,li=new L,Cn=new L,Rn=new L,jn=new L,ji=new L,wr=new L,Tr=new L,Xn=new L;function Za(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Xn.fromArray(n,a);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=e.dot(Xn),u=t.dot(Xn),l=i.dot(Xn);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>o)return!1}return!0}const Ef=new ii,Xi=new L,Ja=new L;class Ta{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ef.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);const t=Xi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Xi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Ja)),this.expandByPoint(Xi.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new L,Qa=new L,kr=new L,zn=new L,es=new L,Cr=new L,ts=new L;class ka{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Qa.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Qa);const a=e.distanceTo(t)*.5,s=-this.direction.dot(kr),o=zn.dot(this.direction),c=-zn.dot(kr),u=zn.lengthSq(),l=Math.abs(1-s*s);let d,f,m,g;if(l>0)if(d=s*c-o,f=s*o-c,g=a*l,d>=0)if(f>=-g)if(f<=g){const v=1/l;d*=v,f*=v,m=d*(d+s*f+2*o)+f*(s*d+f+2*c)+u}else f=a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+u;else f=-a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+u;else f<=-g?(d=Math.max(0,-(-s*a+o)),f=d>0?-a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+u):f<=g?(d=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+u):(d=Math.max(0,-(s*a+o)),f=d>0?a:Math.min(Math.max(-a,-c),a),m=-d*d+f*(f+2*c)+u);else f=s>0?-a:a,d=Math.max(0,-(s*f+o)),m=-d*d+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qa).addScaledVector(kr,f),m}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const i=dn.dot(this.direction),r=dn.dot(dn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,c=i+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,c;const u=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),l>=0?(a=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(a=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,i,r,a){es.subVectors(t,e),Cr.subVectors(i,e),ts.crossVectors(es,Cr);let s=this.direction.dot(ts),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;zn.subVectors(this.origin,e);const c=o*this.direction.dot(Cr.crossVectors(zn,Cr));if(c<0)return null;const u=o*this.direction.dot(es.cross(zn));if(u<0||c+u>s)return null;const l=-o*zn.dot(ts);return l<0?null:this.at(l/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,a,s,o,c,u,l,d,f,m,g,v,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,c,u,l,d,f,m,g,v,p)}set(e,t,i,r,a,s,o,c,u,l,d,f,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=a,h[5]=s,h[9]=o,h[13]=c,h[2]=u,h[6]=l,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),a=1/di.setFromMatrixColumn(e,1).length(),s=1/di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),l=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=s*l,m=s*d,g=o*l,v=o*d;t[0]=c*l,t[4]=-c*d,t[8]=u,t[1]=m+g*u,t[5]=f-v*u,t[9]=-o*c,t[2]=v-f*u,t[6]=g+m*u,t[10]=s*c}else if(e.order==="YXZ"){const f=c*l,m=c*d,g=u*l,v=u*d;t[0]=f+v*o,t[4]=g*o-m,t[8]=s*u,t[1]=s*d,t[5]=s*l,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*l,m=c*d,g=u*l,v=u*d;t[0]=f-v*o,t[4]=-s*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=s*l,t[9]=v-f*o,t[2]=-s*u,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*l,m=s*d,g=o*l,v=o*d;t[0]=c*l,t[4]=g*u-m,t[8]=f*u+v,t[1]=c*d,t[5]=v*u+f,t[9]=m*u-g,t[2]=-u,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,m=s*u,g=o*c,v=o*u;t[0]=c*l,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=s*l,t[9]=-o*l,t[2]=-u*l,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=s*c,m=s*u,g=o*c,v=o*u;t[0]=c*l,t[4]=-d,t[8]=u*l,t[1]=f*d+v,t[5]=s*l,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*l,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Tf)}lookAt(e,t,i){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Pn.crossVectors(i,It),Pn.lengthSq()===0&&(Math.abs(i.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Pn.crossVectors(i,It)),Pn.normalize(),Rr.crossVectors(It,Pn),r[0]=Pn.x,r[4]=Rr.x,r[8]=It.x,r[1]=Pn.y,r[5]=Rr.y,r[9]=It.y,r[2]=Pn.z,r[6]=Rr.z,r[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],c=i[8],u=i[12],l=i[1],d=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],h=i[14],x=i[3],y=i[7],_=i[11],b=i[15],M=r[0],E=r[4],z=r[8],A=r[12],w=r[1],N=r[5],U=r[9],ee=r[13],k=r[2],R=r[6],D=r[10],K=r[14],J=r[3],te=r[7],F=r[11],$=r[15];return a[0]=s*M+o*w+c*k+u*J,a[4]=s*E+o*N+c*R+u*te,a[8]=s*z+o*U+c*D+u*F,a[12]=s*A+o*ee+c*K+u*$,a[1]=l*M+d*w+f*k+m*J,a[5]=l*E+d*N+f*R+m*te,a[9]=l*z+d*U+f*D+m*F,a[13]=l*A+d*ee+f*K+m*$,a[2]=g*M+v*w+p*k+h*J,a[6]=g*E+v*N+p*R+h*te,a[10]=g*z+v*U+p*D+h*F,a[14]=g*A+v*ee+p*K+h*$,a[3]=x*M+y*w+_*k+b*J,a[7]=x*E+y*N+_*R+b*te,a[11]=x*z+y*U+_*D+b*F,a[15]=x*A+y*ee+_*K+b*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],u=e[13],l=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+a*c*d-r*u*d-a*o*f+i*u*f+r*o*m-i*c*m)+v*(+t*c*m-t*u*f+a*s*f-r*s*m+r*u*l-a*c*l)+p*(+t*u*d-t*o*m-a*s*d+i*s*m+a*o*l-i*u*l)+h*(-r*o*l-t*c*d+t*o*f+r*s*d-i*s*f+i*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],u=e[7],l=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],x=d*p*u-v*f*u+v*c*m-o*p*m-d*c*h+o*f*h,y=g*f*u-l*p*u-g*c*m+s*p*m+l*c*h-s*f*h,_=l*v*u-g*d*u+g*o*m-s*v*m-l*o*h+s*d*h,b=g*d*c-l*v*c-g*o*f+s*v*f+l*o*p-s*d*p,M=t*x+i*y+r*_+a*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(v*f*a-d*p*a-v*r*m+i*p*m+d*r*h-i*f*h)*E,e[2]=(o*p*a-v*c*a+v*r*u-i*p*u-o*r*h+i*c*h)*E,e[3]=(d*c*a-o*f*a-d*r*u+i*f*u+o*r*m-i*c*m)*E,e[4]=y*E,e[5]=(l*p*a-g*f*a+g*r*m-t*p*m-l*r*h+t*f*h)*E,e[6]=(g*c*a-s*p*a-g*r*u+t*p*u+s*r*h-t*c*h)*E,e[7]=(s*f*a-l*c*a+l*r*u-t*f*u-s*r*m+t*c*m)*E,e[8]=_*E,e[9]=(g*d*a-l*v*a-g*i*m+t*v*m+l*i*h-t*d*h)*E,e[10]=(s*v*a-g*o*a+g*i*u-t*v*u-s*i*h+t*o*h)*E,e[11]=(l*o*a-s*d*a-l*i*u+t*d*u+s*i*m-t*o*m)*E,e[12]=b*E,e[13]=(l*v*r-g*d*r+g*i*f-t*v*f-l*i*p+t*d*p)*E,e[14]=(g*o*r-s*v*r-g*i*c+t*v*c+s*i*p-t*o*p)*E,e[15]=(s*d*r-l*o*r+l*i*c-t*d*c-s*i*f+t*o*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,c=e.z,u=a*s,l=a*o;return this.set(u*s+i,u*o-r*c,u*c+r*o,0,u*o+r*c,l*o+i,l*c-r*s,0,u*c-r*o,l*c+r*s,a*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,u=a+a,l=s+s,d=o+o,f=a*u,m=a*l,g=a*d,v=s*l,p=s*d,h=o*d,x=c*u,y=c*l,_=c*d,b=i.x,M=i.y,E=i.z;return r[0]=(1-(v+h))*b,r[1]=(m+_)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(m-_)*M,r[5]=(1-(f+h))*M,r[6]=(p+x)*M,r[7]=0,r[8]=(g+y)*E,r[9]=(p-x)*E,r[10]=(1-(f+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=di.set(r[0],r[1],r[2]).length();const s=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const u=1/a,l=1/s,d=1/o;return $t.elements[0]*=u,$t.elements[1]*=u,$t.elements[2]*=u,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=d,$t.elements[9]*=d,$t.elements[10]*=d,t.setFromRotationMatrix($t),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=An){const c=this.elements,u=2*a/(t-e),l=2*a/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,g;if(o===An)m=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===ha)m=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=An){const c=this.elements,u=1/(t-e),l=1/(i-r),d=1/(s-a),f=(t+e)*u,m=(i+r)*l;let g,v;if(o===An)g=(s+a)*d,v=-2*d;else if(o===ha)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const di=new L,$t=new at,wf=new L(0,0,0),Tf=new L(1,1,1),Pn=new L,Rr=new L,It=new L,zc=new at,Pc=new tn;class Ca{constructor(e=0,t=0,i=0,r=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],u=r[5],l=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kf=0;const Lc=new L,hi=new tn,hn=new at,zr=new L,$i=new L,Cf=new L,Rf=new tn,Dc=new L(1,0,0),Oc=new L(0,1,0),Ic=new L(0,0,1),zf={type:"added"},Pf={type:"removed"};class _t extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,t=new Ca,i=new tn,r=new L(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ve}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Lc.copy(e).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt($i,zr,this.up):hn.lookAt(zr,$i,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(hn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Cf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const d=c[u];a(e.shapes,d)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),u=s(e.textures),l=s(e.images),d=s(e.shapes),f=s(e.skeletons),m=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),l.length>0&&(i.images=l),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const c=[];for(const u in o){const l=o[u];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new L,fn=new L,ns=new L,pn=new L,fi=new L,pi=new L,Nc=new L,is=new L,rs=new L,as=new L;let Pr=!1;class Gt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),qt.subVectors(e,t),r.cross(qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){qt.subVectors(r,t),fn.subVectors(i,t),ns.subVectors(e,t);const s=qt.dot(qt),o=qt.dot(fn),c=qt.dot(ns),u=fn.dot(fn),l=fn.dot(ns),d=s*u-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,m=(u*c-o*l)*f,g=(s*l-o*c)*f;return a.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getUV(e,t,i,r,a,s,o,c){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),this.getInterpolation(e,t,i,r,a,s,o,c)}static getInterpolation(e,t,i,r,a,s,o,c){return this.getBarycoord(e,t,i,r,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,pn.x),c.addScaledVector(s,pn.y),c.addScaledVector(o,pn.z),c)}static isFrontFacing(e,t,i,r){return qt.subVectors(i,t),fn.subVectors(e,t),qt.cross(fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),qt.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),Gt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Gt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;fi.subVectors(r,i),pi.subVectors(a,i),is.subVectors(e,i);const c=fi.dot(is),u=pi.dot(is);if(c<=0&&u<=0)return t.copy(i);rs.subVectors(e,r);const l=fi.dot(rs),d=pi.dot(rs);if(l>=0&&d<=l)return t.copy(r);const f=c*d-l*u;if(f<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(i).addScaledVector(fi,s);as.subVectors(e,a);const m=fi.dot(as),g=pi.dot(as);if(g>=0&&m<=g)return t.copy(a);const v=m*u-c*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(pi,o);const p=l*g-m*d;if(p<=0&&d-l>=0&&m-g>=0)return Nc.subVectors(a,r),o=(d-l)/(d-l+(m-g)),t.copy(r).addScaledVector(Nc,o);const h=1/(p+v+f);return s=v*h,o=f*h,t.copy(i).addScaledVector(fi,s).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ss(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=mo(e,1),t=vt(t,0,1),i=vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=ss(s,a,e+1/3),this.g=ss(s,a,e),this.b=ss(s,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=lt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){const i=Il[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Je.fromWorkingColorSpace(bt.copy(this),e),Math.round(vt(bt.r*255,0,255))*65536+Math.round(vt(bt.g*255,0,255))*256+Math.round(vt(bt.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,r=bt.g,a=bt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let c,u;const l=(o+s)/2;if(o===s)c=0,u=0;else{const d=s-o;switch(u=l<=.5?d/(s+o):d/(2-s-o),s){case i:c=(r-a)/d+(r<a?6:0);break;case r:c=(a-i)/d+2;break;case a:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=l,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=lt){Je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,r=bt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Lr);const i=lr(Ln.h,Lr.h,t),r=lr(Ln.s,Lr.s,t),a=lr(Ln.l,Lr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new We;We.NAMES=Il;let Lf=0;class ri extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Di,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Os,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ds&&(i.blendSrc=this.blendSrc),this.blendDst!==Os&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vo extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new L,Dr=new fe;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=on(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bs&&(e.usage=this.usage),e}}class Nl extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ul extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Df=0;const Ht=new at,os=new _t,mi=new L,Nt=new ii,qi=new ii,gt=new L;class Lt extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Ul:Nl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ve().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];qi.setFromBufferAttribute(o),this.morphTargetsRelative?(gt.addVectors(Nt.min,qi.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,qi.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(qi.min),Nt.expandByPoint(qi.max))}Nt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)gt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(gt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let u=0,l=o.count;u<l;u++)gt.fromBufferAttribute(o,u),c&&(mi.fromBufferAttribute(e,u),gt.add(mi)),r=Math.max(r,i.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,u=[],l=[];for(let w=0;w<o;w++)u[w]=new L,l[w]=new L;const d=new L,f=new L,m=new L,g=new fe,v=new fe,p=new fe,h=new L,x=new L;function y(w,N,U){d.fromArray(r,w*3),f.fromArray(r,N*3),m.fromArray(r,U*3),g.fromArray(s,w*2),v.fromArray(s,N*2),p.fromArray(s,U*2),f.sub(d),m.sub(d),v.sub(g),p.sub(g);const ee=1/(v.x*p.y-p.x*v.y);isFinite(ee)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ee),x.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ee),u[w].add(h),u[N].add(h),u[U].add(h),l[w].add(x),l[N].add(x),l[U].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let w=0,N=_.length;w<N;++w){const U=_[w],ee=U.start,k=U.count;for(let R=ee,D=ee+k;R<D;R+=3)y(i[R+0],i[R+1],i[R+2])}const b=new L,M=new L,E=new L,z=new L;function A(w){E.fromArray(a,w*3),z.copy(E);const N=u[w];b.copy(N),b.sub(E.multiplyScalar(E.dot(N))).normalize(),M.crossVectors(z,N);const ee=M.dot(l[w])<0?-1:1;c[w*4]=b.x,c[w*4+1]=b.y,c[w*4+2]=b.z,c[w*4+3]=ee}for(let w=0,N=_.length;w<N;++w){const U=_[w],ee=U.start,k=U.count;for(let R=ee,D=ee+k;R<D;R+=3)A(i[R+0]),A(i[R+1]),A(i[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new L,a=new L,s=new L,o=new L,c=new L,u=new L,l=new L,d=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),l.subVectors(s,a),d.subVectors(r,a),l.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,p),o.add(l),c.add(l),u.add(l),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),l.subVectors(s,a),d.subVectors(r,a),l.cross(d),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(o,c){const u=o.array,l=o.itemSize,d=o.normalized,f=new u.constructor(c.length*l);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*l;for(let h=0;h<l;h++)f[g++]=u[m++]}return new jt(f,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);t.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const c=[],u=a[o];for(let l=0,d=u.length;l<d;l++){const f=u[l],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const u=s[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];l.push(m.toJSON(e.data))}l.length>0&&(r[c]=l,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const l=r[u];this.setAttribute(u,l.clone(t))}const a=e.morphAttributes;for(const u in a){const l=[],d=a[u];for(let f=0,m=d.length;f<m;f++)l.push(d[f].clone(t));this.morphAttributes[u]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,l=s.length;u<l;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new at,$n=new ka,Or=new Ta,Fc=new L,gi=new L,vi=new L,yi=new L,cs=new L,Ir=new L,Nr=new fe,Ur=new fe,Fr=new fe,Bc=new L,Hc=new L,Gc=new L,Br=new L,Hr=new L;class Qt extends _t{constructor(e=new Lt,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Ir.set(0,0,0);for(let c=0,u=a.length;c<u;c++){const l=o[c],d=a[c];l!==0&&(cs.fromBufferAttribute(d,e),s?Ir.addScaledVector(cs,l):Ir.addScaledVector(cs.sub(t),l))}t.add(Ir)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(a),$n.copy(e.ray).recast(e.near),!(Or.containsPoint($n.origin)===!1&&($n.intersectSphere(Or,Fc)===null||$n.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(a).invert(),$n.copy(e.ray).applyMatrix4(Uc),!(i.boundingBox!==null&&$n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,u=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=s[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let _=x,b=y;_<b;_+=3){const M=o.getX(_),E=o.getX(_+1),z=o.getX(_+2);r=Gr(this,h,e,i,u,l,d,M,E,z),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const x=o.getX(p),y=o.getX(p+1),_=o.getX(p+2);r=Gr(this,s,e,i,u,l,d,x,y,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=s[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=x,b=y;_<b;_+=3){const M=_,E=_+1,z=_+2;r=Gr(this,h,e,i,u,l,d,M,E,z),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const x=p,y=p+1,_=p+2;r=Gr(this,s,e,i,u,l,d,x,y,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Of(n,e,t,i,r,a,s,o){let c;if(e.side===Rt?c=i.intersectTriangle(s,a,r,!0,o):c=i.intersectTriangle(r,a,s,e.side===Bn,o),c===null)return null;Hr.copy(o),Hr.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Hr);return u<t.near||u>t.far?null:{distance:u,point:Hr.clone(),object:n}}function Gr(n,e,t,i,r,a,s,o,c,u){n.getVertexPosition(o,gi),n.getVertexPosition(c,vi),n.getVertexPosition(u,yi);const l=Of(n,e,t,i,gi,vi,yi,Br);if(l){r&&(Nr.fromBufferAttribute(r,o),Ur.fromBufferAttribute(r,c),Fr.fromBufferAttribute(r,u),l.uv=Gt.getInterpolation(Br,gi,vi,yi,Nr,Ur,Fr,new fe)),a&&(Nr.fromBufferAttribute(a,o),Ur.fromBufferAttribute(a,c),Fr.fromBufferAttribute(a,u),l.uv1=Gt.getInterpolation(Br,gi,vi,yi,Nr,Ur,Fr,new fe),l.uv2=l.uv1),s&&(Bc.fromBufferAttribute(s,o),Hc.fromBufferAttribute(s,c),Gc.fromBufferAttribute(s,u),l.normal=Gt.getInterpolation(Br,gi,vi,yi,Bc,Hc,Gc,new L),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new L,materialIndex:0};Gt.getNormal(gi,vi,yi,d.normal),l.face=d}return l}class _r extends Lt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],u=[],l=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(c),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(d,2));function g(v,p,h,x,y,_,b,M,E,z,A){const w=_/E,N=b/z,U=_/2,ee=b/2,k=M/2,R=E+1,D=z+1;let K=0,J=0;const te=new L;for(let F=0;F<D;F++){const $=F*N-ee;for(let Q=0;Q<R;Q++){const W=Q*w-U;te[v]=W*x,te[p]=$*y,te[h]=k,u.push(te.x,te.y,te.z),te[v]=0,te[p]=0,te[h]=M>0?1:-1,l.push(te.x,te.y,te.z),d.push(Q/E),d.push(1-F/z),K+=1}}for(let F=0;F<z;F++)for(let $=0;$<E;$++){const Q=f+$+R*F,W=f+$+R*(F+1),G=f+($+1)+R*(F+1),V=f+($+1)+R*F;c.push(Q,W,V),c.push(W,G,V),J+=6}o.addGroup(m,J,A),m+=J,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const i=Bi(n[t]);for(const r in i)e[r]=i[r]}return e}function If(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fl(n){return n.getRenderTarget()===null?n.outputColorSpace:Je.workingColorSpace}const Bl={clone:Bi,merge:Tt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=If(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hl extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Hl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,u=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*i/u,r*=s.width/c,i*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,xi=1;class Ff extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(_i,xi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(_i,xi,e,t);a.layers=this.layers,this.add(a);const s=new Vt(_i,xi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(_i,xi,e,t);o.layers=this.layers,this.add(o);const c=new Vt(_i,xi,e,t);c.layers=this.layers,this.add(c);const u=new Vt(_i,xi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,c]=t;for(const u of t)this.remove(u);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,u,l]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,l),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gl extends zt{constructor(e,t,i,r,a,s,o,c,u,l){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,i,r,a,s,o,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?lt:Wt),this.texture=new Gl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),a=new Tn({name:"CubemapFromEquirect",uniforms:Bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Mn});a.uniforms.tEquirect.value=t;const s=new Qt(r,a),o=t.minFilter;return t.minFilter===pr&&(t.minFilter=Ft),new Ff(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}const us=new L,Hf=new L,Gf=new Ve;class yn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=us.subVectors(i,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(us),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gf.getNormalMatrix(e),r=this.coplanarPoint(us).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Ta,Vr=new L;class yo{constructor(e=new yn,t=new yn,i=new yn,r=new yn,a=new yn,s=new yn){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],c=r[3],u=r[4],l=r[5],d=r[6],f=r[7],m=r[8],g=r[9],v=r[10],p=r[11],h=r[12],x=r[13],y=r[14],_=r[15];if(i[0].setComponents(c-a,f-u,p-m,_-h).normalize(),i[1].setComponents(c+a,f+u,p+m,_+h).normalize(),i[2].setComponents(c+s,f+l,p+g,_+x).normalize(),i[3].setComponents(c-s,f-l,p-g,_-x).normalize(),i[4].setComponents(c-o,f-d,p-v,_-y).normalize(),t===An)i[5].setComponents(c+o,f+d,p+v,_+y).normalize();else if(t===ha)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Vf(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,l){const d=u.array,f=u.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(l,g),n.bufferData(l,d,f),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:m}}function a(u,l,d){const f=l.array,m=l._updateRange,g=l.updateRanges;if(n.bindBuffer(d,u),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){const h=g[v];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}l.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const l=i.get(u);l&&(n.deleteBuffer(l.buffer),i.delete(u))}function c(u,l){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,l));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,u,l),d.version=u.version}}return{get:s,remove:o,update:c}}class _o extends Lt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),c=Math.floor(r),u=o+1,l=c+1,d=e/o,f=t/c,m=[],g=[],v=[],p=[];for(let h=0;h<l;h++){const x=h*f-s;for(let y=0;y<u;y++){const _=y*d-a;g.push(_,-x,0),v.push(0,0,1),p.push(y/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<o;x++){const y=x+u*h,_=x+u*(h+1),b=x+1+u*(h+1),M=x+1+u*h;m.push(y,_,M),m.push(_,b,M)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wf=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`
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
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
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
#endif`,km=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
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
}`,sg=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,lg=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,yg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,Ag=`uniform float rotation;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Wf,alphahash_pars_fragment:jf,alphamap_fragment:Xf,alphamap_pars_fragment:$f,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:Kf,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:op,clipping_planes_vertex:cp,color_fragment:up,color_pars_fragment:lp,color_pars_vertex:dp,color_vertex:hp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:vp,emissivemap_fragment:yp,emissivemap_pars_fragment:_p,colorspace_fragment:xp,colorspace_pars_fragment:Ap,envmap_fragment:bp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:kp,fog_fragment:Cp,fog_pars_fragment:Rp,gradientmap_pars_fragment:zp,lightmap_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Op,lights_pars_begin:Ip,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Wp,lights_fragment_maps:jp,lights_fragment_end:Xp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphcolor_vertex:im,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:sm,normal_fragment_begin:om,normal_fragment_maps:cm,normal_pars_fragment:um,normal_pars_vertex:lm,normal_vertex:dm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:vm,packing:ym,premultiplied_alpha_fragment:_m,project_vertex:xm,dithering_fragment:Am,dithering_pars_fragment:bm,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:km,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:zm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Om,tonemapping_pars_fragment:Im,transmission_fragment:Nm,transmission_pars_fragment:Um,uv_pars_fragment:Fm,uv_pars_vertex:Bm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:jm,backgroundCube_frag:Xm,cube_vert:$m,cube_frag:qm,depth_vert:Ym,depth_frag:Km,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:eg,linedashed_vert:tg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:sg,meshmatcap_vert:og,meshmatcap_frag:cg,meshnormal_vert:ug,meshnormal_frag:lg,meshphong_vert:dg,meshphong_frag:hg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:vg,points_frag:yg,shadow_vert:_g,shadow_frag:xg,sprite_vert:Ag,sprite_frag:bg},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},sn={basic:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Tt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Tt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Tt([ge.points,ge.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Tt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Tt([ge.common,ge.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Tt([ge.sprite,ge.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Tt([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Tt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};sn.physical={uniforms:Tt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Wr={r:0,b:0,g:0};function Mg(n,e,t,i,r,a,s){const o=new We(0);let c=a===!0?0:1,u,l,d=null,f=0,m=null;function g(p,h){let x=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?v(o,c):y&&y.isColor&&(v(y,1),x=!0);const _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,s):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ea)?(l===void 0&&(l=new Qt(new _r(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Bi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==nt,(d!==y||f!==y.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Qt(new _o(2,2),new Tn({name:"BackgroundMaterial",uniforms:Bi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Je.getTransfer(y.colorSpace)!==nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function v(p,h){p.getRGB(Wr,Fl(n)),i.buffers.color.setClear(Wr.r,Wr.g,Wr.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),c=h,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:g}}function Sg(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},c=p(null);let u=c,l=!1;function d(k,R,D,K,J){let te=!1;if(s){const F=v(K,D,R);u!==F&&(u=F,m(u.object)),te=h(k,K,D,J),te&&x(k,K,D,J)}else{const F=R.wireframe===!0;(u.geometry!==K.id||u.program!==D.id||u.wireframe!==F)&&(u.geometry=K.id,u.program=D.id,u.wireframe=F,te=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(te||l)&&(l=!1,z(k,R,D,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):a.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function v(k,R,D){const K=D.wireframe===!0;let J=o[k.id];J===void 0&&(J={},o[k.id]=J);let te=J[R.id];te===void 0&&(te={},J[R.id]=te);let F=te[K];return F===void 0&&(F=p(f()),te[K]=F),F}function p(k){const R=[],D=[],K=[];for(let J=0;J<r;J++)R[J]=0,D[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:K,object:k,attributes:{},index:null}}function h(k,R,D,K){const J=u.attributes,te=R.attributes;let F=0;const $=D.getAttributes();for(const Q in $)if($[Q].location>=0){const G=J[Q];let V=te[Q];if(V===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(V=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(V=k.instanceColor)),G===void 0||G.attribute!==V||V&&G.data!==V.data)return!0;F++}return u.attributesNum!==F||u.index!==K}function x(k,R,D,K){const J={},te=R.attributes;let F=0;const $=D.getAttributes();for(const Q in $)if($[Q].location>=0){let G=te[Q];G===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(G=k.instanceColor));const V={};V.attribute=G,G&&G.data&&(V.data=G.data),J[Q]=V,F++}u.attributes=J,u.attributesNum=F,u.index=K}function y(){const k=u.newAttributes;for(let R=0,D=k.length;R<D;R++)k[R]=0}function _(k){b(k,0)}function b(k,R){const D=u.newAttributes,K=u.enabledAttributes,J=u.attributeDivisors;D[k]=1,K[k]===0&&(n.enableVertexAttribArray(k),K[k]=1),J[k]!==R&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,R),J[k]=R)}function M(){const k=u.newAttributes,R=u.enabledAttributes;for(let D=0,K=R.length;D<K;D++)R[D]!==k[D]&&(n.disableVertexAttribArray(D),R[D]=0)}function E(k,R,D,K,J,te,F){F===!0?n.vertexAttribIPointer(k,R,D,J,te):n.vertexAttribPointer(k,R,D,K,J,te)}function z(k,R,D,K){if(i.isWebGL2===!1&&(k.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=K.attributes,te=D.getAttributes(),F=R.defaultAttributeValues;for(const $ in te){const Q=te[$];if(Q.location>=0){let W=J[$];if(W===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(W=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(W=k.instanceColor)),W!==void 0){const G=W.normalized,V=W.itemSize,ne=t.get(W);if(ne===void 0)continue;const I=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,le=i.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||W.gpuType===bl);if(W.isInterleavedBufferAttribute){const ye=W.data,B=ye.stride,tt=W.offset;if(ye.isInstancedInterleavedBuffer){for(let Ae=0;Ae<Q.locationSize;Ae++)b(Q.location+Ae,ye.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ae=0;Ae<Q.locationSize;Ae++)_(Q.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,I);for(let Ae=0;Ae<Q.locationSize;Ae++)E(Q.location+Ae,V/Q.locationSize,Z,G,B*ue,(tt+V/Q.locationSize*Ae)*ue,le)}else{if(W.isInstancedBufferAttribute){for(let ye=0;ye<Q.locationSize;ye++)b(Q.location+ye,W.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ye=0;ye<Q.locationSize;ye++)_(Q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,I);for(let ye=0;ye<Q.locationSize;ye++)E(Q.location+ye,V/Q.locationSize,Z,G,V*ue,V/Q.locationSize*ye*ue,le)}}else if(F!==void 0){const G=F[$];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(Q.location,G);break;case 3:n.vertexAttrib3fv(Q.location,G);break;case 4:n.vertexAttrib4fv(Q.location,G);break;default:n.vertexAttrib1fv(Q.location,G)}}}}M()}function A(){U();for(const k in o){const R=o[k];for(const D in R){const K=R[D];for(const J in K)g(K[J].object),delete K[J];delete R[D]}delete o[k]}}function w(k){if(o[k.id]===void 0)return;const R=o[k.id];for(const D in R){const K=R[D];for(const J in K)g(K[J].object),delete K[J];delete R[D]}delete o[k.id]}function N(k){for(const R in o){const D=o[R];if(D[k.id]===void 0)continue;const K=D[k.id];for(const J in K)g(K[J].object),delete K[J];delete D[k.id]}}function U(){ee(),l=!0,u!==c&&(u=c,m(u.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:U,resetDefaultState:ee,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:_,disableUnusedAttributes:M}}function Eg(n,e,t,i){const r=i.isWebGL2;let a;function s(l){a=l}function o(l,d){n.drawArrays(a,l,d),t.update(d,a,1)}function c(l,d,f){if(f===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,l,d,f),t.update(d,a,f)}function u(l,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(l[g],d[g]);else{m.multiDrawArraysWEBGL(a,l,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];t.update(g,a,1)}}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function wg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,_=s||e.has("OES_texture_float"),b=y&&_,M=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:M}}function Tg(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new yn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=l(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||a&&!p)a?l(null):u();else{const x=a?0:i,y=x*4;let _=h.clippingState||null;c.value=_,_=l(g,f,y,m);for(let b=0;b!==y;++b)_[b]=t[b];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function l(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const h=m+v*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<h)&&(p=new Float32Array(h));for(let y=0,_=m;y!==v;++y,_+=4)s.copy(d[y]).applyMatrix4(x,o),s.normal.toArray(p,_),p[_+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function kg(n){let e=new WeakMap;function t(s,o){return o===Is?s.mapping=Ii:o===Ns&&(s.mapping=Ni),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Is||o===Ns)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const u=new Bf(c.height/2);return u.fromEquirectangularTexture(n,s),e.set(s,u),s.addEventListener("dispose",r),t(u.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class xo extends Hl{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,Vc=[.125,.215,.35,.446,.526,.582],Zn=20,ls=new xo,Wc=new We;let ds=null,hs=0,fs=0;const Yn=(1+Math.sqrt(5))/2,Ai=1/Yn,jc=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Yn,Ai),new L(0,Yn,-Ai),new L(Ai,0,Yn),new L(-Ai,0,Yn),new L(Yn,Ai,0),new L(-Yn,Ai,0)];class Xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ds=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ds,hs,fs),e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),fs=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ui,format:Jt,colorSpace:wn,depthBuffer:!1},r=$c(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(a)),this._blurMaterial=Rg(a,e,t)}return r}_compileMaterial(e){const t=new Qt(this._lodPlanes[0],e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,i,r){const o=new Vt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,f=l.toneMapping;l.getClearColor(Wc),l.toneMapping=Un,l.autoClear=!1;const m=new vo({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Qt(new _r,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Wc),v=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,c[h],0),o.lookAt(u[h],0,0)):x===1?(o.up.set(0,0,c[h]),o.lookAt(0,u[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,u[h]));const y=this._cubeSize;jr(r,x*y,h>2?y:0,y,y),l.setRenderTarget(r),v&&l.render(g,o),l.render(e,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ii||e.mapping===Ni;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Qt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,ls)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=jc[(r-1)%jc.length];this._blur(e,r-1,r,a,s)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const c=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Qt(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),v=a/g,p=isFinite(a)?1+Math.floor(l*v):Zn;p>Zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const h=[];let x=0;for(let E=0;E<Zn;++E){const z=E/v,A=Math.exp(-z*z/2);h.push(A),E===0?x+=A:E<p&&(x+=2*A)}for(let E=0;E<h.length;E++)h[E]=h[E]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const _=this._sizeLods[r],b=3*_*(r>y-Ci?r-y+Ci:0),M=4*(this._cubeSize-_);jr(t,b,M,3*_,2*_),c.setRenderTarget(t),c.render(d,ls)}}function Cg(n){const e=[],t=[],i=[];let r=n;const a=n-Ci+1+Vc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>n-Ci?c=Vc[s-n+Ci-1]:s===0&&(c=0),i.push(c);const u=1/(o-2),l=-u,d=1+u,f=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,g=6,v=3,p=2,h=1,x=new Float32Array(v*g*m),y=new Float32Array(p*g*m),_=new Float32Array(h*g*m);for(let M=0;M<m;M++){const E=M%3*2/3-1,z=M>2?0:-1,A=[E,z,0,E+2/3,z,0,E+2/3,z+1,0,E,z,0,E+2/3,z+1,0,E,z+1,0];x.set(A,v*g*M),y.set(f,p*g*M);const w=[M,M,M,M,M,M];_.set(w,h*g*M)}const b=new Lt;b.setAttribute("position",new jt(x,v)),b.setAttribute("uv",new jt(y,p)),b.setAttribute("faceIndex",new jt(_,h)),e.push(b),r>Ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $c(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=Ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Rg(n,e,t){const i=new Float32Array(Zn),r=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function qc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function zg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Is||c===Ns,l=c===Ii||c===Ni;if(u||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Xc(n)),d=u?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(u&&d&&d.height>0||l&&d&&r(d)){t===null&&(t=new Xc(n));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let l=0;l<u;l++)o[l]!==void 0&&c++;return c===u}function a(o){const c=o.target;c.removeEventListener("dispose",a);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Pg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lg(n,e,t,i){const r={},a=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",s),delete r[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function u(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let y=0,_=x.length;y<_;y+=3){const b=x[y+0],M=x[y+1],E=x[y+2];f.push(b,M,M,E,E,b)}}else if(g!==void 0){const x=g.array;v=g.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const b=y+0,M=y+1,E=y+2;f.push(b,M,M,E,E,b)}}else return;const p=new(Pl(f)?Ul:Nl)(f,1);p.version=v;const h=a.get(d);h&&e.remove(h),a.set(d,p)}function l(d){const f=a.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return a.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Dg(n,e,t,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,c;function u(m){o=m.type,c=m.bytesPerElement}function l(m,g){n.drawElements(a,g,o,m*c),t.update(g,a,1)}function d(m,g,v){if(v===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](a,g,o,m*c,v),t.update(g,a,v)}function f(m,g,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<v;h++)this.render(m[h]/c,g[h]);else{p.multiDrawElementsWEBGL(a,g,0,o,m,0,v);let h=0;for(let x=0;x<v;x++)h+=g[x];t.update(h,a,1)}}this.setMode=s,this.setIndex=u,this.render=l,this.renderInstances=d,this.renderMultiDraw=f}function Og(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ig(n,e){return n[0]-e[0]}function Ng(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ug(n,e,t){const i={},r=new Float32Array(8),a=new WeakMap,s=new yt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,l,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=g!==void 0?g.length:0;let p=a.get(l);if(p===void 0||p.count!==v){let R=function(){ee.dispose(),a.delete(l),l.removeEventListener("dispose",R)};var m=R;p!==void 0&&p.texture.dispose();const y=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],z=l.morphAttributes.color||[];let A=0;y===!0&&(A=1),_===!0&&(A=2),b===!0&&(A=3);let w=l.attributes.position.count*A,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const U=new Float32Array(w*N*4*v),ee=new Ol(U,w,N,v);ee.type=Nn,ee.needsUpdate=!0;const k=A*4;for(let D=0;D<v;D++){const K=M[D],J=E[D],te=z[D],F=w*N*4*D;for(let $=0;$<K.count;$++){const Q=$*k;y===!0&&(s.fromBufferAttribute(K,$),U[F+Q+0]=s.x,U[F+Q+1]=s.y,U[F+Q+2]=s.z,U[F+Q+3]=0),_===!0&&(s.fromBufferAttribute(J,$),U[F+Q+4]=s.x,U[F+Q+5]=s.y,U[F+Q+6]=s.z,U[F+Q+7]=0),b===!0&&(s.fromBufferAttribute(te,$),U[F+Q+8]=s.x,U[F+Q+9]=s.y,U[F+Q+10]=s.z,U[F+Q+11]=te.itemSize===4?s.w:1)}}p={count:v,texture:ee,size:new fe(w,N)},a.set(l,p),l.addEventListener("dispose",R)}let h=0;for(let y=0;y<f.length;y++)h+=f[y];const x=l.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let v=i[l.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];i[l.id]=v}for(let _=0;_<g;_++){const b=v[_];b[0]=_,b[1]=f[_]}v.sort(Ng);for(let _=0;_<8;_++)_<g&&v[_][1]?(o[_][0]=v[_][0],o[_][1]=v[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Ig);const p=l.morphAttributes.position,h=l.morphAttributes.normal;let x=0;for(let _=0;_<8;_++){const b=o[_],M=b[0],E=b[1];M!==Number.MAX_SAFE_INTEGER&&E?(p&&l.getAttribute("morphTarget"+_)!==p[M]&&l.setAttribute("morphTarget"+_,p[M]),h&&l.getAttribute("morphNormal"+_)!==h[M]&&l.setAttribute("morphNormal"+_,h[M]),r[_]=E,x+=E):(p&&l.hasAttribute("morphTarget"+_)===!0&&l.deleteAttribute("morphTarget"+_),h&&l.hasAttribute("morphNormal"+_)===!0&&l.deleteAttribute("morphNormal"+_),r[_]=0)}const y=l.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function Fg(n,e,t,i){let r=new WeakMap;function a(c){const u=i.render.frame,l=c.geometry,d=e.get(c,l);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function s(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}class Wl extends zt{constructor(e,t,i,r,a,s,o,c,u,l){if(l=l!==void 0?l:Qn,l!==Qn&&l!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Qn&&(i=In),i===void 0&&l===Fi&&(i=Jn),super(null,r,a,s,o,c,l,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kt,this.minFilter=c!==void 0?c:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jl=new zt,Xl=new Wl(1,1);Xl.compareFunction=zl;const $l=new Ol,ql=new Sf,Yl=new Gl,Kc=[],Zc=[],Jc=new Float32Array(16),Qc=new Float32Array(9),eu=new Float32Array(4);function Gi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Kc[r];if(a===void 0&&(a=new Float32Array(r),Kc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ra(n,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function Vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function Wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;eu.set(i),n.uniformMatrix2fv(this.addr,!1,eu),ft(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Qc.set(i),n.uniformMatrix3fv(this.addr,!1,Qc),ft(t,i)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ht(t,i))return;Jc.set(i),n.uniformMatrix4fv(this.addr,!1,Jc),ft(t,i)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Zg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function tv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const a=this.type===n.SAMPLER_2D_SHADOW?Xl:jl;t.setTexture2D(e||a,r)}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ql,r)}function iv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Yl,r)}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$l,r)}function av(n){switch(n){case 5126:return Bg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return jg;case 35676:return Xg;case 5124:case 35670:return $g;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Kg;case 5125:return Zg;case 36294:return Jg;case 36295:return Qg;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return tv;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function sv(n,e){n.uniform1fv(this.addr,e)}function ov(n,e){const t=Gi(e,this.size,2);n.uniform2fv(this.addr,t)}function cv(n,e){const t=Gi(e,this.size,3);n.uniform3fv(this.addr,t)}function uv(n,e){const t=Gi(e,this.size,4);n.uniform4fv(this.addr,t)}function lv(n,e){const t=Gi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dv(n,e){const t=Gi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hv(n,e){const t=Gi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fv(n,e){n.uniform1iv(this.addr,e)}function pv(n,e){n.uniform2iv(this.addr,e)}function mv(n,e){n.uniform3iv(this.addr,e)}function gv(n,e){n.uniform4iv(this.addr,e)}function vv(n,e){n.uniform1uiv(this.addr,e)}function yv(n,e){n.uniform2uiv(this.addr,e)}function _v(n,e){n.uniform3uiv(this.addr,e)}function xv(n,e){n.uniform4uiv(this.addr,e)}function Av(n,e,t){const i=this.cache,r=e.length,a=Ra(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||jl,a[s])}function bv(n,e,t){const i=this.cache,r=e.length,a=Ra(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ql,a[s])}function Mv(n,e,t){const i=this.cache,r=e.length,a=Ra(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Yl,a[s])}function Sv(n,e,t){const i=this.cache,r=e.length,a=Ra(t,r);ht(i,a)||(n.uniform1iv(this.addr,a),ft(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||$l,a[s])}function Ev(n){switch(n){case 5126:return sv;case 35664:return ov;case 35665:return cv;case 35666:return uv;case 35674:return lv;case 35675:return dv;case 35676:return hv;case 5124:case 35670:return fv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return yv;case 36295:return _v;case 36296:return xv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}class wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=av(t.type)}}class Tv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function tu(n,e){n.seq.push(e),n.map[e.id]=e}function Cv(n,e,t){const i=n.name,r=i.length;for(ps.lastIndex=0;;){const a=ps.exec(i),s=ps.lastIndex;let o=a[1];const c=a[2]==="]",u=a[3];if(c&&(o=o|0),u===void 0||u==="["&&s+2===r){tu(t,u===void 0?new wv(o,n,e):new Tv(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new kv(o),tu(t,d)),t=d}}}class ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);Cv(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function nu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rv=37297;let zv=0;function Pv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function Lv(n){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(n);let i;switch(e===t?i="":e===da&&t===la?i="LinearDisplayP3ToLinearSRGB":e===la&&t===da&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case wa:return[i,"LinearTransferOETF"];case lt:case po:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Pv(n.getShaderSource(e),s)}else return r}function Dv(n,e){const t=Lv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ov(n,e){let t;switch(e){case Lh:t="Linear";break;case Dh:t="Reinhard";break;case Oh:t="OptimizedCineon";break;case Ih:t="ACESFilmic";break;case Uh:t="AgX";break;case Nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ri).join(`
`)}function Nv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ri).join(`
`)}function Uv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ri(n){return n!==""}function ru(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ws(n){return n.replace(Bv,Gv)}const Hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Gv(n,e){let t=Ue[e];if(t===void 0){const i=Hv.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ws(t)}const Vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(Vv,Wv)}function Wv(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ou(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ii:case Ni:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function qv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case zh:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kv(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=jv(t),u=Xv(t),l=$v(t),d=qv(t),f=Yv(t),m=t.isWebGL2?"":Iv(t),g=Nv(t),v=Uv(a),p=r.createProgram();let h,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),h.length>0&&(h+=`
`),x=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),x.length>0&&(x+=`
`)):(h=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),x=[m,ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Un?Ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),s=Ws(s),s=ru(s,t),s=au(s,t),o=Ws(o),o=ru(o,t),o=au(o,t),s=su(s),o=su(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const _=y+h+s,b=y+x+o,M=nu(r,r.VERTEX_SHADER,_),E=nu(r,r.FRAGMENT_SHADER,b);r.attachShader(p,M),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function z(U){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),k=r.getShaderInfoLog(M).trim(),R=r.getShaderInfoLog(E).trim();let D=!0,K=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,M,E);else{const J=iu(r,M,"vertex"),te=iu(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+J+`
`+te)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(k===""||R==="")&&(K=!1);K&&(U.diagnostics={runnable:D,programLog:ee,vertexShader:{log:k,prefix:h},fragmentShader:{log:R,prefix:x}})}r.deleteShader(M),r.deleteShader(E),A=new ia(r,p),w=Fv(r,p)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(p,Rv)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}let Zv=0;class Jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Qv(e),t.set(e,i)),i}}class Qv{constructor(e){this.id=Zv++,this.code=e,this.usedTimes=0}}function e0(n,e,t,i,r,a,s){const o=new go,c=new Jv,u=[],l=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return A===0?"uv":`uv${A}`}function p(A,w,N,U,ee){const k=U.fog,R=ee.geometry,D=A.isMeshStandardMaterial?U.environment:null,K=(A.isMeshStandardMaterial?t:e).get(A.envMap||D),J=K&&K.mapping===Ea?K.image.height:null,te=g[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=F!==void 0?F.length:0;let Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let W,G,V,ne;if(te){const St=sn[te];W=St.vertexShader,G=St.fragmentShader}else W=A.vertexShader,G=A.fragmentShader,c.update(A),V=c.getVertexShaderID(A),ne=c.getFragmentShaderID(A);const I=n.getRenderTarget(),Z=ee.isInstancedMesh===!0,ue=ee.isBatchedMesh===!0,le=!!A.map,ye=!!A.matcap,B=!!K,tt=!!A.aoMap,Ae=!!A.lightMap,ke=!!A.bumpMap,_e=!!A.normalMap,je=!!A.displacementMap,Le=!!A.emissiveMap,C=!!A.metalnessMap,S=!!A.roughnessMap,j=A.anisotropy>0,oe=A.clearcoat>0,ae=A.iridescence>0,se=A.sheen>0,Se=A.transmission>0,ve=j&&!!A.anisotropyMap,be=oe&&!!A.clearcoatMap,Re=oe&&!!A.clearcoatNormalMap,Ie=oe&&!!A.clearcoatRoughnessMap,re=ae&&!!A.iridescenceMap,Xe=ae&&!!A.iridescenceThicknessMap,P=se&&!!A.sheenColorMap,ie=se&&!!A.sheenRoughnessMap,me=!!A.specularMap,ce=!!A.specularColorMap,Ee=!!A.specularIntensityMap,He=Se&&!!A.transmissionMap,$e=Se&&!!A.thicknessMap,Fe=!!A.gradientMap,pe=!!A.alphaMap,O=A.alphaTest>0,de=!!A.alphaHash,he=!!A.extensions,Ce=!!R.attributes.uv1,we=!!R.attributes.uv2,qe=!!R.attributes.uv3;let Ke=Un;return A.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ke=n.toneMapping),{isWebGL2:l,shaderID:te,shaderType:A.type,shaderName:A.name,vertexShader:W,fragmentShader:G,defines:A.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:ue,instancing:Z,instancingColor:Z&&ee.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,map:le,matcap:ye,envMap:B,envMapMode:B&&K.mapping,envMapCubeUVHeight:J,aoMap:tt,lightMap:Ae,bumpMap:ke,normalMap:_e,displacementMap:f&&je,emissiveMap:Le,normalMapObjectSpace:_e&&A.normalMapType===Kh,normalMapTangentSpace:_e&&A.normalMapType===Rl,metalnessMap:C,roughnessMap:S,anisotropy:j,anisotropyMap:ve,clearcoat:oe,clearcoatMap:be,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ie,iridescence:ae,iridescenceMap:re,iridescenceThicknessMap:Xe,sheen:se,sheenColorMap:P,sheenRoughnessMap:ie,specularMap:me,specularColorMap:ce,specularIntensityMap:Ee,transmission:Se,transmissionMap:He,thicknessMap:$e,gradientMap:Fe,opaque:A.transparent===!1&&A.blending===Di,alphaMap:pe,alphaTest:O,alphaHash:de,combine:A.combine,mapUv:le&&v(A.map.channel),aoMapUv:tt&&v(A.aoMap.channel),lightMapUv:Ae&&v(A.lightMap.channel),bumpMapUv:ke&&v(A.bumpMap.channel),normalMapUv:_e&&v(A.normalMap.channel),displacementMapUv:je&&v(A.displacementMap.channel),emissiveMapUv:Le&&v(A.emissiveMap.channel),metalnessMapUv:C&&v(A.metalnessMap.channel),roughnessMapUv:S&&v(A.roughnessMap.channel),anisotropyMapUv:ve&&v(A.anisotropyMap.channel),clearcoatMapUv:be&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:P&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:ie&&v(A.sheenRoughnessMap.channel),specularMapUv:me&&v(A.specularMap.channel),specularColorMapUv:ce&&v(A.specularColorMap.channel),specularIntensityMapUv:Ee&&v(A.specularIntensityMap.channel),transmissionMapUv:He&&v(A.transmissionMap.channel),thicknessMapUv:$e&&v(A.thicknessMap.channel),alphaMapUv:pe&&v(A.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(_e||j),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:qe,pointsUvs:ee.isPoints===!0&&!!R.attributes.uv&&(le||pe),fog:!!k,useFog:A.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ee.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&Je.getTransfer(A.map.colorSpace)===nt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xn,flipSided:A.side===Rt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:he&&A.extensions.derivatives===!0,extensionFragDepth:he&&A.extensions.fragDepth===!0,extensionDrawBuffers:he&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&A.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function h(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)w.push(N),w.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(x(w,A),y(w,A),w.push(n.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function x(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function y(A,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),A.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),A.push(o.mask)}function _(A){const w=g[A.type];let N;if(w){const U=sn[w];N=Bl.clone(U.uniforms)}else N=A.uniforms;return N}function b(A,w){let N;for(let U=0,ee=u.length;U<ee;U++){const k=u[U];if(k.cacheKey===w){N=k,++N.usedTimes;break}}return N===void 0&&(N=new Kv(n,w,A,a),u.push(N)),N}function M(A){if(--A.usedTimes===0){const w=u.indexOf(A);u[w]=u[u.length-1],u.pop(),A.destroy()}}function E(A){c.remove(A)}function z(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:u,dispose:z}}function t0(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function i(a,s,o){n.get(a)[s]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function n0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uu(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,f,m,g,v,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function o(d,f,m,g,v,p){const h=s(d,f,m,g,v,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,v,p){const h=s(d,f,m,g,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||n0),i.length>1&&i.sort(f||cu),r.length>1&&r.sort(f||cu)}function l(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:c,finish:l,sort:u}}function i0(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new uu,n.set(i,[s])):r>=a.length?(s=new uu,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function r0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function a0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s0=0;function o0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c0(n,e){const t=new r0,i=a0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new L);const a=new L,s=new at,o=new at;function c(l,d){let f=0,m=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let v=0,p=0,h=0,x=0,y=0,_=0,b=0,M=0,E=0,z=0,A=0;l.sort(o0);const w=d===!0?Math.PI:1;for(let U=0,ee=l.length;U<ee;U++){const k=l[U],R=k.color,D=k.intensity,K=k.distance,J=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=R.r*D*w,m+=R.g*D*w,g+=R.b*D*w;else if(k.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(k.sh.coefficients[te],D);A++}else if(k.isDirectionalLight){const te=t.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const F=k.shadow,$=i.get(k);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=k.shadow.matrix,_++}r.directional[v]=te,v++}else if(k.isSpotLight){const te=t.get(k);te.position.setFromMatrixPosition(k.matrixWorld),te.color.copy(R).multiplyScalar(D*w),te.distance=K,te.coneCos=Math.cos(k.angle),te.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),te.decay=k.decay,r.spot[h]=te;const F=k.shadow;if(k.map&&(r.spotLightMap[E]=k.map,E++,F.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[h]=F.matrix,k.castShadow){const $=i.get(k);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.spotShadow[h]=$,r.spotShadowMap[h]=J,M++}h++}else if(k.isRectAreaLight){const te=t.get(k);te.color.copy(R).multiplyScalar(D),te.halfWidth.set(k.width*.5,0,0),te.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=te,x++}else if(k.isPointLight){const te=t.get(k);if(te.color.copy(k.color).multiplyScalar(k.intensity*w),te.distance=k.distance,te.decay=k.decay,k.castShadow){const F=k.shadow,$=i.get(k);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,r.pointShadow[p]=$,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=k.shadow.matrix,b++}r.point[p]=te,p++}else if(k.isHemisphereLight){const te=t.get(k);te.skyColor.copy(k.color).multiplyScalar(D*w),te.groundColor.copy(k.groundColor).multiplyScalar(D*w),r.hemi[y]=te,y++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==v||N.pointLength!==p||N.spotLength!==h||N.rectAreaLength!==x||N.hemiLength!==y||N.numDirectionalShadows!==_||N.numPointShadows!==b||N.numSpotShadows!==M||N.numSpotMaps!==E||N.numLightProbes!==A)&&(r.directional.length=v,r.spot.length=h,r.rectArea.length=x,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=M+E-z,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=A,N.directionalLength=v,N.pointLength=p,N.spotLength=h,N.rectAreaLength=x,N.hemiLength=y,N.numDirectionalShadows=_,N.numPointShadows=b,N.numSpotShadows=M,N.numSpotMaps=E,N.numLightProbes=A,r.version=s0++)}function u(l,d){let f=0,m=0,g=0,v=0,p=0;const h=d.matrixWorldInverse;for(let x=0,y=l.length;x<y;x++){const _=l[x];if(_.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),f++}else if(_.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),b.direction.setFromMatrixPosition(_.matrixWorld),a.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(h),g++}else if(_.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),o.identity(),s.copy(_.matrixWorld),s.premultiply(h),o.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(h),m++}else if(_.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(h),p++}}}return{setup:c,setupView:u,state:r}}function lu(n,e){const t=new c0(n,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(d){i.push(d)}function o(d){r.push(d)}function c(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:s,pushShadow:o}}function u0(n,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let c;return o===void 0?(c=new lu(n,e),t.set(a,[c])):s>=o.length?(c=new lu(n,e),o.push(c)):c=o[s],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class l0 extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d0 extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0=`void main() {
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
}`;function p0(n,e,t){let i=new yo;const r=new fe,a=new fe,s=new yt,o=new l0({depthPacking:Yh}),c=new d0,u={},l=t.maxTextureSize,d={[Bn]:Rt,[Rt]:Bn,[xn]:xn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:h0,fragmentShader:f0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xl;let h=this.type;this.render=function(M,E,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const A=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Mn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const ee=h!==vn&&this.type===vn,k=h===vn&&this.type!==vn;for(let R=0,D=M.length;R<D;R++){const K=M[R],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const te=J.getFrameExtents();if(r.multiply(te),a.copy(J.mapSize),(r.x>l||r.y>l)&&(r.x>l&&(a.x=Math.floor(l/te.x),r.x=a.x*te.x,J.mapSize.x=a.x),r.y>l&&(a.y=Math.floor(l/te.y),r.y=a.y*te.y,J.mapSize.y=a.y)),J.map===null||ee===!0||k===!0){const $=this.type!==vn?{minFilter:kt,magFilter:kt}:{};J.map!==null&&J.map.dispose(),J.map=new Hn(r.x,r.y,$),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();const F=J.getViewportCount();for(let $=0;$<F;$++){const Q=J.getViewport($);s.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),U.viewport(s),J.updateMatrices(K,$),i=J.getFrustum(),_(E,z,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===vn&&x(J,z),J.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(A,w,N)};function x(M,E){const z=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(E,null,z,f,v,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(E,null,z,m,v,null)}function y(M,E,z,A){let w=null;const N=z.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)w=N;else if(w=z.isPointLight===!0?c:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=w.uuid,ee=E.uuid;let k=u[U];k===void 0&&(k={},u[U]=k);let R=k[ee];R===void 0&&(R=w.clone(),k[ee]=R,E.addEventListener("dispose",b)),w=R}if(w.visible=E.visible,w.wireframe=E.wireframe,A===vn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:d[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=n.properties.get(w);U.light=z}return w}function _(M,E,z,A,w){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===vn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld);const ee=e.update(M),k=M.material;if(Array.isArray(k)){const R=ee.groups;for(let D=0,K=R.length;D<K;D++){const J=R[D],te=k[J.materialIndex];if(te&&te.visible){const F=y(M,te,A,w);M.onBeforeShadow(n,M,E,z,ee,F,J),n.renderBufferDirect(z,null,ee,F,M,J),M.onAfterShadow(n,M,E,z,ee,F,J)}}}else if(k.visible){const R=y(M,k,A,w);M.onBeforeShadow(n,M,E,z,ee,R,null),n.renderBufferDirect(z,null,ee,R,M,null),M.onAfterShadow(n,M,E,z,ee,R,null)}}const U=M.children;for(let ee=0,k=U.length;ee<k;ee++)_(U[ee],E,z,A,w)}function b(M){M.target.removeEventListener("dispose",b);for(const z in u){const A=u[z],w=M.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}function m0(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const de=new yt;let he=null;const Ce=new yt(0,0,0,0);return{setMask:function(we){he!==we&&!O&&(n.colorMask(we,we,we,we),he=we)},setLocked:function(we){O=we},setClear:function(we,qe,Ke,pt,St){St===!0&&(we*=pt,qe*=pt,Ke*=pt),de.set(we,qe,Ke,pt),Ce.equals(de)===!1&&(n.clearColor(we,qe,Ke,pt),Ce.copy(de))},reset:function(){O=!1,he=null,Ce.set(-1,0,0,0)}}}function a(){let O=!1,de=null,he=null,Ce=null;return{setTest:function(we){we?ue(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(we){de!==we&&!O&&(n.depthMask(we),de=we)},setFunc:function(we){if(he!==we){switch(we){case Sh:n.depthFunc(n.NEVER);break;case Eh:n.depthFunc(n.ALWAYS);break;case wh:n.depthFunc(n.LESS);break;case ca:n.depthFunc(n.LEQUAL);break;case Th:n.depthFunc(n.EQUAL);break;case kh:n.depthFunc(n.GEQUAL);break;case Ch:n.depthFunc(n.GREATER);break;case Rh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=we}},setLocked:function(we){O=we},setClear:function(we){Ce!==we&&(n.clearDepth(we),Ce=we)},reset:function(){O=!1,de=null,he=null,Ce=null}}}function s(){let O=!1,de=null,he=null,Ce=null,we=null,qe=null,Ke=null,pt=null,St=null;return{setTest:function(et){O||(et?ue(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(et){de!==et&&!O&&(n.stencilMask(et),de=et)},setFunc:function(et,Et,rn){(he!==et||Ce!==Et||we!==rn)&&(n.stencilFunc(et,Et,rn),he=et,Ce=Et,we=rn)},setOp:function(et,Et,rn){(qe!==et||Ke!==Et||pt!==rn)&&(n.stencilOp(et,Et,rn),qe=et,Ke=Et,pt=rn)},setLocked:function(et){O=et},setClear:function(et){St!==et&&(n.clearStencil(et),St=et)},reset:function(){O=!1,de=null,he=null,Ce=null,we=null,qe=null,Ke=null,pt=null,St=null}}}const o=new r,c=new a,u=new s,l=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,v=[],p=null,h=!1,x=null,y=null,_=null,b=null,M=null,E=null,z=null,A=new We(0,0,0),w=0,N=!1,U=null,ee=null,k=null,R=null,D=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=te>=1):F.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=te>=2);let $=null,Q={};const W=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),V=new yt().fromArray(W),ne=new yt().fromArray(G);function I(O,de,he,Ce){const we=new Uint8Array(4),qe=n.createTexture();n.bindTexture(O,qe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<he;Ke++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(de+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return qe}const Z={};Z[n.TEXTURE_2D]=I(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=I(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Z[n.TEXTURE_2D_ARRAY]=I(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=I(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ue(n.DEPTH_TEST),c.setFunc(ca),Le(!1),C(Xo),ue(n.CULL_FACE),_e(Mn);function ue(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function le(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function ye(O,de){return m[O]!==de?(n.bindFramebuffer(O,de),m[O]=de,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=de),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function B(O,de){let he=v,Ce=!1;if(O)if(he=g.get(de),he===void 0&&(he=[],g.set(de,he)),O.isWebGLMultipleRenderTargets){const we=O.texture;if(he.length!==we.length||he[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,Ke=we.length;qe<Ke;qe++)he[qe]=n.COLOR_ATTACHMENT0+qe;he.length=we.length,Ce=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Ce=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Ce=!0);Ce&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function tt(O){return p!==O?(n.useProgram(O),p=O,!0):!1}const Ae={[Kn]:n.FUNC_ADD,[uh]:n.FUNC_SUBTRACT,[lh]:n.FUNC_REVERSE_SUBTRACT};if(i)Ae[Ko]=n.MIN,Ae[Zo]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Ae[Ko]=O.MIN_EXT,Ae[Zo]=O.MAX_EXT)}const ke={[dh]:n.ZERO,[hh]:n.ONE,[fh]:n.SRC_COLOR,[Ds]:n.SRC_ALPHA,[_h]:n.SRC_ALPHA_SATURATE,[vh]:n.DST_COLOR,[mh]:n.DST_ALPHA,[ph]:n.ONE_MINUS_SRC_COLOR,[Os]:n.ONE_MINUS_SRC_ALPHA,[yh]:n.ONE_MINUS_DST_COLOR,[gh]:n.ONE_MINUS_DST_ALPHA,[xh]:n.CONSTANT_COLOR,[Ah]:n.ONE_MINUS_CONSTANT_COLOR,[bh]:n.CONSTANT_ALPHA,[Mh]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(O,de,he,Ce,we,qe,Ke,pt,St,et){if(O===Mn){h===!0&&(le(n.BLEND),h=!1);return}if(h===!1&&(ue(n.BLEND),h=!0),O!==ch){if(O!==x||et!==N){if((y!==Kn||M!==Kn)&&(n.blendEquation(n.FUNC_ADD),y=Kn,M=Kn),et)switch(O){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.ONE,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,b=null,E=null,z=null,A.set(0,0,0),w=0,x=O,N=et}return}we=we||de,qe=qe||he,Ke=Ke||Ce,(de!==y||we!==M)&&(n.blendEquationSeparate(Ae[de],Ae[we]),y=de,M=we),(he!==_||Ce!==b||qe!==E||Ke!==z)&&(n.blendFuncSeparate(ke[he],ke[Ce],ke[qe],ke[Ke]),_=he,b=Ce,E=qe,z=Ke),(pt.equals(A)===!1||St!==w)&&(n.blendColor(pt.r,pt.g,pt.b,St),A.copy(pt),w=St),x=O,N=!1}function je(O,de){O.side===xn?le(n.CULL_FACE):ue(n.CULL_FACE);let he=O.side===Rt;de&&(he=!he),Le(he),O.blending===Di&&O.transparent===!1?_e(Mn):_e(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const Ce=O.stencilWrite;u.setTest(Ce),Ce&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),j(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(O){U!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),U=O)}function C(O){O!==ah?(ue(n.CULL_FACE),O!==ee&&(O===Xo?n.cullFace(n.BACK):O===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),ee=O}function S(O){O!==k&&(J&&n.lineWidth(O),k=O)}function j(O,de,he){O?(ue(n.POLYGON_OFFSET_FILL),(R!==de||D!==he)&&(n.polygonOffset(de,he),R=de,D=he)):le(n.POLYGON_OFFSET_FILL)}function oe(O){O?ue(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ae(O){O===void 0&&(O=n.TEXTURE0+K-1),$!==O&&(n.activeTexture(O),$=O)}function se(O,de,he){he===void 0&&($===null?he=n.TEXTURE0+K-1:he=$);let Ce=Q[he];Ce===void 0&&(Ce={type:void 0,texture:void 0},Q[he]=Ce),(Ce.type!==O||Ce.texture!==de)&&($!==he&&(n.activeTexture(he),$=he),n.bindTexture(O,de||Z[O]),Ce.type=O,Ce.texture=de)}function Se(){const O=Q[$];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){V.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),V.copy(O))}function He(O){ne.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function $e(O,de){let he=d.get(de);he===void 0&&(he=new WeakMap,d.set(de,he));let Ce=he.get(O);Ce===void 0&&(Ce=n.getUniformBlockIndex(de,O.name),he.set(O,Ce))}function Fe(O,de){const Ce=d.get(de).get(O);l.get(de)!==Ce&&(n.uniformBlockBinding(de,Ce,O.__bindingPointIndex),l.set(de,Ce))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,Q={},m={},g=new WeakMap,v=[],p=null,h=!1,x=null,y=null,_=null,b=null,M=null,E=null,z=null,A=new We(0,0,0),w=0,N=!1,U=null,ee=null,k=null,R=null,D=null,V.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:ue,disable:le,bindFramebuffer:ye,drawBuffers:B,useProgram:tt,setBlending:_e,setMaterial:je,setFlipSided:Le,setCullFace:C,setLineWidth:S,setPolygonOffset:j,setScissorTest:oe,activeTexture:ae,bindTexture:se,unbindTexture:Se,compressedTexImage2D:ve,compressedTexImage3D:be,texImage2D:me,texImage3D:ce,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:P,texStorage3D:ie,texSubImage2D:Re,texSubImage3D:Ie,compressedTexSubImage2D:re,compressedTexSubImage3D:Xe,scissor:Ee,viewport:He,reset:pe}}function g0(n,e,t,i,r,a,s){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return m?new OffscreenCanvas(C,S):gr("canvas")}function v(C,S,j,oe){let ae=1;if((C.width>oe||C.height>oe)&&(ae=oe/Math.max(C.width,C.height)),ae<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=S?fa:Math.floor,Se=se(ae*C.width),ve=se(ae*C.height);d===void 0&&(d=g(Se,ve));const be=j?g(Se,ve):d;return be.width=Se,be.height=ve,be.getContext("2d").drawImage(C,0,0,Se,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Se+"x"+ve+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return Gs(C.width)&&Gs(C.height)}function h(C){return o?!1:C.wrapS!==Zt||C.wrapT!==Zt||C.minFilter!==kt&&C.minFilter!==Ft}function x(C,S){return C.generateMipmaps&&S&&C.minFilter!==kt&&C.minFilter!==Ft}function y(C){n.generateMipmap(C)}function _(C,S,j,oe,ae=!1){if(o===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=S;if(S===n.RED&&(j===n.FLOAT&&(se=n.R32F),j===n.HALF_FLOAT&&(se=n.R16F),j===n.UNSIGNED_BYTE&&(se=n.R8)),S===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(se=n.R8UI),j===n.UNSIGNED_SHORT&&(se=n.R16UI),j===n.UNSIGNED_INT&&(se=n.R32UI),j===n.BYTE&&(se=n.R8I),j===n.SHORT&&(se=n.R16I),j===n.INT&&(se=n.R32I)),S===n.RG&&(j===n.FLOAT&&(se=n.RG32F),j===n.HALF_FLOAT&&(se=n.RG16F),j===n.UNSIGNED_BYTE&&(se=n.RG8)),S===n.RGBA){const Se=ae?ua:Je.getTransfer(oe);j===n.FLOAT&&(se=n.RGBA32F),j===n.HALF_FLOAT&&(se=n.RGBA16F),j===n.UNSIGNED_BYTE&&(se=Se===nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function b(C,S,j){return x(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==Ft?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function M(C){return C===kt||C===Jo||C===Ha?n.NEAREST:n.LINEAR}function E(C){const S=C.target;S.removeEventListener("dispose",E),A(S),S.isVideoTexture&&l.delete(S)}function z(C){const S=C.target;S.removeEventListener("dispose",z),N(S)}function A(C){const S=i.get(C);if(S.__webglInit===void 0)return;const j=C.source,oe=f.get(j);if(oe){const ae=oe[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(C),Object.keys(oe).length===0&&f.delete(j)}i.remove(C)}function w(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const j=C.source,oe=f.get(j);delete oe[S.__cacheKey],s.memory.textures--}function N(C){const S=C.texture,j=i.get(C),oe=i.get(S);if(oe.__webglTexture!==void 0&&(n.deleteTexture(oe.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(j.__webglFramebuffer[ae]))for(let se=0;se<j.__webglFramebuffer[ae].length;se++)n.deleteFramebuffer(j.__webglFramebuffer[ae][se]);else n.deleteFramebuffer(j.__webglFramebuffer[ae]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[ae])}else{if(Array.isArray(j.__webglFramebuffer))for(let ae=0;ae<j.__webglFramebuffer.length;ae++)n.deleteFramebuffer(j.__webglFramebuffer[ae]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,se=S.length;ae<se;ae++){const Se=i.get(S[ae]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),s.memory.textures--),i.remove(S[ae])}i.remove(S),i.remove(C)}let U=0;function ee(){U=0}function k(){const C=U;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function R(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function D(C,S){const j=i.get(C);if(C.isVideoTexture&&je(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const oe=C.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(j,C,S);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+S)}function K(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){V(j,C,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+S)}function J(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){V(j,C,S);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+S)}function te(C,S){const j=i.get(C);if(C.version>0&&j.__version!==C.version){ne(j,C,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+S)}const F={[Us]:n.REPEAT,[Zt]:n.CLAMP_TO_EDGE,[Fs]:n.MIRRORED_REPEAT},$={[kt]:n.NEAREST,[Jo]:n.NEAREST_MIPMAP_NEAREST,[Ha]:n.NEAREST_MIPMAP_LINEAR,[Ft]:n.LINEAR,[Fh]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},Q={[Zh]:n.NEVER,[rf]:n.ALWAYS,[Jh]:n.LESS,[zl]:n.LEQUAL,[Qh]:n.EQUAL,[nf]:n.GEQUAL,[ef]:n.GREATER,[tf]:n.NOTEQUAL};function W(C,S,j){if(j?(n.texParameteri(C,n.TEXTURE_WRAP_S,F[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,F[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,F[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,$[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,$[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Zt||S.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,M(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,M(S.minFilter)),S.minFilter!==kt&&S.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===kt||S.minFilter!==Ha&&S.minFilter!==pr||S.type===Nn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Ui&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function G(C,S){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));const oe=S.source;let ae=f.get(oe);ae===void 0&&(ae={},f.set(oe,ae));const se=R(S);if(se!==C.__cacheKey){ae[se]===void 0&&(ae[se]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,j=!0),ae[se].usedTimes++;const Se=ae[C.__cacheKey];Se!==void 0&&(ae[C.__cacheKey].usedTimes--,Se.usedTimes===0&&w(S)),C.__cacheKey=se,C.__webglTexture=ae[se].texture}return j}function V(C,S,j){let oe=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=n.TEXTURE_3D);const ae=G(C,S),se=S.source;t.bindTexture(oe,C.__webglTexture,n.TEXTURE0+j);const Se=i.get(se);if(se.version!==Se.__version||ae===!0){t.activeTexture(n.TEXTURE0+j);const ve=Je.getPrimaries(Je.workingColorSpace),be=S.colorSpace===Wt?null:Je.getPrimaries(S.colorSpace),Re=S.colorSpace===Wt||ve===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=h(S)&&p(S.image)===!1;let re=v(S.image,Ie,!1,r.maxTextureSize);re=Le(S,re);const Xe=p(re)||o,P=a.convert(S.format,S.colorSpace);let ie=a.convert(S.type),me=_(S.internalFormat,P,ie,S.colorSpace,S.isVideoTexture);W(oe,S,Xe);let ce;const Ee=S.mipmaps,He=o&&S.isVideoTexture!==!0&&me!==kl,$e=Se.__version===void 0||ae===!0,Fe=b(S,re,Xe);if(S.isDepthTexture)me=n.DEPTH_COMPONENT,o?S.type===Nn?me=n.DEPTH_COMPONENT32F:S.type===In?me=n.DEPTH_COMPONENT24:S.type===Jn?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:S.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Qn&&me===n.DEPTH_COMPONENT&&S.type!==fo&&S.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=In,ie=a.convert(S.type)),S.format===Fi&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,S.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Jn,ie=a.convert(S.type))),$e&&(He?t.texStorage2D(n.TEXTURE_2D,1,me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,me,re.width,re.height,0,P,ie,null));else if(S.isDataTexture)if(Ee.length>0&&Xe){He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,O=Ee.length;pe<O;pe++)ce=Ee[pe],He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,P,ie,ce.data):t.texImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,P,ie,ce.data);S.generateMipmaps=!1}else He?($e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,P,ie,re.data)):t.texImage2D(n.TEXTURE_2D,0,me,re.width,re.height,0,P,ie,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,me,Ee[0].width,Ee[0].height,re.depth);for(let pe=0,O=Ee.length;pe<O;pe++)ce=Ee[pe],S.format!==Jt?P!==null?He?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,re.depth,P,ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,me,ce.width,ce.height,re.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ce.width,ce.height,re.depth,P,ie,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,me,ce.width,ce.height,re.depth,0,P,ie,ce.data)}else{He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,O=Ee.length;pe<O;pe++)ce=Ee[pe],S.format!==Jt?P!==null?He?t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,P,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ce.width,ce.height,P,ie,ce.data):t.texImage2D(n.TEXTURE_2D,pe,me,ce.width,ce.height,0,P,ie,ce.data)}else if(S.isDataArrayTexture)He?($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,P,ie,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,re.width,re.height,re.depth,0,P,ie,re.data);else if(S.isData3DTexture)He?($e&&t.texStorage3D(n.TEXTURE_3D,Fe,me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,P,ie,re.data)):t.texImage3D(n.TEXTURE_3D,0,me,re.width,re.height,re.depth,0,P,ie,re.data);else if(S.isFramebufferTexture){if($e)if(He)t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height);else{let pe=re.width,O=re.height;for(let de=0;de<Fe;de++)t.texImage2D(n.TEXTURE_2D,de,me,pe,O,0,P,ie,null),pe>>=1,O>>=1}}else if(Ee.length>0&&Xe){He&&$e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,Ee[0].width,Ee[0].height);for(let pe=0,O=Ee.length;pe<O;pe++)ce=Ee[pe],He?t.texSubImage2D(n.TEXTURE_2D,pe,0,0,P,ie,ce):t.texImage2D(n.TEXTURE_2D,pe,me,P,ie,ce);S.generateMipmaps=!1}else He?($e&&t.texStorage2D(n.TEXTURE_2D,Fe,me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,P,ie,re)):t.texImage2D(n.TEXTURE_2D,0,me,P,ie,re);x(S,Xe)&&y(oe),Se.__version=se.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ne(C,S,j){if(S.image.length!==6)return;const oe=G(C,S),ae=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+j);const se=i.get(ae);if(ae.version!==se.__version||oe===!0){t.activeTexture(n.TEXTURE0+j);const Se=Je.getPrimaries(Je.workingColorSpace),ve=S.colorSpace===Wt?null:Je.getPrimaries(S.colorSpace),be=S.colorSpace===Wt||Se===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,re=[];for(let pe=0;pe<6;pe++)!Re&&!Ie?re[pe]=v(S.image[pe],!1,!0,r.maxCubemapSize):re[pe]=Ie?S.image[pe].image:S.image[pe],re[pe]=Le(S,re[pe]);const Xe=re[0],P=p(Xe)||o,ie=a.convert(S.format,S.colorSpace),me=a.convert(S.type),ce=_(S.internalFormat,ie,me,S.colorSpace),Ee=o&&S.isVideoTexture!==!0,He=se.__version===void 0||oe===!0;let $e=b(S,Xe,P);W(n.TEXTURE_CUBE_MAP,S,P);let Fe;if(Re){Ee&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,Xe.width,Xe.height);for(let pe=0;pe<6;pe++){Fe=re[pe].mipmaps;for(let O=0;O<Fe.length;O++){const de=Fe[O];S.format!==Jt?ie!==null?Ee?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,0,0,de.width,de.height,ie,me,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O,ce,de.width,de.height,0,ie,me,de.data)}}}else{Fe=S.mipmaps,Ee&&He&&(Fe.length>0&&$e++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,ce,re[0].width,re[0].height));for(let pe=0;pe<6;pe++)if(Ie){Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,re[pe].width,re[pe].height,ie,me,re[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ce,re[pe].width,re[pe].height,0,ie,me,re[pe].data);for(let O=0;O<Fe.length;O++){const he=Fe[O].image[pe].image;Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,0,0,he.width,he.height,ie,me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,ce,he.width,he.height,0,ie,me,he.data)}}else{Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie,me,re[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ce,ie,me,re[pe]);for(let O=0;O<Fe.length;O++){const de=Fe[O];Ee?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,0,0,ie,me,de.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,O+1,ce,ie,me,de.image[pe])}}}x(S,P)&&y(n.TEXTURE_CUBE_MAP),se.__version=ae.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function I(C,S,j,oe,ae,se){const Se=a.convert(j.format,j.colorSpace),ve=a.convert(j.type),be=_(j.internalFormat,Se,ve,j.colorSpace);if(!i.get(S).__hasExternalTextures){const Ie=Math.max(1,S.width>>se),re=Math.max(1,S.height>>se);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,se,be,Ie,re,S.depth,0,Se,ve,null):t.texImage2D(ae,se,be,Ie,re,0,Se,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),_e(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ae,i.get(j).__webglTexture,0,ke(S)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,ae,i.get(j).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(C,S,j){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let oe=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(j||_e(S)){const ae=S.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Nn?oe=n.DEPTH_COMPONENT32F:ae.type===In&&(oe=n.DEPTH_COMPONENT24));const se=ke(S);_e(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,oe,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,oe,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const oe=ke(S);j&&_e(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,S.width,S.height):_e(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ae=0;ae<oe.length;ae++){const se=oe[ae],Se=a.convert(se.format,se.colorSpace),ve=a.convert(se.type),be=_(se.internalFormat,Se,ve,se.colorSpace),Re=ke(S);j&&_e(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,be,S.width,S.height):_e(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,be,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,be,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const oe=i.get(S.depthTexture).__webglTexture,ae=ke(S);if(S.depthTexture.format===Qn)_e(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Fi)_e(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function le(C){const S=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,C)}else if(j){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=n.createRenderbuffer(),Z(S.__webglDepthbuffer[oe],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Z(S.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(C,S,j){const oe=i.get(C);S!==void 0&&I(oe.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&le(C)}function B(C){const S=C.texture,j=i.get(C),oe=i.get(S);C.addEventListener("dispose",z),C.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=S.version,s.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Se=p(C)||o;if(ae){j.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(o&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ve]=[];for(let be=0;be<S.mipmaps.length;be++)j.__webglFramebuffer[ve][be]=n.createFramebuffer()}else j.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ve=0;ve<S.mipmaps.length;ve++)j.__webglFramebuffer[ve]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(se)if(r.drawBuffers){const ve=C.texture;for(let be=0,Re=ve.length;be<Re;be++){const Ie=i.get(ve[be]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&_e(C)===!1){const ve=se?S:[S];j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let be=0;be<ve.length;be++){const Re=ve[be];j.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[be]);const Ie=a.convert(Re.format,Re.colorSpace),re=a.convert(Re.type),Xe=_(Re.internalFormat,Ie,re,Re.colorSpace,C.isXRRenderTarget===!0),P=ke(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,Xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,j.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),W(n.TEXTURE_CUBE_MAP,S,Se);for(let ve=0;ve<6;ve++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)I(j.__webglFramebuffer[ve][be],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,be);else I(j.__webglFramebuffer[ve],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);x(S,Se)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ve=C.texture;for(let be=0,Re=ve.length;be<Re;be++){const Ie=ve[be],re=i.get(Ie);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),W(n.TEXTURE_2D,Ie,Se),I(j.__webglFramebuffer,C,Ie,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),x(Ie,Se)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,oe.__webglTexture),W(ve,S,Se),o&&S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)I(j.__webglFramebuffer[be],C,S,n.COLOR_ATTACHMENT0,ve,be);else I(j.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ve,0);x(S,Se)&&y(ve),t.unbindTexture()}C.depthBuffer&&le(C)}function tt(C){const S=p(C)||o,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let oe=0,ae=j.length;oe<ae;oe++){const se=j[oe];if(x(se,S)){const Se=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(se).__webglTexture;t.bindTexture(Se,ve),y(Se),t.unbindTexture()}}}function Ae(C){if(o&&C.samples>0&&_e(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,oe=C.height;let ae=n.COLOR_BUFFER_BIT;const se=[],Se=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(C),be=C.isWebGLMultipleRenderTargets===!0;if(be)for(let Re=0;Re<S.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){se.push(n.COLOR_ATTACHMENT0+Re),C.depthBuffer&&se.push(Se);const Ie=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ie===!1&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]),Ie===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),be){const re=i.get(S[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,j,oe,0,0,j,oe,ae,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Re=0;Re<S.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Re]);const Ie=i.get(S[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ke(C){return Math.min(r.maxSamples,C.samples)}function _e(C){const S=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function je(C){const S=s.render.frame;l.get(C)!==S&&(l.set(C,S),C.update())}function Le(C,S){const j=C.colorSpace,oe=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Hs||j!==wn&&j!==Wt&&(Je.getTransfer(j)===nt?o===!1?e.has("EXT_sRGB")===!0&&oe===Jt?(C.format=Hs,C.minFilter=Ft,C.generateMipmaps=!1):S=Ll.sRGBToLinear(S):(oe!==Jt||ae!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}this.allocateTextureUnit=k,this.resetTextureUnits=ee,this.setTexture2D=D,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=te,this.rebindTextures=ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=I,this.useMultisampledRTT=_e}function v0(n,e,t){const i=t.isWebGL2;function r(a,s=Wt){let o;const c=Je.getTransfer(s);if(a===Fn)return n.UNSIGNED_BYTE;if(a===Ml)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Sl)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Bh)return n.BYTE;if(a===Hh)return n.SHORT;if(a===fo)return n.UNSIGNED_SHORT;if(a===bl)return n.INT;if(a===In)return n.UNSIGNED_INT;if(a===Nn)return n.FLOAT;if(a===Ui)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Gh)return n.ALPHA;if(a===Jt)return n.RGBA;if(a===Vh)return n.LUMINANCE;if(a===Wh)return n.LUMINANCE_ALPHA;if(a===Qn)return n.DEPTH_COMPONENT;if(a===Fi)return n.DEPTH_STENCIL;if(a===Hs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===jh)return n.RED;if(a===El)return n.RED_INTEGER;if(a===Xh)return n.RG;if(a===wl)return n.RG_INTEGER;if(a===Tl)return n.RGBA_INTEGER;if(a===Ga||a===Va||a===Wa||a===ja)if(c===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Ga)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Ga)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Va)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ja)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qo||a===ec||a===tc||a===nc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Qo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===tc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===nc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===kl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ic||a===rc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===ic)return c===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===rc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ac||a===sc||a===oc||a===cc||a===uc||a===lc||a===dc||a===hc||a===fc||a===pc||a===mc||a===gc||a===vc||a===yc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===ac)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===sc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===oc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===uc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===lc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===dc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===hc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===fc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===pc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===mc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===yc)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xa||a===_c||a===xc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Xa)return c===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===_c)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===xc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===$h||a===Ac||a===bc||a===Mc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Xa)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Ac)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Mc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jn?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:r}}class y0 extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let zi=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}};const _0={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(u,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const l=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=l.position.distanceTo(d.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class x0 extends nn{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",c=1,u=null,l=null,d=null,f=null,m=null,g=null;const v=t.getContextAttributes();let p=null,h=null;const x=[],y=[],_=new fe;let b=null;const M=new Vt;M.layers.enable(1),M.viewport=new yt;const E=new Vt;E.layers.enable(2),E.viewport=new yt;const z=[M,E],A=new y0;A.layers.enable(1),A.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let G=x[W];return G===void 0&&(G=new ms,x[W]=G),G.getTargetRaySpace()},this.getControllerGrip=function(W){let G=x[W];return G===void 0&&(G=new ms,x[W]=G),G.getGripSpace()},this.getHand=function(W){let G=x[W];return G===void 0&&(G=new ms,x[W]=G),G.getHandSpace()};function U(W){const G=y.indexOf(W.inputSource);if(G===-1)return;const V=x[G];V!==void 0&&(V.update(W.inputSource,W.frame,u||s),V.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",k);for(let W=0;W<x.length;W++){const G=y[W];G!==null&&(y[W]=null,x[W].disconnect(G))}w=null,N=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let G=null,V=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=v.stencil?Fi:Qn,V=v.stencil?Jn:In);const I={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(I),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Hn(f.textureWidth,f.textureHeight,{format:Jt,type:Fn,depthTexture:new Wl(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Z=e.properties.get(h);Z.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),u=null,s=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(W){for(let G=0;G<W.removed.length;G++){const V=W.removed[G],ne=y.indexOf(V);ne>=0&&(y[ne]=null,x[ne].disconnect(V))}for(let G=0;G<W.added.length;G++){const V=W.added[G];let ne=y.indexOf(V);if(ne===-1){for(let Z=0;Z<x.length;Z++)if(Z>=y.length){y.push(V),ne=Z;break}else if(y[Z]===null){y[Z]=V,ne=Z;break}if(ne===-1)break}const I=x[ne];I&&I.connect(V)}}const R=new L,D=new L;function K(W,G,V){R.setFromMatrixPosition(G.matrixWorld),D.setFromMatrixPosition(V.matrixWorld);const ne=R.distanceTo(D),I=G.projectionMatrix.elements,Z=V.projectionMatrix.elements,ue=I[14]/(I[10]-1),le=I[14]/(I[10]+1),ye=(I[9]+1)/I[5],B=(I[9]-1)/I[5],tt=(I[8]-1)/I[0],Ae=(Z[8]+1)/Z[0],ke=ue*tt,_e=ue*Ae,je=ne/(-tt+Ae),Le=je*-tt;G.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const C=ue+je,S=le+je,j=ke-Le,oe=_e+(ne-Le),ae=ye*le/S*C,se=B*le/S*C;W.projectionMatrix.makePerspective(j,oe,ae,se,C,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function J(W,G){G===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(G.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;A.near=E.near=M.near=W.near,A.far=E.far=M.far=W.far,(w!==A.near||N!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,N=A.far);const G=W.parent,V=A.cameras;J(A,G);for(let ne=0;ne<V.length;ne++)J(V[ne],G);V.length===2?K(A,M,E):A.projectionMatrix.copy(M.projectionMatrix),te(W,A,G)};function te(W,G,V){V===null?W.matrix.copy(G.matrixWorld):(W.matrix.copy(V.matrixWorld),W.matrix.invert(),W.matrix.multiply(G.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(G.projectionMatrix),W.projectionMatrixInverse.copy(G.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=mr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)};let F=null;function $(W,G){if(l=G.getViewerPose(u||s),g=G,l!==null){const V=l.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ne=!1;V.length!==A.cameras.length&&(A.cameras.length=0,ne=!0);for(let I=0;I<V.length;I++){const Z=V[I];let ue=null;if(m!==null)ue=m.getViewport(Z);else{const ye=d.getViewSubImage(f,Z);ue=ye.viewport,I===0&&(e.setRenderTargetTextures(h,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(h))}let le=z[I];le===void 0&&(le=new Vt,le.layers.enable(I),le.viewport=new yt,z[I]=le),le.matrix.fromArray(Z.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Z.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ue.x,ue.y,ue.width,ue.height),I===0&&(A.matrix.copy(le.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ne===!0&&A.cameras.push(le)}}for(let V=0;V<x.length;V++){const ne=y[V],I=x[V];ne!==null&&I!==void 0&&I.update(ne,G,u||s)}F&&F(W,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}const Q=new Vl;Q.setAnimationLoop($),this.setAnimationLoop=function(W){F=W},this.dispose=function(){}}}function A0(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Fl(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,x,y,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(p,h):h.isMeshToonMaterial?(a(p,h),d(p,h)):h.isMeshPhongMaterial?(a(p,h),l(p,h)):h.isMeshStandardMaterial?(a(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,_)):h.isMeshMatcapMaterial?(a(p,h),g(p,h)):h.isMeshDepthMaterial?a(p,h):h.isMeshDistanceMaterial?(a(p,h),v(p,h)):h.isMeshNormalMaterial?a(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,x,y):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Rt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Rt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const x=e.get(h).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,x,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*x,p.scale.value=y*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,x){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Rt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const x=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function b0(n,e,t,i){let r={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){const _=y.program;i.uniformBlockBinding(x,_)}function u(x,y){let _=r[x.id];_===void 0&&(g(x),_=l(x),r[x.id]=_,x.addEventListener("dispose",p));const b=y.program;i.updateUBOMapping(x,b);const M=e.render.frame;a[x.id]!==M&&(f(x),a[x.id]=M)}function l(x){const y=d();x.__bindingPointIndex=y;const _=n.createBuffer(),b=x.__size,M=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,b,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function d(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=r[x.id],_=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let M=0,E=_.length;M<E;M++){const z=Array.isArray(_[M])?_[M]:[_[M]];for(let A=0,w=z.length;A<w;A++){const N=z[A];if(m(N,M,A,b)===!0){const U=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value];let k=0;for(let R=0;R<ee.length;R++){const D=ee[R],K=v(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,U+k,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,y,_,b){const M=x.value,E=y+"_"+_;if(b[E]===void 0)return typeof M=="number"||typeof M=="boolean"?b[E]=M:b[E]=M.clone(),!0;{const z=b[E];if(typeof M=="number"||typeof M=="boolean"){if(z!==M)return b[E]=M,!0}else if(z.equals(M)===!1)return z.copy(M),!0}return!1}function g(x){const y=x.uniforms;let _=0;const b=16;for(let E=0,z=y.length;E<z;E++){const A=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,N=A.length;w<N;w++){const U=A[w],ee=Array.isArray(U.value)?U.value:[U.value];for(let k=0,R=ee.length;k<R;k++){const D=ee[k],K=v(D),J=_%b;J!==0&&b-J<K.boundary&&(_+=b-J),U.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=K.storage}}}const M=_%b;return M>0&&(_+=b-M),x.__size=_,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const _=s.indexOf(y.__bindingPointIndex);s.splice(_,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);s=[],r={},a={}}return{bind:c,update:u,dispose:h}}class Kl{constructor(e={}){const{canvas:t=_f(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=s;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const y=this;let _=!1,b=0,M=0,E=null,z=-1,A=null;const w=new yt,N=new yt;let U=null;const ee=new We(0);let k=0,R=t.width,D=t.height,K=1,J=null,te=null;const F=new yt(0,0,R,D),$=new yt(0,0,R,D);let Q=!1;const W=new yo;let G=!1,V=!1,ne=null;const I=new at,Z=new fe,ue=new L,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return E===null?K:1}let B=i;function tt(T,H){for(let q=0;q<T.length;q++){const Y=T[q],X=t.getContext(Y,H);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",de,!1),B===null){const H=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&H.shift(),B=tt(H,T),B===null)throw tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ae,ke,_e,je,Le,C,S,j,oe,ae,se,Se,ve,be,Re,Ie,re,Xe,P,ie,me,ce,Ee,He;function $e(){Ae=new Pg(B),ke=new wg(B,Ae,e),Ae.init(ke),ce=new v0(B,Ae,ke),_e=new m0(B,Ae,ke),je=new Og(B),Le=new t0,C=new g0(B,Ae,_e,Le,ke,ce,je),S=new kg(y),j=new zg(y),oe=new Vf(B,ke),Ee=new Sg(B,Ae,oe,ke),ae=new Lg(B,oe,je,Ee),se=new Fg(B,ae,oe,je),P=new Ug(B,ke,C),Ie=new Tg(Le),Se=new e0(y,S,j,Ae,ke,Ee,Ie),ve=new A0(y,Le),be=new i0,Re=new u0(Ae,ke),Xe=new Mg(y,S,j,_e,se,f,c),re=new p0(y,se,ke),He=new b0(B,je,ke,_e),ie=new Eg(B,Ae,je,ke),me=new Dg(B,Ae,je,ke),je.programs=Se.programs,y.capabilities=ke,y.extensions=Ae,y.properties=Le,y.renderLists=be,y.shadowMap=re,y.state=_e,y.info=je}$e();const Fe=new x0(y,B);this.xr=Fe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(R,D,!1))},this.getSize=function(T){return T.set(R,D)},this.setSize=function(T,H,q=!0){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,D=H,t.width=Math.floor(T*K),t.height=Math.floor(H*K),q===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(R*K,D*K).floor()},this.setDrawingBufferSize=function(T,H,q){R=T,D=H,K=q,t.width=Math.floor(T*q),t.height=Math.floor(H*q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,H,q,Y){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,q,Y),_e.viewport(w.copy(F).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,H,q,Y){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,H,q,Y),_e.scissor(N.copy($).multiplyScalar(K).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){_e.setScissorTest(Q=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(T=!0,H=!0,q=!0){let Y=0;if(T){let X=!1;if(E!==null){const xe=E.texture.format;X=xe===Tl||xe===wl||xe===El}if(X){const xe=E.texture.type,Te=xe===Fn||xe===In||xe===fo||xe===Jn||xe===Ml||xe===Sl,Pe=Xe.getClearColor(),De=Xe.getClearAlpha(),Be=Pe.r,Oe=Pe.g,Ne=Pe.b;Te?(m[0]=Be,m[1]=Oe,m[2]=Ne,m[3]=De,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=Be,g[1]=Oe,g[2]=Ne,g[3]=De,B.clearBufferiv(B.COLOR,0,g))}else Y|=B.COLOR_BUFFER_BIT}H&&(Y|=B.DEPTH_BUFFER_BIT),q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",de,!1),be.dispose(),Re.dispose(),Le.dispose(),S.dispose(),j.dispose(),se.dispose(),Ee.dispose(),He.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",St),Fe.removeEventListener("sessionend",et),ne&&(ne.dispose(),ne=null),Et.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=je.autoReset,H=re.enabled,q=re.autoUpdate,Y=re.needsUpdate,X=re.type;$e(),je.autoReset=T,re.enabled=H,re.autoUpdate=q,re.needsUpdate=Y,re.type=X}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function he(T){const H=T.target;H.removeEventListener("dispose",he),Ce(H)}function Ce(T){we(T),Le.remove(T)}function we(T){const H=Le.get(T).programs;H!==void 0&&(H.forEach(function(q){Se.releaseProgram(q)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,q,Y,X,xe){H===null&&(H=le);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Pe=th(T,H,q,Y,X);_e.setMaterial(Y,Te);let De=q.index,Be=1;if(Y.wireframe===!0){if(De=ae.getWireframeAttribute(q),De===void 0)return;Be=2}const Oe=q.drawRange,Ne=q.attributes.position;let ct=Oe.start*Be,Ot=(Oe.start+Oe.count)*Be;xe!==null&&(ct=Math.max(ct,xe.start*Be),Ot=Math.min(Ot,(xe.start+xe.count)*Be)),De!==null?(ct=Math.max(ct,0),Ot=Math.min(Ot,De.count)):Ne!=null&&(ct=Math.max(ct,0),Ot=Math.min(Ot,Ne.count));const mt=Ot-ct;if(mt<0||mt===1/0)return;Ee.setup(X,Y,Pe,q,De);let un,st=ie;if(De!==null&&(un=oe.get(De),st=me,st.setIndex(un)),X.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*ye()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(X.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),_e.setLineWidth(Ge*ye()),X.isLineSegments?st.setMode(B.LINES):X.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else X.isPoints?st.setMode(B.POINTS):X.isSprite&&st.setMode(B.TRIANGLES);if(X.isBatchedMesh)st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)st.renderInstances(ct,mt,X.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Na=Math.min(q.instanceCount,Ge);st.renderInstances(ct,mt,Na)}else st.render(ct,mt)};function qe(T,H,q){T.transparent===!0&&T.side===xn&&T.forceSinglePass===!1?(T.side=Rt,T.needsUpdate=!0,Mr(T,H,q),T.side=Bn,T.needsUpdate=!0,Mr(T,H,q),T.side=xn):Mr(T,H,q)}this.compile=function(T,H,q=null){q===null&&(q=T),p=Re.get(q),p.init(),x.push(p),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(y._useLegacyLights);const Y=new Set;return T.traverse(function(X){const xe=X.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Pe=xe[Te];qe(Pe,q,X),Y.add(Pe)}else qe(xe,q,X),Y.add(xe)}),x.pop(),p=null,Y},this.compileAsync=function(T,H,q=null){const Y=this.compile(T,H,q);return new Promise(X=>{function xe(){if(Y.forEach(function(Te){Le.get(Te).currentProgram.isReady()&&Y.delete(Te)}),Y.size===0){X(T);return}setTimeout(xe,10)}Ae.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ke=null;function pt(T){Ke&&Ke(T)}function St(){Et.stop()}function et(){Et.start()}const Et=new Vl;Et.setAnimationLoop(pt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){Ke=T,Fe.setAnimationLoop(T),T===null?Et.stop():Et.start()},Fe.addEventListener("sessionstart",St),Fe.addEventListener("sessionend",et),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(H),H=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,H,E),p=Re.get(T,x.length),p.init(),x.push(p),I.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W.setFromProjectionMatrix(I),V=this.localClippingEnabled,G=Ie.init(this.clippingPlanes,V),v=be.get(T,h.length),v.init(),h.push(v),rn(T,H,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(J,te),this.info.render.frame++,G===!0&&Ie.beginShadows();const q=p.state.shadowsArray;if(re.render(q,T,H),G===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xe.render(v,T),p.setupLights(y._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let X=0,xe=Y.length;X<xe;X++){const Te=Y[X];Bo(v,T,Te,Te.viewport)}}else Bo(v,T,H);E!==null&&(C.updateMultisampleRenderTarget(E),C.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(y,T,H),Ee.resetDefaultState(),z=-1,A=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function rn(T,H,q,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){Y&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(I);const Te=se.update(T),Pe=T.material;Pe.visible&&v.push(T,Te,Pe,q,ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Te=se.update(T),Pe=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ue.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ue.copy(Te.boundingSphere.center)),ue.applyMatrix4(T.matrixWorld).applyMatrix4(I)),Array.isArray(Pe)){const De=Te.groups;for(let Be=0,Oe=De.length;Be<Oe;Be++){const Ne=De[Be],ct=Pe[Ne.materialIndex];ct&&ct.visible&&v.push(T,Te,ct,q,ue.z,Ne)}}else Pe.visible&&v.push(T,Te,Pe,q,ue.z,null)}}const xe=T.children;for(let Te=0,Pe=xe.length;Te<Pe;Te++)rn(xe[Te],H,q,Y)}function Bo(T,H,q,Y){const X=T.opaque,xe=T.transmissive,Te=T.transparent;p.setupLightsView(q),G===!0&&Ie.setGlobalState(y.clippingPlanes,q),xe.length>0&&eh(X,xe,H,q),Y&&_e.viewport(w.copy(Y)),X.length>0&&br(X,H,q),xe.length>0&&br(xe,H,q),Te.length>0&&br(Te,H,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function eh(T,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const xe=ke.isWebGL2;ne===null&&(ne=new Hn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Ui:Fn,minFilter:pr,samples:xe?4:0})),y.getDrawingBufferSize(Z),xe?ne.setSize(Z.x,Z.y):ne.setSize(fa(Z.x),fa(Z.y));const Te=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(ee),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear();const Pe=y.toneMapping;y.toneMapping=Un,br(T,q,Y),C.updateMultisampleRenderTarget(ne),C.updateRenderTargetMipmap(ne);let De=!1;for(let Be=0,Oe=H.length;Be<Oe;Be++){const Ne=H[Be],ct=Ne.object,Ot=Ne.geometry,mt=Ne.material,un=Ne.group;if(mt.side===xn&&ct.layers.test(Y.layers)){const st=mt.side;mt.side=Rt,mt.needsUpdate=!0,Ho(ct,q,Y,Ot,mt,un),mt.side=st,mt.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(ne),C.updateRenderTargetMipmap(ne)),y.setRenderTarget(Te),y.setClearColor(ee,k),y.toneMapping=Pe}function br(T,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const Te=T[X],Pe=Te.object,De=Te.geometry,Be=Y===null?Te.material:Y,Oe=Te.group;Pe.layers.test(q.layers)&&Ho(Pe,H,q,De,Be,Oe)}}function Ho(T,H,q,Y,X,xe){T.onBeforeRender(y,H,q,Y,X,xe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(y,H,q,Y,T,xe),X.transparent===!0&&X.side===xn&&X.forceSinglePass===!1?(X.side=Rt,X.needsUpdate=!0,y.renderBufferDirect(q,H,Y,X,T,xe),X.side=Bn,X.needsUpdate=!0,y.renderBufferDirect(q,H,Y,X,T,xe),X.side=xn):y.renderBufferDirect(q,H,Y,X,T,xe),T.onAfterRender(y,H,q,Y,X,xe)}function Mr(T,H,q){H.isScene!==!0&&(H=le);const Y=Le.get(T),X=p.state.lights,xe=p.state.shadowsArray,Te=X.state.version,Pe=Se.getParameters(T,X.state,xe,H,q),De=Se.getProgramCacheKey(Pe);let Be=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?j:S).get(T.envMap||Y.environment),Be===void 0&&(T.addEventListener("dispose",he),Be=new Map,Y.programs=Be);let Oe=Be.get(De);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Te)return Vo(T,Pe),Oe}else Pe.uniforms=Se.getUniforms(T),T.onBuild(q,Pe,y),T.onBeforeCompile(Pe,y),Oe=Se.acquireProgram(Pe,De),Be.set(De,Oe),Y.uniforms=Pe.uniforms;const Ne=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=Ie.uniform),Vo(T,Pe),Y.needsLights=ih(T),Y.lightsStateVersion=Te,Y.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.directionalShadowMap.value=X.state.directionalShadowMap,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotShadowMap.value=X.state.spotShadowMap,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMap.value=X.state.pointShadowMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Go(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ia.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Vo(T,H){const q=Le.get(T);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function th(T,H,q,Y,X){H.isScene!==!0&&(H=le),C.resetTextureUnits();const xe=H.fog,Te=Y.isMeshStandardMaterial?H.environment:null,Pe=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:wn,De=(Y.isMeshStandardMaterial?j:S).get(Y.envMap||Te),Be=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let mt=Un;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(mt=y.toneMapping);const un=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=un!==void 0?un.length:0,Ge=Le.get(Y),Na=p.state.lights;if(G===!0&&(V===!0||T!==A)){const Bt=T===A&&Y.id===z;Ie.setState(Y,T,Bt)}let ot=!1;Y.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Na.state.version||Ge.outputColorSpace!==Pe||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||Ge.envMap!==De||Y.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ie.numPlanes||Ge.numIntersection!==Ie.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==Oe||Ge.morphTargets!==Ne||Ge.morphNormals!==ct||Ge.morphColors!==Ot||Ge.toneMapping!==mt||ke.isWebGL2===!0&&Ge.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ge.__version=Y.version);let Vn=Ge.currentProgram;ot===!0&&(Vn=Mr(Y,H,X));let Wo=!1,Wi=!1,Ua=!1;const xt=Vn.getUniforms(),Wn=Ge.uniforms;if(_e.useProgram(Vn.program)&&(Wo=!0,Wi=!0,Ua=!0),Y.id!==z&&(z=Y.id,Wi=!0),Wo||A!==T){xt.setValue(B,"projectionMatrix",T.projectionMatrix),xt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Bt=xt.map.cameraPosition;Bt!==void 0&&Bt.setValue(B,ue.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&xt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,Wi=!0,Ua=!0)}if(X.isSkinnedMesh){xt.setOptional(B,X,"bindMatrix"),xt.setOptional(B,X,"bindMatrixInverse");const Bt=X.skeleton;Bt&&(ke.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),xt.setValue(B,"boneTexture",Bt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(xt.setOptional(B,X,"batchingTexture"),xt.setValue(B,"batchingTexture",X._matricesTexture,C));const Fa=q.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0&&ke.isWebGL2===!0)&&P.update(X,q,Vn),(Wi||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,xt.setValue(B,"receiveShadow",X.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wn.envMap.value=De,Wn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Wi&&(xt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ge.needsLights&&nh(Wn,Ua),xe&&Y.fog===!0&&ve.refreshFogUniforms(Wn,xe),ve.refreshMaterialUniforms(Wn,Y,K,D,ne),ia.upload(B,Go(Ge),Wn,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ia.upload(B,Go(Ge),Wn,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xt.setValue(B,"center",X.center),xt.setValue(B,"modelViewMatrix",X.modelViewMatrix),xt.setValue(B,"normalMatrix",X.normalMatrix),xt.setValue(B,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Bt=Y.uniformsGroups;for(let Ba=0,rh=Bt.length;Ba<rh;Ba++)if(ke.isWebGL2){const jo=Bt[Ba];He.update(jo,Vn),He.bind(jo,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function nh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ih(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,H,q){Le.get(T.texture).__webglTexture=H,Le.get(T.depthTexture).__webglTexture=q;const Y=Le.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const q=Le.get(T);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,q=0){E=T,b=H,M=q;let Y=!0,X=null,xe=!1,Te=!1;if(T){const De=Le.get(T);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1):De.__webglFramebuffer===void 0?C.setupRenderTarget(T):De.__hasExternalTextures&&C.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Oe=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?X=Oe[H][q]:X=Oe[H],xe=!0):ke.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?X=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[q]:X=Oe,w.copy(T.viewport),N.copy(T.scissor),U=T.scissorTest}else w.copy(F).multiplyScalar(K).floor(),N.copy($).multiplyScalar(K).floor(),U=Q;if(_e.bindFramebuffer(B.FRAMEBUFFER,X)&&ke.drawBuffers&&Y&&_e.drawBuffers(T,X),_e.viewport(w),_e.scissor(N),_e.setScissorTest(U),xe){const De=Le.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,q)}else if(Te){const De=Le.get(T.texture),Be=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.__webglTexture,q||0,Be)}z=-1},this.readRenderTargetPixels=function(T,H,q,Y,X,xe,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){_e.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const De=T.texture,Be=De.format,Oe=De.type;if(Be!==Jt&&ce.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Oe===Ui&&(Ae.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Oe!==Fn&&ce.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Nn&&(ke.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&q>=0&&q<=T.height-X&&B.readPixels(H,q,Y,X,ce.convert(Be),ce.convert(Oe),xe)}finally{const De=E!==null?Le.get(E).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(T,H,q=0){const Y=Math.pow(2,-q),X=Math.floor(H.image.width*Y),xe=Math.floor(H.image.height*Y);C.setTexture2D(H,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,T.x,T.y,X,xe),_e.unbindTexture()},this.copyTextureToTexture=function(T,H,q,Y=0){const X=H.image.width,xe=H.image.height,Te=ce.convert(q.format),Pe=ce.convert(q.type);C.setTexture2D(q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment),H.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,X,xe,Te,Pe,H.image.data):H.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Te,H.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,Y,T.x,T.y,Te,Pe,H.image),Y===0&&q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,H,q,Y,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,De=ce.convert(Y.format),Be=ce.convert(Y.type);let Oe;if(Y.isData3DTexture)C.setTexture3D(Y,0),Oe=B.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ne=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ot=B.getParameter(B.UNPACK_SKIP_PIXELS),mt=B.getParameter(B.UNPACK_SKIP_ROWS),un=B.getParameter(B.UNPACK_SKIP_IMAGES),st=q.isCompressedTexture?q.mipmaps[X]:q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,st.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?B.texSubImage3D(Oe,X,H.x,H.y,H.z,xe,Te,Pe,De,Be,st.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Oe,X,H.x,H.y,H.z,xe,Te,Pe,De,st.data)):B.texSubImage3D(Oe,X,H.x,H.y,H.z,xe,Te,Pe,De,Be,st),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ne),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ot),B.pixelStorei(B.UNPACK_SKIP_ROWS,mt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,un),X===0&&Y.generateMipmaps&&B.generateMipmap(Oe),_e.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){b=0,M=0,E=null,_e.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===po?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===lt?ei:Cl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?lt:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class M0 extends Kl{}M0.prototype.isWebGL1Renderer=!0;class S0 extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class E0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new L;class pa{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),r=Ze(r,this.array),a=Ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bi;const Yi=new L,Mi=new L,Si=new L,Ei=new fe,Ki=new fe,Jl=new at,Xr=new L,Zi=new L,$r=new L,du=new fe,gs=new fe,hu=new fe;class w0 extends _t{constructor(e=new Zl){if(super(),this.isSprite=!0,this.type="Sprite",bi===void 0){bi=new Lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new E0(t,5);bi.setIndex([0,1,2,0,2,3]),bi.setAttribute("position",new pa(i,3,0,!1)),bi.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=bi,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mi.setFromMatrixScale(this.matrixWorld),Jl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mi.multiplyScalar(-Si.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;qr(Xr.set(-.5,-.5,0),Si,s,Mi,r,a),qr(Zi.set(.5,-.5,0),Si,s,Mi,r,a),qr($r.set(.5,.5,0),Si,s,Mi,r,a),du.set(0,0),gs.set(1,0),hu.set(1,1);let o=e.ray.intersectTriangle(Xr,Zi,$r,!1,Yi);if(o===null&&(qr(Zi.set(-.5,.5,0),Si,s,Mi,r,a),gs.set(0,1),o=e.ray.intersectTriangle(Xr,$r,Zi,!1,Yi),o===null))return;const c=e.ray.origin.distanceTo(Yi);c<e.near||c>e.far||t.push({distance:c,point:Yi.clone(),uv:Gt.getInterpolation(Yi,Xr,Zi,$r,du,gs,hu,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qr(n,e,t,i,r,a){Ei.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ki.x=a*Ei.x-r*Ei.y,Ki.y=r*Ei.x+a*Ei.y):Ki.copy(Ei),n.copy(e),n.x+=Ki.x,n.y+=Ki.y,n.applyMatrix4(Jl)}class Ql extends ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fu=new L,pu=new L,mu=new at,vs=new ka,Yr=new Ta;class T0 extends _t{constructor(e=new Lt,t=new Ql){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)fu.fromBufferAttribute(t,r-1),pu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=fu.distanceTo(pu);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=a,e.ray.intersectsSphere(Yr)===!1)return;mu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(mu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=new L,l=new L,d=new L,f=new L,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const h=Math.max(0,s.start),x=Math.min(g.count,s.start+s.count);for(let y=h,_=x-1;y<_;y+=m){const b=g.getX(y),M=g.getX(y+1);if(u.fromBufferAttribute(p,b),l.fromBufferAttribute(p,M),vs.distanceSqToSegment(u,l,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(f);z<e.near||z>e.far||t.push({distance:z,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,s.start),x=Math.min(p.count,s.start+s.count);for(let y=h,_=x-1;y<_;y+=m){if(u.fromBufferAttribute(p,y),l.fromBufferAttribute(p,y+1),vs.distanceSqToSegment(u,l,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(f);M<e.near||M>e.far||t.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}class kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,c=a-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=i[r]-s,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(a-1);const l=i[r],f=i[r+1]-l,m=(s-l)/f;return(r+m)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),c=t||(s.isVector2?new fe:new L);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],a=[],s=[],o=new L,c=new at;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new L)}a[0]=new L,s[0]=new L;let u=Number.MAX_VALUE;const l=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);l<=u&&(u=l,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),s[m]=s[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(vt(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(c.makeRotationAxis(o,g))}s[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos(vt(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(m=-m);for(let g=1;g<=e;g++)a[g].applyMatrix4(c.makeRotationAxis(r[g],m*g)),s[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ed extends kn{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const i=t||new fe,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=u-this.aY;c=f*l-m*d+this.aX,u=f*d+m*l+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class k0 extends ed{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function bo(){let n=0,e=0,t=0,i=0;function r(a,s,o,c){n=a,e=o,t=-3*a+3*s-2*o-c,i=2*a-2*s+o+c}return{initCatmullRom:function(a,s,o,c,u){r(s,o,u*(o-a),u*(c-s))},initNonuniformCatmullRom:function(a,s,o,c,u,l,d){let f=(s-a)/u-(o-a)/(u+l)+(o-s)/l,m=(o-s)/l-(c-s)/(l+d)+(c-o)/d;f*=l,m*=l,r(s,o,f,m)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const Kr=new L,ys=new bo,_s=new bo,xs=new bo;class C0 extends kn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:c===0&&o===a-1&&(o=a-2,c=1);let u,l;this.closed||o>0?u=r[(o-1)%a]:(Kr.subVectors(r[0],r[1]).add(r[0]),u=Kr);const d=r[o%a],f=r[(o+1)%a];if(this.closed||o+2<a?l=r[(o+2)%a]:(Kr.subVectors(r[a-1],r[a-2]).add(r[a-1]),l=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(l),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),ys.initNonuniformCatmullRom(u.x,d.x,f.x,l.x,g,v,p),_s.initNonuniformCatmullRom(u.y,d.y,f.y,l.y,g,v,p),xs.initNonuniformCatmullRom(u.z,d.z,f.z,l.z,g,v,p)}else this.curveType==="catmullrom"&&(ys.initCatmullRom(u.x,d.x,f.x,l.x,this.tension),_s.initCatmullRom(u.y,d.y,f.y,l.y,this.tension),xs.initCatmullRom(u.z,d.z,f.z,l.z,this.tension));return i.set(ys.calc(c),_s.calc(c),xs.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gu(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,c=n*o;return(2*t-2*i+a+s)*c+(-3*t+3*i-2*a-s)*o+a*n+t}function R0(n,e){const t=1-n;return t*t*e}function z0(n,e){return 2*(1-n)*n*e}function P0(n,e){return n*n*e}function hr(n,e,t,i){return R0(n,e)+z0(n,t)+P0(n,i)}function L0(n,e){const t=1-n;return t*t*t*e}function D0(n,e){const t=1-n;return 3*t*t*n*e}function O0(n,e){return 3*(1-n)*n*n*e}function I0(n,e){return n*n*n*e}function fr(n,e,t,i,r){return L0(n,e)+D0(n,t)+O0(n,i)+I0(n,r)}class N0 extends kn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(fr(e,r.x,a.x,s.x,o.x),fr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class td extends kn{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(fr(e,r.x,a.x,s.x,o.x),fr(e,r.y,a.y,s.y,o.y),fr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U0 extends kn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F0 extends kn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends kn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(hr(e,r.x,a.x,s.x),hr(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mo extends kn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(hr(e,r.x,a.x,s.x),hr(e,r.y,a.y,s.y),hr(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,c=r[s===0?s:s-1],u=r[s],l=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(gu(o,c.x,u.x,l.x,d.x),gu(o,c.y,u.y,l.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var G0=Object.freeze({__proto__:null,ArcCurve:k0,CatmullRomCurve3:C0,CubicBezierCurve:N0,CubicBezierCurve3:td,EllipseCurve:ed,LineCurve:U0,LineCurve3:F0,QuadraticBezierCurve:B0,QuadraticBezierCurve3:Mo,SplineCurve:H0});class za extends Lt{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),a=Math.floor(a);const l=[],d=[],f=[],m=[];let g=0;const v=[],p=i/2;let h=0;x(),s===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function x(){const _=new L,b=new L;let M=0;const E=(t-e)/i;for(let z=0;z<=a;z++){const A=[],w=z/a,N=w*(t-e)+e;for(let U=0;U<=r;U++){const ee=U/r,k=ee*c+o,R=Math.sin(k),D=Math.cos(k);b.x=N*R,b.y=-w*i+p,b.z=N*D,d.push(b.x,b.y,b.z),_.set(R,E,D).normalize(),f.push(_.x,_.y,_.z),m.push(ee,1-w),A.push(g++)}v.push(A)}for(let z=0;z<r;z++)for(let A=0;A<a;A++){const w=v[A][z],N=v[A+1][z],U=v[A+1][z+1],ee=v[A][z+1];l.push(w,N,ee),l.push(N,U,ee),M+=6}u.addGroup(h,M,0),h+=M}function y(_){const b=g,M=new fe,E=new L;let z=0;const A=_===!0?e:t,w=_===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const N=g;for(let U=0;U<=r;U++){const k=U/r*c+o,R=Math.cos(k),D=Math.sin(k);E.x=A*D,E.y=p*w,E.z=A*R,d.push(E.x,E.y,E.z),f.push(0,w,0),M.x=R*.5+.5,M.y=D*.5*w+.5,m.push(M.x,M.y),g++}for(let U=0;U<r;U++){const ee=b+U,k=N+U;_===!0?l.push(k,k+1,ee):l.push(k+1,k,ee),z+=3}u.addGroup(h,z,_===!0?1:2),h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class So extends za{constructor(e=1,t=1,i=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new So(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Lt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(s+o,Math.PI);let u=0;const l=[],d=new L,f=new L,m=[],g=[],v=[],p=[];for(let h=0;h<=i;h++){const x=[],y=h/i;let _=0;h===0&&s===0?_=.5/t:h===i&&c===Math.PI&&(_=-.5/t);for(let b=0;b<=t;b++){const M=b/t;d.x=-e*Math.cos(r+M*a)*Math.sin(s+y*o),d.y=e*Math.cos(s+y*o),d.z=e*Math.sin(r+M*a)*Math.sin(s+y*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(M+_,1-y),x.push(u++)}l.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const y=l[h][x+1],_=l[h][x],b=l[h+1][x],M=l[h+1][x+1];(h!==0||s>0)&&m.push(y,_,M),(h!==i-1||c<Math.PI)&&m.push(_,b,M)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eo extends Lt{constructor(e=new Mo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,r=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new L,c=new L,u=new fe;let l=new L;const d=[],f=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function v(){for(let y=0;y<t;y++)p(y);p(a===!1?t:0),x(),h()}function p(y){l=e.getPointAt(y/t,l);const _=s.normals[y],b=s.binormals[y];for(let M=0;M<=r;M++){const E=M/r*Math.PI*2,z=Math.sin(E),A=-Math.cos(E);c.x=A*_.x+z*b.x,c.y=A*_.y+z*b.y,c.z=A*_.z+z*b.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=l.x+i*c.x,o.y=l.y+i*c.y,o.z=l.z+i*c.z,d.push(o.x,o.y,o.z)}}function h(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){const b=(r+1)*(y-1)+(_-1),M=(r+1)*y+(_-1),E=(r+1)*y+_,z=(r+1)*(y-1)+_;g.push(b,M,z),g.push(M,E,z)}}function x(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)u.x=y/t,u.y=_/r,m.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Eo(new G0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class V0 extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class W0{constructor(e,t,i){const r=this;let a=!1,s=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(l){o++,a===!1&&r.onStart!==void 0&&r.onStart(l,s,o),a=!0},this.itemEnd=function(l){s++,r.onProgress!==void 0&&r.onProgress(l,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return u.push(l,d),this},this.removeHandler=function(l){const d=u.indexOf(l);return d!==-1&&u.splice(d,2),this},this.getHandler=function(l){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],g=u[d+1];if(m.global&&(m.lastIndex=0),m.test(l))return g}return null}}}const j0=new W0;class wo{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wo.DEFAULT_MATERIAL_NAME="__DEFAULT";class X0 extends wo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=vu.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=gr("img");function c(){l(),vu.add(e,this),t&&t(this),a.manager.itemEnd(e)}function u(d){l(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class $0 extends wo{constructor(e){super(e)}load(e,t,i,r){const a=new zt,s=new X0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class nd extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const As=new at,yu=new L,_u=new L;class q0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),As.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(As),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(As)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y0 extends q0{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class K0 extends nd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z0 extends nd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class id{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xu(){return(typeof performance>"u"?Date:performance).now()}class rd{constructor(e,t,i=0,r=1/0){this.ray=new ka(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return js(e,this,i,t),i.sort(Au),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)js(e[r],this,i,t);return i.sort(Au),i}}function Au(n,e){return n.distance-e.distance}function js(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let a=0,s=r.length;a<s;a++)js(r[a],e,t,!0)}}class Xs{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const wi=new yn,Dn=new rd,Ji=new fe,bu=new L,Zr=new L,bs=new L,Mu=new at;class J0 extends nn{constructor(e,t,i){super(),i.style.touchAction="none";let r=null,a=null;const s=[],o=this;function c(){i.addEventListener("pointermove",m),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",v),i.addEventListener("pointerleave",v)}function u(){i.removeEventListener("pointermove",m),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",v),i.removeEventListener("pointerleave",v),i.style.cursor=""}function l(){u()}function d(){return e}function f(){return Dn}function m(h){if(o.enabled!==!1){if(p(h),Dn.setFromCamera(Ji,t),r){Dn.ray.intersectPlane(wi,Zr)&&r.position.copy(Zr.sub(bu).applyMatrix4(Mu)),o.dispatchEvent({type:"drag",object:r});return}if(h.pointerType==="mouse"||h.pointerType==="pen")if(s.length=0,Dn.setFromCamera(Ji,t),Dn.intersectObjects(e,o.recursive,s),s.length>0){const x=s[0].object;wi.setFromNormalAndCoplanarPoint(t.getWorldDirection(wi.normal),bs.setFromMatrixPosition(x.matrixWorld)),a!==x&&a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null),a!==x&&(o.dispatchEvent({type:"hoveron",object:x}),i.style.cursor="pointer",a=x)}else a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),i.style.cursor="auto",a=null)}}function g(h){o.enabled!==!1&&(p(h),s.length=0,Dn.setFromCamera(Ji,t),Dn.intersectObjects(e,o.recursive,s),s.length>0&&(r=o.transformGroup===!0?e[0]:s[0].object,wi.setFromNormalAndCoplanarPoint(t.getWorldDirection(wi.normal),bs.setFromMatrixPosition(r.matrixWorld)),Dn.ray.intersectPlane(wi,Zr)&&(Mu.copy(r.parent.matrixWorld).invert(),bu.copy(Zr).sub(bs.setFromMatrixPosition(r.matrixWorld))),i.style.cursor="move",o.dispatchEvent({type:"dragstart",object:r})))}function v(){o.enabled!==!1&&(r&&(o.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=a?"pointer":"auto")}function p(h){const x=i.getBoundingClientRect();Ji.x=(h.clientX-x.left)/x.width*2-1,Ji.y=-(h.clientY-x.top)/x.height*2+1}c(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=c,this.deactivate=u,this.dispose=l,this.getObjects=d,this.getRaycaster=f}}function Q0(n,e,t){var i,r=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var s,o=i.length,c,u=0,l=0,d=0;for(s=0;s<o;++s)c=i[s],u+=c.x||0,l+=c.y||0,d+=c.z||0;for(u=(u/o-n)*r,l=(l/o-e)*r,d=(d/o-t)*r,s=0;s<o;++s)c=i[s],u&&(c.x-=u),l&&(c.y-=l),d&&(c.z-=d)}return a.initialize=function(s){i=s},a.x=function(s){return arguments.length?(n=+s,a):n},a.y=function(s){return arguments.length?(e=+s,a):e},a.z=function(s){return arguments.length?(t=+s,a):t},a.strength=function(s){return arguments.length?(r=+s,a):r},a}function ey(n){const e=+this._x.call(null,n);return ad(this.cover(e),e,n)}function ad(n,e,t){if(isNaN(e))return n;var i,r=n._root,a={data:t},s=n._x0,o=n._x1,c,u,l,d,f;if(!r)return n._root=a,n;for(;r.length;)if((l=e>=(c=(s+o)/2))?s=c:o=c,i=r,!(r=r[d=+l]))return i[d]=a,n;if(u=+n._x.call(null,r.data),e===u)return a.next=r,i?i[d]=a:n._root=a,n;do i=i?i[d]=new Array(2):n._root=new Array(2),(l=e>=(c=(s+o)/2))?s=c:o=c;while((d=+l)==(f=+(u>=c)));return i[f]=r,i[d]=a,n}function ty(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let i=1/0,r=-1/0;for(let a=0,s;a<e;++a)isNaN(s=+this._x.call(null,n[a]))||(t[a]=s,s<i&&(i=s),s>r&&(r=s));if(i>r)return this;this.cover(i).cover(r);for(let a=0;a<e;++a)ad(this,t[a],n[a]);return this}function ny(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var i=t-e||1,r=this._root,a,s;e>n||n>=t;)switch(s=+(n<e),a=new Array(2),a[s]=r,r=a,i*=2,s){case 0:t=e+i;break;case 1:e=t-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=t,this}function iy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function ry(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function En(n,e,t){this.node=n,this.x0=e,this.x1=t}function ay(n,e){var t,i=this._x0,r,a,s=this._x1,o=[],c=this._root,u,l;for(c&&o.push(new En(c,i,s)),e==null?e=1/0:(i=n-e,s=n+e);u=o.pop();)if(!(!(c=u.node)||(r=u.x0)>s||(a=u.x1)<i))if(c.length){var d=(r+a)/2;o.push(new En(c[1],d,a),new En(c[0],r,d)),(l=+(n>=d))&&(u=o[o.length-1],o[o.length-1]=o[o.length-1-l],o[o.length-1-l]=u)}else{var f=Math.abs(n-+this._x.call(null,c.data));f<e&&(e=f,i=n-f,s=n+f,t=c.data)}return t}function sy(n){if(isNaN(c=+this._x.call(null,n)))return this;var e,t=this._root,i,r,a,s=this._x0,o=this._x1,c,u,l,d,f;if(!t)return this;if(t.length)for(;;){if((l=c>=(u=(s+o)/2))?s=u:o=u,e=t,!(t=t[d=+l]))return this;if(!t.length)break;e[d+1&1]&&(i=e,f=d)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[d]=a:delete e[d],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(i?i[f]=t:this._root=t),this):(this._root=a,this)}function oy(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function cy(){return this._root}function uy(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function ly(n){var e=[],t,i=this._root,r,a,s;for(i&&e.push(new En(i,this._x0,this._x1));t=e.pop();)if(!n(i=t.node,a=t.x0,s=t.x1)&&i.length){var o=(a+s)/2;(r=i[1])&&e.push(new En(r,o,s)),(r=i[0])&&e.push(new En(r,a,o))}return this}function dy(n){var e=[],t=[],i;for(this._root&&e.push(new En(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var a,s=i.x0,o=i.x1,c=(s+o)/2;(a=r[0])&&e.push(new En(a,s,c)),(a=r[1])&&e.push(new En(a,c,o))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.x1);return this}function hy(n){return n[0]}function fy(n){return arguments.length?(this._x=n,this):this._x}function sd(n,e){var t=new To(e??hy,NaN,NaN);return n==null?t:t.addAll(n)}function To(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function Su(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Dt=sd.prototype=To.prototype;Dt.copy=function(){var n=new To(this._x,this._x0,this._x1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Su(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=Su(i));return n};Dt.add=ey;Dt.addAll=ty;Dt.cover=ny;Dt.data=iy;Dt.extent=ry;Dt.find=ay;Dt.remove=sy;Dt.removeAll=oy;Dt.root=cy;Dt.size=uy;Dt.visit=ly;Dt.visitAfter=dy;Dt.x=fy;function py(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return od(this.cover(e,t),e,t,n)}function od(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,a=n._root,s={data:i},o=n._x0,c=n._y0,u=n._x1,l=n._y1,d,f,m,g,v,p,h,x;if(!a)return n._root=s,n;for(;a.length;)if((v=e>=(d=(o+u)/2))?o=d:u=d,(p=t>=(f=(c+l)/2))?c=f:l=f,r=a,!(a=a[h=p<<1|v]))return r[h]=s,n;if(m=+n._x.call(null,a.data),g=+n._y.call(null,a.data),e===m&&t===g)return s.next=a,r?r[h]=s:n._root=s,n;do r=r?r[h]=new Array(4):n._root=new Array(4),(v=e>=(d=(o+u)/2))?o=d:u=d,(p=t>=(f=(c+l)/2))?c=f:l=f;while((h=p<<1|v)===(x=(g>=f)<<1|m>=d));return r[x]=a,r[h]=s,n}function my(n){var e,t,i=n.length,r,a,s=new Array(i),o=new Array(i),c=1/0,u=1/0,l=-1/0,d=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(s[t]=r,o[t]=a,r<c&&(c=r),r>l&&(l=r),a<u&&(u=a),a>d&&(d=a));if(c>l||u>d)return this;for(this.cover(c,u).cover(l,d),t=0;t<i;++t)od(this,s[t],o[t],n[t]);return this}function gy(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,a=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,a=(i=Math.floor(e))+1;else{for(var s=r-t||1,o=this._root,c,u;t>n||n>=r||i>e||e>=a;)switch(u=(e<i)<<1|n<t,c=new Array(4),c[u]=o,o=c,s*=2,u){case 0:r=t+s,a=i+s;break;case 1:t=r-s,a=i+s;break;case 2:r=t+s,i=a-s;break;case 3:t=r-s,i=a-s;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=i,this._x1=r,this._y1=a,this}function vy(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function yy(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ct(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function _y(n,e,t){var i,r=this._x0,a=this._y0,s,o,c,u,l=this._x1,d=this._y1,f=[],m=this._root,g,v;for(m&&f.push(new Ct(m,r,a,l,d)),t==null?t=1/0:(r=n-t,a=e-t,l=n+t,d=e+t,t*=t);g=f.pop();)if(!(!(m=g.node)||(s=g.x0)>l||(o=g.y0)>d||(c=g.x1)<r||(u=g.y1)<a))if(m.length){var p=(s+c)/2,h=(o+u)/2;f.push(new Ct(m[3],p,h,c,u),new Ct(m[2],s,h,p,u),new Ct(m[1],p,o,c,h),new Ct(m[0],s,o,p,h)),(v=(e>=h)<<1|n>=p)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var x=n-+this._x.call(null,m.data),y=e-+this._y.call(null,m.data),_=x*x+y*y;if(_<t){var b=Math.sqrt(t=_);r=n-b,a=e-b,l=n+b,d=e+b,i=m.data}}return i}function xy(n){if(isNaN(l=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n)))return this;var e,t=this._root,i,r,a,s=this._x0,o=this._y0,c=this._x1,u=this._y1,l,d,f,m,g,v,p,h;if(!t)return this;if(t.length)for(;;){if((g=l>=(f=(s+c)/2))?s=f:c=f,(v=d>=(m=(o+u)/2))?o=m:u=m,e=t,!(t=t[p=v<<1|g]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,h=p)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[p]=a:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[h]=t:this._root=t),this):(this._root=a,this)}function Ay(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function by(){return this._root}function My(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Sy(n){var e=[],t,i=this._root,r,a,s,o,c;for(i&&e.push(new Ct(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,a=t.x0,s=t.y0,o=t.x1,c=t.y1)&&i.length){var u=(a+o)/2,l=(s+c)/2;(r=i[3])&&e.push(new Ct(r,u,l,o,c)),(r=i[2])&&e.push(new Ct(r,a,l,u,c)),(r=i[1])&&e.push(new Ct(r,u,s,o,l)),(r=i[0])&&e.push(new Ct(r,a,s,u,l))}return this}function Ey(n){var e=[],t=[],i;for(this._root&&e.push(new Ct(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var a,s=i.x0,o=i.y0,c=i.x1,u=i.y1,l=(s+c)/2,d=(o+u)/2;(a=r[0])&&e.push(new Ct(a,s,o,l,d)),(a=r[1])&&e.push(new Ct(a,l,o,c,d)),(a=r[2])&&e.push(new Ct(a,s,d,l,u)),(a=r[3])&&e.push(new Ct(a,l,d,c,u))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function wy(n){return n[0]}function Ty(n){return arguments.length?(this._x=n,this):this._x}function ky(n){return n[1]}function Cy(n){return arguments.length?(this._y=n,this):this._y}function cd(n,e,t){var i=new ko(e??wy,t??ky,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function ko(n,e,t,i,r,a){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=a,this._root=void 0}function Eu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Pt=cd.prototype=ko.prototype;Pt.copy=function(){var n=new ko(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Eu(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Eu(i));return n};Pt.add=py;Pt.addAll=my;Pt.cover=gy;Pt.data=vy;Pt.extent=yy;Pt.find=_y;Pt.remove=xy;Pt.removeAll=Ay;Pt.root=by;Pt.size=My;Pt.visit=Sy;Pt.visitAfter=Ey;Pt.x=Ty;Pt.y=Cy;function Ry(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),i=+this._z.call(null,n);return ud(this.cover(e,t,i),e,t,i,n)}function ud(n,e,t,i,r){if(isNaN(e)||isNaN(t)||isNaN(i))return n;var a,s=n._root,o={data:r},c=n._x0,u=n._y0,l=n._z0,d=n._x1,f=n._y1,m=n._z1,g,v,p,h,x,y,_,b,M,E,z;if(!s)return n._root=o,n;for(;s.length;)if((_=e>=(g=(c+d)/2))?c=g:d=g,(b=t>=(v=(u+f)/2))?u=v:f=v,(M=i>=(p=(l+m)/2))?l=p:m=p,a=s,!(s=s[E=M<<2|b<<1|_]))return a[E]=o,n;if(h=+n._x.call(null,s.data),x=+n._y.call(null,s.data),y=+n._z.call(null,s.data),e===h&&t===x&&i===y)return o.next=s,a?a[E]=o:n._root=o,n;do a=a?a[E]=new Array(8):n._root=new Array(8),(_=e>=(g=(c+d)/2))?c=g:d=g,(b=t>=(v=(u+f)/2))?u=v:f=v,(M=i>=(p=(l+m)/2))?l=p:m=p;while((E=M<<2|b<<1|_)===(z=(y>=p)<<2|(x>=v)<<1|h>=g));return a[z]=s,a[E]=o,n}function zy(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let a=1/0,s=1/0,o=1/0,c=-1/0,u=-1/0,l=-1/0;for(let d=0,f,m,g,v;d<e;++d)isNaN(m=+this._x.call(null,f=n[d]))||isNaN(g=+this._y.call(null,f))||isNaN(v=+this._z.call(null,f))||(t[d]=m,i[d]=g,r[d]=v,m<a&&(a=m),m>c&&(c=m),g<s&&(s=g),g>u&&(u=g),v<o&&(o=v),v>l&&(l=v));if(a>c||s>u||o>l)return this;this.cover(a,s,o).cover(c,u,l);for(let d=0;d<e;++d)ud(this,t[d],i[d],r[d],n[d]);return this}function Py(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var i=this._x0,r=this._y0,a=this._z0,s=this._x1,o=this._y1,c=this._z1;if(isNaN(i))s=(i=Math.floor(n))+1,o=(r=Math.floor(e))+1,c=(a=Math.floor(t))+1;else{for(var u=s-i||1,l=this._root,d,f;i>n||n>=s||r>e||e>=o||a>t||t>=c;)switch(f=(t<a)<<2|(e<r)<<1|n<i,d=new Array(8),d[f]=l,l=d,u*=2,f){case 0:s=i+u,o=r+u,c=a+u;break;case 1:i=s-u,o=r+u,c=a+u;break;case 2:s=i+u,r=o-u,c=a+u;break;case 3:i=s-u,r=o-u,c=a+u;break;case 4:s=i+u,o=r+u,a=c-u;break;case 5:i=s-u,o=r+u,a=c-u;break;case 6:s=i+u,r=o-u,a=c-u;break;case 7:i=s-u,r=o-u,a=c-u;break}this._root&&this._root.length&&(this._root=l)}return this._x0=i,this._y0=r,this._z0=a,this._x1=s,this._y1=o,this._z1=c,this}function Ly(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function Dy(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Qe(n,e,t,i,r,a,s){this.node=n,this.x0=e,this.y0=t,this.z0=i,this.x1=r,this.y1=a,this.z1=s}function Oy(n,e,t,i){var r,a=this._x0,s=this._y0,o=this._z0,c,u,l,d,f,m,g=this._x1,v=this._y1,p=this._z1,h=[],x=this._root,y,_;for(x&&h.push(new Qe(x,a,s,o,g,v,p)),i==null?i=1/0:(a=n-i,s=e-i,o=t-i,g=n+i,v=e+i,p=t+i,i*=i);y=h.pop();)if(!(!(x=y.node)||(c=y.x0)>g||(u=y.y0)>v||(l=y.z0)>p||(d=y.x1)<a||(f=y.y1)<s||(m=y.z1)<o))if(x.length){var b=(c+d)/2,M=(u+f)/2,E=(l+m)/2;h.push(new Qe(x[7],b,M,E,d,f,m),new Qe(x[6],c,M,E,b,f,m),new Qe(x[5],b,u,E,d,M,m),new Qe(x[4],c,u,E,b,M,m),new Qe(x[3],b,M,l,d,f,E),new Qe(x[2],c,M,l,b,f,E),new Qe(x[1],b,u,l,d,M,E),new Qe(x[0],c,u,l,b,M,E)),(_=(t>=E)<<2|(e>=M)<<1|n>=b)&&(y=h[h.length-1],h[h.length-1]=h[h.length-1-_],h[h.length-1-_]=y)}else{var z=n-+this._x.call(null,x.data),A=e-+this._y.call(null,x.data),w=t-+this._z.call(null,x.data),N=z*z+A*A+w*w;if(N<i){var U=Math.sqrt(i=N);a=n-U,s=e-U,o=t-U,g=n+U,v=e+U,p=t+U,r=x.data}}return r}function Iy(n){if(isNaN(f=+this._x.call(null,n))||isNaN(m=+this._y.call(null,n))||isNaN(g=+this._z.call(null,n)))return this;var e,t=this._root,i,r,a,s=this._x0,o=this._y0,c=this._z0,u=this._x1,l=this._y1,d=this._z1,f,m,g,v,p,h,x,y,_,b,M;if(!t)return this;if(t.length)for(;;){if((x=f>=(v=(s+u)/2))?s=v:u=v,(y=m>=(p=(o+l)/2))?o=p:l=p,(_=g>=(h=(c+d)/2))?c=h:d=h,e=t,!(t=t[b=_<<2|y<<1|x]))return this;if(!t.length)break;(e[b+1&7]||e[b+2&7]||e[b+3&7]||e[b+4&7]||e[b+5&7]||e[b+6&7]||e[b+7&7])&&(i=e,M=b)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,r?(a?r.next=a:delete r.next,this):e?(a?e[b]=a:delete e[b],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[M]=t:this._root=t),this):(this._root=a,this)}function Ny(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Uy(){return this._root}function Fy(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function By(n){var e=[],t,i=this._root,r,a,s,o,c,u,l;for(i&&e.push(new Qe(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(i=t.node,a=t.x0,s=t.y0,o=t.z0,c=t.x1,u=t.y1,l=t.z1)&&i.length){var d=(a+c)/2,f=(s+u)/2,m=(o+l)/2;(r=i[7])&&e.push(new Qe(r,d,f,m,c,u,l)),(r=i[6])&&e.push(new Qe(r,a,f,m,d,u,l)),(r=i[5])&&e.push(new Qe(r,d,s,m,c,f,l)),(r=i[4])&&e.push(new Qe(r,a,s,m,d,f,l)),(r=i[3])&&e.push(new Qe(r,d,f,o,c,u,m)),(r=i[2])&&e.push(new Qe(r,a,f,o,d,u,m)),(r=i[1])&&e.push(new Qe(r,d,s,o,c,f,m)),(r=i[0])&&e.push(new Qe(r,a,s,o,d,f,m))}return this}function Hy(n){var e=[],t=[],i;for(this._root&&e.push(new Qe(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var a,s=i.x0,o=i.y0,c=i.z0,u=i.x1,l=i.y1,d=i.z1,f=(s+u)/2,m=(o+l)/2,g=(c+d)/2;(a=r[0])&&e.push(new Qe(a,s,o,c,f,m,g)),(a=r[1])&&e.push(new Qe(a,f,o,c,u,m,g)),(a=r[2])&&e.push(new Qe(a,s,m,c,f,l,g)),(a=r[3])&&e.push(new Qe(a,f,m,c,u,l,g)),(a=r[4])&&e.push(new Qe(a,s,o,g,f,m,d)),(a=r[5])&&e.push(new Qe(a,f,o,g,u,m,d)),(a=r[6])&&e.push(new Qe(a,s,m,g,f,l,d)),(a=r[7])&&e.push(new Qe(a,f,m,g,u,l,d))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function Gy(n){return n[0]}function Vy(n){return arguments.length?(this._x=n,this):this._x}function Wy(n){return n[1]}function jy(n){return arguments.length?(this._y=n,this):this._y}function Xy(n){return n[2]}function $y(n){return arguments.length?(this._z=n,this):this._z}function ld(n,e,t,i){var r=new Co(e??Gy,t??Wy,i??Xy,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Co(n,e,t,i,r,a,s,o,c){this._x=n,this._y=e,this._z=t,this._x0=i,this._y0=r,this._z0=a,this._x1=s,this._y1=o,this._z1=c,this._root=void 0}function wu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Mt=ld.prototype=Co.prototype;Mt.copy=function(){var n=new Co(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=wu(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=wu(i));return n};Mt.add=Ry;Mt.addAll=zy;Mt.cover=Py;Mt.data=Ly;Mt.extent=Dy;Mt.find=Oy;Mt.remove=Iy;Mt.removeAll=Ny;Mt.root=Uy;Mt.size=Fy;Mt.visit=By;Mt.visitAfter=Hy;Mt.x=Vy;Mt.y=jy;Mt.z=$y;function bn(n){return function(){return n}}function _n(n){return(n()-.5)*1e-6}function qy(n){return n.index}function Tu(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function Yy(n){var e=qy,t=f,i,r=bn(30),a,s,o,c,u,l,d=1;n==null&&(n=[]);function f(h){return 1/Math.min(c[h.source.index],c[h.target.index])}function m(h){for(var x=0,y=n.length;x<d;++x)for(var _=0,b,M,E,z=0,A=0,w=0,N,U;_<y;++_)b=n[_],M=b.source,E=b.target,z=E.x+E.vx-M.x-M.vx||_n(l),o>1&&(A=E.y+E.vy-M.y-M.vy||_n(l)),o>2&&(w=E.z+E.vz-M.z-M.vz||_n(l)),N=Math.sqrt(z*z+A*A+w*w),N=(N-a[_])/N*h*i[_],z*=N,A*=N,w*=N,E.vx-=z*(U=u[_]),o>1&&(E.vy-=A*U),o>2&&(E.vz-=w*U),M.vx+=z*(U=1-U),o>1&&(M.vy+=A*U),o>2&&(M.vz+=w*U)}function g(){if(s){var h,x=s.length,y=n.length,_=new Map(s.map((M,E)=>[e(M,E,s),M])),b;for(h=0,c=new Array(x);h<y;++h)b=n[h],b.index=h,typeof b.source!="object"&&(b.source=Tu(_,b.source)),typeof b.target!="object"&&(b.target=Tu(_,b.target)),c[b.source.index]=(c[b.source.index]||0)+1,c[b.target.index]=(c[b.target.index]||0)+1;for(h=0,u=new Array(y);h<y;++h)b=n[h],u[h]=c[b.source.index]/(c[b.source.index]+c[b.target.index]);i=new Array(y),v(),a=new Array(y),p()}}function v(){if(s)for(var h=0,x=n.length;h<x;++h)i[h]=+t(n[h],h,n)}function p(){if(s)for(var h=0,x=n.length;h<x;++h)a[h]=+r(n[h],h,n)}return m.initialize=function(h,...x){s=h,l=x.find(y=>typeof y=="function")||Math.random,o=x.find(y=>[1,2,3].includes(y))||2,g()},m.links=function(h){return arguments.length?(n=h,g(),m):n},m.id=function(h){return arguments.length?(e=h,m):e},m.iterations=function(h){return arguments.length?(d=+h,m):d},m.strength=function(h){return arguments.length?(t=typeof h=="function"?h:bn(+h),v(),m):t},m.distance=function(h){return arguments.length?(r=typeof h=="function"?h:bn(+h),p(),m):r},m}var Ky={value:()=>{}};function dd(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new ra(t)}function ra(n){this._=n}function Zy(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}ra.prototype=dd.prototype={constructor:ra,on:function(n,e){var t=this._,i=Zy(n+"",t),r,a=-1,s=i.length;if(arguments.length<2){for(;++a<s;)if((r=(n=i[a]).type)&&(r=Jy(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<s;)if(r=(n=i[a]).type)t[r]=ku(t[r],n.name,e);else if(e==null)for(r in t)t[r]=ku(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ra(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,a;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],i=0,r=a.length;i<r;++i)a[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,a=i.length;r<a;++r)i[r].value.apply(e,t)}};function Jy(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function ku(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=Ky,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Hi=0,ar=0,Qi=0,hd=1e3,ma,sr,ga=0,ni=0,La=0,vr=typeof performance=="object"&&performance.now?performance:Date,fd=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function pd(){return ni||(fd(Qy),ni=vr.now()+La)}function Qy(){ni=0}function $s(){this._call=this._time=this._next=null}$s.prototype=md.prototype={constructor:$s,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?pd():+t)+(e==null?0:+e),!this._next&&sr!==this&&(sr?sr._next=this:ma=this,sr=this),this._call=n,this._time=t,qs()},stop:function(){this._call&&(this._call=null,this._time=1/0,qs())}};function md(n,e,t){var i=new $s;return i.restart(n,e,t),i}function e_(){pd(),++Hi;for(var n=ma,e;n;)(e=ni-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Hi}function Cu(){ni=(ga=vr.now())+La,Hi=ar=0;try{e_()}finally{Hi=0,n_(),ni=0}}function t_(){var n=vr.now(),e=n-ga;e>hd&&(La-=e,ga=n)}function n_(){for(var n,e=ma,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ma=t);sr=n,qs(i)}function qs(n){if(!Hi){ar&&(ar=clearTimeout(ar));var e=n-ni;e>24?(n<1/0&&(ar=setTimeout(Cu,n-vr.now()-La)),Qi&&(Qi=clearInterval(Qi))):(Qi||(ga=vr.now(),Qi=setInterval(t_,hd)),Hi=1,fd(Cu))}}const i_=1664525,r_=1013904223,Ru=4294967296;function a_(){let n=1;return()=>(n=(i_*n+r_)%Ru)/Ru}var zu=3;function Ms(n){return n.x}function Pu(n){return n.y}function s_(n){return n.z}var o_=10,c_=Math.PI*(3-Math.sqrt(5)),u_=Math.PI*20/(9+Math.sqrt(221));function l_(n,e){e=e||2;var t=Math.min(zu,Math.max(1,Math.round(e))),i,r=1,a=.001,s=1-Math.pow(a,1/300),o=0,c=.6,u=new Map,l=md(m),d=dd("tick","end"),f=a_();n==null&&(n=[]);function m(){g(),d.call("tick",i),r<a&&(l.stop(),d.call("end",i))}function g(h){var x,y=n.length,_;h===void 0&&(h=1);for(var b=0;b<h;++b)for(r+=(o-r)*s,u.forEach(function(M){M(r)}),x=0;x<y;++x)_=n[x],_.fx==null?_.x+=_.vx*=c:(_.x=_.fx,_.vx=0),t>1&&(_.fy==null?_.y+=_.vy*=c:(_.y=_.fy,_.vy=0)),t>2&&(_.fz==null?_.z+=_.vz*=c:(_.z=_.fz,_.vz=0));return i}function v(){for(var h=0,x=n.length,y;h<x;++h){if(y=n[h],y.index=h,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),y.fz!=null&&(y.z=y.fz),isNaN(y.x)||t>1&&isNaN(y.y)||t>2&&isNaN(y.z)){var _=o_*(t>2?Math.cbrt(.5+h):t>1?Math.sqrt(.5+h):h),b=h*c_,M=h*u_;t===1?y.x=_:t===2?(y.x=_*Math.cos(b),y.y=_*Math.sin(b)):(y.x=_*Math.sin(b)*Math.cos(M),y.y=_*Math.cos(b),y.z=_*Math.sin(b)*Math.sin(M))}(isNaN(y.vx)||t>1&&isNaN(y.vy)||t>2&&isNaN(y.vz))&&(y.vx=0,t>1&&(y.vy=0),t>2&&(y.vz=0))}}function p(h){return h.initialize&&h.initialize(n,f,t),h}return v(),i={tick:g,restart:function(){return l.restart(m),i},stop:function(){return l.stop(),i},numDimensions:function(h){return arguments.length?(t=Math.min(zu,Math.max(1,Math.round(h))),u.forEach(p),i):t},nodes:function(h){return arguments.length?(n=h,v(),u.forEach(p),i):n},alpha:function(h){return arguments.length?(r=+h,i):r},alphaMin:function(h){return arguments.length?(a=+h,i):a},alphaDecay:function(h){return arguments.length?(s=+h,i):+s},alphaTarget:function(h){return arguments.length?(o=+h,i):o},velocityDecay:function(h){return arguments.length?(c=1-h,i):1-c},randomSource:function(h){return arguments.length?(f=h,u.forEach(p),i):f},force:function(h,x){return arguments.length>1?(x==null?u.delete(h):u.set(h,p(x)),i):u.get(h)},find:function(){var h=Array.prototype.slice.call(arguments),x=h.shift()||0,y=(t>1?h.shift():null)||0,_=(t>2?h.shift():null)||0,b=h.shift()||1/0,M=0,E=n.length,z,A,w,N,U,ee;for(b*=b,M=0;M<E;++M)U=n[M],z=x-U.x,A=y-(U.y||0),w=_-(U.z||0),N=z*z+A*A+w*w,N<b&&(ee=U,b=N);return ee},on:function(h,x){return arguments.length>1?(d.on(h,x),i):d.on(h)}}}function d_(){var n,e,t,i,r,a=bn(-30),s,o=1,c=1/0,u=.81;function l(g){var v,p=n.length,h=(e===1?sd(n,Ms):e===2?cd(n,Ms,Pu):e===3?ld(n,Ms,Pu,s_):null).visitAfter(f);for(r=g,v=0;v<p;++v)t=n[v],h.visit(m)}function d(){if(n){var g,v=n.length,p;for(s=new Array(v),g=0;g<v;++g)p=n[g],s[p.index]=+a(p,g,n)}}function f(g){var v=0,p,h,x=0,y,_,b,M,E=g.length;if(E){for(y=_=b=M=0;M<E;++M)(p=g[M])&&(h=Math.abs(p.value))&&(v+=p.value,x+=h,y+=h*(p.x||0),_+=h*(p.y||0),b+=h*(p.z||0));v*=Math.sqrt(4/E),g.x=y/x,e>1&&(g.y=_/x),e>2&&(g.z=b/x)}else{p=g,p.x=p.data.x,e>1&&(p.y=p.data.y),e>2&&(p.z=p.data.z);do v+=s[p.data.index];while(p=p.next)}g.value=v}function m(g,v,p,h,x){if(!g.value)return!0;var y=[p,h,x][e-1],_=g.x-t.x,b=e>1?g.y-t.y:0,M=e>2?g.z-t.z:0,E=y-v,z=_*_+b*b+M*M;if(E*E/u<z)return z<c&&(_===0&&(_=_n(i),z+=_*_),e>1&&b===0&&(b=_n(i),z+=b*b),e>2&&M===0&&(M=_n(i),z+=M*M),z<o&&(z=Math.sqrt(o*z)),t.vx+=_*g.value*r/z,e>1&&(t.vy+=b*g.value*r/z),e>2&&(t.vz+=M*g.value*r/z)),!0;if(g.length||z>=c)return;(g.data!==t||g.next)&&(_===0&&(_=_n(i),z+=_*_),e>1&&b===0&&(b=_n(i),z+=b*b),e>2&&M===0&&(M=_n(i),z+=M*M),z<o&&(z=Math.sqrt(o*z)));do g.data!==t&&(E=s[g.data.index]*r/z,t.vx+=_*E,e>1&&(t.vy+=b*E),e>2&&(t.vz+=M*E));while(g=g.next)}return l.initialize=function(g,...v){n=g,i=v.find(p=>typeof p=="function")||Math.random,e=v.find(p=>[1,2,3].includes(p))||2,d()},l.strength=function(g){return arguments.length?(a=typeof g=="function"?g:bn(+g),d(),l):a},l.distanceMin=function(g){return arguments.length?(o=g*g,l):Math.sqrt(o)},l.distanceMax=function(g){return arguments.length?(c=g*g,l):Math.sqrt(c)},l.theta=function(g){return arguments.length?(u=g*g,l):Math.sqrt(u)},l}function h_(n,e,t,i){var r,a,s=bn(.1),o,c;typeof n!="function"&&(n=bn(+n)),e==null&&(e=0),t==null&&(t=0),i==null&&(i=0);function u(d){for(var f=0,m=r.length;f<m;++f){var g=r[f],v=g.x-e||1e-6,p=(g.y||0)-t||1e-6,h=(g.z||0)-i||1e-6,x=Math.sqrt(v*v+p*p+h*h),y=(c[f]-x)*o[f]*d/x;g.vx+=v*y,a>1&&(g.vy+=p*y),a>2&&(g.vz+=h*y)}}function l(){if(r){var d,f=r.length;for(o=new Array(f),c=new Array(f),d=0;d<f;++d)c[d]=+n(r[d],d,r),o[d]=isNaN(c[d])?0:+s(r[d],d,r)}}return u.initialize=function(d,...f){r=d,a=f.find(m=>[1,2,3].includes(m))||2,l()},u.strength=function(d){return arguments.length?(s=typeof d=="function"?d:bn(+d),l(),u):s},u.radius=function(d){return arguments.length?(n=typeof d=="function"?d:bn(+d),l(),u):n},u.x=function(d){return arguments.length?(e=+d,u):e},u.y=function(d){return arguments.length?(t=+d,u):t},u.z=function(d){return arguments.length?(i=+d,u):i},u}function gd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ro=function(e){p_(e);var t=f_(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function f_(n){var e=Object.create(null);return{on:function(t,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:i,ctx:r}),n},off:function(t,i){var r=typeof t>"u";if(r)return e=Object.create(null),n;if(e[t]){var a=typeof i!="function";if(a)delete e[t];else for(var s=e[t],o=0;o<s.length;++o)s[o].callback===i&&s.splice(o,1)}return n},fire:function(t){var i=e[t];if(!i)return n;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var a=0;a<i.length;++a){var s=i[a];s.callback.apply(s.ctx,r)}return n}}}function p_(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var m_=v_,g_=Ro;function v_(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,i={},r=0,a=n.multigraph?_:y,s=[],o=D,c=D,u=D,l=D,d={version:20,addNode:v,addLink:x,removeLink:z,removeNode:h,getNode:p,getNodeCount:b,getLinkCount:M,getEdgeCount:M,getLinksCount:M,getNodesCount:b,getLinks:E,forEachNode:te,forEachLinkedNode:ee,forEachLink:U,beginUpdate:u,endUpdate:l,clear:N,hasLink:w,hasNode:p,getLink:w};return g_(d),f(),d;function f(){var F=d.on;d.on=$;function $(){return d.beginUpdate=u=K,d.endUpdate=l=J,o=m,c=g,d.on=F,F.apply(d,arguments)}}function m(F,$){s.push({link:F,changeType:$})}function g(F,$){s.push({node:F,changeType:$})}function v(F,$){if(F===void 0)throw new Error("Invalid node identifier");u();var Q=p(F);return Q?(Q.data=$,c(Q,"update")):(Q=new y_(F,$),c(Q,"add")),e.set(F,Q),l(),Q}function p(F){return e.get(F)}function h(F){var $=p(F);if(!$)return!1;u();var Q=$.links;return Q&&(Q.forEach(A),$.links=null),e.delete(F),c($,"remove"),l(),!0}function x(F,$,Q){u();var W=p(F)||v(F),G=p($)||v($),V=a(F,$,Q),ne=t.has(V.id);return t.set(V.id,V),Lu(W,V),F!==$&&Lu(G,V),o(V,ne?"update":"add"),l(),V}function y(F,$,Q){var W=Jr(F,$),G=t.get(W);return G?(G.data=Q,G):new Du(F,$,Q,W)}function _(F,$,Q){var W=Jr(F,$),G=i.hasOwnProperty(W);if(G||w(F,$)){G||(i[W]=0);var V="@"+ ++i[W];W=Jr(F+V,$+V)}return new Du(F,$,Q,W)}function b(){return e.size}function M(){return t.size}function E(F){var $=p(F);return $?$.links:null}function z(F,$){return $!==void 0&&(F=w(F,$)),A(F)}function A(F){if(!F||!t.get(F.id))return!1;u(),t.delete(F.id);var $=p(F.fromId),Q=p(F.toId);return $&&$.links.delete(F),Q&&Q.links.delete(F),o(F,"remove"),l(),!0}function w(F,$){if(!(F===void 0||$===void 0))return t.get(Jr(F,$))}function N(){u(),te(function(F){h(F.id)}),l()}function U(F){if(typeof F=="function")for(var $=t.values(),Q=$.next();!Q.done;){if(F(Q.value))return!0;Q=$.next()}}function ee(F,$,Q){var W=p(F);if(W&&W.links&&typeof $=="function")return Q?R(W.links,F,$):k(W.links,F,$)}function k(F,$,Q){for(var W,G=F.values(),V=G.next();!V.done;){var ne=V.value,I=ne.fromId===$?ne.toId:ne.fromId;if(W=Q(e.get(I),ne),W)return!0;V=G.next()}}function R(F,$,Q){for(var W,G=F.values(),V=G.next();!V.done;){var ne=V.value;if(ne.fromId===$&&(W=Q(e.get(ne.toId),ne),W))return!0;V=G.next()}}function D(){}function K(){r+=1}function J(){r-=1,r===0&&s.length>0&&(d.fire("changed",s),s.length=0)}function te(F){if(typeof F!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+F);for(var $=e.values(),Q=$.next();!Q.done;){if(F(Q.value))return!0;Q=$.next()}}}function y_(n,e){this.id=n,this.links=null,this.data=e}function Lu(n,e){n.links?n.links.add(e):n.links=new Set([e])}function Du(n,e,t,i){this.fromId=n,this.toId=e,this.data=t,this.id=i}function Jr(n,e){return n.toString()+"👉 "+e.toString()}const __=gd(m_);var zo={exports:{}},xr={exports:{}},vd=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const x_=vd;var Vi=function(e){return t;function t(i,r){let a=r&&r.indent||0,s=r&&r.join!==void 0?r.join:`
`,o=Array(a+1).join(" "),c=[];for(let u=0;u<e;++u){let l=x_(u),d=u===0?"":o;c.push(d+i.replace(/{var}/g,l))}return c.join(s)}};const yd=Vi;xr.exports=A_;xr.exports.generateCreateBodyFunctionBody=_d;xr.exports.getVectorCode=Ad;xr.exports.getBodyCode=xd;function A_(n,e){let t=_d(n,e),{Body:i}=new Function(t)();return i}function _d(n,e){return`
${Ad(n,e)}
${xd(n)}
return {Body: Body, Vector: Vector};
`}function xd(n){let e=yd(n),t=e("{var}",{join:", "});return`
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
};`}function Ad(n,e){let t=yd(n),i="";return e&&(i=`${t(`
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
  };`}var b_=xr.exports,Gn={exports:{}};const Po=Vi,On=vd;Gn.exports=M_;Gn.exports.generateQuadTreeFunctionBody=bd;Gn.exports.getInsertStackCode=Td;Gn.exports.getQuadNodeCode=wd;Gn.exports.isSamePosition=Md;Gn.exports.getChildBodyCode=Ed;Gn.exports.setChildBodyCode=Sd;function M_(n){let e=bd(n);return new Function(e)()}function bd(n){let e=Po(n),t=Math.pow(2,n);return`
${Td()}
${wd(n)}
${Md(n)}
${Ed(n)}
${Sd(n)}

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
${s("      node.")}
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
        if ((node.max_${On(0)} - node.min_${On(0)}) / r < theta) {
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

`;function r(o){let c=[],u=Array(o+1).join(" ");for(let l=0;l<n;++l)c.push(u+`if (${On(l)} > max_${On(l)}) {`),c.push(u+`  quadIdx = quadIdx + ${Math.pow(2,l)};`),c.push(u+`  min_${On(l)} = max_${On(l)};`),c.push(u+`  max_${On(l)} = node.max_${On(l)};`),c.push(u+"}");return c.join(`
`)}function a(){let o=Array(11).join(" "),c=[];for(let u=0;u<t;++u)c.push(o+`if (node.quad${u}) {`),c.push(o+`  queue[pushIdx] = node.quad${u};`),c.push(o+"  queueLength += 1;"),c.push(o+"  pushIdx += 1;"),c.push(o+"}");return c.join(`
`)}function s(o){let c=[];for(let u=0;u<t;++u)c.push(`${o}quad${u} = null;`);return c.join(`
`)}}function Md(n){let e=Po(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function Sd(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let i=[];for(let r=0;r<e;++r){let a=r===0?"  ":"  else ";i.push(`${a}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function Ed(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],i=Math.pow(2,n);for(let r=0;r<i;++r)t.push(`  if (idx === ${r}) return node.quad${r};`);return t.join(`
`)}}function wd(n){let e=Po(n),t=Math.pow(2,n);var i=`
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
`;return i;function r(a){let s=[];for(let o=0;o<t;++o)s.push(`${a}quad${o} = null;`);return s.join(`
`)}}function Td(){return`
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
`}var S_=Gn.exports,Lo={exports:{}};Lo.exports=w_;Lo.exports.generateFunctionBody=kd;const E_=Vi;function w_(n){let e=kd(n);return new Function("bodies","settings","random",e)}function kd(n){let e=E_(n);return`
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
`}var T_=Lo.exports,Do={exports:{}};const k_=Vi;Do.exports=C_;Do.exports.generateCreateDragForceFunctionBody=Cd;function C_(n){let e=Cd(n);return new Function("options",e)}function Cd(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${k_(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var R_=Do.exports,Oo={exports:{}};const z_=Vi;Oo.exports=P_;Oo.exports.generateCreateSpringForceFunctionBody=Rd;function P_(n){let e=Rd(n);return new Function("options","random",e)}function Rd(n){let e=z_(n);return`
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
`}var L_=Oo.exports,Io={exports:{}};const D_=Vi;Io.exports=O_;Io.exports.generateIntegratorFunctionBody=zd;function O_(n){let e=zd(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function zd(n){let e=D_(n);return`
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
`}var I_=Io.exports,Ss,Ou;function N_(){if(Ou)return Ss;Ou=1,Ss=n;function n(e,t,i,r){this.from=e,this.to=t,this.length=i,this.coefficient=r}return Ss}var Es,Iu;function U_(){if(Iu)return Es;Iu=1,Es=n;function n(e,t){var i;if(e||(e={}),t){for(i in t)if(t.hasOwnProperty(i)){var r=e.hasOwnProperty(i),a=typeof t[i],s=!r||typeof e[i]!==a;s?e[i]=t[i]:a==="object"&&(e[i]=n(e[i],t[i]))}}return e}return Es}var er={exports:{}},Nu;function F_(){if(Nu)return er.exports;Nu=1,er.exports=n,er.exports.random=n,er.exports.randomIterator=o;function n(c){var u=typeof c=="number"?c:+new Date;return new e(u)}function e(c){this.seed=c}e.prototype.next=s,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var c,u,l;do u=this.nextDouble()*2-1,l=this.nextDouble()*2-1,c=u*u+l*l;while(c>=1||c===0);return u*Math.sqrt(-2*Math.log(c)/c)}e.prototype.levy=i;function i(){var c=1.5,u=Math.pow(r(1+c)*Math.sin(Math.PI*c/2)/(r((1+c)/2)*c*Math.pow(2,(c-1)/2)),1/c);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/c)}function r(c){return Math.sqrt(2*Math.PI/c)*Math.pow(1/Math.E*(c+1/(12*c-1/(10*c))),c)}function a(){var c=this.seed;return c=c+2127912214+(c<<12)&4294967295,c=(c^3345072700^c>>>19)&4294967295,c=c+374761393+(c<<5)&4294967295,c=(c+3550635116^c<<9)&4294967295,c=c+4251993797+(c<<3)&4294967295,c=(c^3042594569^c>>>16)&4294967295,this.seed=c,(c&268435455)/268435456}function s(c){return Math.floor(this.nextDouble()*c)}function o(c,u){var l=u||n();if(typeof l.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:d};function d(){var m,g,v;for(m=c.length-1;m>0;--m)g=l.next(m+1),v=c[g],c[g]=c[m],c[m]=v;return c}function f(m){var g,v,p;for(g=c.length-1;g>0;--g)v=l.next(g+1),p=c[v],c[v]=c[g],c[g]=p,m(p);c.length&&m(c[0])}}return er.exports}var Pd=X_,B_=b_,H_=S_,G_=T_,V_=R_,W_=L_,j_=I_,Uu={};function X_(n){var e=N_(),t=U_(),i=Ro;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=Uu[n.dimensions];if(!r){var a=n.dimensions;r={Body:B_(a,n.debug),createQuadTree:H_(a),createBounds:G_(a),createDragForce:V_(a),createSpringForce:W_(a),integrate:j_(a)},Uu[a]=r}var s=r.Body,o=r.createQuadTree,c=r.createBounds,u=r.createDragForce,l=r.createSpringForce,d=r.integrate,f=R=>new s(R),m=F_().random(42),g=[],v=[],p=o(n,m),h=c(g,n,m),x=l(n,m),y=u(n),_=0,b=[],M=new Map,E=0;w("nbody",ee),w("spring",k);var z={bodies:g,quadTree:p,springs:v,settings:n,addForce:w,removeForce:N,getForces:U,step:function(){for(var R=0;R<b.length;++R)b[R](E);var D=d(g,n.timeStep,n.adaptiveTimeStepWeight);return E+=1,D},addBody:function(R){if(!R)throw new Error("Body is required");return g.push(R),R},addBodyAt:function(R){if(!R)throw new Error("Body position is required");var D=f(R);return g.push(D),D},removeBody:function(R){if(R){var D=g.indexOf(R);if(!(D<0))return g.splice(D,1),g.length===0&&h.reset(),!0}},addSpring:function(R,D,K,J){if(!R||!D)throw new Error("Cannot add null spring to force simulator");typeof K!="number"&&(K=-1);var te=new e(R,D,K,J>=0?J:-1);return v.push(te),te},getTotalMovement:function(){return _},removeSpring:function(R){if(R){var D=v.indexOf(R);if(D>-1)return v.splice(D,1),!0}},getBestNewBodyPosition:function(R){return h.getBestNewPosition(R)},getBBox:A,getBoundingBox:A,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(R){return R!==void 0?(n.gravity=R,p.options({gravity:R}),this):n.gravity},theta:function(R){return R!==void 0?(n.theta=R,p.options({theta:R}),this):n.theta},random:m};return $_(n,z),i(z),z;function A(){return h.update(),h.box}function w(R,D){if(M.has(R))throw new Error("Force "+R+" is already added");M.set(R,D),b.push(D)}function N(R){var D=b.indexOf(M.get(R));D<0||(b.splice(D,1),M.delete(R))}function U(){return M}function ee(){if(g.length!==0){p.insertBodies(g);for(var R=g.length;R--;){var D=g[R];D.isPinned||(D.reset(),p.updateBodyForce(D),y.update(D))}}}function k(){for(var R=v.length;R--;)x.update(v[R])}}function $_(n,e){for(var t in n)q_(n,e,t)}function q_(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var i=Number.isFinite(n[t]);i?e[t]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+t+" should be a valid number.");return n[t]=r,e}return n[t]}:e[t]=function(r){return r!==void 0?(n[t]=r,e):n[t]}}}zo.exports=K_;zo.exports.simulator=Pd;var Y_=Ro;function K_(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||Pd,i=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=n.version>19?ee:U;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var a=new Map,s={},o=0,c=i.settings.springTransform||Z_;y(),p();var u=!1,l={step:function(){if(o===0)return d(!0),!0;var k=i.step();l.lastMove=k,l.fire("step");var R=k/o,D=R<=.01;return d(D),D},getNodePosition:function(k){return N(k).pos},setNodePosition:function(k){var R=N(k);R.setPosition.apply(R,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(k){var R=s[k];if(R)return{from:R.from.pos,to:R.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:f,pinNode:function(k,R){var D=N(k.id);D.isPinned=!!R},isNodePinned:function(k){return N(k.id).isPinned},dispose:function(){n.off("changed",x),l.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:m,simulator:i,graph:n,lastMove:0};return Y_(l),l;function d(k){u!==k&&(u=k,h(k))}function f(k){a.forEach(k)}function m(){var k=0,R=0;return f(function(D){k+=Math.abs(D.force.x),R+=Math.abs(D.force.y)}),Math.sqrt(k*k+R*R)}function g(k,R){var D;if(R===void 0)typeof k!="object"?D=k:D=k.id;else{var K=n.hasLink(k,R);if(!K)return;D=K.id}return s[D]}function v(k){return a.get(k)}function p(){n.on("changed",x)}function h(k){l.fire("stable",k)}function x(k){for(var R=0;R<k.length;++R){var D=k[R];D.changeType==="add"?(D.node&&_(D.node.id),D.link&&M(D.link)):D.changeType==="remove"&&(D.node&&b(D.node),D.link&&E(D.link))}o=n.getNodesCount()}function y(){o=0,n.forEachNode(function(k){_(k.id),o+=1}),n.forEachLink(M)}function _(k){var R=a.get(k);if(!R){var D=n.getNode(k);if(!D)throw new Error("initBody() was called with unknown node id");var K=D.position;if(!K){var J=z(D);K=i.getBestNewBodyPosition(J)}R=i.addBodyAt(K),R.id=k,a.set(k,R),A(k),w(D)&&(R.isPinned=!0)}}function b(k){var R=k.id,D=a.get(R);D&&(a.delete(R),i.removeBody(D))}function M(k){A(k.fromId),A(k.toId);var R=a.get(k.fromId),D=a.get(k.toId),K=i.addSpring(R,D,k.length);c(k,K),s[k.id]=K}function E(k){var R=s[k.id];if(R){var D=n.getNode(k.fromId),K=n.getNode(k.toId);D&&A(D.id),K&&A(K.id),delete s[k.id],i.removeSpring(R)}}function z(k){var R=[];if(!k.links)return R;for(var D=Math.min(k.links.length,2),K=0;K<D;++K){var J=k.links[K],te=J.fromId!==k.id?a.get(J.fromId):a.get(J.toId);te&&te.pos&&R.push(te)}return R}function A(k){var R=a.get(k);if(R.mass=r(k),Number.isNaN(R.mass))throw new Error("Node mass should be a number")}function w(k){return k&&(k.isPinned||k.data&&k.data.isPinned)}function N(k){var R=a.get(k);return R||(_(k),R=a.get(k)),R}function U(k){var R=n.getLinks(k);return R?1+R.length/3:1}function ee(k){var R=n.getLinks(k);return R?1+R.size/3:1}}function Z_(){}var J_=zo.exports;const Q_=gd(J_);function Ys(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var e1=typeof global=="object"&&global&&global.Object===Object&&global,t1=typeof self=="object"&&self&&self.Object===Object&&self,Ld=e1||t1||Function("return this")(),ws=function(){return Ld.Date.now()},n1=/\s/;function i1(n){for(var e=n.length;e--&&n1.test(n.charAt(e)););return e}var r1=/^\s+/;function a1(n){return n&&n.slice(0,i1(n)+1).replace(r1,"")}var va=Ld.Symbol,Dd=Object.prototype,s1=Dd.hasOwnProperty,o1=Dd.toString,tr=va?va.toStringTag:void 0;function c1(n){var e=s1.call(n,tr),t=n[tr];try{n[tr]=void 0;var i=!0}catch{}var r=o1.call(n);return i&&(e?n[tr]=t:delete n[tr]),r}var u1=Object.prototype,l1=u1.toString;function d1(n){return l1.call(n)}var h1="[object Null]",f1="[object Undefined]",Fu=va?va.toStringTag:void 0;function p1(n){return n==null?n===void 0?f1:h1:Fu&&Fu in Object(n)?c1(n):d1(n)}function m1(n){return n!=null&&typeof n=="object"}var g1="[object Symbol]";function v1(n){return typeof n=="symbol"||m1(n)&&p1(n)==g1}var Bu=NaN,y1=/^[-+]0x[0-9a-f]+$/i,_1=/^0b[01]+$/i,x1=/^0o[0-7]+$/i,A1=parseInt;function Hu(n){if(typeof n=="number")return n;if(v1(n))return Bu;if(Ys(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Ys(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=a1(n);var t=_1.test(n);return t||x1.test(n)?A1(n.slice(2),t?2:8):y1.test(n)?Bu:+n}var b1="Expected a function",M1=Math.max,S1=Math.min;function E1(n,e,t){var i,r,a,s,o,c,u=0,l=!1,d=!1,f=!0;if(typeof n!="function")throw new TypeError(b1);e=Hu(e)||0,Ys(t)&&(l=!!t.leading,d="maxWait"in t,a=d?M1(Hu(t.maxWait)||0,e):a,f="trailing"in t?!!t.trailing:f);function m(M){var E=i,z=r;return i=r=void 0,u=M,s=n.apply(z,E),s}function g(M){return u=M,o=setTimeout(h,e),l?m(M):s}function v(M){var E=M-c,z=M-u,A=e-E;return d?S1(A,a-z):A}function p(M){var E=M-c,z=M-u;return c===void 0||E>=e||E<0||d&&z>=a}function h(){var M=ws();if(p(M))return x(M);o=setTimeout(h,v(M))}function x(M){return o=void 0,f&&i?m(M):(i=r=void 0,s)}function y(){o!==void 0&&clearTimeout(o),u=0,i=c=r=o=void 0}function _(){return o===void 0?s:x(ws())}function b(){var M=ws(),E=p(M);if(i=arguments,r=this,c=M,E){if(o===void 0)return g(c);if(d)return clearTimeout(o),o=setTimeout(h,e),m(c)}return o===void 0&&(o=setTimeout(h,e)),s}return b.cancel=y,b.flush=_,b}function w1(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function T1(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Gu(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,D1(i.key),i)}}function k1(n,e,t){return e&&Gu(n.prototype,e),t&&Gu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function C1(n,e){return R1(n)||w1(n,e)||z1(n,e)||P1()}function R1(n){if(Array.isArray(n))return n}function z1(n,e){if(n){if(typeof n=="string")return Vu(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vu(n,e)}}function Vu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function P1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L1(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function D1(n){var e=L1(n,"string");return typeof e=="symbol"?e:String(e)}var O1=k1(function n(e,t){var i=t.default,r=i===void 0?null:i,a=t.triggerUpdate,s=a===void 0?!0:a,o=t.onChange,c=o===void 0?function(u,l){}:o;T1(this,n),this.name=e,this.defaultVal=r,this.triggerUpdate=s,this.onChange=c});function No(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,i=n.props,r=i===void 0?{}:i,a=n.methods,s=a===void 0?{}:a,o=n.aliases,c=o===void 0?{}:o,u=n.init,l=u===void 0?function(){}:u,d=n.update,f=d===void 0?function(){}:d,m=Object.keys(r).map(function(g){return new O1(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(g):t,{initialised:!1}),p={};function h(_){return x(_,g),y(),h}var x=function(b,M){l.call(h,b,v,M),v.initialised=!0},y=E1(function(){v.initialised&&(f.call(h,v,p),p={})},1);return m.forEach(function(_){h[_.name]=b(_);function b(M){var E=M.name,z=M.triggerUpdate,A=z===void 0?!1:z,w=M.onChange,N=w===void 0?function(k,R){}:w,U=M.defaultVal,ee=U===void 0?null:U;return function(k){var R=v[E];if(!arguments.length)return R;var D=k===void 0?ee:k;return v[E]=D,N.call(h,D,v,R),!p.hasOwnProperty(E)&&(p[E]=R),A&&y(),h}}}),Object.keys(s).forEach(function(_){h[_]=function(){for(var b,M=arguments.length,E=new Array(M),z=0;z<M;z++)E[z]=arguments[z];return(b=s[_]).call.apply(b,[h,v].concat(E))}}),Object.entries(c).forEach(function(_){var b=C1(_,2),M=b[0],E=b[1];return h[M]=h[E]}),h.resetProps=function(){return m.forEach(function(_){h[_.name](_.defaultVal)}),h},h.resetProps(),v._rerender=y,h}}var Ye=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class Wu extends Map{constructor(e,t=U1){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(ju(this,e))}has(e){return super.has(ju(this,e))}set(e,t){return super.set(I1(this,e),t)}delete(e){return super.delete(N1(this,e))}}function ju({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):t}function I1({_intern:n,_key:e},t){const i=e(t);return n.has(i)?n.get(i):(n.set(i,t),t)}function N1({_intern:n,_key:e},t){const i=e(t);return n.has(i)&&(t=n.get(i),n.delete(i)),t}function U1(n){return n!==null&&typeof n=="object"?n.valueOf():n}function F1(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function B1(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function H1(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function G1(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function V1(n,e){if(n==null)return{};var t=G1(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function W1(n,e){return $1(n)||H1(n,e)||Od(n,e)||K1()}function j1(n){return X1(n)||q1(n)||Od(n)||Y1()}function X1(n){if(Array.isArray(n))return Ks(n)}function $1(n){if(Array.isArray(n))return n}function q1(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Od(n,e){if(n){if(typeof n=="string")return Ks(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ks(n,e)}}function Ks(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Y1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z1(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function J1(n){var e=Z1(n,"string");return typeof e=="symbol"?e:String(e)}var Xu=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(o){return{keyAccessor:o,isProp:!(o instanceof Function)}}),a=n.reduce(function(o,c){var u=o,l=c;return r.forEach(function(d,f){var m=d.keyAccessor,g=d.isProp,v;if(g){var p=l,h=p[m],x=V1(p,[m].map(J1));v=h,l=x}else v=m(l,f);f+1<r.length?(u.hasOwnProperty(v)||(u[v]={}),u=u[v]):t?(u.hasOwnProperty(v)||(u[v]=[]),u[v].push(l)):u[v]=l}),o},{});t instanceof Function&&function o(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;u===r.length?Object.keys(c).forEach(function(l){return c[l]=t(c[l])}):Object.values(c).forEach(function(l){return o(l,u+1)})}(a);var s=a;return i&&(s=[],function o(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];u.length===r.length?s.push({keys:u,vals:c}):Object.entries(c).forEach(function(l){var d=W1(l,2),f=d[0],m=d[1];return o(m,[].concat(j1(u),[f]))})}(a),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function Q1(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function $u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ex(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$u(Object(t),!0).forEach(function(i){Id(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$u(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Id(n,e,t){return e=ux(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function tx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function nx(n,e){if(n==null)return{};var t=tx(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Nd(n,e){return rx(n)||Q1(n,e)||Ud(n,e)||ox()}function ya(n){return ix(n)||ax(n)||Ud(n)||sx()}function ix(n){if(Array.isArray(n))return Zs(n)}function rx(n){if(Array.isArray(n))return n}function ax(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ud(n,e){if(n){if(typeof n=="string")return Zs(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zs(n,e)}}function Zs(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function sx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ux(n){var e=cx(n,"string");return typeof e=="symbol"?e:String(e)}var lx=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function dx(n,e,t){var i={enter:[],update:[],exit:[]};if(t){var s=Xu(n,t,!1),o=Xu(e,t,!1),c=Object.assign({},s,o);Object.entries(c).forEach(function(u){var l=Nd(u,2),d=l[0],f=l[1],m=s.hasOwnProperty(d)?o.hasOwnProperty(d)?"update":"exit":"enter";i[m].push(m==="update"?[s[d],o[d]]:f)})}else{var r=new Set(n),a=new Set(e);new Set([].concat(ya(r),ya(a))).forEach(function(u){var l=r.has(u)?a.has(u)?"update":"exit":"enter";i[l].push(l==="update"?[u,u]:u)})}return i}function hx(n,e,t){var i=t.objBindAttr,r=i===void 0?"__obj":i,a=t.dataBindAttr,s=a===void 0?"__data":a,o=t.idAccessor,c=t.purge,u=c===void 0?!1:c,l=function(p){return p.hasOwnProperty(s)},d=e.filter(function(v){return!l(v)}),f=e.filter(l).map(function(v){return v[s]}),m=n,g=u?{enter:m,exit:f,update:[]}:dx(f,m,o);return g.update=g.update.map(function(v){var p=Nd(v,2),h=p[0],x=p[1];return h!==x&&(x[r]=h[r],x[r][s]=x),x}),g.exit=g.exit.concat(d.map(function(v){return Id({},r,v)})),g}function fx(n,e,t,i,r){var a=r.createObj,s=a===void 0?function(z){return{}}:a,o=r.updateObj,c=o===void 0?function(z,A){}:o,u=r.exitObj,l=u===void 0?function(z){}:u,d=r.objBindAttr,f=d===void 0?"__obj":d,m=r.dataBindAttr,g=m===void 0?"__data":m,v=nx(r,lx),p=hx(n,e,ex({objBindAttr:f,dataBindAttr:g},v)),h=p.enter,x=p.update,y=p.exit;y.forEach(function(z){var A=z[f];delete z[f],l(A),i(A)});var _=M(h),b=[].concat(ya(h),ya(x));E(b),_.forEach(t);function M(z){var A=[];return z.forEach(function(w){var N=s(w);N&&(N[g]=w,w[f]=N,A.push(N))}),A}function E(z){z.forEach(function(A){var w=A[f];w&&(w[g]=A,c(w,A))})}}function px(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const qu=Symbol("implicit");function Fd(){var n=new Wu,e=[],t=[],i=qu;function r(a){let s=n.get(a);if(s===void 0){if(i!==qu)return i;n.set(a,s=e.push(a)-1)}return t[s%t.length]}return r.domain=function(a){if(!arguments.length)return e.slice();e=[],n=new Wu;for(const s of a)n.has(s)||n.set(s,e.push(s)-1);return r},r.range=function(a){return arguments.length?(t=Array.from(a),r):t.slice()},r.unknown=function(a){return arguments.length?(i=a,r):i},r.copy=function(){return Fd(e,t).unknown(i)},px.apply(r,arguments),r}function mx(n){for(var e=n.length/6|0,t=new Array(e),i=0;i<e;)t[i]="#"+n.slice(i*6,++i*6);return t}const gx=mx("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function _a(n){"@babel/helpers - typeof";return _a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_a(n)}var vx=/^\s+/,yx=/\s+$/;function Me(n,e){if(n=n||"",e=e||{},n instanceof Me)return n;if(!(this instanceof Me))return new Me(n,e);var t=_x(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Me.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,i,r,a,s,o;return t=e.r/255,i=e.g/255,r=e.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),i<=.03928?s=i/12.92:s=Math.pow((i+.055)/1.055,2.4),r<=.03928?o=r/12.92:o=Math.pow((r+.055)/1.055,2.4),.2126*a+.7152*s+.0722*o},setAlpha:function(e){return this._a=Bd(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Ku(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Ku(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+i+"%, "+r+"%)":"hsva("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Yu(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Yu(this._r,this._g,this._b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+i+"%, "+r+"%)":"hsla("+t+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Zu(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return Mx(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(rt(this._r,255)*100)+"%",g:Math.round(rt(this._g,255)*100)+"%",b:Math.round(rt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%)":"rgba("+Math.round(rt(this._r,255)*100)+"%, "+Math.round(rt(this._g,255)*100)+"%, "+Math.round(rt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Ox[Zu(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Ju(this._r,this._g,this._b,this._a),i=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var a=Me(e);i="#"+Ju(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+i+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,a=!t&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Me(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Tx,arguments)},brighten:function(){return this._applyModification(kx,arguments)},darken:function(){return this._applyModification(Cx,arguments)},desaturate:function(){return this._applyModification(Sx,arguments)},saturate:function(){return this._applyModification(Ex,arguments)},greyscale:function(){return this._applyModification(wx,arguments)},spin:function(){return this._applyModification(Rx,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Lx,arguments)},complement:function(){return this._applyCombination(zx,arguments)},monochromatic:function(){return this._applyCombination(Dx,arguments)},splitcomplement:function(){return this._applyCombination(Px,arguments)},triad:function(){return this._applyCombination(Qu,[3])},tetrad:function(){return this._applyCombination(Qu,[4])}};Me.fromRatio=function(n,e){if(_a(n)=="object"){var t={};for(var i in n)n.hasOwnProperty(i)&&(i==="a"?t[i]=n[i]:t[i]=or(n[i]));n=t}return Me(n,e)};function _x(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,a=null,s=!1,o=!1;return typeof n=="string"&&(n=Fx(n)),_a(n)=="object"&&(mn(n.r)&&mn(n.g)&&mn(n.b)?(e=xx(n.r,n.g,n.b),s=!0,o=String(n.r).substr(-1)==="%"?"prgb":"rgb"):mn(n.h)&&mn(n.s)&&mn(n.v)?(i=or(n.s),r=or(n.v),e=bx(n.h,i,r),s=!0,o="hsv"):mn(n.h)&&mn(n.s)&&mn(n.l)&&(i=or(n.s),a=or(n.l),e=Ax(n.h,i,a),s=!0,o="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=Bd(t),{ok:s,format:n.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function xx(n,e,t){return{r:rt(n,255)*255,g:rt(e,255)*255,b:rt(t,255)*255}}function Yu(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,s,o=(i+r)/2;if(i==r)a=s=0;else{var c=i-r;switch(s=o>.5?c/(2-i-r):c/(i+r),i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s,l:o}}function Ax(n,e,t){var i,r,a;n=rt(n,360),e=rt(e,100),t=rt(t,100);function s(u,l,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?u+(l-u)*6*d:d<1/2?l:d<2/3?u+(l-u)*(2/3-d)*6:u}if(e===0)i=r=a=t;else{var o=t<.5?t*(1+e):t+e-t*e,c=2*t-o;i=s(c,o,n+1/3),r=s(c,o,n),a=s(c,o,n-1/3)}return{r:i*255,g:r*255,b:a*255}}function Ku(n,e,t){n=rt(n,255),e=rt(e,255),t=rt(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),a,s,o=i,c=i-r;if(s=i===0?0:c/i,i==r)a=0;else{switch(i){case n:a=(e-t)/c+(e<t?6:0);break;case e:a=(t-n)/c+2;break;case t:a=(n-e)/c+4;break}a/=6}return{h:a,s,v:o}}function bx(n,e,t){n=rt(n,360)*6,e=rt(e,100),t=rt(t,100);var i=Math.floor(n),r=n-i,a=t*(1-e),s=t*(1-r*e),o=t*(1-(1-r)*e),c=i%6,u=[t,s,a,a,o,t][c],l=[o,t,t,s,a,a][c],d=[a,a,o,t,t,s][c];return{r:u*255,g:l*255,b:d*255}}function Zu(n,e,t,i){var r=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Mx(n,e,t,i,r){var a=[en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(Hd(i))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Ju(n,e,t,i){var r=[en(Hd(i)),en(Math.round(n).toString(16)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16))];return r.join("")}Me.equals=function(n,e){return!n||!e?!1:Me(n).toRgbString()==Me(e).toRgbString()};Me.random=function(){return Me.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Sx(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.s-=e/100,t.s=Da(t.s),Me(t)}function Ex(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.s+=e/100,t.s=Da(t.s),Me(t)}function wx(n){return Me(n).desaturate(100)}function Tx(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.l+=e/100,t.l=Da(t.l),Me(t)}function kx(n,e){e=e===0?0:e||10;var t=Me(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Me(t)}function Cx(n,e){e=e===0?0:e||10;var t=Me(n).toHsl();return t.l-=e/100,t.l=Da(t.l),Me(t)}function Rx(n,e){var t=Me(n).toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,Me(t)}function zx(n){var e=Me(n).toHsl();return e.h=(e.h+180)%360,Me(e)}function Qu(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Me(n).toHsl(),i=[Me(n)],r=360/e,a=1;a<e;a++)i.push(Me({h:(t.h+a*r)%360,s:t.s,l:t.l}));return i}function Px(n){var e=Me(n).toHsl(),t=e.h;return[Me(n),Me({h:(t+72)%360,s:e.s,l:e.l}),Me({h:(t+216)%360,s:e.s,l:e.l})]}function Lx(n,e,t){e=e||6,t=t||30;var i=Me(n).toHsl(),r=360/t,a=[Me(n)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,a.push(Me(i));return a}function Dx(n,e){e=e||6;for(var t=Me(n).toHsv(),i=t.h,r=t.s,a=t.v,s=[],o=1/e;e--;)s.push(Me({h:i,s:r,v:a})),a=(a+o)%1;return s}Me.mix=function(n,e,t){t=t===0?0:t||50;var i=Me(n).toRgb(),r=Me(e).toRgb(),a=t/100,s={r:(r.r-i.r)*a+i.r,g:(r.g-i.g)*a+i.g,b:(r.b-i.b)*a+i.b,a:(r.a-i.a)*a+i.a};return Me(s)};Me.readability=function(n,e){var t=Me(n),i=Me(e);return(Math.max(t.getLuminance(),i.getLuminance())+.05)/(Math.min(t.getLuminance(),i.getLuminance())+.05)};Me.isReadable=function(n,e,t){var i=Me.readability(n,e),r,a;switch(a=!1,r=Bx(t),r.level+r.size){case"AAsmall":case"AAAlarge":a=i>=4.5;break;case"AAlarge":a=i>=3;break;case"AAAsmall":a=i>=7;break}return a};Me.mostReadable=function(n,e,t){var i=null,r=0,a,s,o,c;t=t||{},s=t.includeFallbackColors,o=t.level,c=t.size;for(var u=0;u<e.length;u++)a=Me.readability(n,e[u]),a>r&&(r=a,i=Me(e[u]));return Me.isReadable(n,i,{level:o,size:c})||!s?i:(t.includeFallbackColors=!1,Me.mostReadable(n,["#fff","#000"],t))};var Js=Me.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ox=Me.hexNames=Ix(Js);function Ix(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Bd(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function rt(n,e){Nx(n)&&(n="100%");var t=Ux(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Da(n){return Math.min(1,Math.max(0,n))}function Ut(n){return parseInt(n,16)}function Nx(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function Ux(n){return typeof n=="string"&&n.indexOf("%")!=-1}function en(n){return n.length==1?"0"+n:""+n}function or(n){return n<=1&&(n=n*100+"%"),n}function Hd(n){return Math.round(parseFloat(n)*255).toString(16)}function el(n){return Ut(n)/255}var Yt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function mn(n){return!!Yt.CSS_UNIT.exec(n)}function Fx(n){n=n.replace(vx,"").replace(yx,"").toLowerCase();var e=!1;if(Js[n])n=Js[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Yt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Yt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Yt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Yt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Yt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Yt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Yt.hex8.exec(n))?{r:Ut(t[1]),g:Ut(t[2]),b:Ut(t[3]),a:el(t[4]),format:e?"name":"hex8"}:(t=Yt.hex6.exec(n))?{r:Ut(t[1]),g:Ut(t[2]),b:Ut(t[3]),format:e?"name":"hex"}:(t=Yt.hex4.exec(n))?{r:Ut(t[1]+""+t[1]),g:Ut(t[2]+""+t[2]),b:Ut(t[3]+""+t[3]),a:el(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Yt.hex3.exec(n))?{r:Ut(t[1]+""+t[1]),g:Ut(t[2]+""+t[2]),b:Ut(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Bx(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function Hx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function tl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Gd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tl(Object(t),!0).forEach(function(i){Uo(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):tl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Qs(n){"@babel/helpers - typeof";return Qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qs(n)}function Gx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function nl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Xd(i.key),i)}}function Vx(n,e,t){return e&&nl(n.prototype,e),t&&nl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Uo(n,e,t){return e=Xd(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Wx(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Aa(n,e)}function xa(n){return xa=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},xa(n)}function Aa(n,e){return Aa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Aa(n,e)}function Vd(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function aa(n,e,t){return Vd()?aa=Reflect.construct.bind():aa=function(r,a,s){var o=[null];o.push.apply(o,a);var c=Function.bind.apply(r,o),u=new c;return s&&Aa(u,s.prototype),u},aa.apply(null,arguments)}function jx(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function Xx(n,e){if(n==null)return{};var t=jx(n,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Wd(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $x(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wd(n)}function qx(n){var e=Vd();return function(){var i=xa(n),r;if(e){var a=xa(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return $x(this,r)}}function il(n,e){return Kx(n)||Hx(n,e)||jd(n,e)||Qx()}function Kt(n){return Yx(n)||Zx(n)||jd(n)||Jx()}function Yx(n){if(Array.isArray(n))return eo(n)}function Kx(n){if(Array.isArray(n))return n}function Zx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function jd(n,e){if(n){if(typeof n=="string")return eo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return eo(n,e)}}function eo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Jx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function eA(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Xd(n){var e=eA(n,"string");return typeof e=="symbol"?e:String(e)}var tA=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},nA=function n(e){e.geometry&&e.geometry.dispose(),e.material&&tA(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},to=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),nA(t)}},iA=["objFilter"];function nr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.objFilter,r=i===void 0?function(){return!0}:i,a=Xx(t,iA);return fx(n,e.children.filter(r),function(s){return e.add(s)},function(s){e.remove(s),to(s)},Gd({objBindAttr:"__threeObj"},a))}var ir=function(e){return isNaN(e)?parseInt(Me(e).toHex(),16):e},Ts=function(e){return isNaN(e)?Me(e).getAlpha():1},rA=Fd(gx);function rl(n,e,t){!e||typeof t!="string"||n.filter(function(i){return!i[t]}).forEach(function(i){i[t]=rA(e(i))})}function aA(n,e){var t=n.nodes,i=n.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=r.nodeFilter,s=a===void 0?function(){return!0}:a,o=r.onLoopError,c=o===void 0?function(m){throw"Invalid DAG structure! Found cycle in node path: ".concat(m.join(" -> "),".")}:o,u={};t.forEach(function(m){return u[e(m)]={data:m,out:[],depth:-1,skip:!s(m)}}),i.forEach(function(m){var g=m.source,v=m.target,p=_(g),h=_(v);if(!u.hasOwnProperty(p))throw"Missing source node with id: ".concat(p);if(!u.hasOwnProperty(h))throw"Missing target node with id: ".concat(h);var x=u[p],y=u[h];x.out.push(y);function _(b){return Qs(b)==="object"?e(b):b}});var l=[];f(Object.values(u));var d=Object.assign.apply(Object,[{}].concat(Kt(Object.entries(u).filter(function(m){var g=il(m,2),v=g[1];return!v.skip}).map(function(m){var g=il(m,2),v=g[0],p=g[1];return Uo({},v,p.depth)}))));return d;function f(m){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,p=function(){var b=m[h];if(g.indexOf(b)!==-1){var M=[].concat(Kt(g.slice(g.indexOf(b))),[b]).map(function(E){return e(E.data)});return l.some(function(E){return E.length===M.length&&E.every(function(z,A){return z===M[A]})})||(l.push(M),c(M)),"continue"}v>b.depth&&(b.depth=v,f(b.out,[].concat(Kt(g),[b]),v+(b.skip?0:1)))},h=0,x=m.length;h<x;h++)var y=p()}}var ze=window.THREE?window.THREE:{Group:zi,Mesh:Qt,MeshLambertMaterial:V0,Color:We,BufferGeometry:Lt,BufferAttribute:jt,Matrix4:at,Vector3:L,SphereGeometry:Pa,CylinderGeometry:za,TubeGeometry:Eo,ConeGeometry:So,Line:T0,LineBasicMaterial:Ql,QuadraticBezierCurve3:Mo,CubicBezierCurve3:td,Box3:ii},al={graph:__,forcelayout:Q_},sA=2,sl=new ze.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Qr=new ze.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",oA=No({props:{jsonUrl:{onChange:function(e,t){var i=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){t.fetchingJson=!1,t.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var i=t.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(t.graphData.nodes,"z"),e<2&&r(t.graphData.nodes,"y");function r(a,s){a.forEach(function(o){delete o[s],delete o["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,i){return i===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),a(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=Ye(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var m=f.__threeObj;if(m){var g=t?f:e.layout.getNodePosition(f[e.nodeId]),v=s(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?m.children[0]:m,{x:g.x,y:g.y,z:g.z},f)||v)&&(m.position.x=g.x,m.position.y=g.y||0,m.position.z=g.z||0)}});var o=Ye(e.linkWidth),c=Ye(e.linkCurvature),u=Ye(e.linkCurveRotation),l=Ye(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var m=f.__lineObj;if(m){var g=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),v=g[t?"source":"from"],p=g[t?"target":"to"];if(!(!v||!p||!v.hasOwnProperty("x")||!p.hasOwnProperty("x"))){d(f);var h=l(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(h?m.children[1]:m,{start:{x:v.x,y:v.y,z:v.z},end:{x:p.x,y:p.y,z:p.z}},f)&&!h)){var x=30,y=f.__curve,_=m.children.length?m.children[0]:m;if(_.type==="Line"){if(y)_.geometry.setFromPoints(y.getPoints(x));else{var b=_.geometry.getAttribute("position");(!b||!b.array||b.array.length!==6)&&_.geometry[sl]("position",b=new ze.BufferAttribute(new Float32Array(2*3),3)),b.array[0]=v.x,b.array[1]=v.y||0,b.array[2]=v.z||0,b.array[3]=p.x,b.array[4]=p.y||0,b.array[5]=p.z||0,b.needsUpdate=!0}_.geometry.computeBoundingSphere()}else if(_.type==="Mesh")if(y){_.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(_.position.set(0,0,0),_.rotation.set(0,0,0),_.scale.set(1,1,1));var U=Math.ceil(o(f)*10)/10,ee=U/2,k=new ze.TubeGeometry(y,x,ee,e.linkResolution,!1);_.geometry.dispose(),_.geometry=k}else{if(!_.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var M=Math.ceil(o(f)*10)/10,E=M/2,z=new ze.CylinderGeometry(E,E,1,e.linkResolution,1,!1);z[Qr](new ze.Matrix4().makeTranslation(0,1/2,0)),z[Qr](new ze.Matrix4().makeRotationX(Math.PI/2)),_.geometry.dispose(),_.geometry=z}var A=new ze.Vector3(v.x,v.y||0,v.z||0),w=new ze.Vector3(p.x,p.y||0,p.z||0),N=A.distanceTo(w);_.position.x=A.x,_.position.y=A.y,_.position.z=A.z,_.scale.z=N,_.parent.localToWorld(w),_.lookAt(w)}}}}});function d(f){var m=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),g=m[t?"source":"from"],v=m[t?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var p=c(f);if(!p)f.__curve=null;else{var h=new ze.Vector3(g.x,g.y||0,g.z||0),x=new ze.Vector3(v.x,v.y||0,v.z||0),y=h.distanceTo(x),_,b=u(f);if(y>0){var M=v.x-g.x,E=v.y-g.y||0,z=new ze.Vector3().subVectors(x,h),A=z.clone().multiplyScalar(p).cross(M!==0||E!==0?new ze.Vector3(0,0,1):new ze.Vector3(0,1,0)).applyAxisAngle(z.normalize(),b).add(new ze.Vector3().addVectors(h,x).divideScalar(2));_=new ze.QuadraticBezierCurve3(h,A,x)}else{var w=p*70,N=-b,U=N+Math.PI/2;_=new ze.CubicBezierCurve3(h,new ze.Vector3(w*Math.cos(U),w*Math.sin(U),0).add(h),new ze.Vector3(w*Math.cos(N),w*Math.sin(N),0).add(h),x)}f.__curve=_}}}}function r(){var s=Ye(e.linkDirectionalArrowRelPos),o=Ye(e.linkDirectionalArrowLength),c=Ye(e.nodeVal);e.graphData.links.forEach(function(u){var l=u.__arrowObj;if(l){var d=t?u:e.layout.getLinkPosition(e.layout.graph.getLink(u.source,u.target).id),f=d[t?"source":"from"],m=d[t?"target":"to"];if(!(!f||!m||!f.hasOwnProperty("x")||!m.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,c(f)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,c(m)||1))*e.nodeRelSize,p=o(u),h=s(u),x=u.__curve?function(z){return u.__curve.getPoint(z)}:function(z){var A=function(N,U,ee,k){return U[N]+(ee[N]-U[N])*k||0};return{x:A("x",f,m,z),y:A("y",f,m,z),z:A("z",f,m,z)}},y=u.__curve?u.__curve.getLength():Math.sqrt(["x","y","z"].map(function(z){return Math.pow((m[z]||0)-(f[z]||0),2)}).reduce(function(z,A){return z+A},0)),_=g+p+(y-g-v-p)*h,b=x(_/y),M=x((_-p)/y);["x","y","z"].forEach(function(z){return l.position[z]=M[z]});var E=aa(ze.Vector3,Kt(["x","y","z"].map(function(z){return b[z]})));l.parent.localToWorld(E),l.lookAt(E)}}})}function a(){var s=Ye(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(o){var c=o.__photonsObj&&o.__photonsObj.children,u=o.__singleHopPhotonsObj&&o.__singleHopPhotonsObj.children;if(!((!u||!u.length)&&(!c||!c.length))){var l=t?o:e.layout.getLinkPosition(e.layout.graph.getLink(o.source,o.target).id),d=l[t?"source":"from"],f=l[t?"target":"to"];if(!(!d||!f||!d.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var m=s(o),g=o.__curve?function(p){return o.__curve.getPoint(p)}:function(p){var h=function(y,_,b,M){return _[y]+(b[y]-_[y])*M||0};return{x:h("x",d,f,p),y:h("y",d,f,p),z:h("z",d,f,p)}},v=[].concat(Kt(c||[]),Kt(u||[]));v.forEach(function(p,h){var x=p.parent.__linkThreeObjType==="singleHopPhotons";if(p.hasOwnProperty("__progressRatio")||(p.__progressRatio=x?0:h/c.length),p.__progressRatio+=m,p.__progressRatio>=1)if(!x)p.__progressRatio=p.__progressRatio%1;else{p.parent.remove(p),to(p);return}var y=p.__progressRatio,_=g(y);["x","y","z"].forEach(function(b){return p.position[b]=_[b]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var i=new ze.Group;i.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=Ye(e.linkDirectionalParticleWidth),a=Math.ceil(r(t)*10)/10/2,s=e.linkDirectionalParticleResolution,o=new ze.SphereGeometry(a,s,s),c=Ye(e.linkColor),u=Ye(e.linkDirectionalParticleColor),l=u(t)||c(t)||"#f0f0f0",d=new ze.Color(ir(l)),f=e.linkOpacity*3,m=new ze.MeshLambertMaterial({color:d,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new ze.Mesh(o,m))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(a){var s=[];if(a.geometry){a.geometry.computeBoundingBox();var o=new ze.Box3;o.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),s.push(o)}return s.concat.apply(s,Kt((a.children||[]).filter(function(c){return!c.hasOwnProperty("__graphObjType")||c.__graphObjType==="node"&&t(c.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Kt(["x","y","z"].map(function(r){return Uo({},r,[B1(i,function(a){return a.min[r]}),F1(i,function(a){return a.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:l_().force("link",Yy()).force("charge",d_()).force("center",Q0()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var i=function(V){return V.some(function(ne){return t.hasOwnProperty(ne)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&rl(e.graphData.nodes,Ye(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&rl(e.graphData.links,Ye(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=Ye(e.nodeThreeObject),a=Ye(e.nodeThreeObjectExtend),s=Ye(e.nodeVal),o=Ye(e.nodeColor),c=Ye(e.nodeVisibility),u={},l={};nr(e.graphData.nodes.filter(c),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(V){return V.__graphObjType==="node"},createObj:function(V){var ne=r(V),I=a(V);ne&&e.nodeThreeObject===ne&&(ne=ne.clone());var Z;return ne&&!I?Z=ne:(Z=new ze.Mesh,Z.__graphDefaultObj=!0,ne&&I&&Z.add(ne)),Z.__graphObjType="node",Z},updateObj:function(V,ne){if(V.__graphDefaultObj){var I=s(ne)||1,Z=Math.cbrt(I)*e.nodeRelSize,ue=e.nodeResolution;(!V.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||V.geometry.parameters.radius!==Z||V.geometry.parameters.widthSegments!==ue)&&(u.hasOwnProperty(I)||(u[I]=new ze.SphereGeometry(Z,ue,ue)),V.geometry.dispose(),V.geometry=u[I]);var le=o(ne),ye=new ze.Color(ir(le||"#ffffaa")),B=e.nodeOpacity*Ts(le);(V.material.type!=="MeshLambertMaterial"||!V.material.color.equals(ye)||V.material.opacity!==B)&&(l.hasOwnProperty(le)||(l[le]=new ze.MeshLambertMaterial({color:ye,transparent:!0,opacity:B})),V.material.dispose(),V.material=l[le])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var d=Ye(e.linkThreeObject),f=Ye(e.linkThreeObjectExtend),m=Ye(e.linkMaterial),g=Ye(e.linkVisibility),v=Ye(e.linkColor),p=Ye(e.linkWidth),h={},x={},y={},_=e.graphData.links.filter(g);if(nr(_,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(V){return V.__graphObjType==="link"},exitObj:function(V){var ne=V.__data&&V.__data.__singleHopPhotonsObj;ne&&(ne.parent.remove(ne),to(ne),delete V.__data.__singleHopPhotonsObj)},createObj:function(V){var ne=d(V),I=f(V);ne&&e.linkThreeObject===ne&&(ne=ne.clone());var Z;if(!ne||I){var ue=!!p(V);if(ue)Z=new ze.Mesh;else{var le=new ze.BufferGeometry;le[sl]("position",new ze.BufferAttribute(new Float32Array(2*3),3)),Z=new ze.Line(le)}}var ye;return ne?I?(ye=new ze.Group,ye.__graphDefaultObj=!0,ye.add(Z),ye.add(ne)):ye=ne:(ye=Z,ye.__graphDefaultObj=!0),ye.renderOrder=10,ye.__graphObjType="link",ye},updateObj:function(V,ne){if(V.__graphDefaultObj){var I=V.children.length?V.children[0]:V,Z=Math.ceil(p(ne)*10)/10,ue=!!Z;if(ue){var le=Z/2,ye=e.linkResolution;if(!I.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||I.geometry.parameters.radiusTop!==le||I.geometry.parameters.radialSegments!==ye){if(!h.hasOwnProperty(Z)){var B=new ze.CylinderGeometry(le,le,1,ye,1,!1);B[Qr](new ze.Matrix4().makeTranslation(0,1/2,0)),B[Qr](new ze.Matrix4().makeRotationX(Math.PI/2)),h[Z]=B}I.geometry.dispose(),I.geometry=h[Z]}}var tt=m(ne);if(tt)I.material=tt;else{var Ae=v(ne),ke=new ze.Color(ir(Ae||"#f0f0f0")),_e=e.linkOpacity*Ts(Ae),je=ue?"MeshLambertMaterial":"LineBasicMaterial";if(I.material.type!==je||!I.material.color.equals(ke)||I.material.opacity!==_e){var Le=ue?x:y;Le.hasOwnProperty(Ae)||(Le[Ae]=new ze[je]({color:ke,transparent:_e<1,opacity:_e,depthWrite:_e>=1})),I.material.dispose(),I.material=Le[Ae]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var b=Ye(e.linkDirectionalArrowLength),M=Ye(e.linkDirectionalArrowColor);nr(_.filter(b),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(V){return V.__linkThreeObjType==="arrow"},createObj:function(){var V=new ze.Mesh(void 0,new ze.MeshLambertMaterial({transparent:!0}));return V.__linkThreeObjType="arrow",V},updateObj:function(V,ne){var I=b(ne),Z=e.linkDirectionalArrowResolution;if(!V.geometry.type.match(/^Cone(Buffer)?Geometry$/)||V.geometry.parameters.height!==I||V.geometry.parameters.radialSegments!==Z){var ue=new ze.ConeGeometry(I*.25,I,Z);ue.translate(0,I/2,0),ue.rotateX(Math.PI/2),V.geometry.dispose(),V.geometry=ue}var le=M(ne)||v(ne)||"#f0f0f0";V.material.color=new ze.Color(ir(le)),V.material.opacity=e.linkOpacity*3*Ts(le)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var E=Ye(e.linkDirectionalParticles),z=Ye(e.linkDirectionalParticleWidth),A=Ye(e.linkDirectionalParticleColor),w={},N={};nr(_.filter(E),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(V){return V.__linkThreeObjType==="photons"},createObj:function(){var V=new ze.Group;return V.__linkThreeObjType="photons",V},updateObj:function(V,ne){var I=Math.round(Math.abs(E(ne))),Z=!!V.children.length&&V.children[0],ue=Math.ceil(z(ne)*10)/10/2,le=e.linkDirectionalParticleResolution,ye;Z&&Z.geometry.parameters.radius===ue&&Z.geometry.parameters.widthSegments===le?ye=Z.geometry:(N.hasOwnProperty(ue)||(N[ue]=new ze.SphereGeometry(ue,le,le)),ye=N[ue],Z&&Z.geometry.dispose());var B=A(ne)||v(ne)||"#f0f0f0",tt=new ze.Color(ir(B)),Ae=e.linkOpacity*3,ke;Z&&Z.material.color.equals(tt)&&Z.material.opacity===Ae?ke=Z.material:(w.hasOwnProperty(B)||(w[B]=new ze.MeshLambertMaterial({color:tt,transparent:!0,opacity:Ae})),ke=w[B],Z&&Z.material.dispose()),nr(Kt(new Array(I)).map(function(_e,je){return{idx:je}}),V,{idAccessor:function(je){return je.idx},createObj:function(){return new ze.Mesh(ye,ke)},updateObj:function(je){je.geometry=ye,je.material=ke}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(G){G.source=G[e.linkSource],G.target=G[e.linkTarget]});var U=e.forceEngine!=="ngraph",ee;if(U){(ee=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var k=e.d3ForceLayout.force("link");k&&k.id(function(G){return G[e.nodeId]}).links(e.graphData.links);var R=e.dagMode&&aA(e.graphData,function(G){return G[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),D=Math.max.apply(Math,Kt(Object.values(R||[]))),K=e.dagLevelDistance||e.graphData.nodes.length/(D||1)*sA*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var J=function(V,ne){return function(I){return V?(R[I[e.nodeId]]-D/2)*K*(ne?-1:1):void 0}},te=J(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),F=J(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),$=J(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(G){G.fx=te(G),G.fy=F(G),G.fz=$(G)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?h_(function(G){var V=R[G[e.nodeId]]||-1;return(e.dagMode==="radialin"?D-V:V)*K}).strength(function(G){return e.dagNodeFilter(G)?1:0}):null)}else{var Q=al.graph();e.graphData.nodes.forEach(function(G){Q.addNode(G[e.nodeId])}),e.graphData.links.forEach(function(G){Q.addLink(G.source,G.target)}),ee=al.forcelayout(Q,Gd({dimensions:e.numDimensions},e.ngraphPhysics)),ee.graph=Q}for(var W=0;W<e.warmupTicks&&!(U&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);W++)ee[U?"tick":"step"]();e.layout=ee,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function cA(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){Wx(s,r);var a=qx(s);function s(){var o;Gx(this,s);for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return o=a.call.apply(a,[this].concat(u)),o.__kapsuleInstance=n().apply(void 0,[].concat(Kt(t?[Wd(o)]:[]),u)),o}return Vx(s)}(e);return Object.keys(n()).forEach(function(r){return i.prototype[r]=function(){var a,s=(a=this.__kapsuleInstance)[r].apply(a,arguments);return s===this.__kapsuleInstance?this:s}}),i}var uA=window.THREE?window.THREE:{Group:zi},$d=cA(oA,uA.Group,!0);const ks={type:"change"},Cs={type:"start"},Rs={type:"end"};class lA extends nn{constructor(e,t){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.target=new L;const a=1e-6,s=new L;let o=1,c=r.NONE,u=r.NONE,l=0,d=0,f=0;const m=new L,g=new fe,v=new fe,p=new L,h=new fe,x=new fe,y=new fe,_=new fe,b=[],M={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const I=i.domElement.getBoundingClientRect(),Z=i.domElement.ownerDocument.documentElement;i.screen.left=I.left+window.pageXOffset-Z.clientLeft,i.screen.top=I.top+window.pageYOffset-Z.clientTop,i.screen.width=I.width,i.screen.height=I.height};const E=function(){const I=new fe;return function(ue,le){return I.set((ue-i.screen.left)/i.screen.width,(le-i.screen.top)/i.screen.height),I}}(),z=function(){const I=new fe;return function(ue,le){return I.set((ue-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-le))/i.screen.width),I}}();this.rotateCamera=function(){const I=new L,Z=new tn,ue=new L,le=new L,ye=new L,B=new L;return function(){B.set(v.x-g.x,v.y-g.y,0);let Ae=B.length();Ae?(m.copy(i.object.position).sub(i.target),ue.copy(m).normalize(),le.copy(i.object.up).normalize(),ye.crossVectors(le,ue).normalize(),le.setLength(v.y-g.y),ye.setLength(v.x-g.x),B.copy(le.add(ye)),I.crossVectors(B,m).normalize(),Ae*=i.rotateSpeed,Z.setFromAxisAngle(I,Ae),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z),p.copy(I),f=Ae):!i.staticMoving&&f&&(f*=Math.sqrt(1-i.dynamicDampingFactor),m.copy(i.object.position).sub(i.target),Z.setFromAxisAngle(p,f),m.applyQuaternion(Z),i.object.up.applyQuaternion(Z)),g.copy(v)}}(),this.zoomCamera=function(){let I;c===r.TOUCH_ZOOM_PAN?(I=l/d,l=d,i.object.isPerspectiveCamera?m.multiplyScalar(I):i.object.isOrthographicCamera?(i.object.zoom=Vs.clamp(i.object.zoom/I,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(I=1+(x.y-h.y)*i.zoomSpeed,I!==1&&I>0&&(i.object.isPerspectiveCamera?m.multiplyScalar(I):i.object.isOrthographicCamera?(i.object.zoom=Vs.clamp(i.object.zoom/I,i.minZoom,i.maxZoom),o!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?h.copy(x):h.y+=(x.y-h.y)*this.dynamicDampingFactor)},this.panCamera=function(){const I=new fe,Z=new L,ue=new L;return function(){if(I.copy(_).sub(y),I.lengthSq()){if(i.object.isOrthographicCamera){const ye=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,B=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;I.x*=ye,I.y*=B}I.multiplyScalar(m.length()*i.panSpeed),ue.copy(m).cross(i.object.up).setLength(I.x),ue.add(Z.copy(i.object.up).setLength(I.y)),i.object.position.add(ue),i.target.add(ue),i.staticMoving?y.copy(_):y.add(I.subVectors(_,y).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(m.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,m.setLength(i.maxDistance)),h.copy(x)),m.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,m.setLength(i.minDistance)),h.copy(x)))},this.update=function(){m.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,m),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),s.distanceToSquared(i.object.position)>a&&(i.dispatchEvent(ks),s.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(s.distanceToSquared(i.object.position)>a||o!==i.object.zoom)&&(i.dispatchEvent(ks),s.copy(i.object.position),o=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=r.NONE,u=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),m.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(ks),s.copy(i.object.position),o=i.object.zoom};function A(I){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(I.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",N)),W(I),I.pointerType==="touch"?te(I):R(I))}function w(I){i.enabled!==!1&&(I.pointerType==="touch"?F(I):D(I))}function N(I){i.enabled!==!1&&(I.pointerType==="touch"?$(I):K(),G(I),b.length===0&&(i.domElement.releasePointerCapture(I.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N)))}function U(I){G(I)}function ee(I){i.enabled!==!1&&(window.removeEventListener("keydown",ee),u===r.NONE&&(I.code===i.keys[r.ROTATE]&&!i.noRotate?u=r.ROTATE:I.code===i.keys[r.ZOOM]&&!i.noZoom?u=r.ZOOM:I.code===i.keys[r.PAN]&&!i.noPan&&(u=r.PAN)))}function k(){i.enabled!==!1&&(u=r.NONE,window.addEventListener("keydown",ee))}function R(I){if(c===r.NONE)switch(I.button){case i.mouseButtons.LEFT:c=r.ROTATE;break;case i.mouseButtons.MIDDLE:c=r.ZOOM;break;case i.mouseButtons.RIGHT:c=r.PAN;break}const Z=u!==r.NONE?u:c;Z===r.ROTATE&&!i.noRotate?(v.copy(z(I.pageX,I.pageY)),g.copy(v)):Z===r.ZOOM&&!i.noZoom?(h.copy(E(I.pageX,I.pageY)),x.copy(h)):Z===r.PAN&&!i.noPan&&(y.copy(E(I.pageX,I.pageY)),_.copy(y)),i.dispatchEvent(Cs)}function D(I){const Z=u!==r.NONE?u:c;Z===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(z(I.pageX,I.pageY))):Z===r.ZOOM&&!i.noZoom?x.copy(E(I.pageX,I.pageY)):Z===r.PAN&&!i.noPan&&_.copy(E(I.pageX,I.pageY))}function K(){c=r.NONE,i.dispatchEvent(Rs)}function J(I){if(i.enabled!==!1&&i.noZoom!==!0){switch(I.preventDefault(),I.deltaMode){case 2:h.y-=I.deltaY*.025;break;case 1:h.y-=I.deltaY*.01;break;default:h.y-=I.deltaY*25e-5;break}i.dispatchEvent(Cs),i.dispatchEvent(Rs)}}function te(I){switch(V(I),b.length){case 1:c=r.TOUCH_ROTATE,v.copy(z(b[0].pageX,b[0].pageY)),g.copy(v);break;default:c=r.TOUCH_ZOOM_PAN;const Z=b[0].pageX-b[1].pageX,ue=b[0].pageY-b[1].pageY;d=l=Math.sqrt(Z*Z+ue*ue);const le=(b[0].pageX+b[1].pageX)/2,ye=(b[0].pageY+b[1].pageY)/2;y.copy(E(le,ye)),_.copy(y);break}i.dispatchEvent(Cs)}function F(I){switch(V(I),b.length){case 1:g.copy(v),v.copy(z(I.pageX,I.pageY));break;default:const Z=ne(I),ue=I.pageX-Z.x,le=I.pageY-Z.y;d=Math.sqrt(ue*ue+le*le);const ye=(I.pageX+Z.x)/2,B=(I.pageY+Z.y)/2;_.copy(E(ye,B));break}}function $(I){switch(b.length){case 0:c=r.NONE;break;case 1:c=r.TOUCH_ROTATE,v.copy(z(I.pageX,I.pageY)),g.copy(v);break;case 2:c=r.TOUCH_ZOOM_PAN;for(let Z=0;Z<b.length;Z++)if(b[Z].pointerId!==I.pointerId){const ue=M[b[Z].pointerId];v.copy(z(ue.x,ue.y)),g.copy(v);break}break}i.dispatchEvent(Rs)}function Q(I){i.enabled!==!1&&I.preventDefault()}function W(I){b.push(I)}function G(I){delete M[I.pointerId];for(let Z=0;Z<b.length;Z++)if(b[Z].pointerId==I.pointerId){b.splice(Z,1);return}}function V(I){let Z=M[I.pointerId];Z===void 0&&(Z=new fe,M[I.pointerId]=Z),Z.set(I.pageX,I.pageY)}function ne(I){const Z=I.pointerId===b[0].pointerId?b[1]:b[0];return M[Z.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",A),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",J),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",N),window.removeEventListener("keydown",ee),window.removeEventListener("keyup",k)},this.domElement.addEventListener("contextmenu",Q),this.domElement.addEventListener("pointerdown",A),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",J,{passive:!1}),window.addEventListener("keydown",ee),window.addEventListener("keyup",k),this.handleResize(),this.update()}}const ol={type:"change"},zs={type:"start"},cl={type:"end"},ea=new ka,ul=new yn,dA=Math.cos(70*Vs.DEG2RAD);class hA extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",se),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",se),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ol),i.update(),a=r.NONE},this.update=function(){const P=new L,ie=new tn().setFromUnitVectors(e.up,new L(0,1,0)),me=ie.clone().invert(),ce=new L,Ee=new tn,He=new L,$e=2*Math.PI;return function(pe=null){const O=i.object.position;P.copy(O).sub(i.target),P.applyQuaternion(ie),o.setFromVector3(P),i.autoRotate&&a===r.NONE&&N(A(pe)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let de=i.minAzimuthAngle,he=i.maxAzimuthAngle;isFinite(de)&&isFinite(he)&&(de<-Math.PI?de+=$e:de>Math.PI&&(de-=$e),he<-Math.PI?he+=$e:he>Math.PI&&(he-=$e),de<=he?o.theta=Math.max(de,Math.min(he,o.theta)):o.theta=o.theta>(de+he)/2?Math.max(de,o.theta):Math.min(he,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(l,i.dampingFactor):i.target.add(l),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&M||i.object.isOrthographicCamera?o.radius=te(o.radius):o.radius=te(o.radius*u),P.setFromSpherical(o),P.applyQuaternion(me),O.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,l.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),l.set(0,0,0));let Ce=!1;if(i.zoomToCursor&&M){let we=null;if(i.object.isPerspectiveCamera){const qe=P.length();we=te(qe*u);const Ke=qe-we;i.object.position.addScaledVector(_,Ke),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const qe=new L(b.x,b.y,0);qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ce=!0;const Ke=new L(b.x,b.y,0);Ke.unproject(i.object),i.object.position.sub(Ke).add(qe),i.object.updateMatrixWorld(),we=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(we).add(i.object.position):(ea.origin.copy(i.object.position),ea.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ea.direction))<dA?e.lookAt(i.target):(ul.setFromNormalAndCoplanarPoint(i.object.up,i.target),ea.intersectPlane(ul,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ce=!0);return u=1,M=!1,Ce||ce.distanceToSquared(i.object.position)>s||8*(1-Ee.dot(i.object.quaternion))>s||He.distanceToSquared(i.target)>0?(i.dispatchEvent(ol),ce.copy(i.object.position),Ee.copy(i.object.quaternion),He.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",be),i.domElement.removeEventListener("pointerdown",Le),i.domElement.removeEventListener("pointercancel",S),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",S),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",se),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const s=1e-6,o=new Xs,c=new Xs;let u=1;const l=new L,d=new fe,f=new fe,m=new fe,g=new fe,v=new fe,p=new fe,h=new fe,x=new fe,y=new fe,_=new L,b=new fe;let M=!1;const E=[],z={};function A(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function w(P){const ie=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ie)}function N(P){c.theta-=P}function U(P){c.phi-=P}const ee=function(){const P=new L;return function(me,ce){P.setFromMatrixColumn(ce,0),P.multiplyScalar(-me),l.add(P)}}(),k=function(){const P=new L;return function(me,ce){i.screenSpacePanning===!0?P.setFromMatrixColumn(ce,1):(P.setFromMatrixColumn(ce,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(me),l.add(P)}}(),R=function(){const P=new L;return function(me,ce){const Ee=i.domElement;if(i.object.isPerspectiveCamera){const He=i.object.position;P.copy(He).sub(i.target);let $e=P.length();$e*=Math.tan(i.object.fov/2*Math.PI/180),ee(2*me*$e/Ee.clientHeight,i.object.matrix),k(2*ce*$e/Ee.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ee(me*(i.object.right-i.object.left)/i.object.zoom/Ee.clientWidth,i.object.matrix),k(ce*(i.object.top-i.object.bottom)/i.object.zoom/Ee.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(P,ie){if(!i.zoomToCursor)return;M=!0;const me=i.domElement.getBoundingClientRect(),ce=P-me.left,Ee=ie-me.top,He=me.width,$e=me.height;b.x=ce/He*2-1,b.y=-(Ee/$e)*2+1,_.set(b.x,b.y,1).unproject(i.object).sub(i.object.position).normalize()}function te(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function F(P){d.set(P.clientX,P.clientY)}function $(P){J(P.clientX,P.clientX),h.set(P.clientX,P.clientY)}function Q(P){g.set(P.clientX,P.clientY)}function W(P){f.set(P.clientX,P.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;N(2*Math.PI*m.x/ie.clientHeight),U(2*Math.PI*m.y/ie.clientHeight),d.copy(f),i.update()}function G(P){x.set(P.clientX,P.clientY),y.subVectors(x,h),y.y>0?D(w(y.y)):y.y<0&&K(w(y.y)),h.copy(x),i.update()}function V(P){v.set(P.clientX,P.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),R(p.x,p.y),g.copy(v),i.update()}function ne(P){J(P.clientX,P.clientY),P.deltaY<0?K(w(P.deltaY)):P.deltaY>0&&D(w(P.deltaY)),i.update()}function I(P){let ie=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,i.keyPanSpeed),ie=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(0,-i.keyPanSpeed),ie=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(i.keyPanSpeed,0),ie=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):R(-i.keyPanSpeed,0),ie=!0;break}ie&&(P.preventDefault(),i.update())}function Z(P){if(E.length===1)d.set(P.pageX,P.pageY);else{const ie=Xe(P),me=.5*(P.pageX+ie.x),ce=.5*(P.pageY+ie.y);d.set(me,ce)}}function ue(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const ie=Xe(P),me=.5*(P.pageX+ie.x),ce=.5*(P.pageY+ie.y);g.set(me,ce)}}function le(P){const ie=Xe(P),me=P.pageX-ie.x,ce=P.pageY-ie.y,Ee=Math.sqrt(me*me+ce*ce);h.set(0,Ee)}function ye(P){i.enableZoom&&le(P),i.enablePan&&ue(P)}function B(P){i.enableZoom&&le(P),i.enableRotate&&Z(P)}function tt(P){if(E.length==1)f.set(P.pageX,P.pageY);else{const me=Xe(P),ce=.5*(P.pageX+me.x),Ee=.5*(P.pageY+me.y);f.set(ce,Ee)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ie=i.domElement;N(2*Math.PI*m.x/ie.clientHeight),U(2*Math.PI*m.y/ie.clientHeight),d.copy(f)}function Ae(P){if(E.length===1)v.set(P.pageX,P.pageY);else{const ie=Xe(P),me=.5*(P.pageX+ie.x),ce=.5*(P.pageY+ie.y);v.set(me,ce)}p.subVectors(v,g).multiplyScalar(i.panSpeed),R(p.x,p.y),g.copy(v)}function ke(P){const ie=Xe(P),me=P.pageX-ie.x,ce=P.pageY-ie.y,Ee=Math.sqrt(me*me+ce*ce);x.set(0,Ee),y.set(0,Math.pow(x.y/h.y,i.zoomSpeed)),D(y.y),h.copy(x);const He=(P.pageX+ie.x)*.5,$e=(P.pageY+ie.y)*.5;J(He,$e)}function _e(P){i.enableZoom&&ke(P),i.enablePan&&Ae(P)}function je(P){i.enableZoom&&ke(P),i.enableRotate&&tt(P)}function Le(P){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",S)),Re(P),P.pointerType==="touch"?Se(P):j(P))}function C(P){i.enabled!==!1&&(P.pointerType==="touch"?ve(P):oe(P))}function S(P){Ie(P),E.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",S)),i.dispatchEvent(cl),a=r.NONE}function j(P){let ie;switch(P.button){case 0:ie=i.mouseButtons.LEFT;break;case 1:ie=i.mouseButtons.MIDDLE;break;case 2:ie=i.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case an.DOLLY:if(i.enableZoom===!1)return;$(P),a=r.DOLLY;break;case an.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Q(P),a=r.PAN}else{if(i.enableRotate===!1)return;F(P),a=r.ROTATE}break;case an.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;F(P),a=r.ROTATE}else{if(i.enablePan===!1)return;Q(P),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(zs)}function oe(P){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;W(P);break;case r.DOLLY:if(i.enableZoom===!1)return;G(P);break;case r.PAN:if(i.enablePan===!1)return;V(P);break}}function ae(P){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(P.preventDefault(),i.dispatchEvent(zs),ne(P),i.dispatchEvent(cl))}function se(P){i.enabled===!1||i.enablePan===!1||I(P)}function Se(P){switch(re(P),E.length){case 1:switch(i.touches.ONE){case ai.ROTATE:if(i.enableRotate===!1)return;Z(P),a=r.TOUCH_ROTATE;break;case ai.PAN:if(i.enablePan===!1)return;ue(P),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case ai.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(P),a=r.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;B(P),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(zs)}function ve(P){switch(re(P),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;tt(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ae(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;_e(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;je(P),i.update();break;default:a=r.NONE}}function be(P){i.enabled!==!1&&P.preventDefault()}function Re(P){E.push(P.pointerId)}function Ie(P){delete z[P.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie]==P.pointerId){E.splice(ie,1);return}}function re(P){let ie=z[P.pointerId];ie===void 0&&(ie=new fe,z[P.pointerId]=ie),ie.set(P.pageX,P.pageY)}function Xe(P){const ie=P.pointerId===E[0]?E[1]:E[0];return z[ie]}i.domElement.addEventListener("contextmenu",be),i.domElement.addEventListener("pointerdown",Le),i.domElement.addEventListener("pointercancel",S),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}const fA={type:"change"};class pA extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,a=new tn,s=new L;this.tmpQuaternion=new tn,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new L(0,0,0),this.rotationVector=new L(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),p=v.size[0]/2,h=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-p)/p,this.moveState.pitchDown=(g.pageY-v.offset[1]-h)/h,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,p=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*p,i.rotationVector.y*p,i.rotationVector.z*p,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(s.distanceToSquared(i.object.position)>r||8*(1-a.dot(i.object.quaternion))>r)&&(i.dispatchEvent(fA),a.copy(i.object.quaternion),s.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",o),this.domElement.removeEventListener("pointerdown",u),this.domElement.removeEventListener("pointermove",c),this.domElement.removeEventListener("pointerup",l),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",f),window.removeEventListener("keyup",m)};const o=this.contextMenu.bind(this),c=this.pointermove.bind(this),u=this.pointerdown.bind(this),l=this.pointerup.bind(this),d=this.pointercancel.bind(this),f=this.keydown.bind(this),m=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",o),this.domElement.addEventListener("pointerdown",u),this.domElement.addEventListener("pointermove",c),this.domElement.addEventListener("pointerup",l),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",f),window.addEventListener("keyup",m),this.updateMovementVector(),this.updateRotationVector()}}const mA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Oa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gA=new xo(-1,1,1,-1,0,1);class vA extends Lt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const yA=new vA;class _A{constructor(e){this._mesh=new Qt(yA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xA extends Oa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bl.clone(e.uniforms),this.material=new Tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _A(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ll extends Oa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class AA extends Oa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xA(mA),this.copyPass.material.blending=Mn,this.clock=new id}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ll!==void 0&&(s instanceof ll?i=!0:s instanceof AA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class MA extends Oa{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}function no(){return no=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},no.apply(this,arguments)}function SA(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function yr(n,e){return yr=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},yr(n,e)}function EA(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,yr(n,e)}function io(n){return io=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},io(n)}function wA(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function TA(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function sa(n,e,t){return TA()?sa=Reflect.construct.bind():sa=function(r,a,s){var o=[null];o.push.apply(o,a);var c=Function.bind.apply(r,o),u=new c;return s&&yr(u,s.prototype),u},sa.apply(null,arguments)}function ro(n){var e=typeof Map=="function"?new Map:void 0;return ro=function(i){if(i===null||!wA(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return sa(i,arguments,io(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),yr(r,i)},ro(n)}var Pi=function(n){EA(e,n);function e(t){var i;return i=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,SA(i)}return e}(ro(Error));function Ps(n){return Math.round(n*255)}function kA(n,e,t){return Ps(n)+","+Ps(e)+","+Ps(t)}function dl(n,e,t,i){if(i===void 0&&(i=kA),e===0)return i(t,t,t);var r=(n%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,s=a*(1-Math.abs(r%2-1)),o=0,c=0,u=0;r>=0&&r<1?(o=a,c=s):r>=1&&r<2?(o=s,c=a):r>=2&&r<3?(c=a,u=s):r>=3&&r<4?(c=s,u=a):r>=4&&r<5?(o=s,u=a):r>=5&&r<6&&(o=a,u=s);var l=t-a/2,d=o+l,f=c+l,m=u+l;return i(d,f,m)}var hl={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function CA(n){if(typeof n!="string")return n;var e=n.toLowerCase();return hl[e]?"#"+hl[e]:n}var RA=/^#[a-fA-F0-9]{6}$/,zA=/^#[a-fA-F0-9]{8}$/,PA=/^#[a-fA-F0-9]{3}$/,LA=/^#[a-fA-F0-9]{4}$/,Ls=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,DA=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,OA=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,IA=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Fo(n){if(typeof n!="string")throw new Pi(3);var e=CA(n);if(e.match(RA))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(zA)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(PA))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(LA)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=Ls.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var a=DA.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var s=OA.exec(e);if(s){var o=parseInt(""+s[1],10),c=parseInt(""+s[2],10)/100,u=parseInt(""+s[3],10)/100,l="rgb("+dl(o,c,u)+")",d=Ls.exec(l);if(!d)throw new Pi(4,e,l);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10)}}var f=IA.exec(e.substring(0,50));if(f){var m=parseInt(""+f[1],10),g=parseInt(""+f[2],10)/100,v=parseInt(""+f[3],10)/100,p="rgb("+dl(m,g,v)+")",h=Ls.exec(p);if(!h)throw new Pi(4,e,p);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new Pi(5)}var NA=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},fl=NA;function Ti(n){var e=n.toString(16);return e.length===1?"0"+e:e}function pl(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return fl("#"+Ti(n)+Ti(e)+Ti(t));if(typeof n=="object"&&e===void 0&&t===void 0)return fl("#"+Ti(n.red)+Ti(n.green)+Ti(n.blue));throw new Pi(6)}function UA(n,e,t,i){if(typeof n=="string"&&typeof e=="number"){var r=Fo(n);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof i=="number")return i>=1?pl(n,e,t):"rgba("+n+","+e+","+t+","+i+")";if(typeof n=="object"&&e===void 0&&t===void 0&&i===void 0)return n.alpha>=1?pl(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Pi(7)}function qd(n,e,t){return function(){var r=t.concat(Array.prototype.slice.call(arguments));return r.length>=e?n.apply(this,r):qd(n,e,r)}}function FA(n){return qd(n,n.length,[])}function BA(n,e,t){return Math.max(n,Math.min(e,t))}function HA(n,e){if(e==="transparent")return e;var t=Fo(e),i=typeof t.alpha=="number"?t.alpha:1,r=no({},t,{alpha:BA(0,1,(i*100+parseFloat(n)*100)/100)});return UA(r)}var GA=FA(HA),VA=GA,ti=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ti.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ti.Bounce.In(n*2)*.5:ti.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),cr=function(){return performance.now()},WA=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=cr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var a=this._tweens[i[r]],s=!t;a&&a.update(e,s)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Li={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Li.Utils.Linear;return e<0?a(n[0],n[1],i):e>1?a(n[t],n[t-1],t-i):a(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,a=Li.Utils.Bernstein,s=0;s<=i;s++)t+=r(1-e,i-s)*r(e,s)*n[s]*a(i,s);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),a=Li.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),a(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(a(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(a(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):a(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Li.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var a=(t-n)*.5,s=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*t+a+s)*c+(-3*e+3*t-2*a-s)*o+a*r+e}}},jA=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),ao=new WA,ml=function(){function n(e,t){t===void 0&&(t=ao),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ti.Linear.None,this._interpolationFunction=Li.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=jA.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=cr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var a in this._valuesEnd)r[a]=this._valuesEnd[a];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,a){for(var s in i){var o=e[s],c=Array.isArray(o),u=c?"array":typeof o,l=!c&&Array.isArray(i[s]);if(!(u==="undefined"||u==="function")){if(l){var d=i[s];if(d.length===0)continue;for(var f=[o],m=0,g=d.length;m<g;m+=1){var v=this._handleRelativeValue(o,d[m]);if(isNaN(v)){l=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}l&&(i[s]=f)}if((u==="object"||c)&&o&&!l){t[s]=c?[]:{};var p=o;for(var h in p)t[s][h]=p[h];r[s]=c?[]:{};var d=i[s];if(!this._isDynamic){var x={};for(var h in d)x[h]=d[h];i[s]=d=x}this._setupProperties(p,t[s],d,r[s],a)}else(typeof t[s]>"u"||a)&&(t[s]=o),c||(t[s]*=1),l?r[s]=i[s].slice().reverse():r[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=cr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=cr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=ao),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=ti.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Li.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=cr()),t===void 0&&(t=!0),this._isPaused)return!0;var i,r,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var s=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(i in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[i]=="string"&&(this._valuesStartRepeat[i]=this._valuesStartRepeat[i]+parseFloat(this._valuesEnd[i])),this._yoyo&&this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,c=this._chainedTweens.length;o<c;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var a in i)if(t[a]!==void 0){var s=t[a]||0,o=i[a],c=Array.isArray(e[a]),u=Array.isArray(o),l=!c&&u;l?e[a]=this._interpolationFunction(o,r):typeof o=="object"&&o?this._updateProperties(e[a],s,o,r):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[a]=s+(o-s)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),cn=ao;cn.getAll.bind(cn);cn.removeAll.bind(cn);cn.add.bind(cn);cn.remove.bind(cn);var XA=cn.update.bind(cn);function $A(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var qA=`.scene-nav-info {
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
}`;$A(qA);function YA(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function KA(n,e,t){return e=rb(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ZA(n,e){return QA(n)||YA(n,e)||Yd(n,e)||nb()}function rr(n){return JA(n)||eb(n)||Yd(n)||tb()}function JA(n){if(Array.isArray(n))return so(n)}function QA(n){if(Array.isArray(n))return n}function eb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Yd(n,e){if(n){if(typeof n=="string")return so(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return so(n,e)}}function so(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function tb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ib(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function rb(n){var e=ib(n,"string");return typeof e=="symbol"?e:String(e)}var it=window.THREE?window.THREE:{WebGLRenderer:Kl,Scene:S0,PerspectiveCamera:Vt,Raycaster:rd,SRGBColorSpace:lt,TextureLoader:$0,Vector2:fe,Vector3:L,Box3:ii,Color:We,Mesh:Qt,SphereGeometry:Pa,MeshBasicMaterial:vo,BackSide:Rt,EventDispatcher:nn,MOUSE:an,Quaternion:tn,Spherical:Xs,Clock:id},Kd=No({props:{width:{default:window.innerWidth,onChange:function(e,t,i){isNaN(e)&&(t.width=i)}},height:{default:window.innerHeight,onChange:function(e,t,i){isNaN(e)&&(t.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(a){return a.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(a){return e.hoverFilter(a.object)}).sort(function(a,s){return e.hoverOrderComparator(a.object,s.object)}),r=i.length?i[0]:null;t=r?r.object:null,e.intersectionPoint=r?r.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&Ye(e.tooltipContent)(t)||"",e.hoverObj=t)}XA()}return this},getPointerPos:function(e){var t=e.pointerPos,i=t.x,r=t.y;return{x:i,y:r}},cameraPosition:function(e,t,i,r){var a=e.camera;if(t&&e.initialised){var s=t,o=i||{x:0,y:0,z:0};if(!r)l(s),d(o);else{var c=Object.assign({},a.position),u=f();new ml(c).to(s,r).easing(ti.Quadratic.Out).onUpdate(l).start(),new ml(u).to(o,r/3).easing(ti.Quadratic.Out).onUpdate(d).start()}return this}return Object.assign({},a.position,{lookAt:f()});function l(m){var g=m.x,v=m.y,p=m.z;g!==void 0&&(a.position.x=g),v!==void 0&&(a.position.y=v),p!==void 0&&(a.position.z=p)}function d(m){var g=new it.Vector3(m.x,m.y,m.z);e.controls.target?e.controls.target=g:a.lookAt(g)}function f(){return Object.assign(new it.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,a=new Array(r>3?r-3:0),s=3;s<r;s++)a[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,a),t,i)},fitToBbox:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var s=new it.Vector3(0,0,0),o=Math.max.apply(Math,rr(Object.entries(t).map(function(m){var g=ZA(m,2),v=g[0],p=g[1];return Math.max.apply(Math,rr(p.map(function(h){return Math.abs(s[v]-h)})))})))*2,c=(1-r*2/e.height)*a.fov,u=o/Math.atan(c*Math.PI/180),l=u/a.aspect,d=Math.max(u,l);if(d>0){var f=s.clone().sub(a.position).normalize().multiplyScalar(-d);this.cameraPosition(f,s,i)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new it.Box3(new it.Vector3(0,0,0),new it.Vector3(0,0,0)),r=e.objects.filter(t);return r.length?(r.forEach(function(a){return i.expandByObject(a)}),Object.assign.apply(Object,rr(["x","y","z"].map(function(a){return KA({},a,[i.min[a],i.max[a]])})))):null},getScreenCoords:function(e,t,i,r){var a=new it.Vector3(t,i,r);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),s=new it.Raycaster;return s.setFromCamera(a,e.camera),Object.assign({},s.ray.at(r,new it.Vector3))},intersectingObjects:function(e,t,i){var r=new it.Vector2(t/e.width*2-1,-(i/e.height)*2+1),a=new it.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.setFromCamera(r,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new it.Scene,camera:new it.PerspectiveCamera,clock:new it.Clock}},init:function(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,a=r===void 0?"trackball":r,s=i.rendererConfig,o=s===void 0?{}:s,c=i.extraRenderers,u=c===void 0?[]:c,l=i.waitForLoadComplete,d=l===void 0?!0:l;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new it.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(m){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&m.type==="pointermove"&&(m.pressure>0||t.isPointerPressed)&&(m.pointerType!=="touch"||m.movementX===void 0||[m.movementX,m.movementY].some(function(p){return Math.abs(p)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var g=v(t.container);t.pointerPos.x=m.pageX-g.left,t.pointerPos.y=m.pageY-g.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(p){var h=p.getBoundingClientRect(),x=window.pageXOffset||document.documentElement.scrollLeft,y=window.pageYOffset||document.documentElement.scrollTop;return{top:h.top+y,left:h.left+x}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new it.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},o)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=u,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new bA(t.renderer),t.postProcessingComposer.addPass(new MA(t.scene,t.camera)),t.controls=new{trackball:lA,orbit:hA,fly:pA}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(rr(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new it.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!d,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(rr(e.extraRenderers)).forEach(function(a){return a.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new it.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var i=Fo(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new it.Color(VA(1,e.backgroundColor)),i)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new it.TextureLoader().load(e.backgroundImageUrl,function(a){a.colorSpace=it.SRGBColorSpace,e.skysphere.material=new it.MeshBasicMaterial({map:a,side:it.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(a){return e.scene.remove(a)}),e.lights.forEach(function(a){return e.scene.add(a)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(a){return e.scene.remove(a)}),e.objects.forEach(function(a){return e.scene.add(a)}));function r(){e.loadComplete=e.scene.visible=!0}}});function ab(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}var sb=`.graph-info-msg {
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
}`;ab(sb);function gl(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function ta(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gl(Object(t),!0).forEach(function(i){Ar(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):gl(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ar(n,e,t){return e=hb(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ia(n){return ob(n)||cb(n)||ub(n)||lb()}function ob(n){if(Array.isArray(n))return oo(n)}function cb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ub(n,e){if(n){if(typeof n=="string")return oo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return oo(n,e)}}function oo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function lb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function db(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function hb(n){var e=db(n,"string");return typeof e=="symbol"?e:String(e)}function Zd(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(r){return{default:t[r](),onChange:function(s,o){o[n][r](s)},triggerUpdate:!1}},linkMethod:function(r){return function(a){for(var s=a[n],o=arguments.length,c=new Array(o>1?o-1:0),u=1;u<o;u++)c[u-1]=arguments[u];var l=s[r].apply(s,c);return l===s?this:l}}}}var vl=window.THREE?window.THREE:{AmbientLight:Z0,DirectionalLight:K0,Vector3:L},fb=170,Jd=Zd("forceGraph",$d),pb=Object.assign.apply(Object,Ia(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return Ar({},n,Jd.linkProp(n))}))),mb=Object.assign.apply(Object,Ia(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return Ar({},n,Jd.linkMethod(n))}))),oa=Zd("renderObjs",Kd),gb=Object.assign.apply(Object,Ia(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return Ar({},n,oa.linkProp(n))}))),vb=Object.assign.apply(Object,Ia(["lights","cameraPosition","postProcessingComposer"].map(function(n){return Ar({},n,oa.linkMethod(n))})).concat([{graph2ScreenCoords:oa.linkMethod("getScreenCoords"),screen2GraphCoords:oa.linkMethod("getSceneCoords")}])),yb=No({props:ta(ta({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var i=t.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},pb),gb),methods:ta(ta({zoomToFit:function(e,t,i){for(var r,a=arguments.length,s=new Array(a>3?a-3:0),o=3;o<a;o++)s[o-3]=arguments[o];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,s),t,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},mb),vb),stateInit:function(e){var t=e.controlType,i=e.rendererConfig,r=e.extraRenderers,a=new $d;return{forceGraph:a,renderObjs:Kd({controlType:t,rendererConfig:i,extraRenderers:r}).objects([a]).lights([new vl.AmbientLight(13421772,Math.PI),new vl.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var i=document.createElement("div");t.container.appendChild(i),t.renderObjs(i);var r=t.renderObjs.camera(),a=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=r.position.z;var o;t.container.appendChild(o=document.createElement("div")),o.className="graph-info-msg",o.textContent="",t.forceGraph.onLoading(function(){o.textContent="Loading..."}).onFinishLoading(function(){o.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(r.lookAt(t.forceGraph.position),t.lastSetCameraZ=r.position.z=Math.cbrt(t.graphData.nodes.length)*fb)}).onFinishUpdate(function(){if(t._dragControls){var c=t.graphData.nodes.find(function(l){return l.__initialFixedPos&&!l.__disposeControlsAfterDrag});c?c.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var u=t._dragControls=new J0(t.graphData.nodes.map(function(l){return l.__threeObj}).filter(function(l){return l}),r,a.domElement);u.addEventListener("dragstart",function(l){s.enabled=!1,l.object.__initialPos=l.object.position.clone(),l.object.__prevPos=l.object.position.clone();var d=gn(l.object).__data;!d.__initialFixedPos&&(d.__initialFixedPos={fx:d.fx,fy:d.fy,fz:d.fz}),!d.__initialPos&&(d.__initialPos={x:d.x,y:d.y,z:d.z}),["x","y","z"].forEach(function(f){return d["f".concat(f)]=d[f]}),a.domElement.classList.add("grabbable")}),u.addEventListener("drag",function(l){var d=gn(l.object);if(!l.object.hasOwnProperty("__graphObjType")){var f=l.object.__initialPos,m=l.object.__prevPos,g=l.object.position;d.position.add(g.clone().sub(m)),m.copy(g),g.copy(f)}var v=d.__data,p=d.position,h={x:p.x-v.x,y:p.y-v.y,z:p.z-v.z};["x","y","z"].forEach(function(x){return v["f".concat(x)]=v[x]=p[x]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,h)}),u.addEventListener("dragend",function(l){delete l.object.__initialPos,delete l.object.__prevPos;var d=gn(l.object).__data;d.__disposeControlsAfterDrag&&(u.dispose(),delete d.__disposeControlsAfterDrag);var f=d.__initialFixedPos,m=d.__initialPos,g={x:m.x-d.x,y:m.y-d.y,z:m.z-d.z};f&&(["x","y","z"].forEach(function(v){var p="f".concat(v);f[p]===void 0&&delete d[p]}),delete d.__initialFixedPos,delete d.__initialPos,d.__dragged&&(delete d.__dragged,t.onNodeDragEnd(d,g))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),a.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.hoverOrderComparator(function(c,u){var l=gn(c);if(!l)return 1;var d=gn(u);if(!d)return-1;var f=function(g){return g.__graphObjType==="node"};return f(d)-f(l)}).tooltipContent(function(c){var u=gn(c);return u&&Ye(t["".concat(u.__graphObjType,"Label")])(u.__data)||""}).hoverDuringDrag(!1).onHover(function(c){var u=gn(c);if(u!==t.hoverObj){var l=t.hoverObj?t.hoverObj.__graphObjType:null,d=t.hoverObj?t.hoverObj.__data:null,f=u?u.__graphObjType:null,m=u?u.__data:null;if(l&&l!==f){var g=t["on".concat(l==="node"?"Node":"Link","Hover")];g&&g(null,d)}if(f){var v=t["on".concat(f==="node"?"Node":"Link","Hover")];v&&v(m,l===f?d:null)}a.domElement.classList[u&&t["on".concat(f==="node"?"Node":"Link","Click")]||!u&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=u}}).clickAfterDrag(!1).onClick(function(c,u){var l=gn(c);if(l){var d=t["on".concat(l.__graphObjType==="node"?"Node":"Link","Click")];d&&d(l.__data,u)}else t.onBackgroundClick&&t.onBackgroundClick(u)}).onRightClick(function(c,u){var l=gn(c);if(l){var d=t["on".concat(l.__graphObjType==="node"?"Node":"Link","RightClick")];d&&d(l.__data,u)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(u)}),this._animationCycle()}});function gn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}function _b(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,s,o=[],c=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;c=!1}else for(;!(c=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);c=!0);}catch(l){u=!0,r=l}finally{try{if(!c&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}function xb(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function yl(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Lb(i.key),i)}}function Ab(n,e,t){return e&&yl(n.prototype,e),t&&yl(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function bb(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&co(n,e)}function ba(n){return ba=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},ba(n)}function co(n,e){return co=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},co(n,e)}function Mb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Sb(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Eb(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sb(n)}function wb(n){var e=Mb();return function(){var i=ba(n),r;if(e){var a=ba(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Eb(this,r)}}function _l(n,e){return kb(n)||_b(n,e)||Qd(n,e)||zb()}function na(n){return Tb(n)||Cb(n)||Qd(n)||Rb()}function Tb(n){if(Array.isArray(n))return uo(n)}function kb(n){if(Array.isArray(n))return n}function Cb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Qd(n,e){if(n){if(typeof n=="string")return uo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return uo(n,e)}}function uo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function Rb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Lb(n){var e=Pb(n,"string");return typeof e=="symbol"?e:String(e)}var ki=typeof window<"u"&&window.THREE?window.THREE:{LinearFilter:Ft,Sprite:w0,SpriteMaterial:Zl,SRGBColorSpace:lt,Texture:zt},Db=function(n){bb(t,n);var e=wb(t);function t(){var i,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"rgba(255, 255, 255, 1)";return xb(this,t),i=e.call(this,new ki.SpriteMaterial),i._text="".concat(r),i._textHeight=a,i._color=s,i._backgroundColor=!1,i._padding=0,i._borderWidth=0,i._borderRadius=0,i._borderColor="white",i._strokeWidth=0,i._strokeColor="white",i._fontFace="system-ui",i._fontSize=90,i._fontWeight="normal",i._canvas=document.createElement("canvas"),i._genCanvas(),i}return Ab(t,[{key:"text",get:function(){return this._text},set:function(r){this._text=r,this._genCanvas()}},{key:"textHeight",get:function(){return this._textHeight},set:function(r){this._textHeight=r,this._genCanvas()}},{key:"color",get:function(){return this._color},set:function(r){this._color=r,this._genCanvas()}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(r){this._backgroundColor=r,this._genCanvas()}},{key:"padding",get:function(){return this._padding},set:function(r){this._padding=r,this._genCanvas()}},{key:"borderWidth",get:function(){return this._borderWidth},set:function(r){this._borderWidth=r,this._genCanvas()}},{key:"borderRadius",get:function(){return this._borderRadius},set:function(r){this._borderRadius=r,this._genCanvas()}},{key:"borderColor",get:function(){return this._borderColor},set:function(r){this._borderColor=r,this._genCanvas()}},{key:"fontFace",get:function(){return this._fontFace},set:function(r){this._fontFace=r,this._genCanvas()}},{key:"fontSize",get:function(){return this._fontSize},set:function(r){this._fontSize=r,this._genCanvas()}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(r){this._fontWeight=r,this._genCanvas()}},{key:"strokeWidth",get:function(){return this._strokeWidth},set:function(r){this._strokeWidth=r,this._genCanvas()}},{key:"strokeColor",get:function(){return this._strokeColor},set:function(r){this._strokeColor=r,this._genCanvas()}},{key:"_genCanvas",value:function(){var r=this,a=this._canvas,s=a.getContext("2d"),o=Array.isArray(this.borderWidth)?this.borderWidth:[this.borderWidth,this.borderWidth],c=o.map(function(z){return z*r.fontSize*.1}),u=Array.isArray(this.borderRadius)?this.borderRadius:[this.borderRadius,this.borderRadius,this.borderRadius,this.borderRadius],l=u.map(function(z){return z*r.fontSize*.1}),d=Array.isArray(this.padding)?this.padding:[this.padding,this.padding],f=d.map(function(z){return z*r.fontSize*.1}),m=this.text.split(`
`),g="".concat(this.fontWeight," ").concat(this.fontSize,"px ").concat(this.fontFace);s.font=g;var v=Math.max.apply(Math,na(m.map(function(z){return s.measureText(z).width}))),p=this.fontSize*m.length;if(a.width=v+c[0]*2+f[0]*2,a.height=p+c[1]*2+f[1]*2,this.borderWidth){if(s.strokeStyle=this.borderColor,c[0]){var h=c[0]/2;s.lineWidth=c[0],s.beginPath(),s.moveTo(h,l[0]),s.lineTo(h,a.height-l[3]),s.moveTo(a.width-h,l[1]),s.lineTo(a.width-h,a.height-l[2]),s.stroke()}if(c[1]){var x=c[1]/2;s.lineWidth=c[1],s.beginPath(),s.moveTo(Math.max(c[0],l[0]),x),s.lineTo(a.width-Math.max(c[0],l[1]),x),s.moveTo(Math.max(c[0],l[3]),a.height-x),s.lineTo(a.width-Math.max(c[0],l[2]),a.height-x),s.stroke()}if(this.borderRadius){var y=Math.max.apply(Math,na(c)),_=y/2;s.lineWidth=y,s.beginPath(),[!!l[0]&&[l[0],_,_,l[0]],!!l[1]&&[a.width-l[1],a.width-_,_,l[1]],!!l[2]&&[a.width-l[2],a.width-_,a.height-_,a.height-l[2]],!!l[3]&&[l[3],_,a.height-_,a.height-l[3]]].filter(function(z){return z}).forEach(function(z){var A=_l(z,4),w=A[0],N=A[1],U=A[2],ee=A[3];s.moveTo(w,U),s.quadraticCurveTo(N,U,N,ee)}),s.stroke()}}this.backgroundColor&&(s.fillStyle=this.backgroundColor,this.borderRadius?(s.beginPath(),s.moveTo(c[0],l[0]),[[c[0],l[0],a.width-l[1],c[1],c[1],c[1]],[a.width-c[0],a.width-c[0],a.width-c[0],c[1],l[1],a.height-l[2]],[a.width-c[0],a.width-l[2],l[3],a.height-c[1],a.height-c[1],a.height-c[1]],[c[0],c[0],c[0],a.height-c[1],a.height-l[3],l[0]]].forEach(function(z){var A=_l(z,6),w=A[0],N=A[1],U=A[2],ee=A[3],k=A[4],R=A[5];s.quadraticCurveTo(w,ee,N,k),s.lineTo(U,R)}),s.closePath(),s.fill()):s.fillRect(c[0],c[1],a.width-c[0]*2,a.height-c[1]*2)),s.translate.apply(s,na(c)),s.translate.apply(s,na(f)),s.font=g,s.fillStyle=this.color,s.textBaseline="bottom";var b=this.strokeWidth>0;b&&(s.lineWidth=this.strokeWidth*this.fontSize/10,s.strokeStyle=this.strokeColor),m.forEach(function(z,A){var w=(v-s.measureText(z).width)/2,N=(A+1)*r.fontSize;b&&s.strokeText(z,w,N),s.fillText(z,w,N)}),this.material.map&&this.material.map.dispose();var M=this.material.map=new ki.Texture(a);M.minFilter=ki.LinearFilter,M.colorSpace=ki.SRGBColorSpace,M.needsUpdate=!0;var E=this.textHeight*m.length+o[1]*2+d[1]*2;this.scale.set(E*a.width/a.height,E,0)}},{key:"clone",value:function(){return new this.constructor(this.text,this.textHeight,this.color).copy(this)}},{key:"copy",value:function(r){return ki.Sprite.prototype.copy.call(this,r),this.color=r.color,this.backgroundColor=r.backgroundColor,this.padding=r.padding,this.borderWidth=r.borderWidth,this.borderColor=r.borderColor,this.fontFace=r.fontFace,this.fontSize=r.fontSize,this.fontWeight=r.fontWeight,this.strokeWidth=r.strokeWidth,this.strokeColor=r.strokeColor,this}}]),t}(ki.Sprite);const Ob=[{id:"nīl",size:6,type:"noun"},{id:"mēṉi",size:5,type:"noun"},{id:"vāl",size:5,type:"noun"},{id:"iḻai",size:10,type:"noun"},{id:"pākattu",size:1},{id:"oru",size:4,type:"noun"},{id:"iru",size:5,type:"noun"},{id:"tāḷ",size:2,type:"noun"},{id:"niḻal",size:4,type:"noun"},{id:"kīḻ",size:1},{id:"mu",size:1,type:"noun"},{id:"vaku",size:1,type:"verb"},{id:"ulakam",size:1,type:"noun"},{id:"vāḻ",size:73,type:"verb"},{id:"yātaṉ",size:10},{id:"yaviṉi",size:10},{id:"nel",size:9,type:"noun"},{id:"pal",size:24,type:"noun"},{id:"poli",size:2,type:"noun"},{id:"poṉ",size:6,type:"noun"},{id:"peru(m)",size:29,type:"adjective"},{id:"ciṟa",size:8,type:"verb"},{id:"veṉa",size:9},{id:"vēṭṭōḷ",size:10},{id:"yāy",size:11,type:"noun"},{id:"yām",size:18,type:"pronoun"},{id:"naṉai",size:2,type:"noun"},{id:"kāñcic",size:1},{id:"ciṉai",size:9,type:"verb"},{id:"ciṟu(m)",size:9,type:"adjective"},{id:"miṉ",size:5,type:"noun"},{id:"yāṇar",size:9,type:"noun"},{id:"ūr",size:47,type:"noun"},{id:"pāṇ",size:21,type:"noun"},{id:"māri",size:3,type:"noun"},{id:"vāy",size:3,type:"noun"},{id:"vaḷam",size:4,type:"noun"},{id:"naṉi",size:7},{id:"pū(m)",size:23,type:"noun"},{id:"māattup",size:2},{id:"pulavu",size:2,type:"noun"},{id:"taṭpam",size:36,type:"noun"},{id:"tuṟai",size:30,type:"noun"},{id:"yūraṉ",size:20},{id:"tāṉ",size:29,type:"pronoun"},{id:"koḷ",size:16,type:"verb"},{id:"cel",size:25,type:"noun"},{id:"puṉal",size:17,type:"noun"},{id:"aṭu",size:8,type:"verb"},{id:"maka",size:31,type:"noun"},{id:"iṭu",size:1,type:"verb"},{id:"voḷ",size:4},{id:"ḷiḻai",size:1},{id:"maṇal",size:6,type:"noun"},{id:"cimaiyattu",size:1},{id:"erumai",size:6,type:"noun"},{id:"kiḷai",size:1,type:"noun"},{id:"i-",size:27,type:"pronoun"},{id:"narampu",size:1,type:"noun"},{id:"aṉṉai",size:28,type:"noun"},{id:"vēṇṭu",size:15,type:"verb"},{id:"yutuk",size:1},{id:"kaṇ",size:42,type:"noun"},{id:"ēr",size:3,type:"noun"},{id:"koṭip",size:3},{id:"pācu",size:2},{id:"aṭumpu",size:1,type:"noun"},{id:"pari",size:4,type:"noun"},{id:"vūrpu",size:1},{id:"iḻi",size:2,type:"verb"},{id:"neytal",size:5,type:"noun"},{id:"mayakkam",size:2},{id:"varavu",size:43,type:"noun"},{id:"nī",size:57,type:"pronoun"},{id:"pūp",size:3},{id:"pōl",size:8,type:"verb"},{id:"uṇ",size:16},{id:"maruvu",size:1,type:"verb"},{id:"no/nō",size:7,type:"verb"},{id:"maruntu",size:4,type:"noun"},{id:"ākkam",size:39,type:"noun"},{id:"namm",size:3},{id:"niṟap",size:1},{id:"kaṭal",size:8,type:"noun"},{id:"puḷ",size:2,type:"noun"},{id:"°āṉ",size:1,type:"verb"},{id:"tuṉpam",size:1,type:"noun"},{id:"uṟu",size:11,type:"verb"},{id:"tuyara",size:1},{id:"nīkku",size:2,type:"verb"},{id:"viṉpu",size:1},{id:"vicaikkum",size:1},{id:"a-",size:52,type:"pronoun"},{id:"tēr",size:6,type:"noun"},{id:"puṉṉai",size:3,type:"noun"},{id:"ñāḻal",size:6,type:"noun"},{id:"taṇṇ",size:3},{id:"am",size:9,type:"adjective"},{id:"amaintaṉaṉ",size:1},{id:"amai",size:6,type:"noun"},{id:"mā",size:7,type:"adjective"},{id:"ūrp",size:2},{id:"maṭi",size:1,type:"noun"},{id:"poḻutu",size:5,type:"noun"},{id:"nal",size:39,type:"adjective"},{id:"mikac",size:2},{id:"cā",size:5,type:"verb"},{id:"naḷḷeṉ",size:2,type:"verb"},{id:"viyal",size:3,type:"noun"},{id:"tērc",size:1},{id:"celvak",size:1},{id:"koṇkaṉ",size:13,type:"noun"},{id:"muḻakkam",size:3},{id:"tirai",size:4,type:"verb"},{id:"taru",size:1},{id:"muttam",size:1,type:"noun"},{id:"veḷ",size:14,type:"adjective"},{id:"imai",size:1,type:"noun"},{id:"eṉap",size:5},{id:"civantaṉṟu",size:1},{id:"yavar",size:3},{id:"nāṭṭut",size:1},{id:"tutik",size:1},{id:"kāl",size:17,type:"noun"},{id:"aṉṉam",size:1,type:"noun"},{id:"tuṇai",size:10,type:"noun"},{id:"miti",size:1,type:"noun"},{id:"vaḷaiyiṉum",size:1},{id:"ilaṅku",size:3,type:"verb"},{id:"kaliḻ",size:2,type:"verb"},{id:"ākam",size:1,type:"noun"},{id:"yeṉ",size:2},{id:"tōḻaṉ",size:37},{id:"cuṭar",size:5,type:"noun"},{id:"nutal",size:9,type:"noun"},{id:"pacappac",size:2},{id:"cāayp",size:1},{id:"paṭar",size:6,type:"noun"},{id:"mel",size:11,type:"adjective"},{id:"paṭu",size:9,type:"verb"},{id:"kēḷ",size:19,type:"verb"},{id:"tuñcu",size:4,type:"verb"},{id:"kaḻi",size:6},{id:"muṇṭakam",size:1,type:"noun"},{id:"malar",size:19,type:"noun"},{id:"cērppu",size:2,type:"noun"},{id:"em",size:11,type:"pronoun"},{id:"tōḷ",size:12,type:"noun"},{id:"tuṟa",size:3,type:"verb"},{id:"e-",size:17,type:"pronoun"},{id:"kol",size:5,type:"verb"},{id:"nīrp",size:4},{id:"tūmpu",size:3,type:"noun"},{id:"pūk",size:6},{id:"keḻu",size:8},{id:"yevaṉ",size:2},{id:"nāḷ",size:7,type:"noun"},{id:"maṉai",size:10,type:"noun"},{id:"naṭu",size:2,type:"verb"},{id:"vayalai",size:1,type:"noun"},{id:"vēḻam",size:8,type:"noun"},{id:"cuṟṟam",size:1,type:"noun"},{id:"koṭu(m)",size:5,type:"adjective"},{id:"nāṇ",size:2,type:"noun"},{id:"nallaṉ",size:1},{id:"yallaṉ",size:1},{id:"taṭa(m)",size:5,type:"adjective"},{id:"amma",size:35},{id:"cūḻ",size:1,type:"verb"},{id:"maruṅku",size:3,type:"noun"},{id:"iraik",size:1},{id:"koḷīic",size:1},{id:"ciṉaik",size:1},{id:"kayal",size:3,type:"noun"},{id:"māy",size:1,type:"verb"},{id:"pirintum",size:1},{id:"nām",size:21,type:"pronoun"},{id:"yarum",size:7},{id:"tavam",size:1,type:"noun"},{id:"ilaic",size:1},{id:"cerunti",size:1,type:"noun"},{id:"tāvu",size:2,type:"verb"},{id:"virum",size:4},{id:"kaḻic",size:1},{id:"varak",size:1},{id:"maṟantōm",size:1},{id:"neṉṉal",size:1},{id:"ōkku",size:3,type:"verb"},{id:"uṭai",size:4,type:"noun"},{id:"ūrār",size:1},{id:"peṇ",size:8,type:"noun"},{id:"eṉ",size:24,type:"pronoun"},{id:"moḻi",size:4,type:"noun"},{id:"veṉṉai",size:1},{id:"yatu",size:1},{id:"pai",size:3},{id:"vem",size:14},{id:"mai",size:2,type:"noun"},{id:"nērēm",size:1},{id:"celkuvam",size:1},{id:"nārai",size:3,type:"noun"},{id:"yiraṟṟum",size:1},{id:"maṭalam",size:1},{id:"peṇṇai",size:1,type:"noun"},{id:"nuṇ",size:4,type:"adjective"},{id:"aṭai",size:2,type:"noun"},{id:"karai",size:4,type:"noun"},{id:"nammōṭu",size:1},{id:"āṭu",size:7,type:"noun"},{id:"ṇam",size:1},{id:"maṟaii",size:1},{id:"yaṉṉai",size:1},{id:"kaṭi",size:4,type:"noun"},{id:"aḻu",size:1,type:"verb"},{id:"nīla",size:1},{id:"kūmpum",size:1},{id:"mālai",size:3,type:"noun"},{id:"yaṉṉa",size:8},{id:"yaṇi",size:1},{id:"toṟum",size:2},{id:"vari",size:5,type:"noun"},{id:"maṇi",size:5,type:"noun"},{id:"nīrc",size:1},{id:"yāṉ",size:4,type:"pronoun"},{id:"aṟam",size:4,type:"noun"},{id:"il",size:19,type:"noun"},{id:"āḷ",size:2,type:"noun"},{id:"ciṉavuveṉ",size:1},{id:"takaikkuveṉ",size:1},{id:"ceṉṟaṉeṉ",size:1},{id:"piṉ",size:3},{id:"niṉai",size:2,type:"verb"},{id:"iraṅkip",size:1},{id:"eyyāmaiyiṉ",size:1},{id:"ētil",size:1,type:"adjective"},{id:"paṟṟu",size:2,type:"noun"},{id:"yaṉpu",size:1},{id:"pulak",size:2},{id:"cēr",size:2,type:"verb"},{id:"karuppu",size:6,type:"adjective"},{id:"āṟṟuka",size:1},{id:"tōṟka",size:1},{id:"vel",size:8,type:"verb"},{id:"miku",size:3,type:"verb"},{id:"vāyiṉa",size:3},{id:"vaḷiya",size:1},{id:"mal",size:2,type:"noun"},{id:"iru(m)",size:6,type:"adjective"},{id:"nīr",size:7,type:"pronoun"},{id:"aṟal",size:3,type:"noun"},{id:"viri",size:4,type:"verb"},{id:"lam",size:1},{id:"pulampu",size:4,type:"noun"},{id:"al",size:21,type:"verb"},{id:"muṇṭakak",size:1},{id:"kōtai",size:2,type:"noun"},{id:"naṉaiyat",size:1},{id:"teḷ",size:4,type:"adjective"},{id:"tiraip",size:1},{id:"pauvam",size:1,type:"noun"},{id:"yoḷḷ",size:1},{id:"yuyar",size:1},{id:"vīḻ",size:1,type:"noun"},{id:"veḷḷām ",size:1},{id:"yoḷ",size:5},{id:"āy",size:2,type:"verb"},{id:"ārppat",size:1},{id:"vaṇṭal",size:2,type:"noun"},{id:"pāvai",size:5,type:"noun"},{id:"vauvu",size:3,type:"verb"},{id:"poṭi",size:1},{id:"yaḷaiik",size:1},{id:"vauva",size:1},{id:"vuṇ",size:3},{id:"civa",size:4,type:"verb"},{id:"yuṇ",size:2},{id:"vaṇṭu",size:7,type:"noun"},{id:"iṉam",size:2,type:"noun"},{id:"moyppat",size:1},{id:"tumpai",size:1},{id:"yiḷa",size:2},{id:"mulai",size:6,type:"noun"},{id:"pūṭṭu",size:2,type:"noun"},{id:"yuṟāa",size:1},{id:"vaṟu(m)",size:2,type:"adjective"},{id:"maṭāa",size:1},{id:"vuṇṇāp",size:1},{id:"yuṭai",size:1},{id:"poṅku",size:1,type:"verb"},{id:"uḷai",size:1,type:"noun"},{id:"vaṭai",size:1},{id:"pakar",size:1,type:"verb"},{id:"yāmam",size:1,type:"noun"},{id:"koṇkaṉatu",size:1},{id:"naṭpu",size:1,type:"noun"},{id:"tillai",size:1,type:"noun"},{id:"vēli",size:1,type:"noun"},{id:"yiv",size:1},{id:"vūrk",size:1},{id:"kal",size:5,type:"noun"},{id:"leṉ",size:1},{id:"kauvai",size:1,type:"noun"},{id:"yarumpu",size:1},{id:"mali",size:3,type:"verb"},{id:"kāṉal",size:2,type:"noun"},{id:"iv",size:2},{id:"vūr",size:4},{id:"cey",size:15,type:"noun"},{id:"vāṉātu",size:1},{id:"mell",size:4},{id:"piri",size:14,type:"verb"},{id:"pull",size:2},{id:"eṉṟaṉa",size:1},{id:"puri",size:1,type:"noun"},{id:"kāṇmati",size:1},{id:"kaḻip",size:1},{id:"pāy",size:5,type:"verb"},{id:"neṭu(m)",size:11,type:"adjective"},{id:"tērk",size:2},{id:"koṇkaṉōṭu",size:1},{id:"paṇait",size:3},{id:"ai",size:2,type:"noun"},{id:"akal",size:4,type:"noun"},{id:"valkul",size:1},{id:"kaṇṇi",size:1,type:"noun"},{id:"nēr",size:2,type:"noun"},{id:"kōḷ",size:2,type:"noun"},{id:"vaḷai",size:6,type:"noun"},{id:"nekiḻ",size:5,type:"verb"},{id:"tuṟaivaṟkuc",size:1},{id:"niṉṉ",size:1},{id:"viṉavu",size:1,type:"verb"},{id:"numm",size:1},{id:"ūrt",size:1},{id:"tiṇ",size:4,type:"adjective"},{id:"koṇkaṉai",size:1},{id:"naya",size:6,type:"verb"},{id:"paṇṭait",size:1},{id:"tām",size:7,type:"pronoun"},{id:"paṇpu",size:3,type:"noun"},{id:"viv",size:1},{id:"aṉpu",size:2,type:"noun"},{id:"kaḻaṟu",size:1,type:"verb"},{id:"vayiṉ",size:7,type:"noun"},{id:"māṇ",size:5,type:"noun"},{id:"maruṭṭum",size:1},{id:"tīṇṭu",size:1,type:"verb"},{id:"yayala",size:1},{id:"vaṭuk",size:1},{id:"mā(m)",size:5,type:"noun"},{id:"val",size:10,type:"noun"},{id:"taḷir",size:3,type:"noun"},{id:"nuṭaṅku",size:4,type:"verb"},{id:"aṇit",size:1},{id:"mārpu",size:9,type:"noun"},{id:"paṉit",size:1},{id:"tuyil",size:1,type:"noun"},{id:"mati",size:1,type:"noun"},{id:"yuraittaṟku",size:1},{id:"uri-",size:3},{id:"viṟai",size:1},{id:"el",size:3,type:"noun"},{id:"ekkar",size:6,type:"noun"},{id:"ceruntiyoṭu",size:2},{id:"kamaḻat",size:1},{id:"tuvalait",size:1},{id:"tuḷi",size:1,type:"noun"},{id:"vīcip",size:1},{id:"paca",size:10,type:"verb"},{id:"paṉi",size:4,type:"noun"},{id:"iṟakku",size:1,type:"verb"},{id:"iṇarp",size:1},{id:"ḷiṟai",size:1},{id:"kūr",size:2,type:"noun"},{id:"yuḷḷēṉ",size:1},{id:"paṭi",size:1,type:"noun"},{id:"puḷḷ",size:2},{id:"imiḻ",size:1,type:"noun"},{id:"yiṉiya",size:2},{id:"nil",size:7,type:"verb"},{id:"muṉi",size:3,type:"noun"},{id:"vivaḷ",size:7},{id:"iṇar",size:4,type:"noun"},{id:"potumpart",size:1},{id:"taṉik",size:1},{id:"kuruku",size:5,type:"noun"},{id:"uṟaṅku",size:1,type:"verb"},{id:"tuṟaivarku",size:1},{id:"iṉip",size:1},{id:"ciṟi",size:3},{id:"yilaip",size:1},{id:"yōtam",size:1},{id:"vāṅku",size:1,type:"verb"},{id:"malir",size:3,type:"verb"},{id:"niṟai",size:5,type:"noun"},{id:"virumpiya",size:2},{id:"taḻaip",size:1},{id:"makaḷirkkup",size:1},{id:"puṇar",size:7,type:"verb"},{id:"yutavum",size:1},{id:"mūtu",size:2},{id:"vēḻattut",size:2},{id:"uṭait",size:1},{id:"tiraḷ",size:1,type:"noun"},{id:"toḻumakaḷir",size:1},{id:"añcaṉam",size:1},{id:"pey",size:3,type:"verb"},{id:"kañal",size:4,type:"verb"},{id:"yuḷḷip",size:1},{id:"putal",size:1,type:"noun"},{id:"micai",size:1,type:"noun"},{id:"vicumpu",size:3,type:"noun"},{id:"tōṟṟam",size:4,type:"noun"},{id:"putu",size:2,type:"adjective"},{id:"mēvu",size:1,type:"noun"},{id:"maṭa(m)",size:8,type:"noun"},{id:"cāy",size:1,type:"noun"},{id:"alamvaru",size:2,type:"verb"},{id:"kaḻaṉi",size:9,type:"noun"},{id:"poru",size:2,type:"verb"},{id:"ṇaḻap",size:1},{id:"putup",size:5},{id:"meym",size:1},{id:"maṇa",size:4,type:"verb"},{id:"kamaḻ",size:3,type:"verb"},{id:"poḻil",size:3,type:"noun"},{id:"ḷuḷai",size:1},{id:"cī",size:2,type:"verb"},{id:"kalakkam",size:3,type:"noun"},{id:"viḷaika",size:1},{id:"vayal",size:3,type:"noun"},{id:"viravalar",size:1},{id:"litaḻ",size:1},{id:"nikar",size:1,type:"noun"},{id:"vaḻi",size:1,type:"noun"},{id:"vaḻic",size:1},{id:"aṟu",size:9,type:"noun"},{id:"cil",size:3,type:"noun"},{id:"vam",size:3},{id:"ciṟait",size:1},{id:"tumpi",size:1,type:"noun"},{id:"nūṟṟu",size:1},{id:"itaḻt",size:1},{id:"tāmaraip",size:1},{id:"pūc",size:1},{id:"kāmpu",size:1,type:"noun"},{id:"naṇṇu",size:2,type:"verb"},{id:"yūraṉai",size:2},{id:"yuḷḷi",size:2},{id:"ṉiṟai",size:1},{id:"yēr",size:1},{id:"yeṉṉai",size:2},{id:"tāṉum",size:1},{id:"malaintāṉ",size:1},{id:"emakkum",size:1},{id:"taḻāi",size:1},{id:"yāyiṉa",size:1},{id:"vī",size:3,type:"noun"},{id:"yarumpiṉavē",size:1},{id:"yeṉṉa",size:1},{id:"maram",size:2,type:"noun"},{id:"cāral",size:2,type:"noun"},{id:"avvē",size:1},{id:"notumal",size:1,type:"noun"},{id:"varaiviṉkaṇ",size:1},{id:"cevili",size:1,type:"noun"},{id:"āṟṟāl",size:1},{id:"talaimakaḷ",size:4},{id:"aṟattoṭu",size:1},{id:"pārppaṉak",size:1},{id:"kuṟu(m)",size:5,type:"adjective"},{id:"makap",size:1},{id:"pōlat",size:1},{id:"kuṭumit",size:1},{id:"talai",size:3},{id:"malai",size:4,type:"noun"},{id:"nāṭu",size:7,type:"noun"},{id:"talaimakaṉ",size:2},{id:"varaital",size:1},{id:"vēṇṭit",size:1},{id:"varukiṉṟamaik",size:1},{id:"yuvanta",size:1},{id:"vuḷḷattaḷ",size:1},{id:"āyt",size:1},{id:"talaimakaṭkuk",size:1},{id:"paṭappait",size:1},{id:"tēm",size:3,type:"noun"},{id:"pāl",size:3,type:"noun"},{id:"iṉum",size:1},{id:"iṉ",size:11,type:"adjective"},{id:"vavar",size:3},{id:"nāṭṭu",size:3,type:"verb"},{id:"uvalaik",size:1},{id:"kūval",size:1,type:"noun"},{id:"kīḻa",size:1},{id:"eñcu",size:1,type:"verb"},{id:"kaliḻi",size:1},{id:"-uṭaṉ",size:2},{id:"pōy",size:1},{id:"mīḷ",size:1,type:"verb"},{id:"eṅṅaṉam",size:1},{id:"nukarntāy",size:1},{id:"eṉak",size:4},{id:"aḵtu",size:2},{id:"varaiyara",size:1},{id:"nirai",size:2,type:"noun"},{id:"kuḻuvu",size:1,type:"verb"},{id:"peyar",size:5,type:"noun"},{id:"uḻi",size:2,type:"noun"},{id:"tavir",size:1,type:"verb"},{id:"nōkkam",size:2,type:"noun"},{id:"tīyēṉ",size:1},{id:"muḷḷi",size:3,type:"noun"},{id:"nīṭṭu",size:5,type:"verb"},{id:"mutu",size:1,type:"adjective"},{id:"karaip",size:1},{id:"puḷḷik",size:3},{id:"kaḷvaṉ",size:9,type:"noun"},{id:"āmpal",size:6,type:"noun"},{id:"pacappatu",size:2},{id:"aḷḷal",size:1,type:"noun"},{id:"vēr",size:2,type:"noun"},{id:"aḷaic",size:1},{id:"col",size:4,type:"noun"},{id:"nīyēṉ",size:1},{id:"kātal",size:7,type:"noun"},{id:"veṉṉ",size:1},{id:"kaviṉ",size:3,type:"noun"},{id:"tolai",size:1,type:"verb"},{id:"vaḻit",size:1},{id:"taṇantu",size:1},{id:"varaitaṟku",size:1},{id:"vēṇṭuvaṉa",size:1},{id:"muṭi",size:1,type:"noun"},{id:"kūṟak",size:1},{id:"ciṟaippuṟattāṉ",size:1},{id:"āyk",size:1},{id:"kēṭpat",size:1},{id:"aḷaik",size:1},{id:"āṭṭip",size:1},{id:"kuṟṟu",size:2,type:"verb"},{id:"eytu",size:1,type:"verb"},{id:"aṇi",size:10,type:"noun"},{id:"tēṟṟam",size:1},{id:"nap",size:1},{id:"iṉit",size:1},{id:"tākku",size:1,type:"verb"},{id:"aṇaṅku",size:3,type:"noun"},{id:"tāy",size:2,type:"noun"},{id:"cāp",size:1},{id:"piṟa",size:5,type:"noun"},{id:"kaḷvaṉoṭu",size:1},{id:"piḷḷai",size:1,type:"noun"},{id:"tiṉṉum",size:2},{id:"mutalaittu",size:1},{id:"eytiṉaṉ",size:1},{id:"makiḻ",size:23,type:"noun"},{id:"polam",size:3,type:"noun"},{id:"toṭi",size:11,type:"noun"},{id:"teḷir",size:1,type:"verb"},{id:"muyaṅkiyavar",size:1},{id:"tuṟappatu",size:1},{id:"ayal",size:1,type:"noun"},{id:"puṟantā",size:1,type:"verb"},{id:"puṉiṟu",size:2,type:"noun"},{id:"pai(m)",size:3,type:"adjective"},{id:"kāy",size:4,type:"noun"},{id:"vayalaic",size:2},{id:"ce(m)",size:11,type:"adjective"},{id:"koṭi",size:1,type:"noun"},{id:"palarkku",size:1},{id:"poy",size:5,type:"noun"},{id:"aṟiyāk",size:1},{id:"kaḻaṅku",size:1,type:"noun"},{id:"mey",size:1,type:"noun"},{id:"varaik",size:1},{id:"kaṭci",size:1,type:"noun"},{id:"mayil",size:2,type:"noun"},{id:"ālu",size:3,type:"verb"},{id:"vaḷḷi",size:1,type:"noun"},{id:"kāṉ",size:3,type:"noun"},{id:"kiḻamai",size:1,type:"noun"},{id:"āṇ",size:1,type:"noun"},{id:"taku",size:3,type:"verb"},{id:"viṟal",size:2,type:"noun"},{id:"vēṭkai",size:1,type:"noun"},{id:"tāṅku",size:1,type:"verb"},{id:"iḷa(m)",size:2,type:"adjective"},{id:"karantai",size:1,type:"noun"},{id:"ceṟu",size:3,type:"verb"},{id:"vaḷḷai",size:1,type:"noun"},{id:"aṟi",size:7,type:"verb"},{id:"iṉṉaṉ",size:1},{id:"katir",size:7,type:"noun"},{id:"ṇakam",size:2},{id:"maṇ",size:3,type:"noun"},{id:"ṇaḷaic",size:1},{id:"nekiḻac",size:2},{id:"allal",size:1,type:"noun"},{id:"uḻa",size:1,type:"verb"},{id:"yaṇaṅku",size:1},{id:"uṟai",size:5,type:"noun"},{id:"cēṟu",size:1,type:"noun"},{id:"oṇmai",size:7,type:"noun"},{id:"koḷak",size:1},{id:"kā",size:1,type:"noun"},{id:"kaṭuka",size:1},{id:"vittu",size:2,type:"noun"},{id:"muḷai",size:1,type:"noun"},{id:"marīit",size:1},{id:"titti",size:2,type:"noun"},{id:"yalkul",size:3},{id:"koḷvatu",size:1},{id:"vūṟuka",size:1},{id:"pakaṭu",size:1},{id:"vuḻavar",size:1},{id:"vēppa(m)",size:3,type:"noun"},{id:"ṇaḷai",size:1},{id:"vuṟaikkum",size:1},{id:"iḻa",size:1,type:"verb"},{id:"māl",size:1,type:"adjective"},{id:"lōttirattu",size:1},{id:"maiy",size:1},{id:"aru(m)",size:9,type:"adjective"},{id:"curam",size:16,type:"noun"},{id:"ceṉṉik",size:1},{id:"kūṭṭam",size:2,type:"noun"},{id:"av",size:1},{id:"varaiy",size:1},{id:"iṟakkuvaiy",size:1},{id:"varai",size:2,type:"noun"},{id:"poruḷ",size:3,type:"noun"},{id:"viṉai",size:2,type:"noun"},{id:"tappal",size:1,type:"noun"},{id:"arivai",size:5,type:"noun"},{id:"takaittaṟku",size:1},{id:"pulampav",size:1},{id:"putuk",size:1},{id:"kalam",size:2,type:"noun"},{id:"kaṉiya",size:1},{id:"vālam",size:1},{id:"pōkil",size:2,type:"noun"},{id:"taṉait",size:1},{id:"taṭukkum",size:1},{id:"vēṉal",size:6,type:"noun"},{id:"viṉiya",size:2},{id:"vāka",size:2},{id:"kallāk",size:1},{id:"kōvalar",size:2,type:"noun"},{id:"kōl",size:2,type:"noun"},{id:"tōṇṭiyav",size:1},{id:"ā",size:2},{id:"pattar",size:1,type:"noun"},{id:"yāṉai",size:4,type:"noun"},{id:"kall",size:2},{id:"atark",size:1},{id:"kavalai",size:3,type:"noun"},{id:"celliṉ",size:1},{id:"iyal",size:2,type:"noun"},{id:"puyal",size:1,type:"noun"},{id:"kūntal",size:5,type:"noun"},{id:"vaya(m)",size:2,type:"noun"},{id:"kaḷiṟu",size:2,type:"noun"},{id:"piṭi",size:1,type:"noun"},{id:"taḻīip",size:1},{id:"pulam",size:2,type:"noun"},{id:"paṭarātu",size:1},{id:"paci",size:3,type:"noun"},{id:"tiṉ",size:1,type:"verb"},{id:"varuttam",size:2,type:"noun"},{id:"kuṉṟattuc",size:1},{id:"cuṭart",size:1},{id:"toṭik",size:1},{id:"iṉaiyav",size:1},{id:"eṉaip",size:1},{id:"paya",size:4,type:"verb"},{id:"viṭalai",size:2,type:"noun"},{id:"pōrk",size:1},{id:"kuricil",size:1,type:"noun"},{id:"iṟa",size:6,type:"verb"},{id:"kāḻ",size:1,type:"noun"},{id:"alkul",size:2,type:"noun"},{id:"vāṭak",size:1},{id:"kuḻal",size:1,type:"noun"},{id:"iṉaikuvaḷ",size:1},{id:"viḻavu",size:2,type:"noun"},{id:"oli",size:1,type:"verb"},{id:"ñeli",size:1,type:"noun"},{id:"kaḻai",size:3,type:"noun"},{id:"aḻal",size:3,type:"noun"},{id:"vayamā",size:1},{id:"veru",size:3,type:"noun"},{id:"kuṉṟam",size:3,type:"noun"},{id:"ayar",size:2,type:"verb"},{id:"tuṇaip",size:1},{id:"pall",size:2},{id:"yiṇark",size:1},{id:"eṟuḻ",size:1,type:"noun"},{id:"muruku",size:1,type:"noun"},{id:"amar",size:3,type:"noun"},{id:"tiṅkaḷ",size:1,type:"noun"},{id:"kaṭuñcūl",size:1},{id:"muṟuval",size:1,type:"noun"},{id:"viṟu",size:1},{id:"yiṟantu",size:1},{id:"kaṭam",size:4,type:"noun"},{id:"mūr",size:3},{id:"muṭam",size:1},{id:"mutir",size:3,type:"verb"},{id:"marutattup",size:2},{id:"yuṭaṉ",size:1},{id:"āyamōṭu",size:2},{id:"pacu(m)",size:4,type:"adjective"},{id:"pāṇṭil",size:3,type:"noun"},{id:"kācu",size:1,type:"noun"},{id:"nekiḻap",size:1},{id:"yāyiṉ",size:1},{id:"yivaḷ",size:2},{id:"vēṅkai",size:2,type:"noun"},{id:"koyyunar",size:1},{id:"pañcuram",size:1},{id:"viḷippiṉum",size:1},{id:"iṭaic",size:2},{id:"āṟṟu",size:1,type:"verb"},{id:"kāṭu",size:3,type:"noun"},{id:"nīṭuvar",size:1},{id:"cāliyar",size:3},{id:"vaṟṟu",size:2,type:"verb"},{id:"uṇṭāyiṉum",size:1},{id:"vāḷ",size:2,type:"noun"},{id:"vaṉappu",size:1,type:"noun"},{id:"varuvik",size:1},{id:"eṉṉ",size:1},{id:"aiyai",size:1,type:"noun"},{id:"teṟu",size:4,type:"verb"},{id:"num",size:4,type:"pronoun"},{id:"viruppam",size:1,type:"noun"},{id:"yuṟu",size:3},{id:"tuyar",size:1,type:"noun"},{id:"avala(m)",size:1,type:"noun"},{id:"uyir",size:1,type:"noun"},{id:"celac",size:2},{id:"ppāḻ",size:1},{id:"neñcam",size:6,type:"noun"},{id:"aṭak",size:1},{id:"iṭai",size:3,type:"noun"},{id:"vilakku",size:1,type:"verb"},{id:"vai",size:4,type:"noun"},{id:"avir",size:4,type:"verb"},{id:"koṭpak",size:1},{id:"kaḻutu",size:1,type:"noun"},{id:"pukavu",size:1,type:"noun"},{id:"ayarak",size:1},{id:"karu(m)",size:5,type:"adjective"},{id:"kākkaiyoṭu",size:1},{id:"kaḻuku",size:1},{id:"akavac",size:1},{id:"yāḷ",size:1},{id:"vīḻttut",size:1},{id:"tiri",size:1,type:"noun"},{id:"taru/tā",size:5,type:"verb"},{id:"nīḷ",size:3,type:"noun"},{id:"pāyal",size:2,type:"noun"},{id:"pūcal",size:1,type:"noun"},{id:"cēy",size:1,type:"noun"},{id:"viḻai",size:1,type:"verb"},{id:"uṟīik",size:1},{id:"cōlaik",size:1},{id:"nantat",size:1},{id:"vāṭṭam",size:1,type:"noun"},{id:"viṟantōr",size:1},{id:"maṉ",size:11},{id:"piṟaṅku",size:1,type:"verb"},{id:"malaip",size:1},{id:"arai",size:2,type:"noun"},{id:"yōmai",size:1},{id:"puli",size:1,type:"noun"},{id:"vaḻakku",size:2,type:"noun"},{id:"cūḻkam",size:1},{id:"pāḻ",size:2,type:"noun"},{id:"paṭṭup",size:1},{id:"veppa(m)",size:4,type:"noun"},{id:"pālai",size:1,type:"noun"},{id:"kāṭṭu",size:1,type:"noun"},{id:"nali",size:1,type:"verb"},{id:"vēy",size:3,type:"noun"},{id:"maruṭkai",size:2,type:"noun"},{id:"vill",size:1},{id:"nacai",size:1,type:"noun"},{id:"vicai",size:1,type:"noun"},{id:"nimir",size:1,type:"verb"},{id:"ōṭṭu",size:1,type:"verb"},{id:"eri",size:2,type:"noun"},{id:"naṭa",size:3,type:"verb"},{id:"uyar",size:3,type:"verb"},{id:"piṟaṅkal",size:1,type:"noun"},{id:"viḷakkam",size:2,type:"noun"},{id:"purai",size:1,type:"noun"},{id:"muḷi",size:2,type:"verb"},{id:"maṟa",size:3,type:"verb"},{id:"til",size:1},{id:"mil",size:1},{id:"vantataṟku",size:1},{id:"eḻu",size:2,type:"noun"},{id:"aḻupa",size:1},{id:"veṉpa",size:2},{id:"vavaṉ",size:1},{id:"tī",size:5,type:"noun"},{id:"meḻukiṉ",size:1},{id:"muḷḷ",size:1},{id:"yilavattu",size:1},{id:"oḷḷ",size:1},{id:"vāṉ",size:3,type:"noun"},{id:"acai",size:2,type:"verb"},{id:"vaḷi",size:1,type:"noun"},{id:"yeṭuppa",size:1},{id:"urumup",size:1},{id:"kaṉaliṉ",size:1},{id:"nilam",size:2,type:"noun"},{id:"pōyiṉar",size:1},{id:"tavu",size:1,type:"verb"},{id:"ulaṟu",size:1,type:"verb"},{id:"talaip",size:3},{id:"paruntu",size:1,type:"noun"},{id:"uḷi",size:1,type:"noun"},{id:"vāyp",size:1},{id:"pēṭaiy",size:1},{id:"alaṟu",size:1,type:"verb"},{id:"talaiy",size:1},{id:"ōmaiy",size:1},{id:"kavaṭu",size:1},{id:"ēṟip",size:2},{id:"viḷi",size:1,type:"noun"},{id:"malaiy",size:1},{id:"iṟappiṉum",size:1},{id:"oḻi",size:2,type:"verb"},{id:"muḷiya",size:1},{id:"nīṭik",size:1},{id:"kaṭu(m)",size:2,type:"adjective"},{id:"ñāyiṟu",size:1,type:"noun"},{id:"pakat",size:1},{id:"muṉ",size:7},{id:"yuḷḷu",size:1},{id:"vaḷḷ",size:1},{id:"eyiṟṟuc",size:1},{id:"piṇaviṟkuk",size:1},{id:"kaḷḷi",size:1,type:"noun"},{id:"yam",size:2},{id:"kaṭattiṭaik",size:1},{id:"kēḻal",size:1,type:"noun"},{id:"pār",size:2,type:"noun"},{id:"curak",size:1},{id:"nīttam",size:3,type:"noun"},{id:"kavar",size:2,type:"verb"},{id:"veṉṟūḻ",size:2},{id:"kaṇpaṭuppiṉum",size:1},{id:"kāṇkuveṉ",size:1},{id:"kaṅkul",size:1,type:"noun"},{id:"naḷi",size:1,type:"noun"},{id:"nakar",size:2,type:"noun"},{id:"cuṇaṅku",size:2,type:"noun"},{id:"araiyattu",size:1},{id:"yoli",size:1},{id:"verīip",size:1},{id:"pukarvu",size:1},{id:"alai",size:1,type:"noun"},{id:"naliyātu",size:1},{id:"naṉam",size:1,type:"adjective"},{id:"iṭam",size:1,type:"noun"},{id:"peṟu",size:6,type:"verb"},{id:"piṇa",size:2,type:"noun"},{id:"maṟiyoṭu",size:1},{id:"tiraṅku",size:1,type:"verb"},{id:"nirappu",size:1,type:"verb"},{id:"viyaviṉ",size:1},{id:"poṟi",size:1,type:"noun"},{id:"varit",size:1},{id:"taṭak",size:1},{id:"kai",size:4,type:"noun"},{id:"vētal",size:1},{id:"añcic",size:1},{id:"nilan",size:1},{id:"toṭal",size:1},{id:"veyil",size:2,type:"noun"},{id:"cōlai",size:2,type:"noun"},{id:"vār",size:1,type:"noun"},{id:"iṭaiyāṉ",size:1},{id:"taṇmai",size:1},{id:"vit",size:1},{id:"maḻai",size:1,type:"noun"},{id:"taḷittu",size:1},{id:"naṟu(m)",size:10,type:"adjective"},{id:"tāayt",size:1},{id:"vāyiṉum",size:1},{id:"yoḻiyak",size:1},{id:"utir",size:1,type:"verb"},{id:"naṉantalai",size:1},{id:"maṟu",size:1,type:"noun"},{id:"ceṟi",size:1,type:"verb"},{id:"uku",size:2,type:"verb"},{id:"nilai",size:1,type:"verb"},{id:"voḻintōḷ",size:1},{id:"urappu",size:1,type:"noun"},{id:"maruta(m)",size:3,type:"noun"},{id:"tuṟaip",size:1},{id:"peṇṭirōṭu",size:1},{id:"tār",size:1,type:"noun"},{id:"talait",size:1},{id:"tukaḷ",size:1,type:"noun"},{id:"iṉic",size:1},{id:"yaḻuta",size:1},{id:"citaiyak",size:1},{id:"niṉaikkum",size:1},{id:"yaviḻ",size:1},{id:"iṇark",size:1},{id:"marām",size:2,type:"noun"},{id:"vaikal",size:1,type:"noun"},{id:"oḻintōr",size:1},{id:"-uḷ",size:1},{id:"veṟpu",size:1,type:"noun"},{id:"yeṉṉatūum",size:1},{id:"micaik",size:2},{id:"kāṉatta",size:1},{id:"māk",size:1},{id:"kaṇam",size:1,type:"noun"},{id:"kātalip",size:1},{id:"yāṅkaṇ",size:9,type:"pronoun"},{id:"yavaṇa",size:1},{id:"nāṭṭup",size:1},{id:"iṉap",size:1},{id:"tōṭu",size:1,type:"noun"},{id:"(i)yāam",size:1},{id:"uṟaitum",size:1},{id:"yāṅkup",size:1},{id:"uṟaiti",size:1},{id:"yilai",size:1},{id:"nelli",size:1,type:"noun"},{id:"iṭaip",size:1},{id:"pētai",size:1,type:"noun"},{id:"vali",size:1,type:"noun"},{id:"itaḻ",size:1,type:"noun"},{id:"neyttōr",size:1,type:"noun"},{id:"cevviya",size:1},{id:"veruvai",size:1},{id:"puṭai",size:1,type:"noun"},{id:"muṭai",size:1,type:"noun"},{id:"yārkkum",size:1},{id:"yivaṇ",size:1},{id:"pōlap",size:4},{id:"piṇi",size:5,type:"noun"},{id:"muṟṟi",size:2,type:"verb"},{id:"meyy",size:1},{id:"muyakkiṉum",size:1},{id:"yirum",size:1},{id:"yila",size:1},{id:"vōṅku",size:1},{id:"yilavam",size:1},{id:"mutal",size:1,type:"noun"},{id:"yilaik",size:1},{id:"paḻa(m)",size:2,type:"adjective"},{id:"vāval",size:1,type:"noun"},{id:"ukakkum",size:1},{id:"mūrp",size:2},{id:"poykaip",size:3},{id:"puḻaik",size:1},{id:"tātu",size:6,type:"noun"},{id:"vaṇṇa(m)",size:2,type:"noun"},{id:"vētilāḷarkkup",size:1},{id:"uḷḷu",size:2,type:"verb"},{id:"viṭṭuc",size:1},{id:"taṭṭait",size:1},{id:"kuyil",size:2,type:"noun"},{id:"peṭai",size:2,type:"noun"},{id:"kural",size:3,type:"noun"},{id:"akavu",size:2,type:"verb"},{id:"vayir",size:1},{id:"kkēḻ",size:1},{id:"nuṇṇ",size:1},{id:"curumpu",size:2,type:"noun"},{id:"kaḷi",size:1,type:"noun"},{id:"kkarum",size:1},{id:"nuṇavam",size:1},{id:"nilaik",size:1},{id:"kōṅkam",size:1,type:"noun"},{id:"koḻu",size:1,type:"verb"},{id:"mukiḻ",size:2,type:"noun"},{id:"kuravam",size:1,type:"noun"},{id:"ceyyāp",size:1},{id:"ppū",size:1},{id:"vatiral",size:1},{id:"tāayk",size:1},{id:"katuppu",size:1,type:"noun"},{id:"ciṉaip",size:1},{id:"pātiri",size:1,type:"noun"},{id:"yalarntu",size:1},{id:"eṉac",size:1},{id:"yeḻil",size:1},{id:"poliyap",size:1},{id:"porip",size:1},{id:"puṉku",size:1,type:"noun"},{id:"muṟi",size:1,type:"noun"},{id:"curi",size:1,type:"noun"},{id:"pori",size:1,type:"noun"},{id:"putai",size:1,type:"noun"},{id:"veri",size:1},{id:"poykai",size:7,type:"noun"},{id:"yāmpal",size:3},{id:"nār",size:1,type:"noun"},{id:"uri",size:1,type:"noun"},{id:"niṟam",size:3,type:"noun"},{id:"niḻaṟṟutal",size:1},{id:"yiṉip",size:1},{id:"oṇ",size:2},{id:"vuṟaippat",size:1},{id:"kiḷa",size:1,type:"verb"},{id:"amaikuva",size:1},{id:"karutiya",size:1},{id:"olku",size:1,type:"verb"},{id:"tēṟṟāṉ",size:1},{id:"aḻuṅkal",size:1,type:"noun"},{id:"uṇarntōr",size:2},{id:"yaṭaiya",size:1},{id:"muyakkam",size:1,type:"noun"},{id:"tiruttu",size:1,type:"verb"},{id:"ñekiḻap",size:1},{id:"pakai",size:2,type:"noun"},{id:"pul",size:2,type:"noun"},{id:"lārka",size:1},{id:"ōtuka",size:1},{id:"kāytta",size:1},{id:"paḻaṉa(m)",size:5,type:"noun"},{id:"ākaṟka",size:2},{id:"aḻap",size:1},{id:"iṟai",size:1,type:"noun"},{id:"keṇṭai",size:1,type:"noun"},{id:"vaviḻnta",size:1},{id:"maṟi",size:1,type:"noun"},{id:"yiṭaip",size:1},{id:"putalvaṉ",size:4,type:"noun"},{id:"naṭuvaṇaṉ",size:1},{id:"naṉṟum",size:1},{id:"iṉitumaṉṟa",size:1},{id:"kiṭa",size:1,type:"verb"},{id:"niṟa",size:1,type:"verb"},{id:"aka(m)",size:1,type:"noun"},{id:"kavai",size:2,type:"noun"},{id:"vīṉum",size:1},{id:"umparum",size:1},{id:"kātaliyiṉ",size:1},{id:"vuḷḷam",size:1},{id:"yakaṉ",size:1},{id:"tantai",size:2,type:"noun"},{id:"muṟuvaliṉ",size:1},{id:"naku",size:1,type:"verb"},{id:"payiṟṟic",size:1},{id:"uruṭṭu",size:1,type:"verb"},{id:"taḷar",size:2,type:"verb"},{id:"yūṭṭat",size:1},{id:"puṟam",size:1,type:"noun"},{id:"puṟavam",size:3},{id:"poṟu",size:1,type:"verb"},{id:"maṉaikku",size:1},{id:"kaṉai",size:1,type:"verb"},{id:"mātar",size:1,type:"noun"},{id:"viḷaiyāṭak",size:1},{id:"kātalit",size:1},{id:"taḻuvu",size:3,type:"verb"},{id:"yiṉitu",size:1},{id:"iruntaṉaṉ",size:1},{id:"piracam",size:1,type:"noun"},{id:"ūtu",size:2,type:"verb"},{id:"pārpput",size:2},{id:"mutalai",size:1,type:"noun"},{id:"poykaittu",size:1},{id:"mayaṅkiṉaḷ",size:1},{id:"yarivai",size:1},{id:"kāviri",size:1,type:"noun"},{id:"ampaṇattu",size:1},{id:"yāmai",size:3,type:"noun"},{id:"yēṟic",size:1},{id:"cempiṉ",size:1},{id:"pārppup",size:1},{id:"tīm",size:2,type:"adjective"},{id:"yiḷam",size:1},{id:"mukam",size:1,type:"noun"},{id:"vaḷarnticiṉāaṅku",size:1},{id:"yaiya",size:1},{id:"yaṟintaṉai",size:1},{id:"yoḻukumati",size:1},{id:"kūtir",size:1,type:"noun"},{id:"yāṟu",size:1,type:"noun"},{id:"aṇintaṉa",size:1},{id:"yaṉṟu",size:1},{id:"kuṟippiṉai",size:1},{id:"yāki",size:2},{id:"yīṇṭu",size:1},{id:"yaruḷātu",size:1},{id:"muḷ",size:1,type:"noun"},{id:"ḷeyiṟṟup",size:1},{id:"keṭiṟu",size:1,type:"noun"},{id:"cori",size:3,type:"verb"},{id:"vakaṉ",size:1},{id:"vaṭṭi",size:2,type:"noun"},{id:"ari",size:1,type:"noun"},{id:"payaṟu",size:1,type:"noun"},{id:"niṟaikkum",size:2},{id:"yāyam",size:1},{id:"valai",size:1,type:"noun"},{id:"eyiṟu",size:1,type:"noun"},{id:"varāal",size:1,type:"noun"},{id:"yuḷ",size:1},{id:"vēṇṭēm",size:1},{id:"parattaṉ",size:1,type:"noun"},{id:"yāṇṭuc",size:1},{id:"kuṟiyōṭu",size:1},{id:"ōti",size:1,type:"noun"},{id:"yacai",size:1},{id:"naṭaip",size:2},{id:"citaiyap",size:1},{id:"yil",size:1},{id:"lākuka",size:3},{id:"cēṇ",size:1,type:"noun"},{id:"mutalaip",size:1},{id:"pōttu",size:2,type:"noun"},{id:"muḻu",size:1,type:"noun"},{id:"kaṭai",size:1,type:"noun"},{id:"niṟka",size:1},{id:"celvam",size:1,type:"noun"},{id:"vañci",size:1,type:"noun"},{id:"yōṅkiya",size:1},{id:"tañcam",size:1,type:"noun"},{id:"aruḷ",size:1,type:"noun"},{id:"kōḻi",size:1,type:"noun"},{id:"nīlac",size:1},{id:"cēval",size:1,type:"noun"},{id:"ukirp",size:1},{id:"pēṭai",size:3,type:"noun"},{id:"vayāam",size:1},{id:"puḷim",size:1},{id:"vēṭkaittu",size:1},{id:"taiic",size:1},{id:"viral",size:1,type:"noun"},{id:"yari",size:1},{id:"maḻaik",size:1},{id:"vāyk",size:1},{id:"vev",size:1},{id:"ciṟai",size:2,type:"noun"},{id:"yaḻi",size:2},{id:"kalaṅkik",size:1},{id:"kaḻaṉit",size:2},{id:"tāmarai",size:3,type:"noun"},{id:"vūra",size:1},{id:"tērt",size:1},{id:"teṉ",size:1,type:"noun"},{id:"uḷ",size:1},{id:"oḻukku",size:1,type:"verb"},{id:"tēṉūr",size:3},{id:"teri",size:1,type:"verb"},{id:"vūriṉ",size:1},{id:"pañcāyk",size:1},{id:"accam",size:2,type:"noun"},{id:"entiram",size:1},{id:"etir",size:1,type:"noun"},{id:"piḷiṟṟum",size:1},{id:"vaḷ",size:4,type:"noun"},{id:"kō",size:1,type:"noun"},{id:"laṇi",size:1},{id:"tuṟattaliṉ",size:1},{id:"aṟiyap",size:1},{id:"pakal",size:3,type:"noun"},{id:"viḷakkōṭu",size:1},{id:"ira(m)",size:1,type:"noun"},{id:"pōrc",size:1},{id:"cōḻaṉ",size:1,type:"noun"},{id:"āmūr",size:1,type:"noun"},{id:"tēmpa",size:1},{id:"vevaṉ",size:1},{id:"katirt",size:1},{id:"pulampap",size:1},{id:"vaṉai",size:1,type:"verb"},{id:"-uṭai",size:2},{id:"viṇṭu",size:1,type:"noun"},{id:"vaṉṉa",size:1},{id:"pōr",size:2,type:"verb"},{id:"virāaṉ",size:1,type:"noun"},{id:"iruppai",size:1,type:"noun"},{id:"maṉaiyai",size:1},{id:"vāṟṟu",size:1},{id:"maintu",size:1,type:"noun"},{id:"evvam",size:1,type:"noun"},{id:"tīr",size:1,type:"verb"},{id:"yivaṭku",size:1},{id:"vēttu",size:1,type:"adjective"},{id:"taṇika",size:1},{id:"nantuka",size:1},{id:"tāmarait",size:1},{id:"varaika",size:1},{id:"entai",size:1,type:"noun"},{id:"koṭukka",size:1},{id:"paḻaṉak",size:1},{id:"kampuḷ",size:2,type:"noun"},{id:"payirp",size:1},{id:"yakavum",size:1},{id:"yūra",size:2},{id:"vaṭi",size:1,type:"noun"},{id:"viḷai",size:1,type:"noun"},{id:"poykait",size:2},{id:"tuṭumeṉ",size:1},{id:"viḻūum",size:1},{id:"matti",size:1,type:"noun"},{id:"kaḻāar",size:1,type:"noun"},{id:"vatuvai",size:1,type:"noun"},{id:"yayara",size:1},{id:"intira",size:1},{id:"maṅkaiyart",size:1},{id:"toku",size:1,type:"verb"},{id:"yev",size:1},{id:"paḷḷip",size:1},{id:"nīrnāy",size:1,type:"noun"},{id:"vāḷai",size:1,type:"noun"},{id:"irai",size:1,type:"noun"},{id:"tolaivatu",size:1},{id:"tuṉṉu",size:1,type:"verb"},{id:"piṟart",size:1},{id:"āṭak",size:1},{id:"oruvar",size:1},{id:"ē",size:1,type:"noun"},{id:"pāttiyiṉ",size:1},{id:"kali",size:1,type:"noun"},{id:"vāmpal",size:1},{id:"kaḷai",size:1,type:"verb"},{id:"yīṉṟa",size:1},{id:"muyaṅkaṉmō",size:1},{id:"uṭaliṉēṉ",size:1},{id:"urai",size:2,type:"verb"},{id:"yiṉik",size:1},{id:"nikarā",size:1},{id:"veṉṉoṭu",size:1},{id:"nikarip",size:1},{id:"tarukkum",size:1},{id:"malart",size:1},{id:"yōti",size:1},{id:"kaṉṉi",size:1,type:"noun"},{id:"viṭiyal",size:1,type:"noun"},{id:"kaṇaik",size:1},{id:"pēṇāḷ",size:1},{id:"kaṇṭaṉem",size:1},{id:"uy",size:1,type:"verb"},{id:"vaḻutu",size:1},{id:"yaṟam",size:1},{id:"vallatu",size:1},{id:"keṭu",size:1,type:"verb"},{id:"yuḷaip",size:1},{id:"marutattuk",size:1},{id:"kiḷaik",size:1},{id:"ṉūrk",size:1},{id:"paḻaṉap",size:2},{id:"ceṉṉic",size:1},{id:"cē",size:2,type:"noun"},{id:"tūyar",size:1},{id:"naṟiyar",size:1},{id:"pēy",size:1,type:"noun"},{id:"(i)yām",size:1},{id:"cūtu",size:1},{id:"toṭic",size:1},{id:"cūr",size:1,type:"noun"},{id:"nuṭakkattu",size:1},{id:"nerunal",size:1},{id:"yāṭiṉai",size:1},{id:"yeṉpa",size:1},{id:"maṟai",size:1,type:"noun"},{id:"ol(lu)",size:3,type:"verb"},{id:"putaittal",size:1},{id:"kayil",size:1},{id:"taḻait",size:1},{id:"tuyal",size:1,type:"verb"},{id:"kuvaḷai",size:2,type:"noun"},{id:"liyal",size:1},{id:"taḻai",size:1,type:"noun"},{id:"paṇṇai",size:2,type:"noun"},{id:"kaḷ",size:1,type:"verb"},{id:"nāṟit",size:1},{id:"tōkaic",size:1},{id:"cīr",size:1,type:"noun"},{id:"niḻaṟṟak",size:1},{id:"pāyvōḷ",size:1},{id:"ovvāy",size:1},{id:"vataṉāl",size:1},{id:"toṭakku",size:1,type:"verb"},{id:"tol",size:1,type:"adjective"},{id:"niṉṉōṭu",size:2},{id:"āṭiṉaḷ",size:1},{id:"paiñcāyk",size:1},{id:"malarc",size:1},{id:"āṭit",size:2},{id:"mēmpaṭṭaṉaḷ",size:1},{id:"antaram",size:1},{id:"makaḷirkkut",size:2},{id:"pēr",size:1,type:"noun"},{id:"alaik",size:1},{id:"vēl",size:1,type:"noun"},{id:"kaṭu",size:1,type:"verb"},{id:"kiḷḷi",size:1,type:"noun"},{id:"matil",size:1,type:"noun"},{id:"kataḻpu",size:1},{id:"neṟi",size:2,type:"noun"},{id:"āṭi",size:1,type:"noun"},{id:"yamartta",size:1},{id:"makaṉai",size:1},{id:"yaracu",size:1},{id:"muṟai",size:1,type:"noun"},{id:"ceyka",size:1},{id:"kaḷavu",size:1,type:"noun"},{id:"yalaṅku",size:1},{id:"cūḷ",size:1,type:"noun"},{id:"vāyppatu",size:1},{id:"pulakkuvēm",size:1},{id:"nalat",size:1},{id:"yākit",size:1},{id:"tava",size:1},{id:"ḷakaṭṭu",size:1},{id:"yarip",size:1},{id:"paṟai",size:2,type:"noun"},{id:"nayantaṉeṉ",size:1},{id:"kēṭkiṉ",size:1},{id:"vekuṇṭaṉaḷ",size:1},{id:"aviḻ",size:2,type:"noun"},{id:"tārt",size:1},{id:"paṟa",size:1,type:"verb"},{id:"yaruḷāy",size:1},{id:"paipayat",size:1},{id:"taṇa",size:1,type:"verb"},{id:"yuymmō",size:1},{id:"cevi",size:1,type:"noun"},{id:"liṟantu",size:1},{id:"vekuḷvōḷ",size:1},{id:"yaim",size:1},{id:"taiit",size:1},{id:"kayam",size:1,type:"noun"},{id:"paṭintu",size:1},{id:"arik",size:1},{id:"paḻaṉattuk",size:1},{id:"kiḷaiyōṭu",size:1},{id:"ciṟuvariṉ",size:1},{id:"nakār",size:1},{id:"talaik",size:1},{id:"viḷik",size:1},{id:"yimiḻum",size:1},{id:"mivaṇ",size:1},{id:"alku",size:1,type:"verb"},{id:"pakaṉṟaik",size:1},{id:"kaṇṇip",size:1},{id:"lāṉ",size:1},{id:"kuṇil",size:1,type:"noun"},{id:"kaṉi",size:1,type:"noun"},{id:"yutirkkum",size:1},{id:"pula",size:2,type:"verb"},{id:"malarp",size:2},{id:"yevvai",size:1},{id:"yem",size:1},{id:"vevvaikku",size:1},{id:"aḷi",size:1,type:"noun"},{id:"virumpiṉṟu",size:1},{id:"yampal",size:1},{id:"kuṇam",size:2,type:"noun"},{id:"maruppu",size:1,type:"noun"},{id:"veṟi",size:1,type:"noun"},{id:"mayakkum",size:2},{id:"vetir",size:1,type:"noun"},{id:"kōṭṭam",size:4,type:"noun"},{id:"erumaic",size:1},{id:"āk",size:1},{id:"kuḻavikku",size:1},{id:"ūṟṟu",size:1,type:"noun"},{id:"maṭukkum",size:1},{id:"nuntai",size:2,type:"noun"},{id:"maṭantai",size:1,type:"noun"},{id:"niṉṉai",size:1},{id:"lēṟṟu",size:1},{id:"mēy",size:2,type:"verb"},{id:"aruttu",size:1,type:"verb"},{id:"mōrōṭamōṭu",size:1},{id:"viṉaiya",size:1},{id:"veṟukkaiya",size:1},{id:"vāki",size:1},{id:"mucci",size:1,type:"noun"},{id:"maḷḷar",size:1,type:"noun"},{id:"vati",size:1,type:"noun"},{id:"ilañcip",size:1},{id:"paḻaṉattatu",size:1},{id:"kayiṟu",size:1,type:"noun"},{id:"yaru",size:1},{id:"yerumai",size:2},{id:"yāṭiya",size:1},{id:"āmpaloṭu",size:1},{id:"kalikkum",size:1},{id:"vūraṉ",size:1},{id:"pakaṉṟai",size:1,type:"noun"},{id:"miṭai",size:1,type:"noun"},{id:"kōṭṭaik",size:1},{id:"erumaik",size:1},{id:"kaṉṟu",size:1,type:"noun"},{id:"yampiyiṉ",size:1},{id:"pākal",size:1,type:"noun"},{id:"muyiṟu",size:1,type:"noun"},{id:"mūcu",size:1,type:"verb"},{id:"kuṭampai",size:1,type:"noun"}],Ib=[{id:"nī nī",source:"nī",target:"nī",strength:.12425463414335348,citations:["Aink309","Aink50"],curvature:.5},{id:"a- nī",source:"a-",target:"nī",strength:.13625498306595346,citations:["Aink44","Aink51"]},{id:"varavu nī",source:"varavu",target:"nī",strength:.16109596361401915,citations:["Aink101","Aink323"]},{id:"a- ūr",source:"a-",target:"ūr",strength:.16146980821677176,citations:["Aink24","Aink41"]},{id:"nal nī",source:"nal",target:"nī",strength:.17385848382687405,citations:["Aink139","Aink309"],curvature:.25},{id:"nī nal",source:"nī",target:"nal",strength:.17385848382687405,citations:["Aink139","Aink309"],curvature:.25},{id:"kaṇ ākkam",source:"kaṇ",target:"ākkam",strength:.21377553181460995,citations:["Aink330","Aink84"]},{id:"nal ākkam",source:"nal",target:"ākkam",strength:.22346233351039463,citations:["Aink117","Aink63"],curvature:.25},{id:"tāṉ a-",source:"tāṉ",target:"a-",strength:.22458433186670476,citations:["Aink103","Aink404"],curvature:.25},{id:"vāḻ yūraṉ",source:"vāḻ",target:"yūraṉ",strength:.22881258211883007,citations:["Aink36","Aink39"]},{id:"ūr maka",source:"ūr",target:"maka",strength:.22908144475582237,citations:["Aink100","Aink99"]},{id:"tuṟai ūr",source:"tuṟai",target:"ūr",strength:.23336746827117874,citations:["Aink11","Aink12"]},{id:"kēḷ vāḻ",source:"kēḷ",target:"vāḻ",strength:.2355172315191005,citations:["Aink111","Aink59"]},{id:"nī pal",source:"nī",target:"pal",strength:.2373201843234879,citations:["Aink55","Aink69"]},{id:"eṉ nī",source:"eṉ",target:"nī",strength:.2373201843234879,citations:["Aink81","Aink82"]},{id:"ūr peru(m)",source:"ūr",target:"peru(m)",strength:.23779880809492304,citations:["Aink30","Aink48"]},{id:"ūr ūr",source:"ūr",target:"ūr",strength:.24042580731845759,citations:["Aink15"],curvature:.5},{id:"makiḻ nī",source:"makiḻ",target:"nī",strength:.242883236895872,citations:["Aink69","Aink77"]},{id:"kaṇ maka",source:"kaṇ",target:"maka",strength:.24378366759273995,citations:["Aink406","Aink79"]},{id:"tuṟai varavu",source:"tuṟai",target:"varavu",strength:.24499397259102615,citations:["Aink105","Aink69"]},{id:"eṉ a-",source:"eṉ",target:"a-",strength:.24932053324608786,citations:["Aink41","Aink89"]},{id:"tāṉ kaṇ",source:"tāṉ",target:"kaṇ",strength:.2525010309318406,citations:["Aink112","Aink202"]},{id:"makiḻ a-",source:"makiḻ",target:"a-",strength:.254883585818472,citations:["Aink31","Aink90"]},{id:"pū(m) a-",source:"pū(m)",target:"a-",strength:.254883585818472,citations:["Aink41","Aink62"]},{id:"vāḻ nal",source:"vāḻ",target:"nal",strength:.25524807799863086,citations:["Aink117","Aink119","Aink120","Aink9"]},{id:"cel ūr",source:"cel",target:"ūr",strength:.2571990846844081,citations:["Aink22","Aink27"]},{id:"ākkam peru(m)",source:"ākkam",target:"peru(m)",strength:.26218783262762535,citations:["Aink403","Aink63"]},{id:"ūr eṉ",source:"ūr",target:"eṉ",strength:.26253500947430614,citations:["Aink41","Aink89"]},{id:"ūr nal",source:"ūr",target:"nal",strength:.26617977018855815,citations:["Aink12","Aink22","Aink63"]},{id:"il nī",source:"il",target:"nī",strength:.26785645013698767,citations:["Aink136","Aink307"]},{id:"nī maka",source:"nī",target:"maka",strength:.27124133973821846,citations:["Aink101","Aink29","Aink49"]},{id:"i- ākkam",source:"i-",target:"ākkam",strength:.27152837715157224,citations:["Aink117","Aink8"]},{id:"varavu eṉ",source:"varavu",target:"eṉ",strength:.27416151379415354,citations:["Aink2","Aink88"]},{id:"tōḻaṉ i-",source:"tōḻaṉ",target:"i-",strength:.27840954515521477,citations:["Aink117","Aink118"]},{id:"malar a-",source:"malar",target:"a-",strength:.2798567990595876,citations:["Aink18","Aink72"]},{id:"vāḻ koṇkaṉ",source:"vāḻ",target:"koṇkaṉ",strength:.2851210812026211,citations:["Aink114","Aink139"]},{id:"nal nal",source:"nal",target:"nal",strength:.29193373305865866,citations:["Aink120","Aink204","Aink61"],curvature:.5},{id:"tuṟai tāṉ",source:"tuṟai",target:"tāṉ",strength:.29648199192111174,citations:["Aink10","Aink7"]},{id:"tōḻaṉ nal",source:"tōḻaṉ",target:"nal",strength:.2992000074859573,citations:["Aink117","Aink119","Aink120"]},{id:"ākkam taṭpam",source:"ākkam",target:"taṭpam",strength:.3029818149736888,citations:["Aink28","Aink45","Aink54"]},{id:"tuṟai i-",source:"tuṟai",target:"i-",strength:.30582253644505863,citations:["Aink103","Aink28"]},{id:"puṉal ūr",source:"puṉal",target:"ūr",strength:.3076098011641524,citations:["Aink65","Aink95"]},{id:"malar kaṇ",source:"malar",target:"kaṇ",strength:.30777349812472354,citations:["Aink19","Aink315"]},{id:"tōḻaṉ yūraṉ",source:"tōḻaṉ",target:"yūraṉ",strength:.31763681842388036,citations:["Aink36","Aink39"]},{id:"amma pāṇ",source:"amma",target:"pāṇ",strength:.318523004909332,citations:["Aink132","Aink89"]},{id:"ūr ākkam",source:"ūr",target:"ākkam",strength:.31853619325307664,citations:["Aink15","Aink19","Aink24"]},{id:"varavu kāl",source:"varavu",target:"kāl",strength:.3192363054839998,citations:["Aink116","Aink349"]},{id:"varavu e-",source:"varavu",target:"e-",strength:.3192363054839998,citations:["Aink134","Aink221"]},{id:"varavu puṉal",source:"varavu",target:"puṉal",strength:.3192363054839998,citations:["Aink69","Aink72"]},{id:"kaṇ e-",source:"kaṇ",target:"e-",strength:.32231202400107,citations:["Aink84"]},{id:"pāṇ nī",source:"pāṇ",target:"nī",strength:.32499812497531044,citations:["Aink136","Aink140","Aink82"],curvature:.25},{id:"eṉ tāṉ",source:"eṉ",target:"tāṉ",strength:.32564953312423917,citations:["Aink33","Aink41"]},{id:"pū(m) peru(m)",source:"pū(m)",target:"peru(m)",strength:.33121258569662326,citations:["Aink19","Aink33"]},{id:"makiḻ tāṉ",source:"makiḻ",target:"tāṉ",strength:.33121258569662326,citations:["Aink38","Aink66"]},{id:"ākkam e-",source:"ākkam",target:"e-",strength:.3319988256968547,citations:["Aink108","Aink17"]},{id:"ūr vem",source:"ūr",target:"vem",strength:.3329883232755418,citations:["Aink63","Aink86"]},{id:"iṉ nī",source:"iṉ",target:"nī",strength:.33929627432600734,citations:["Aink203","Aink46"]},{id:"vāḻ pāṇ",source:"vāḻ",target:"pāṇ",strength:.34422552820439783,citations:["Aink1","Aink111","Aink132","Aink89"]},{id:"ākkam nal",source:"ākkam",target:"nal",strength:.3453550802416647,citations:["Aink302","Aink308","Aink318","Aink330"],curvature:.25},{id:"a- nal",source:"a-",target:"nal",strength:.3472150479161113,citations:["Aink55","Aink56","Aink57","Aink61"]},{id:"yūraṉ tāṉ",source:"yūraṉ",target:"tāṉ",strength:.3494811495374685,citations:["Aink10","Aink7"]},{id:"em a-",source:"em",target:"a-",strength:.3512966232486074,citations:["Aink82","Aink90"]},{id:"ūr pāṇ",source:"ūr",target:"pāṇ",strength:.351624104617896,citations:["Aink1","Aink43","Aink49"]},{id:"nī paca",source:"nī",target:"paca",strength:.3517544591139946,citations:["Aink29","Aink45"]},{id:"cel nal",source:"cel",target:"nal",strength:.35331253348338754,citations:["Aink22","Aink302","Aink307"]},{id:"piri nal",source:"piri",target:"nal",strength:.3573773478082441,citations:["Aink308","Aink57"]},{id:"nal eṉ",source:"nal",target:"eṉ",strength:.35894708474362436,citations:["Aink204","Aink67"]},{id:"vāḻ vāḻ",source:"vāḻ",target:"vāḻ",strength:.3633794646803295,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.5},{id:"ūr toṭi",source:"ūr",target:"toṭi",strength:.3645110994768257,citations:["Aink28","Aink98"]},{id:"nī yāṅkaṇ",source:"nī",target:"yāṅkaṇ",strength:.36552634346168583,citations:["Aink79","Aink87"]},{id:"vāḻ kātal",source:"vāḻ",target:"kātal",strength:.36603693788411373,citations:["Aink221","Aink340"]},{id:"peru(m) tuṟai",source:"peru(m)",target:"tuṟai",strength:.36903995635084014,citations:["Aink31","Aink69","Aink75"]},{id:"e- peru(m)",source:"e-",target:"peru(m)",strength:.3707243248140854,citations:["Aink123","Aink89"]},{id:"ūr i-",source:"ūr",target:"i-",strength:.37139102517441136,citations:["Aink100","Aink30","Aink8","Aink99"]},{id:"ūr nī",source:"ūr",target:"nī",strength:.3745543253336198,citations:["Aink42","Aink43","Aink49","Aink54","Aink68","Aink85","Aink87"]},{id:"ūr maṉai",source:"ūr",target:"maṉai",strength:.37696928426481285,citations:["Aink3","Aink87"]},{id:"tāṉ koḷ",source:"tāṉ",target:"koḷ",strength:.37864869074059593,citations:["Aink10","Aink7"]},{id:"neṭu(m) kaṇ",source:"neṭu(m)",target:"kaṇ",strength:.37921332231374333,citations:["Aink30","Aink315"]},{id:"ce(m) kaṇ",source:"ce(m)",target:"kaṇ",strength:.37921332231374333,citations:["Aink346","Aink92"]},{id:"nī pāṇ",source:"nī",target:"pāṇ",strength:.37978668188028314,citations:["Aink139","Aink43","Aink47","Aink49"],curvature:.25},{id:"kēḷ eṉ",source:"kēḷ",target:"eṉ",strength:.38092200031712203,citations:["Aink113","Aink315"]},{id:"yaṉṉa nī",source:"yaṉṉa",target:"nī",strength:.38092200031712203,citations:["Aink307","Aink42"]},{id:"kaṇ paca",source:"kaṇ",target:"paca",strength:.3916715071017305,citations:["Aink36","Aink37"]},{id:"koḷ cel",source:"koḷ",target:"cel",strength:.39804896733008094,citations:["Aink10","Aink7"]},{id:"aṟi nī",source:"aṟi",target:"nī",strength:.39837615650200087,citations:["Aink47","Aink79"]},{id:"il pāṇ",source:"il",target:"pāṇ",strength:.3983761565020009,citations:["Aink136","Aink138"]},{id:"malar taṭpam",source:"malar",target:"taṭpam",strength:.40224040282617324,citations:["Aink108","Aink328","Aink69"]},{id:"yūraṉ kēḷ",source:"yūraṉ",target:"kēḷ",strength:.4047536167303514,citations:["Aink2","Aink9"]},{id:"peṇ ūr",source:"peṇ",target:"ūr",strength:.4061368254679403,citations:["Aink13","Aink40"]},{id:"nāḷ a-",source:"nāḷ",target:"a-",strength:.41037650542460086,citations:["Aink109","Aink95"]},{id:"yūraṉ maka",source:"yūraṉ",target:"maka",strength:.4157999931907197,citations:["Aink91","Aink96","Aink97"]},{id:"nī naya",source:"nī",target:"naya",strength:.4185255010780426,citations:["Aink309","Aink46"]},{id:"nī neñcam",source:"nī",target:"neñcam",strength:.4185255010780426,citations:["Aink50"]},{id:"pōl kaṇ",source:"pōl",target:"kaṇ",strength:.4208390483048579,citations:["Aink101","Aink16"]},{id:"curam nām",source:"curam",target:"nām",strength:.4208390483048579,citations:["Aink314","Aink329"]},{id:"kaḷvaṉ taṭpam",source:"kaḷvaṉ",target:"taṭpam",strength:.42559273602546344,citations:["Aink27","Aink30"]},{id:"tuṟai kēḷ",source:"tuṟai",target:"kēḷ",strength:.4274057620810226,citations:["Aink111","Aink2","Aink9"]},{id:"nī maṉai",source:"nī",target:"maṉai",strength:.4274057620810226,citations:["Aink66","Aink81","Aink87"]},{id:"yūraṉ i-",source:"yūraṉ",target:"i-",strength:.43486851673880333,citations:["Aink91","Aink96","Aink97"]},{id:"peṟu ūr",source:"peṟu",target:"ūr",strength:.44374032622886084,citations:["Aink49","Aink63"]},{id:"yāṅkaṇ maka",source:"yāṅkaṇ",target:"maka",strength:.4451383289233364,citations:["Aink79"]},{id:"kaḻaṉi maka",source:"kaḻaṉi",target:"maka",strength:.4451383289233364,citations:["Aink91","Aink96"]},{id:"nal nāṭu",source:"nal",target:"nāṭu",strength:.4479800061855215,citations:["Aink61"]},{id:"ākkam aṟi",source:"ākkam",target:"aṟi",strength:.4479800061855215,citations:["Aink79","Aink90"]},{id:"peru(m) ciṉai",source:"peru(m)",target:"ciṉai",strength:.45385569226243705,citations:["Aink145","Aink19"]},{id:"poḻutu a-",source:"poḻutu",target:"a-",strength:.454357466413872,citations:["Aink406","Aink82"]},{id:"tōḻaṉ kātal",source:"tōḻaṉ",target:"kātal",strength:.454861174189164,citations:["Aink221","Aink340"]},{id:"yāy pū(m)",source:"yāy",target:"pū(m)",strength:.4579248770785259,citations:["Aink10","Aink4"]},{id:"makiḻ toṭi",source:"makiḻ",target:"toṭi",strength:.4579248770785259,citations:["Aink24","Aink40"]},{id:"nī peṇ",source:"nī",target:"peṇ",strength:.4582056725961087,citations:["Aink68","Aink69","Aink70"]},{id:"āṭu taṭpam",source:"āṭu",target:"taṭpam",strength:.45844254906577847,citations:["Aink115","Aink84"],curvature:.25},{id:"taṭpam āṭu",source:"taṭpam",target:"āṭu",strength:.45844254906577847,citations:["Aink77","Aink98"],curvature:.25},{id:"vāḻ nām",source:"vāḻ",target:"nām",strength:.4618078546132707,citations:["Aink111","Aink116","Aink335","Aink336","Aink337","Aink34","Aink35"]},{id:"am i-",source:"am",target:"i-",strength:.463196236786384,citations:["Aink103","Aink302"]},{id:"yaviṉi pal",source:"yaviṉi",target:"pal",strength:.464820009294129,citations:["Aink1","Aink3"]},{id:"tuṟai peṇ",source:"tuṟai",target:"peṇ",strength:.464820009294129,citations:["Aink113","Aink13"]},{id:"pāṇ maka",source:"pāṇ",target:"maka",strength:.46733035703507464,citations:["Aink47","Aink48","Aink49"]},{id:"ūr koṭu(m)",source:"ūr",target:"koṭu(m)",strength:.46757194264209023,citations:["Aink11","Aink12"]},{id:"ūr māṇ",source:"ūr",target:"māṇ",strength:.46757194264209023,citations:["Aink42","Aink47"]},{id:"nal naya",source:"nal",target:"naya",strength:.4681293507615632,citations:["Aink309","Aink55"]},{id:"vēṉal ākkam",source:"vēṉal",target:"ākkam",strength:.4681293507615632,citations:["Aink45","Aink54"]},{id:"peru(m) kaṭal",source:"peru(m)",target:"kaṭal",strength:.4692513491178733,citations:["Aink102","Aink123"]},{id:"naṟu(m) pū(m)",source:"naṟu(m)",target:"pū(m)",strength:.47038306186651313,citations:["Aink344","Aink404"]},{id:"nī moḻi",source:"nī",target:"moḻi",strength:.4715246586943994,citations:["Aink60","Aink77"]},{id:"yām pū(m)",source:"yām",target:"pū(m)",strength:.47154281756423144,citations:["Aink10","Aink4","Aink7"]},{id:"vem curam",source:"vem",target:"curam",strength:.4738382059212147,citations:["Aink309","Aink330"]},{id:"vāḻ ciṟi",source:"vāḻ",target:"ciṟi",strength:.47678894083743284,citations:["Aink334","Aink339"]},{id:"vāḻ makiḻ",source:"vāḻ",target:"makiḻ",strength:.4784463590796268,citations:["Aink31","Aink32","Aink33","Aink37","Aink38","Aink40","Aink59","Aink77"]},{id:"pal veṉa",source:"pal",target:"veṉa",strength:.47859189364182025,citations:["Aink3","Aink6"]},{id:"varavu eṉap",source:"varavu",target:"eṉap",strength:.47919844696193764,citations:["Aink105","Aink72"]},{id:"ciṟu(m) kaṇ",source:"ciṟu(m)",target:"kaṇ",strength:.4840994099982617,citations:["Aink309","Aink314","Aink327"]},{id:"keḻu ūr",source:"keḻu",target:"ūr",strength:.48483165223869434,citations:["Aink11","Aink12","Aink85"]},{id:"a- varavu",source:"a-",target:"varavu",strength:.4856332186131342,citations:["Aink341","Aink342","Aink343","Aink344","Aink345","Aink346","Aink347","Aink348","Aink349","Aink350"]},{id:"toṭi yām",source:"toṭi",target:"yām",strength:.4899653252670624,citations:["Aink38","Aink40"]},{id:"peṇ eṉ",source:"peṇ",target:"eṉ",strength:.4939875504972564,citations:["Aink113","Aink89"]},{id:"i- no/nō",source:"i-",target:"no/nō",strength:.4960460498266991,citations:["Aink28","Aink99"]},{id:"tuñcu ūr",source:"tuñcu",target:"ūr",strength:.49673948384521766,citations:["Aink13","Aink43"]},{id:"tōṟṟam ūr",source:"tōṟṟam",target:"ūr",strength:.49673948384521766,citations:["Aink17","Aink98"]},{id:"mel kāl",source:"mel",target:"kāl",strength:.497436616195988,citations:["Aink26","Aink35"]},{id:"puṉal em",source:"puṉal",target:"em",strength:.497436616195988,citations:["Aink77","Aink78"]},{id:"nī mārpu",source:"nī",target:"mārpu",strength:.5015728339661183,citations:["Aink42","Aink44","Aink46","Aink51"]},{id:"yāṇar nī",source:"yāṇar",target:"nī",strength:.5015728339661183,citations:["Aink42","Aink43","Aink49","Aink87"]},{id:"miṉ taṭpam",source:"miṉ",target:"taṭpam",strength:.5024235100550496,citations:["Aink10","Aink5"]},{id:"aṟu yūraṉ",source:"aṟu",target:"yūraṉ",strength:.5024235100550496,citations:["Aink25","Aink29"]},{id:"veḷ pū(m)",source:"veḷ",target:"pū(m)",strength:.5062310792532397,citations:["Aink17","Aink19","Aink41"]},{id:"tāṉ amai",source:"tāṉ",target:"amai",strength:.5068548498787939,citations:["Aink103"]},{id:"il veṉa",source:"il",target:"veṉa",strength:.50912815945532,citations:["Aink8","Aink9"]},{id:"paca e-",source:"paca",target:"e-",strength:.5098948009839752,citations:["Aink144","Aink35"]},{id:"kaṇ civa",source:"kaṇ",target:"civa",strength:.5114417066821353,citations:["Aink125","Aink69"]},{id:"kaṇ yāṉai",source:"kaṇ",target:"yāṉai",strength:.5114417066821353,citations:["Aink314","Aink327"]},{id:"varavu varavu",source:"varavu",target:"varavu",strength:.5170923456180851,citations:["Aink341","Aink342","Aink343","Aink344","Aink345","Aink346","Aink347","Aink348","Aink349","Aink350"],curvature:.5},{id:"tōḻaṉ makiḻ",source:"tōḻaṉ",target:"makiḻ",strength:.5172477929651664,citations:["Aink31","Aink32","Aink33","Aink37","Aink38","Aink40"]},{id:"taṭpam kaṭal",source:"taṭpam",target:"kaṭal",strength:.521633697023825,citations:["Aink106","Aink107","Aink108"]},{id:"maka paḻaṉa(m)",source:"maka",target:"paḻaṉa(m)",strength:.5219691029529226,citations:["Aink91","Aink96"]},{id:"em vem",source:"em",target:"vem",strength:.5228151383073775,citations:["Aink325","Aink78"]},{id:"taṭpam puṉal",source:"taṭpam",target:"puṉal",strength:.5251260158849157,citations:["Aink54","Aink69","Aink76","Aink77","Aink98"]},{id:"iṟa cel",source:"iṟa",target:"cel",strength:.526255126468279,citations:["Aink309","Aink317"]},{id:"em cel",source:"em",target:"cel",strength:.528009094557947,citations:["Aink303","Aink77"]},{id:"no/nō ākkam",source:"no/nō",target:"ākkam",strength:.529016597853167,citations:["Aink101","Aink28","Aink99"]},{id:"vivaḷ nal",source:"vivaḷ",target:"nal",strength:.529016597853167,citations:["Aink55","Aink56","Aink57"]},{id:"maṇa taṭpam",source:"maṇa",target:"taṭpam",strength:.531591051258177,citations:["Aink19","Aink348"]},{id:"piri val",source:"piri",target:"val",strength:.5352733230953647,citations:["Aink310","Aink338"]},{id:"tōḻaṉ vayiṉ",source:"tōḻaṉ",target:"vayiṉ",strength:.5362828722804657,citations:["Aink335","Aink336","Aink337"]},{id:"i- paḻaṉa(m)",source:"i-",target:"paḻaṉa(m)",strength:.5400270108159702,citations:["Aink91","Aink96"]},{id:"malar nil",source:"malar",target:"nil",strength:.5419779724956351,citations:["Aink338","Aink75"]},{id:"maṭa(m) maka",source:"maṭa(m)",target:"maka",strength:.5422731643010408,citations:["Aink326","Aink48","Aink98"]},{id:"em tōḷ",source:"em",target:"tōḷ",strength:.5429644828834191,citations:["Aink108","Aink109"]},{id:"nīttam varavu",source:"nīttam",target:"varavu",strength:.5459694889259857,citations:["Aink323","Aink330"]},{id:"tuṟai keḻu",source:"tuṟai",target:"keḻu",strength:.5467990562786743,citations:["Aink11","Aink12","Aink140"]},{id:"pōl uṇ",source:"pōl",target:"uṇ",strength:.5469867081136133,citations:["Aink101","Aink16"]},{id:"nī kēḷ",source:"nī",target:"kēḷ",strength:.5484424558200627,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128"]},{id:"kaṇ ēr",source:"kaṇ",target:"ēr",strength:.5490452074430558,citations:["Aink101","Aink72"]},{id:"piri aru(m)",source:"piri",target:"aru(m)",strength:.5490452074430558,citations:["Aink338"]},{id:"muṉ yām",source:"muṉ",target:"yām",strength:.5490452074430558,citations:["Aink38","Aink40"]},{id:"veḷ nel",source:"veḷ",target:"nel",strength:.5490452074430558,citations:["Aink48","Aink58"]},{id:"nekiḻ cel",source:"nekiḻ",target:"cel",strength:.5500867428815084,citations:["Aink25","Aink315"]},{id:"a- vivaḷ",source:"a-",target:"vivaḷ",strength:.5508913880349973,citations:["Aink54","Aink55","Aink56","Aink57"]},{id:"peru(m) ciṟa",source:"peru(m)",target:"ciṟa",strength:.5514783972310968,citations:["Aink1","Aink403","Aink9"]},{id:"uṇ kaṇ",source:"uṇ",target:"kaṇ",strength:.5532919321530141,citations:["Aink101","Aink16","Aink21","Aink334","Aink37","Aink406"]},{id:"iṉ maṉ",source:"iṉ",target:"maṉ",strength:.5543379145086613,citations:["Aink326","Aink337"]},{id:"uṭai tuṟai",source:"uṭai",target:"tuṟai",strength:.5554226676714064,citations:["Aink113","Aink20"]},{id:"tōḷ iḻai",source:"tōḷ",target:"iḻai",strength:.5554226676714064,citations:["Aink310","Aink318"]},{id:"nal miku",source:"nal",target:"miku",strength:.5587320091388405,citations:["Aink120","Aink64"]},{id:"tāṉ col",source:"tāṉ",target:"col",strength:.5598540074951507,citations:["Aink38","Aink41"]},{id:"al nī",source:"al",target:"nī",strength:.5618320402335639,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128","Aink69"]},{id:"yūra nī",source:"yūra",target:"nī",strength:.5621273170716767,citations:["Aink60","Aink81"]},{id:"tōḻaṉ ciṟi",source:"tōḻaṉ",target:"ciṟi",strength:.565613177142483,citations:["Aink334","Aink339"]},{id:"maṉai neṭu(m)",source:"maṉai",target:"neṭu(m)",strength:.5667960992966484,citations:["Aink324","Aink60"]},{id:"tōḻaṉ nām",source:"tōḻaṉ",target:"nām",strength:.568025324960446,citations:["Aink116","Aink335","Aink336","Aink337","Aink34","Aink35","Aink36"]},{id:"aṉṉai vāḻ",source:"aṉṉai",target:"vāḻ",strength:.568621585698115,citations:["Aink101","Aink102","Aink103","Aink104","Aink105","Aink106","Aink107","Aink108","Aink109","Aink201","Aink202","Aink203","Aink204"],curvature:.25},{id:"vāḻ aṉṉai",source:"vāḻ",target:"aṉṉai",strength:.568621585698115,citations:["Aink101","Aink102","Aink103","Aink104","Aink105","Aink106","Aink107","Aink108","Aink109","Aink201","Aink202","Aink203","Aink204"],curvature:.25},{id:"yāṉ i-",source:"yāṉ",target:"i-",strength:.5691945520190975,citations:["Aink118","Aink59"]},{id:"kamaḻ taṭpam",source:"kamaḻ",target:"taṭpam",strength:.5691945520190975,citations:["Aink19","Aink348"]},{id:"taṭpam poḻil",source:"taṭpam",target:"poḻil",strength:.5691945520190975,citations:["Aink19","Aink348"]},{id:"taṭpam maṇ",source:"taṭpam",target:"maṇ",strength:.5691945520190975,citations:["Aink27","Aink30"]},{id:"i- maruntu",source:"i-",target:"maruntu",strength:.5691945520190975,citations:["Aink59","Aink99"]},{id:"al poy",source:"al",target:"poy",strength:.5728768238562852,citations:["Aink66","Aink80"]},{id:"kāl āmpal",source:"kāl",target:"āmpal",strength:.5766658429480233,citations:["Aink34","Aink68"]},{id:"kaṇ al",source:"kaṇ",target:"al",strength:.5812161644288555,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128"]},{id:"vayiṉ piri",source:"vayiṉ",target:"piri",strength:.5818950204833708,citations:["Aink308","Aink336"]},{id:"vem kātal",source:"vem",target:"kātal",strength:.5818950204833708,citations:["Aink325","Aink71"]},{id:"varavu tāṉ",source:"varavu",target:"tāṉ",strength:.5822978287995716,citations:["Aink341","Aink342","Aink343","Aink344","Aink345","Aink346","Aink347","Aink348","Aink349","Aink350"],curvature:.25},{id:"vēḻam pū(m)",source:"vēḻam",target:"pū(m)",strength:.5834733571041025,citations:["Aink12","Aink17","Aink19"]},{id:"niṟaikkum ūr",source:"niṟaikkum",target:"ūr",strength:.587342142222495,citations:["Aink47","Aink48"]},{id:"pūk ūr",source:"pūk",target:"ūr",strength:.5875792243384614,citations:["Aink16","Aink3","Aink8","Aink99"]},{id:"curam cel",source:"curam",target:"cel",strength:.5882772506266516,citations:["Aink301","Aink307","Aink309","Aink317","Aink331"]},{id:"maka i-",source:"maka",target:"i-",strength:.5895761655056428,citations:["Aink100","Aink52","Aink79","Aink91","Aink96","Aink97","Aink98","Aink99"]},{id:"poṉ cey",source:"poṉ",target:"cey",strength:.5930261684323269,citations:["Aink316","Aink41"]},{id:"maṉai yāṅkaṇ",source:"maṉai",target:"yāṅkaṇ",strength:.5930261684323269,citations:["Aink48","Aink87"]},{id:"toṭi maṭa(m)",source:"toṭi",target:"maṭa(m)",strength:.5959636404997759,citations:["Aink76","Aink98"]},{id:"taṇṇ peru(m)",source:"taṇṇ",target:"peru(m)",strength:.5974575082560712,citations:["Aink123","Aink73"]},{id:"a- tāṉ",source:"a-",target:"tāṉ",strength:.59910092300517,citations:["Aink341","Aink342","Aink343","Aink344","Aink345","Aink346","Aink347","Aink348","Aink349","Aink350","Aink41","Aink66"],curvature:.25},{id:"e- taṭa(m)",source:"e-",target:"taṭa(m)",strength:.6004974593612525,citations:["Aink11"]},{id:"veḷ maṇal",source:"veḷ",target:"maṇal",strength:.6020443650594127,citations:["Aink105","Aink113"]},{id:"yuṇ kaṇ",source:"yuṇ",target:"kaṇ",strength:.6020443650594127,citations:["Aink126","Aink72"]},{id:"maruntu ākkam",source:"maruntu",target:"ākkam",strength:.6062588757040299,citations:["Aink101","Aink59","Aink99"]},{id:"tēṉūr a-",source:"tēṉūr",target:"a-",strength:.6062588757040299,citations:["Aink54","Aink55","Aink57"]},{id:"aṟu kaḻaṉi",source:"aṟu",target:"kaḻaṉi",strength:.6067980527800181,citations:["Aink25","Aink29"]},{id:"kaḷvaṉ kaḻaṉi",source:"kaḷvaṉ",target:"kaḻaṉi",strength:.6067980527800181,citations:["Aink25","Aink29"]},{id:"tāṉ varavu",source:"tāṉ",target:"varavu",strength:.6076624017882544,citations:["Aink134","Aink341","Aink342","Aink343","Aink344","Aink345","Aink346","Aink347","Aink348","Aink349","Aink350"],curvature:.25},{id:"nōkkam nal",source:"nōkkam",target:"nal",strength:.6117311667551973,citations:["Aink204"]},{id:"ayar nal",source:"ayar",target:"nal",strength:.6117311667551973,citations:["Aink307","Aink309"]},{id:"āṭu em",source:"āṭu",target:"em",strength:.6134177966846548,citations:["Aink77","Aink78"]},{id:"aṟam il",source:"aṟam",target:"il",strength:.6151264746880335,citations:["Aink118","Aink332"]},{id:"kēḷ talaimakaḷ",source:"kēḷ",target:"talaimakaḷ",strength:.6151264746880335,citations:["Aink201","Aink221"]},{id:"aru(m) curam",source:"aru(m)",target:"curam",strength:.6173069576190601,citations:["Aink301","Aink303","Aink317"]},{id:"tōḻaṉ mūrp",source:"tōḻaṉ",target:"mūrp",strength:.6186123347588398,citations:["Aink34","Aink35"]},{id:"taṭpam ṇakam",source:"taṭpam",target:"ṇakam",strength:.6221937096354544,citations:["Aink27","Aink30"]},{id:"puṉal aṭu",source:"puṉal",target:"aṭu",strength:.6251963813603526,citations:["Aink100","Aink15","Aink72"]},{id:"puṇar tuṇai",source:"puṇar",target:"tuṇai",strength:.6258759814726419,citations:["Aink15","Aink72"]},{id:"ōkku pū(m)",source:"ōkku",target:"pū(m)",strength:.6277567622078385,citations:["Aink16","Aink33"]},{id:"vāṉ pū(m)",source:"vāṉ",target:"pū(m)",strength:.6277567622078385,citations:["Aink320","Aink331"]},{id:"poykaip pū(m)",source:"poykaip",target:"pū(m)",strength:.6277567622078385,citations:["Aink34","Aink97"]},{id:"mel tōḷ",source:"mel",target:"tōḷ",strength:.6293169064134188,citations:["Aink120","Aink28","Aink310"]},{id:"vuṇ kaṇ",source:"vuṇ",target:"kaṇ",strength:.6357379403634322,citations:["Aink125","Aink36","Aink69"]},{id:"koṇkaṉ nī",source:"koṇkaṉ",target:"nī",strength:.6398579741132878,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128","Aink307"]},{id:"maka piṇa",source:"maka",target:"piṇa",strength:.6417393025333273,citations:["Aink326","Aink401"]},{id:"puṉal āṭu",source:"puṉal",target:"āṭu",strength:.6436273641047249,citations:["Aink77","Aink78","Aink98"]},{id:"taṭpam yūraṉ",source:"taṭpam",target:"yūraṉ",strength:.6445354673097538,citations:["Aink10","Aink13","Aink2","Aink21","Aink5","Aink6","Aink7","Aink83","Aink9"]},{id:"kañal ūr",source:"kañal",target:"ūr",strength:.6458586531322442,citations:["Aink16","Aink3","Aink8","Aink99"]},{id:"tuṟai yūraṉai",source:"tuṟai",target:"yūraṉai",strength:.6460253260486838,citations:["Aink20","Aink88"]},{id:"paya cey",source:"paya",target:"cey",strength:.6460253260486838,citations:["Aink305","Aink56"]},{id:"marutattup tuṟai",source:"marutattup",target:"tuṟai",strength:.6460253260486838,citations:["Aink31","Aink75"]},{id:"marutattup peru(m)",source:"marutattup",target:"peru(m)",strength:.650456665872428,citations:["Aink31","Aink75"]},{id:"tāṉ uṇarntōr",source:"tāṉ",target:"uṇarntōr",strength:.650456665872428,citations:["Aink38","Aink41"]},{id:"vēḻam veḷ",source:"vēḻam",target:"veḷ",strength:.6519952193080683,citations:["Aink13","Aink17","Aink19"]},{id:"yūraṉ mārpu",source:"yūraṉ",target:"mārpu",strength:.6521089751308652,citations:["Aink14","Aink25","Aink29","Aink4"]},{id:"paṇpu il",source:"paṇpu",target:"il",strength:.6527299754489541,citations:["Aink138","Aink332"]},{id:"aruḷ nī",source:"aruḷ",target:"nī",strength:.6527299754489541,citations:["Aink50"]},{id:"il lākuka",source:"il",target:"lākuka",strength:.6527299754489541,citations:["Aink8","Aink9"]},{id:"naṉi ciṟa",source:"naṉi",target:"ciṟa",strength:.6550435226757694,citations:["Aink10","Aink7"]},{id:"aṉṉai ūrp",source:"aṉṉai",target:"ūrp",strength:.6550435226757694,citations:["Aink104","Aink202"]},{id:"aṭu puṇar",source:"aṭu",target:"puṇar",strength:.6550435226757694,citations:["Aink15","Aink72"]},{id:"taṭpam tuṟai",source:"taṭpam",target:"tuṟai",strength:.6560804983057544,citations:["Aink10","Aink105","Aink115","Aink13","Aink2","Aink21","Aink5","Aink6","Aink7","Aink83","Aink88","Aink9"]},{id:"kaṇ koṇkaṉ",source:"kaṇ",target:"koṇkaṉ",strength:.6577749899743195,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128"]},{id:"peṟu nutal",source:"peṟu",target:"nutal",strength:.659797210396375,citations:["Aink56","Aink94"]},{id:"vāl iḻai",source:"vāl",target:"iḻai",strength:.6698569424619131,citations:["Aink0","Aink73"]},{id:"iḻai nekiḻ",source:"iḻai",target:"nekiḻ",strength:.6698569424619131,citations:["Aink25","Aink318"]},{id:"cel ayar",source:"cel",target:"ayar",strength:.6698569424619131,citations:["Aink307","Aink309"]},{id:"oḻi cel",source:"oḻi",target:"cel",strength:.6698569424619131,citations:["Aink321","Aink330"]},{id:"val poy",source:"val",target:"poy",strength:.6698569424619131,citations:["Aink37"]},{id:"māṇ iḻai",source:"māṇ",target:"iḻai",strength:.6698569424619131,citations:["Aink42","Aink47"]},{id:"vāḻ yātaṉ",source:"vāḻ",target:"yātaṉ",strength:.6709345085118631,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.25},{id:"yātaṉ vāḻ",source:"yātaṉ",target:"vāḻ",strength:.6709345085118631,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"],curvature:.25},{id:"vāḻ yaviṉi",source:"vāḻ",target:"yaviṉi",strength:.6709345085118631,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"oṇmai muṉ",source:"oṇmai",target:"muṉ",strength:.6724976788606483,citations:["Aink40","Aink83"]},{id:"curam iṟa",source:"curam",target:"iṟa",strength:.6732722273889956,citations:["Aink306","Aink309","Aink317"]},{id:"tātu uṇ",source:"tātu",target:"uṇ",strength:.6732722273889956,citations:["Aink67","Aink82","Aink93"]},{id:"maṇal aṭu",source:"maṇal",target:"aṭu",strength:.6751928672518112,citations:["Aink100","Aink15"]},{id:"pūp uṇ",source:"pūp",target:"uṇ",strength:.6751928672518112,citations:["Aink101","Aink16"]},{id:"vēḻam karuppu",source:"vēḻam",target:"karuppu",strength:.6751928672518112,citations:["Aink12","Aink18"]},{id:"mūtu ūr",source:"mūtu",target:"ūr",strength:.6761781734291644,citations:["Aink15","Aink372"]},{id:"vāḻ vēṇṭu",source:"vāḻ",target:"vēṇṭu",strength:.6766328385011993,citations:["Aink101","Aink102","Aink103","Aink104","Aink105","Aink106","Aink107","Aink108","Aink109","Aink201","Aink202","Aink203","Aink204"]},{id:"nām vayiṉ",source:"nām",target:"vayiṉ",strength:.6812187510234661,citations:["Aink335","Aink336","Aink337","Aink39"]},{id:"ciṟu(m) miṉ",source:"ciṟu(m)",target:"miṉ",strength:.6836288268096044,citations:["Aink1","Aink10"]},{id:"am vari",source:"am",target:"vari",strength:.6836288268096044,citations:["Aink306","Aink316"]},{id:"pari neṭu(m)",source:"pari",target:"neṭu(m)",strength:.6865662988770532,citations:["Aink134","Aink95"]},{id:"aṉṉai namm",source:"aṉṉai",target:"namm",strength:.6917032101333678,citations:["Aink102","Aink104","Aink202"]},{id:"iṟa kātal",source:"iṟa",target:"kātal",strength:.69264702343669,citations:["Aink311","Aink319"]},{id:"nām mūrp",source:"nām",target:"mūrp",strength:.69264702343669,citations:["Aink34","Aink35"]},{id:"al urai",source:"al",target:"urai",strength:.69264702343669,citations:["Aink66","Aink80"]},{id:"vekuḷvōḷ kaṇ",source:"vekuḷvōḷ",target:"kaṇ",strength:.69264702343669,citations:["Aink84"]},{id:"kaḷvaṉ aṟu",source:"kaḷvaṉ",target:"aṟu",strength:.696722939269659,citations:["Aink21","Aink25","Aink29"]},{id:"kaḻaṉi mārpu",source:"kaḻaṉi",target:"mārpu",strength:.696722939269659,citations:["Aink25","Aink29","Aink4"]},{id:"ciṟa vēṭṭōḷ",source:"ciṟa",target:"vēṭṭōḷ",strength:.6984375866438449,citations:["Aink1","Aink10","Aink3"]},{id:"yāṇar ūr",source:"yāṇar",target:"ūr",strength:.6985224709814216,citations:["Aink1","Aink100","Aink42","Aink43","Aink49","Aink50","Aink70","Aink87"]},{id:"keḻu koṭu(m)",source:"keḻu",target:"koṭu(m)",strength:.6990244836650404,citations:["Aink11","Aink12"]},{id:"paca paṉi",source:"paca",target:"paṉi",strength:.6990244836650404,citations:["Aink141","Aink37"]},{id:"pāvai yaṉṉa",source:"pāvai",target:"yaṉṉa",strength:.6990244836650404,citations:["Aink221","Aink307"]},{id:"tuṟai yūraṉ",source:"tuṟai",target:"yūraṉ",strength:.7033986524764622,citations:["Aink10","Aink13","Aink14","Aink2","Aink21","Aink5","Aink6","Aink7","Aink83","Aink9"]},{id:"maṉ tām",source:"maṉ",target:"tām",strength:.7037131589277265,citations:["Aink316","Aink332","Aink337"]},{id:"toṭi muṉ",source:"toṭi",target:"muṉ",strength:.7037131589277265,citations:["Aink38","Aink40","Aink83"]},{id:"aṉpu il",source:"aṉpu",target:"il",strength:.7057291330653109,citations:["Aink138","Aink41"]},{id:"kaḻaṉit malar",source:"kaḻaṉit",target:"malar",strength:.7057291330653109,citations:["Aink53","Aink94"]},{id:"tōḷ tuṟa",source:"tōḷ",target:"tuṟa",strength:.7127963680127317,citations:["Aink108","Aink109"]},{id:"mell am",source:"mell",target:"am",strength:.7127963680127317,citations:["Aink133","Aink302"]},{id:"ciṟu(m) yāṉai",source:"ciṟu(m)",target:"yāṉai",strength:.7127963680127317,citations:["Aink314","Aink327"]},{id:"ciṟa veṉa",source:"ciṟa",target:"veṉa",strength:.712980218214295,citations:["Aink1","Aink10","Aink3"]},{id:"yaḻi puṉal",source:"yaḻi",target:"puṉal",strength:.7202676589416573,citations:["Aink53","Aink78"]},{id:"puṉal āṭit",source:"puṉal",target:"āṭit",strength:.7202676589416573,citations:["Aink76","Aink80"]},{id:"em tuṟa",source:"em",target:"tuṟa",strength:.7241697996379738,citations:["Aink108","Aink109"]},{id:"iṉ vavar",source:"iṉ",target:"vavar",strength:.7241697996379738,citations:["Aink203","Aink331"]},{id:"aṇaṅku uṟu",source:"aṇaṅku",target:"uṟu",strength:.7241697996379738,citations:["Aink53","Aink58"]},{id:"kaṭal tirai",source:"kaṭal",target:"tirai",strength:.7281920248681678,citations:["Aink105","Aink107"]},{id:"karai vēḻam",source:"karai",target:"vēḻam",strength:.7281920248681678,citations:["Aink12","Aink13"]},{id:"kuṇam koḷ",source:"kuṇam",target:"koḷ",strength:.7281920248681678,citations:["Aink90"]},{id:"nām maṟa",source:"nām",target:"maṟa",strength:.7314112009586673,citations:["Aink319","Aink36"]},{id:"vaḷai nekiḻ",source:"vaḷai",target:"nekiḻ",strength:.7366279844259611,citations:["Aink136","Aink54"]},{id:"puṟavam aṇi",source:"puṟavam",target:"aṇi",strength:.7366279844259611,citations:["Aink404","Aink405"]},{id:"peṟu cuṭar",source:"peṟu",target:"cuṭar",strength:.7366279844259611,citations:["Aink56","Aink94"]},{id:"lākuka vēṭṭōḷ",source:"lākuka",target:"vēṭṭōḷ",strength:.7366279844259611,citations:["Aink8","Aink9"]},{id:"taṭa(m) erumai",source:"taṭa(m)",target:"erumai",strength:.7366279844259611,citations:["Aink94","Aink98"]},{id:"amaintaṉaṉ tāṉ",source:"amaintaṉaṉ",target:"tāṉ",strength:.7410593242497054,citations:["Aink103"]},{id:"tāmarai malar",source:"tāmarai",target:"malar",strength:.7452254543818138,citations:["Aink53","Aink68","Aink94"]},{id:"no/nō maruntu",source:"no/nō",target:"maruntu",strength:.7456461810530467,citations:["Aink101","Aink99"]},{id:"malai nāṭu",source:"malai",target:"nāṭu",strength:.7456461810530467,citations:["Aink202","Aink221"]},{id:"katir teṟu",source:"katir",target:"teṟu",strength:.7456461810530467,citations:["Aink319","Aink330"]},{id:"puḷḷik kaḷvaṉ",source:"puḷḷik",target:"kaḷvaṉ",strength:.7503998687736523,citations:["Aink21","Aink22"]},{id:"pai(m) aṟu",source:"pai(m)",target:"aṟu",strength:.7503998687736523,citations:["Aink305","Aink317"]},{id:"lākuka veṉa",source:"lākuka",target:"veṉa",strength:.7503998687736523,citations:["Aink8","Aink9"]},{id:"kaḻaṉi yūraṉ",source:"kaḻaṉi",target:"yūraṉ",strength:.754351583309618,citations:["Aink18","Aink25","Aink29","Aink4","Aink91","Aink96"]},{id:"putup puṉal",source:"putup",target:"puṉal",strength:.7599539674322507,citations:["Aink53","Aink64","Aink78","Aink79"]},{id:"yoḷ arivai",source:"yoḷ",target:"arivai",strength:.7604596008391904,citations:["Aink322","Aink73"]},{id:"pūp pōl",source:"pūp",target:"pōl",strength:.7657955256290886,citations:["Aink101","Aink16"]},{id:"al koṇkaṉ",source:"al",target:"koṇkaṉ",strength:.7684286864763007,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128"]},{id:"mel pulak",source:"mel",target:"pulak",strength:.7771689572543307,citations:["Aink119","Aink138"]},{id:"vayalaic ce(m)",source:"vayalaic",target:"ce(m)",strength:.7771689572543307,citations:["Aink25","Aink52"]},{id:"neṭu(m) nakar",source:"neṭu(m)",target:"nakar",strength:.7771689572543307,citations:["Aink324","Aink60"]},{id:"yarum curam",source:"yarum",target:"curam",strength:.7773095884196848,citations:["Aink307","Aink314","Aink320","Aink325","Aink329"]},{id:"vēṇṭu namm",source:"vēṇṭu",target:"namm",strength:.777853568294444,citations:["Aink102","Aink104","Aink202"]},{id:"cuṭar nutal",source:"cuṭar",target:"nutal",strength:.777853568294444,citations:["Aink107","Aink56","Aink94"]},{id:"yoḷ nutal",source:"yoḷ",target:"nutal",strength:.777853568294444,citations:["Aink123","Aink322","Aink73"]},{id:"poykai yāmpal",source:"poykai",target:"yāmpal",strength:.7832496818139675,citations:["Aink35","Aink91"]},{id:"mūr oṇmai",source:"mūr",target:"oṇmai",strength:.7832496818139675,citations:["Aink83","Aink92"]},{id:"koṇkaṉ kēḷ",source:"koṇkaṉ",target:"kēḷ",strength:.7844059636818237,citations:["Aink121","Aink122","Aink123","Aink124","Aink125","Aink126","Aink127","Aink128"]},{id:"vāḻ tōḻaṉ",source:"vāḻ",target:"tōḻaṉ",strength:.7895123902793685,citations:["Aink111","Aink112","Aink113","Aink114","Aink115","Aink116","Aink117","Aink118","Aink119","Aink120","Aink221","Aink31","Aink32","Aink33","Aink331","Aink332","Aink333","Aink334","Aink335","Aink336","Aink337","Aink338","Aink339","Aink34","Aink340","Aink35","Aink36","Aink37","Aink38","Aink39","Aink40"]},{id:"maṉai nakar",source:"maṉai",target:"nakar",strength:.7896271420423179,citations:["Aink324","Aink60"]},{id:"mal val",source:"mal",target:"val",strength:.7896271420423179,citations:["Aink37"]},{id:"yaviṉi pakai",source:"yaviṉi",target:"pakai",strength:.7896271420423179,citations:["Aink4","Aink6"]},{id:"vaṭṭi maṉai",source:"vaṭṭi",target:"maṉai",strength:.7896271420423179,citations:["Aink47","Aink48"]},{id:"pāy eṉak",source:"pāy",target:"eṉak",strength:.7896271420423179,citations:["Aink53","Aink73"]},{id:"karu(m) kōṭṭam",source:"karu(m)",target:"kōṭṭam",strength:.7896271420423179,citations:["Aink92","Aink95"]},{id:"taṭa(m) kōṭṭam",source:"taṭa(m)",target:"kōṭṭam",strength:.7896271420423179,citations:["Aink94","Aink98"]},{id:"ilaṅku vaḷai",source:"ilaṅku",target:"vaḷai",strength:.8033990263900092,citations:["Aink136","Aink310"]},{id:"kaḷvaṉ ṇakam",source:"kaḷvaṉ",target:"ṇakam",strength:.8033990263900092,citations:["Aink27","Aink30"]},{id:"alkul am",source:"alkul",target:"am",strength:.8033990263900092,citations:["Aink306","Aink316"]},{id:"kāṭu iṟa",source:"kāṭu",target:"iṟa",strength:.8033990263900092,citations:["Aink311","Aink313"]},{id:"maṟa amai",source:"maṟa",target:"amai",strength:.8033990263900092,citations:["Aink36"]},{id:"paṇait tōḷ",source:"paṇait",target:"tōḷ",strength:.80865347880953,citations:["Aink135","Aink318","Aink39"]},{id:"yallaṉ e-",source:"yallaṉ",target:"e-",strength:.8108703173189348,citations:["Aink11"]},{id:"kai vaḷ",source:"kai",target:"vaḷ",strength:.8187946832454452,citations:["Aink58","Aink61"]},{id:"maṇi niṟam",source:"maṇi",target:"niṟam",strength:.8272306428032385,citations:["Aink45","Aink96"]},{id:"oṇmai toṭi",source:"oṇmai",target:"toṭi",strength:.8329506634694229,citations:["Aink28","Aink40","Aink76","Aink83","Aink92"]},{id:"amma vāḻ",source:"amma",target:"vāḻ",strength:.8353633740013964,citations:["Aink111","Aink112","Aink113","Aink114","Aink115","Aink116","Aink117","Aink118","Aink119","Aink120","Aink132","Aink139","Aink221","Aink31","Aink32","Aink33","Aink331","Aink332","Aink333","Aink334","Aink335","Aink336","Aink337","Aink338","Aink339","Aink34","Aink340","Aink36","Aink37","Aink38","Aink39","Aink40","Aink77","Aink89"]},{id:"varai nāṭu",source:"varai",target:"nāṭu",strength:.8362488394303241,citations:["Aink301","Aink309"]},{id:"vēṇṭu aṉṉai",source:"vēṇṭu",target:"aṉṉai",strength:.8424609263547793,citations:["Aink101","Aink102","Aink103","Aink104","Aink105","Aink106","Aink107","Aink108","Aink109","Aink201","Aink202","Aink203","Aink204"],curvature:.25},{id:"aṉṉai vēṇṭu",source:"aṉṉai",target:"vēṇṭu",strength:.8424609263547793,citations:["Aink101","Aink102","Aink103","Aink104","Aink105","Aink106","Aink107","Aink108","Aink109","Aink201","Aink202","Aink203","Aink204"],curvature:.25},{id:"nutal arivai",source:"nutal",target:"arivai",strength:.8513676582838345,citations:["Aink322","Aink404","Aink46","Aink73"]},{id:"vuṇ civa",source:"vuṇ",target:"civa",strength:.8563981840063659,citations:["Aink125","Aink69"]},{id:"yiḷa mulai",source:"yiḷa",target:"mulai",strength:.8563981840063659,citations:["Aink127","Aink347"]},{id:"maṇa kamaḻ",source:"maṇa",target:"kamaḻ",strength:.8563981840063659,citations:["Aink19","Aink348"]},{id:"aṟam cāliyar",source:"aṟam",target:"cāliyar",strength:.8563981840063659,citations:["Aink312"]},{id:"tēr taḷar",source:"tēr",target:"taḷar",strength:.8563981840063659,citations:["Aink403","Aink66"]},{id:"num mūr",source:"num",target:"mūr",strength:.8563981840063659,citations:["Aink83","Aink92"]},{id:"kōṭṭam erumai",source:"kōṭṭam",target:"erumai",strength:.8646187485794655,citations:["Aink94","Aink95","Aink98"]},{id:"peyar uḻi",source:"peyar",target:"uḻi",strength:.8802298004195952,citations:["Aink204"]},{id:"nekiḻac cā",source:"nekiḻac",target:"cā",strength:.8802298004195952,citations:["Aink27","Aink28"]},{id:"piṟa pulam",source:"piṟa",target:"pulam",strength:.8802298004195952,citations:["Aink305","Aink325"]},{id:"alkul vari",source:"alkul",target:"vari",strength:.8802298004195952,citations:["Aink306","Aink316"]},{id:"yaḻi putup",source:"yaḻi",target:"putup",strength:.8802298004195952,citations:["Aink53","Aink78"]},{id:"ciṟai putup",source:"ciṟai",target:"putup",strength:.8802298004195952,citations:["Aink53","Aink78"]},{id:"poy urai",source:"poy",target:"urai",strength:.8802298004195952,citations:["Aink66","Aink80"]},{id:"māṇ kuṇam",source:"māṇ",target:"kuṇam",strength:.8802298004195952,citations:["Aink90"]},{id:"tēṉūr vivaḷ",source:"tēṉūr",target:"vivaḷ",strength:.8830497313238377,citations:["Aink54","Aink55","Aink57"]},{id:"yāy yām",source:"yāy",target:"yām",strength:.8869226321341572,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"kamaḻ poḻil",source:"kamaḻ",target:"poḻil",strength:.8940016847672865,citations:["Aink19","Aink348"]},{id:"muḻakkam aḻal",source:"muḻakkam",target:"aḻal",strength:.8940016847672865,citations:["Aink307","Aink320"]},{id:"vēṭṭōḷ yām",source:"vēṭṭōḷ",target:"yām",strength:.9026999327418401,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"el vaḷai",source:"el",target:"vaḷai",strength:.9043267394047649,citations:["Aink140","Aink20","Aink27"]},{id:"karai cēr",source:"karai",target:"cēr",strength:.9093973416227226,citations:["Aink12","Aink74"]},{id:"iv vūr",source:"iv",target:"vūr",strength:.9093973416227226,citations:["Aink132","Aink62"]},{id:"mell iyal",source:"mell",target:"iyal",strength:.9093973416227226,citations:["Aink304","Aink308"]},{id:"col uṇarntōr",source:"col",target:"uṇarntōr",strength:.9093973416227226,citations:["Aink38","Aink41"]},{id:"amma tōḻaṉ",source:"amma",target:"tōḻaṉ",strength:.9263769794339279,citations:["Aink111","Aink112","Aink113","Aink114","Aink115","Aink116","Aink117","Aink118","Aink119","Aink120","Aink221","Aink31","Aink32","Aink33","Aink331","Aink332","Aink333","Aink334","Aink335","Aink336","Aink337","Aink338","Aink339","Aink34","Aink340","Aink36","Aink37","Aink38","Aink39","Aink40"]},{id:"malir niṟai",source:"malir",target:"niṟai",strength:.9294920986596144,citations:["Aink15","Aink42","Aink72"]},{id:"pūk kañal",source:"pūk",target:"kañal",strength:.9417205712062173,citations:["Aink16","Aink3","Aink8","Aink99"]},{id:"ekkar ñāḻal",source:"ekkar",target:"ñāḻal",strength:.9458513756251627,citations:["Aink141","Aink142","Aink143","Aink144","Aink145"]},{id:"namm ūrp",source:"namm",target:"ūrp",strength:.9470008423836432,citations:["Aink104","Aink202"]},{id:"muḷḷi vēr",source:"muḷḷi",target:"vēr",strength:.9470008423836432,citations:["Aink22","Aink23"]},{id:"ṇakam maṇ",source:"ṇakam",target:"maṇ",strength:.9470008423836432,citations:["Aink27","Aink30"]},{id:"titti yalkul",source:"titti",target:"yalkul",strength:.9470008423836432,citations:["Aink29","Aink72"]},{id:"cāliyar vaṟṟu",source:"cāliyar",target:"vaṟṟu",strength:.9470008423836432,citations:["Aink312"]},{id:"kaḻaṉit tāmarai",source:"kaḻaṉit",target:"tāmarai",strength:.9470008423836432,citations:["Aink53","Aink94"]},{id:"veṉa yāy",source:"veṉa",target:"yāy",strength:.9673511315372878,citations:["Aink1","Aink10","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"veṉa vēṭṭōḷ",source:"veṉa",target:"vēṭṭōḷ",strength:.982857977299806,citations:["Aink1","Aink10","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"vēṭṭōḷ yāy",source:"vēṭṭōḷ",target:"yāy",strength:.9842226993923171,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"yātaṉ yaviṉi",source:"yātaṉ",target:"yaviṉi",strength:1,citations:["Aink1","Aink10","Aink2","Aink3","Aink4","Aink5","Aink6","Aink7","Aink8","Aink9"]},{id:"ciṟai yaḻi",source:"ciṟai",target:"yaḻi",strength:1,citations:["Aink53","Aink78"]}],Ma={nodes:Ob,links:Ib},Nb=n=>{const t=1+200/Math.hypot(n.x,n.y,n.z),i=n.x||n.y||n.z?{x:n.x*t,y:n.y*t,z:n.z*t}:{x:0,y:0,z:200};Sa.cameraPosition(i,n,1e3)},Sa=yb(),Ub=()=>{const n=new Map([["adjective","#66c2a5"],["noun","#fc8d62"],["pronoun","#8da0cb"],["verb","#e78ac3"],["other","#a6d854"]]),e=document.getElementById("panellegend");e.innerHTML=[...n].map(i=>`<div><input type="checkbox" name="${i[0]}" checked autocomplete="off"/><label><span style="color:${i[1]}; font-size: 150%">●</span> ${i[0]}</div>`).join("")+'<div id="solonodes"><input type="checkbox" name="solonodes" checked autocomplete="off"/><label>Show unconnected nodes</label></div>';const t=structuredClone(Ma.links).filter(i=>i.strength>=.45);Sa(document.getElementById("colgraph")).graphData({nodes:Ma.nodes,links:t}).nodeLabel(i=>`${i.size} occurences`).nodeThreeObject(i=>{const r=new Db(i.id);return r.material.depthWrite=!1,r.color=n.get(i.type)||n.get("other"),r.textHeight=i.size/2<8?8:i.size/2,r}).linkWidth(i=>i.strength*5).linkOpacity(.3).linkDirectionalArrowLength(5).linkCurvature(i=>i.curvature||0).linkLabel(i=>`${i.citations.join(", ")} (NPMI: ${i.strength.toPrecision(4)})`).onNodeClick(Nb),Sa.d3Force("link").distance(i=>40/i.strength)},Fb=n=>{const e=document.getElementById("panel");e.style.display!=="flex"?(e.animate([{marginTop:"-25px"},{marginTop:"0px"}],{duration:200,iterations:1}),e.style.display="flex",n.target.textContent="⇧"):(e.animate([{marginTop:"0px"},{marginTop:"-25px"}],{duration:200,iterations:1}),setTimeout(()=>e.style.display="none",200),n.target.textContent="⇩")},Bb=n=>{const e=new Set;for(const t of n)e.add(t.source),e.add(t.target);return e},Hb=()=>{const n={};n.nodes=Ma.nodes,n.links=structuredClone(Ma.links);const e=document.getElementById("npmi").value;n.links=n.links.filter(r=>r.strength>=e);const t=document.getElementById("panellegend").querySelectorAll('input:not([name="solonodes"])'),i=new Set([...t].filter(r=>r.checked).map(r=>r.getAttribute("name")));if(i.size!==t.length){n.nodes=n.nodes.filter(a=>i.has(a.type));const r=new Set(n.nodes.map(a=>a.id));n.links=n.links.filter(a=>r.has(a.target)&&r.has(a.source))}if(!document.querySelector('input[name="solonodes"]').checked){const r=Bb(n.links);n.nodes=n.nodes.filter(a=>r.has(a.id))}Sa.graphData(n)};document.getElementById("paneltoggle").addEventListener("click",Fb);document.getElementById("graphupdate").addEventListener("click",Hb);Ub();
