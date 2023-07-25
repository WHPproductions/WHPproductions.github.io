/* Functions for menu on mobile*/

const hamburger_menu = document.querySelector(".menu");
let menu_list = document.getElementsByName("menu_list")[0];

hamburger_menu.addEventListener('click', function () {
    menu_list.classList.toggle("mobile_invisible");
})