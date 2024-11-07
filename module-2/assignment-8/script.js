
function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

let array = ["Johnny", "DeeDee", "Joey", "Marky"];
let result = concat(array);
document.querySelector('#target').innerHTML = result;
