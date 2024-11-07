
let numbers = [];
let input;
while (true) {
    input = prompt("Enter a number (0 to stop):");
    input = Number(input);
    if (input === 0) break;
    numbers.push(input);
}

numbers.sort((a, b) => b - a);
console.log(numbers);
