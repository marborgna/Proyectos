let promesa = new Promise(function (resolve, reject) {
    if(true){
        resolve('La promesa finalizó correctamente'); //esta resuelta
    }else{
        reject('Ha ocurrido un error'); //es rechazada
    }
});

promesa
    .then(function (response){
        console.log("Respuesta: " + response)
    })
    .catch(function (error){
        console.log("Error: " + error)
    })



