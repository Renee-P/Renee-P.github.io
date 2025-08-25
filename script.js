let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Creative'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
    });