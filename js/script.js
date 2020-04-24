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

$('.jumbotron .home-wrapper nav ul li a').on('click', function () {
    console.log(this);
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
        $('.jumbotron .home-wrapper .nav').addClass('nav-active');
    } else $('.jumbotron .home-wrapper .nav').removeClass('nav-active');
})