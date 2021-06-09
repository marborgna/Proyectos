let hobbies = [
    "Bailar",
    "Cantar",
    "Actuar",
    "Ser feliz"
]

//hobbies.forEach((hobbies) =>{
//    console.log(hobbies);
//})

// VARIABLE ForEach

hobbies.forEach((hobbies, idx, arr) =>{
    console.log("Name: ${hobbies}, index: ${idx}, Arr: ${arr}");
    arr[idx]= hobbies + " Acámica" + String(idx);
})

console.log(hobbies);

const fs= required("fxxxx");