//FUNCION SORT--> nos permite ordenar valores de array
//No puedo especificar el criterio en el cual ordena los elementos del array

//Ex:
let eggsInNest = new Array(10).fill(null);

eggsInNest = eggsInNest.map(() => (Math.floor(Math.random() * 200) +1));

console.log(eggsInNest);

let sortedArrayDefault = eggsInNest.sort();

console.log(sortedArrayDefault);

let sortedArrayCallback = eggsInNest.sort(sortEggsInNest);

console.log(sortedArrayCallback);


//SORT Function / define orden de array
function sortEffsInNest(a, b) {
    if (a > b){
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

//sort por dentro
function sort(array,callback) {
    while(array != "ordenado") {
        //1. tomar 2 elementos del array
        //2.compararlos a ver cual va primero ---> callback(elemento1, elemento2);
        //3. ponerlos en lugar correcto
        //4. volver a emepezar
    }
}
