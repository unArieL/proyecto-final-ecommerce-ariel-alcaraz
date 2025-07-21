import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SK = process.env.JWT_SECRET;

export const authentication = (req, res, next) => {
    const token = req.headers["authorization"].split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, SK, (err) => {
        if (err) {
            return res.sendStatus(403);
        }
        next();
    })
}