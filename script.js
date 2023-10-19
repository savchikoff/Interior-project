"use strict";

let navBurger = document.querySelector('.navigation__burger'), navItems = document.querySelector('.navigation__items'), nav = document.querySelector('.navigation');

navBurger.addEventListener('click', () => {
    console.log('hello');
    navBurger.classList.toggle("active");
    navItems.classList.toggle("active");
    if (navItems.classList.contains("active")) {
        nav.style.marginBottom = "200px";
    } else {
        nav.style.marginBottom = "100px";
    }
});