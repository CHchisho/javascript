
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let ul = document.createElement('ul');
let roll;
do {
    roll = rollDice();
    let li = document.createElement('li');
    li.textContent = `Rolled: ${roll}`;
    ul.appendChild(li);
} while (roll !== 6);

document.body.appendChild(ul);
