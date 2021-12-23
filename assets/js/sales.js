$(document).ready(function () {

    console.log(_10Sales);
    console.log(_5Sales);
    renderSales(flashSales, ".flash-sales");
    $(".flash-sales").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {

            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },

        ],
        prevArrow: '<button class="slick-prev slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_back_ios</i></button>',
        nextArrow: '<button class="slick-next slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_forward_ios</i></button>',

    })
    renderProduct(_10Sales, ".10-sales", 1000000);
    renderProduct(_5Sales, ".5-sales", 1000000)
})