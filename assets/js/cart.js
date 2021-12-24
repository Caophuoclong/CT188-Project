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
        const email = event.currentTarget.email.value;
        const fullname = event.currentTarget.fullname.value;
        const phonenumber = event.currentTarget.numberphone.value;
        const delivery = event.currentTarget.delivery.value;
        const addressProvince = event.currentTarget.province.value;
        const addressTown = event.currentTarget.town.value;
        const addressDetail = event.currentTarget.addressDetail.value;
        const note = event.currentTarget.note.value;
        console.log(email, fullname, phonenumber, addressProvince, addressTown, addressDetail, delivery, note);
        if (!validateEmail(email)) {
            Toast("Email không hợp lệ!", errorColor);
        }
        else if (!validateAddress(addressDetail)) {
            Toast("Địa chỉ quá ngắn!", errorColor);
        }
        else if (!validateName(fullname)) {
            Toast("Họ tên không hợp lệ!", errorColor);
        }
        else if (!validatePhone(phonenumber)) {
            Toast("Số điện thoại không hợp lệ!", errorColor);
        }
        else {
            Toast("Đặt hàng thành công!", successColor);
            localStorage.removeItem("cartItem");
            refreshCartItem();
            refreshCartLength();
        }

    });



})
