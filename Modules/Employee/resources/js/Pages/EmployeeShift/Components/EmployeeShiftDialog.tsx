import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { router, useForm, usePage } from "@inertiajs/react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { EmployeeShiftDialogProps, employeeType, EmployeshiftType, shiftType } from "../types/employeeshift";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/Components/ui/command";
import { cn } from "@/lib/utils";
import TextInput from "@/Components/TextInput";
import { Switch } from "@/Components/ui/switch";
import useDebounce from "@/hooks/useDebounce";
import { toast } from "sonner";

const EmployeeShiftDialog = forwardRef<any, EmployeeShiftDialogProps>((props, ref) => {

    const employeeShiftData = usePage().props as Record<string, any>;
    const shifts = employeeShiftData.shifts as shiftType[];
    const employees = Array.isArray(employeeShiftData.employee) ? employeeShiftData.employee : [];

    const [open, setOpen] = useState(false);
    const [openPopover, setPopover] = useState(false);
    const [value, setValue] = useState<employeeType | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const debouncedSearch = useDebounce(searchTerm, 500);

    const { data, setData, errors, processing, resetAndClearErrors, post: post } = useForm<EmployeshiftType>({
        employee_id: "",
        shift_id: "",
        start_date: "",
        end_date: "",
        is_current: false,
    })

      const field  = ['employee_id', 'shift_id', 'start_date', 'end_date', 'is_current'];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       try {
           post(route('employee-shifts.store'), {
               onSuccess: () => {
                   toast.success("Employee Shift Added Successfully");
                   resetAndClearErrors();
                   setOpen(false);
                   setValue(null);
                   field.forEach(f => {
                       setData(f as any, "");
                   });
               },
           });
       } catch (error) {
           throw new Error("Failed to submit form: " + error);
       }
    }
    useImperativeHandle(ref, () => ({
        handleOpen: () => {
            setOpen(true);
        },
        handleClose: () => {
            setOpen(false);
        },
    }), [setOpen, open]);
    
    useEffect(() => {
        if (debouncedSearch) {
           router.get(route(route().current() || ""), { search: searchTerm }, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedSearch]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-white">
                <DialogHeader>
                </DialogHeader>
                <DialogTitle>Add Employee Shift</DialogTitle>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="shift mt-4">
                                <InputLabel
                                    htmlFor="shift"
                                    value="Shift"
                                />
                                <Select name="shift_id"
                                    onValueChange={(value) => {
                                        setData('shift_id', value);
                                    }}
                                    value={String(data.shift_id)}
                                >
                                    <SelectTrigger className="">
                                        <SelectValue placeholder="Select Shift" />
                                    </SelectTrigger>
                                    <SelectContent className="mt-1">
                                        {shifts.map((shift) => (
                                            <SelectItem
                                                key={shift.id} value={String(shift.id)}>{shift.shift_name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError
                                    message={errors.shift_id}
                                />
                            </div>
                            <div className="employee mt-4">
                                <Popover open={openPopover} onOpenChange={setPopover}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openPopover}
                                            className="w-[200px] justify-between"
                                        >
                                            {value
                                                ? employees.find((employee) => employee.id === value?.id)?.employee_code
                                                : "Select Employee Code..."}
                                            <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search Employee..."
                                                value={searchTerm}
                                                 onValueChange={(value) => setSearchTerm(value)}
                                            />
                                            <CommandList>
                                                <CommandEmpty>No Employee Code found.</CommandEmpty>
                                                <CommandGroup>
                                                    {employees.map((employee) => (
                                                        <CommandItem
                                                            key={employee.id}
                                                            value={employee.employee_code}
                                                            onSelect={(currentValue) => {
                                                                const selected = employees.find(e => e.employee_code === currentValue) || null;
                                                                setValue(selected);
                                                                setData('employee_id', selected?.id ?? "");
                                                                setPopover(false);
                                                            }}
                                                            onClick={(currentValue) => {
                                                          
                                                                 const selected = employees.find(e => e.employee_code === currentValue) || null;
                                                                setValue(selected);
                                                                setData('employee_id', selected?.id ?? "");
                                                                setPopover(false);
                                                            }}
                                                        >
                                                            <CheckIcon
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    value?.employee_code === employee.employee_code
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {employee.employee_code}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                                <InputError message={errors.employee_id} className="mt-2" />
                            </div>
                            <div className="start_date">
                                <InputLabel
                                    htmlFor="start_date"
                                    value="Start Date"
                                />
                                <TextInput
                                    type="date"
                                    name="start_date"
                                    value={data.start_date}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("start_date", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.start_date}
                                />
                            </div>
                            <div className="endDate">
                                <InputLabel
                                    htmlFor="end_date"
                                    value="End Date"
                                />
                                <TextInput
                                    type="date"
                                    name="end_date"
                                    value={data.end_date}
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("end_date", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.end_date}
                                />
                            </div>
                            <div className="is_active">
                                <InputLabel
                                    htmlFor="is_current"
                                    value="Is Current"
                                />
                                <Switch
                                    name="is_current"
                                    checked={data.is_current}
                                    onCheckedChange={(checked) => {
                                        setData("is_current", checked as boolean);
                                    }}
                                />
                                <InputError
                                    message={errors.is_current}
                                />
                            </div>

                            <div className="button flex gap-x-4">
                                <Button type="submit"
                                 disabled={processing}
                                >Save</Button>
                                <DangerButton type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        resetAndClearErrors();
                                        setValue(null);
                                      
                                        field.forEach(f => {
                                            setData(f as any, "");
                                        });
                                    }}
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