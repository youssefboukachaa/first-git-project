var prompt = require('prompt-sync')();

function Conversion_en_Majuscules(text) {
    let upperText = text.toUpperCase();
    return upperText;
}
console.log(Conversion_en_Majuscules("javascript"));