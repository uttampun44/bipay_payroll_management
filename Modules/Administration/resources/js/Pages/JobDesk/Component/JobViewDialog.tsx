import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { viewJobsDetails } from "../types/viewjobsdetails";
import { striptag } from "@/utils/striptag";

type JobViewDialogProps = {
    id: number;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    viewData: viewJobsDetails;
};

export default function JobViewDialog({ isOpen, setOpen, viewData }: JobViewDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle>View Job Details</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                     This is the view details of the job desk
                </DialogDescription>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Job Title</strong>
                            <div className="text-sm">{viewData?.job_title}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Job Code</strong>
                            <div className="text-sm">{viewData?.job_code}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Job Description</strong>
                            <div className="text-sm">{striptag(viewData?.job_description)}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Minimum Salary</strong>
                            <div className="text-sm">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).
                                format(Number(viewData?.minimum_salary))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Maximum Salary</strong>
                            <div className="text-sm">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).
                                format(Number(viewData?.maximum_salary))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Job Requirements</strong>
                            <div className="text-sm">{striptag(viewData?.job_requirements)}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Job Responsibilities</strong>
                            <div className="text-sm">{striptag(viewData?.job_responsibilities)}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <strong className="text-base text-black">Department</strong>
                            <div className="text-sm">{viewData?.department.department_name}</div>
                        </div>
                    </div>
              
            </DialogContent>
        </Dialog>
    )
}