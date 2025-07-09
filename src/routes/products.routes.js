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
router.get('/', getAllProducts);

//Filtrar productos
router.get('/search', searchProduct);

//Mostrar producto por ID
router.get('/:id', getProdcutById);

//Crear un producto
router.post('/', createProduct);

//Actualiza un producto ya creado
router.patch('/:id', updateProduct);

//Borra un producto por ID
router.delete('/:id', deleteProductById);

export default router;