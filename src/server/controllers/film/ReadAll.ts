import { Request, Response } from "express";
import { Film } from "../../../model/FilmModel";

export const readAllFilms = async (request: Request, response: Response) => {

    const allFilms = await Film.find();

    response.send(allFilms);
}