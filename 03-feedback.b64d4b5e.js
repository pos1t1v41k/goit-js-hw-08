var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=document.querySelector("[name = email]"),o=document.querySelector("[name = message]");var r={},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=l||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function y(e){return c=e,u=setTimeout(S,t),l?d(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=p();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?g(n,i-(e-c)):n}(e))}function T(e){return u=void 0,m&&o?d(e):(o=r=void 0,a)}function w(){var e=p(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return y(f);if(s)return u=setTimeout(S,t),d(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=h(t)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(h(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:T(p())},w}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const j={};!function(){const e=localStorage.getItem("feedback-form-state");try{const t=JSON.parse(e);t&&(n.value=t.email,o.value=t.message)}catch(e){console.log(e.name),console.log(e.message)}}(),t.addEventListener("input",r((e=>{j.email=n.value,j.message=o.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),t.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),j.email=n.value,j.message=o.value,console.log(j),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.b64d4b5e.js.map