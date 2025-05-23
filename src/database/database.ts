import { User, UserRole } from "../models/User.model";
import { Job } from "../models/Job.model";
import { Application, ApplicationStatus } from "../models/Application.model";

// Database Implementation that stores everything in memory for demo purposes
// Can drop in some Database connection component instead to use an actually database

// Use counters for incrementing IDs
const users: User[] = [];
let nextUserId = 1;

const jobs: Job[] = [];
let nextJobId = 1;

const applications: Application[] = [];
let nextApplicationId = 1;

// Database functions
export const Database = {
    // ---------- User functions ----------
    createUser(
        email: string,
        firstName: string,
        lastName: string,
        passwordHash: string,
        role: UserRole,
    ): User {
        const newUser: User = {
            id: nextUserId++,
            email,
            firstName,
            lastName,
            passwordHash,
            role
        };
        users.push(newUser);
        return newUser;
    },

    findUserById(id: number): User | undefined {
        return users.find(user => id === user.id);
    },

    findUserByEmail(email: string): User | undefined {
        return users.find(user => email === user.email);
    },


    // ---------- Job functions ----------
    createJob(
        title: string,
        description: string,
        company: string,
        salary: number,
        active: boolean,
        postedAt: string,
        imageUrl?: string        
    ): Job {
        const newJob: Job = {
            id: nextJobId++,
            title,
            description,
            company,
            salary,
            active,
            postedAt,
            imageUrl: imageUrl ?? ''
        };
        jobs.push(newJob);
        return newJob;
    },

    listJobs() {
        return [...jobs];  // Create a shadow copy of the array
    },

    findJobById(id: number): Job | undefined {
        return jobs.find(job => id === job.id);
    },

    deleteJobById(id: number): boolean {
        const found = jobs.findIndex(job => id === job.id);
        if (found === -1) {
            return false
        }
        jobs.splice(found, 1);
        return true;
    },


    // ---------- Application functions ----------
    createApplication(
        userId: number,
        jobId: number,
        appliedAt: string,
        status: ApplicationStatus
    ): Application {
        const newApplication: Application = {
            id: nextApplicationId++,
            userId,
            jobId,
            appliedAt,
            status
        }
        applications.push(newApplication);
        return newApplication;
    },

    // Retrieves applications containing the specified userId
    getApplicationsWithUserId(userId: number): Application[] {
        return applications.filter(app => app.userId === userId);
    },

    // Retrieve applications with userId and jobID (check if exists)
    getApplicationWithUserIdAndJobId(userId: number, jobId: number): Application[] {
        return applications.filter(app => {
            return (app.userId === userId && app.jobId === jobId);
        })
    }
}