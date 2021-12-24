$(document).ready(function () {
    const url = window.location.href;
    const name = getUrlVars(url).search_inp;
    const listItem = findItemsByName(name);

    $("h2").text(`
        Tìm thấy ${listItem.length} với từ khoá "${name}"
    `);
    renderProduct(listItem, ".product");
})