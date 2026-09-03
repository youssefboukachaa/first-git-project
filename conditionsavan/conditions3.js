var prompt = require('prompt-sync')();
let a = parseInt(prompt("Nombre total de jours de congés accordés"));
let b = parseInt(prompt("Nombre de jours de congés utilisés"));
let s = parseInt(prompt("Statut de l'employé (0 pour temps partiel, 1 pour temps plein)"));
if (s == 1) {
    var joursrestant = a - b;
    console.log(joursrestant);
}
else if (s == 0) {
    var joursrestant = (a / 2) - b;
    console.log(joursrestant);
}
else if (b > a) {
    console.log("attention vous de passe les jours accordes");
}