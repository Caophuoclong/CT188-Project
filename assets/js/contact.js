// $(document).ready(function () {
//     $('body').on('click', '.check', function () {
//         const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
//         const sdt = $('#sdt').val();
//         if (sdt !== '') {
//             if (vnf_regex.test(sdt) === false) {
//                 alert('Số điện thoại không đúng định dạng');
//                 return false;

//             }
//         } else {
//             alert('Bạn chưa nhập số điện thoại');
//             return false;
//         }
//     })
// });

function testName() {
    const value = event.target.value;
    if (value.length > 3) {
        document.getElementById('errorName').innerHTML = "";
    } else {
        document.getElementById('errorName').innerHTML =
            "<p style='color: red'>Họ tên không hợp lệ!</p>";
    }
}
function validateEmail(value) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}
function testEmail() {
    const value = event.target.value;
    if (validateEmail(value)) {
        document.getElementById('errorEmail').innerHTML = "";
    } else {
        document.getElementById('errorEmail').innerHTML =
            "<p style='color: red'>Email không hợp lệ!</p>";
    }
}
function validatePhone(value) {
    const regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return regex.test(value);
}
function testPhone() {
    const value = event.target.value;
    if (validatePhone(value)) {
        document.getElementById('errorPhone').innerHTML = "";
    } else {
        document.getElementById('errorPhone').innerHTML =
            "<p style='color: red'>Số điện thoại không hợp lệ!</p>";
    }
}
function testContent() {
    const value = event.target.value;
    if (value.length > 10) {
        document.getElementById('errorContent').innerHTML = "";
    } else {
        document.getElementById('errorContent').innerHTML =
            "<p style='color: red'>Nội dung phải lớn hơn 10 kí tự!</p>";
    }
}
const form_contact = document.getElementById('form-contact')
form_contact.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('hoten').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('sdt').value;
    const content = document.getElementById('content').value;
    if (name.length > 3 && validateEmail(email) && validatePhone(phone)
        && content.length > 10) {
        alert('Gửi liên hệ thành công!');
        // return true;
        console.log('ok');
    } else {
        alert('Gửi liên hệ thất bại!');
        event.preventDefault();
        return false;
    }
})