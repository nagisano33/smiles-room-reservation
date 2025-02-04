import { RoomSelect } from "./_components/RoomSelect";

/**
 * @todo fetch rooms from the server
 */
async function fetchRooms() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { id: "123", name: "room 123" },
    { id: "abc", name: "room abc" },
    { id: "def", name: "room def" },
  ];
}

export default async function RoomsLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ id?: string }>;
  children: React.ReactNode;
}>) {
  const { id } = await params;
  const rooms = await fetchRooms();

  console.log(id)

  return (
    <>
      <h2 className="text-2xl">Rooms</h2>
      <RoomSelect defaultValue={id}>
        <>
          {rooms.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </>
      </RoomSelect>
      {children}
    </>
  );
}
