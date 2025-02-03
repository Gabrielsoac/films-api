import { Request, Response } from "express"
import { Film } from "../../../model/FilmModel";

export const updateFilm = async (request: Request, response: Response) => {
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