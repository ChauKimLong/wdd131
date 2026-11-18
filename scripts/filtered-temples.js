
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
//----------------------------------------------------------- MAIN SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

// ---------------------------------
// MAIN - TEMPLE DATA
// ---------------------------------

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2023, October, 22",
    area: 48525,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
  },
  {
    templeName: "Phnom Penh Cambodia",
    location: "Phnom Penh, Cambodia",
    dedicated: "2026, August, 30",
    area: 9946,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/phnom-penh-cambodia-temple/phnom-penh-cambodia-temple-73464-main.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Manila, Philippines",
    dedicated: "1984, September, 27",
    area: 26683,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
  },
];



// ---------------------------------
// MAIN - CREATE TEMPLE CARDS
// ---------------------------------
let templeCards = document.querySelector("#temple-cards");
function createTempleCard(temple) {

    // Create the card
    let card = document.createElement("section");
    card.classList.add("temple-card");

    // Temple Name
    let name = document.createElement("h2");
    name.textContent = temple.templeName;

    // Temple Location
    let location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    // Temple Dedication
    let dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    // Temple Area
    let area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString("en-US")} sq ft`;

    // Temple Image
    let image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy";

    // Add all elements to the card
    card.append(name, location, dedicated, area, image);

    return card;
}


// ---------------------------------
// MAIN - DISPLAY TEMPLE CARDS
// ---------------------------------

function displayTemples(templeList) {

    // Clear existing cards
    templeCards.replaceChildren();

    // Create a card for each temple
    templeList.forEach((temple) => {
        let card = createTempleCard(temple);
        templeCards.appendChild(card);
    });
}

// Display all temples when the page loads
displayTemples(temples);




// ---------------------------------
// MAIN - FILTER TEMPLE CARDS
// ---------------------------------

// Select all navigation links
let filterLinks = document.querySelectorAll("#primary-navigation a");

// Add click event to each link
filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Get selected filter
        let selectedFilter = link.dataset.filter;
        let filteredTemples = temples;

        // Filter by dedication year or area
        if (selectedFilter === "old") {
            filteredTemples = temples.filter((temple) => {
                return Number(temple.dedicated.split(",")[0]) < 1900;
            });
        }
        else if (selectedFilter === "new") {
            filteredTemples = temples.filter((temple) => {
                return Number(temple.dedicated.split(",")[0]) > 2000;
            });
        }
        else if (selectedFilter === "large") {
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
        }
        else if (selectedFilter === "small") {
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
        }

        // Display matching temples
        displayTemples(filteredTemples);

        // Update main heading
        document.querySelector("main h1").textContent = link.textContent;

        // Close mobile menu after selection
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});










//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- FOOTER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
//update the current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;