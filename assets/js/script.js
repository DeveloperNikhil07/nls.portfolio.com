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
        $('.header-inner-wrapper').toggleClass('header-active')
    });
});

// Navbar close js start
function navbar_close() {
    document.querySelector('.menu ul').style.display = 'none';
};
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

// Get contact form data with use js
const scriptURL = 'https://script.google.com/macros/s/AKfycbyFJ8Ru8lAVkAGvPea5jQOV7ksCxAIT0zjifm_a_uehuwIK7THsA-ebZKw7_rVDFBG3/exec';
const form = document.forms['contact_data_form'];
const successPopup = document.getElementById('successPopup');
const failedPopup = document.getElementById('failed_popup');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                // Show success popup
                successPopup.classList.remove('d-none');
                // Hide failed popup if it was shown previously
                failedPopup.classList.add('d-none');
            } else {
                // Show failed popup
                failedPopup.classList.remove('d-none');
                // Hide success popup if it was shown previously
                successPopup.classList.add('d-none');
            }
            // Reload the form after a delay
            setTimeout(() => {
                window.location.reload();
            }, 1000); // Adjust the delay as needed
        })
        .catch(error => window.error('Error!', error.message));
});

// Function to close the success and failed popups
function closePopup() {
    successPopup.classList.add('d-none');
    failedPopup.classList.add('d-none');
};