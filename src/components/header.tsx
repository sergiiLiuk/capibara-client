import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Popover, Transition, Menu } from "@headlessui/react";
import { BsBell } from "react-icons/bs";
import React, { Fragment } from "react";

export default function Header() {
  return (
    <div className="bg-cyan-800 h-16 pr-4 flex justify-between items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none active-none h-10 w-[24rem] border border-grey-300 rounded-sm px-4"
        />
      </div>
      <div className="flex items-center mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={
                  "inline-flex items-center text-grey-700 hover:text-opacity-100 focus:outline-none active:bg-grey-100"
                }
              >
                <BsBell className="text-white" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className={"absolute right-0 z-10 mt-2.5 w-80"}>
                  <div className="bg-white rounded-sm shadow-mdring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    Notifications panel
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
