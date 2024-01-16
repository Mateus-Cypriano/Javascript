// Crie uma regex que valide um endereço IP 
const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("10.14.0.1"));
console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("8.8.8.8"));

console.log(validaIP.test("1973.11000.0000.1555"));
console.log(validaIP.test("asfasdf"));
console.log(validaIP.test("10"));