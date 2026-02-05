import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeLeaveBalanceBreadCrumb from "./Components/EmployeeLeaveBalanceBreadCrumb";
import { Button } from "@/Components/ui/button";
import EmployeeLeaveBalanceTable from "./Components/EmployeeLeaveBalanceTable";
import { router } from "@inertiajs/react";

export default function Index() {
  return (
    <Authenticated>
          <div className="header px-8 py-4">
                <EmployeeLeaveBalanceBreadCrumb />
                <div className="row flex justify-between items-center">
                    <h6 className="text-2xl font-semibold text-gray-800">
                        Employee Leave Balances
                    </h6>
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="button"
                            onClick={() => {
                                console.log("Add Employee Leave Balance");
                              router.get(route('employee-leave-balances.create'));
                            }}
                        >
                           Add Employee Leave Balance
                        </Button>
                        <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                            Invite
                        </Button>
                    </div>
                </div>
            </div>
              <div className="leave-type-list bg-white p-4 px-8 py-4 rounded-md" style={{ margin: "16px 32px" }}>
                <EmployeeLeaveBalanceTable />
              </div>
    </Authenticated>
  );
}