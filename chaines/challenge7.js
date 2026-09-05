var prompt = require('prompt-sync')();
function Compte_des_Occurrences_dun_Caractère(text, char) {
    let count = 0;
    let long = text.length;
    for (let i = 0; i <= long; i++) {
        if (text[i] == char) {
            count++;
        }
    }
    return count;
}


let a = prompt("entrez un text: ");
let b = prompt("entrez un char: ");
console.log(Compte_des_Occurrences_dun_Caractère(a, b));