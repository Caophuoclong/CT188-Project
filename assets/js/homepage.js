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
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev slick-arrow"><i class="material-icons" >arrow_back_ios</i></button>',
		nextArrow: '<button class="slick-next slick-arrow"><i class="material-icons" >arrow_forward_ios</i></button>',
	})
	const arrayImageProduct = ["https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
		"https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		"https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80",
		"https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
		"https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
		"https://images.unsplash.com/photo-1631871633283-31be5e55a29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1598522017610-edbea54edd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80",
		"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		"https://images.unsplash.com/photo-1627405044547-624dae760f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
	];
	arrayImageProduct.forEach(item => {
		$(".product").append(`
		<div class="item">
          <img class="image" src="${item}" alt="" />
          <p class="name">Apple Iphone 11 64GB - VNA - Chinh hang</p>
          <div class="price">
            <p class="old-price">7,900,000</p>
            <p class="new-price">6,500,000</p>
          </div>
          <div class="sales-title">Preduce 10% when buy more items</div>
        </div>
		`)
	})
})