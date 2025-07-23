import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <AuthenticatedLayout>
            <Head title="login" />
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-3xl font-bold">Employee</h1>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
