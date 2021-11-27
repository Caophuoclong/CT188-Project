$(document).ready(function () {
	$(".slide-container").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slideToShow: 3,
		prevArrow: '<button class="slick-prev slick-arrow"><i class="material-icons" >arrow_back_ios</i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="material-icons" >arrow_forward_ios</i></button>',
		dots: true,

	});
	$(".flash-sales").slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
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
		prevArrow: '<button class="slick-prev slick-arrow"><i class="material-icons" >arrow_back_ios</i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="material-icons" >arrow_forward_ios</i></button>',

	})


	arrayItem.forEach(item => {
		let newPrice = Number(item.newPrice);
		let oldPrice = Number(item.price);

		console.log(newPrice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }))
		$(".product").append(`
		<div class="item">
          <img class="image" src="${item.image}" alt="" />
          <p class="name">${item.name}</p>
          <div class="price">
            <p class="old-price">${oldPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
            <p class="new-price">${newPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
          </div>
          <div class="sales-title">Preduce 10% when buy more items</div>
		  <div class="btn-container">
		  <button class="btn-item btn-add-to-cart" id="atc${item.id}" onlick="()=>{
			  console.log('click')
		  }">
		 	<i class="material-icons" >shopping_cart</i> 
		  Add to cart</button>
		  <button class="btn-item btn-add-to-cart" id="bn${item.id}" onlick="byNow()">Buy now</button>
		  </div>	
        </div>
		`)
	})
	$("button").on("click", (event) => {
		const id = event.target.id;
		const buyNow = id.split("bn");
		const addToCart = id.split("atc");
		if (buyNow) {

		}
		const listCartItem = JSON.parse(localStorage.getItem("cartItem"));
		if (addToCart) {
			if (!listCartItem) {
				const cartItem = [];
				const item = arrayItem[addToCart[1] - 1];
				item.quantity = 1;
				cartItem.push(arrayItem[addToCart[1] - 1]);
				localStorage.setItem("cartItem", JSON.stringify(cartItem));
				refreshCartLength();
			} else {
				// check is item exists
				console.log(listCartItem);
				const itemExists = listCartItem.find(item => {
					return item.id == addToCart[1];
				});
				console.log(itemExists);
				if (itemExists) {
					itemExists.quantity++;
				} else {
					const item = arrayItem[addToCart[1] - 1];
					item.quantity = 1;
					listCartItem.push(item);
				}
				// listCartItem.push(arrayItem[addToCart[1] - 1]);
				localStorage.setItem("cartItem", JSON.stringify(listCartItem));
				refreshCartLength();
			}
		}
	})
})