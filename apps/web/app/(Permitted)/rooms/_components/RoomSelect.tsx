"use client";

import { Select } from "@repo/ui/Form/Select";
import { useRouter } from "next/navigation";

type Props = {
  children: JSX.Element;
};

export function RoomSelect({ children }: Props) {
  const router = useRouter();

  return (
    <Select
      defaultValue=""
      onChange={(value) => router.push(`/rooms/${value}`)}
    >
      {children}
    </Select>
  );
}
