const toggleMenuButton = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function toggleMenu() {
  if (mobileMenu.getAttribute("data-menu-state") === "closed") {
    mobileMenu.setAttribute("data-menu-state", "open");
  } else {
    mobileMenu.setAttribute("data-menu-state", "closed");
  }
}
