import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { forwardRef, useImperativeHandle } from "react";
import { toast } from "sonner";

interface employeeConfirmRef {
    open: () => void;
    close: () => void;
}

type EmployeeConfirmBoxProps = {
    id: number;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    ref?: React.Ref<employeeConfirmRef>
};

const EmployeeConfirmBox = forwardRef<any, EmployeeConfirmBoxProps>(function EmployeeConfirmBox(props, ref) {

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("employees.destroy", { id: id }));
        toast.success("Employee Deleted Successfully");
    }

    const { id, isOpen, setOpen } = props;

    useImperativeHandle(ref, () => {
        return {
            handleOpen: () => {
                setOpen(true);
            },
            handleClose: () => {
                setOpen(false);
            },
        }
    }, [setOpen, isOpen]);
    
    return (
        <AlertDialog open={isOpen} onOpenChange={setOpen}>
            <AlertDialogTrigger >            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will delete the employee permanently.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-end">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => handleDelete(id)}
                    >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
})
export default EmployeeConfirmBox;