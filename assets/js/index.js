
function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
window.onscroll = function () { myFunction() };
const header = document.getElementById("nav-mobile");

const sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
function refreshCartLength() {
    const quantity = document.getElementById("quantity");
    const quantity1 = JSON.parse(localStorage.getItem("cartItem"));
    let total = 0;
    if (quantity1) {
        quantity1.forEach(element => {
            total += element.quantity;
        });
    }
    quantity.innerHTML = total;
}
const listItem = JSON.parse(localStorage.getItem("cartItem"));
function des(id) {
    listItem.forEach(item => {
        if (item.id === id) {
            if (item.quantity >= 1)
                item.quantity -= 1
            else {
                const index = listItem.indexOf(item);
                listItem.splice(index, 1);
            }

        }
    });
    localStorage.setItem("cartItem", JSON.stringify(listItem));
    refreshCartLength();
    refreshCartItem();

}
function inc(id) {
    listItem.forEach(item => {
        if (item.id === id) {
            if (item.quantity >= 1)
                item.quantity += 1
        }
    });
    localStorage.setItem("cartItem", JSON.stringify(listItem));
    refreshCartLength();
    refreshCartItem();
}
function buyNow(id) {
    addToCart(id);
    location.href = "/cart.html";
}
const errorColor = "#ffb213, #e3242b";
const successColor = "#00b09b, #96c93d"
function addToCart(id) {
    const listCartItem = JSON.parse(localStorage.getItem("cartItem"));
    if (!listCartItem) {
        const cartItem = [];
        const item = product[id - 1];
        item.quantity = 1;
        cartItem.push(product[id - 1]);
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
        refreshCartLength();
    } else {
        // check is item exists
        console.log(listCartItem);
        const itemExists = listCartItem.find(item => {
            return item.id == id;
        });
        console.log(itemExists);
        if (itemExists) {
            itemExists.quantity++;
        } else {
            const item = product[id - 1];
            item.quantity = 1;
            listCartItem.push(item);
        }
        // listCartItem.push(product[id - 1]);
        localStorage.setItem("cartItem", JSON.stringify(listCartItem));
        refreshCartLength();
    }
    Toast("Thêm vào giỏ hàng thành công!", successColor);


}
function handleFlashClick(id) {
    const e = $(`#${id}`);
    const pos = $(e).position();
    window.scrollTo(pos);
    e.hover();
}

function Toast(content, color) {
    Toastify({
        text: content,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: `linear-gradient(to right, ${color})`,
            fontSize: "2rem",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
function renderProduct(array, className, n) {
    $(className).html("");
    array.forEach((item, index) => {
        if (index >= n)
            return;
        let newPrice = Number(item.newPrice);
        let oldPrice = Number(item.price);
        let price = 0;
        if (!newPrice) {
            price = oldPrice;
        }
        $(className).append(`
		<div id="${item.id}" class="item col-xl-2 col-md-3 col-5 d-flex flex-column justify-content-center align-items-center p-0 m-3 px-2">
          <img class="w-90 h-50" src="${item.image}" alt="" />
          <p class="name">${item.name}</p>
          <div class="price row">
            ${price !== 0 ? `<p class="">${price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : `<p class="old-price text-secondary"><del>${oldPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</del></p>`}
            ${item.newPrice.length > 0 ? `<p class="new-price text-danger">${newPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : ""}
          </div>
          <div class="sales-title ">Giảm giá 10% khi mua thêm sản phẩm!!!</div>
		  <div class="btn-container">
		  <button class="btn-item btn-add-to-cart" id="atc${item.id}" onclick="addToCart(${item.id})">
		 	<i class="material-icons" >shopping_cart</i> 
		  Thêm giỏ hàng</button>
		  <button class="btn-item btn-add-to-cart" id="bn${item.id}" onclick="buyNow(${item.id})">Mua ngay</button>
		  </div>	
        </div>
		`)
    })
}
function renderProductByBrand(array, brand, className, n) {
    $(className).html("");
    array.forEach((item, index) => {
        if (index >= n)
            return;
        if (item.brand === brand) {
            let newPrice = Number(item.newPrice);
            let oldPrice = Number(item.price);
            let price = 0;
            if (!newPrice) {
                price = oldPrice;
            }
            $(className).append(`
		<div id="${item.id}" class="item col-xl-2 col-md-3 col-5 d-flex flex-column justify-content-center align-items-center p-0 m-3 px-2 gap-auto">
          <img class="w-90 h-50" src="${item.image}" alt="" />
          <p class="name">${item.name}</p>
          <div class="price row">
            ${price !== 0 ? `<p class="">${price.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : `<p class="old-price text-secondary"><del>${oldPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</del></p>`}
            ${item.newPrice.length > 0 ? `<p class="new-price text-danger">${newPrice.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>` : ""}
          </div>
          <div class="sales-title ">Giảm giá 10% khi mua thêm sản phẩm!!!</div>
		  <div class="btn-container">
		  <button class="btn-item btn-add-to-cart" id="atc${item.id}" onclick="addToCart(${item.id})">
		 	<i class="material-icons" >shopping_cart</i> 
		  Thêm giỏ hàng</button>
		  <button class="btn-item btn-add-to-cart" id="bn${item.id}" onclick="buyNow(${item.id})">Mua ngay</button>
		  </div>	
        </div>
		`)
        }

    })
}

function renderSales(array, className) {
    array.forEach(item => {
        let newPrice = Number(item.newPrice).toLocaleString("it-IT", { style: "currency", currency: "VND" });
        let oldPrice = Number(item.price).toLocaleString("it-IT", { style: "currency", currency: "VND" });
        $(className).append(`
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
}
function getUrlVars() {
    let vars = [], hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function findItemsByName(string) {
    const items = [];
    product.forEach(item => {
        if (item.name.toLocaleLowerCase().search(string) > -1)
            items.push(item);
    })
    return items;
}
$(document).ready(() => {
    refreshCartLength();
})
