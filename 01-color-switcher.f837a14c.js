const e=document.querySelector("body"),t=document.querySelectorAll("button"),l=t[0],d=t[1];let n=null;l.addEventListener("click",(function(){n=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),l.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(n),l.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.f837a14c.js.map
