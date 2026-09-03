var prompt = require('prompt-sync')();
function Multiplication(x, y) {
    return x * y
}

let num1 = parseInt(prompt("entrez un nombre :"));
let num2 = parseInt(prompt("entrez un nombre :"));
console.log(`la multuplier de num1 et num2 : ${Multiplication(num1, num2)}`)
