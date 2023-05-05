import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

type Props = {
  title: string;
};

export const Modal = ({ title }: Props) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
      </Dialog.Panel>
    </Dialog>
  );
};
