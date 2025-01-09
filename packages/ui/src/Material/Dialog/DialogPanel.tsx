import { DialogContent } from "@/components/ui/dialog.js";


export function DialogPanel({ children }: React.PropsWithChildren<unknown>) {
  return (
    <DialogContent className="w-screen h-[50vh] md:w-[768px] bg-white rounded-md">
      {children}
    </DialogContent>
  );
}
