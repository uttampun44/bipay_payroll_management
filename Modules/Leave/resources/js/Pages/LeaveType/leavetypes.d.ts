export type leaveType = {
    id?: number
    leave_type_name: string,
    leave_code: string,
    description: string, 
    max_days_per_year: string, 
    carry_forward_allowed:boolean,
    max_carry_forward_days:string, 
    is_paid:boolean,
    require_approval:boolean,
    notice_days_required:string,
    status: boolean
}
export interface leaveTypesProps {
    isEditingMode?: boolean;
}