
(function ($) {

    /* 1 preloader*/

    $(window).on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        })
    });


})(jQuery);