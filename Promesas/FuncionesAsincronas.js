//FUNCIONES ASINCRONAS

//async

//CONVERTIR ASINCRONICA A SINCRONICA

let respuesta = fetch("URL");

async function getUserFromGithub(username){  //async refiere a funcion asincroncia 
    console.log("empiezo");
    let URL="" + username;
    const resp=await fetch(url);  //hasta que esto no termine no pasar a sig linea. Fetch es asincronica, NO bloqueante
    const datos=await resp.json();  //await le dice que "espere" hasta que temrine lo anterior. Json es promesa
    console.log(datos);   //
    console.log("termino");
    return datos;
}