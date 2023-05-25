import moment from "moment";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "../../components/card";
import { TabHeader } from "../../components/details-header";
import { Grid } from "../../components/grid";
import { PageContainer } from "../../components/page-container";
import { Spinner } from "../../components/spinner";
import { Project } from "../../gql/graphql";
import { CreateProject } from "./create-project";
import * as api from "./project.api";
import { AuthContext } from "../../context/auth-context";

export default function Projects() {
  const { userId } = useContext(AuthContext);

  if (!userId) return;

  const { loading, error, data } = api.useProjectsData({
    userId: userId,
  });
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  const { projects }: { projects: Project[] } = data;

  return (
    <div>
      <TabHeader>
        <CreateProject />
      </TabHeader>
      <PageContainer>
        <Grid>
          {(projects || []).map((project) => {
            return (
              <Card
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <CardTitle>{project.name}</CardTitle>
                <CardContent>
                  <div>
                    <span>Description: </span>
                    {project.description ? project.description : "-"}
                  </div>
                  <div>
                    <span>Created: </span>
                    {moment(project.createdAt).format("MM/DD/YYYY")}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </PageContainer>
    </div>
  );
}
