function validate(frm) {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (frm.hoten.value === " ") {
        alert("Bạn chưa nhập họ tên");
        frm.hote.focus();
        return false;
    } else if (frm.hoten.value.length < 3) {
        alert("Họ tên phải có ít nhất 3 ký tự");
        frm.hoten.focus();
        return false;
    }
    if (frm.email.value == "") {
        alert("Bạn chưa nhập email");
        frm.email.focus();
        return false;
    } else if (emailReg.test(frm.email.value) === false) {
        alert("Email không hợp lệ");
        frm.email.focus();
        return false;
    }
    if (frm.content.value == "") {
        alert("Bạn chưa nhập nội dung");
        frm.content.focus();
        return false;
    }

    alert("Gửi thông tin liên hệ thành công!");
    return true;
}

$(document).ready(function () {
    $('body').on('click', '.check', function () {
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        const sdt = $('#sdt').val();
        if (sdt !== '') {
            if (vnf_regex.test(sdt) === false) {
                alert('Số điện thoại không đúng định dạng');
                return false;

            }
        } else {
            alert('Bạn chưa nhập số điện thoại');
            return false;
        }
    })
});