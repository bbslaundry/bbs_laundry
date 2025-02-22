const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector ('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});