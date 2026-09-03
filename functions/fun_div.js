var prompt = require('prompt-sync')();
function div(a, b) {
    return a / b;
}

let num1 = parseInt(prompt("entrez un nombre"))
let num2 = parseInt(prompt("entrez un nombre"))
console.log(`la div de num1 et num2 : ${div(num1, num2)}`)