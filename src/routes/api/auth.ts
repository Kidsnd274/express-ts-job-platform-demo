import { Router } from "express";
import { loginUser, registerUser } from "../../controllers/authController";

const router = Router();

// Job Routes for Users (non-admin)

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registers a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - firstName
 *               - lastName
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: test@example.com
 *               firstName:
 *                 type: string
 *                 example: Jane
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword
 *     responses:
 *       201:
 *         description: User successfully registered
 *         headers:
 *           Authorization:
 *             description: Bearer token for authentication
 *             schema:
 *               type: string
 *               example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: test@example.com
 *                 firstName:
 *                   type: string
 *                   example: Jane
 *                 lastName:
 *                   type: string
 *                   example: Doe
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing required fields
 *       409:
 *          description: Email address already taken
 *          content:
 *            application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Email address already taken
 */
router.post('/register', registerUser);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logs in an existing user and issues a JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword
 *     responses:
 *       200:
 *         description: Login successful, returns an auth token in the header
 *         headers:
 *           Authorization:
 *             description: Bearer token for authentication
 *             schema:
 *               type: string
 *               example: Bearer <token>
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Login successful
 *       400:
 *         description: Missing email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Missing email or password
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid credentials
 */
router.post('/login', loginUser);

export default router;