(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const c=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],l=localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[],C=document.querySelector(".addBtn"),u=document.querySelector(".rightDisplay"),q=document.querySelector("#submitBtn"),k=document.querySelector("#category"),g=document.querySelector("#task"),p=document.querySelector("#date"),L=document.querySelector(".displayDate"),b=document.querySelector(".description"),v=document.querySelectorAll('input[name = "priority"]'),f=new Date,E=document.querySelector("#closeAddTask"),A=document.querySelector(".burger"),B=document.querySelector(".navAddCategory"),D=document.querySelector("#closeAddCategory"),S=document.querySelector(".addCategory"),O=document.querySelector("#categorySubmitBtn"),I=document.querySelector("#inputCategory"),m=document.querySelector(".categories"),y=document.querySelector("#category"),N=document.querySelector("#todayBtn"),T=document.querySelector(".homeBtn");window.onload=()=>{z(),c&&i(c),l&&d()};const $=(e,t,o,r,n,a)=>{let s={category:e,taskname:t,date:o,priority:r,description:n,completed:a};c.push(s),localStorage.setItem("items",JSON.stringify(c)),i(c)},i=e=>{u.innerHTML="";for(let t=0;t<e.length;t++){let o=document.createElement("div");o.classList.add("taskCard"),o.innerHTML=`
    <div class="uneditCard">
        <div class="info">
            <div id = "cardCategory"> Category : ${e[t].category}</div>
            <div id = "cardName"> Name : ${e[t].taskname}</div>
            <div id = "cardDate"> Due Date : ${e[t].date}</div>
            <div id = "cardPriority"> Priority: ${e[t].priority}</div>
            <div id = "cardDescription"> Description : ${e[t].description}</div>
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
    `,u.appendChild(o)}w(),K(),F(),H(),M(),J(),h()},M=()=>{document.querySelectorAll("#cancelBtn").forEach((t,o)=>{t.addEventListener("click",r=>{r.preventDefault(),x(o)})})},x=e=>{document.querySelectorAll(".editdescription")[e].classList.toggle("showEdit")},h=()=>{const e=document.querySelectorAll(".taskCard"),t=document.querySelectorAll(".completed");for(let o=0;o<e.length;o++)c[o].completed==!0?t[o].classList.add("green"):t[o].classList.remove("green")},J=()=>{document.querySelectorAll(".completed").forEach((t,o)=>{t.addEventListener("click",()=>{c[o].completed==!1?c[o].completed=!0:c[o].completed=!1,h(),localStorage.setItem("items",JSON.stringify(c))})})},F=()=>{let e=document.querySelectorAll(".editBtn");const t=document.querySelectorAll(".editdescription");e.forEach((o,r)=>{o.addEventListener("click",()=>{t[r].classList.toggle("showEdit"),P(r)})})},P=e=>{document.querySelectorAll("#edittask")[e].value=c[e].taskname,document.querySelectorAll("#editdate")[e].value=c[e].date,document.querySelectorAll("#edittextdescription")[e].value=c[e].description},w=()=>{const e=document.querySelectorAll(".taskCard");for(let t=0;t<e.length;t++)c[t].priority=="high"&&e[t].classList.add("high"),c[t].priority=="medium"&&(e[t].style.border="solid blue 6px")},H=()=>{document.querySelectorAll("#saveBtn").forEach((t,o)=>{t.addEventListener("click",r=>{r.preventDefault(),j(o)})})},j=e=>{c[e].taskname=document.querySelectorAll("#edittask")[e].value,c[e].date=document.querySelectorAll("#editdate")[e].value,c[e].description=document.querySelectorAll("#edittextdescription")[e].value,localStorage.setItem("items",JSON.stringify(c)),i(c)},K=()=>{document.querySelectorAll(".deleteCard").forEach((t,o)=>{t.addEventListener("click",()=>{V(o)})})},V=e=>{c.splice(e,1),localStorage.setItem("items",JSON.stringify(c)),i(c)},W=e=>{let t="";for(const o of e)o.checked&&(t=o.value);return t},X=()=>{g.value="",p.value="",v.forEach(function(e){e.checked=!1})},z=()=>{let e=f.toString().split(" ");L.innerHTML=`${e[0]}  ${e[1]}  ${e[2]}`},G=e=>e<10?"0"+e:e,Q=e=>{let o=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"].indexOf(e)+1;return G(o)},R=()=>{let e=f.toString().split(" "),t=`${e[1]}`,o=Q(t);return`${e[3]}-${o}-${e[2]}`},U=()=>{let e=[];for(let t=0;t<c.length;t++)c[t].date===R()&&e.push(c[t]);return console.log(e),e},Y=e=>{let t={category:e};l.push(t),localStorage.setItem("categories",JSON.stringify(l)),d()},d=e=>{m.innerHTML="",y.innerHTML="";for(let t=0;t<l.length;t++){let o=document.createElement("div");o.classList.add("navCategory"),o.innerHTML=`
    ${l[t].category} 
    <button id ="removeCategoryBtn">X</button>
    `;let r=document.createElement("option");r.classList.add("sv"),r.value=`${l[t].category}`,r.text=`${l[t].category}`,y.appendChild(r),m.appendChild(o)}Z()},Z=()=>{document.querySelectorAll("#removeCategoryBtn").forEach((t,o)=>{t.addEventListener("click",()=>{_(o),localStorage.setItem("categories",JSON.stringify(l))})})},_=e=>{l.splice(e,1),d()};C.addEventListener("click",()=>{document.querySelector(".addTask").classList.toggle("visible")});q.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".addTask").classList.toggle("visible");let t=k.value,o=g.value,r=p.value,n=W(v),a=b.value;$(t,o,r,n,a,!1),X()});O.addEventListener("click",e=>{e.preventDefault();let t=I.value;Y(t)});E.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".addTask").classList.toggle("visible")});A.addEventListener("click",()=>{document.querySelector(".leftNav").classList.toggle("scale")});B.addEventListener("click",()=>{S.classList.toggle("visible")});D.addEventListener("click",()=>{S.classList.toggle("visible")});N.addEventListener("click",()=>{i(U())});T.addEventListener("click",()=>{i(c)});console.log(Date.getWeek());
