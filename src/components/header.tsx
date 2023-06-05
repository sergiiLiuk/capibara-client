import React, { Dispatch, SetStateAction } from "react";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "./link";
import { Popover } from "./popover";

type Props = {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
};

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
        <Popover icon={<BiUser className="text-white" />}>
          <div className="flex flex-col bg-white shadow-mdring-1 ring-black ring-opacity-5 px-2 py-2.5">
            <Link to={"/profile"}>Profile</Link>
          </div>
        </Popover>
      </div>
    </div>
  );
}
