import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { AuthContext } from "../../context/auth-context";
import { EMAIL_REGEX } from "../../utils/email-regex";
import { useLogin } from "./login.api";

type FormValues = {
  email: string;
  password: string;
};

const defaultVaues = {
  login: "",
  password: "",
};

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: defaultVaues });
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { login } = useLogin();

  const [loginState, setLoginState] = useState({
    login: true,
    email: "",
    password: "",
    name: "",
  });

  const onSubmit = async ({ email, password }: FormValues) => {
    const { data } = await login({
      variables: { email: email, password: password },
    });

    if (data) {
      context.login(data.loginUser);
      navigate("/");
    }
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
                <Label>Your email</Label>
                {errors.email && (
                  <div className="pb-2">
                    <span className="text-red-700 text-sm">
                      {errors.email.message}
                    </span>
                  </div>
                )}
                <Input
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="name@company.com"
                  error={errors.email ? true : false}
                />
              </div>
              <div>
                <Label>Password</Label>
                {errors.password && (
                  <div className="pb-2">
                    <span className="text-red-700 text-sm">
                      {errors.password.message}
                    </span>
                  </div>
                )}

                <Input
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  type="password"
                  placeholder="••••••••"
                  error={errors.password ? true : false}
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
