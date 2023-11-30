//Um objeto pode herdar as caracteriscas de outro, virando uma referência do mesmo;

let pessoa = {
    nome: 'Mateus'
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = 'Pedro';

console.log(pessoa.nome); //Quando alterado um objeto o outro também é modificado devido a herança. 

//Se criado um outro objeto identico o mesmo não vai ser igual. 

let pessoa3 = {
    nome:'Pedro'
}

console.log(pessoa3 == pessoa);
console.log(pessoa3);
console.log(pessoa);
