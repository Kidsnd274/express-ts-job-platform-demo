import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/authUtils";
import { User } from "../models/User.model";

export interface AuthRequest extends Request {
    user: User;
}

// Middleware function to check user's JWT Token
export function requireAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    // Get token from auth header
    let token: string | undefined;
    
    if (authHeader?.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
    }
    
    // If no token provided, reject
    if (!token) {
        res.status(401).json({ error: "Authentication required" });
        return;
    }

    try {
        const user = verifyToken(token);
        (req as AuthRequest).user = user;  // Attach the verified User for downstream middleware to use
        next();
        return;
    } catch (err) {  // If not block, if not allow
        console.log(`Error while verifying token: ${err}`)
        res.status(401).json({ error: "Invalid token" });
        return;
    }
}

// Check user's role before continuing (must be used after requireAuth)
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
    const authUser = (req as AuthRequest).user;

    if (!authUser) {
        // Shouldn't go here if requireAuth ran before
        res.status(401).json({ error: "Authentication required" });
        return;
    }

    const role = authUser.role;
    if (role !== 'admin') {
        res.status(403).json({ error: "Forbidden"});
        return;
    }

    next();
}
