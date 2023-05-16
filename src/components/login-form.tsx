import React from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../utils/email-regex";
import { Button } from "./button";

type FormValues = {
  email: string;
  password: string;
};

const defaultVaues = {
  login: "",
  password: "",
};

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: defaultVaues });

  const onSubmit = ({ email, password }: FormValues) => {
    //TODO: Implement login to the system
    console.log("entered login info: ", email, password);
  };

  return (
    <section className="bg-cyan-800">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
              Sign in to your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900  ">
                  Your email
                </label>
                {errors.email && (
                  <div className="pb-2">
                    <span className="text-red-700 text-sm">
                      {errors.email.message}
                    </span>
                  </div>
                )}
                <input
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  autoFocus
                  className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 placeholder-gray-400"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                {errors.password && (
                  <div className="pb-2">
                    <span className="text-red-700 text-sm">
                      {errors.password.message}
                    </span>
                  </div>
                )}
                <input
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 block w-full p-2.5 placeholder-gray-400"
                  autoFocus
                />
              </div>
              <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
