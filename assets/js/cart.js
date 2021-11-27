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
    let subtotal = 0;
    const arrayItem = JSON.parse(localStorage.getItem("cartItem"));
    if (arrayItem) {
        arrayItem.forEach((item, index) => {
            if (item) {
                const html = `
                <li class="product-items">
                <img
                src="${item.image}"
                alt=""
              />
                <div class="info-product">
                <span>${item.name}</span>
                <span class="sub-title">Apple Iphone 11 Pro Max 256GB</span>
                <div>
                <div type="button" class="value-button">-</div>
                <input
                    type="number"
                    id="number"
                    value="${item.quantity ? item.quantity : 1}"
                    readonly="readonly"
                />
                <div type="button" class="value-button">+</div>
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






})