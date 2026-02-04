const menuClose = document.querySelector("#menu-close-button");
const menuOpen = document.querySelector("#menu-open-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpen.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click", () => menuOpen.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpen.click());
});
