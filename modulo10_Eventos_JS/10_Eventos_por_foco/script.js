//Quando focamos um elemento ou saímos dele, podemos também atrelar um evento nesta ação;
//Focus para quando um elemento recebe o foco e blur para quando ele perde;

let input = document.querySelector("input");

input.addEventListener("focus", function() {
    console.log("entrou no input");
});

input.addEventListener("blur", function() {
    console.log("Saiu do evento");
});