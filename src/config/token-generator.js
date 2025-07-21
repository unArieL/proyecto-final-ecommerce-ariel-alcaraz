import jwt from 'jsonwebtoken';
import 'dotenv/config';

const SK = process.env.JWT_SECRET;

export const generateToken = (userData) => {
    const user = {
        id: userData.id,
        email: userData.email
    };
    const expiration = { expiresIn: '1h' };

    return jwt.sign(user, SK, expiration);
}