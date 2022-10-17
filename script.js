let menuBar = document.getElementById("menuBar");
let burgerMenu = document.getElementById("burgerMenu");

burgerMenu.onclick = function () {
  menuBar.classList.toggle("open-bar");
};
