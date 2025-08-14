export type employeType ={
    employee_code: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    gender: string;
    phone: string;
    address: string;
    hire_date: string;
    department_id: number;
    job_desk_id: number;
    employment_status: boolean;
    basic_salary: string;
    image: File | null;
}

interface employeeTypeResponse {
    id: number;
    image: string;
    employee_code: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    phone: string;
    address: string;
    hire_date: string;
    employment_status: boolean;
    basic_salary: string;
    department: {
        id: number;
        department_name: string;
    };
    job_desk: {
        id: number;
        job_title: string;
    };
}[]

interface employeeTypeEditResponse {
    id: number;
    employee_code: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    phone: string;
    address: string;
    hire_date: string;
    department_id: number;
    job_desk_id: number;
    employment_status: boolean;
    basic_salary: string;
    image: File | null;
}