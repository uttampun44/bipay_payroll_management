export interface employeeConfirmRef {
    handleOpen: () => void;
    handleClose: () => void;
}

export type EmployeeConfirmBoxProps = {
    id: number;
    ref?: React.Ref<employeeConfirmRef>;
};