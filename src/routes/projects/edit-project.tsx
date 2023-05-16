import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Project } from "../../gql/graphql";
import { useUpdateProject } from "./project.api";
import { Label } from "../../components/label";

type FormValues = {
  name: string;
  description?: string | null;
};

type Props = {
  project: Project;
};

export const EditProject = ({ project }: Props) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { updateProject } = useUpdateProject();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: project.name!,
      description: project.description,
    },
  });

  useEffect(() => {
    if (!dialog)
      reset({ name: project.name!, description: project.description });
  }, [dialog]);

  const onSubmit = ({ name, description }: FormValues) => {
    updateProject({
      variables: {
        id: project.id!,
        name: name,
        description: description,
      },
    });

    setDialog(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setDialog(true)}>
        Edit
      </Button>
      {dialog && (
        <Dialog
          title="Edit project"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 px-5 py-2.5">
                <div>
                  <Label>Project name</Label>
                  <Input
                    {...register("name")}
                    type="text"
                    placeholder="Project name"
                  />
                </div>
                <div>
                  <Label>Project description</Label>
                  <Input
                    {...register("description")}
                    type="text"
                    placeholder="Project description"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
                <Button variant="secondary" onClick={() => setDialog(false)}>
                  Cancel
                </Button>
                <Button variant="success" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </Dialog>
      )}
    </>
  );
};
