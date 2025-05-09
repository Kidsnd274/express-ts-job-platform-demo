export interface Job {
    id: number;
    title: string;
    description: string;
    imageUrl?: string;
    active: boolean;
    posted: string;  // ISO 8601 (YYYY-MM-DDTHH:mm:ss)
    company: string;
    salary: number;
}