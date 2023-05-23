import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline h-10";

export const SidebarLink = ({ item, open }: { item: any; open: boolean }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={classNames(!open && "justify-center", linkClasses)}
      {...{
        to: item.route,
        params: item.params,
      }}
    >
      <div className={"flex items-center text-white"}>{item.icon}</div>
      {open && <div> {item.name}</div>}
    </Link>
  );
};
