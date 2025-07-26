import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { useForm } from "@inertiajs/react";

type DepartmentDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DepartmentDialog({ open, setOpen }: DepartmentDialogProps) {
    
    const { data, setData } = useForm({
        name: ""
    });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add Department</DialogTitle>
                    <DialogDescription>
                        <div className="form">
                            <form>
                                <div className="space-y-4">
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="name"
                                            value="Name"
                                        />
                                        <TextInput
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="button flex gap-x-4">
                                        <Button type="submit">Save</Button> 
                                        <DangerButton type="button"
                                         onClick={() => setOpen(false)}
                                        >Cancel</DangerButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}