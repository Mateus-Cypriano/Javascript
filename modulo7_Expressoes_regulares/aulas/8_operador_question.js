// faz com que o digito antes da interrogação seja opcional. 

const padrao = /abacax?i/;

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));

