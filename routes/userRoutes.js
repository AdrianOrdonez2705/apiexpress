const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar un usuario mediante ID
router.put('/usuarios/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Borrar un usuario mediante ID
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;