$("document").ready(function(){
    $(".post-slider").slick({
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: ".slide-nav"
    });
    $(".slide-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        dots: true,
        asNavFor: ".post-slider",
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});