import { getApplications, getProfile } from "../../controllers/user";

const express = require('express');
const router = express.Router();

// Restrict to authenticated users here

/**
 * @openapi
 * /api/user/profile:
 *   get:
 *     summary: Retrieve the current user’s profile
 *     responses:
 *       200:
 *         description: The user profile object
 */
router.get('/profile', getProfile);

/**
 * @openapi
 * /api/user/application:
 *   get:
 *     summary: List applications for the current user
 *     responses:
 *       200:
 *         description: Array of applications, each with its job
 */
router.get('/application', getApplications);

module.exports = router;