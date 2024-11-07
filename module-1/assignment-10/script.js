
let numDice = prompt("Enter the number of dice:");
let sumOfEyes = prompt("Enter the sum of the dice eyes you are interested in:");

numDice = Number(numDice);
sumOfEyes = Number(sumOfEyes);

function rollDice(numDice) {
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    return sum;
}

let totalRolls = 10000;
let count = 0;

for (let i = 0; i < totalRolls; i++) {
    if (rollDice(numDice) === sumOfEyes) {
        count++;
    }
}

let probability = (count / totalRolls) * 100;
document.querySelector('#target').innerHTML = `Probability to get sum ${sumOfEyes} with ${numDice} dice is ${probability.toFixed(2)}%`;
