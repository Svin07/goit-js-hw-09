!function(){var t=document.querySelector("body"),e=document.querySelectorAll("button"),n=e[0],d=e[1],l=null;n.addEventListener("click",(function(){l=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(l),n.disabled=!1,d.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.44a88b07.js.map
