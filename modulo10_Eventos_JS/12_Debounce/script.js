// Um evento que dispara múltiplas vezes pode ser um problema para o computador do cliente;
// por isso podemos fazer um debounce, que é um suavizador de evento, para não chamar o evento tantas vezes;

let timeout;

window.addEventListener("mousemove", function(e) {
    this.clearTimeout(timeout);
    timeout = this.setTimeout(function() {
        console.log(e.x);
    }, 500);
    
});