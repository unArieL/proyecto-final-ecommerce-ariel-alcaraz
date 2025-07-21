import express from 'express';
import { authentication } from '../middleware/auth.middleware.js';
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
router.get('/:id', authentication, getProdcutById);

//Crear un producto
router.post('/', authentication, createProduct);

//Actualiza un producto ya creado
router.patch('/:id', authentication, updateProduct);

//Borra un producto por ID
router.delete('/:id', authentication, deleteProductById);

export default router;