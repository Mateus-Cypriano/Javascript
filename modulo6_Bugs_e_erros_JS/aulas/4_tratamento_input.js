// Não podemos controlar os dados que o usuário envia, então par o bom funcionamento do software, devemos tratar eles;

function checarNumero (numero) {
    let resultado = Number(numero);
    if(Number.isNaN(resultado)) {
        console.log("Por favor, passe só números para o programa");
    } else {
        return resultado;
    }
} 

console.log(checarNumero(5));
console.log(checarNumero('teste'));

