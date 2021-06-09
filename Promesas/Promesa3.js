//Promise.RACE   ---> la primer promesa que termine cancela las demas

let promesa1= new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("uno")}, 500);
});
let promesa2 = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("dos")}, 300);
});
let promesa3 = new Promise((resolve, reject) => {
    setTimeout(function(){ resolve("uno")}, 1000);
});


//FALTA