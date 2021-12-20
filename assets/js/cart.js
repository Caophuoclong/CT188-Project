function refreshCartItem() {
    $(".product").html("");
    let subtotal = 0;
    const product = JSON.parse(localStorage.getItem("cartItem"));
    if (product) {
        product.forEach((item, index) => {
            if (item && item.quantity > 0) {
                const html = `
                <li class="product-items" name="${item.id}">
                <img
                src="${item.image}"
                alt=""
              />
                <div class="info-product">
                <span>${item.name}</span>
                <span class="sub-title">Apple Iphone 11 Pro Max 256GB</span>
                <div>
                <div type="button" class="value-button" onclick="des(${item.id})"> - </div>
                <input
                    type="number"
                    id="number"
                    value="${item.quantity ? item.quantity : 1}"
                    readonly="readonly"
                />
                <div type="button" class="value-button" onclick="inc(${item.id})">+</div>
                </div>
                <p class="price">${Number(item.newPrice).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</p>
            </div></li>
                `;
                $(".product").append(html);
                subtotal += item.newPrice * item.quantity;
            }
        })
        let tax = Number(subtotal) * 0.1;
        let total = subtotal + tax;
        subtotal = subtotal.toLocaleString("it-IT", { style: "currency", currency: "VND" });
        tax = tax.toLocaleString("it-IT", { style: "currency", currency: "VND" });
        total = total.toLocaleString("it-IT", { style: "currency", currency: "VND" });
        $("#sub-total").html(subtotal);
        $("#tax").html(tax);
        $("#total").html(total);
    } else {
        const html = `<div class="info-product">
        <span>Không có sản phầm để hiển thị</span>
        </div>`
        $(".product").append(html);
    }
}
$(document).ready(function () {
    // Add event on radio checked
    $('input[type="radio"]').on('change', function () {
        const id = $(this).attr('id');
        if (id === "atstore") {
            $("#addressDetail").hide();
        } else {
            $("#addressDetail").show();
        }
        console.log(id);
    })
    refreshCartItem();
    $("input[name='voucher']").on("change", (event) => {
        const btn = $(".btn-voucher")[0];
        const value = event.target.value;
        if (value)
            $(btn).css("display", "inline-block");
        else
            $(btn).css("display", "none");
    })

    $("#form").on("submit", (event) => {
        event.preventDefault();
        alert("Order successfully!");
        localStorage.removeItem("cartItem");
        location.reload();
    });



})
