export type ApplicationStatus = 'pending' | 'accepted';

export interface Application {
    id: number;
    userId: number;
    jobId: number;
    appliedAt: string;  // ISO 8601 (YYYY-MM-DDTHH:mm:ss)
    status: ApplicationStatus;
}