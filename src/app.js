"use strict";

//element för öppna, stänga menyn i mobilläge
let openButton = document.getElementById("open-menu");
let closeButton = document.getElementById("close-menu");

//eventlyssnare för att öppna menyn och stänga menyn i mobilläge
openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

//funktion för att toggla mellan öppna och stänga menyn i mobilläge
function toggleMenu() {
    let menuEl = document.getElementById("nav-menu");

    //hämtar in styling från css
    let style = window.getComputedStyle(menuEl);

    if(style.display === "none") {
        menuEl.style.display ="block";
    } else {
        menuEl.style.display = "none";
    }
}