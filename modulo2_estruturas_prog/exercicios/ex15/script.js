let x = prompt('Digite um número: ');
divisoes = 0;

for(let i = 1; i <= x; i++){
    if(x % i == 0){
        divisoes++;
    }
}
console.log(divisoes);

if(divisoes == 2){
    console.log(`O número ${x} é primo.`)

} else{
    console.log(`O número ${x} não é primo.`)
}

