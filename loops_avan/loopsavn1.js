var prompt = require('prompt-sync')();
let n = parseInt(prompt("entrez un nombre"));
let count = 10;
let result;
while (count >= 1) {
    result = n * count;

    console.log(result);
    count--;

}


