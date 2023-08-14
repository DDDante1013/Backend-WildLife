const express = require("express");
const app = express();
const path =require("path");

const PORT =3000;

app.listen(PORT, () =>console.log("listening on port:", PORT));
app.use(express.static("public"));

// ...RUTAS DE LA PAGINA WEB...

app.get("/home", (req, res) => {
        res.sendFile(path.join(__dirname,"view/INDEX.HTML"))
})

app.get("/INICIO", (req, res) => {
        res.sendFile(path.join(__dirname,"view/INICIO.HTML"))
})

app.get("/REGISTRO", (req, res) => {
        res.sendFile(path.join(__dirname,"view/REGISTRO.HTML"))
})

app.get("/PRODUCTOS", (req, res) => {
        res.sendFile(path.join(__dirname,"view/PRODUCTS.HTML"))
})