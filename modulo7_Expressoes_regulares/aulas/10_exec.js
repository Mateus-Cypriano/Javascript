// O método exer nos retorna um objeto com algumas informações sobre a regex;
// Se nada for encontrado, retorna null;

let teste = /\d+/.exec("O número 100");

console.log(teste);
console.log(teste.index);

let letras = /\w/.exec("12321 é o número")

console.log(letras);
console.log(letras.index);