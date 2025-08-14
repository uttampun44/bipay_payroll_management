import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { useForm } from "@inertiajs/react";
import React, { forwardRef, useImperativeHandle, useState } from "react";

export interface employeeConfirmRef {
    handleOpen: () => void;
    handleClose: () => void;
}

type EmployeeShiftDialogProps = {
    ref: React.Ref<employeeConfirmRef>;
};
const EmployeeShiftDialog = forwardRef<any, EmployeeShiftDialogProps>((props, ref) =>{
   const [open, setOpen] = useState(false);
   const {data, setData} = useForm({
        name: ""
    })
    useImperativeHandle(ref, () => ({
        handleOpen: () => {
           setOpen(true);
        },
        handleClose: () => {
            setOpen(false);
        },
    }), [setOpen, open]);

    return (
       <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    </DialogHeader>
                    <DialogTitle>Add Employee Shift</DialogTitle>
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
                  
            </DialogContent>
        </Dialog>
    )
})
export default EmployeeShiftDialog;