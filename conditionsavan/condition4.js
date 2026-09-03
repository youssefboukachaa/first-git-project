var prompt = require('prompt-sync')();
let s = parseFloat(prompt("Score de performance (de 0 à 100)"));
let a = parseFloat(prompt("Ancienneté (en années)"));
let r = parseFloat(prompt("Récompenses reçues (0 pour aucune, 1 pour une, 2 pour deux ou plus"));
if (s >= 90 && a >= 5) {
    console.log("excellente")

}
else if (s >= 75 && a >= 3) {
    console.log("bonne");

}
else if (s >= 50 && a < 3) {
    console.log("Satisfaisante");
}
else {
    console.log("satisfante");
}
if (r == 1) {
    console.log(r * 1.1)
}
else {
    console.log(r * 1.2)
}