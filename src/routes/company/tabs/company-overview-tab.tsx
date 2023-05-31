import React from "react";
import { Company } from "../../../gql/graphql";
import { PageContainer } from "../../../components/page-container";

type Props = {
  company: Company;
};

export default function CompanyOverviewTab({ company }: Props) {
  return (
    <PageContainer>Company overview tab: name - {company?.name} </PageContainer>
  );
}
