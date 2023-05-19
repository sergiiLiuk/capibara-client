import classNames from "classnames";
import React, { useContext, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Fa500Px } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import { NavigationItems } from "../../routing/navigation-items";
import { SidebarLink } from "./sidebar-link";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline h-10";

export default function Sidebar() {
  const items = NavigationItems();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`relative flex flex-col ${
        open ? "w-60" : "w-20"
      }  p-3 text-white bg-cyan-800`}
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
            {open && <span> Capibara</span>}
          </div>
        </Link>
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
            <SidebarLink key={link.key} item={link} open={open} />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-nautral-700">
          {/* {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} item={link} />
          ))} */}
          {user && (
            <div
              onClick={() => {
                logout();
                navigate(`/`);
              }}
              className={classNames(
                `cursor-pointer ${!open && "justify-center"}`,
                linkClasses
              )}
            >
              <div>
                <BiLogOutCircle />
              </div>
              {open && <span>Logout</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
