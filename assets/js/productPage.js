$(document).ready(function () {
    const url = window.location.href
    let name = getUrlVars(url).product;
    const imgUrl = listLogoBrand[name]
    name = capitalizeFirstLetter(name);
    document.title = name;
    $("#brandName").html(`
    <p class="mx-5 h1">Điện thoại ${name}</p>
    `)

    renderProductByBrand(product, name.toLowerCase(), ".product", 100000);
})