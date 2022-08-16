const {
    doc
} = require("prettier");
const { command } = require("yargs");
var screen =0;
console.log(screen);
function bouttons(x) {
    document.getElementById("ecran").innerHTML += x;
};

function plus() {
    var plus = document.getElementById("ecran").innerHTML;
    parseInt(plus);
    console.log(plus);
    var screen=+plus;
    console.log(screen);
    return screen;
}

function moins() {
    var moins = document.getElementById("ecran").innerHTML;
    parseFloat(moins);
    var screen  = screen - moins;
    console.log(screen);
    return screen;

}

function diviseur() {
    var division = document.getElementById("ecran").innerHTML;
    parseFloat(division);
    screen/division;
    console.log(screen);
    return screen;
}

function fois() {
    var fois = document.getElementById("ecran").innerHTML; 
    parseInt(fois);
    screen*fois;
    return screen;
}

function egal() {
    document.getElementById("ecran").innerHTML = screen;
    /*
    var expression = document.getElementById("ecran").innerHTML;
    console.log(expression);
    var resultat = eval(expression);
    console.log(resultat);
    document.getElementById("ecran").innerHTML = resultat;*/
    



}