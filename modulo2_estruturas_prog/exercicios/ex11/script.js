let idade = 21;
let cnh = false;

if(idade >= 18 && cnh == true){
    console.log('Pode dirigir');
} else if(idade >= 18 && cnh == false){
    console.log('Não pode dirigir. Mas pode tirar a CNH.');
} else{
    console.log('Não pode dirigir.')
}