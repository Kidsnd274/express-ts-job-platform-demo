import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth";

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
        next();
        return;
    } catch (err) {  // If not block, if not allow
        console.log(`Error while verifying token: ${err}`)
        res.status(401).json({ error: "Invalid token" });
        return;
    }
}

// Check user's role before continuing
export function requireAdmin(req: Request, res: Response, next: NextFunction) {
    return;
}