var navbar = document.getElementById('navbar');
window.onscroll = function() { fixNavbar() };
var navbarOffset = navbar.offsetTop;

function fixNavbar() {
    if (window.scrollY>=navbarOffset) {
        navbar.classList.add('move-up')
    }else{
        navbar.classList.remove('move-up')
    }
}