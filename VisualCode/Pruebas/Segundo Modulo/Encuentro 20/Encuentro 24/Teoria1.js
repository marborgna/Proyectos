//BURBUJAS QUE SE PASAN INFORMACION

var firstName;
var lastName;

function mostrarNombres() {
    let nombres = firstName + " " + lastName;
    console.log(nombres); 
}

function pedirDatosUsuario() {
    firstName = prompt("Ingrese su primer nombre ");
    lastName = prompt("Ingrese su apellido ");
}

pedirDatosUsuario();
mostrarNombres();