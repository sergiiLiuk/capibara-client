import React, { useContext } from "react";
import { NavigationItems } from "../../routing/navigation-items";
import { BottomNavigationItems } from "../../routing/bottom-navigation-items";
import { AuthContext } from "../../context/auth-context";

export default function MobileMenu() {
  const navLinks = NavigationItems();
  const bottomNavLinks = BottomNavigationItems();

  const { logout } = useContext(AuthContext);

  return (
    <div
      className={`flex relative md:hidden flex-col p-3 text-white bg-cyan-800`}
    >
      Mobile menu
    </div>
  );
}
