import{bn as p,bs as y,bY as O,bT as m}from"./index-CGWrNWMP.js";import{h as v,i as x,j as b,o as w,U as i}from"tg-yk-online/_Uint8Array-Dp_aYPW3.js";var a=Object.create,P=function(){function e(){}return function(r){if(!p(r))return{};if(a)return a(r);e.prototype=r;var n=new e;return e.prototype=void 0,n}}();function z(e,r){var n=-1,t=e.length;for(r||(r=Array(t));++n<t;)r[n]=e[n];return r}function M(e,r,n,t){var h=!n;n||(n={});for(var u=-1,g=r.length;++u<g;){var s=r[u],o=void 0;o===void 0&&(o=e[s]),h?y(n,s,o):O(n,s,o)}return n}function A(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var T=Object.prototype,U=T.hasOwnProperty;function C(e){if(!p(e))return A(e);var r=v(e),n=[];for(var t in e)t=="constructor"&&(r||!U.call(e,t))||n.push(t);return n}function N(e){return x(e)?b(e,!0):C(e)}var I=w(Object.getPrototypeOf,Object),d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,K=f&&f.exports===d,c=K?m.Buffer:void 0,l=c?c.allocUnsafe:void 0;function Y(e,r){if(r)return e.slice();var n=e.length,t=l?l(n):new e.constructor(n);return e.copy(t),t}function L(e){var r=new e.constructor(e.byteLength);return new i(r).set(new i(e)),r}function j(e,r){var n=r?L(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function k(e){return typeof e.constructor=="function"&&!v(e)?P(I(e)):{}}export{z as a,Y as b,M as c,j as d,L as e,I as g,k as i,N as k};
