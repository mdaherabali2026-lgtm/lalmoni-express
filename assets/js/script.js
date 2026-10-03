const menu=document.querySelector(".menu-toggle"),links=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const sections=[...document.querySelectorAll("main section[id]")];
const navs=[...document.querySelectorAll(".nav-links a")];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navs.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}}),{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>io.observe(s));
