import { useQuery } from "@tanstack/react-query";
import { Company } from "../../gql/graphql";
import { apiGQL } from "../../utils/api-gql";

export const GET_COMPANIES_QUERY = /* GraphQL */ `
  query {
    companies {
      id
      name
      cvr
    }
  }
`;

export const useCompaniesData = (variables?: any) => {
  const fetchData = async () => await apiGQL<Company[]>(GET_COMPANIES_QUERY);
  return useQuery(["companies"], fetchData);
};
