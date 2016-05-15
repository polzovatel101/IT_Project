$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    }
);

$(function() {
    var $inform = $('.inform__blocks');
    $inform.on('mouseenter mouseleave', function () {
        $('.headInform').eq($(this).index()).fadeToggle(100);
        $('.hide').eq($(this).index()).fadeToggle(100);
    });

});
 /**
 * Created by Илья Яновой on 16.04.2016.
 */
