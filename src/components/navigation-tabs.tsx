import { Tab } from "@headlessui/react";
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
  icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
};
function NavigationLink({ path, children, icon }: NavLinkProps) {
  const location = useLocation();
  const resolvedPath = useResolvedPath(path);
  let isActive = resolvedPath.pathname === location.pathname;

  return (
    <Tab className="focus:outline-none">
      <NavLink
        className={`${isActive && "bg-cyan-800 text-white"} py-1 px-4`}
        to={path}
      >
        {children}
      </NavLink>
    </Tab>
  );
}

export function NavigationTabs<T extends LinkTabPanelItem>(props: Props<T>) {
  return (
    <Tab.Group>
      <Tab.List className="flex px-6">
        {props.items?.map((item, idx) => {
          const { icon, label, path, disabled } = item;
          return (
            <NavigationLink key={idx} path={path} icon={icon}>
              {label}
            </NavigationLink>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}
