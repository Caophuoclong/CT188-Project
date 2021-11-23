
function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
window.onscroll = function () { myFunction() };
const header = document.getElementById("nav-mobile");

const sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}