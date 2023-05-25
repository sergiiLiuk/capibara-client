import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { NavigationItems } from "../../routing/navigation-items";
import { BottomNavigationItems } from "../../routing/bottom-navigation-items";
import { AuthContext } from "../../context/auth-context";
import { CgClose } from "react-icons/cg";
import { SidebarLink } from "./sidebar/sidebar-link";
import { BiLogOutCircle } from "react-icons/bi";

type Props = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

export default function MobileMenu({ nav, setNav }: Props) {
  const navLinks = NavigationItems();
  const bottomNavLinks = BottomNavigationItems();

  const { logout } = useContext(AuthContext);

  return (
    <nav
      className={`h-[100vh] fixed top-[0px] flex flex-col items-center w-full p-4 md:hidden bg-cyan-800 text-white z-40 duration-700 ${
        nav ? "left-[0px]" : "left-[-1000px]"
      }`}
    >
      <div className="flex w-full justify-end">
        <CgClose className="text-2xl" onClick={() => setNav(!nav)}></CgClose>
      </div>
      <div className="flex flex-col gap-2 mt-8 mb-4">
        {navLinks.map((link) => {
          return (
            <SidebarLink
              key={link.key}
              item={link}
              onClick={() => setNav(!nav)}
            />
          );
        })}
      </div>
      <div className="border-t border-nautral-700 h-1 w-full" />
      <div className="flex flex-col gap-0.5 mt-4">
        {bottomNavLinks.map((link) => (
          <SidebarLink
            key={link.key}
            item={link}
            onClick={() => setNav(!nav)}
          />
        ))}

        <div
          className="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-ubderline h-10"
          onClick={() => {
            logout();
          }}
        >
          <BiLogOutCircle />

          <span className="ml-2">Logout</span>
        </div>
      </div>
    </nav>
  );
}
