function checarTamanhoTexto(palavra) {
    if(palavra.length > 10) {
        console.log('Texto muito longo');
    } else {
        console.log('Texto dentro dos limites de caracteres')
    }
}


checarTamanhoTexto('definiçoes11');
checarTamanhoTexto('teste');
checarTamanhoTexto('     teste           ');
checarTamanhoTexto('Olá mundo!');
