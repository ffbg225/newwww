document.addEventListener('DOMContentLoaded', function () {
    if (!window.typedInstance) { // Prevent multiple instances
        window.typedInstance = new Typed(".text", {
            strings: ["Web Developer", "App Developer"],
            typeSpeed: 90,
            backSpeed: 90,
            backDelay: 500,
            loop: true
        });
    }
});

function showPopup(text) {
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}
