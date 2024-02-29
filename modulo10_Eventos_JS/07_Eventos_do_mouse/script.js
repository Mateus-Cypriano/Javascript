//No mouse podemos também ter eventos como mousedown e mouseup, semelhantes aos das teclas;
//Dbclick para ativar com dois cliques;

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", function() {
    console.log("Apertou o botão");
})

btn1.addEventListener("mouseup", function() {
    console.log("Soltou o botão");
});

btn2.addEventListener("dblclick", function(){
    console.log("clicou duas vezes");
});

//utilizando o botão direito
//utilizamos o preventDefault para impedir que o menu padrão que se abre ao clicar com botão direito seja aberto.
//E enfim mudamos o evento.
btn2.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    console.log("Botão direito");
});