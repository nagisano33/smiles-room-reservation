"use client";

import type { PropsWithChildren } from "react";
import { DialogBackdrop, Dialog as HeadlessUIDialog } from "@headlessui/react";

export type DialogProps = {
  open: boolean;
  onClose: () => void;
};

export function Dialog({
  open,
  onClose,
  children,
}: PropsWithChildren<DialogProps>) {
  return (
    <HeadlessUIDialog
      open={open}
      onClose={onClose}
      className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      transition
    >
      <DialogBackdrop className="fixed inset-0 bg-black/50" />
      {children}
    </HeadlessUIDialog>
  );
}
