function toggleMenu() {
  let siteNav = document.getElementById("site-nav");
  siteNav.classList.toggle("nav-open");
}

const isVisible = "is-visible";

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
