// Uma classe pode herdar propriedades de outra classe por herança;
// Para isso utilizamos a palavra reservada 'extends';

class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }
}

let pug = new Cachorro(4, 'Pug');
console.log(pug.patas);