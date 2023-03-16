// for nav bar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle('active');
    

}
menuIcon.classList.remove("bx-x");
navbar.classList.remove('active');
   

ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 250 
    });

    ScrollReveal().reveal('.home-content, .heading', { origin:"top" });
