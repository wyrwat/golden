const hamburger = document.querySelector('.burger-wrapper');
const home = document.querySelector('.home');
const welcome = document.querySelector('.welcome');
const iconBurger = document.querySelector('.hamburger');
const iconX = document.querySelector('.close');

function menuOn() {
    home.classList.toggle('menu-on');
    welcome.classList.toggle('welcome-show');
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
}

hamburger.addEventListener('click', menuOn);