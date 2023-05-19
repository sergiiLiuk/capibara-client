import React from "react";
import { BiUser } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { Input } from "./input";
import { Link } from "./link";
import { Popover } from "./popover";

export default function Header() {
  return (
    <div className="bg-cyan-800 py-4 pr-4 flex justify-between items-center">
      <div className="relative mr-2">
        <Input placeholder="Search" />
      </div>
      <div className="flex gap-2 items-center mr-2">
        <Popover icon={<BsBell className="text-white" />}>
          <div className="bg-white shadow-mdring-1 ring-black ring-opacity-5 px-2 py-2.5">
            Notifications panel
          </div>
        </Popover>
        <Popover icon={<BiUser className="text-white" />}>
          <div className=" flex flex-col bg-white shadow-mdring-1 ring-black ring-opacity-5 px-2 py-2.5">
            <Link to={"/account"}>Account</Link>
            <Link to={"/settings"}>Settings</Link>
          </div>
        </Popover>
      </div>
    </div>
  );
}
