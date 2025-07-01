import express from 'express';
import fs from 'fs/promises';

const router = express.Router();

//Mostrar todos los usuarios
router.get('/users', async (req, res) => {
    try {
        const response = await fs.readFile('./users.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);

        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.get('/users/search', async (req, res) => {
    const { age } = req.query;

    try {
        const response = await fs.readFile('./users.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        const filterAge = data.filter((user) => user.age == age);

        res.status(200).json(filterAge);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Buscar usuario por id
router.get('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fs.readFile('./users.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        const findById = data.find((user) => user.id == id);

        if (findById) {
            res.status(200).json(findById);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' })
        }

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

export default router;