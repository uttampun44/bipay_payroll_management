import Header from "@/Components/Header";
import Icon from "@/Components/Icon";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useToggle from "@/hooks/useToggle";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [ isToggle, setToggle ] = useToggle(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />
            <Header />

            <section className="bg-[#F0F4FC] min-h-screen flex items-center justify-center">
                <div className="container max-w-[1440px] mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-20">
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

                    {/* Right Side (Form) */}
                    <div className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow-md max-w-sm">
                        <h2 className="text-2xl font-semibold text-center mb-6">
                            Sign In
                        </h2>
                        <form>
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
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                   
                                </div>
                            </div>
                            <div className="mt-4 relative">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type={isToggle ? "text" : "password"}
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />
                                 {
                                    isToggle ? (
                                        <Icon
                                            iconName="passwordHidden"
                                            className="absolute right-2 top-1/2 text-gray-400 cursor-pointer"
                                            onClick={() => setToggle(!isToggle)}
                                        />
                                    ) : (
                                        <Icon
                                            iconName="passwordVisibility"
                                            className="absolute right-2 top-1/2 text-gray-400 cursor-pointer"
                                            onClick={() => setToggle(!isToggle)}
                                        />
                                    )
                                }
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 relative">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-end">
                                <Link
                                    href={route("login")}
                                    className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
                                >
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
