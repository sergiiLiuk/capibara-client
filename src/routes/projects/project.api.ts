//TODO: finish splitting hooks

import { gql, useMutation, useQuery } from "@apollo/client";
import { Project } from "../../gql/graphql";
import { GET_PROJECTS_QUERY, GET_PROJECT_QUERY } from "../../graphql/queries";

export const useProjectData = (variables: { id: string }) => {
  return useQuery(GET_PROJECT_QUERY, { variables });
};

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
