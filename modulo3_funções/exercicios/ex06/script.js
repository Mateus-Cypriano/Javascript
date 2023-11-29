function verificarDados(dados) {
    if(typeof dados === 'string'){
        console.log('Esse dado é uma string!');
    } else if(typeof dados === 'number'){
        console.log('Esse dado é um number!');
    } else if (typeof dados === 'boolean'){
        console.log('Esse dado é um boolean!');
    }
    
}

verificarDados(22);
verificarDados(true);
verificarDados('mateus');