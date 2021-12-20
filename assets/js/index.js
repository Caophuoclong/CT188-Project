const arrayItem = [
    {
        id: 1,
        name: "Apple Iphone 11 64GB",
        price: "15500000",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=formt&ft=crop&w=765&q=80",
        newPrice: "8000000",
    },
    {
        id: 2,
        name: "Apple Iphone 11 Pro Max 256GB",
        price: "25500000",
        newPrice: "10000000",
        image: "https://images.unsplash.com/photo-1558885544-2defc62e2e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 3,
        name: "Apple Iphone 12 Pro Max 256GB",
        price: "27700000",
        newPrice: "12000000",
        image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 4,
        name: "Apple Iphone 13 Pro Max 256GB",
        price: "29700000",
        newPrice: "13000000",
        image: "https://images.unsplash.com/photo-1557189750-56d1be9e963a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80",
    },
    {
        id: 5,
        name: "Apple Iphone 13 Pro Max 512GB",
        price: "31700000",
        newPrice: "15000000",
        image: "https://images.unsplash.com/photo-1591054333829-3a3ce5d57fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
        id: 6,
        name: "Xiaomi Redmi",
        price: "12000000",
        newPrice: "9000000",
        image: "https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    },
    {
        id: 7,
        name: "Realme 123456",
        price: "15500000",
        newPrice: "8000000",
        image: "https://images.unsplash.com/photo-1631871633283-31be5e55a29a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 8,
        name: "Google pixel",
        price: "15500000",
        newPrice: "80000000",
        image: "https://images.unsplash.com/photo-1598522017610-edbea54edd64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80",
    },
    {
        id: 9,
        name: "Unknow",
        price: "15500000",
        newPrice: "90000000",
        image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 10,
        name: "Samsung Galaxy",
        price: "15500000",
        newPrice: "90000000",
        image: "https://images.unsplash.com/photo-1627405044547-624dae760f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80",
    }
]
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
function addToCart(id) {
    console.log(id);
    const listCartItem = JSON.parse(localStorage.getItem("cartItem"));
    if (!listCartItem) {
        const cartItem = [];
        const item = arrayItem[id - 1];
        item.quantity = 1;
        cartItem.push(arrayItem[id - 1]);
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
            const item = arrayItem[id - 1];
            item.quantity = 1;
            listCartItem.push(item);
        }
        // listCartItem.push(arrayItem[id - 1]);
        localStorage.setItem("cartItem", JSON.stringify(listCartItem));
        refreshCartLength();
    }

}
$(document).ready(() => {
    refreshCartLength();
})
