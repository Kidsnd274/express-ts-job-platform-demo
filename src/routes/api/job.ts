import { Router } from "express";
import { applyToJob, getJobDetails, getJobListings } from "../../controllers/jobController";

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
router.get('/', getJobListings);
router.get('/:id', getJobDetails);
router.post('/:id/apply', applyToJob);

export default router;