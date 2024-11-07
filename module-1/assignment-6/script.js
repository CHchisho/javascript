
let confirmCalc = confirm("Should I calculate the square root?");

if (confirmCalc) {
    let number = prompt("Enter a number:");
    number = Number(number);

    if (number < 0) {
        document.querySelector('#target').innerHTML = "The square root of a negative number is not defined.";
    } else {
        let sqrt = Math.sqrt(number);
        document.querySelector('#target').innerHTML = `The square root is ${sqrt}.`;
    }
} else {
    document.querySelector('#target').innerHTML = "The square root is not calculated.";
}
