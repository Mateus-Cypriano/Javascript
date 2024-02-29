let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto replaceChild");
novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiheading = heading.parentNode;

paiheading.replaceChild(novoElemento, heading);