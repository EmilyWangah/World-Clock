
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