import { Router } from "express";
import { applyToJob, getJobDetails, getJobListings } from "../../controllers/jobController";

const router = Router();

// Job Routes for Users (non-admin)

/**
 * @openapi
 * /api/job:
 *   get:
 *     tags:
 *       - Jobs
 *     summary: List all job listings
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
 *         description: Array of job listings
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
 *                   company:
 *                     type: string
 *                     example: "Cogibox"
 *             example:
 *               - id: 1
 *                 title: "Operator"
 *                 company: "Cogibox"
 *               - id: 2
 *                 title: "Product Engineer"
 *                 company: "Jabbertype"
 *               - id: 3
 *                 title: "Desktop Support Technician"
 *                 company: "Youspan"
 *       401:
 *         description: Authentication required or token invalid
 */
router.get('/', getJobListings);

/**
 * @openapi
 * /api/job/{id}:
 *   get:
 *     tags:
 *       - Jobs
 *     summary: Get detailed information for a single job
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
 *         description: The ID of the job to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *           example: 6
 *     responses:
 *       200:
 *         description: Job details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 6
 *                 title:
 *                   type: string
 *                   example: "Statistician III"
 *                 description:
 *                   type: string
 *                   example: "Customer Service Representative"
 *                 company:
 *                   type: string
 *                   example: "Youtags"
 *                 salary:
 *                   type: number
 *                   example: 105299
 *                 active:
 *                   type: boolean
 *                   example: true
 *                 postedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-05-10T08:36:26.446Z"
 *                 imageUrl:
 *                   type: string
 *                   example: "http://dummyimage.com/216x100.png/ff4444/ffffff"
 *       401:
 *         description: Authentication required or token invalid
 *       404:
 *         description: Job not found
 */
router.get('/:id', getJobDetails);

/**
 * @openapi
 * /api/job/{id}/apply:
 *   post:
 *     tags:
 *       - Jobs
 *     summary: Apply to a job posting
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
 *         description: The ID of the job to apply for
 *         required: true
 *         schema:
 *           type: integer
 *           example: 6
 *     responses:
 *       201:
 *         description: Application created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 userId:
 *                   type: integer
 *                   example: 2
 *                 jobId:
 *                   type: integer
 *                   example: 6
 *                 appliedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-05-10T08:36:28.105Z"
 *                 status:
 *                   type: string
 *                   example: "pending"
 *       401:
 *         description: Authentication required or token invalid
 *       404:
 *         description: Invalid job ID
 *       409:
 *         description: Conflict – already applied to this job
 */
router.post('/:id/apply', applyToJob);

export default router;