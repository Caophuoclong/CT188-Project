const product = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: "33990000",
    brand: "apple",
    newPrice: "32990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-sierra-blue-600x600.jpg",
  },
  {
    id: 2,
    name: "iPhone 12 Pro Max",
    price: "32990000",
    brand: "apple",
    newPrice: "31490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
  },
  {
    id: 3,
    name: "iPhone 13 Pro",
    price: "30990000",
    brand: "apple",
    newPrice: "29990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/230521/iphone-13-pro-sierra-blue-600x600.jpg",
  },
  {
    id: 4,
    name: "iPhone 12 Pro",
    price: "30490000",
    brand: "apple",
    newPrice: "28490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
  },
  {
    id: 5,
    name: "iPhone 13",
    price: "24990000",
    brand: "apple",
    newPrice: "23990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg",
  },
  {
    id: 6,
    name: "iPhone 12",
    price: "22490000",
    brand: "apple",
    newPrice: "20490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-trang-13-600x600.jpg",
  },
  {
    id: 7,
    name: "iPhone 13 mini",
    price: "21990000",
    brand: "apple",
    newPrice: "20490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-blue-2-600x600.jpg",
  },
  {
    id: 8,
    name: "iPhone 12 mini",
    price: "18990000",
    brand: "apple",
    newPrice: "15490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/225380/iphone-12-mini-mau-tim-3-600x600.jpg",
  },
  {
    id: 9,
    name: "iPhone 11",
    price: "16990000",
    brand: "apple",
    newPrice: "15490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
  },
  {
    id: 10,
    name: "iPhone XR",
    price: "14990000",
    brand: "apple",
    newPrice: "11990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/190325/iphone-xr-hopmoi-den-600x600-2-600x600.jpg",
  },
  {
    id: 11,
    name: "Oppo A16K",
    price: "3690000",
    brand: "oppo",
    newPrice: "3290000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/249945/oppo-a16k-thumb1-600x600-1-600x600.jpg",
  },
  {
    id: 12,
    name: "Oppo A95",
    price: "6990000",
    brand: "oppo",
    newPrice: "5990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251703/oppo-a95-4g-bac-2-600x600.jpg",
  },
  {
    id: 13,
    name: "Realme C21Y",
    price: "4290000",
    brand: "realme",
    newPrice: "4000000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/241265/realme-c21y-black-600x600.jpg",
  },
  {
    id: 14,
    name: "Samsung Galaxy Z Fold3 5G",
    price: "44990000",
    brand: "samsung",
    newPrice: "42990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-green-1-600x600.jpg",
  },
  {
    id: 15,
    name: "Vivo V23e",
    price: "8490000",
    brand: "vivo",
    newPrice: "7290000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/245607/Vivo-V23e-1-2-600x600.jpg",
  },
  {
    id: 16,
    name: "Vsmart Aris",
    price: "5990000",
    brand: "vsmart",
    newPrice: "4950000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/228530/vsmart-aris-xanh-la-new-600x600-600x600.jpg",
  },
  {
    id: 17,
    name: "Xiaomi 11T 5G",
    price: "11990000",
    brand: "xiaomi",
    newPrice: "10590000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/251216/xiaomi-11t-grey-1-600x600.jpg",
  },
  {
    id: 18,
    name: "Xiaomi 11 Lite 5G",
    price: "9490000",
    brand: "xiaomi",
    newPrice: "9090000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/256053/xiaomi-11-lite-5g-ne-trang-swarovski-1-660x600.jpg",
  },
  {
    id: 19,
    name: "Samsung Galaxy A52",
    price: "9290000",
    brand: "samsung",
    newPrice: "8290000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/228967/samsung-galaxy-a52-8gb-256gb-thumb-violet-600x600-600x600.jpg",
  },
  {
    id: 20,
    name: "OPPO Reno6 Z 5G",
    price: "9490000",
    brand: "oppo",
    newPrice: "8690000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg",
  },
  {
    id: 21,
    name: "OPPO Find X3 Pro 5G",
    price: "19490000",
    brand: "oppo",
    newPrice: "17290000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-blue-001-600x600.jpg",
  },
  {
    id: 22,
    name: "Samsung Galaxy A72",
    price: "11490000",
    brand: "samsung",
    newPrice: "10690000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/226101/samsung-galaxy-a72-thumb-balck-600x600-600x600.jpg",
  },
  {
    id: 23,
    name: "Samsung Galaxy M51",
    price: "9490000",
    brand: "samsung",
    newPrice: "7890000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
  },
  {
    id: 24,
    name: "Realme 8 Pro",
    price: "8690000",
    brand: "realme",
    newPrice: "8490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/241017/realme-8-pro-vang-600x600.jpg",
  },
  {
    id: 25,
    name: "Xiaomi Redmi Note 10 Pro",
    price: "7490000",
    brand: "xiaomi",
    newPrice: "6990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg",
  },
  {
    id: 26,
    name: "Vivo Y20s",
    price: "4990000",
    brand: "vivo",
    newPrice: "4790000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/228376/vivo-y20s-xanh-1-600x600.jpg",
  },
  {
    id: 27,
    name: "OPPO A93",
    price: "6190000",
    brand: "oppo",
    newPrice: "5190000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-14-600x600.jpg",
  },
  {
    id: 28,
    name: "OPPO A74 5G",
    price: "7590000",
    brand: "oppo",
    newPrice: "7190000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/236559/oppo-a74-5g-silver-01-600x600.jpg",
  },
  {
    id: 29,
    name: "Samsung Galaxy S20 FE",
    price: "13490000",
    brand: "samsung",
    newPrice: "11990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/224859/samsung-galaxy-s20-fan-edition-090320-040338-600x600.jpg",
  },
  {
    id: 30,
    name: "Vivo X70 Pro 5G",
    price: "18890000",
    brand: "vivo",
    newPrice: "17990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/248099/vivo-x70-pro-xanh-hong-1-600x600.jpg",
  },
  {
    id: 31,
    name: "Samsung Galaxy Z Fold2 5G",
    price: "50000000",
    brand: "samsung",
    newPrice: "35000000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-den-600x600.jpg",
  },
  {
    id: 32,
    name: "Samsung Galaxy Z Flip3 5G",
    price: "26990000",
    brand: "samsung",
    newPrice: "23990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-violet-1-600x600.jpg",
  },
  {
    id: 33,
    name: "Samsung Galaxy S21 Ultra 5G",
    price: "30990000",
    brand: "samsung",
    newPrice: "27990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg",
  },
  {
    id: 34,
    name: "Samsung Galaxy Z Flip3 5G",
    price: "24990000",
    brand: "samsung",
    newPrice: "23990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg",
  },
  {
    id: 35,
    name: "Samsung Galaxy Note 20",
    price: "23990000",
    brand: "samsung",
    newPrice: "15990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/218355/samsung-galaxy-note-20-062220-122200-fix-600x600.jpg",
  },
  {
    id: 36,
    name: "Samsung Galaxy A22",
    price: "5890000",
    brand: "samsung",
    newPrice: "5490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-mint-1-600x600.jpg",
  },
  {
    id: 37,
    name: "Xiaomi Mi 10T Pro 5G",
    price: "13990000",
    brand: "xiaomi",
    newPrice: "10490000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/262566/xiaomi-11t-pro-5g-8gb-thumb-600x600.jpeg",
  },
  {
    id: 38,
    name: "Xiaomi Redmi 10 ",
    price: "4690000",
    brand: "xiaomi",
    newPrice: "4090000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/246200/redmi-10-blue-600x600.jpg",
  },
  {
    id: 39,
    name: "Realme 8 Pro",
    price: "8690000",
    brand: "realme",
    newPrice: "8290000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg",
  },
  {
    id: 40,
    name: "Realme 8 5G",
    price: "7990000",
    brand: "realme",
    newPrice: "54990000",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/236588/realme-8-5g-blue-1-600x600.jpg",
  },
];

const flashSales = [];

product.forEach((item) => {
  const salePrice = Number(item.newPrice);
  const price = Number(item.price);
  if (
    salePrice <= (price * 85) / 100 &&
    salePrice > 0 &&
    salePrice !== undefined &&
    salePrice !== null
  ) {
    flashSales.push(item);
  }
});
