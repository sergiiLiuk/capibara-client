import { useQuery } from "@tanstack/react-query";
import { Company } from "../../gql/graphql";
import { apiGQL } from "../../utils/api-gql";

const GET_COMPANIES_QUERY = /* GraphQL */ `
  query {
    companies {
      id
      name
      cvr
    }
  }
`;

export const useCompaniesData = (variables?: any) => {
  const fetchData = async () =>
    await apiGQL<Company[]>(GET_COMPANIES_QUERY, variables);
  return useQuery(["companies"], fetchData);
};

const GET_COMPANY_QUERY = /* GraphQL */ `
  query {
    company {
      id
      name
      cvr
    }
  }
`;

export const useCompanyData = (variables: { id: string }) => {
  const fetchData = async () =>
    await apiGQL<Company>(GET_COMPANY_QUERY, { args: variables });
  return useQuery(["company"], fetchData);
};
