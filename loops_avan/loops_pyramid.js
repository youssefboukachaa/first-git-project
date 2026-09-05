var prompt = require('prompt-sync')();
let ligne = prompt("entre le nombre de lignes : "); //demander le nombre des lignes//
for (let i = 1; i <= ligne; i++) {
    let sp = ""; //declarer empty string
    for (let j = 1; j <= ligne - i; j++) {
        sp += " ";
    } // boucle katmchi sur les collomes pour faire les espaces
    for (let j = 1; j < 2 * i; j++) {
        sp += "*";
    }
    console.log(sp);
}