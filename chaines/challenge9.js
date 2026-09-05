function Suppression_des_Espaces(string) {
    let n = "";
    let long = string.length;
    for (let i = 0; i <= long - 1; i++) {
        if (string[i] != " ") {

            n = n + string[i];
        }
    }
    return n;
}
console.log(Suppression_des_Espaces("yo u s s e f"));