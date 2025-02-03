/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Film, IFilm } from "../../../model/FilmModel";

export const createFilm = async (req: Request<{}, {}, IFilm>, res: Response) => {
    const film = new Film ( 
        {
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url,
            trailer_url: req.body.trailer_url
        }
    );

    await film.save();
    res.status(StatusCodes.CREATED).json(film);
}