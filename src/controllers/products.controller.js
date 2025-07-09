import * as model from '../models/products.models.js';

import {
    validationProduct,
    validationPartialProduct
} from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const data = await model.getAllProducts();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProdcutById = async (req, res) => {
    const { id } = req.params;

    try {
        const findById = await model.getProdcutById(id);

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
    const result = validationPartialProduct(req.body);

    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
        const update = await model.updateProduct(id, result);

        if (!update) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(201).json({ message: 'Producto actualizado', old: update[0], new: update[1] });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const searchProduct = async (req, res) => {
    try {
        const search = await model.searchProduct(req.query);

        if (!search) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(search)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProduct = async (req, res) => {
    const result = validationProduct(req.body);

    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
        const newProduct = await model.createProduct(result);
        res.status(201).json({ message: 'Nuevo producto agregado', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const removeProduct = await model.deleteProductById(id);
        
        if (!removeProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado', product: removeProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}