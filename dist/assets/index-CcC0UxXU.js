(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector("#form-div"),u=document.querySelector("#result-div"),d=document.querySelector("#result"),i=document.querySelector("input[type=submit]");i==null||i.addEventListener("click",a);function a(){event==null||event.preventDefault();const r=Number(document.querySelector("#total").value),o=Number(document.querySelector("#people").value),s=Number(document.querySelector("#service").value);d.innerHTML=`<p>Das <b>Trinkgeld</b> beträgt: ${(r*s).toFixed(2)}€</p> 
    <p>Die <b>Gesamtsumme</b> ist: ${(r+r*s).toFixed(2)}€</p>
    <p>Der Preis <b>pro Person</b> liegt bei: ${((r+r*s)/o).toFixed(2)}€</p>`,l.classList.toggle("hide"),u.classList.toggle("show")}const f=document.querySelector("#back");f.addEventListener("click",p);function p(){l.classList.toggle("hide"),u.classList.toggle("show")}
