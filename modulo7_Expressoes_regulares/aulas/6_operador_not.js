// Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not;
// Lembrando que combinações serão aceitas, o negado é apenas se bate com o set;
// Mais adiante aprenderemos a negar de outras formas;

const notAB = /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("Aqui tem a"));

const notAz = /[^a-z]/;

console.log(notAz.test("123 as"));
console.log(notAz.test("asdg"));