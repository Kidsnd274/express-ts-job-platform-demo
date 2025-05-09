import { Router } from "express";

const router = Router();

// Job Routes for Users (non-admin)

/**
 * @openapi
 * /api/job:
 *   get:
 *     summary: List applications for the current user
 *     responses:
 *       200:
 *         description: Array of applications, each with its job
 */
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/refresh', refreshToken);  // Might not need this
router.post('/logout', logoutUser);

export default router;