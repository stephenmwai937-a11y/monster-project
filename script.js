// Background Slideshow with smooth fade effect
const backgroundImages = [
    "images/monster-gojo.jpg",
    "images/monster-original.jpg",
    "images/monster-ultra.jpg",
    "images/mango-loco.jpg"
];

let currentImageIndex = 0;

// TIMING CONFIGURATION - Adjust these numbers:
const FADE_OUT_DURATION = 1000;      // How long fade out takes (milliseconds) - INCREASE for slower fade
const IMAGE_DISPLAY_TIME = 12000;    // How long each image stays visible (milliseconds) - INCREASE to keep image longer
const FADE_IN_DURATION = 1000;       // How long fade in takes (milliseconds) - INCREASE for slower fade

function changeBackground() {
    // Fade out effect
    document.body.style.transition = `opacity ${FADE_OUT_DURATION}ms ease-in-out`;
    document.body.style.opacity = "0.6";
    
    // Wait for fade effect, then change image
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        
        // Fade back in
        document.body.style.transition = `opacity ${FADE_IN_DURATION}ms ease-in-out`;
        document.body.style.opacity = "1";
    }, FADE_OUT_DURATION);
}

// Total cycle time = FADE_OUT + IMAGE_DISPLAY + FADE_IN
// Currently: 1000 + 12000 + 1000 = 14 seconds per image
setInterval(changeBackground, FADE_OUT_DURATION + IMAGE_DISPLAY_TIME + FADE_IN_DURATION);

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
