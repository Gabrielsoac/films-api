const express = require('express');
const { default: mongoose } = require('mongoose');
const routes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(routes);

const port = process.env.PORT;

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@starwars-api.ub49l.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api`);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});