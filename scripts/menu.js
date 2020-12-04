const menuToggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".main-nav");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menuToggle.innerHTML = "&#9776;"
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        menuToggle.innerHTML = "X";
    }
}
 
/* Event Listener */
menuToggle.addEventListener("click", toggleMenu, false);