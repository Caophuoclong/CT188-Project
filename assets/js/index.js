
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

$(document).ready(() => {
    refreshCartLength();
})
