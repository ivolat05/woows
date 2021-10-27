//= components/slick.min.js
//= components/jquery.timepicker.min.js
//= components/datepicker.min.js
//= components/jquery.magnific-popup.js
//= components/jquery.mCustomScrollbar.concat.min.js

// slaiders
$('.slaider__one').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slaider__two').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.status__page').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// input time
$('.time').timepicker({
    timeFormat: 'H:mm',
    interval: 1,
    minTime: "7",
    maxTime: '20',

});

// gallaty img
$('.catalog__box-img').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
});

//burger

$('.menu__burger').click(function () {
    $('.menu__burger').toggleClass('burger__active'),
        $('.mob__menu').toggleClass('mob__menu-active'),
        $('body').toggleClass('look');
});


//scroll bar


(function ($) {
    let params = {};
    // Инициализируем при загрузки DOM
    initScrollbar($('.choice__wrapp-inner'), params);

    // Инициализируем/разгрушаем по изменению окна браузера
    $(window).on('resize', function () {
        initScrollbar($('.choice__wrapp-inner'), params);
    });

    function initScrollbar($selector, options) {
        if ($(window).width() > 970) {
            if ($selector.data('mCS')) $selector.mCustomScrollbar('destroy');
        } else {
            $selector.mCustomScrollbar(options || {});
        }
    }
})(jQuery);