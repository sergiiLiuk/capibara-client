import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import gql from "graphql-tag";

//TODO: move query to its file
export const GET_COMPANIES = gql`
  query {
    companies {
      id
      name
      cvr
    }
  }
`;

//TODO: types
export const useGQLQuery = (key, query, variables?, config = {}) => {
  const endpoint = "http://localhost:5000/graphql";
  const fetchData = async () => await request(endpoint, query, variables);
  return useQuery(key, fetchData, config);
};
