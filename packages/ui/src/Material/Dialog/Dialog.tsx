"use client";

import type { PropsWithChildren } from "react";
import { Dialog as CnDialog } from "@/components/ui/dialog.js";

export type DialogProps = {
  /**
   * whether the dialog is open or not
   */
  open: boolean;

  /**
   * A callback function that is called when the dialog opens or closes
   * @param {boolean} open A new state of the dialog
   */
  onOpenChange?: (open: boolean) => void;
};

export function Dialog({
  open,
  onOpenChange,
  children,
}: PropsWithChildren<DialogProps>) {
  return (
    <CnDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {children}
    </CnDialog>
  );
}
