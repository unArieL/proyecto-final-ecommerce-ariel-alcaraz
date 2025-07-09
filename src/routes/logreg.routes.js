import express from 'express';
import {
    userRegister
} from '../controllers/logreg.controller.js'

const router = express.Router();

//Registrar un usuario
router.post('/register', userRegister)

//Logear un usuario

export default router;