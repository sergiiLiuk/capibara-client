import React, { Dispatch, SetStateAction } from "react";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Popover } from "./popover";

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
        <Popover
          items={headerLinks}
          icon={<BiUser className="text-white" />}
        ></Popover>
      </div>
    </div>
  );
}
