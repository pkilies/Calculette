function bouttons(x){
    var btn = document.createElement("BUTTON");        // Créer un élément <button>
    var t = document.createTextNode(x);       // Créer un noeud textuel
    btn.appendChild(t);                                // Ajouter le texte au bouton
    document.body.appendChild(btn);   
};

function clavier(){
    for(i=0; i<10; i++){
        bouttons(x);
    }
}

function ecran(){
    document.getElementById("ecran").innerHTML;
};

function plus(){
    var btn = document.createElement("BUTTON");        // Créer un élément <button>
    var t = document.createTextNode("+");       // Créer un noeud textuel
    btn.appendChild(t);                                // Ajouter le texte au bouton
    document.body.appendChild(btn);
     
}

function moins(){
    var btn = document.createElement("BUTTON");        // Créer un élément <button>
    var t = document.createTextNode("-");       // Créer un noeud textuel
    btn.appendChild(t);                                // Ajouter le texte au bouton
    document.body.appendChild(btn);
     
}

function diviser(){
    var btn = document.createElement("BUTTON");        // Créer un élément <button>
    var t = document.createTextNode("/");       // Créer un noeud textuel
    btn.appendChild(t);                                // Ajouter le texte au bouton
    document.body.appendChild(btn);
     
}

function multiplier(){
    var btn = document.createElement("BUTTON");        // Créer un élément <button>
    var t = document.createTextNode("*");       // Créer un noeud textuel
    btn.appendChild(t);                                // Ajouter le texte au bouton
    document.body.appendChild(btn);
     
}