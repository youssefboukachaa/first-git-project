var prompt = require('prompt-sync')();
function inverse_de_chaine(text) {
    let inverse = "";

    for (let i = text.length - 1; i >= 0; i--) {
        inverse = inverse + text[i]
    }
    return inverse;
}


console.log(`the reverse of youcode is ${inverse_de_chaine("youcode")}`);