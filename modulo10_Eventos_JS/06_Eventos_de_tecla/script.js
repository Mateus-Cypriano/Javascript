//Sempre que uma tecla é pressionada, são gerados dois eventos: keyup e keydown;
//Podemos realizar ações nestes eventos também;~
//Keyup é quando soltamos a tecla;
//Keydown é quando apertamos;

window.addEventListener("keydown", function(e){

    if(e.key == "q") {
        console.log("apertou a tecla q");
    } else if(e.key == "Enter"){
        console.log("Apertou enter");
    }

});

//Talvez seja melhor usar o Keyup, pois assim o evento só é executado quando a tecla é solta, uma única vez.
//Com o keydown, emperrar a tecla, faria com que o evento acontecesse infinitamente.

window.addEventListener("keyup", function(e){

    if(e.key == "Enter") {
        console.log("soltou o enter");
    }

});