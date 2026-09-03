var prompt = require('prompt-sync')();
function verification_de_parite(x) {

    if (x % 2 == 0) {
        return "true"
    }
    else {
        return "false"
    }
}
let value = parseInt(prompt("write a value: "));
console.log(`the value is ${verification_de_parite(value)}`);