export interface Job {
    id: number;
    title: string;
    description: string;
    company: string;
    salary: number;
    active: boolean;
    postedAt: string;  // ISO 8601 (YYYY-MM-DDTHH:mm:ss)
    imageUrl?: string;
}