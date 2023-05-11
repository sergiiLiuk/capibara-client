import { useQuery, gql, useMutation, QueryResult } from "@apollo/client";
import { Project } from "../../gql/graphql";
import { log } from "console";

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
      onError: (error) => console.error(error.message),
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
  return { createProject };
}

const DELETE_PROJECT = /* GraphQL */ gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export function useDeleteProject() {
  const [deleteProject] = useMutation<Project, { id: string }>(DELETE_PROJECT, {
    onError: (error) => console.error(error.message),
    update: (cache, { data: { deleteProject } }) => {
      const { projects } = cache.readQuery<Project[]>({
        query: GET_PROJECTS_QUERY,
      });

      cache.writeQuery({
        query: GET_PROJECTS_QUERY,
        data: {
          projects: projects.filter(
            (project: Project) => project.id !== deleteProject.id
          ),
        },
      });
    },
  });
  return { deleteProject };
}

const UPDATE_PROJECT = /* GraphQL */ gql`
  mutation updateProject($id: ID!, $name: String!, $description: String!) {
    updateProject(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

interface UpdateProjectVariables {
  id: string;
  name: string;
  description?: string | null;
}

export function useUpdateProject() {
  const [updateProject] = useMutation<Project, UpdateProjectVariables>(
    UPDATE_PROJECT,
    {
      onError: (error) => console.error(error.message),
    }
  );
  return { updateProject };
}
