import React from "react";
import { Company } from "../../../gql/graphql";

type Props = {
  company: Company;
};

export default function CompanyOverviewTab({ company }: Props) {
  return <div> Company overview tab: name - {company?.name} </div>;
}
