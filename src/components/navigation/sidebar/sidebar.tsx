import classNames from "classnames";
import React, { useContext } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { Fa500Px } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/auth-context";
import { BottomNavigationItems } from "../../../routing/bottom-navigation-items";
import { NavigationItems } from "../../../routing/navigation-items";
import { SidebarLink } from "./sidebar-link";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline h-10";

export default function Sidebar() {
  const navLinks = NavigationItems();
  const bottomNavLinks = BottomNavigationItems();
  const { logout, role } = useContext(AuthContext);
  const filteredBottomNavLinks = bottomNavLinks.filter(
    (link) => link.access === role
  );

  return (
    <div
      className={`hidden relative md:flex flex-col w-60 p-3 text-white bg-cyan-800`}
    >
      <div className=" px-1 py-3">
        <Link to="/">
          <div
            className={classNames(
              !open && "justify-center",
              "flex items-center  gap-2"
            )}
          >
            <Fa500Px fontSize="25px" />
            <span> Capibara</span>
          </div>
        </Link>
      </div>
      <div className=" flex-1 flex flex-col overflow-auto">
        <div className="flex-1 flex flex-col py-8 gap-0.5 overflow-auto min-h-0">
          {navLinks.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-nautral-700">
          {filteredBottomNavLinks.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))}

          <div
            onClick={() => {
              logout();
            }}
            className={classNames(
              `cursor-pointer ${!open && "justify-center"}`,
              linkClasses
            )}
          >
            <BiLogOutCircle />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
