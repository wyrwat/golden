const hamburger = document.querySelector('.burger-wrapper');
const home = document.querySelector('.home');
const iconBurger = document.querySelector('.hamburger');
const iconX = document.querySelector('.close');

function menuOn() {
    home.classList.toggle('menu-on');
    iconBurger.classList.toggle('show');
    iconX.classList.toggle('show');
}

hamburger.addEventListener('click', menuOn);