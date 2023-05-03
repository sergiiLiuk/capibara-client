import React from "react";
import { Company } from "../../../gql/graphql";

type Props = {
  data: any;
};

export default function CompanyOverviewTab({ data }: Props) {
  const company: Company = data.data.company;
  console.log("I: ", company);

  return <div> Company overview tab: name - {company?.name} </div>;
}
