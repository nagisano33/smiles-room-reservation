import { DialogDescription } from "@/components/ui/dialog.js";

export function Description({ children }: React.PropsWithChildren<unknown>) {
  return <DialogDescription>{children}</DialogDescription>;
}
