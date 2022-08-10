const { doc } = require("prettier");

function bouttons(x){
   /*let a = document.getElementById("ecran");
   let num = document.createTextNode(x);
   a.appendChild(b);*/
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

function egal(){
   let result = document.getElementById("ecran").innerHTML;
   console.log(result);
   let u = result.length;
   console.log(u);
   //for (i=0; i++; i=u){
    //    if c == "+;"
   //}
}