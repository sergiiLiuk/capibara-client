import React from "react";
import { TabHeader } from "../../components/details-header";
import { Spinner } from "../../components/spinner";
import { Project } from "../../gql/graphql";
import { CreateProject } from "./create-project";
import * as api from "./project.api";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const { loading, error, data } = api.useProjectsData();
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong</div>;

  const { projects }: { projects: Project[] } = data;

  return (
    <div>
      <TabHeader>
        <CreateProject />
      </TabHeader>

      <div className="flex flex-col">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {(projects || []).map((project) => {
              return (
                <tr
                  key={project.id}
                  className="bg-white border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <td className="px-4 py-2">{project.name}</td>
                  <td className="px-4 py-2">
                    {project.description ? project.description : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
