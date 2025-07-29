import Checkbox from "@/Components/Checkbox";
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Textarea } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

type DepartmentDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function DepartmentDialog({
    open,
    setOpen,
}: DepartmentDialogProps) {
    const { data, setData } = useForm({
        department_name: "",
        department_code: "",
        description: "",
        budget: 0,
        status: true,
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
                                            htmlFor="department_name"
                                            value="Department Name"
                                        />
                                        <TextInput
                                            type="text"
                                            name="department_name"
                                            value={data.department_name}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "department_name",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="department_code"
                                            value="Department Code"
                                        />
                                        <TextInput
                                            type="text"
                                            name="department_code"
                                            value={data.department_code}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "department_code",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="description"
                                            value="Description"
                                        />
                                        <Textarea
                                            name="description"
                                            value={data.description}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            rows={3}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="budget"
                                            value="Budget"
                                        />
                                        <TextInput
                                            type="text"
                                            name="budget"
                                            value={data.budget}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "budget",
                                                    parseFloat(e.target.value)
                                                )
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="status"
                                            value="Status"
                                        />
                                        <Checkbox
                                            name="status"
                                            checked={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.checked as true
                                                )
                                            }
                                            required
                                        />
                                    </div>


                                    <div className="button flex gap-x-4">
                                        <Button type="submit">Save</Button>
                                        <DangerButton
                                            type="button"
                                            onClick={() => setOpen(false)}
                                        >
                                            Cancel
                                        </DangerButton>
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
