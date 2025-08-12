import DangerButton from "@/Components/DangerButton";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

type jobDeskDeleteProps = {
    id: number;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ShiftConfirmBox({ id, isOpen, setIsOpen }: jobDeskDeleteProps) {

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("shifts.destroy", { id: id }));
        toast.success("Job Desk Deleted Successfully");
        setIsOpen(false);
    }

    return (
         <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This will delete the job shift permanently.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-end">
                    <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                    onClick={() => handleDelete(id)}
                    >Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}