const hamburger = document.querySelector('.hamburger');
const home = document.querySelector('.home');

function menuOn() {
    home.classList.toggle('menu-on');
}

hamburger.addEventListener('click', menuOn);