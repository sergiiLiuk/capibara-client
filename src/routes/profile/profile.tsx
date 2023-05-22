import { useQuery } from "@apollo/client";
import React from "react";
import { PageContainer } from "../../components/page-container";

import { Spinner } from "../../components/spinner";
import { CURRENT_USER_QUERY } from "../../graphql/queries";

export const Profile = () => {
  const { loading: isLoading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (isLoading) return <Spinner />;
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return <PageContainer>IO</PageContainer>;
};
