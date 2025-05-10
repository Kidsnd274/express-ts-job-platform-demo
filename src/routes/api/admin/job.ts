import { Router } from "express";
import { createJob, deleteJob, getAdminJobListings } from "../../../controllers/jobController";

const router = Router();

// Job Routes for Admins

/**
 * @openapi
 * /api/job:
 *   get:
 *     summary: List applications for the current user
 *     responses:
 *       200:
 *         description: Array of applications, each with its job
 */
router.get('/', getAdminJobListings);
router.post('/', createJob);
router.delete('/:id', deleteJob);

export default router;