const validarData = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarData.test("05/02/2000"));
console.log(validarData.test("5/2/2000"));
console.log(validarData.test("10/10/22"));
