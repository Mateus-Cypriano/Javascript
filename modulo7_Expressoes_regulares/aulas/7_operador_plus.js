// Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez;

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("123"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test(" "));
