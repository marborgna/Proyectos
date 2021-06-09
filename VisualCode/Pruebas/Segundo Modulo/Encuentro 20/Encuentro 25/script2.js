var cont= 1
var ul = document.getElementById("lista");

/*while (cont <= 5) {
    var li = document.createElement('li');
    var etiqueta = prompt('Ingresá el nombre de tu etiqueta ${cont}')
    ul.appendChild(li).innerHTML = etiqueta
    cont ++
}*/

// 


do {
    var li = document.createElement('li');
    var etiqueta = prompt('Ingresá el nombre de tu etiqueta ${cont}')
    ul.appendChild(li).innerHTML = etiqueta
    cont ++
} while (etiqueta != '0');