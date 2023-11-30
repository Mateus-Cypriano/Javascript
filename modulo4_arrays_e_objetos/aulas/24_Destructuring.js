// Podemos definir variaveis com propriedades do objeto com uma notação diferente, chamada destructuring; 

//definimos as propriedades do objeto.
let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0"
}

// Aqui atribuimos as propriedades às variaveis desejadas e depois igualamos ao objeto, assim atribuindo o valor.
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vPortas);
console.log(vMotor);