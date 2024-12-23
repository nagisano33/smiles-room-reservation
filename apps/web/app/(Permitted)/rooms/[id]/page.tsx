type Params = {
  params: Promise<{ id?: string }>;
};

export default async function Room({ params }: Params) {
  const { id } = await params;
  return <h2 className="text-2xl">Room (ID: {id})</h2>;
}
