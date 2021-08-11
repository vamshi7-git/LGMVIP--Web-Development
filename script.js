var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navigationbar");

menu.addEventListener('click', () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});
