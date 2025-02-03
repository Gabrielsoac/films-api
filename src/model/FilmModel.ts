import { model, Schema } from 'mongoose';

interface IFilm {
    title: string;
    description: string;
    image_url: string;
    trailer_url: string;
}

const filmSchema = new Schema<IFilm>({

    title: {type: String, require: true},
    description: {type: String,require: true},
    image_url: {type: String,require: true},
    trailer_url: {type: String,require: true}
});

const Film = model<IFilm>('Film', filmSchema); 

export { Film, IFilm };

