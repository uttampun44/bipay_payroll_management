import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeLeaveBalanceBreadCrumb from "./Components/EmployeeLeaveBalanceBreadCrumb";

export default function Edit() {
    return (
       <Authenticated> 
          <EmployeeLeaveBalanceBreadCrumb />
          <div className="employee-container">
            
          </div>
       </Authenticated>
    );
}