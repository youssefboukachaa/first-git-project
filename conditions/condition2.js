var prompt = require('prompt-sync')();
let lettre = prompt("Entrez une lettre :");
switch (lettre) {
    case 'a':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    case 'e':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    case 'i':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    case 'o':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    case 'u':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    case 'y':
        console.log(`La lettre ${lettre} est une voyelle.`);
        break;
    default:
        console.log(`La lettre ${lettre} est une consonne (ou un autre caractère).`);
}
