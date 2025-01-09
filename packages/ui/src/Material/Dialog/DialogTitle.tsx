import type { PropsWithChildren } from "react";
import { DialogTitle as CnDialogTitle } from "@/components/ui/dialog.js";

export function DialogTitle({ children }: PropsWithChildren<unknown>) {
  return (
    <CnDialogTitle>
      <div className="font-bold text-2xl p-4">{children}</div>
      <hr className="mb-4" />
    </CnDialogTitle>
  );
}
