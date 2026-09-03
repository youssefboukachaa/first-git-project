var prompt = require('prompt-sync')();
let Revenu = parseFloat(prompt("Revenu annuel (en euros)"));
let Scoredecrédit = parseFloat(prompt("Score de crédit(sur 1000)"));
let Duréeduprêt = parseFloat(prompt("Durée du prêt (en année)"));

if (Revenu >= 30000 && Scoredecrédit >= 700 && Duréeduprêt <= 10) {
    console.log("Éligible");
}
else if (Revenu >= 30000 && Scoredecrédit >= 650 && Duréeduprêt <= 15) {
    console.log("Éligible avec conditions");
}
else (
    console.log("non egligible")
)