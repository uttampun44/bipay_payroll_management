export interface ShiftDialogRef {
    open: () => void;
    close: () => void;
}

export type ShiftDialogProps = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
     ref?: React.Ref<ShiftDialogRef>
};