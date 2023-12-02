//Crie uma classe conta bancaria;
//Com as propriedades de saldo conta corrente, saldo conta poupança e juros poupança;
//Crie os métodos de depósito e saque, também um método para transferir dinheiro da poupança para a corrente;
//Além disso crie uma conta especial que herda a conta normal;
//Na conta especial os juros são dobrados;

class Conta {
    constructor(saldoCC, saldoCP, jurosP) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosP = jurosP;
    }

    //Criar a lógica do juros ao ano
    jurosAniversario(anosJuros) {
        for(let i = anosJuros; i > 0; i--){
            let juros = 0;
            juros += this.saldoCP * this.jurosP;
            this.saldoCP += juros;
            console.log(juros);
        }
    }

    //Criando métodos de deposito e saque e transferência;
   depositoCC(valor) {
    this.saldoCC += valor;
   }

   depositoCP(valor) {
    this.saldoCP += valor;
   }

   saqueCC(valor) {
    this.saldoCC -= valor;
   }

   saqueCP(valor) {
    this.saldoCP -= valor;
   }

   //Metodo para transferencia da poupança para corrente; O valor que ENTRA na Conta corrente, SAI da poupança!
   transferencia(valor) {
    this.saldoCC += valor;
    this.saldoCP -= valor;
   }   
   
}

//Criando a conta especial 
class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, jurosP) {
        super(saldoCC, saldoCP, jurosP*2)
    }
}


//instanciar a classe 
let conta = new Conta(1000, 2100, 0.2);

console.log(conta);

conta.depositoCC(200);
conta.depositoCP(100);
console.log(conta);

conta.saqueCC(500);
conta.saqueCP(400);
console.log(conta);

conta.transferencia(400);
console.log(conta);

conta.jurosAniversario(2);
console.log(conta);

//Instanciando conta especial 
let conta2 = new ContaEspecial(4000, 5000, 0.2);

console.log(conta2);
conta2.saqueCC(1000);
console.log(conta2);

conta2.jurosAniversario(2);
console.log(conta2)

