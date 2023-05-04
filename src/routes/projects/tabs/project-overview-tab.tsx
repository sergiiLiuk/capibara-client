import React, { Fragment } from "react";
import { Project } from "../../../gql/graphql";

type Props = {
  project: Project;
};

export default function ProjectOverviewTab({ project }: Props) {
  return (
    <div>
      Project overview tab:
      <div>Name: {project.name}</div>
      <div>Description: {project.description}</div>
      <div>Company: {project.company?.name}</div>
    </div>
  );
}
