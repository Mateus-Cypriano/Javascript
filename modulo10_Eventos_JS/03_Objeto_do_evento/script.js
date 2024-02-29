//Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamado de objeto do evento;
//Ele contém propriedades que podem ser utilizadas a nosso favor;
//O objeto é criado pelo JS automaticamente.


let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(e) {
    console.log(e);
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function(event) {
    console.log(event);
});