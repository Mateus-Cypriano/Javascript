// Podemos atrelar evento ao scroll da tela também, pelo evento scroll;
// Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x;

window.addEventListener("scroll", function(e) {
    if(window.pageYOffset > 1000) {
        console.log("Ativou");
    }
});