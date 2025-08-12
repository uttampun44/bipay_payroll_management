import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { usePage, WhenVisible } from "@inertiajs/react";
import { shiftGetTypes, shiftTypes } from "../types/shiftRef";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { useState } from "react";
import ShiftConfirmBox from "./ShiftConfirmBox";
import ShiftEditDialog from "./ShiftEdit";
import ShiftSkeletonTable from "./ShiftSkeletonTable";

export default function ShiftTable() {

    const shifts = usePage().props.shifts as shiftGetTypes[] | undefined;
    
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
    const [editData, setEditData] = useState<shiftTypes | undefined>(undefined);
  
    return (
        <div className="deparment-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>

           <WhenVisible
           data={shifts as []}
           fallback={
               <ShiftSkeletonTable />
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
                            Edit
                        </TableHead>
                        <TableHead className="text-center">
                            Delete
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
                                    <Button 
                                    variant="secondary"
                                     className="text-sm"
                                     size="sm"
                                    onClick={() =>{
                                        setSelectedId(shift.id);
                                        console.log(shift)
                                        setEditData(shift  as any);
                                        setIsConfirmOpen(true);
                                    }}>
                                       Edit
                                    </Button>
                                 </TableCell>
                                <TableCell className="p-2 text-center">
                                   <Button
                                     onClick={() => {
                                       setSelectedId(shift.id);
                                       setIsOpen(true);
                                     }}
                                     variant="outline"
                                     className="text-sm"
                                     size="sm"
                                   >
                                     Delete
                                   </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
           </WhenVisible>
           {
             selectedId && isOpen && (
               <ShiftConfirmBox
                id={selectedId as number}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
               />
             )
           }
           
           {
            <ShiftEditDialog
             id={selectedId as number}
             isOpen={isConfirmOpen}
             setOpen={setIsConfirmOpen}
             editData={editData as shiftTypes}
             />
           }
        </div>
    )
}