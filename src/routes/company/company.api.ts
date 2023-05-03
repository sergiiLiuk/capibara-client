import { useQuery, gql } from "@apollo/client";

const GET_COMPANIES_QUERY = /* GraphQL */ gql`
  query getCompanies {
    companies {
      id
      name
      cvr
    }
  }
`;

export const useCompaniesData = () => {
  return useQuery(GET_COMPANIES_QUERY);
};

const GET_COMPANY_QUERY = /* GraphQL */ gql`
  query ($id: ID!) {
    company(id: $id) {
      id
      name
      cvr
    }
  }
`;

export const useCompanyData = (variables: { id: string }) => {
  return useQuery(GET_COMPANY_QUERY, { variables });
};
