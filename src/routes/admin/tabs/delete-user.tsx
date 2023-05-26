import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button } from "../../../components/button";
import { Dialog } from "../../../components/dialog";
import { Form } from "../../../components/form";
import { Label } from "../../../components/label";
import { User } from "../../../gql/graphql";
import { DELETE_USER } from "../../../graphql/mutations";
import { GET_USERS_QUERY } from "../../../graphql/queries";

type Props = {
  user: User;
};

export const DeleteUser = ({ user }: Props) => {
  const [dialog, setDialog] = useState<boolean>(false);

  const [deleteUser] = useMutation<{ deleteUser: User }, { id: string }>(
    DELETE_USER,
    {
      onError: (error) => console.error(error.message),
      update: (cache, { data }) => {
        const currentUsers = cache.readQuery<{ users: User[] }>({
          query: GET_USERS_QUERY,
        });
        cache.writeQuery({
          query: GET_USERS_QUERY,
          data: {
            users: currentUsers?.users.filter(
              (user: User) => user.id !== data?.deleteUser.id
            ),
          },
        });
        setDialog(false);
      },
    }
  );

  const onSubmit = () => {
    deleteUser({ variables: { id: user.id } });
  };

  return (
    <>
      <Button variant="danger" onClick={() => setDialog(true)}>
        Delete
      </Button>
      {dialog && (
        <Dialog
          title="Delete user"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <div>
            <Form onSubmit={onSubmit}>
              <div className="flex flex-col gap-2 px-5 py-2.5">
                <Label>
                  Are you sure, you want delete user: {user.username} ?
                </Label>
              </div>
              <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
                <Button variant="secondary" onClick={() => setDialog(false)}>
                  Cancel
                </Button>
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </div>
            </Form>
          </div>
        </Dialog>
      )}
    </>
  );
};
