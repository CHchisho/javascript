
let startYear = prompt("Enter the start year:");
let endYear = prompt("Enter the end year:");

startYear = Number(startYear);
endYear = Number(endYear);

let leapYears = [];

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapYears.push(year);
    }
}

let ul = document.createElement('ul');
leapYears.forEach(year => {
    let li = document.createElement('li');
    li.textContent = year;
    ul.appendChild(li);
});

document.body.appendChild(ul);
