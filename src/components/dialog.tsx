import React, { Fragment, useEffect, useRef } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
// import { Dialog, Transition } from '@headlessui/react';

type Props = {
  title?: React.ReactNode;
  onClose?: () => void;
  children?: React.ReactNode;
  autoFocus?: boolean;
  closeOnEsc?: boolean;
  closeOnClickOutside?: boolean;
};

export const Dialog = ({
  title,
  onClose,
  children,
  autoFocus,
  closeOnEsc,
  closeOnClickOutside,
}: Props) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!dialogRef.current) return;
    if (autoFocus) dialogRef.current.focus();
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex flex-col justify-center items-center bg-modal p-4"
      onClick={
        closeOnClickOutside && onClose
          ? (e) => {
              if (e.target === e.currentTarget) onClose();
            }
          : undefined
      }
    >
      <div
        className="w-full md:max-w-lg bg-white shadow-md flex flex-col overflow-hidden"
        ref={dialogRef}
        tabIndex={-1}
        onKeyDown={
          !(onClose && closeOnEsc)
            ? undefined
            : (e) => {
                if (e.key === "Escape") onClose();
              }
        }
      >
        <div className="flex items-center px-5 py-2.5 border-b-2 border-grey-300">
          {title}
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
