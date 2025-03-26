document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    if (today.getMonth() === 2 && today.getDate() === 26) { // April is month 3 (0-indexed)
        // Create and display the image
        const img = document.createElement("img");
        img.src = "images/jumpscare.jpg"; // Replace with the path to your image
        img.alt = "April Fools!";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100vw"; // Full width of the viewport
        img.style.height = "100vh"; // Full height of the viewport
        img.style.objectFit = "cover"; // Ensures the image covers the entire screen
        img.style.zIndex = "1000";
        document.body.appendChild(img);

        // Play the sound
        const audio = new Audio("/images/squeaky-jumpscare-2-102254.mp3"); // Replace with the path to your sound file
        audio.play();

        // Remove the image after 2 seconds
        setTimeout(() => {
            img.remove();
        }, 500); // 2000 milliseconds = 2 seconds
    }
});