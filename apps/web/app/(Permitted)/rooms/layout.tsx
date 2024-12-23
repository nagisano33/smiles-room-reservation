"use client";

import { Select } from "@repo/ui/Form/Select";
import { useRouter } from "next/navigation";

const rooms = [
  { id: "123", name: "room 123" },
  { id: "abc", name: "room abc" },
  { id: "def", name: "room def" },
];

export default function RoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <>
      <h2 className="text-2xl">Rooms</h2>
      <Select
        defaultValue=""
        values={rooms}
        onChange={(value) => router.push(`/rooms/${value}`)}
      />
      {children}
    </>
  );
}
