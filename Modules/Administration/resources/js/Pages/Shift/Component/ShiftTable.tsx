import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Link, usePage, WhenVisible } from "@inertiajs/react";
import { shiftGetTypes } from "../types/shiftRef";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import Icon from "@/Components/Icon";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { useState } from "react";
import ShiftConfirmBox from "./ShiftConfirmBox";

export default function ShiftTable() {

    const shifts = usePage().props.shifts as shiftGetTypes[] | undefined;
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
   
    return (
        <div className="deparment-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>

           <WhenVisible
           data={shifts as []}
           fallback={
               <div>Loading...</div>
           }
           >
             <Table className="h-[500px] overflow-y-auto">
                <TableHeader className="bg-neutral-100 p-4 w-full">
                    <TableRow>
                        <TableHead className="text-center">
                            ID
                        </TableHead>
                        <TableHead className="text-center">
                            Shift Name
                        </TableHead>
                        <TableHead className="text-center">
                            Shift Code
                        </TableHead>
                        <TableHead className="text-center">
                            Start Time
                        </TableHead>
                        <TableHead className="text-center">
                            Start End
                        </TableHead>
                        <TableHead className="text-center">
                            Break Duration
                        </TableHead>
                        <TableHead className="text-center">
                            Working Hours
                        </TableHead>
                        <TableHead className="text-center">
                            Overtime Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Night Shift Allowance
                        </TableHead>
                        <TableHead className="text-center">
                            Weekend Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Status
                        </TableHead>
                        <TableHead className="text-center">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        shifts?.map((shift, index) => (
                            <TableRow key={shift.id} className="text-center">
                                <TableCell className="p-2">
                                    {index + 1}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.shift_name}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.shift_code}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.start_time}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.end_time}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.break_duration}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.working_hours}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.overtime_rate}
                                </TableCell>

                                <TableCell className="p-2">
                                    {shift.night_shift_allowance}
                                </TableCell>
                                <TableCell className="p-2">
                                    {shift.weekend_rate}
                                </TableCell>
                                <TableCell className="p-2">
                                    {
                                        shift.status === 1 ? (
                                            <Badge variant={"success"}>
                                                Active
                                            </Badge>
                                        ) : (
                                            <Badge variant={"destructive"}>
                                                Inactive
                                            </Badge>
                                        )
                                    }
                                </TableCell>

                                <TableCell className="p-2 text-center">
                                    <div className="flex justify-center">
                                        <Popover
                                            open={openPopoverId === shift.id}
                                            onOpenChange={(open) => {
                                                setOpenPopoverId(open ? shift.id : null)  
                                            }}
                                        >
                                            <PopoverTrigger>
                                                <Icon
                                                    iconName="action"
                                                    className="w-full"
                                                />
                                            </PopoverTrigger>
                                            <PopoverContent className="w-40">
                                                <div className="flex flex-col gap-4 text-center">
                                                    <Button
                                                        variant="secondary"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsOpen(true);
                                                        }}
                                                    >
                                                      Edit Shift
                                                    </Button>
                                                    <ShiftConfirmBox
                                                      id={shift.id}
                                                      isOpen={isOpen}
                                                      setOpen={setIsOpen}
                                                      />
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
           </WhenVisible>
        </div>
    )
}