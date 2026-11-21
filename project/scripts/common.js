//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- HEADER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
// Shared navigation behavior for all project pages.
let menuButton = document.querySelector('.menu-button');
let navigation = document.querySelector('#primary-navigation');

function setMenuOpen(isOpen) {
    navigation.classList.toggle('is-open', isOpen);
    menuButton.textContent = isOpen ? '✕' : '☰';
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuOpen(false);
    });
}

//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- FOOTER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
let currentYear = document.getElementById('currentyear');
let lastModified = document.getElementById('lastModified');
if (currentYear) currentYear.textContent = `${new Date().getFullYear()}`;
if (lastModified) lastModified.textContent = `${document.lastModified}`;
