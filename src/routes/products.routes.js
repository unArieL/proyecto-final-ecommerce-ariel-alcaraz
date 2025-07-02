import express from 'express';
import fs from 'fs/promises';
import crypto from 'crypto'

const router = express.Router();

//Mostrar producto/s
router.get('/products', async (req, res) => {
    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);

        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Filtrar un producto o conjunto de productos
router.get('/products/search', async (req, res) => {
    const { name, price, category, stock } = req.query;
    const priceInt = Math.trunc(price);
    const stockInt = Math.trunc(stock);

    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);

        if (name) {
            const filterName = data.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
            res.status(200).json(filterName);
        } else if (category) {
            const filterCategory = data.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()));
            res.status(200).json(filterCategory);
        } else if (stock) {
            const filterStock = data.filter((product) => product.stock == stockInt);
            res.status(200).json(filterStock);
        } else if (price) {
            const filterPrice = data.filter((product) => Math.trunc(product.price) == priceInt);
            res.status(200).json(filterPrice);
        }

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Mostrar producto por ID
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    //console.log(crypto.randomUUID());

    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        const findById = data.find((product) => product.id === id);
        const findPosition= data.findIndex((product) => product.id === id);

        if (!findById) {
            res.status(404).json({ error: 'Producto no encontrado' })   
        }
        res.status(200).json(findById);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Borra un producto por ID
router.delete('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        const findPosition = data.findIndex((product) => product.id === id);

        if (findPosition === -1) {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
        
        data.splice(findPosition, 1);
        await fs.writeFile('./products.json', JSON.stringify(data));
        res.status(200).json({ message: 'Producto eliminado' });

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

export default router;