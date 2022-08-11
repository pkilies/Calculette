const { doc } = require("prettier");

function bouttons(x){
   document.getElementById("ecran").innerHTML += x;
};

/*function ecran(){
    document.getElementById("ecran").innerHTML;
};*/

function plus(){
    document.getElementById("ecran").innerHTML += "+";
}

function moins(){
        document.getElementById("ecran").innerHTML += "-";
    
}

function diviseur(){
        document.getElementById("ecran").innerHTML += "/";
}

function fois(){
    document.getElementById("ecran").innerHTML += "*";
}

/*function operations(){
    var expression = document.getElementById("ecran");
    if(expression.indexOf('++')
    ||expression.indexOf('+-')
    ||expression.indexOf('-+')
    ||expression.indexOf('+*')
    ||expression.indexOf('+/')
    ||expression.indexOf('/+')
    ||expression.indexOf('--')
    ||expression.indexOf('-*')
    ||expression.indexOf('-/')
    ||expression.indexOf('/-')
    ||expression.indexOf('//')
    ||expression.indexOf('**')
    ||expression.indexOf('/*')
    ){
        document.getElementById("ecran").innerHTML = "Erreur";
    }

}*/

function egal(){
   // operations();
   var expression = document.getElementById("ecran").innerHTML;
   console.log(expression);
   var resultat = parseInt(expression);
   console.log(resultat);
   document.getElementById("ecran").innerHTML = resultat;
   
}