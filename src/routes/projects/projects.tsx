import React from "react";
import { Link } from "react-router-dom";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";
import { Project } from "../../gql/graphql";
import { CreateProject } from "./create-project";
import * as api from "./project.api";

export default function Projects() {
  const { loading, error, data } = api.useProjectsData();
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
        {projects.map((record, idx) => {
          return (
            <Link
              to={`${record.id}`}
              className="flex flex-col border-2 p-2"
              key={idx}
            >
              <div>{record.id}</div>
              <div>{record.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
