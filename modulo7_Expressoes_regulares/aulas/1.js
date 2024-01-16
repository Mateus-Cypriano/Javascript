let num = [2, 7, 11, 15];
let alvo = 9;

let twoSum = function(num, alvo) {
    for(let i = 0; i < num.length; i++) {
        for(let j = i + 1; j < num.length; j++) {
            if(num[i] + num[j] == alvo) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum(num, alvo));