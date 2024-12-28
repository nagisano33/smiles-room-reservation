"use client";

import { Select, type SelectProps } from "@repo/ui/Form/Select";
import { useRouter } from "next/navigation";

type Props = Pick<SelectProps, "defaultValue"> & {
  children: JSX.Element;
};

export function RoomSelect({ defaultValue, children }: Props) {
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
