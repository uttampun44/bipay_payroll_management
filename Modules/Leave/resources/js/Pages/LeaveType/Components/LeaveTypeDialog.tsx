import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "sonner";
import { leaveType, leaveTypesProps } from "../leavetypes";
import InputError from "@/Components/InputError";
import { Switch } from "@/Components/ui/switch";
import { Textarea } from "@headlessui/react";

const LeaveTypeDialog = forwardRef<any, leaveTypesProps>((props, ref) => {
    const [isOpen, setOpen] = useState(false);
     const {isEditingMode} = props;
    const { post: post, data, setData, errors, processing, resetAndClearErrors, } = useForm<leaveType>({
       id: 0,
       leave_type_name: "",
       leave_code: "",
       description: "",
       max_days_per_year: "",
       carry_forward_allowed: false,
       max_carry_forward_days: "",
       is_paid: false,
       require_approval: false,
       notice_days_required: "",
       status: false,
    });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            post(route('leave-types.store'), {
                onSuccess: () => {
                    toast.success('Leave Type Added Successfully');
                    console.log('leave type added successfully', data);
                    setOpen(false);
                    resetAndClearErrors();
                },
                onFinish: () => resetAndClearErrors(),
                onError: (errors: any) => {
                    toast.error('Leave Type Addition Failed');
                    throw errors;
                }
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }
    useImperativeHandle(ref, () => ({
        handleOpen: () => {
            setOpen(true);
        },
        handleClose: () => {
            setOpen(false);
        }
    }));
    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl w-full" >
                <DialogHeader>
                    <DialogTitle>Add Leave Type</DialogTitle>
                </DialogHeader>
                <DialogDescription> This is the add shift dialog </DialogDescription>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="leave-type-name mt-4">
                            <InputLabel
                                htmlFor="leave_type_name"
                                value="Leave Type Name"
                            />
                            <TextInput
                                type="text"
                                name="leave_type_name"
                                className="mt-1 block w-full"
                                placeholder="Enter Leave Type Name"
                                autoComplete="off"
                                value={data.leave_type_name}
                                onChange={(e) => {
                                    setData('leave_type_name', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.leave_type_name}
                            />
                        </div>
                        <div className="leave-type-code mt-4">
                            <InputLabel
                                htmlFor="leave_code"
                                value="Leave Code"
                            />
                            <TextInput
                                type="text"
                                name="leave_code"
                                className="mt-1 block w-full"
                                placeholder="Enter Leave Code"
                                autoComplete="off"
                                value={data.leave_code}
                                onChange={(e) => {
                                    setData('leave_code', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.leave_code}
                            />
                        </div>
                       
                        <div className="leave-type-max-days-per-year mt-4">
                            <InputLabel
                                htmlFor="max_days_per_year"
                                value="Max Days Per Year"
                            />
                            <TextInput
                                type="text"
                                name="max_days_per_year"
                                className="mt-1 block w-full"
                                placeholder="Enter Max Days Per Year"
                                autoComplete="off"
                                value={data.max_days_per_year}
                                onChange={(e) => {
                                    setData('max_days_per_year', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.max_days_per_year}
                            />
                        </div>
                       
                        <div className="leave-type-max-carry-forward-days mt-4">
                            <InputLabel
                                htmlFor="max_carry_forward_days"
                                value="Max Carry Forward Days"
                            />
                            <TextInput
                                type="text"
                                name="max_carry_forward_days"
                                className="mt-1 block w-full"
                                placeholder="Enter Max Carry Forward Days"
                                autoComplete="off"
                                value={data.max_carry_forward_days}
                                onChange={(e) => {
                                    setData('max_carry_forward_days', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.max_carry_forward_days}
                            />
                        </div>
                         <div className="leave-type-notice-days-required mt-4">
                            <InputLabel
                                htmlFor="notice_days_required"
                                value="Notice Days Required"
                            />
                            <TextInput
                                type="text"
                                name="notice_days_required"
                                className="mt-1 block w-full"
                                placeholder="Enter Notice Days Required"
                                autoComplete="off"
                                value={data.notice_days_required}
                                onChange={(e) => {
                                    setData('notice_days_required', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.notice_days_required}
                            />
                        </div>
                         <div className="leave-type-description mt-4">
                            <InputLabel
                                htmlFor="description"
                                value="Description"
                            />
                            <Textarea
                                name="description"
                                className="mt-1 block w-full"
                                placeholder="Enter Description"
                                autoComplete="off"
                                rows={4}
                                value={data.description}
                                onChange={(e) => {
                                    setData('description', e.target.value);
                                }}
                            />
                            <InputError
                                message={errors.description}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                          <div className="leave-type-carry-forward-allowed mt-4">
                            <InputLabel
                                htmlFor="carry_forward_allowed"
                                value="Carry Forward Allowed"
                            />
                            <Switch
                                name="carry_forward_allowed"
                                checked={data.carry_forward_allowed}
                                onCheckedChange={(checked) => {
                                    setData("carry_forward_allowed", checked as boolean);
                                }}
                            />
                            <InputError
                                message={errors.carry_forward_allowed}
                            />
                        </div>
                        <div className="leave-type-is-paid mt-4">
                            <InputLabel
                                htmlFor="is_paid"
                                value="Is Paid"
                            />
                            <Switch
                                name="is_paid"
                                checked={data.is_paid}
                                onCheckedChange={(checked) => {
                                    setData("is_paid", checked as boolean);
                                }}
                            />
                            <InputError
                                message={errors.is_paid}
                            />
                        </div>
                        <div className="leave-type-require-approval mt-4">
                            <InputLabel
                                htmlFor="require_approval"
                                value="Require Approval"
                            />
                            <Switch
                                name="require_approval"
                                checked={data.require_approval}
                                onCheckedChange={(checked) => {
                                    setData("require_approval", checked as boolean);
                                }}
                            />
                            <InputError
                                message={errors.require_approval}
                            />
                        </div>
                       
                        <div className="leave-type-status mt-4">
                            <InputLabel
                                htmlFor="status"
                                value="Status"
                            />
                            <Switch
                                name="status"
                                checked={data.status}
                                onCheckedChange={(checked) => {
                                    setData("status", checked as boolean);
                                }}
                            />
                            <InputError
                                message={errors.status}
                            />
                        </div>
                    </div>

                    <div className="button-form flex gap-x-4 mb-4">
                        <Button
                            className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="submit"
                            variant={"default"}
                            disabled={processing}
                        >
                            Submit
                        </Button>
                        <DangerButton
                            className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(false);
                                resetAndClearErrors();
                            }}
                        >
                            Cancel
                        </DangerButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
});

export default LeaveTypeDialog;