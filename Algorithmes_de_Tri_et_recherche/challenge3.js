let num = [1, 4, 6, 44]
let target = 6;
let x = false;
for (let i = 0; i < num.length; i++) {
    if (num[i] == target) {
        x = true;
        console.log("number found ");
        break;

    }
}
if (x == false) {
    console.log("element not found ");

}

