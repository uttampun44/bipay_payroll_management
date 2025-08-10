export interface ShiftDialogRef {
    open: () => void;
    close: () => void;
}

export type ShiftDialogProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
     ref?: React.Ref<ShiftDialogRef>
};

export type shiftTypes = {
    shift_name: string;
    shift_code: string;
    start_time: string;
    end_time: string;
    break_duration: string | number;
    working_hours: string | number;
    overtime_rate: string | number;
    night_shift_allowance: string | number;
    weekend_rate: string | number;
    status: boolean;
}

export interface shiftGetTypes extends Omit<shiftTypes, "status"> {
    id: number;
    status: number
}