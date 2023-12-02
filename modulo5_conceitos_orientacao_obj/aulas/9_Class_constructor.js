// Com a versão do ES6, uma possibilidade de criar uma classe(Objeto) com o construtor foi adicionada;
// Então não precisamos mais criar por meio de uma função, veja:

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let labrador = new Cachorro('labradros', 4, 'Amarelo');

console.log(labrador);