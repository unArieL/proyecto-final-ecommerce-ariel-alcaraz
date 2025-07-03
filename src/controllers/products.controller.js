import fs from 'fs/promises';
import crypto from 'crypto';

import { validationProduct } from '../services/products.service.js';

const readJsonProducts = () => fs.readFile('./products.json', 'utf8');

export const getAllProducts = async (req, res) => {
    try {
        const data = JSON.parse(await readJsonProducts());

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProdcutById = async (req, res) => {
    const { id } = req.params;

    try {
        const data = JSON.parse(await readJsonProducts());
        const findById = data.find((product) => product.id === id);

        if (!findById) {
            return res.status(404).json({ error: 'Producto no encontrado' })
        }
        res.status(200).json(findById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const data = JSON.parse(await readJsonProducts());
        const findPosition = data.findIndex((product) => product.id === id);



        const { name, price, category, stock, description } = req.body;

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const searchProduct = async (req, res) => {
    const { name, price, category, stock } = req.query;

    try {
        const data = JSON.parse(await readJsonProducts());

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
            const filterPrice = data.filter((product) => product.price == price);
            res.status(200).json(filterPrice);
        }

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const createProduct = async (req, res) => {
    const result = validationProduct(req.body);
    console.log(result)

    if(result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
        const data = JSON.parse(await readJsonProducts());
        const newProduct = {
            id: crypto.randomUUID(),
            ...result.data
        };

        data.push(newProduct);
        await fs.writeFile('./products.json', JSON.stringify(data, null, 4));
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const data = JSON.parse(await readJsonProducts());
        const findPosition = data.findIndex((product) => product.id === id);

        if (findPosition === -1) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        const remove = data.splice(findPosition, 1);
        await fs.writeFile('./products.json', JSON.stringify(data, null, 4));
        res.status(200).json({ message: 'Producto eliminado', product: remove });

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}