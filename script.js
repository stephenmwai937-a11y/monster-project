// Background Slideshow with smooth fade effect
const backgroundImages = [
    "images/monster-gojo.jpg",
    "images/monster-original.jpg",
    "images/monster-ultra.jpg",
    "images/mango-loco.jpg"
];

let currentImageIndex = 0;

function changeBackground() {
    // Fade out effect
    document.body.style.opacity = "0.7";
    
    // Wait for fade effect, then change image
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
        
        // Fade back in
        document.body.style.opacity = "1";
    }, 800);
}

// Change background every 8 seconds (giving time for smooth transition)
setInterval(changeBackground, 8000);

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
