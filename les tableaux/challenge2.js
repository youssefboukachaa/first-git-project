var prompt = require('prompt-sync')();

let nombre_des_elements = parseInt(prompt("entrez le nombre des elements: "));
let arr = [];
for (let i = 0; i < nombre_des_elements; i++) {
    let valeur = prompt(`Entrez l'élément n: ${i + 1} :`);
    arr.push(valeur);
}
console.log("voici votre tableaux : ");
console.log(arr);