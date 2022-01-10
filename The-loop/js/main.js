$(document).ready(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
});

const menuItem = document.querySelector(".menu__item");

const subMenu = document.querySelector(".header__submenu");

menuItem.addEventListener("click", function () {
  subMenu.classList.toggler("js-submenu-show");
});
