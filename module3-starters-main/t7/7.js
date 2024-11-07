
document.addEventListener("DOMContentLoaded", function() {
    const triggerElement = document.getElementById("trigger");
    const targetImage = document.getElementById("target");

    triggerElement.addEventListener("mouseenter", function() {
        targetImage.src = "img/picB.jpg";
    });

    triggerElement.addEventListener("mouseleave", function() {
        targetImage.src = "img/picA.jpg";
    });
});
