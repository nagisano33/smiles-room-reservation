"use client";

import type { PropsWithChildren } from "react";
import { Select, type SelectProps } from "@repo/ui/Form/Select";
import { useRouter } from "next/navigation";

type Props = Pick<SelectProps, "defaultValue">;

export function RoomSelect({ defaultValue, children }: PropsWithChildren<Props>) {
  const router = useRouter();

  return (
    <Select
      defaultValue={defaultValue}
      onChange={(value) => router.push(`/rooms/${value}`)}
    >
      {children}
    </Select>
  );
}
