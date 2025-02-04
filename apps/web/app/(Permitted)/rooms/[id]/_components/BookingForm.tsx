"use client";

import { Description } from "@repo/ui/Material/Dialog/Description";
import { Dialog } from "@repo/ui/Material/Dialog/Dialog";
import { DialogTitle } from "@repo/ui/Material/Dialog/DialogTitle";
import { DialogTrigger } from "@repo/ui/Material/Dialog/DialogTrigger";
import { DialogPanel } from "@repo/ui/Material/Dialog/DialogPanel";
import { useState } from "react";
import { Button } from "@repo/ui/Material/button";

export function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <button>Open dialog</button>
      </DialogTrigger>
      {/* Full-screen container to center the panel */}
      <div className="fixed max-md:bottom-0 md:bottom-auto md:top-24 flex w-screen items-center justify-center">
        {/* The actual dialog panel  */}
        <DialogPanel>
          <div className="flex flex-col h-full">
            <DialogTitle>予約</DialogTitle>
            <Description>予約します</Description>
            <p>確認してください</p>
            <div className="flex mt-auto gap-4">
              <Button onClick={() => setIsOpen(false)}>OK</Button>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
