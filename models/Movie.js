const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    runtime: { type: Number, required: true },
    genres: { type: [String], required: true },
    cast: { type: [String], required: true },
    plot: { type: String, required: true }
});

module.exports = mongoose.model('Movie', movieSchema);