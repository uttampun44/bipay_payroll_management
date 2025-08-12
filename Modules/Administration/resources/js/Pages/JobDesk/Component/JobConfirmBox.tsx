import DangerButton from "@/Components/DangerButton";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/Components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { toast } from "sonner";

type jobDeskDeleteProps = {
    id: number;
}
export default function JobConfirmBox({ id }: jobDeskDeleteProps) {

    const handleDelete = (id: number) => {
        if (!id) return;
        router.delete(route("job-desks.destroy", { id: id }));
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