const AppError = require("./utils/AppError")
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const express = require('express');

const routes = require("./routes")

dotenv.config();

const server = express();
server.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

server.use(routes)

server.use(( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
