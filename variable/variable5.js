var prompt = require('prompt-sync')();
let tc = parseFloat(prompt("donnez moi la température en Celsius"));

if (tc < 0) {
    console.log("solide");

}

else if (tc < 100) {
    console.log("liquide");
}

else {
    console.log("gaz");
}