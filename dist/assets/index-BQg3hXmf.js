(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const n=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],f=document.querySelector(".addBtn"),a=document.querySelector(".rightDisplay"),p=document.querySelector("#submitBtn"),d=document.querySelector("#task"),u=document.querySelector("#date"),y=document.querySelector(".displayDate"),m=document.querySelectorAll('input[name = "priority"]');document.querySelector(".deleteCard");const g=new Date;window.onload=()=>{console.log(n),C(),n&&l()};const v=e=>{let t="";for(const i of e)i.checked&&(t=i.value);return t},S=(e,t,i)=>{let c={taskname:e,date:t,priority:i};n.push(c),localStorage.setItem("items",JSON.stringify(n)),l()},l=()=>{a.innerHTML="";for(let e=0;e<n.length;e++){let t=document.createElement("div");t.classList.add("taskCard"),t.innerHTML=`
    <div id = "cardName"> Name : ${n[e].taskname}</div>
    <div id = "cardDate"> Date : ${n[e].date}</div>
    <div id = "cardPriority"> Priority: ${n[e].priority}</div>
    <button class ="deleteCard">delete</button>
    `,a.appendChild(t)}h()},h=()=>{document.querySelectorAll(".deleteCard").forEach((t,i)=>{t.addEventListener("click",()=>{L(i)})})},L=e=>{n.splice(e,1),localStorage.setItem("items",JSON.stringify(n)),l()};f.addEventListener("click",()=>{document.querySelector(".addTask").classList.toggle("visible")});p.addEventListener("click",e=>{e.preventDefault();let t=d.value,i=u.value,c=v(m);S(t,i,c),document.querySelector(".addTask").classList.toggle("visible"),q()});const q=()=>{d.value="",u.value="",m.forEach(function(e){e.checked=!1})},C=()=>{let e=g.toString().split(" ");y.innerHTML=`${e[0]}  ${e[1]}  ${e[2]}`};
