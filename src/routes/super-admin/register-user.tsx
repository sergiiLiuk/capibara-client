import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { RoleType, User } from "../../gql/graphql";
import { REGISTER_USER_MUTATION } from "../../graphql/mutations";
import { EMAIL_REGEX } from "../../utils/email-regex";
import { ListBox } from "../../components/list-box";

type FormValues = {
  email: string;
  password: string;
  username: string;
  role: RoleType;
};

const defaultVaues = {
  login: "",
  password: "",
};

interface RegisterVariables {
  email: string;
  password: string;
  username: string;
  role: RoleType;
}

const roles = [
  { value: "SUPER_ADMIN", name: "Super admin" },
  { value: "USER", name: "User" },
];

export default function RegisterUser() {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: defaultVaues });

  const [registerUser, { loading, error }] = useMutation<
    { registerUser: User },
    RegisterVariables
  >(REGISTER_USER_MUTATION, {
    onCompleted: ({ registerUser }) => {
      console.log("reg: ", registerUser);
    },
  });

  const onSubmit = async ({ email, password, username, role }: FormValues) => {
    registerUser({
      variables: {
        email: email,
        password: password,
        username: username,
        role: role as RoleType,
      },
    });
  };

  return (
    <div className="w-full bg-white shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
          Create new user
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <Label>Username</Label>
            {errors.username && (
              <div className="pb-2">
                <span className="text-red-700 text-sm">
                  {errors.username.message}
                </span>
              </div>
            )}
            <Input
              {...register("username", {
                required: "Please enter your username",
              })}
              type="text"
              error={errors.username ? true : false}
            />
          </div>
          <div>
            <Label>Email</Label>
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

          <ListBox
            label="Role"
            items={roles}
            onSelectCallback={(value) => {
              setValue("role", value as RoleType);
            }}
          />

          <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
            {error && (
              <div className="flex-1 pb-2">
                <span className="text-red-700 text-sm">{error.message}</span>
              </div>
            )}

            <Button variant="primary" type="submit">
              Register user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
