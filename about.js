const hamburgerIcon = document.querySelector('.ham-icon');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-nav-menu a');
hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

mobileMenuItems.forEach((event) => event.addEventListener('click', () => {
    hamburgerIcon.classList.remove('active');
    mobileMenu.classList.remove('active');
}))