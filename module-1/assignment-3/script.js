let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

num1 = Number(num1);  // Преобразуем строки в числа
num2 = Number(num2);
num3 = Number(num3);

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.querySelector('#target').innerHTML = `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;