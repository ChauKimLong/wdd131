
//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- HEADER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

// ---------------------------------
// HEADER - HAMBURGER MENU
// ---------------------------------

let menuButton = document.querySelector("#menu-button");
let navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", () => {
    let isOpen = navigation.classList.toggle("open");

    menuButton.textContent = isOpen ? "✕" : "☰";

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});








//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- FOOTER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
//update the current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;