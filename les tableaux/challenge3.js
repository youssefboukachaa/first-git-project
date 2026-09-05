var prompt = require('prompt-sync')();
let taille = parseInt(prompt("entrez les nombres des elements : "));
let somme = 0;
let arr = [];
for (let i = 0; i < taille; i++) {
    let element = parseInt(prompt("entrez les elements : "));
    arr.push(element);
    somme = somme + arr[i];
}

console.log(somme);