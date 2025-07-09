import * as model from '../models/users.models.js';

import {
    validationUser,
    validationPartialUser
} from '../services/users.service.js';

export const getAllUsers = async (req, res) => {
    try {
        const data = await model.getAllUsers();

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const findById = await model.getUserById(id);

        if (!findById) {
            return res.status(404).json({ error: 'Usuario no encontrado' })
        }
        res.status(200).json(findById);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const result = validationPartialUser(req.body);
    
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
        const update = await model.updateUser(id, result);

        if (!update) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(201).json({ message: 'Usuario actualizado', old: update[0], new: update[1] });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const searchUser = async (req, res) => {
    try {
        const search = await model.searchUser(req.query);

        if (!search) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json(search)

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    const result = validationUser(req.body);
    console.log(result.data.email)
    if (result.error) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    try {
        const newUser = await model.createUser(result);
        
        res.status(201).json({ message: 'Nuevo usuario agregado', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const removeUser = await model.deleteUserById(id);
        if (!removeUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({ message: 'Usuario eliminado', product: removeUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}