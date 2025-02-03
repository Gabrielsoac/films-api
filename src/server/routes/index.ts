import { Router } from "express";
import { FilmController } from "../controllers";

const routes = Router();

routes.get('/film/:id', FilmController.readFilm)

routes.get('/film', FilmController.readAllFilms);

routes.post('/film', FilmController.createFilm);

routes.delete("/film/:id", FilmController.deleteFilm);

routes.put("/film/:id", FilmController.updateFilm);

export { routes };