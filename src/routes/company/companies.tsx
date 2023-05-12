import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from "./company.api";
import { Company } from "../../gql/graphql";
import { Spinner } from "../../components/spinner";
import { Table, TableBody, TableHead } from "../../components/table/table";

export default function Companies() {
  const navigate = useNavigate();
  const { loading, error, data } = api.useCompaniesData();
  if (loading) return <Spinner />;
  if (error) return <div>Somethingwent wrong</div>;

  const { companies }: { companies: Company[] } = data;

  return (
    <div>
      <Table>
        <TableHead>
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              CVR
            </th>
          </tr>
        </TableHead>
        <TableBody>
          {(companies || []).map((company) => {
            return (
              <tr
                key={company.id}
                className="bg-white border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/companies/${company.id}`)}
              >
                <td className="px-4 py-2">{company.name}</td>
                <td className="px-4 py-2">{company.cvr}</td>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
