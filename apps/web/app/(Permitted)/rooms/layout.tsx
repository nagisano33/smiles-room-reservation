import { RoomSelect } from "./_components/RoomSelect";

export default function RoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-2xl">Rooms</h2>
      <RoomSelect />
      {children}
    </>
  );
}
