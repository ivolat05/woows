//= components/slick.min.js
//= components/jquery.timepicker.min.js
//= components/datepicker.min.js

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

// input time
$('.time').timepicker({
    timeFormat: 'H:mm',
    interval: 1,
    minTime: "7",
    maxTime: '20',

});