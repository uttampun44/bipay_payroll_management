import DangerButton from "@/Components/DangerButton";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

type EmployeeConfirmBoxProps = {
    id: number;
}
export default function EmployeeConfirmBox({ id }: EmployeeConfirmBoxProps) {

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("employees.destroy", { id: id }));
        toast.success("Employee Deleted Successfully");
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger >
                
            </AlertDialogTrigger>
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
}