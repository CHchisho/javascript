
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let sides = prompt("Enter the number of sides on the dice:");
sides = Number(sides);

let ul = document.createElement('ul');
let roll;
do {
    roll = rollDice(sides);
    let li = document.createElement('li');
    li.textContent = `Rolled: ${roll}`;
    ul.appendChild(li);
} while (roll !== sides);

document.body.appendChild(ul);
