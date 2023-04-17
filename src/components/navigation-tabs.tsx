import React from "react";
import { NavLink, useLocation, useResolvedPath } from "react-router-dom";

export type LinkTabPanelItem = {
  label: string;
  icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  path: string;
  disabled?: boolean;
};

type Props<T extends LinkTabPanelItem> = {
  items: T[] | undefined;
  className?: string;
};

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
};
function NavigationLink({ path, children }: NavLinkProps) {
  const location = useLocation();
  const resolvedPath = useResolvedPath(path);
  let isActive = resolvedPath.pathname === location.pathname;

  return (
    <NavLink to={path}>
      <button
        style={{
          padding: "5px 10px",
          background: isActive ? "blue" : undefined,
          color: isActive ? "white" : undefined,
        }}
      >
        {children}
      </button>
    </NavLink>
  );
}

export function NavigationTabs<T extends LinkTabPanelItem>(props: Props<T>) {
  return (
    <div className="flex">
      {props.items?.map((item, idx) => {
        const { icon, label, path, disabled } = item;
        return (
          <NavigationLink key={idx} path={path}>
            {label}
          </NavigationLink>
        );
      })}
    </div>
  );
}
