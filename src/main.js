const burgerButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-container');
const closeBtn = document.querySelector('.mobile-menu-btn');

burgerButton.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


function openMenu() {
  menu.classList.add('is-open');
}

function closeMenu() {
  menu.classList.remove('is-open');
}


