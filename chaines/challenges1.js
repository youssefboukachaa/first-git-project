var prompt = require('prompt-sync')();
function string(string) {
    return string;
}
let string_1 = prompt(` write a string: `);
console.log(`your string is: ${string(string_1)}`);
