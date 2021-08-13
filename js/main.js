function toggleMenu() {
  let siteNav = document.getElementById("site-nav");
  siteNav.classList.toggle("nav_open");
}

ScrollReveal().reveal(".home");
ScrollReveal().reveal(".scroll", { delay: 500, reset: true });
