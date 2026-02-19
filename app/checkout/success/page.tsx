export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const { session_id } = searchParams;

  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold">Payment successful</h1>
      <p className="mt-2 text-gray-600">
        Session: <span className="font-mono">{session_id}</span>
      </p>
    </main>
  );
}