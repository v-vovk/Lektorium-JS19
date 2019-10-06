'use strict'

// toggling for show main menu
const closeBtn = document.querySelector('.fa-times');
const mainMenuBtn = document.querySelector('.hero-contact-menu');
const mainMenu = document.querySelector('.hero-contact-nav');

function toggleMenu() {
  mainMenu.classList.toggle('active');
}

mainMenuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
