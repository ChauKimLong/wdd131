
//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- MAIN SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//

//------------------
// Static weather data
//-------------------
let temperature = 10;
let windSpeed = 5;



//---------------------------------
// Function to calculate Wind Chill
//---------------------------------
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
}


//--------------------------------------
// Check conditions and display result
//--------------------------------------
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}

document.getElementById("wind-chill").textContent = windChill;



//----------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------- FOOTER SECTION -------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------//
//update the current year and last modified date in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;