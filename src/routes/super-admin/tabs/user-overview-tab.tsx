import { useQuery } from "@apollo/client";
import moment from "moment";
import React from "react";
import { Button } from "../../../components/button";
import { Spinner } from "../../../components/spinner";
import { Table, TableBody, TableHead } from "../../../components/table/table";
import { User } from "../../../gql/graphql";
import { GET_USERS_QUERY } from "../../../graphql/queries";
import { DeleteUser } from "./delete-user";
import { EditUser } from "./edit-user";

export default function UserOverviewTab() {
  const { loading: isLoading, error, data } = useQuery(GET_USERS_QUERY);

  if (isLoading) return <Spinner />;

  //TODO: implement error message component
  if (error) return <div>Somethingwent wrong</div>;

  const { users }: { users: User[] } = data;

  return (
    <Table>
      <TableHead>
        <tr>
          <th scope="col" className="px-6 py-3">
            Userame
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Created
          </th>
          <th className="px-6 py-3 flex justify-end ">Actions</th>
        </tr>
      </TableHead>
      <TableBody>
        {(users || []).map((user) => {
          return (
            <tr
              key={user.id}
              className="bg-white border-b hover:bg-gray-100 cursor-pointer"
            >
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {user.createdAt
                  ? moment(user.createdAt).format("MM/DD/YYYY")
                  : "-"}
              </td>
              <td className="px-4 py-2 flex justify-end gap-2">
                <EditUser user={user} />
                <DeleteUser user={user} />
              </td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}
