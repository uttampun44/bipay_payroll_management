import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeLeaveBalanceBreadCrumb from "./Components/EmployeeLeaveBalanceBreadCrumb";
import { useForm } from "@inertiajs/react";
import { Input } from "@headlessui/react";
import { Button } from "@/Components/ui/button";
import DangerButton from "@/Components/DangerButton";
import EmployeeLeaveBalanceForm from "./Components/EmployeeLeaveBalanceForm";

export default function Create() {
    const { data, setData } = useForm({
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        try {

        } catch (error) {

        }
    }
    return (
        <Authenticated>
            <EmployeeLeaveBalanceBreadCrumb />
               <EmployeeLeaveBalanceForm />
        </Authenticated >
    );
}