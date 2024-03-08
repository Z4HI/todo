(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=c(r);fetch(r.href,l)}})();const o=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],f=document.querySelector(".addBtn"),d=document.querySelector(".rightDisplay"),y=document.querySelector("#submitBtn"),a=document.querySelector("#task"),u=document.querySelector("#date"),v=document.querySelector(".displayDate"),g=document.querySelector(".description"),m=document.querySelectorAll('input[name = "priority"]'),S=new Date,k=document.querySelector("#closeAddTask"),h=document.querySelector(".burger");window.onload=()=>{w(),o&&s()};const q=(e,t,c,n,r)=>{let l={taskname:e,date:t,priority:c,description:n,completed:r};o.push(l),localStorage.setItem("items",JSON.stringify(o)),s()},s=()=>{d.innerHTML="";for(let e=0;e<o.length;e++){let t=document.createElement("div");t.classList.add("taskCard"),t.innerHTML=`
    <div class="uneditCard">
        <div class="info">
            <div id = "cardName"> Name : ${o[e].taskname}</div>
            <div id = "cardDate"> Due Date : ${o[e].date}</div>
            <div id = "cardPriority"> Priority: ${o[e].priority}</div>
            <div id = "cardDescription"> Description : ${o[e].description}</div>
        </div>
        <div class="buttons">
            <button class ="deleteCard"><i class="fa-solid fa-trash-can"></i></button>
            <button class = "editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class = "completed"><i class="fa-regular fa-circle-check"></i></button>
        </div>
    </div>
    <div class ="editdescription">
    <form action="">
          <label for="edittask">Edit Task Name</label>
          <input type="text" name="edittask" id="edittask" placeholder="Edit Task Name">
          <label for="date">Edit Date</label>
          <input type="date" name="date" id="editdate"><br>Edit description
          <textarea id="edittextdescription" name="description" cols="10" rows="5"></textarea>
          <div class="editbuttons">
              <button id = "saveBtn">Save</button>
              <button id = "cancelBtn">Cancel</button>
          </div>
        </form>
    </div>
    `,d.appendChild(t)}D(),T(),A(),B(),b(),E(),p()},b=()=>{document.querySelectorAll("#cancelBtn").forEach((t,c)=>{t.addEventListener("click",n=>{n.preventDefault(),L(c)})})},L=e=>{document.querySelectorAll(".editdescription")[e].classList.toggle("showEdit")},p=()=>{const e=document.querySelectorAll(".taskCard"),t=document.querySelectorAll(".completed");for(let c=0;c<e.length;c++)o[c].completed==!0?t[c].classList.add("green"):t[c].classList.remove("green")},E=()=>{document.querySelectorAll(".completed").forEach((t,c)=>{t.addEventListener("click",()=>{o[c].completed==!1?o[c].completed=!0:o[c].completed=!1,p(),localStorage.setItem("items",JSON.stringify(o))})})},A=()=>{let e=document.querySelectorAll(".editBtn");const t=document.querySelectorAll(".editdescription");e.forEach((c,n)=>{c.addEventListener("click",()=>{t[n].classList.toggle("showEdit"),C(n)})})},C=e=>{document.querySelectorAll("#edittask")[e].value=o[e].taskname,document.querySelectorAll("#editdate")[e].value=o[e].date,document.querySelectorAll("#edittextdescription")[e].value=o[e].description},D=()=>{const e=document.querySelectorAll(".taskCard");for(let t=0;t<e.length;t++)o[t].priority=="high"&&e[t].classList.add("high"),o[t].priority=="medium"&&(e[t].style.border="solid blue 6px")},B=()=>{document.querySelectorAll("#saveBtn").forEach((t,c)=>{t.addEventListener("click",n=>{n.preventDefault(),N(c)})})},N=e=>{o[e].taskname=document.querySelectorAll("#edittask")[e].value,o[e].date=document.querySelectorAll("#editdate")[e].value,o[e].description=document.querySelectorAll("#edittextdescription")[e].value,localStorage.setItem("items",JSON.stringify(o)),s()},T=()=>{document.querySelectorAll(".deleteCard").forEach((t,c)=>{t.addEventListener("click",()=>{I(c)})})},I=e=>{o.splice(e,1),localStorage.setItem("items",JSON.stringify(o)),s()},O=e=>{let t="";for(const c of e)c.checked&&(t=c.value);return t},P=()=>{a.value="",u.value="",m.forEach(function(e){e.checked=!1})},w=()=>{let e=S.toString().split(" ");v.innerHTML=`${e[0]}  ${e[1]}  ${e[2]}`};f.addEventListener("click",()=>{document.querySelector(".addTask").classList.toggle("visible")});y.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".addTask").classList.toggle("visible");let t=a.value,c=u.value,n=O(m),r=g.value;q(t,c,n,r,!1),console.log(o),P()});k.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".addTask").classList.toggle("visible")});h.addEventListener("click",()=>{console.log("click"),document.querySelector(".leftNav").classList.toggle("scale")});
