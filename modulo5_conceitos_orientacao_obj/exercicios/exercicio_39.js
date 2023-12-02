// Crie uma classe que simule um carro;
// Prorpiedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumentar a gasolina quando necessário;

//Classe com letra maiuscula!!
class Carro{
    constructor(marca, cor, gasRestante){
        this.marca = marca;
        this.cor = cor;
        this.gasRestante = gasRestante;
    }

    dirigir(kmRodado) {
            for(let i = kmRodado; i > 0; i--){  //Professor resolveu criando mais um método de consumo, fazendo a divisão de km rodado pelo consumo médio pré definido. 
                this.gasRestante -= 0.5;
                // console.log(this.gasRestante); 
            }
            if(this.gasRestante <= 3){
                console.log(this.gasRestante);
                console.log("Gasolina baixa, por favor, abastecer!");
            }
        }
    
    set abastecer (gasolina) {
        this.gasRestante = gasolina;
        console.log("Você abasteceu " + gasolina +"L de gasolina.")
    }
    }


// Instanciando Objeto.

let carro = new Carro('VW', 'Prata', 10);

console.log(carro);
carro.dirigir(17)
console.log(carro)
carro.abastecer = 15;
console.log(carro);

//Cada 2 KM rodado -> 1L de gasolina