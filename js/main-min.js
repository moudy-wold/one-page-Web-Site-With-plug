let iconSideBar=document.querySelector(".toggle-sidebar"),sidebar=document.querySelector(".sidebar"),contentArea=document.querySelector(".content-area"),openLinks=document.querySelectorAll(".toggle-down"),openFullScreen=document.querySelector(".toogle-fullscreen"),opitionSetIcon=document.querySelector(".toggle-set");iconSideBar.onclick=function(){sidebar.classList.toggle("activeside"),contentArea.classList.toggle("activecontent")},openLinks.forEach(e=>{e.onclick=function(){this.parentElement.classList.toggle("open")}}),openFullScreen.onclick=function(){this.classList.contains("open")?openFullscreen():closeFullscreen(),this.classList.toggle("open")};var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}opitionSetIcon.onclick=function(){this.classList.toggle("fa-spin"),this.parentElement.classList.toggle("hide")};let liColor=document.querySelectorAll(".color-opition ul li"),themeArr=[];liColor.forEach(e=>{themeArr.push(e.dataset.theme)}),liColor[0].classList.add("active"),liColor.forEach(e=>{e.onclick=function(){document.body.classList.remove(...themeArr),document.body.classList.add(this.dataset.theme);for(let e=0;e<liColor.length;e++)liColor[e].classList.remove("active");this.classList.add("active")}}),fonts=document.querySelector(".font-opition select"),fontArr=["Libre","BhuTuka","League","Pacifico"],fonts.onclick=function(){for(let e=0;e<fontArr.length;e++)document.body.classList.remove(...fontArr);document.body.classList.add(this.value),console.log(this.value)};