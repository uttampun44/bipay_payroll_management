import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Input } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { Separator } from "@radix-ui/react-select";
import { ArrowRight, Calendar, CalendarDays, CheckCircle, Clock, Loader, RotateCcw, Timer, User } from "lucide-react";
import { useState } from "react";

export default function EmployeeLeaveBalanceForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {data, setData} = useForm();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            console.log(data);
        } catch (error) {
            setIsSubmitting(false);
        }
    }
    return (
        <div className="min-h-screen p-4">
                <Card>
                    <CardHeader className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">Leave Allocation Form</CardTitle>
                                <CardDescription className="text-base">
                                    Configure employee leave entitlements and track usage
                                </CardDescription>
                            </div>
                        </div>
                        <Separator />
                    </CardHeader>

                    <CardContent className="space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                                    <User className="h-5 w-5" />
                                    Employee Information
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <User className="h-4 w-4" />
                                            Employee ID
                                        </InputLabel>
                                        <Input
                                            placeholder="Enter employee ID"
                                            className="h-12 text-base rounded-md"
                                            name="employee_id"
                                        />
                                        <p className="text-sm text-slate-500">Unique identifier for the employee</p>
                                    </div>

                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <Calendar className="h-4 w-4" />
                                            Leave Type
                                        </InputLabel>
                                        <Select
                                            // value={formData.leave_type_id}
                                            // onValueChange={(value) => setFormData({ ...formData, leave_type_id: value })}
                                        >
                                            <SelectTrigger className="h-12 text-base">
                                                <SelectValue placeholder="Select leave type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {/* {leaveTypes.map((type) => (
                                                    <SelectItem key={type.value} value={type.value}>
                                                        {type.label}
                                                    </SelectItem>
                                                ))} */}
                                            </SelectContent>
                                        </Select>
                                        <p className="text-sm text-slate-500">Type of leave allocation</p>
                                    </div>
                                </div>
                            </div>
                            <Separator />

                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                                    <CalendarDays className="h-5 w-5" />
                                    Leave Days Allocation
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                            Allocated Days
                                        </InputLabel>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            className="h-12 text-base text-center font-semibold rounded-md"
                                           
                                        />
                                        <p className="text-sm text-slate-500">Total days allocated</p>
                                    </div>

                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <Clock className="h-4 w-4 text-orange-500" />
                                            Used Days
                                        </InputLabel>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            className="h-12 text-base text-center font-semibold rounded-md"
                                          
                                        />
                                        <p className="text-sm text-slate-500">Days already taken</p>
                                    </div>

                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <RotateCcw className="h-4 w-4 text-blue-500" />
                                            Carried Forward
                                        </InputLabel>
                                        <Input
                                            type="number"
                                            placeholder="0"
                                            className="h-12 text-base text-center font-semibold rounded-md"
                                        />
                                        <p className="text-sm text-slate-500">Days from previous year</p>
                                    </div>

                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <Timer className="h-4 w-4 text-purple-500" />
                                            Remaining Days
                                        </InputLabel>
                                        <div className="relative">
                                            <Input
                                                type="number"
                                                placeholder="0"
                                                className="h-12 text-base text-center font-semibold rounded-md"
                                               
                                            />
                                            {/* {calculatedRemaining !== Number(formData.remaining_days) && formData.remaining_days && (
                                                <Badge variant="secondary" className="absolute -top-2 -right-2 text-xs">
                                                    Calc: {calculatedRemaining}
                                                </Badge>
                                            )} */}
                                        </div>
                                        <p className="text-sm text-slate-500">Available days remaining</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                                        <span>Quick Calculation:</span>
                                        <span className="font-mono">
                                            {/* {allocatedDays} + {carriedForwardDays} - {usedDays} = {calculatedRemaining} */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Separator />

                            <div className="space-y-6">
                                <div className="flex items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-300">
                                    <Calendar className="h-5 w-5" />
                                    Period Information
                                </div>

                                <div className="max-w-xs">
                                    <div className="space-y-2">
                                        <InputLabel className="flex items-center gap-2 text-base font-medium">
                                            <Calendar className="h-4 w-4" />
                                            Year
                                        </InputLabel>
                                        <Input
                                            type="number"
                                            placeholder="2024"
                                            className="h-12 text-base text-center font-semibold rounded-md"
                                        />
                                        <p className="text-sm text-slate-500">Leave allocation year</p>
                                    </div>
                                </div>
                            </div>
                            <Separator />

                            <div className="pt-4 flex gap-x-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="min-w-[200px] h-12 text-base font-semibold"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="mr-2 h-4 w-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            Save Leave Allocation
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                                <DangerButton 
                                    onClick={() => {
                                        window.history.back();
                                    }}
                                >
                                    Back
                                </DangerButton>
                            </div>
                        </form>
                    </CardContent>
                </Card>
        </div>
    )
}