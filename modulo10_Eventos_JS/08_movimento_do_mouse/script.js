// Podemos ativar eventos com a movimentação do mouse;
// O nome dele é mousemove;
// Através desse evento podemos detectar a posição do ponteiro do mouse na tela;

window.addEventListener("mousemove", function(e) {

    console.log("x= "+ e.x);
    console.log("y= "+ e.y);

});