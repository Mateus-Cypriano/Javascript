// O bloco try catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou;
// Muito util para debug;
let a = 1;
let b = 2;

try {
    let c = a + b;
} catch(error) {
    console.log("Aldo deu errado: " + error);
}
