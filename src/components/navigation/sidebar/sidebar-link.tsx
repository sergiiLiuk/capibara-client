import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline h-10";

type Props = {
  item: any;
  open?: boolean;
  onClick?: () => void;
};

export const SidebarLink = ({ item, open = true, onClick }: Props) => {
  const { pathname } = useLocation();

  return (
    <Link
      {...(onClick && { onClick: onClick })}
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
