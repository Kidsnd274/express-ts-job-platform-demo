import { Request, Response } from 'express';
import { Database } from '../database/database';
import { User } from '../models/User.model';

export function getProfile(req: Request, res: Response) {
    const userId: number = 1; // Temp, get user ID from session middleware
    const user: User | undefined = Database.findUserById(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(400).json();
    }
};

export function getApplications(req: Request, res: Response) {
    const userId: number = 1; // Temp get user ID from session middleware
    
    const user = Database.findUserById(userId);
    if (!user) {
        res.status(404).json({ error: "User not found"});
    }

    const applications = Database.getApplicationsWithUserId(userId);
    const detailedList = applications.map(app => {
        const job = Database.findJobById(app.jobId);
        return {
            ...app,
            job: job ?? {
                id: app.jobId,
                title: 'Unknown Job',
                description: 'Unknown',
                company: 'unknown',
                salary: 0,
                active: false,
                postedAt: new Date(0).toISOString(),
            }
        };
    })
    res.json(detailedList);
};