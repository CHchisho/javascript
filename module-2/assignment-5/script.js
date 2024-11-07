
let numbers = [];
let input;
while (true) {
    input = prompt("Enter a number (0 to stop):");
    input = Number(input);
    if (input === 0) break;
    if (numbers.includes(input)) {
        console.log("This number has already been entered!");
        break;
    }
    numbers.push(input);
}

numbers.sort((a, b) => a - b);
console.log(numbers);
