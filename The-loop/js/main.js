$(document).ready(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
  });
});

const menuToggler = document.querySelector(".header__menu-toggler");

const menu = document.querySelector(".header__nav");

menuToggler.addEventListener("click", function () {
  menu.classList.toggle("js-menu-show");
});

const linkToggler = document.querySelector(".header__menu-toggler");

const links = document.querySelector(".header__links");

linkToggler.addEventListener("click", function () {
  links.classList.toggle("js-link-show");
});
