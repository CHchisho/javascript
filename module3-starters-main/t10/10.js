document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("source");
    const targetParagraph = document.getElementById("target");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstname = form.querySelector('input[name="firstname"]').value;
        const lastname = form.querySelector('input[name="lastname"]').value;

        targetParagraph.textContent = `Your name is ${firstname} ${lastname}`;
    });
});
