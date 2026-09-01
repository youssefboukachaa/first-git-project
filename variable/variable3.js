var prompt = require('prompt-sync')();

let c = parseFloat(prompt("Entrez la température en Celsius :"));
let k = c + 273.15;
console.log(k);

