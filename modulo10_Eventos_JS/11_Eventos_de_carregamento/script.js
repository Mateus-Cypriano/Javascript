// Podemos atrelar um evento quando a página carrega, pelo evento load;
// E antesdo usuário fechar a página pelo evento beforeunload;

window.addEventListener("load", function(){
    this.alert("Assine os nossos termos de uso");
});

window.addEventListener("beforeunload", function(e) {
    e.returnValue = null;
});