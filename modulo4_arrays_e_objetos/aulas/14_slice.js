let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5)); // Quando definido o ultimo indice, ele para um indice antes do indicado. 
console.log(nums.slice(4,6)); 

console.log(nums.slice(2)); 

console.log(nums.slice(-2)); // Podemos pegar os ultimos indices utilizando numeros negativos. 

console.log(nums.slice(3, -2)); // Começa do terceiro indice e ignora os ultimos dois indices. 