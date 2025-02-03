import * as createFilm from './Create';
import * as readFilm from './Read'
import * as readAllFilms from './ReadAll'
import * as updateFilm from './Update';
import * as deleteFilm from './Delete';

export const FilmController = {
    ...createFilm,
    ...readFilm,
    ...readAllFilms,
    ...updateFilm,
    ...deleteFilm
}