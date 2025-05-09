import { Router } from "express";
import { createJob, deleteJob, getJobListings } from "../../../controllers/jobController";

const router = Router();

// Job Routes for Admins

// Restrict routes to admins here using middleware (check session or something i dunno)

/**
 * @openapi
 * /api/job:
 *   get:
 *     summary: List applications for the current user
 *     responses:
 *       200:
 *         description: Array of applications, each with its job
 */
router.get('/', getJobListings);  // Maybe I'll create another function that returns a lot more info
router.post('/', createJob);
router.delete('/:id', deleteJob);

export default router;