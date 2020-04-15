const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.home');
const welcome = document.querySelector('.welcome');

function menuOn() {
    home.classList.toggle('menu-on');
    welcome.classList.toggle('welcome-show');
}

hamburger.addEventListener('click', menuOn);