import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/button";
import { Dialog } from "../../../components/dialog";
import { Form } from "../../../components/form";

import { useMutation } from "@apollo/client";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
import { User } from "../../../gql/graphql";
import { UPDATE_USER_MUTATION } from "../../../graphql/mutations";
import { GET_USERS_QUERY } from "../../../graphql/queries";
import { EMAIL_REGEX } from "../../../utils/email-regex";

type Props = {
  user: User;
};

type FormValues = {
  email: string;
  username: string;
};

interface UpdateVariables {
  id: string;
  email: string;
  username: string;
}

export const EditUser = ({ user }: Props) => {
  const [dialog, setDialog] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: user });

  const [updateUser] = useMutation<User, UpdateVariables>(
    UPDATE_USER_MUTATION,
    {
      onError: (error) => console.error(error.message),
      refetchQueries: [{ query: GET_USERS_QUERY }],
      onCompleted: () => {
        setDialog(false);
      },
    }
  );

  const onSubmit = async ({ email, username }: FormValues) => {
    updateUser({
      variables: {
        id: user.id,
        email: email,
        username: username,
      },
    });
  };

  return (
    <>
      <Button variant="success" onClick={() => setDialog(true)}>
        Edit user
      </Button>
      {dialog && (
        <Dialog
          title="Edit user"
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
            </div>
            <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
              <Button variant="secondary" onClick={() => setDialog(false)}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Dialog>
      )}
    </>
  );
};
