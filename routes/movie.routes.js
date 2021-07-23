// /// 7.... segundo paso de cloudinarys


// // 1. IMPORTACIONES       lo mismo que index.routes
// const express         =  require('express')
// const router           = express.Router()

// const movieController  = require('./../controllers/movieController')
// ///15.. luego este
// const fileUploader      = require('./../config/cloudinary.config')


// // 2. RUTEO....14..se pone un fileUploader
// router.get("/create", fileUploader.single('movie-cover-single'), movieController.createMovie)
// router.get("/create", fileUploader.single('movie-cover-single'), movieController.createMovie)



// //3.EXPORTACIONES
// module.exports = router

// //nos vamos a hacer el ruteo de las películas. movies.route.. pero primero a controller

// movie.routes.js
// 1. IMPORTACIONES
const express           = require('express')
const router            = express.Router()
const movieController   = require('./../controllers/movieController')
const fileUploader      = require('./../config/cloudinary.config')
// 2. RUTEO
router.get('/', movieController.listMovies)

router.get("/create", movieController.createMovie)
router.post('/create', fileUploader.single('movie-cover-image'), movieController.processMovie)


//CREAR RUTA DE EDIT..1...
router.get("/:id/edit", movieController.editMovie)
router.post("/:id/edit", fileUploader.single('movie-cover-image'), movieController.updateMovie)

//nos vamos a movieControl


// 3. EXPORTACIONES
module.exports = router