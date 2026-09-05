var prompt = require('prompt-sync')();
function length(length) {
    let i = 0;
    while (length[i] != undefined) {

        i++;
    }
    return i;
}
let string = "youcode";
console.log(`the length of strings is: ${length(string)}`);