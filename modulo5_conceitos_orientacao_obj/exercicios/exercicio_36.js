//Crie uma classe que simula uma conta no banco (utilizando a forma que preferir);
//Deve conter a propriedade saldo;
//E os metódos deposito e saque;
class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(500);
console.log(conta.saldo);

//-------------------------------------//

function ContaB (saldo) {
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

let conta1 = new ContaB(1000);

conta1.depositar(500);
console.log(conta1.saldo);