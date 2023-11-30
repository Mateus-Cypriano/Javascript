//Acidione a propriedade janela no onibus com o valor = 20;
//Delete a propriedade rodas;
//Imprima a propriedade janela no console. 

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

onibus.janelas = 20; 

console.log(onibus)
console.log(onibus.janelas);

delete onibus.rodas;

console.log(onibus.rodas);
console.log(onibus);