// 2.....
// instalamos npm install, mongoose, dotenv, express, 
// creamos .en .gitignore. models, routes, views
// git init para luego git add....
//1. IMPORTACIONES



const express               = require("express")
const app                   = express()


// const router = express.Router

const conectarDB            = require('./config/db')
// EJECUTAR VARIABLES DE ENTORNO
require('dotenv').config()

// 2. MIDDLEWARES

conectarDB()
//se exportó a db.js


//ESTABLECER HBS COMO MOTOR DE HTML
app.set("view engine", "hbs")


// 3. RUTAS

// app.get("/", () => res.render("index")) // esto si no haré muchas cosas. retorno implícit se llama. es mas elegante
// app.get("/", (req, res) => {
//     res.render("index")
// })  ME LO LLEVO INDEX.ROUTES.JS

//RUTA MOVIES     aqui empieza cloudinares
app.use('/movies', require('./routes/movie.routes'))


//RUTA HOME
app.use('/', require('./routes/index.routes'))   //EL REQUIRE ES PATR´ÓN MODULAR





// 4. SERVIDOR

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`)
})