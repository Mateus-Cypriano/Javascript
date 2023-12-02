// Podemos verificar quem é o pai do objeto utilizando o instanceof;

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

// Verificando se o objeto é uma instancia de outro objeto
console.log(new Cachorro instanceof Mamifero);

console.log(coiote instanceof Mamifero);