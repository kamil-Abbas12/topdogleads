type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: Props) {
  const params = await searchParams;
  const session_id = params?.session_id;

  return (
    <main className="max-w-xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">✅ Payment Successful</h1>

      {/* {session_id ? (
        <p className="text-gray-600">
          Your Stripe Session ID:
          <br />
          <span className="font-mono text-sm text-blue-600">
            {session_id}
          </span>
        </p>
      ) : (
        <p className="text-red-500">No session ID found</p>
      )} */}
    </main>
  );
}