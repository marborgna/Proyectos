let promesa1 = new Promise((resolve, reject) => {
    resolve(uno);
});
let promesa2 = new Promise((resolve, reject) => {
    resolve(dos);
});
let promesa3 = new Promise((resolve, reject) => {
    resolve(tres);
});

Promise.all([promesa1, promesa2, promesa3]).then(function(respuesta){
    console.log(respuesta);

}) .catch(function(error) {
    console.log("Error: " + error);
}); 



//Promise.race ---> la primera que termina cancela las demas


let promesa1 = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("uno")}, 500);
});
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("dos")}, 300);
});
let promesa3 = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("tres")}, 1000);
});

Promise.race([promesa1, promesa2, promesa3]).then(function(respuesta){
    console.log(respuesta);    
}).catch(function(error) {
    console.log("Error: " + error);
}); 



// NO ES PROMISE ALL
// Promesas en cadena ---> hace una por una, espera a que termine una para arrancar la sig


promesa1.then(
    function(respuesta){
        console.log(respuesta);
        return promesa2;
}) .then(function(segunda){
    console.log(segunda);
    return promesa3;
}) .then(function(tercera){
    console.log(tercera);
}) .catch(function(error){
    //captura cualquier Error
    console.log("Error: " + error);
});


