import React from "react";
import { Project } from "../../../gql/graphql";

type Props = {
  project: Project;
};

export default function ProjectOverviewTab({ project }: Props) {
  console.log();
  return (
    <div className="p-2">
      <div>Name: {project.name}</div>
      <div>Description: {project.description}</div>
      <div>Company: {project.company?.name}</div>
    </div>
  );
}
