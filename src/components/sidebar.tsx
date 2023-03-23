import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../routes/routes";
import classNames from "classnames";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 p-3 text-white bg-neutral-900">
      <div className="flex items-center gap-2 px-1 py-3">Capibara</div>
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1 flex flex-col py-8 gap-0.5 overflow-auto min-h-0">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-nautral-700">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))}
          <div className={classNames("cursor-pointer", linkClasses)}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline";

function SidebarLink({ item }: any) {
  const { pathname } = useLocation();

  return (
    <Link
      className={classNames(
        pathname === item.path ? "bg-neutral-700 text-blue-400" : "text-white",
        linkClasses
      )}
      to={item.path}
    >
      {item.label}
    </Link>
  );
}
