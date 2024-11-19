const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const server = express();
server.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

server.use('/usuario', require('./rotas/usuarioRota'));
server.use('/produto', require('./rotas/produtoRota'));

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
