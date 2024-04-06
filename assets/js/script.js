// Header sticky js 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 95) {
            $('#header').addClass('fixed')
        }
        else {
            $('#header').removeClass('fixed')
        }
    });

    // navigation open js start
    $('.toggle-switch').click(function () {
        $('.header-inner-wrapper').addClass('header-active')
    });
});

// Navbar close js start
function navbar_close() {
    document.querySelector('.menu ul').style.display = 'none';
}
// Assuming you have a button with the class 'remove-button'
var removeButton = document.querySelector('.close-menu-icon');
var headerInnerWrapper = document.querySelector('.header-inner-wrapper');

removeButton.addEventListener('click', function () {
    headerInnerWrapper.classList.remove('header-active');
});

function navbar_toggle_active() {
    document.querySelector('.menu ul').style.display = 'block';
}

// Auto typer js
const front_title = new AutoTyping({
    id: 'auto_type',
    typeText: ['Designer...',],
    textColor: '#FA00FF',
    cursorColor: '#FA00FF',
    cursorSpeed: 330,
    deleteSpeed: 100,
    deleteDelay: 1200,
}).init();

const navbar_title = new AutoTyping({
    id: 'navbar_logo_typer',
    typeText: ['Lodhi...',],
    textColor: '#FA00FF',
    cursorColor: '#FA00FF',
    cursorSpeed: 330,
    deleteSpeed: 100,
    deleteDelay: 1200,
}).init();

// Add class on body
function addClassToBody() {
    var checkbox = document.getElementById("toggle-btn");
    var body = document.body;

    if (checkbox.checked) {
        body.classList.add("switch");
    } else {
        body.classList.remove("switch");
    }
}

function cv() {
    var file = 'assets/files/resume.pdf';
    var file_d = document.querySelector('.file');
    file_d.setAttribute('href', file);
}



// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }