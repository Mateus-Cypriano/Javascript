//Crie dois arrays, um com mais de 5 elementos e um com menos;
//Crie uma função que verifica o número de elentos;
//Se possuir menos que 5 elementos imprima 'poucos elementos';
//Se possuir mais que 5 elementos imprima 'Muitos elementos'.

let nums = [1, 2, 3, 4, 5, 6, 7];
let letras = ['A', 'B', 'C', 'D'];

function verificaElementos(i) {
    if(i.length >= 5){
        console.log('Muitos elementos');
    } else{
        console.log('Poucos elementos');
    }
}

verificaElementos(nums);
verificaElementos(letras);