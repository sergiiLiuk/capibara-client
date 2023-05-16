import React, { useState } from "react";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import { Form } from "../../components/form";
import { Project } from "../../gql/graphql";
import * as api from "./project.api";
import { useNavigate } from "react-router-dom";
import { Label } from "../../components/label";

type Props = {
  project: Project;
};

export const DeleteProject = ({ project }: Props) => {
  const navigate = useNavigate();
  const [dialog, setDialog] = useState<boolean>(false);
  const { deleteProject } = api.useDeleteProject();

  const onSubmit = () => {
    deleteProject({ variables: { id: project.id! } });
    setDialog(false);
    navigate("/projects");
  };

  return (
    <>
      <Button variant="danger" onClick={() => setDialog(true)}>
        Delete
      </Button>
      {dialog && (
        <Dialog
          title="Delete project"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <div>
            <Form onSubmit={onSubmit}>
              <div className="flex flex-col gap-2 px-5 py-2.5">
                <Label>
                  Are you sure, you want delete project: {project.name}
                </Label>
              </div>
              <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
                <Button variant="secondary" onClick={() => setDialog(false)}>
                  Cancel
                </Button>
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </div>
            </Form>
          </div>
        </Dialog>
      )}
    </>
  );
};
