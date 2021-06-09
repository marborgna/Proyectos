let product = [
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
    {
        nombre: "Nombre1",
        Descripcion: "fasdfasdfsdadad",
        precios: "10000",
    },
]

function addProduct(product, callback) {
    datosCarrito.push(product);
    callback(product);
}


var datosCarrito = [];

var item = document.getElementsByClassName("item");
for (let index=0; index < item.length; index++) {
    let h2=document.createElement("h2");
    let p = document.createElement("p");
    let p2= document.createElement("p");
    let burron = document.createElement("button");
    item[index].appendChild(h2).innerHTML = productos[index].nombre;
    item[index].appendChild(p).innerHTML = productos[index].Descripcion;
    item[index].appendChild(p2).innerHTML = productos[index].precios;
    item[index].appendChild(button).innerHTML = productos[index].precios;
    item[index].id = index;
}

var button = document.getElementsByTagName("button");
var grid = document.querySelector(".grid-items");

var carrito = document
    .getElementsById("crearLista")
    .addEventListener("click", crearLista)


for (let index = 0; index < burron.length; index++) {
    button[index].addEventListener("click", agregarCarrito);
}

// button[0].addEventListener("click", agregarCarrito)

function agregarCarrito(event) {
    let datos = event.target.parentNode.id;
    producto = productos[parseInt(datos)];
    addProduct(producto, miCallback)

    //datosCarrito.push(productos);
    //myCallback(producto)
    
    //datosCarrito.push(productos[parseInt(datos)]);
    //window.alert("Gracias por comprar el producto " + datos.nombre);
}



function crearLista(params) {
    var ol = document.querySelector(".carrito");
    for (let index = 0; index < datosCarrito.length; index++){
        var li1 = document.createElement("li");
        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        ol.appendChild(li1).innerHTML = datosCarrito[index].nombre;
        ol.appendChild(li2).innerHTML = datosCarrito[index].Descripcion;
        ol.appendChild(li3).innerHTML = datosCarrito[index].precios;
        grid.classList.toggle("displayNone");
        ol.classList.toggle("displayNone");
    }
}

//mostrar alert en pantalla
function miCallback(producto) {
    alert(producto.nombre);
}

// mostrar alert por consola y no por pantalla
//function miCallback(producto) {
//    console.log(producto.nombre);
//}