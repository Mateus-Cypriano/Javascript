//Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos necessário;
// Para isso utilizamos o método removeEventListener, onde passamos o envento e a função que o evento está escutando;

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
    console.log("clicou em mim");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function() { 
    btn1.removeEventListener("click", msg);
})
