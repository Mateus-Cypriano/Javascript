// Para selecionar diversos elementos com query, podemos utilizar o método querySelectorAll;
// Em vez de um, podemos pegar todos os elementos semelhantes com o seletor do CSS;

let itens = document.querySelectorAll('.itens-Vermelhos');

console.log(itens);

let itens2 = document.querySelectorAll('.itens-Azuis');

console.log(itens2);

console.log(itens2[1].style.color = 'red');