"use client";

import type { PropsWithChildren } from "react";
import { Dialog as CnDialog } from "@/components/ui/dialog.js";

export type DialogProps = {
  open: boolean;
};

export function Dialog({
  open,
  children,
}: PropsWithChildren<DialogProps>) {
  return (
    <CnDialog
      open={open}
    >
      {children}
    </CnDialog>
  );
}
