// Crie uma regex  que só aceite letras maiusculas;
// Depois teste;

const validarMaiscula = /[A-Z]/;

console.log(validarMaiscula.test("teste"));
console.log(validarMaiscula.test("123"));
console.log(validarMaiscula.test("TESTE"));
