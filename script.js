const menuIcon = document.querySelector(".fa-bars");
const hiddenMenu = document.querySelector(".nav__nav_bar__links");

const menu_click = function () {
  console.log("click");
  hiddenMenu.classList.toggle("active");
};

menuIcon.addEventListener("click", menu_click);
