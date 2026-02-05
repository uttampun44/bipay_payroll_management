import Icon from "@/Components/Icon";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { leaveType } from "../leavetypes";
import React from "react";


type LeaveTypeDeatilsProps = {
    data: leaveType[];
};
export default function LeaveTypeDeatils({ data }: LeaveTypeDeatilsProps) {
    
    const leaveTypes = Array.isArray(data) ? data : [];

    return ( 
        <React.Fragment>
            {leaveTypes.map((leaveType: any, index: number) => (
            <Card
                key={leaveType.id}
                className="group hover:shadow-xl transition-all duration-300 border-2-gray-100 shadow-md bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50"
            >
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon iconName="edit" className="w-5 h-5" />
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
                            {leaveType.carry_forward_allowed ? "Yes" : "No"}
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
                            {leaveType.is_paid ? "Yes" : "No"}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">Require Approval:</span>
                        <span className="font-medium text-gray-900">
                            {leaveType.require_approval ? "Yes" : "No"}
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
                            <Icon iconName="edit" className="w-5 h-5" />
                            <span className="text-gray-600">Edit</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon iconName="trash" className="w-5 h-5" />
                            <span className="text-gray-600">Delete</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        ))}
        </React.Fragment>    
    )
}