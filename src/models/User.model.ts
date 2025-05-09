export type Role = 'user' | 'admin';

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    passwordHash: string;
    role: Role;
}