let burgerMenu = document.querySelector('#burgerMenu');
let crossClose = document.querySelector('#crossClose');
let menuBar = document.querySelector('#menuBar');
let menuLinks = document.querySelectorAll('.menuLinks');

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
