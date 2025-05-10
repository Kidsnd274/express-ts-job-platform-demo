import { Router } from "express";
import { createJob, deleteJob, getAdminJobListings } from "../../../controllers/jobController";

const router = Router();

// Job Routes for Admins

/**
 * @openapi
 * /api/admin/job:
 *   get:
 *     tags:
 *       - Admin
 *     summary: List all job postings (admin)
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
 *         description: Array of all jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Operator"
 *                   description:
 *                     type: string
 *                     example: "Customer Service Representative"
 *                   company:
 *                     type: string
 *                     example: "Cogibox"
 *                   salary:
 *                     type: number
 *                     example: 55598
 *                   active:
 *                     type: boolean
 *                     example: true
 *                   postedAt:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-05-10T12:00:00.000Z"
 *                   imageUrl:
 *                     type: string
 *                     example: "http://dummyimage.com/157x100.png/dddddd/000000"
 *             example:
 *               - id: 1
 *                 title: "Operator"
 *                 description: "Customer Service Representative"
 *                 company: "Cogibox"                
 *                 salary: 55598
 *                 active: true
 *                 postedAt: "2025-05-10T09:49:04.828Z"
 *                 imageUrl: "http://dummyimage.com/157x100.png/dddddd/000000"
 *               - id: 2
 *                 title: "Product Engineer"
 *                 description: "Customer Service Representative"
 *                 company: "Jabbertype"                
 *                 salary: 45907
 *                 active: true
 *                 postedAt: "2025-05-10T09:49:04.829Z"
 *                 imageUrl: "http://dummyimage.com/177x100.png/ff4444/ffffff"
 *       401:
 *         description: Authentication required or token invalid
 */
router.get('/', getAdminJobListings);

/**
 * @openapi
 * /api/admin/job:
 *   post:
 *     tags:
 *       - Admin
 *     summary: Create a new job posting
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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - company
 *               - salary
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Backend Engineer"
 *               description:
 *                 type: string
 *                 example: "Design APIs in Express.js"
 *               company:
 *                 type: string
 *                 example: "Aureus"
 *               salary:
 *                 type: number
 *                 example: 10000
 *               imageUrl:
 *                 type: string
 *                 example: "https://placehold.co/600x400"
 *     responses:
 *       201:
 *         description: Job successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 42
 *                 title:
 *                   type: string
 *                   example: "Backend Engineer"
 *                 description:
 *                   type: string
 *                   example: "Design APIs in Express.js"
 *                 company:
 *                   type: string
 *                   example: "Aureus"
 *                 salary:
 *                   type: number
 *                   example: 10000
 *                 active:
 *                   type: boolean
 *                   example: true
 *                 postedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-05-10T12:05:00.000Z"
 *                 imageUrl:
 *                   type: string
 *                   example: "https://placehold.co/600x400"
 *       400:
 *         description: Missing required fields
 *       401:
 *         description: Authentication required or token invalid
 */
router.post('/', createJob);

/**
 * @openapi
 * /api/admin/job/{id}:
 *   delete:
 *     tags:
 *       - Admin
 *     summary: Delete a job posting
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
 *       - name: id
 *         in: path
 *         description: ID of the job to delete
 *         required: true
 *         schema:
 *           type: integer
 *           example: 42
 *     responses:
 *       204:
 *         description: Job deleted successfully (no content)
 *       401:
 *         description: Authentication required or token invalid
 *       404:
 *         description: Job not found
 */
router.delete('/:id', deleteJob);

export default router;