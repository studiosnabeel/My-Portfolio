const burgerMenu = document.querySelector('#burgerMenu');
const crossClose = document.querySelector('#crossClose');
const menuBar = document.querySelector('#menuBar');
const menuLinks = document.querySelectorAll('.menuLinks');

burgerMenu.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

crossClose.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menuBar.classList.toggle('open-bar');
  });
});

// details popup window
