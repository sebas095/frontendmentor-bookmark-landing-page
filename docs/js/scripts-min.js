"use strict";var topBar=document.getElementById("top-bar"),mainNav=document.getElementById("main-nav"),iconMenu=document.getElementById("icon-menu");iconMenu.addEventListener("click",(function(){topBar.classList.contains("top-bar--show")?(iconMenu.src="assets/icons/icon-hamburger.svg",mainNav.classList.remove("main-nav--show"),topBar.classList.remove("top-bar--show")):(iconMenu.src="assets/icons/icon-close.svg",mainNav.classList.add("main-nav--show"),topBar.classList.add("top-bar--show"))}));