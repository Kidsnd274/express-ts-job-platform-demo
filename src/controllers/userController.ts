import { Request, Response } from 'express';
import { Database } from '../database/database';
import { AuthRequest } from '../middleware/auth';

export function getApplications(req: Request, res: Response) {
    const authUser = (req as AuthRequest).user;
    const userId = authUser.id;
    const user = Database.findUserById(userId);
    
    if (!user) {  // Should never end up here
        res.status(400).json({ error: "User not found"});
        return;
    }

    const applications = Database.getApplicationsWithUserId(userId);

    // Format output to relevant values
    const reducedList = applications.map(app => {
        // If can't find job (if previously deleted) use placeholder values
        const job = Database.findJobById(app.jobId) ?? {
            id: app.jobId,
            title: "Unknown Title",
            company: "Unknown Company",
            salary: 0,
            active: false,
            postedAt: new Date(0).toISOString(),
            imageUrl: ""
        }

        const { id, title, company, salary, active, postedAt, imageUrl } = job;

        return {
            appliedAt: app.appliedAt,
            status: app.status,
            job: { id, title, company, salary, active, postedAt, imageUrl }
        };
    })

    res.json(reducedList);
};

export function getProfile(req: Request, res: Response) {
    const authUser = (req as AuthRequest).user;
    const userId = authUser.id;
    const user = Database.findUserById(userId);
    
    if (!user) {  // Should never end up here
        res.status(400).json({ error: "User not found"});
        return;
    }

    // Destructure Only Relevant Details
    const { email, firstName, lastName } = user;
    res.json({ email, firstName, lastName });
}