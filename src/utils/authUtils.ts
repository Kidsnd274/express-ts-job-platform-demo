import jwt from 'jsonwebtoken';
import { User, UserRole } from '../models/User.model';
import { Database } from '../database/database';

// Set the JWT Secret in .env to be secure
const JWT_SECRET = process.env.JWT_SECRET || "default_secret_shhhhh";

export function createToken(user: User): string {
    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

// Verify if the token is valid and returns the User who owns it
export function verifyToken(token: string): User {
    const payload = jwt.verify(token, JWT_SECRET) as {
        id: number;
        role: UserRole;
    }

    // Check if user exists
    const checkedUser = Database.findUserById(payload.id);
    if (!checkedUser) {
        throw new Error(`User with id=${payload.id} not found`);
    }

    return checkedUser;
}
