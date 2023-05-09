import { useQuery, gql, useMutation, QueryResult } from "@apollo/client";
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

const CREATE_PROJECT = /* GraphQL */ gql`
  mutation createProject($name: String!, $description: String!) {
    createProject(name: $name, description: $description) {
      id
      name
      description
      company {
        id
      }
    }
  }
`;

interface CreateProjectVariables {
  name: string;
  description?: string;
  companyId?: string;
}

export function useCreateProject() {
  const [createProject] = useMutation<Project, CreateProjectVariables>(
    CREATE_PROJECT,
    {
      update: (cache, { data: { createProject } }) => {
        const { projects } = cache.readQuery<Project[]>({
          query: GET_PROJECTS_QUERY,
        });
        cache.writeQuery({
          query: GET_PROJECTS_QUERY,
          data: {
            projects: [...projects, { ...createProject }],
          },
        });
      },
    }
  );
  return createProject;
}
