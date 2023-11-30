// Podemos converter o JSON para uma string; 
// Assim como podemos converter uma string para um JSON; 

let pessoa = {
    "nome": "Mateus",
    "idade": 26,
    "profissao": "CPD",
    "hobbies": ["Video game"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

