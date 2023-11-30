//Conjuntos de dados parecidos com arrays. Possuem um conjunto de par de 'chave' e 'valor' utilizamos as chaves {}

const cachorro = {
    patas: 4, 
    nome: 'Shark',
    latir: function() {   //metodo criado.
        console.log('au au');
    }
}

console.log(cachorro);
console.log(cachorro.nome);
console.log(cachorro.patas);
cachorro.latir();

let pessoa = {
    nome: 'Mateus',
    idade: 27,
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.nome.toLocaleUpperCase());