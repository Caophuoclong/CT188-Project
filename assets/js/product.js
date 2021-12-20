const product = [
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
        newPrice: "",
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

const flashSales = [
]

product.forEach(item => {
    const salePrice = Number(item.newPrice);
    const price = Number(item.price);
    if ((salePrice <= (price * 80) / 100) && (salePrice > 0 && salePrice !== undefined && salePrice !== null)) {
        flashSales.push(item);
    }
})

