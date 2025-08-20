import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import LeaveTypeDialog from "./Components/LeaveTypeDialog";
import { leaveType } from "./leavetypes";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import Icon from "@/Components/Icon";
import { Badge } from "@/Components/ui/badge";
import LeaveTypeBreadCrumb from "./Components/LeaveTypeBreadCrumb";

export default function Index() {
   
    const leaveTypeRef = useRef<any>();
    const leaveTypes = usePage().props.leaveTypes as leaveType[];
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [editData, setEditData] = useState<Record<string, leaveType>>();
    const [leaveTypeId, setLeaveTypeId] = useState<string>("");
   
    return (
        <Authenticated>
            <Head title="Leave Type" />
            <div className="header px-8 py-4">
                <LeaveTypeBreadCrumb />
                <div className="row flex justify-between items-center">
                    <h6 className="text-2xl font-semibold text-gray-800">
                        Leave Type
                    </h6>
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="button"
                            onClick={() => {
                                leaveTypeRef.current.handleOpen();
                            }}
                        >
                            Add Leave Type
                        </Button>
                        <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                            Invite
                        </Button>
                    </div>
                </div>
            </div>

            <LeaveTypeDialog
                ref={leaveTypeRef}
                isEditingMode={isEditingMode ? true : false}
                editData={editData}
                leaveTypeId={Number(leaveTypeId)}
            />

            <div className="leave-type-list bg-white grid grid-cols-3 gap-4 p-4 px-8 py-4 rounded-md" style={{ margin: "16px 32px" }}>
                {leaveTypes.map((leaveType: any, index: number) => (
                    <Card
                        key={leaveType.id}
                        className="group hover:shadow-xl transition-all duration-300 border-2-gray-100 shadow-md bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50"
                    >
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-3 mb-3">
                                <Icon iconName="edit" className="w-5 h-5" 
                                 onClick={() => {
                                    leaveTypeRef.current.handleOpen();
                                    setIsEditingMode(true);
                                    setEditData(leaveType);
                                  }}
                                />
                                <div className="flex-1">
                                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                        {leaveType.leave_type_name}
                                    </CardTitle>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-gray-600">Leave Code:</span>
                                        <span className="font-medium text-gray-900">
                                            {leaveType.leave_code}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Description:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.description}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Max Days Per Year:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.max_days_per_year}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Carry Forward Allowed:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.carry_forward_allowed == true ? (
                                        <Badge variant={"success"}> Yes </Badge>
                                    ): (
                                        <Badge variant={"outline"}> No </Badge>
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Max Carry Forward Days:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.max_carry_forward_days}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Is Paid:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.is_paid == true ? (
                                        <Badge variant={"success"}> Yes </Badge>
                                    ): (
                                        <Badge variant={"outline"}> No </Badge>
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Require Approval:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.require_approval == true ? (
                                        <Badge variant={"success"}> Yes </Badge>
                                    ): (
                                        <Badge variant={"outline"}> No </Badge>
                                    )}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Notice Days Required:</span>
                                <span className="font-medium text-gray-900">
                                    {leaveType.notice_days_required}
                                </span>
                            </div>
                        </CardContent>

                        <CardFooter className="pt-4 border-t border-gray-100">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Icon iconName="edit" className="w-5 h-5 text-gray-700" 
                                     onClick={() => {
                                        leaveTypeRef.current.handleOpen();
                                        setIsEditingMode(true);
                                        setEditData(leaveType);
                                        setLeaveTypeId(leaveType.id);
                                    }}
                                    />
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Authenticated>
    )
}