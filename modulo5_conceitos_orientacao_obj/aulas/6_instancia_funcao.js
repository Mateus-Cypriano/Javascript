// Construtores são formas de instanciar uma classe em uma linguagem de programação;
// Instanciar = Criar um objeto novo;
// No construtor já podemos definir propriedades;

function criaCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preto');

console.log(doberman);

console.log(doberman.cor);