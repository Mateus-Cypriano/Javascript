//Além do rsolve, há o método reject;
//Que é quando determinada lógica não satifaz nosso programa, então podemos ir paroutra com o reject, em vez do resolve;
//Resolve e reject teminam a Promise, ou seja, não podemos chamar mais o then, por exemplo. 

function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log(`O número é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    });

};

verificarNumero(1);
verificarNumero(2);
