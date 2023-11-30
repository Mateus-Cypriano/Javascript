//Crie um objeto calculadora 
//O objeto possui os seguintes metodos: soma, subtração, divisão e multiplicação;
//Os metodos so devem aceitar dois parametros;
//utilize cada um dos métodos e imprima os valores no console.

const calculadora = {
    soma: function(a, b){
        return a + b;
    },

    subtrair: function(a, b){
        return a - b;
    },

    multiplicar: function(a, b){
        return a * b;
    }, 

    dividir: function(a, b){
        return a / b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(5,5));
console.log(calculadora.multiplicar(2,5));
console.log(calculadora.soma(5,2));