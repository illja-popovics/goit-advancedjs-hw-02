import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let o=null;t.disabled=!0;e.addEventListener("click",()=>{e.disabled=!0,t.disabled=!1,o=setInterval(()=>{document.body.style.backgroundColor=r()},1e3)});t.addEventListener("click",()=>{clearInterval(o),e.disabled=!1,t.disabled=!0});function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}
//# sourceMappingURL=commonHelpers.js.map
