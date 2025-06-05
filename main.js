// Hamburger Navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const hamburgerNavigation = document.querySelector('.hamburger-navigation');

    hamburgerButton.addEventListener('click', () =>
        hamburgerNavigation.classList.toggle('active')
    );
});