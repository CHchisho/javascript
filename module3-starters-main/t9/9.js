document.addEventListener("DOMContentLoaded", function() {
    const calculationInput = document.getElementById("calculation");
    const resultParagraph = document.getElementById("result");
    const calculateButton = document.getElementById("start");

    calculateButton.addEventListener("click", function() {
        const calculation = calculationInput.value.trim();

        if (calculation.includes('+')) {
            const parts = calculation.split('+');
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);
            resultParagraph.textContent = `Result: ${num1 + num2}`;
        } else if (calculation.includes('-')) {
            const parts = calculation.split('-');
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);
            resultParagraph.textContent = `Result: ${num1 - num2}`;
        } else if (calculation.includes('*')) {
            const parts = calculation.split('*');
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);
            resultParagraph.textContent = `Result: ${num1 * num2}`;
        } else if (calculation.includes('/')) {
            const parts = calculation.split('/');
            const num1 = parseInt(parts[0]);
            const num2 = parseInt(parts[1]);

            if (num2 === 0) {
                resultParagraph.textContent = "Error: Division by zero is not allowed.";
            } else {
                resultParagraph.textContent = `Result: ${Math.floor(num1 / num2)}`;
            }
        } else {
            resultParagraph.textContent = "Invalid input. Please enter a valid calculation (e.g., 3+5, 6-2, 8*4, 9/3).";
        }
    });
});
