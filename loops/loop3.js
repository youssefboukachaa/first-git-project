var prompt = require('prompt-sync')();
var n = parseInt(prompt("entrez un nombre reel "));
var r = 0;
var a = 0;
while (a <= n) {
    r = r + a;

    console.log(r);
    a++;

}