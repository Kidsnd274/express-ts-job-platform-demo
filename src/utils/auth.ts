import jwt from 'jsonwebtoken';
import { User } from '../models/User.model';

// Set the JWT Secret in .env to be secure
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_shhhhh";

export function createToken(user: User): string {
    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}