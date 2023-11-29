function idadeMinima(idade) {
    if(idade >= 18) {
        console.log("Você tem " + idade + " anos, já pode se matricular na auto escola.");
    } else{
        console.log("Você não tem a idade mínima necessária para se matricular.");
    }
}

console.log(idadeMinima(18));
console.log(idadeMinima(16));
idadeMinima(22);
idadeMinima(17);
