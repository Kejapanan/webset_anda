//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika Hamburger di klik
// @ts-ignore
document.querySelector("#Hamburger").onclick = () => {
  // @ts-ignore
  navbarNav.classList.toggle("active");
};
// klik di luar slide bar
const Hamburger = document.querySelector("#Hamburger");
document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
