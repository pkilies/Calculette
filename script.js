const { table } = require("console");


function buttons(){
    
     // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
    for (var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement("tr");
    var row = document.createElement("tr")
    for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

}};

function ops(){


};


function screen(){
    
};