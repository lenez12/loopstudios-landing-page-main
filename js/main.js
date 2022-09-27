const hamburgerMenu = document.getElementById("hamburger-menu");
const closeIcon = document.getElementById("close-icon");
const navbarMenu = document.getElementById("menu-content");

hamburgerMenu.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});
closeIcon.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
});
