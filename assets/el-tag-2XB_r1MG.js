import{av as g,U as x,aA as C}from"./index-DZ6OSBbF.js";const s=new Map;if(g){let e;document.addEventListener("mousedown",t=>e=t),document.addEventListener("mouseup",t=>{if(e){for(const n of s.values())for(const{documentHandler:o}of n)o(t,e);e=void 0}})}function i(e,t){let n=[];return x(t.arg)?n=t.arg:C(t.arg)&&n.push(t.arg),function(o,a){const c=t.instance.popperRef,r=o.target,d=a==null?void 0:a.target,l=!t||!t.instance,f=!r||!d,p=e.contains(r)||e.contains(d),m=e===r,v=n.length&&n.some(u=>u==null?void 0:u.contains(r))||n.length&&n.includes(d),h=c&&(c.contains(r)||c.contains(d));l||f||p||m||v||h||t.value(o,a)}}const H={beforeMount(e,t){s.has(e)||s.set(e,[]),s.get(e).push({documentHandler:i(e,t),bindingFn:t.value})},updated(e,t){s.has(e)||s.set(e,[]);const n=s.get(e),o=n.findIndex(c=>c.bindingFn===t.oldValue),a={documentHandler:i(e,t),bindingFn:t.value};o>=0?n.splice(o,1,a):n.push(a)},unmounted(e){s.delete(e)}};export{H as C};
