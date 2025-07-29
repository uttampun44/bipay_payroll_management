import { Button} from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";
import Header from "@/Components/Header";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { toast } from "sonner";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
            onSuccess: () => {
                toast.success("Login Successful");
            }
        });
    };

    return (
        <React.Fragment>
            <Head title="Log in" />
            <Header />

            <section className="bg-[#F0F4FC] min-h-screen  flex items-center justify-center">
                <div className="container max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-20">
                    <div className="w-full lg:w-[70%] flex flex-col items-center text-center gap-6">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Welcome to{" "}
                            <span className="text-blue-500">BIPAY</span>
                        </h1>
                        <p className="text-base md:text-lg max-w-xl">
                            Bipay is a payroll management platform that allows
                            you to manage your payroll, employee information,
                            and taxes all in one place.
                        </p>
                        <img
                            src="assets/images/login.png"
                            alt="login"
                            className="w-auto h-auto"
                        />
                    </div>

                    <div className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h2 className="text-2xl font-semibold text-center mb-6">
                            Sign In
                        </h2>
                        <form onSubmit={submit}>
                            <div className="space-y-4">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Email"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="text-right text-sm text-[#6C737F]">
                                    <Link href="/recover">
                                        Forgot Password?
                                    </Link>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="mt-6 w-full bg-blue-500 p-1.5 text-white rounded-md"
                                disabled={processing}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
