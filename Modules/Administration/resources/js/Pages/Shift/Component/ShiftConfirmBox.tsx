import DangerButton from "@/Components/DangerButton";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

type jobDeskDeleteProps = {
    id: number;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ShiftConfirmBox({ id, isOpen, setOpen }: jobDeskDeleteProps) {

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("shifts.destroy", { id: id }));
        toast.success("Job Desk Deleted Successfully");
    }

    return (
         <AlertDialog>
            <AlertDialogTrigger >
                <DangerButton>Delete Job Desk</DangerButton>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will delete the job desk permanently.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                    onClick={() => handleDelete(id)}
                    >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}