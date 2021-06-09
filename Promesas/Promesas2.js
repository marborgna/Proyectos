//PROMISE.ALL cuando todas las promesas se han cumplido, si una sola es rechaza, promise.all es rechazada

let promesa1 = 


Promise.all([promesa1, promesa2, promesa3]).then(function(respuesta){ //llama a then cuando todas son True
    console.log(respuesta);
}).catch(function(error){
    console.log("error " + error)
});