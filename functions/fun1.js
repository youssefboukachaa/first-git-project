var prompt = require('prompt-sync')();

function somme(x, y) {
    return x + y
}

let num1 = parseInt(prompt("entrez un nombre : "));
let num2 = parseInt(prompt("entrez un nombre : "));
console.log(`votre resultat est:${somme(num1, num2)}`
)

