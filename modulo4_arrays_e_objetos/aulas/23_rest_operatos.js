// Uma forma de uma função receber indefinidos parâmetros; 
// O operador rest vai virar um array; 
// O parâmetro é definido por: ...nome
let num = 1;
let num1 = 3;
let num2 = 5;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1);
console.log('pausa'); //separando os prints no console.

imprimirNumeros(num1, num, num2);
console.log('pausa');

imprimirNumeros(num2, num);
console.log('pausa');

imprimirNumeros(3, 6, 7, 8, 10, 1);