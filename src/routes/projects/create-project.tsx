import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import { AuthContext } from "../../context/auth-context";
import { useMutation } from "@apollo/client";
import { Project } from "../../gql/graphql";
import { CREATE_PROJECT } from "../../graphql/mutations";
import { GET_PROJECTS_QUERY } from "../../graphql/queries";

type FormValues = {
  name: string;
  description?: string;
};

interface CreateProjectVariables {
  name: string;
  description?: string;
  userId: string;
}

const defaultVaues = {
  name: "",
  description: "",
};

export const CreateProject = () => {
  const [dialog, setDialog] = useState<boolean>(false);

  const { userId } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({ defaultValues: defaultVaues });

  useEffect(() => {
    if (!dialog) reset(defaultVaues);
  }, [dialog]);

  const [createProject] = useMutation<
    { createProject: Project },
    CreateProjectVariables
  >(CREATE_PROJECT, {
    onError: (error) => console.error(error.message),
    update: (cache, { data }) => {
      const currentProjects = cache.readQuery<{ projects: Project[] }>({
        query: GET_PROJECTS_QUERY,
      });

      cache.writeQuery({
        query: GET_PROJECTS_QUERY,
        data: {
          projects: [...currentProjects?.projects!, { ...data?.createProject }],
        },
      });
    },
  });

  const onSubmit = ({ name, description }: FormValues) => {
    createProject({
      variables: {
        userId: userId!,
        name: name,
        description: description,
      },
    });
    setDialog(false);
  };

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
                <Label>Project name</Label>
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
                Create project
              </Button>
            </div>
          </Form>
        </Dialog>
      )}
    </>
  );
};
