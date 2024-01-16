// Depois da definição do padrão por meio da regex;
// Utilizamos o método test() para verfiicar se o padrão é retornado;
// Com isso vamos receber a resposta true or false;

const reg1 = new RegExp('bola');

console.log(reg1.test('tem bola?'));
console.log(reg1.test("não tem"));

const reg2 = /bola/;

let text = 'tem bola na cesta'

console.log(reg2.test('tem bola?'));
console.log(reg2.test('não tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.test('3225255quadrado288829')); //retorna true