var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navigationbar");

menu.addEventListener('click', () => {
    navbar.classList.toggle("active");
});
