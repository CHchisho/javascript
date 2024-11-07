
let numCandidates = prompt("How many candidates?");
numCandidates = Number(numCandidates);

let candidates = [];
for (let i = 0; i < numCandidates; i++) {
    let name = prompt(`Enter name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

let numVoters = prompt("How many voters?");
numVoters = Number(numVoters);

for (let i = 0; i < numVoters; i++) {
    let vote = prompt(`Enter the name of the candidate you want to vote for:`);
    let candidate = candidates.find(c => c.name === vote);
    if (candidate) {
        candidate.votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);

let winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("Results:");
candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
});
