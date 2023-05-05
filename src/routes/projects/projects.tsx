import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../../gql/graphql";
import * as api from "./project.api";
import { TabHeader } from "../../components/details-header";
import { Button } from "../../components/button";
import { Spinner } from "../../components/spinner";

export default function Projects() {
  const { loading, error, data } = api.useProjectsData();
  if (loading) return <Spinner />;
  if (error) return <div>Somethingwent wrong</div>;

  const { projects }: { projects: Project[] } = data;

  return (
    <div>
      <TabHeader>
        <Button onClick={() => console.log("Create project")}>
          Create project
        </Button>
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
