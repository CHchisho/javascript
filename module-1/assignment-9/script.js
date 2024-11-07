
let number = prompt("Enter an integer to check if it's prime:");

number = Number(number);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

if (isPrime(number)) {
    document.querySelector('#target').innerHTML = `${number} is a prime number.`;
} else {
    document.querySelector('#target').innerHTML = `${number} is not a prime number.`;
}
