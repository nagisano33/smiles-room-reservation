import { PropsWithChildren } from "react";
import { DialogTrigger as CnDialogTrigger } from "@/components/ui/dialog.js";

export function DialogTrigger({ children }: PropsWithChildren<unknown>) {
  return <CnDialogTrigger asChild>{children}</CnDialogTrigger>;
}
