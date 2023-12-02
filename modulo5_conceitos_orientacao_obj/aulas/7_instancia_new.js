// No JS podemos instanciar um objeto com new, assim como em outras linguagens;

function Cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log('Auuu');
    }
}

let husky = new Cachorro('Husky', 4, 'cinza');

console.log(husky);
console.log(husky.cor);
husky.uivar();