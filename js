// Mobile menu toggle
const menu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menu.classList.toggle('is-active');
});
