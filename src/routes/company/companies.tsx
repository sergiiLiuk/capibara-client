import React from "react";
import { Link } from "react-router-dom";

type Props = {
  data: any;
};

export default function Companies({ data }: Props) {
  return (
    <div>
      <div>Companies:</div>
      <div className="flex flex-col">
        {data.companies.map((record, idx) => {
          return (
            <Link
              to={`${record.id}`}
              className="flex flex-col border-2  p-2"
              key={idx}
            >
              <div>{record.id}</div>
              <div>{record.name}</div>
              <div>{record.cvr}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
