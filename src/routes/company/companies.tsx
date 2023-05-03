import React from "react";
import { Link } from "react-router-dom";
import * as api from "./company.api";
import { Company } from "../../gql/graphql";

export default function Companies() {
  const { loading, error, data } = api.useCompaniesData();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Somethingwent wrong</div>;

  const { companies }: { companies: Company[] } = data;

  return (
    <div>
      <div>Companies:</div>
      <div className="flex flex-col">
        {companies.map((record, idx) => {
          return (
            <Link
              to={`${record.id}`}
              className="flex flex-col border-2 p-2"
              key={idx}
            >
              <div>{record.id}</div>
              <div>{record.name}</div>
              <div>{record.cvr}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
