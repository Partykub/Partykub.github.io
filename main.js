const menuButton = document.getElementById('menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuButton.addEventListener("click", () => {
    if (navMenu.style.display === "none") {
        navMenu.style.display = "flex";
    } 
    else {
      navMenu.style.display = "none";
    }
  });