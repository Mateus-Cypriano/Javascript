// Crie uma regex que valide um nome de usuario no sistema;
// aceita letras de a-z, _ e -, numeros de 0-9 minimo 3 caracteres e maximo 16;

const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("mateus_132"));

console.log(validarNomeUsuario.test("as"));
console.log(validarNomeUsuario.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(validarNomeUsuario.test("~~~"));