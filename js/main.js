$(function () {

    $('.about__slider').slick({
        arrows: true,
        nextArrow: '<button class="slider-btn slider-next"><i class="fa fa-angle-right"></i></button>',
        prevArrow: '<button class="slider-btn slider-prev"><i class="fa fa-angle-left"></i></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.feedback__slider').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    $('.mobile-menu').on('click', function () {
        $('.header__menu').fadeToggle();
        $(this).toggleClass('change');
    });

    mixitup('.portfolio__inner');

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("hamburger").classList.remove("animation-hide");
    } else {
        document.getElementById("hamburger").classList.add("animation-hide");
    }
    prevScrollpos = currentScrollPos;
};