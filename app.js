var express = require('express');
var app = express();
var path = require('path')
// respond with "hello world" when a GET request is m to the homepage
ade

let user = [{
    id: 1,
    nome: "Pablo",
    idade: 27,
    peso: 71
},
{
    id: 2,
    nome: "Paula",
    idade: 24,
    peso: 65
}]

app.post("/usuario", (req, res) => {
   res.send(user)
})

app.get('/usuario', function (req, res) {
    res.send(user)
});


app.put("/usuario/:id", (req, res) => {
    res.send(newUser.name = "Joao")
})

app.delete("/usuario/:id", (req, res) => {
    res.send(user)
})

app.listen(8000, () => {
    console.log("Servidor Pronto com Express")
})