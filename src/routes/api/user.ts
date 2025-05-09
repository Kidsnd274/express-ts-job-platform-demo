import { getApplications, getProfile } from "../../controllers/user";

const express = require('express');
const router = express.Router();

// Restrict to authenticated users here

router.get('/profile', getProfile);
router.get('/application', getApplications);

module.exports = router;