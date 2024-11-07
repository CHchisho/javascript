
let numParticipants = prompt("How many participants?");
numParticipants = Number(numParticipants);

let participants = [];
for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participants.push(name);
}

participants.sort();

let ol = document.createElement('ol');
participants.forEach(participant => {
    let li = document.createElement('li');
    li.textContent = participant;
    ol.appendChild(li);
});

document.body.appendChild(ol);
