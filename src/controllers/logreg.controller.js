import { readJsonUsers } from '../services/file.service.js';
import {
    validationUser
} from '../services/users.service.js';

export const userRegister = async (req, res) => {
    const result = validationUser(req.body);
    const read = await readJsonUsers();
    const check = read.find(u => u.email === result.data.email);
    console.log(check)
    if(check) {
        return res.status(400).json({ message: 'No registrado' })
    }

    if (result.error) {
        return res.status(400).json({ error: result.error.message });
    }

    res.json(result);

    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}