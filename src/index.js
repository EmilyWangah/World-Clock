
function updateTime(){


let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = moment().format ("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss:SS [<small>]A[</small>]");


let windhoekElement = document.querySelector("#windhoek");
let windhoekDateElement = windhoekElement.querySelector(".date");
let windhoekTimeElement = windhoekElement.querySelector(".time");
let windhoekTime = moment().tz("Africa/Windhoek");

windhoekDateElement.innerHTML = moment().format ("MMMM Do YYYY");
windhoekTimeElement.innerHTML = windhoekTime.format(
    "h:mm:ss:SS [<small>]A[</small>]");
}

setInterval(updateTime ,1);
updateTime();

function updateCity(event){
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city" id="los-angeles">
            <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss:SS")} 
                <small>">${cityTime.format(
                    "A"
                )}</small></div>
        </div>`
;}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);