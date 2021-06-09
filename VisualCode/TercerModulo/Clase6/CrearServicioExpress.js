const express = require('express');
const body_parser = require('body-parser');
const cors = require("cors");
​
const PORT = process.env.PORT || 3000;
const app = express();
​
app.use(cors());
//middlewear que hace que todo lo que venga del cuerpo convertirlo en json
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
​

//MIDDLEWEARS GLOBALES-- > funciones //lo va a ejecutar SIEMPRE 
//antes de cualquier operacion
function print_hello_before(req, res, next) {
    console.log(req.method);
    console.log("hello");
    res.status(400).send("I'm sorry");
}

app.use(print_hello_before)

function print_goodbye_before(req, res, next) {
    console.log("goobye");
    res.status(400).send("goodbye");
    next(); //salta al proximo middlewear
}

app.use(print_goodbye_before)



app.get('/', (req, res) => {
    res.send("Hello world!");
});
​
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});


//Que de un json
app.get('/', (req, res) => {
    res.send("Hello world!");
    res.send({
        msg: "<b>Holis mundito</b>",
        code: 45,
    })
    res.json({
        msg: "Hola",
        xx: "334",
    })
    res.end();  //le aplica un content-length: 0 --> respuesta vacia

    //Devolver status code
    res.status(201).send("<b>Un HTML</b>");
});


​//ENVIAR PARAMETROS A MI SERVICIO --> qué aparece en la barra del servidor
// GET /query?name=acamica&
app.get('/query', (req, res) => {
    let name = req.query.name;
    let filter_id= req.query.filter_id || 45;
    res.send(200).send({
        name: name,
        filter_id: filter_id
    });
});

//GET /item/12
app.get('/item/:id', (req, res) => {
    let name = req.params.id;
    let filter_id= req.query.filter_id || 45;
    res.send(200).send({
        id: id
    });
});



//MIDDLEWEAR PARTICULARES/DE SERVICIO/ DE RUTA
function item_middlewear (req, res, next) {
    console.log("Item middlewear");
    next();
}

app.get('item/:id', item_middlewear, (req, res) => {
    let id= req.params.id;
    res.status(200).send({
        id:id
    })
}) 