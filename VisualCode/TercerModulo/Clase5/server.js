const express = require("express"); //install with npm i express
const fs = require("fs");
const bodyParser = require("body-parser"); //install body whith nnpm i body-parser

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

let database = [];

//CREAR API
app.listen(5000, () => {
    console.log("Server started to listen in port 5000");
});

//CREAR OPERACION GET EN EXPRESS
app.get("/", (req, res) => {   //recibe path y un callback(req y res)
    //Return HTML content
    len content = fs.readFileSync("acamica.html");
    //res.send("<b>Hello Word</b>");
    //res.send(content);
    //res.sendFile("*ruta del archivo html*");

    //RETURN JSON
    res.json({
        msg: "Hello Acamica",
        items: [
            {
                name: "TV"
            },
            {
                name: "DVD"
            }
        ]
    });
});

//----------------------------------------------


let p1= new Promise((resolve, reject) => {
    resolve("The promise was resolved");
});
let 2 = new Promise ((resolve, reject) => {
    return resolve("The promise was resolved");
});

//SON IGUALES PORQUE resolve() funciona como un return(). El return es redundante e 
//inhabilita todo lo que venga despues
//------------------

function f() {
    console.log("F1");
    return;
    console.log("F2")
}

f(); 

//-----------------

const btn = document.getElementById("#action-btn");

btn.addEventListener("click", evt => {
    btn.style.backgroundColor = "#FF0000";
    p1.then(response => btn.value = response);
});}
//SON IGUALES
brn.addEventListener("click", async evt => {
    btn.style.backgroundCOlor = "#FF0000";
    btn.value = await p1; 
})



//------------------------------

app.store("/new", (req, res) => {
    console.log(req);

    res.json({
        "msg": "Received"
        "value": req.body
    })
})


//para hacer un servicio completo de requiset tengo que instalar body.parse

app.post("/different", (req, res) => {
    console.log(req);

    database.push(req.body);

    res.status(203).json({
        "msg": "Received and return status code 203",
        "value": req.body
    })
})

app.store("/new", (req, res) => {
    console.log(req);

    //nothing
    res.status(201).json({
        "msg": "I have created the resource"
        "value": req.body
    })
})

//actualizar registro
app.put("/update", (req, res) => {
    let i;
    for(i=0; i < database.length; i++) {
        if (database[i].name == req.body.name) {
            database[i].course )) req.body.coourse;
        }
    }

    return res.status(205).json({
        "msg": "I have uptdated the resource"
        "value": database
    })
});

app.delete("/delete", (req, res) => {
    let i;
    for(i=0; i < database.length; i++) {
        if (database[i].name == req.body.name) {
            database= database.slice(i + 1);
        }
    }

    return res.status(205).json({
        "msg": "I have uptdated the resource"
        "value": database
    })
})

