import { Router } from "express";
import { getApplications, getProfile } from "../../controllers/userController";

const router = Router();

// Restrict to authenticated users here

/**
 * @openapi
 * /api/user/application:
 *   get:
 *     tags:
 *       - User
 *     summary: List applied jobs (applications) for the current user
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: Bearer token in the format `Bearer <token>`
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: Array of the user’s job applications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   appliedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-05-10T08:36:28.105Z"
 *                   status:
 *                     type: string
 *                     example: "pending"
 *                   job:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 5
 *                       title:
 *                         type: string
 *                         example: "Professor"
 *                       company:
 *                         type: string
 *                         example: "Miboo"
 *                       salary:
 *                         type: number
 *                         example: 106460
 *                       active:
 *                         type: boolean
 *                         example: true
 *                       postedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-05-10T09:21:45.387Z"
 *                       imageUrl:
 *                         type: string
 *                         example: "http://dummyimage.com/236x100.png/ff4444/ffffff"
 *       401:
 *         description: Authentication required or token invalid
 *       400:
 *         description: User not found
 */
router.get('/application', getApplications);

/**
 * @openapi
 * /api/user/profile:
 *   get:
 *     tags:
 *       - User
 *     summary: Retrieve the authenticated user’s profile
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         description: Bearer token in the format `Bearer <token>`
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *     responses:
 *       200:
 *         description: The user’s profile details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: user@example.com
 *                 firstName:
 *                   type: string
 *                   example: Jane
 *                 lastName:
 *                   type: string
 *                   example: Doe
 *       401:
 *         description: Authentication required or token invalid
 *       400:
 *         description: User not found
 */
router.get('/profile', getProfile);

export default router;