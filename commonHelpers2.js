import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),t={email:"",message:""},l="feedback-form-state";function m(e){const s=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim();console.dir(t),t.email=s,t.message=r,localStorage.setItem(l,JSON.stringify(t))}function n(e){e.preventDefault();const s=e.currentTarget.elements.email.value.trim(),r=e.currentTarget.elements.message.value.trim();if(s===""||r==="")return alert("Fill please all fields");console.log(t),a.reset(),localStorage.removeItem(l)}function o(){if(localStorage.getItem(l)!==null){const e=JSON.parse(localStorage.getItem(l));t.email=e.email,t.message=e.message,a.elements.email.value=t.email,a.elements.message.value=t.message;return}}o();a.addEventListener("input",m);a.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
