
let numberOfDice = prompt("How many dice would you like to roll?");
numberOfDice = Number(numberOfDice);

let sumOfRolls = 0;

for (let i = 0; i < numberOfDice; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    sumOfRolls += roll;
}

document.querySelector('#target').innerHTML = `The sum of the dice rolls is ${sumOfRolls}.`;