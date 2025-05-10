import { Request, Response } from 'express';
import { Database } from '../database/database';
import { AuthRequest } from '../middleware/auth';

// ---------- Regular User Job Functions ----------
export function getJobListings(req: Request, res: Response) {
    const jobList = Database.listJobs();
    const smallerList = jobList.map(({ id, title, company }) => ({
        id,
        title,
        company,
    }));

    res.json(smallerList);
}

export function getJobDetails(req: Request, res: Response) {
    const id = Number(req.params.id);
    const jobDetails = Database.findJobById(id);

    if (!jobDetails) {
        res.status(404).json({ error: "Invalid Job ID" });
        return;
    }
    res.json(jobDetails);
}

export function applyToJob(req: Request, res: Response) {
    const id = Number(req.params.id);
    const jobDetails = Database.findJobById(id);

    // Check if job exists
    if (!jobDetails) {
        res.status(404).json({ error: "Invalid Job ID" });
        return;
    }

    const authUser = (req as AuthRequest).user;

    if (!authUser) {
        // Shouldn't go here if requireAuth ran before
        res.status(401).json({ error: "Authentication required" });
        return;
    }

    // Check if user already applied to the same job
    const alreadyApplied = Database
        .getApplicationWithUserIdAndJobId(authUser.id, jobDetails.id)
        .length > 0;
    if (alreadyApplied) {
        res.status(409).json("You have already applied to this job");
        return;
    }

    const application = Database.createApplication(
        authUser.id,
        jobDetails.id,
        new Date().toISOString(),
        "pending"
    );

    res.json(application);
}


// ---------- Admin Functions ----------
export function getAdminJobListings(req: Request, res: Response) {
    const jobList = Database.listJobs();
    res.json(jobList);
}

export function createJob(req: Request, res: Response) {  // Admin required
    const { title, description, company, salary, imageUrl } = req.body as {
        title: string,
        description: string,
        company: string,
        salary: number,
        imageUrl?: string
    }

    // Check for missing fields
    if (!title || !description || !company || salary == null) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }

    const img = imageUrl?.trim() || "";  // If imageUrl doesn't exist, replace with empty string

    const createdJob = Database.createJob(
        title, description, company, salary, true, new Date().toISOString(), img);
    res.status(201).json(createdJob);
}

export function deleteJob(req: Request, res: Response) {  // Admin required
    const id = Number(req.params.id);
    const deleted: boolean = Database.deleteJobById(id);
    if (!deleted) {
        res.status(404).json({ error: "Invalid Job ID" });
        return;
    }
    res.sendStatus(204);
}