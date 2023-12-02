//Crie um objeto que simula um endereço de cliente;
//Propriedades: Rua, Bairro, Cidade e Estado;
//No construtor o endereço já deve ser definido por completo; 
//Crie métodos para atualizar as propriedade;

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    // Também pode ser criado com os setters
    alteraEndereco(nRua, nBairro, nCidade, nEstado) {     
        this.rua = nRua;
        this.bairro = nBairro;
        this.cidade = nCidade;
        this.estado = nEstado;

    }
}

let end_cliente = new Endereco('São Salvador', 'Santa Terezinha', 'Três Rios', 'RJ');

console.log(end_cliente);
end_cliente.alteraEndereco('Est.Uniao Industria', 'Boa Uniao', 'Três Rios', 'RJ');

console.log(end_cliente);

// ---- utilizando setters ---- //

class Endereco1{
    constructor(rua1, bairro1, cidade1, estado1){
        this.rua = rua1;
        this.bairro = bairro1;
        this.cidade = cidade1;
        this.estado = estado1;
    }

    // Utilizando o método set para alterar somente um endereço. Também é possivel da primeira maneira;
    

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

//Instanciando objeto
let endereco = new Endereco1('Rua São Salvador', 'Santa Terezinha', 'Três Rios', 'RJ');

console.log(endereco);
endereco.novaRua='Rua Amazonas';
console.log(endereco);

