const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const { countOperations, getOperationCount } = require('./middlewares/counterMiddleware');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(countOperations);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Rutas
app.use('/api', userRoutes);
app.use('/api', movieRoutes);

// Contadores
app.get('/api/contadores', async (req, res) => {
    try {
        const userCount = await mongoose.model('User').countDocuments();
        const movieCount = await mongoose.model('Movie').countDocuments();
        res.send({ users: userCount, movies: movieCount });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/operaciones', (req, res) => {
    res.send({ operations: getOperationCount() });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});