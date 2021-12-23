
let index = 10;
function readMore() {
	index += 5;
	if (index >= product.length) {
		$("#readmore").removeClass("d-block");
		$("#readmore").hide();

	}
	renderProduct(product, ".product", index);
}
$(document).ready(function () {
	$(".slide-container").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slideToShow: 3,
		prevArrow: '<button class="slick-prev slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_back_ios</i></button>',
		nextArrow: '<button class="slick-next slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_forward_ios</i></button>',
		dots: true,

	});

	renderProduct(product, ".product", index);
	renderSales(flashSales, ".flash-sales");
	$(".flash-sales").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 4,
		slidesToScroll: 4,
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
					slidesToScroll: 1
				}
			},

		],
		prevArrow: '<button class="slick-prev slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_back_ios</i></button>',
		nextArrow: '<button class="slick-next slick-arrow d-flex justify-content-center btn-outline-light"><i class="material-icons" >arrow_forward_ios</i></button>',

	})
})
