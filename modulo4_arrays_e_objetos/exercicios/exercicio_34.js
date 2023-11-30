//Crie um array a partir de uma frase.
//Imprima cada palavra do array através de um método for.

const frase = "Ser um bom programador requer muita prática.";

const arrFrase = frase.split(" ");

for(let i = 0; i < arrFrase.length; i++) {
    console.log(arrFrase[i]);
}
