window.addEventListener('load', () => {
    loader = document.querySelector(".loader");
    // loader.classList.add("hidden");
    document.body.classList.add("loaded");
});

let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-list");
let header = document.querySelector('.header');
let navLinks = document.querySelectorAll('.nav-link');

menu.addEventListener('click', () => {
    nav.classList.toggle("show-menu");
});



const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true //Animations Reeat
})
sr.reveal('.slide-information, .quality-container, .about-container, .footer-container')
sr.reveal('.slide-image, .form-button', {delay: 600, origin: 'bottom', interval: 100})
sr.reveal('.prev, .right-about, .form, .copyright',  {origin: 'left'})
sr.reveal('.main-title, .next, .left-about, .shop-image', {origin: 'right'})
sr.reveal('.services-card', {interval: 100})



