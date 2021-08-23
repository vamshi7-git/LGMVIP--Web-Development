var menu = document.querySelector("#menu-bar");
var navigationbar = document.querySelector(".navigationbar");

menu.addEventListener('click', () => {
    navigationbar.classList.toggle("active");
});