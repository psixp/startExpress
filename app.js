var express = require('express');
var app = express();
var path = require('path')
// respond with "hello world" when a GET request is m to the homepage

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

app.post("/usuario/", (req, res) => {
   res.send("sou o post")
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
});


app.put("/usuario/", (req, res) => {
    res.send("sou o put")
})

app.delete("/usuario/", (req, res) => {
    res.send("sou o delete")
})

const port = 8000
app.listen(port, () => {
    console.log("Servidor Pronto com Express")
})