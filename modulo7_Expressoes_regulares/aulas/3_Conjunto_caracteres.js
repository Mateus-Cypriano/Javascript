// Podemos definir um conjunto de caracteres para encontrar por regex;
// Basta por entre [];
// Com um traço podemos definir um intervalo também;

console.log(/[123]/.test("Existe 123 aqui?"));
console.log(/[0-9]/.test("O número 8 está presente aqui?"));

// ------------------------------------------------------ //

const reg1 = /[12345]/;

console.log(reg1.test("Temos o número 6?"));
console.log(reg1.test("Temos o número 3"));

const reg2 = /[0-9]/;

console.log(reg2.test("temos o número 3"));
// utilizando essa maneira, a expressão entende que qualquer número que contenha os caracteres entre 0 a 9 vai dar true;
// Podemos utilizar isso para verificar se uma sentença contém números.
console.log(reg2.test("temos o número 155")); 