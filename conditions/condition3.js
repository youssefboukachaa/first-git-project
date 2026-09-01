var prompt = require('prompt-sync')();
let x = parseInt(prompt("entrez un valeur x entiere"));
let y = parseInt(prompt("entrez un valeur y entiere"));
if (x == y) {
    console.log((x + y) * 3);
}
else {

    console.log(x + y);
}