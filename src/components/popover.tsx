import { Popover as STPopover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "./link";

type Props = {
  icon: JSX.Element;
  items: any;
};

export const Popover = ({ icon, items }: Props) => {
  return (
    <STPopover className="relative">
      {({ close }) => (
        <>
          <STPopover.Button
            className={
              "inline-flex items-center text-grey-700 hover:text-opacity-100 focus:outline-none active:bg-grey-100"
            }
          >
            {icon}
          </STPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <STPopover.Panel
              className={
                "absolute right-0 z-10 mt-2.5 w-80 bg-white border border-gray-200 shadow-sm"
              }
            >
              <div className="flex flex-col bg-white shadow-mdring-1 ring-black ring-opacity-5 px-2 py-2.5">
                {items.map((link: any, idx: number) => {
                  return (
                    <Link key={idx} to={link.href} onClick={() => close()}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </STPopover.Panel>
          </Transition>
        </>
      )}
    </STPopover>
  );
};
