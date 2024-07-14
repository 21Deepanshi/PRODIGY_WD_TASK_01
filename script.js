//image slider
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-list img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            images.forEach(img => img.style.transform = 'scale(5)');
            image.style.transform = 'scale(2)';
        });
    });
});


// Toggle navbar icon

let menuIcon = document.querySelector('#btn');
let navbar = document.querySelector('.nav-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Close navbar when a menu item is clicked
let navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});