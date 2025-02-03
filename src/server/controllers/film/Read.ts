import { Request, Response } from "express"
import { Film } from "../../../model/FilmModel"
import { StatusCodes } from "http-status-codes";

export const readFilm = async (req: Request, res: Response) => {
    

    try {
        const data = await Film.findById(req.params.id);

        if(data === null){
            throw new Error("Filme não encontrado");
        }
    
        res.status(StatusCodes.OK).json(data);
    } catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(
            {
                message: "Erro ao buscar filme",
                error: (error as Error).message,
            }
        )
    }
};
