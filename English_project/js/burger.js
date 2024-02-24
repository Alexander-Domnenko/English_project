document.addEventListener('DOMContentLoaded', function () {
    var burger = document.querySelector('.header__burger');
    var menu = document.querySelector('.header__menu');
    var body = document.querySelector('body');
    var links = document.querySelectorAll('.header__link'); 

    burger.addEventListener('click', function (event) {
        burger.classList.toggle('header__burger--active');
        menu.classList.toggle('header__menu--active');
        body.classList.toggle('lock');
    });


    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.stopPropagation(); 
            burger.classList.remove('header__burger--active');
            menu.classList.remove('header__menu--active');
            body.classList.remove('lock');
        });
    });
});