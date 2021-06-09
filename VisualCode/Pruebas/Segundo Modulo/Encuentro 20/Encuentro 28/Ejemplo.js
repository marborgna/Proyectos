//FUNCION INLINE

//Ex: --> arrow

let suma = (n1, n2) => n1+n2;
let resta = (n1, n2) => n1-n2;

let calculadora = function(n1, n2, callback){
    return callback(n1, n2)
}

console.log(calculadora(7, 5, function(n1, n2) { return n1*n2}))