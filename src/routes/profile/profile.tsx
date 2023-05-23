import { useQuery } from "@apollo/client";
import React from "react";
import { PageContainer } from "../../components/page-container";

import { Spinner } from "../../components/spinner";
import { GET_CURRENT_USER_QUERY } from "../../graphql/queries";

export const Profile = () => {
  const { loading: isLoading, error, data } = useQuery(GET_CURRENT_USER_QUERY);

  if (isLoading) return <Spinner />;
  if (error) return <div>${error.message}</div>;

  return <PageContainer>IO</PageContainer>;
};
