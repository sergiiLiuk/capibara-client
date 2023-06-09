import React from "react";
import { Project } from "../../../gql/graphql";
import moment from "moment";
import { PageContainer } from "../../../components/page-container";

type Props = {
  project: Project;
};

export default function ProjectOverviewTab({ project }: Props) {
  return (
    <PageContainer>
      <div>Name: {project.name}</div>
      <div>Description: {project.description}</div>
      <div>Created at: {moment(project.createdAt).format("MM/DD/YYYY")}</div>
      <div>Updated at: {moment(project.updatedAt).format("MM/DD/YYYY")}</div>
    </PageContainer>
  );
}
