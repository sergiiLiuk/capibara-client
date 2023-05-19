import React, { Fragment } from "react";
import { Popover as STPopover, Transition } from "@headlessui/react";
import { IconType } from "react-icons/lib";

type Props = {
  icon: JSX.Element;
  children: React.ReactNode;
};

export const Popover = ({ icon, children }: Props) => {
  return (
    <STPopover className="relative">
      {({ open }) => (
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
            <STPopover.Panel className={"absolute right-0 z-10 mt-2.5 w-80"}>
              {children}
            </STPopover.Panel>
          </Transition>
        </>
      )}
    </STPopover>
  );
};
