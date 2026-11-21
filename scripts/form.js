
//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- HEADER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//













//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- MAIN SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//



//---------------------------------
// -----MAIN - PRODUCT DATA
//--------------------------------- 

let products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];



//---------------------------------
// -----MAIN - PRODUCT DROPDOWN
//--------------------------------- 

// Select Product Dropdown
let productSelect = document.querySelector("#product-name");

// Create Options from Product Array
products.forEach((product) => {

    let option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
});



//--------------------------------------
// -----MAIN - REVIEW SUBMISSION COUNTER
//--------------------------------------

// Select the Form
let reviewForm = document.querySelector("form");

// Count only valid form submissions
reviewForm.addEventListener("submit", () => {

    // Get the previous review count
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Increase the count
    reviewCount++;

    // Save the new count
    localStorage.setItem("reviewCount", String(reviewCount));
});

//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- FOOTER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
//update the current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;