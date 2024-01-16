const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@gmail.com"));
console.log(validarEmail.test("teste@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("teste@gmail.com.br"));
