import { RoomSelect } from "../_components/RoomSelect";
import { TimeTable } from "./_components/TimeTable";

type Params = {
  params: Promise<{ id?: string }>;
};

async function fetchRooms() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return [
    { id: "123", name: "room 123" },
    { id: "abc", name: "room abc" },
    { id: "def", name: "room def" },
  ];
}

export default async function Room({ params }: Params) {
  const { id } = await params;

  const rooms = await fetchRooms();

  return (
    <>
      <RoomSelect defaultValue={id}>
          {rooms.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </RoomSelect>
      <h2 className="text-2xl">Room (ID: {id})</h2>
      <TimeTable />
    </>
  );
}
