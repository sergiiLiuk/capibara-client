import React, { useState, useEffect } from "react";
import { Dialog } from "../../../components/dialog";
import { Button } from "../../../components/button";
import { Form } from "../../../components/form";
import { useForm } from "react-hook-form";

import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import { useMutation } from "@apollo/client";
import { RoleType, User } from "../../../gql/graphql";
import { REGISTER_USER_MUTATION } from "../../../graphql/mutations";
import { EMAIL_REGEX } from "../../../utils/email-regex";
import { ListBox } from "../../../components/list-box";
import { GET_USERS_QUERY } from "../../../graphql/queries";

type FormValues = {
  email: string;
  password: string;
  username: string;
  role: RoleType;
};

const defaultVaues = {
  login: "",
  password: "",
  username: "",
  role: RoleType.User,
};

interface RegisterVariables {
  email: string;
  password: string;
  username: string;
  role: RoleType;
}

const roles = [
  { value: "USER", name: "User" },
  { value: "SUPER_ADMIN", name: "Super admin" },
];

export const RegisterUser = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  useEffect(() => {
    if (!dialog) reset(defaultVaues);
  }, [dialog]);

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
    onError: (error) => console.error(error.message),
    update: (cache, { data }) => {
      const currentUsers = cache.readQuery<{ users: User[] }>({
        query: GET_USERS_QUERY,
      });

      cache.writeQuery({
        query: GET_USERS_QUERY,
        data: {
          users: [...currentUsers?.users!, { ...data?.registerUser }],
        },
      });
      setDialog(false);
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
    <>
      <Button variant="primary" onClick={() => setDialog(true)}>
        Register user
      </Button>
      {dialog && (
        <Dialog
          title="Register user"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 px-5 py-2.5">
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
            </div>
            <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
              <Button variant="secondary" onClick={() => setDialog(false)}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Register user
              </Button>
            </div>
          </Form>
        </Dialog>
      )}
    </>
  );
};
