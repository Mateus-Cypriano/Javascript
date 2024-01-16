// Podemos colocar uma instrução na regex que funciona como um || (or) das condicionais;

const reg = /\w: (Mateus|João|Maria)/; // Nome: nasdissfadiu

console.log(reg.test("Nome: Mateus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
