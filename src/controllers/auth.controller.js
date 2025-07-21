import { generateToken } from '../config/token-generator.js';
import { getAllUsers } from '../models/users.models.js';

const default_user = {
    id: 'DxPg65NwhZJJcqZ1lp3Y',
    email: 'julian.rivas@yahoo.com',
    password: 'JuliR!2024'
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = { id: 'DxPg65NwhZJJcqZ1lp3Y', email };

    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}