//Uma das vertentes da prog.Assíncrona é fazer ações que aconteçãm depois d eu mtempo por meio de callbacks;
//Callback é uma função que faz uma ação após algum acontecimento no código; 
// Podemos realizar um callback com a função setTimeout, veja:

console.log('Ainda não chamou o callback');

setTimeout(function() {
    console.log("Chamou o callback");
}, 1000);

console.log("Ainda não chamou o callback");

// -------------------------------- //
console.clear();

console.log("1");

setTimeout(function(){
    console.log("5");
}, 2000) //tempo em milisegundos para executar a função de callback.

console.log("2");
console.log("3");
console.log("4");
