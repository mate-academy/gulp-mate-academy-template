'use strict';

const burger = document.querySelector('.header__toggle--toggler');
const closeMenu = document.querySelector('.nav__toggle--close');
const menu = document.querySelector('.nav');

burger.onclick = classToggle;

function classToggle() {
  menu.classList.toggle('nav--is-active');
};

menu.addEventListener('click', function(e) {
  if (e.target === closeMenu
    || e.target.classList.contains('nav__link')) {
    classToggle();
  }
});
