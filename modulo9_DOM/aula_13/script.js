// Com o JS também é possível verificar as propriedes do elemento, como altura e largura, veja;

let elemento = document.querySelector('#titulo-principal');

console.log('altura ' + elemento.offsetWidth); //considera as bordas
console.log('largura ' + elemento.offsetHeight);

console.log('altura ' + elemento.clientWidth); //não considera bordas

console.log('largura ' + elemento.clientHeight);