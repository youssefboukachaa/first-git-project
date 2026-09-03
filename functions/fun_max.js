var prompt = require('prompt-sync')();
function function_de_maximum(a, b) {
    if (a > b) {
        return a
    }
    else {
        return b
    }
}
let num1 = parseInt(prompt("entrez un nombre: "))
let num2 = parseInt(prompt("entrez un nombre: "))
console.log(`le max number is : ${function_de_maximum(num1, num2)}`)
