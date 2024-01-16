const dia = /\d\d/;

console.log(dia.test("2019") && "2019".lenght == 2);  //Passa true pois tem dois digitos em sua composição. 
//Uma maneira de "driblar" isso é utilizando os métodos nativos do JS para afunilar o que realmente desejo na busca;

console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);


const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test("test"));
console.log(palavraTresLetras.test("asdd")); // Também vai ser validado pelo mesmo motivo do exemplo acima;
console.log(palavraTresLetras.test("as"));