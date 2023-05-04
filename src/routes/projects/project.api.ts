import { useQuery, gql } from "@apollo/client";

const GET_PROJECTS_QUERY = /* GraphQL */ gql`
  query getProjects {
    projects {
      id
      name
      description
      company {
        id
        name
      }
    }
  }
`;

export const useProjectsData = () => {
  return useQuery(GET_PROJECTS_QUERY);
};

const GET_PROJECT_QUERY = /* GraphQL */ gql`
  query ($id: ID!) {
    project(id: $id) {
      id
      name
      description
      company {
        id
        name
      }
    }
  }
`;

export const useProjectData = (variables: { id: string }) => {
  return useQuery(GET_PROJECT_QUERY, { variables });
};
