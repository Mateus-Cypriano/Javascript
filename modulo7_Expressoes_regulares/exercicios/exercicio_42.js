// Crie uma regex que só aceite strings terminadas com ID;

const validarId = /\d+ID\b/;

console.log(validarId.test("12345ID"));
console.log(validarId.test("28383"));
console.log(validarId.test("asd"));
console.log(validarId.test("ID"));
console.log(validarId.test("testeID"));