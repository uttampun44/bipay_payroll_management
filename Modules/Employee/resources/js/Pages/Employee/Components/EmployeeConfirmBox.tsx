import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "sonner";
import { EmployeeConfirmBoxProps } from "../types/confirm";

const EmployeeConfirmBox = forwardRef<any, EmployeeConfirmBoxProps>((props, ref) =>{

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("employees.destroy", { id: id }));
        toast.success("Employee Deleted Successfully");
    }

   const [isOpen, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
             
        handleOpen: () => {
            setOpen(true);
        },
        handleClose: () => {
            setOpen(false);
        },
    }), [setOpen, isOpen]);

    
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
                        onClick={() => handleDelete(props.id)}
                    >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
})
export default EmployeeConfirmBox;