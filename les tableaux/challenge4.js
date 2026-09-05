var prompt = require('prompt-sync')();
let arr = [];
let nombre = parseInt(prompt("entrez un nombre des elements : "))
for (let i = 0; i < nombre; i++) {
    let elements = parseInt(prompt("entrez un nombre :"));
    arr.push(elements);
}
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }


}
console.log(max)