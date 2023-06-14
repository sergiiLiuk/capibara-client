import React, { Dispatch, SetStateAction, useContext } from "react";
import { BiUser } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import { Popover } from "./popover";
import { AuthContext } from "../context/auth-context";

type Props = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

interface headerLink {
  href: string;
  name: string;
}

const headerLinks: Array<headerLink> = [
  {
    href: "/profile",
    name: "Profile",
  },
];

export default function Header({ nav, setNav }: Props) {
  const { username } = useContext(AuthContext);
  return (
    <div className="bg-cyan-800 py-4 px-4 md:pl-0 flex justify-between items-center">
      <div className="relative mr-2">
        <GiHamburgerMenu
          className="block md:hidden"
          onClick={() => setNav(!nav)}
          color="white"
        />
      </div>
      <div className="flex gap-2 items-center mr-2">
        <div className="flex text-white text-xs">
          <RxDotFilled className="text-green-400 text-lg" />
          {username}
        </div>
        <Popover items={headerLinks} icon={<BiUser className="text-white" />} />
      </div>
    </div>
  );
}
