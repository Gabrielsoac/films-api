import { app } from './server/Server';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

const USER_DB = process.env.USER_DB;
const PASSWORD_DB = process.env.PASSWORD_DB;

const uri: string = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@film-api.ub49l.mongodb.net/?retryWrites=true&w=majority&appName=film-api`;

app.listen(PORT, async () => {

    await mongoose.connect(uri).then(() => {
        console.log(`Moongose Connected, USER: ${USER_DB} , PASSWORD: ${PASSWORD_DB}`);
    }).catch(() => {
        throw new Error("Erro ao conectar no DB");
    });
    console.log(`APP RODANDO NA PORTA ${PORT}`);
});



