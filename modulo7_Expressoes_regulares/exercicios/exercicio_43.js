// Crie uma regex que aceite a seguinte expressão: "Marca": "Nome da Marca";
// Onde nome da marca pode variar para Nike, Adidas, Puma e Asics;

const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Puma"));
console.log(validaMarca.test("Adidas"));
console.log(validaMarca.test("Marca: Adidas"));
console.log(validaMarca.test("Marca: Teste"));

