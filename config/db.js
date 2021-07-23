///3.... se hizo primero en index.JS en // 2.middlewares
// PATRÓN DE DISEÑO - BAJO EL PARADIGMA DE PROGRAMACIÓN FUNCIONA

const mongoose = require("mongoose")
require("dotenv").config()


//MIDDLEWARE
const conectarDB = async () => {   //se establece aquí
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
    } catch (e) {

    }
}

// EXPORTACIÓN
module.exports = conectarDB    ///se conecta aquí