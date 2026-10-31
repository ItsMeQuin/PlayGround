(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="169",ec=0,Va=1,ic=2,rh=1,oh=2,bi=3,Gi=0,ke=1,Pe=2,Oi=0,an=1,Le=2,Wa=3,Xa=4,nc=5,en=100,sc=101,rc=102,oc=103,ac=104,lc=200,hc=201,cc=202,uc=203,yo=204,Mo=205,dc=206,fc=207,pc=208,mc=209,gc=210,vc=211,xc=212,_c=213,yc=214,wo=0,So=1,bo=2,kn=3,Eo=4,To=5,Ao=6,Ro=7,ah=0,Mc=1,wc=2,Bi=0,Sc=1,bc=2,Ec=3,lh=4,Tc=5,Ac=6,Rc=7,hh=300,Gn=301,Hn=302,Co=303,Po=304,br=306,us=1e3,rn=1001,Lo=1002,Xe=1003,Cc=1004,Ss=1005,oi=1006,Dr=1007,on=1008,Ri=1009,ch=1010,uh=1011,ds=1012,pa=1013,ln=1014,ui=1015,_s=1016,ma=1017,ga=1018,Vn=1020,dh=35902,fh=1021,ph=1022,ai=1023,mh=1024,gh=1025,On=1026,Wn=1027,va=1028,xa=1029,vh=1030,_a=1031,ya=1033,ar=33776,lr=33777,hr=33778,cr=33779,Io=35840,Do=35841,Uo=35842,No=35843,Fo=36196,zo=37492,Oo=37496,Bo=37808,ko=37809,Go=37810,Ho=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,jo=37817,$o=37818,Ko=37819,Jo=37820,Zo=37821,ur=36492,Qo=36494,ta=36495,xh=36283,ea=36284,ia=36285,na=36286,Pc=3200,Lc=3201,_h=0,Ic=1,zi="",We="srgb",Hi="srgb-linear",Ma="display-p3",Er="display-p3-linear",mr="linear",ue="srgb",gr="rec709",vr="p3",mn=7680,qa=519,Dc=512,Uc=513,Nc=514,yh=515,Fc=516,zc=517,Oc=518,Bc=519,sa=35044,Ya="300 es",Ei=2e3,xr=2001;class qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dr=Math.PI/180,ra=180/Math.PI;function Ti(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[r&255]+De[r>>8&255]+De[r>>16&255]+De[r>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function kc(r,t){return(r%t+t)%t}function Ur(r,t,e){return(1-e)*r+e*t}function ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,n,s,o,a,l,h){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,h)}set(t,e,i,n,s,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=n[0],p=n[3],m=n[6],y=n[1],_=n[4],M=n[7],C=n[2],T=n[5],b=n[8];return s[0]=o*v+a*y+l*C,s[3]=o*p+a*_+l*T,s[6]=o*m+a*M+l*b,s[1]=h*v+c*y+d*C,s[4]=h*p+c*_+d*T,s[7]=h*m+c*M+d*b,s[2]=u*v+f*y+g*C,s[5]=u*p+f*_+g*T,s[8]=u*m+f*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*s*c+i*a*l+n*s*h-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*s,f=h*s-o*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*h-c*i)*v,t[2]=(a*i-n*o)*v,t[3]=u*v,t[4]=(c*e-n*l)*v,t[5]=(n*s-a*e)*v,t[6]=f*v,t[7]=(i*l-h*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-n*h,n*l,-n*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Wt;function Mh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gc(){const r=_r("canvas");return r.style.display="block",r}const ja={};function fr(r){r in ja||(ja[r]=!0,console.warn(r))}function Hc(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Vc(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wc(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $a=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ka=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$n={[Hi]:{transfer:mr,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[We]:{transfer:ue,primaries:gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Er]:{transfer:mr,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Ka),fromReference:r=>r.applyMatrix3($a)},[Ma]:{transfer:ue,primaries:vr,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ka),fromReference:r=>r.applyMatrix3($a).convertLinearToSRGB()}},Xc=new Set([Hi,Er]),ie={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Xc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const i=$n[t].toReference,n=$n[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return $n[r].primaries},getTransfer:function(r){return r===zi?mr:$n[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray($n[t].luminanceCoefficients)}};function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gn;class qc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gn===void 0&&(gn=_r("canvas")),gn.width=t.width,gn.height=t.height;const i=gn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bn(e[i]/255)*255):e[i]=Bn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yc=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(zr(n[o].image)):s.push(zr(n[o]))}else s=zr(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function zr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jc=0;class Ne extends qn{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=rn,n=rn,s=oi,o=on,a=ai,l=Ri,h=Ne.DEFAULT_ANISOTROPY,c=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ti(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=hh;Ne.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,n=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,M=(f+1)/2,C=(m+1)/2,T=(c+u)/4,b=(d+v)/4,L=(g+p)/4;return _>M&&_>C?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=T/i,s=b/i):M>C?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=T/n,s=L/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=b/s,n=L/s),this.set(i,n,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-c)/y,this.w=Math.acos((h+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends qn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ne(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends $c{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sh extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kc extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||h!==f||c!==g){let p=1-a;const m=l*u+h*f+c*g+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const C=Math.sqrt(_),T=Math.atan2(C,m*y);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const M=a*y;if(l=l*p+u*M,h=h*p+f*M,c=c*p+g*M,d=d*p+v*M,p===1-a){const C=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=C,h*=C,c*=C,d*=C}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){const a=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+c*d+l*f-h*u,t[e+1]=l*g+c*u+h*d-a*f,t[e+2]=h*g+c*f+a*u-l*d,t[e+3]=c*g-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-h)*f,this._z=(o-n)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+h)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+n*h-s*l,this._y=n*c+o*l+s*a-i*h,this._z=s*c+o*h+i*l-n*a,this._w=o*c-i*a-n*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,i=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ja.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ja.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*n-a*i),c=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*h+o*d-a*c,this.y=i+l*c+a*h-s*d,this.z=n+l*d+s*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new A,Ja=new ys;class un{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bs.copy(i.boundingBox)),bs.applyMatrix4(t.matrixWorld),this.union(bs)}const n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kn),Es.subVectors(this.max,Kn),vn.subVectors(t.a,Kn),xn.subVectors(t.b,Kn),_n.subVectors(t.c,Kn),Pi.subVectors(xn,vn),Li.subVectors(_n,xn),Xi.subVectors(vn,_n);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Xi.z,Xi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Xi.z,0,-Xi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Xi.y,Xi.x,0];return!Br(e,vn,xn,_n,Es)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,vn,xn,_n,Es))?!1:(Ts.crossVectors(Pi,Li),e=[Ts.x,Ts.y,Ts.z],Br(e,vn,xn,_n,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new A,new A,new A,new A,new A,new A,new A,new A],ni=new A,bs=new un,vn=new A,xn=new A,_n=new A,Pi=new A,Li=new A,Xi=new A,Kn=new A,Es=new A,Ts=new A,qi=new A;function Br(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){qi.fromArray(r,s);const a=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=t.dot(qi),h=e.dot(qi),c=i.dot(qi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Jc=new un,Jn=new A,kr=new A;class dn{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Jc.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jn.subVectors(t,this.center);const e=Jn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Jn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jn.copy(t.center).add(kr)),this.expandByPoint(Jn.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new A,Gr=new A,As=new A,Ii=new A,Hr=new A,Rs=new A,Vr=new A;class wa{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Gr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(Gr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=Ii.dot(this.direction),l=-Ii.dot(As),h=Ii.lengthSq(),c=Math.abs(1-o*o);let d,u,f,g;if(c>0)if(d=o*l-a,u=o*a-l,g=s*c,d>=0)if(u>=-g)if(u<=g){const v=1/c;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+h):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+h);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Gr).addScaledVector(As,u),f}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const i=_i.dot(this.direction),n=_i.dot(_i)-i*i,s=t.radius*t.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,n=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,n=(t.min.x-u.x)*h),c>=0?(s=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,i,n,s){Hr.subVectors(e,t),Rs.subVectors(i,t),Vr.crossVectors(Hr,Rs);let o=this.direction.dot(Vr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(Rs.crossVectors(Ii,Rs));if(l<0)return null;const h=a*this.direction.dot(Hr.cross(Ii));if(h<0||l+h>o)return null;const c=-a*Ii.dot(Vr);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,n,s,o,a,l,h,c,d,u,f,g,v,p){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,h,c,d,u,f,g,v,p)}set(t,e,i,n,s,o,a,l,h,c,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/yn.setFromMatrixColumn(t,0).length(),s=1/yn.setFromMatrixColumn(t,1).length(),o=1/yn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*c,f=o*d,g=a*c,v=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+g*h,e[5]=u-v*h,e[9]=-a*l,e[2]=v-u*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const u=l*c,f=l*d,g=h*c,v=h*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*c,f=l*d,g=h*c,v=h*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=v-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*c,f=o*d,g=a*c,v=a*d;e[0]=l*c,e[4]=g*h-f,e[8]=u*h+v,e[1]=l*d,e[5]=v*h+u,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*h,g=a*l,v=a*h;e[0]=l*c,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*h,g=a*l,v=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+v,e[5]=o*c,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*c,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zc,t,Qc)}lookAt(t,e,i){const n=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Di.crossVectors(i,je),Di.lengthSq()===0&&(Math.abs(i.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Di.crossVectors(i,je)),Di.normalize(),Cs.crossVectors(je,Di),n[0]=Di.x,n[4]=Cs.x,n[8]=je.x,n[1]=Di.y,n[5]=Cs.y,n[9]=je.y,n[2]=Di.z,n[6]=Cs.z,n[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],y=i[3],_=i[7],M=i[11],C=i[15],T=n[0],b=n[4],L=n[8],O=n[12],x=n[1],S=n[5],z=n[9],B=n[13],H=n[2],V=n[6],N=n[10],j=n[14],X=n[3],at=n[7],rt=n[11],pt=n[15];return s[0]=o*T+a*x+l*H+h*X,s[4]=o*b+a*S+l*V+h*at,s[8]=o*L+a*z+l*N+h*rt,s[12]=o*O+a*B+l*j+h*pt,s[1]=c*T+d*x+u*H+f*X,s[5]=c*b+d*S+u*V+f*at,s[9]=c*L+d*z+u*N+f*rt,s[13]=c*O+d*B+u*j+f*pt,s[2]=g*T+v*x+p*H+m*X,s[6]=g*b+v*S+p*V+m*at,s[10]=g*L+v*z+p*N+m*rt,s[14]=g*O+v*B+p*j+m*pt,s[3]=y*T+_*x+M*H+C*X,s[7]=y*b+_*S+M*V+C*at,s[11]=y*L+_*z+M*N+C*rt,s[15]=y*O+_*B+M*j+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+s*l*d-n*h*d-s*a*u+i*h*u+n*a*f-i*l*f)+v*(+e*l*f-e*h*u+s*o*u-n*o*f+n*h*c-s*l*c)+p*(+e*h*d-e*a*f-s*o*d+i*o*f+s*a*c-i*h*c)+m*(-n*a*c-e*l*d+e*a*u+n*o*d-i*o*u+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=d*p*h-v*u*h+v*l*f-a*p*f-d*l*m+a*u*m,_=g*u*h-c*p*h-g*l*f+o*p*f+c*l*m-o*u*m,M=c*v*h-g*d*h+g*a*f-o*v*f-c*a*m+o*d*m,C=g*d*l-c*v*l-g*a*u+o*v*u+c*a*p-o*d*p,T=e*y+i*_+n*M+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=y*b,t[1]=(v*u*s-d*p*s-v*n*f+i*p*f+d*n*m-i*u*m)*b,t[2]=(a*p*s-v*l*s+v*n*h-i*p*h-a*n*m+i*l*m)*b,t[3]=(d*l*s-a*u*s-d*n*h+i*u*h+a*n*f-i*l*f)*b,t[4]=_*b,t[5]=(c*p*s-g*u*s+g*n*f-e*p*f-c*n*m+e*u*m)*b,t[6]=(g*l*s-o*p*s-g*n*h+e*p*h+o*n*m-e*l*m)*b,t[7]=(o*u*s-c*l*s+c*n*h-e*u*h-o*n*f+e*l*f)*b,t[8]=M*b,t[9]=(g*d*s-c*v*s-g*i*f+e*v*f+c*i*m-e*d*m)*b,t[10]=(o*v*s-g*a*s+g*i*h-e*v*h-o*i*m+e*a*m)*b,t[11]=(c*a*s-o*d*s-c*i*h+e*d*h+o*i*f-e*a*f)*b,t[12]=C*b,t[13]=(c*v*n-g*d*n+g*i*u-e*v*u-c*i*p+e*d*p)*b,t[14]=(g*a*n-o*v*n-g*i*l+e*v*l+o*i*p-e*a*p)*b,t[15]=(o*d*n-c*a*n+c*i*l-e*d*l-o*i*u+e*a*u)*b,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,h=s*o,c=s*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,c*a+i,c*l-n*o,0,h*l-n*a,c*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,c=o+o,d=a+a,u=s*h,f=s*c,g=s*d,v=o*c,p=o*d,m=a*d,y=l*h,_=l*c,M=l*d,C=i.x,T=i.y,b=i.z;return n[0]=(1-(v+m))*C,n[1]=(f+M)*C,n[2]=(g-_)*C,n[3]=0,n[4]=(f-M)*T,n[5]=(1-(u+m))*T,n[6]=(p+y)*T,n[7]=0,n[8]=(g+_)*b,n[9]=(p-y)*b,n[10]=(1-(u+v))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=yn.set(n[0],n[1],n[2]).length();const o=yn.set(n[4],n[5],n[6]).length(),a=yn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],si.copy(this);const h=1/s,c=1/o,d=1/a;return si.elements[0]*=h,si.elements[1]*=h,si.elements[2]*=h,si.elements[4]*=c,si.elements[5]*=c,si.elements[6]*=c,si.elements[8]*=d,si.elements[9]*=d,si.elements[10]*=d,e.setFromRotationMatrix(si),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=Ei){const l=this.elements,h=2*s/(e-t),c=2*s/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n);let f,g;if(a===Ei)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Ei){const l=this.elements,h=1/(e-t),c=1/(i-n),d=1/(o-s),u=(e+t)*h,f=(i+n)*c;let g,v;if(a===Ei)g=(o+s)*d,v=-2*d;else if(a===xr)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const yn=new A,si=new re,Zc=new A(0,0,0),Qc=new A(1,1,1),Di=new A,Cs=new A,je=new A,Za=new re,Qa=new ys;class pi{constructor(t=0,e=0,i=0,n=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qa.setFromEuler(this),this.setFromQuaternion(Qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const tl=new A,Mn=new ys,yi=new re,Ps=new A,Zn=new A,eu=new A,iu=new ys,el=new A(1,0,0),il=new A(0,1,0),nl=new A(0,0,1),sl={type:"added"},nu={type:"removed"},wn={type:"childadded",child:null},Wr={type:"childremoved",child:null};class ne extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DEFAULT_UP.clone();const t=new A,e=new pi,i=new ys,n=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new Wt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.multiply(Mn),this}rotateOnWorldAxis(t,e){return Mn.setFromAxisAngle(t,e),this.quaternion.premultiply(Mn),this}rotateX(t){return this.rotateOnAxis(el,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(nl,t)}translateOnAxis(t,e){return tl.copy(t).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(el,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Zn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Zn,Ps,this.up):yi.lookAt(Ps,Zn,this.up),this.quaternion.setFromRotationMatrix(yi),n&&(yi.extractRotation(n.matrixWorld),Mn.setFromRotationMatrix(yi),this.quaternion.premultiply(Mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sl),wn.child=t,this.dispatchEvent(wn),wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nu),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sl),wn.child=t,this.dispatchEvent(wn),wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zn,iu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const d=l[h];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ne.DEFAULT_UP=new A(0,1,0);ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new A,Mi=new A,Xr=new A,wi=new A,Sn=new A,bn=new A,rl=new A,qr=new A,Yr=new A,jr=new A,$r=new ge,Kr=new ge,Jr=new ge;class Je{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ri.subVectors(t,e),n.cross(ri);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){ri.subVectors(n,e),Mi.subVectors(i,e),Xr.subVectors(t,e);const o=ri.dot(ri),a=ri.dot(Mi),l=ri.dot(Xr),h=Mi.dot(Mi),c=Mi.dot(Xr),d=o*h-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(h*l-a*c)*u,g=(o*c-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return $r.setScalar(0),Kr.setScalar(0),Jr.setScalar(0),$r.fromBufferAttribute(t,e),Kr.fromBufferAttribute(t,i),Jr.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector($r,s.x),o.addScaledVector(Kr,s.y),o.addScaledVector(Jr,s.z),o}static isFrontFacing(t,e,i,n){return ri.subVectors(i,e),Mi.subVectors(t,e),ri.cross(Mi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),ri.cross(Mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let o,a;Sn.subVectors(n,i),bn.subVectors(s,i),qr.subVectors(t,i);const l=Sn.dot(qr),h=bn.dot(qr);if(l<=0&&h<=0)return e.copy(i);Yr.subVectors(t,n);const c=Sn.dot(Yr),d=bn.dot(Yr);if(c>=0&&d<=c)return e.copy(n);const u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Sn,o);jr.subVectors(t,s);const f=Sn.dot(jr),g=bn.dot(jr);if(g>=0&&f<=g)return e.copy(s);const v=f*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(i).addScaledVector(bn,a);const p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return rl.subVectors(s,n),a=(d-c)/(d-c+(f-g)),e.copy(n).addScaledVector(rl,a);const m=1/(p+v+u);return o=v*m,a=u*m,e.copy(i).addScaledVector(Sn,o).addScaledVector(bn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Zr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class St{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=ie.workingColorSpace){if(t=kc(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Zr(o,s,t+1/3),this.g=Zr(o,s,t),this.b=Zr(o,s,t-1/3)}return ie.toWorkingColorSpace(this,n),this}setStyle(t,e=We){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const i=Eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ie.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Ce(Ue.r*255,0,255))*65536+Math.round(Ce(Ue.g*255,0,255))*256+Math.round(Ce(Ue.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ue.copy(this),e);const i=Ue.r,n=Ue.g,s=Ue.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=We){ie.fromWorkingColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,n=Ue.b;return t!==We?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Ls);const i=Ur(Ui.h,Ls.h,e),n=Ur(Ui.s,Ls.s,e),s=Ur(Ui.l,Ls.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new St;St.NAMES=Eh;let su=0;class Vi extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=an,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=Mo,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=kn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mn,this.stencilZFail=mn,this.stencilZPass=mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==an&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==Mo&&(i.blendDst=this.blendDst),this.blendEquation!==en&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ie extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new A,Is=new st;class Te{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sa,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sa&&(t.usage=this.usage),t}}class Th extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ah extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ru=0;const Qe=new re,Qr=new ne,En=new A,$e=new un,Qn=new un,be=new A;class pe extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Ah:Th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,i){return Qe.makeTranslation(t,e,i),this.applyMatrix4(Qe),this}scale(t,e,i){return Qe.makeScale(t,e,i),this.applyMatrix4(Qe),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(En).negate(),this.translate(En.x,En.y,En.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Qn.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors($e.min,Qn.min),$e.expandByPoint(be),be.addVectors($e.max,Qn.max),$e.expandByPoint(be)):($e.expandByPoint(Qn.min),$e.expandByPoint(Qn.max))}$e.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)be.fromBufferAttribute(a,h),l&&(En.fromBufferAttribute(t,h),be.add(En)),n=Math.max(n,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new A,l[L]=new A;const h=new A,c=new A,d=new A,u=new st,f=new st,g=new st,v=new A,p=new A;function m(L,O,x){h.fromBufferAttribute(i,L),c.fromBufferAttribute(i,O),d.fromBufferAttribute(i,x),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,O),g.fromBufferAttribute(s,x),c.sub(h),d.sub(h),f.sub(u),g.sub(u);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(S),a[L].add(v),a[O].add(v),a[x].add(v),l[L].add(p),l[O].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,O=y.length;L<O;++L){const x=y[L],S=x.start,z=x.count;for(let B=S,H=S+z;B<H;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const _=new A,M=new A,C=new A,T=new A;function b(L){C.fromBufferAttribute(n,L),T.copy(C);const O=a[L];_.copy(O),_.sub(C.multiplyScalar(C.dot(O))).normalize(),M.crossVectors(T,O);const S=M.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,S)}for(let L=0,O=y.length;L<O;++L){const x=y[L],S=x.start,z=x.count;for(let B=S,H=S+z;B<H;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new A,s=new A,o=new A,a=new A,l=new A,h=new A,c=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),c.subVectors(o,s),d.subVectors(n,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,p),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,s),d.subVectors(n,s),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let m=0;m<c;m++)u[g++]=h[f++]}return new Te(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],h=t(l,i);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let c=0,d=h.length;c<d;c++){const u=h[c],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){const f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const h in n){const c=n[h];this.setAttribute(h,c.clone(e))}const s=t.morphAttributes;for(const h in s){const c=[],d=s[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new re,Yi=new wa,Ds=new dn,al=new A,Us=new A,Ns=new A,Fs=new A,to=new A,zs=new A,ll=new A,Os=new A;class I extends ne{constructor(t=new pe,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(s&&a){zs.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const c=a[l],d=s[l];c!==0&&(to.fromBufferAttribute(d,t),o?zs.addScaledVector(to,c):zs.addScaledVector(to.sub(e),c))}e.add(zs)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Yi.copy(t.ray).recast(t.near),!(Ds.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Ds,al)===null||Yi.origin.distanceToSquared(al)>(t.far-t.near)**2))&&(ol.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(ol),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=_;M<C;M+=3){const T=a.getX(M),b=a.getX(M+1),L=a.getX(M+2);n=Bs(this,m,t,i,h,c,d,T,b,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),M=a.getX(p+2);n=Bs(this,o,t,i,h,c,d,y,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=_;M<C;M+=3){const T=M,b=M+1,L=M+2;n=Bs(this,m,t,i,h,c,d,T,b,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,_=p+1,M=p+2;n=Bs(this,o,t,i,h,c,d,y,_,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function ou(r,t,e,i,n,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Gi,a),l===null)return null;Os.copy(a),Os.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Os);return h<e.near||h>e.far?null:{distance:h,point:Os.clone(),object:r}}function Bs(r,t,e,i,n,s,o,a,l,h){r.getVertexPosition(a,Us),r.getVertexPosition(l,Ns),r.getVertexPosition(h,Fs);const c=ou(r,t,e,i,Us,Ns,Fs,ll);if(c){const d=new A;Je.getBarycoord(ll,Us,Ns,Fs,d),n&&(c.uv=Je.getInterpolatedAttribute(n,a,l,h,d,new st)),s&&(c.uv1=Je.getInterpolatedAttribute(s,a,l,h,d,new st)),o&&(c.normal=Je.getInterpolatedAttribute(o,a,l,h,d,new A),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:l,c:h,normal:new A,materialIndex:0};Je.getNormal(Us,Ns,Fs,u.normal),c.face=u,c.barycoord=d}return c}class et extends pe{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(d,2));function g(v,p,m,y,_,M,C,T,b,L,O){const x=M/b,S=C/L,z=M/2,B=C/2,H=T/2,V=b+1,N=L+1;let j=0,X=0;const at=new A;for(let rt=0;rt<N;rt++){const pt=rt*S-B;for(let Bt=0;Bt<V;Bt++){const qt=Bt*x-z;at[v]=qt*y,at[p]=pt*_,at[m]=H,h.push(at.x,at.y,at.z),at[v]=0,at[p]=0,at[m]=T>0?1:-1,c.push(at.x,at.y,at.z),d.push(Bt/b),d.push(1-rt/L),j+=1}}for(let rt=0;rt<L;rt++)for(let pt=0;pt<b;pt++){const Bt=u+pt+V*rt,qt=u+pt+V*(rt+1),Y=u+(pt+1)+V*(rt+1),tt=u+(pt+1)+V*rt;l.push(Bt,qt,tt),l.push(qt,Y,tt),X+=6}a.addGroup(f,X,O),f+=X,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xn(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Oe(r){const t={};for(let e=0;e<r.length;e++){const i=Xn(r[e]);for(const n in i)t[n]=i[n]}return t}function au(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Rh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const lu={clone:Xn,merge:Oe};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xn(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ch extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new A,hl=new st,cl=new st;class ei extends Ch{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,hl,cl),e.subVectors(cl,hl)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Tn=-90,An=1;class uu extends ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ei(Tn,An,t,e);n.layers=this.layers,this.add(n);const s=new ei(Tn,An,t,e);s.layers=this.layers,this.add(s);const o=new ei(Tn,An,t,e);o.layers=this.layers,this.add(o);const a=new ei(Tn,An,t,e);a.layers=this.layers,this.add(a);const l=new ei(Tn,An,t,e);l.layers=this.layers,this.add(l);const h=new ei(Tn,An,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(const h of e)this.remove(h);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends Ne{constructor(t,e,i,n,s,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Gn,super(t,e,i,n,s,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class du extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Ph(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new et(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Xn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Oi});s.uniforms.tEquirect.value=e;const o=new I(n,s),a=e.minFilter;return e.minFilter===on&&(e.minFilter=oi),new uu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}}const eo=new A,fu=new A,pu=new Wt;class Qi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=eo.subVectors(i,e).cross(fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(eo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||pu.getNormalMatrix(t),n=this.coplanarPoint(eo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new dn,ks=new A;class Sa{constructor(t=new Qi,e=new Qi,i=new Qi,n=new Qi,s=new Qi,o=new Qi){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei){const i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],f=n[8],g=n[9],v=n[10],p=n[11],m=n[12],y=n[13],_=n[14],M=n[15];if(i[0].setComponents(l-s,u-h,p-f,M-m).normalize(),i[1].setComponents(l+s,u+h,p+f,M+m).normalize(),i[2].setComponents(l+o,u+c,p+g,M+y).normalize(),i[3].setComponents(l-o,u-c,p-g,M-y).normalize(),i[4].setComponents(l-a,u-d,p-v,M-_).normalize(),e===Ei)i[5].setComponents(l+a,u+d,p+v,M+_).normalize();else if(e===xr)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(ks.x=n.normal.x>0?t.max.x:t.min.x,ks.y=n.normal.y>0?t.max.y:t.min.y,ks.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lh(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function mu(r){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,d=h.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){const c=l.array,d=l.updateRanges;if(r.bindBuffer(h,a),d.length===0)r.bufferSubData(h,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];r.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:n,remove:s,update:o}}class mi extends pe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),h=a+1,c=l+1,d=t/a,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<c;m++){const y=m*u-o;for(let _=0;_<h;_++){const M=_*d-s;g.push(M,-y,0),v.push(0,0,1),p.push(_/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+h*m,M=y+h*(m+1),C=y+1+h*(m+1),T=y+1+h*m;f.push(_,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_u=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
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
#endif`,Su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Eu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bu=`#define PI 3.141592653589793
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
} // validated`,ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
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
}`,ju=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,md=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rf=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vf=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Sf=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bf=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Ef=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Lf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,If=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Df=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Uf=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Nf=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ff=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,zf=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Of=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,Bf=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kf=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Gf=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hf=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Vf=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Wf=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Xf=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Yf=`uniform vec3 color;
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
}`,jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,$f=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Vt={alphahash_fragment:gu,alphahash_pars_fragment:vu,alphamap_fragment:xu,alphamap_pars_fragment:_u,alphatest_fragment:yu,alphatest_pars_fragment:Mu,aomap_fragment:wu,aomap_pars_fragment:Su,batching_pars_vertex:bu,batching_vertex:Eu,begin_vertex:Tu,beginnormal_vertex:Au,bsdfs:Ru,iridescence_fragment:Cu,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Lu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Uu,color_fragment:Nu,color_pars_fragment:Fu,color_pars_vertex:zu,color_vertex:Ou,common:Bu,cube_uv_reflection_fragment:ku,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Vu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:ju,envmap_common_pars_fragment:$u,envmap_pars_fragment:Ku,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:ld,envmap_vertex:Zu,fog_vertex:Qu,fog_pars_vertex:td,fog_fragment:ed,fog_pars_fragment:id,gradientmap_pars_fragment:nd,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:od,lights_pars_begin:ad,lights_toon_fragment:hd,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:yd,logdepthbuf_vertex:Md,map_fragment:wd,map_pars_fragment:Sd,map_particle_fragment:bd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Ld,morphtarget_vertex:Id,normal_fragment_begin:Dd,normal_fragment_maps:Ud,normal_pars_fragment:Nd,normal_pars_vertex:Fd,normal_vertex:zd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:jd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Jd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Qd,shadowmask_pars_fragment:tf,skinbase_vertex:ef,skinning_pars_vertex:nf,skinning_vertex:sf,skinnormal_vertex:rf,specularmap_fragment:of,specularmap_pars_fragment:af,tonemapping_fragment:lf,tonemapping_pars_fragment:hf,transmission_fragment:cf,transmission_pars_fragment:uf,uv_pars_fragment:df,uv_pars_vertex:ff,uv_vertex:pf,worldpos_vertex:mf,background_vert:gf,background_frag:vf,backgroundCube_vert:xf,backgroundCube_frag:_f,cube_vert:yf,cube_frag:Mf,depth_vert:wf,depth_frag:Sf,distanceRGBA_vert:bf,distanceRGBA_frag:Ef,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:Pf,meshbasic_frag:Lf,meshlambert_vert:If,meshlambert_frag:Df,meshmatcap_vert:Uf,meshmatcap_frag:Nf,meshnormal_vert:Ff,meshnormal_frag:zf,meshphong_vert:Of,meshphong_frag:Bf,meshphysical_vert:kf,meshphysical_frag:Gf,meshtoon_vert:Hf,meshtoon_frag:Vf,points_vert:Wf,points_frag:Xf,shadow_vert:qf,shadow_frag:Yf,sprite_vert:jf,sprite_frag:$f},ft={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},hi={basic:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new St(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new St(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ft.common,ft.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ft.lights,ft.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};hi.physical={uniforms:Oe([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Gs={r:0,b:0,g:0},$i=new pi,Kf=new re;function Jf(r,t,e,i,n,s,o){const a=new St(0);let l=s===!0?0:1,h,c,d=null,u=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function v(y){let _=!1;const M=g(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),_=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===br)?(c===void 0&&(c=new I(new et(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Xn(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),$i.copy(_.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Kf.makeRotationFromEuler($i)),c.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,(d!==M||u!==M.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new I(new mi(2,2),new li({name:"BackgroundMaterial",uniforms:Xn(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=ie.getTransfer(M.colorSpace)!==ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,_){y.getRGB(Gs,Rh(r)),i.buffers.color.setClear(Gs.r,Gs.g,Gs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:v,addToRenderList:p}}function Zf(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let s=n,o=!1;function a(x,S,z,B,H){let V=!1;const N=d(B,z,S);s!==N&&(s=N,h(s.object)),V=f(x,B,z,H),V&&g(x,B,z,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(x,S,z,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function h(x){return r.bindVertexArray(x)}function c(x){return r.deleteVertexArray(x)}function d(x,S,z){const B=z.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let V=H[S.id];V===void 0&&(V={},H[S.id]=V);let N=V[B];return N===void 0&&(N=u(l()),V[B]=N),N}function u(x){const S=[],z=[],B=[];for(let H=0;H<e;H++)S[H]=0,z[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function f(x,S,z,B){const H=s.attributes,V=S.attributes;let N=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){const rt=H[X];let pt=V[X];if(pt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;N++}return s.attributesNum!==N||s.index!==B}function g(x,S,z,B){const H={},V=S.attributes;let N=0;const j=z.getAttributes();for(const X in j)if(j[X].location>=0){let rt=V[X];rt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),H[X]=pt,N++}s.attributes=H,s.attributesNum=N,s.index=B}function v(){const x=s.newAttributes;for(let S=0,z=x.length;S<z;S++)x[S]=0}function p(x){m(x,0)}function m(x,S){const z=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;z[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),H[x]!==S&&(r.vertexAttribDivisor(x,S),H[x]=S)}function y(){const x=s.newAttributes,S=s.enabledAttributes;for(let z=0,B=S.length;z<B;z++)S[z]!==x[z]&&(r.disableVertexAttribArray(z),S[z]=0)}function _(x,S,z,B,H,V,N){N===!0?r.vertexAttribIPointer(x,S,z,H,V):r.vertexAttribPointer(x,S,z,B,H,V)}function M(x,S,z,B){v();const H=B.attributes,V=z.getAttributes(),N=S.defaultAttributeValues;for(const j in V){const X=V[j];if(X.location>=0){let at=H[j];if(at===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const rt=at.normalized,pt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const qt=Bt.buffer,Y=Bt.type,tt=Bt.bytesPerElement,vt=Y===r.INT||Y===r.UNSIGNED_INT||at.gpuType===pa;if(at.isInterleavedBufferAttribute){const ht=at.data,Ut=ht.stride,Dt=at.offset;if(ht.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let Gt=0;Gt<X.locationSize;Gt++)_(X.location+Gt,pt/X.locationSize,Y,rt,Ut*tt,(Dt+pt/X.locationSize*Gt)*tt,vt)}else{if(at.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht,at.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ht=0;ht<X.locationSize;ht++)p(X.location+ht);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let ht=0;ht<X.locationSize;ht++)_(X.location+ht,pt/X.locationSize,Y,rt,pt*tt,pt/X.locationSize*ht*tt,vt)}}else if(N!==void 0){const rt=N[j];if(rt!==void 0)switch(rt.length){case 2:r.vertexAttrib2fv(X.location,rt);break;case 3:r.vertexAttrib3fv(X.location,rt);break;case 4:r.vertexAttrib4fv(X.location,rt);break;default:r.vertexAttrib1fv(X.location,rt)}}}}y()}function C(){L();for(const x in i){const S=i[x];for(const z in S){const B=S[z];for(const H in B)c(B[H].object),delete B[H];delete S[z]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const S=i[x.id];for(const z in S){const B=S[z];for(const H in B)c(B[H].object),delete B[H];delete S[z]}delete i[x.id]}function b(x){for(const S in i){const z=i[S];if(z[x.id]===void 0)continue;const B=z[x.id];for(const H in B)c(B[H].object),delete B[H];delete z[x.id]}}function L(){O(),o=!0,s!==n&&(s=n,h(s.object))}function O(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Qf(r,t,e){let i;function n(h){i=h}function s(h,c){r.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,d){d!==0&&(r.drawArraysInstanced(i,h,c,d),e.update(c,i,d))}function a(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];e.update(f,i,1)}function l(h,c,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=c[v];for(let v=0;v<u.length;v++)e.update(g,i,u[v])}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tp(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(b){return!(b!==ai&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const L=b===_s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ri&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ui&&!L)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const b=t.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function ep(r){const t=this;let e=null,i=0,n=!1,s=!1;const o=new Qi,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!n||g===null||g.length===0||s&&!p)s?c(null):h();else{const y=s?0:i,_=y*4;let M=m.clippingState||null;l.value=M,M=c(g,u,_,f);for(let C=0;C!==_;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,M=f;_!==v;++_,M+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function ip(r){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=Gn:a===Po&&(o.mapping=Hn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Po)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new du(l.height);return h.fromEquirectangularTexture(r,o),t.set(o,h),o.addEventListener("dispose",n),e(h.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Ih extends Ch{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fn=4,ul=[.125,.215,.35,.446,.526,.582],nn=20,io=new Ih,dl=new St;let no=null,so=0,ro=0,oo=!1;const tn=(1+Math.sqrt(5))/2,Rn=1/tn,fl=[new A(-tn,Rn,0),new A(tn,Rn,0),new A(-Rn,0,tn),new A(Rn,0,tn),new A(0,tn,-Rn),new A(0,tn,Rn),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){no=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(no,so,ro),this._renderer.xr.enabled=oo,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gn||t.mapping===Hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),no=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),ro=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:_s,format:ai,colorSpace:Hi,depthBuffer:!1},n=ml(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(s)),this._blurMaterial=sp(s,t,e)}return n}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,i,n){const a=new ei(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(dl),c.toneMapping=Bi,c.autoClear=!1;const f=new Ie({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new I(new et,f);let v=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,v=!0):(f.color.copy(dl),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));const _=this._cubeSize;Hs(n,y*_,m>2?_:0,_,_),c.setRenderTarget(n),v&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Gn||t.mapping===Hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,io)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fl[(n-s-1)%fl.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new I(this._lodPlanes[n],h),u=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*nn-1),v=s/g,p=isFinite(s)?1+Math.floor(c*v):nn;p>nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nn}`);const m=[];let y=0;for(let b=0;b<nn;++b){const L=b/v,O=Math.exp(-L*L/2);m.push(O),b===0?y+=O:b<p&&(y+=2*O)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const M=this._sizeLods[n],C=3*M*(n>_-Fn?n-_+Fn:0),T=4*(this._cubeSize-M);Hs(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(d,io)}}function np(r){const t=[],e=[],i=[];let n=r;const s=r-Fn+1+ul.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>r-Fn?l=ul[o-r+Fn-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),_=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){const b=T%3*2/3-1,L=T>2?0:-1,O=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];y.set(O,v*g*T),_.set(u,p*g*T);const x=[T,T,T,T,T,T];M.set(x,m*g*T)}const C=new pe;C.setAttribute("position",new Te(y,v)),C.setAttribute("uv",new Te(_,p)),C.setAttribute("faceIndex",new Te(M,m)),t.push(C),n>Fn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ml(r,t,e){const i=new hn(r,t,e);return i.texture.mapping=br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function sp(r,t,e){const i=new Float32Array(nn),n=new A(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function gl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function vl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ba(){return`

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
	`}function rp(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Co||l===Po,c=l===Gn||l===Hn;if(h||c){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new pl(r)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&n(f)?(e===null&&(e=new pl(r)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function n(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function op(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ap(r,t,e,i){const n={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",o),delete n[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],r.ARRAY_BUFFER)}}function h(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,M=y.length;_<M;_+=3){const C=y[_+0],T=y[_+1],b=y[_+2];u.push(C,T,T,b,b,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const C=_+0,T=_+1,b=_+2;u.push(C,T,T,b,b,C)}}else return;const p=new(Mh(u)?Ah:Th)(u,1);p.version=v;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function c(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function lp(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(i,f,s,u*o),e.update(f,i,1)}function h(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,s,u*o,g),e.update(f,i,g))}function c(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)h(u[m]/o,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<v.length;y++)e.update(m,i,v[y])}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function hp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function cp(r,t,e){const i=new WeakMap,n=new ge;function s(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let C=a.attributes.position.count*M,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*T*4*d),L=new Sh(b,C,T,d);L.type=ui,L.needsUpdate=!0;const O=M*4;for(let S=0;S<d;S++){const z=m[S],B=y[S],H=_[S],V=C*T*4*S;for(let N=0;N<z.count;N++){const j=N*O;g===!0&&(n.fromBufferAttribute(z,N),b[V+j+0]=n.x,b[V+j+1]=n.y,b[V+j+2]=n.z,b[V+j+3]=0),v===!0&&(n.fromBufferAttribute(B,N),b[V+j+4]=n.x,b[V+j+5]=n.y,b[V+j+6]=n.z,b[V+j+7]=0),p===!0&&(n.fromBufferAttribute(H,N),b[V+j+8]=n.x,b[V+j+9]=n.y,b[V+j+10]=n.z,b[V+j+11]=H.itemSize===4?n.w:1)}}u={count:d,texture:L,size:new st(C,T)},i.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",h)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function up(r,t,e,i){let n=new WeakMap;function s(l){const h=i.render.frame,c=l.geometry,d=t.get(l,c);if(n.get(d)!==h&&(t.update(d),n.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function o(){n=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}class Dh extends Ne{constructor(t,e,i,n,s,o,a,l,h,c=On){if(c!==On&&c!==Wn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===On&&(i=ln),i===void 0&&c===Wn&&(i=Vn),super(null,n,s,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uh=new Ne,xl=new Dh(1,1),Nh=new Sh,Fh=new Kc,zh=new Ph,_l=[],yl=[],Ml=new Float32Array(16),wl=new Float32Array(9),Sl=new Float32Array(4);function Yn(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=_l[n];if(s===void 0&&(s=new Float32Array(n),_l[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Se(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Tr(r,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function dp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function fp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Se(e,t)}}function pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Se(e,t)}}function mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Se(e,t)}}function gp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(we(e,i))return;Sl.set(i),r.uniformMatrix2fv(this.addr,!1,Sl),Se(e,i)}}function vp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(we(e,i))return;wl.set(i),r.uniformMatrix3fv(this.addr,!1,wl),Se(e,i)}}function xp(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(we(e,i))return;Ml.set(i),r.uniformMatrix4fv(this.addr,!1,Ml),Se(e,i)}}function _p(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Se(e,t)}}function Mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Se(e,t)}}function wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Se(e,t)}}function Sp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Se(e,t)}}function Ep(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Se(e,t)}}function Tp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Se(e,t)}}function Ap(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(xl.compareFunction=yh,s=xl):s=Uh,e.setTexture2D(t||s,n)}function Rp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Fh,n)}function Cp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||zh,n)}function Pp(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Nh,n)}function Lp(r){switch(r){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return xp;case 5124:case 35670:return _p;case 35667:case 35671:return yp;case 35668:case 35672:return Mp;case 35669:case 35673:return wp;case 5125:return Sp;case 36294:return bp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Rp;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Pp}}function Ip(r,t){r.uniform1fv(this.addr,t)}function Dp(r,t){const e=Yn(t,this.size,2);r.uniform2fv(this.addr,e)}function Up(r,t){const e=Yn(t,this.size,3);r.uniform3fv(this.addr,e)}function Np(r,t){const e=Yn(t,this.size,4);r.uniform4fv(this.addr,e)}function Fp(r,t){const e=Yn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zp(r,t){const e=Yn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Op(r,t){const e=Yn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Bp(r,t){r.uniform1iv(this.addr,t)}function kp(r,t){r.uniform2iv(this.addr,t)}function Gp(r,t){r.uniform3iv(this.addr,t)}function Hp(r,t){r.uniform4iv(this.addr,t)}function Vp(r,t){r.uniform1uiv(this.addr,t)}function Wp(r,t){r.uniform2uiv(this.addr,t)}function Xp(r,t){r.uniform3uiv(this.addr,t)}function qp(r,t){r.uniform4uiv(this.addr,t)}function Yp(r,t,e){const i=this.cache,n=t.length,s=Tr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Uh,s[o])}function jp(r,t,e){const i=this.cache,n=t.length,s=Tr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Fh,s[o])}function $p(r,t,e){const i=this.cache,n=t.length,s=Tr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||zh,s[o])}function Kp(r,t,e){const i=this.cache,n=t.length,s=Tr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Se(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Nh,s[o])}function Jp(r){switch(r){case 5126:return Ip;case 35664:return Dp;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return zp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}class Zp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lp(e.type)}}class Qp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jp(e.type)}}class tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(t,e[a.id],i)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function bl(r,t){r.seq.push(t),r.map[t.id]=t}function em(r,t,e){const i=r.name,n=i.length;for(ao.lastIndex=0;;){const s=ao.exec(i),o=ao.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){bl(e,h===void 0?new Zp(a,r,t):new Qp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new tm(a),bl(e,d)),e=d}}}class pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);em(s,o,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function El(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const im=37297;let nm=0;function sm(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function rm(r){const t=ie.getPrimaries(ie.workingColorSpace),e=ie.getPrimaries(r);let i;switch(t===e?i="":t===vr&&e===gr?i="LinearDisplayP3ToLinearSRGB":t===gr&&e===vr&&(i="LinearSRGBToLinearDisplayP3"),r){case Hi:case Er:return[i,"LinearTransferOETF"];case We:case Ma:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Tl(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+sm(r.getShaderSource(t),o)}else return n}function om(r,t){const e=rm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function am(r,t){let e;switch(t){case Sc:e="Linear";break;case bc:e="Reinhard";break;case Ec:e="Cineon";break;case lh:e="ACESFilmic";break;case Ac:e="AgX";break;case Rc:e="Neutral";break;case Tc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new A;function lm(){ie.getLuminanceCoefficients(Vs);const r=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function cm(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function um(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function as(r){return r!==""}function Al(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(r){return r.replace(dm,pm)}const fm=new Map;function pm(r,t){let e=Vt[t];if(e===void 0){const i=fm.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(r){return r.replace(mm,gm)}function gm(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Pl(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function xm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gn:case Hn:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _m(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hn:t="ENVMAP_MODE_REFRACTION";break}return t}function ym(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ah:t="ENVMAP_BLENDING_MULTIPLY";break;case Mc:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Mm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function wm(r,t,e,i){const n=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vm(e),h=xm(e),c=_m(e),d=ym(e),u=Mm(e),f=hm(e),g=cm(s),v=n.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`)):(p=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),m=[Pl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,om("linearToOutputTexel",e.outputColorSpace),lm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),o=oa(o),o=Al(o,e),o=Rl(o,e),a=oa(a),a=Al(a,e),a=Rl(a,e),o=Cl(o),a=Cl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+p+o,M=y+m+a,C=El(n,n.VERTEX_SHADER,_),T=El(n,n.FRAGMENT_SHADER,M);n.attachShader(v,C),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function b(S){if(r.debug.checkShaderErrors){const z=n.getProgramInfoLog(v).trim(),B=n.getShaderInfoLog(C).trim(),H=n.getShaderInfoLog(T).trim();let V=!0,N=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,v,C,T);else{const j=Tl(n,C,"vertex"),X=Tl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+j+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||H==="")&&(N=!1);N&&(S.diagnostics={runnable:V,programLog:z,vertexShader:{log:B,prefix:p},fragmentShader:{log:H,prefix:m}})}n.deleteShader(C),n.deleteShader(T),L=new pr(n,v),O=um(n,v)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let O;this.getAttributes=function(){return O===void 0&&b(this),O};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=n.getProgramParameter(v,im)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Sm=0;class bm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Em(t),e.set(t,i)),i}}class Em{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function Tm(r,t,e,i,n,s,o){const a=new bh,l=new bm,h=new Set,c=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,f=n.vertexTextures;let g=n.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return h.add(x),x===0?"uv":`uv${x}`}function m(x,S,z,B,H){const V=B.fog,N=H.geometry,j=x.isMeshStandardMaterial?B.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||j),at=X&&X.mapping===br?X.image.height:null,rt=v[x.type];x.precision!==null&&(g=n.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const pt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Bt=pt!==void 0?pt.length:0;let qt=0;N.morphAttributes.position!==void 0&&(qt=1),N.morphAttributes.normal!==void 0&&(qt=2),N.morphAttributes.color!==void 0&&(qt=3);let Y,tt,vt,ht;if(rt){const He=hi[rt];Y=He.vertexShader,tt=He.fragmentShader}else Y=x.vertexShader,tt=x.fragmentShader,l.update(x),vt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const Ut=r.getRenderTarget(),Dt=H.isInstancedMesh===!0,Gt=H.isBatchedMesh===!0,Yt=!!x.map,J=!!x.matcap,P=!!X,ct=!!x.aoMap,lt=!!x.lightMap,it=!!x.bumpMap,ut=!!x.normalMap,Pt=!!x.displacementMap,xt=!!x.emissiveMap,R=!!x.metalnessMap,w=!!x.roughnessMap,k=x.anisotropy>0,$=x.clearcoat>0,Z=x.dispersion>0,K=x.iridescence>0,At=x.sheen>0,dt=x.transmission>0,Mt=k&&!!x.anisotropyMap,$t=$&&!!x.clearcoatMap,nt=$&&!!x.clearcoatNormalMap,wt=$&&!!x.clearcoatRoughnessMap,zt=K&&!!x.iridescenceMap,Ot=K&&!!x.iridescenceThicknessMap,bt=At&&!!x.sheenColorMap,Kt=At&&!!x.sheenRoughnessMap,Ht=!!x.specularMap,ae=!!x.specularColorMap,D=!!x.specularIntensityMap,_t=dt&&!!x.transmissionMap,q=dt&&!!x.thicknessMap,Q=!!x.gradientMap,mt=!!x.alphaMap,yt=x.alphaTest>0,Jt=!!x.alphaHash,xe=!!x.extensions;let Ge=Bi;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Ge=r.toneMapping);const Qt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:tt,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&H._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&H.instanceColor!==null,instancingMorph:Dt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ut===null?r.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Hi,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:J,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:at,aoMap:ct,lightMap:lt,bumpMap:it,normalMap:ut,displacementMap:f&&Pt,emissiveMap:xt,normalMapObjectSpace:ut&&x.normalMapType===Ic,normalMapTangentSpace:ut&&x.normalMapType===_h,metalnessMap:R,roughnessMap:w,anisotropy:k,anisotropyMap:Mt,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:nt,clearcoatRoughnessMap:wt,dispersion:Z,iridescence:K,iridescenceMap:zt,iridescenceThicknessMap:Ot,sheen:At,sheenColorMap:bt,sheenRoughnessMap:Kt,specularMap:Ht,specularColorMap:ae,specularIntensityMap:D,transmission:dt,transmissionMap:_t,thicknessMap:q,gradientMap:Q,opaque:x.transparent===!1&&x.blending===an&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:yt,alphaHash:Jt,combine:x.combine,mapUv:Yt&&p(x.map.channel),aoMapUv:ct&&p(x.aoMap.channel),lightMapUv:lt&&p(x.lightMap.channel),bumpMapUv:it&&p(x.bumpMap.channel),normalMapUv:ut&&p(x.normalMap.channel),displacementMapUv:Pt&&p(x.displacementMap.channel),emissiveMapUv:xt&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:w&&p(x.roughnessMap.channel),anisotropyMapUv:Mt&&p(x.anisotropyMap.channel),clearcoatMapUv:$t&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ht&&p(x.specularMap.channel),specularColorMapUv:ae&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:_t&&p(x.transmissionMap.channel),thicknessMapUv:q&&p(x.thicknessMap.channel),alphaMapUv:mt&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ut||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!N.attributes.uv&&(Yt||mt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=h.has(1),Qt.vertexUv2s=h.has(2),Qt.vertexUv3s=h.has(3),h.clear(),Qt}function y(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)S.push(z),S.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(S,x),M(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),x.push(a.mask)}function C(x){const S=v[x.type];let z;if(S){const B=hi[S];z=lu.clone(B.uniforms)}else z=x.uniforms;return z}function T(x,S){let z;for(let B=0,H=c.length;B<H;B++){const V=c[B];if(V.cacheKey===S){z=V,++z.usedTimes;break}}return z===void 0&&(z=new wm(r,S,x,s),c.push(z)),z}function b(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:b,releaseShaderCache:L,programs:c,dispose:O}}function Am(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Rm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ll(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Il(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(d,u,f,g,v,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=v,m.group=p),t++,m}function a(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(d,u,f,g,v,p){const m=o(d,u,f,g,v,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function h(d,u){e.length>1&&e.sort(d||Rm),i.length>1&&i.sort(u||Ll),n.length>1&&n.sort(u||Ll)}function c(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:c,sort:h}}function Cm(){let r=new WeakMap;function t(i,n){const s=r.get(i);let o;return s===void 0?(o=new Il,r.set(i,[o])):n>=s.length?(o=new Il,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Pm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new St};break;case"SpotLight":e={position:new A,direction:new A,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function Lm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Im=0;function Dm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Um(r){const t=new Pm,e=Lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);const n=new A,s=new re,o=new re;function a(h){let c=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,_=0,M=0,C=0,T=0,b=0;h.sort(Dm);for(let O=0,x=h.length;O<x;O++){const S=h[O],z=S.color,B=S.intensity,H=S.distance,V=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=z.r*B,d+=z.g*B,u+=z.b*B;else if(S.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(S.sh.coefficients[N],B);b++}else if(S.isDirectionalLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,X=e.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=S.shadow.matrix,y++}i.directional[f]=N,f++}else if(S.isSpotLight){const N=t.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(z).multiplyScalar(B),N.distance=H,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,i.spot[v]=N;const j=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,j.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[v]=j.matrix,S.castShadow){const X=e.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=V,M++}v++}else if(S.isRectAreaLight){const N=t.get(S);N.color.copy(z).multiplyScalar(B),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=N,p++}else if(S.isPointLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const j=S.shadow,X=e.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=N,g++}else if(S.isHemisphereLight){const N=t.get(S);N.skyColor.copy(S.color).multiplyScalar(B),N.groundColor.copy(S.groundColor).multiplyScalar(B),i.hemi[m]=N,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==y||L.numPointShadows!==_||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==b)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,L.directionalLength=f,L.pointLength=g,L.spotLength=v,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=y,L.numPointShadows=_,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=b,i.version=Im++)}function l(h,c){let d=0,u=0,f=0,g=0,v=0;const p=c.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){const _=h[m];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),d++}else if(_.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Dl(r){const t=new Um(r),e=[],i=[];function n(c){h.camera=c,e.length=0,i.length=0}function s(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Nm(r){let t=new WeakMap;function e(n,s=0){const o=t.get(n);let a;return o===void 0?(a=new Dl(r),t.set(n,[a])):s>=o.length?(a=new Dl(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Fm extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zm extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Om=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bm=`uniform sampler2D shadow_pass;
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
}`;function km(r,t,e){let i=new Sa;const n=new st,s=new st,o=new ge,a=new Fm({depthPacking:Lc}),l=new zm,h={},c=e.maxTextureSize,d={[Gi]:ke,[ke]:Gi,[Pe]:Pe},u=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Om,fragmentShader:Bm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new I(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let m=this.type;this.render=function(T,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const O=r.getRenderTarget(),x=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Oi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=m!==bi&&this.type===bi,H=m===bi&&this.type!==bi;for(let V=0,N=T.length;V<N;V++){const j=T[V],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const at=X.getFrameExtents();if(n.multiply(at),s.copy(X.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/at.x),n.x=s.x*at.x,X.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/at.y),n.y=s.y*at.y,X.mapSize.y=s.y)),X.map===null||B===!0||H===!0){const pt=this.type!==bi?{minFilter:Xe,magFilter:Xe}:{};X.map!==null&&X.map.dispose(),X.map=new hn(n.x,n.y,pt),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const rt=X.getViewportCount();for(let pt=0;pt<rt;pt++){const Bt=X.getViewport(pt);o.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),z.viewport(o),X.updateMatrices(j,pt),i=X.getFrustum(),M(b,L,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===bi&&y(X,L),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(O,x,S)};function y(T,b){const L=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hn(n.x,n.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(b,null,L,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(b,null,L,f,v,null)}function _(T,b,L,O){let x=null;const S=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)x=S;else if(x=L.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=x.uuid,B=b.uuid;let H=h[z];H===void 0&&(H={},h[z]=H);let V=H[B];V===void 0&&(V=x.clone(),H[B]=V,b.addEventListener("dispose",C)),x=V}if(x.visible=b.visible,x.wireframe=b.wireframe,O===bi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=L}return x}function M(T,b,L,O,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),H=T.material;if(Array.isArray(H)){const V=B.groups;for(let N=0,j=V.length;N<j;N++){const X=V[N],at=H[X.materialIndex];if(at&&at.visible){const rt=_(T,at,O,x);T.onBeforeShadow(r,T,b,L,B,rt,X),r.renderBufferDirect(L,null,B,rt,T,X),T.onAfterShadow(r,T,b,L,B,rt,X)}}}else if(H.visible){const V=_(T,H,O,x);T.onBeforeShadow(r,T,b,L,B,V,null),r.renderBufferDirect(L,null,B,V,T,null),T.onAfterShadow(r,T,b,L,B,V,null)}}const z=T.children;for(let B=0,H=z.length;B<H;B++)M(z[B],b,L,O,x)}function C(T){T.target.removeEventListener("dispose",C);for(const L in h){const O=h[L],x=T.target.uuid;x in O&&(O[x].dispose(),delete O[x])}}}const Gm={[wo]:So,[bo]:Ao,[Eo]:Ro,[kn]:To,[So]:wo,[Ao]:bo,[Ro]:Eo,[To]:kn};function Hm(r){function t(){let D=!1;const _t=new ge;let q=null;const Q=new ge(0,0,0,0);return{setMask:function(mt){q!==mt&&!D&&(r.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){D=mt},setClear:function(mt,yt,Jt,xe,Ge){Ge===!0&&(mt*=xe,yt*=xe,Jt*=xe),_t.set(mt,yt,Jt,xe),Q.equals(_t)===!1&&(r.clearColor(mt,yt,Jt,xe),Q.copy(_t))},reset:function(){D=!1,q=null,Q.set(-1,0,0,0)}}}function e(){let D=!1,_t=!1,q=null,Q=null,mt=null;return{setReversed:function(yt){_t=yt},setTest:function(yt){yt?vt(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(yt){q!==yt&&!D&&(r.depthMask(yt),q=yt)},setFunc:function(yt){if(_t&&(yt=Gm[yt]),Q!==yt){switch(yt){case wo:r.depthFunc(r.NEVER);break;case So:r.depthFunc(r.ALWAYS);break;case bo:r.depthFunc(r.LESS);break;case kn:r.depthFunc(r.LEQUAL);break;case Eo:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case Ao:r.depthFunc(r.GREATER);break;case Ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=yt}},setLocked:function(yt){D=yt},setClear:function(yt){mt!==yt&&(r.clearDepth(yt),mt=yt)},reset:function(){D=!1,q=null,Q=null,mt=null}}}function i(){let D=!1,_t=null,q=null,Q=null,mt=null,yt=null,Jt=null,xe=null,Ge=null;return{setTest:function(Qt){D||(Qt?vt(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Qt){_t!==Qt&&!D&&(r.stencilMask(Qt),_t=Qt)},setFunc:function(Qt,He,vi){(q!==Qt||Q!==He||mt!==vi)&&(r.stencilFunc(Qt,He,vi),q=Qt,Q=He,mt=vi)},setOp:function(Qt,He,vi){(yt!==Qt||Jt!==He||xe!==vi)&&(r.stencilOp(Qt,He,vi),yt=Qt,Jt=He,xe=vi)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ge!==Qt&&(r.clearStencil(Qt),Ge=Qt)},reset:function(){D=!1,_t=null,q=null,Q=null,mt=null,yt=null,Jt=null,xe=null,Ge=null}}}const n=new t,s=new e,o=new i,a=new WeakMap,l=new WeakMap;let h={},c={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,M=null,C=null,T=new St(0,0,0),b=0,L=!1,O=null,x=null,S=null,z=null,B=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,N=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=N>=1):j.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=N>=2);let X=null,at={};const rt=r.getParameter(r.SCISSOR_BOX),pt=r.getParameter(r.VIEWPORT),Bt=new ge().fromArray(rt),qt=new ge().fromArray(pt);function Y(D,_t,q,Q){const mt=new Uint8Array(4),yt=r.createTexture();r.bindTexture(D,yt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Jt=0;Jt<q;Jt++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(_t+Jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return yt}const tt={};tt[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),vt(r.DEPTH_TEST),s.setFunc(kn),lt(!1),it(Va),vt(r.CULL_FACE),P(Oi);function vt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ht(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ut(D,_t){return c[D]!==_t?(r.bindFramebuffer(D,_t),c[D]=_t,D===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=_t),D===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function Dt(D,_t){let q=u,Q=!1;if(D){q=d.get(_t),q===void 0&&(q=[],d.set(_t,q));const mt=D.textures;if(q.length!==mt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let yt=0,Jt=mt.length;yt<Jt;yt++)q[yt]=r.COLOR_ATTACHMENT0+yt;q.length=mt.length,Q=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,Q=!0);Q&&r.drawBuffers(q)}function Gt(D){return f!==D?(r.useProgram(D),f=D,!0):!1}const Yt={[en]:r.FUNC_ADD,[sc]:r.FUNC_SUBTRACT,[rc]:r.FUNC_REVERSE_SUBTRACT};Yt[oc]=r.MIN,Yt[ac]=r.MAX;const J={[lc]:r.ZERO,[hc]:r.ONE,[cc]:r.SRC_COLOR,[yo]:r.SRC_ALPHA,[gc]:r.SRC_ALPHA_SATURATE,[pc]:r.DST_COLOR,[dc]:r.DST_ALPHA,[uc]:r.ONE_MINUS_SRC_COLOR,[Mo]:r.ONE_MINUS_SRC_ALPHA,[mc]:r.ONE_MINUS_DST_COLOR,[fc]:r.ONE_MINUS_DST_ALPHA,[vc]:r.CONSTANT_COLOR,[xc]:r.ONE_MINUS_CONSTANT_COLOR,[_c]:r.CONSTANT_ALPHA,[yc]:r.ONE_MINUS_CONSTANT_ALPHA};function P(D,_t,q,Q,mt,yt,Jt,xe,Ge,Qt){if(D===Oi){g===!0&&(ht(r.BLEND),g=!1);return}if(g===!1&&(vt(r.BLEND),g=!0),D!==nc){if(D!==v||Qt!==L){if((p!==en||_!==en)&&(r.blendEquation(r.FUNC_ADD),p=en,_=en),Qt)switch(D){case an:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Le:r.blendFunc(r.ONE,r.ONE);break;case Wa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case an:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Le:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Wa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,M=null,C=null,T.set(0,0,0),b=0,v=D,L=Qt}return}mt=mt||_t,yt=yt||q,Jt=Jt||Q,(_t!==p||mt!==_)&&(r.blendEquationSeparate(Yt[_t],Yt[mt]),p=_t,_=mt),(q!==m||Q!==y||yt!==M||Jt!==C)&&(r.blendFuncSeparate(J[q],J[Q],J[yt],J[Jt]),m=q,y=Q,M=yt,C=Jt),(xe.equals(T)===!1||Ge!==b)&&(r.blendColor(xe.r,xe.g,xe.b,Ge),T.copy(xe),b=Ge),v=D,L=!1}function ct(D,_t){D.side===Pe?ht(r.CULL_FACE):vt(r.CULL_FACE);let q=D.side===ke;_t&&(q=!q),lt(q),D.blending===an&&D.transparent===!1?P(Oi):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),n.setMask(D.colorWrite);const Q=D.stencilWrite;o.setTest(Q),Q&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Pt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?vt(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(D){O!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),O=D)}function it(D){D!==ec?(vt(r.CULL_FACE),D!==x&&(D===Va?r.cullFace(r.BACK):D===ic?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),x=D}function ut(D){D!==S&&(V&&r.lineWidth(D),S=D)}function Pt(D,_t,q){D?(vt(r.POLYGON_OFFSET_FILL),(z!==_t||B!==q)&&(r.polygonOffset(_t,q),z=_t,B=q)):ht(r.POLYGON_OFFSET_FILL)}function xt(D){D?vt(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function R(D){D===void 0&&(D=r.TEXTURE0+H-1),X!==D&&(r.activeTexture(D),X=D)}function w(D,_t,q){q===void 0&&(X===null?q=r.TEXTURE0+H-1:q=X);let Q=at[q];Q===void 0&&(Q={type:void 0,texture:void 0},at[q]=Q),(Q.type!==D||Q.texture!==_t)&&(X!==q&&(r.activeTexture(q),X=q),r.bindTexture(D,_t||tt[D]),Q.type=D,Q.texture=_t)}function k(){const D=at[X];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){Bt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Bt.copy(D))}function bt(D){qt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function Kt(D,_t){let q=l.get(_t);q===void 0&&(q=new WeakMap,l.set(_t,q));let Q=q.get(D);Q===void 0&&(Q=r.getUniformBlockIndex(_t,D.name),q.set(D,Q))}function Ht(D,_t){const Q=l.get(_t).get(D);a.get(_t)!==Q&&(r.uniformBlockBinding(_t,Q,D.__bindingPointIndex),a.set(_t,Q))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,at={},c={},d=new WeakMap,u=[],f=null,g=!1,v=null,p=null,m=null,y=null,_=null,M=null,C=null,T=new St(0,0,0),b=0,L=!1,O=null,x=null,S=null,z=null,B=null,Bt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:vt,disable:ht,bindFramebuffer:Ut,drawBuffers:Dt,useProgram:Gt,setBlending:P,setMaterial:ct,setFlipSided:lt,setCullFace:it,setLineWidth:ut,setPolygonOffset:Pt,setScissorTest:xt,activeTexture:R,bindTexture:w,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:wt,texImage3D:zt,updateUBOMapping:Kt,uniformBlockBinding:Ht,texStorage2D:$t,texStorage3D:nt,texSubImage2D:K,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:Mt,scissor:Ot,viewport:bt,reset:ae}}function Ul(r,t,e,i){const n=Vm(i);switch(e){case fh:return r*t;case mh:return r*t;case gh:return r*t*2;case va:return r*t/n.components*n.byteLength;case xa:return r*t/n.components*n.byteLength;case vh:return r*t*2/n.components*n.byteLength;case _a:return r*t*2/n.components*n.byteLength;case ph:return r*t*3/n.components*n.byteLength;case ai:return r*t*4/n.components*n.byteLength;case ya:return r*t*4/n.components*n.byteLength;case ar:case lr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hr:case cr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(r,16)*Math.max(t,8)/4;case Io:case Uo:return Math.max(r,8)*Math.max(t,8)/2;case Fo:case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Go:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case $o:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ur:case Qo:case ta:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xh:case ea:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ia:case na:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(r){switch(r){case Ri:case ch:return{byteLength:1,components:1};case ds:case uh:case _s:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case ln:case pa:case ui:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Wm(r,t,e,i,n,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new st,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):_r("canvas")}function v(R,w,k){let $=1;const Z=xt(R);if((Z.width>k||Z.height>k)&&($=k/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor($*Z.width),At=Math.floor($*Z.height);d===void 0&&(d=g(K,At));const dt=w?g(K,At):d;return dt.width=K,dt.height=At,dt.getContext("2d").drawImage(R,0,0,K,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+At+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Xe&&R.minFilter!==oi}function m(R){r.generateMipmap(R)}function y(R,w,k,$,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=w;if(w===r.RED&&(k===r.FLOAT&&(K=r.R32F),k===r.HALF_FLOAT&&(K=r.R16F),k===r.UNSIGNED_BYTE&&(K=r.R8)),w===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.R8UI),k===r.UNSIGNED_SHORT&&(K=r.R16UI),k===r.UNSIGNED_INT&&(K=r.R32UI),k===r.BYTE&&(K=r.R8I),k===r.SHORT&&(K=r.R16I),k===r.INT&&(K=r.R32I)),w===r.RG&&(k===r.FLOAT&&(K=r.RG32F),k===r.HALF_FLOAT&&(K=r.RG16F),k===r.UNSIGNED_BYTE&&(K=r.RG8)),w===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RG8UI),k===r.UNSIGNED_SHORT&&(K=r.RG16UI),k===r.UNSIGNED_INT&&(K=r.RG32UI),k===r.BYTE&&(K=r.RG8I),k===r.SHORT&&(K=r.RG16I),k===r.INT&&(K=r.RG32I)),w===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGB8UI),k===r.UNSIGNED_SHORT&&(K=r.RGB16UI),k===r.UNSIGNED_INT&&(K=r.RGB32UI),k===r.BYTE&&(K=r.RGB8I),k===r.SHORT&&(K=r.RGB16I),k===r.INT&&(K=r.RGB32I)),w===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),k===r.UNSIGNED_INT&&(K=r.RGBA32UI),k===r.BYTE&&(K=r.RGBA8I),k===r.SHORT&&(K=r.RGBA16I),k===r.INT&&(K=r.RGBA32I)),w===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),w===r.RGBA){const At=Z?mr:ie.getTransfer($);k===r.FLOAT&&(K=r.RGBA32F),k===r.HALF_FLOAT&&(K=r.RGBA16F),k===r.UNSIGNED_BYTE&&(K=At===ue?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(R,w){let k;return R?w===null||w===ln||w===Vn?k=r.DEPTH24_STENCIL8:w===ui?k=r.DEPTH32F_STENCIL8:w===ds&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ln||w===Vn?k=r.DEPTH_COMPONENT24:w===ui?k=r.DEPTH_COMPONENT32F:w===ds&&(k=r.DEPTH_COMPONENT16),k}function M(R,w){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==oi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=R.target;w.removeEventListener("dispose",C),b(w),w.isVideoTexture&&c.delete(w)}function T(R){const w=R.target;w.removeEventListener("dispose",T),O(w)}function b(R){const w=i.get(R);if(w.__webglInit===void 0)return;const k=R.source,$=u.get(k);if($){const Z=$[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(R),Object.keys($).length===0&&u.delete(k)}i.remove(R)}function L(R){const w=i.get(R);r.deleteTexture(w.__webglTexture);const k=R.source,$=u.get(k);delete $[w.__cacheKey],o.memory.textures--}function O(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let Z=0;Z<w.__webglFramebuffer[$].length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[$][Z]);else r.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)r.deleteFramebuffer(w.__webglFramebuffer[$]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const k=R.textures;for(let $=0,Z=k.length;$<Z;$++){const K=i.get(k[$]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(R)}let x=0;function S(){x=0}function z(){const R=x;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),x+=1,R}function B(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function H(R,w){const k=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(k,R,w);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+w)}function V(R,w){const k=i.get(R);if(R.version>0&&k.__version!==R.version){qt(k,R,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+w)}function N(R,w){const k=i.get(R);if(R.version>0&&k.__version!==R.version){qt(k,R,w);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+w)}function j(R,w){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Y(k,R,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+w)}const X={[us]:r.REPEAT,[rn]:r.CLAMP_TO_EDGE,[Lo]:r.MIRRORED_REPEAT},at={[Xe]:r.NEAREST,[Cc]:r.NEAREST_MIPMAP_NEAREST,[Ss]:r.NEAREST_MIPMAP_LINEAR,[oi]:r.LINEAR,[Dr]:r.LINEAR_MIPMAP_NEAREST,[on]:r.LINEAR_MIPMAP_LINEAR},rt={[Dc]:r.NEVER,[Bc]:r.ALWAYS,[Uc]:r.LESS,[yh]:r.LEQUAL,[Nc]:r.EQUAL,[Oc]:r.GEQUAL,[Fc]:r.GREATER,[zc]:r.NOTEQUAL};function pt(R,w){if(w.type===ui&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===oi||w.magFilter===Dr||w.magFilter===Ss||w.magFilter===on||w.minFilter===oi||w.minFilter===Dr||w.minFilter===Ss||w.minFilter===on)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,X[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,at[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==Ss&&w.minFilter!==on||w.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Bt(R,w){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));const $=w.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const K=B(w);if(K!==R.__cacheKey){Z[K]===void 0&&(Z[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[K].usedTimes++;const At=Z[R.__cacheKey];At!==void 0&&(Z[R.__cacheKey].usedTimes--,At.usedTimes===0&&L(w)),R.__cacheKey=K,R.__webglTexture=Z[K].texture}return k}function qt(R,w,k){let $=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=r.TEXTURE_3D);const Z=Bt(R,w),K=w.source;e.bindTexture($,R.__webglTexture,r.TEXTURE0+k);const At=i.get(K);if(K.version!==At.__version||Z===!0){e.activeTexture(r.TEXTURE0+k);const dt=ie.getPrimaries(ie.workingColorSpace),Mt=w.colorSpace===zi?null:ie.getPrimaries(w.colorSpace),$t=w.colorSpace===zi||dt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let nt=v(w.image,!1,n.maxTextureSize);nt=Pt(w,nt);const wt=s.convert(w.format,w.colorSpace),zt=s.convert(w.type);let Ot=y(w.internalFormat,wt,zt,w.colorSpace,w.isVideoTexture);pt($,w);let bt;const Kt=w.mipmaps,Ht=w.isVideoTexture!==!0,ae=At.__version===void 0||Z===!0,D=K.dataReady,_t=M(w,nt);if(w.isDepthTexture)Ot=_(w.format===Wn,w.type),ae&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Ot,nt.width,nt.height,0,wt,zt,null));else if(w.isDataTexture)if(Kt.length>0){Ht&&ae&&e.texStorage2D(r.TEXTURE_2D,_t,Ot,Kt[0].width,Kt[0].height);for(let q=0,Q=Kt.length;q<Q;q++)bt=Kt[q],Ht?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(r.TEXTURE_2D,q,Ot,bt.width,bt.height,0,wt,zt,bt.data);w.generateMipmaps=!1}else Ht?(ae&&e.texStorage2D(r.TEXTURE_2D,_t,Ot,nt.width,nt.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,wt,zt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,nt.width,nt.height,0,wt,zt,nt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Ot,Kt[0].width,Kt[0].height,nt.depth);for(let q=0,Q=Kt.length;q<Q;q++)if(bt=Kt[q],w.format!==ai)if(wt!==null)if(Ht){if(D)if(w.layerUpdates.size>0){const mt=Ul(bt.width,bt.height,w.format,w.type);for(const yt of w.layerUpdates){const Jt=bt.data.subarray(yt*mt/bt.data.BYTES_PER_ELEMENT,(yt+1)*mt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,yt,bt.width,bt.height,1,wt,Jt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,nt.depth,wt,bt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Ot,bt.width,bt.height,nt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,nt.depth,wt,zt,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Ot,bt.width,bt.height,nt.depth,0,wt,zt,bt.data)}else{Ht&&ae&&e.texStorage2D(r.TEXTURE_2D,_t,Ot,Kt[0].width,Kt[0].height);for(let q=0,Q=Kt.length;q<Q;q++)bt=Kt[q],w.format!==ai?wt!==null?Ht?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,bt.width,bt.height,wt,zt,bt.data):e.texImage2D(r.TEXTURE_2D,q,Ot,bt.width,bt.height,0,wt,zt,bt.data)}else if(w.isDataArrayTexture)if(Ht){if(ae&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Ot,nt.width,nt.height,nt.depth),D)if(w.layerUpdates.size>0){const q=Ul(nt.width,nt.height,w.format,w.type);for(const Q of w.layerUpdates){const mt=nt.data.subarray(Q*q/nt.data.BYTES_PER_ELEMENT,(Q+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,wt,zt,mt)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,wt,zt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,wt,zt,nt.data);else if(w.isData3DTexture)Ht?(ae&&e.texStorage3D(r.TEXTURE_3D,_t,Ot,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,wt,zt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,wt,zt,nt.data);else if(w.isFramebufferTexture){if(ae)if(Ht)e.texStorage2D(r.TEXTURE_2D,_t,Ot,nt.width,nt.height);else{let q=nt.width,Q=nt.height;for(let mt=0;mt<_t;mt++)e.texImage2D(r.TEXTURE_2D,mt,Ot,q,Q,0,wt,zt,null),q>>=1,Q>>=1}}else if(Kt.length>0){if(Ht&&ae){const q=xt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,_t,Ot,q.width,q.height)}for(let q=0,Q=Kt.length;q<Q;q++)bt=Kt[q],Ht?D&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,wt,zt,bt):e.texImage2D(r.TEXTURE_2D,q,Ot,wt,zt,bt);w.generateMipmaps=!1}else if(Ht){if(ae){const q=xt(nt);e.texStorage2D(r.TEXTURE_2D,_t,Ot,q.width,q.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,zt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Ot,wt,zt,nt);p(w)&&m($),At.__version=K.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Y(R,w,k){if(w.image.length!==6)return;const $=Bt(R,w),Z=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const K=i.get(Z);if(Z.version!==K.__version||$===!0){e.activeTexture(r.TEXTURE0+k);const At=ie.getPrimaries(ie.workingColorSpace),dt=w.colorSpace===zi?null:ie.getPrimaries(w.colorSpace),Mt=w.colorSpace===zi||At===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!$t&&!nt?wt[Q]=v(w.image[Q],!0,n.maxCubemapSize):wt[Q]=nt?w.image[Q].image:w.image[Q],wt[Q]=Pt(w,wt[Q]);const zt=wt[0],Ot=s.convert(w.format,w.colorSpace),bt=s.convert(w.type),Kt=y(w.internalFormat,Ot,bt,w.colorSpace),Ht=w.isVideoTexture!==!0,ae=K.__version===void 0||$===!0,D=Z.dataReady;let _t=M(w,zt);pt(r.TEXTURE_CUBE_MAP,w);let q;if($t){Ht&&ae&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Kt,zt.width,zt.height);for(let Q=0;Q<6;Q++){q=wt[Q].mipmaps;for(let mt=0;mt<q.length;mt++){const yt=q[mt];w.format!==ai?Ot!==null?Ht?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,yt.width,yt.height,Ot,yt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,yt.width,yt.height,Ot,bt,yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,Kt,yt.width,yt.height,0,Ot,bt,yt.data)}}}else{if(q=w.mipmaps,Ht&&ae){q.length>0&&_t++;const Q=xt(wt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Ht?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Ot,bt,wt[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,wt[Q].width,wt[Q].height,0,Ot,bt,wt[Q].data);for(let mt=0;mt<q.length;mt++){const Jt=q[mt].image[Q].image;Ht?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Jt.width,Jt.height,Ot,bt,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Kt,Jt.width,Jt.height,0,Ot,bt,Jt.data)}}else{Ht?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,bt,wt[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Ot,bt,wt[Q]);for(let mt=0;mt<q.length;mt++){const yt=q[mt];Ht?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ot,bt,yt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,Kt,Ot,bt,yt.image[Q])}}}p(w)&&m(r.TEXTURE_CUBE_MAP),K.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function tt(R,w,k,$,Z,K){const At=s.convert(k.format,k.colorSpace),dt=s.convert(k.type),Mt=y(k.internalFormat,At,dt,k.colorSpace);if(!i.get(w).__hasExternalTextures){const nt=Math.max(1,w.width>>K),wt=Math.max(1,w.height>>K);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,K,Mt,nt,wt,w.depth,0,At,dt,null):e.texImage2D(Z,K,Mt,nt,wt,0,At,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),it(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Z,i.get(k).__webglTexture,0,lt(w)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Z,i.get(k).__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(R,w,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){const $=w.depthTexture,Z=$&&$.isDepthTexture?$.type:null,K=_(w.stencilBuffer,Z),At=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=lt(w);it(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,K,w.width,w.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,K,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,K,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,R)}else{const $=w.textures;for(let Z=0;Z<$.length;Z++){const K=$[Z],At=s.convert(K.format,K.colorSpace),dt=s.convert(K.type),Mt=y(K.internalFormat,At,dt,K.colorSpace),$t=lt(w);k&&it(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,Mt,w.width,w.height):it(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,Mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const $=i.get(w.depthTexture).__webglTexture,Z=lt(w);if(w.depthTexture.format===On)it(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(w.depthTexture.format===Wn)it(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ut(R){const w=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=$}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ht(w.__webglFramebuffer,R)}else if(k){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=r.createRenderbuffer(),vt(w.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),vt(w.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,Z)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(R,w,k){const $=i.get(R);w!==void 0&&tt($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ut(R)}function Gt(R){const w=R.texture,k=i.get(R),$=i.get(w);R.addEventListener("dispose",T);const Z=R.textures,K=R.isWebGLCubeRenderTarget===!0,At=Z.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)k.__webglFramebuffer[dt][Mt]=r.createFramebuffer()}else k.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)k.__webglFramebuffer[dt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(At)for(let dt=0,Mt=Z.length;dt<Mt;dt++){const $t=i.get(Z[dt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&it(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<Z.length;dt++){const Mt=Z[dt];k.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const $t=s.convert(Mt.format,Mt.colorSpace),nt=s.convert(Mt.type),wt=y(Mt.internalFormat,$t,nt,Mt.colorSpace,R.isXRRenderTarget===!0),zt=lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,wt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),vt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),pt(r.TEXTURE_CUBE_MAP,w);for(let dt=0;dt<6;dt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)tt(k.__webglFramebuffer[dt][Mt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Mt);else tt(k.__webglFramebuffer[dt],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(w)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,Mt=Z.length;dt<Mt;dt++){const $t=Z[dt],nt=i.get($t);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),pt(r.TEXTURE_2D,$t),tt(k.__webglFramebuffer,R,$t,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,0),p($t)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,$.__webglTexture),pt(dt,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)tt(k.__webglFramebuffer[Mt],R,w,r.COLOR_ATTACHMENT0,dt,Mt);else tt(k.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,dt,0);p(w)&&m(dt),e.unbindTexture()}R.depthBuffer&&Ut(R)}function Yt(R){const w=R.textures;for(let k=0,$=w.length;k<$;k++){const Z=w[k];if(p(Z)){const K=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,At=i.get(Z).__webglTexture;e.bindTexture(K,At),m(K),e.unbindTexture()}}}const J=[],P=[];function ct(R){if(R.samples>0){if(it(R)===!1){const w=R.textures,k=R.width,$=R.height;let Z=r.COLOR_BUFFER_BIT;const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=i.get(R),dt=w.length>1;if(dt)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const $t=i.get(w[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,k,$,0,0,k,$,Z,r.NEAREST),l===!0&&(J.length=0,P.length=0,J.push(r.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(J.push(K),P.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,At.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,At.__webglColorRenderbuffer[Mt]);const $t=i.get(w[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,At.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function lt(R){return Math.min(n.maxSamples,R.samples)}function it(R){const w=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ut(R){const w=o.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function Pt(R,w){const k=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Hi&&k!==zi&&(ie.getTransfer(k)===ue?($!==ai||Z!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=S,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=N,this.setTextureCube=j,this.rebindTextures=Dt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=it}function Xm(r,t){function e(i,n=zi){let s;const o=ie.getTransfer(n);if(i===Ri)return r.UNSIGNED_BYTE;if(i===ma)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ga)return r.UNSIGNED_SHORT_5_5_5_1;if(i===dh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ch)return r.BYTE;if(i===uh)return r.SHORT;if(i===ds)return r.UNSIGNED_SHORT;if(i===pa)return r.INT;if(i===ln)return r.UNSIGNED_INT;if(i===ui)return r.FLOAT;if(i===_s)return r.HALF_FLOAT;if(i===fh)return r.ALPHA;if(i===ph)return r.RGB;if(i===ai)return r.RGBA;if(i===mh)return r.LUMINANCE;if(i===gh)return r.LUMINANCE_ALPHA;if(i===On)return r.DEPTH_COMPONENT;if(i===Wn)return r.DEPTH_STENCIL;if(i===va)return r.RED;if(i===xa)return r.RED_INTEGER;if(i===vh)return r.RG;if(i===_a)return r.RG_INTEGER;if(i===ya)return r.RGBA_INTEGER;if(i===ar||i===lr||i===hr||i===cr)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ar)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ar)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Io||i===Do||i===Uo||i===No)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fo||i===zo||i===Oo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fo||i===zo)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bo||i===ko||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===jo||i===$o||i===Ko||i===Jo||i===Zo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Go)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$o)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ur||i===Qo||i===ta)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ur)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xh||i===ea||i===ia||i===na)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ur)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===na)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vn?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}class qm extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tt extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ym={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),m=this._getHandJoint(h,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ym)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Ne,s=t.properties.get(n);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new li({vertexShader:jm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends qn{constructor(t,e){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null;const v=new Km,p=e.getContextAttributes();let m=null,y=null;const _=[],M=[],C=new st;let T=null;const b=new ei;b.layers.enable(1),b.viewport=new ge;const L=new ei;L.layers.enable(2),L.viewport=new ge;const O=[b,L],x=new qm;x.layers.enable(1),x.layers.enable(2);let S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=_[Y];return tt===void 0&&(tt=new lo,_[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=_[Y];return tt===void 0&&(tt=new lo,_[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=_[Y];return tt===void 0&&(tt=new lo,_[Y]=tt),tt.getHandSpace()};function B(Y){const tt=M.indexOf(Y.inputSource);if(tt===-1)return;const vt=_[tt];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,h||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",V);for(let Y=0;Y<_.length;Y++){const tt=M[Y];tt!==null&&(M[Y]=null,_[Y].disconnect(tt))}S=null,z=null,v.reset(),t.setRenderTarget(m),f=null,u=null,d=null,n=null,y=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",H),n.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,tt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hn(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,vt=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Wn:On,vt=p.stencil?Vn:ln);const Ut={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};d=new XRWebGLBinding(n,e),u=d.createProjectionLayer(Ut),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new hn(u.textureWidth,u.textureHeight,{format:ai,type:Ri,depthTexture:new Dh(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),qt.setContext(n),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(Y){for(let tt=0;tt<Y.removed.length;tt++){const vt=Y.removed[tt],ht=M.indexOf(vt);ht>=0&&(M[ht]=null,_[ht].disconnect(vt))}for(let tt=0;tt<Y.added.length;tt++){const vt=Y.added[tt];let ht=M.indexOf(vt);if(ht===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=M.length){M.push(vt),ht=Dt;break}else if(M[Dt]===null){M[Dt]=vt,ht=Dt;break}if(ht===-1)break}const Ut=_[ht];Ut&&Ut.connect(vt)}}const N=new A,j=new A;function X(Y,tt,vt){N.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);const ht=N.distanceTo(j),Ut=tt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Gt=Ut[14]/(Ut[10]-1),Yt=Ut[14]/(Ut[10]+1),J=(Ut[9]+1)/Ut[5],P=(Ut[9]-1)/Ut[5],ct=(Ut[8]-1)/Ut[0],lt=(Dt[8]+1)/Dt[0],it=Gt*ct,ut=Gt*lt,Pt=ht/(-ct+lt),xt=Pt*-ct;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xt),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const R=Gt+Pt,w=Yt+Pt,k=it-xt,$=ut+(ht-xt),Z=J*Yt/w*R,K=P*Yt/w*R;Y.projectionMatrix.makePerspective(k,$,Z,K,R,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let tt=Y.near,vt=Y.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),x.near=L.near=b.near=tt,x.far=L.far=b.far=vt,(S!==x.near||z!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,z=x.far);const ht=Y.parent,Ut=x.cameras;at(x,ht);for(let Dt=0;Dt<Ut.length;Dt++)at(Ut[Dt],ht);Ut.length===2?X(x,b,L):x.projectionMatrix.copy(b.projectionMatrix),rt(Y,x,ht)};function rt(Y,tt,vt){vt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ra*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let pt=null;function Bt(Y,tt){if(c=tt.getViewerPose(h||o),g=tt,c!==null){const vt=c.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ht=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Dt=0;Dt<vt.length;Dt++){const Gt=vt[Dt];let Yt=null;if(f!==null)Yt=f.getViewport(Gt);else{const P=d.getViewSubImage(u,Gt);Yt=P.viewport,Dt===0&&(t.setRenderTargetTextures(y,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let J=O[Dt];J===void 0&&(J=new ei,J.layers.enable(Dt),J.viewport=new ge,O[Dt]=J),J.matrix.fromArray(Gt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Gt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Dt===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(J)}const Ut=n.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Dt=d.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&v.init(t,Dt,n.renderState)}}for(let vt=0;vt<_.length;vt++){const ht=M[vt],Ut=_[vt];ht!==null&&Ut!==void 0&&Ut.update(ht,tt,h||o)}pt&&pt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const qt=new Lh;qt.setAnimationLoop(Bt),this.setAnimationLoop=function(Y){pt=Y},this.dispose=function(){}}}const Ki=new pi,Zm=new re;function Qm(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Rh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,_,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,_):m.isSpriteMaterial?h(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ke&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ke&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),_=y.envMap,M=y.envMapRotation;_&&(p.envMap.value=_,Ki.copy(M),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),p.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Ki)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ke&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function t0(r,t,e,i){let n={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const M=_.program;i.uniformBlockBinding(y,M)}function h(y,_){let M=n[y.id];M===void 0&&(g(y),M=c(y),n[y.id]=M,y.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(y,C);const T=t.render.frame;s[y.id]!==T&&(u(y),s[y.id]=T)}function c(y){const _=d();y.__bindingPointIndex=_;const M=r.createBuffer(),C=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const _=n[y.id],M=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let T=0,b=M.length;T<b;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let O=0,x=L.length;O<x;O++){const S=L[O];if(f(S,T,O,C)===!0){const z=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let H=0;for(let V=0;V<B.length;V++){const N=B[V],j=v(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,z+H,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,_,M,C){const T=y.value,b=_+"_"+M;if(C[b]===void 0)return typeof T=="number"||typeof T=="boolean"?C[b]=T:C[b]=T.clone(),!0;{const L=C[b];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[b]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(y){const _=y.uniforms;let M=0;const C=16;for(let b=0,L=_.length;b<L;b++){const O=Array.isArray(_[b])?_[b]:[_[b]];for(let x=0,S=O.length;x<S;x++){const z=O[x],B=Array.isArray(z.value)?z.value:[z.value];for(let H=0,V=B.length;H<V;H++){const N=B[H],j=v(N),X=M%C,at=X%j.boundary,rt=X+at;M+=at,rt!==0&&C-rt<j.storage&&(M+=C-rt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=j.storage}}}const T=M%C;return T>0&&(M+=C-T),y.__size=M,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function m(){for(const y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:h,dispose:m}}class e0{constructor(t={}){const{canvas:e=Gc(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Bi,this.toneMappingExposure=1;const _=this;let M=!1,C=0,T=0,b=null,L=-1,O=null;const x=new ge,S=new ge;let z=null;const B=new St(0);let H=0,V=e.width,N=e.height,j=1,X=null,at=null;const rt=new ge(0,0,V,N),pt=new ge(0,0,V,N);let Bt=!1;const qt=new Sa;let Y=!1,tt=!1;const vt=new re,ht=new re,Ut=new A,Dt=new ge,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function J(){return b===null?j:1}let P=i;function ct(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),P===null){const U="webgl2";if(P=ct(U,E),P===null)throw ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let lt,it,ut,Pt,xt,R,w,k,$,Z,K,At,dt,Mt,$t,nt,wt,zt,Ot,bt,Kt,Ht,ae,D;function _t(){lt=new op(P),lt.init(),Ht=new Xm(P,lt),it=new tp(P,lt,t,Ht),ut=new Hm(P),it.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),Pt=new hp(P),xt=new Am,R=new Wm(P,lt,ut,xt,it,Ht,Pt),w=new ip(_),k=new rp(_),$=new mu(P),ae=new Zf(P,$),Z=new ap(P,$,Pt,ae),K=new up(P,Z,$,Pt),Ot=new cp(P,it,R),nt=new ep(xt),At=new Tm(_,w,k,lt,it,ae,nt),dt=new Qm(_,xt),Mt=new Cm,$t=new Nm(lt),zt=new Jf(_,w,k,ut,K,u,l),wt=new km(_,K,it),D=new t0(P,Pt,it,ut),bt=new Qf(P,lt,Pt),Kt=new lp(P,lt,Pt),Pt.programs=At.programs,_.capabilities=it,_.extensions=lt,_.properties=xt,_.renderLists=Mt,_.shadowMap=wt,_.state=ut,_.info=Pt}_t();const q=new Jm(_,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(V,N,!1))},this.getSize=function(E){return E.set(V,N)},this.setSize=function(E,U,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,N=U,e.width=Math.floor(E*j),e.height=Math.floor(U*j),G===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*j,N*j).floor()},this.setDrawingBufferSize=function(E,U,G){V=E,N=U,j=G,e.width=Math.floor(E*G),e.height=Math.floor(U*G),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(rt)},this.setViewport=function(E,U,G,W){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,U,G,W),ut.viewport(x.copy(rt).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,U,G,W){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,U,G,W),ut.scissor(S.copy(pt).multiplyScalar(j).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(E){ut.setScissorTest(Bt=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,U=!0,G=!0){let W=0;if(E){let F=!1;if(b!==null){const ot=b.texture.format;F=ot===ya||ot===_a||ot===xa}if(F){const ot=b.texture.type,gt=ot===Ri||ot===ln||ot===ds||ot===Vn||ot===ma||ot===ga,Et=zt.getClearColor(),Rt=zt.getClearAlpha(),Nt=Et.r,Ft=Et.g,Ct=Et.b;gt?(f[0]=Nt,f[1]=Ft,f[2]=Ct,f[3]=Rt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Nt,g[1]=Ft,g[2]=Ct,g[3]=Rt,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}U&&(W|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Mt.dispose(),$t.dispose(),xt.dispose(),w.dispose(),k.dispose(),K.dispose(),ae.dispose(),D.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",Na),q.removeEventListener("sessionend",Fa),Wi.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Pt.autoReset,U=wt.enabled,G=wt.autoUpdate,W=wt.needsUpdate,F=wt.type;_t(),Pt.autoReset=E,wt.enabled=U,wt.autoUpdate=G,wt.needsUpdate=W,wt.type=F}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Jt(E){const U=E.target;U.removeEventListener("dispose",Jt),xe(U)}function xe(E){Ge(E),xt.remove(E)}function Ge(E){const U=xt.get(E).programs;U!==void 0&&(U.forEach(function(G){At.releaseProgram(G)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,G,W,F,ot){U===null&&(U=Gt);const gt=F.isMesh&&F.matrixWorld.determinant()<0,Et=Jh(E,U,G,W,F);ut.setMaterial(W,gt);let Rt=G.index,Nt=1;if(W.wireframe===!0){if(Rt=Z.getWireframeAttribute(G),Rt===void 0)return;Nt=2}const Ft=G.drawRange,Ct=G.attributes.position;let se=Ft.start*Nt,he=(Ft.start+Ft.count)*Nt;ot!==null&&(se=Math.max(se,ot.start*Nt),he=Math.min(he,(ot.start+ot.count)*Nt)),Rt!==null?(se=Math.max(se,0),he=Math.min(he,Rt.count)):Ct!=null&&(se=Math.max(se,0),he=Math.min(he,Ct.count));const me=he-se;if(me<0||me===1/0)return;ae.setup(F,W,Et,G,Rt);let qe,te=bt;if(Rt!==null&&(qe=$.get(Rt),te=Kt,te.setIndex(qe)),F.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*J()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(F.isLine){let Lt=W.linewidth;Lt===void 0&&(Lt=1),ut.setLineWidth(Lt*J()),F.isLineSegments?te.setMode(P.LINES):F.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else F.isPoints?te.setMode(P.POINTS):F.isSprite&&te.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,Ae=F._multiDrawCounts,ee=F._multiDrawCount,ii=Rt?$.get(Rt).bytesPerElement:1,pn=xt.get(W).currentProgram.getUniforms();for(let Ye=0;Ye<ee;Ye++)pn.setValue(P,"_gl_DrawID",Ye),te.render(Lt[Ye]/ii,Ae[Ye])}else if(F.isInstancedMesh)te.renderInstances(se,me,F.count);else if(G.isInstancedBufferGeometry){const Lt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ae=Math.min(G.instanceCount,Lt);te.renderInstances(se,me,Ae)}else te.render(se,me)};function Qt(E,U,G){E.transparent===!0&&E.side===Pe&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,ws(E,U,G),E.side=Gi,E.needsUpdate=!0,ws(E,U,G),E.side=Pe):ws(E,U,G)}this.compile=function(E,U,G=null){G===null&&(G=E),p=$t.get(G),p.init(U),y.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),E!==G&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const W=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let gt=0;gt<ot.length;gt++){const Et=ot[gt];Qt(Et,G,F),W.add(Et)}else Qt(ot,G,F),W.add(ot)}),y.pop(),p=null,W},this.compileAsync=function(E,U,G=null){const W=this.compile(E,U,G);return new Promise(F=>{function ot(){if(W.forEach(function(gt){xt.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){F(E);return}setTimeout(ot,10)}lt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let He=null;function vi(E){He&&He(E)}function Na(){Wi.stop()}function Fa(){Wi.start()}const Wi=new Lh;Wi.setAnimationLoop(vi),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(E){He=E,q.setAnimationLoop(E),E===null?Wi.stop():Wi.start()},q.addEventListener("sessionstart",Na),q.addEventListener("sessionend",Fa),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,U,b),p=$t.get(E,y.length),p.init(U),y.push(p),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),qt.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,Y=nt.init(this.clippingPlanes,tt),v=Mt.get(E,m.length),v.init(),m.push(v),q.enabled===!0&&q.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&Cr(ot,U,-1/0,_.sortObjects)}Cr(E,U,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(X,at),Yt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Yt&&zt.addToRenderList(v,E),this.info.render.frame++,Y===!0&&nt.beginShadows();const G=p.state.shadowsArray;wt.render(G,E,U),Y===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,F=v.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(F.length>0)for(let gt=0,Et=ot.length;gt<Et;gt++){const Rt=ot[gt];Oa(W,F,E,Rt)}Yt&&zt.render(E);for(let gt=0,Et=ot.length;gt<Et;gt++){const Rt=ot[gt];za(v,E,Rt,Rt.viewport)}}else F.length>0&&Oa(W,F,E,U),Yt&&zt.render(E),za(v,E,U);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(_,E,U),ae.resetDefaultState(),L=-1,O=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&nt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Cr(E,U,G,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){W&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const gt=K.update(E),Et=E.material;Et.visible&&v.push(E,gt,Et,G,Dt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){const gt=K.update(E),Et=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Et)){const Rt=gt.groups;for(let Nt=0,Ft=Rt.length;Nt<Ft;Nt++){const Ct=Rt[Nt],se=Et[Ct.materialIndex];se&&se.visible&&v.push(E,gt,se,G,Dt.z,Ct)}}else Et.visible&&v.push(E,gt,Et,G,Dt.z,null)}}const ot=E.children;for(let gt=0,Et=ot.length;gt<Et;gt++)Cr(ot[gt],U,G,W)}function za(E,U,G,W){const F=E.opaque,ot=E.transmissive,gt=E.transparent;p.setupLightsView(G),Y===!0&&nt.setGlobalState(_.clippingPlanes,G),W&&ut.viewport(x.copy(W)),F.length>0&&Ms(F,U,G),ot.length>0&&Ms(ot,U,G),gt.length>0&&Ms(gt,U,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Oa(E,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new hn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?_s:Ri,minFilter:on,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const ot=p.state.transmissionRenderTarget[W.id],gt=W.viewport||x;ot.setSize(gt.z,gt.w);const Et=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(B),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),Yt&&zt.render(G);const Rt=_.toneMapping;_.toneMapping=Bi;const Nt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Y===!0&&nt.setGlobalState(_.clippingPlanes,W),Ms(E,G,W),R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,se=U.length;Ct<se;Ct++){const he=U[Ct],me=he.object,qe=he.geometry,te=he.material,Lt=he.group;if(te.side===Pe&&me.layers.test(W.layers)){const Ae=te.side;te.side=ke,te.needsUpdate=!0,Ba(me,G,W,qe,te,Lt),te.side=Ae,te.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(ot),R.updateRenderTargetMipmap(ot))}_.setRenderTarget(Et),_.setClearColor(B,H),Nt!==void 0&&(W.viewport=Nt),_.toneMapping=Rt}function Ms(E,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=E.length;F<ot;F++){const gt=E[F],Et=gt.object,Rt=gt.geometry,Nt=W===null?gt.material:W,Ft=gt.group;Et.layers.test(G.layers)&&Ba(Et,U,G,Rt,Nt,Ft)}}function Ba(E,U,G,W,F,ot){E.onBeforeRender(_,U,G,W,F,ot),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,U,G,W,E,ot),F.transparent===!0&&F.side===Pe&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,_.renderBufferDirect(G,U,W,F,E,ot),F.side=Gi,F.needsUpdate=!0,_.renderBufferDirect(G,U,W,F,E,ot),F.side=Pe):_.renderBufferDirect(G,U,W,F,E,ot),E.onAfterRender(_,U,G,W,F,ot)}function ws(E,U,G){U.isScene!==!0&&(U=Gt);const W=xt.get(E),F=p.state.lights,ot=p.state.shadowsArray,gt=F.state.version,Et=At.getParameters(E,F.state,ot,U,G),Rt=At.getProgramCacheKey(Et);let Nt=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?k:w).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Jt),Nt=new Map,W.programs=Nt);let Ft=Nt.get(Rt);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===gt)return Ga(E,Et),Ft}else Et.uniforms=At.getUniforms(E),E.onBeforeCompile(Et,_),Ft=At.acquireProgram(Et,Rt),Nt.set(Rt,Ft),W.uniforms=Et.uniforms;const Ct=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=nt.uniform),Ga(E,Et),W.needsLights=Qh(E),W.lightsStateVersion=gt,W.needsLights&&(Ct.ambientLightColor.value=F.state.ambient,Ct.lightProbe.value=F.state.probe,Ct.directionalLights.value=F.state.directional,Ct.directionalLightShadows.value=F.state.directionalShadow,Ct.spotLights.value=F.state.spot,Ct.spotLightShadows.value=F.state.spotShadow,Ct.rectAreaLights.value=F.state.rectArea,Ct.ltc_1.value=F.state.rectAreaLTC1,Ct.ltc_2.value=F.state.rectAreaLTC2,Ct.pointLights.value=F.state.point,Ct.pointLightShadows.value=F.state.pointShadow,Ct.hemisphereLights.value=F.state.hemi,Ct.directionalShadowMap.value=F.state.directionalShadowMap,Ct.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ct.spotShadowMap.value=F.state.spotShadowMap,Ct.spotLightMatrix.value=F.state.spotLightMatrix,Ct.spotLightMap.value=F.state.spotLightMap,Ct.pointShadowMap.value=F.state.pointShadowMap,Ct.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function ka(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=pr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ga(E,U){const G=xt.get(E);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function Jh(E,U,G,W,F){U.isScene!==!0&&(U=Gt),R.resetTextureUnits();const ot=U.fog,gt=W.isMeshStandardMaterial?U.environment:null,Et=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Hi,Rt=(W.isMeshStandardMaterial?k:w).get(W.envMap||gt),Nt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ct=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let me=Bi;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(me=_.toneMapping);const qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=qe!==void 0?qe.length:0,Lt=xt.get(W),Ae=p.state.lights;if(Y===!0&&(tt===!0||E!==O)){const Ze=E===O&&W.id===L;nt.setState(W,E,Ze)}let ee=!1;W.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ae.state.version||Lt.outputColorSpace!==Et||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==Rt||W.fog===!0&&Lt.fog!==ot||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==nt.numPlanes||Lt.numIntersection!==nt.numIntersection)||Lt.vertexAlphas!==Nt||Lt.vertexTangents!==Ft||Lt.morphTargets!==Ct||Lt.morphNormals!==se||Lt.morphColors!==he||Lt.toneMapping!==me||Lt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Lt.__version=W.version);let ii=Lt.currentProgram;ee===!0&&(ii=ws(W,U,F));let pn=!1,Ye=!1,Pr=!1;const ve=ii.getUniforms(),Ci=Lt.uniforms;if(ut.useProgram(ii.program)&&(pn=!0,Ye=!0,Pr=!0),W.id!==L&&(L=W.id,Ye=!0),pn||O!==E){it.reverseDepthBuffer?(vt.copy(E.projectionMatrix),Vc(vt),Wc(vt),ve.setValue(P,"projectionMatrix",vt)):ve.setValue(P,"projectionMatrix",E.projectionMatrix),ve.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ze=ve.map.cameraPosition;Ze!==void 0&&Ze.setValue(P,Ut.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ve.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,Ye=!0,Pr=!0)}if(F.isSkinnedMesh){ve.setOptional(P,F,"bindMatrix"),ve.setOptional(P,F,"bindMatrixInverse");const Ze=F.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ve.setValue(P,"boneTexture",Ze.boneTexture,R))}F.isBatchedMesh&&(ve.setOptional(P,F,"batchingTexture"),ve.setValue(P,"batchingTexture",F._matricesTexture,R),ve.setOptional(P,F,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",F._indirectTexture,R),ve.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",F._colorsTexture,R));const Lr=G.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&Ot.update(F,G,ii),(Ye||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,ve.setValue(P,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ci.envMap.value=Rt,Ci.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Ci.envMapIntensity.value=U.environmentIntensity),Ye&&(ve.setValue(P,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&Zh(Ci,Pr),ot&&W.fog===!0&&dt.refreshFogUniforms(Ci,ot),dt.refreshMaterialUniforms(Ci,W,j,N,p.state.transmissionRenderTarget[E.id]),pr.upload(P,ka(Lt),Ci,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(pr.upload(P,ka(Lt),Ci,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ve.setValue(P,"center",F.center),ve.setValue(P,"modelViewMatrix",F.modelViewMatrix),ve.setValue(P,"normalMatrix",F.normalMatrix),ve.setValue(P,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let Ir=0,tc=Ze.length;Ir<tc;Ir++){const Ha=Ze[Ir];D.update(Ha,ii),D.bind(Ha,ii)}}return ii}function Zh(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Qh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,U,G){xt.get(E.texture).__webglTexture=U,xt.get(E.depthTexture).__webglTexture=G;const W=xt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const G=xt.get(E);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,G=0){b=E,C=U,T=G;let W=!0,F=null,ot=!1,gt=!1;if(E){const Rt=xt.get(E);if(Rt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Rt.__hasExternalTextures)R.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ct=E.depthTexture;if(Rt.__boundDepthTexture!==Ct){if(Ct!==null&&xt.has(Ct)&&(E.width!==Ct.image.width||E.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(gt=!0);const Ft=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?F=Ft[U][G]:F=Ft[U],ot=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[G]:F=Ft,x.copy(E.viewport),S.copy(E.scissor),z=E.scissorTest}else x.copy(rt).multiplyScalar(j).floor(),S.copy(pt).multiplyScalar(j).floor(),z=Bt;if(ut.bindFramebuffer(P.FRAMEBUFFER,F)&&W&&ut.drawBuffers(E,F),ut.viewport(x),ut.scissor(S),ut.setScissorTest(z),ot){const Rt=xt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,G)}else if(gt){const Rt=xt.get(E.texture),Nt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Nt)}L=-1},this.readRenderTargetPixels=function(E,U,G,W,F,ot,gt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){ut.bindFramebuffer(P.FRAMEBUFFER,Et);try{const Rt=E.texture,Nt=Rt.format,Ft=Rt.type;if(!it.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&G>=0&&G<=E.height-F&&P.readPixels(U,G,W,F,Ht.convert(Nt),Ht.convert(Ft),ot)}finally{const Rt=b!==null?xt.get(b).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,U,G,W,F,ot,gt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(Et=Et[gt]),Et){const Rt=E.texture,Nt=Rt.format,Ft=Rt.type;if(!it.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-W&&G>=0&&G<=E.height-F){ut.bindFramebuffer(P.FRAMEBUFFER,Et);const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,ot.byteLength,P.STREAM_READ),P.readPixels(U,G,W,F,Ht.convert(Nt),Ht.convert(Ft),0);const se=b!==null?xt.get(b).__webglFramebuffer:null;ut.bindFramebuffer(P.FRAMEBUFFER,se);const he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hc(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ot),P.deleteBuffer(Ct),P.deleteSync(he),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,G=0){E.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(E.image.width*W),ot=Math.floor(E.image.height*W),gt=U!==null?U.x:0,Et=U!==null?U.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,gt,Et,F,ot),ut.unbindTexture()},this.copyTextureToTexture=function(E,U,G=null,W=null,F=0){E.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,G=null);let ot,gt,Et,Rt,Nt,Ft;G!==null?(ot=G.max.x-G.min.x,gt=G.max.y-G.min.y,Et=G.min.x,Rt=G.min.y):(ot=E.image.width,gt=E.image.height,Et=0,Rt=0),W!==null?(Nt=W.x,Ft=W.y):(Nt=0,Ft=0);const Ct=Ht.convert(U.format),se=Ht.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const he=P.getParameter(P.UNPACK_ROW_LENGTH),me=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=P.getParameter(P.UNPACK_SKIP_PIXELS),te=P.getParameter(P.UNPACK_SKIP_ROWS),Lt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ae=E.isCompressedTexture?E.mipmaps[F]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Et),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Nt,Ft,ot,gt,Ct,se,Ae.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Nt,Ft,Ae.width,Ae.height,Ct,Ae.data):P.texSubImage2D(P.TEXTURE_2D,F,Nt,Ft,ot,gt,Ct,se,Ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,he),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,U,G=null,W=null,F=0){E.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let ot,gt,Et,Rt,Nt,Ft,Ct,se,he;const me=E.isCompressedTexture?E.mipmaps[F]:E.image;G!==null?(ot=G.max.x-G.min.x,gt=G.max.y-G.min.y,Et=G.max.z-G.min.z,Rt=G.min.x,Nt=G.min.y,Ft=G.min.z):(ot=me.width,gt=me.height,Et=me.depth,Rt=0,Nt=0,Ft=0),W!==null?(Ct=W.x,se=W.y,he=W.z):(Ct=0,se=0,he=0);const qe=Ht.convert(U.format),te=Ht.convert(U.type);let Lt;if(U.isData3DTexture)R.setTexture3D(U,0),Lt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Lt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ae=P.getParameter(P.UNPACK_ROW_LENGTH),ee=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ii=P.getParameter(P.UNPACK_SKIP_PIXELS),pn=P.getParameter(P.UNPACK_SKIP_ROWS),Ye=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Nt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ft),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Lt,F,Ct,se,he,ot,gt,Et,qe,te,me.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,F,Ct,se,he,ot,gt,Et,qe,me.data):P.texSubImage3D(Lt,F,Ct,se,he,ot,gt,Et,qe,te,me),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ii),P.pixelStorei(P.UNPACK_SKIP_ROWS,pn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye),F===0&&U.generateMipmaps&&P.generateMipmap(Lt),ut.unbindTexture()},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){C=0,T=0,b=null,ut.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ma?"display-p3":"srgb",e.unpackColorSpace=ie.workingColorSpace===Er?"display-p3":"srgb"}}class Ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class i0 extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class n0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sa,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new A;class yr{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ci(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ci(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ci(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ci(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ci(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),n=oe(n,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ar extends Vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Cn;const ts=new A,Pn=new A,Ln=new A,In=new st,es=new st,Oh=new re,Ws=new A,is=new A,Xs=new A,Nl=new st,ho=new st,Fl=new st;class Mr extends ne{constructor(t=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",Cn===void 0){Cn=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new n0(e,5);Cn.setIndex([0,1,2,0,2,3]),Cn.setAttribute("position",new yr(i,3,0,!1)),Cn.setAttribute("uv",new yr(i,2,3,!1))}this.geometry=Cn,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pn.setFromMatrixScale(this.matrixWorld),Oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ln.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pn.multiplyScalar(-Ln.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const o=this.center;qs(Ws.set(-.5,-.5,0),Ln,o,Pn,n,s),qs(is.set(.5,-.5,0),Ln,o,Pn,n,s),qs(Xs.set(.5,.5,0),Ln,o,Pn,n,s),Nl.set(0,0),ho.set(1,0),Fl.set(1,1);let a=t.ray.intersectTriangle(Ws,is,Xs,!1,ts);if(a===null&&(qs(is.set(-.5,.5,0),Ln,o,Pn,n,s),ho.set(0,1),a=t.ray.intersectTriangle(Ws,Xs,is,!1,ts),a===null))return;const l=t.ray.origin.distanceTo(ts);l<t.near||l>t.far||e.push({distance:l,point:ts.clone(),uv:Je.getInterpolation(ts,Ws,is,Xs,Nl,ho,Fl,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qs(r,t,e,i,n,s){In.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(es.x=s*In.x-n*In.y,es.y=n*In.x+s*In.y):es.copy(In),r.copy(t),r.x+=es.x,r.y+=es.y,r.applyMatrix4(Oh)}class s0 extends Ne{constructor(t=null,e=1,i=1,n,s,o,a,l,h=Xe,c=Xe,d,u){super(null,o,a,l,h,c,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zl extends Te{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Dn=new re,Ol=new re,Ys=[],Bl=new un,r0=new re,ns=new I,ss=new dn;class Ji extends I{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,r0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),Bl.copy(t.boundingBox).applyMatrix4(Dn),this.boundingBox.union(Bl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Dn),ss.copy(t.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(i),t.ray.intersectsSphere(ss)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Dn),Ol.multiplyMatrices(i,Dn),ns.matrixWorld=Ol,ns.raycast(t,Ys);for(let o=0,a=Ys.length;o<a;o++){const l=Ys[o];l.instanceId=s,l.object=this,e.push(l)}Ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new s0(new Float32Array(n*this.count),n,this.count,va,ui));const s=this.morphTexture.source.data.data;let o=0;for(let h=0;h<i.length;h++)o+=i[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bh extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wr=new A,Sr=new A,kl=new re,rs=new wa,js=new dn,co=new A,Gl=new A;class o0 extends ne{constructor(t=new pe,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)wr.fromBufferAttribute(e,n-1),Sr.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=wr.distanceTo(Sr);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(n),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;kl.copy(n).invert(),rs.copy(t.ray).applyMatrix4(kl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=h){const m=c.getX(v),y=c.getX(v+1),_=$s(this,t,rs,l,m,y);_&&e.push(_)}if(this.isLineLoop){const v=c.getX(g-1),p=c.getX(f),m=$s(this,t,rs,l,v,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=h){const m=$s(this,t,rs,l,v,v+1);m&&e.push(m)}if(this.isLineLoop){const v=$s(this,t,rs,l,g-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $s(r,t,e,i,n,s){const o=r.geometry.attributes.position;if(wr.fromBufferAttribute(o,n),Sr.fromBufferAttribute(o,s),e.distanceSqToSegment(wr,Sr,co,Gl)>i)return;co.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(co);if(!(l<t.near||l>t.far))return{distance:l,point:Gl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Hl=new A,Vl=new A;class a0 extends o0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)Hl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Hl.distanceTo(Vl);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class l0 extends Vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wl=new re,aa=new wa,Ks=new dn,Js=new A;class h0 extends ne{constructor(t=new pe,e=new l0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(n),Ks.radius+=s,t.ray.intersectsSphere(Ks)===!1)return;Wl.copy(n).invert(),aa.copy(t.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const p=h.getX(g);Js.fromBufferAttribute(d,p),Xl(Js,p,l,n,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)Js.fromBufferAttribute(d,g),Xl(Js,g,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xl(r,t,e,i,n,s,o){const a=aa.distanceSqToPoint(r);if(a<e){const l=new A;aa.closestPointToPoint(r,l),l.applyMatrix4(i);const h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class la extends Ne{constructor(t,e,i,n,s,o,a,l,h){super(t,e,i,n,s,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);const c=i[n],u=i[n+1]-c,f=(o-c)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new st:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new A,n=[],s=[],o=[],a=new A,l=new re;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new A)}s[0]=new A,o[0]=new A;let h=Number.MAX_VALUE;const c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(Ce(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ta extends gi{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class c0 extends Ta{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Aa(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){n(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,c,d){let u=(o-s)/h-(a-s)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,n(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+i*a}}}const Zs=new A,uo=new Aa,fo=new Aa,po=new Aa;class kh extends gi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new A){const i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,c;this.closed||a>0?h=n[(a-1)%s]:(Zs.subVectors(n[0],n[1]).add(n[0]),h=Zs);const d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?c=n[(a+2)%s]:(Zs.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Zs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(c),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),uo.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,g,v,p),fo.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,g,v,p),po.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,g,v,p)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),fo.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),po.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(uo.calc(l),fo.calc(l),po.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new A().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(r,t,e,i,n){const s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function u0(r,t){const e=1-r;return e*e*t}function d0(r,t){return 2*(1-r)*r*t}function f0(r,t){return r*r*t}function ls(r,t,e,i){return u0(r,t)+d0(r,e)+f0(r,i)}function p0(r,t){const e=1-r;return e*e*e*t}function m0(r,t){const e=1-r;return 3*e*e*r*t}function g0(r,t){return 3*(1-r)*r*r*t}function v0(r,t){return r*r*r*t}function hs(r,t,e,i,n){return p0(r,t)+m0(r,e)+g0(r,i)+v0(r,n)}class Gh extends gi{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(t,n.x,s.x,o.x,a.x),hs(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x0 extends gi{constructor(t=new A,e=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new A){const i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(hs(t,n.x,s.x,o.x,a.x),hs(t,n.y,s.y,o.y,a.y),hs(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends gi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _0 extends gi{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends gi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ls(t,n.x,s.x,o.x),ls(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends gi{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){const i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ls(t,n.x,s.x,o.x),ls(t,n.y,s.y,o.y),ls(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(ql(a,l.x,h.x,c.x,d.x),ql(a,l.y,h.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:c0,CatmullRomCurve3:kh,CubicBezierCurve:Gh,CubicBezierCurve3:x0,EllipseCurve:Ta,LineCurve:Hh,LineCurve3:_0,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:y0,SplineCurve:Wh});class M0 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const o=n[s]-i,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new ha[n.type]().fromJSON(n))}return this}}class ca extends M0{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Hh(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const s=new Vh(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){const a=new Gh(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Wh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,s,o,a,l),this}absellipse(t,e,i,n,s,o,a,l){const h=new Ta(t,e,i,n,s,o,a,l);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ra extends pe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Ce(n,0,Math.PI*2);const s=[],o=[],a=[],l=[],h=[],c=1/e,d=new A,u=new st,f=new A,g=new A,v=new A;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=e;y++){const _=i+y*c*n,M=Math.sin(_),C=Math.cos(_);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*C,o.push(d.x,d.y,d.z),u.x=y/e,u.y=T/(t.length-1),a.push(u.x,u.y);const b=l[3*T+0]*M,L=l[3*T+1],O=l[3*T+0]*C;h.push(b,L,O)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){const M=_+y*t.length,C=M,T=M+t.length,b=M+t.length+1,L=M+1;s.push(C,T,L),s.push(b,L,T)}this.setIndex(s),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(a,2)),this.setAttribute("normal",new jt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.points,t.segments,t.phiStart,t.phiLength)}}class Ca extends Ra{constructor(t=1,e=1,i=4,n=8){const s=new ca;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Ca(t.radius,t.length,t.capSegments,t.radialSegments)}}class Pa extends pe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const s=[],o=[],a=[],l=[],h=new A,c=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends pe{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const h=this;n=Math.floor(n),s=Math.floor(s);const c=[],d=[],u=[],f=[];let g=0;const v=[],p=i/2;let m=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function y(){const M=new A,C=new A;let T=0;const b=(e-t)/i;for(let L=0;L<=s;L++){const O=[],x=L/s,S=x*(e-t)+t;for(let z=0;z<=n;z++){const B=z/n,H=B*l+a,V=Math.sin(H),N=Math.cos(H);C.x=S*V,C.y=-x*i+p,C.z=S*N,d.push(C.x,C.y,C.z),M.set(V,b,N).normalize(),u.push(M.x,M.y,M.z),f.push(B,1-x),O.push(g++)}v.push(O)}for(let L=0;L<n;L++)for(let O=0;O<s;O++){const x=v[O][L],S=v[O+1][L],z=v[O+1][L+1],B=v[O][L+1];t>0&&(c.push(x,S,B),T+=3),e>0&&(c.push(S,z,B),T+=3)}h.addGroup(m,T,0),m+=T}function _(M){const C=g,T=new st,b=new A;let L=0;const O=M===!0?t:e,x=M===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,p*x,0),u.push(0,x,0),f.push(.5,.5),g++;const S=g;for(let z=0;z<=n;z++){const H=z/n*l+a,V=Math.cos(H),N=Math.sin(H);b.x=O*N,b.y=p*x,b.z=O*V,d.push(b.x,b.y,b.z),u.push(0,x,0),T.x=V*.5+.5,T.y=N*.5*x+.5,f.push(T.x,T.y),g++}for(let z=0;z<n;z++){const B=C+z,H=S+z;M===!0?c.push(H,H+1,B):c.push(H+1,H,B),L+=3}h.addGroup(m,L,M===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ai extends Xt{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ai(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends pe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],o=[];a(n),h(i),c(),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(s.slice(),3)),this.setAttribute("uv",new jt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const _=new A,M=new A,C=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],_),f(e[T+1],M),f(e[T+2],C),l(_,M,C,y)}function l(y,_,M,C){const T=C+1,b=[];for(let L=0;L<=T;L++){b[L]=[];const O=y.clone().lerp(M,L/T),x=_.clone().lerp(M,L/T),S=T-L;for(let z=0;z<=S;z++)z===0&&L===T?b[L][z]=O:b[L][z]=O.clone().lerp(x,z/S)}for(let L=0;L<T;L++)for(let O=0;O<2*(T-L)-1;O++){const x=Math.floor(O/2);O%2===0?(u(b[L][x+1]),u(b[L+1][x]),u(b[L][x])):(u(b[L][x+1]),u(b[L+1][x+1]),u(b[L+1][x]))}}function h(y){const _=new A;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(y),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function c(){const y=new A;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];const M=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(M,1-C)}g(),d()}function d(){for(let y=0;y<o.length;y+=6){const _=o[y+0],M=o[y+2],C=o[y+4],T=Math.max(_,M,C),b=Math.min(_,M,C);T>.9&&b<.1&&(_<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function f(y,_){const M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const y=new A,_=new A,M=new A,C=new A,T=new st,b=new st,L=new st;for(let O=0,x=0;O<s.length;O+=9,x+=6){y.set(s[O+0],s[O+1],s[O+2]),_.set(s[O+3],s[O+4],s[O+5]),M.set(s[O+6],s[O+7],s[O+8]),T.set(o[x+0],o[x+1]),b.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),C.copy(y).add(_).add(M).divideScalar(3);const S=p(C);v(T,x+0,y,S),v(b,x+2,_,S),v(L,x+4,M,S)}}function v(y,_,M,C){C<0&&y.x===1&&(o[_]=y.x-1),M.x===0&&M.z===0&&(o[_]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.vertices,t.indices,t.radius,t.details)}}class La extends jn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}const Qs=new A,tr=new A,mo=new A,er=new Je;class w0 extends pe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const n=Math.pow(10,4),s=Math.cos(dr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){o?(h[0]=o.getX(g),h[1]=o.getX(g+1),h[2]=o.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:v,b:p,c:m}=er;if(v.fromBufferAttribute(a,h[0]),p.fromBufferAttribute(a,h[1]),m.fromBufferAttribute(a,h[2]),er.getNormal(mo),d[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,d[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let y=0;y<3;y++){const _=(y+1)%3,M=d[y],C=d[_],T=er[c[y]],b=er[c[_]],L=`${M}_${C}`,O=`${C}_${M}`;O in u&&u[O]?(mo.dot(u[O].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(b.x,b.y,b.z)),u[O]=null):L in u||(u[L]={index0:h[y],index1:h[_],normal:mo.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:p}=u[g];Qs.fromBufferAttribute(a,v),tr.fromBufferAttribute(a,p),f.push(Qs.x,Qs.y,Qs.z),f.push(tr.x,tr.y,tr.z)}this.setAttribute("position",new jt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Xh extends ca{constructor(t){super(t),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new ca().fromJSON(n))}return this}}const S0={triangulate:function(r,t,e=2){const i=t&&t.length,n=i?t[0]*e:r.length;let s=qh(r,0,n,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,h,c,d,u,f;if(i&&(s=R0(r,t,s,e)),r.length>80*e){a=h=r[0],l=c=r[1];for(let g=e;g<n;g+=e)d=r[g],u=r[g+1],d<a&&(a=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return fs(s,o,e,a,l,f,0),o}};function qh(r,t,e,i,n){let s,o;if(n===B0(r,t,e,i)>0)for(s=t;s<e;s+=i)o=Yl(s,r[s],r[s+1],o);else for(s=e-i;s>=t;s-=i)o=Yl(s,r[s],r[s+1],o);return o&&Rr(o,o.next)&&(ms(o),o=o.next),o}function cn(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Rr(e,e.next)||fe(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function fs(r,t,e,i,n,s,o){if(!r)return;!o&&s&&D0(r,i,n,s);let a=r,l,h;for(;r.prev!==r.next;){if(l=r.prev,h=r.next,s?E0(r,i,n,s):b0(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(h.i/e|0),ms(r),r=h.next,a=h.next;continue}if(r=h,r===a){o?o===1?(r=T0(cn(r),t,e),fs(r,t,e,i,n,s,2)):o===2&&A0(r,t,e,i,n,s):fs(cn(r),t,e,i,n,s,1);break}}}function b0(r){const t=r.prev,e=r,i=r.next;if(fe(t,e,i)>=0)return!1;const n=t.x,s=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=n<s?n<o?n:o:s<o?s:o,d=a<l?a<h?a:h:l<h?l:h,u=n>s?n>o?n:o:s>o?s:o,f=a>l?a>h?a:h:l>h?l:h;let g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=f&&zn(n,a,s,l,o,h,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E0(r,t,e,i){const n=r.prev,s=r,o=r.next;if(fe(n,s,o)>=0)return!1;const a=n.x,l=s.x,h=o.x,c=n.y,d=s.y,u=o.y,f=a<l?a<h?a:h:l<h?l:h,g=c<d?c<u?c:u:d<u?d:u,v=a>l?a>h?a:h:l>h?l:h,p=c>d?c>u?c:u:d>u?d:u,m=ua(f,g,t,e,i),y=ua(v,p,t,e,i);let _=r.prevZ,M=r.nextZ;for(;_&&_.z>=m&&M&&M.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&zn(a,c,l,d,h,u,_.x,_.y)&&fe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&zn(a,c,l,d,h,u,M.x,M.y)&&fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=p&&_!==n&&_!==o&&zn(a,c,l,d,h,u,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==o&&zn(a,c,l,d,h,u,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function T0(r,t,e){let i=r;do{const n=i.prev,s=i.next.next;!Rr(n,s)&&Yh(n,i,i.next,s)&&ps(n,s)&&ps(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),ms(i),ms(i.next),i=r=s),i=i.next}while(i!==r);return cn(i)}function A0(r,t,e,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F0(o,a)){let l=jh(o,a);o=cn(o,o.next),l=cn(l,l.next),fs(o,t,e,i,n,s,0),fs(l,t,e,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function R0(r,t,e,i){const n=[];let s,o,a,l,h;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:r.length,h=qh(r,a,l,i,!1),h===h.next&&(h.steiner=!0),n.push(N0(h));for(n.sort(C0),s=0;s<n.length;s++)e=P0(n[s],e);return e}function C0(r,t){return r.x-t.x}function P0(r,t){const e=L0(r,t);if(!e)return t;const i=jh(e,r);return cn(i,i.next),cn(e,e.next)}function L0(r,t){let e=t,i=-1/0,n;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>i&&(i=u,n=e.x<e.next.x?e:e.next,u===s))return n}e=e.next}while(e!==t);if(!n)return null;const a=n,l=n.x,h=n.y;let c=1/0,d;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&zn(o<h?s:i,o,l,h,o<h?i:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),ps(e,r)&&(d<c||d===c&&(e.x>n.x||e.x===n.x&&I0(n,e)))&&(n=e,c=d)),e=e.next;while(e!==a);return n}function I0(r,t){return fe(r.prev,r,t.prev)<0&&fe(t.next,r,r.next)<0}function D0(r,t,e,i){let n=r;do n.z===0&&(n.z=ua(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,U0(n)}function U0(r){let t,e,i,n,s,o,a,l,h=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,h*=2}while(o>1);return r}function ua(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function N0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function zn(r,t,e,i,n,s,o,a){return(n-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(n-o)*(i-a)}function F0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!z0(r,t)&&(ps(r,t)&&ps(t,r)&&O0(r,t)&&(fe(r.prev,r,t.prev)||fe(r,t.prev,t))||Rr(r,t)&&fe(r.prev,r,r.next)>0&&fe(t.prev,t,t.next)>0)}function fe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Rr(r,t){return r.x===t.x&&r.y===t.y}function Yh(r,t,e,i){const n=nr(fe(r,t,e)),s=nr(fe(r,t,i)),o=nr(fe(e,i,r)),a=nr(fe(e,i,t));return!!(n!==s&&o!==a||n===0&&ir(r,e,t)||s===0&&ir(r,i,t)||o===0&&ir(e,r,i)||a===0&&ir(e,t,i))}function ir(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function nr(r){return r>0?1:r<0?-1:0}function z0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ps(r,t){return fe(r.prev,r,r.next)<0?fe(r,t,r.next)>=0&&fe(r,r.prev,t)>=0:fe(r,t,r.prev)<0||fe(r,r.next,t)<0}function O0(r,t){let e=r,i=!1;const n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function jh(r,t){const e=new da(r.i,r.x,r.y),i=new da(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Yl(r,t,e,i){const n=new da(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ms(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function da(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B0(r,t,e,i){let n=0;for(let s=t,o=e-i;s<e;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}class cs{static area(t){const e=t.length;let i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return cs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],s=[];jl(t),$l(i,t);let o=t.length;e.forEach(jl);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,$l(i,e[l]);const a=S0.triangulate(i,n);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function jl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $l(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Ia extends pe{constructor(t=new Xh([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],s=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new jt(n,3)),this.setAttribute("uv",new jt(s,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:k0;let _,M=!1,C,T,b,L;m&&(_=m.getSpacedPoints(c),M=!0,u=!1,C=m.computeFrenetFrames(c,!1),T=new A,b=new A,L=new A),u||(p=0,f=0,g=0,v=0);const O=a.extractPoints(h);let x=O.shape;const S=O.holes;if(!cs.isClockWise(x)){x=x.reverse();for(let J=0,P=S.length;J<P;J++){const ct=S[J];cs.isClockWise(ct)&&(S[J]=ct.reverse())}}const B=cs.triangulateShape(x,S),H=x;for(let J=0,P=S.length;J<P;J++){const ct=S[J];x=x.concat(ct)}function V(J,P,ct){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(P,ct)}const N=x.length,j=B.length;function X(J,P,ct){let lt,it,ut;const Pt=J.x-P.x,xt=J.y-P.y,R=ct.x-J.x,w=ct.y-J.y,k=Pt*Pt+xt*xt,$=Pt*w-xt*R;if(Math.abs($)>Number.EPSILON){const Z=Math.sqrt(k),K=Math.sqrt(R*R+w*w),At=P.x-xt/Z,dt=P.y+Pt/Z,Mt=ct.x-w/K,$t=ct.y+R/K,nt=((Mt-At)*w-($t-dt)*R)/(Pt*w-xt*R);lt=At+Pt*nt-J.x,it=dt+xt*nt-J.y;const wt=lt*lt+it*it;if(wt<=2)return new st(lt,it);ut=Math.sqrt(wt/2)}else{let Z=!1;Pt>Number.EPSILON?R>Number.EPSILON&&(Z=!0):Pt<-Number.EPSILON?R<-Number.EPSILON&&(Z=!0):Math.sign(xt)===Math.sign(w)&&(Z=!0),Z?(lt=-xt,it=Pt,ut=Math.sqrt(k)):(lt=Pt,it=xt,ut=Math.sqrt(k/2))}return new st(lt/ut,it/ut)}const at=[];for(let J=0,P=H.length,ct=P-1,lt=J+1;J<P;J++,ct++,lt++)ct===P&&(ct=0),lt===P&&(lt=0),at[J]=X(H[J],H[ct],H[lt]);const rt=[];let pt,Bt=at.concat();for(let J=0,P=S.length;J<P;J++){const ct=S[J];pt=[];for(let lt=0,it=ct.length,ut=it-1,Pt=lt+1;lt<it;lt++,ut++,Pt++)ut===it&&(ut=0),Pt===it&&(Pt=0),pt[lt]=X(ct[lt],ct[ut],ct[Pt]);rt.push(pt),Bt=Bt.concat(pt)}for(let J=0;J<p;J++){const P=J/p,ct=f*Math.cos(P*Math.PI/2),lt=g*Math.sin(P*Math.PI/2)+v;for(let it=0,ut=H.length;it<ut;it++){const Pt=V(H[it],at[it],lt);ht(Pt.x,Pt.y,-ct)}for(let it=0,ut=S.length;it<ut;it++){const Pt=S[it];pt=rt[it];for(let xt=0,R=Pt.length;xt<R;xt++){const w=V(Pt[xt],pt[xt],lt);ht(w.x,w.y,-ct)}}}const qt=g+v;for(let J=0;J<N;J++){const P=u?V(x[J],Bt[J],qt):x[J];M?(b.copy(C.normals[0]).multiplyScalar(P.x),T.copy(C.binormals[0]).multiplyScalar(P.y),L.copy(_[0]).add(b).add(T),ht(L.x,L.y,L.z)):ht(P.x,P.y,0)}for(let J=1;J<=c;J++)for(let P=0;P<N;P++){const ct=u?V(x[P],Bt[P],qt):x[P];M?(b.copy(C.normals[J]).multiplyScalar(ct.x),T.copy(C.binormals[J]).multiplyScalar(ct.y),L.copy(_[J]).add(b).add(T),ht(L.x,L.y,L.z)):ht(ct.x,ct.y,d/c*J)}for(let J=p-1;J>=0;J--){const P=J/p,ct=f*Math.cos(P*Math.PI/2),lt=g*Math.sin(P*Math.PI/2)+v;for(let it=0,ut=H.length;it<ut;it++){const Pt=V(H[it],at[it],lt);ht(Pt.x,Pt.y,d+ct)}for(let it=0,ut=S.length;it<ut;it++){const Pt=S[it];pt=rt[it];for(let xt=0,R=Pt.length;xt<R;xt++){const w=V(Pt[xt],pt[xt],lt);M?ht(w.x,w.y+_[c-1].y,_[c-1].x+ct):ht(w.x,w.y,d+ct)}}}Y(),tt();function Y(){const J=n.length/3;if(u){let P=0,ct=N*P;for(let lt=0;lt<j;lt++){const it=B[lt];Ut(it[2]+ct,it[1]+ct,it[0]+ct)}P=c+p*2,ct=N*P;for(let lt=0;lt<j;lt++){const it=B[lt];Ut(it[0]+ct,it[1]+ct,it[2]+ct)}}else{for(let P=0;P<j;P++){const ct=B[P];Ut(ct[2],ct[1],ct[0])}for(let P=0;P<j;P++){const ct=B[P];Ut(ct[0]+N*c,ct[1]+N*c,ct[2]+N*c)}}i.addGroup(J,n.length/3-J,0)}function tt(){const J=n.length/3;let P=0;vt(H,P),P+=H.length;for(let ct=0,lt=S.length;ct<lt;ct++){const it=S[ct];vt(it,P),P+=it.length}i.addGroup(J,n.length/3-J,1)}function vt(J,P){let ct=J.length;for(;--ct>=0;){const lt=ct;let it=ct-1;it<0&&(it=J.length-1);for(let ut=0,Pt=c+p*2;ut<Pt;ut++){const xt=N*ut,R=N*(ut+1),w=P+lt+xt,k=P+it+xt,$=P+it+R,Z=P+lt+R;Dt(w,k,$,Z)}}}function ht(J,P,ct){l.push(J),l.push(P),l.push(ct)}function Ut(J,P,ct){Gt(J),Gt(P),Gt(ct);const lt=n.length/3,it=y.generateTopUV(i,n,lt-3,lt-2,lt-1);Yt(it[0]),Yt(it[1]),Yt(it[2])}function Dt(J,P,ct,lt){Gt(J),Gt(P),Gt(lt),Gt(P),Gt(ct),Gt(lt);const it=n.length/3,ut=y.generateSideWallUV(i,n,it-6,it-3,it-2,it-1);Yt(ut[0]),Yt(ut[1]),Yt(ut[3]),Yt(ut[1]),Yt(ut[2]),Yt(ut[3])}function Gt(J){n.push(l[J*3+0]),n.push(l[J*3+1]),n.push(l[J*3+2])}function Yt(J){s.push(J.x),s.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return G0(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new ha[n.type]().fromJSON(n)),new Ia(i,t.options)}}const k0={generateTopUV:function(r,t,e,i,n){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[n*3],c=t[n*3+1];return[new st(s,o),new st(a,l),new st(h,c)]},generateSideWallUV:function(r,t,e,i,n,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],g=t[n*3+2],v=t[s*3],p=t[s*3+1],m=t[s*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new st(o,1-l),new st(h,1-d),new st(u,1-g),new st(v,1-m)]:[new st(a,1-l),new st(c,1-d),new st(f,1-g),new st(p,1-m)]}};function G0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class di extends jn{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new di(t.radius,t.detail)}}class gs extends jn{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}class vs extends pe{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],h=[],c=[];let d=t;const u=(e-t)/n,f=new A,g=new st;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const m=s+p/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,c.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const p=v*(i+1);for(let m=0;m<i;m++){const y=m+p,_=y,M=y+i+1,C=y+i+2,T=y+1;a.push(_,M,T),a.push(M,C,T)}}this.setIndex(a),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ki extends pe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const c=[],d=new A,u=new A,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const y=[],_=m/i;let M=0;m===0&&o===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const T=C/e;d.x=-t*Math.cos(n+T*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(n+T*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(T+M,1-_),y.push(h++)}c.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const _=c[m][y+1],M=c[m][y],C=c[m+1][y],T=c[m+1][y+1];(m!==0||o>0)&&f.push(_,M,T),(m!==i-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Da extends jn{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Da(t.radius,t.detail)}}class fi extends pe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const o=[],a=[],l=[],h=[],c=new A,d=new A,u=new A;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,p=f/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(v),d.y=(t+e*Math.cos(p))*Math.sin(v),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,m=(n+1)*(f-1)+g,y=(n+1)*f+g;o.push(v,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class It extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ua extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class H0 extends Ua{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const go=new re,Kl=new A,Jl=new A;class V0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class W0 extends V0{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zl extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DEFAULT_UP),this.updateMatrix(),this.target=new ne,this.shadow=new W0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class X0 extends Ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class q0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ql(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);function th(r,t=!1){const e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new pe;let h=0;for(let c=0;c<r.length;++c){const d=r[c];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+c);c+=r[u].attributes.position.count}l.setIndex(d)}for(const c in s){const d=eh(s[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(const c in o){const d=o[c][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[c].length;++v)f.push(o[c][v][u]);const g=eh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function eh(r){let t,e,i,n=-1,s=0;for(let h=0;h<r.length;++h){const c=r[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*e}const o=new t(s),a=new Te(o,e,i);let l=0;for(let h=0;h<r.length;++h){const c=r[h];if(c.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=c.count;u<f;u++)for(let g=0;g<e;g++){const v=c.getComponent(u,g);a.setComponent(u+d,g,v)}}else o.set(c.array,l);l+=c.count*e}return n!==void 0&&(a.gpuType=n),a}const Me=Math.PI*2,Zt=(r,t,e)=>Math.max(t,Math.min(e,r)),Ke=(r,t,e)=>r+(t-r)*e,Y0=(r,t,e)=>Zt((e-r)/(t-r),0,1),ye=(r,t,e)=>{const i=Y0(r,t,e);return i*i*(3-2*i)},kt=(r,t,e,i)=>Ke(r,t,1-Math.exp(-e*i)),xs=(r,t,e,i)=>{let n=((t-r+Math.PI)%Me+Me)%Me-Math.PI;return r+n*(1-Math.exp(-e*i))};function sn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function vo(r=1337){const t=sn(r),e=new Uint8Array(512),i=new Uint8Array(256);for(let a=0;a<256;a++)i[a]=a;for(let a=255;a>0;a--){const l=t()*(a+1)|0,h=i[a];i[a]=i[l],i[l]=h}for(let a=0;a<512;a++)e[a]=i[a&255];const n=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],s=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;return function(l,h){const c=(l+h)*s,d=Math.floor(l+c),u=Math.floor(h+c),f=(d+u)*o,g=l-(d-f),v=h-(u-f),p=g>v?1:0,m=g>v?0:1,y=g-p+o,_=v-m+o,M=g-1+2*o,C=v-1+2*o,T=d&255,b=u&255;let L=0,O=0,x=0,S=.5-g*g-v*v;if(S>0){const H=n[e[T+e[b]]&7];S*=S,L=S*S*(H[0]*g+H[1]*v)}let z=.5-y*y-_*_;if(z>0){const H=n[e[T+p+e[b+m]]&7];z*=z,O=z*z*(H[0]*y+H[1]*_)}let B=.5-M*M-C*C;if(B>0){const H=n[e[T+1+e[b+1]]&7];B*=B,x=B*B*(H[0]*M+H[1]*C)}return 70*(L+O+x)}}function Un(r,t,e,i=4,n=2,s=.5){let o=1,a=1,l=0,h=0;for(let c=0;c<i;c++)l+=r(t*a,e*a)*o,h+=o,o*=s,a*=n;return l/h}function de(r,t,e,i){const n=r-e,s=t-i;return Math.sqrt(n*n+s*s)}function j0(r,t,e,i,n,s){const o=n-e,a=s-i,l=r-e,h=t-i,c=o*o+a*a,d=Zt((l*o+h*a)/c,0,1);return{dist:de(r,t,e+o*d,i+a*d),t:d}}function $0(r){const t=Math.max(0,Math.floor(r)),e=Math.floor(t/60);return`${String(e).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function K0(r){return String(Math.max(0,Math.floor(r))).padStart(4,"0")}function fn(r=128,t="rgba(255,255,255,1)",e="rgba(255,255,255,0)"){const i=document.createElement("canvas");i.width=i.height=r;const n=i.getContext("2d"),s=n.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);s.addColorStop(0,t),s.addColorStop(.28,t.replace(/[\d.]+\)$/,"0.65)")),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,r,r);const o=new la(i);return o.colorSpace=We,o}function Ee(r,t,e=1){const i=new Ar({map:r,color:t,transparent:!0,blending:Le,depthWrite:!1,toneMapped:!1}),n=new Mr(i);return n.scale.setScalar(e),n}function xo(r,t,e=.12,i=0){r.onBeforeCompile=n=>{n.uniforms.uWindTime=t.time,n.uniforms.uWindStrength={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        uniform float uWindTime;
        uniform float uWindStrength;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          float windSeed = instanceMatrix[3][0] * 0.11 + instanceMatrix[3][2] * 0.07;
          float windHeight = max(0.0, transformed.y - ${i.toFixed(1)});
          float sway = sin(uWindTime * 1.15 + windSeed + windHeight * 0.45) * 0.65
                     + sin(uWindTime * 2.31 + windSeed * 1.7) * 0.35;
          transformed.x += sway * uWindStrength * windHeight;
          transformed.z += cos(uWindTime * 0.93 + windSeed) * uWindStrength * windHeight * 0.55;
        #endif`)},r.customProgramCacheKey=()=>`wind-${e}-${i}`}const ze=1600,J0=ze/2,Be=-4,Si=600,le=new A(0,0,320),Re=new A(10,0,-470),Z0=[{id:"repeater",name:"ION REPEATER",kind:"weapon",color:6484991,x:300,z:185,desc:"RAPID-FIRE ENERGON WEAPON ONLINE",blurb:"A tri-barrel ion repeater. Hold fire to shred Decepticon plating.",icon:"▹"},{id:"shield",name:"AEGIS SHIELD",kind:"ability",color:6271743,x:-310,z:120,desc:"HOLD Q TO PROJECT A HARD-LIGHT BARRIER",blurb:"A hard-light barrier that absorbs incoming fire while it drains energon.",icon:"◈"},{id:"jets",name:"JUMP JETS",kind:"ability",color:10354557,x:-320,z:-80,desc:"DOUBLE JUMP + AIR CONTROL ENABLED",blurb:"Ventral thrusters. Jump again in mid-air and steer while airborne.",icon:"▲"},{id:"mortar",name:"PLASMA MORTAR",kind:"weapon",color:16752719,x:330,z:-120,desc:"ARCING PLASMA SHELLS // SPLASH DAMAGE",blurb:"Lob explosive plasma shells into enemy clusters. Watch the arc.",icon:"◉"},{id:"emp",name:"EMP BURST",kind:"ability",color:12946687,x:-380,z:-260,desc:"PRESS E TO DISCHARGE A STUNNING SHOCKWAVE",blurb:"Discharge a radial electromagnetic pulse that stuns and damages nearby hostiles.",icon:"⌁"},{id:"overdrive",name:"OVERDRIVE CORE",kind:"ability",color:16765790,x:90,z:-300,desc:"VEHICLE BOOST + RAM PLATING ONLINE",blurb:"Overcharges your alternator. Boost harder and turn Decepticons into roadkill.",icon:"»"}],ih=[{name:"VERDANT BASIN",x:0,z:320,radius:190},{name:"SUNKEN RELAY",x:-310,z:120,radius:200},{name:"WHISPERING PINES",x:-320,z:-80,radius:230},{name:"EMBER RIDGE",x:330,z:-120,radius:220},{name:"FALLEN SPIRE",x:-380,z:-260,radius:190},{name:"TITAN'S REST",x:10,z:-440,radius:230}];new A;class Q0{constructor(t,e){this.scene=t,this.renderer=e,this.noise=vo(70513),this.noiseDetail=vo(99821),this.noisePatch=vo(31415),this.colliders=[],this.roadSamples=[],this.forestPoints=[],this.relicSites=[],this.elapsed=0,this.windUniforms={time:{value:0}},this.glowTexture=fn(128),this.waterUniforms=null,this.animated=[],this.relics=Z0.map(n=>({...n,pos:new A(n.x,0,n.z),y:0,collected:!1,marker:null}));for(const n of this.relics)n.y=this._rawHeight(n.x,n.z);this.bossY=this._rawHeight(Re.x,Re.z),Re.y=this.bossY;const i=this.heightAt(le.x,le.z);le.y=i,this.buildSky(),this.buildTerrain(),this.buildWater(),this.buildRoads(),this.buildForest(),this.buildGrass(),this.buildRocks(),this.buildSpawnSite(),this.buildShrines(),this.buildBossArena(),this.buildCrystals(),this.buildMapCanvas()}_rawHeight(t,e){let i=Un(this.noise,t*.0021,e*.0021,5)*105-18;i+=Un(this.noiseDetail,t*.0085+11,e*.0085-7,3)*12,i+=Un(this.noisePatch,t*.034,e*.034,2)*2.2;const n=de(t,e,400,-160);i+=58*Math.exp(-(n*n)/(2*150*150));const s=de(t,e,-310,120);i=Ke(i,-9.5,1-ye(62,195,s)),i=Ke(i,3.2,1-ye(0,43,s));const o=j0(t,e,-186,120,-276,120).dist;o<10&&(i=Math.max(i,-2.35-o*.05));const a=de(t,e,le.x,le.z);i=Ke(i,6.2,1-ye(38,125,a));const l=de(t,e,Re.x,Re.z);i=Ke(i,7.5,1-ye(48,155,l));const h=Math.sqrt(t*t+e*e),c=ye(Si+10,J0-20,h);return i+=c*c*175+c*35,i}heightAt(t,e){let i=this._rawHeight(t,e);for(const s of this.relics){const o=de(t,e,s.x,s.z);o<42&&(i=Ke(i,s.y,1-ye(14,42,o)))}const n=de(t,e,Re.x,Re.z);return n<160&&(i=Ke(i,this.bossY,1-ye(45,160,n))),i}slopeAt(t,e){const n=this.heightAt(t+1.4,e)-this.heightAt(t-1.4,e),s=this.heightAt(t,e+1.4)-this.heightAt(t,e-1.4);return Math.sqrt(n*n+s*s)/(2*1.4)}normalAt(t,e,i=new A){const s=this.heightAt(t+.8,e)-this.heightAt(t-.8,e),o=this.heightAt(t,e+.8)-this.heightAt(t,e-.8);return i.set(-s,2*.8,-o).normalize()}isWater(t,e){return this.heightAt(t,e)<Be+.15}regionAt(t,e){let i=ih[0],n=1/0;for(const s of ih){const o=de(t,e,s.x,s.z);o<s.radius&&o<n&&(i=s,n=o)}return i.name}addCollider(t,e,i,n=0,s=""){this.colliders.push({x:t,z:e,radius:i,y:n,tag:s})}resolve(t,e){let i=!1;const n=Si-2;if(Math.abs(t.x)>n||Math.abs(t.z)>n){const s=Math.sqrt(t.x*t.x+t.z*t.z);s>n&&(t.x=t.x/s*n,t.z=t.z/s*n,i="boundary")}for(const s of this.colliders){const o=t.x-s.x,a=t.z-s.z,l=s.radius+e,h=o*o+a*a;if(h<l*l&&h>1e-4){const c=Math.sqrt(h);t.x=s.x+o/c*l,t.z=s.z+a/c*l,i=!0}}return i}buildSky(){const t={uTop:{value:new St(2182776)},uHorizon:{value:new St(12179913)},uSunColor:{value:new St(16766624)},uSunDir:{value:new A(-.52,.38,-.76).normalize()},uTime:{value:0}};this.sunDir=t.uSunDir.value;const e=new li({uniforms:t,side:ke,depthWrite:!1,toneMapped:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTop;
        uniform vec3 uHorizon;
        uniform vec3 uSunColor;
        uniform vec3 uSunDir;
        uniform float uTime;
        varying vec3 vDir;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                     mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0; float a = 0.5;
          for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 13.7; a *= 0.5; }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float sky = pow(clamp(d.y, 0.0, 1.0), 0.55);
          vec3 col = mix(uHorizon, uTop, sky);
          col = mix(vec3(0.035, 0.065, 0.06), col, smoothstep(-0.28, 0.05, d.y));

          float sun = max(dot(d, normalize(uSunDir)), 0.0);
          col += uSunColor * pow(sun, 1200.0) * 2.2;
          col += uSunColor * pow(sun, 18.0) * 0.18;
          col += uSunColor * pow(sun, 4.0) * 0.045;

          vec2 uv = d.xz / (max(d.y, 0.02) + 0.22);
          float clouds = fbm(uv * 1.35 + vec2(uTime * 0.004, uTime * 0.0015));
          float mask = smoothstep(0.54, 0.78, clouds) * smoothstep(0.02, 0.22, d.y);
          col = mix(col, vec3(0.76, 0.82, 0.81), mask * 0.5);
          float high = fbm(uv * 2.9 - vec2(uTime * 0.006, 0.0));
          col = mix(col, vec3(0.9, 0.93, 0.9), smoothstep(0.68, 0.9, high) * smoothstep(0.12, 0.45, d.y) * 0.22);

          float band = smoothstep(0.0, 0.015, abs(mod(d.y * 38.0 + sin(d.x * 5.0) * 0.8, 1.0) - 0.5));
          col += vec3(0.02, 0.05, 0.05) * (1.0 - band) * smoothstep(0.1, 0.5, d.y);

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.skyUniforms=t,this.skyGroup=new Tt,this.skyGroup.renderOrder=-1e3;const i=new I(new ki(4200,40,24),e);i.frustumCulled=!1,this.skyGroup.add(i);const n=Ee(this.glowTexture,16770744,520);n.position.copy(this.sunDir).multiplyScalar(3400),n.material.opacity=.6,this.skyGroup.add(n);const s=Ee(this.glowTexture,16774880,160);s.position.copy(this.sunDir).multiplyScalar(3390),this.skyGroup.add(s),this.scene.add(this.skyGroup),this.scene.fog=new Ea(10468786,.00125)}buildTerrain(){const e=new mi(ze,ze,220,220);e.rotateX(-Math.PI/2);const i=e.attributes.position,n=new Float32Array(i.count*3),s=new St,o=new St(2902567),a=new St(4812083),l=new St(7241026),h=new St(2505250),c=new St(6712163),d=new St(4278853),u=new St(7301451),f=new St(3949104);for(let C=0;C<i.count;C++){const T=i.getX(C),b=i.getZ(C),L=this.heightAt(T,b);i.setY(C,L)}e.computeVertexNormals();const g=e.attributes.normal;for(let C=0;C<i.count;C++){const T=i.getX(C),b=i.getZ(C),L=i.getY(C),O=1-g.getY(C),x=Un(this.noisePatch,T*.015,b*.015,2),S=Un(this.noiseDetail,T*.11,b*.11,2),z=Math.sqrt(T*T+b*b);L<Be+2.2?s.copy(u).lerp(f,ye(Be-2,Be+1,L)):(s.copy(o).lerp(a,ye(-.35,.4,x)*.65+S*.18),s.lerp(l,ye(.3,.75,x)*.32),s.lerp(h,ye(.4,.9,S)*.2)),O>.28&&s.lerp(d,ye(.28,.62,O)*.75),O>.5&&s.lerp(c,ye(.5,.85,O)*.7),L>60&&s.lerp(c,ye(55,100,L)*.55),L>125&&s.lerp(new St(9212554),ye(120,170,L)*.7),z>Si+50&&s.lerp(d,ye(Si+50,Si+180,z)*.55);const B=.9+S*.12;n[C*3]=s.r*B,n[C*3+1]=s.g*B,n[C*3+2]=s.b*B}e.setAttribute("color",new Te(n,3));const v=document.createElement("canvas");v.width=v.height=256;const p=v.getContext("2d");p.fillStyle="#d8d8d8",p.fillRect(0,0,256,256);const m=p.getImageData(0,0,256,256);for(let C=0;C<m.data.length;C+=4){const T=198+Math.random()*57;m.data[C]=m.data[C+1]=m.data[C+2]=T,m.data[C+3]=255}p.putImageData(m,0,0);for(let C=0;C<900;C++){const T=120+Math.random()*120;p.fillStyle=`rgba(${T*.72},${T},${T*.6},${Math.random()*.24})`,p.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*3,1+Math.random()*3)}const y=new la(v);y.wrapS=y.wrapT=us,y.repeat.set(110,110),y.colorSpace=We,y.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());const _=new It({vertexColors:!0,roughness:.96,metalness:0,map:y}),M=new I(e,_);M.receiveShadow=!0,M.matrixAutoUpdate=!1,this.scene.add(M),this.terrain=M}buildWater(){const t=new mi(ze+200,ze+200,1,1);t.rotateX(-Math.PI/2);const e={uTime:{value:0},uDeep:{value:new St(734016)},uShallow:{value:new St(3112320)},uSky:{value:new St(11128516)},uSunDir:{value:this.sunDir.clone()},uSunColor:{value:new St(16769200)},uFogColor:{value:new St(10468786)}};this.waterUniforms=e;const i=new li({uniforms:e,transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:`
        uniform float uTime;
        varying vec3 vWorld;
        void main() {
          vec3 p = position;
          p.y += sin(p.x * 0.075 + uTime * 0.85) * 0.13
               + cos(p.z * 0.105 - uTime * 0.62) * 0.1
               + sin((p.x + p.z) * 0.21 + uTime * 1.6) * 0.035;
          vec4 world = modelMatrix * vec4(p, 1.0);
          vWorld = world.xyz;
          gl_Position = projectionMatrix * viewMatrix * world;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uDeep;
        uniform vec3 uShallow;
        uniform vec3 uSky;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform vec3 uFogColor;
        varying vec3 vWorld;

        void main() {
          float w1 = sin(vWorld.x * 0.075 + uTime * 0.85);
          float w2 = cos(vWorld.z * 0.105 - uTime * 0.62);
          float w3 = sin((vWorld.x + vWorld.z) * 0.21 + uTime * 1.6);
          vec3 n = normalize(vec3(-w1 * 0.075 * 0.9, 1.0, w2 * 0.105 * 0.8));
          vec3 view = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - max(dot(n, view), 0.0), 2.5);
          vec3 col = mix(uDeep, uShallow, 0.35 + w3 * 0.08);
          float spec = pow(max(dot(reflect(-normalize(uSunDir), n), view), 0.0), 90.0);
          col += uSunColor * spec * 1.15;
          col += uSunColor * pow(max(dot(n, normalize(uSunDir)), 0.0), 3.0) * 0.05;
          col = mix(col, uSky, fres * 0.62);
          float glint = smoothstep(0.965, 1.0, sin(vWorld.x * 0.55 + uTime * 1.4) * sin(vWorld.z * 0.49 - uTime * 1.1));
          col += glint * 0.09;
          float dist = distance(cameraPosition, vWorld);
          float fog = 1.0 - exp(-pow(dist * 0.00125, 2.0));
          col = mix(col, uFogColor, fog);
          gl_FragColor = vec4(col, 0.86);
        }
      `}),n=new I(t,i);n.position.y=Be,n.renderOrder=2,this.scene.add(n),this.water=n}buildRoads(){const t=[[0,360],[12,292],[-24,226],[-5,160],[34,96],[20,18],[-30,-58],[-12,-138],[38,-214],[28,-286],[12,-362],[8,-470]],e=[[-5,160],[-88,158],[-154,142],[-208,124]];this.makeRoad(t,9.5,!0),this.makeRoad(e,7,!1)}makeRoad(t,e,i){const n=new kh(t.map(([p,m])=>new A(p,0,m)),!1,"catmullrom",.35),s=260,o=[],a=[],l=[],h=[];new A(0,1,0);for(let p=0;p<=s;p++){const m=p/s,y=n.getPoint(m),_=n.getTangent(m),M=new A(-_.z,0,_.x).normalize();this.heightAt(y.x,y.z);const C=e*(.9+Math.sin(m*19.3)*.06);for(const T of[-1,1]){const b=y.x+M.x*C*.5*T,L=y.z+M.z*C*.5*T;o.push(b,this.heightAt(b,L)+.13,L),a.push(T<0?0:1,m*38)}if(h.push({x:y.x,z:y.z}),p<s){const T=p*2;l.push(T,T+2,T+1,T+1,T+2,T+3)}}const c=new pe;c.setAttribute("position",new jt(o,3)),c.setAttribute("uv",new jt(a,2)),c.setIndex(l),c.computeVertexNormals();const d=document.createElement("canvas");d.width=128,d.height=256;const u=d.getContext("2d");u.fillStyle="#5b4c39",u.fillRect(0,0,128,256);for(let p=0;p<1800;p++){const m=45+Math.random()*60;u.fillStyle=`rgba(${m+18},${m+8},${m-4},${.15+Math.random()*.3})`,u.fillRect(Math.random()*128,Math.random()*256,1+Math.random()*3,1+Math.random()*3)}for(const p of[38,90]){const m=u.createLinearGradient(p-8,0,p+8,0);m.addColorStop(0,"rgba(35,26,18,0)"),m.addColorStop(.5,"rgba(35,26,18,0.45)"),m.addColorStop(1,"rgba(35,26,18,0)"),u.fillStyle=m,u.fillRect(p-8,0,16,256)}for(let p=0;p<60;p++)u.fillStyle=`rgba(110,95,64,${Math.random()*.2})`,u.beginPath(),u.arc(Math.random()*128,Math.random()*256,2+Math.random()*4,0,Me),u.fill();const f=new la(d);f.wrapS=f.wrapT=us,f.colorSpace=We,f.anisotropy=4;const g=new It({map:f,roughness:1,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),v=new I(c,g);v.receiveShadow=!0,v.castShadow=i,this.scene.add(v),this.roadSamples.push(...h),this.roadMeshes=this.roadMeshes||[],this.roadMeshes.push(v)}isNearRoad(t,e,i=0){const n=7+i;for(const s of this.roadSamples){const o=t-s.x,a=e-s.z;if(o*o+a*a<n*n)return!0}return!1}isNearSite(t,e,i=18){for(const n of this.relics)if(de(t,e,n.x,n.z)<i)return!0;return de(t,e,Re.x,Re.z)<72}buildForest(){const t=sn(447711),e=[],i=[],n=9e3;for(let b=0;b<n&&e.length<1280;b++){const L=t()*Me,O=Math.sqrt(t())*(Si-25),x=Math.cos(L)*O,S=Math.sin(L)*O;if(this.isNearRoad(x,S,4)||this.isNearSite(x,S,20)||de(x,S,le.x,le.z)<34)continue;const z=this.heightAt(x,S);if(z<Be+1.6||this.slopeAt(x,S)>.62||Un(this.noisePatch,x*.005,S*.005,2)<-.25&&t()<.55)continue;const H=.78+t()*.8,V={x,z:S,y:z-.05,s:H,sy:H*(.9+t()*.25),rot:t()*Me,tilt:(t()-.5)*.08,color:new St().setHSL(.27+t()*.07,.32+t()*.2,.17+t()*.13)};if(t()<.26&&i.length<320?i.push(V):e.push(V),this.forestPoints.push({x,z:S}),e.length+i.length>=1540)break}const s=new ne,o=new Xt(.26,.48,5.2,6,1);o.translate(0,2.6,0);const a=new It({color:16777215,roughness:.95,metalness:0}),l=new Ji(o,a,e.length),h=new Ai(2.55,4.8,7);h.translate(0,5.4,0);const c=new Ai(2,4,7);c.translate(0,7.5,0);const d=new Ai(1.35,3.2,7);d.translate(0,9.2,0);const u=th([h,c,d]),f=new It({color:16777215,roughness:.88,metalness:0,flatShading:!0});xo(f,this.windUniforms,.012,4.2);const g=new Ji(u,f,e.length),v=new Xt(.3,.55,4.6,6,1);v.translate(0,2.3,0);const p=new Ji(v,a,i.length),m=new di(2.7,0);m.translate(0,6.1,0);const y=new di(2,0);y.translate(-1.7,7.2,.6);const _=new di(1.8,0);_.translate(1.6,7.6,-.4);const M=th([m,y,_]),C=new It({color:16777215,roughness:.9,metalness:0,flatShading:!0});xo(C,this.windUniforms,.011,4);const T=new Ji(M,C,i.length);e.forEach((b,L)=>{s.position.set(b.x,b.y,b.z),s.rotation.set(b.tilt,b.rot,b.tilt*.6),s.scale.set(b.s,b.sy,b.s),s.updateMatrix(),l.setMatrixAt(L,s.matrix),g.setMatrixAt(L,s.matrix),g.setColorAt(L,b.color),l.setColorAt(L,new St(4929574).offsetHSL(0,0,(Math.random()-.5)*.08))}),i.forEach((b,L)=>{s.position.set(b.x,b.y,b.z),s.rotation.set(b.tilt,b.rot,b.tilt*.5),s.scale.set(b.s*1.05,b.sy,b.s*1.05),s.updateMatrix(),p.setMatrixAt(L,s.matrix),T.setMatrixAt(L,s.matrix),T.setColorAt(L,b.color.clone().offsetHSL(.01,.03,.045)),p.setColorAt(L,new St(4995367))});for(const b of[l,g,p,T])b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0,b.castShadow=!0,b.receiveShadow=!0,this.scene.add(b);this.trees={pines:e,broad:i,meshes:[g,T]}}buildGrass(){const t=sn(88213),e=[];for(let c=0;c<5;c++){const d=c/5*Me+t()*.6,u=.22+t()*.35,f=.55+t()*.55,g=.07+t()*.05,v=(t()-.5)*.5,p=(t()-.5)*.5,m=Math.cos(d)*g,y=Math.sin(d)*g,_=v+Math.cos(d)*u,M=p+Math.sin(d)*u;e.push(v-m,0,p-y,v+m,0,p+y,_,f,M)}const i=new pe;i.setAttribute("position",new jt(e,3)),i.computeVertexNormals();const n=new It({color:16777215,roughness:1,metalness:0,side:Pe});xo(n,this.windUniforms,.18,0);const s=2900,o=new Ji(i,n,s),a=new ne;let l=0,h=0;for(;l<s&&h<s*14;){h++;const c=t()*Me,d=Math.sqrt(t())*(Si-30),u=Math.cos(c)*d,f=Math.sin(c)*d;if(this.isNearRoad(u,f,1)||this.isNearSite(u,f,12))continue;const g=this.heightAt(u,f);if(g<Be+.5||this.slopeAt(u,f)>.7)continue;a.position.set(u,g+.02,f),a.rotation.y=t()*Me;const v=.6+t()*1.15;a.scale.set(v,v,v),a.updateMatrix(),o.setMatrixAt(l,a.matrix),o.setColorAt(l,new St().setHSL(.2+t()*.1,.42,.27+t()*.18)),l++}o.count=l,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.receiveShadow=!0,this.scene.add(o)}buildRocks(){const t=sn(5571),e=new La(1.2,0),i=new It({color:16777215,roughness:.93,metalness:.02,flatShading:!0}),n=340,s=new Ji(e,i,n),o=new ne;let a=0,l=0;for(;a<n&&l<n*20;){l++;const h=t()*Me,c=Math.sqrt(t())*(Si-10),d=Math.cos(h)*c,u=Math.sin(h)*c;if(this.isNearRoad(d,u,1.5)||de(d,u,le.x,le.z)<16||this.isNearSite(d,u,15))continue;const f=this.heightAt(d,u);if(f<Be)continue;const g=.35+Math.pow(t(),2.6)*3.2;o.position.set(d,f+g*.18,u),o.rotation.set(t()*.8,t()*Me,t()*.8),o.scale.set(g*(.7+t()*.6),g*(.55+t()*.6),g*(.7+t()*.6)),o.updateMatrix(),s.setMatrixAt(a,o.matrix),s.setColorAt(a,new St().setHSL(.09,.03+t()*.05,.24+t()*.17)),g>1.9&&this.addCollider(d,u,g*.8,f,"rock"),a++}s.count=a,s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0,s.castShadow=!0,s.receiveShadow=!0,this.scene.add(s)}makeMaterials(){return this.mats?this.mats:(this.mats={metal:new It({color:2832704,metalness:.82,roughness:.42}),dark:new It({color:1187107,metalness:.7,roughness:.55}),light:new It({color:8227468,metalness:.85,roughness:.34}),gold:new It({color:12093751,metalness:.9,roughness:.32}),glass:new It({color:1787730,metalness:.4,roughness:.12,emissive:870480,emissiveIntensity:.45}),burnt:new It({color:1775639,metalness:.55,roughness:.8})},this.mats)}buildSpawnSite(){const t=this.makeMaterials(),e=new Tt,i=le.x+14,n=le.z+8,s=this.heightAt(i,n),o=new Tt,a=new I(new Xt(2.7,3.1,8.5,8,1,!1),t.metal);a.rotation.z=Math.PI/2.2,a.rotation.y=.4,a.position.y=2.7,a.castShadow=a.receiveShadow=!0,o.add(a);const l=new I(new et(.3,3.2,3.4),t.dark);l.position.set(2.6,1.9,-.7),l.rotation.z=-.6,o.add(l);const h=new I(new fi(2.8,.16,5,12,Math.PI),t.gold);h.rotation.set(Math.PI/2,0,-.2),h.position.y=2.5,o.add(h);const c=new I(new et(1.4,.55,.2),t.glass);c.position.set(.3,4.4,2.3),o.add(c),o.position.set(i,s,n),e.add(o),this.addCollider(i,n,3.4,s,"pod");const d=le.x-12,u=le.z+4,f=this.heightAt(d,u),g=new I(new Xt(2.2,2.7,.65,8),t.dark);g.position.set(d,f+.3,u),g.receiveShadow=!0,e.add(g);const v=new I(new Xt(.18,.35,9,6),t.light);v.position.set(d,f+5,u),v.castShadow=!0,e.add(v);const p=new It({color:665136,emissive:6484991,emissiveIntensity:2.2,metalness:.6,roughness:.25});for(let M=0;M<3;M++){const C=new I(new fi(1.15-M*.22,.055,5,20),p);C.rotation.x=Math.PI/2,C.position.set(d,f+8.4+M*.5,u),e.add(C)}const m=new Ie({color:6484991,transparent:!0,opacity:.09,blending:Le,depthWrite:!1,side:Pe}),y=new I(new Xt(.9,2.6,95,12,1,!0),m);y.position.set(d,f+48,u),e.add(y);const _=Ee(this.glowTexture,6484991,22);_.position.set(d,f+8.8,u),e.add(_),this.animated.push({type:"bob",obj:_,baseY:f+8.8,amp:.7,speed:1.1}),this.scene.add(e),this.spawnBeacon={x:d,z:u}}buildShrines(){const t=this.makeMaterials();this.shrineGroup=new Tt;const e=sn(90210);for(const i of this.relics){const n=new Tt,s=i.y,o=new It({color:661020,emissive:i.color,emissiveIntensity:1.75,metalness:.55,roughness:.3}),a=new It({color:726813,emissive:i.color,emissiveIntensity:.5,metalness:.6,roughness:.4}),l=new I(new Xt(9.5,10.4,.55,8),t.dark);l.position.set(i.x,s+.15,i.z),l.receiveShadow=!0,n.add(l);const h=new I(new vs(3.1,3.45,32),o);h.rotation.x=-Math.PI/2,h.position.set(i.x,s+.46,i.z),n.add(h);const c=new I(new Xt(1.45,1.9,1.5,6),t.metal);c.position.set(i.x,s+1.05,i.z),c.castShadow=c.receiveShadow=!0,n.add(c);const d=new I(new Xt(1.65,1.45,.25,6),t.gold);d.position.set(i.x,s+1.9,i.z),d.castShadow=!0,n.add(d),this.addCollider(i.x,i.z,1.8,s+1,"pedestal");for(let p=0;p<3;p++){const m=new I(new et(2.3,.06,.12),a);m.position.set(i.x,s+.65+p*.35,i.z+1.28),m.rotation.y=p*Math.PI/3,n.add(m)}const u=4;for(let p=0;p<u;p++){const m=p/u*Me+.4,y=7.6,_=i.x+Math.cos(m)*y,M=i.z+Math.sin(m)*y,C=p===1||p===3,T=C?3.2+e()*1.8:6.6,b=new I(new et(1.1,T,1.1),t.metal);b.position.set(_,s+T*.5,M),b.rotation.y=-m,b.rotation.z=C?(e()-.5)*.22:(e()-.5)*.04,b.castShadow=b.receiveShadow=!0,n.add(b);const L=new I(new et(1.5,.3,1.5),t.gold);L.position.set(_,s+T+.1,M),L.rotation.y=-m,L.castShadow=!0,n.add(L);const O=new I(new et(.17,T*.68,.04),o);O.position.set(_+Math.cos(-m+Math.PI/2)*.57,s+T*.52,M+Math.sin(-m+Math.PI/2)*.57),O.rotation.y=-m,n.add(O),this.addCollider(_,M,.85,s,"pillar")}for(let p=0;p<3;p++){const m=e()*Me,y=14+e()*7,_=i.x+Math.cos(m)*y,M=i.z+Math.sin(m)*y,C=this.heightAt(_,M),T=new I(new et(4+e()*5,1.6+e()*2.6,.8),t.dark);T.position.set(_,C+.8,M),T.rotation.set((e()-.5)*.35,e()*Me,(e()-.5)*.3),T.castShadow=T.receiveShadow=!0,n.add(T),this.addCollider(_,M,1.5,C,"debris")}const f=new Ie({color:i.color,transparent:!0,opacity:.1,blending:Le,depthWrite:!1,side:Pe,toneMapped:!1}),g=new I(new Xt(.55,1.6,55,8,1,!0),f);g.position.set(i.x,s+28,i.z),n.add(g);const v=Ee(this.glowTexture,i.color,5);v.position.set(i.x,s+4.2,i.z),n.add(v),this.animated.push({type:"bob",obj:v,baseY:s+4.2,amp:.35,speed:1.4}),this.animated.push({type:"spin",obj:h,speed:.12}),i.marker=v,i.beam=g,i.emissiveMat=o,this.shrineGroup.add(n),this.relicSites.push({x:i.x,z:i.z,y:s})}this.scene.add(this.shrineGroup)}buildBossArena(){const t=this.makeMaterials(),e=this.bossY,i=new Tt,n=Re.x,s=Re.z,o=new I(new Pa(44,40),new It({color:2367259,roughness:.95,metalness:.08,transparent:!0,opacity:.85}));o.rotation.x=-Math.PI/2,o.position.set(n,e+.24,s),o.receiveShadow=!0,i.add(o);const a=new I(new vs(39,41,48),new It({color:790805,emissive:16726818,emissiveIntensity:1.2,metalness:.7,roughness:.35,side:Pe}));a.rotation.x=-Math.PI/2,a.position.set(n,e+.3,s),i.add(a);const l=new Tt,h=new I(new Xt(9.5,13.5,78,7,1),new It({color:2302506,metalness:.82,roughness:.46}));h.rotation.z=Math.PI/2,h.rotation.y=.5,h.position.set(n-34,e+8,s-48),h.castShadow=h.receiveShadow=!0,l.add(h);const c=new I(new et(62,2.3,4.4),t.dark);c.position.set(n-34,e+17,s-48),c.rotation.y=.5,c.castShadow=!0,l.add(c);const d=new It({color:3416106,metalness:.75,roughness:.5});for(const[p,m,y,_]of[[-16,-30,.5,1],[-46,-52,.5,.8],[6,-22,.5,1.1]]){const M=new I(new et(20*_,.9,11*_),d);M.position.set(n+p,e+16,s+m),M.rotation.set(.1,y,-.4),M.castShadow=!0,l.add(M)}const u=new It({color:1707021,emissive:16723484,emissiveIntensity:1.8,metalness:.6,roughness:.25});for(let p=0;p<5;p++){const m=new I(new et(1.3,.22,13),u);m.position.set(n-66+p*14,e+15.5-p*.2,s-24+p*1.5),m.rotation.y=.5,l.add(m)}for(let p=0;p<7;p++){const m=2.1+p/7*1.4,y=22+p*4.2,_=n+Math.cos(m)*y,M=s+Math.sin(m)*y,C=this.heightAt(_,M),T=new I(new et(4+Math.random()*9,.7,2+Math.random()*3),t.dark);T.position.set(_,C+.5,M),T.rotation.set((Math.random()-.5)*.6,Math.random()*Me,(Math.random()-.5)*.4),T.castShadow=T.receiveShadow=!0,i.add(T),p%2===0&&this.addCollider(_,M,2.6,C,"wreck")}i.add(l),this.addCollider(n-42,s-52,15,e,"hull"),this.addCollider(n-22,s-36,14,e,"hull"),this.addCollider(n-62,s-66,15,e,"hull");for(let p=0;p<4;p++){const m=p/4*Me+.78,y=34,_=n+Math.cos(m)*y,M=s+Math.sin(m)*y,C=this.heightAt(_,M),T=new I(new et(2.8,11+p*1.5,2.4),t.metal);T.position.set(_,C+5.5,M),T.rotation.set(.05,-m,.07),T.castShadow=T.receiveShadow=!0,i.add(T);const b=new I(new et(.3,7,.15),u);b.position.set(_+Math.cos(m+Math.PI/2)*1.42,C+5.8,M+Math.sin(m+Math.PI/2)*1.42),b.rotation.y=-m,i.add(b),this.addCollider(_,M,2,C,"monolith")}const f=new I(new Xt(3.5,5,1.2,7),t.burnt);f.position.set(n+20,e+.2,s+10),i.add(f);const g=new I(new Xt(2.6,3.1,.5,7),new Ie({color:16730668,transparent:!0,opacity:.75,blending:Le,toneMapped:!1}));g.position.set(n+20,e+1,s+10),i.add(g);const v=Ee(this.glowTexture,16730668,20);v.position.set(n+20,e+2.5,s+10),i.add(v),this.animated.push({type:"pulse",obj:g,base:1,amp:.25,speed:2.2}),this.animated.push({type:"pulse",obj:v.scale,base:20,amp:4,speed:2.2,isScale:!0}),this.scene.add(i),this.bossArena={group:i,x:n,z:s,y:e}}buildCrystals(){const t=sn(77331),e=new gs(.5,0);e.scale(.55,1.9,.55);const i=new It({color:1723212,emissive:5498879,emissiveIntensity:1.35,metalness:.35,roughness:.2,transparent:!0,opacity:.92}),n=150,s=new Ji(e,i,n),o=new ne,a=[...this.relics.map(h=>({x:h.x,z:h.z,color:h.color})),{x:Re.x+20,z:Re.z+10,color:16730668}];let l=0;for(let h=0;h<n;h++){let c,d;if(h<80){const g=a[h%a.length],v=t()*Me,p=11+t()*20;c=g.x+Math.cos(v)*p,d=g.z+Math.sin(v)*p}else{const g=t()*Me,v=Math.sqrt(t())*(Si-40);c=Math.cos(g)*v,d=Math.sin(g)*v}const u=this.heightAt(c,d);if(u<Be||this.isNearRoad(c,d,1))continue;o.position.set(c,u+.1,d),o.rotation.set((t()-.5)*.4,t()*Me,(t()-.5)*.4);const f=.45+Math.pow(t(),2)*2.1;o.scale.set(f,f*(.8+t()*.8),f),o.updateMatrix(),s.setMatrixAt(l,o.matrix),l++}s.count=l,s.instanceMatrix.needsUpdate=!0,s.castShadow=!0,this.scene.add(s)}buildMapCanvas(){const e=document.createElement("canvas");e.width=e.height=280;const i=e.getContext("2d"),n=new Float32Array(280*280);for(let a=0;a<280;a++)for(let l=0;l<280;l++){const h=(l/280-.5)*ze,c=(a/280-.5)*ze;n[a*280+l]=this.heightAt(h,c)}const s=i.createImageData(280,280),o=new A(-.6,.7,-.4).normalize();for(let a=0;a<280;a++)for(let l=0;l<280;l++){const h=a*280+l,c=n[h];let d,u,f;if(c<Be){const m=ye(Be-16,Be,c);d=Ke(17,34,m),u=Ke(49,86,m),f=Ke(63,104,m)}else{const m=n[a*280+Math.min(279,l+1)]-c,y=n[Math.min(279,a+1)*280+l]-c,_=-m*.06,M=-y*.06,C=Zt(.66+(_*o.x+M*o.z)*2.1,.5,1.25),T=ye(0,1,Zt((c+10)/130,0,1));d=Ke(42,68,T),u=Ke(84,82,T),f=Ke(52,69,T),c>58&&(d+=18,u+=15,f+=15),Math.abs(c%9-4.5)<.42&&(d+=14,u+=20,f+=10),d*=C,u*=C,f*=C}const g=Math.sqrt((l/280-.5)**2+(a/280-.5)**2),v=1-ye(.32,.5,g),p=h*4;s.data[p]=d*v,s.data[p+1]=u*v,s.data[p+2]=f*v,s.data[p+3]=255}i.putImageData(s,0,0),i.lineCap="round",i.lineJoin="round",i.strokeStyle="rgba(170,146,102,0.6)",i.lineWidth=2.1,i.beginPath();for(let a=0;a<this.roadSamples.length;a++){const l=this.roadSamples[a],h=(l.x/ze+.5)*280,c=(l.z/ze+.5)*280;a===0?i.moveTo(h,c):i.lineTo(h,c)}i.stroke(),i.fillStyle="rgba(22,48,30,0.55)";for(const a of this.forestPoints){const l=(a.x/ze+.5)*280,h=(a.z/ze+.5)*280;i.fillRect(l,h,1,1)}for(const a of this.relics){const l=(a.x/ze+.5)*280,h=(a.z/ze+.5)*280,c=new St(a.color),d=i.createRadialGradient(l,h,0,l,h,12);d.addColorStop(0,`rgba(${c.r*255|0},${c.g*255|0},${c.b*255|0},0.5)`),d.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=d,i.fillRect(l-12,h-12,24,24)}this.mapCanvas=e,this.mapSize=280}worldToMap(t,e,i=this.mapSize){return[(t/ze+.5)*i,(e/ze+.5)*i]}update(t,e,i){this.elapsed=e,this.windUniforms.time.value=e,this.waterUniforms&&(this.waterUniforms.uTime.value=e),this.skyUniforms&&(this.skyUniforms.uTime.value=e,this.skyGroup.position.copy(i.position));for(const s of this.animated)if(s.type==="bob")s.obj.position.y=s.baseY+Math.sin(e*s.speed+s.baseY)*s.amp;else if(s.type==="spin")s.obj.rotation.z=e*s.speed;else if(s.type==="pulse")if(s.isScale){const o=s.base+Math.sin(e*s.speed)*s.amp;s.obj.set(o,o,o)}else s.obj.scale.setScalar(s.base+Math.sin(e*s.speed)*s.amp);this.spawnBeacon;const n=.8+Math.sin(e*2.1)*.2;for(const s of this.relics)s.marker&&!s.collected&&(s.marker.material.opacity=.55+n*.25)}}new St;new A;class nh{constructor(t,e,i,n=!0){this.capacity=i,this.cursor=0,this.items=[],this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3),this.sizes=new Float32Array(i),this.alphas=new Float32Array(i);const s=new pe;s.setAttribute("position",new Te(this.positions,3)),s.setAttribute("aColor",new Te(this.colors,3)),s.setAttribute("aSize",new Te(this.sizes,1)),s.setAttribute("aAlpha",new Te(this.alphas,1)),this.geometry=s,this.material=new li({uniforms:{uTex:{value:e},uScale:{value:720},uAdditive:{value:n?1:0}},transparent:!0,depthWrite:!1,blending:n?Le:an,toneMapped:!1,vertexShader:`
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor;
          vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(aSize * uScale / max(1.0, -mv.z), 0.0, 48.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform sampler2D uTex;
        uniform float uAdditive;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec4 tex = texture2D(uTex, gl_PointCoord);
          float a = tex.a * vAlpha;
          if (a < 0.005) discard;
          gl_FragColor = vec4(vColor, a);
        }
      `}),this.points=new h0(s,this.material),this.points.frustumCulled=!1,this.points.renderOrder=9,t.add(this.points);for(let o=0;o<i;o++)this.positions[o*3+1]=-9999,this.items.push({alive:!1,life:0,maxLife:1,vx:0,vy:0,vz:0,gravity:0,drag:0,size:0,grow:0,alpha:1,color:new St})}spawn(t,e,i,n,s,o,a,l,h,c={}){const d=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const u=this.items[d];u.alive=!0,u.life=h,u.maxLife=h,u.vx=n,u.vy=s,u.vz=o,u.gravity=c.gravity??0,u.drag=c.drag??1.2,u.size=l,u.grow=c.grow??0,u.alpha=c.alpha??1,u.color.set(a),this.positions[d*3]=t,this.positions[d*3+1]=e,this.positions[d*3+2]=i,this.sizes[d]=l,this.colors[d*3]=u.color.r,this.colors[d*3+1]=u.color.g,this.colors[d*3+2]=u.color.b,this.alphas[d]=u.alpha}update(t){for(let e=0;e<this.capacity;e++){const i=this.items[e];if(!i.alive)continue;if(i.life-=t,i.life<=0){i.alive=!1,this.positions[e*3+1]=-9999,this.alphas[e]=0;continue}const n=Math.max(0,1-i.drag*t);i.vx*=n,i.vz*=n,i.vy=i.vy*n-i.gravity*t,this.positions[e*3]+=i.vx*t,this.positions[e*3+1]+=i.vy*t,this.positions[e*3+2]+=i.vz*t,this.sizes[e]=Math.max(1e-4,this.sizes[e]+i.grow*t);const s=i.life/i.maxLife;this.alphas[e]=i.alpha*(s>.8?(1-s)*5:s/.8)}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aColor.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0}}class tg{constructor(t,e){this.scene=t,this.world=e,this.glowTexture=fn(128),this.sparksPool=new nh(t,this.glowTexture,900,!0),this.smokePool=new nh(t,this.glowTexture,420,!1),this.shake=0,this.flashes=[],this.debris=[],this.rings=[],this.lightFade=0,this.buildFlashes(),this.buildDebris(),this.buildRings()}setViewport(t,e=62){const i=t*.5/Math.tan(e*Math.PI/360);this.sparksPool.material.uniforms.uScale.value=i,this.smokePool.material.uniforms.uScale.value=i}buildFlashes(){for(let t=0;t<34;t++){const e=new Mr(new Ar({map:this.glowTexture,color:16777215,transparent:!0,blending:Le,depthWrite:!1,depthTest:!0,toneMapped:!1}));e.visible=!1,e.renderOrder=10,this.scene.add(e),this.flashes.push({sprite:e,life:0,maxLife:1,grow:1,start:1,alpha:1})}this.flashCursor=0}buildDebris(){const t=new et(.28,.28,.28),e=[2767428,7021597,10194552,6380370,1779760];for(let i=0;i<48;i++){const n=new It({color:e[i%e.length],metalness:.7,roughness:.55}),s=new I(t,n);s.visible=!1,s.castShadow=!0,this.scene.add(s),this.debris.push({mesh:s,vel:new A,spin:new A,life:0,maxLife:1})}this.debrisCursor=0}buildRings(){const t=new vs(.86,1,64);for(let e=0;e<12;e++){const i=new Ie({color:6484991,transparent:!0,opacity:0,side:Pe,blending:Le,depthWrite:!1,toneMapped:!1}),n=new I(t,i);n.rotation.x=-Math.PI/2,n.visible=!1,n.renderOrder=8,this.scene.add(n),this.rings.push({mesh:n,life:0,maxLife:1,radius:1,thickness:1})}this.ringCursor=0}flash(t,e,i,n=.18,s=1.6){const o=this.flashes[this.flashCursor];return this.flashCursor=(this.flashCursor+1)%this.flashes.length,o.sprite.visible=!0,o.sprite.position.copy(t),o.sprite.material.color.set(e),o.sprite.material.opacity=.95,o.start=i,o.sprite.scale.setScalar(i),o.life=n,o.maxLife=n,o.grow=s,o}muzzleFlash(t,e=6484991,i=1.8){this.flash(t,e,i,.07,1.4);const n=new A(Math.random()-.5,Math.random()*.4,Math.random()-.5);for(let s=0;s<5;s++)this.sparksPool.spawn(t.x,t.y,t.z,n.x*8,n.y*8+1,n.z*8,e,.11,.14,{drag:4,gravity:4});this.shake=Math.max(this.shake,.22)}sparks(t,e,i=16764778,n=1,s={}){for(let o=0;o<e;o++){const a=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),h=(.6+Math.random()*1.4)*n,c=Math.sin(l)*Math.cos(a)*h,d=Math.abs(Math.cos(l))*h*.9+.6,u=Math.sin(l)*Math.sin(a)*h;this.sparksPool.spawn(t.x+(Math.random()-.5)*.3,t.y+(Math.random()-.5)*.3,t.z+(Math.random()-.5)*.3,c,d,u,i,(s.size??.12)*(.6+Math.random()*.9),(s.life??.5)*(.5+Math.random()*.8),{gravity:s.gravity??9,drag:s.drag??1.5})}}jetBurst(t,e=8383231,i=20){for(let n=0;n<i;n++){const s=Math.random()*Math.PI*2,o=Math.random()*.7;this.sparksPool.spawn(t.x+Math.cos(s)*o,t.y+.35,t.z+Math.sin(s)*o,Math.cos(s)*3,-3-Math.random()*5,Math.sin(s)*3,e,.18+Math.random()*.18,.5+Math.random()*.3,{gravity:2,drag:2.2})}this.flash(t.clone().add(new A(0,.4,0)),e,2.6,.12)}dust(t,e=5,i=9076831,n=1){for(let s=0;s<e;s++){const o=Math.random()*Math.PI*2,a=(.6+Math.random()*1.6)*n;this.smokePool.spawn(t.x+(Math.random()-.5)*.8,t.y+.1+Math.random()*.3,t.z+(Math.random()-.5)*.8,Math.cos(o)*a,.7+Math.random()*1.1,Math.sin(o)*a,i,(.3+Math.random()*.5)*n,.55+Math.random()*.6,{gravity:-.4,drag:2.2,alpha:.28*Zt(n,.3,1.2),grow:.8})}}hitFlash(t,e=16730677){t&&(this.flash(t.clone(),e,2.4,.14,1.3),this.sparks(t.clone(),6,e,.8,{life:.3}))}shieldImpact(t,e=6484991){this.flash(t,e,3.2,.16,1.5);for(let i=0;i<12;i++){const n=Math.random()*Math.PI*2;this.sparksPool.spawn(t.x+Math.cos(n)*2.4,t.y+(Math.random()-.5)*2,t.z+Math.sin(n)*2.4,Math.cos(n)*1.4,(Math.random()-.3)*2,Math.sin(n)*1.4,e,.13,.34,{gravity:1.5,drag:2})}}bulletImpact(t,e=16752730){this.sparks(t,7,e,.7,{life:.32,size:.09}),this.flash(t,e,.9,.08,1.2)}explosion(t,e=16747077,i=1){this.flash(t,16770224,5.5*i,.2,2.2),this.flash(t,e,4.2*i,.36,2.8);for(let n=0;n<38*i;n++){const s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1),a=(4+Math.random()*12)*i;this.sparksPool.spawn(t.x,t.y,t.z,Math.sin(o)*Math.cos(s)*a,Math.cos(o)*a+2,Math.sin(o)*Math.sin(s)*a,Math.random()>.4?e:16773296,.18+Math.random()*.22,.5+Math.random()*.7,{gravity:12,drag:1.2})}for(let n=0;n<22*i;n++){const s=Math.random()*Math.PI*2;this.smokePool.spawn(t.x,t.y+Math.random()*1.5,t.z,Math.cos(s)*(1+Math.random()*3),1.5+Math.random()*3,Math.sin(s)*(1+Math.random()*3),Math.random()>.5?2959910:5327424,.8+Math.random()*1.4,1+Math.random()*1.2,{gravity:-.8,drag:1.5,alpha:.34,grow:2.4})}this.ring(t.clone().setY(t.y-.4),e,9*i,.5,1),this.spawnDebris(t,Math.floor(10*i),7*i),this.shake=Math.max(this.shake,2.4*i)}spawnDebris(t,e,i){for(let n=0;n<e;n++){const s=this.debris[this.debrisCursor];this.debrisCursor=(this.debrisCursor+1)%this.debris.length,s.mesh.visible=!0,s.mesh.position.copy(t),s.mesh.scale.setScalar(.5+Math.random()*1.6),s.vel.set((Math.random()-.5)*i,3+Math.random()*i,(Math.random()-.5)*i),s.spin.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),s.life=1.4+Math.random()*1.2,s.maxLife=s.life}}ring(t,e,i,n=.5,s=1){const o=this.rings[this.ringCursor];return this.ringCursor=(this.ringCursor+1)%this.rings.length,o.mesh.visible=!0,o.mesh.position.copy(t),o.mesh.position.y+=.25,o.mesh.material.color.set(e),o.mesh.material.opacity=.8,o.mesh.scale.setScalar(.4),o.life=n,o.maxLife=n,o.radius=i,o.thickness=s,o}empWave(t){this.ring(t,11898111,26,.85,1.2),this.ring(t,8383231,20,.65,1.6),this.flash(t,14203135,9,.3,3);for(let e=0;e<48;e++){const i=Math.random()*Math.PI*2,n=5+Math.random()*12;this.sparksPool.spawn(t.x,t.y,t.z,Math.cos(i)*n,(Math.random()-.2)*3,Math.sin(i)*n,12946687,.14+Math.random()*.2,.5+Math.random()*.5,{gravity:0,drag:1.6})}for(let e=0;e<12;e++){const i=Math.random()*Math.PI*2,n=t.x+Math.cos(i)*4.5,s=t.z+Math.sin(i)*4.5;this.flash(new A(n,t.y+Math.random()*3,s),12946687,1.8,.4,1.2)}}transformFlash(t,e=9302015){this.flash(t,16777215,7,.25,2.2),this.flash(t,e,5,.4,2.8),this.ring(t,e,8,.5,1),this.shake=Math.max(this.shake,1.2);for(let i=0;i<30;i++){const n=Math.random()*Math.PI*2;this.sparksPool.spawn(t.x+Math.cos(n)*.6,t.y+(Math.random()-.5)*2.4,t.z+Math.sin(n)*.6,Math.cos(n)*(2+Math.random()*5),(Math.random()-.2)*4,Math.sin(n)*(2+Math.random()*5),e,.1+Math.random()*.18,.4+Math.random()*.4,{gravity:3,drag:2.3})}}pickupBurst(t,e){this.flash(t,e,4.2,.3,2),this.ring(t,e,7,.6,1.2);for(let i=0;i<36;i++){const n=Math.random()*Math.PI*2,s=1.5+Math.random()*5;this.sparksPool.spawn(t.x,t.y,t.z,Math.cos(n)*s,1+Math.random()*4,Math.sin(n)*s,e,.12+Math.random()*.16,.6+Math.random()*.8,{gravity:4,drag:1.8})}}healBurst(t){for(let e=0;e<24;e++){const i=Math.random()*Math.PI*2;this.sparksPool.spawn(t.x+Math.cos(i)*.6,t.y+Math.random()*2,t.z+Math.sin(i)*.6,Math.cos(i)*.6,1.5+Math.random()*2.5,Math.sin(i)*.6,7665576,.1+Math.random()*.12,.7+Math.random()*.6,{gravity:-2,drag:1.2})}}addShake(t){this.shake=Math.max(this.shake,t)}update(t){this.sparksPool.update(t),this.smokePool.update(t),this.shake=Math.max(0,this.shake-t*3.4);for(const e of this.flashes){if(!e.sprite.visible)continue;if(e.life-=t,e.life<=0){e.sprite.visible=!1;continue}const i=1-e.life/e.maxLife;e.sprite.material.opacity=.95*(1-i),e.sprite.scale.setScalar(e.start*(1+i*e.grow))}for(const e of this.debris){if(!e.mesh.visible)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=22*t,e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.spin.x*t,e.mesh.rotation.y+=e.spin.y*t,e.mesh.rotation.z+=e.spin.z*t;const i=this.world?this.world.heightAt(e.mesh.position.x,e.mesh.position.z):0;e.mesh.position.y<i+.15&&(e.mesh.position.y=i+.15,e.vel.y*=-.35,e.vel.x*=.65,e.vel.z*=.65,e.spin.multiplyScalar(.7)),e.life<.3&&e.mesh.scale.multiplyScalar(.94)}for(const e of this.rings){if(!e.mesh.visible)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}const i=1-e.life/e.maxLife,n=1-Math.pow(1-i,2.6);e.mesh.scale.setScalar(.4+n*e.radius),e.mesh.material.opacity=(1-i)*.85*e.thickness}}}const os=new A;function ti(r,t,e,i,n,s){const o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;os.copy(t),os[i]=0,os.normalize();const h=.5*o/(o+a),c=1-os.angleTo(r)/l;return Math.sign(os[e])===1?c*h:a/(o+a)+h+h*(1-c)}class ce extends et{constructor(t=1,e=1,i=1,n=2,s=.1){if(n=n*2+1,s=Math.min(t/2,e/2,i/2,s),super(1,1,1,n,n,n),n===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,l=new A,h=new A(t,e,i).divideScalar(2).subScalar(s),c=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=c.length/6,g=new A,v=.5/n;for(let p=0,m=0;p<c.length;p+=3,m+=2)switch(a.fromArray(c,p),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),c[p+0]=h.x*Math.sign(a.x)+l.x*s,c[p+1]=h.y*Math.sign(a.y)+l.y*s,c[p+2]=h.z*Math.sign(a.z)+l.z*s,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),u[m+0]=ti(g,l,"z","y",s,i),u[m+1]=1-ti(g,l,"y","z",s,e);break;case 1:g.set(-1,0,0),u[m+0]=1-ti(g,l,"z","y",s,i),u[m+1]=1-ti(g,l,"y","z",s,e);break;case 2:g.set(0,1,0),u[m+0]=1-ti(g,l,"x","z",s,t),u[m+1]=ti(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),u[m+0]=1-ti(g,l,"x","z",s,t),u[m+1]=1-ti(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),u[m+0]=1-ti(g,l,"x","y",s,t),u[m+1]=1-ti(g,l,"y","x",s,e);break;case 5:g.set(0,0,-1),u[m+0]=ti(g,l,"x","y",s,t),u[m+1]=1-ti(g,l,"y","x",s,e);break}}}const sr=[{id:"pistol",name:"ENERGON PISTOL",desc:"SEMI-AUTO // INFINITE CELL",damage:12,speed:105,cooldown:.22,heat:7,spread:.004,color:6484991,projectile:"bolt",shake:.9},{id:"repeater",name:"ION REPEATER",desc:"TRI-BARREL // RAPID FIRE",damage:8.5,speed:135,cooldown:.072,heat:3.1,spread:.014,color:8257495,projectile:"bolt",shake:.45},{id:"mortar",name:"PLASMA MORTAR",desc:"ARCING SHELL // SPLASH DAMAGE",damage:34,speed:62,cooldown:1.15,heat:26,spread:.002,color:16752719,projectile:"mortar",splash:52,gravity:16,shake:2.2}];function Fi(r,t=.85,e=.36,i={}){return new It({color:r,metalness:t,roughness:e,...i})}class eg{constructor(t,e,i,n){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.glowTexture=fn(128),this.root=new Tt,this.root.position.copy(le),this.position=this.root.position,this.velocity=new A,this.yaw=Math.PI,this.mode="robot",this.health=100,this.maxHealth=100,this.energon=100,this.maxEnergon=100,this.score=0,this.kills=0,this.relics=0,this.dead=!1,this.grounded=!0,this.speed=0,this.moving=!1,this.boosting=!1,this.shieldActive=!1,this.invuln=0,this.timeSinceDamage=99,this.empCooldown=0,this.heat=0,this.overheated=0,this.fireCooldown=0,this.weaponIndex=0,this.unlocked=new Set(["pistol"]),this.abilities={shield:!1,jets:!1,emp:!1,overdrive:!1},this.inWater=!1,this.walkPhase=0,this.dustTimer=0,this.trailTimer=0,this.airJumpUsed=!1,this.aiming=!1,this.transformT=0,this.transforming=!1,this.transformDir=1,this.transformFlashDone=!1,this.landingSquash=0,this.meleeTimer=0,this.cameraShake=0,this.deathTimer=0,this.firstPerson=!1,this.viewRecoil=0,this.fpCamera=null,this.buildRobot(),this.buildVehicle(),this.buildShield(),this.buildViewModel(),this.root.rotation.y=this.yaw,t.add(this.root),this.rideHeight=0,this.colliderRadius=1.35,this.aimPoint=new A,this.combat=null,this.onEMP=null,this.onDeath=null,this.onDamage=null}buildRobot(){const t=Fi(1518413,.9,.34),e=Fi(11744811,.82,.38),i=Fi(7216408,.8,.42),n=Fi(12766418,.95,.24),s=Fi(14197567,.92,.3),o=Fi(857372,.75,.5),a=new It({color:1728368,emissive:4188927,emissiveIntensity:.9,metalness:.6,roughness:.15}),l=new It({color:667704,emissive:6484991,emissiveIntensity:2.4,metalness:.4,roughness:.2});this.robotMats={navy:t,red:e,darkRed:i,silver:n,gold:s,dark:o,glass:a,glow:l};const h=new Tt,c=new Tt;h.add(c),this.robot=h,this.rig=c;const d=new I(new ce(1.3,.62,.92,2,.08),t);d.position.y=2.34,c.add(d);const u=new I(new et(1.42,.2,.98),s);u.position.y=2.58,c.add(u);for(const V of[-1,1]){const N=new I(new ce(.34,.66,.74,2,.06),e);N.position.set(V*.76,2.32,.02),N.rotation.z=V*.15,c.add(N)}const f=new Tt;f.position.y=2.6,c.add(f),this.body=f;const g=new I(new ce(1.95,1.5,1.12,3,.12),t);g.position.y=.82,f.add(g);const v=new I(new ce(.8,1.05,.22,2,.06),e);v.position.set(-.52,.86,.55),v.rotation.z=.06,f.add(v);const p=v.clone();p.position.x=.52,p.rotation.z=-.06,f.add(p);const m=new I(new ce(.62,.7,.18,2,.05),a);m.position.set(0,.94,.61),m.rotation.x=-.12,f.add(m);const y=new I(new fi(.19,.055,6,18),s);y.position.set(0,.46,.63),f.add(y);const _=new I(new ki(.13,12,10),l);_.position.set(0,.46,.66),f.add(_),this.core=_;const M=new Tt,C=new Xh;C.moveTo(0,.24),C.lineTo(.19,.04),C.lineTo(.11,-.19),C.lineTo(0,-.06),C.lineTo(-.11,-.19),C.lineTo(-.19,.04),C.closePath();const T=new Ia(C,{depth:.05,bevelEnabled:!0,bevelSize:.012,bevelThickness:.01,bevelSegments:1}),b=new I(T,s);b.position.set(0,.08,0),M.add(b),M.position.set(0,1.32,.61),f.add(M);const L=new I(new et(1.16,.4,.7),o);L.position.y=.13,f.add(L);for(let V=0;V<2;V++){const N=new I(new et(.7,.055,.06),s);N.position.set(0,.04+V*.16,.37),f.add(N)}const O=new I(new Xt(.2,.25,.24,8),n);O.position.y=1.65,f.add(O);const x=new Tt;x.position.y=1.98,f.add(x),this.head=x;const S=new I(new ce(.7,.6,.66,2,.08),t);x.add(S);const z=new I(new ce(.52,.4,.14,2,.04),n);z.position.set(0,-.04,.32),x.add(z);const B=new I(new et(.44,.09,.06),l);B.position.set(0,.08,.39),x.add(B);for(const V of[-1,1]){const N=new I(new et(.1,.1,.05),a);N.position.set(V*.13,-.03,.4),x.add(N);const j=new I(new et(.13,.36,.3),e);j.position.set(V*.4,.04,0),j.rotation.z=V*.1,x.add(j);const X=new I(new Xt(.018,.03,.32,5),n);X.position.set(V*.28,.4,-.04),X.rotation.z=V*-.22,x.add(X)}const H=new I(new et(.08,.12,.5),s);H.position.set(0,.35,.03),x.add(H);for(const V of[-1,1]){const N=new I(new Xt(.2,.26,.8,8),o);N.position.set(V*.5,.9,-.68),N.rotation.x=.25,f.add(N);const j=new I(new Xt(.17,.22,.15,8),l);j.position.set(V*.5,.49,-.77),j.rotation.x=.25,f.add(j)}this.arms={};for(const V of[-1,1]){const N=new Tt;N.position.set(V*1.18,1.34,0),f.add(N);const j=new I(new ce(.76,.62,.8,2,.08),e);j.position.set(V*.08,.06,0),N.add(j);const X=new I(new et(.6,.06,.68),s);X.position.set(V*.08,.3,0),N.add(X);const at=new I(new ce(.46,.92,.5,2,.06),t);at.position.y=-.58,N.add(at);const rt=new Tt;rt.position.y=-1.05,N.add(rt);const pt=new I(new ki(.25,10,8),n);rt.add(pt);const Bt=new I(new ce(.54,.9,.58,2,.07),e);Bt.position.y=-.52,rt.add(Bt);const qt=new I(new Xt(.22,.24,.14,8),s);qt.position.y=-.98,rt.add(qt);const Y=new I(new ce(.36,.38,.42,2,.05),n);if(Y.position.y=-1.2,rt.add(Y),V>0){const tt=new I(new Xt(.17,.23,1.05,8),o);tt.rotation.x=Math.PI/2,tt.position.set(0,-.42,.55),rt.add(tt);const vt=new I(new Xt(.11,.15,.6,8),l);vt.rotation.x=Math.PI/2,vt.position.set(0,-.42,1.25),rt.add(vt);const ht=new ne;ht.position.set(0,-.42,1.58),rt.add(ht),this.muzzleRobot=ht,this.armR=N,this.elbowR=rt,this.forearmR=Bt}else{const tt=new I(new fi(.3,.06,6,16),l);tt.position.set(0,-.48,.3),rt.add(tt),this.armL=N,this.elbowL=rt,this.emitter=tt}this.arms[V>0?"right":"left"]={shoulder:N,elbow:rt,fore:Bt}}this.legs={};for(const V of[-1,1]){const N=new Tt;N.position.set(V*.52,2.28,0),c.add(N);const j=new I(new ce(.62,1.02,.7,2,.07),t);j.position.y=-.58,N.add(j);const X=new I(new et(.5,.66,.14),e);X.position.set(0,-.5,.36),N.add(X);const at=new Tt;at.position.y=-1.12,N.add(at);const rt=new I(new ki(.28,10,8),n);at.add(rt);const pt=new I(new ce(.58,1.02,.64,2,.06),t);pt.position.y=-.55,at.add(pt);const Bt=new I(new ce(.46,.7,.16,2,.04),e);Bt.position.set(0,-.34,.36),at.add(Bt);const qt=new I(new ce(.64,.3,1.05,2,.06),n);qt.position.set(0,-1.14,.2),at.add(qt);const Y=new I(new et(.56,.12,.24),s);Y.position.set(0,-1.22,.72),at.add(Y),this.legs[V>0?"right":"left"]={hip:N,knee:at,foot:qt}}this.jetSprites=[];for(const V of[-1,1]){const N=Ee(this.glowTexture,6613247,2.2);N.position.set(V*.5,2.9,-.9),N.material.opacity=0,h.add(N),this.jetSprites.push(N)}h.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),this.robotBaseY=0,this.root.add(h)}buildVehicle(){const t=new Tt;t.visible=!1;const e=this.robotMats.navy;this.robotMats.red;const i=this.robotMats.silver,n=this.robotMats.gold,s=this.robotMats.dark,o=this.robotMats.glass,a=this.robotMats.glow,l=Fi(11744811,.92,.28),h=Fi(8134939,.9,.34);this.carMats={paint:l,paintDark:h};const c=new I(new ce(2.16,.52,4.5,3,.12),l);c.position.y=.78,t.add(c);const d=new I(new ce(1.98,.28,4.2,2,.06),s);d.position.y=.48,t.add(d);const u=new I(new ce(2,.3,1.25,2,.08),h);u.position.set(0,1,1.66),u.rotation.x=.06,t.add(u);const f=new I(new ce(1.7,.12,1.45,2,.05),e);f.position.set(0,1.13,1.32),f.rotation.x=.08,t.add(f);const g=new I(new ce(1.72,.62,1.55,3,.1),o);g.position.set(0,1.28,-.28),g.rotation.x=-.04,t.add(g);const v=new I(new ce(1.54,.18,1.15,2,.06),l);v.position.set(0,1.6,-.5),t.add(v);const p=new I(new ce(2.02,.4,1.2,2,.07),h);p.position.set(0,1,-1.78),t.add(p);for(const b of[-1,1]){const L=new I(new et(.14,.28,2.8),i);L.position.set(b*1.08,.56,-.05),t.add(L);const O=new I(new et(.1,.08,3.2),n);O.position.set(b*.62,1.06,.05),t.add(O);const x=new I(new et(.46,.15,.1),a);x.position.set(b*.62,1,2.28),t.add(x);const S=new I(new et(.52,.13,.08),new It({color:3475464,emissive:16723484,emissiveIntensity:2.2,metalness:.5,roughness:.2}));S.position.set(b*.64,1.06,-2.36),t.add(S)}const m=new I(new et(2.2,.08,.5),i);m.position.set(0,.5,2.3),t.add(m);const y=new I(new et(2.1,.1,.55),h);y.position.set(0,1.4,-2.12),y.rotation.x=-.1,t.add(y);for(const b of[-1,1]){const L=new I(new et(.1,.35,.2),s);L.position.set(b*.75,1.22,-2.12),t.add(L)}this.wheels=[];const _=new Xt(.46,.46,.36,14);_.rotateZ(Math.PI/2);const M=new Xt(.22,.22,.38,8);M.rotateZ(Math.PI/2);const C=new It({color:790032,roughness:.85,metalness:.1});for(const b of[1.48,-1.45])for(const L of[-1.02,1.02]){const O=new Tt;O.position.set(L,.5,b);const x=new I(_,C);x.castShadow=!0,O.add(x);const S=new I(M,i);O.add(S);const z=new I(new et(.4,.1,.1),n);z.position.x=L>0?.01:-.01,O.add(z),t.add(O),this.wheels.push({group:O,front:b>0,x:L})}const T=Ee(this.glowTexture,6484991,4.6);T.rotation.x=-Math.PI/2,T.position.set(0,.32,0),T.material.opacity=.35,t.add(T),this.exhausts=[],this.carMuzzles=[];for(const b of[-1,1]){const L=new I(new Xt(.1,.12,.3,6),i);L.rotation.x=Math.PI/2,L.position.set(b*.66,.72,-2.3),t.add(L);const O=Ee(this.glowTexture,7335935,1.6);O.position.set(b*.66,.72,-2.5),O.material.opacity=0,t.add(O),this.exhausts.push(O);const x=new ne;x.position.set(b*.62,1.12,2.15),t.add(x),this.carMuzzles.push(x)}t.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),this.car=t,this.root.add(t)}buildShield(){const t=new Tt,e=new I(new di(2.9,2),new Ie({color:6484991,transparent:!0,opacity:.11,blending:Le,depthWrite:!1,side:Pe,toneMapped:!1}));t.add(e);const i=new a0(new w0(new di(2.95,1)),new Bh({color:10287359,transparent:!0,opacity:.5,blending:Le,depthWrite:!1}));t.add(i),t.visible=!1,t.position.y=2.4,this.root.add(t),this.shieldMesh=t,this.shieldSphere=e,this.shieldEdges=i}attachViewModel(t){this.fpCamera=t,t.add(this.viewModel),t.add(this.hoodModel)}buildViewModel(){const t=new Tt,e=new It({color:2243166,metalness:.72,roughness:.38,emissive:397341,emissiveIntensity:1}),i=new It({color:11811373,metalness:.68,roughness:.42,emissive:2229507,emissiveIntensity:1}),n=new It({color:11451074,metalness:.9,roughness:.28,emissive:790804,emissiveIntensity:1}),s=new It({color:13080372,metalness:.88,roughness:.32,emissive:1774082,emissiveIntensity:1}),o=new It({color:857373,metalness:.7,roughness:.5}),a=new It({color:667704,emissive:6484991,emissiveIntensity:.9,metalness:.4,roughness:.2}),l=new Tt;l.position.set(.5,-.4,-.82),l.rotation.set(.08,-.08,0),l.scale.setScalar(.62);const h=new I(new ce(.2,.22,.52,2,.05),e);h.position.set(0,0,-.16),h.rotation.x=-.08,l.add(h);const c=new I(new et(.28,.3,.24),i);c.position.set(0,.02,-.47),l.add(c);const d=new I(new Xt(.11,.13,.12,8),s);d.rotation.x=Math.PI/2,d.position.set(0,-.01,-.64),l.add(d);const u=new I(new ce(.2,.2,.22,2,.04),n);u.position.set(.02,-.1,-.78),u.rotation.x=.2,l.add(u);const f=new I(new Xt(.09,.12,.68,8),o);f.rotation.x=Math.PI/2,f.position.set(-.06,.09,-.48),l.add(f);const g=new I(new ce(.25,.21,.4,2,.035),i);g.position.set(-.06,.09,-.34),l.add(g);const v=new I(new Xt(.055,.075,.3,8),a);v.rotation.x=Math.PI/2,v.position.set(-.06,.09,-.96),l.add(v);const p=new I(new Xt(.085,.085,.07,8),o);p.rotation.x=Math.PI/2,p.position.set(-.06,.09,-1.08),l.add(p);const m=new ne;m.position.set(-.06,.09,-1.14),l.add(m),t.add(l),t.position.set(0,0,0),t.visible=!1,t.traverse(y=>{y.isMesh&&(y.castShadow=!1,y.receiveShadow=!1)}),this.viewModel=t,this.viewArm=l,this.viewBarrel=v,this.viewMuzzle=m,this.viewBase=l.position.clone(),this.buildVehicleHood()}buildVehicleHood(){const t=new Tt,e=new It({color:10365986,metalness:.86,roughness:.3,emissive:1770755,emissiveIntensity:.9}),i=new It({color:6232084,metalness:.82,roughness:.36,emissive:983810,emissiveIntensity:.8}),n=new It({color:1120289,metalness:.7,roughness:.45}),s=new It({color:12371918,metalness:.92,roughness:.26}),o=new It({color:667704,emissive:8384511,emissiveIntensity:1.1,metalness:.4,roughness:.2}),a=new I(new et(1.72,.07,.92),e);a.position.set(0,-.5,-1.12),a.rotation.x=-.07,t.add(a);const l=new I(new et(.6,.09,.66),i);l.position.set(0,-.475,-1.2),l.rotation.x=-.07,t.add(l);const h=new I(new et(.42,.1,.24),n);h.position.set(0,-.44,-.86),h.rotation.x=-.07,t.add(h);for(const u of[-1,1]){const f=new I(new et(.3,.02,.08),s);f.position.set(u*.5,-.46,-1.02),f.rotation.x=-.07,t.add(f);const g=new I(new et(.34,.025,.04),o);g.position.set(u*.62,-.5,-1.54),t.add(g)}const c=new I(new et(1.9,.18,.26),n);c.position.set(0,-.4,-.48),t.add(c);const d=new I(new et(.55,.035,.03),o);d.position.set(0,-.34,-.37),t.add(d),t.visible=!1,t.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.receiveShadow=!1)}),this.hoodModel=t}setFirstPerson(t){this.firstPerson=t,this.syncVisibility()}syncVisibility(){const t=this.transforming,e=!this.firstPerson&&this.mode==="robot"&&!this.dead&&(!t||this.transformT<.58),i=!this.firstPerson&&this.mode==="vehicle"&&!this.dead&&(!t||this.transformT>=.58);this.robot.visible=e,this.car.visible=i,this.viewModel&&(this.viewModel.visible=this.firstPerson&&this.mode==="robot"&&!this.dead&&!t),this.hoodModel&&(this.hoodModel.visible=this.firstPerson&&this.mode==="vehicle"&&!this.dead&&!t),this.shieldMesh&&(this.shieldMesh.visible=this.shieldActive&&!this.firstPerson)}reset(t=!0){this.position.copy(le),this.velocity.set(0,0,0),this.yaw=Math.PI,this.mode="robot",this.robot.visible=!this.firstPerson,this.car.visible=!1,this.hoodModel&&(this.hoodModel.visible=!1),this.transformT=0,this.transforming=!1,this.health=this.maxHealth,this.energon=this.maxEnergon,this.heat=0,this.overheated=0,this.fireCooldown=0,this.dead=!1,this.invuln=1.5,this.shieldActive=!1,this.shieldMesh.visible=!1,this.airJumpUsed=!1,this.colliderRadius=1.35,this.rideHeight=0,this.deathTimer=0,this.timeSinceDamage=0,t&&(this.weaponIndex=0,this.unlocked=new Set(["pistol"]),this.abilities={shield:!1,jets:!1,emp:!1,overdrive:!1},this.relics=0,this.score=0,this.kills=0,this.empCooldown=0),this.root.position.copy(this.position),this.root.rotation.y=this.yaw,this.robot.position.y=0,this.car.position.y=0,this.robot.scale.set(1,1,1),this.car.scale.setScalar(1)}get weapon(){return sr[this.weaponIndex]}unlockRelic(t){this.relics++,t.id==="repeater"?(this.unlocked.add("repeater"),this.weaponIndex=1):t.id==="mortar"?(this.unlocked.add("mortar"),this.weaponIndex=2):t.id==="shield"?this.abilities.shield=!0:t.id==="jets"?this.abilities.jets=!0:t.id==="emp"?this.abilities.emp=!0:t.id==="overdrive"&&(this.abilities.overdrive=!0)}get availableWeapons(){return sr.map((t,e)=>({...t,index:e,unlocked:this.unlocked.has(t.id)}))}switchWeapon(t){var i;if(t===this.weaponIndex)return;const e=sr[t];!e||!this.unlocked.has(e.id)||(this.weaponIndex=t,this.fireCooldown=Math.max(this.fireCooldown,.18),(i=this.audio)==null||i.weaponSwitch())}cycleWeapon(){var n;const t=sr.map((s,o)=>({w:s,i:o})).filter(({w:s})=>this.unlocked.has(s.id));if(t.length<2)return;const e=t.findIndex(({i:s})=>s===this.weaponIndex),i=t[(e+1)%t.length];this.weaponIndex=i.i,this.fireCooldown=Math.max(this.fireCooldown,.18),(n=this.audio)==null||n.weaponSwitch()}update(t,e,i,n,s){var l;if(this.dead){this.deathTimer+=t;return}if(this.aimPoint.copy(n),this.timeSinceDamage+=t,this.invuln=Math.max(0,this.invuln-t),this.fireCooldown=Math.max(0,this.fireCooldown-t),this.empCooldown=Math.max(0,this.empCooldown-t),this.landingSquash=kt(this.landingSquash,0,10,t),this.overheated>0?(this.overheated-=t,this.heat=Math.max(0,this.heat-44*t),this.overheated<=0&&(this.heat=Math.min(this.heat,30),(l=this.audio)==null||l.weaponReady())):this.heat=Math.max(0,this.heat-22*t),this.abilities.shield&&e.ability&&!this.transforming&&this.energon>.5?(this.shieldActive=!0,this.energon=Math.max(0,this.energon-20*t),this.energon<=.5&&(this.shieldActive=!1)):(this.shieldActive=!1,this.timeSinceDamage>1.4&&(this.energon=Math.min(this.maxEnergon,this.energon+11*t))),this.shieldMesh.visible=this.shieldActive&&!this.firstPerson,this.shieldActive){const h=1+Math.sin(this.timeSinceDamage*0+performance.now()*.006)*.02;this.shieldMesh.scale.setScalar(h),this.shieldSphere.material.opacity=.1+Math.sin(performance.now()*.006)*.035,this.shieldEdges.rotation.y+=t*.4,this.shieldEdges.rotation.x+=t*.12}if(this.timeSinceDamage>9&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+2.2*t)),this.transforming){this.updateTransform(t),this.animate(t),this.updateJetVisuals(t);return}if(e.pressed.has("KeyF")&&this.mode!=="vehicle"||e.pressed.has("KeyF")&&this.mode==="vehicle"){this.startTransform(),e.pressed.delete("KeyF");return}for(let h=0;h<3;h++)e.pressed.has(`Digit${h+1}`)&&this.switchWeapon(h);e.weaponCycle&&this.cycleWeapon(),e.abilityPressed&&e.ability,this.abilities.emp&&e.pressed.has("KeyE")&&this.empCooldown<=0&&this.energon>=30&&this.triggerEMP(),this.mode==="robot"?this.updateRobot(t,e,i):this.updateVehicle(t,e,i),this.world.resolve(this.position,this.colliderRadius)==="boundary"&&this.moving&&(this.velocity.x*=.4,this.velocity.z*=.4),this.updateGround(t),this.root.position.copy(this.position),this.root.rotation.y=this.yaw,this.updateAimPose(t),this.animate(t),this.updateWeapons(t,e),this.updateJetVisuals(t),this.updateParticles(t),this.inWater=this.position.y<Be-.2,this.moving=Math.abs(this.velocity.x)+Math.abs(this.velocity.z)>1.3}updateRobot(t,e,i){var f,g;const n=-Math.sin(i),s=-Math.cos(i),o=Math.cos(i),a=-Math.sin(i);let l=n*e.moveZ+o*e.moveX,h=s*e.moveZ+a*e.moveX;const c=Math.hypot(l,h);c>1&&(l/=c,h/=c);const d=e.sprint;let u=d?15.5:8.6;if(this.inWater&&(u*=.5),c>.01){const v=Math.atan2(l,h);this.yaw=xs(this.yaw,v,12,t),this.velocity.x=kt(this.velocity.x,l*u,7.5,t),this.velocity.z=kt(this.velocity.z,h*u,7.5,t)}else this.velocity.x=kt(this.velocity.x,0,8.5,t),this.velocity.z=kt(this.velocity.z,0,8.5,t);e.jumpPressed&&(this.grounded?(this.velocity.y=13.5,this.grounded=!1,(f=this.audio)==null||f.jump(),this.effects.dust(this.position,8,9076831,1.1)):this.abilities.jets&&!this.airJumpUsed&&(this.airJumpUsed=!0,this.velocity.y=11.5,(g=this.audio)==null||g.jets(),this.effects.jetBurst(this.position,6484991,18),this.effects.addShake(.8))),this.velocity.y-=31*t,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.velocity.y*t,d&&c>.5&&this.grounded&&(this.cameraShake=.25)}updateVehicle(t,e,i){var M,C,T,b;const n=e.moveZ,s=e.moveX;let o=33;this.abilities.overdrive&&e.sprint&&n>.1?(o=48,this.boosting=!0):this.boosting=!1,this.inWater&&(o*=.45),n!==0?(n>0&&this.boosting,this.speed=kt(this.speed,n*o,n>0?1.7:3.2,t),Math.abs(this.speed)<.4&&n!==0&&(this.speed=n*.4)):this.speed=kt(this.speed,0,.85,t),this.speed=Zt(this.speed,-13,o);const a=Zt(Math.abs(this.speed)/o,0,1);if(Math.abs(this.speed)>1.2){const L=Math.sign(this.speed);this.yaw-=s*(.9+a*1.45)*L*t}const l=Math.sin(this.yaw),h=Math.cos(this.yaw);this.velocity.x=kt(this.velocity.x,l*this.speed,5.5,t),this.velocity.z=kt(this.velocity.z,h*this.speed,5.5,t),e.jumpPressed&&(this.grounded?(this.velocity.y=11.5,this.grounded=!1,(M=this.audio)==null||M.jump(),this.effects.dust(this.position,10,9076831,1.5)):this.abilities.jets&&!this.airJumpUsed&&(this.airJumpUsed=!0,this.velocity.y=10,(C=this.audio)==null||C.jets(),this.effects.jetBurst(this.position,6484991,22))),this.velocity.y-=31*t,this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t,this.position.y+=this.velocity.y*t;const c=this.world.heightAt(this.position.x,this.position.z),d=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.world.heightAt(this.position.x+d*2.1,this.position.z+u*2.1),g=this.world.heightAt(this.position.x-d*2.1,this.position.z-u*2.1),v=this.world.heightAt(this.position.x-u*1,this.position.z+d*1),p=this.world.heightAt(this.position.x+u*1,this.position.z-d*1),m=this.grounded?-Math.atan2(f-g,4.2):Zt(this.velocity.y*.02,-.25,.25),y=this.grounded?Math.atan2(p-v,2)*.7:0;this.car.rotation.x=kt(this.car.rotation.x,m,8,t),this.car.rotation.z=kt(this.car.rotation.z,y,8,t),this.car.position.y=kt(this.car.position.y,Math.min(0,c-this.position.y)*.25+.02,10,t);for(const L of this.wheels)L.group.rotation.x+=this.speed*t*2.1,L.front&&(L.group.rotation.y=kt(L.group.rotation.y,-s*.45,10,t));const _=this.car.children.find(L=>L.isSprite);_&&(_.material.opacity=.25+a*.3),this.boosting&&this.speed>20?(T=this.audio)==null||T.setBoost(!0):(b=this.audio)==null||b.setBoost(!1),this.boosting&&this.speed>8&&(this.cameraShake=.35)}updateGround(t){var n,s,o;const e=this.world.heightAt(this.position.x,this.position.z),i=this.grounded;if(this.position.y<=e+.02){if(!i&&this.velocity.y<-8){const a=Zt(-this.velocity.y/22,0,1);this.landingSquash=a*.14,this.effects.dust(this.position,10+a*12,this.inWater?10474456:9076831,1.4+a),this.effects.addShake(a*1.8),(n=this.audio)==null||n.land(a),a>.5&&(this.cameraShake=a*1.2)}this.position.y=e,this.velocity.y=0,this.grounded=!0,this.airJumpUsed=!1}else this.grounded=!1;this.grounded&&this.inWater?(s=this.audio)==null||s.setWater(!0):(o=this.audio)==null||o.setWater(!1)}updateAimPose(t){if(this.mode!=="robot"){this.aiming=!1;return}const e=this.fireCooldown>.02||(this.firingRecently||0)>0;this.aiming=e;const i=Zt(this.fireCooldown/.2,0,1);if(this.armR){const n=this.aiming?-1.45-i*.16:0,s=this.aiming?-.1:.14;this.armR.rotation.x=kt(this.armR.rotation.x,n,12,t),this.armR.rotation.z=kt(this.armR.rotation.z,s,10,t)}this.armL&&(this.armL.rotation.z=kt(this.armL.rotation.z,.12,8,t))}updateWeapons(t,e){const i=this.weapon;this.fireCooldown<=0&&this.overheated<=0&&e.fire&&!this.transforming&&this.fire(i),e.fire&&(i==null?void 0:i.id)==="pistol"&&this.fireCooldown<=0&&this.overheated<=0}fire(t){var n,s;if(!this.combat)return;const e=this.getMuzzle(),i=new A().subVectors(this.aimPoint,e).normalize();t.spread&&(i.x+=(Math.random()-.5)*t.spread*2,i.y+=(Math.random()-.5)*t.spread*2,i.z+=(Math.random()-.5)*t.spread*2,i.normalize()),this.combat.spawnPlayerProjectile({origin:e,direction:i,weapon:t,owner:this}),this.fireCooldown=t.cooldown,this.heat=Math.min(120,this.heat+t.heat),this.firingRecently=.4,this.heat>=100&&(this.overheated=2.3,(n=this.audio)==null||n.overheat(),this.effects.addShake(.4)),this.effects.muzzleFlash(e,t.color,t.id==="mortar"?3.4:1.8),this.effects.addShake(t.shake*.35),(s=this.audio)==null||s.shoot(t.id),this.animRecoil=1,this.viewRecoil=1}getMuzzle(){var e,i;if(this.firstPerson&&((e=this.viewModel)!=null&&e.visible))return(i=this.fpCamera)==null||i.updateMatrixWorld(!0),this.viewMuzzle.getWorldPosition(new A);const t=this.mode==="vehicle"?this.carMuzzles[this.fireToggle?0:1]:this.muzzleRobot;return this.fireToggle=!this.fireToggle,t?(this.root.updateMatrixWorld(!0),t.getWorldPosition(new A)):this.position.clone().add(new A(0,2.5,0))}triggerEMP(){var e;this.empCooldown=10,this.energon=Math.max(0,this.energon-30);const t=this.position.clone();t.y+=1.2,this.effects.empWave(t),this.effects.addShake(2.2),(e=this.audio)==null||e.emp(),this.onEMP&&this.onEMP(t)}startTransform(){var t;this.transforming||(this.transforming=!0,this.transformDir=this.mode==="robot"?1:-1,this.transformFlashDone=!1,(t=this.audio)==null||t.transform(this.transformDir>0),this.effects.addShake(.8),this.effects.sparks(this.position.clone().add(new A(0,2,0)),14,9431551,1))}updateTransform(t){var i,n,s,o;this.transformT=Zt(this.transformT+t*1.85*this.transformDir,0,1);const e=this.transformT;if(this.robot.visible=!this.firstPerson&&e<.58,this.car.visible=!this.firstPerson&&e>=.58,this.viewModel&&(this.viewModel.visible=!1),this.hoodModel&&(this.hoodModel.visible=!1),this.robot.rotation.x=e*.9,this.robot.position.y=-e*.6,this.robot.scale.set(1-e*.18,1-e*.45,1-e*.1),this.car.scale.setScalar(.72+Zt((e-.58)/.42,0,1)*.28),this.car.rotation.x=0,this.car.rotation.z=0,this.rig.rotation.x=e*.2,this.car.position.y=0,this.muzzleRobot&&(this.muzzleRobot.visible=e<.3),!this.transformFlashDone&&Math.abs(e-.58)<.09){this.transformFlashDone=!0;const a=this.position.clone().add(new A(0,1.7,0));this.effects.transformFlash(a,9302015),this.effects.sparks(a,26,10352383,1.6),(i=this.audio)==null||i.transformClank(),this.effects.addShake(1.4)}e>=1&&this.transformDir>0?(this.transforming=!1,this.mode="vehicle",this.transformT=1,this.robot.visible=!1,this.car.visible=!this.firstPerson,this.car.scale.setScalar(1),this.viewModel&&(this.viewModel.visible=!1),this.hoodModel&&(this.hoodModel.visible=this.firstPerson),this.colliderRadius=1.9,this.speed=0,this.velocity.set(0,this.velocity.y,0),(n=this.audio)==null||n.setEngine(!0),this.robot.rotation.x=0,this.robot.position.y=0):e<=0&&this.transformDir<0&&(this.transforming=!1,this.mode="robot",this.transformT=0,this.robot.visible=!this.firstPerson,this.car.visible=!1,this.robot.rotation.x=0,this.robot.position.y=0,this.robot.scale.set(1,1,1),this.viewModel&&(this.viewModel.visible=this.firstPerson),this.hoodModel&&(this.hoodModel.visible=!1),this.rig.rotation.x=0,this.colliderRadius=1.35,this.speed=0,this.velocity.set(0,this.velocity.y,0),(s=this.audio)==null||s.setEngine(!1),(o=this.audio)==null||o.setBoost(!1)),this.mode==="vehicle"&&(this.root.rotation.y=this.yaw)}animate(t){if(this.mode==="robot"&&!this.transforming){const e=Math.hypot(this.velocity.x,this.velocity.z),i=Zt(e,0,16)*1.6;this.walkPhase+=t*(2.2+i);const n=Zt(e/12,0,1)*.62,s=Math.sin(this.walkPhase),o=Math.sin(this.walkPhase+Math.PI),a=this.landingSquash;if(this.rig.position.y=Math.abs(Math.sin(this.walkPhase*2))*n*.045-a,this.rig.rotation.z=Math.sin(this.walkPhase)*n*.03,this.legs.left.hip.rotation.x=s*n,this.legs.right.hip.rotation.x=o*n,this.legs.left.knee.rotation.x=Math.max(0,-s)*n*1.25+a*1.5,this.legs.right.knee.rotation.x=Math.max(0,-o)*n*1.25+a*1.5,this.legs.left.foot.rotation.x=-Math.max(0,-s)*n*.5,this.legs.right.foot.rotation.x=-Math.max(0,-o)*n*.5,this.arms&&(this.arms.left.shoulder.rotation.x=this.aiming?-.3:o*n*.55,this.arms.left.elbow.rotation.x=this.aiming?-.3:-.25-Math.max(0,o)*.35,this.aiming||(this.arms.right.shoulder.rotation.x=s*n*.55,this.arms.right.elbow.rotation.x=-.25-Math.max(0,s)*.35)),this.body.position.y=2.6+Math.sin(this.walkPhase*2)*n*.035,this.body.rotation.x=kt(this.body.rotation.x,this.aiming?.04:this.grounded?0:.12,6,t),this.body.rotation.z=-Math.sin(this.walkPhase)*n*.025,this.head.rotation.x=kt(this.head.rotation.x,this.aiming?.12:0,6,t),this.core.scale.setScalar(1+Math.sin(this.walkPhase*.5)*.06),!this.grounded&&this.legs){const l=Zt(this.velocity.y/14,-1,1);this.legs.left.hip.rotation.x=.5+l*.25,this.legs.right.hip.rotation.x=.35+l*.2,this.legs.left.knee.rotation.x=.9,this.legs.right.knee.rotation.x=.8}}else if(this.mode==="vehicle"&&!this.transforming){this.rig.position.y=0;const e=Zt(Math.abs(this.speed)/40,0,1);this.car.position.y=.02+Math.sin(performance.now()*.012)*.01*e,this.body.position.y=2.6}this.updateViewModel(t),this.firingRecently=Math.max(0,(this.firingRecently||0)-t)}updateViewModel(t){if(!this.viewModel||!this.viewModel.visible)return;this.viewRecoil=Math.max(0,this.viewRecoil-t*8.5);const e=Math.hypot(this.velocity.x,this.velocity.z),i=Zt(e/12,0,1),n=Math.sin(this.walkPhase)*.009*i,s=Math.abs(Math.sin(this.walkPhase*2))*.008*i,o=this.viewRecoil;if(this.viewArm.position.set(this.viewBase.x+n,this.viewBase.y+s-this.landingSquash*.3-o*.02,this.viewBase.z+o*.12),this.viewArm.rotation.set(.08-o*.2,-.08,Math.sin(this.walkPhase)*.012*i),this.viewBarrel){const a=this.weapon.color;this.viewBarrel.material.emissive.getHex()!==a&&this.viewBarrel.material.emissive.setHex(a)}}updateJetVisuals(t){!this.grounded||this.boosting;const e=this.boosting?1:this.grounded?0:.7;for(const i of this.jetSprites)i.material.opacity=kt(i.material.opacity,e,8,t),i.scale.setScalar((.9+Math.random()*.5)*(this.boosting?2.2:1.5));if(this.mode==="robot")for(let i=0;i<this.jetSprites.length;i++)this.jetSprites[i].visible=this.robot.visible&&e>.05;else{for(const i of this.jetSprites)i.visible=!1;for(const i of this.exhausts){const n=this.boosting?.85:Math.abs(this.speed)>10?.3:.12;i.material.opacity=kt(i.material.opacity,n,6,t),i.scale.setScalar(this.boosting?2.6+Math.random()*.6:1.2+Math.abs(this.speed)*.03)}}if(this.boostParticlesTimer===void 0&&(this.boostParticlesTimer=0),this.boostParticlesTimer-=t,this.mode==="vehicle"&&this.boosting&&this.boostParticlesTimer<=0){this.boostParticlesTimer=.045;const i=new A(-Math.sin(this.yaw),.7,-Math.cos(this.yaw)),n=this.position.clone().addScaledVector(i,2.7);this.effects.sparks(n,3,8383231,.7)}this.mode==="robot"&&!this.grounded&&this.abilities.jets&&this.boostParticlesTimer<=0&&(this.boostParticlesTimer=.07,this.effects.sparks(this.position.clone().add(new A(0,.6,0)),2,8383231,.7))}updateParticles(t){this.dustTimer-=t;const e=Math.hypot(this.velocity.x,this.velocity.z);if(this.dustTimer<=0&&this.grounded&&e>4){this.dustTimer=this.mode==="vehicle"?.055:.16;const i=this.mode==="vehicle"?new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).multiplyScalar(2.2):new A(0,.2,0),n=this.position.clone().add(i);this.effects.dust(n,this.mode==="vehicle"?4:2,this.inWater?10474456:9141080,this.mode==="vehicle"?1.4:.8)}if(this.mode==="vehicle"&&(this.trailTimer-=t,this.trailTimer<=0)){this.trailTimer=.14;for(const i of this.wheels){if(i.front)continue;const n=i.group.getWorldPosition(new A);this.effects.dust(n,1,this.inWater?10474456:9141080,.5)}}this.cameraShake=kt(this.cameraShake,0,5,t)}takeDamage(t,e){var n,s;if(this.dead||this.invuln>0)return;let i=t;this.shieldActive&&(i*=.16,this.energon=Math.max(0,this.energon-t*.55),this.shieldSphere.material.opacity=.35,this.effects.shieldImpact(this.position.clone().add(new A(0,2.3,0)),6484991),(n=this.audio)==null||n.shieldHit()),this.health=Math.max(0,this.health-i),this.timeSinceDamage=0,this.invuln=.35,this.cameraShake=Math.max(this.cameraShake,.9),this.effects.hitFlash(e,16730677),(s=this.audio)==null||s.playerHit(),this.onDamage&&this.onDamage(i),this.health<=0&&this.die()}die(){var t,e,i;this.dead||(this.dead=!0,this.deathTimer=0,this.shieldActive=!1,this.shieldMesh.visible=!1,this.effects.explosion(this.position.clone().add(new A(0,1.8,0)),16738885,2.4),this.effects.sparks(this.position.clone().add(new A(0,2,0)),60,16760954,2.5),(t=this.audio)==null||t.playerDeath(),(e=this.audio)==null||e.setEngine(!1),(i=this.audio)==null||i.setBoost(!1),this.robot.visible=!1,this.car.visible=!1,this.viewModel&&(this.viewModel.visible=!1),this.hoodModel&&(this.hoodModel.visible=!1),this.onDeath&&this.onDeath())}revive(){this.reset(!1),this.health=this.maxHealth,this.energon=this.maxEnergon,this.robot.visible=!this.firstPerson,this.car.visible=!1,this.viewModel&&(this.viewModel.visible=this.firstPerson),this.hoodModel&&(this.hoodModel.visible=!1),this.mode="robot",this.colliderRadius=1.35,this.root.rotation.y=this.yaw}addScore(t){this.score+=t}}const Zi=new A,rr=new A,Nn=new A,or=new A;function sh(r,t,e,i){const n=t.x-r.x,s=t.y-r.y,o=t.z-r.z,a=e.x-r.x,l=e.y-r.y,h=e.z-r.z,c=n*n+s*s+o*o,d=c>1e-6?Zt((a*n+l*s+h*o)/c,0,1):0;i.set(r.x+n*d,r.y+s*d,r.z+o*d);const u=e.x-i.x,f=e.y-i.y,g=e.z-i.z;return u*u+f*f+g*g}class ig{constructor(t,e,i,n){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.glowTexture=fn(64),this.projectiles=[],this.player=null,this.enemies=[],this.boss=null,this.onHitmarker=null,this.onEnemyKilled=null,this.onPlayerHit=null,this.materials=new Map,this.sprites=new Map,this.tempPool=[],this.buildPool(),this.time=0}getMaterial(t){return this.materials.has(t)||this.materials.set(t,new Ie({color:t,toneMapped:!1})),this.materials.get(t)}getGlow(t){return this.sprites.has(t)||this.sprites.set(t,new Ar({map:this.glowTexture,color:t,transparent:!0,opacity:.9,blending:Le,depthWrite:!1,toneMapped:!1})),this.sprites.get(t)}buildPool(){const t=new Ca(.075,.6,3,6);t.rotateX(Math.PI/2),this.boltGeo=t;for(let e=0;e<70;e++){const i=new Tt,n=new I(t,this.getMaterial(6484991));n.renderOrder=5,i.add(n);const s=new Mr(this.getGlow(6484991));s.scale.setScalar(1.3),i.add(s),i.visible=!1,this.scene.add(i),this.tempPool.push({group:i,core:n,glow:s,active:!1})}}takeFromPool(){let t=this.tempPool.find(e=>!e.active);if(!t){const e=new Tt,i=new I(this.boltGeo,this.getMaterial(6484991)),n=new Mr(this.getGlow(6484991));n.scale.setScalar(1.3),e.add(i),e.add(n),e.visible=!1,this.scene.add(e),t={group:e,core:i,glow:n,active:!1},this.tempPool.push(t)}return t.active=!0,t.group.visible=!0,t}spawnPlayerProjectile({origin:t,direction:e,weapon:i,owner:n}){const s=this.takeFromPool(),o={type:i.projectile,faction:"player",owner:n,slot:s,pos:t.clone(),prev:t.clone(),dir:e.clone().normalize(),speed:i.speed,damage:i.damage,splash:i.splash||0,gravity:i.gravity||0,radius:i.projectile==="mortar"?.22:.13,color:i.color,life:i.projectile==="mortar"?4:2.2,weapon:i,trailTimer:0},a=i.projectile==="mortar"?2.5:1;s.core.material=this.getMaterial(i.color),s.glow.material=this.getGlow(i.color),s.group.scale.setScalar(a),s.group.position.copy(t),s.group.quaternion.setFromUnitVectors(new A(0,0,1),o.dir),this.projectiles.push(o)}spawnEnemyProjectile({origin:t,direction:e,damage:i=9,speed:n=38,color:s=16735293,owner:o=null,radius:a=.18}){const l=this.takeFromPool(),h={type:"bolt",faction:"enemy",owner:o,slot:l,pos:t.clone(),prev:t.clone(),dir:e.clone().normalize(),speed:n,damage:i,splash:0,gravity:0,radius:a,color:s,life:4.2,trailTimer:0};l.core.material=this.getMaterial(s),l.glow.material=this.getGlow(s),l.group.scale.setScalar(1.35),l.group.position.copy(t),l.group.quaternion.setFromUnitVectors(new A(0,0,1),h.dir),this.projectiles.push(h)}spawnBossProjectile(t){this.spawnEnemyProjectile({...t,color:16726562,speed:30,damage:t.damage??14,radius:.32})}enemiesInRadius(t,e){const i=[];for(const n of this.enemies)!n.alive||!n.active||(n.getHitPosition(or),or.distanceTo(t)<=e+(n.hitRadius||1.2)&&i.push(n));return this.boss&&this.boss.alive&&this.boss.active&&(this.boss.getHitPosition(or),or.distanceTo(t)<=e+4&&i.push(this.boss)),i}applyDamage(t,e,i,n=!1){var s;t.alive&&(t.takeDamage(e,i,n),this.onHitmarker&&this.onHitmarker(n),(s=this.audio)==null||s.hit(),this.effects.sparks(i,n?12:7,n?16763498:16752736,1,{life:.32,size:.1}),!t.alive&&this.onEnemyKilled&&this.onEnemyKilled(t))}explode(t,e,i,n,s){var a;this.effects.explosion(t,n,1.2),(a=this.audio)==null||a.explosion(.8);const o=this.enemiesInRadius(t,i);for(const l of o){l.getHitPosition(Zi);const h=Zi.distanceTo(t),c=1-Zt(h/i,0,.98);this.applyDamage(l,e*c,Zi.clone(),!1)}}update(t){var e;this.time+=t;for(let i=this.projectiles.length-1;i>=0;i--){const n=this.projectiles[i];if(n.life-=t,n.life<=0){this.release(i);continue}n.prev.copy(n.pos),n.dir.y-=n.gravity*t,n.gravity&&n.dir.normalize(),n.pos.addScaledVector(n.dir,n.speed*t),n.slot.group.position.copy(n.pos),n.slot.group.quaternion.setFromUnitVectors(rr.set(0,0,1),n.dir),n.type==="mortar"&&(n.trailTimer-=t,n.trailTimer<=0&&(n.trailTimer=.025,this.effects.sparks(n.pos,2,16756832,.5,{life:.35,size:.16,gravity:-1})));let s=!1;if(n.faction==="player"){const a=this.enemies.filter(l=>l.alive&&l.active);this.boss&&this.boss.alive&&this.boss.active&&a.push(this.boss);for(const l of a){l.getHitPosition(Nn);const h=(l.hitRadius||1.2)+n.radius;if(sh(n.prev,n.pos,Nn,Zi)<h*h){n.type==="mortar"?(this.explode(n.pos.clone(),n.splash,6.5,n.color,n.owner),this.applyDamage(l,n.damage,Nn.clone(),!0)):this.applyDamage(l,n.damage,Zi.clone(),Math.random()<.12),this.release(i),s=!0;break}}if(s)continue}else{const a=this.player;if(a&&!a.dead){a.getShieldPosition?a.getShieldPosition(Nn):Nn.copy(a.position).add(rr.set(0,2.2,0));const l=Zi.copy(a.position).add(rr.set(0,2,0)).distanceTo(n.pos);if(a.shieldActive&&l<3.1){this.effects.shieldImpact(n.pos.clone(),6484991),(e=this.audio)==null||e.shieldHit(),this.release(i);continue}const h=Nn.copy(a.position).add(rr.set(0,1.9,0));if(sh(n.prev,n.pos,h,Zi)<1.75*1.75){a.takeDamage(n.damage,n.pos.clone()),this.onPlayerHit&&this.onPlayerHit(n.damage),this.release(i);continue}}}const o=this.world.heightAt(n.pos.x,n.pos.z);if(n.pos.y<=o+.2){n.type==="mortar"?this.explode(n.pos.clone(),n.splash,7,n.color,n.owner):this.effects.bulletImpact(n.pos.clone(),n.color),this.release(i);continue}(Math.abs(n.pos.x)>800||Math.abs(n.pos.z)>800||n.pos.y>400)&&this.release(i)}}release(t){const e=this.projectiles[t];e&&(e.slot.active=!1,e.slot.group.visible=!1,this.projectiles.splice(t,1))}}const ng=[[-30,250],[90,90],[-170,210],[-268,-30],[250,-20],[140,-220],[-250,-190],[-90,-380],[220,-330],[330,60],[-430,-160],[40,-90],[430,-240],[-80,360]],sg=[[34,200],[-110,60],[-220,120],[180,-70],[300,-250],[-300,-260],[-60,-300],[120,-410],[420,-120],[-460,-300],[-130,-120],[250,210]];class rg{constructor(t,e,i,n){this.scene=t,this.world=e,this.effects=i,this.audio=n,this.glowTexture=fn(128),this.relics=[],this.canisters=[],this.shards=[],this.onRelic=null,this.onHeal=null,this.onEnergy=null,this.onShard=null,this.time=0,this.buildRelics(),this.buildCanisters()}buildRelics(){for(const t of this.world.relics){const e=new Tt,i=t.y+3.35;e.position.set(t.x,i,t.z),new St(t.color);const n=new It({color:new St(t.color).multiplyScalar(.25),emissive:t.color,emissiveIntensity:2.2,metalness:.65,roughness:.15}),s=new I(new gs(.72,0),n);s.castShadow=!0,e.add(s);const o=new I(new di(1,0),new Ie({color:t.color,wireframe:!0,transparent:!0,opacity:.4,blending:Le,depthWrite:!1,toneMapped:!1}));e.add(o);const a=new It({color:1317922,emissive:t.color,emissiveIntensity:1.1,metalness:.8,roughness:.3}),l=new I(new fi(1.22,.035,4,40),a);l.rotation.x=Math.PI/2.4,e.add(l);const h=new I(new fi(1.42,.025,4,40),a);h.rotation.y=Math.PI/2.2,e.add(h);const c=Ee(this.glowTexture,t.color,5.2);c.material.opacity=.5,e.add(c);const d=[];for(let u=0;u<5;u++){const f=new I(new Da(.12,0),n);f.userData.angle=u/5*Math.PI*2,f.userData.radius=1.6+Math.random()*.3,f.userData.height=(Math.random()-.5)*1.1,e.add(f),d.push(f)}this.scene.add(e),this.relics.push({site:t,group:e,core:s,inner:o,ring1:l,ring2:h,glow:c,shards:d,baseY:i,collected:!1}),t.pickup=e}}buildCanisters(){const t=new It({color:797208,emissive:7665576,emissiveIntensity:1.8,metalness:.5,roughness:.25}),e=new It({color:667194,emissive:6484991,emissiveIntensity:1.8,metalness:.5,roughness:.25});for(const[i,n]of ng){const s=this.world.heightAt(i,n);if(s<Be+.3)continue;const o=new Tt;o.position.set(i,s+1.2,n);const a=new I(new et(.7,.22,.22),t),l=new I(new et(.22,.7,.22),t);o.add(a,l);const h=new I(new et(.95,.95,.95),new Ie({color:7665576,wireframe:!0,transparent:!0,opacity:.22,blending:Le,depthWrite:!1}));o.add(h);const c=Ee(this.glowTexture,7665576,2.6);c.material.opacity=.4,o.add(c);const d=new I(new Xt(.08,.5,8,8,1,!0),new Ie({color:7665576,transparent:!0,opacity:.08,blending:Le,depthWrite:!1,side:Pe}));d.position.y=4,o.add(d),this.scene.add(o),this.canisters.push({type:"health",group:o,x:i,z:n,y:s+1.2,baseY:s+1.2,active:!0,timer:0,spin:h})}for(const[i,n]of sg){const s=this.world.heightAt(i,n);if(s<Be+.3)continue;const o=new Tt;o.position.set(i,s+1.2,n);const a=new I(new Xt(.24,.3,.85,6),e);o.add(a);for(let c=0;c<3;c++){const d=new I(new fi(.3,.035,4,12),new Ie({color:10484479,transparent:!0,opacity:.8,blending:Le,depthWrite:!1}));d.rotation.x=Math.PI/2,d.position.y=-.28+c*.28,o.add(d)}const l=Ee(this.glowTexture,6484991,2.4);l.material.opacity=.4,o.add(l);const h=new I(new Xt(.08,.45,7,8,1,!0),new Ie({color:6484991,transparent:!0,opacity:.07,blending:Le,depthWrite:!1,side:Pe}));h.position.y=3.5,o.add(h),this.scene.add(o),this.canisters.push({type:"energy",group:o,x:i,z:n,y:s+1.2,baseY:s+1.2,active:!0,timer:0,spin:null})}}spawnShard(t,e=30,i=5){const n=new Tt,s=new It({color:1326404,emissive:6484991,emissiveIntensity:2.2,metalness:.4,roughness:.2}),o=new I(new gs(.28,0),s);n.add(o);const a=Ee(this.glowTexture,6484991,1.1);n.add(a),this.scene.add(n);const l=t.clone();n.position.copy(l),this.shards.push({group:n,mesh:o,glow:a,value:e,energon:i,vel:new A((Math.random()-.5)*4,4+Math.random()*3,(Math.random()-.5)*4),life:32,age:0,grounded:!1,collected:!1})}collectRelic(t){var i;t.collected=!0,t.site.collected=!0,t.group.visible=!1,t.site.beam&&(t.site.beam.visible=!1),t.site.marker&&(t.site.marker.visible=!1);const e=t.group.position.clone();this.effects.pickupBurst(e,t.site.color),(i=this.audio)==null||i.relicPickup(),this.onRelic&&this.onRelic(t.site)}update(t,e,i){var n,s,o;this.time+=t;for(const a of this.relics){if(a.collected)continue;const l=i;a.group.position.y=a.baseY+Math.sin(l*1.3+a.site.x*.03)*.28,a.core.rotation.y+=t*.8,a.core.rotation.x+=t*.35,a.inner.rotation.y-=t*.45,a.inner.rotation.z+=t*.2,a.ring1.rotation.z+=t*.6,a.ring2.rotation.x+=t*.4,a.glow.material.opacity=.42+Math.sin(l*2.2)*.12;for(const h of a.shards){const c=h.userData.angle+l*.8;h.position.set(Math.cos(c)*h.userData.radius,h.userData.height+Math.sin(l*1.8+c)*.25,Math.sin(c)*h.userData.radius),h.rotation.x+=t*2,h.rotation.y+=t*1.4}e&&!e.dead&&de(e.position.x,e.position.z,a.site.x,a.site.z)<3.2&&Math.abs(e.position.y+1.8-a.group.position.y)<5.5&&this.collectRelic(a)}for(const a of this.canisters){if(!a.active){a.timer-=t,a.timer<=0&&(a.active=!0,a.group.visible=!0,a.group.scale.setScalar(.2));continue}a.group.position.y=a.baseY+Math.sin(i*1.6+a.x*.1)*.12,a.group.rotation.y+=t*(a.type==="health"?.9:1.4),a.spin&&(a.spin.rotation.x+=t*.6);const l=1;a.group.scale.x<l&&a.group.scale.setScalar(Math.min(l,a.group.scale.x+t*1.8)),e&&!e.dead&&de(e.position.x,e.position.z,a.x,a.z)<2.2&&Math.abs(e.position.y+1.5-a.group.position.y)<4&&(a.active=!1,a.group.visible=!1,a.timer=a.type==="health"?32:24,a.type==="health"?(e.health=Math.min(e.maxHealth,e.health+35),this.effects.healBurst(e.position.clone().add(new A(0,2,0))),(n=this.audio)==null||n.healthPickup(),this.onHeal&&this.onHeal(35)):(e.energon=Math.min(e.maxEnergon,e.energon+45),e.addScore(120),this.effects.pickupBurst(e.position.clone().add(new A(0,2,0)),6484991),(s=this.audio)==null||s.energyPickup(),this.onEnergy&&this.onEnergy(45)))}for(let a=this.shards.length-1;a>=0;a--){const l=this.shards[a];if(l.age+=t,l.life-=t,l.life<=0){l.group.visible=!1,this.scene.remove(l.group),this.shards.splice(a,1);continue}l.mesh.rotation.y+=t*4,l.mesh.rotation.x+=t*2;const h=this.world.heightAt(l.group.position.x,l.group.position.z);if(l.grounded||(l.vel.y-=20*t,l.group.position.addScaledVector(l.vel,t),l.group.position.y<=h+.3&&(l.group.position.y=h+.3,l.vel.y=Math.abs(l.vel.y)*.4,l.vel.x*=.5,l.vel.z*=.5,l.vel.y<.6&&(l.vel.set(0,0,0),l.grounded=!0))),e&&!e.dead&&l.age>.45){const c=new A(e.position.x-l.group.position.x,e.position.y+1.8-l.group.position.y,e.position.z-l.group.position.z),d=c.length();if(d<15){c.normalize();const u=(1-d/15)*28+8;l.group.position.addScaledVector(c,u*t),l.grounded=!0,d<1.35&&(e.addScore(l.value),e.energon=Math.min(e.maxEnergon,e.energon+l.energon),this.effects.sparks(l.group.position.clone(),5,6484991,.7,{life:.3}),(o=this.audio)==null||o.shard(),this.onShard&&this.onShard(l.value),this.scene.remove(l.group),this.shards.splice(a,1))}}l.glow.material.opacity=.4+Math.sin(l.age*6)*.15}}}const _o=new A,$h=new A;function Ve(r,t=.8,e=.4,i={}){return new It({color:r,metalness:t,roughness:e,...i})}class Kh{constructor(t,e,i,n,s,o){this.scene=t,this.world=e,this.effects=i,this.combat=n,this.audio=s,this.config=o,this.type=o.type||"trooper",this.isBoss=!1,this.isDrone=this.type==="decepticlone",this.scaleFactor=this.type==="bruiser"?1.2:(this.isDrone,1),this.position=new A(o.x,0,o.z),this.position.y=e.heightAt(o.x,o.z),this.anchor=this.position.clone(),this.yaw=o.yaw??Math.random()*Math.PI*2,this.alive=!0,this.active=!0,this.awakened=!0,this.health=this.maxHealth=this.type==="bruiser"?170:this.isDrone?58:85,this.hitRadius=this.type==="bruiser"?1.7:this.isDrone?1.25:1.15,this.centerHeight=this.type==="bruiser"?2.8:this.isDrone?2.15:2,this.speed=this.type==="bruiser"?6.4:this.isDrone?8.1:5.6,this.engageRange=this.type==="bruiser"?55:this.isDrone?82:46,this.preferred=this.type==="bruiser"?8:this.isDrone?21:18,this.attackRange=this.type==="bruiser"?4.6:this.isDrone?46:38,this.attackCooldown=1.2+Math.random()*1.8,this.windup=0,this.pendingAttack=null,this.stunTimer=0,this.flashTimer=0,this.wasFlashing=!1,this.deadTimer=0,this.state="patrol",this.patrolTimer=0,this.patrolTarget=this.position.clone(),this.legPhase=Math.random()*10,this.aggro=!1,this.lastKnown=new A,this.random=sn((o.seed||Math.random()*1e9)|0),this.scoreValue=this.type==="bruiser"?250:this.isDrone?190:120,this.glowing=null,this.hitPoint=new A,this.bobPhase=Math.random()*Math.PI*2,this.glowTexture=fn(64),this.buildModel(),this.buildHealthBar(),t.add(this.root),this.root.position.copy(this.position),this.root.rotation.y=this.yaw}buildModel(){if(this.isDrone){this.buildDecepticlone();return}const t=this.type==="bruiser"?2366251:1907236;this.mats={body:Ve(t,.78,.44),purple:Ve(4861026,.72,.4),dark:Ve(1052181,.7,.52),silver:Ve(9147034,.92,.3),accent:new It({color:2756376,emissive:16726054,emissiveIntensity:1.9,metalness:.6,roughness:.3}),visor:new It({color:3802630,emissive:16721431,emissiveIntensity:3.1,metalness:.5,roughness:.2}),gold:Ve(9334069,.85,.4)},this.flashMats=[this.mats.body,this.mats.purple,this.mats.dark];for(const v of this.flashMats)v.userData.baseEmissive=v.emissive.clone(),v.userData.baseIntensity=v.emissiveIntensity;const e=new Tt,i=new Tt;e.add(i);const n=this.scaleFactor;i.scale.setScalar(n),this.root=e,this.rig=i;const s=new I(new et(1.5,1.35,.82),this.mats.body);s.position.y=2.35,i.add(s);const o=new I(new et(1.15,.52,.22),this.mats.purple);o.position.set(0,2.45,.47),i.add(o);const a=new I(new et(.34,.16,.08),this.mats.accent);a.position.set(0,2.36,.6),i.add(a);const l=new I(new et(.9,.55,.62),this.mats.dark);l.position.y=1.63,i.add(l);const h=new I(new et(1.15,.5,.7),this.mats.body);h.position.y=1.28,i.add(h);const c=new Tt;c.position.y=3.25,i.add(c);const d=new I(new et(.6,.55,.6),this.mats.body);c.add(d);const u=new I(new et(.5,.3,.1),this.mats.dark);u.position.set(0,-.03,.31),c.add(u);const f=new I(new et(.42,.1,.06),this.mats.visor);f.position.set(0,.02,.37),c.add(f);for(const v of[-1,1]){const p=new I(new Ai(.09,.42,4),this.mats.silver);p.position.set(v*.24,.38,-.02),p.rotation.z=v*.24,c.add(p);const m=new I(new et(.55,.65,.8),this.mats.purple);m.position.set(v*.96,2.65,0),i.add(m);const y=new I(new Ai(.13,.42,4),this.mats.silver);y.position.set(v*1.1,3,-.06),y.rotation.z=v*.2,i.add(y)}this.head=c,this.arms={};for(const v of[-1,1]){const p=new Tt;p.position.set(v*1.03,2.62,0),i.add(p);const m=new I(new et(.36,.8,.42),this.mats.body);m.position.y=-.5,p.add(m);const y=new Tt;y.position.y=-.92,p.add(y);const _=new I(new et(.42,.78,.48),this.mats.purple);_.position.y=-.44,y.add(_);const M=new I(new et(.3,.34,.36),this.mats.silver);if(M.position.y=-.92,y.add(M),v>0){const C=new I(new Xt(.13,.17,.9,6),this.mats.dark);C.rotation.x=Math.PI/2,C.position.set(0,-.38,.55),y.add(C);const T=new I(new Xt(.075,.1,.35,6),this.mats.accent);T.rotation.x=Math.PI/2,T.position.set(0,-.38,1.08),y.add(T);const b=new ne;b.position.set(0,-.38,1.28),y.add(b),this.muzzle=b,this.armR=p,this.forearmR=y}else if(this.armL=p,this.forearmL=y,this.type==="bruiser"){const C=new I(new et(.75,.75,.75),this.mats.silver);C.position.y=-1,y.add(C),this.fistL=C,this.pendingFistR=C.clone(),this.pendingFistR.position.y=-1}this.arms[v>0?"right":"left"]={shoulder:p,elbow:y}}this.pendingFistR&&(this.forearmR.add(this.pendingFistR),this.fistR=this.pendingFistR,this.pendingFistR=null),this.legs={};for(const v of[-1,1]){const p=new Tt;p.position.set(v*.42,1.2,0),i.add(p);const m=new I(new et(.45,.8,.55),this.mats.body);m.position.y=-.42,p.add(m);const y=new Tt;y.position.y=-.86,p.add(y);const _=new I(new et(.4,.85,.48),this.mats.purple);_.position.y=-.42,y.add(_);const M=new I(new et(.46,.22,.75),this.mats.silver);M.position.set(0,-.91,.13),y.add(M),this.legs[v>0?"right":"left"]={hip:p,knee:y,foot:M}}if(this.type==="bruiser"){const v=new I(new et(1,.8,.4),this.mats.dark);v.position.set(0,2.5,-.55),i.add(v);for(let p=0;p<3;p++){const m=new I(new et(.18,.5,.08),this.mats.accent);m.position.set(-.3+p*.3,2.55,-.77),i.add(m)}}const g=Ee(this.glowTexture,16730668,1.7);g.position.set(0,-.4,1.4),g.material.opacity=0,this.forearmR.add(g),this.chargeGlow=g,e.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)})}buildDecepticlone(){this.mats={body:Ve(3352391,.82,.4,{emissive:1707302,emissiveIntensity:.75}),plate:Ve(5911672,.76,.38,{emissive:2363440,emissiveIntensity:.7}),dark:Ve(1511457,.7,.5,{emissive:525324,emissiveIntensity:.5}),silver:Ve(10792116,.92,.28),accent:new It({color:2756376,emissive:16726054,emissiveIntensity:1.45,metalness:.6,roughness:.25}),visor:new It({color:3802630,emissive:16721431,emissiveIntensity:3.6,metalness:.5,roughness:.18}),energy:new It({color:1706540,emissive:11820287,emissiveIntensity:2.5,metalness:.5,roughness:.2})},this.flashMats=[this.mats.body,this.mats.plate,this.mats.dark];for(const h of this.flashMats)h.userData.baseEmissive=h.emissive.clone(),h.userData.baseIntensity=h.emissiveIntensity;const t=new Tt,e=new Tt;e.position.y=2.15,t.add(e),this.root=t,this.rig=e;const i=new I(new di(.82,1),this.mats.body);i.scale.set(1.15,.9,1.35),e.add(i);const n=new I(new di(.64,1),this.mats.plate);n.scale.set(1.25,.72,1.3),n.position.y=.18,e.add(n);const s=new I(new ki(.22,10,8),this.mats.energy);s.position.set(0,.02,.92),e.add(s),this.core=s;const o=new I(new ki(.13,10,8),this.mats.visor);o.scale.set(1.35,.65,.55),o.position.set(0,.38,1.02),e.add(o);for(const h of[-1,1]){const c=new I(new et(.34,.1,.14),this.mats.silver);c.position.set(h*.42,.49,.92),c.rotation.z=h*-.35,e.add(c)}const a=new I(new fi(1.42,.055,6,32),this.mats.energy);a.rotation.x=Math.PI/2,a.position.y=.02,e.add(a),this.ring=a,this.gunPods={};for(const h of[-1,1]){const c=new Tt;c.position.set(h*1.12,.02,.12),e.add(c);const d=new I(new et(.46,.5,1.18),this.mats.plate);c.add(d);const u=new I(new et(.36,.16,.3),this.mats.accent);u.position.set(0,.2,.38),c.add(u);const f=new I(new Xt(.075,.1,.62,7),this.mats.dark);f.rotation.x=Math.PI/2,f.position.set(0,-.04,.78),c.add(f);const g=new I(new Xt(.09,.09,.12,7),this.mats.accent);g.rotation.x=Math.PI/2,g.position.set(0,-.04,1.1),c.add(g);const v=new ne;v.position.set(0,-.04,1.18),c.add(v),h>0?(this.muzzle=v,this.podR=c):(this.podL=c,this.muzzleL=v),this.gunPods[h>0?"right":"left"]=c}for(const h of[-1,1]){const c=new I(new et(.12,.7,.5),this.mats.silver);c.position.set(h*.65,-.55,-.55),c.rotation.z=h*.45,e.add(c)}this.droneJets=[];for(const h of[-1,1]){const c=Ee(this.glowTexture,11820287,1.8);c.position.set(h*.85,-.75,-.15),c.material.opacity=.75,e.add(c),this.droneJets.push(c)}const l=Ee(this.glowTexture,16726565,1.45);l.position.set(0,-.04,1.3),l.material.opacity=0,this.podR.add(l),this.chargeGlow=l,this.arms={left:{shoulder:new Tt,elbow:new Tt},right:{shoulder:new Tt,elbow:new Tt}},this.legs={left:{hip:new Tt,knee:new Tt},right:{hip:new Tt,knee:new Tt}},this.head=new Tt,t.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)})}buildHealthBar(){const t=new Tt,e=new Ie({color:1181706,transparent:!0,opacity:.8,depthTest:!1,depthWrite:!1}),i=new Ie({color:16730424,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}),n=new mi(2.2,.16),s=new mi(2.2,.16);s.translate(1.1,0,0);const o=new I(n,e),a=new I(s,i);a.position.x=-1.1,a.position.z=.01,t.add(o),t.add(a),t.position.y=this.type==="bruiser"?4.6:this.isDrone?3.55:3.7,t.visible=!1,t.renderOrder=20,this.root.add(t),this.healthBar=t,this.healthFill=a,this.healthBarTimer=0}getHitPosition(t){return t.copy(this.position).add($h.set(0,this.centerHeight,0))}takeDamage(t,e,i=!1){this.alive&&(this.health-=t,this.flashTimer=.1,this.healthBarTimer=3.2,this.healthBar.visible=!0,this.healthFill.scale.x=Zt(this.health/this.maxHealth,0,1),this.aggro=!0,this.lastKnown.copy(this.combat.player?this.combat.player.position:this.position),this.health<=0?this.die():this.audio&&this.audio.enemyHit(this.type==="bruiser"))}die(){var e;if(!this.alive)return;this.alive=!1,this.active=!1,this.deadTimer=0,this.root.visible=!0;const t=this.position.clone().add(new A(0,this.centerHeight,0));this.effects.explosion(t,10312959,this.type==="bruiser"?1.5:1),this.effects.sparks(t,38,16751178,2),(e=this.audio)==null||e.enemyDeath(this.type==="bruiser"),this.healthBar.visible=!1,this.combat.onEnemyKilled&&this.combat.onEnemyKilled(this)}update(t,e,i,n){if(!this.alive){this.deadTimer+=t,this.deadTimer>.35&&(this.root.visible=!1);return}if(!this.active)return;const s=e&&!e.dead,o=de(this.position.x,this.position.z,e.position.x,e.position.z),a=Math.abs(e.position.y-this.position.y);if(s&&!this.aggro&&o<this.engageRange&&a<22&&(this.aggro=!0,this.lastKnown.copy(e.position)),this.aggro&&(!s||o>85)&&(this.aggro=!1,this.state="return"),this.stunTimer>0){this.stunTimer-=t,this.state="stunned",this.root.position.x+=(Math.random()-.5)*t*.3,this.root.position.z+=(Math.random()-.5)*t*.3,this.stunTimer<=0&&(this.state="chase",this.root.rotation.z=0),this.updateVisuals(t,i);return}if(this.attackCooldown-=t,this.flashTimer-=t,this.aggro&&s){this.lastKnown.copy(e.position),this.attackCooldown=Math.max(this.attackCooldown,0);const l=Math.atan2(e.position.x-this.position.x,e.position.z-this.position.z),h=7;if(this.yaw=xs(this.yaw,l,h,t),this.windup>0)this.windup-=t,this.state="attack",this.chargeGlow.material.opacity=.55+Math.sin(n*30)*.25,this.chargeGlow.scale.setScalar(1.4+(.8-this.windup)*2),this.windup<=0&&(this.releaseAttack(e),this.chargeGlow.material.opacity=0);else{this.chargeGlow.material.opacity=kt(this.chargeGlow.material.opacity,0,12,t);let c=null;if(this.type==="bruiser")o>3.6&&(c=this.toward(e.position,this.speed,t)),o<this.attackRange&&this.attackCooldown<=0&&(this.windup=.55,this.pendingAttack="slam");else if(this.isDrone){if(o>this.preferred+4)c=this.toward(e.position,this.speed,t);else if(o<this.preferred-6)c=this.toward(e.position,-this.speed*.8,t);else{const d=Math.sin(n*1.15+this.bobPhase)*1.4;c=_o.set(Math.cos(l)*d*t*this.speed,0,-Math.sin(l)*d*t*this.speed)}o<this.attackRange&&this.attackCooldown<=0&&this.windup<=0&&(this.windup=.32,this.pendingAttack="drone")}else{if(o>this.preferred+5)c=this.toward(e.position,this.speed,t);else if(o<this.preferred-5)c=this.toward(e.position,-this.speed*.7,t);else{const d=Math.sin(n*.55+this.random()*6)*.9;c=_o.set(Math.cos(l)*d*t*this.speed*.45,0,-Math.sin(l)*d*t*this.speed*.45)}o<this.attackRange&&this.attackCooldown<=0&&this.windup<=0&&(this.windup=.45,this.pendingAttack="shoot")}c&&this.applyMove(c.x,c.z)}this.state=this.windup>0?"attack":"chase",this.windup<=0&&this.attackCooldown<=0&&(this.type==="bruiser"&&o<this.attackRange?(this.windup=.55,this.pendingAttack="slam"):this.type!=="bruiser"&&!this.isDrone&&o<this.attackRange&&(this.windup=.45,this.pendingAttack="shoot"))}else if(this.state=this.aggro?"return":"patrol",this.state==="return")de(this.position.x,this.position.z,this.anchor.x,this.anchor.z)>4?this.applyMove(...this.towardDelta(this.anchor,this.speed*.8,t)):this.aggro=!1;else{if(this.patrolTimer-=t,this.patrolTimer<=0){const h=this.random()*Math.PI*2,c=this.random()*(this.config.patrolRadius||14);this.patrolTarget.set(this.anchor.x+Math.cos(h)*c,0,this.anchor.z+Math.sin(h)*c),this.patrolTarget.y=this.world.heightAt(this.patrolTarget.x,this.patrolTarget.z),this.patrolTimer=2.5+this.random()*4,this.state="patrol"}if(de(this.position.x,this.position.z,this.patrolTarget.x,this.patrolTarget.z)>1.2){const h=this.towardDelta(this.patrolTarget,this.speed*.32,t);this.applyMove(h.x,h.z),this.yaw=xs(this.yaw,Math.atan2(h.x,h.z),4,t)}}this.world.resolve(this.position,.9),this.position.y=this.world.heightAt(this.position.x,this.position.z),this.root.position.copy(this.position),this.root.rotation.y=this.yaw,this.updateVisuals(t,i)}toward(t,e,i){const n=t.x-this.position.x,s=t.z-this.position.z,o=Math.hypot(n,s)||1;return _o.set(n/o*e*i,0,s/o*e*i)}towardDelta(t,e,i){const n=t.x-this.position.x,s=t.z-this.position.z,o=Math.hypot(n,s)||1;return{x:n/o*e*i,z:s/o*e*i}}applyMove(t,e){if(this.position.x+=t,this.position.z+=e,de(this.position.x,this.position.z,this.anchor.x,this.anchor.z)>80){const n=this.anchor.x-this.position.x,s=this.anchor.z-this.position.z,o=Math.hypot(n,s)||1;this.position.x=this.anchor.x-n/o*80,this.position.z=this.anchor.z-s/o*80}this.legPhase+=Math.hypot(t,e)*7}releaseAttack(t){var e,i,n;if(this.pendingAttack==="shoot"){const s=new A;this.root.updateMatrixWorld(!0),this.muzzle.getWorldPosition(s);const a=t.position.clone().add(new A(0,2,0)).sub(s).normalize(),l=.035;a.x+=(Math.random()-.5)*l*2,a.y+=(Math.random()-.5)*l,a.z+=(Math.random()-.5)*l*2,this.combat.spawnEnemyProjectile({origin:s,direction:a.normalize(),damage:9,speed:36,owner:this}),this.effects.muzzleFlash(s,16730668,1.6),(e=this.audio)==null||e.enemyShoot(),this.attackCooldown=1.5+Math.random()*1.1}else if(this.pendingAttack==="drone"){this.root.updateMatrixWorld(!0);const s=new A,o=t.position.clone().add(new A(0,2,0));for(let a=0;a<2;a++){(a===0?this.muzzle:this.muzzleL).getWorldPosition(s);const h=o.clone().sub(s).normalize(),c=.02;h.x+=(Math.random()-.5)*c*2,h.y+=(Math.random()-.5)*c,h.z+=(Math.random()-.5)*c*2,this.combat.spawnEnemyProjectile({origin:s.clone(),direction:h.normalize(),damage:6,speed:44,owner:this})}this.effects.muzzleFlash(s,16730668,1.2),(i=this.audio)==null||i.enemyShoot(),this.attackCooldown=1.15+Math.random()*.75}else if(this.pendingAttack==="slam"){const s=this.position.clone().add(new A(0,.5,0));this.effects.ring(s,16735293,8,.45,1.2),this.effects.dust(s,16,7891794,1.4),this.effects.addShake(1.4),(n=this.audio)==null||n.slam(),de(this.position.x,this.position.z,t.position.x,t.position.z)<7&&Math.abs(t.position.y-this.position.y)<4&&t.takeDamage(20,this.position.clone()),this.attackCooldown=2.1}this.pendingAttack=null}updateVisuals(t,e){if(this.isDrone){this.updateDroneVisuals(t,e);return}const i=this.state==="chase"||this.state==="patrol"||this.state==="return",n=i?1:0;this.legPhase+=t*(n?7:1.5);const s=i?.55:.04,o=Math.sin(this.legPhase);this.legs.left.hip.rotation.x=kt(this.legs.left.hip.rotation.x,o*s,10,t),this.legs.right.hip.rotation.x=kt(this.legs.right.hip.rotation.x,-o*s,10,t),this.legs.left.knee.rotation.x=kt(this.legs.left.knee.rotation.x,Math.max(0,-o)*s*1.2,10,t),this.legs.right.knee.rotation.x=kt(this.legs.right.knee.rotation.x,Math.max(0,o)*s*1.2,10,t),this.arms.left.shoulder.rotation.x=-o*s*.6,this.windup>0?(this.armR.rotation.x=kt(this.armR.rotation.x,-1.5,8,t),this.armR.rotation.z=kt(this.armR.rotation.z,-.1,6,t)):(this.armR.rotation.x=kt(this.armR.rotation.x,o*s*.5,6,t),this.armR.rotation.z=kt(this.armR.rotation.z,.1,6,t)),this.rig.position.y=Math.abs(Math.sin(this.legPhase))*.035*(i?1:.2),this.rig.rotation.z=Math.sin(this.legPhase)*.02*(i?1:0),this.head.rotation.y=Math.sin(this.legPhase*.37)*.06,this.stunTimer>0?(this.root.rotation.z=Math.sin(this.stunTimer*32)*.05,Math.random()<t*16&&this.effects.sparks(this.position.clone().add(new A(0,2.5,0)),1,12946687,.6,{life:.25})):this.root.rotation.z=kt(this.root.rotation.z,0,5,t),this.flashTimer-=t;const a=this.flashTimer>0;if(a!==this.wasFlashing){this.wasFlashing=a;for(const l of this.flashMats)a?(l.emissive.setHex(16777215),l.emissiveIntensity=1.2):(l.emissive.copy(l.userData.baseEmissive),l.emissiveIntensity=l.userData.baseIntensity)}this.healthBarTimer>0?(this.healthBarTimer-=t,this.healthBar.visible=!0,this.healthBar.quaternion.copy(this.root.quaternion).invert().multiply(e.quaternion),this.healthBar.position.y=this.type==="bruiser"?4.6:3.7):this.healthBar.visible=!1}updateDroneVisuals(t,e){this.bobPhase+=t;const i=this.state==="chase"||this.state==="attack",n=Math.sin(this.bobPhase*2.25)*.12;this.rig.position.y=2.15+n,this.rig.rotation.x=kt(this.rig.rotation.x,i?.12:0,4,t),this.rig.rotation.z=kt(this.rig.rotation.z,Math.sin(this.bobPhase*1.1)*.05,3,t),this.ring.rotation.z+=t*(i?2.4:.9),this.ring.rotation.x=Math.PI/2+Math.sin(this.bobPhase*.8)*.08,this.core.scale.setScalar(1+Math.sin(this.bobPhase*4)*.14);for(const o of this.droneJets)o.material.opacity=.55+Math.random()*.3,o.scale.setScalar(1.5+Math.random()*.35);this.podR.position.z=.12+(this.windup>0?Math.sin(this.bobPhase*30)*.03:0),this.podR.rotation.x=kt(this.podR.rotation.x,this.windup>0?.16:0,8,t),this.windup>0?(this.chargeGlow.material.opacity=.5+Math.sin(this.bobPhase*26)*.28,this.chargeGlow.scale.setScalar(1.2+(.4-this.windup)*2.4)):this.chargeGlow.material.opacity=kt(this.chargeGlow.material.opacity,0,10,t),this.flashTimer-=t;const s=this.flashTimer>0;if(s!==this.wasFlashing){this.wasFlashing=s;for(const o of this.flashMats)s?(o.emissive.setHex(16777215),o.emissiveIntensity=1.3):(o.emissive.copy(o.userData.baseEmissive),o.emissiveIntensity=o.userData.baseIntensity)}this.healthBarTimer>0?(this.healthBarTimer-=t,this.healthBar.visible=!0,this.healthBar.quaternion.copy(this.root.quaternion).invert().multiply(e.quaternion),this.healthBar.position.y=3.55):this.healthBar.visible=!1}}class og{constructor(t,e,i,n,s){this.scene=t,this.world=e,this.effects=i,this.combat=n,this.audio=s,this.type="boss",this.isBoss=!0,this.scaleFactor=1,this.position=new A(Re.x,e.heightAt(Re.x,Re.z),Re.z),this.spawnPoint=this.position.clone(),this.yaw=Math.PI,this.alive=!0,this.active=!1,this.awakened=!1,this.engaged=!1,this.health=1e3,this.maxHealth=1e3,this.hitRadius=4.2,this.centerHeight=4.6,this.speed=5.4,this.attackCooldown=2.2,this.windup=0,this.pendingAttack=null,this.flashTimer=0,this.wasFlashing=!1,this.deadTimer=0,this.summonedAt=[!1,!1],this.legPhase=0,this.phase=1,this.onSummon=null,this.onBossDeath=null,this.glowTexture=fn(64),this.buildModel(),this.buildBar(),t.add(this.root),this.root.position.copy(this.position),this.root.rotation.y=this.yaw}buildModel(){this.mats={body:Ve(2499373,.85,.42),plate:Ve(3941432,.8,.38),dark:Ve(1052178,.7,.55),silver:Ve(10133670,.92,.3),gold:Ve(11041839,.9,.32),accent:new It({color:3279627,emissive:16724512,emissiveIntensity:2.1,metalness:.6,roughness:.25}),visor:new It({color:4196360,emissive:16719376,emissiveIntensity:3.6,metalness:.4,roughness:.2}),energy:new It({color:1772080,emissive:12279039,emissiveIntensity:2.4,metalness:.5,roughness:.2})},this.flashMats=[this.mats.body,this.mats.plate,this.mats.dark];for(const g of this.flashMats)g.userData.baseEmissive=g.emissive.clone(),g.userData.baseIntensity=g.emissiveIntensity;const t=new Tt,e=new Tt;t.add(e),this.root=t,this.rig=e,this.legs={};for(const g of[-1,1]){const v=new Tt;v.position.set(g*.95,2.9,0),e.add(v);const p=new I(new et(.95,1.7,1.05),this.mats.body);p.position.y=-.85,v.add(p);const m=new Tt;m.position.y=-1.7,v.add(m);const y=new I(new et(.88,1.65,.95),this.mats.plate);y.position.y=-.82,m.add(y);const _=new I(new et(1.05,.42,1.85),this.mats.silver);_.position.set(0,-1.72,.35),m.add(_);const M=new I(new et(.8,.12,.3),this.mats.accent);M.position.set(0,-1.7,1.24),m.add(M);const C=new I(new et(.36,.8,.1),this.mats.accent);C.position.set(0,-.75,.5),m.add(C),this.legs[g>0?"right":"left"]={hip:v,knee:m}}const i=new I(new et(3.1,2.5,1.8),this.mats.body);i.position.y=4.4,e.add(i);const n=new I(new et(2.3,1.1,.4),this.mats.plate);n.position.set(0,4.6,1.02),e.add(n);const s=new I(new et(.8,.42,.1),this.mats.energy);s.position.set(0,4.65,1.25),e.add(s);const o=Ee(this.glowTexture,12279039,4.4);o.position.set(0,4.65,1.5),o.material.opacity=.5,e.add(o),this.coreGlow=o;const a=new I(new et(2.1,.8,1.4),this.mats.dark);a.position.y=3,e.add(a);const l=new I(new et(2.35,.28,1.55),this.mats.gold);l.position.y=3.3,e.add(l);const h=new Tt;h.position.y=6.05,e.add(h);const c=new I(new et(1.2,1,1.05),this.mats.body);h.add(c);const d=new I(new et(.9,.55,.18),this.mats.dark);d.position.set(0,-.06,.54),h.add(d);const u=new I(new et(.76,.16,.08),this.mats.visor);u.position.set(0,.02,.64),h.add(u);for(const g of[-1,1]){const v=new I(new Ai(.16,1.1,4),this.mats.gold);v.position.set(g*.52,.82,-.08),v.rotation.z=g*.3,h.add(v);const p=new I(new et(.24,.52,.32),this.mats.silver);p.position.set(g*.54,-.2,.3),h.add(p)}const f=new I(new et(.16,.22,.9),this.mats.gold);f.position.set(0,.58,.1),h.add(f),this.head=h,this.arms={};for(const g of[-1,1]){const v=new Tt;v.position.set(g*2,5.2,0),e.add(v);const p=new I(new et(1.3,1.2,1.5),this.mats.plate);p.position.set(g*.18,.1,0),v.add(p);const m=new I(new Ai(.23,1.1,4),this.mats.gold);m.position.set(g*.55,.8,-.1),m.rotation.z=g*.45,v.add(m);const y=new I(new et(.75,1.5,.8),this.mats.body);y.position.y=-.95,v.add(y);const _=new Tt;_.position.y=-1.7,v.add(_);const M=new I(new et(.9,1.4,1),this.mats.plate);M.position.y=-.7,_.add(M);const C=new I(new Xt(.36,.5,2.2,8),this.mats.dark);C.rotation.x=Math.PI/2,C.position.set(0,-.55,.9),_.add(C);const T=new I(new Xt(.22,.32,.8,8),this.mats.accent);T.rotation.x=Math.PI/2,T.position.set(0,-.55,2.3),_.add(T);const b=new ne;b.position.set(0,-.55,2.9),_.add(b);const L=Ee(this.glowTexture,16726562,3.4);L.position.set(0,-.55,3.05),L.material.opacity=0,_.add(L),g>0?(this.muzzle=b,this.armR=v,this.chargeGlow=L):this.muzzleL=b,this.arms[g>0?"right":"left"]={shoulder:v,elbow:_}}for(const g of[-1,1]){const v=new I(new et(2.6,1.2,.22),this.mats.plate);v.position.set(g*1.7,5.1,-1),v.rotation.set(.2,g*-.4,g*.22),e.add(v);const p=new I(new et(1.5,.1,.08),this.mats.accent);p.position.set(g*1.7,5.65,-1.13),p.rotation.copy(v.rotation),e.add(p)}for(const g of[-1,1]){const v=new I(new Xt(.35,.45,.5,8),this.mats.dark);v.position.set(g*.75,4.4,-1.05),v.rotation.x=Math.PI/2,e.add(v);const p=Ee(this.glowTexture,16730668,3);p.position.set(g*.75,4.4,-1.4),p.material.opacity=0,e.add(p),(this.thrusters||(this.thrusters=[])).push(p)}t.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)})}buildBar(){const t=new Tt;t.position.y=8.4;const e=new I(new mi(6.4,.28),new Ie({color:1049863,transparent:!0,opacity:.8,depthTest:!1})),i=new mi(6.4,.28);i.translate(3.2,0,0);const n=new I(i,new Ie({color:16726562,transparent:!0,opacity:.95,depthTest:!1}));n.position.set(-3.2,0,.01),t.add(e),t.add(n),t.visible=!1,this.root.add(t),this.worldBar=t,this.worldBarFill=n}getHitPosition(t){return t.copy(this.position).add($h.set(0,this.centerHeight,0))}activate(){var t;this.awakened||(this.awakened=!0,this.active=!0,(t=this.audio)==null||t.bossRoar(),this.effects.addShake(2.5),this.effects.ring(this.position.clone().add(new A(0,.5,0)),16726562,28,1.4,1.4),this.effects.flash(this.position.clone().add(new A(0,5,0)),16726562,12,.8,3))}takeDamage(t,e,i=!1){var n;if(!(!this.alive||!this.awakened)){if(this.health-=t,this.flashTimer=.09,this.health=Math.max(0,this.health),this.worldBar.visible=!0,this.worldBarFill.scale.x=Zt(this.health/this.maxHealth,0,1),this.aggro=!0,this.health<=0){this.die();return}!this.summonedAt[0]&&this.health<this.maxHealth*.66?(this.summonedAt[0]=!0,this.summon()):!this.summonedAt[1]&&this.health<this.maxHealth*.33&&(this.summonedAt[1]=!0,this.summon()),this.health<this.maxHealth*.33&&(this.phase=2),(n=this.audio)==null||n.bossHit()}}summon(){var t;this.effects.ring(this.position.clone().add(new A(0,.5,0)),12279039,18,.9,1.2),this.effects.flash(this.position.clone().add(new A(0,4,0)),12279039,8,.5,2),(t=this.audio)==null||t.bossRoar(),this.onSummon&&this.onSummon(this)}die(){var t;this.alive&&(this.alive=!1,this.active=!1,this.deadTimer=0,this.worldBar.visible=!1,(t=this.audio)==null||t.bossDeath(),this.effects.addShake(4),this.onBossDeath&&this.onBossDeath(this))}update(t,e,i,n){var c,d;if(!this.alive){if(this.deadTimer+=t,this.deadTimer<2.4){if(Math.random()<t*9){const u=this.position.clone().add(new A((Math.random()-.5)*6,2+Math.random()*5,(Math.random()-.5)*6));this.effects.explosion(u,16738874,1.2+Math.random()*.8),(c=this.audio)==null||c.explosion(.7)}this.rig.rotation.z=Math.sin(this.deadTimer*8)*.08,this.rig.position.y=-this.deadTimer*.5}else this.root.visible=!1;return}if(!this.awakened){this.rig.position.y=Math.sin(n*.8)*.02,this.head.rotation.y=Math.sin(n*.33)*.16,this.coreGlow.material.opacity=.25+Math.sin(n*1.2)*.12;return}const s=de(this.position.x,this.position.z,e.position.x,e.position.z);if(!this.engaged&&s<115&&(this.engaged=!0,(d=this.audio)==null||d.bossRoar(),this.effects.addShake(1.6)),!this.engaged){this.coreGlow.material.opacity=.4+Math.sin(n*2)*.2;return}const o=Math.atan2(e.position.x-this.position.x,e.position.z-this.position.z);if(this.yaw=xs(this.yaw,o,this.phase===2?3.2:2.2,t),this.root.rotation.y=this.yaw,this.attackCooldown-=t,this.flashTimer-=t,this.windup>0){this.windup-=t,this.chargeGlow.material.opacity=.6+Math.sin(n*28)*.3,this.chargeGlow.scale.setScalar(1.2+(.9-this.windup)*2.4);for(const u of this.thrusters)u.material.opacity=.5+Math.random()*.4;if(this.windup<=0){this.releaseAttack(e,s),this.chargeGlow.material.opacity=0;for(const u of this.thrusters)u.material.opacity=0}}else{for(const u of this.thrusters)u.material.opacity=kt(u.material.opacity,.15,5,t);if(this.chargeGlow.material.opacity=kt(this.chargeGlow.material.opacity,0,8,t),s>30){const u=(e.position.x-this.position.x)/s,f=(e.position.z-this.position.z)/s,g=this.speed*(this.phase===2?1.35:1);this.position.x+=u*g*t,this.position.z+=f*g*t,this.legPhase+=t*g*1.5,this.rig.position.y=Math.abs(Math.sin(this.legPhase))*.16}else if(s<12){const u=(this.position.x-e.position.x)/s,f=(this.position.z-e.position.z)/s;this.position.x+=u*2.4*t,this.position.z+=f*2.4*t}this.attackCooldown<=0&&s<80&&(this.pendingAttack=s<16?"slam":"volley",this.windup=this.pendingAttack==="slam"?.75:this.phase===2?.45:.65)}const a=s>30?.28:.03,l=Math.sin(this.legPhase);this.legs.left.hip.rotation.x=kt(this.legs.left.hip.rotation.x,l*a,8,t),this.legs.right.hip.rotation.x=kt(this.legs.right.hip.rotation.x,-l*a,8,t),this.legs.left.knee.rotation.x=kt(this.legs.left.knee.rotation.x,Math.max(0,-l)*a*1.8,8,t),this.legs.right.knee.rotation.x=kt(this.legs.right.knee.rotation.x,Math.max(0,l)*a*1.8,8,t),this.arms.left.shoulder.rotation.x=-l*a*.7,this.arms.right.shoulder.rotation.x=-l*a*.7,this.head.rotation.y=Math.sin(n*.8)*.05,this.coreGlow.material.opacity=.45+Math.sin(n*3.3)*.2,this.coreGlow.scale.setScalar(4.4+Math.sin(n*3.3)*.5),this.position.y=this.world.heightAt(this.position.x,this.position.z),this.root.position.copy(this.position);const h=this.flashTimer>0;if(h!==this.wasFlashing){this.wasFlashing=h;for(const u of this.flashMats)h?(u.emissive.setHex(16777215),u.emissiveIntensity=1.4):(u.emissive.copy(u.userData.baseEmissive),u.emissiveIntensity=u.userData.baseIntensity)}this.worldBar.visible=!0,this.worldBar.quaternion.copy(i.quaternion)}releaseAttack(t,e){var n,s;const i=new A;if(this.root.updateMatrixWorld(!0),this.pendingAttack==="volley"){const o=this.phase===2?5:3;for(let a=0;a<o;a++){this.muzzle.getWorldPosition(i);const h=t.position.clone().add(new A(Math.sin(a*4.1)*1.6,2,Math.cos(a*3.7)*1.6)).sub(i).normalize();this.combat.spawnBossProjectile({origin:i.clone(),direction:h,damage:12})}this.effects.muzzleFlash(i,16726562,3.4),(n=this.audio)==null||n.bossShoot(),this.attackCooldown=this.phase===2?1.5:2.4}else if(this.pendingAttack==="slam"){const o=this.position.clone().add(new A(0,.6,0));this.effects.ring(o,16726562,22,.8,1.6),this.effects.ring(o,16756832,15,.55,1.2),this.effects.dust(o,34,7497295,2.4),this.effects.addShake(3.4),(s=this.audio)==null||s.bossSlam(),e<17&&t.takeDamage(26,this.position.clone()),this.attackCooldown=2.8}this.pendingAttack=null}}function ag(r,t,e,i,n){return[{type:"trooper",x:294,z:168,yaw:-2.2},{type:"trooper",x:312,z:200,yaw:1.4},{type:"bruiser",x:280,z:208,yaw:.2},{type:"trooper",x:-286,z:92,yaw:2.2},{type:"trooper",x:-336,z:148,yaw:-1.1},{type:"trooper",x:-300,z:-60,yaw:.8},{type:"trooper",x:-345,z:-100,yaw:-2.4},{type:"bruiser",x:-300,z:-118,yaw:1.8},{type:"trooper",x:310,z:-98,yaw:2.6},{type:"trooper",x:352,z:-142,yaw:-.3},{type:"bruiser",x:326,z:-178,yaw:1.1},{type:"trooper",x:-356,z:-242,yaw:.5},{type:"trooper",x:-402,z:-278,yaw:-1.6},{type:"bruiser",x:-372,z:-300,yaw:2.8},{type:"trooper",x:72,z:-278,yaw:2.2},{type:"trooper",x:112,z:-324,yaw:-.8},{type:"trooper",x:30,z:-392,yaw:.9},{type:"bruiser",x:60,z:-410,yaw:2.1},{type:"trooper",x:-22,z:40,yaw:1.3,patrolRadius:22},{type:"trooper",x:18,z:-160,yaw:-1.9,patrolRadius:24},{type:"trooper",x:-122,z:156,yaw:.4,patrolRadius:18},{type:"trooper",x:180,z:60,yaw:2.5,patrolRadius:20},{type:"decepticlone",x:120,z:250,yaw:.3,patrolRadius:34},{type:"decepticlone",x:-150,z:250,yaw:1.8,patrolRadius:34},{type:"decepticlone",x:250,z:90,yaw:-.7,patrolRadius:30},{type:"decepticlone",x:-250,z:30,yaw:2.4,patrolRadius:32},{type:"decepticlone",x:240,z:-40,yaw:1.1,patrolRadius:36},{type:"decepticlone",x:-220,z:-20,yaw:-1.5,patrolRadius:30},{type:"decepticlone",x:180,z:-200,yaw:2.9,patrolRadius:32},{type:"decepticlone",x:-210,z:-180,yaw:.6,patrolRadius:34},{type:"decepticlone",x:60,z:-130,yaw:-2.1,patrolRadius:26},{type:"decepticlone",x:-60,z:-240,yaw:1.7,patrolRadius:30},{type:"decepticlone",x:180,z:-340,yaw:-.4,patrolRadius:34},{type:"decepticlone",x:-140,z:-330,yaw:2.2,patrolRadius:36},{type:"decepticlone",x:330,z:120,yaw:1.5,patrolRadius:28},{type:"decepticlone",x:-360,z:60,yaw:-2.6,patrolRadius:28},{type:"decepticlone",x:350,z:-60,yaw:.9,patrolRadius:30},{type:"decepticlone",x:-390,z:-140,yaw:-1.2,patrolRadius:30},{type:"decepticlone",x:40,z:140,yaw:2.8,patrolRadius:24},{type:"decepticlone",x:-80,z:390,yaw:.2,patrolRadius:32},{type:"decepticlone",x:110,z:360,yaw:-2.4,patrolRadius:32},{type:"decepticlone",x:-40,z:-430,yaw:1.3,patrolRadius:30}].map((o,a)=>new Kh(r,t,e,i,n,{...o,seed:9e3+a*71}))}class lg{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.mouseFire=!1,this.mouseLocked=!1,this.enabled=!1,this.sensitivity=.0022,this.touchSensitivity=.005,this.joystick={x:0,y:0,active:!1,pointerId:null},this.touchFire=!1,this.touchAbility=!1,this.jumpPressed=!1,this.weaponCycle=!1,this.isTouch=window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.dragging=!1,this.dragPointer=null,this.lastDragX=0,this.lastDragY=0,this.onPauseRequest=null,this.onLockChange=null,this.wasLocked=!1,this.bindKeyboard(),this.bindMouse(),this.bindTouch()}get moveX(){let t=0;return(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(t+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(t-=1),t+=this.joystick.x,Zt(t,-1,1)}get moveZ(){let t=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),t+=-this.joystick.y;const e=this.moveX,i=Math.hypot(e,t);return i>1&&(t/=i),Zt(t,-1,1)}get sprint(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}bindKeyboard(){window.addEventListener("keydown",t=>{if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(t.code)&&t.preventDefault(),t.code==="Escape"){this.onPauseRequest&&this.onPauseRequest();return}this.enabled&&(t.repeat||(this.keys.add(t.code),this.pressed.add(t.code),t.code==="Space"&&(this.jumpPressed=!0),t.code))}),window.addEventListener("keyup",t=>{this.keys.delete(t.code)}),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseFire=!1})}bindMouse(){this.canvas.addEventListener("mousedown",t=>{this.enabled&&t.button===0&&(this.mouseFire=!0,!this.isTouch&&!this.mouseLocked&&this.requestPointerLock())}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseFire=!1)}),window.addEventListener("mousemove",t=>{this.enabled&&(this.mouseLocked?(this.mouseDX+=t.movementX||0,this.mouseDY+=t.movementY||0):this.dragging&&t.pointerType!=="touch"&&(this.mouseDX+=t.clientX-this.lastDragX,this.mouseDY+=t.clientY-this.lastDragY,this.lastDragX=t.clientX,this.lastDragY=t.clientY))}),this.canvas.addEventListener("mousedown",t=>{!this.enabled||t.button!==0||this.mouseLocked||this.isTouch||(this.dragging=!0,this.lastDragX=t.clientX,this.lastDragY=t.clientY)}),window.addEventListener("mouseup",()=>{this.dragging=!1}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("wheel",t=>{this.enabled&&(this.weaponCycle=!0)},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.mouseLocked=document.pointerLockElement===this.canvas,this.canvas.classList.toggle("locked",this.mouseLocked),this.onLockChange&&this.onLockChange(this.mouseLocked,this.wasLocked),this.wasLocked=this.mouseLocked})}requestPointerLock(){var t,e;this.isTouch||(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}exitPointerLock(){var t;document.pointerLockElement&&((t=document.exitPointerLock)==null||t.call(document))}bindTouch(){const t=document.getElementById("joystick"),e=document.getElementById("joystick-stick");if(t){const o=(l,h)=>{const c=Math.hypot(l,h),d=c>46?46/c:1,u=l*d,f=h*d;e.style.transform=`translate(${u}px, ${f}px)`,this.joystick.x=u/46,this.joystick.y=f/46};t.addEventListener("pointerdown",l=>{if(!this.enabled)return;l.preventDefault(),l.stopPropagation(),this.joystick.active=!0,this.joystick.pointerId=l.pointerId,t.setPointerCapture(l.pointerId);const h=t.getBoundingClientRect();o(l.clientX-(h.left+h.width/2),l.clientY-(h.top+h.height/2))}),t.addEventListener("pointermove",l=>{if(!this.joystick.active||l.pointerId!==this.joystick.pointerId)return;l.preventDefault();const h=t.getBoundingClientRect();o(l.clientX-(h.left+h.width/2),l.clientY-(h.top+h.height/2))});const a=l=>{l.pointerId===this.joystick.pointerId&&(this.joystick.active=!1,this.joystick.pointerId=null,this.joystick.x=0,this.joystick.y=0,e.style.transform="translate(0px, 0px)")};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a),t.addEventListener("lostpointercapture",a)}const i=(s,o,a)=>{const l=document.getElementById(s);if(!l)return;l.addEventListener("pointerdown",c=>{this.enabled&&(c.preventDefault(),c.stopPropagation(),l.classList.add("down"),l.setPointerCapture(c.pointerId),o())});const h=c=>{c.preventDefault(),c.stopPropagation(),l.classList.remove("down"),a==null||a()};l.addEventListener("pointerup",h),l.addEventListener("pointercancel",h),l.addEventListener("lostpointercapture",()=>l.classList.remove("down"))};i("btn-fire",()=>{this.touchFire=!0},()=>{this.touchFire=!1}),i("btn-ability",()=>{this.touchAbility=!0},()=>{this.touchAbility=!1}),i("btn-jump",()=>{this.jumpPressed=!0}),i("btn-transform",()=>{this.pressed.add("KeyF")}),i("btn-weapon",()=>{this.weaponCycle=!0}),this.canvas.addEventListener("pointerdown",s=>{!this.enabled||!this.isTouch||s.pointerType!=="touch"||(this.dragging=!0,this.dragPointer=s.pointerId,this.lastDragX=s.clientX,this.lastDragY=s.clientY)}),this.canvas.addEventListener("pointermove",s=>{if(!this.enabled||!this.dragging||s.pointerId!==this.dragPointer)return;const o=s.clientX-this.lastDragX,a=s.clientY-this.lastDragY;this.lastDragX=s.clientX,this.lastDragY=s.clientY,this.mouseDX+=o,this.mouseDY+=a});const n=s=>{s.pointerId===this.dragPointer&&(this.dragging=!1,this.dragPointer=null)};this.canvas.addEventListener("pointerup",n),this.canvas.addEventListener("pointercancel",n)}get ability(){return this.keys.has("KeyQ")||this.touchAbility}get fire(){return this.mouseFire||this.touchFire}update(){this.jumpPressed=this.jumpPressed||this.pressed.has("Space")}endFrame(){this.pressed.clear(),this.jumpPressed=!1,this.weaponCycle=!1,this.mouseDX=0,this.mouseDY=0}clear(){this.keys.clear(),this.pressed.clear(),this.mouseFire=!1,this.touchFire=!1,this.touchAbility=!1,this.joystick.x=0,this.joystick.y=0,this.mouseDX=0,this.mouseDY=0}showTouchUI(t){const e=document.getElementById("touch-ui");if(!e)return;const i=t&&this.isTouch;e.classList.toggle("hidden",!i),document.body.classList.toggle("touch",i)}}const hg=Math.PI*2;class cg{constructor(t,e){this.world=t,this.player=e,this.el={hud:document.getElementById("hud"),hpFill:document.getElementById("hp-fill"),enFill:document.getElementById("en-fill"),hpText:document.getElementById("hp-text"),enText:document.getElementById("en-text"),score:document.getElementById("score"),relicCount:document.getElementById("relic-count"),weaponName:document.getElementById("weapon-name"),weaponDesc:document.getElementById("weapon-desc"),heatFill:document.getElementById("heat-fill"),crosshair:document.getElementById("crosshair"),hitmarker:document.getElementById("hitmarker"),damageFlash:document.getElementById("damage-flash"),speedLines:document.getElementById("speed-lines"),banner:document.getElementById("banner"),bannerTitle:document.getElementById("banner-title"),bannerDesc:document.getElementById("banner-desc"),toast:document.getElementById("toast"),toastText:document.getElementById("toast-text"),feed:document.getElementById("feed"),bossBar:document.getElementById("boss-bar"),bossFill:document.getElementById("boss-fill"),bossName:document.getElementById("boss-name"),bossSub:document.getElementById("boss-sub"),modeTag:document.getElementById("mode-tag"),modeName:document.getElementById("mode-name"),coords:document.getElementById("coords"),minimap:document.getElementById("minimap"),compass:document.getElementById("compass-strip"),objectiveTitle:document.getElementById("obj-title"),objectiveBody:document.getElementById("obj-body"),objectiveFill:document.getElementById("obj-fill"),objectiveDistance:document.getElementById("obj-distance"),objectiveHint:document.getElementById("obj-hint"),prompt:document.getElementById("prompt"),start:document.getElementById("start-screen"),startStatus:document.getElementById("start-status"),deploy:document.getElementById("deploy"),pause:document.getElementById("pause-screen"),death:document.getElementById("death-screen"),victory:document.getElementById("victory-screen"),deathRelics:document.getElementById("death-relics"),abShield:document.getElementById("ab-shield"),abEmp:document.getElementById("ab-emp"),abJets:document.getElementById("ab-jets"),abDrive:document.getElementById("ab-drive"),startStatus:document.getElementById("start-status"),touchAbility:document.querySelector("#btn-ability .tb-lbl"),touchTransform:document.querySelector("#btn-transform .tb-lbl")},this.mapCtx=this.el.minimap.getContext("2d"),this.timers={banner:null,toast:null,damage:null},this.damageUntil=0,this.lastWeapon=-1,this.lastObjective="",this.lastBossPercent=-1,this.feedItems=[],this.time=0,this.mapTimer=0,this.textTimer=0,this.compassHeading=-999,this.buildCompass(),this.el.deploy.addEventListener("click",()=>{this.el.deploy.dataset.ready==="1"&&this.onDeploy&&this.onDeploy()}),window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){const t=this.el.minimap.clientWidth;if(t>0){const e=Math.min(2,window.devicePixelRatio||1),i=Math.round(t*e);this.el.minimap.width!==i&&(this.el.minimap.width=this.el.minimap.height=i)}}setReady(){this.el.deploy&&(this.el.deploy.dataset.ready="1",this.el.deploy.disabled=!1,this.el.deploy.classList.add("ready")),this.el.startStatus&&(this.el.startStatus.textContent="ENERGON GRID ONLINE")}hideStart(){this.el.start.classList.add("leaving"),this.el.deploy.dataset.ready="0",setTimeout(()=>{this.el.start.style.display="none"},750)}showStart(){this.el.start.style.display="",this.el.start.classList.remove("leaving")}showHUD(t=!0){this.el.hud.classList.toggle("hidden",!t)}showPause(t){this.el.pause.classList.toggle("hidden",!t)}showDeath(t,e=0){this.el.death.classList.toggle("hidden",!t),t&&(this.el.deathRelics.textContent=`${e} / 6`)}showVictory(t,e=null){this.el.victory.classList.toggle("hidden",!t),t&&e&&(document.getElementById("stat-time").textContent=$0(e.time),document.getElementById("stat-score").textContent=Math.floor(e.score),document.getElementById("stat-relics").textContent=`${e.relics} / 6`,document.getElementById("stat-kills").textContent=e.kills)}toast(t,e=2.6){this.el.toastText.textContent=t,this.el.toast.classList.add("on"),clearTimeout(this.timers.toast),this.timers.toast=setTimeout(()=>this.el.toast.classList.remove("on"),e*1e3)}banner(t){this.el.bannerTitle.textContent=t.name,this.el.bannerDesc.textContent=t.desc,this.el.banner.classList.add("on"),clearTimeout(this.timers.banner),this.timers.banner=setTimeout(()=>this.el.banner.classList.remove("on"),3600)}feed(t,e=5){const i=document.createElement("div");i.className="feed-item",i.innerHTML=t,this.el.feed.appendChild(i),this.feedItems.push({node:i,until:this.time+e}),this.feedItems.length>4&&this.feedItems.shift().node.remove()}hitmarker(t=!1){const e=this.el.hitmarker;e.classList.remove("on"),e.classList.toggle("crit",t),e.offsetWidth,e.classList.add("on")}flashDamage(t){const e=this.el.damageFlash;e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),this.damageUntil=this.time+.16}setBoost(t){this.el.speedLines.classList.toggle("on",t)}setTargetLock(t){this.el.crosshair.classList.toggle("lock",t)}buildCompass(){const t=this.el.compass;t.innerHTML="",t.style.position="absolute",t.style.width="2160px",t.style.height="26px";const e={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};for(let i=-180;i<=540;i+=15){const n=document.createElement("span"),s=(i%360+360)%360,o=s%45===0;n.textContent=e[s]??(o?"":"·"),n.style.position="absolute",n.style.left=`${(i+180)*3}px`,n.style.top="8px",n.style.transform="translateX(-50%)",n.style.font=o?"600 9px/1 var(--font-ui)":"600 6px/1 var(--font-ui)",n.style.letterSpacing="0.1em",n.style.color=o?s===0?"#62f3ff":"#b5dce3":"#5b858e",t.appendChild(n)}}updateCompass(t){const e=(-t*180/Math.PI%360+360)%360;Math.abs(e-this.compassHeading)<.2||(this.compassHeading=e,this.el.compass.style.transform=`translateX(${150-(e+180)*3}px)`)}update(t,e){this.time+=t;const{player:i,camera:n,enemies:s,boss:o,objective:a,targetLock:l,boosting:h,speedRatio:c}=e;if(this.el.hpFill.style.transform=`scaleX(${Zt(i.health/i.maxHealth,0,1)})`,this.el.enFill.style.transform=`scaleX(${Zt(i.energon/i.maxEnergon,0,1)})`,this.el.heatFill.style.width=`${Zt(i.heat,0,100)}%`,this.el.crosshair.classList.toggle("heat",i.overheated>0),this.setTargetLock(l),this.time>this.damageUntil&&this.el.damageFlash.classList.remove("on"),this.el.damageFlash.classList.toggle("low",i.health<30&&!i.dead),this.setBoost(h),this.updateCompass(e.cameraYaw),this.el.modeTag.classList.toggle("vehicle",i.mode==="vehicle"),this.el.modeName.textContent=i.mode==="vehicle"?"VEHICLE MODE":"ROBOT MODE",this.el.touchTransform&&(this.el.touchTransform.textContent=i.mode==="vehicle"?"ROBOT":"SHIFT"),this.lastWeapon!==i.weaponIndex){this.lastWeapon=i.weaponIndex;const f=i.weapon;this.el.weaponName.textContent=f.name,this.el.weaponDesc.textContent=f.desc,document.querySelectorAll(".weapon-slots .slot").forEach((g,v)=>{g.classList.toggle("active",v===i.weaponIndex),g.classList.toggle("locked",!i.unlocked.has(["pistol","repeater","mortar"][v]))})}this.el.abShield.classList.toggle("locked",!i.abilities.shield),this.el.abShield.classList.toggle("active",i.shieldActive),this.el.abEmp.classList.toggle("locked",!i.abilities.emp),this.el.abJets.classList.toggle("locked",!i.abilities.jets),this.el.abDrive.classList.toggle("locked",!i.abilities.overdrive),this.el.abShield.classList.toggle("ready",i.abilities.shield&&i.energon>15),this.el.abEmp.classList.toggle("ready",i.abilities.emp&&i.empCooldown<=0&&i.energon>=30);const d=this.el.abEmp.querySelector(".ab-cd");d&&(d.style.transform=`scaleY(${Zt(i.empCooldown/10,0,1)})`);const u=this.el.abShield.querySelector(".ab-glyph");if(u&&(u.style.opacity=i.abilities.shield?1:.35),this.el.touchAbility&&(i.abilities.emp&&!i.abilities.shield?this.el.touchAbility.textContent="EMP":i.abilities.shield?this.el.touchAbility.textContent="AEGIS":this.el.touchAbility.textContent="LOCKED"),o&&o.awakened&&o.alive&&o.engaged?(this.el.bossBar.classList.remove("hidden"),this.el.bossFill.style.width=`${Zt(o.health/o.maxHealth,0,1)*100}%`,this.el.bossSub.textContent=o.phase===2?"TITAN'S REST // CRITICAL — ENRAGED":"TITAN'S REST // THREAT LEVEL OMEGA",this.el.bossBar.classList.toggle("enraged",o.phase===2)):this.el.bossBar.classList.add("hidden"),this.textTimer-=t,this.textTimer<=0){this.textTimer=.1,this.el.hpText.textContent=Math.ceil(i.health),this.el.enText.textContent=Math.ceil(i.energon),this.el.score.textContent=K0(i.score),this.el.relicCount.textContent=i.relics;const f=Math.round(i.position.x),g=Math.round(i.position.z);this.el.coords.textContent=`X ${String(f).padStart(4,"0")} / Z ${String(g).padStart(4,"0")}`,this.el.objectiveTitle.textContent=a.title,this.el.objectiveBody.textContent=a.body,this.el.objectiveFill.style.width=`${a.progress*100}%`,this.el.objectiveDistance.textContent=a.distance,this.el.objectiveHint.textContent=a.hint,a.prompt?(this.el.prompt.classList.remove("hidden"),this.el.prompt.querySelector("span").textContent=a.prompt):this.el.prompt.classList.add("hidden")}for(let f=this.feedItems.length-1;f>=0;f--)this.time>this.feedItems[f].until&&(this.feedItems[f].node.remove(),this.feedItems.splice(f,1));this.mapTimer-=t,this.mapTimer<=0&&(this.mapTimer=.055,this.drawMinimap(i,s,o,e.cameraYaw)),this.el.minimap.setAttribute("aria-label",`Minimap. Player at ${Math.round(i.position.x)}, ${Math.round(i.position.z)}`)}drawMinimap(t,e,i,n){const s=this.mapCtx,o=this.el.minimap.width;o/this.world.mapSize,s.clearRect(0,0,o,o),s.save(),s.drawImage(this.world.mapCanvas,0,0,o,o),s.fillStyle="rgba(3, 18, 24, 0.18)",s.fillRect(0,0,o,o);const a=(u,f)=>[(u/1600+.5)*o,(f/1600+.5)*o];if(this.world.objectiveTarget){const[u,f]=a(t.position.x,t.position.z),[g,v]=a(this.world.objectiveTarget.x,this.world.objectiveTarget.z);s.strokeStyle="rgba(255, 200, 90, 0.22)",s.lineWidth=1,s.setLineDash([3,5]),s.beginPath(),s.moveTo(u,f),s.lineTo(g,v),s.stroke(),s.setLineDash([])}for(const u of this.world.relics){if(u.collected)continue;const[f,g]=a(u.x,u.z),v=new St(u.color),p=1+Math.sin(this.time*3+u.x)*.2;s.save(),s.translate(f,g),s.rotate(Math.PI/4),s.fillStyle=`rgba(${v.r*255|0},${v.g*255|0},${v.b*255|0},0.92)`,s.shadowColor=`rgba(${v.r*255|0},${v.g*255|0},${v.b*255|0},1)`,s.shadowBlur=8;const m=3.4*p;s.fillRect(-m/2,-m/2,m,m),s.restore()}s.fillStyle="rgba(255, 74, 56, 0.95)";for(const u of e){if(!u.alive||!u.active)continue;const[f,g]=a(u.position.x,u.position.z);s.beginPath(),s.arc(f,g,1.9,0,hg),s.fill()}if(i&&i.alive&&i.awakened){const[u,f]=a(i.position.x,i.position.z),g=1+Math.sin(this.time*4)*.25;s.save(),s.translate(u,f),s.strokeStyle="#ff5648",s.fillStyle="rgba(255, 60, 40, 0.9)",s.shadowColor="#ff3a22",s.shadowBlur=12,s.beginPath(),s.moveTo(0,-7*g),s.lineTo(6*g,0),s.lineTo(0,7*g),s.lineTo(-6*g,0),s.closePath(),s.fill(),s.restore()}const[l,h]=a(t.position.x,t.position.z),c=-n;s.save(),s.translate(l,h),s.rotate(c);const d=s.createLinearGradient(0,0,0,-34);d.addColorStop(0,"rgba(150, 245, 255, 0.34)"),d.addColorStop(1,"rgba(150, 245, 255, 0)"),s.fillStyle=d,s.beginPath(),s.moveTo(0,0),s.arc(0,0,34,-Math.PI/2-.42,-Math.PI/2+.42),s.closePath(),s.fill(),s.restore(),s.save(),s.translate(l,h),s.rotate(Math.PI-t.yaw),s.fillStyle="#ffffff",s.strokeStyle="rgba(6, 24, 30, 0.9)",s.lineWidth=1,s.beginPath(),s.moveTo(0,-5.5),s.lineTo(4,4.5),s.lineTo(0,2.2),s.lineTo(-4,4.5),s.closePath(),s.fill(),s.stroke(),s.restore(),s.strokeStyle="rgba(98, 243, 255, 0.08)",s.lineWidth=1;for(let u=0;u<=4;u++){const f=u/4*o;s.beginPath(),s.moveTo(f,0),s.lineTo(f,o),s.moveTo(0,f),s.lineTo(o,f),s.stroke()}s.strokeStyle="rgba(98, 243, 255, 0.28)",s.lineWidth=1.4,s.strokeRect(.5,.5,o-1,o-1),s.restore()}setBossEnraged(){this.el.bossBar.classList.add("enraged")}}class ug{constructor(){this.ctx=null,this.muted=!1,this.ready=!1,this.engineOn=!1,this.boost=!1,this.waterOn=!1,this.bossLayer=!1}unlock(){var n,s;if(this.ready){(s=(n=this.ctx)==null?void 0:n.resume)==null||s.call(n);return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const i=e.createDynamicsCompressor();i.threshold.value=-18,i.knee.value=22,i.ratio.value=8,i.attack.value=.004,i.release.value=.22,this.master=e.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(i),i.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.5,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.72,this.sfx.connect(this.master),this.noiseBuffer=this.makeNoise(e,2.2),this.ready=!0,this.startAmbient(),this.createEngine(),this.createWater(),this.createBossLayer()}makeNoise(t,e){const i=Math.floor(t.sampleRate*e),n=t.createBuffer(1,i,t.sampleRate),s=n.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;o=(o+.02*l)/1.02,s[a]=o*3.2}return n}startAmbient(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.4;const n=t.createGain();n.gain.value=.11,e.connect(i),i.connect(n),n.connect(this.music),e.start();const s=t.createOscillator(),o=t.createGain();s.frequency.value=.06,o.gain.value=130,s.connect(o),o.connect(i.frequency),s.start();const a=t.createGain();a.gain.value=.038,a.connect(this.music);for(const[c,d,u]of[[55,"sine",0],[82.5,"triangle",5],[110,"sine",-7]]){const f=t.createOscillator();f.type=d,f.frequency.value=c,f.detune.value=u;const g=t.createGain();g.gain.value=.4,f.connect(g),g.connect(a),f.start()}const l=t.createOscillator(),h=t.createGain();l.frequency.value=.033,h.gain.value=.018,l.connect(h),h.connect(a.gain),l.start(),this.ambientTimer=0}createEngine(){const t=this.ctx;this.engineGain=t.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(this.sfx),this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=360,this.engineFilter.Q.value=2.2,this.engineFilter.connect(this.engineGain),this.engineOscA=t.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=44,this.engineOscA.connect(this.engineFilter),this.engineOscB=t.createOscillator(),this.engineOscB.type="square",this.engineOscB.frequency.value=67;const e=t.createGain();e.gain.value=.25,this.engineOscB.connect(e),e.connect(this.engineFilter),this.engineOscA.start(),this.engineOscB.start()}createWater(){const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=780,i.Q.value=.7,this.waterGain=t.createGain(),this.waterGain.gain.value=0,e.connect(i),i.connect(this.waterGain),this.waterGain.connect(this.sfx),e.start()}createBossLayer(){const t=this.ctx;this.bossGain=t.createGain(),this.bossGain.gain.value=0,this.bossGain.connect(this.music);const e=t.createOscillator();e.type="sawtooth",e.frequency.value=36.7;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=160,i.Q.value=4,e.connect(i),i.connect(this.bossGain),e.start();const n=t.createOscillator(),s=t.createGain();n.frequency.value=2.6,s.gain.value=.5,n.connect(s),s.connect(this.bossGain.gain),n.start(),this.bossGain.gain.value=0}setEngine(t){if(!this.ready)return;this.engineOn=t;const e=this.ctx.currentTime;this.engineGain.gain.cancelScheduledValues(e),this.engineGain.gain.setTargetAtTime(t?.085:0,e,.12)}setBoost(t){this.boost=t}setWater(t){!this.ready||t===this.waterOn||(this.waterOn=t,this.waterGain.gain.setTargetAtTime(t?.05:0,this.ctx.currentTime,.2))}updateEngine(t){if(!this.ready||!this.engineOn)return;const e=this.ctx.currentTime,i=Zt(t,0,1.4);this.engineOscA.frequency.setTargetAtTime(42+i*58+(this.boost?22:0),e,.08),this.engineOscB.frequency.setTargetAtTime(63+i*90,e,.08),this.engineFilter.frequency.setTargetAtTime(260+i*950+(this.boost?420:0),e,.1),this.engineGain.gain.setTargetAtTime(this.engineOn?.055+i*.035+(this.boost?.03:0):0,e,.1)}setBossMode(t){this.ready&&(this.bossLayer=t,this.bossGain.gain.setTargetAtTime(t?.055:0,this.ctx.currentTime,.8))}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.55,this.ctx.currentTime,.05)}tone({freq:t=440,endFreq:e=null,type:i="sine",dur:n=.2,gain:s=.15,attack:o=.006,delay:a=0,dest:l=null,filter:h=null,q:c=1}){if(!this.ready||this.muted)return;const d=this.ctx,u=d.currentTime+a,f=d.createOscillator();f.type=i,f.frequency.setValueAtTime(Math.max(1,t),u),e&&f.frequency.exponentialRampToValueAtTime(Math.max(1,e),u+n);const g=d.createGain();g.gain.setValueAtTime(1e-4,u),g.gain.linearRampToValueAtTime(s,u+o),g.gain.exponentialRampToValueAtTime(1e-4,u+n);let v=f;if(h){const p=d.createBiquadFilter();p.type=h,p.frequency.value=Math.max(60,t*2.4),p.Q.value=c,v.connect(p),v=p}v.connect(g),g.connect(l||this.sfx),f.start(u),f.stop(u+n+.05)}noise({dur:t=.2,gain:e=.12,freq:i=800,type:n="lowpass",q:s=1,delay:o=0,dest:a=null,slideTo:l=null}){if(!this.ready||this.muted)return;const h=this.ctx,c=h.currentTime+o,d=h.createBufferSource();d.buffer=this.noiseBuffer;const u=h.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(Math.max(40,i),c),u.Q.value=s,l&&u.frequency.exponentialRampToValueAtTime(Math.max(40,l),c+t);const f=h.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.linearRampToValueAtTime(e,c+.008),f.gain.exponentialRampToValueAtTime(1e-4,c+t),d.connect(u),u.connect(f),f.connect(a||this.sfx),d.start(c),d.stop(c+t+.05)}shoot(t){t==="mortar"?(this.tone({freq:180,endFreq:48,type:"sawtooth",dur:.28,gain:.2,filter:"lowpass"}),this.noise({dur:.22,gain:.16,freq:1200,slideTo:180})):t==="repeater"?(this.tone({freq:1350+Math.random()*120,endFreq:420,type:"square",dur:.07,gain:.055}),this.tone({freq:620,endFreq:210,type:"sawtooth",dur:.08,gain:.05})):(this.tone({freq:940,endFreq:240,type:"square",dur:.13,gain:.08}),this.tone({freq:320,endFreq:90,type:"sawtooth",dur:.16,gain:.06}))}hit(){this.tone({freq:720,endFreq:380,type:"triangle",dur:.06,gain:.07}),this.noise({dur:.06,gain:.05,freq:1800,type:"hipass"})}enemyShoot(){this.tone({freq:420,endFreq:120,type:"sawtooth",dur:.16,gain:.06})}enemyHit(t){this.noise({dur:.12,gain:t?.14:.08,freq:t?600:1100,type:"bandpass",q:.8}),this.tone({freq:t?140:260,endFreq:60,type:"square",dur:.12,gain:.05})}enemyDeath(t){this.noise({dur:t?.7:.45,gain:t?.25:.16,freq:t?500:900,slideTo:90}),this.tone({freq:t?90:150,endFreq:30,type:"sawtooth",dur:.5,gain:.12})}explosion(t=1){this.noise({dur:.55*t,gain:.22*t,freq:700*t,slideTo:60}),this.tone({freq:110*t,endFreq:24,type:"sine",dur:.55*t,gain:.18*t})}slam(){this.tone({freq:90,endFreq:28,type:"sine",dur:.4,gain:.24}),this.noise({dur:.35,gain:.18,freq:300,slideTo:50})}playerHit(){this.tone({freq:220,endFreq:70,type:"sawtooth",dur:.26,gain:.14}),this.noise({dur:.2,gain:.14,freq:900,type:"bandpass",q:.7})}shieldHit(){this.tone({freq:880,endFreq:1320,type:"sine",dur:.18,gain:.07}),this.tone({freq:1320,endFreq:660,type:"triangle",dur:.24,gain:.05})}jump(){this.tone({freq:220,endFreq:520,type:"triangle",dur:.16,gain:.08}),this.noise({dur:.18,gain:.06,freq:900,type:"bandpass"})}jets(){this.noise({dur:.5,gain:.14,freq:1600,type:"bandpass",q:1.4}),this.tone({freq:160,endFreq:620,type:"sawtooth",dur:.3,gain:.06})}land(t){this.noise({dur:.22,gain:.08+t*.12,freq:320,slideTo:80}),this.tone({freq:90,endFreq:45,type:"sine",dur:.2,gain:.08+t*.08})}transform(t){this.noise({dur:.42,gain:.1,freq:t?1600:700,slideTo:t?420:1900,type:"bandpass",q:1.8}),this.tone({freq:t?190:380,endFreq:t?380:190,type:"sawtooth",dur:.4,gain:.05,filter:"lowpass"});for(let e=0;e<3;e++)this.tone({freq:420+e*130,endFreq:320,type:"square",dur:.09,gain:.04,delay:e*.1})}transformClank(){this.noise({dur:.12,gain:.18,freq:700,type:"bandpass",q:1.4}),this.tone({freq:180,endFreq:80,type:"square",dur:.14,gain:.1}),this.tone({freq:640,endFreq:420,type:"triangle",dur:.2,gain:.05})}weaponSwitch(){this.tone({freq:540,endFreq:760,type:"square",dur:.06,gain:.04})}weaponReady(){this.tone({freq:660,endFreq:990,type:"triangle",dur:.12,gain:.06})}overheat(){this.noise({dur:.5,gain:.16,freq:2e3,slideTo:280,type:"bandpass",q:2}),this.tone({freq:300,endFreq:90,type:"sawtooth",dur:.4,gain:.08})}emp(){this.tone({freq:60,endFreq:900,type:"sawtooth",dur:.5,gain:.16,filter:"lowpass"}),this.noise({dur:.7,gain:.2,freq:2400,slideTo:200,type:"bandpass",q:1.3}),this.tone({freq:1400,endFreq:200,type:"sine",dur:.7,gain:.08})}relicPickup(){[392,523.25,659.25,783.99].forEach((e,i)=>{this.tone({freq:e,type:"triangle",dur:1.1,gain:.075,delay:i*.09,dest:this.music}),this.tone({freq:e*2,type:"sine",dur:.7,gain:.025,delay:i*.09+.02,dest:this.music})}),this.noise({dur:.5,gain:.06,freq:2200,type:"bandpass",q:1.5})}healthPickup(){this.tone({freq:330,endFreq:660,type:"triangle",dur:.35,gain:.08}),this.tone({freq:494,endFreq:988,type:"sine",dur:.4,gain:.05,delay:.06})}energyPickup(){this.tone({freq:620,endFreq:1240,type:"square",dur:.2,gain:.04}),this.tone({freq:930,endFreq:1860,type:"sine",dur:.3,gain:.04,delay:.06})}shard(){this.tone({freq:1050+Math.random()*300,endFreq:1600,type:"sine",dur:.09,gain:.035})}bossRoar(){this.ready&&(this.tone({freq:70,endFreq:38,type:"sawtooth",dur:1.6,gain:.24,filter:"lowpass"}),this.tone({freq:93,endFreq:52,type:"square",dur:1.4,gain:.1,filter:"lowpass"}),this.noise({dur:1.8,gain:.16,freq:520,slideTo:80,type:"bandpass",q:1.1}),this.tone({freq:1400,endFreq:700,type:"sawtooth",dur:.9,gain:.035,delay:.2}))}bossShoot(){this.tone({freq:260,endFreq:70,type:"sawtooth",dur:.35,gain:.11}),this.noise({dur:.25,gain:.1,freq:1300,slideTo:220})}bossSlam(){this.tone({freq:55,endFreq:20,type:"sine",dur:.9,gain:.3}),this.noise({dur:.7,gain:.24,freq:280,slideTo:40}),this.tone({freq:110,endFreq:40,type:"square",dur:.5,gain:.09})}bossHit(){this.tone({freq:320,endFreq:120,type:"square",dur:.07,gain:.05})}bossDeath(){if(this.ready){for(let t=0;t<4;t++)setTimeout(()=>this.explosion(1.4),t*240);this.tone({freq:160,endFreq:28,type:"sawtooth",dur:2.6,gain:.16,filter:"lowpass"}),this.setBossMode(!1)}}playerDeath(){this.tone({freq:330,endFreq:40,type:"sawtooth",dur:1.1,gain:.17,filter:"lowpass"}),this.noise({dur:1,gain:.2,freq:800,slideTo:40})}victory(){[[261.63,329.63,392],[349.23,440,523.25],[392,493.88,587.33],[523.25,659.25,783.99]].forEach((e,i)=>{e.forEach(n=>this.tone({freq:n,type:"triangle",dur:1.3,gain:.045,delay:i*.28,dest:this.music}))})}update(t){if(this.ready&&(this.ambientTimer=(this.ambientTimer||0)-t,this.ambientTimer<=0&&!this.bossLayer)){this.ambientTimer=5+Math.random()*11;const e=700+Math.random()*800;this.tone({freq:e,endFreq:e*1.2,type:"sine",dur:.5,gain:.012,dest:this.music}),this.tone({freq:e*1.5,endFreq:e*1.1,type:"sine",dur:.4,gain:.008,delay:.12,dest:this.music})}}}const dg={moveX:0,moveZ:0,sprint:!1,fire:!1,ability:!1,jumpPressed:!1,weaponCycle:!1,pressed:new Set};class fg{constructor(){const t=document.getElementById("game");this.canvas=t,this.renderer=new e0({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oh,this.renderer.outputColorSpace=We,this.renderer.toneMapping=lh,this.renderer.toneMappingExposure=1.03,this.scene=new i0,this.scene.background=new St(9417643),this.camera=new ei(62,window.innerWidth/window.innerHeight,.1,4800),this.camera.position.set(0,18,380),this.scene.add(this.camera),this.clock=new q0,this.state="menu",this.worldTime=0,this.menuTime=0,this.missionTime=0,this.bossdownT=0,this.deathT=0,this.introT=1,this.lookCooldown=0,this.camYaw=0,this.camPitch=.24,this.camPos=new A,this.camLook=new A,this.aimPoint=new A,this.targetLock=!1,this.region="",this.lastRegion="",this.bossWakeTimer=0,this.bossMusic=!1,this.bossEngaged=!1,this.bossPhase=1,this.victoryShown=!1,this.deathShown=!1,this.respawnPoint=le.clone(),this.introToastShown=!1,this.setupLights(),this.world=new Q0(this.scene,this.renderer),this.effects=new tg(this.scene,this.world),this.audio=new ug,this.player=new eg(this.scene,this.world,this.effects,this.audio),this.player.attachViewModel(this.camera),this.combat=new ig(this.scene,this.world,this.effects,this.audio),this.pickups=new rg(this.scene,this.world,this.effects,this.audio),this.enemies=ag(this.scene,this.world,this.effects,this.combat,this.audio),this.boss=new og(this.scene,this.world,this.effects,this.combat,this.audio),this.input=new lg(t),this.ui=new cg(this.world,this.player),this.wireSystems(),this.menuAim=new A(le.x,le.y+3,le.z-20),this.updateMenuCamera(0,!0),this.resize(),window.addEventListener("resize",()=>this.resize()),this.ui.el.deploy.disabled=!0,this.ui.el.deploy.dataset.ready="0",requestAnimationFrame(()=>{this.ui.setReady(),this.renderer.render(this.scene,this.camera),window.__game=this.makeDebugAPI(),window.__gameReady=!0}),this.renderer.setAnimationLoop(()=>this.loop())}setupLights(){this.sunDir=new A(-.52,.38,-.76).normalize();const t=new Zl(16768948,2.65);t.position.copy(le).addScaledVector(this.sunDir,220),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-72,t.shadow.camera.right=72,t.shadow.camera.top=72,t.shadow.camera.bottom=-72,t.shadow.camera.near=20,t.shadow.camera.far=520,t.shadow.bias=-5e-4,t.shadow.normalBias=.035,t.target.position.copy(le),this.scene.add(t),this.scene.add(t.target),this.sun=t;const e=new H0(11064575,3029030,.82);this.scene.add(e);const i=new Zl(9222616,.38);i.position.set(160,110,240),i.target.position.copy(le),this.scene.add(i),this.scene.add(i.target),this.fill=i,this.scene.add(new X0(8362897,.18))}wireSystems(){this.combat.player=this.player,this.combat.enemies=this.enemies,this.combat.boss=this.boss,this.player.combat=this.combat,this.player.onDamage=()=>this.ui.flashDamage(),this.player.onDeath=()=>this.onPlayerDeath(),this.player.onEMP=t=>this.applyEMP(t),this.combat.onHitmarker=t=>this.ui.hitmarker(t),this.combat.onEnemyKilled=t=>this.onEnemyKilled(t),this.combat.onPlayerHit=()=>{},this.pickups.onRelic=t=>this.onRelic(t),this.pickups.onHeal=()=>{this.ui.toast("CHASSIS REPAIRED +35"),this.ui.feed("REPAIR CELL <b>+35 INTEGRITY</b>")},this.pickups.onEnergy=()=>{this.ui.feed("ENERGON CELL <b>+45 ENERGISON</b>")},this.pickups.onShard=t=>{Math.random()<.25&&this.ui.feed(`ENERGON SHARD <b>+${t}</b>`,2.4)},this.boss.onSummon=t=>this.summonAdds(t),this.boss.onBossDeath=t=>this.onBossDeath(t),this.input.onPauseRequest=()=>this.togglePause(),this.input.onLockChange=(t,e)=>{!t&&e&&this.state==="playing"&&this.pause()},this.ui.onDeploy=()=>this.start(),document.getElementById("resume").addEventListener("click",()=>this.resume()),document.getElementById("mute").addEventListener("click",()=>this.toggleMute()),document.getElementById("restart").addEventListener("click",()=>location.reload()),document.getElementById("respawn").addEventListener("click",()=>this.respawn()),document.getElementById("continue").addEventListener("click",()=>this.continueExploring()),document.getElementById("redeploy").addEventListener("click",()=>location.reload()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="playing"&&this.pause()}),this.effects.setViewport(this.renderer.domElement.height,this.camera.fov)}start(){this.state==="menu"&&(this.audio.unlock(),this.audio.setEngine(!1),this.ui.hideStart(),this.ui.showHUD(!0),this.input.showTouchUI(!0),this.input.enabled=!0,this.input.clear(),this.state="playing",this.player.setFirstPerson(!0),this.missionTime=0,this.introT=0,this.introStartPos=this.camera.position.clone(),this.introStartLook=this.camLook.clone(),this.camYaw=0,this.camPitch=.08,this.camLook.copy(this.player.position).add(new A(0,2.3,-9)),this.respawnPoint.copy(le),this.input.requestPointerLock(),this.ui.toast("ARC-7 DEPLOYED // 6 RELIC SIGNALS DETECTED",3.6),this.ui.feed("WARNING <b>DECEPTICLONE PATROLS ACTIVE</b>",7),setTimeout(()=>{this.state==="playing"&&!this.introToastShown&&(this.introToastShown=!0,this.ui.toast("TRANSFORM WITH F // FOLLOW THE GOLD SIGNALS"))},5200),this.ui.feed("MISSION <b>RECOVER 6 AUTOBOT RELIC CORES</b>",7))}pause(){this.state==="playing"&&(this.state="paused",this.input.enabled=!1,this.input.clear(),this.input.exitPointerLock(),this.audio.setEngine(!1),this.audio.setBoost(!1),this.ui.showPause(!0))}resume(){this.state==="paused"&&(this.ui.showPause(!1),this.state="playing",this.input.enabled=!0,this.input.requestPointerLock(),this.audio.setEngine(this.player.mode==="vehicle"),this.clock.getDelta())}togglePause(){this.state==="playing"?this.pause():this.state==="paused"&&this.resume()}toggleMute(){this.audio.setMuted(!this.audio.muted);const t=document.getElementById("mute");t&&(t.textContent=this.audio.muted?"AUDIO: OFF":"AUDIO: ON"),this.ui.toast(this.audio.muted?"AUDIO MUTED":"AUDIO ONLINE",1.6)}onPlayerDeath(){this.state==="dead"||this.state==="victory"||(this.state="dead",this.deathT=0,this.deathShown=!1,this.input.enabled=!1,this.input.clear(),this.audio.setEngine(!1),this.audio.setBoost(!1),this.effects.addShake(2),this.resetBossRetry())}respawn(){if(this.state!=="dead")return;this.player.revive();const t=this.world.heightAt(this.respawnPoint.x,this.respawnPoint.z);this.player.position.set(this.respawnPoint.x,t,this.respawnPoint.z),this.player.root.position.copy(this.player.position),this.player.yaw=Math.PI,this.player.root.rotation.y=this.player.yaw,this.camYaw=0,this.camPitch=.08,this.camPos.copy(this.camera.position),this.ui.showDeath(!1),this.state="playing",this.input.enabled=!0,this.input.requestPointerLock(),this.ui.toast("SPARK SIGNATURE RESTORED",2.6),this.audio.setEngine(!1)}resetBossRetry(){if(!(!this.boss.alive||!this.boss.awakened)){if(this.boss.health=this.boss.maxHealth,this.boss.engaged=!1,this.boss.windup=0,this.boss.attackCooldown=2.5,this.boss.pendingAttack=null,this.boss.summonedAt=[!1,!1],this.boss.position.copy(this.boss.spawnPoint),this.boss.root.position.copy(this.boss.position),this.boss.worldBar.visible=!1,this.boss.active=!0,this.bossMusic=!1,this.audio.setBossMode(!1),this.bossAdds)for(const t of this.bossAdds){if(!t||!t.alive)continue;t.alive=!1,t.root.visible=!1;const e=this.enemies.indexOf(t);e>=0&&this.enemies.splice(e,1)}this.bossAdds=[]}}onBossDeath(t){this.state==="victory"||this.state==="bossdown"||(this.state="bossdown",this.bossdownT=0,this.input.enabled=!1,this.input.clear(),this.audio.setEngine(!1),this.audio.setBoost(!1),this.audio.setBossMode(!1),this.audio.victory(),this.player.addScore(2500),this.player.setFirstPerson(!1),this.victoryStats={time:this.missionTime,score:this.player.score,relics:this.player.relics,kills:this.player.kills},this.ui.toast("DECEPTICON WARLORD ELIMINATED // +2500 ENERGON",4),this.ui.feed("VULCAN <b>OFFLINE</b>",8))}continueExploring(){this.state==="victory"&&(this.ui.showVictory(!1),this.state="playing",this.player.setFirstPerson(!0),this.input.enabled=!0,this.input.requestPointerLock(),this.camPos.copy(this.camera.position),this.ui.toast("BASIN SECURED // FREE ROAM",2.8),this.audio.setBossMode(!1))}onRelic(t){this.player.unlockRelic(t),this.player.addScore(250),this.ui.banner(t),this.ui.feed(`RELIC CORE <b>${t.name}</b>`,6),this.effects.addShake(.6);const e=t.x+5,i=t.z+6,n=this.world.heightAt(e,i);this.respawnPoint.set(e,n,i),this.player.relics>=6?(this.bossWakeTimer=2.2,this.ui.toast("ALL CORES RECOVERED // WARLORD SIGNAL LOCATED",4),this.ui.feed("TITAN'S REST <b>DECEPTICON SIGNAL DETECTED</b>",8)):this.ui.toast(`RELIC CORE ${this.player.relics}/6 RECOVERED`,2.6)}applyEMP(t){for(const i of[...this.enemies]){if(!i.alive||!i.active)continue;de(i.position.x,i.position.z,t.x,t.z)<22&&(i.stunTimer=4.2,i.aggro=!0,i.getHitPosition(this._tmpHit||(this._tmpHit=new A)),this.combat.applyDamage(i,46,this._tmpHit,!0))}this.boss.alive&&this.boss.awakened&&de(this.boss.position.x,this.boss.position.z,t.x,t.z)<28&&(this.boss.getHitPosition(this._tmpHit||(this._tmpHit=new A)),this.combat.applyDamage(this.boss,60,this._tmpHit,!0)),this.ui.feed("EMP BURST <b>HOSTILES STUNNED</b>",3)}onEnemyKilled(t){if(!t||t.isBoss)return;this.player.kills++,this.player.addScore(t.scoreValue);const e=t.position.clone().add(new A(0,1.6,0)),i=1+(Math.random()<.3?1:0);for(let n=0;n<i;n++)this.pickups.spawnShard(e.clone(),25+Math.floor(Math.random()*20),4);Math.random()<.35&&this.ui.feed(`${t.type==="decepticlone"?"DECEPTICLONE":"DECEPTICON"} <b>DESTROYED</b> +${t.scoreValue}`,3)}summonAdds(t){if(this.bossAdds||(this.bossAdds=[]),!(this.bossAdds.filter(i=>i&&i.alive).length>4)){this.ui.toast("WARLORD DEPLOYING REINFORCEMENTS",2.4);for(let i=0;i<2;i++){const n=i/2*Math.PI*2+.4,s=t.position.x+Math.cos(n)*15,o=t.position.z+Math.sin(n)*15,a=new Kh(this.scene,this.world,this.effects,this.combat,this.audio,{type:"decepticlone",x:s,z:o,yaw:n,seed:4400+i+Math.random()*1e3,patrolRadius:10});a.aggro=!0,a.lastKnown.copy(this.player.position),this.enemies.push(a),this.bossAdds.push(a),this.effects.ring(new A(s,this.world.heightAt(s,o),o),12279039,7,.6,1)}}}applyLook(t){const e=this.input.mouseDX,i=this.input.mouseDY;if(e||i){const n=this.input.isTouch?this.input.touchSensitivity:this.input.sensitivity;this.camYaw-=e*n,this.camPitch+=i*n*.88,this.lookCooldown=1.35}this.camPitch=Zt(this.camPitch,-1.15,1.15),this.lookCooldown=Math.max(0,this.lookCooldown-t)}updateMenuCamera(t,e=!1){this.menuTime+=t;const i=Math.PI+Math.sin(this.menuTime*.11)*.48,n=27,s=new A(le.x,le.y+2.8,le.z),o=new A(s.x+Math.sin(i)*n,s.y+12.5+Math.sin(this.menuTime*.15)*1.2,s.z+Math.cos(i)*n);e?this.camPos.copy(o):this.camPos.lerp(o,1-Math.exp(-2*t)),this.camLook.copy(s),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook),this.camera.fov=58,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}updateBossCamera(t){this.bossdownT+=t;const e=this.boss.position.clone().add(new A(0,3.8,0)),i=.4+this.bossdownT*.34,n=24,s=new A(e.x+Math.sin(i)*n,e.y+7+Math.sin(this.bossdownT*.6)*1.4,e.z+Math.cos(i)*n);this.camPos.lerp(s,1-Math.exp(-2.4*t)),this.camLook.lerp(e,1-Math.exp(-5*t));const o=this.effects.shake*.25;this.camera.position.copy(this.camPos),this.camera.position.x+=(Math.random()-.5)*o,this.camera.position.y+=(Math.random()-.5)*o,this.camera.lookAt(this.camLook),this.camera.fov=kt(this.camera.fov,52,3,t),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}updateGameCamera(t){const e=this.player.transformT,i=this.player.mode==="vehicle"||this.player.transforming&&this.player.transformDir>0;this.player.mode==="vehicle"&&!this.player.transforming&&this.lookCooldown<=0&&Math.abs(this.player.speed)>3&&(this.camYaw=xs(this.camYaw,this.player.yaw+Math.PI,2.1,t),this.camPitch=kt(this.camPitch,.02,1.2,t));const n=-Math.sin(this.camYaw),s=-Math.cos(this.camYaw),o=Math.cos(this.camPitch),a=Math.sin(this.camPitch),l=this.player.mode==="robot"?4.55-e*2.92:1.63,h=Math.hypot(this.player.velocity.x,this.player.velocity.z),c=this.player.mode==="robot"&&this.player.grounded?Math.sin(this.player.walkPhase*2)*.032*Zt(h/11,0,1):0,d=new A(this.player.position.x+n*.24,this.player.position.y+l+c,this.player.position.z+s*.24),u=new A(d.x+n*o*40,d.y-a*40,d.z+s*o*40);if(this.introT<1){this.introT=Math.min(1,this.introT+t/2.1);const p=ye(0,1,this.introT);this.camPos.lerpVectors(this.introStartPos,d,p),this.camLook.lerpVectors(this.introStartLook,u,p)}else this.camPos.lerp(d,1-Math.exp(-18*t)),this.camLook.lerp(u,1-Math.exp(-18*t));const f=this.effects.shake*.24+this.player.cameraShake*.16;this.camera.position.copy(this.camPos),f>.001&&(this.camera.position.x+=(Math.random()-.5)*f,this.camera.position.y+=(Math.random()-.5)*f,this.camera.position.z+=(Math.random()-.5)*f),this.camera.lookAt(this.camLook),f>.001&&(this.camera.rotation.z+=(Math.random()-.5)*f*.004);const g=Zt(Math.abs(this.player.speed)/48,0,1),v=70+(i?7:0)+g*7+(this.player.boosting?3:0);this.camera.fov=kt(this.camera.fov,v,3.5,t),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}updateAim(){this.camera.updateMatrixWorld();const t=this.camera.getWorldDirection(this._aimDir||(this._aimDir=new A));this.aimPoint.copy(this.camera.position).addScaledVector(t,130);const e=this.input.isTouch?.963:.986;let i=null,n=e;const s=[...this.enemies];this.boss.alive&&this.boss.awakened&&s.push(this.boss);for(const o of s){if(!o.alive||!o.active)continue;o.getHitPosition(this._tmpHit||(this._tmpHit=new A));const a=pg.copy(this._tmpHit).sub(this.camera.position),l=a.length();if(l>145)continue;a.divideScalar(l);const h=a.dot(t);h>n&&(n=h,i=o)}this.targetLock=!!i,i&&i.getHitPosition(this.aimPoint),this.ui.setTargetLock(this.targetLock)}updateLight(){const t=this.player.position;this.sun.position.set(t.x+this.sunDir.x*190,t.y+this.sunDir.y*190,t.z+this.sunDir.z*190),this.sun.target.position.set(t.x,t.y,t.z),this.sun.target.updateMatrixWorld(),this.fill.position.set(t.x+150,t.y+100,t.z+210),this.fill.target.position.set(t.x,t.y,t.z),this.fill.target.updateMatrixWorld()}updateWorldCommon(t){this.worldTime+=t,this.world.update(t,this.worldTime,this.camera),this.effects.update(t),this.audio.update(t)}updateMenu(t){this.updateWorldCommon(t),this.player.update(t,dg,this.camYaw,this.menuAim,this.camera);for(const e of this.enemies)e.update(t,this.player,this.camera,this.worldTime);this.boss.update(t,this.player,this.camera,this.worldTime),this.pickups.update(t,this.player,this.worldTime),this.updateMenuCamera(t),this.updateLight()}updatePlaying(t){if(this.missionTime+=t,this.input.update(),this.input.pressed.has("KeyM")&&this.toggleMute(),this.applyLook(t),this.updateGameCamera(t),this.updateAim(),this.player.update(t,this.input,this.camYaw,this.aimPoint,this.camera),this.state!=="playing"){this.updateWorldCommon(t);return}this.combat.update(t);for(const i of this.enemies)i.update(t,this.player,this.camera,this.worldTime);this.boss.update(t,this.player,this.camera,this.worldTime),!this.bossMusic&&this.boss.engaged&&this.boss.alive&&(this.bossMusic=!0,this.audio.setBossMode(!0),this.ui.toast("WARNING // DECEPTICON WARLORD ENGAGED",3.4),this.effects.addShake(1.2)),this.boss.alive&&this.boss.phase!==this.bossPhase&&(this.bossPhase=this.boss.phase,this.bossPhase===2&&(this.ui.toast("WARLORD ENRAGED // SEEK COVER",3),this.audio.bossRoar())),this.bossWakeTimer>0&&(this.bossWakeTimer-=t,this.bossWakeTimer<=0&&!this.boss.awakened&&(this.boss.activate(),this.audio.setBossMode(!0),this.bossMusic=!0,this.ui.toast("WARNING // WARLORD SIGNAL ONLINE AT TITAN'S REST",4.2),this.ui.feed("TITAN'S REST <b>VULCAN AWAKENED</b>",8))),this.pickups.update(t,this.player,this.worldTime),this.updateWorldCommon(t),this.updateLight(),this.updateRegion(),this.player.mode==="vehicle"&&this.audio.updateEngine(Math.abs(this.player.speed)/48);const e=this.getObjective();this.ui.update(t,{player:this.player,camera:this.camera,cameraYaw:this.camYaw,enemies:this.enemies,boss:this.boss,objective:e,targetLock:this.targetLock,boosting:this.player.boosting&&this.player.speed>18,speedRatio:Math.abs(this.player.speed)/48}),this.effects.shake=Math.max(0,this.effects.shake)}updateBossDown(t){this.bossdownT+=t,this.worldTime+=t,this.boss.update(t,this.player,this.camera,this.worldTime),this.pickups.update(t,this.player,this.worldTime),this.updateWorldCommon(t),this.updateLight(),this.updateBossCamera(t),this.ui.update(t,{player:this.player,camera:this.camera,cameraYaw:this.camYaw,enemies:this.enemies,boss:this.boss,objective:this.getObjective(),targetLock:!1,boosting:!1,speedRatio:0}),this.bossdownT>3.6&&!this.victoryShown&&(this.victoryShown=!0,this.state="victory",this.ui.showVictory(!0,this.victoryStats||{time:this.missionTime,score:this.player.score,relics:this.player.relics,kills:this.player.kills}),this.ui.showHUD(!1))}updateDead(t){this.deathT+=t,this.updateWorldCommon(t),this.deathT>1.25&&!this.deathShown&&(this.deathShown=!0,this.ui.showDeath(!0,this.player.relics)),this.updateGameCamera(t)}updateVictory(t){this.worldTime+=t,this.world.update(t,this.worldTime,this.camera),this.effects.update(t)}updateRegion(){const t=this.world.regionAt(this.player.position.x,this.player.position.z);if(t!==this.region){const e=this.region;this.region=t,e&&this.state==="playing"&&this.ui.toast(`ENTERING ${t}`,2.2)}}getObjective(){const t=this.world.relics.filter(i=>!i.collected),e={title:"RECOVER THE RELIC CORES",body:"Six Autobot caches are scattered across the basin. Decepticlone patrols are hunting you. Each core unlocks a weapon or ability.",progress:this.player.relics/6,distance:"—",hint:"FOLLOW THE SIGNAL",prompt:null,target:null};if(t.length>0){let i=t[0],n=1/0;for(const s of t){const o=de(this.player.position.x,this.player.position.z,s.x,s.z);o<n&&(n=o,i=s)}e.distance=`${Math.round(n)} M`,e.hint=this.world.regionAt(i.x,i.z),e.target={x:i.x,z:i.z},e.body=`Relic cores recovered: ${this.player.relics}/6. The closest signal pulses from ${e.hint.toLowerCase().replace(/\b\w/g,s=>s.toUpperCase())}.`,this.player.relics===0&&!this.input.isTouch&&this.missionTime<9&&(e.prompt="TRANSFORM"),this.world.objectiveTarget=e.target}else if(this.boss.alive){const i=de(this.player.position.x,this.player.position.z,this.boss.position.x,this.boss.position.z);e.title="DESTROY THE DECEPTICON WARLORD",e.body=this.boss.awakened?"VULCAN is online at Titan's Rest. Break the warlord before the basin falls.":"All six cores are secure. The warlord signal is rising at Titan's Rest.",e.progress=1,e.distance=`${Math.round(i)} M`,e.hint="TITAN'S REST",e.target={x:this.boss.position.x,z:this.boss.position.z},this.world.objectiveTarget=e.target}else e.title="BASIN SECURED",e.body="The Decepticon warlord is scrap. Hunt the remaining hostiles or explore the forest.",e.progress=1,e.distance="—",e.hint="FREE ROAM",this.world.objectiveTarget=null;return e}resize(){var i,n,s;const t=window.innerWidth,e=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,(i=this.input)!=null&&i.isTouch?1.5:1.75)),this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),(n=this.effects)==null||n.setViewport(this.renderer.domElement.height,this.camera.fov),(s=this.ui)==null||s.resize()}loop(){const t=Zt(this.clock.getDelta(),0,.05);this.state==="menu"?this.updateMenu(t):this.state==="playing"?this.updatePlaying(t):this.state==="paused"||(this.state==="dead"?this.updateDead(t):this.state==="bossdown"?this.updateBossDown(t):this.state==="victory"&&this.updateVictory(t)),this.renderer.render(this.scene,this.camera),this.input.endFrame()}makeDebugAPI(){return{game:this,start:()=>this.start(),teleport:(t,e,i=null)=>{const n=this.world.heightAt(t,e)+.05;this.player.position.set(t,n,e),this.player.velocity.set(0,0,0),this.player.root.position.copy(this.player.position),i!==null&&(this.player.yaw=i,this.player.root.rotation.y=i,this.camYaw=i+Math.PI),this.camPos.copy(this.camera.position),this.ui.toast(`TELEPORT // ${Math.round(t)} / ${Math.round(e)}`,1.5)},unlockAll:()=>{for(const t of this.pickups.relics)t.collected||this.pickups.collectRelic(t)},awakenBoss:()=>{this.bossWakeTimer=.01},killBoss:()=>{this.boss.alive&&(this.boss.getHitPosition(this._tmpHit||(this._tmpHit=new A)),this.combat.applyDamage(this.boss,this.boss.health,this._tmpHit,!0))},heal:()=>{this.player.health=this.player.maxHealth,this.player.energon=this.player.maxEnergon},state:()=>this.state,setCamera:(t,e=.25)=>{this.camYaw=t,this.camPitch=e},fire:()=>{this.player.fire(this.player.weapon)},stats:()=>({state:this.state,relics:this.player.relics,health:this.player.health,enemies:this.enemies.filter(t=>t.alive).length,bossHealth:this.boss.health,position:{x:this.player.position.x,z:this.player.position.z},missionTime:this.missionTime})}}}const pg=new A;try{new fg}catch(r){console.error(r);const t=document.getElementById("start-status");t&&(t.textContent="RENDERER OFFLINE // CHECK CONSOLE");const e=document.getElementById("deploy");e&&(e.disabled=!0)}
