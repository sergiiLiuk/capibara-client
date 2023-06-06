import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { PageContainer } from "../../components/page-container";
import { AuthContext } from "../../context/auth-context";
import { Spinner } from "../../components/spinner";
import { GET_CURRENT_USER_QUERY } from "../../graphql/queries";
import { User } from "../../gql/graphql";

export const Profile = () => {
  const {
    loading: isLoading,
    error,
    data,
  } = useQuery<{ currentUser: User }>(GET_CURRENT_USER_QUERY);
  const user = data?.currentUser!;
  if (isLoading) return <Spinner />;
  if (error) return <div>{error.message}</div>;

  return (
    <PageContainer>
      <div className="flex flex-col">
        Logged user:
        <div>
          Username: <span>{user.username}</span>
        </div>
        <div>
          Role: <span>{user.role}</span>
        </div>
      </div>
    </PageContainer>
  );
};
