import express from 'express';
import {
    getAllUsers,
    getUserById,
    searchUser,
    createUser,
    deleteUserById,
    updateUser
} from '../controllers/users.controller.js'

const router = express.Router();

//Mostrar todos los usuarios
router.get('/', getAllUsers);

//Filtrar usuarios
router.get('/search', searchUser);

//Mostrar usuario por ID
router.get('/:id', getUserById);

//Crear usuario
router.post('/', createUser);

//Actualizar un usuario ya creado
router.patch('/:id', updateUser);

//Borrar un usuario por ID
router.delete('/:id', deleteUserById);

export default router;