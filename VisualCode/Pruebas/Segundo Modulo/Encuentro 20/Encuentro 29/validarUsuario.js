async function getUserFromGithub(username) {
    console.log("empiezo");

    let url = "http://api.github.com/users/" + username;

    const resp = await fetch(url); //POrque fetch es asincronica

    const datos = await resp.json();

    console.log(datos);

    console.log("termino");

    return datos;
}

datos = getUserFromGithub("frenchita");