prompt = require('prompt-sync')();
let Âgeduconducteur = parseFloat(prompt("Âge du conducteur(en années)"));
let Typedevoiture = parseFloat(prompt("Type de voiture (1 pour sportive, 2 pour utilitaire, 3 pour familiale)"));
let nombredaccidents = parseFloat(prompt("Nombre d'accidents au cours des 5 dernières années"));
var prime = 500;
if (Âgeduconducteur < 25) {
    console.log(prime * 1.5);
}
else if (Âgeduconducteur >= 25 && Âgeduconducteur <= 65) {
    console.log(`${prime}`);
}
else {
    console.log(prime * 1.2);
}

if (Typedevoiture == 1) {
    console.log(prime * 2)
}
else if (Typedevoiture == 2) {
    console.log(prime * 1.2);
}
else {
    console.log(prime * 1.1);
}

if (nombredaccidents > 1) {
    console.log(prime * 1.3);
}