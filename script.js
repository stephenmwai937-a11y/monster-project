// Background Slideshow
const backgroundImages = [
    "images/monster-gojo.jpg",
    "images/monster-original.jpg",
    "images/monster-ultra.jpg",
    "images/mango-loco.jpg"
];

let currentImageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set initial background
changeBackground();

// Welcome Message
alert("Welcome to Monster Energy!");

let userName = prompt("What is your name?");

console.log("Welcome " + userName + "!");

// Display a greeting in the browser console
document.addEventListener("DOMContentLoaded", function () {
    console.log("Monster Energy website loaded successfully.");
});
