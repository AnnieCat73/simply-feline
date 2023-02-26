//NAVIGATION FOR TABLET AND MOBILE

const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav-mobile");

//Attach eventlisteners and toggle navigation-open class
openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});



