var prompt = require('prompt-sync')();
let vkm = parseFloat(prompt("donnez moi la vitesse en kilometer"));
let ms = vkm * 0.27778;
console.log(`la vitesseen m/s :${ms}`);