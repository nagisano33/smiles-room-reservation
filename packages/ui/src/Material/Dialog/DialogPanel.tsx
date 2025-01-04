import { DialogPanel as HeadlessUIDialogPanel } from "@headlessui/react";

export function DialogPanel({ children }: React.PropsWithChildren<unknown>) {
  return (
    <HeadlessUIDialogPanel className="w-screen h-[50vh] md:w-[768px] bg-white rounded-md">
      {children}
    </HeadlessUIDialogPanel>
  );
}
