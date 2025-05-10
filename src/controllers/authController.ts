import { Request, Response } from 'express';
import { Database } from '../database/database';
import { UserRole } from '../models/User.model';
import bcrypt from 'bcryptjs';

const HASH_ROUNDS: number = 10;

export async function registerUser(req: Request, res: Response) {
    const { email, firstName, lastName, password } = req.body as {
        email: string,
        firstName: string,
        lastName: string,
        password: string,
    }

    if (!email || !firstName || !lastName || !password) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = Database.createUser(
        email, firstName, lastName, passwordHash, 'user' as UserRole
    );
    res.status(201).json({
        email, firstName, lastName
    });
};

export function loginUser(req: Request, res: Response) {
    try {
        
    }
}
};