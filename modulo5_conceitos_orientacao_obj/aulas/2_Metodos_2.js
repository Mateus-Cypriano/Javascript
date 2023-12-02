// --- MAIS SOBRE METODOS --- //
// Normalmente os métodos interagem com os objetos;
// Até mudando os valores das suas propriedades para corresponder a lógica do programa.

let cachorro = {
    latir: function() {
        console.log('Au Au');
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca);
console.log(cachorro.getRaca());