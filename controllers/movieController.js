//13..
const Movie = require('./../models/Movie.model')


/// 8... se creó movieController


exports.createMovie = async (req, res) => {

   

    res.render("movie-views/movie-create")
}




//16...sec crea
exports.processMovie = async (req, res) => {
    const { title, description } = req.body;
    
Movie.create({ 
    title, 
    description, 
    imageUrl: req.file.path })
  .then(peliculaCreada => {
      res.redirect("/movies")
    console.log(peliculaCreada);
  })
  .catch(error => console.log(`Hubo un error creando una película: ${error}`));

  
}

exports.listMovies = async (req, res) => {

    // Movie.find({})
    //     .then(peliculasEncontradas => {
    //         res.render("movie-views/movies-list", {
    //             movies: peliculasEncontradas
    //         })
    //     })
    //     .catch(e => console.log(e))

    //hacerlo con await
    try {

    const peliculasEncontradas = await Movie.find({})
        res.render("movie-views/movies-list", {
            movies: peliculasEncontradas
        })
    } catch (e) {
        console.log(e)
    }


}

//2... ruta de edit ..2.
exports.editMovie = async (req, res) => {
    const {id} =req.params

    Movie.findById(id)
        .then(peliculaPorEditar => {
            res.render("movie-views/movie-edit", peliculaPorEditar)
        })
        .catch((e) => console.log(e))
}

//Se crea una vista movie-edit

//y después de la vista movie-edit se crea el export
exports.updateMovie = async (req, res) => {
    const {id} = req.params
    const { title, description,existingImage } = req.body

    console.log(existingImage)

    let imageUrl
    if(req.file){
        imageUrl = req.file.path
    } else {
        imageUrl = existingImage
    }

    Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true } )
    .then(() => {
        res.redirect("/movies")
    })
    .catch(e => console.log(e))
}