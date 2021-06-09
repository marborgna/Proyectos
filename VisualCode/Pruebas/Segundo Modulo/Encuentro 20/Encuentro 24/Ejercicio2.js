(function run() {
let usuarios = [
    {nombre:"Santiago", apellido:"Fontanarrosa", mail:"sfontanarosa_@gmaio.com", apodo:"fonti", pwd:"1245", active: true},
    {nombre:"Santiago2", apellido:"jhontanarrosa", mail:"sfontanarosa_@gmaio.com", apodo:"fonti", pwd:"1245", active: false},
    {nombre:"Santiago3", apellido:"jontanarrosa", mail:"sfontanarosa_@gmaio.com", apodo:"fonti", pwd:"1245", active: true},
    {nombre:"Santiago4", apellido:"sontanarrosa", mail:"sfontanarosa_@gmaio.com", apodo:"fonti", pwd:"1245", active: false},
    ];

    let username = prompt("Ingrese username: ");
    let pwd = prompt("Ingrese contraseña: ");

    for(let i=0; i < usuarios.length; i++) {
        let currentUser = usuarios[i];

        if (currentUser.usuario === username && currentUser.pwd === pwd && currentUser.active) {
            break;
        }
    }

})();