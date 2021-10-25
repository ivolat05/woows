//= components/slick.min.js
//= components/jquery.timepicker.min.js
//= components/datepicker.min.js
//= components/jquery.magnific-popup.js

// slaiders
$('.slaider__one').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
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
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
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