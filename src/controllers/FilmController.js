const { Film } = require("../model/FilmModel");


const getAllFilms = async (request, response) => {

    const allFilms = await Film.find();

    response.send(allFilms);
}

const createFilm = async (request, response) => {
    const film = new Film(
        {
            title: request.body.title,
            description: request.body.description,
            image_url: request.body.image_url,
            trailer_url: request.body.trailer_url
        }
    )

    await film.save();
    response.send(film);
}

const deleteFilm = async (request, response) => {

    const film = await Film.findByIdAndDelete(request.params.id);
    response.send(film);
}

const updateFilm = async (request, response) => {
    const film = await Film.findByIdAndUpdate(
        request.params.id, 
        {
            title: request.body.title,
            description: request.body.description,
            image_url: request.body.image_url,
            trailer_url: request.body.trailer_url 
        },
        {
            new: true
        }
    )
    response.send(film)
}

module.exports = {
    getAllFilms,
    createFilm,
    deleteFilm,
    updateFilm
}