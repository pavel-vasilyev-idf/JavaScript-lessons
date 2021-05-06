(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,a,r,c,u,l,i,s,d,m,v,f,p,y,g,h,S,q;(function e(t){var n=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds"),r=document.querySelector("#timer-days"),c=document.querySelector(".dott-days"),u=0;u=setInterval((function(){var l,i,s,d=(l=(new Date(t).getTime()-(new Date).getTime())/1e3,i=Math.floor(l%60),s=Math.floor(l/60%60),{timeRemaining:l,hours:Math.floor(l/60/60%24),minutes:s,seconds:i,days:Math.floor(l/60/60/24)});if(r.textContent=d.days<10?"0".concat(d.days):d.days,n.textContent=d.hours<10?"0".concat(d.hours):d.hours,o.textContent=d.minutes<10?"0".concat(d.minutes):d.minutes,a.textContent=d.seconds<10?"0".concat(d.seconds):d.seconds,(d.hours<0||d.minutes<0||d.seconds<0||d.days<0)&&(n.textContent="00",o.textContent="00",a.textContent="00",r.textContent="00"),0===d.days?(r.style.display="none",c.style.display="none"):(r.style.display="inline-block",c.style.display="inline-block"),d.timeRemaining<0){var m=new Date(t);m.setDate(m.getDate()),e(m),clearInterval(u)}}),1e3)})("31 May 2021"),function(){document.querySelector(".menu");var e=document.querySelector("menu");document.querySelector(".close-btn"),e.querySelectorAll("ul>li"),window.addEventListener("click",(function(t){var n=t.target;n.closest(".menu")||n.closest("menu")?e.classList.toggle("active-menu"):n&&n.closest("menu")||e.classList.remove("active-menu")}))}(),y=document.querySelector(".popup"),g=document.querySelectorAll(".popup-btn"),h=document.querySelector(".popup-content"),S={count:-445,speed:12,startPos:-445,endPos:0},q=function e(){S.startPos>S.endPos?S.count-=S.speed:S.count+=S.speed,h.style.transform="translateY(".concat(S.count,"px)"),(S.startPos>S.endPos?S.count>S.endPos:S.count<S.endPos)&&requestAnimationFrame(e)},g.forEach((function(e){e.addEventListener("click",(function(){y.style.display="block",screen.width>768&&(S.count=S.startPos,requestAnimationFrame(q))}))})),y.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?y.style.display="none":(t=t.closest(".popup-content"))||(y.style.display="none")})),v=document.querySelector(".service-header"),f=v.querySelectorAll(".service-header-tab"),p=document.querySelectorAll(".service-tab"),v.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&f.forEach((function(e,n){e===t&&function(e){for(var t=0;t<p.length;t++)e===t?(f[t].classList.add("active"),p[t].classList.remove("d-none")):(f[t].classList.remove("active"),p[t].classList.add("d-none"))}(n)}))})),function(){var e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),n=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots"));t.forEach((function(){var e=document.createElement("li");e.classList.add("dot"),n.appendChild(e)})),n.children[0].classList.add("dot-active");var o=document.querySelectorAll(".dot"),a=0,r=0,c=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},l=function(){c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),++a>=t.length&&(a=0),u(t,a,"portfolio-item-active"),u(o,a,"dot-active")},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;r=setInterval(l,e)};e.addEventListener("click",(function(e){e.preventDefault();var n=e.target;c(t,a,"portfolio-item-active"),c(o,a,"dot-active"),n.matches(".portfolio-btn, .dot")&&(n.matches("#arrow-right")?a++:n.matches("#arrow-left")?a--:n.matches(".dot")&&o.forEach((function(e,t){e===n&&(a=t)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),u(t,a,"portfolio-item-active"),u(o,a,"dot-active"))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)})),e.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i()})),i(5e3)}(),d=document.querySelector("#command .row"),m=function(){var e=event.target;if(e.classList.contains("command__photo")){var t=e.src;e.src=e.dataset.img,e.dataset.img=t}},d.addEventListener("mouseover",m),d.addEventListener("mouseout",m),document.querySelector(".calc-block").addEventListener("input",(function(e){var t=e.target;"text"===t.type&&(t.value=t.value.replace(/[^\d]/g,""))})),document.querySelector(".footer-form-input").addEventListener("input",(function(e){var t=e.target;"text"===t.type?t.value=t.value.replace(/[^а-яА-ЯЁё\-\ ]/,""):"email"===t.type?t.value=t.value.replace(/[^a-zA-Z\@\_\-\.\!\~\*\']/,""):"tel"===t.type&&(t.value=t.value.replace(/[^\d\(\)\-]/g,""))})),o=document.querySelectorAll("input.calc-item"),a=document.querySelectorAll("[name=user_name]"),r=document.querySelectorAll("[name=user_message]"),c=document.querySelectorAll("[name=user_email]"),u=document.querySelectorAll("[name=user_phone]"),l=new Set,i=function(e){e.value=e.value.replace(/\s+/g," "),e.value=e.value.replace(/\-+/g,"-");var t=new RegExp("ReGeX"+e.value+"ReGeX");/^[/ /-]/.test(t)&&(e.value=e.value.replace(/^[/ /-]/,"")),/[/ /-]$/.test(t)&&(e.value=e.value.replace(/[/ /-]$/,""))},s=function(e,t){e.value.match(t)||(l.add(e.value),e.value="")},a.forEach((function(e){e.addEventListener("blur",(function(){i(e),e.value=e.value.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()})).join(" "),s(e,/[а-яё]{2,}/gi)}))})),r.forEach((function(e){e.addEventListener("blur",(function(){s(e,/[^а-яё0-9\.\,\:\-\!\? ]/gi),i(e)}))})),c.forEach((function(e){e.addEventListener("blur",(function(){s(e,/\w+@\w+\.\w{2,3}/g),i(e)}))})),u.forEach((function(e){e.addEventListener("blur",(function(){i(e),s(e,/\+?[78]([-()]*\d){10}/g)}))})),window.addEventListener("input",(function(e){var t;e.target.matches(".calc-item")&&o.forEach((function(e){e.value=e.value.replace(/[^\d]/g,"")})),e.target.matches("[name=user_name]")&&(e.target.value=e.target.value.replace(/[^а-яё\-\ ]/gi,"")),e.target.matches("#form2-message")&&((t=e.target).value=t.value.replace(/[^а-яё0-9\.\,\:\-\!\? ]/gi,"")),e.target.matches("[name=user_email]")&&(e.target.value=e.target.value.replace(/[^a-z\@\_\-\.\!\~\*\']/gi,"")),e.target.matches("[name=user_phone]")&&(e.target.value=e.target.value.replace(/[^\d\(\)\-\+]/g,""))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-day"),a=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.getElementById("total"),u=function(){var t=0,u=1,i=1,s=n.options[n.selectedIndex].value,d=+a.value;r.value>1&&(u+=(r.value-1)/10),o.value&&o.value<5?i*=2:o.value&&o.value<10&&(i*=1.5),s&&d&&(t=e*s*d*u*i),c.textContent=t,l(c,0,c.textContent,800)};function l(e,t,n,o){var a=null;window.requestAnimationFrame((function r(c){a||(a=c);var u=Math.min((c-a)/o,1);e.innerHTML=Math.floor(u*(n-t)+t),u<1&&window.requestAnimationFrame(r)}))}t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&u()}))}(),t=function(e){var t=e.target;t.matches(".form-phone")&&(t.value=t.value.replace(/[^\d\(\)\-]/g,"")),"user_name"===t.name&&(t.value=t.value.replace(/[^а-яё ]/gi,"")),"user_email"===t.name&&(t.value=t.value.replace(/[^a-z\@\_\-\.\!\~\*\']/gi,"")),t.matches(".mess")&&(t.value=t.value.replace(/[^а-яё ,.]/gi,""))},(n=function(n){var o=document.getElementById(n),a=document.createElement("div");a.style.cssText="font-size: 3rem",o.addEventListener("submit",(function(t){t.preventDefault(),o.appendChild(a),a.innerHTML='\n      <img src="https://i.gifer.com/YmvJ.gif" alt="cat">\n    ';var r,c=new FormData(o);(r=Object.fromEntries(c),fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).then((function(t){if(200!==t.status)throw new Error("status network not 200");a.textContent="Все успешно отпралвено",function(t){var n;(n=document.getElementById(t).elements,function(t){if(Array.isArray(t))return e(t)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(e){return"button"!==e.tagName.toLowerCase()&&"button"!==e.type})).forEach((function(e){return e.value=""}))}(n),setTimeout((function(){a.innerHTML="",document.querySelector(".popup").style.display="none"}),4e3),o.querySelectorAll("input").forEach((function(e){e.value=e.defaultValue}))})).catch((function(e){a.textContent="Что-то пошло не так...",console.error(e),setTimeout((function(){a.innerHTML="",document.querySelector(".popup").style.display="none"}),4e3)}))})),o.addEventListener("input",t)})("form1"),n("form2"),n("form3")})();