// Deixa o JavaScript mais rigoroso na hora de se programar;
// Deve ser declarado no topo de arquivos ou funções;
// Colocar o strict ajuda você a codificar de forma correta e não vai impedir/limitar nada no seu software ou programa;
// Veja o exemplo de uma váriavel declarada sem o let/const/var:

"use strict"

let opa = "teste";

// delete Object.prototype;

function teste() {
    "use strict"
    teste = "teste";
}

teste();