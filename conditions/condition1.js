var prompt = require('prompt-sync')();
let n = parseInt(prompt("Entrez un nombre entier : "));

if (n % 2 == 0) {
    console.log(`le nombre ${n} pair`);
}
else {
    console.log(`le nombre ${n} impair`);
}