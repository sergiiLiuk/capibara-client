import classNames from "classnames";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationItems } from "../routing/navigation-items";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";

export default function Sidebar() {
  const items = NavigationItems();
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div
      className={`relative flex flex-col ${
        open ? "w-60" : "w-14"
      }  p-3 text-white bg-cyan-800 `}
    >
      <div className="flex items-center gap-2 px-1 py-3">
        {open && <Link to="/">Capibara</Link>}
      </div>
      <div className=" flex-1 flex flex-col overflow-auto">
        <BsArrowLeftShort
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-white text-cyan-800 text-3xl rounded-full absolute top-20 -right-3.5 border border-cyan-800 cursor-pointer ${
            !open && "rotate-180"
          }`}
        />
        <div className="flex-1 flex flex-col py-8 gap-0.5 overflow-auto min-h-0">
          {items.map((link) => (
            <div key={link.key}>
              <SidebarLink item={link} open={open}>
                {link.submenu && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"}`}
                    onClick={() => setSubMenuOpen((prevState) => !prevState)}
                  />
                )}
              </SidebarLink>
              {link.submenu &&
                submenuOpen &&
                link.submenuItems.map((subMenuItem) => {
                  return <div key={subMenuItem.key}>{subMenuItem.name}</div>;
                })}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-nautral-700">
          {/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))} */}
          <div className={classNames("cursor-pointer", linkClasses)}>
            {open && <span>Logout</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline";

function SidebarLink({
  item,
  open,
  children,
}: {
  item: any;
  open: boolean;
  children?: React.ReactNode;
}) {
  const { pathname } = useLocation();

  return (
    <Link
      className={classNames(
        pathname === item.path ? "bg-neutral-700 text-blue-400" : "text-white",
        linkClasses
      )}
      {...{
        to: item.route,
        params: item.params,
      }}
    >
      {item.icon}
      {open && <div> {item.name}</div>}
      {children}
    </Link>
  );
}
