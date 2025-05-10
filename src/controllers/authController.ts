import { Request, Response } from 'express';
import { Database } from '../database/database';
import { UserRole } from '../models/User.model';
import { createToken } from '../utils/auth';
import bcrypt from 'bcryptjs';

const HASH_ROUNDS: number = 10;

export async function registerUser(req: Request, res: Response) {
    const { email, firstName, lastName, password } = req.body as {
        email: string,
        firstName: string,
        lastName: string,
        password: string,
    }

    // If any of the above fields are missing, return error
    if (!email || !firstName || !lastName || !password) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    // Check if user with email already exists
    const checkedUser = Database.findUserByEmail(email);
    if (checkedUser) {
        res.status(409).json({ error: "Email address already taken"});
        return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = Database.createUser(
        email, firstName, lastName, passwordHash, 'user' as UserRole
    );
    const token = createToken(newUser);
    res.status(201)
        .set('Authorization', `Bearer ${token}`)
        .json({
            email, firstName, lastName
        });
};

export async function loginUser(req: Request, res: Response) {
    const { email, password } = req.body as {
        email: string,
        password: string
    };

    // Check if email and password are provided
    if (!email || !password) {
        res.status(400).json({ error: "Missing email or password" });
        return;
    }

    // Check if user exists with the provided email
    const user = Database.findUserByEmail(email);
    if (!user) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
    }

    // Check if provided password is valid
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
    }

    // Create a JWT token and send it to the user
    const token = createToken(user);
    res.set('Authorization', `Bearer ${token}`).json({ msg: "Login successful" });
};