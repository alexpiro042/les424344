$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })
    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 6,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonial__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonial__dots'),
        waitForAnimate: false,
    })
    $('.testimonial__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__prev').slick('slickPrev')
    })
    $('.testimonial__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonial__next').slick('slickNext')
    })

    // $('program__acc-link').on('click' , function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('program__acc-link--active')
    //     $(this).children('.program__acc-text').slideToggle()

    // })
    $('program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
        } else {
            $('.program__acc-link').removeClass('.program__acc-link--active')
            $('program__acc-text').slideUp()
            $(this).addClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideDown()
        }
    })

    let map;

    function initMap() {
        map = new Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }

    initMap();
})


/* if ($('.program__acc-link').hasClass('program__acc-link--active')) {
            $('.program__acc-link').removeClass('program__acc-link--active')*/