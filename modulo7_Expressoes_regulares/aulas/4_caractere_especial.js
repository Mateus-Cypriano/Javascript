// \d - Qualquer digito de caractere
// \w - um caractere alfanumerico ("teste")
// \s - Qualquer caractere de espaco em branco
// \D - Caracteres que nao sao digitos
// \W - Caractere nao alfanumerico
// \S - Caractere que nao seja espaco em branco
// . - Qualquer caractere, menos nova linha;

const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));

const dRegex = /\d/;  // [0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const dRegex2 = /\D/;  //[^0-9]

console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const sRegex = /\s/;

console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

const wRegex = /\w/;

console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));