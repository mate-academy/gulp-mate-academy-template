'use strict';

const burger = document.querySelector('.nav__mobile-button');
const closeMenu = document.querySelector('.nav__mobile-close');
const menu = document.querySelector('.nav');

burger.onclick = classToggle;

function classToggle() {
  menu.classList.toggle('nav--is-active');
};

menu.addEventListener('click', function(e) {
  if (e.target === closeMenu) {
    classToggle();
  }
});
