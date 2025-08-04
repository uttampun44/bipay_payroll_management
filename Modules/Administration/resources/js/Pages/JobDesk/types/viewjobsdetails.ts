export type viewJobsDetails = {
    id: number;
    job_title: string;
    job_code: string;
    job_description: string;
    minimum_salary: string;
    maximum_salary: string;
    job_requirements: string;
    job_responsibilities: string;
    department: {
        id: number;
        department_name: string;
    }
}