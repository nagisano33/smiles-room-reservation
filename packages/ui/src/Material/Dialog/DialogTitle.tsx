import type { PropsWithChildren } from "react";
import { DialogTitle as CnDialogTitle } from "@/components/ui/dialog.js";

type DialogTitleProps = {
  /**
   * show divider or not
   */
  divider?: boolean;
};

export function DialogTitle({
  divider,
  children,
}: PropsWithChildren<DialogTitleProps>) {
  return (
    <CnDialogTitle>
      <div className="font-bold text-2xl p-4">{children}</div>
      {divider && <hr className="mb-4" />}
    </CnDialogTitle>
  );
}
