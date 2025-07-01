import express from 'express';
import fs from 'fs/promises';

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
    const priceFloat = parseFloat(price);
    const stockInt = parseInt(stock);

    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);

        if (name == '') {
            if (!Number.isNaN(priceFloat)) {
                if (!category) {
                    if (!Number.isNaN(stockInt)) {
                        res.json({ error: 'imposible buscar' })
                    }
                }
                // const filterPrice = data.filter((product) => product.price == priceFloat)
                // res.status(200).json(filterPrice);
            }
            const filterName = data.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()));
            res.status(200).json(filterName);
        }

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

//Mostrar producto por ID
router.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await fs.readFile('./products.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        const findById = data.find((product) => product.id == id);

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