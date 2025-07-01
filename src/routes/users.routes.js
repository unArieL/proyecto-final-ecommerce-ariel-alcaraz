import express from 'express';
import fs from 'fs/promises';

const router = express.Router();

router.get('/users', async (req, res) => {
    try {
        const response = await fs.readFile('./users.json', { encoding: 'utf8' });
        const data = await JSON.parse(response);
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

export default router;