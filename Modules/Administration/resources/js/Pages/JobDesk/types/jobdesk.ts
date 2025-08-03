export type JobDeskFormData = {
    department_id: string;
    job_title: string;
    job_code: string;
    job_description: string;
    minimum_salary: number | string;
    maximum_salary: number | string;
    job_requirements: string;
    job_responsibilities: string;
};

type deparmentType = {
    id: number | string;
    department_name: string;
}

export type jobDesks = {
    id: number;
    job_title: string;
    job_code: string;
    job_description: string;
    minimum_salary: number;
    maximum_salary: number;
    job_requirements: string;
    job_responsibilities: string;
    department: deparmentType;
}
