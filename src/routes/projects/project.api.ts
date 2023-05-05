import { useQuery, gql, useMutation } from "@apollo/client";
import { Project } from "../../gql/graphql";

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

const CREATE_PROJECT = /* GraphQL */ gql``;

export const useCreateProject = (variables: Project) => {
  const [createProject] = useMutation(CREATE_PROJECT, {
    variables: variables,
    update(cache, { data: { createProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS_QUERY });
      
      cache.writeQuery({
        query: GET_PROJECTS_QUERY,
        data: { projects: projects.concat([createProject]) },
      });
    },
  });
};
