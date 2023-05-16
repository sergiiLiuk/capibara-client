import React, { useState, useEffect } from "react";
import { Dialog } from "../../components/dialog";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { useForm } from "react-hook-form";
import { useCreateProject } from "./project.api";
import { Input } from "../../components/input";

type FormValues = {
  name: string;
  description?: string;
};

const defaultVaues = {
  name: "",
  description: "",
};

export const CreateProject = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { createProject } = useCreateProject();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: defaultVaues });

  useEffect(() => {
    if (!dialog) reset(defaultVaues);
  }, [dialog]);

  const onSubmit = ({ name, description }: FormValues) => {
    createProject({
      variables: {
        name: name,
        description: description,
      },
    });
    setDialog(false);
  };
  //TODO: create input & label components
  return (
    <>
      <Button variant="primary" onClick={() => setDialog(true)}>
        Create project
      </Button>
      {dialog && (
        <Dialog
          title="Create project"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 px-5 py-2.5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Project name
                </label>
                <Input
                  {...register("name", {
                    required: "Please enter project name",
                  })}
                  type="text"
                  placeholder="Project name"
                  error={errors.name ? true : false}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Project description
                </label>
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
                Create project
              </Button>
            </div>
          </Form>
        </Dialog>
      )}
    </>
  );
};
