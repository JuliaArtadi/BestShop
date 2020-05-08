
// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("show");
    // Do something else, like open/close menu
});
