import express from 'express';
import {
    getAllProducts,
    getProdcutById,
    deleteProductById,
    createProduct,
    searchProduct,
    updateProduct
} from '../controllers/products.controller.js';

const router = express.Router();

//Mostrar producto/s
router.get('/products', getAllProducts);

//Filtrar un producto o conjunto de productos NO TERMINADO
router.get('/products/search', searchProduct);

//Mostrar producto por ID
router.get('/products/:id', getProdcutById);

//Crear un producto
router.post('/products', createProduct);

//Actualiza un producto ya creado
router.patch('/products/:id', updateProduct);

//Borra un producto por ID
router.delete('/products/:id', deleteProductById);

export default router;