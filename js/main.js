const iconMenu = document.getElementById('icon-menu');
const mainNav = document.getElementById('main-nav');

iconMenu.addEventListener('click', () => {
  mainNav.classList.toggle('show-nav');
  iconMenu.classList.toggle('toggle');
});