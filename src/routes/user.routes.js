const express = require('express');
const Usuario = require('../models/user');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).send(usuario);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.send(usuario);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        res.send(usuario);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error); 
        res.status(500).send({ error: error.message });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        res.send(usuario);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        res.send(usuario);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
