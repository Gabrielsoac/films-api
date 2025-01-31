const express = require('express');
const { getAllFilms, createFilm, deleteFilm, updateFilm } = require('../controllers/FilmController');

const routes = express();

routes.get('/', getAllFilms);

routes.post('/', createFilm);

routes.delete("/:id", deleteFilm);

routes.put("/:id", updateFilm);

module.exports = routes;
