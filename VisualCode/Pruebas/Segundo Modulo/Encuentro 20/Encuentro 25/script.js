// EJEMPLO GERARDO

let list = document.querySelector('.list');

document.addEventListener('DOMContentLoaded', cargarLista);  // ----> una vez que el doc cargue, hace cargarLista

function cargarLista() {

    let li = document.createElement('li');
    li.textContent = prompt('Agregá la primera tarea: ');
    list.appendChild(li);

    let li2 = document.createElement('li');
    li2.textContent = prompt('Agregá la segunda tarea: ');
    list.appendChild(li2);

    let li3 = document.createElement('li');
    li3.textContent = prompt('Agregá la tercer tarea: ');
    list.appendChild(li3);
}