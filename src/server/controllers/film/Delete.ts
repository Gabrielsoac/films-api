import { Request, Response } from "express";
import { Film } from "../../../model/FilmModel";

export const deleteFilm = async (request: Request, response: Response) => {

    const film = await Film.findByIdAndDelete(request.params.id);
    response.send(film);
}