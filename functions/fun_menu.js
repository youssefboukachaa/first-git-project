var prompt = require('prompt-sync')();
function div(a, b) {
    return a / b;
}
function Multiplication(x, y) {
    return x * y;
}
function somme(x, y) {
    return x + y;
}
function Soustraction(x, y) {
    return x - y;
}

let num1 = parseInt(prompt("entrez un number :"));
let num2 = parseInt(prompt("entrez un nombre : "));
console.log("=====MENU===== \n 1.somme\n 2.Soustraction\n 3.Multiplication\n 4.division\n 5.quitter")
let menu = parseInt(prompt("choisir une options: "))
switch (menu) {
    case 1: console.log(`la somme de ${num1} + ${num2} = ${somme(num1, num2)}`);
        break;

    case 2: console.log(`la somme de ${num1} - ${num2} = ${Soustraction(num1, num2)}`);
        break;
    case 3: console.log(`la somme de ${num1} * ${num2} = ${Multiplication(num1, num2)}`);
        break;
    case 4: console.log(`la somme de ${num1} / ${num2} = ${div(num1, num2)}`);
        break;

    default:
        console.log("error");

}
