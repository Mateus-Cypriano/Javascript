//As promises são ações assíncronas que podem produzir um valor em algum momento do código;
//Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código;
//O objeto das promises é Promise, resolve é o método que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro;

let promessa = Promise.resolve(4 + 8); // cria e resolve uma promessa, guardando para uso futuro

console.log("Algum código"); // Outro pedaço do código que sera executado normal. 

promessa.then((value) => console.log(`A soma é ${value}`)); // retorna o valor da promessa, podendo utilizar da maneira que quisermos. 
