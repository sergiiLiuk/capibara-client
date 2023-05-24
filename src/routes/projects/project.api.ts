import { gql, useMutation, useQuery } from "@apollo/client";
import { Project } from "../../gql/graphql";
import { GET_PROJECTS_QUERY, GET_PROJECT_QUERY } from "../../graphql/queries";

export const useProjectsData = () => {
  return useQuery(GET_PROJECTS_QUERY);
};

export const useProjectData = (variables: { id: string }) => {
  return useQuery(GET_PROJECT_QUERY, { variables });
};

const CREATE_PROJECT = /* GraphQL */ gql`
  mutation createProject($name: String!, $description: String!) {
    createProject(projectInput: { name: $name, description: $description }) {
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
  const [createProject] = useMutation<
    { createProject: Project },
    CreateProjectVariables
  >(CREATE_PROJECT, {
    onError: (error) => console.error(error.message),
    update: (cache, { data }) => {
      const currentProjects = cache.readQuery<{ projects: Project[] }>({
        query: GET_PROJECTS_QUERY,
      });
      cache.writeQuery({
        query: GET_PROJECTS_QUERY,
        data: {
          projects: [...currentProjects?.projects!, { ...data?.createProject }],
        },
      });
    },
  });
  return { createProject };
}

const DELETE_PROJECT = /* GraphQL */ gql`
  mutation deleteProject($id: ID!) {
    deleteProject(ID: $id) {
      id
    }
  }
`;

export function useDeleteProject() {
  const [deleteProject] = useMutation<
    { deleteProject: Project },
    { id: string }
  >(DELETE_PROJECT, {
    onError: (error) => console.error(error.message),
    update: (cache, { data }) => {
      const currentProjects = cache.readQuery<{ projects: Project[] }>({
        query: GET_PROJECTS_QUERY,
      });

      cache.writeQuery({
        query: GET_PROJECTS_QUERY,
        data: {
          projects: currentProjects?.projects.filter(
            (project: Project) => project.id !== data?.deleteProject.id
          ),
        },
      });
    },
  });
  return { deleteProject };
}
