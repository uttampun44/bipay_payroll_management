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
import { toast } from "sonner";

type DepartmentDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditDepartmentDialog({
    open,
    setOpen,
}: DepartmentDialogProps) {
    const {
        data,
        setData,
        errors,
        put: put,
        processing,
        reset,
        transform,
    } = useForm({
        department_name: "",
        department_code: "",
        description: "",
        budget: "",
        status: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        transform((data) => ({
            ...data,
            budget: Number(data.budget).toFixed(2),
        }));

        try {
            put(route("departments.put"), {
                onSuccess: () => {
                    setOpen(false);
                    toast.success("Department added successfully!");
                    reset();
                },
                onError: (errors) => {
                    toast.error(
                        "Failed to add department. Please check the errors."
                    );
                },
            });
        } catch (error) {
            throw new Error("Failed to submit form: " + error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add Department</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Fill in the details below to create a new department.
                </DialogDescription>
                <div className="form">
                    <form onSubmit={handleSubmit}>
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
                                />
                                {errors.department_name && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.department_name}
                                    </div>
                                )}
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
                                />
                                {errors.department_code && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.department_code}
                                    </div>
                                )}
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
                                        setData("description", e.target.value)
                                    }
                                    rows={3}
                                />
                                {errors.description && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="budget" value="Budget" />
                                <TextInput
                                    type="text"
                                    name="budget"
                                    value={data.budget}
                                    className="mt-1 block w-full"
                                    placeholder="0.00"
                                    onChange={(e) =>
                                        setData("budget", e.target.value)
                                    }
                                />
                                {errors.budget && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.budget}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="status" value="Status" />
                                <Checkbox
                                    name="status"
                                    checked={data.status}
                                    onChange={(e) =>
                                        setData(
                                            "status",
                                            e.target.checked as true
                                        )
                                    }
                                />
                                {errors.status && (
                                    <div className="text-red-500 text-sm mt-1">
                                        {errors.status}
                                    </div>
                                )}
                            </div>

                            <div className="button flex gap-x-4">
                                <Button type="submit">Save</Button>
                                <DangerButton
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        reset();
                                    }}
                                    disabled={processing}
                                >
                                    Cancel
                                </DangerButton>
                            </div>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
