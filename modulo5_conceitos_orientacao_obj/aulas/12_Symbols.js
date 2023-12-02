// Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes;
// Podemos utilizar como uma constante, só que para prorpiedade de objeto;

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("au au");
    }
    
}

Cachorro.prototype.raca = 'SRD'

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('labradros', 'Amarelo');

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//acessando symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);