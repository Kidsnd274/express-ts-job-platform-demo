import { Request, Response } from 'express';
import { Database } from '../database/database';

export function getJobListings(req: Request, res: Response) {
    
}

export function getJobDetails(req: Request, res: Response) {
    const id = req.params.id;  // Temp
}

export function applyToJob(req: Request, res: Response) {
    const id = req.params.id;
}

export function createJob(req: Request, res: Response) {
    
}

export function deleteJob(req: Request, res: Response) {
    const id = req.params.id;
}