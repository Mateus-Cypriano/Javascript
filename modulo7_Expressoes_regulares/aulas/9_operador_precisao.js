const cep = /\d{5}- \d{3}/;

console.log(cep.test("8817-500"));
console.log(cep.test("sas"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-000"));

