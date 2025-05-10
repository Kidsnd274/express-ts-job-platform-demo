import bcrypt from 'bcryptjs';
import { User } from '../models/User.model';

const HASH_ROUNDS = 10;

export async function hashPassword(password: string) {
    return await bcrypt.hash(password, HASH_ROUNDS);
}

export async function checkPassword(password: string, user: User) {
    return await bcrypt.compare(password, user.passwordHash);
}
