$( () => {
    $(document).ready(function () {
        var hamburger = $("#burger_menu");
        hamburger.click(function () {
        hamburger.toggleClass("active");
        return false;
        });
    });

    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        windowTop > 80 ? $('header').addClass('scrolling') : $('header').removeClass('scrolling');
        // windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
    });
}); 