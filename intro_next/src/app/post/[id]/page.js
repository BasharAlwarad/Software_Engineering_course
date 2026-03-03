export default async function Post({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <main className="p-4 space-y-4">
      <div className="border p-2 rounded">
        <h2 className="font-semibold">Post: {id}</h2>
      </div>
    </main>
  );
}
