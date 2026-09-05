var prompt = require('prompt-sync')();
function Comparaison_de_Chaînes(text1, text2) {

    let length1 = text1.length;
    let length2 = text2.length;

    if (length1 == length2) {
        return "two string is equal "
    }
    else {
        return "two string is diffirent"
    }

}
let str_1 = prompt("enter a string : ");
let str_2 = prompt("enter a string : ");
console.log(Comparaison_de_Chaînes(str_1, str_2));