$(document).ready(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
});

const menuItem = document.querySelectorAll(".menu__item");

const subMenu = document.querySelector(".header__submenu");

menuItem.forEach(function (menu) {
  menu.addEventListener("click", function () {
    subMenu.classList.toggler("js-submenu-show");
  });
});
