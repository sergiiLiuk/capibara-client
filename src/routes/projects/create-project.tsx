import React, { useState } from "react";
import { Dialog } from "../../components/dialog";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { useForm } from "react-hook-form";
import { useCreateProject } from "./project.api";

type FormValues = {
  name: string;
  description?: string;
};

export const CreateProject = () => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { createProject } = useCreateProject();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

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
      <Button onClick={() => setDialog(true)}>Create project</Button>
      {dialog && (
        <Dialog
          title="Create project"
          onClose={() => setDialog(false)}
          closeOnClickOutside
          closeOnEsc
        >
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 px-5 py-2.5">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Project name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Project name"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Project description
                  </label>
                  <input
                    {...register("description")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Project description"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-x-1 px-5 py-2.5 border-t-2 border-grey-300">
                <Button onClick={() => setDialog(false)}>Cancel</Button>
                <Button type="submit">Create project</Button>
              </div>
            </Form>
          </div>
        </Dialog>
      )}
    </>
  );
};
