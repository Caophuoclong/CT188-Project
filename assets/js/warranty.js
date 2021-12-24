//Check thong tin bao hanh
function checkValidate() {
    if (phone.value.length != 10) {
        console.log(phone.value.length)
        return false;
    }
    else {
        return true;
    }
}

function formValidate(frm) {

    //Kiểm tra ràng buộc tên user
    var username = /[a-z0-9_]{3,}/;
    if (username.test(frm.username.value) == false) {
        frm.username.focus();
        alert('Tên username không chứa ký tự hoa và ký tự đặc biệt ngoài các ký tự "_" ');
        return false;
    }
    //kiểm tra ràng buộc e-mail
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        frm.email.focus();
        alert('Email này đã được sử dụng, vui lòng chọn lại email khác');
        return false;
    }
    //mã kiểm tra ràng buộc mật khẩu
    if (frm.pwd.value.length < 8) {
        alert('Mật khẩu phải từ 8 ký tự trở lên');
        frm.pwd.focus();
        return false;
    }
    //mã kiểm tra ràng buộc mật khẩu nhập lại
    if (frm.re_pwd.value != frm.pwd.value) {
        alert('Mật khẩu nhập lại không khớp');
        frm.re_pwd.focus();
        return false;
    }
    alert('Đăng ký thành công!');
    return true;
}
