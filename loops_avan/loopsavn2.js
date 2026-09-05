var prompt = require('prompt-sync')();
var nombre_de_lines = parseInt(prompt(" le nombre des lignes à compose"));
var coun = 0;
var etoile = "*";
var espace = "";

var space = 6;
while (coun < nombre_de_lines) {
    // while (space != 1) {
    console.log(espace + etoile);
    // console.log(etoile);
    space--;

    coun++;
    etoile = etoile + "**";
}
//}
