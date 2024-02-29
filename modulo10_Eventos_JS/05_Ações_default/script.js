//Muitos elementos/teclas já tem ações pré-definidas, como clicar num link nos leva para outra pagina;
//Podemos mudar este evento default, e criar uma lógica diferente para o elemento em questão;

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p");
let a = document.querySelector("a");

function msg(e) {
    console.log("clicou no button");
    e.stopPropagation();
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
});

p.addEventListener("click", function(){
    console.log("clicou no pararafo")
})

a.addEventListener("click", function(e){
    e.preventDefault();

    console.log("não vai mudar de página.")
})