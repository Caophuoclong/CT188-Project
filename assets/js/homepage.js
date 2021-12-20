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
	product.forEach(item => {
		let newPrice = Number(item.newPrice);
		let oldPrice = Number(item.price);
		let price = 0;
		if (!newPrice) {
			price = oldPrice;
		}
		$(".product").append(`
		<div id="${item.id}" class="item col-xl-2 col-md-3 col-5 d-flex flex-column justify-content-center align-items-center p-0 m-3 px-2">
          <img class="w-90 h-50" src="${item.image}" alt="" />
          <p class="name">${item.name}</p>
          <div class="price row">
            ${price !== 0 ? `<p class="">${price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : `<p class="old-price text-secondary"><del>${oldPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</del></p>`}
            ${item.newPrice.length > 0 ? `<p class="new-price text-danger">${newPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : ""}
          </div>
          <div class="sales-title ">Sales 10% when buy more items</div>
		  <div class="btn-container">
		  <button class="btn-item btn-add-to-cart" id="atc${item.id}" onclick="addToCart(${item.id})">
		 	<i class="material-icons" >shopping_cart</i> 
		  Add to cart</button>
		  <button class="btn-item btn-add-to-cart" id="bn${item.id}" onclick="buyNow(${item.id})">Buy now</button>
		  </div>	
        </div>
		`)
	})
	flashSales.forEach(item => {
		let newPrice = Number(item.newPrice).toLocaleString("it-IT", { style: "currency", currency: "VND" });
		let oldPrice = Number(item.price).toLocaleString("it-IT", { style: "currency", currency: "VND" });
		$(".flash-sales").append(`
		<div onclick="handleFlashClick(${item.id})" style="height:40rem">
		<div class="flash-sales-items d-flex flex-column justify-content-center align-items-center">
		<img
		  src="${item.image}"
		  alt=""
		/>
		<div class="title text-center">${item.name}</div>
		<div class="price row">
		<p class="old-price text-secondary h-6"><del>${oldPrice}</del></p>
		<p class="new-price text-danger h-6">${newPrice}</p>
		</div>
	  </div>
		</div>
		`)

	})
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


})
