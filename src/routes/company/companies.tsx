import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import gql from "graphql-tag";
import React from "react";
import { Link } from "react-router-dom";

const GET_COMPANIES = gql`
  query {
    companies {
      id
      name
      cvr
    }
  }
`;

const useGQLQuery = (key, query, variables?, config = {}) => {
  const endpoint = "http://localhost:5000/graphql";
  const fetchData = async () => await request(endpoint, query, variables);
  return useQuery(key, fetchData, config);
};

export default function Companies() {
  const { data, isLoading, error } = useGQLQuery(["companies"], GET_COMPANIES);
  if (!data && isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>Companies:</div>
      <div className="flex flex-col">
        {data.companies.map((record, idx) => {
          return (
            <Link
              to={`${record.id}`}
              className="flex flex-col border-2  p-2"
              key={idx}
            >
              <div>{record.id}</div>
              <div>{record.name}</div>
              <div>{record.cvr}</div>
            </Link>
          );
        })}
      </div>

      {/* <Link to={"/company/1"}>Go to company</Link> */}
    </div>
  );
}
