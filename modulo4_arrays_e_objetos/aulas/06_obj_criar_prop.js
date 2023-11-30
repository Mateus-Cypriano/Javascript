let pessoa = {
    nome: 'Mateus',
    idade: 39,
    profissao: 'Programador',
}

console.log(pessoa)
console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa);
console.log(pessoa.casado);