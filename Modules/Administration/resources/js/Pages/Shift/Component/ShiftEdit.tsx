import { Dispatch,SetStateAction, useEffect } from "react";
import {shiftTypes } from "../types/shiftRef";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import DangerButton from "@/Components/DangerButton";
import { useForm } from "@inertiajs/react";
import { Switch } from "@/Components/ui/switch";
import { toast } from "sonner";

type editProps = {
    id: number,
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    editData: shiftTypes;
}

export default function ShiftEditDialog({ id, isOpen, setOpen, editData }: editProps) {
     
    const { put: put, data, setData, errors, processing, resetAndClearErrors, } = useForm<shiftTypes>({
        shift_name: "",
        shift_code: "",
        start_time: "",
        end_time: "",
        break_duration: "",
        working_hours: "",
        overtime_rate: "",
        night_shift_allowance: "",
        weekend_rate: "",
        status: false,
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            put(route('shifts.update', { id: id }), {
                onSuccess: () => {
                    toast.success('Shift Added Successfully');
                    setOpen(false);
                    resetAndClearErrors();
                },
                onFinish: () => resetAndClearErrors(),
                onError: (errors: any) => {
                    toast.error('Shift Addition Failed');
                    throw errors;
                }
            });
        } catch (error: any) {
            throw new Error(error);
        }
    }

    useEffect(() =>{
        if(editData){
            setData(editData)
        }
    }, [editData, setData])
    return (
          <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl w-full" >
                <DialogHeader>
                    <DialogTitle>Edit Shift</DialogTitle>
                </DialogHeader>
                <DialogDescription> This is the add shift dialog </DialogDescription>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                         <div className="shift-name mt-4">
                        <InputLabel
                            htmlFor="shift_name"
                            value="Shift Name"
                        />
                        <TextInput
                            type="text"
                            name="shift_name"
                            className="mt-1 block w-full"
                            placeholder="Enter Shift Name"
                            autoComplete="off"
                            value={data.shift_name}
                            onChange={(e) => {
                                setData('shift_name', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.shift_name}
                        />
                    </div>
                    <div className="shift-code mt-4">
                        <InputLabel
                            htmlFor="shift_code"
                            value="Shift Code"
                        />
                        <TextInput
                            type="text"
                            name="shift_code"
                            className="mt-1 block w-full"
                            placeholder="Enter Shift Code"
                            autoComplete="off"
                            value={data.shift_code}
                            onChange={(e) => {
                                setData('shift_code', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.shift_code}
                        />
                    </div>
                    <div className="shift-start-time mt-4">
                        <InputLabel
                            htmlFor="shift_start_time"
                            value="Shift Start Time"
                        />
                        <TextInput
                            type="time"
                            name="shift_start_time"
                            className="mt-1 block w-full"
                            placeholder="Enter Shift Start Time"
                            autoComplete="off"
                            value={data.start_time}
                            onChange={(e) => {
                                setData('start_time', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.start_time}
                        />
                    </div>
                    <div className="shift-end-time mt-4">
                        <InputLabel
                            htmlFor="shift_end_time"
                            value="Shift End Time"
                        />
                        <TextInput
                            type="time"
                            name="shift_end_time"
                            className="mt-1 block w-full"
                            placeholder="Enter Shift End Time"
                            autoComplete="off"
                            value={data.end_time}
                            onChange={(e) => {
                                setData('end_time', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.end_time}
                        />
                    </div>
                    <div className="shift-break-duration mt-4">
                        <InputLabel
                            htmlFor="break_duration"
                            value="Break Duration"
                        />
                        <TextInput
                            type="text"
                            name="break_duration"
                            className="mt-1 block w-full"
                            placeholder="Ex: 30min"
                            autoComplete="off"
                            value={data.break_duration}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('break_duration', value ? Number(value) : value);
                            }}
                        />
                        <InputError
                            message={errors.break_duration}
                        />
                    </div>
                    <div className="shift-working-hours mt-4">
                        <InputLabel
                            htmlFor="shift_working_hours"
                            value="Working Hours"
                        />
                        <TextInput
                            type="text"
                            name="shift_working_hours"
                            className="mt-1 block w-full"
                            placeholder="Ex: 8 hours"
                            autoComplete="off"
                            value={data.working_hours}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('working_hours', value ? Number(value) : value);
                            }}
                        />
                        <InputError
                            message={errors.working_hours}
                        />
                    </div>
                    <div className="shift-overtime-rate mt-4">
                        <InputLabel
                            htmlFor="overtime_rate"
                            value="Overtime Rate"
                        />
                        <TextInput
                            type="text"
                            name="overtime_rate"
                            className="mt-1 block w-full"
                            placeholder="Ex: 500.00"
                            autoComplete="off"
                            value={data.overtime_rate}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('overtime_rate', value ? Number(value) : value);
                            }}
                        />
                        <InputError
                            message={errors.overtime_rate}
                        />
                    </div>         
                    <div className="weekend-rate mt-4">
                        <InputLabel
                            htmlFor="weekend_rate"
                            value="Weekend Rate"
                        />
                        <TextInput
                            type="text"
                            name="weekend_rate"
                            className="mt-1 block w-full"
                            placeholder="Ex: 100.00"
                            autoComplete="off"
                            value={data.weekend_rate}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('weekend_rate', value ? Number(value) : value);
                            }}
                        />
                        <InputError
                            message={errors.weekend_rate}
                        />
                    </div>

                     <div className="weekend-rate mt-4">
                        <InputLabel
                            htmlFor="night_shift_allowance"
                            value="Night Shift Allowance"
                        />
                        <TextInput
                            type="text"
                            name="night_shift_allowance"
                            className="mt-1 block w-full"
                            placeholder="Ex: 100.00"
                            autoComplete="off"
                            value={data.night_shift_allowance}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('night_shift_allowance', value ? Number(value) : value);
                            }}
                        />
                        <InputError
                            message={errors.night_shift_allowance}
                        />
                    </div>

                    <div className="status mt-4">
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
}