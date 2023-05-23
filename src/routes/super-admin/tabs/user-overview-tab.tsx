import React from "react";
import { User } from "../../../gql/graphql";
import { Table, TableBody, TableHead } from "../../../components/table/table";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USERS_QUERY } from "../../../graphql/queries";
import { Spinner } from "../../../components/spinner";

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
        </tr>
      </TableHead>
      <TableBody>
        {(users || []).map((user, idx) => {
          return (
            <tr
              key={idx}
              className="bg-white border-b hover:bg-gray-100 cursor-pointer"
            >
              <td className="px-4 py-2">{user.username}</td>
              <td className="px-4 py-2">{user.role}</td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}
