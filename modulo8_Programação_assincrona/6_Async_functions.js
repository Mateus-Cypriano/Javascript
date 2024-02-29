//Podemos criar funções ass[incronas com a palavra reservadas async;
//Elas retornam uma Promise;
//Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada;

async function somar(a,b) { 
    return a + b;
}

console.log(somar(2,4));

somar(2,4).then(value => console.log(value));