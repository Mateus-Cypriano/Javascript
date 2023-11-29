function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);

console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir.");
    } else {
        console.log("Não pode dirigir.");
    }
}

console.log(podeDirigir(15,false));
console.log(podeDirigir(22, true));
console.log(podeDirigir(51, 0));
console.log(podeDirigir(30, 1));
