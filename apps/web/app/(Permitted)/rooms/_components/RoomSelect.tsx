"use client";

import { Select } from "@repo/ui/Form/Select";
import { useRouter } from "next/navigation";

/**
 * @todo fetch rooms from the server
 */
const rooms = [
  { id: "123", name: "room 123" },
  { id: "abc", name: "room abc" },
  { id: "def", name: "room def" },
];

export function RoomSelect() {
  const router = useRouter();

  return (
    <Select
      defaultValue=""
      values={rooms}
      onChange={(value) => router.push(`/rooms/${value}`)}
    />
  );
}
