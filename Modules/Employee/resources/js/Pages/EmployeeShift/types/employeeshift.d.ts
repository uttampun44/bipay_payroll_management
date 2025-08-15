interface employeeConfirmRef {
    handleOpen: () => void;
    handleClose: () => void;
}

export type EmployeeShiftDialogProps = {
    ref: React.Ref<employeeConfirmRef>;
};

export type shiftType = {
    id: number;
    shift_name: string;
}
export type EmployeshiftType = {
    employee_id: string;
    shift_id: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
}

export type employeeType = {
 id: number;
 employee_code: string;
}

export type employeeShiftType = {
    id: number;
    employee: {
        id: number;
        employee_code: string;
        first_name: string;
        last_name: string;
    }
    shift: {
        id: number;
        shift_name: string;
    }
    employee_id: string;
    shift_id: string;
    start_date: string;
    end_date: string;
    is_current: boolean;
}