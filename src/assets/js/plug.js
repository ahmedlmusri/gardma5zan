$(document).ready(function () {

    var winheight = $(window).height();
    var widheight = $(window).width();


        $(".login").height(winheight);
        $(".login").width(widheight);


    $(".dashboard .menu i").click(function () {
        $(".dashboard").toggleClass("dashwidth",5000);
        $("nav").toggleClass("wdnav",5000);

    });

    $(".username").click(function () {
        $(".sings").slideToggle(1000);
    });

    $(".list_staff").click(function () {
        $(this).toggleClass("staff_active");
        $(".staff").slideToggle(1000);
    });

    $(".product_form .fa-close").click(function () {
        $(".success_add").fadeOut();
    });


});