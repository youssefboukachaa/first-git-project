const tableau = [10, 20, 30, 40, 50];
const cherche = 50;
let debut = 0;
let fin = 4;
while (debut <= fin) {
    let milieu = Math.floor((debut + fin) / 2);
    if (tableau[milieu] === cherche) {
        console.log(`Trouve au milieu ! index : ${milieu}`);
        break;

    }
    else if (cherche > tableau[milieu]) {
        debut = milieu + 1;
    } else {
        fin = milieu - 1;
    }
}