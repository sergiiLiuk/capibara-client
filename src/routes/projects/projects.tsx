import React from "react";
import { Link } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";
import { Project } from "../../gql/graphql";
import { CreateProject } from "./create-project";
import * as api from "./project.api";

export default function Projects() {
  const { loading, error, data } = api.useProjectsData();
  const { deleteProject } = api.useDeleteProject();
  if (loading) return <Spinner />;
  if (error) return <div>Somethingwent wrong</div>;

  const { projects }: { projects: Project[] } = data;

  return (
    <div>
      <TabHeader>
        <CreateProject />
      </TabHeader>
      <div>Projects:</div>
      <div className="flex flex-col">
        {projects.map((project, idx) => {
          return (
            <div className="flex border-t-2 p-2" key={idx}>
              <Link to={`${project.id}`} className="flex-1 flex gap-1">
                <div>{project.id}</div>
                <div>{project.name}</div>
              </Link>
              <button
                onClick={() => {
                  deleteProject({ variables: { id: project.id! } });
                }}
              >
                Delete project
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
