const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Crear una nueva pelicula
router.post('/movies', async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obtener todas las peliculas
router.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Actualizar una pelicula por ID
router.put('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Borrar una pelicula por ID
router.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;