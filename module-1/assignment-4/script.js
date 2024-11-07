
let studentName = prompt("What is your name?");
let randomClass = Math.floor(Math.random() * 4) + 1;

let house;
if (randomClass === 1) {
    house = "Gryffindor";
} else if (randomClass === 2) {
    house = "Slytherin";
} else if (randomClass === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector('#target').innerHTML = `${studentName}, you are ${house}.`;