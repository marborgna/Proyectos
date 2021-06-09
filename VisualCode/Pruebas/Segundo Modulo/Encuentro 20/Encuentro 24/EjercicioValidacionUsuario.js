(function run() {
    let usuario = ["Santiago", "Martina", "Valeria", "Claudio", "Alex"];

    let usuarios = prompt("Ingrese su nombre de usuario ");


    let i = 0;
    
    do {
        condicion = (usuario == usuarios[i]) || i > usuarios.length;
        i++;

    }while(!condicion);
    
    if (i < usuarios.length) {
        alert("El usuario existe");
    } else {
        usuarios.push(usuario);
        alert("Bienvenidx al sistema " + usuario);
        console.log(usuarios);        
    }

    

})();

(function run() {
    let usuario = ["Santiago", "Martina", "Valeria", "Claudio", "Alex"];

    let usuarios = prompt("Ingrese su nombre de usuario ");


    let i = 0;
    
    try {
        
        if (typeof(usuario) != string) {
            let error_msg = new Error("No se ingreso un usuario valido");
            throw error_msg;
        }

        /*
        do {
            condicion = (usuario == usuarios[i]) || i > usuarios.length;
            i++;
    
        }while(!condicion);
        */
       let index = usuarios.indexOf(usuario); // ---> es la inversa de lo de arriba

        //if (i < usuarios.length) {
        if (index >= 0) {
            let error_msg = new Error("El usuario ya existe");
            throw error_msg;
        } 

        usuarios.push(usuario);
        alert("Bienvenidx al sistema " + usuario);
        console.log(usuarios);  

    } catch (error){
        console.log(error);
    }
    
})();

