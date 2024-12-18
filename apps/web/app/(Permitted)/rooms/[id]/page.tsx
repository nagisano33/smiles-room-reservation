export default async function Room({ params }: { params: { id: string } }) {
  const {id} = await params
  return <h2 className="text-2xl">Room (ID: {id})</h2>;
}
