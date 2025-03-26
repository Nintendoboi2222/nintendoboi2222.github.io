document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    if (today.getMonth() === 3 && today.getDate() === 1) {
        const img = document.createElement("img");
        img.src = "images/jumpscare.jpg";
        img.alt = "April Fools!";
        img.style.position = "fixed";
        img.style.top = "0";
        img.style.left = "0";
        img.style.width = "100vw";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.zIndex = "1000";
        document.body.appendChild(img);

        const audio = new Audio("/images/squeaky-jumpscare-2-102254.mp3");
        audio.play();


        setTimeout(() => {
            img.remove();
        }, 500);
    }
});


// april fools!!!
