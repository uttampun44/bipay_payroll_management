import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { forwardRef, useImperativeHandle } from "react";
import { ShiftDialogProps } from "../types/shiftRef";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import DangerButton from "@/Components/DangerButton";

const ShiftDialog = forwardRef<any, ShiftDialogProps>(function ShiftDialog(props, ref) {

    const { post: post, data, setData, errors, processing, resetAndClearErrors } = useForm({
        shift_name: "",
        shift_code: "",
        start_time: "",
        end_time: "",
        break_duration: "",
        working_hours: "",
        overtime_rate: "",
        night_shift_allowance: "",
        weekend_rate: "",
        status: ""
    })

    const { isOpen, setOpen } = props;

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                setOpen(true);
            },
            close: () => {
                setOpen(false);
            }
        }
    }, [setOpen, isOpen]);
    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="bg-white" >
                <DialogHeader>
                    <DialogTitle>Add Shift</DialogTitle>
                </DialogHeader>
                <DialogDescription> This is the add shift dialog </DialogDescription>
                <form>
                    <div className="job-title mt-4">
                        <InputLabel
                            htmlFor="job_title"
                            value="Name"
                        />
                        <TextInput
                            type="text"
                            name="shift_name"
                            className="mt-1 block w-full"
                            placeholder="Enter Shift Name"
                            autoComplete="off"
                            onChange={(e) => {
                                setData('shift_name', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.shift_name}
                        />
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
                            }}
                        >
                            Cancel
                        </DangerButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
})
export default ShiftDialog;