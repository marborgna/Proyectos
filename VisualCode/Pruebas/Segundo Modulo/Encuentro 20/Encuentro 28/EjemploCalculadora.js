let suma = (n1, n2) => n1 + n2;
let resta = (n1, n2) => n1 - n2;
let mult = (n1, n2) => n1 * n2;
let div = (n1, n2) => n1 / n2;

let calculadora = function(n1, n2, callback){
    return callback(n1, n2);
}

console.log(calculadora(7, 7, mult));
console.log(calculadora(3, 1, div));
console.log(calculadora(1, 1, suma));