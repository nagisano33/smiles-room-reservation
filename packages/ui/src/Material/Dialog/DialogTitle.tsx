import type { PropsWithChildren } from "react";
import { DialogTitle as HeadlessUIDialogTitle } from "@headlessui/react";

export function DialogTitle({ children }: PropsWithChildren<unknown>) {
  return (
    <HeadlessUIDialogTitle>
      <div className="font-bold text-2xl p-4">{children}</div>
      <hr className="mb-4" />
    </HeadlessUIDialogTitle>
  );
}
